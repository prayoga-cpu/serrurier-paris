import type { Locale } from "@/lib/i18n";

// PRICE GRID — client-directed 12/08/2026 (CLAUDE.md §0 B3), rounded to whole
// tens on client instruction 28/08/2026 (adjustment brief §2).
//
// Every figure is the real market rate, taken from the price grid the client
// supplied as reference (serrurier-depanneur-idf.fr, a live Paris/IDF
// locksmith) and aligned with the €990+ HT market range flagged in v1.0.
//
// BASIS INVERTED 28/08/2026. Figures were stored HT (the basis the source grid
// publishes) and displayed TTC. The client asked for round numbers, and the
// arithmetic only allows one basis to be round: TTC = HT × 1.2 lands on a
// multiple of 10 only when HT is a multiple of 25, so making both round would
// have meant moving every price by 10–25 %. The consumer reads TTC, so TTC is
// what got the round numbers; HT is now derived and carries cents on the two
// surfaces that show it. Businesses reclaim VAT on the invoice figure anyway,
// and an HT price with cents is ordinary on a French devis.
//
// Rounding is always UP, never down. A published price is a floor
// ("à partir de" — CLAUDE.md §4): rounding down would print a number lower
// than what is actually charged, which is the exact bait-and-switch signature
// the DGCCRF documented in this sector and that the whole brand argues against.
//
//   tier                      was (HT → TTC)      now (TTC → HT)
//   ouverture-porte-claquee    90 → 108,00         110 →  91,67
//   ouverture-porte-fermee    120 → 144,00         150 → 125,00
//   changement-cylindre       110 → 132,00         140 → 116,67
//   serrure-standard          180 → 216,00         220 → 183,33
//   serrure-securite          250 → 300,00         300 → 250,00
//   multipoints-3             350 → 420,00         420 → 350,00
//   multipoints-5             450 → 540,00         540 → 450,00
//   securisation-effraction   150 → 180,00         180 → 150,00
//   blindage-porte            890 → 1 068,00     1 070 → 891,67
//   nuit-weekend               70 →  84,00          90 →  75,00
//   deplacement-seul           39 →  46,80          50 →  41,67

export const VAT_RATE = 0.2;

export const VAT_RATE_LABEL = "20 %";

export type PriceTier = {
  slug: string;
  serviceSlug: string; // links back to a SERVICES entry in lib/services.ts
  label: Record<Locale, string>;
  /** Inc. VAT, rounded up to a whole ten. HT is derived — see toHT. */
  priceTTC: number;
};

export type PriceOption = {
  slug: string;
  label: Record<Locale, string>;
  /** Inc. VAT, rounded up to a whole ten. HT is derived — see toHT. */
  priceTTC: number;
  surcharge: boolean; // true = added on top of a tier price, not standalone
};

export const PRICE_TIERS: PriceTier[] = [
  {
    slug: "ouverture-porte-claquee",
    serviceSlug: "ouverture-de-porte",
    label: {
      fr: "Ouverture de porte claquée, sans dégât",
      en: "Opening a slammed door, no damage",
    },
    priceTTC: 110,
  },
  {
    slug: "ouverture-porte-fermee-cle",
    serviceSlug: "ouverture-de-porte",
    label: {
      fr: "Ouverture de porte fermée à clé ou avec dégât",
      en: "Opening a locked door, or with damage",
    },
    priceTTC: 150,
  },
  {
    slug: "changement-cylindre",
    serviceSlug: "changement-de-serrure",
    label: {
      fr: "Changement de cylindre (barillet)",
      en: "Cylinder (barrel) replacement",
    },
    priceTTC: 140,
  },
  {
    slug: "serrure-standard",
    serviceSlug: "changement-de-serrure",
    label: {
      fr: "Changement de serrure complète",
      en: "Full lock replacement",
    },
    priceTTC: 220,
  },
  {
    slug: "serrure-securite",
    serviceSlug: "changement-de-serrure",
    label: {
      fr: "Changement de serrure haute sécurité",
      en: "High-security lock replacement",
    },
    priceTTC: 300,
  },
  {
    slug: "multipoints-3",
    serviceSlug: "serrure-multipoints",
    label: {
      fr: "Serrure multipoints 3 points",
      en: "3-point multi-point lock",
    },
    priceTTC: 420,
  },
  {
    slug: "multipoints-5",
    serviceSlug: "serrure-multipoints",
    label: {
      fr: "Serrure multipoints 5 points",
      en: "5-point multi-point lock",
    },
    priceTTC: 540,
  },
  {
    slug: "securisation-effraction",
    serviceSlug: "securisation-apres-effraction",
    label: {
      fr: "Sécurisation après effraction",
      en: "Securing after a break-in",
    },
    priceTTC: 180,
  },
  {
    slug: "blindage-porte",
    serviceSlug: "blindage-de-porte",
    label: { fr: "Blindage de porte", en: "Door reinforcement" },
    priceTTC: 1070,
  },
];

