import { ButtonSubmit } from "@/components/Button";
import { getDictionary, type Locale } from "@/lib/i18n";

/** Name/phone/email/address/message + submit — shared by the homepage hero
 * (once a postal code checks out) and the full /devis form. `postalCode`
 * feeds the address placeholder so the field doesn't repeat what step one
 * already collected. */
export default function ContactFields({
  lang,
  postalCode,
}: {
  lang: Locale;
  postalCode: string;
}) {
  const dict = getDictionary(lang);

  return (
    <div className="border-t border-ink/10 pt-8">
      <h2 className="font-headline text-lg font-extrabold tracking-tight text-ink">
        {dict.devis.infoTitle}
      </h2>
      <p className="mt-1 text-sm text-muted">{dict.devis.infoHint}</p>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
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
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-ink">
            {dict.hero.fieldPhone} *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder={dict.hero.fieldPhonePlaceholder}
            className="w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3.5 text-ink outline-none transition-colors focus:border-signal-press"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
          {dict.devis.fieldEmail}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder={dict.devis.fieldEmailPlaceholder}
          className="w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3.5 text-ink outline-none transition-colors focus:border-signal-press"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="address" className="mb-1.5 block text-sm font-semibold text-ink">
          {dict.devis.fieldAddress} *
        </label>
        <input
          id="address"
          name="address"
          type="text"
          required
          placeholder={
            postalCode
              ? `12 rue de la Paix, ${postalCode} Paris`
              : dict.devis.fieldAddressPlaceholder
          }
          className="w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3.5 text-ink outline-none transition-colors focus:border-signal-press"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
          {dict.devis.fieldMessage}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={dict.devis.fieldMessagePlaceholder}
          className="w-full resize-y rounded-2xl border border-ink/15 bg-paper px-4 py-3.5 text-ink outline-none transition-colors focus:border-signal-press"
        />
      </div>

      <ButtonSubmit type="submit" data-event="form_submit" className="mt-6 w-full">
        {dict.devis.submitCta}
      </ButtonSubmit>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        {dict.devis.priceReassurance}
      </p>
    </div>
  );
}
