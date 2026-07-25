import type { MetadataRoute } from "next";
import { DOMAIN } from "@/lib/config";
import { LOCALES, localePath, type Locale } from "@/lib/i18n";
import { SERVICES } from "@/lib/services";
import { ZONES } from "@/lib/zones";

const SITE_URL = `https://${DOMAIN}`;

export const dynamic = "force-static";

function entry(lang: Locale, path: string): MetadataRoute.Sitemap[number] {
  return {
    url: `${SITE_URL}${localePath(lang, path)}`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        LOCALES.map((locale) => [locale, `${SITE_URL}${localePath(locale, path)}`]),
      ),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/tarifs",
    "/devis",
    "/zones",
    "/contact",
    ...SERVICES.map((s) => `/services/${s.slug}`),
    ...ZONES.map((z) => `/${z.slug}`),
  ];
  return LOCALES.flatMap((lang) => paths.map((path) => entry(lang, path)));
}
