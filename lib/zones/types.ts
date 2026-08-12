import type { Locale } from "@/lib/i18n";

export type ZoneFaq = { question: string; answer: string };

export type ZoneContent = {
  title: string;
  keyword: string;
  intro: string;
  /** Real places, not decoration — they're what makes a zone page a zone page. */
  landmarks: string[];
  /** Quartiers for an arrondissement or a city; communes for a department. */
  neighborhoods: string[];
  /**
   * Two paragraphs on the local building stock and what it actually means for
   * a lock — the part of the page a competitor can't copy off a template. Added
   * in the depth pass: money pages were ~450 words against ~2,000 for the
   * benchmark site, and depth per page is what closed that gap.
   */
  localContext: string[];
  /** The interventions this zone actually generates most, and why. */
  commonJobs: string[];
  faq: ZoneFaq[];
};

export type ZoneKind = "arrondissement" | "department" | "city";

/**
 * Zones are a three-level hierarchy — hub (/zones) → department → city — with
 * Paris arrondissements sitting directly under the hub (CLAUDE.md §14 P1).
 *
 * `slug` is the full path minus the leading slash, so arrondissement and city
 * pages keep their keyword-matching root URLs (`/serrurier-paris-11`,
 * `/serrurier-montreuil`) while department hubs nest under `/zones/`. The six
 * arrondissement URLs that were already published do not move.
 *
 * CLAUDE.md §3 hard rule: every zone here must carry real local substance —
 * landmarks, quartiers and a FAQ that could only have been written about this
 * place. Coverage without substance is worse than no page, so a commune we
 * can't write properly is named on its department page instead of getting a
 * thin page of its own.
 */
export type Zone = {
  kind: ZoneKind;
  /** Arrondissement number, department code, or postal code for a city. */
  number: string;
  slug: string;
  /** Cities only: the department hub this page belongs under. */
  departmentSlug?: string;
  content: Record<Locale, ZoneContent>;
};

export type LocalizedZone = ZoneContent & {
  kind: ZoneKind;
  number: string;
  slug: string;
  departmentSlug?: string;
};
