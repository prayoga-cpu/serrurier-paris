"use client";

import type { ChangeEvent } from "react";
import {
  DEFAULT_COUNTRY_CODE,
  flagEmoji,
  otherCountryCodes,
} from "@/lib/countryCodes";
import { getDictionary, type Locale } from "@/lib/i18n";

/** Country-code select + national number, shared by ContactFields (hero,
 * /devis) and B2BEnquiryForm. Full width and on its own row — squeezed next
 * to the name field, the number itself had barely room to be typed into.
 *
 * The select shows a flag + dial code rather than the spelled-out country
 * name: that stays short for every entry, so the row never overflows.
 * That's the "prefix"; the input beside it takes digits only — anything
 * else typed or pasted is stripped as it lands. */
export default function PhoneField({
  lang,
  phoneId = "phone",
  countryId = "phoneCountry",
}: {
  lang: Locale;
  phoneId?: string;
  countryId?: string;
}) {
  const dict = getDictionary(lang);

  function digitsOnly(event: ChangeEvent<HTMLInputElement>) {
    const cleaned = event.currentTarget.value.replace(/[^\d\s]/g, "");
    if (cleaned !== event.currentTarget.value) {
      event.currentTarget.value = cleaned;
    }
  }

  return (
    <div>
      <label
        htmlFor={phoneId}
        className="mb-1.5 block text-sm font-semibold text-ink"
      >
        {dict.hero.fieldPhone} *
      </label>
      <div className="flex gap-2">
        <label htmlFor={countryId} className="sr-only">
          {dict.hero.fieldPhoneCountry}
        </label>
        <select
          id={countryId}
          name="phoneCountry"
          defaultValue={DEFAULT_COUNTRY_CODE.dialCode}
          className="w-28 shrink-0 rounded-2xl border border-ink/15 bg-paper px-2 py-3.5 text-ink outline-none transition-colors focus:border-signal-press"
        >
          <option
            value={DEFAULT_COUNTRY_CODE.dialCode}
            title={DEFAULT_COUNTRY_CODE[lang]}
          >
            {flagEmoji(DEFAULT_COUNTRY_CODE.iso2)}{" "}
            {DEFAULT_COUNTRY_CODE.dialCode}
          </option>
          <option disabled>──────────</option>
          {otherCountryCodes(lang).map((country) => (
            <option
              key={country.iso2}
              value={country.dialCode}
              title={country[lang]}
            >
              {flagEmoji(country.iso2)} {country.dialCode}
            </option>
          ))}
        </select>
        <input
          id={phoneId}
          name="phone"
          type="tel"
          inputMode="numeric"
          pattern="[0-9\s]*"
          required
          placeholder={dict.hero.fieldPhonePlaceholder}
          onChange={digitsOnly}
          className="w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3.5 text-ink outline-none transition-colors focus:border-signal-press"
        />
      </div>
    </div>
  );
}
