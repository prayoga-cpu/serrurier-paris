import type { Metadata } from "next";
import LegalPageView from "@/components/pages/LegalPageView";
import { mentionsLegalesMetadata } from "@/lib/metadata";
import { getMentionsLegalesContent } from "@/lib/legal";

export const metadata: Metadata = mentionsLegalesMetadata("en");

export default function Page() {
  return (
    <LegalPageView
      lang="en"
      path="/mentions-legales"
      content={getMentionsLegalesContent("en")}
    />
  );
}
