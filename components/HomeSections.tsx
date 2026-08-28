import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import { ButtonLink, Eyebrow } from "@/components/Button";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import { getLocalizedGuides } from "@/lib/guides";
import { getLocalizedZonesByKind } from "@/lib/zones";

/** Step glyphs for the compact variant, in step order: reach us, we confirm,
 * it's done. Drawn inline rather than imported so the section stays a server
 * component with no icon dependency. */
const STEP_ICONS = [
  // Phone
  "M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z",
  // Shield with a tick — the price is checked and agreed before work starts
  "M12 2 4 5v6c0 4.4 3.1 8.5 8 10 4.9-1.5 8-5.6 8-10V5l-8-3Zm3.8 6.8-4.6 5.9a1 1 0 0 1-1.5.1L7.2 12.3a1 1 0 1 1 1.4-1.4l1.7 1.7 3.9-5a1 1 0 1 1 1.6 1.2Z",
  // Key
  "M14 3a7 7 0 0 0-6.6 9.3L2.3 17.4a1 1 0 0 0-.3.7V21a1 1 0 0 0 1 1h2.9a1 1 0 0 0 .7-.3l1-1V19h1.7a1 1 0 0 0 1-1v-1.7h1.4l1.6-1.6A7 7 0 1 0 14 3Zm2.5 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z",
];

function StepIcon({ index }: { index: number }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={STEP_ICONS[index % STEP_ICONS.length]} />
    </svg>
  );
}

/**
 * How a call-out actually runs.
 *
 * Two variants for two readers. `compact` is the homepage: an emergency visitor
 * on a phone, who needs the shape of the job in one glance — three glyphs, one
 * line each, stacked as cards so it scans in a thumb-scroll. `full` is the zone
 * pages, where the visitor is researching and the longer account earns its
 * space. Client direction 28/08/2026.
 */
export function ProcessSection({
  lang,
  variant = "full",
}: {
  lang: Locale;
  variant?: "full" | "compact";
}) {
  const dict = getDictionary(lang);
  const compact = variant === "compact";
  const steps = compact
    ? dict.homeSections.processStepsShort
    : dict.zonePage.processSteps;

  return (
    <section className="bg-paper">
      <div
        className={`mx-auto max-w-7xl px-6 lg:px-8 ${compact ? "py-14 sm:py-20" : "py-20"}`}
      >
        <div className="max-w-2xl">
          <Eyebrow>{dict.homeSections.processEyebrow}</Eyebrow>
          <h2 className="mt-5 font-headline text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {compact
              ? dict.homeSections.processTitleShort
              : dict.zonePage.processTitle}
          </h2>
        </div>
        <ol
          className={
            compact
              ? "mt-8 grid grid-cols-1 gap-3 sm:mt-10 md:grid-cols-3 md:gap-8"
              : "mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
          }
        >
          {steps.map((step, index) => (
            <li
              key={step.title}
              className={
                compact
                  ? "flex items-start gap-4 rounded-2xl border border-ink/10 bg-white p-4 md:flex-col md:gap-0 md:border-0 md:bg-transparent md:p-0"
                  : undefined
              }
            >
              <span
                className={`flex shrink-0 items-center justify-center rounded-full bg-signal font-headline font-extrabold text-ink ${
                  compact ? "h-10 w-10" : "h-11 w-11 text-lg"
                }`}
              >
                {compact ? <StepIcon index={index} /> : index + 1}
              </span>
              <div className={compact ? "md:mt-5" : "contents"}>
                <h3
                  className={`font-headline font-bold text-ink ${
                    compact ? "text-base md:mt-0" : "mt-5 text-lg"
                  }`}
                >
                  {compact && <span className="text-muted">{index + 1}. </span>}
                  {step.title}
                </h3>
                <p
                  className={`leading-relaxed text-muted ${
                    compact ? "mt-1 text-sm md:text-base" : "mt-2"
                  }`}
                >
                  {step.body}
                </p>
              </div>
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
