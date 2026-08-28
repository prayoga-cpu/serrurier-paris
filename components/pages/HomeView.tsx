import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesGrid from "@/components/ServicesGrid";
import SituationsGrid from "@/components/SituationsGrid";
import TarifsTeaser from "@/components/TarifsTeaser";
import {
  AuthoritySection,
  CoverageSection,
  ProcessSection,
} from "@/components/HomeSections";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import type { Locale } from "@/lib/i18n";

/**
 * Section order follows intent, not the site map, and it is ordered for the
 * phone because that is where an emergency visitor actually arrives.
 *
 * The first three answer the only questions someone locked out has, in the
 * order they ask them: can you come to me (hero coverage check), what happens
 * if I call (process), what will it cost (pricing). Everything after that —
 * trust, catalogue, situations, coverage detail, reviews and guides — is for
 * the visitor who is researching rather than stranded, and it can wait below
 * the fold. Client direction 28/08/2026.
 */
export default function HomeView({ lang }: { lang: Locale }) {
  return (
    <>
      <Header lang={lang} path="/" />
      <main className="flex-1 pb-20 lg:pb-0">
        <Hero lang={lang} />
        <ProcessSection lang={lang} variant="compact" />
        <TarifsTeaser lang={lang} />
        <TrustStrip lang={lang} />
        <ServicesGrid lang={lang} />
        <SituationsGrid lang={lang} />
        <CoverageSection lang={lang} />
        <AuthoritySection lang={lang} />
      </main>
      <Footer lang={lang} />
      <MobileCallBar lang={lang} />
    </>
  );
}
