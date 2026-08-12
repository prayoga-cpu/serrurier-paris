import { BRAND_NAME, DOMAIN, PHONE_HREF } from "@/lib/config";
import { HTML_LANG, localePath, type Locale } from "@/lib/i18n";
import { getStartingPriceHT, toTTC } from "@/lib/pricing";
import type { LocalizedService } from "@/lib/services";

const SITE_URL = `https://${DOMAIN}`;

// Coverage as actually published: Paris plus the seven Île-de-France
// departments that have zone pages (CLAUDE.md §14 P1 — areaServed must match
// real coverage, so this list and lib/zones are meant to move together).
const AREA_SERVED = [
  { "@type": "City", name: "Paris" },
  { "@type": "AdministrativeArea", name: "Hauts-de-Seine" },
  { "@type": "AdministrativeArea", name: "Seine-Saint-Denis" },
  { "@type": "AdministrativeArea", name: "Val-de-Marne" },
  { "@type": "AdministrativeArea", name: "Essonne" },
  { "@type": "AdministrativeArea", name: "Yvelines" },
  { "@type": "AdministrativeArea", name: "Val-d'Oise" },
  { "@type": "AdministrativeArea", name: "Seine-et-Marne" },
];

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    name: BRAND_NAME,
    url: SITE_URL,
    telephone: PHONE_HREF.replace("tel:", ""),
    areaServed: AREA_SERVED,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
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
  const startingPriceHT = getStartingPriceHT(service.slug);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.summary,
    url: `${SITE_URL}${localePath(lang, `/services/${service.slug}`)}`,
    inLanguage: HTML_LANG[lang],
    provider: {
      "@type": "Locksmith",
      name: BRAND_NAME,
    },
    areaServed: AREA_SERVED,
    // Real starting price where the client has confirmed one — CLAUDE.md §4
    // wants structured price answers, since that's what generative engines
    // pull. Services without a confirmed price emit no offer at all rather
    // than a placeholder. The tax basis is whatever the grid publishes, so
    // markup and page can never disagree (CLAUDE.md §15 Finding 4).
    ...(startingPriceHT !== undefined && {
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          minPrice: toTTC(startingPriceHT),
          valueAddedTaxIncluded: true,
        },
        availability: "https://schema.org/InStock",
      },
    }),
    // No WarrantyPromise node: the guarantee is real and stated in page copy,
    // but its duration isn't client-confirmed, and an empty WarrantyPromise
    // would be meaningless markup. Add it here once the term is confirmed.
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
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
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
