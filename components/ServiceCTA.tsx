import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/config";

export default function ServiceCTA() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={PHONE_HREF}
        data-event="call_click"
        className="flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-base font-semibold text-paper transition-opacity hover:opacity-90"
      >
        Appeler maintenant &mdash; {PHONE_DISPLAY}
      </a>
      <a
        href="/devis"
        data-event="devis_start"
        className="flex items-center justify-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:border-ink/40"
      >
        Demander un devis
      </a>
    </div>
  );
}
