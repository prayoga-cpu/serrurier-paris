import type { Metadata } from "next";
import ZoneView from "@/components/pages/ZoneView";
import { zoneMetadata } from "@/lib/metadata";

const SLUG = "serrurier-paris-9";

export const metadata: Metadata = zoneMetadata("en", SLUG);

export default function Page() {
  return <ZoneView lang="en" slug={SLUG} />;
}
