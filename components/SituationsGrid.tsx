import Link from "next/link";
import { Eyebrow } from "@/components/Button";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import { getLocalizedTasks } from "@/lib/tasks";
import { formatPrice, getStartingPriceHT } from "@/lib/pricing";

/**
 * Symptom-first entry points. Someone in trouble doesn't search for "lock
 * replacement", they search for what happened to them — so the homepage offers
 * the situation, with its price, alongside the service catalogue.
 */
export default function SituationsGrid({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const tasks = getLocalizedTasks(lang);

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <Eyebrow>{dict.taskPage.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-headline text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {dict.taskPage.title}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            {dict.taskPage.lead}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => {
            const startingPriceHT = getStartingPriceHT(task.serviceSlug);
            return (
              <Link
                key={task.slug}
                href={localePath(lang, `/${task.slug}`)}
                className="group flex flex-col rounded-3xl border border-ink/10 bg-paper p-6 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="font-headline text-lg font-bold text-ink">
                  {task.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {task.summary}
                </p>
                {startingPriceHT !== undefined && (
                  <span className="mt-4 inline-flex w-fit rounded-full bg-cream px-3 py-1 text-sm font-bold text-ink">
                    {dict.pricingPage.from} {formatPrice(startingPriceHT, lang)}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
