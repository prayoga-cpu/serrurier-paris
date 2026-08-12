import Link from "next/link";
import { Eyebrow } from "@/components/Button";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import { formatPrice, getStartingPriceHT } from "@/lib/pricing";
import { getLocalizedServicesFor } from "@/lib/services";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "ouverture-de-porte": (
    <>
      <path d="M13 4 6 5.5v15L13 19V4Z" />
      <path d="M13 4h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-5" />
      <circle cx="10.5" cy="12" r=".8" fill="currentColor" stroke="none" />
    </>
  ),
  "changement-de-serrure": (
    <>
      <circle cx="8" cy="8" r="5" />
      <path d="M11.5 11.5 20 20" />
      <path d="M16 16l2-2M18.5 18.5l2-2" />
    </>
  ),
  "blindage-de-porte": (
    <>
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z" />
      <path d="m9.5 12 1.8 1.8L15 10" />
    </>
  ),
  "serrure-multipoints": (
    <>
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <circle cx="9" cy="9" r="1" fill="currentColor" stroke="none" />
      <circle cx="9" cy="15" r="1" fill="currentColor" stroke="none" />
      <path d="M13 9h4M13 15h4" />
    </>
  ),
  "securisation-apres-effraction": (
    <>
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z" />
      <path d="M12 8v5" />
      <circle cx="12" cy="16" r=".8" fill="currentColor" stroke="none" />
    </>
  ),
  "securisation-locaux-pro": (
    <>
      <path d="M4 9h16v11H4z" />
      <path d="M4 9 5.5 4h13L20 9" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  "contrats-maintenance": (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="m9.5 15 1.8 1.8 3.7-3.7" />
    </>
  ),
};

export default function ServicesGrid({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const services = getLocalizedServicesFor(lang, "b2c");
  const b2bServices = getLocalizedServicesFor(lang, "b2b");

  return (
    <section id="services" className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <Eyebrow>{dict.services.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-headline text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {dict.services.title}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            // Starting price on the card itself, not behind a click — one of
            // the things the reference site does better (CLAUDE.md §15).
            const startingPriceHT = getStartingPriceHT(service.slug);
            return (
              <Link
                key={service.slug}
                href={localePath(lang, `/services/${service.slug}`)}
                className="group flex flex-col rounded-3xl border border-ink/8 bg-paper p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-signal transition-colors group-hover:bg-signal group-hover:text-ink">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {SERVICE_ICONS[service.slug]}
                  </svg>
                </div>
                <h3 className="font-headline text-lg font-bold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {service.summary}
                </p>
                <span className="mt-5 inline-flex w-fit rounded-full bg-cream px-3 py-1 text-sm font-bold text-ink">
                  {startingPriceHT === undefined
                    ? dict.pricingPage.onQuote
                    : `${dict.pricingPage.from} ${formatPrice(startingPriceHT, lang)}`}
                </span>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-ink">
                  {dict.common.learnMore}
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-signal text-ink transition-transform group-hover:translate-x-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </span>
                </span>
              </Link>
            );
          })}
        </div>

        {/* B2B band — businesses and syndics are a first-class audience
            (CLAUDE.md §1), but they don't belong in an emergency-framed grid:
            different intent, different CTA, no tap-to-call. */}
        <div className="mt-16 rounded-3xl bg-ink p-8 text-paper sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <span className="font-headline text-xs font-bold uppercase tracking-[0.18em] text-signal">
                {dict.services.b2bEyebrow}
              </span>
              <h3 className="mt-4 font-headline text-2xl font-extrabold tracking-tight sm:text-3xl">
                {dict.services.b2bTitle}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-paper/70">
                {dict.services.b2bBody}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {b2bServices.map((service) => (
                <Link
                  key={service.slug}
                  href={localePath(lang, `/services/${service.slug}`)}
                  className="group flex items-start gap-4 rounded-2xl border border-paper/15 p-5 transition-colors hover:border-signal"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-signal text-ink">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {SERVICE_ICONS[service.slug]}
                    </svg>
                  </span>
                  <span>
                    <span className="block font-headline font-bold text-paper">
                      {service.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-paper/65">
                      {service.summary}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
