import type { Metadata } from "next";
import RootShell from "@/components/RootShell";
import { DOMAIN } from "@/lib/config";
import "../globals.css";

// See the FR layout — same reason: resolves the colocated OG image absolutely.
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
};

// English root layout — English is secondary and lives prefixed at /en. See
// lib/i18n.ts. A second <html>/<body> per route group is the Next.js App
// Router's supported way to vary the lang attribute across locales in a
// non-dynamic-segment i18n setup.
export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
