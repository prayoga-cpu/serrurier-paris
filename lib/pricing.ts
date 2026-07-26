import type { Locale } from "@/lib/i18n";

// Client-confirmed starting prices — see conversation record for the explicit
// confirmation, including on blindage-de-porte where CLAUDE.md §0 (B3) flags
// €80 as the exact bait-and-switch pattern the brand exists to fight (real
// market €990+ HT). Confirmed anyway; if that's wrong, fix it here first.
// Every price is a floor ("à partir de" — CLAUDE.md §4): the final figure is
// confirmed by phone before travel and validated on-site before work starts.

export type PriceTier = {
  slug: string;
  serviceSlug: string; // links back to a SERVICES entry in lib/services.ts
  label: Record<Locale, string>;
  price: number;
};

export type PriceOption = {
  slug: string;
  label: Record<Locale, string>;
  price: number;
  surcharge: boolean; // true = added on top of a tier price, not standalone
};

export const PRICE_TIERS: PriceTier[] = [
  {
    slug: "ouverture-porte-claquee",
    serviceSlug: "ouverture-de-porte",
    label: { fr: "Porte claquée", en: "Slammed shut" },
    price: 90,
  },
  {
    slug: "ouverture-porte-fermee-cle",
    serviceSlug: "ouverture-de-porte",
    label: { fr: "Porte fermée à clé", en: "Locked with a key" },
    price: 120,
  },
  {
    slug: "serrure-standard",
    serviceSlug: "changement-de-serrure",
    label: {
      fr: "Changement de serrure standard",
      en: "Standard lock replacement",
    },
    price: 150,
  },
  {
    slug: "serrure-securite",
    serviceSlug: "changement-de-serrure",
    label: {
      fr: "Changement de serrure haute sécurité",
      en: "High-security lock replacement",
    },
    price: 250,
  },
  {
    slug: "blindage-porte",
    serviceSlug: "blindage-de-porte",
    label: { fr: "Blindage de porte", en: "Door reinforcement" },
    price: 80,
  },
];

export const PRICE_OPTIONS: PriceOption[] = [
  {
    slug: "nuit-weekend",
    label: {
      fr: "Intervention de nuit, week-end ou jour férié",
      en: "Night, weekend or public-holiday call-out",
    },
    price: 70,
    surcharge: true,
  },
  {
    slug: "deplacement-seul",
    label: {
      fr: "Déplacement seul (diagnostic, sans intervention)",
      en: "Call-out only (diagnosis, no work)",
    },
    price: 69,
    surcharge: false,
  },
];

export function formatPrice(amount: number, lang: Locale): string {
  return lang === "fr" ? `${amount} €` : `€${amount}`;
}

/**
 * Lowest confirmed starting price for a service, or undefined when the client
 * hasn't confirmed one (serrure-multipoints, securisation-apres-effraction).
 * Used for Service schema offers — see lib/schema.tsx.
 */
export function getStartingPrice(serviceSlug: string): number | undefined {
  const prices = PRICE_TIERS.filter((t) => t.serviceSlug === serviceSlug).map(
    (t) => t.price,
  );
  return prices.length > 0 ? Math.min(...prices) : undefined;
}
