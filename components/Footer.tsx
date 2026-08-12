import Link from "next/link";
import { LogoWordmark } from "@/components/Logo";
import {
  APE_CODE,
  BRAND_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  SIRET,
  WHATSAPP_HREF,
} from "@/lib/config";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import { getLocalizedServices } from "@/lib/services";

export default function Footer({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const services = getLocalizedServices(lang);

  return (
    <footer className="bg-ink-deep text-paper/65">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <LogoWordmark height={30} className="text-paper" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              {dict.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-headline text-sm font-bold uppercase tracking-wide text-paper">
              {dict.footer.interventions}
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={localePath(lang, `/services/${service.slug}`)}
                    className="transition-colors hover:text-signal"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-sm font-bold uppercase tracking-wide text-paper">
              {dict.footer.information}
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <Link
                  href={localePath(lang, "/")}
                  className="transition-colors hover:text-signal"
                >
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath(lang, "/tarifs")}
                  className="transition-colors hover:text-signal"
                >
                  {dict.footer.pricingGrid}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath(lang, "/devis")}
                  className="transition-colors hover:text-signal"
                >
                  {dict.common.requestQuote}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath(lang, "/zones")}
                  className="transition-colors hover:text-signal"
                >
                  {dict.nav.zones}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath(lang, "/guides")}
                  className="transition-colors hover:text-signal"
                >
                  {dict.nav.guides}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath(lang, "/a-propos")}
                  className="transition-colors hover:text-signal"
                >
                  {dict.aboutPage.eyebrow}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath(lang, "/contact")}
                  className="transition-colors hover:text-signal"
                >
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-sm font-bold uppercase tracking-wide text-paper">
              {dict.footer.contact}
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <a
                  href={PHONE_HREF}
                  data-event="call_click"
                  className="font-headline text-lg font-bold text-signal transition-opacity hover:opacity-80"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="whatsapp_click"
                  className="transition-colors hover:text-signal"
                >
                  {dict.common.whatsapp}
                </a>
              </li>
              <li>{dict.footer.availability}</li>
              <li>{dict.footer.area}</li>
            </ul>
          </div>
        </div>

        {/* Business identifiers + the legal written-quote notice, on every
            page rather than only /tarifs — CLAUDE.md §14 P1.5. SIRET and APE
            render only once lib/config has them; an "en attente" line in the
            footer would read worse than no line at all. */}
        <div className="mt-14 border-t border-paper/10 pt-6 text-xs leading-relaxed">
          <p>
            <span className="text-paper/85">{dict.footer.identity}</span>
            {SIRET && (
              <>
                {" "}
                {dict.footer.siretLabel} : {SIRET}.
              </>
            )}
            {APE_CODE && (
              <>
                {" "}
                {dict.footer.apeLabel} : {APE_CODE}.
              </>
            )}
          </p>
          <p className="mt-1.5">{dict.footer.writtenQuote}</p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-paper/10 pt-6 text-xs">
          <span>
            © {new Date().getFullYear()} {BRAND_NAME}. {dict.footer.rights}
          </span>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href={localePath(lang, "/mentions-legales")}
              className="transition-colors hover:text-signal"
            >
              {dict.legal.mentionsNav}
            </Link>
            <Link
              href={localePath(lang, "/cgv")}
              className="transition-colors hover:text-signal"
            >
              {dict.legal.cgvNav}
            </Link>
            <Link
              href={localePath(lang, "/politique-de-confidentialite")}
              className="transition-colors hover:text-signal"
            >
              {dict.legal.privacyNav}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
