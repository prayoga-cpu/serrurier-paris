import { BRAND_NAME, DOMAIN, PHONE_HREF } from "@/lib/config";
import { HTML_LANG, localePath, type Locale } from "@/lib/i18n";
import { getStartingPriceTTC } from "@/lib/pricing";
import type { LocalizedService } from "@/lib/services";
import { ZONES } from "@/lib/zones";

// Coverage as actually published, derived from lib/zones rather than listed by
// hand. CLAUDE.md §14 P1 requires areaServed to match real coverage; a hand-kept
// list drifts the moment a zone page is added or removed, and an areaServed
// claiming a region the site has no page for is a structured-data claim we
// can't back. Paris is a City, everything else an AdministrativeArea.
/** "Serrurier Hauts-de-Seine (92)" → "Hauts-de-Seine". */
function areaName(title: string): string {
  return title.replace(/^Serrurier\s+/i, "").replace(/\s*\(\d+\)\s*$/, "");
}

const AREA_SERVED = [
  { "@type": "City", name: "Paris" },
  ...ZONES.filter((zone) => zone.kind === "department").map((zone) => ({
    "@type": "AdministrativeArea",
    name: areaName(zone.content.fr.title),
  })),
  // Cities published outside Île-de-France have no department hub — they carry
  // their own entry. Empty until the coverage question is answered.
  ...ZONES.filter((zone) => zone.kind === "city" && !zone.departmentSlug).map(
    (zone) => ({
      "@type": "City",
      name: areaName(zone.content.fr.title),
    }),
  ),
];

export function websiteSchema() {
  const siteUrl = `https://${DOMAIN}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: BRAND_NAME,
    inLanguage: ["fr-FR", "en"],
  };
}

export function localBusinessSchema() {
  const siteUrl = `https://${DOMAIN}`;
  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": `${siteUrl}/#locksmith`,
    name: BRAND_NAME,
    url: siteUrl,
    image: `${siteUrl}/paris-bg.jpg`,
    logo: `${siteUrl}/icon-logo.svg`,
    telephone: PHONE_HREF.replace("tel:", ""),
    priceRange: "€€",
    areaServed: AREA_SERVED,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8566,
      longitude: 2.3522,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };
}

export function serviceSchema(service: LocalizedService, lang: Locale) {
  const siteUrl = `https://${DOMAIN}`;
  const startingPriceTTC = getStartingPriceTTC(service.slug);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.summary,
    url: `${siteUrl}${localePath(lang, `/services/${service.slug}`)}`,
    inLanguage: HTML_LANG[lang],
    provider: {
      "@type": "Locksmith",
      "@id": `${siteUrl}/#locksmith`,
      name: BRAND_NAME,
      telephone: PHONE_HREF.replace("tel:", ""),
    },
    areaServed: AREA_SERVED,
    ...(startingPriceTTC !== undefined && {
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: startingPriceTTC,
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          minPrice: startingPriceTTC,
          valueAddedTaxIncluded: true,
        },
        availability: "https://schema.org/InStock",
      },
    }),
  };
}

export function faqSchema(
  faq: { question: string; answer: string }[],
  lang: Locale,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: HTML_LANG[lang],
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  const siteUrl = `https://${DOMAIN}`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
