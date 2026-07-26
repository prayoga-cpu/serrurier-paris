import type { Locale } from "@/lib/i18n";

/**
 * Slot options for the planned-appointment picker on /devis and the homepage
 * hero. CLAUDE.md §6 wants a third conversion path (planned booking) distinct
 * from emergency tap-to-call.
 *
 * These are *preferred* slots submitted with the quote request, not confirmed
 * reservations — there's no availability backend, and showing bookable slots
 * we can't honour would be exactly the kind of over-promise this brand exists
 * to avoid. The UI copy says so explicitly.
 */
export const BOOKING_DAYS_AHEAD = 14;

export type TimeSlot = {
  slug: string;
  label: Record<Locale, string>;
  hint: Record<Locale, string>;
};

export const TIME_SLOTS: TimeSlot[] = [
  {
    slug: "morning",
    label: { fr: "Matin", en: "Morning" },
    hint: { fr: "8h – 12h", en: "8am – 12pm" },
  },
  {
    slug: "afternoon",
    label: { fr: "Après-midi", en: "Afternoon" },
    hint: { fr: "12h – 18h", en: "12pm – 6pm" },
  },
  {
    slug: "evening",
    label: { fr: "Soirée", en: "Evening" },
    hint: { fr: "18h – 22h", en: "6pm – 10pm" },
  },
];

const LOCALE_TAG: Record<Locale, string> = { fr: "fr-FR", en: "en-GB" };

export type BookingDay = {
  /** ISO yyyy-mm-dd — what gets submitted. */
  value: string;
  /** Short weekday, e.g. "lun." / "Mon". */
  weekday: string;
  /** Day of month. */
  day: string;
  /** Short month, e.g. "juil." / "Jul". */
  month: string;
};

/**
 * The next `count` days starting today, formatted for the given locale.
 * Computed on the client (see BookingPicker) rather than at build time — a
 * statically exported "today" would go stale the day after deploy.
 */
export function getBookingDays(
  from: Date,
  count: number,
  lang: Locale,
): BookingDay[] {
  const tag = LOCALE_TAG[lang];
  return Array.from({ length: count }, (_, i) => {
    const date = new Date(from);
    date.setDate(from.getDate() + i);
    return {
      value: date.toISOString().slice(0, 10),
      weekday: date.toLocaleDateString(tag, { weekday: "short" }),
      day: String(date.getDate()),
      month: date.toLocaleDateString(tag, { month: "short" }),
    };
  });
}
