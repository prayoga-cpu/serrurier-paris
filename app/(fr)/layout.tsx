import type { Metadata } from "next";
import RootShell from "@/components/RootShell";
import { DOMAIN } from "@/lib/config";
import "../globals.css";

// Set at the layout level so the colocated opengraph-image.tsx resolves to an
// absolute URL. Page-level metadata (lib/metadata.ts) sets this too, but the
// image route is resolved against the layout.
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
};

// French root layout — French is the primary locale and lives unprefixed at the
// site root. See lib/i18n.ts.
export default function FrLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="fr">{children}</RootShell>;
}
