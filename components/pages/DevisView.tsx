import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import Breadcrumb from "@/components/Breadcrumb";
import DevisForm from "@/components/DevisForm";
import { Eyebrow } from "@/components/Button";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";

export default function DevisView({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} path="/devis" />
      <Breadcrumb
        lang={lang}
        items={[
          { name: dict.nav.home, path: localePath(lang, "/") },
          { name: dict.devis.title, path: localePath(lang, "/devis") },
        ]}
      />
      <main className="flex-1 pb-24 lg:pb-0">
        <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <Eyebrow>{dict.devis.eyebrow}</Eyebrow>
          <h1 className="mt-5 font-headline text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            {dict.devis.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {dict.devis.lead}
          </p>

          <div className="mt-10">
            <DevisForm lang={lang} />
          </div>
        </section>
      </main>
      <Footer lang={lang} />
      <MobileCallBar lang={lang} />
    </>
  );
}
