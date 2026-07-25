import { ButtonAnchor, ButtonLink } from "@/components/Button";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/config";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";

export default function ServiceCTA({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <ButtonAnchor href={PHONE_HREF} data-event="call_click" variant="primary">
        {dict.common.callNow} &mdash; {PHONE_DISPLAY}
      </ButtonAnchor>
      <ButtonLink
        href={localePath(lang, "/devis")}
        data-event="devis_start"
        variant="secondary"
      >
        {dict.common.requestQuote}
      </ButtonLink>
    </div>
  );
}
