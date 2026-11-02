// Central brand/config constants. Never inline these values elsewhere.

export const BRAND_NAME = "Serrurier Express";

/**
 * The live origin. Canonicals, hreflang, the sitemap, OG URLs and the
 * LocalBusiness schema all derive from this one constant.
 *
 * Configurable via NEXT_PUBLIC_DOMAIN env var, defaulting to the verified
 * production domain trouvetonserrurier.fr.
 */
export const DOMAIN =
  process.env.NEXT_PUBLIC_DOMAIN || "www.trouvetonserrurier.fr";

export const PHONE_DISPLAY = "07 83 14 89 94";
export const PHONE_HREF = "tel:+33783148994";
export const EMAIL = "parisunlockdoor@gmail.com";

// WhatsApp is the second contact channel, offered alongside the call rather
// than instead of it: some people can't or won't phone, and a written thread
// suits the transparency positioning — the quoted price ends up in writing on
// both sides. It's also where form submissions land until a form backend
// exists (CLAUDE.md §2), so a request is never silently lost.
export const WHATSAPP_NUMBER = "33783148994";
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}`;

/** wa.me link with the message box pre-filled. */
export function whatsappHref(message?: string): string {
  return message
    ? `${WHATSAPP_HREF}?text=${encodeURIComponent(message)}`
    : WHATSAPP_HREF;
}

// Business identifiers published in the footer and the legal pages — the cheap,
// real trust signal the audit found the reference site doing better (CLAUDE.md
// §14 P1.5 / §15). The footer and /a-propos render each line only when its value
// is non-null. Never invent these — a wrong SIRET is worse than none.
//
// Supplied by the client 03/11/2026 and checked the same day against the
// official register (recherche-entreprises.api.gouv.fr): SIRET valid and
// active, entrepreneur individuel, APE 43.32B, seat at BUSINESS_ADDRESS below.
// Formatted the way the register displays them, so a visitor following the
// anti-scam guide's "check the SIRET" advice can match it at a glance.
export const SIRET: string | null = "103 059 358 00012";
export const APE_CODE: string | null = "43.32B"; // travaux de menuiserie métallique et serrurerie
export const LEGAL_FORM = {
  fr: "Entrepreneur individuel (EI)",
  en: "Sole trader (entrepreneur individuel, EI)",
} as const;

/**
 * Registered business address (siège), as recorded against the SIRET. Used by
 * the Locksmith schema, the legal pages and /a-propos. The coordinates are the
 * register's own geocoding of this address (Base Adresse Nationale).
 */
export const BUSINESS_ADDRESS = {
  street: "10 avenue Mahsa Jina Amini",
  postalCode: "94250",
  locality: "Gentilly",
  region: "Île-de-France",
  country: "FR",
  latitude: 48.81498,
  longitude: 2.33334,
} as const;

/** One-line postal form, identical in both locales: "…, 94250 Gentilly, France". */
export const BUSINESS_ADDRESS_LINE = `${BUSINESS_ADDRESS.street}, ${BUSINESS_ADDRESS.postalCode} ${BUSINESS_ADDRESS.locality}, France`;

// Paths are locale-agnostic — run them through localePath() to render.
// Labels live in the dictionary, keyed by `key`. See lib/i18n.ts.
export const NAV_LINKS = [
  { key: "home", path: "/" },
  { key: "services", path: "/#services" },
  { key: "pricing", path: "/tarifs" },
  { key: "zones", path: "/zones" },
  { key: "guides", path: "/guides" },
  { key: "contact", path: "/contact" },
] as const;
