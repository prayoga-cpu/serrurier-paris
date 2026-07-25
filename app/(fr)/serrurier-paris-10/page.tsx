import type { Metadata } from "next";
import ZoneView from "@/components/pages/ZoneView";
import { zoneMetadata } from "@/lib/metadata";

const SLUG = "serrurier-paris-10";

export const metadata: Metadata = zoneMetadata("fr", SLUG);

export default function Page() {
  return <ZoneView lang="fr" slug={SLUG} />;
}
