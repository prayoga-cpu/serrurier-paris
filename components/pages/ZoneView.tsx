import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCTA from "@/components/ServiceCTA";
import Testimonials from "@/components/Testimonials";
import { ButtonLink, Eyebrow } from "@/components/Button";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import {
  getDepartmentCities,
  getLocalizedZone,
  getNearbyZones,
  getParentDepartment,
} from "@/lib/zones";
import { getLocalizedServicesFor } from "@/lib/services";
import { getLocalizedGuides } from "@/lib/guides";
import { formatPrice, getStartingPriceHT } from "@/lib/pricing";
import { JsonLd, faqSchema } from "@/lib/schema";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
      {children}
    </h2>
  );
}

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-signal-press transition-transform group-hover:translate-x-0.5"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function ZoneView({
  lang,
  slug,
}: {
  lang: Locale;
  slug: string;
}) {
  const dict = getDictionary(lang);
  const zone = getLocalizedZone(slug, lang);
  if (!zone) notFound();

  const services = getLocalizedServicesFor(lang, "b2c");
  const guides = getLocalizedGuides(lang).slice(0, 3);
  const path = `/${zone.slug}`;
  const isDepartment = zone.kind === "department";
  const cities = isDepartment ? getDepartmentCities(zone.slug, lang) : [];
  const parent = getParentDepartment(zone, lang);
  const nearby = getNearbyZones(zone, lang);

  return (
    <>
      <Header lang={lang} path={path} />
      <JsonLd data={faqSchema(zone.faq, lang)} />
      <Breadcrumb
        lang={lang}
        items={[
          { name: dict.nav.home, path: localePath(lang, "/") },
          { name: dict.nav.zones, path: localePath(lang, "/zones") },
          ...(parent
            ? [
                {
                  name: parent.title,
                  path: localePath(lang, `/${parent.slug}`),
                },
              ]
            : []),
          { name: zone.title, path: localePath(lang, path) },
        ]}
      />
      <main className="flex-1 pb-24 lg:pb-0">
        <section className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
          <Eyebrow>{zone.keyword}</Eyebrow>
          <h1 className="mt-5 font-headline text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            {zone.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {zone.intro}
          </p>

          <div className="mt-10">
            <ServiceCTA lang={lang} />
          </div>

          {/* Local substance first — the part of this page no competitor can
              lift off a template. */}
          <div className="mt-14">
            <SectionHeading>{dict.zonePage.contextTitle}</SectionHeading>
            <div className="mt-4 space-y-4">
              {zone.localContext.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h2 className="font-headline text-lg font-extrabold tracking-tight text-ink">
                {dict.zonePage.landmarksTitle}
              </h2>
              <ul className="mt-3 space-y-2">
                {zone.landmarks.map((landmark) => (
                  <li
                    key={landmark}
                    className="flex items-start gap-2 text-muted"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 shrink-0 text-signal-press"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-headline text-lg font-extrabold tracking-tight text-ink">
                {isDepartment
                  ? dict.zonePage.otherCitiesTitle
                  : dict.zonePage.neighborhoodsTitle}
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {zone.neighborhoods.map((neighborhood) => (
                  <li
                    key={neighborhood}
                    className="rounded-full border border-ink/15 px-3 py-1.5 text-sm text-ink"
                  >
                    {neighborhood}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14">
            <SectionHeading>{dict.zonePage.commonJobsTitle}</SectionHeading>
            <ul className="mt-5 space-y-3">
              {zone.commonJobs.map((job) => (
                <li
                  key={job}
                  className="flex items-start gap-3 leading-relaxed text-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-press" />
                  {job}
                </li>
              ))}
            </ul>
          </div>

          {cities.length > 0 && (
            <div className="mt-14">
              <SectionHeading>{dict.zonePage.citiesTitle}</SectionHeading>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={localePath(lang, `/${city.slug}`)}
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-ink/10 bg-white px-5 py-4 text-sm font-semibold text-ink transition-colors hover:border-ink/25"
                  >
                    {city.title}
                    <Arrow />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Price on the page itself, not behind a click. */}
          <div className="mt-14">
            <SectionHeading>{dict.zonePage.pricingTitle}</SectionHeading>
            <p className="mt-2 leading-relaxed text-muted">
              {dict.zonePage.pricingLead}
            </p>
            <div className="mt-5 overflow-hidden rounded-3xl border border-ink/10">
              <table className="w-full border-collapse text-left text-sm">
                <tbody>
                  {services.map((service, index) => {
                    const startingPriceHT = getStartingPriceHT(service.slug);
                    return (
                      <tr
                        key={service.slug}
                        className={index % 2 === 0 ? "bg-paper" : "bg-surface"}
                      >
                        <td className="px-5 py-3.5 font-semibold text-ink">
                          <Link
                            href={localePath(lang, `/services/${service.slug}`)}
                            className="hover:text-signal-press"
                          >
                            {service.title}
                          </Link>
                        </td>
                        <td className="px-5 py-3.5 text-muted">
                          {startingPriceHT === undefined
                            ? dict.pricingPage.onQuote
                            : `${dict.pricingPage.from} ${formatPrice(startingPriceHT, lang)}`}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="mt-5">
              <ButtonLink
                href={localePath(lang, "/tarifs")}
                data-event="tarifs_view"
                variant="secondary"
              >
                {dict.zonePage.pricingCta}
              </ButtonLink>
            </div>
          </div>

          <div className="mt-14">
            <SectionHeading>{dict.zonePage.processTitle}</SectionHeading>
            <ol className="mt-6 space-y-6">
              {dict.zonePage.processSteps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-signal font-headline font-extrabold text-ink">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-headline font-bold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-14">
            <SectionHeading>{dict.zonePage.trustTitle}</SectionHeading>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {dict.trust.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-ink/10 bg-white p-5"
                >
                  <h3 className="font-headline text-sm font-bold text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <SectionHeading>{dict.zonePage.servicesTitle}</SectionHeading>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={localePath(lang, `/services/${service.slug}`)}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-ink/10 bg-white px-5 py-4 text-sm font-semibold text-ink transition-colors hover:border-ink/25"
                >
                  {service.title}
                  <Arrow />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <Testimonials lang={lang} zone={zone.title} limit={3} />
          </div>

          <div className="mt-14">
            <SectionHeading>{dict.zonePage.faqTitle}</SectionHeading>
            <div className="mt-5 space-y-6">
              {zone.faq.map((item) => (
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
          </div>

          <div className="mt-14">
            <SectionHeading>{dict.zonePage.guidesTitle}</SectionHeading>
            <p className="mt-2 leading-relaxed text-muted">
              {dict.zonePage.guidesLead}
            </p>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {guides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={localePath(lang, `/guides/${guide.slug}`)}
                  className="group rounded-2xl border border-ink/10 bg-white px-5 py-4 transition-colors hover:border-ink/25"
                >
                  <span className="block font-headline text-sm font-bold text-ink">
                    {guide.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">
                    {guide.summary}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {nearby.length > 0 && (
            <div className="mt-14">
              <SectionHeading>{dict.zonePage.nearbyTitle}</SectionHeading>
              <ul className="mt-5 flex flex-wrap gap-2">
                {nearby.map((z) => (
                  <li key={z.slug}>
                    <Link
                      href={localePath(lang, `/${z.slug}`)}
                      className="inline-flex rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-ink/35"
                    >
                      {z.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-14 rounded-3xl border border-ink/10 bg-surface p-7">
            <h2 className="font-headline text-xl font-bold text-ink">
              {dict.zonePage.notListedTitle}
            </h2>
            <p className="mt-2 leading-relaxed text-muted">
              {dict.zonePage.notListedBody}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonLink
                href={localePath(lang, "/devis")}
                data-event="devis_start"
                variant="secondary"
              >
                {dict.zonePage.notListedCta}
              </ButtonLink>
              {parent && (
                <ButtonLink
                  href={localePath(lang, `/${parent.slug}`)}
                  variant="secondary"
                >
                  {dict.zonePage.backToDepartment}
                </ButtonLink>
              )}
            </div>
          </div>

          <div className="mt-14 border-t border-ink/10 pt-10">
            <SectionHeading>{dict.zonePage.ctaTitle}</SectionHeading>
            <p className="mt-2 text-muted">{dict.zonePage.ctaBody}</p>
            <div className="mt-7">
              <ServiceCTA lang={lang} />
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
      <MobileCallBar lang={lang} />
    </>
  );
}
