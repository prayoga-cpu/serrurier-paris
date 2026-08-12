"use client";

import { useState, type FormEvent } from "react";
import { ButtonSubmit } from "@/components/Button";
import ServiceChecklist from "@/components/ServiceChecklist";
import BookingPicker from "@/components/BookingPicker";
import ContactFields from "@/components/ContactFields";
import WhatsAppForm from "@/components/WhatsAppForm";
import ContactOptions from "@/components/ContactOptions";
import { getDictionary, type Locale } from "@/lib/i18n";
import { checkPostal, type PostalStatus } from "@/lib/postal";

export default function DevisForm({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  const [step, setStep] = useState<1 | 2>(1);
  const [postalCode, setPostalCode] = useState("");
  const [status, setStatus] = useState<PostalStatus | null>(null);

  function handleCheck(e: FormEvent) {
    e.preventDefault();
    const result = checkPostal(postalCode);
    setStatus(result);
    if (result !== "invalid") setStep(2);
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-start">
      <div className="rounded-3xl border border-ink/10 bg-white p-8 shadow-sm sm:p-10">
        {step === 1 ? (
          <form onSubmit={handleCheck}>
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
              {dict.devis.step1Title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {dict.devis.step1Lead}
            </p>

            <div className="mt-6">
              <label
                htmlFor="postal"
                className="mb-1.5 block text-sm font-semibold text-ink"
              >
                {dict.devis.postalLabel}
              </label>
              <input
                id="postal"
                name="postal"
                type="text"
                inputMode="numeric"
                maxLength={5}
                placeholder={dict.devis.postalPlaceholder}
                value={postalCode}
                onChange={(e) => {
                  setPostalCode(e.target.value.replace(/\D/g, "").slice(0, 5));
                  setStatus(null);
                }}
                className="w-full max-w-xs rounded-2xl border border-ink/15 bg-paper px-4 py-3.5 text-ink outline-none transition-colors focus:border-signal-press"
              />
              {status === "invalid" && (
                <p className="mt-2 text-sm font-medium text-danger">
                  {dict.devis.postalInvalid}
                </p>
              )}
            </div>

            <ButtonSubmit type="submit" className="mt-6">
              {dict.devis.checkCta}
            </ButtonSubmit>
          </form>
        ) : (
          <div>
            {status === "paris" && (
              <p className="mb-5 rounded-2xl bg-cream/60 px-4 py-3 text-sm font-medium text-ink">
                {dict.devis.postalParis}
              </p>
            )}
            {status === "idf" && (
              <p className="mb-5 rounded-2xl bg-cream/60 px-4 py-3 text-sm leading-relaxed text-ink">
                {dict.devis.postalIdf}
              </p>
            )}
            {status === "other" && (
              <p className="mb-5 rounded-2xl bg-signal/15 px-4 py-3 text-sm leading-relaxed text-ink/80">
                {dict.devis.postalOther}
              </p>
            )}

            <WhatsAppForm lang={lang} kind="quote" className="space-y-8">
              <input type="hidden" name="postal" value={postalCode} />
              <ServiceChecklist lang={lang} />
              <BookingPicker lang={lang} />
              <ContactFields lang={lang} postalCode={postalCode} />
            </WhatsAppForm>

            <button
              type="button"
              onClick={() => setStep(1)}
              className="mt-6 text-sm font-semibold text-muted underline-offset-2 hover:text-ink hover:underline"
            >
              ← {dict.devis.editPostal}
            </button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="rounded-3xl bg-ink p-6 text-paper">
          <h3 className="font-headline text-lg font-extrabold tracking-tight">
            {dict.devis.urgentTitle}
          </h3>
          <p className="mt-1.5 text-sm text-paper/70">
            {dict.devis.urgentLead}
          </p>
          <ContactOptions
            lang={lang}
            variant="secondary"
            tone="dark"
            className="mt-5 w-full"
          />
        </div>

        <ul className="space-y-2.5 rounded-3xl border border-ink/10 bg-white p-6">
          {dict.hero.badges.map((badge) => (
            <li
              key={badge}
              className="flex items-start gap-2.5 text-sm text-ink/80"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 shrink-0 text-signal-press"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
