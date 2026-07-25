import type { Metadata } from "next";
import HomeView from "@/components/pages/HomeView";
import { homeMetadata } from "@/lib/metadata";

export const metadata: Metadata = homeMetadata("fr");

export default function Page() {
  return <HomeView lang="fr" />;
}
