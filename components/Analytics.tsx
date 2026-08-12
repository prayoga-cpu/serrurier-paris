"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import Script from "next/script";
import {
  GTM_ID,
  ANALYTICS_ENABLED,
  CONSENT_STORAGE_KEY,
  trackEvent,
  type AnalyticsEvent,
  type ConsentValue,
} from "@/lib/analytics";
import { getDictionary, type Locale } from "@/lib/i18n";

const KNOWN_EVENTS: readonly AnalyticsEvent[] = [
  "call_click",
  "whatsapp_click",
  "form_submit",
  "booking_complete",
  "tarifs_view",
  "devis_start",
];

// "ssr" = rendering on the server / not yet hydrated, "unset" = hydrated and
// the visitor hasn't chosen yet. Distinguishing them is what stops the banner
// from being baked into the static HTML and flashing for people who already
// answered.
type ConsentState = ConsentValue | "unset" | "ssr";

const CONSENT_CHANGED = "spe-consent-changed";

// localStorage is external state, so useSyncExternalStore is the right
// primitive — reading it into useState from an effect causes an avoidable
// double render (and trips react-hooks/set-state-in-effect).
function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CONSENT_CHANGED, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CONSENT_CHANGED, onChange);
  };
}

function getSnapshot(): ConsentState {
  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return stored === "granted" || stored === "denied" ? stored : "unset";
  } catch {
    // Private mode can throw — treat as "no choice yet".
    return "unset";
  }
}

function getServerSnapshot(): ConsentState {
  return "ssr";
}

/**
 * CNIL-compliant analytics loader (CLAUDE.md §8).
 *
 * France requires opt-in *before* any analytics cookie is set, so the GTM
 * script is only injected after the visitor accepts — declining injects
 * nothing at all. The choice is remembered in localStorage.
 *
 * Renders nothing when NEXT_PUBLIC_GTM_ID is unset, which is the current
 * state: no banner shown, no tracking, because there's nothing to track with.
 */
export default function Analytics({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const consent = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const choose = useCallback((value: ConsentValue) => {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
    } catch {
      // Non-fatal: the banner just reappears next visit.
    }
    window.dispatchEvent(new Event(CONSENT_CHANGED));
  }, []);

  // One delegated listener instead of an onClick on every CTA: the buttons and
  // links carrying data-event are server components scattered across the site,
  // and this keeps them that way. Fires only once consent is granted.
  useEffect(() => {
    if (!ANALYTICS_ENABLED || consent !== "granted") return;

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const el = target?.closest<HTMLElement>("[data-event]");
      const name = el?.dataset.event;
      if (!name) return;
      if (!KNOWN_EVENTS.includes(name as AnalyticsEvent)) return;
      trackEvent(name as AnalyticsEvent);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [consent]);

  if (!ANALYTICS_ENABLED) return null;

  return (
    <>
      {consent === "granted" && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      )}

      {consent === "unset" && (
        <div
          role="dialog"
          aria-label={dict.consent.title}
          className="fixed inset-x-0 bottom-0 z-60 border-t border-ink/10 bg-white p-4 shadow-2xl lg:bottom-4 lg:left-4 lg:right-auto lg:max-w-sm lg:rounded-3xl lg:border"
        >
          <h2 className="font-headline text-base font-bold text-ink">
            {dict.consent.title}
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {dict.consent.body}
          </p>
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={() => choose("granted")}
              className="flex-1 rounded-full bg-signal px-4 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-signal-hover"
            >
              {dict.consent.accept}
            </button>
            <button
              type="button"
              onClick={() => choose("denied")}
              className="flex-1 rounded-full border border-ink/15 px-4 py-2.5 text-sm font-bold text-ink transition-colors hover:border-ink/35"
            >
              {dict.consent.decline}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
