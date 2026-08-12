import type { Locale } from "@/lib/i18n";
import { ASSURANCE_HABITATION } from "@/lib/guides/assurance-habitation";
import { EVITER_ARNAQUE } from "@/lib/guides/eviter-arnaque";
import { NORME_A2P } from "@/lib/guides/norme-a2p";
import { PORTE_CLAQUEE } from "@/lib/guides/porte-claquee";
import { PRIX_SERRURIER } from "@/lib/guides/prix-serrurier";
import type { Guide, LocalizedGuide } from "@/lib/guides/types";

export type {
  Guide,
  GuideContent,
  GuideFaq,
  GuideSection,
  LocalizedGuide,
} from "@/lib/guides/types";

// Order = priority order from CLAUDE.md §4: the anti-scam and price guides own
// the trust and price-research queries almost nobody competes on, so they lead.
export const GUIDES: Guide[] = [
  EVITER_ARNAQUE,
  PRIX_SERRURIER,
  PORTE_CLAQUEE,
  NORME_A2P,
  ASSURANCE_HABITATION,
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((guide) => guide.slug === slug);
}

export function localizeGuide(guide: Guide, lang: Locale): LocalizedGuide {
  return {
    slug: guide.slug,
    updated: guide.updated,
    related: guide.related,
    ...guide.content[lang],
  };
}

export function getLocalizedGuides(lang: Locale): LocalizedGuide[] {
  return GUIDES.map((guide) => localizeGuide(guide, lang));
}

export function getLocalizedGuide(
  slug: string,
  lang: Locale,
): LocalizedGuide | undefined {
  const guide = getGuide(slug);
  return guide ? localizeGuide(guide, lang) : undefined;
}

/** Rough reading time, for the "x min read" line. ~200 words a minute. */
export function readingMinutes(guide: LocalizedGuide): number {
  const words = [
    guide.lead,
    ...guide.sections.flatMap((s) => [...s.paragraphs, ...(s.list ?? [])]),
    ...guide.faq.flatMap((f) => [f.question, f.answer]),
  ]
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
