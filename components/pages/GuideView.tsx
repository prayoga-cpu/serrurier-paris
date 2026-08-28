import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCTA from "@/components/ServiceCTA";
import ContactOptions from "@/components/ContactOptions";
import { Eyebrow } from "@/components/Button";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import {
  getLocalizedGuide,
  getLocalizedGuides,
  readingMinutes,
  type GuideSection,
} from "@/lib/guides";
import { getLocalizedServicesFor } from "@/lib/services";
import { getTasksForGuide } from "@/lib/tasks";
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

/**
 * How many sections stay open before the rest collapse.
 *
 * The guides are long on purpose — the depth is what ranks and what answer
 * engines quote (CLAUDE.md §4/§5), so the fix for "too dense" (adjustment brief
 * §1) is to stop showing all of it at once rather than to delete it. Built on
 * <details>, like ContactOptions, so it works with JS disabled and the full text
 * still ships in the raw HTML the crawler sees (CLAUDE.md §7).
 */
const OPEN_SECTIONS = 2;

function ChevronIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform group-open:rotate-180"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function SectionBody({ section }: { section: GuideSection }) {
  return (
    <>
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
    </>
  );
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
  const tasks = getTasksForGuide(guide.slug, lang);
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
        <article className="mx-auto max-w-3xl px-6 py-10 sm:py-14 lg:px-8">
          <Eyebrow>{guide.keyword}</Eyebrow>
          <h1 className="mt-5 font-headline text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-3 text-sm text-muted">
            {dict.guidePage.updatedLabel} {updated} · {readingMinutes(guide)}{" "}
            {dict.guidePage.readingTime}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {guide.lead}
          </p>

          {/* The answer first, the depth underneath — see GuideContent.keyTakeaways. */}
          <section className="mt-8 rounded-3xl border-2 border-signal bg-signal/10 p-5 sm:mt-10 sm:p-7">
            <h2 className="font-headline text-sm font-bold uppercase tracking-wide text-ink">
              {dict.guidePage.takeawaysTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              {guide.keyTakeaways.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink"
                  />
                  <span className="leading-relaxed text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/*
            The way out for someone who is actually locked out. A guide is a
            research page; the task pages are the ones written for a person on a
            phone in a hurry, so the link to them belongs above the fold, not
            1,300 words below it where it used to sit.
          */}
          <section className="mt-6 rounded-3xl border border-ink/15 bg-white p-5 sm:p-7">
            <h2 className="font-headline text-lg font-bold text-ink">
              {dict.guidePage.urgentTitle}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {dict.guidePage.urgentBody}
            </p>
            <div className="mt-5 flex flex-col gap-4">
              <ContactOptions lang={lang} />
              {tasks.length > 0 && (
                <ul className="flex flex-wrap gap-2">
                  {tasks.map((task) => (
                    <li key={task.slug}>
                      <Link
                        href={localePath(lang, `/${task.slug}`)}
                        className="inline-flex rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-ink/35"
                      >
                        {task.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          <nav className="mt-6 rounded-3xl border border-ink/10 bg-surface p-5 sm:mt-8 sm:p-6">
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

          <div className="mt-8 space-y-8 sm:mt-12 sm:space-y-10">
            {guide.sections.map((section, index) => {
              const id = anchor(section.heading, index);

              if (index < OPEN_SECTIONS) {
                return (
                  <section
                    key={section.heading}
                    id={id}
                    className="scroll-mt-24"
                  >
                    <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
                      {section.heading}
                    </h2>
                    <SectionBody section={section} />
                  </section>
                );
              }

              // The id sits on the <details>, so a table-of-contents link lands
              // on the summary even in a browser that will not auto-expand it:
              // the reader arrives at the right heading and taps it open.
              return (
                <details
                  key={section.heading}
                  id={id}
                  className="group scroll-mt-24 border-t border-ink/10 pt-6 sm:pt-8"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                    <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
                      {section.heading}
                    </h2>
                    <span className="mt-1.5 flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-wide text-muted">
                      <span className="group-open:hidden">
                        {dict.guidePage.expandHint}
                      </span>
                      <ChevronIcon />
                    </span>
                  </summary>
                  <SectionBody section={section} />
                </details>
              );
            })}
          </div>

          <section className="mt-10 border-t border-ink/10 pt-8 sm:mt-14 sm:pt-10">
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

          <section className="mt-14 rounded-3xl border border-ink/10 bg-surface p-5 sm:p-7">
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
