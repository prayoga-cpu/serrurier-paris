import type { Metadata } from "next";
import { BRAND_NAME, DOMAIN } from "@/lib/config";
import { alternates, getDictionary, type Locale } from "@/lib/i18n";
import { getLocalizedService } from "@/lib/services";

const OG_LOCALE: Record<Locale, string> = { fr: "fr_FR", en: "en_GB" };

/**
 * Every page gets a unique title + description per locale, plus self-referencing
 * canonical and hreflang alternates. CLAUDE.md §7 — duplicate meta is what broke
 * indexing on the prototype, so this is the single place titles are built.
 */
function base(lang: Locale, path: string, title: string, description: string): Metadata {
  return {
    metadataBase: new URL(`https://${DOMAIN}`),
    title,
    description,
    alternates: alternates(lang, path),
    openGraph: {
      title,
      description,
      locale: OG_LOCALE[lang],
      type: "website",
      siteName: BRAND_NAME,
    },
  };
}

export function homeMetadata(lang: Locale): Metadata {
  const dict = getDictionary(lang);
  return base(
    lang,
    "/",
    `${BRAND_NAME} — ${dict.meta.homeTitle}`,
    dict.meta.homeDescription,
  );
}

export function pricingMetadata(lang: Locale): Metadata {
  const dict = getDictionary(lang);
  return base(
    lang,
    "/tarifs",
    `${dict.meta.pricingTitle} | ${BRAND_NAME}`,
    dict.meta.pricingDescription,
  );
}

export function devisMetadata(lang: Locale): Metadata {
  const dict = getDictionary(lang);
  return base(
    lang,
    "/devis",
    `${dict.meta.devisTitle} | ${BRAND_NAME}`,
    dict.meta.devisDescription,
  );
}

export function serviceMetadata(lang: Locale, slug: string): Metadata {
  const dict = getDictionary(lang);
  const service = getLocalizedService(slug, lang);
  if (!service) return {};

  return base(
    lang,
    `/services/${service.slug}`,
    `${service.title} ${dict.meta.inParis} — ${BRAND_NAME}`,
    `${service.summary} ${dict.meta.serviceDescriptionSuffix}`,
  );
}
