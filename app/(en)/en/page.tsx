import type { Metadata } from "next";
import HomeView from "@/components/pages/HomeView";
import { homeMetadata } from "@/lib/metadata";

export const metadata: Metadata = homeMetadata("en");

export default function Page() {
  return <HomeView lang="en" />;
}
