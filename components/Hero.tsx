"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ButtonSubmit, Eyebrow } from "@/components/Button";
import ServiceChecklist from "@/components/ServiceChecklist";
import BookingPicker from "@/components/BookingPicker";
import ContactFields from "@/components/ContactFields";
import Modal from "@/components/Modal";
import WhatsAppForm from "@/components/WhatsAppForm";
import { PHONE_HREF, WHATSAPP_HREF } from "@/lib/config";
import { getDictionary, type Dictionary, type Locale } from "@/lib/i18n";
import { checkPostal, type PostalStatus } from "@/lib/postal";

const STAT_ICONS = [
  // clock
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </>,
  // shield-check
  <>
    <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z" />
    <path d="m9.5 12 1.8 1.8L15 10" />
  </>,
];

function CheckIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-signal-press"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

// Pulsing dot + label — a true, standing claim (the business runs 24/7, see
// dict.hero.stat1Value) rather than a fake live-visitor-style counter.
function AvailableNowBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-semibold text-ink/70 shadow-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      {label}
    </span>
  );
}

// Shared by both steps, so the headline block doesn't shift or resize when the
// postcode is confirmed — only what sits under it changes.
function HeroHeading({ dict }: { dict: Dictionary }) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Eyebrow>{dict.hero.eyebrow}</Eyebrow>
        <AvailableNowBadge label={dict.hero.availableNow} />
      </div>
      <h1 className="mx-auto mt-6 font-headline text-4xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-6xl sm:leading-[1.08] lg:text-7xl lg:leading-[1.05]">
        {dict.hero.title}
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
        {dict.hero.lead}
      </p>
    </>
  );
}

