import RootShell from "@/components/RootShell";
import "../globals.css";

// English root layout — English is secondary and lives prefixed at /en. See
// lib/i18n.ts. A second <html>/<body> per route group is the Next.js App
// Router's supported way to vary the lang attribute across locales in a
// non-dynamic-segment i18n setup.
export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
