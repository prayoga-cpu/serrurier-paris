"use client";

import { useState, useSyncExternalStore } from "react";
import {
  geolocationSupported,
  locate,
  type GeoAddress,
  type GeoFailure,
} from "@/lib/geolocate";
import { getDictionary, type Locale } from "@/lib/i18n";

// Availability is browser state, not React state — same pattern as
// BookingPicker: read it during render on the client, report false on the
// server so the static HTML and the first client render agree.
const noopSubscribe = () => () => {};

function PinIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2a7 7 0 0 0-7 7c0 5.2 6.3 12.4 6.6 12.7a.5.5 0 0 0 .8 0C12.7 21.4 19 14.2 19 9a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="animate-spin"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.25"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * "Use my location" — the second way into the coverage gate.
 *
 * Someone standing outside a building they have just been locked out of often
 * cannot name its postcode, which is the one thing the manual gate asks for.
 * One tap resolves the device's position to a real French address (see
 * lib/geolocate.ts) and hands it upward, so the coverage check and the request
 * form are both filled from it.
 *
 * PROGRESSIVE ENHANCEMENT. The button renders only after mount, because
 * `window.isSecureContext` cannot be evaluated during the static export and
 * offering a control that silently cannot work is worse than not offering it.
 * That keeps this out of the pre-JS HTML, which is correct: the manual postcode
 * path is fully server-rendered and remains the primary route (CLAUDE.md §7).
 */
export default function GeoLocateButton({
  lang,
  onFound,
  disabled = false,
}: {
  lang: Locale;
  onFound: (address: GeoAddress) => void;
  disabled?: boolean;
}) {
  const dict = getDictionary(lang);
  const [busy, setBusy] = useState(false);
  const [failure, setFailure] = useState<GeoFailure | null>(null);

  const available = useSyncExternalStore(
    noopSubscribe,
    () => geolocationSupported(),
    () => false,
  );

  if (!available) return null;

  const errorMessage: Record<GeoFailure, string> = {
    denied: dict.hero.geoErrorDenied,
    "position-unavailable": dict.hero.geoErrorUnavailable,
    timeout: dict.hero.geoErrorTimeout,
    "lookup-failed": dict.hero.geoErrorLookup,
    "no-address": dict.hero.geoErrorNoAddress,
    unsupported: dict.hero.geoErrorUnavailable,
  };

  async function handleLocate() {
    if (busy || disabled) return;
    setBusy(true);
    setFailure(null);
    const result = await locate();
    setBusy(false);
    if (result.ok) onFound(result.address);
    else setFailure(result.reason);
  }

  return (
    <div className="mt-3">
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-ink/10" />
        <span className="text-xs font-semibold uppercase tracking-wide text-muted">
          {dict.hero.geoOr}
        </span>
        <span className="h-px flex-1 bg-ink/10" />
      </div>

      <button
        type="button"
        onClick={handleLocate}
        disabled={busy || disabled}
        data-event="geo_locate"
        className="mt-3 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-ink/15 bg-white px-4 font-semibold text-ink transition-colors hover:border-ink/35 disabled:opacity-60"
      >
        {busy ? <SpinnerIcon /> : <PinIcon />}
        {busy ? dict.hero.geoBusy : dict.hero.geoCta}
      </button>

      <p className="mt-2 text-xs leading-relaxed text-muted">
        {dict.hero.geoNote}
      </p>

      {failure && (
        <p role="status" className="mt-2 text-sm font-medium text-danger">
          {errorMessage[failure]}
        </p>
      )}
    </div>
  );
}