export default function Hero({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  const [step, setStep] = useState<1 | 2>(1);
  const [postalCode, setPostalCode] = useState("");
  const [status, setStatus] = useState<PostalStatus | null>(null);
  // Drives the fade/slide-in on the step-2 content — flipped a tick after
  // mount so the browser has an initial (hidden) frame to transition from.
  const [revealed, setRevealed] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  // True for the brief window between "postal code confirmed" and the step-2
  // render actually mounting — lets step 1 play its exit animation before the
  // layout swaps, instead of vanishing instantly. See handleCheck.
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (step !== 2) return;
    const id = requestAnimationFrame(() => setRevealed(true));
    return () => cancelAnimationFrame(id);
  }, [step]);

  function handleCheck(e: FormEvent) {
    e.preventDefault();
    if (transitioning) return;
    const result = checkPostal(postalCode);
    setStatus(result);
    if (result === "invalid") return;
    setTransitioning(true);
    window.setTimeout(() => {
      setStep(2);
      // The whole point of the postcode gate is to hand the visitor straight
      // to the request form, so it opens itself rather than waiting for a
      // second tap.
      setFormOpen(true);
      setTransitioning(false);
    }, 280);
  }

  function handleEditPostal() {
    setFormOpen(false);
    setRevealed(false);
    setStep(1);
  }

  const stats = [
    { value: dict.hero.stat1Value, label: dict.hero.stat1Label },
    { value: dict.hero.stat2Value, label: dict.hero.stat2Label },
  ];

  return (
    <section className="relative bg-paper">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 text-center lg:px-8 lg:pt-24 lg:pb-14">
        {step === 1 ? (
          <div
            className={`mx-auto max-w-2xl transition-all duration-300 ease-in ${
              transitioning
                ? "pointer-events-none -translate-y-3 scale-95 opacity-0"
                : "translate-y-0 scale-100 opacity-100"
            }`}
          >
            <HeroHeading dict={dict} />

            {/* The postcode field and its button are one centred row; the
                validation message sits below the row rather than inside it,
                so showing an error can't push the button out of line with
                the field. */}
            <form onSubmit={handleCheck} className="mx-auto mt-9 max-w-md">
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <input
                  id="postal"
                  name="postal"
                  type="text"
                  inputMode="numeric"
                  maxLength={5}
                  aria-label={dict.devis.postalLabel}
                  aria-invalid={status === "invalid"}
                  placeholder={dict.devis.postalPlaceholder}
                  value={postalCode}
                  onChange={(e) => {
                    setPostalCode(
                      e.target.value.replace(/\D/g, "").slice(0, 5),
                    );
                    setStatus(null);
                  }}
                  className="h-14 w-full flex-1 rounded-2xl border border-ink/15 bg-paper px-4 text-center text-ink outline-none transition-colors focus:border-signal-press sm:text-left"
                />
                <ButtonSubmit
                  type="submit"
                  disabled={transitioning}
                  className="h-14 shrink-0 disabled:opacity-60"
                >
                  {dict.devis.checkCta}
                </ButtonSubmit>
              </div>
              {status === "invalid" && (
                <p className="mt-2 text-sm font-medium text-danger">
                  {dict.devis.postalInvalid}
                </p>
              )}
            </form>

            <p className="mt-4 text-sm text-muted">
              {dict.hero.noPostalHelp}{" "}
              <a
                href={PHONE_HREF}
                data-event="call_click"
                className="font-semibold text-ink underline-offset-2 hover:underline"
              >
                {dict.hero.noPostalCta}
              </a>{" "}
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_click"
                className="font-semibold text-ink underline-offset-2 hover:underline"
              >
                {dict.common.orWhatsapp}
              </a>
            </p>
          </div>
        ) : (
          // The request form is a modal now, so this column is no longer
          // capped to leave room for a floating card beside it — it keeps the
          // full centred width and the proof points sit under the headline.
          <div
            className={`mx-auto max-w-3xl transition-all duration-500 ease-out ${
              revealed ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <HeroHeading dict={dict} />

            <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-4">
              {stats.map((stat, i) => (
                <div key={stat.value} className="flex items-center gap-2.5">
                  <span className="text-signal-press">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {STAT_ICONS[i]}
                    </svg>
                  </span>
                  <span className="flex flex-col text-left leading-tight">
                    <span className="font-headline text-lg font-extrabold text-ink">
                      {stat.value}
                    </span>
                    <span className="text-sm text-muted">{stat.label}</span>
                  </span>
                </div>
              ))}
            </div>

            <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-3">
              {dict.hero.badges.map((badge) => (
                <li
                  key={badge}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <CheckIcon size={16} />
                  {badge}
                </li>
              ))}
            </ul>

            {/* Re-entry point: the modal opens itself on arrival, so once it's
                dismissed there has to be something obvious that brings it
                back — otherwise closing it strands the visitor mid-request. */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <ButtonSubmit
                type="button"
                onClick={() => setFormOpen(true)}
                data-event="devis_start"
              >
                {dict.hero.formCta}
              </ButtonSubmit>
              <button
                type="button"
                onClick={handleEditPostal}
                className="text-sm font-semibold text-muted underline-offset-2 hover:text-ink hover:underline"
              >
                ← {dict.devis.editPostal}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Full-bleed photo band with an overlapping trust card. */}
      <div className="relative mt-6 lg:mt-10">
        {/* A real <img> rather than a CSS background: a background image is
            invisible to image search and carries no alt text. Plain <img>
            because the build is a static export with next/image unoptimized. */}
        <div className="relative h-105 w-full overflow-hidden bg-ink sm:h-130">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/paris-bg.jpg"
            alt={dict.hero.photoAlt}
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 backdrop-blur-[1.5px] backdrop-brightness-[0.85]" />
          <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-ink/0" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 sm:pb-20 lg:px-8">
          <div className="-mt-28 max-w-xl rounded-3xl bg-paper p-8 shadow-xl sm:-mt-32 sm:p-10">
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              {dict.hero.photoTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {dict.hero.lead}
            </p>

            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-ink/8 pt-5">
              {dict.hero.badges.map((badge) => (
                <li
                  key={badge}
                  className="flex items-center gap-1.5 text-xs font-medium text-muted"
                >
                  <CheckIcon size={14} />
                  {badge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* The request form. A modal on every breakpoint: as a right-hand card it
          competed with the hero copy on desktop, and below the fold on mobile
          it needed a scroll the visitor had no reason to expect. */}
      <Modal
        open={step === 2 && formOpen}
        onClose={() => setFormOpen(false)}
        title={dict.hero.formTitle}
        lead={dict.hero.formLead}
        closeLabel={dict.devis.closeForm}
      >
        {status === "paris" && (
          <p className="mb-6 rounded-2xl bg-cream/60 px-4 py-3 text-sm font-medium text-ink">
            {dict.devis.postalParis}
          </p>
        )}
        {status === "idf" && (
          <p className="mb-6 rounded-2xl bg-cream/60 px-4 py-3 text-sm leading-relaxed text-ink">
            {dict.devis.postalIdf}
          </p>
        )}
        {status === "other" && (
          <p className="mb-6 rounded-2xl bg-signal/15 px-4 py-3 text-sm leading-relaxed text-ink/80">
            {dict.devis.postalOther}
          </p>
        )}

        <WhatsAppForm lang={lang} kind="quote" className="space-y-7">
          <input type="hidden" name="postal" value={postalCode} />
          <ServiceChecklist lang={lang} />
          <BookingPicker lang={lang} />
          <ContactFields lang={lang} postalCode={postalCode} />
        </WhatsAppForm>

        <button
          type="button"
          onClick={handleEditPostal}
          className="mt-6 text-sm font-semibold text-muted underline-offset-2 hover:text-ink hover:underline"
        >
          ← {dict.devis.editPostal}
        </button>
      </Modal>
    </section>
  );
}
