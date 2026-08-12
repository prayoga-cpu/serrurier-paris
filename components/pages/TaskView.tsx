import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCTA from "@/components/ServiceCTA";
import Testimonials from "@/components/Testimonials";
import { ButtonLink, Eyebrow } from "@/components/Button";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import { getLocalizedTask } from "@/lib/tasks";
import { getLocalizedService } from "@/lib/services";
import { getLocalizedGuide } from "@/lib/guides";
import { PRICE_TIERS, formatPrice } from "@/lib/pricing";
import { JsonLd, faqSchema } from "@/lib/schema";

/**
 * The transactional twin of a guide: someone typing "porte claquée" wants a
 * price and a phone number, not an essay. Symptoms first so they can confirm
 * they're in the right place, then what to do, what not to do, and what it
 * costs — with the call one tap away throughout.
 */
export default function TaskView({
  lang,
  slug,
}: {
  lang: Locale;
  slug: string;
}) {
  const dict = getDictionary(lang);
  const task = getLocalizedTask(slug, lang);
  if (!task) notFound();

  const service = getLocalizedService(task.serviceSlug, lang);
  const guide = task.guideSlug
    ? getLocalizedGuide(task.guideSlug, lang)
    : undefined;
  const tiers = PRICE_TIERS.filter((t) => t.serviceSlug === task.serviceSlug);
  const path = `/${task.slug}`;

  return (
    <>
      <Header lang={lang} path={path} />
      <JsonLd data={faqSchema(task.faq, lang)} />
      <Breadcrumb
        lang={lang}
        items={[
          { name: dict.nav.home, path: localePath(lang, "/") },
          { name: task.title, path: localePath(lang, path) },
        ]}
      />
      <main className="flex-1 pb-24 lg:pb-0">
        <section className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
          <Eyebrow>{task.keyword}</Eyebrow>
          <h1 className="mt-5 font-headline text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            {task.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{task.lead}</p>

          <div className="mt-10">
            <ServiceCTA lang={lang} />
          </div>

          <div className="mt-14">
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
              {dict.taskPage.symptomsTitle}
            </h2>
            <ul className="mt-5 space-y-3">
              {task.symptoms.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 leading-relaxed text-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-press" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14 rounded-3xl border border-signal bg-cream/40 p-7">
            <h2 className="font-headline text-xl font-extrabold tracking-tight text-ink">
              {dict.taskPage.doNowTitle}
            </h2>
            <ol className="mt-5 space-y-4">
              {task.doNow.map((item, index) => (
                <li key={item} className="flex gap-3.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink font-headline text-sm font-extrabold text-signal">
                    {index + 1}
                  </span>
                  <span className="leading-relaxed text-ink/80">{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 rounded-3xl border border-danger/25 bg-danger/5 p-7">
            <h2 className="font-headline text-xl font-extrabold tracking-tight text-ink">
              {dict.taskPage.avoidTitle}
            </h2>
            <ul className="mt-5 space-y-3">
              {task.avoid.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 leading-relaxed text-ink/80"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="mt-1 shrink-0 text-danger"
                    aria-hidden="true"
                  >
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14">
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
              {dict.taskPage.howWeFixTitle}
            </h2>
            <div className="mt-4 space-y-4">
              {task.howWeFix.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {tiers.length > 0 && (
            <div className="mt-14">
              <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
                {dict.taskPage.priceTitle}
              </h2>
              <div className="mt-5 overflow-hidden rounded-3xl border border-ink/10">
                <table className="w-full border-collapse text-left text-sm">
                  <tbody>
                    {tiers.map((tier, index) => (
                      <tr
                        key={tier.slug}
                        className={index % 2 === 0 ? "bg-paper" : "bg-surface"}
                      >
                        <td className="px-5 py-3.5 font-semibold text-ink">
                          {tier.label[lang]}
                        </td>
                        <td className="px-5 py-3.5 text-muted">
                          {dict.pricingPage.from}{" "}
                          {formatPrice(tier.priceHT, lang)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {dict.taskPage.priceNote}
              </p>
            </div>
          )}

          <div className="mt-14">
            <Testimonials
              lang={lang}
              serviceSlug={task.serviceSlug}
              limit={3}
            />
          </div>

          <div className="mt-14">
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
              {dict.zonePage.faqTitle}
            </h2>
            <div className="mt-5 space-y-6">
              {task.faq.map((item) => (
                <div key={item.question}>
                  <h3 className="font-headline font-bold text-ink">
                    {item.question}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-muted">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service && (
              <Link
                href={localePath(lang, `/services/${service.slug}`)}
                className="group rounded-2xl border border-ink/10 bg-white px-5 py-4 transition-colors hover:border-ink/25"
              >
                <span className="block text-xs font-bold uppercase tracking-wide text-muted">
                  {dict.taskPage.serviceLabel}
                </span>
                <span className="mt-1 block font-headline font-bold text-ink">
                  {service.title}
                </span>
              </Link>
            )}
            {guide && (
              <Link
                href={localePath(lang, `/guides/${guide.slug}`)}
                className="group rounded-2xl border border-ink/10 bg-white px-5 py-4 transition-colors hover:border-ink/25"
              >
                <span className="block text-xs font-bold uppercase tracking-wide text-muted">
                  {dict.taskPage.guideLabel}
                </span>
                <span className="mt-1 block font-headline font-bold text-ink">
                  {guide.title}
                </span>
              </Link>
            )}
          </div>

          <div className="mt-14 border-t border-ink/10 pt-10">
            <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
              {dict.zonePage.ctaTitle}
            </h2>
            <p className="mt-2 text-muted">{dict.zonePage.ctaBody}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ServiceCTA lang={lang} />
            </div>
            <div className="mt-5">
              <ButtonLink href={localePath(lang, "/zones")} variant="secondary">
                {dict.servicePage.zonesCta}
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
