/**
 * GTM wiring. See CLAUDE.md §8.
 *
 * The container ID comes from NEXT_PUBLIC_GTM_ID and is NOT committed — no
 * container exists yet (Phase 0, blocked on the client's Google account).
 * When it's unset, nothing is injected at all: no script tag, no consent
 * banner, no dataLayer. That's deliberate — a hardcoded placeholder ID would
 * silently 404 and look like working analytics.
 *
 * To enable: set NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX in the Vercel project env
 * (and .env.local for dev), then redeploy.
 */
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const ANALYTICS_ENABLED = Boolean(GTM_ID);

/** Key used to remember the visitor's CNIL consent choice. */
export const CONSENT_STORAGE_KEY = "spe-consent";

export type ConsentValue = "granted" | "denied";

/**
 * The conversion events this site fires. The `data-event` attributes already
 * scattered through the components (call_click, form_submit, devis_start,
 * tarifs_view) match these names — see trackEvent below, which is what
 * actually forwards them to the dataLayer.
 */
export type AnalyticsEvent =
  | "call_click"
  | "form_submit"
  | "booking_complete"
  | "tarifs_view"
  | "devis_start";

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

/** Push an event to GTM's dataLayer. No-ops when analytics is disabled. */
export function trackEvent(
  event: AnalyticsEvent,
  payload: Record<string, unknown> = {},
) {
  if (typeof window === "undefined" || !ANALYTICS_ENABLED) return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...payload });
}
