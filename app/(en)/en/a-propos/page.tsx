import type { Metadata } from "next";
import AboutView from "@/components/pages/AboutView";
import { aboutMetadata } from "@/lib/metadata";

export const metadata: Metadata = aboutMetadata("en");

export default function Page() {
  return <AboutView lang="en" />;
}
