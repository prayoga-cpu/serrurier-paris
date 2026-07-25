import Link from "next/link";
import { LogoWordmark } from "@/components/Logo";
import { BRAND_NAME, PHONE_DISPLAY, PHONE_HREF } from "@/lib/config";
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
              <li>{dict.footer.availability}</li>
              <li>{dict.footer.area}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-paper/10 pt-6 text-xs">
          © {new Date().getFullYear()} {BRAND_NAME}. {dict.footer.rights}
        </div>
      </div>
    </footer>
  );
}
