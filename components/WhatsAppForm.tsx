"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { WhatsAppIcon } from "@/components/ContactOptions";
import { PHONE_DISPLAY, PHONE_HREF, whatsappHref } from "@/lib/config";
import { getDictionary, type Locale } from "@/lib/i18n";

export type FormKind = "quote" | "contact" | "pro";

/**
 * Submission path for every form on the site.
 *
 * There is no form backend yet (CLAUDE.md §2/§13), and a form that silently
 * goes nowhere is worse than no form. So on submit we compose the request into
 * a readable message and hand it to WhatsApp: the visitor sees exactly what is
 * being sent, the request actually arrives, and the quoted price ends up in
 * writing on both sides — which is the positioning, not a workaround.
 *
 * When a backend lands, POST from `handleSubmit` and keep the WhatsApp panel as
 * the follow-up step rather than the transport.
 */
export default function WhatsAppForm({
  lang,
  kind,
  children,
  className = "",
}: {
  lang: Locale;
  kind: FormKind;
  children: ReactNode;
  className?: string;
}) {
  const dict = getDictionary(lang);
  const [message, setMessage] = useState<string | null>(null);

  // Field name → human label, so the message reads like a request rather than
  // a form dump. Unknown names fall back to the raw key.
  const LABELS: Record<string, string> = {
    service: dict.submit.fieldService,
    option: dict.submit.fieldOption,
    postal: dict.submit.fieldPostal,
    booking_date: dict.submit.fieldDate,
    booking_slot: dict.submit.fieldSlot,
    name: dict.hero.fieldName,
    phone: dict.hero.fieldPhone,
    email: dict.devis.fieldEmail,
    address: dict.devis.fieldAddress,
    message: dict.devis.fieldMessage,
    company: dict.submit.fieldCompany,
    role: dict.submit.fieldRole,
    sites: dict.submit.fieldSites,
    need: dict.b2bForm.fieldNeed,
  };

  const HEADERS: Record<FormKind, string> = {
    quote: dict.submit.quoteHeader,
    contact: dict.submit.contactHeader,
    pro: dict.submit.proHeader,
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Group first: checkbox groups (service, option) legitimately repeat.
    const grouped = new Map<string, string[]>();
    for (const [key, value] of data.entries()) {
      if (typeof value !== "string") continue;
      const trimmed = value.trim();
      if (!trimmed) continue;
      grouped.set(key, [...(grouped.get(key) ?? []), trimmed]);
    }

    const lines = [...grouped.entries()].map(
      ([key, values]) => `${LABELS[key] ?? key}: ${values.join(", ")}`,
    );
    const composed = [HEADERS[kind], "", ...lines].join("\n");
    setMessage(composed);

    // Open straight away — this is inside a user gesture, so it isn't blocked.
    // The panel below repeats the link for the cases where it is.
    window.open(whatsappHref(composed), "_blank", "noopener,noreferrer");
  }

  if (message !== null) {
    return (
      <div className={className}>
        <div className="rounded-3xl border border-signal bg-cream/40 p-7">
          <h3 className="font-headline text-xl font-extrabold tracking-tight text-ink">
            {dict.submit.readyTitle}
          </h3>
          <p className="mt-2 leading-relaxed text-ink/80">
            {dict.submit.readyBody}
          </p>

          <a
            href={whatsappHref(message)}
            target="_blank"
            rel="noopener noreferrer"
            data-event="form_submit"
            className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon size={20} />
            {dict.submit.sendWhatsapp}
          </a>

          <p className="mt-4 text-sm text-muted">
            {dict.submit.orCall}{" "}
            <a
              href={PHONE_HREF}
              data-event="call_click"
              className="font-semibold text-ink underline-offset-2 hover:underline"
            >
              {PHONE_DISPLAY}
            </a>
          </p>

          <details className="mt-6">
            <summary className="cursor-pointer text-sm font-semibold text-muted hover:text-ink">
              {dict.submit.summaryLabel}
            </summary>
            <pre className="mt-3 whitespace-pre-wrap rounded-2xl bg-white/70 p-4 font-sans text-sm leading-relaxed text-ink/80">
              {message}
            </pre>
          </details>

          <button
            type="button"
            onClick={() => setMessage(null)}
            className="mt-5 text-sm font-semibold text-muted underline-offset-2 hover:text-ink hover:underline"
          >
            ← {dict.submit.editRequest}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
}
