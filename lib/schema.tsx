import { BRAND_NAME, DOMAIN, PHONE_HREF } from "@/lib/config";
import { HTML_LANG, localePath, type Locale } from "@/lib/i18n";
import { getStartingPriceTTC } from "@/lib/pricing";
import type { LocalizedService } from "@/lib/services";
import { ZONES } from "@/lib/zones";

const SITE_URL = `https://${DOMAIN}`;

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
  const startingPriceTTC = getStartingPriceTTC(service.slug);

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
    // than a placeholder. The grid stores TTC, which is also what a consumer
    // pays, so the figure here is the same number the page prints — markup and
    // page can never disagree (CLAUDE.md §15 Finding 4).
    ...(startingPriceTTC !== undefined && {
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          minPrice: startingPriceTTC,
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
