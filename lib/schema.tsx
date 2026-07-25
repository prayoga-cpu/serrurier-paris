import { BRAND_NAME, DOMAIN, PHONE_HREF } from "@/lib/config";
import { HTML_LANG, localePath, type Locale } from "@/lib/i18n";
import type { LocalizedService } from "@/lib/services";

const SITE_URL = `https://${DOMAIN}`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    name: BRAND_NAME,
    url: SITE_URL,
    telephone: PHONE_HREF.replace("tel:", ""),
    areaServed: {
      "@type": "City",
      name: "Paris",
    },
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
    areaServed: {
      "@type": "City",
      name: "Paris",
    },
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
