import type { Metadata } from "next";
import PricingView from "@/components/pages/PricingView";
import { pricingMetadata } from "@/lib/metadata";

export const metadata: Metadata = pricingMetadata("fr");

export default function Page() {
  return <PricingView lang="fr" />;
}
