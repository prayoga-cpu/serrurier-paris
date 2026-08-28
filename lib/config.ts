// Central brand/config constants. Never inline these values elsewhere.

export const BRAND_NAME = "Serrurier Paris Express";

/**
 * The live origin. Canonicals, hreflang, the sitemap, OG URLs and the
 * LocalBusiness schema all derive from this one constant.
 *
 * Deliberately the Vercel deployment URL for now, not parisunlockdoor.fr:
 * that domain is bought but not yet pointed at this build (CLAUDE.md §0 B2),
 * and canonicals must name a URL that actually serves the page. Nothing is in
 * Search Console yet, so no ranking equity is being staked on this hostname.
 * Switch this one line — plus the Sitemap: line in public/robots.txt — the day
 * DNS cuts over, and add a redirect from this host to the new one.
 */
export const DOMAIN = "serrurier-paris-theta.vercel.app";

export const PHONE_DISPLAY = "06 49 65 85 10";
export const PHONE_HREF = "tel:+33649658510";
export const EMAIL = "parisunlockdoor@gmail.com";

// WhatsApp is the second contact channel, offered alongside the call rather
// than instead of it: some people can't or won't phone, and a written thread
// suits the transparency positioning — the quoted price ends up in writing on
// both sides. It's also where form submissions land until a form backend
// exists (CLAUDE.md §2), so a request is never silently lost.
export const WHATSAPP_NUMBER = "33649658510";
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
