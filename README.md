# Serrurier Paris Express — site

A static-export Next.js site for a Paris locksmith, built around one thesis:
the price quoted is the price paid. See [`CLAUDE.md`](./CLAUDE.md) for the
full brief, brand rules, and build roadmap — this file is a snapshot of what
actually exists in the repo right now.

## Stack

- **Next.js 16** (App Router), `output: "export"` — fully static, no server
  runtime. Every page must be complete in raw HTML; nothing core relies on
  client JS to render.
- **Tailwind CSS v4** — brand tokens (navy/yellow, from the client logo) live
  in `app/globals.css`.
- **TypeScript**, ESLint.
- Self-hosted **Montserrat** (headings) — see `lib/fonts.ts` and
  `lib/fonts/montserrat/`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
npm run lint
```

There's no `npm run start` in the usual Next.js sense — `output: "export"`
means `npm run build` produces static files in `out/`, deployed as-is
(Vercel or any static host).

## Locale routing

French is the default locale and lives unprefixed at the site root; English
is secondary and lives under `/en`. Both are served from the same repo via
Next.js route groups, sharing one root layout shell:

```
app/(fr)/...        → /, /tarifs, /devis, /serrurier-paris-11, ...
app/(en)/en/...      → /en, /en/tarifs, /en/devis, /en/serrurier-paris-11, ...
```

Slugs are identical across locales (shared in `lib/services.ts` / `lib/zones.ts`),
so the language switcher and hreflang alternates are pure prefix logic — see
`lib/i18n.ts` (`localePath`, `alternates`, `getDictionary`).

Every page's copy lives in `lib/i18n.ts` (UI chrome strings) or in a
per-content-type data file (`lib/services.ts`, `lib/zones.ts`,
`lib/pricing.ts`) with `fr`/`en` fields side by side — there is no
translation-management tooling, it's plain objects.

## What's actually live

| Route (FR / EN)                                              | Notes                                                                                                                                                                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                                                          | Two-step hero: postal-code gate → full request form (floats over the photo band on desktop)                                                                                                             |
| `/tarifs`                                                    | Pricing grid — client-confirmed starting prices for ouverture de porte, changement de serrure, blindage; "sur devis" for serrure multipoints and sécurisation après effraction (no confirmed price yet) |
| `/devis`                                                     | Standalone quote-request flow (same postal-gate + form pattern as the homepage)                                                                                                                         |
| `/services/[slug]`                                           | 5 core services, each with FAQ + `Service`/`FAQPage` schema                                                                                                                                             |
| `/serrurier-paris-{1,2,10,11,18,20}`                         | 6 arrondissement pages — real landmarks/neighbourhoods per zone, not templated duplicates                                                                                                               |
| `/zones`                                                     | Index linking the 6 zone pages                                                                                                                                                                          |
| `/contact`                                                   | NAP info + general-inquiry form; quote requests are routed to `/devis`                                                                                                                                  |
| `/mentions-legales`, `/cgv`, `/politique-de-confidentialite` | Legal pages, footer-linked. Client-specific facts are marked pending in-page, not invented — see `lib/legal.ts`                                                                                         |

Sitewide: `LocalBusiness` schema, sitemap (`app/sitemap.ts`), `robots.txt`
allowing AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.), self-hosted
fonts, mobile sticky tap-to-call bar, mobile nav as a `<details>` menu (no
client JS needed for it), and 16 build-time OG images (`lib/og.tsx`).

## Analytics

Off by default. `components/Analytics.tsx` injects GTM **only** after the
visitor accepts the consent banner (CNIL requires opt-in before any analytics
cookie), and forwards the `data-event` CTAs to `dataLayer` via one delegated
listener.

The whole thing is gated on `NEXT_PUBLIC_GTM_ID`. That variable is unset and
no container exists yet, so nothing renders and nothing fires — deliberately,
since a hardcoded placeholder ID would look like working analytics while
silently 404ing. To switch on: set `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX` in the
Vercel project env (and `.env.local` for dev), then redeploy.

## What's not done yet

Tracked in detail in `CLAUDE.md` §13–14. The short version:

- 🔴 **Business name and which domain is live are still unconfirmed**
  (`CLAUDE.md` §0 B1/B2) — `BRAND_NAME` and `DOMAIN` in `lib/config.ts` are
  single constants specifically so this stays a one-file change. The blindage
  price (B3) was confirmed and published at €80; see the note at the top of
  `CLAUDE.md`, it's worth a second look before launch.
- SIRET, legal form, registered address, publication director, payment
  methods and the consumer mediator — all still pending, marked as such on
  the legal pages rather than invented.
- No backend for form submissions — forms render and validate but don't
  submit anywhere. The booking picker collects a _preferred_ slot, not a
  confirmed reservation, and says so.
- GA4 / Ads conversion linker / call tracking — container-side config, needs
  the GTM container to exist first.
- B2B service pages (`securisation-locaux-pro`, `contrats-maintenance`) and
  guides (`/guides/...`) don't exist yet.
- Real customer reviews: none collected — no `AggregateRating` schema is used
  anywhere, intentionally (`CLAUDE.md` is explicit that fabricating this is
  the exact pattern the brand exists to fight).

## Key conventions worth knowing before editing

- **Never inline brand values.** Phone, domain, brand name all come from
  `lib/config.ts`.
- **Every route needs a locale-aware `Metadata` export** — see
  `lib/metadata.ts` for the pattern (self-referencing canonical + hreflang
  alternates, unique title/description).
- **Pricing is data, not copy.** `lib/pricing.ts` is the single source for
  any number shown on `/tarifs`, `/devis`, or a service page's price note —
  don't hardcode a price in a component.
- Shared UI primitives live in `components/Button.tsx` (`ButtonLink`,
  `ButtonAnchor`, `ButtonSubmit`, `Eyebrow`) — reuse these rather than
  hand-rolling another pill button.
