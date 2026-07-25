import { getDictionary, type Locale } from "@/lib/i18n";
import { PRICE_TIERS, PRICE_OPTIONS, formatPrice } from "@/lib/pricing";
import { getLocalizedServices } from "@/lib/services";

/** Service tiers + add-on options, as checkboxes — shared by the homepage
 * hero (once a postal code checks out) and the full /devis form. Name and
 * price stack vertically (rather than sitting side by side) so long labels
 * can wrap onto two lines without squeezing the price into the same line. */
export default function ServiceChecklist({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const services = getLocalizedServices(lang);

  return (
    <>
      <div>
        <h2 className="font-headline text-lg font-extrabold tracking-tight text-ink">
          {dict.devis.servicesLabel}
        </h2>
        <p className="mt-1 text-sm text-muted">{dict.devis.servicesHint}</p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {PRICE_TIERS.map((tier) => (
            <label
              key={tier.slug}
              className="flex items-start gap-3 rounded-2xl border border-ink/15 px-4 py-3 text-sm has-checked:border-signal-press has-checked:bg-cream/40"
            >
              <input
                type="checkbox"
                name="service"
                value={tier.slug}
                className="mt-0.5 h-4 w-4 shrink-0 accent-signal-press"
              />
              <span className="flex flex-col gap-1">
                <span className="font-medium text-ink">{tier.label[lang]}</span>
                <span className="text-xs text-muted">
                  {dict.pricingPage.from} {formatPrice(tier.price, lang)}
                </span>
              </span>
            </label>
          ))}
          {services
            .filter((s) => !PRICE_TIERS.some((t) => t.serviceSlug === s.slug))
            .map((service) => (
              <label
                key={service.slug}
                className="flex items-start gap-3 rounded-2xl border border-ink/15 px-4 py-3 text-sm has-checked:border-signal-press has-checked:bg-cream/40"
              >
                <input
                  type="checkbox"
                  name="service"
                  value={service.slug}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-signal-press"
                />
                <span className="flex flex-col gap-1">
                  <span className="font-medium text-ink">{service.title}</span>
                  <span className="text-xs text-muted">{dict.pricingPage.onQuote}</span>
                </span>
              </label>
            ))}
          <label className="flex items-center gap-3 rounded-2xl border border-ink/15 px-4 py-3 text-sm has-checked:border-signal-press has-checked:bg-cream/40 sm:col-span-2">
            <input
              type="checkbox"
              name="service"
              value="not-sure"
              className="h-4 w-4 shrink-0 accent-signal-press"
            />
            <span className="font-medium text-ink">{dict.devis.notSureOption}</span>
          </label>
        </div>
      </div>

      <div>
        <h3 className="font-headline text-sm font-bold uppercase tracking-wide text-ink">
          {dict.devis.optionsLabel}
        </h3>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {PRICE_OPTIONS.map((option) => (
            <label
              key={option.slug}
              className="flex items-start gap-3 rounded-2xl border border-ink/15 px-4 py-3 text-sm has-checked:border-signal-press has-checked:bg-cream/40"
            >
              <input
                type="checkbox"
                name="option"
                value={option.slug}
                className="mt-0.5 h-4 w-4 shrink-0 accent-signal-press"
              />
              <span className="flex flex-col gap-1">
                <span className="text-ink">{option.label[lang]}</span>
                <span className="text-xs text-muted">
                  {option.surcharge ? "+ " : ""}
                  {formatPrice(option.price, lang)}
                </span>
              </span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
