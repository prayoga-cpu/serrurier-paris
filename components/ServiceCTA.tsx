import { ButtonAnchor, ButtonLink } from "@/components/Button";
import ContactOptions from "@/components/ContactOptions";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/config";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import type { Audience } from "@/lib/services";

/**
 * `audience` flips the priority, not the options. A consumer locked out wants
 * the call button first; a business or syndic comparing providers wants the
 * costed proposal first and the phone as a fallback (CLAUDE.md §4/§6).
 */
export default function ServiceCTA({
  lang,
  audience = "b2c",
}: {
  lang: Locale;
  audience?: Audience;
}) {
  const dict = getDictionary(lang);

  if (audience === "b2b") {
    return (
      <div className="flex flex-col gap-3 sm:flex-row">
        <ButtonLink
          href="#devis-pro"
          data-event="devis_start"
          variant="primary"
        >
          {dict.common.requestProposal}
        </ButtonLink>
        <ButtonAnchor
          href={PHONE_HREF}
          data-event="call_click"
          variant="secondary"
        >
          {dict.common.call} &mdash; {PHONE_DISPLAY}
        </ButtonAnchor>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
      <ContactOptions lang={lang} />
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
