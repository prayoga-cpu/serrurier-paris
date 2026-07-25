"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ButtonSubmit, Eyebrow } from "@/components/Button";
import ServiceChecklist from "@/components/ServiceChecklist";
import ContactFields from "@/components/ContactFields";
import { PHONE_HREF } from "@/lib/config";
import { getDictionary, type Locale } from "@/lib/i18n";
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

export default function Hero({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  const [step, setStep] = useState<1 | 2>(1);
  const [postalCode, setPostalCode] = useState("");
  const [status, setStatus] = useState<PostalStatus | null>(null);
  // Drives the fade/slide-in on the step-2 form — flipped a tick after mount
  // so the browser has an initial (hidden) frame to transition from.
  const [revealed, setRevealed] = useState(false);
  const [formCollapsed, setFormCollapsed] = useState(false);

  useEffect(() => {
    if (step !== 2) return;
    const id = requestAnimationFrame(() => setRevealed(true));
    return () => cancelAnimationFrame(id);
  }, [step]);

  function handleCheck(e: FormEvent) {
    e.preventDefault();
    const result = checkPostal(postalCode);
    setStatus(result);
    if (result !== "invalid") setStep(2);
  }

  function handleEditPostal() {
    setRevealed(false);
    setStep(1);
  }

  const stats = [
    { value: dict.hero.stat1Value, label: dict.hero.stat1Label },
    { value: dict.hero.stat2Value, label: dict.hero.stat2Label },
  ];

  return (
    <section className="relative bg-paper">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 lg:px-8 lg:pt-24 lg:pb-14">
        {step === 1 ? (
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>{dict.hero.eyebrow}</Eyebrow>
            <h1 className="mx-auto mt-6 font-headline text-4xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-6xl sm:leading-[1.08] lg:text-7xl lg:leading-[1.05]">
              {dict.hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {dict.hero.lead}
            </p>

            <form
              onSubmit={handleCheck}
              className="mx-auto mt-9 flex max-w-md flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            >
              <div className="flex-1 text-left">
                <input
                  id="postal"
                  name="postal"
                  type="text"
                  inputMode="numeric"
                  maxLength={5}
                  aria-label={dict.devis.postalLabel}
                  placeholder={dict.devis.postalPlaceholder}
                  value={postalCode}
                  onChange={(e) => {
                    setPostalCode(e.target.value.replace(/\D/g, "").slice(0, 5));
                    setStatus(null);
                  }}
                  className="h-14 w-full rounded-2xl border border-ink/15 bg-paper px-4 text-ink outline-none transition-colors focus:border-signal-press"
                />
                {status === "invalid" && (
                  <p className="mt-2 text-sm font-medium text-danger">
                    {dict.devis.postalInvalid}
                  </p>
                )}
              </div>
              <ButtonSubmit type="submit" className="h-14 shrink-0">
                {dict.devis.checkCta}
              </ButtonSubmit>
            </form>

            <p className="mt-4 text-sm text-muted">
              {dict.hero.noPostalHelp}{" "}
              <a
                href={PHONE_HREF}
                data-event="call_click"
                className="font-semibold text-ink underline-offset-2 hover:underline"
              >
                {dict.hero.noPostalCta}
              </a>
            </p>
          </div>
        ) : (
          // Left column only — the form now lives in the floating overlay
          // below, which extends past this section onto the photo band.
          // Capped width so text never runs behind where the card floats.
          <div className="lg:max-w-xl">
            <Eyebrow>{dict.hero.eyebrow}</Eyebrow>
            <h1 className="mt-6 font-headline text-4xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-5xl sm:leading-[1.08] lg:text-6xl lg:leading-[1.05]">
              {dict.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {dict.hero.lead}
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
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
                  <span className="flex flex-col leading-tight">
                    <span className="font-headline text-lg font-extrabold text-ink">
                      {stat.value}
                    </span>
                    <span className="text-sm text-muted">{stat.label}</span>
                  </span>
                </div>
              ))}
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {dict.hero.badges.map((badge) => (
                <li key={badge} className="flex items-start gap-2 text-sm text-muted">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
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
        )}
      </div>

      {/* Full-bleed photo band with an overlapping trust card. */}
      <div className="relative mt-6 lg:mt-10">
        <div
          className="relative h-105 w-full bg-ink bg-cover bg-center bg-fixed sm:h-130"
          style={{ backgroundImage: "url('/paris-bg.jpg')" }}
        >
          <div className="absolute inset-0 backdrop-blur-[1.5px] backdrop-brightness-[0.85]" />
          <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-ink/0" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 sm:pb-20 lg:px-8">
          <div className="-mt-28 max-w-xl rounded-3xl bg-paper p-8 shadow-xl sm:-mt-32 sm:p-10">
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              {dict.hero.photoTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{dict.hero.lead}</p>

            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-ink/8 pt-5">
              {dict.hero.badges.map((badge) => (
                <li
                  key={badge}
                  className="flex items-center gap-1.5 text-xs font-medium text-muted"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-signal-press"
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
      </div>

      {/* Floating request-form card. Absolutely positioned (at lg+) within
          this section's `relative` root, so it isn't confined to the row
          height above and can extend down over the photo band — the effect
          asked for. The inner div replicates the page's own container
          classes (max-w-7xl/px-6/px-8) so its horizontal position lines up
          with the rest of the content; ml-auto + max-w-md then pushes it to
          the right edge. Below lg it drops back into normal flow (position:
          static) — it's the last element in this section's DOM order, so it
          renders after the photo band rather than floating over it, since
          there's no spare width for an overlay on a narrow screen. */}
      {step === 2 && (
        <div className="pointer-events-none relative z-30 mt-6 px-6 lg:absolute lg:inset-x-0 lg:top-24 lg:mx-auto lg:mt-0 lg:max-w-7xl lg:px-8">
          <div
            className={`pointer-events-auto rounded-3xl border border-ink/10 bg-white p-8 shadow-2xl transition-all duration-500 ease-out sm:p-10 lg:ml-auto lg:max-w-md lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto ${
              revealed ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  {dict.hero.formTitle}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {dict.hero.formLead}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setFormCollapsed((v) => !v)}
                aria-expanded={!formCollapsed}
                aria-label={
                  formCollapsed ? dict.devis.expandForm : dict.devis.collapseForm
                }
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-surface"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-300 ${formCollapsed ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>

            {!formCollapsed && (
              <>
                {status === "paris" && (
                  <p className="mt-5 rounded-2xl bg-cream/60 px-4 py-3 text-sm font-medium text-ink">
                    {dict.devis.postalParis}
                  </p>
                )}
                {status === "other" && (
                  <p className="mt-5 rounded-2xl bg-signal/15 px-4 py-3 text-sm leading-relaxed text-ink/80">
                    {dict.devis.postalOther}
                  </p>
                )}

                <form className="mt-7 space-y-7">
                  <ServiceChecklist lang={lang} />
                  <ContactFields lang={lang} postalCode={postalCode} />
                </form>

                <button
                  type="button"
                  onClick={handleEditPostal}
                  className="mt-6 text-sm font-semibold text-muted underline-offset-2 hover:text-ink hover:underline"
                >
                  ← {dict.devis.editPostal}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
