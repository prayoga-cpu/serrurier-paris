import "server-only";

import { BRAND_NAME, EMAIL, PHONE_DISPLAY, DOMAIN } from "@/lib/config";
import type { Locale } from "@/lib/i18n";
import {
  fieldLabels,
  formHeader,
  isSendableEmail,
  type FormKind,
  type SubmissionField,
} from "@/lib/submission";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

/**
 * The envelope sender. It must be a domain verified in the Resend account, and
 * today that is `prionation.io` only — `parisunlockdoor.fr` is not yet added
 * there (its DNS cutover is still off-repo, CLAUDE.md §0 B2). So mail goes out
 * with the client's brand as the display name over PRIONATION's verified
 * domain, which authenticates cleanly today. Once parisunlockdoor.fr is
 * verified in Resend, set MAIL_FROM and nothing else changes.
 */
const MAIL_FROM =
  process.env.MAIL_FROM ?? `${BRAND_NAME} <devis@prionation.io>`;

/** Every submission is notified here. Comma-separated, overridable per env. */
const TEAM_RECIPIENTS = (
  process.env.MAIL_TEAM_RECIPIENTS ?? `consult@prionation.io,${EMAIL}`
)
  .split(",")
  .map((address) => address.trim())
  .filter(Boolean);

export function emailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

/** User input goes into an HTML email body — escape before it does. */
/** Header-safe: no CR/LF, bounded length. */
function header(value: string): string {
  return value
    .replace(/[\r\n]+/g, " ")
    .trim()
    .slice(0, 180);
}

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type SendResult = { ok: true; id: string } | { ok: false; error: string };

async function send(payload: Record<string, unknown>): Promise<SendResult> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false, error: "RESEND_API_KEY is not set" };

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });
    const body = (await response.json().catch(() => ({}))) as {
      id?: string;
      message?: string;
    };
    if (!response.ok) {
      return {
        ok: false,
        error: body.message ?? `Resend responded ${response.status}`,
      };
    }
    return { ok: true, id: body.id ?? "" };
  } catch (error) {
    return { ok: false, error: (error as Error).message };
  }
}

// --- Shared chrome -----------------------------------------------------------

const WRAP = (inner: string) => `
<div style="margin:0;padding:24px;background:#f5f3ef;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#1a1a1a;">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;padding:32px;">
    ${inner}
  </div>
  <p style="max-width:560px;margin:16px auto 0;font-size:12px;line-height:1.6;color:#6b6b6b;text-align:center;">
    ${esc(BRAND_NAME)} · ${esc(PHONE_DISPLAY)} · ${esc(EMAIL)}<br>https://${esc(DOMAIN)}
  </p>
</div>`;

function detailRows(lang: Locale, fields: SubmissionField[]): string {
  const labels = fieldLabels(lang);
  return fields
    .map(
      (f) => `
      <tr>
        <td style="padding:8px 12px 8px 0;font-size:13px;color:#6b6b6b;vertical-align:top;white-space:nowrap;">${esc(labels[f.key])}</td>
        <td style="padding:8px 0;font-size:14px;color:#1a1a1a;vertical-align:top;">${esc(f.value)}</td>
      </tr>`,
    )
    .join("");
}

function plainText(
  lang: Locale,
  kind: FormKind,
  fields: SubmissionField[],
): string {
  const labels = fieldLabels(lang);
  return [
    formHeader(lang, kind),
    "",
    ...fields.map((f) => `${labels[f.key]}: ${f.value}`),
  ].join("\n");
}

// --- Customer confirmation ---------------------------------------------------

/**
 * Copy for the two emails lives here rather than in lib/i18n.ts on purpose:
 * lib/i18n.ts is imported by client components and ships to the browser, and
 * there is no reason for email HTML to travel to a visitor's device.
 */
const CONFIRMATION = {
  fr: {
    subject: `Votre demande a bien été reçue — ${BRAND_NAME}`,
    title: "Votre demande est bien arrivée.",
    body: `Merci, nous avons bien reçu votre demande. Un serrurier vous rappelle pour confirmer le rendez-vous et le montant avant toute intervention.`,
    urgent: `Vous êtes bloqué dehors maintenant ? N'attendez pas ce rappel : appelez le ${PHONE_DISPLAY}.`,
    recap: "Récapitulatif de votre demande",
    promise:
      "Le montant vous est annoncé avant le déplacement. Pas de supplément découvert sur place.",
    signoff: "À très vite,",
  },
  en: {
    subject: `We've received your request — ${BRAND_NAME}`,
    title: "Your request has arrived.",
    body: `Thank you — we've received your request. A locksmith will call you back to confirm the appointment and the price before any work starts.`,
    urgent: `Locked out right now? Don't wait for that call back — ring ${PHONE_DISPLAY}.`,
    recap: "Your request",
    promise:
      "The price is agreed before we travel. No surprise supplement once we're at your door.",
    signoff: "Speak soon,",
  },
} as const;

