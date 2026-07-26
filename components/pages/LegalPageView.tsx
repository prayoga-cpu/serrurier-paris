import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import Breadcrumb from "@/components/Breadcrumb";
import { Eyebrow } from "@/components/Button";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import type { LegalPageContent } from "@/lib/legal";

export default function LegalPageView({
  lang,
  path,
  content,
}: {
  lang: Locale;
  path: string;
  content: LegalPageContent;
}) {
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} path={path} />
      <Breadcrumb
        lang={lang}
        items={[
          { name: dict.nav.home, path: localePath(lang, "/") },
          { name: content.title, path: localePath(lang, path) },
        ]}
      />
      <main className="flex-1 pb-24 lg:pb-0">
        <section className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
          <Eyebrow>{content.keyword}</Eyebrow>
          <h1 className="mt-5 font-headline text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-5 text-muted">{content.intro}</p>

          <div className="mt-12 space-y-10">
            {content.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-headline text-xl font-bold text-ink">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3 leading-relaxed text-muted">
                  {section.paragraphs?.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {section.list && (
                    <ul className="list-inside list-disc space-y-1.5">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer lang={lang} />
      <MobileCallBar lang={lang} />
    </>
  );
}
