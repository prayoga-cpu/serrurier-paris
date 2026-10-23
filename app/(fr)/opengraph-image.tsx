import { ImageResponse } from "next/og";
import { BRAND_NAME } from "@/lib/config";
import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getDictionary } from "@/lib/i18n";

// Required with output: "export" — the image is rendered once at build time
// and written out as a static PNG, same as app/sitemap.ts.
export const dynamic = "force-static";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = BRAND_NAME;

export default async function Image() {
  const dict = getDictionary("fr");
  return new ImageResponse(
    ogImage({ eyebrow: dict.hero.eyebrow, title: dict.hero.title }),
    size,
  );
}
