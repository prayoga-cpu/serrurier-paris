import type { Metadata } from "next";
import ZonesIndexView from "@/components/pages/ZonesIndexView";
import { zonesIndexMetadata } from "@/lib/metadata";

export const metadata: Metadata = zonesIndexMetadata("en");

export default function Page() {
  return <ZonesIndexView lang="en" />;
}
