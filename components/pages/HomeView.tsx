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
 * Section order follows intent, not the site map: panic (hero), reassurance
 * (trust), what we do (services), what happened to you (situations), what it
 * costs (pricing), how it runs (process), where (coverage), why believe us
 * (reviews + guides).
 */
export default function HomeView({ lang }: { lang: Locale }) {
  return (
    <>
      <Header lang={lang} path="/" />
      <main className="flex-1 pb-20 lg:pb-0">
        <Hero lang={lang} />
        <TrustStrip lang={lang} />
        <ServicesGrid lang={lang} />
        <SituationsGrid lang={lang} />
        <TarifsTeaser lang={lang} />
        <ProcessSection lang={lang} />
        <CoverageSection lang={lang} />
        <AuthoritySection lang={lang} />
      </main>
      <Footer lang={lang} />
      <MobileCallBar lang={lang} />
    </>
  );
}
