// Shared postal-code gate logic — used by the homepage hero and /devis, which
// both run the same "check coverage, then show the full request form" flow.
//
// This module deliberately has NO imports. Hero.tsx and DevisForm.tsx are client
// components, so anything reachable from here ships to the browser; importing
// lib/zones pulled the entire bilingual zone dataset (~290 KB of prose) into the
// client bundle for the sake of a handful of five-digit strings.
//
// COVERED_POSTAL_CODES is therefore written out rather than derived, and
// lib/zones/index.ts asserts at build time that it still matches the city pages
// that are actually published. Drift fails the build instead of going unnoticed.
//
// Matching is on the FULL five-digit code, never a two-digit prefix. Île-de-
// France is the one exception: each of its seven prefixes has a department hub
// page behind it that claims the whole department, so prefix matching there is
// backed by a published page. Outside Île-de-France we publish one city, not one
// department — matching "63" would tell every one of the ~470 communes of the
// Puy-de-Dôme that we cover them on the strength of a single Clermont-Ferrand
// page.
//
// Anything outside the published set still gets the form, with copy saying we'll
// confirm — never a hard "we don't cover you", which the audit (CLAUDE.md §15)
// flagged as the one thing the reference site handles gracefully.

export const POSTAL_RE = /^\d{5}$/;

/** Île-de-France department prefixes, excluding Paris (75). */
export const IDF_PREFIXES = ["77", "78", "91", "92", "93", "94", "95"] as const;

/**
 * Every postal code covered by a published city page outside Île-de-France.
 * Grouped by city, in the order the cities appear in lib/zones/national.ts.
 * Keep in sync with the `postalCodes` on each national Zone — the assertion in
 * lib/zones/index.ts enforces it.
 */
export const COVERED_POSTAL_CODES: readonly string[] = [
  "63000",
  "63100", // Clermont-Ferrand
  "87000",
  "87100",
  "87280", // Limoges
  "72000",
  "72100", // Le Mans
  "66000",
  "66100", // Perpignan
  "29200", // Brest
  "14000", // Caen
];

export type PostalStatus = "invalid" | "paris" | "idf" | "network" | "other";

export function checkPostal(code: string): PostalStatus {
  if (!POSTAL_RE.test(code)) return "invalid";
  if (code.startsWith("75")) return "paris";
  if (IDF_PREFIXES.some((prefix) => prefix === code.slice(0, 2))) return "idf";
  if (COVERED_POSTAL_CODES.includes(code)) return "network";
  return "other";
}
