import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCTA from "@/components/ServiceCTA";
import { Eyebrow } from "@/components/Button";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import { getLocalizedZone } from "@/lib/zones";
import { getLocalizedServices } from "@/lib/services";
import { JsonLd, faqSchema } from "@/lib/schema";

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

  const services = getLocalizedServices(lang);
  const path = `/${zone.slug}`;

  return (
    <>
      <Header lang={lang} path={path} />
      <JsonLd data={faqSchema(zone.faq, lang)} />
      <Breadcrumb
        lang={lang}
        items={[
          { name: dict.nav.home, path: localePath(lang, "/") },
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
                {dict.zonePage.neighborhoodsTitle}
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
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
              {dict.zonePage.servicesTitle}
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={localePath(lang, `/services/${service.slug}`)}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-ink/10 bg-white px-5 py-4 text-sm font-semibold text-ink transition-colors hover:border-ink/25"
                >
                  {service.title}
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
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
              {dict.zonePage.faqTitle}
            </h2>
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

          <div className="mt-14 border-t border-ink/10 pt-10">
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
              {dict.zonePage.ctaTitle}
            </h2>
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
