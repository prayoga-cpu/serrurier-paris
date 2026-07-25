import type { Metadata } from "next";
import PricingView from "@/components/pages/PricingView";
import { pricingMetadata } from "@/lib/metadata";

export const metadata: Metadata = pricingMetadata("en");

export default function Page() {
  return <PricingView lang="en" />;
}
