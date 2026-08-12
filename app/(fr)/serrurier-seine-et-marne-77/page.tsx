import type { Metadata } from "next";
import ZoneView from "@/components/pages/ZoneView";
import { zoneMetadata } from "@/lib/metadata";

const SLUG = "serrurier-seine-et-marne-77";

export const metadata: Metadata = zoneMetadata("fr", SLUG);

export default function Page() {
  return <ZoneView lang="fr" slug={SLUG} />;
}
