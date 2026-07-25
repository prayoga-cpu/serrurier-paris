import type { Metadata } from "next";
import ContactView from "@/components/pages/ContactView";
import { contactMetadata } from "@/lib/metadata";

export const metadata: Metadata = contactMetadata("fr");

export default function Page() {
  return <ContactView lang="fr" />;
}
