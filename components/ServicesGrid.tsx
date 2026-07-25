import Link from "next/link";
import { Eyebrow } from "@/components/Button";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import { getLocalizedServices } from "@/lib/services";

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
};

export default function ServicesGrid({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const services = getLocalizedServices(lang);

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
          {services.map((service) => (
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
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-ink">
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
          ))}
        </div>
      </div>
    </section>
  );
}
