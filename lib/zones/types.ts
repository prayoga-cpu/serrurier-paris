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
 * How a zone is actually serviced — the field that decides which promise a zone
 * page is allowed to make.
 *
 * The site ships three claims that are only true within travelling distance of
 * the team: "sur place en moins de 30 minutes", "un seul interlocuteur du
 * premier appel à la facture", and the direct-artisan positioning on /a-propos.
 * The client asked (adjustment brief §4, 28/08/2026) to expand beyond
 * Île-de-France to ten low-CPC cities — Clermont-Ferrand is 420 km from Paris,
 * Brest 590 km — which those three claims cannot survive unchanged.
 *
 * So coverage is data, not copy. `direct` keeps the existing promises. `network`
 * swaps them for the ones a dispatch model can actually keep. Nothing outside
 * Île-de-France publishes until the client confirms which model applies, and
 * when she does, it is one field per zone rather than a rewrite per page.
 */
export type ZoneCoverage = "direct" | "network";

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
  /**
   * Cities only, and only where a parent hub exists: the department page this
   * city sits under. A city outside Île-de-France has no department hub of its
   * own — building seven more hub pages to carry ten cities would manufacture
   * exactly the thin pages CLAUDE.md §3 forbids — so it leaves this unset and
   * is listed directly on /zones instead.
   */
  departmentSlug?: string;
  /** Defaults to "direct" when unset — see ZoneCoverage. */
  coverage?: ZoneCoverage;
  /**
   * Cities outside Île-de-France only: every postal code this page's coverage
   * claim actually extends to. A French city routinely has several
   * (Clermont-Ferrand is 63000 and 63100), and the postcode checker matches on
   * the full five digits, so the list has to be explicit. Île-de-France zones
   * leave this unset — they are covered prefix-wide by a department hub page.
   */
  postalCodes?: string[];
  content: Record<Locale, ZoneContent>;
};

export type LocalizedZone = ZoneContent & {
  kind: ZoneKind;
  number: string;
  slug: string;
  departmentSlug?: string;
  /** Always resolved — localizeZone applies the "direct" default. */
  coverage: ZoneCoverage;
};
