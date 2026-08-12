import ContactOptions from "@/components/ContactOptions";
import type { Locale } from "@/lib/i18n";

/**
 * Sticky mobile CTA. A single yellow bar: tapping it opens the call/WhatsApp
 * choice upward, so the bar never shows two competing buttons and the primary
 * action stays one thumb-width wide.
 */
export default function MobileCallBar({ lang }: { lang: Locale }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <ContactOptions
        lang={lang}
        variant="bar"
        drop="up"
        className="[&>div]:left-4 [&>div]:right-4 [&>div]:w-auto"
      />
    </div>
  );
}
