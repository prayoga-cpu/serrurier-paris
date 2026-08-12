import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import Breadcrumb from "@/components/Breadcrumb";
import { Eyebrow } from "@/components/Button";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import { getLocalizedGuides, readingMinutes } from "@/lib/guides";

export default function GuidesIndexView({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const guides = getLocalizedGuides(lang);

  return (
    <>
      <Header lang={lang} path="/guides" />
      <Breadcrumb
        lang={lang}
        items={[
          { name: dict.nav.home, path: localePath(lang, "/") },
          { name: dict.nav.guides, path: localePath(lang, "/guides") },
        ]}
      />
      <main className="flex-1 pb-24 lg:pb-0">
        <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <Eyebrow>{dict.guidesIndexPage.eyebrow}</Eyebrow>
          <h1 className="mt-5 font-headline text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            {dict.guidesIndexPage.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {dict.guidesIndexPage.lead}
          </p>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={localePath(lang, `/guides/${guide.slug}`)}
                className="group flex flex-col rounded-3xl border border-ink/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <span className="font-headline text-xs font-bold uppercase tracking-[0.12em] text-signal-press">
                  {guide.keyword}
                </span>
                <h2 className="mt-3 font-headline text-xl font-bold text-ink">
                  {guide.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {guide.summary}
                </p>
                <span className="mt-5 text-sm font-semibold text-muted">
                  {readingMinutes(guide)} {dict.guidePage.readingTime}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer lang={lang} />
      <MobileCallBar lang={lang} />
    </>
  );
}
