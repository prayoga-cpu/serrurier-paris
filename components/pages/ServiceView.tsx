import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCTA from "@/components/ServiceCTA";
import { Eyebrow } from "@/components/Button";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import { getLocalizedService } from "@/lib/services";
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
            <ServiceCTA lang={lang} />
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

            <div className="rounded-3xl border border-ink/10 bg-surface p-7">
              <h2 className="font-headline text-xl font-bold text-ink">
                {dict.servicePage.price}
              </h2>
              <p className="mt-2 text-muted">{service.priceNote}</p>
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

          <div className="mt-14 border-t border-ink/10 pt-10">
            <ServiceCTA lang={lang} />
          </div>
        </section>
      </main>
      <Footer lang={lang} />
      <MobileCallBar lang={lang} />
    </>
  );
}
