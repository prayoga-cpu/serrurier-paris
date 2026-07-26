import type { Metadata } from "next";
import LegalPageView from "@/components/pages/LegalPageView";
import { cgvMetadata } from "@/lib/metadata";
import { getCgvContent } from "@/lib/legal";

export const metadata: Metadata = cgvMetadata("fr");

export default function Page() {
  return <LegalPageView lang="fr" path="/cgv" content={getCgvContent("fr")} />;
}
