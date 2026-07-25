import Link from "next/link";
import { LOCALES, localePath, getDictionary, type Locale } from "@/lib/i18n";

const LABELS: Record<Locale, string> = { fr: "FR", en: "EN" };

/**
 * `path` is the locale-agnostic path of the current page ("/", "/tarifs",
 * "/services/ouverture-de-porte"), so each link lands on this same page in the
 * other language rather than dumping the visitor on the home page.
 */
export default function LanguageSwitcher({
  lang,
  path,
  className = "",
}: {
  lang: Locale;
  path: string;
  /** Pass "w-full" where the switcher should stretch to fill its container
   * (e.g. the mobile menu panel) — left empty it stays a compact pill. */
  className?: string;
}) {
  const dict = getDictionary(lang);

  return (
    <nav
      aria-label={dict.common.switchLanguage}
      className={`flex items-center rounded-full border border-ink/15 p-0.5 ${className}`}
    >
      {LOCALES.map((locale) => {
        const active = locale === lang;
        return (
          <Link
            key={locale}
            href={localePath(locale, path)}
            hrefLang={locale}
            aria-current={active ? "true" : undefined}
            className={
              active
                ? "flex-1 rounded-full bg-ink px-2.5 py-1.5 text-center text-xs font-bold text-paper"
                : "flex-1 rounded-full px-2.5 py-1.5 text-center text-xs font-bold text-muted transition-colors hover:text-ink"
            }
          >
            {LABELS[locale]}
          </Link>
        );
      })}
    </nav>
  );
}
