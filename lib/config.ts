// Central brand/config constants. Never inline these values elsewhere.
// See CLAUDE.md §0 — BRAND_NAME and DOMAIN are blocked on client confirmation (B1, B2).

export const BRAND_NAME = "Serrurier Paris Express";
export const DOMAIN = "parisunlockdoor.fr";

export const PHONE_DISPLAY = "06 49 65 85 10";
export const PHONE_HREF = "tel:+33649658510";

// Paths are locale-agnostic — run them through localePath() to render.
// Labels live in the dictionary, keyed by `key`. See lib/i18n.ts.
export const NAV_LINKS = [
  { key: "home", path: "/" },
  { key: "services", path: "/#services" },
  { key: "pricing", path: "/tarifs" },
  { key: "zones", path: "/#zones" },
  { key: "contact", path: "/contact" },
] as const;
