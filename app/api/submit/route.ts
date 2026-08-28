import { NextResponse } from "next/server";

import {
  emailConfigured,
  sendCustomerConfirmation,
  sendTeamNotification,
} from "@/lib/email";
import { DOMAIN } from "@/lib/config";
import { LOCALES, type Locale } from "@/lib/i18n";
import {
  FORM_KINDS,
  MAX_VALUE_LENGTH,
  isFieldKey,
  isSendableEmail,
  type FormKind,
  type SubmissionField,
} from "@/lib/submission";

// The only server-rendered route on the site; every page stays static.
export const dynamic = "force-dynamic";

const MAX_FIELDS = 20;
const MAX_BODY_BYTES = 16_000;

/**
 * Same-origin enforcement, done in the handler rather than in middleware.ts.
 *
 * This is the endpoint's main defence now that Turnstile is off the table.
 * Per the Fetch standard a browser always sets `Origin` on a POST — same-origin
 * included — so requiring it costs real visitors nothing while blocking the
 * scripted `curl` abuse the audit demonstrated. It is not a cure: a determined
 * attacker forges the header. It raises the floor, and the payload channel is
 * already closed (the confirmation echoes no caller-supplied prose), so what
 * remains reachable is a fixed branded notice, not an attacker's message.
 */
/**
 * The origin this request actually arrived at. Deriving it from the request
 * itself — rather than pinning it to DOMAIN — is what keeps the check from
 * becoming a footgun: it self-configures across localhost, Vercel preview
 * URLs, the current deployment host, and the client's real domain the day DNS
 * cuts over. Pinning it to a constant means one stale value 403s every genuine
 * lead, which is far more expensive than the abuse this is stopping.
 */
function requestOrigin(request: Request): string | null {
  const host =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (!host) return null;
  const proto =
    request.headers.get("x-forwarded-proto") ??
    (/^(localhost|127\.0\.0\.1)(:|$)/.test(host) ? "http" : "https");
  return `${proto}://${host}`;
}

function allowedOrigins(request: Request): string[] {
  return [
    requestOrigin(request),
    `https://${DOMAIN}`,
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null,
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : null,
    ...(process.env.ALLOWED_ORIGINS ?? "")
      .split(",")
      .map((o) => o.trim())
      .filter(Boolean),
  ].filter(Boolean) as string[];
}

function sameOrigin(request: Request): boolean {
  const allowed = allowedOrigins(request);
  const origin = request.headers.get("origin");
  if (origin) return allowed.includes(origin);

  // Some privacy tools strip Origin but keep Referer. Fall back to its origin
  // rather than rejecting a visitor who did nothing wrong.
  const referer = request.headers.get("referer");
  if (referer) {
    try {
      return allowed.includes(new URL(referer).origin);
    } catch {
      return false;
    }
  }
  return false;
}

/**
 * Two-keyed throttle: per client IP, and per destination address so a single
 * mailbox cannot be bombed from rotating IPs. Serverless instances do not share
 * memory, so this thins a flood rather than stopping one — it is defence in
 * depth behind the origin check, not a substitute for it.
 */
// Deliberately loose. This is a backstop against a flood, not the primary
// control — the origin check is. Set too tight it drops real leads: French
// mobile carriers use CGNAT, so strangers share an egress IP, and a dropped
// emergency call-out costs far more than a few surplus notification emails.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 15;
const RECIPIENT_WINDOW_MS = 3_600_000;
const RECIPIENT_MAX = 3;
const MAX_TRACKED_KEYS = 5000;

const hits = new Map<string, number[]>();