/**
 * Fields the customer confirmation is allowed to echo back.
 *
 * Deliberately excludes every free-prose field (name, address, message, need).
 * `/api/submit` is public and the confirmation goes to a caller-supplied
 * address, so anything echoed here is content an attacker chooses, delivered
 * to a recipient an attacker chooses, over a DKIM-aligned domain shared with
 * PRIONATION's other clients. Restricting the recap to short structured values
 * removes the payload channel while keeping the email useful: the visitor
 * still sees which job, which postcode and which slot they asked for.
 */
const CONFIRMATION_FIELDS = [
  "service",
  "option",
  "postal",
  "booking_date",
  "booking_slot",
];

export async function sendCustomerConfirmation({
  to,
  lang,
  kind,
  fields,
}: {
  to: string;
  lang: Locale;
  kind: FormKind;
  fields: SubmissionField[];
}): Promise<SendResult> {
  const t = CONFIRMATION[lang];
  const recap = fields.filter((f) => CONFIRMATION_FIELDS.includes(f.key));

  const html = WRAP(`
    <h1 style="margin:0 0 16px;font-size:22px;font-weight:800;line-height:1.3;">${esc(t.title)}</h1>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#3d3d3d;">${esc(t.body)}</p>
    <p style="margin:0 0 24px;font-size:15px;line-height:1.65;color:#3d3d3d;">
      ${esc(t.urgent.split(PHONE_DISPLAY)[0])}<a href="tel:${esc(PHONE_DISPLAY.replace(/\s/g, ""))}" style="color:#c8501e;font-weight:700;text-decoration:none;">${esc(PHONE_DISPLAY)}</a>${esc(t.urgent.split(PHONE_DISPLAY)[1] ?? "")}
    </p>
    <div style="border-top:1px solid #e6e2db;padding-top:20px;">
      <p style="margin:0 0 10px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#6b6b6b;">${esc(t.recap)}</p>
      <table style="width:100%;border-collapse:collapse;">${detailRows(lang, recap)}</table>
    </div>
    <p style="margin:24px 0 0;padding:14px 16px;background:#f5f3ef;border-radius:10px;font-size:13px;line-height:1.6;color:#3d3d3d;">${esc(t.promise)}</p>
    <p style="margin:24px 0 0;font-size:15px;color:#3d3d3d;">${esc(t.signoff)}<br><strong>${esc(BRAND_NAME)}</strong></p>
  `);

  return send({
    from: MAIL_FROM,
    to: [to],
    reply_to: EMAIL,
    subject: t.subject,
    html,
    text: `${t.title}\n\n${t.body}\n\n${t.urgent}\n\n${t.recap}\n${plainText(lang, kind, recap)}\n\n${t.promise}\n\n${t.signoff}\n${BRAND_NAME}`,
  });
}

// --- Team notification -------------------------------------------------------

const KIND_TAG: Record<FormKind, string> = {
  quote: "Devis",
  contact: "Contact",
  pro: "Pro / B2B",
};

export async function sendTeamNotification({
  lang,
  kind,
  fields,
  meta,
}: {
  lang: Locale;
  kind: FormKind;
  fields: SubmissionField[];
  meta: { page?: string; userAgent?: string; receivedAt: string };
}): Promise<SendResult> {
  const summary =
    fields.find((f) => f.key === "name")?.value ??
    fields.find((f) => f.key === "company")?.value ??
    fields.find((f) => f.key === "phone")?.value ??
    "—";
  // Guarded: Resend 422s the entire send on a malformed reply_to, so a
  // visitor mistyping their address would otherwise cost us the lead — the
  // one failure this whole endpoint exists to prevent.
  const customerEmail = fields.find((f) => f.key === "email")?.value;
  const replyTo = isSendableEmail(customerEmail) ? customerEmail : undefined;

  const html = WRAP(`
    <p style="margin:0 0 6px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#c8501e;">${esc(KIND_TAG[kind])} · ${esc(lang.toUpperCase())}</p>
    <h1 style="margin:0 0 20px;font-size:22px;font-weight:800;line-height:1.3;">${esc(summary)}</h1>
    <table style="width:100%;border-collapse:collapse;">${detailRows(lang, fields)}</table>
    <p style="margin:24px 0 0;padding-top:16px;border-top:1px solid #e6e2db;font-size:12px;line-height:1.6;color:#6b6b6b;">
      ${esc(meta.receivedAt)}${meta.page ? ` · ${esc(meta.page)}` : ""}<br>${esc(meta.userAgent ?? "")}
    </p>
  `);

  return send({
    from: MAIL_FROM,
    to: TEAM_RECIPIENTS,
    // Replying to the notification reaches the customer directly, not us.
    ...(replyTo ? { reply_to: replyTo } : {}),
    subject: header(`[${KIND_TAG[kind]}] ${summary}`),
    html,
    text: `${KIND_TAG[kind]} (${lang})\n\n${plainText(lang, kind, fields)}\n\n${meta.receivedAt}${meta.page ? ` · ${meta.page}` : ""}`,
  });
}
