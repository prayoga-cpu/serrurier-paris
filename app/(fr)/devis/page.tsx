import type { Metadata } from "next";
import DevisView from "@/components/pages/DevisView";
import { devisMetadata } from "@/lib/metadata";

export const metadata: Metadata = devisMetadata("fr");

export default function Page() {
  return <DevisView lang="fr" />;
}