function tooMany(key: string, windowMs: number, max: number): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);

  // Evict only what has actually expired. The previous hits.clear() let an
  // attacker reset every counter on demand just by rotating keys.
  if (hits.size > MAX_TRACKED_KEYS) {
    for (const [k, times] of hits) {
      const live = times.filter(
        (t) => now - t < Math.max(windowMs, RECIPIENT_WINDOW_MS),
      );
      if (live.length === 0) hits.delete(k);
      else hits.set(k, live);
    }
  }
  return recent.length > max;
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return NextResponse.json(
      { ok: false, error: "bad_origin" },
      { status: 403 },
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (tooMany(`ip:${ip}`, RATE_LIMIT_WINDOW_MS, RATE_LIMIT_MAX)) {
    return NextResponse.json(
      { ok: false, error: "rate_limited" },
      { status: 429 },
    );
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json(
      { ok: false, error: "too_large" },
      { status: 413 },
    );
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  const payload = body as {
    kind?: string;
    locale?: string;
    fields?: unknown;
    page?: string;
    company_website?: string; // honeypot
  };

  // Honeypot: a hidden field no human ever fills. Answer 200 so a bot can't
  // tell it was caught and retry with the field cleared.
  if (payload.company_website) {
    return NextResponse.json({ ok: true, skipped: "honeypot" });
  }

  const kind = FORM_KINDS.includes(payload.kind as FormKind)
    ? (payload.kind as FormKind)
    : null;
  const locale = LOCALES.includes(payload.locale as Locale)
    ? (payload.locale as Locale)
    : null;
  if (!kind || !locale || !Array.isArray(payload.fields)) {
    return NextResponse.json(
      { ok: false, error: "bad_request" },
      { status: 400 },
    );
  }

  const fields: SubmissionField[] = [];
  for (const entry of payload.fields.slice(0, MAX_FIELDS)) {
    const { key, value } = (entry ?? {}) as { key?: unknown; value?: unknown };
    if (typeof key !== "string" || typeof value !== "string") continue;
    if (!isFieldKey(key)) continue;
    const trimmed = value.trim().slice(0, MAX_VALUE_LENGTH);
    if (trimmed) fields.push({ key, value: trimmed });
  }

  if (fields.length === 0) {
    return NextResponse.json({ ok: false, error: "empty" }, { status: 400 });
  }

  if (!emailConfigured()) {
    // The form still works — WhatsApp is the transport and it already fired
    // client-side. Say so rather than reporting a success we didn't have.
    console.error("[submit] RESEND_API_KEY is not set; no mail sent");
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 503 },
    );
  }

  const meta = {
    page:
      typeof payload.page === "string" ? payload.page.slice(0, 200) : undefined,
    userAgent: request.headers.get("user-agent")?.slice(0, 200) ?? undefined,
    receivedAt: new Date().toISOString(),
  };

  const customerEmail = fields.find((f) => f.key === "email")?.value;
  // The team notification goes to fixed recipients and is never throttled —
  // losing a real lead to a rate limit would be worse than the abuse. Only the
  // caller-addressed confirmation is capped per mailbox.
  const wantsConfirmation =
    isSendableEmail(customerEmail) &&
    !tooMany(
      `to:${customerEmail.toLowerCase()}`,
      RECIPIENT_WINDOW_MS,
      RECIPIENT_MAX,
    );

  // Sequential, and the confirmation is GATED on the team send succeeding.
  // The confirmation promises "a locksmith will call you back"; sending that
  // when nobody at the business received the lead leaves someone waiting at a
  // locked door for a call that never comes. A lead with no promise is
  // recoverable; a promise with no lead is not.
  const team = await sendTeamNotification({
    lang: locale,
    kind,
    fields,
    meta,
  }).catch((error) => ({ ok: false, error: String(error) }));
  const teamOk = team.ok;

  if (!teamOk) {
    console.error("[submit] team notification failed:", team);
  }

  let confirmationOk = false;
  if (teamOk && wantsConfirmation) {
    const confirmation = await sendCustomerConfirmation({
      to: customerEmail,
      lang: locale,
      kind,
      fields,
    }).catch((error) => ({ ok: false, error: String(error) }));
    confirmationOk = confirmation.ok;
    if (!confirmationOk) {
      console.error("[submit] customer confirmation failed:", confirmation);
    }
  }

  return NextResponse.json(
    {
      ok: teamOk,
      notified: teamOk,
      confirmed: wantsConfirmation && confirmationOk,
    },
    { status: teamOk ? 200 : 502 },
  );
}
