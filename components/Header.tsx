import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { LogoLockup } from "@/components/Logo";
import ContactOptions from "@/components/ContactOptions";
import { NAV_LINKS } from "@/lib/config";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";

export default function Header({ lang, path }: { lang: Locale; path: string }) {
  const dict = getDictionary(lang);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/95 backdrop-blur lg:static lg:border-b-0">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3.5 lg:px-8">
        <div className="flex items-center gap-10 lg:gap-14">
          <Link href={localePath(lang, "/")}>
            <LogoLockup />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={localePath(lang, link.path)}
                className="text-sm font-semibold text-ink/70 transition-colors hover:text-ink"
              >
                {dict.nav[link.key]}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <LanguageSwitcher lang={lang} path={path} />
          </div>

          <ContactOptions lang={lang} variant="header" align="right" />

          {/* Mobile menu — <details>/<summary> gives a working toggle with no
              client JS, consistent with the rest of this static-export site. */}
          <details className="group relative lg:hidden">
            <summary
              aria-label={dict.common.openMenu}
              className="flex h-10 w-10 shrink-0 cursor-pointer list-none items-center justify-center rounded-full border border-ink/15 text-ink outline-none marker:content-none focus-visible:ring-2 focus-visible:ring-signal-press focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-open:hidden"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hidden group-open:block"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </summary>

            <div className="absolute right-0 top-full mt-3 w-64 rounded-2xl border border-ink/10 bg-paper p-4 shadow-xl">
              <nav className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.key}
                    href={localePath(lang, link.path)}
                    className="rounded-xl px-3 py-2.5 text-sm font-semibold text-ink/80 transition-colors hover:bg-surface hover:text-ink"
                  >
                    {dict.nav[link.key]}
                  </Link>
                ))}
              </nav>
              <div className="mt-3 border-t border-ink/10 pt-3">
                <LanguageSwitcher lang={lang} path={path} className="w-full" />
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
