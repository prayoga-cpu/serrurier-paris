import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCTA from "@/components/ServiceCTA";
import { Eyebrow } from "@/components/Button";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import {
  getLocalizedGuide,
  getLocalizedGuides,
  readingMinutes,
} from "@/lib/guides";
import { getLocalizedServicesFor } from "@/lib/services";
import { getLocalizedTasks } from "@/lib/tasks";
import { JsonLd, faqSchema } from "@/lib/schema";

/** Anchor id for a section heading, so the table of contents can link to it. */
function anchor(heading: string, index: number) {
  return `s${index + 1}-${heading
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40)}`;
}

export default function GuideView({
  lang,
  slug,
}: {
  lang: Locale;
  slug: string;
}) {
  const dict = getDictionary(lang);
  const guide = getLocalizedGuide(slug, lang);
  if (!guide) notFound();

  const related = getLocalizedGuides(lang).filter((g) =>
    guide.related.includes(g.slug),
  );
  const services = getLocalizedServicesFor(lang, "b2c");
  const tasks = getLocalizedTasks(lang).slice(0, 3);
  const path = `/guides/${guide.slug}`;
  const updated = new Date(guide.updated).toLocaleDateString(
    lang === "fr" ? "fr-FR" : "en-GB",
    { year: "numeric", month: "long", day: "numeric" },
  );

  return (
    <>
      <Header lang={lang} path={path} />
      <JsonLd data={faqSchema(guide.faq, lang)} />
      <Breadcrumb
        lang={lang}
        items={[
          { name: dict.nav.home, path: localePath(lang, "/") },
          { name: dict.nav.guides, path: localePath(lang, "/guides") },
          { name: guide.title, path: localePath(lang, path) },
        ]}
      />
      <main className="flex-1 pb-24 lg:pb-0">
        <article className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
          <Eyebrow>{guide.keyword}</Eyebrow>
          <h1 className="mt-5 font-headline text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-3 text-sm text-muted">
            {dict.guidePage.updatedLabel} {updated} · {readingMinutes(guide)}{" "}
            {dict.guidePage.readingTime}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {guide.lead}
          </p>

          <nav className="mt-10 rounded-3xl border border-ink/10 bg-surface p-6">
            <h2 className="font-headline text-sm font-bold uppercase tracking-wide text-ink">
              {dict.guidePage.tocTitle}
            </h2>
            <ol className="mt-3 space-y-1.5">
              {guide.sections.map((section, index) => (
                <li key={section.heading}>
                  <a
                    href={`#${anchor(section.heading, index)}`}
                    className="text-sm text-muted underline-offset-2 hover:text-ink hover:underline"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-12 space-y-12">
            {guide.sections.map((section, index) => (
              <section
                key={section.heading}
                id={anchor(section.heading, index)}
                className="scroll-mt-24"
              >
                <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.list && (
                  <ul className="mt-5 space-y-3">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-press" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section className="mt-14 border-t border-ink/10 pt-10">
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
              {dict.guidePage.faqTitle}
            </h2>
            <div className="mt-5 space-y-6">
              {guide.faq.map((item) => (
                <div key={item.question}>
                  <h3 className="font-headline font-bold text-ink">
                    {item.question}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-muted">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
              {dict.taskPage.title}
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {tasks.map((task) => (
                <Link
                  key={task.slug}
                  href={localePath(lang, `/${task.slug}`)}
                  className="group rounded-2xl border border-ink/10 bg-white px-5 py-4 text-sm font-semibold text-ink transition-colors hover:border-ink/25"
                >
                  {task.title}
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
              {dict.services.eyebrow}
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={localePath(lang, `/services/${service.slug}`)}
                    className="inline-flex rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-ink/35"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14 rounded-3xl border border-ink/10 bg-surface p-7">
            <h2 className="font-headline text-xl font-bold text-ink">
              {dict.guidePage.ctaTitle}
            </h2>
            <p className="mt-2 leading-relaxed text-muted">
              {dict.guidePage.ctaBody}
            </p>
            <div className="mt-6">
              <ServiceCTA lang={lang} />
            </div>
          </section>

          {related.length > 0 && (
            <section className="mt-14">
              <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
                {dict.guidePage.relatedTitle}
              </h2>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={localePath(lang, `/guides/${item.slug}`)}
                    className="group rounded-2xl border border-ink/10 bg-white px-5 py-4 transition-colors hover:border-ink/25"
                  >
                    <span className="block font-headline font-bold text-ink">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">
                      {item.summary}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer lang={lang} />
      <MobileCallBar lang={lang} />
    </>
  );
}
