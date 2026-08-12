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
  const siblings = zone.departmentSlug
    ? getDepartmentCities(zone.departmentSlug, lang).filter(
        (c) => c.slug !== zone.slug,
      )
    : [];
  const parent = zone.departmentSlug
    ? getLocalizedZone(zone.departmentSlug, lang)
    : undefined;
  return parent ? [...siblings, parent] : siblings;
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
