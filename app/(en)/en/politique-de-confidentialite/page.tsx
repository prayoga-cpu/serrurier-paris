import type { Metadata } from "next";
import LegalPageView from "@/components/pages/LegalPageView";
import { privacyMetadata } from "@/lib/metadata";
import { getPrivacyContent } from "@/lib/legal";

export const metadata: Metadata = privacyMetadata("en");

export default function Page() {
  return (
    <LegalPageView
      lang="en"
      path="/politique-de-confidentialite"
      content={getPrivacyContent("en")}
    />
  );
}
