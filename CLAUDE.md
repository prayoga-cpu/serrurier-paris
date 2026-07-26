# PARISLOCK — Locksmith Website Build

> **How to use this file.** Save it as `CLAUDE.md` at the repo root. Claude Code reads it automatically as project context. It is the single source of truth for scope, stack, and standards. When something here is marked 🔴 BLOCKER, do not hardcode a value, stop and ask.

Built by PRIONATION.io | Priority Foundation. Client: Serrurier Paris Express (working name, see blockers). Prepared 20/07/2026 · **v1.1, updated 20/07/2026 with client questionnaire answers (Rani Orwan, 13/07/2026).**

> **What changed in v1.1.** Client intake confirmed the direct-artisan positioning (not a lead broker), broadened the audience to include businesses and syndics, added two B2B services and a maintenance-contract line, upgraded /devis to quote-plus-booking, and added an installation guarantee as a trust asset. A full development TODO checklist is now at §14. Changes are marked 🆕 through the doc.

> **Build status note (audited against the repo, not just this doc).** §13/§14 checkboxes below now reflect what's actually in the codebase, not aspiration. Two deliberate deviations from this doc, both directed explicitly during the build session rather than decided unilaterally:
>
> - **§2 says EN is optional/later — the site shipped fully bilingual instead** (FR at root, EN under `/en`, see `lib/i18n.ts`). Every existing page has both locales.
> - **§0 B3 (blindage price) was resolved to "confirmed" and published at €80**, on record as an explicit override after the exact €990+ HT market-rate warning in this doc was surfaced. If that confirmation is wrong, `lib/pricing.ts` is the one place to fix it.
>
> Not yet built at all: B2B pages (`securisation-locaux-pro`, `contrats-maintenance`), guides, review engine, form backend, call tracking. Built but inert until someone supplies a credential or fact: GTM/consent (needs `NEXT_PUBLIC_GTM_ID`), legal pages (need SIRET and the other client-specific fields), booking picker (collects a preferred slot, no availability backend). See checkboxes for the granular picture.

---

## 0. Read first — decisions that gate the build

Three things must be confirmed by the client before or during Phase 0. Do not guess them into the codebase.

| #     | Blocker            | Why it gates everything                                                                                                                        | Default until confirmed                                                                                      |
| ----- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 🔴 B1 | **Business name**  | "Serrurier Paris Express" collides with a 10-year-old identical business. Ranking under it is near-impossible. May change to a distinct brand. | Use a single config constant `BRAND_NAME`, never inline the string. Placeholder: `"Serrurier Paris Express"` |
| 🔴 B2 | **Primary domain** | `parisunlockdoor.fr` is owned and clean. `parisunlockdoor.lovable.app` is throwaway. Build for the real domain.                                | Target `parisunlockdoor.fr`. Never ship anything pointing at `.lovable.app`                                  |
| 🔴 B3 | **Blindage price** | Prototype lists "Porte blindée +80€". Real market is €990+ HT. €80 reads as the exact scam pattern the brand fights.                           | Do not publish any blindage price until confirmed. Leave "sur devis"                                         |

Also unconfirmed, needed before launch, not before code: SIRET number, exact arrondissements served, real customer reviews.

---

## 1. What we're building

A production locksmith website for the Paris market, built to be found (SEO + AI search), trusted (anti-scam positioning), and to convert emergency and planned jobs into calls and quote requests.

**Positioning.** Honest, transparent pricing in a market where the French consumer authority DGCCRF flagged anomalies in 60% of inspected home-repair providers, with locksmithing the most-reported sector. The whole brand is "the price we say is the price you pay." Every build decision serves that.

**Audience (🆕 confirmed and broadened by client).** Not just consumers. Explicitly: _particuliers, commerçants, entreprises, syndics de copropriété_, ages 20–80. Businesses and syndics are a first-class target, not a later add-on.

**Three modes, designed for all three:**

