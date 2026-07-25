import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import Breadcrumb from "@/components/Breadcrumb";
import { ButtonAnchor, ButtonLink, ButtonSubmit, Eyebrow } from "@/components/Button";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/config";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";

export default function ContactView({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  const info = [
    { label: dict.contactPage.phoneLabel, value: PHONE_DISPLAY, href: PHONE_HREF },
    { label: dict.contactPage.hoursLabel, value: dict.contactPage.hoursValue },
    { label: dict.contactPage.areaLabel, value: dict.contactPage.areaValue },
  ];

  return (
    <>
      <Header lang={lang} path="/contact" />
      <Breadcrumb
        lang={lang}
        items={[
          { name: dict.nav.home, path: localePath(lang, "/") },
          { name: dict.nav.contact, path: localePath(lang, "/contact") },
        ]}
      />
      <main className="flex-1 pb-24 lg:pb-0">
        <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <Eyebrow>{dict.contactPage.eyebrow}</Eyebrow>
          <h1 className="mt-5 font-headline text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            {dict.contactPage.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {dict.contactPage.lead}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {info.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-ink/10 bg-white px-5 py-4"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    data-event="call_click"
                    className="mt-1 block font-headline text-lg font-bold text-ink hover:text-signal-press"
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="mt-1 font-headline text-lg font-bold text-ink">
                    {item.value}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <ButtonAnchor href={PHONE_HREF} data-event="call_click" variant="primary">
              {dict.common.callNow} — {PHONE_DISPLAY}
            </ButtonAnchor>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div className="rounded-3xl border border-ink/10 bg-white p-8 shadow-sm sm:p-10">
              <h2 className="font-headline text-xl font-extrabold tracking-tight text-ink">
                {dict.contactPage.formTitle}
              </h2>
              <p className="mt-2 text-sm text-muted">{dict.contactPage.formLead}</p>

              <form className="mt-6 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-semibold text-ink"
                    >
                      {dict.hero.fieldName} *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder={dict.hero.fieldNamePlaceholder}
                      className="w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3.5 text-ink outline-none transition-colors focus:border-signal-press"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-semibold text-ink"
                    >
                      {dict.devis.fieldEmail} *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={dict.devis.fieldEmailPlaceholder}
                      className="w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3.5 text-ink outline-none transition-colors focus:border-signal-press"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-semibold text-ink"
                  >
                    {dict.contactPage.fieldMessage} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder={dict.contactPage.fieldMessagePlaceholder}
                    className="w-full resize-y rounded-2xl border border-ink/15 bg-paper px-4 py-3.5 text-ink outline-none transition-colors focus:border-signal-press"
                  />
                </div>

                <ButtonSubmit type="submit" data-event="form_submit" className="w-full">
                  {dict.contactPage.submitCta}
                </ButtonSubmit>
              </form>
            </div>

            <div className="rounded-3xl bg-ink p-8 text-paper">
              <h2 className="font-headline text-lg font-extrabold tracking-tight">
                {dict.contactPage.devisBoxTitle}
              </h2>
              <p className="mt-2 text-sm text-paper/70">{dict.contactPage.devisBoxBody}</p>
              <ButtonLink
                href={localePath(lang, "/devis")}
                data-event="devis_start"
                tone="dark"
                className="mt-6 w-full"
              >
                {dict.contactPage.devisCta}
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
      <MobileCallBar lang={lang} />
    </>
  );
}
