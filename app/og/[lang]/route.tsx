import { ImageResponse } from "next/og";
import { ogImage, OG_SIZE } from "@/lib/og";
import { getDictionary, LOCALES, type Locale } from "@/lib/i18n";

// The shared OG card, one per locale, rendered once at build time. Every page
// without its own opengraph-image.tsx points here via lib/metadata.ts base() —
// zones, guides, tasks, legal, /a-propos, /contact. Before this existed those
// 116 pages shipped no og:image at all: the page-level `openGraph` object
// replaces the layout's, so the colocated home card was never inherited.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ lang: string }> },
) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  return new ImageResponse(
    ogImage({ eyebrow: dict.hero.eyebrow, title: dict.hero.title }),
    OG_SIZE,
  );
}
