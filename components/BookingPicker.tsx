"use client";

import { useState, useSyncExternalStore } from "react";
import { getDictionary, type Locale } from "@/lib/i18n";
import { getBookingDays, BOOKING_DAYS_AHEAD, TIME_SLOTS } from "@/lib/booking";

// "Have we hydrated yet?" without setting state in an effect. The date list
// must be computed in the browser — a statically exported build-time "today"
// would be wrong for every visitor after deploy day — so it's derived during
// render, but only once we're client-side.
const noopSubscribe = () => () => {};

/**
 * Preferred date + time-of-day picker for planned jobs (CLAUDE.md §6).
 *
 * Only the date strip is client-gated (see above); the heading and lead render
 * in the static HTML, and the emergency path is tap-to-call, so nothing a
 * visitor needs is behind JS.
 */
export default function BookingPicker({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<string>("");

  const isClient = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
  const days = isClient
    ? getBookingDays(new Date(), BOOKING_DAYS_AHEAD, lang)
    : [];

  return (
    <div className="border-t border-ink/10 pt-8">
      <h2 className="font-headline text-lg font-extrabold tracking-tight text-ink">
        {dict.booking.title}
      </h2>
      <p className="mt-1 text-sm text-muted">{dict.booking.lead}</p>

      {days.length > 0 && (
        <>
          <div
            role="radiogroup"
            aria-label={dict.booking.dateLabel}
            className="mt-4 flex gap-2 overflow-x-auto pb-2"
          >
            {days.map((day) => {
              const active = selectedDay === day.value;
              return (
                <label
                  key={day.value}
                  className={`flex min-w-16 shrink-0 cursor-pointer flex-col items-center rounded-2xl border px-3 py-2.5 text-center transition-colors ${
                    active
                      ? "border-signal-press bg-cream/50"
                      : "border-ink/15 hover:border-ink/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="booking_date"
                    value={day.value}
                    checked={active}
                    onChange={() => setSelectedDay(day.value)}
                    className="sr-only"
                  />
                  <span className="text-xs capitalize text-muted">
                    {day.weekday}
                  </span>
                  <span className="font-headline text-lg font-extrabold text-ink">
                    {day.day}
                  </span>
                  <span className="text-xs capitalize text-muted">
                    {day.month}
                  </span>
                </label>
              );
            })}
          </div>

          <div
            role="radiogroup"
            aria-label={dict.booking.timeLabel}
            className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {TIME_SLOTS.map((slot) => {
              const active = selectedSlot === slot.slug;
              return (
                <label
                  key={slot.slug}
                  className={`flex cursor-pointer flex-col rounded-2xl border px-4 py-3 transition-colors ${
                    active
                      ? "border-signal-press bg-cream/50"
                      : "border-ink/15 hover:border-ink/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="booking_slot"
                    value={slot.slug}
                    checked={active}
                    onChange={() => setSelectedSlot(slot.slug)}
                    className="sr-only"
                  />
                  <span className="text-sm font-semibold text-ink">
                    {slot.label[lang]}
                  </span>
                  <span className="text-xs text-muted">{slot.hint[lang]}</span>
                </label>
              );
            })}
          </div>

          <p className="mt-3 text-xs leading-relaxed text-muted">
            {dict.booking.disclaimer}
          </p>
        </>
      )}
    </div>
  );
}
