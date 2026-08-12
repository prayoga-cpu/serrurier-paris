import type { Locale } from "@/lib/i18n";

// PRICE GRID — client-directed 12/08/2026, resolving CLAUDE.md §0 (B3).
//
// The €80 blindage figure is gone. Every figure below is the real market rate,
// taken from the price grid the client supplied as reference
// (serrurier-depanneur-idf.fr, a live Paris/IDF locksmith) and aligned with the
// €990+ HT market range flagged in v1.0 of CLAUDE.md. The client instruction was
// explicit: use the real market data, not the previous placeholder.
//
// Figures are stored HT because that is the basis the source grid publishes.
// They are DISPLAYED TTC, because French B2C pricing must be (CLAUDE.md §4 /
// §15 Finding 4) — see VAT_RATE and formatPrice below. Storing HT and deriving
// TTC keeps one number per line and makes the basis impossible to fudge.
//
// Every price is a floor ("à partir de" — CLAUDE.md §4): the final figure is
// confirmed by phone before travel and validated on-site before work starts.

/**
 * Standard French VAT. Renovation work on housing over two years old can
 * qualify for a reduced rate; when it applies, the written quote states it and
 * the customer pays less than the figure published here — never more. Published
 * prices are therefore a ceiling on the tax portion and a floor on the work.
 */
export const VAT_RATE = 0.2;

export const VAT_RATE_LABEL = "20 %";

export type PriceTier = {
  slug: string;
  serviceSlug: string; // links back to a SERVICES entry in lib/services.ts
  label: Record<Locale, string>;
  /** Excluding VAT, as published by the source grid. Displayed inc. VAT. */
  priceHT: number;
};

export type PriceOption = {
  slug: string;
  label: Record<Locale, string>;
  priceHT: number;
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
    priceHT: 90,
  },
  {
    slug: "ouverture-porte-fermee-cle",
    serviceSlug: "ouverture-de-porte",
    label: {
      fr: "Ouverture de porte fermée à clé ou avec dégât",
      en: "Opening a locked door, or with damage",
    },
    priceHT: 120,
  },
  {
    slug: "changement-cylindre",
    serviceSlug: "changement-de-serrure",
    label: {
      fr: "Changement de cylindre (barillet)",
      en: "Cylinder (barrel) replacement",
    },
    priceHT: 110,
  },
  {
    slug: "serrure-standard",
    serviceSlug: "changement-de-serrure",
    label: {
      fr: "Changement de serrure complète",
      en: "Full lock replacement",
    },
    priceHT: 180,
  },
  {
    slug: "serrure-securite",
    serviceSlug: "changement-de-serrure",
    label: {
      fr: "Changement de serrure haute sécurité",
      en: "High-security lock replacement",
    },
    priceHT: 250,
  },
  {
    slug: "multipoints-3",
    serviceSlug: "serrure-multipoints",
    label: {
      fr: "Serrure multipoints 3 points",
      en: "3-point multi-point lock",
    },
    priceHT: 350,
  },
  {
    slug: "multipoints-5",
    serviceSlug: "serrure-multipoints",
    label: {
      fr: "Serrure multipoints 5 points",
      en: "5-point multi-point lock",
    },
    priceHT: 450,
  },
  {
    slug: "securisation-effraction",
    serviceSlug: "securisation-apres-effraction",
    label: {
      fr: "Sécurisation après effraction",
      en: "Securing after a break-in",
    },
    priceHT: 150,
  },
  {
    slug: "blindage-porte",
    serviceSlug: "blindage-de-porte",
    label: { fr: "Blindage de porte", en: "Door reinforcement" },
    priceHT: 890,
  },
];

export const PRICE_OPTIONS: PriceOption[] = [
  {
    slug: "nuit-weekend",
    label: {
      fr: "Intervention de nuit, week-end ou jour férié",
      en: "Night, weekend or public-holiday call-out",
    },
    priceHT: 70,
    surcharge: true,
  },
  {
    slug: "deplacement-seul",
    label: {
      fr: "Déplacement seul (diagnostic, sans intervention)",
      en: "Call-out only (diagnosis, no work)",
    },
    priceHT: 39,
    surcharge: false,
  },
];

/** Inc. VAT, rounded to the cent. */
export function toTTC(priceHT: number): number {
  return Math.round(priceHT * (1 + VAT_RATE) * 100) / 100;
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
export function formatPrice(priceHT: number, lang: Locale): string {
  return `${formatEuro(toTTC(priceHT), lang)} ${taxLabel(lang)}`;
}

/**
 * Both bases at once, for the price grid — TTC is what a consumer pays, HT is
 * what a business reclaims, and showing the pair removes the ambiguity the
 * audit flagged rather than trading one omission for another.
 */
export function formatPriceDual(priceHT: number, lang: Locale): string {
  return `${formatPrice(priceHT, lang)} (${formatEuro(priceHT, lang)} ${taxLabelHT(lang)})`;
}

/**
 * A single tier's figure (HT), by tier slug. Lets page copy quote a price
 * without re-typing the number: the grid stays the one place a figure changes.
 */
export function getTierPriceHT(tierSlug: string): number {
  const tier = PRICE_TIERS.find((t) => t.slug === tierSlug);
  if (!tier) throw new Error(`Unknown price tier: ${tierSlug}`);
  return tier.priceHT;
}

/**
 * Lowest starting price (HT) for a service, or undefined if it has no tier —
 * the B2B services are quoted after a site visit and deliberately have none.
 * Used for Service schema offers, see lib/schema.tsx.
 */
export function getStartingPriceHT(serviceSlug: string): number | undefined {
  const prices = PRICE_TIERS.filter((t) => t.serviceSlug === serviceSlug).map(
    (t) => t.priceHT,
  );
  return prices.length > 0 ? Math.min(...prices) : undefined;
}
