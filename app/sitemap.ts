import type { MetadataRoute } from "next";
import { DOMAIN } from "@/lib/config";
import { LOCALES, DEFAULT_LOCALE, localePath, type Locale } from "@/lib/i18n";
import { GUIDES } from "@/lib/guides";
import { SERVICES } from "@/lib/services";
import { TASKS } from "@/lib/tasks";
import { ZONES } from "@/lib/zones";

export const dynamic = "force-static";

function entry(lang: Locale, path: string): MetadataRoute.Sitemap[number] {
  const siteUrl = `https://${DOMAIN}`;
  return {
    url: `${siteUrl}${localePath(lang, path)}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        ...Object.fromEntries(
          LOCALES.map((locale) => [
            locale,
            `${siteUrl}${localePath(locale, path)}`,
          ]),
        ),
        "x-default": `${siteUrl}${localePath(DEFAULT_LOCALE, path)}`,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/tarifs",
    "/devis",
    "/zones",
    "/guides",
    "/a-propos",
    "/contact",
    "/mentions-legales",
    "/cgv",
    "/politique-de-confidentialite",
    ...SERVICES.map((s) => `/services/${s.slug}`),
    ...ZONES.map((z) => `/${z.slug}`),
    ...GUIDES.map((g) => `/guides/${g.slug}`),
    ...TASKS.map((t) => `/${t.slug}`),
  ];
  return LOCALES.flatMap((lang) => paths.map((path) => entry(lang, path)));
}
