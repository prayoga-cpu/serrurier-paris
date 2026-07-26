import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCTA from "@/components/ServiceCTA";
import { Eyebrow } from "@/components/Button";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import { PRICE_TIERS, PRICE_OPTIONS, formatPrice } from "@/lib/pricing";
import { getLocalizedServices } from "@/lib/services";

const PRICED_SLUGS = new Set(PRICE_TIERS.map((tier) => tier.serviceSlug));

export default function PricingView({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const services = getLocalizedServices(lang);
  const unpricedServices = services.filter((s) => !PRICED_SLUGS.has(s.slug));

  return (
    <>
      <Header lang={lang} path="/tarifs" />
      <Breadcrumb
        lang={lang}
        items={[
          { name: dict.nav.home, path: localePath(lang, "/") },
          { name: dict.nav.pricing, path: localePath(lang, "/tarifs") },
        ]}
      />
      <main className="flex-1 pb-24 lg:pb-0">
        <section className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
          <Eyebrow>{dict.pricingPage.eyebrow}</Eyebrow>
          <h1 className="mt-5 font-headline text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            {dict.pricingPage.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {dict.pricingPage.lead}
          </p>

          <div className="mt-6 inline-flex items-center gap-2.5 rounded-2xl border border-ink/10 bg-white px-4 py-2.5 shadow-sm">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 text-signal-press"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            <span className="text-sm font-semibold text-ink">
              {dict.pricingPage.responseTime}
            </span>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-ink/10">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-ink text-paper">
                  <th
                    scope="col"
                    className="px-6 py-4 font-headline text-sm font-bold"
                  >
                    {dict.pricingPage.colIntervention}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-headline text-sm font-bold"
                  >
                    {dict.pricingPage.colPrice}
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRICE_TIERS.map((tier, index) => (
                  <tr
                    key={tier.slug}
                    className={index % 2 === 0 ? "bg-paper" : "bg-surface"}
                  >
                    <td className="border-t border-ink/10 px-6 py-4 font-semibold text-ink">
                      <Link
                        href={localePath(lang, `/services/${tier.serviceSlug}`)}
                        className="hover:text-signal-press"
                      >
                        {tier.label[lang]}
                      </Link>
                    </td>
                    <td className="border-t border-ink/10 px-6 py-4 text-muted">
                      {dict.pricingPage.from} {formatPrice(tier.price, lang)}
                    </td>
                  </tr>
                ))}
                {unpricedServices.map((service, index) => (
                  <tr
                    key={service.slug}
                    className={
                      (PRICE_TIERS.length + index) % 2 === 0
                        ? "bg-paper"
                        : "bg-surface"
                    }
                  >
                    <td className="border-t border-ink/10 px-6 py-4 font-semibold text-ink">
                      <Link
                        href={localePath(lang, `/services/${service.slug}`)}
                        className="hover:text-signal-press"
                      >
                        {service.title}
                      </Link>
                    </td>
                    <td className="border-t border-ink/10 px-6 py-4 text-muted">
                      {dict.pricingPage.onQuote}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10">
            <h2 className="font-headline text-xl font-extrabold tracking-tight text-ink">
              {dict.pricingPage.optionsTitle}
            </h2>
            <p className="mt-1.5 text-sm text-muted">
              {dict.pricingPage.optionsLead}
            </p>
            <div className="mt-4 overflow-hidden rounded-3xl border border-ink/10">
              <table className="w-full border-collapse text-left">
                <tbody>
                  {PRICE_OPTIONS.map((option, index) => (
                    <tr
                      key={option.slug}
                      className={index % 2 === 0 ? "bg-paper" : "bg-surface"}
                    >
                      <td className="px-6 py-4 font-medium text-ink">
                        {option.label[lang]}
                      </td>
                      <td className="px-6 py-4 text-muted">
                        {option.surcharge ? "+ " : `${dict.pricingPage.from} `}
                        {formatPrice(option.price, lang)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-signal bg-cream/50 p-6 text-sm leading-relaxed text-ink/80">
            <p>
              <strong className="text-ink">
                {dict.pricingPage.noticeTitle}
              </strong>{" "}
              {dict.pricingPage.noticeBody}
            </p>
          </div>

          <div className="mt-10 space-y-4 text-muted">
            <p>
              <strong className="text-ink">
                {dict.pricingPage.basisTitle}
              </strong>{" "}
              {dict.pricingPage.basisBody}
            </p>
            <p>
              <strong className="text-ink">
                {dict.pricingPage.writtenQuoteTitle}
              </strong>{" "}
              {dict.pricingPage.writtenQuoteBody}
            </p>
          </div>

          <div className="mt-12 border-t border-ink/10 pt-10">
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
              {dict.pricingPage.questionTitle}
            </h2>
            <p className="mt-2 text-muted">{dict.pricingPage.questionBody}</p>
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
