import { getDictionary, type Locale } from "@/lib/i18n";

export type FormKind = "quote" | "contact" | "pro";

export const FORM_KINDS: readonly FormKind[] = ["quote", "contact", "pro"];

/**
 * Every field name the forms are allowed to submit, in the order it should be
 * read. This is an allowlist, not documentation: `/api/submit` is a public
 * endpoint, and anything arriving under a key that isn't here is dropped
 * rather than echoed into an email. That stops the notification from being
 * used as a channel for content we never designed a field for.
 */
export const FIELD_KEYS = [
  "service",
  "option",
  "postal",
  "booking_date",
  "booking_slot",
  "name",
  "phone",
  "email",
  "address",
  "message",
  "company",
  "role",
  "sites",
  "need",
] as const;

export type FieldKey = (typeof FIELD_KEYS)[number];

export const MAX_VALUE_LENGTH = 2000;

/** Deliberately loose — this only decides whether an address is safe to hand
 *  to Resend as a `to`/`reply_to`. Resend rejects the whole send on a
 *  malformed address, so a visitor's typo must never reach it. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isSendableEmail(value: string | undefined): value is string {
  return typeof value === "string" && EMAIL_RE.test(value);
}

export function isFieldKey(key: string): key is FieldKey {
  return (FIELD_KEYS as readonly string[]).includes(key);
}

/** Field name → human label. Shared so the WhatsApp message, the team
 *  notification and the customer's confirmation all name things identically. */
export function fieldLabels(lang: Locale): Record<FieldKey, string> {
  const dict = getDictionary(lang);
  return {
    service: dict.submit.fieldService,
    option: dict.submit.fieldOption,
    postal: dict.submit.fieldPostal,
    booking_date: dict.submit.fieldDate,
    booking_slot: dict.submit.fieldSlot,
    name: dict.hero.fieldName,
    phone: dict.hero.fieldPhone,
    email: dict.devis.fieldEmail,
    address: dict.devis.fieldAddress,
    message: dict.devis.fieldMessage,
    company: dict.submit.fieldCompany,
    role: dict.submit.fieldRole,
    sites: dict.submit.fieldSites,
    need: dict.b2bForm.fieldNeed,
  };
}

export function formHeader(lang: Locale, kind: FormKind): string {
  const dict = getDictionary(lang);
  return {
    quote: dict.submit.quoteHeader,
    contact: dict.submit.contactHeader,
    pro: dict.submit.proHeader,
  }[kind];
}

/** One submitted field, already grouped (checkbox groups repeat their name). */
export type SubmissionField = { key: FieldKey; value: string };

/**
 * Pull the submitted fields off a form, in FIELD_KEYS order, dropping empties
 * and anything not on the allowlist. Checkbox groups (service, option) collapse
 * into one comma-joined value.
 */
export function collectFields(data: FormData): SubmissionField[] {
  const grouped = new Map<FieldKey, string[]>();
  for (const [key, value] of data.entries()) {
    if (typeof value !== "string" || !isFieldKey(key)) continue;
    const trimmed = value.trim().slice(0, MAX_VALUE_LENGTH);
    if (!trimmed) continue;
    grouped.set(key, [...(grouped.get(key) ?? []), trimmed]);
  }
  return FIELD_KEYS.filter((key) => grouped.has(key)).map((key) => ({
    key,
    value: grouped.get(key)!.join(", "),
  }));
}

/** The plain-text rendering used for the WhatsApp message. */
export function composeMessage(
  lang: Locale,
  kind: FormKind,
  fields: SubmissionField[],
): string {
  const labels = fieldLabels(lang);
  const lines = fields.map((f) => `${labels[f.key]}: ${f.value}`);
  return [formHeader(lang, kind), "", ...lines].join("\n");
}
