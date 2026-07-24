import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import MobileCallBar from "@/components/MobileCallBar";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCTA from "@/components/ServiceCTA";
import { getService, SERVICES } from "@/lib/services";
import { BRAND_NAME } from "@/lib/config";
import { JsonLd, serviceSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: `${service.title} à Paris — ${BRAND_NAME}`,
    description: `${service.summary} Intervention par un artisan indépendant, tarif annoncé avant travaux.`,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <Header />
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faq)} />
      <Breadcrumb
        items={[
          { name: "Accueil", path: "/" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />
      <main className="flex-1 pb-20 lg:pb-0">
        <section className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-verified">
            {service.keyword}
          </p>
          <h1 className="mt-3 font-headline text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            {service.title} à Paris
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            {service.problem}
          </p>

          <div className="mt-10">
            <ServiceCTA />
          </div>

          <div className="mt-14 space-y-10">
            <div>
              <h2 className="font-headline text-2xl font-semibold text-ink">
                L&apos;intervention
              </h2>
              <p className="mt-3 leading-relaxed text-ink/70">{service.intervention}</p>
            </div>

            <div>
              <h2 className="font-headline text-2xl font-semibold text-ink">
                Ce qui est inclus
              </h2>
              <ul className="mt-3 space-y-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-ink/70">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0 text-verified"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-ink/10 bg-white p-6">
              <h2 className="font-headline text-xl font-semibold text-ink">Tarif</h2>
              <p className="mt-2 text-ink/70">{service.priceNote}</p>
            </div>

            <div>
              <h2 className="font-headline text-2xl font-semibold text-ink">
                Questions fréquentes
              </h2>
              <div className="mt-4 space-y-6">
                {service.faq.map((item) => (
                  <div key={item.question}>
                    <h3 className="font-semibold text-ink">{item.question}</h3>
                    <p className="mt-1.5 leading-relaxed text-ink/70">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-ink/10 pt-10">
            <ServiceCTA />
          </div>
        </section>
      </main>
      <MobileCallBar />
    </>
  );
}
