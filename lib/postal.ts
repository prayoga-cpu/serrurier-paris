// Shared postal-code gate logic — used by the homepage hero and /devis, which
// both run the same "check coverage, then show the full request form" flow.

export const POSTAL_RE = /^\d{5}$/;

export type PostalStatus = "invalid" | "paris" | "other";

export function checkPostal(code: string): PostalStatus {
  if (!POSTAL_RE.test(code)) return "invalid";
  return code.startsWith("75") ? "paris" : "other";
}