- **Emergency** — locked out now, on a phone, panicking. Wants to call in one tap. Speed and reassurance.
- **Planned** — lock upgrade, blindage, post-burglary. Wants a quote and proof of competence. Form or booking.
- 🆕 **B2B / recurring** — businesses and syndics needing premises security and maintenance contracts. Less price-sensitive, higher lifetime value. Wants proof of qualification, insurance, and reliability.

**What this is not.** Not a call-center lead-broker. Not a template locksmith site. Not blue-and-orange with stock photos of hands holding keys.

---

## 2. Tech stack

Non-negotiable choices, they serve the SEO/AEO/GEO goals directly.

| Layer         | Choice                                                                                            | Reason                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Framework     | **Next.js, static export** (`output: 'export'`)                                                   | Raw HTML must be complete before JS runs. This is the single most important technical requirement, see §7 |
| Styling       | Tailwind CSS                                                                                      | Fast, consistent, matches PRIONATION workflow                                                             |
| Hosting       | Vercel                                                                                            | Static, fast, owned by client                                                                             |
| Forms         | React Hook Form + Zod validation + Cloudflare Turnstile                                           | Spam protection without friction                                                                          |
| 🆕 Booking    | Online appointment flow (date/time slot picker) for planned jobs                                  | Client asked for _prendre rendez-vous en ligne_, not just quote requests. See §6                          |
| Form backend  | Notion API (or client's CRM), server route or edge function                                       | Matches PRIONATION's existing pattern                                                                     |
| Analytics     | GTM container → GA4 + Google Ads conversion linker                                                | See §8                                                                                                    |
| Call tracking | Dynamic number insertion or per-source tracking numbers                                           | Calls are the primary conversion, they must be measurable                                                 |
| Language      | **French primary.** EN optional later, do not build multilingual scaffolding in v1 unless trivial | Customers are French. FR-first is a ranking and trust decision                                            |

**Rendering rule.** If a page's meaningful content (headings, service copy, prices, FAQ) is not present in `view-source:` before JavaScript executes, the build is wrong. Test with JS disabled.

---

## 3. Sitemap

```
/                                       Accueil — emergency-first hero
│
├── SERVICES  (one page per intent, one keyword cluster each)
│   ├── /services/ouverture-de-porte         porte claquée + fermée à clé
│   ├── /services/changement-de-serrure      serrure + cylindre / barillet
│   ├── /services/blindage-de-porte          🔴 price gated by B3
│   ├── /services/serrure-multipoints
│   ├── /services/securisation-apres-effraction
│   ├── /services/securisation-locaux-pro    🆕 B2B — premises security
│   └── /services/contrats-maintenance       🆕 B2B/copro — recurring, highest LTV
│
├── /tarifs                             full transparent price grid, the trust weapon
├── /devis                              🆕 quote + online booking flow, rebuilt (see §6)
│
├── ZONES  (start with 6, expand later)
│   ├── /serrurier-paris-1
│   ├── /serrurier-paris-2
│   ├── /serrurier-paris-10
│   ├── /serrurier-paris-11
│   ├── /serrurier-paris-18
│   └── /serrurier-paris-20
│
├── GUIDES  (AEO/GEO engine — plain HTML, real FAQ blocks)
│   ├── /guides/eviter-arnaque-serrurier-paris
│   ├── /guides/prix-serrurier-paris
│   ├── /guides/porte-claquee-que-faire
│   ├── /guides/norme-a2p-expliquee
│   └── /guides/serrurerie-assurance-habitation
│
├── /avis                               reviews (real only, see §6)
├── /a-propos                           the artisan story, SIRET, trust proof
├── /contact
│
└── LEGAL
    ├── /mentions-legales
    ├── /cgv
    └── /politique-de-confidentialite
```

**Zone choice is deliberate.** Paris intra-muros takes 4–8 months to rank. Outer/denser arrondissements move in 6–12 weeks. 1 and 2 for base credibility, 10/11/18/20 because they're winnable faster and full of renters. Early wins buy patience on the hard central zones.

**Build order for pages:** home → 5 core services → /tarifs → /devis (with booking) → legal → 2 B2B services → zones → guides. Ship and index the consumer money pages before the B2B and long-tail pages.

---

## 4. Per-page requirements

Every page, without exception:

- Complete content in initial HTML (no client-only rendering of core content)
- One primary keyword, mapped in §5
- Appropriate schema in the HTML head (see §7)
- Sticky tap-to-call on mobile
- `<title>` and meta description **unique per page** (the prototype's root problem was duplicate meta, do not repeat it)
- Breadcrumb + internal links to related services/zones

**Home** — emergency hero, tap-to-call above the fold, 5 services grid, trust row (certifié A2P, prix transparent, artisan pas centre d'appel), fair-price teaser linking to /tarifs, real reviews or none.

**Service pages** — the problem, the intervention, honest price range, what's included, FAQ (feeds FAQPage schema), CTA split call vs devis. 🆕 Surface the installation **guarantee** (_garantie sur les installations_) and _qualifiés et assurés_ as trust proof on every relevant service page.

🆕 **/services/securisation-locaux-pro** — B2B premises security. Speak to commerçants and entreprises: access control, reinforced doors, multi-site. CTA leans to devis/booking, not emergency call.

🆕 **/services/contrats-maintenance** — the highest-value page. Recurring maintenance contracts for entreprises and syndics de copropriété. This is recurring revenue, treat it as a lead-gen page with a dedicated B2B enquiry form, not a one-off job page.

**/tarifs** — the centerpiece. A clear, honest price grid. This is the most citable asset in the whole build, generative engines pull structured price answers. Mark prices "à partir de", include the travel/labor basis, note written quote required above €150 (French law since 24/01/2017). 🆕 Use the client's exact response-time wording: _"moins de 30 minutes selon le secteur"_, not the prototype's flat "20–30 min". The "selon le secteur" qualifier is more honest and more defensible.

🆕 **/devis** — quote request **and** online booking. Two intents on one page: instant quote estimate (like the prototype's calculator, but with the mechanics fixed per §6) plus a date/time slot picker for planned appointments. Emergency users still get pushed to tap-to-call, not the form.

**Zone pages** — genuinely localized, not templated duplicates. Local landmarks, arrondissement-specific content, the services offered there. Thin duplicate zone pages get filtered by Google, write real content per zone.

**Guides** — long-form (1,000+ words), real FAQ blocks, internal links to services and /tarifs. `/guides/eviter-arnaque-serrurier-paris` and `/guides/prix-serrurier-paris` are the priority two, they own the trust and price-research queries almost nobody competes on.

---

## 5. SEO keyword map

| Page                                    | Primary keyword                            | Notes                            |
| --------------------------------------- | ------------------------------------------ | -------------------------------- |
| /                                       | serrurier paris                            | + urgence variants in H1/hero    |
| /services/ouverture-de-porte            | ouverture de porte paris                   | porte claquée as secondary       |
| /services/changement-de-serrure         | changement de serrure paris                | cylindre / barillet secondary    |
| /services/blindage-de-porte             | blindage de porte paris                    | 🔴 price gated                   |
| /services/serrure-multipoints           | serrure multipoints paris                  |                                  |
| /services/securisation-apres-effraction | sécurisation après effraction              | high emotional intent            |
| 🆕 /services/securisation-locaux-pro    | sécurisation locaux professionnels paris   | B2B intent                       |
| 🆕 /services/contrats-maintenance       | contrat maintenance serrurerie copropriété | B2B/syndic, low volume, high LTV |
| /tarifs                                 | prix serrurier paris                       | + tarif ouverture de porte       |
| /serrurier-paris-11 (etc.)              | serrurier paris 11                         | ~€20 CPC but winnable            |
| /guides/eviter-arnaque-serrurier-paris  | arnaque serrurier paris                    | low competition, high conversion |
| /guides/prix-serrurier-paris            | combien coûte un serrurier                 | high AEO value                   |

**The asymmetric play.** Everyone fights "serrurier urgence" (brutal, ~€13 CPC). Almost nobody owns "what should this cost." The price and trust clusters convert better, cost less, and are exactly what people ask ChatGPT before they call anyone. Weight content effort there.

---

## 6. Conversion architecture

The prototype gets the instinct right and the mechanics wrong. Fix all of these:

| Prototype issue                                      | Required fix                                                                                                                                                                       |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Quote form is the only primary CTA                   | Split paths. **Urgent → sticky tap-to-call.** Planned → form. Someone locked out at 23h calls, they don't fill 7 fields                                                            |
| Submit disabled until an option is picked            | Button always active. Validate on submit with clear inline errors                                                                                                                  |
| €69 cancellation warning directly above submit       | Move to confirmation step, not pre-submit. It suppresses conversion where it sits                                                                                                  |
| "+1,900 interventions, 4.9★" with no visible reviews | Show real reviews or soften the claim. **Do NOT add AggregateRating schema to unverifiable numbers**, that's a structured-data violation and it contradicts the whole honest pitch |
| No SIRET shown                                       | Publish it (once B-list confirmed). French buyers check it. Free trust                                                                                                             |
| Generic OG image                                     | Custom branded OG image, 1200×630, per key page                                                                                                                                    |

🆕 **Three conversion paths, not one.** Emergency → tap-to-call. Planned → quote estimate + online booking (date/time slot). B2B/syndic → dedicated enquiry form on the maintenance-contract page. Don't force all three through one generic form.

**Call is the primary conversion** for consumer traffic. Track calls of 60s+ as the real signal. Booking and B2B form submits are the primary conversions for planned and B2B traffic. Measure all three separately.

🆕 **Positioning is now client-validated, not our assumption.** Rani's questionnaire independently confirmed the anti-scam thesis: her customers already tried "chercher un serrurier sur Google en urgence" and couldn't tell honest pros from scams; she marks "tarifs annoncés avant toute intervention" as a real, current practice. The /tarifs page and the anti-scam guides are the client's own stated positioning. Lead with it confidently.

---

## 7. Technical SEO / AEO / GEO requirements

The reason the prototype is invisible to AI search: client-side rendering. Fixing it is the point of this build.

**Rendering**

- Static export, complete HTML before JS
- Verify every page with JS disabled shows full content
- No core content injected by client-side JS

**Structured data** (JSON-LD in HTML, server-rendered, never JS-injected)

- `LocalBusiness` (type `Locksmith`) sitewide — name, phone, area served, hours (24/7), geo
- `Service` on each service page (🆕 including the two B2B pages)
- `FAQPage` on service pages and guides that have FAQ blocks
- 🆕 `warranty` / offer terms where the installation guarantee applies
- **No `AggregateRating` until real, verifiable reviews exist** (🆕 client confirmed testimonials are placeholders "à remplacer par de vrais avis vérifiés")
- `BreadcrumbList` on nested pages

**Crawlability**

- `robots.txt` explicitly allows `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended` — public marketing content should be citable by AI engines
- `sitemap.xml` auto-generated, submitted to Search Console
- Unique title + meta description per page, enforced (the prototype's duplicate-meta problem caused its indexing failure)
- Canonical tags, self-referencing
- IndexNow ping on deploy (optional, nice-to-have)

**Performance**

- Core Web Vitals green on mobile
- Images optimized (next/image or pre-optimized static), lazy-loaded below fold
- Fonts self-hosted or `font-display: swap`, subset to Latin + French accents

---

## 8. Analytics & tracking

Nothing is measurable in the prototype. This is required before any ad spend.

- **GTM** container as the single tag manager
- **GA4** via GTM, geo-gated consent banner (CNIL-compliant, France)
- **Google Ads** conversion linker, primary conversion = phone call 60s+, secondary = form submit
- **Call tracking** — dynamic number insertion or per-source numbers, so paid vs organic calls are attributable
- **Search Console** verified, sitemap submitted
- Events: `call_click`, `form_submit`, `tarifs_view`, `devis_start`

---

## 9. Build phases

| Phase               | Window  | Ships                                                                                                                                          | Done when                                 |
| ------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| **0 · Foundation**  | Wk 1–2  | Repo, Next.js static scaffold, domain, GTM+GA4+call tracking, robots.txt + sitemap, schema base, GBP claim started, LSA verification submitted | Site deploys, indexes, tracking fires     |
| **1 · Core pages**  | Wk 3–4  | Home, 5 service pages, /tarifs, rebuilt /devis, legal                                                                                          | All indexed, unique meta, schema valid    |
| **2 · Paid on**     | Wk 5–6  | Conversion tracking verified, ready for LSA + Search campaigns                                                                                 | First tracked calls, real CPL             |
| **3 · Local depth** | Mo 2–3  | 6 zone pages, review engine                                                                                                                    | Outer-zone pages entering top 20          |
| **4 · Authority**   | Mo 3–6  | 5 guides, citations, syndic/insurer outreach                                                                                                   | AI citations begin, central rankings move |
| **5 · Compound**    | Mo 6–12 | Expand zones, refresh prices, scale what converts                                                                                              | Organic share of leads climbing vs paid   |

LSA verification (background check, insurance, licence) takes 1–2 weeks on its own. Start it in Phase 0, not Phase 2.

---

## 10. Google Ads structure (context, separate workstream)

Not part of the codebase, but the site must support it (tracking, landing pages matched to ad groups).

| Campaign           | Type         | Priority                                  |
| ------------------ | ------------ | ----------------------------------------- |
| Local Services Ads | Pay-per-lead | 1st — Google-verified badge, ~€20–60/lead |
| Brand              | Search       | 2nd — cheap, defensive                    |
| Emergency          | Call-only    | 3rd — mobile, day-parted                  |
| Service            | Search       | 4th — one ad group per service page       |
| Local              | Search       | 5th — outer arrondissements first         |

Each ad group points to its matched landing page, never all to home. Negative keywords from day one: `gratuit, formation, emploi, tuto, pas cher, comment ouvrir une porte soi-même`.

---

## 11. Competitor reference

Study for structure and messaging, not visual style (the vertical is aesthetically poor).

| Competitor                  | Note                                                                |
| --------------------------- | ------------------------------------------------------------------- |
| serrurerie-tan.fr           | The one to beat, ~955 reviews, 30+ yrs, physical shop               |
| serruredumonde.com          | Publishes a real 2026 price grid, closest to the transparency model |
| lacledu16.fr                | Leads with brand-name parts (Picard, Fichet, Vachette) as trust     |
| serrurier-paris-express.com | The name collision, study SEO, ignore business model                |
| top-serrurier-paris.fr      | 128 guides, the content depth to aim at, a link target              |

---

## 12. Client info status

| Field                  | Status                                                                                       |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| Contact                | Rani Orwan                                                                                   |
| Email                  | admin@parisunlockdoor.fr                                                                     |
| Phone                  | +33 7 83 14 89 94                                                                            |
| Public site phone      | +33 6 49 65 85 10                                                                            |
| Owned domain           | parisunlockdoor.fr                                                                           |
| Positioning            | 🆕 Confirmed direct artisan, not a lead broker (client questionnaire, Q1 + competitor table) |
| Audience               | 🆕 Confirmed: particuliers, commerçants, entreprises, syndics · ages 20–80                   |
| Services               | 🆕 Confirmed full list incl. B2B premises security + maintenance contracts                   |
| Guarantee              | 🆕 Installation guarantee confirmed as a formal commitment                                   |
| Insurance              | 🆕 "Qualifiés et assurés" stated, supports LSA verification                                  |
| Business name          | 🔴 B1 still unconfirmed (intent clear, legal name not given)                                 |
| SIRET                  | 🔴 still pending                                                                             |
| Blindage price         | 🔴 B3 still pending (service listed, no price given)                                         |
| Which domain is live   | 🔴 still unconfirmed (Q1 answered with a description, not a URL)                             |
| Arrondissements served | "selon le secteur", not itemized                                                             |
| Real reviews           | Pending, client acknowledges current testimonials are placeholders                           |

---

## 13. Definition of done (v1 launch)

- [ ] All core pages live with unique title + meta — home/tarifs/devis/5 services/6 zones+index/contact/3 legal all have unique metadata; B2B pages and guides still missing
- [ ] Full content present in raw HTML (JS-disabled test passes) on every page — true for everything that exists, with one caveat: the hero/devis request form is a client component, so with JS off a visitor sees the headline/trust content but can't progress past the postal-code step (no core marketing copy is JS-gated, only the form interaction)
- [x] Valid `LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList` schema (no fake `AggregateRating`) — `LocalBusiness` sitewide, `Service`+`FAQPage` on service pages, `FAQPage` on zone pages, `BreadcrumbList` everywhere via `Breadcrumb`, no `AggregateRating` anywhere. `Service` now also carries a real `offers`/`minPrice` where the price is client-confirmed, omitted where it isn't
- [ ] robots.txt allows AI crawlers, sitemap submitted and accepted — robots.txt + sitemap.xml both correct and live in-repo; Search Console submission is an off-repo action, not done
- [ ] GTM + GA4 + Ads conversion tracking firing, call tracking live — **scaffold built, not live.** `components/Analytics.tsx` injects GTM behind a CNIL-compliant consent gate and forwards the `data-event` CTAs (`call_click`, `form_submit`, `devis_start`, `tarifs_view`, `booking_complete`) to `dataLayer`. Gated on `NEXT_PUBLIC_GTM_ID`, which is unset — no container exists yet, so nothing renders or fires. Set that env var to switch it on. GA4/Ads linker/call tracking are container-side config, still to do
- [ ] Mobile Core Web Vitals green — not measured
- [x] Sticky tap-to-call on mobile, split urgent/planned CTAs — `MobileCallBar` + header call button + separate `/devis` quote flow
- [x] No `.lovable.app` references anywhere
- [ ] 🔴 B1, B2, B3 all resolved — B3 resolved per the override noted above; B1 (business name) and B2 (which domain is live) still placeholder/unconfirmed
- [ ] SIRET published, legal pages complete — **legal pages built** (`/mentions-legales`, `/cgv`, `/politique-de-confidentialite`, FR+EN, linked in the footer). SIRET, legal form, registered address, publication director, payment methods and the designated consumer mediator are all marked "en attente de confirmation client" in-page rather than invented — fill them in `lib/legal.ts`
- [x] Custom OG images on key pages — 16 generated at build time via `next/og` (home, /tarifs, /devis, each of the 5 services, ×2 locales). Shared card in `lib/og.tsx`
- [ ] 🆕 Two B2B service pages live (premises security, maintenance contracts) — not built
- [ ] 🆕 Online booking flow working, three conversion paths measured separately — **slot picker built** (`components/BookingPicker.tsx`: 14-day date strip + morning/afternoon/evening, on both the hero form and `/devis`). It submits a _preferred_ slot, not a confirmed reservation — there's no availability backend, and the copy says so. Separate measurement still blocked on the GTM item above
- [x] 🆕 Installation guarantee surfaced on relevant pages + schema — callout on every service page, 5th trust card on the home page, and in the hero/devis badge list. No `WarrantyPromise` node: the duration isn't client-confirmed and an empty one would be meaningless markup (see `lib/schema.tsx`)

---

## 14. Development TODO / roadmap

Work top to bottom. Each phase gates the next. Check items as you go. 🔴 = blocked on client, don't code around it.

### Phase 0 — Foundation (Week 1–2)

_Goal: a deployable, tracked, indexable shell. None of this is visible to the client, all of it gates everything after._

**Repo & tooling**

- [x] Init Next.js with `output: 'export'` (static), TypeScript, ESLint, Prettier — `.prettierrc.json` + `npm run format` / `format:check`
- [x] Design / visual system already implemented (styling in place, no branding decisions pending)
- [x] Folder structure: `/app` routes per §3, `/components`, `/lib` (schema, config, per-page copy) — no separate `/content` dir; page copy lives in `lib/i18n.ts` / `lib/services.ts` / `lib/zones.ts` / `lib/pricing.ts` instead, same intent (structured, not inlined)
- [ ] Single `site.config.ts` holding `BRAND_NAME`, phone, domain, hours, area, SIRET — `lib/config.ts` exists with `BRAND_NAME`/`DOMAIN`/phone, but hours and area are still inline strings in `lib/i18n.ts`, and SIRET doesn't exist (pending anyway)
- [x] Base layout: header, footer, sticky mobile tap-to-call component

**Infra**

- [ ] Vercel project connected, preview deploys on — outside repo, not verifiable from code
- [ ] 🔴 Point build at final domain once B2 confirmed (`parisunlockdoor.fr`); until then use Vercel preview URL, never `.lovable.app` — `DOMAIN` constant already correctly set to `parisunlockdoor.fr`, not a placeholder; actual hosting/DNS is outside repo scope, and B2 ("which domain is live") is still formally unconfirmed per §12
- [x] `robots.txt` allowing GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended
- [x] `sitemap.xml` auto-generated from routes
- [x] Per-page metadata system (unique title + description enforced, no duplicates)

**Tracking (before any ad spend)**

- [ ] GTM container installed — loader written (`components/Analytics.tsx`), but no container exists. Set `NEXT_PUBLIC_GTM_ID` to activate; until then the component renders nothing at all (deliberate: a placeholder ID would look like working analytics while silently 404ing)
- [x] GA4 via GTM + CNIL-compliant consent banner — banner built and verified: GTM is **not** injected until the visitor accepts, the choice persists in localStorage, declining loads nothing. GA4 itself is container-side config, done once the container exists. (Not geo-gated — the banner shows to everyone rather than only FR IPs; simpler and stricter than required)
- [ ] Google Ads conversion linker — container-side config
- [ ] Call tracking (dynamic number insertion or per-source numbers)
- [x] Events wired: `call_click`, `form_submit`, `booking_complete`, `tarifs_view`, `devis_start` — a single delegated listener reads the `data-event` attributes already on the CTAs and pushes to `dataLayer` (verified end-to-end with a test container). Keeps the CTAs as server components. `booking_complete` is defined but unfired, pending a form backend
- [ ] Search Console verified, sitemap submitted

**Parallel, non-code**

- [ ] 🔴 Start LSA verification (background check, insurance, licence — takes 1–2 weeks)
- [ ] 🔴 Claim + verify Google Business Profile, set 24/7 hours

**Phase 0 done when:** shell deploys, indexes, tracking fires, JS-disabled test shows the shell's static content.

### Phase 1 — Core pages (Week 3–4)

_Goal: consumer money pages live, indexed, converting._

- [x] Home: emergency hero, tap-to-call above fold, 5-service grid, trust row, fair-price teaser, guarantee callout
- [x] `/services/ouverture-de-porte`
- [x] `/services/changement-de-serrure`
- [x] `/services/blindage-de-porte` — 🔴 price gate lifted: €80 published per the explicit override on record above, not left "sur devis"
- [x] `/services/serrure-multipoints`
- [x] `/services/securisation-apres-effraction`
- [x] `/tarifs` — honest price grid, "à partir de" wording, the "moins de 30 minutes selon le secteur" response-time line, and the €150 written-quote note all live
- [x] `/devis` — quote-request mechanics fixed per §6 (always-active submit, no pre-submit cancellation warning) **and** the slot picker, though note it collects a _preferred_ slot rather than confirming a reservation (no availability backend — see §13)
- [x] Legal: `/mentions-legales`, `/cgv`, `/politique-de-confidentialite` — built FR+EN, footer-linked. Client-specific facts (SIRET, legal form, address, director, payment methods, mediator) are marked pending in-page, not invented — see `lib/legal.ts`
- [x] Schema on every page: `LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList` (no `AggregateRating`)
- [x] Per-page unique meta + custom OG images — 16 build-time OG PNGs via `next/og`
- [ ] Conversion fixes: always-active submit, inline validation, cancellation notice moved to confirmation step — submit buttons are always active and there's no pre-submit cancellation warning to move; "inline validation" is currently just native HTML `required`, no custom error messaging beyond the postal-code checker; there's no post-submit confirmation step since forms aren't wired to a backend yet

**Phase 1 done when:** all core pages indexed with unique meta, schema validates, JS-disabled test passes on every page, forms + booking submit successfully.

### Phase 2 — Paid readiness (Week 5–6)

_Goal: everything an ad campaign needs. Campaign build itself is a separate workstream._

- [ ] Verify call + form + booking conversions fire correctly end to end
- [ ] Landing-page-per-ad-group check: every §10 ad group has a matched page, none point to home
- [ ] Mobile Core Web Vitals green
- [ ] 🔴 Confirm LSA verification cleared, listing live

**Phase 2 done when:** first tracked calls/bookings recorded, real CPL data flowing.

### Phase 3 — B2B + local depth (Month 2–3)

_Goal: the higher-LTV pages and the winnable local zones._

- [ ] 🆕 `/services/securisation-locaux-pro`
- [ ] 🆕 `/services/contrats-maintenance` with dedicated B2B enquiry form
- [x] Zone pages, genuinely localized (not templated duplicates): paris-1, 2, 10, 11, 18, 20 — real landmarks/neighbourhoods/FAQ per arrondissement, plus a `/zones` index page (not in the original §3 sitemap, added as a sensible nav landing target)
- [ ] Review request engine: SMS/email after invoice
- [ ] 🔴 Replace placeholder testimonials with real verified reviews; only then consider `AggregateRating` — no testimonials exist to replace (never added placeholder ones); still no real reviews collected

**Phase 3 done when:** B2B pages live with working enquiry flow, outer-zone pages entering top 20, real reviews collecting.

### Phase 4 — Authority / AEO / GEO (Month 3–6)

_Goal: own the trust and price queries, start earning AI citations._

- [ ] `/guides/eviter-arnaque-serrurier-paris` (priority 1)
- [ ] `/guides/prix-serrurier-paris` (priority 2)
- [ ] `/guides/porte-claquee-que-faire`
- [ ] `/guides/norme-a2p-expliquee`
- [ ] `/guides/serrurerie-assurance-habitation`
- [ ] Each guide 1,000+ words, real FAQ blocks, internal links to services + /tarifs
- [ ] Citations: PagesJaunes, sector directories, syndic/insurer outreach
- [ ] Quarterly /tarifs price refresh routine established

**Phase 4 done when:** guides indexed, AI engines beginning to cite for target queries, central-Paris rankings moving.

### Phase 5 — Compound (Month 6–12)

- [ ] Expand zones beyond the first 6 based on what's ranking
- [ ] Scale whatever ad channels convert, cut what doesn't
- [ ] Track organic share of leads climbing vs paid
- [ ] Iterate content on real query data from Search Console

---

_PRIONATION.io | Priority Foundation · Control over dependency. Leverage over labor. Systems over manual execution._
