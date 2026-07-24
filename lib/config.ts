// Central brand/config constants. Never inline these values elsewhere.
// See CLAUDE.md §0 — BRAND_NAME and DOMAIN are blocked on client confirmation (B1, B2).

export const BRAND_NAME = "Serrurier Paris Express";
export const DOMAIN = "parisunlockdoor.fr";

export const PHONE_DISPLAY = "06 49 65 85 10";
export const PHONE_HREF = "tel:+33649658510";

export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Zones", href: "/#zones" },
  { label: "Contact", href: "/contact" },
] as const;

export const REQUIRED_SERVICES = [
  "Ouverture de porte",
  "Changement de serrure",
  "Blindage de porte",
  "Serrure multipoints",
  "Sécurisation après effraction",
] as const;
