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
// §14 P1.5 / §15). Both are still 🔴 blocked on the client: the footer renders
// each line only once its value is non-null, so filling them in here is the
// whole change. Never invent these — a wrong SIRET is worse than none.
export const SIRET: string | null = null;
export const APE_CODE: string | null = null; // e.g. "4332B" — menuiserie/serrurerie

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
