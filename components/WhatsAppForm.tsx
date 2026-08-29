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

type Status = "idle" | "sending" | "sent" | "failed";

function Spinner() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="animate-spin"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.25"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Submission path for every form on the site.
 *
 * ONE transport, one option. Submitting POSTs to /api/submit, which emails the
 * team and — when the visitor gave an address — sends them a confirmation. That
 * is the whole delivery: it completes without the visitor doing anything else.
 *
 * WhatsApp is then OFFERED, not performed. Until 29/08/2026 this component
 * force-opened wa.me on every submit, which made WhatsApp the transport and the
 * email a duplicate; a visitor without WhatsApp got a dead tab, and one who
 * dismissed the tab had no idea whether the request had gone anywhere. Now the
 * request is sent first and the panel offers WhatsApp for the two cases that
 * actually want it: a genuine emergency, and a visitor who wants the exchange in
 * writing on both sides (CLAUDE.md §6).
 *
 * If the POST fails the panel says so plainly and hands WhatsApp back as the
 * recovery path. It never claims a send that did not happen — the whole brand
 * argument is that we say true things about what we are doing.
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
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [emailed, setEmailed] = useState(false);

  async function deliver(
    fields: SubmissionField[],
    honeypot: string,
  ): Promise<{ ok: boolean; confirmed: boolean }> {
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
        ok?: boolean;
        confirmed?: boolean;
      };
      return {
        ok: response.ok && body.ok !== false,
        // Only claimed when the confirmation actually went out — the panel says
        // "we emailed you a copy", so it had better be true.
        confirmed: response.ok && Boolean(body.confirmed),
      };
    } catch {
      return { ok: false, confirmed: false };
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const data = new FormData(event.currentTarget);
    const honeypot = String(data.get("company_website") ?? "");
    const fields = collectFields(data);
    setMessage(composeMessage(lang, kind, fields));
    setStatus("sending");

    const result = await deliver(fields, honeypot);
    setEmailed(result.confirmed);
    setStatus(result.ok ? "sent" : "failed");
  }

  const panel = status !== "idle" && message !== null;

  return (
    <>
      {/* The form STAYS MOUNTED behind the panel, hidden rather than replaced.
          It used to be swapped out, which threw away every uncontrolled input
          value — so "edit my request" handed back an empty form, and a failed
          send lost the whole lead. */}
      <form
        onSubmit={handleSubmit}
        className={`${className}${panel ? " hidden" : ""}`}
      >
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

      {panel && (
        <div className={className}>
          <div
            role="status"
            aria-live="polite"
            className="rounded-3xl border border-signal bg-cream/40 p-7"
          >
            <h3 className="flex items-center gap-3 font-headline text-xl font-extrabold tracking-tight text-ink">
              {status === "sending" && <Spinner />}
              {status === "sending" && dict.submit.sendingTitle}
              {status === "sent" && dict.submit.sentTitle}
              {status === "failed" && dict.submit.failedTitle}
            </h3>
            <p className="mt-2 leading-relaxed text-ink/80">
              {status === "sending" && dict.submit.sendingBody}
              {status === "sent" && dict.submit.sentBody}
              {status === "failed" && dict.submit.failedBody}
            </p>

            {status === "sent" && emailed && (
              <p className="mt-3 text-sm font-semibold text-ink/70">
                {dict.submit.emailedCopy}
              </p>
            )}

            {status === "sent" && (
              <p className="mt-5 text-sm leading-relaxed text-muted">
                {dict.submit.whatsappFollowUp}
              </p>
            )}

            {status !== "sending" && (
              <>
                <a
                  href={whatsappHref(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="whatsapp_click"
                  className="mt-4 inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
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
                  onClick={() => setStatus("idle")}
                  className="mt-5 text-sm font-semibold text-muted underline-offset-2 hover:text-ink hover:underline"
                >
                  ← {dict.submit.editRequest}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
