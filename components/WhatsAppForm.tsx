"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { WhatsAppIcon } from "@/components/ContactOptions";
import { PHONE_DISPLAY, PHONE_HREF, whatsappHref } from "@/lib/config";
import { getDictionary, type Locale } from "@/lib/i18n";
import {
  collectFields,
  composeMessage,
  type FormKind,
  type SubmissionField,
} from "@/lib/submission";

export type { FormKind };

/**
 * Submission path for every form on the site. Two transports, on purpose:
 *
 * 1. POST to /api/submit, which emails the team and — when the visitor gave an
 *    address — sends them a confirmation. This is the reliable leg: it needs
 *    nothing further from the visitor.
 * 2. WhatsApp, opened with the request pre-composed. This is what §6 asked for
 *    and it stays: the visitor sees exactly what is being sent, and the quoted
 *    price ends up in writing on both sides.
 *
 * WhatsApp is now the follow-up rather than the transport, which is the
 * handover CLAUDE.md §6 described for "when a backend lands".
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
  const [emailed, setEmailed] = useState(false);

  async function deliver(fields: SubmissionField[], honeypot: string) {
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind,
          locale: lang,
          fields,
          page: window.location.pathname,
          company_website: honeypot,
        }),
      });
      const body = (await response.json().catch(() => ({}))) as {
        confirmed?: boolean;
      };
      // Only claimed when the confirmation actually went out — the panel says
      // "we emailed you a copy", so it had better be true.
      setEmailed(response.ok && Boolean(body.confirmed));
    } catch {
      setEmailed(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const honeypot = String(data.get("company_website") ?? "");
    const fields = collectFields(data);
    const composed = composeMessage(lang, kind, fields);
    setMessage(composed);

    // Open straight away — this is inside a user gesture, so it isn't blocked.
    // The panel below repeats the link for the cases where it is.
    window.open(whatsappHref(composed), "_blank", "noopener,noreferrer");

    void deliver(fields, honeypot);
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

          {emailed && (
            <p className="mt-3 text-sm font-semibold text-ink/70">
              {dict.submit.emailedCopy}
            </p>
          )}

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

      {/* Honeypot. Hidden from people and from screen readers; bots fill it
          and /api/submit drops the submission. */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor={`company_website_${kind}`}>Company website</label>
        <input
          id={`company_website_${kind}`}
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
    </form>
  );
}
