import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCTA from "@/components/ServiceCTA";
import B2BEnquiryForm from "@/components/B2BEnquiryForm";
import { Eyebrow } from "@/components/Button";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import { ButtonLink } from "@/components/Button";
import { getLocalizedService } from "@/lib/services";
import { getLocalizedGuides } from "@/lib/guides";
import { getTasksForService } from "@/lib/tasks";
import { getLocalizedZonesByKind } from "@/lib/zones";
import { PRICE_TIERS, formatPriceDual } from "@/lib/pricing";
import { JsonLd, serviceSchema, faqSchema } from "@/lib/schema";

export default function ServiceView({
  lang,
  slug,
}: {
  lang: Locale;
  slug: string;
}) {
  const dict = getDictionary(lang);
  const service = getLocalizedService(slug, lang);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const isB2b = service.audience === "b2b";
  const tiers = PRICE_TIERS.filter((t) => t.serviceSlug === service.slug);
  const guides = getLocalizedGuides(lang).slice(0, 2);
  const tasks = getTasksForService(service.slug, lang);
  // A sample of zones rather than all 35: enough to show real coverage and to
  // pass link equity down, without turning the page into a link farm.
  const zones = [
    ...getLocalizedZonesByKind(lang, "arrondissement").slice(0, 8),
    ...getLocalizedZonesByKind(lang, "department"),
  ];

  return (
    <>
      <Header lang={lang} path={path} />
      <JsonLd data={serviceSchema(service, lang)} />
      <JsonLd data={faqSchema(service.faq, lang)} />
      <Breadcrumb
        lang={lang}
        items={[
          { name: dict.nav.home, path: localePath(lang, "/") },
          { name: service.title, path: localePath(lang, path) },
        ]}
      />
      <main className="flex-1 pb-24 lg:pb-0">
        <section className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
          <Eyebrow>{service.keyword}</Eyebrow>
          <h1 className="mt-5 font-headline text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            {service.title} {dict.meta.inParis}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {service.problem}
          </p>

          <div className="mt-10">
            <ServiceCTA lang={lang} audience={service.audience} />
          </div>

          <div className="mt-14 space-y-10">
            <div>
              <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
                {dict.servicePage.intervention}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                {service.intervention}
              </p>
            </div>

            <div>
              <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
                {dict.servicePage.included}
              </h2>
              <ul className="mt-4 space-y-3">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal text-ink">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
                {dict.servicePage.whenToCall}
              </h2>
              <ul className="mt-4 space-y-3">
                {service.whenToCall.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-press" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-ink/10 bg-surface p-7">
              <h2 className="font-headline text-xl font-bold text-ink">
                {dict.servicePage.price}
              </h2>
              <p className="mt-2 text-muted">{service.priceNote}</p>

              {tiers.length > 0 && (
                <div className="mt-5 overflow-hidden rounded-2xl border border-ink/10 bg-paper">
                  <table className="w-full border-collapse text-left text-sm">
                    <tbody>
                      {tiers.map((tier, index) => (
                        <tr
                          key={tier.slug}
                          className={
                            index % 2 === 0 ? "bg-paper" : "bg-surface"
                          }
                        >
                          <td className="px-5 py-3.5 font-semibold text-ink">
                            {tier.label[lang]}
                          </td>
                          <td className="px-5 py-3.5 text-muted">
                            {dict.pricingPage.from}{" "}
                            {formatPriceDual(tier.priceHT, lang)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

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

            <div>
              <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
                {dict.zonePage.processTitle}
              </h2>
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

            <div className="flex gap-4 rounded-3xl border border-signal bg-cream/40 p-7">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-signal text-ink">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z" />
                  <path d="m9.5 12 1.8 1.8L15 10" />
                </svg>
              </span>
              <div>
                <h2 className="font-headline text-xl font-bold text-ink">
                  {dict.servicePage.guaranteeTitle}
                </h2>
                <p className="mt-2 leading-relaxed text-ink/80">
                  {dict.servicePage.guaranteeBody}
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
                {dict.servicePage.faq}
              </h2>
              <div className="mt-5 space-y-6">
                {service.faq.map((item) => (
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
          </div>

          {tasks.length > 0 && (
            <div className="mt-14">
              <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
                {dict.taskPage.title}
              </h2>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {tasks.map((task) => (
                  <Link
                    key={task.slug}
                    href={localePath(lang, `/${task.slug}`)}
                    className="group rounded-2xl border border-ink/10 bg-white px-5 py-4 transition-colors hover:border-ink/25"
                  >
                    <span className="block font-headline font-bold text-ink">
                      {task.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">
                      {task.summary}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-14">
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
              {dict.servicePage.zonesTitle}
            </h2>
            <p className="mt-2 leading-relaxed text-muted">
              {dict.servicePage.zonesLead}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {zones.map((zone) => (
                <li key={zone.slug}>
                  <Link
                    href={localePath(lang, `/${zone.slug}`)}
                    className="inline-flex rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-ink/35"
                  >
                    {zone.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <ButtonLink href={localePath(lang, "/zones")} variant="secondary">
                {dict.servicePage.zonesCta}
              </ButtonLink>
            </div>
          </div>

          <div className="mt-14">
            <Testimonials lang={lang} serviceSlug={service.slug} limit={3} />
          </div>

          <div className="mt-14">
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
              {dict.zonePage.guidesTitle}
            </h2>
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

          {isB2b && (
            <div className="mt-14">
              <B2BEnquiryForm lang={lang} />
            </div>
          )}

          <div className="mt-14 border-t border-ink/10 pt-10">
            <ServiceCTA lang={lang} audience={service.audience} />
          </div>
        </section>
      </main>
      <Footer lang={lang} />
      <MobileCallBar lang={lang} />
    </>
  );
}
