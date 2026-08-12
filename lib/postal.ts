// Shared postal-code gate logic — used by the homepage hero and /devis, which
// both run the same "check coverage, then show the full request form" flow.
//
// Coverage is Paris + the seven Île-de-France departments (CLAUDE.md §14 P1).
// Anything else still gets the form, with copy saying we'll confirm — never a
// hard "we don't cover you", which the audit (§15) flagged as the one thing the
// reference site handles gracefully.

export const POSTAL_RE = /^\d{5}$/;

/** Île-de-France department prefixes, excluding Paris (75). */
export const IDF_PREFIXES = ["77", "78", "91", "92", "93", "94", "95"] as const;

export type PostalStatus = "invalid" | "paris" | "idf" | "other";

export function checkPostal(code: string): PostalStatus {
  if (!POSTAL_RE.test(code)) return "invalid";
  if (code.startsWith("75")) return "paris";
  if (IDF_PREFIXES.some((prefix) => code.startsWith(prefix))) return "idf";
  return "other";
}
