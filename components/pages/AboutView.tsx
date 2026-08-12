import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCTA from "@/components/ServiceCTA";
import { Eyebrow } from "@/components/Button";
import { APE_CODE, EMAIL, PHONE_DISPLAY, SIRET } from "@/lib/config";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";

/**
 * The E-E-A-T page: who does the work, under what qualifications, with what
 * commitments. Search engines and answer engines both weigh this, and so does
 * a visitor deciding whether to hand over their address at midnight.
 *
 * SIRET and APE render the moment lib/config has them; until then the page says
 * plainly that they're pending rather than showing a placeholder.
 */
export default function AboutView({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} path="/a-propos" />
      <Breadcrumb
        lang={lang}
        items={[
          { name: dict.nav.home, path: localePath(lang, "/") },
          { name: dict.aboutPage.title, path: localePath(lang, "/a-propos") },
        ]}
      />
      <main className="flex-1 pb-24 lg:pb-0">
        <section className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
          <Eyebrow>{dict.aboutPage.eyebrow}</Eyebrow>
          <h1 className="mt-5 font-headline text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            {dict.aboutPage.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {dict.aboutPage.lead}
          </p>

          <div className="mt-10">
            <ServiceCTA lang={lang} />
          </div>

          <div className="mt-14">
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
              {dict.aboutPage.storyTitle}
            </h2>
            <div className="mt-4 space-y-4">
              {dict.aboutPage.story.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
              {dict.aboutPage.credentialsTitle}
            </h2>
            <ul className="mt-5 space-y-3">
              {dict.aboutPage.credentials.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal text-ink">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14">
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
              {dict.aboutPage.commitmentsTitle}
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {dict.aboutPage.commitments.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-ink/10 bg-white p-5"
                >
                  <h3 className="font-headline font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-3xl border border-ink/10 bg-surface p-7">
            <h2 className="font-headline text-xl font-bold text-ink">
              {dict.aboutPage.identityTitle}
            </h2>
            <ul className="mt-4 space-y-2 text-muted">
              <li>{dict.footer.identity}</li>
              <li>
                {dict.contactPage.phoneLabel} : {PHONE_DISPLAY}
              </li>
              <li>Email : {EMAIL}</li>
              <li>
                {dict.contactPage.areaLabel} : {dict.footer.area}
              </li>
              {SIRET && (
                <li>
                  {dict.footer.siretLabel} : {SIRET}
                </li>
              )}
              {APE_CODE && (
                <li>
                  {dict.footer.apeLabel} : {APE_CODE}
                </li>
              )}
            </ul>
            {!SIRET && (
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {dict.aboutPage.identityPending}
              </p>
            )}
          </div>

          <div className="mt-14 border-t border-ink/10 pt-10">
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
              {dict.zonePage.ctaTitle}
            </h2>
            <p className="mt-2 text-muted">{dict.zonePage.ctaBody}</p>
            <div className="mt-7">
              <ServiceCTA lang={lang} />
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
      <MobileCallBar lang={lang} />
    </>
  );
}
