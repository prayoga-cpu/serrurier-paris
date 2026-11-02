import type { Metadata } from "next";
import { BRAND_NAME, DOMAIN } from "@/lib/config";
import { alternates, getDictionary, localePath, type Locale } from "@/lib/i18n";
import {
  getMentionsLegalesContent,
  getCgvContent,
  getPrivacyContent,
} from "@/lib/legal";
import { getLocalizedGuide } from "@/lib/guides";
import { getLocalizedService } from "@/lib/services";
import { getLocalizedTask } from "@/lib/tasks";
import { getLocalizedZone } from "@/lib/zones";
import { OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
import {
  formatPrice,
  getStartingPriceTTC,
  getTierPriceTTC,
} from "@/lib/pricing";

const OG_LOCALE: Record<Locale, string> = { fr: "fr_FR", en: "en_GB" };

/**
 * The cheapest published price, rendered into a meta description. A description
 * that answers "how much?" before the click outperforms one that doesn't — it's
 * the single lever the benchmark site uses on every page.
 */
function priceLine(lang: Locale, priceTTC: number, template: string): string {
  return template.replace("{price}", formatPrice(priceTTC, lang));
}

/** Descriptions are capped so Google doesn't truncate mid-price. */
function withPrice(description: string, suffix: string): string {
  return `${description} ${suffix}`.slice(0, 300);
}

/**
 * Google truncates titles at roughly 60–70 characters, and it shows the site
 * name in its own slot above the result anyway. So the " — Serrurier Express"
 * suffix is appended only while it fits: a long page title keeps its keywords
 * whole rather than losing its tail to an ellipsis.
 */
const TITLE_MAX = 70;
function brandTitle(title: string, separator: "—" | "|"): string {
  const full = `${title} ${separator} ${BRAND_NAME}`;
  return full.length <= TITLE_MAX ? full : title;
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
  ogImage: "shared" | "colocated" = "shared",
): Metadata {
  const url = `https://${DOMAIN}${localePath(lang, path)}`;
  return {
    metadataBase: new URL(`https://${DOMAIN}`),
    title,
    description,
    alternates: alternates(lang, path),
    icons: {
      icon: "/icon.svg",
      apple: "/icon.svg",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      locale: OG_LOCALE[lang],
      type: "website",
      siteName: BRAND_NAME,
      // Shared branded card (app/og/[lang]/route.tsx) for every page without
      // its own opengraph-image.tsx. Pages WITH one must pass "colocated":
      // Next only applies a colocated file when the page's metadata leaves
      // `openGraph.images` unset, so setting it here would silently replace
      // their dedicated card. twitter:image is filled from og:image either way,
      // because the twitter block below sets no images.
      ...(ogImage === "shared" && {
        images: [
          {
            url: `/og/${lang}`,
            ...OG_SIZE,
            type: OG_CONTENT_TYPE,
            alt: BRAND_NAME,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
        getTierPriceTTC("ouverture-porte-claquee"),
        dict.meta.priceSuffix,
      ),
    ),
    "colocated",
  );
}

export function pricingMetadata(lang: Locale): Metadata {
  const dict = getDictionary(lang);
  return base(
    lang,
    "/tarifs",
    brandTitle(dict.meta.pricingTitle, "|"),
    withPrice(
      dict.meta.pricingDescription,
      priceLine(
        lang,
        getTierPriceTTC("ouverture-porte-claquee"),
        dict.meta.priceSuffix,
      ),
    ),
    "colocated",
  );
}

export function devisMetadata(lang: Locale): Metadata {
  const dict = getDictionary(lang);
  return base(
    lang,
    "/devis",
    brandTitle(dict.meta.devisTitle, "|"),
    dict.meta.devisDescription,
    "colocated",
  );
}

export function serviceMetadata(lang: Locale, slug: string): Metadata {
  const dict = getDictionary(lang);
  const service = getLocalizedService(slug, lang);
  if (!service) return {};

  const startingPriceTTC = getStartingPriceTTC(service.slug);
  const description = `${service.summary} ${dict.meta.serviceDescriptionSuffix}`;

  return base(
    lang,
    `/services/${service.slug}`,
    brandTitle(`${service.title} ${dict.meta.inParis}`, "—"),
    startingPriceTTC === undefined
      ? description
      : withPrice(
          description,
          priceLine(lang, startingPriceTTC, dict.meta.servicePriceSuffix),
        ),
    "colocated",
  );
}

export function zonesIndexMetadata(lang: Locale): Metadata {
  const dict = getDictionary(lang);
  return base(
    lang,
    "/zones",
    brandTitle(dict.meta.zonesTitle, "|"),
    dict.meta.zonesDescription,
  );
}

export function zoneMetadata(lang: Locale, slug: string): Metadata {
  const dict = getDictionary(lang);
  const zone = getLocalizedZone(slug, lang);
  if (!zone) return {};

  // A zone only claims in its SERP snippet what its coverage model can keep —
  // ZoneView already switches the on-page trust block, and a snippet that
  // contradicts the page it introduces is worse than a plainer snippet.
  // Network zones also drop the price line: it carries "déplacement inclus",
  // which is a travel promise we don't make outside the zones we service
  // directly. CLAUDE.md §15b wants a price in every meta description, so this is
  // a deliberate, narrow exception rather than a change of policy.
  const isNetwork = zone.coverage === "network";
  const description = `${zone.title}. ${
    isNetwork
      ? dict.meta.zoneDescriptionSuffixNetwork
      : dict.meta.zoneDescriptionSuffix
  }`;

  return base(
    lang,
    `/${zone.slug}`,
    brandTitle(zone.title, "—"),
    isNetwork
      ? description
      : withPrice(
          description,
          priceLine(
            lang,
            getTierPriceTTC("ouverture-porte-claquee"),
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
    brandTitle(dict.meta.guidesTitle, "|"),
    dict.meta.guidesDescription,
  );
}

export function guideMetadata(lang: Locale, slug: string): Metadata {
  const guide = getLocalizedGuide(slug, lang);
  if (!guide) return {};

  return base(
    lang,
    `/guides/${guide.slug}`,
    brandTitle(guide.title, "—"),
    guide.summary,
  );
}

export function taskMetadata(lang: Locale, slug: string): Metadata {
  const dict = getDictionary(lang);
  const task = getLocalizedTask(slug, lang);
  if (!task) return {};

  const startingPriceTTC = getStartingPriceTTC(task.serviceSlug);
  const description = `${task.summary} ${dict.meta.serviceDescriptionSuffix}`;

  return base(
    lang,
    `/${task.slug}`,
    brandTitle(`${task.title} ${dict.meta.inParis}`, "—"),
    startingPriceTTC === undefined
      ? description
      : withPrice(
          description,
          priceLine(lang, startingPriceTTC, dict.meta.servicePriceSuffix),
        ),
  );
}

export function aboutMetadata(lang: Locale): Metadata {
  const dict = getDictionary(lang);
  return base(
    lang,
    "/a-propos",
    brandTitle(dict.meta.aboutTitle, "|"),
    dict.meta.aboutDescription,
  );
}

export function contactMetadata(lang: Locale): Metadata {
  const dict = getDictionary(lang);
  return base(
    lang,
    "/contact",
    brandTitle(dict.meta.contactTitle, "|"),
    dict.meta.contactDescription,
  );
}

export function mentionsLegalesMetadata(lang: Locale): Metadata {
  const content = getMentionsLegalesContent(lang);
  return base(
    lang,
    "/mentions-legales",
    brandTitle(content.title, "|"),
    content.intro,
  );
}

export function cgvMetadata(lang: Locale): Metadata {
  const content = getCgvContent(lang);
  return base(lang, "/cgv", brandTitle(content.title, "|"), content.intro);
}

export function privacyMetadata(lang: Locale): Metadata {
  const content = getPrivacyContent(lang);
  return base(
    lang,
    "/politique-de-confidentialite",
    brandTitle(content.title, "|"),
    content.intro,
  );
}
