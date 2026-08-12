import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from "@/lib/config";
import { getDictionary, type Locale } from "@/lib/i18n";

export function PhoneIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2a9.9 9.9 0 0 0-8.5 15l-1.4 5.1 5.2-1.4A9.9 9.9 0 1 0 12 2Zm0 1.8a8.1 8.1 0 1 1-4.1 15.1l-.3-.2-3.1.8.8-3-.2-.3A8.1 8.1 0 0 1 12 3.8Zm-3.4 4c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.7 4.2 3.7 2.1.8 2.5.7 3 .6.5-.1 1.5-.6 1.7-1.3.2-.6.2-1.2.1-1.3l-.6-.3-1.5-.7c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.5.3-.5v-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.6Z" />
    </svg>
  );
}

type Variant = "primary" | "secondary" | "header" | "bar";

/**
 * One contact control, two channels. There is a single trigger — the phone
 * button — and choosing between a call and WhatsApp happens in the popup it
 * opens, so no surface on the site shows two competing contact buttons.
 *
 * Built on <details>/<summary> like the header menu: the popup opens with no
 * client JS, so the choice survives a JS-disabled visit (CLAUDE.md §7) and this
 * stays a server component.
 */
export default function ContactOptions({
  lang,
  variant = "primary",
  tone = "light",
  className = "",
  align = "left",
  drop = "down",
}: {
  lang: Locale;
  variant?: Variant;
  tone?: "light" | "dark";
  className?: string;
  align?: "left" | "right";
  drop?: "down" | "up";
}) {
  const dict = getDictionary(lang);

  const SUMMARY_BASE =
    "cursor-pointer list-none outline-none marker:content-none focus-visible:ring-2 focus-visible:ring-signal-press focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden";

  const shells: Record<Variant, string> = {
    primary:
      "inline-flex w-full items-center justify-center gap-3 rounded-full bg-signal px-7 py-4 text-base font-semibold text-ink shadow-sm transition-colors hover:bg-signal-hover",
    secondary: `inline-flex w-full items-center justify-center gap-3 rounded-full border px-7 py-4 text-base font-semibold transition-colors ${
      tone === "dark"
        ? "border-paper/25 text-paper hover:border-paper/50"
        : "border-ink/15 text-ink hover:border-ink/35"
    }`,
    header: "flex items-center gap-2.5 rounded-full text-sm font-bold text-ink",
    bar: "flex w-full items-center justify-center gap-2.5 bg-signal px-4 py-4 font-headline text-base font-bold text-ink",
  };

  const badge =
    variant === "primary" || variant === "bar"
      ? "bg-ink text-signal"
      : "bg-signal text-ink";

  return (
    <details className={`group relative ${className}`}>
      <summary
        aria-label={dict.common.contactOptions}
        className={`${SUMMARY_BASE} ${shells[variant]}`}
      >
        {variant === "header" ? (
          <>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-signal text-ink">
              <PhoneIcon />
            </span>
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sr-only sm:hidden">{dict.common.call}</span>
          </>
        ) : variant === "bar" ? (
          <>
            <PhoneIcon size={18} />
            {dict.common.callNow} &mdash; {PHONE_DISPLAY}
          </>
        ) : (
          <>
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${badge}`}
            >
              <PhoneIcon />
            </span>
            {dict.common.callNow} &mdash; {PHONE_DISPLAY}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 transition-transform group-open:rotate-180"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </>
        )}
      </summary>

      <div
        className={`absolute z-50 w-72 max-w-[calc(100vw-2rem)] rounded-2xl border border-ink/10 bg-paper p-2 shadow-xl ${
          drop === "up" ? "bottom-full mb-2" : "top-full mt-2"
        } ${align === "right" ? "right-0" : "left-0"}`}
      >
        <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-muted">
          {dict.common.contactOptions}
        </p>
        <a
          href={PHONE_HREF}
          data-event="call_click"
          className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-surface"
        >
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-signal text-ink">
            <PhoneIcon size={15} />
          </span>
          <span>
            <span className="block text-sm font-bold text-ink">
              {dict.common.phoneCall}
            </span>
            <span className="block text-xs text-muted">{PHONE_DISPLAY}</span>
          </span>
        </a>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          data-event="whatsapp_click"
          className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-surface"
        >
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
            <WhatsAppIcon size={16} />
          </span>
          <span>
            <span className="block text-sm font-bold text-ink">
              {dict.common.whatsapp}
            </span>
            <span className="block text-xs text-muted">
              {dict.common.whatsappHint}
            </span>
          </span>
        </a>
      </div>
    </details>
  );
}