export const PRICE_OPTIONS: PriceOption[] = [
  {
    slug: "nuit-weekend",
    label: {
      fr: "Intervention de nuit, week-end ou jour férié",
      en: "Night, weekend or public-holiday call-out",
    },
    priceTTC: 90,
    surcharge: true,
  },
  {
    slug: "deplacement-seul",
    label: {
      fr: "Déplacement seul (diagnostic, sans intervention)",
      en: "Call-out only (diagnosis, no work)",
    },
    priceTTC: 50,
    surcharge: false,
  },
];

/**
 * Excluding VAT, derived from the published TTC figure. Carries cents for most
 * lines — that is the cost of giving the consumer-facing basis the round
 * numbers, and it is the ordinary shape of an HT price on a French devis.
 */
export function toHT(priceTTC: number): number {
  return Math.round((priceTTC / (1 + VAT_RATE)) * 100) / 100;
}

function formatEuro(amount: number, lang: Locale): string {
  const hasCents = !Number.isInteger(amount);
  const digits = hasCents ? 2 : 0;
  const body = amount.toLocaleString(lang === "fr" ? "fr-FR" : "en-GB", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
  return lang === "fr" ? `${body} €` : `€${body}`;
}

/** Tax suffix on its own — for prose, where the figure is written inline. */
export function taxLabel(lang: Locale): string {
  return lang === "fr" ? "TTC" : "incl. VAT";
}

export function taxLabelHT(lang: Locale): string {
  return lang === "fr" ? "HT" : "excl. VAT";
}

/** The published, consumer-facing form: inc. VAT, always labelled as such. */
export function formatPrice(priceTTC: number, lang: Locale): string {
  return `${formatEuro(priceTTC, lang)} ${taxLabel(lang)}`;
}

/**
 * Both bases at once, for the price grid — TTC is what a consumer pays, HT is
 * what a business reclaims, and showing the pair removes the ambiguity the
 * audit flagged rather than trading one omission for another.
 */
export function formatPriceDual(priceTTC: number, lang: Locale): string {
  return `${formatPrice(priceTTC, lang)} (${formatEuro(toHT(priceTTC), lang)} ${taxLabelHT(lang)})`;
}

/**
 * A single tier's figure (TTC), by tier slug. Lets page copy quote a price
 * without re-typing the number: the grid stays the one place a figure changes.
 */
export function getTierPriceTTC(tierSlug: string): number {
  const tier = PRICE_TIERS.find((t) => t.slug === tierSlug);
  if (!tier) throw new Error(`Unknown price tier: ${tierSlug}`);
  return tier.priceTTC;
}

/**
 * Lowest starting price (TTC) for a service, or undefined if it has no tier —
 * the B2B services are quoted after a site visit and deliberately have none.
 * Used for Service schema offers, see lib/schema.tsx.
 */
export function getStartingPriceTTC(serviceSlug: string): number | undefined {
  const prices = PRICE_TIERS.filter((t) => t.serviceSlug === serviceSlug).map(
    (t) => t.priceTTC,
  );
  return prices.length > 0 ? Math.min(...prices) : undefined;
}
