import type { MetadataRoute } from "next";
import { DOMAIN } from "@/lib/config";
import {
  LOCALES,
  DEFAULT_LOCALE,
  HTML_LANG,
  localePath,
  type Locale,
} from "@/lib/i18n";
import { GUIDES } from "@/lib/guides";
import { SERVICES } from "@/lib/services";
import { TASKS } from "@/lib/tasks";
import { ZONES } from "@/lib/zones";

export const dynamic = "force-static";

/**
 * `lastModified` is only emitted where the content carries a real date — the
 * guides, whose `updated` field is also printed on the page. Stamping every URL
 * with the build time (what this file used to do) tells Google that 136 pages
 * all changed on every deploy; it learns the value is noise and ignores it.
 * An absent lastmod is honest; a wrong one costs the guides their signal too.
 */
type Page = { path: string; lastModified?: string };

function entry(lang: Locale, page: Page): MetadataRoute.Sitemap[number] {
  const siteUrl = `https://${DOMAIN}`;
  return {
    url: `${siteUrl}${localePath(lang, page.path)}`,
    ...(page.lastModified && { lastModified: page.lastModified }),
    alternates: {
      // Same BCP-47 codes as the <link rel="alternate"> tags in the page head
      // (lib/i18n.ts alternates()), so the two hreflang sources never disagree.
      languages: {
        ...Object.fromEntries(
          LOCALES.map((locale) => [
            HTML_LANG[locale],
            `${siteUrl}${localePath(locale, page.path)}`,
          ]),
        ),
        "x-default": `${siteUrl}${localePath(DEFAULT_LOCALE, page.path)}`,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Page[] = [
    ...[
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
    ].map((path) => ({ path })),
    ...GUIDES.map((g) => ({
      path: `/guides/${g.slug}`,
      lastModified: g.updated,
    })),
    ...TASKS.map((t) => ({ path: `/${t.slug}` })),
  ];
  return LOCALES.flatMap((lang) => pages.map((page) => entry(lang, page)));
}
