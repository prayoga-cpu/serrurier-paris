import type { Locale } from "@/lib/i18n";

export type Review = {
  /** First name + initial, the form French review platforms display. */
  name: string;
  /** Where the job was — zone pages show local reviews first. */
  zone: string;
  /** Service slug, so a service page can show reviews about that service. */
  serviceSlug: string;
  /** ISO date of the intervention. */
  date: string;
  rating: 1 | 2 | 3 | 4 | 5;
  body: Record<Locale, string>;
};

/**
 * REAL reviews go here, and nowhere else.
 *
 * Empty until the client collects verifiable ones (CLAUDE.md §6/§13). The
 * moment this array is non-empty it is what renders, in production, and the
 * sample set below stops being used.
 */
export const VERIFIED_REVIEWS: Review[] = [];

/**
 * Layout/sample data ONLY — written by us, not by customers.
 *
 * Publishing invented reviews as if they were real is a `pratique commerciale
 * trompeuse` under the Code de la consommation and is actively sanctioned by
 * the DGCCRF — the same authority whose findings this whole brand positions
 * against. So these never render in a production build: they appear only when
 * NEXT_PUBLIC_SHOW_SAMPLE_REVIEWS=true (set it in .env.local for dev), and the
 * component labels them as samples on screen when it does.
 */
export const SAMPLE_REVIEWS: Review[] = [
  {
    name: "Camille L.",
    zone: "Paris 11e",
    serviceSlug: "ouverture-de-porte",
    date: "2026-07-28",
    rating: 5,
    body: {
      fr: "Porte claquée un dimanche soir avec les clés à l'intérieur. Prix annoncé au téléphone, exactement le même sur la facture. Ouverture en vingt minutes sans rien abîmer.",
      en: "Door pulled shut on a Sunday evening with the keys inside. Price quoted on the phone, exactly the same on the invoice. Open in twenty minutes with no damage.",
    },
  },
  {
    name: "Thomas B.",
    zone: "Boulogne-Billancourt",
    serviceSlug: "changement-de-serrure",
    date: "2026-07-15",
    rating: 5,
    body: {
      fr: "Changement de cylindre après un déménagement. On m'a expliqué que la serrure complète n'était pas nécessaire, ce qui a divisé la facture par deux. Rare et appréciable.",
      en: "Cylinder change after moving in. They explained the full lock wasn't necessary, which halved the bill. Rare and appreciated.",
    },
  },
  {
    name: "Sophie M.",
    zone: "Paris 18e",
    serviceSlug: "securisation-apres-effraction",
    date: "2026-06-30",
    rating: 5,
    body: {
      fr: "Intervention le jour même après une tentative d'effraction. Devis et facture détaillés transmis sans que j'aie à les réclamer, mon assurance a tout accepté.",
      en: "Same-day call-out after an attempted break-in. Detailed quote and invoice provided without my having to ask, and my insurer accepted everything.",
    },
  },
  {
    name: "Nadia R.",
    zone: "Créteil",
    serviceSlug: "serrure-multipoints",
    date: "2026-06-12",
    rating: 5,
    body: {
      fr: "Ma multipoints ne verrouillait plus en haut. Réglage au lieu du remplacement qu'on m'avait vendu ailleurs. Honnête et compétent.",
      en: "My multi-point lock stopped engaging at the top. Adjusted rather than replaced, which is what I'd been sold elsewhere. Honest and competent.",
    },
  },
  {
    name: "Julien P.",
    zone: "Paris 8e",
    serviceSlug: "securisation-locaux-pro",
    date: "2026-05-22",
    rating: 5,
    body: {
      fr: "Reprise du parc de clés de la boutique après le départ d'un salarié. Intervention programmée avant l'ouverture, aucune heure de fermeture perdue.",
      en: "Took our shop's key estate back in hand after a staff departure. Scheduled before opening, so we lost no trading hours.",
    },
  },
  {
    name: "Élise D.",
    zone: "Versailles",
    serviceSlug: "blindage-de-porte",
    date: "2026-05-04",
    rating: 5,
    body: {
      fr: "Blindage posé côté intérieur pour respecter la façade en secteur protégé. Devis clair, délai tenu, finition impeccable.",
      en: "Reinforcement fitted on the inside face to respect the façade in a conservation area. Clear quote, deadline kept, impeccable finish.",
    },
  },
];

/** Sample reviews render only when explicitly switched on, never by default. */
export const SHOW_SAMPLE_REVIEWS =
  process.env.NEXT_PUBLIC_SHOW_SAMPLE_REVIEWS === "true";

export type ReviewSet = { reviews: Review[]; isSample: boolean };

/**
 * Verified reviews win. Samples appear only behind the env flag. Otherwise the
 * section renders nothing at all — an empty reviews block is better than an
 * invented one on a site whose entire pitch is that it doesn't invent things.
 */
export function getReviews(filter?: {
  zone?: string;
  serviceSlug?: string;
  limit?: number;
}): ReviewSet {
  const isSample = VERIFIED_REVIEWS.length === 0;
  if (isSample && !SHOW_SAMPLE_REVIEWS) return { reviews: [], isSample };

  const pool = isSample ? SAMPLE_REVIEWS : VERIFIED_REVIEWS;
  // Local/relevant reviews first, then the rest — never dropping the others,
  // so a quiet zone still shows social proof.
  const scored = [...pool].sort((a, b) => score(b) - score(a));
  function score(r: Review) {
    let n = 0;
    if (filter?.zone && r.zone === filter.zone) n += 2;
    if (filter?.serviceSlug && r.serviceSlug === filter.serviceSlug) n += 1;
    return n;
  }
  return { reviews: scored.slice(0, filter?.limit ?? 3), isSample };
}
