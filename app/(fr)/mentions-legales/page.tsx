import type { Metadata } from "next";
import LegalPageView from "@/components/pages/LegalPageView";
import { mentionsLegalesMetadata } from "@/lib/metadata";
import { getMentionsLegalesContent } from "@/lib/legal";

export const metadata: Metadata = mentionsLegalesMetadata("fr");

export default function Page() {
  return (
    <LegalPageView
      lang="fr"
      path="/mentions-legales"
      content={getMentionsLegalesContent("fr")}
    />
  );
}
