import { ImageResponse } from "next/og";
import { BRAND_NAME } from "@/lib/config";
import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getDictionary } from "@/lib/i18n";

export const dynamic = "force-static";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = BRAND_NAME;

export default async function Image() {
  const dict = getDictionary("en");
  return new ImageResponse(
    ogImage({ eyebrow: dict.devis.eyebrow, title: dict.devis.title }),
    size,
  );
}
