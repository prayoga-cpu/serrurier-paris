import { ImageResponse } from "next/og";
import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getDictionary } from "@/lib/i18n";
import { SERVICES, getLocalizedService } from "@/lib/services";

export const dynamic = "force-static";

// One PNG per service, same slug list as the page itself.
export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Serrurier Paris Express";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dict = getDictionary("fr");
  const service = getLocalizedService(slug, "fr");

  return new ImageResponse(
    ogImage({
      eyebrow: service?.keyword ?? dict.services.eyebrow,
      title: service
        ? `${service.title} ${dict.meta.inParis}`
        : dict.hero.title,
    }),
    size,
  );
}
