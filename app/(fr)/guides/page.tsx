import type { Metadata } from "next";
import GuidesIndexView from "@/components/pages/GuidesIndexView";
import { guidesIndexMetadata } from "@/lib/metadata";

export const metadata: Metadata = guidesIndexMetadata("fr");

export default function Page() {
  return <GuidesIndexView lang="fr" />;
}
