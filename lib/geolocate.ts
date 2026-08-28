// Device-location coverage check, added on client instruction 28/08/2026.
//
// A visitor locked out at night often cannot name the postcode of the building
// they are standing outside — it is the one piece of information the hero gate
// asks for and the one they are least able to supply. This module turns the
// device's own position into a full French address, so the coverage check and
// the request form can both be filled from one tap.
//
// WHY THE BASE ADRESSE NATIONALE. The Geoplateforme geocoder is the French
// state's official address service, serving the Base Adresse Nationale under an
// open licence. It is used here rather than a commercial geocoder because:
//   - it needs no API key, so no credential ships inside a static export;
//   - it is authoritative for French addresses and returns the house number,
//     which is exactly the "pin point" detail the client asked to capture;
//   - a visitor's coordinates stay inside a French public service instead of
//     going to an ad-tech geocoder, which is the defensible position for a site
//     that gates its own analytics behind CNIL consent (CLAUDE.md §8).
//
// HOST. data.geopf.fr/geocodage is the current endpoint. The older
// api-adresse.data.gouv.fr answers the same contract but has served
// `Deprecation`/`Sunset` headers since 31 January 2026 and is scheduled for
// decommissioning, so it is deliberately not used. Both allow CORS from any
// origin and need no key; the rate limit is per visitor IP (50/s burst, 1/s
// sustained), which one button tap never approaches.
//
// Nothing here is stored. The coordinates are used for one request and dropped;
// only the resulting address reaches the form, where the visitor can edit it.
//
// This module has no imports and no React, so it stays cheap in the client
// bundle that Hero.tsx already ships.

/** A resolved French address. `label` is BAN's own one-line rendering. */
export type GeoAddress = {
  postcode: string;
  label: string;
  city: string;
  /** Present when BAN resolved to a specific building rather than a street. */
  housenumber?: string;
};

export type GeoFailure =
  | "unsupported"
  | "denied"
  | "position-unavailable"
  | "timeout"
  | "lookup-failed"
  | "no-address";

export type GeoResult =
  { ok: true; address: GeoAddress } | { ok: false; reason: GeoFailure };

const BAN_REVERSE_URL = "https://data.geopf.fr/geocodage/reverse/";
const POSITION_TIMEOUT_MS = 10_000;
const LOOKUP_TIMEOUT_MS = 8_000;

/**
 * Geolocation is unavailable on http:// origins in every current browser, and
 * calling it there fails silently in some. Checking `isSecureContext` up front
 * lets the caller hide the button instead of offering an action that cannot work.
 */
export function geolocationSupported(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof navigator !== "undefined" &&
    "geolocation" in navigator &&
    window.isSecureContext
  );
}

function getPosition(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: POSITION_TIMEOUT_MS,
      maximumAge: 0,
    });
  });
}

function failureFromPositionError(error: unknown): GeoFailure {
  // GeolocationPositionError is not constructible in every environment, so the
  // codes are compared numerically rather than via instanceof.
  const code = (error as GeolocationPositionError | undefined)?.code;
  if (code === 1) return "denied";
  if (code === 3) return "timeout";
  return "position-unavailable";
}

type BanFeature = {
  properties?: {
    label?: string;
    postcode?: string;
    city?: string;
    housenumber?: string;
    street?: string;
    name?: string;
  };
};

/**
 * Turn coordinates into an address. Exported separately from `locate` so the
 * lookup can be tested without a browser geolocation prompt.
 */
export async function reverseGeocode(
  latitude: number,
  longitude: number,
): Promise<GeoResult> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), LOOKUP_TIMEOUT_MS);

  try {
    const url = `${BAN_REVERSE_URL}?lon=${encodeURIComponent(
      longitude.toFixed(6),
    )}&lat=${encodeURIComponent(latitude.toFixed(6))}&limit=1`;

    const response = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });
    if (!response.ok) return { ok: false, reason: "lookup-failed" };

    const data: unknown = await response.json();
    const feature = (data as { features?: BanFeature[] })?.features?.[0];
    const props = feature?.properties;

    // BAN covers France only. A visitor abroad, or one whose position lands in
    // the sea, gets no feature back — that is "no-address", not a failure, and
    // the caller falls back to manual entry rather than showing an error.
    const postcode = props?.postcode;
    if (!props || !postcode || !/^\d{5}$/.test(postcode)) {
      return { ok: false, reason: "no-address" };
    }

    const street = props.street ?? props.name ?? "";
    const composed = [props.housenumber, street].filter(Boolean).join(" ");
    const label =
      props.label ??
      [composed, postcode, props.city].filter(Boolean).join(" ").trim();

    return {
      ok: true,
      address: {
        postcode,
        label,
        city: props.city ?? "",
        housenumber: props.housenumber,
      },
    };
  } catch {
    // Covers the abort, offline, DNS failure and CORS cases alike. They are
    // indistinguishable to the visitor and have the same remedy: type the code.
    return { ok: false, reason: "lookup-failed" };
  } finally {
    clearTimeout(timer);
  }
}

/** Ask the device where it is, then resolve that to a French address. */
export async function locate(): Promise<GeoResult> {
  if (!geolocationSupported()) return { ok: false, reason: "unsupported" };

  let position: GeolocationPosition;
  try {
    position = await getPosition();
  } catch (error) {
    return { ok: false, reason: failureFromPositionError(error) };
  }

  return reverseGeocode(position.coords.latitude, position.coords.longitude);
}
