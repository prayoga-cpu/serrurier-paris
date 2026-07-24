import Link from "next/link";
import { SERVICES } from "@/lib/services";

export default function ServicesGrid() {
  return (
    <section id="services" className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-verified">
            Nos interventions
          </p>
          <h2 className="mt-3 font-headline text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Cinq interventions, un même engagement de transparence
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col rounded-2xl border border-ink/10 bg-white p-6 transition-colors hover:border-ink/30"
            >
              <h3 className="font-headline text-lg font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
                {service.summary}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-verified">
                En savoir plus
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
