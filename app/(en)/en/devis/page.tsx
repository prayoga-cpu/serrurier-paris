import type { Metadata } from "next";
import DevisView from "@/components/pages/DevisView";
import { devisMetadata } from "@/lib/metadata";

export const metadata: Metadata = devisMetadata("en");

export default function Page() {
  return <DevisView lang="en" />;
}
