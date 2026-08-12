import { ButtonSubmit } from "@/components/Button";
import WhatsAppForm from "@/components/WhatsAppForm";
import { getDictionary, type Locale } from "@/lib/i18n";

const FIELD =
  "w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3.5 text-ink outline-none transition-colors focus:border-signal-press";
const LABEL = "mb-1.5 block text-sm font-semibold text-ink";

/**
 * The third conversion path (CLAUDE.md §6): businesses and syndics don't go
 * through the emergency estimator. They need to say who they are, how many
 * sites are involved and what the estate looks like — so this asks that, and
 * nothing about a postal code or an urgent slot.
 *
 * The fields are server-rendered, so they exist in the raw HTML with JS
 * disabled; submission is handled by WhatsAppForm, which composes the enquiry
 * into a WhatsApp message until a form backend exists (CLAUDE.md §13).
 */
export default function B2BEnquiryForm({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  const roles = [
    dict.b2bForm.roleEntreprise,
    dict.b2bForm.roleCommercant,
    dict.b2bForm.roleSyndic,
    dict.b2bForm.roleBailleur,
    dict.b2bForm.roleAutre,
  ];

  return (
    <div
      id="devis-pro"
      className="scroll-mt-24 rounded-3xl border border-ink/10 bg-white p-8 shadow-sm sm:p-10"
    >
      <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
        {dict.b2bForm.title}
      </h2>
      <p className="mt-2.5 leading-relaxed text-muted">{dict.b2bForm.lead}</p>

      <WhatsAppForm lang={lang} kind="pro" className="mt-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="company" className={LABEL}>
              {dict.b2bForm.fieldCompany} *
            </label>
            <input
              id="company"
              name="company"
              type="text"
              required
              placeholder={dict.b2bForm.fieldCompanyPlaceholder}
              className={FIELD}
            />
          </div>
          <div>
            <label htmlFor="role" className={LABEL}>
              {dict.b2bForm.fieldRole} *
            </label>
            <select id="role" name="role" required className={FIELD}>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="contact-name" className={LABEL}>
              {dict.hero.fieldName} *
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder={dict.hero.fieldNamePlaceholder}
              className={FIELD}
            />
          </div>
          <div>
            <label htmlFor="contact-phone" className={LABEL}>
              {dict.hero.fieldPhone} *
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              placeholder={dict.hero.fieldPhonePlaceholder}
              className={FIELD}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={LABEL}>
              {dict.devis.fieldEmail} *
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder={dict.devis.fieldEmailPlaceholder}
              className={FIELD}
            />
          </div>
          <div>
            <label htmlFor="sites" className={LABEL}>
              {dict.b2bForm.fieldSites}
            </label>
            <input
              id="sites"
              name="sites"
              type="number"
              min={1}
              inputMode="numeric"
              placeholder={dict.b2bForm.fieldSitesPlaceholder}
              className={FIELD}
            />
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="need" className={LABEL}>
            {dict.b2bForm.fieldNeed} *
          </label>
          <textarea
            id="need"
            name="need"
            rows={4}
            required
            placeholder={dict.b2bForm.fieldNeedPlaceholder}
            className={`${FIELD} resize-y`}
          />
        </div>

        <ButtonSubmit
          type="submit"
          data-event="form_submit"
          className="mt-6 w-full sm:w-auto"
        >
          {dict.b2bForm.submitCta}
        </ButtonSubmit>

        <p className="mt-4 text-xs leading-relaxed text-muted">
          {dict.b2bForm.note}
        </p>
      </WhatsAppForm>
    </div>
  );
}
