import { ButtonLink } from "@/components/Button";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";

export default function TarifsTeaser({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 rounded-4xl bg-signal px-8 py-12 sm:flex-row sm:items-center sm:px-14">
          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-signal">
              {dict.pricingTeaser.eyebrow}
            </span>
            <h2 className="mt-5 font-headline text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              {dict.pricingTeaser.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              {dict.pricingTeaser.body}
            </p>
          </div>
          <ButtonLink
            href={localePath(lang, "/tarifs")}
            data-event="tarifs_view"
            variant="secondary"
            tone="light"
            className="shrink-0 border-ink/25 bg-ink text-paper hover:border-ink hover:bg-ink-deep"
          >
            {dict.pricingTeaser.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
