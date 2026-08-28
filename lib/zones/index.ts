import type { Locale } from "@/lib/i18n";
import { DEPARTMENT_ADJACENCY, PARIS_ADJACENCY } from "@/lib/zones/adjacency";
import { CITY_ZONES } from "@/lib/zones/cities";
import { DEPARTMENT_ZONES } from "@/lib/zones/departments";
import { PARIS_ZONES } from "@/lib/zones/paris";
import type { LocalizedZone, Zone, ZoneKind } from "@/lib/zones/types";

export type {
  LocalizedZone,
  Zone,
  ZoneContent,
  ZoneCoverage,
  ZoneFaq,
  ZoneKind,
} from "@/lib/zones/types";

/**
 * Every published zone page, in nav order: Paris arrondissements first, then
 * the Île-de-France department hubs, then the cities that have their own page.
 */
export const ZONES: Zone[] = [
  // Sorted numerically so the index reads 1 → 20 regardless of the order the
  // arrondissements were written in.
  ...[...PARIS_ZONES].sort((a, b) => Number(a.number) - Number(b.number)),
  ...DEPARTMENT_ZONES,
  ...CITY_ZONES,
];

export function getZone(slug: string): Zone | undefined {
  return ZONES.find((zone) => zone.slug === slug);
}

export function localizeZone(zone: Zone, lang: Locale): LocalizedZone {
  return {
    kind: zone.kind,
    number: zone.number,
    slug: zone.slug,
    departmentSlug: zone.departmentSlug,
    // Everything published today is Île-de-France, serviced directly. A zone
    // has to opt out of that promise explicitly — see ZoneCoverage.
    coverage: zone.coverage ?? "direct",
    ...zone.content[lang],
  };
}

export function getLocalizedZones(lang: Locale): LocalizedZone[] {
  return ZONES.map((zone) => localizeZone(zone, lang));
}

export function getLocalizedZone(
  slug: string,
  lang: Locale,
): LocalizedZone | undefined {
  const zone = getZone(slug);
  return zone ? localizeZone(zone, lang) : undefined;
}

export function getLocalizedZonesByKind(
  lang: Locale,
  kind: ZoneKind,
): LocalizedZone[] {
  return ZONES.filter((zone) => zone.kind === kind).map((zone) =>
    localizeZone(zone, lang),
  );
}

/** Cities that have their own page under a given department hub. */
export function getDepartmentCities(
  departmentSlug: string,
  lang: Locale,
): LocalizedZone[] {
  return ZONES.filter(
    (zone) => zone.kind === "city" && zone.departmentSlug === departmentSlug,
  ).map((zone) => localizeZone(zone, lang));
}

/**
 * Zones that genuinely border this one — adjacent arrondissements, adjacent
 * departments, or the sibling cities of the same department. See adjacency.ts.
 */
export function getNearbyZones(
  zone: LocalizedZone,
  lang: Locale,
): LocalizedZone[] {
  if (zone.kind === "arrondissement") {
    const numbers = PARIS_ADJACENCY[zone.number] ?? [];
    return numbers
      .map((n) => getLocalizedZone(`serrurier-paris-${n}`, lang))
      .filter((z): z is LocalizedZone => Boolean(z));
  }

  if (zone.kind === "department") {
    const codes = DEPARTMENT_ADJACENCY[zone.number] ?? [];
    return getLocalizedZonesByKind(lang, "department").filter((z) =>
      codes.includes(z.number),
    );
  }

  // Cities: the other cities of the same department, then the department hub.
  if (zone.departmentSlug) {
    const siblings = getDepartmentCities(zone.departmentSlug, lang).filter(
      (c) => c.slug !== zone.slug,
    );
    const parent = getLocalizedZone(zone.departmentSlug, lang);
    return parent ? [...siblings, parent] : siblings;
  }

  // A city with no department hub sits outside Île-de-France. Its neighbours
  // are the other cities in the same position — linking it back to a Paris
  // arrondissement would be a false adjacency and read as filler.
  return getNationalCities(lang).filter((c) => c.slug !== zone.slug);
}

/**
 * City pages with no department hub — i.e. outside Île-de-France. Empty until
 * the coverage question at ZoneCoverage is answered; the /zones hub renders
 * their section only when there is something in it.
 */
export function getNationalCities(lang: Locale): LocalizedZone[] {
  return ZONES.filter(
    (zone) => zone.kind === "city" && !zone.departmentSlug,
  ).map((zone) => localizeZone(zone, lang));
}

/** The department hub a city page sits under, for breadcrumbs and back-links. */
export function getParentDepartment(
  zone: LocalizedZone,
  lang: Locale,
): LocalizedZone | undefined {
  return zone.departmentSlug
    ? getLocalizedZone(zone.departmentSlug, lang)
    : undefined;
}
