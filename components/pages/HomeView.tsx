import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesGrid from "@/components/ServicesGrid";
import TarifsTeaser from "@/components/TarifsTeaser";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import type { Locale } from "@/lib/i18n";

export default function HomeView({ lang }: { lang: Locale }) {
  return (
    <>
      <Header lang={lang} path="/" />
      <main className="flex-1 pb-20 lg:pb-0">
        <Hero lang={lang} />
        <TrustStrip lang={lang} />
        <ServicesGrid lang={lang} />
        <TarifsTeaser lang={lang} />
      </main>
      <Footer lang={lang} />
      <MobileCallBar lang={lang} />
    </>
  );
}
