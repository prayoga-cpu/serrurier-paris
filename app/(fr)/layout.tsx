import RootShell from "@/components/RootShell";
import "../globals.css";

// French root layout — French is the primary locale and lives unprefixed at the
// site root. See lib/i18n.ts.
export default function FrLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="fr">{children}</RootShell>;
}
