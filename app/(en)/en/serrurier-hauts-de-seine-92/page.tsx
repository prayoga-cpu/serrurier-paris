import type { Metadata } from "next";
import ZoneView from "@/components/pages/ZoneView";
import { zoneMetadata } from "@/lib/metadata";

const SLUG = "serrurier-hauts-de-seine-92";

export const metadata: Metadata = zoneMetadata("en", SLUG);

export default function Page() {
  return <ZoneView lang="en" slug={SLUG} />;
}
