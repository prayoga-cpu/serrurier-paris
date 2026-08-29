import { ButtonSubmit } from "@/components/Button";
import { getDictionary, type Locale } from "@/lib/i18n";

/** Name/phone/email/address/message + submit — shared by the homepage hero
 * (once a postal code checks out) and the full /devis form. `postalCode`
 * feeds the address placeholder so the field doesn't repeat what step one
 * already collected.
 *
 * `addressDefault` is set when the visitor started from "use my location":
 * the Base Adresse Nationale result, house number included, prefilled so a
 * one-tap start stays one tap. It is a defaultValue, not a value — the field
 * stays editable, because a GPS fix can land on the building next door. */
export default function ContactFields({
  lang,
  postalCode,
  addressDefault = "",
}: {
  lang: Locale;
  postalCode: string;
  addressDefault?: string;
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
            htmlFor="phone"
            className="mb-1.5 block text-sm font-semibold text-ink"
          >
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

      <div className="mt-5">
        <label
          htmlFor="address"
          className="mb-1.5 block text-sm font-semibold text-ink"
        >
          {dict.devis.fieldAddress} *
        </label>
        <input
          // Remounts when a location arrives, so the detected address lands in
          // an uncontrolled field that was already on screen.
          key={addressDefault}
          id="address"
          name="address"
          type="text"
          required
          defaultValue={addressDefault}
          placeholder={
            postalCode
              ? `12 rue de la Paix, ${postalCode} Paris`
              : dict.devis.fieldAddressPlaceholder
          }
          className="w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3.5 text-ink outline-none transition-colors focus:border-signal-press"
        />
        {addressDefault && (
          <p className="mt-1.5 text-sm text-muted">{dict.hero.geoFound}</p>
        )}
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-semibold text-ink"
        >
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

      <ButtonSubmit
        type="submit"
        data-event="form_submit"
        className="mt-6 w-full"
      >
        {dict.devis.submitCta}
      </ButtonSubmit>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        {dict.devis.priceReassurance}
      </p>
    </div>
  );
}
