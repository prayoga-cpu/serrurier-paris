import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/config";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function MobileCallBar({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  return (
    <a
      href={PHONE_HREF}
      data-event="call_click"
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2.5 bg-signal px-4 py-4 font-headline text-base font-bold text-ink lg:hidden"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z" />
      </svg>
      {dict.common.callNow} &mdash; {PHONE_DISPLAY}
    </a>
  );
}
