import { ImageResponse } from "next/og";
import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getDictionary } from "@/lib/i18n";

export const dynamic = "force-static";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Serrurier Paris Express";

export default async function Image() {
  const dict = getDictionary("en");
  return new ImageResponse(
    ogImage({ eyebrow: dict.devis.eyebrow, title: dict.devis.title }),
    size,
  );
}
