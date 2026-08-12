import type { Metadata } from "next";
import { BRAND_NAME, DOMAIN } from "@/lib/config";
import { alternates, getDictionary, type Locale } from "@/lib/i18n";
import {
  getMentionsLegalesContent,
  getCgvContent,
  getPrivacyContent,
} from "@/lib/legal";
import { getLocalizedGuide } from "@/lib/guides";
import { getLocalizedService } from "@/lib/services";
import { getLocalizedTask } from "@/lib/tasks";
import { getLocalizedZone } from "@/lib/zones";
import { formatPrice, getStartingPriceHT, getTierPriceHT } from "@/lib/pricing";

const OG_LOCALE: Record<Locale, string> = { fr: "fr_FR", en: "en_GB" };

/**
 * The cheapest published price, rendered into a meta description. A description
 * that answers "how much?" before the click outperforms one that doesn't — it's
 * the single lever the benchmark site uses on every page.
 */
function priceLine(lang: Locale, priceHT: number, template: string): string {
  return template.replace("{price}", formatPrice(priceHT, lang));
}

/** Descriptions are capped so Google doesn't truncate mid-price. */
function withPrice(description: string, suffix: string): string {
  return `${description} ${suffix}`.slice(0, 300);
}

/**
 * Every page gets a unique title + description per locale, plus self-referencing
 * canonical and hreflang alternates. CLAUDE.md §7 — duplicate meta is what broke
 * indexing on the prototype, so this is the single place titles are built.
 */
function base(
  lang: Locale,
  path: string,
  title: string,
  description: string,
): Metadata {
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
    withPrice(
      dict.meta.homeDescription,
      priceLine(
        lang,
        getTierPriceHT("ouverture-porte-claquee"),
        dict.meta.priceSuffix,
      ),
    ),
  );
}

export function pricingMetadata(lang: Locale): Metadata {
  const dict = getDictionary(lang);
  return base(
    lang,
    "/tarifs",
    `${dict.meta.pricingTitle} | ${BRAND_NAME}`,
    withPrice(
      dict.meta.pricingDescription,
      priceLine(
        lang,
        getTierPriceHT("ouverture-porte-claquee"),
        dict.meta.priceSuffix,
      ),
    ),
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

  const startingPriceHT = getStartingPriceHT(service.slug);
  const description = `${service.summary} ${dict.meta.serviceDescriptionSuffix}`;

  return base(
    lang,
    `/services/${service.slug}`,
    `${service.title} ${dict.meta.inParis} — ${BRAND_NAME}`,
    startingPriceHT === undefined
      ? description
      : withPrice(
          description,
          priceLine(lang, startingPriceHT, dict.meta.servicePriceSuffix),
        ),
  );
}

export function zonesIndexMetadata(lang: Locale): Metadata {
  const dict = getDictionary(lang);
  return base(
    lang,
    "/zones",
    `${dict.meta.zonesTitle} | ${BRAND_NAME}`,
    dict.meta.zonesDescription,
  );
}

export function zoneMetadata(lang: Locale, slug: string): Metadata {
  const dict = getDictionary(lang);
  const zone = getLocalizedZone(slug, lang);
  if (!zone) return {};

  return base(
    lang,
    `/${zone.slug}`,
    `${zone.title} — ${BRAND_NAME}`,
    withPrice(
      `${zone.title}. ${dict.meta.zoneDescriptionSuffix}`,
      priceLine(
        lang,
        getTierPriceHT("ouverture-porte-claquee"),
        dict.meta.priceSuffix,
      ),
    ),
  );
}

export function guidesIndexMetadata(lang: Locale): Metadata {
  const dict = getDictionary(lang);
  return base(
    lang,
    "/guides",
    `${dict.meta.guidesTitle} | ${BRAND_NAME}`,
    dict.meta.guidesDescription,
  );
}

export function guideMetadata(lang: Locale, slug: string): Metadata {
  const guide = getLocalizedGuide(slug, lang);
  if (!guide) return {};

  return base(
    lang,
    `/guides/${guide.slug}`,
    `${guide.title} — ${BRAND_NAME}`,
    guide.summary,
  );
}

export function taskMetadata(lang: Locale, slug: string): Metadata {
  const dict = getDictionary(lang);
  const task = getLocalizedTask(slug, lang);
  if (!task) return {};

  const startingPriceHT = getStartingPriceHT(task.serviceSlug);
  const description = `${task.summary} ${dict.meta.serviceDescriptionSuffix}`;

  return base(
    lang,
    `/${task.slug}`,
    `${task.title} ${dict.meta.inParis} — ${BRAND_NAME}`,
    startingPriceHT === undefined
      ? description
      : withPrice(
          description,
          priceLine(lang, startingPriceHT, dict.meta.servicePriceSuffix),
        ),
  );
}

export function aboutMetadata(lang: Locale): Metadata {
  const dict = getDictionary(lang);
  return base(
    lang,
    "/a-propos",
    `${dict.meta.aboutTitle} | ${BRAND_NAME}`,
    dict.meta.aboutDescription,
  );
}

export function contactMetadata(lang: Locale): Metadata {
  const dict = getDictionary(lang);
  return base(
    lang,
    "/contact",
    `${dict.meta.contactTitle} | ${BRAND_NAME}`,
    dict.meta.contactDescription,
  );
}

export function mentionsLegalesMetadata(lang: Locale): Metadata {
  const content = getMentionsLegalesContent(lang);
  return base(
    lang,
    "/mentions-legales",
    `${content.title} | ${BRAND_NAME}`,
    content.intro,
  );
}

export function cgvMetadata(lang: Locale): Metadata {
  const content = getCgvContent(lang);
  return base(lang, "/cgv", `${content.title} | ${BRAND_NAME}`, content.intro);
}

export function privacyMetadata(lang: Locale): Metadata {
  const content = getPrivacyContent(lang);
  return base(
    lang,
    "/politique-de-confidentialite",
    `${content.title} | ${BRAND_NAME}`,
    content.intro,
  );
}
