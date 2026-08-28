import { NextResponse } from "next/server";

import {
  emailConfigured,
  sendCustomerConfirmation,
  sendTeamNotification,
} from "@/lib/email";
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

// Best-effort throttle. Serverless instances don't share memory, so this
// thins out a naive flood rather than stopping a determined one — the real
// fix is the Turnstile token CLAUDE.md §2 already specifies, which needs a
// Cloudflare site key we don't have yet.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
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
  const wantsConfirmation = isSendableEmail(customerEmail);

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
