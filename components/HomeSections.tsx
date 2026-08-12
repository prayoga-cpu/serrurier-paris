import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import { ButtonLink, Eyebrow } from "@/components/Button";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import { getLocalizedGuides } from "@/lib/guides";
import { getLocalizedZonesByKind } from "@/lib/zones";

/** How a call-out actually runs, on the page where most visitors land first. */
export function ProcessSection({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <Eyebrow>{dict.homeSections.processEyebrow}</Eyebrow>
          <h2 className="mt-5 font-headline text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {dict.zonePage.processTitle}
          </h2>
        </div>
        <ol className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {dict.zonePage.processSteps.map((step, index) => (
            <li key={step.title}>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-signal font-headline text-lg font-extrabold text-ink">
                {index + 1}
              </span>
              <h3 className="mt-5 font-headline text-lg font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Coverage, stated as links rather than as a claim. */
export function CoverageSection({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const arrondissements = getLocalizedZonesByKind(lang, "arrondissement");
  const departments = getLocalizedZonesByKind(lang, "department");

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <Eyebrow>{dict.zonesIndexPage.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-headline text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {dict.homeSections.coverageTitle}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            {dict.homeSections.coverageBody}
          </p>
        </div>

        <ul className="mt-10 flex flex-wrap gap-2">
          {[...arrondissements, ...departments].map((zone) => (
            <li key={zone.slug}>
              <Link
                href={localePath(lang, `/${zone.slug}`)}
                className="inline-flex rounded-full border border-ink/15 bg-paper px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-ink/35"
              >
                {zone.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <ButtonLink href={localePath(lang, "/zones")} variant="secondary">
            {dict.servicePage.zonesCta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

/** Guides + reviews: the two things the benchmark site leans on hardest. */
export function AuthoritySection({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const guides = getLocalizedGuides(lang).slice(0, 3);

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Testimonials lang={lang} limit={3} showEmptyState />

        <div className="mt-16 max-w-2xl">
          <Eyebrow>{dict.guidesIndexPage.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-headline text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {dict.guidesIndexPage.title}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            {dict.guidesIndexPage.lead}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={localePath(lang, `/guides/${guide.slug}`)}
              className="group flex flex-col rounded-3xl border border-ink/10 bg-paper p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="font-headline text-xs font-bold uppercase tracking-[0.12em] text-signal-press">
                {guide.keyword}
              </span>
              <h3 className="mt-3 font-headline text-lg font-bold text-ink">
                {guide.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {guide.summary}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <ButtonLink href={localePath(lang, "/guides")} variant="secondary">
            {dict.homeSections.guidesCta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
