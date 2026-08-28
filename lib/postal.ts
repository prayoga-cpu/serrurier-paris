// Shared postal-code gate logic — used by the homepage hero and /devis, which
// both run the same "check coverage, then show the full request form" flow.
//
// Coverage is derived from what is actually published in lib/zones rather than
// hardcoded here, so the checker can never claim a department the site has no
// page for. That mattered when coverage was Paris + the seven Île-de-France
// departments (CLAUDE.md §14 P1); it matters more now that the client has asked
// to expand nationally (adjustment brief §4), because the checker is the one
// place a visitor is told, in so many words, "yes, we come to you".
//
// Anything outside the published set still gets the form, with copy saying we'll
// confirm — never a hard "we don't cover you", which the audit (§15) flagged as
// the one thing the reference site handles gracefully.

import { ZONES } from "@/lib/zones";

export const POSTAL_RE = /^\d{5}$/;

/** Île-de-France department prefixes, excluding Paris (75). */
export const IDF_PREFIXES = ["77", "78", "91", "92", "93", "94", "95"] as const;

/**
 * Two-digit prefixes of cities published outside Île-de-France, taken from the
 * postal code each city page stores. Empty until the coverage question in
 * lib/zones/types.ts (ZoneCoverage) is answered and those pages ship.
 */
const NETWORK_PREFIXES: string[] = ZONES.filter(
  (zone) => zone.kind === "city" && !zone.departmentSlug,
).map((zone) => zone.number.slice(0, 2));

export type PostalStatus = "invalid" | "paris" | "idf" | "network" | "other";

export function checkPostal(code: string): PostalStatus {
  if (!POSTAL_RE.test(code)) return "invalid";
  if (code.startsWith("75")) return "paris";
  const prefix = code.slice(0, 2);
  if (IDF_PREFIXES.some((idf) => idf === prefix)) return "idf";
  if (NETWORK_PREFIXES.includes(prefix)) return "network";
  return "other";
}
