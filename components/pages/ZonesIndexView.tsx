import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import Breadcrumb from "@/components/Breadcrumb";
import { ButtonLink, Eyebrow } from "@/components/Button";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import { getLocalizedZonesByKind, type LocalizedZone } from "@/lib/zones";

function ZoneCard({
  lang,
  zone,
  subtitle,
  learnMore,
}: {
  lang: Locale;
  zone: LocalizedZone;
  subtitle: string;
  learnMore: string;
}) {
  return (
    <Link
      href={localePath(lang, `/${zone.slug}`)}
      className="group flex flex-col rounded-3xl border border-ink/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-signal">
        <span className="font-headline text-lg font-extrabold">
          {zone.number}
        </span>
      </div>
      <h3 className="mt-4 font-headline text-lg font-bold text-ink">
        {zone.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {subtitle}
      </p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-ink">
        {learnMore}
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
}

export default function ZonesIndexView({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const arrondissements = getLocalizedZonesByKind(lang, "arrondissement");
  const departments = getLocalizedZonesByKind(lang, "department");

  return (
    <>
      <Header lang={lang} path="/zones" />
      <Breadcrumb
        lang={lang}
        items={[
          { name: dict.nav.home, path: localePath(lang, "/") },
          { name: dict.nav.zones, path: localePath(lang, "/zones") },
        ]}
      />
      <main className="flex-1 pb-24 lg:pb-0">
        <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <Eyebrow>{dict.zonesIndexPage.eyebrow}</Eyebrow>
          <h1 className="mt-5 font-headline text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            {dict.zonesIndexPage.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {dict.zonesIndexPage.lead}
          </p>

          <div className="mt-14">
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
              {dict.zonesIndexPage.parisTitle}
            </h2>
            <p className="mt-2 max-w-2xl leading-relaxed text-muted">
              {dict.zonesIndexPage.parisLead}
            </p>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {arrondissements.map((zone) => (
                <ZoneCard
                  key={zone.slug}
                  lang={lang}
                  zone={zone}
                  subtitle={zone.neighborhoods.slice(0, 3).join(" · ")}
                  learnMore={dict.common.learnMore}
                />
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
              {dict.zonesIndexPage.idfTitle}
            </h2>
            <p className="mt-2 max-w-2xl leading-relaxed text-muted">
              {dict.zonesIndexPage.idfLead}
            </p>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {departments.map((zone) => (
                <ZoneCard
                  key={zone.slug}
                  lang={lang}
                  zone={zone}
                  subtitle={zone.neighborhoods.slice(0, 4).join(" · ")}
                  learnMore={dict.common.learnMore}
                />
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-3xl border border-ink/10 bg-surface p-7">
            <h2 className="font-headline text-xl font-bold text-ink">
              {dict.zonePage.notListedTitle}
            </h2>
            <p className="mt-2 leading-relaxed text-muted">
              {dict.zonePage.notListedBody}
            </p>
            <div className="mt-5">
              <ButtonLink
                href={localePath(lang, "/devis")}
                data-event="devis_start"
                variant="secondary"
              >
                {dict.zonePage.notListedCta}
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
      <MobileCallBar lang={lang} />
    </>
  );
}
