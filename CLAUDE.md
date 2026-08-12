# PARISLOCK — Locksmith Website Build

> **How to use this file.** Save it as `CLAUDE.md` at the repo root. Claude Code reads it automatically as project context. It is the single source of truth for scope, stack, and standards. When something here is marked 🔴 BLOCKER, do not hardcode a value, stop and ask.

Built by PRIONATION.io | Priority Foundation. Client: Serrurier Paris Express. Prepared 20/07/2026 · **v1.3, updated 12/08/2026: all four blockers resolved by the client, the P0/P1/P1.5 remediation shipped, plus B2B pages, full Île-de-France coverage, the guides engine and WhatsApp as a second contact channel.**

> **What changed in v1.3.** The client closed every open blocker on 12/08/2026, and the whole v1.2 remediation list shipped:
>
> 1. ✅ **B1 — name confirmed.** "Serrurier Paris Express", used everywhere. `BRAND_NAME` was already correct.
> 2. ✅ **B2 — domain confirmed.** `parisunlockdoor.fr` is the SEO target. `DOMAIN` and canonicals were already correct.
> 3. ✅ **B3 — price resolved.** Client instruction: use the real market data. The €80 blindage placeholder is gone and the whole grid is now the market grid (blindage **890 € HT / 1 068 € TTC**), with every "sur devis" gap on a common intervention filled. Prices display **TTC first, HT in brackets**, which closes §15 Finding 4 at the same time.
> 4. ✅ **B4 — duplicate copy rewritten.** New H1, four new benefit cards, new pricing teaser, FR **and** EN. No string now matches the reference site.
> 5. ✅ **P1 — geographic expansion.** 20 arrondissements, 7 IDF department hubs, 8 priority city pages, a real hub → department → city hierarchy, IDF postcode checker, `areaServed` updated to match.
> 6. ✅ **B2B + guides.** Both B2B service pages with a dedicated enquiry form, and all five guides at 1,500+ words with FAQ blocks.
> 7. 🆕 **WhatsApp as a second channel.** Every call CTA is one control that opens a call/WhatsApp choice, and every form composes its request into a WhatsApp message on submit — see §6.
>
> 114 pages build, typecheck, lint and format clean. Still open, all off-repo: SIRET/APE, GTM container, Search Console, LSA/GBP, real reviews, form backend.

> **What changed in v1.2.** Audited **our own build** (`serrurier-paris-theta.vercel.app`, repo `prayoga-cpu/serrurier-paris`) against **the reference site Rani supplied**, `serrurier-depanneur-idf.fr` — a live Paris/IDF locksmith site built by a friend of hers, sent 01/08/2026 as inspiration. Three findings, recorded in full at §15:
>
> 1. ⚠️ **New evidence contradicts the €80 blindage confirmation.** The reference site, a real trading Paris/IDF locksmith, prices blindage at **890€ HT**. B3 was closed by explicit client override, so this is not a process failure, but the override now looks factually wrong and needs re-confirming before it costs credibility. See §0 B3.
> 2. ⚠️ **Hero and trust copy near-duplicates the reference site** — H1 and all four benefit cards. Differentiation and duplicate-content risk. See §0 B4.
> 3. ⚠️ **Geographic coverage gap Rani raised directly.** Reference covers 20 arrondissements + 7 IDF departments + ~90 cities; we cover 6 arrondissements. See §3 and §14 P1.
>
> New P0/P1 remediation blocks sit at the top of §14, ahead of the phase roadmap. Changes marked ⚠️.

> **What changed in v1.1.** Client intake confirmed the direct-artisan positioning (not a lead broker), broadened the audience to include businesses and syndics, added two B2B services and a maintenance-contract line, upgraded /devis to quote-plus-booking, and added an installation guarantee as a trust asset. A full development TODO checklist is now at §14. Changes are marked 🆕 through the doc.

> **Build status note (audited against the repo, not just this doc).** §13/§14 checkboxes below now reflect what's actually in the codebase, not aspiration. Two deliberate deviations from this doc, both directed explicitly during the build session rather than decided unilaterally:
>
> - **§2 says EN is optional/later — the site shipped fully bilingual instead** (FR at root, EN under `/en`, see `lib/i18n.ts`). Every existing page has both locales.
> - **§0 B3 (blindage price) was resolved to "confirmed" and published at €80**, on record as an explicit override after the exact €990+ HT market-rate warning in this doc was surfaced. If that confirmation is wrong, `lib/pricing.ts` is the one place to fix it.
>
> Not yet built at all: B2B pages (`securisation-locaux-pro`, `contrats-maintenance`), guides, review engine, form backend, call tracking. Built but inert until someone supplies a credential or fact: GTM/consent (needs `NEXT_PUBLIC_GTM_ID`), legal pages (need SIRET and the other client-specific fields), booking picker (collects a preferred slot, no availability backend). See checkboxes for the granular picture.

---

## 0. Read first — decisions that gate the build

All four blockers below are now **closed by the client**. Kept in place as the decision record: each one gated the build, and each resolution is load-bearing for what shipped.

| #     | Blocker                                 | Resolution                                                                                                                                                                                                                                                                                                                                            | Where it lives                                                                                                                                        |
| ----- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| ✅ B1 | **Business name — closed 12/08/2026**   | Client confirmed **"Serrurier Paris Express"**, to be used everywhere. The collision with the older same-name business is a real and now knowingly accepted SEO cost: brand queries will be contested, which makes the price and trust clusters in §5 more important here than they would be for a distinctive brand, not less.                       | `BRAND_NAME` in `lib/config.ts`, already correct. Never inline the string                                                                             |
| ✅ B2 | **Primary domain — closed 12/08/2026**  | Client confirmed **`parisunlockdoor.fr`** as the SEO target domain.                                                                                                                                                                                                                                                                                   | `DOMAIN` in `lib/config.ts`; canonicals, hreflang, sitemap and OG all resolve to it. DNS/hosting cutover stays an off-repo task. Never `.lovable.app` |
| ✅ B3 | **Blindage price — closed 12/08/2026**  | Client instruction: _use the real market / the reference price data_. The €80 override is withdrawn and the published grid is now the market grid — blindage at **890 € HT (1 068 € TTC)**, plus real figures for cylinder, multipoints 3/5 and sécurisation après effraction, which removes every "sur devis" gap on a common consumer intervention. | `lib/pricing.ts`. Figures stored HT (the basis the source grid publishes), rendered TTC-first everywhere                                              |
| ✅ B4 | **Duplicate positioning copy — closed** | Rewritten in both locales: new H1 — _"Serrurier à Paris : le prix d'abord, l'outil ensuite."_, which also puts the §5 primary keyword in the H1 for the first time — four new benefit cards, new pricing teaser, new footer tagline, new meta suffixes.                                                                                               | `lib/i18n.ts`. Re-check on any future copy pass                                                                                                       |

✅ **Why the B3 sequence is worth keeping.** The original override was recorded and implemented correctly; then market evidence contradicted the underlying fact; the fact was reopened rather than treated as settled; the client resolved it with real data. A published price is a public credibility claim, not just a config value — which is exactly why reopening it was worth the friction.

Still unconfirmed, needed before launch but not before code: **SIRET and APE code** — `lib/config.ts` holds both as `null`, and the footer identifier block renders each line only once its value is non-null, so filling them in is the entire change — and **real customer reviews** (no `AggregateRating` until they exist).

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

| Layer         | Choice                                                                                                                                                           | Reason                                                                                                    |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Framework     | **Next.js, static export** (`output: 'export'`)                                                                                                                  | Raw HTML must be complete before JS runs. This is the single most important technical requirement, see §7 |
| Styling       | Tailwind CSS                                                                                                                                                     | Fast, consistent, matches PRIONATION workflow                                                             |
| Hosting       | Vercel                                                                                                                                                           | Static, fast, owned by client                                                                             |
| Forms         | React Hook Form + Zod validation + Cloudflare Turnstile                                                                                                          | Spam protection without friction                                                                          |
| 🆕 Booking    | Online appointment flow (date/time slot picker) for planned jobs                                                                                                 | Client asked for _prendre rendez-vous en ligne_, not just quote requests. See §6                          |
| 🆕 Contact    | **WhatsApp** (`wa.me/33649658510`) offered alongside the phone on every CTA                                                                                      | Matches PRIONATION's existing pattern                                                                     |
| Form backend  | Notion API (or client's CRM), server route or edge function — **not yet built**; forms currently compose their request into a WhatsApp message on submit, see §6 |
| Analytics     | GTM container → GA4 + Google Ads conversion linker                                                                                                               | See §8                                                                                                    |
| Call tracking | Dynamic number insertion or per-source tracking numbers                                                                                                          | Calls are the primary conversion, they must be measurable                                                 |
| Language      | **French primary.** EN optional later, do not build multilingual scaffolding in v1 unless trivial                                                                | Customers are French. FR-first is a ranking and trust decision                                            |

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
│   ├── /services/securisation-locaux-pro    ✅ built — B2B premises security
│   └── /services/contrats-maintenance       ✅ built — B2B/copro, dedicated enquiry form
│
├── /tarifs                             full transparent price grid, the trust weapon
├── /devis                              🆕 quote + online booking flow, rebuilt (see §6)
│
├── ZONES  ✅ v1.3 — full Île-de-France hierarchy built (hub → department → city)
│   ├── /zones                              hub (built)
│   │
│   ├── PARIS — all 20 arrondissements built
│   │   └── /serrurier-paris-1 … /serrurier-paris-20
│   │
│   └── ÎLE-DE-FRANCE — 7 department hubs + 8 priority city pages, all built
│       ├── /zones/hauts-de-seine-92        Boulogne, Neuilly, Levallois, Clichy…
│       ├── /zones/seine-saint-denis-93     Saint-Denis, Montreuil, Pantin, Aubervilliers…
│       ├── /zones/val-de-marne-94          Créteil, Vincennes, Ivry, Saint-Maur…
│       ├── /zones/essonne-91               Massy, Évry, Corbeil, Palaiseau…
│       ├── /zones/yvelines-78              Versailles, Saint-Germain-en-Laye, Poissy…
│       ├── /zones/val-doise-95             Cergy, Argenteuil, Sarcelles, Pontoise…
│       ├── /zones/seine-et-marne-77       Meaux, Melun, Chelles, Pontault-Combault…
│       └── CITIES (8 built): /serrurier-boulogne-billancourt, -neuilly-sur-seine,
│                    -levallois-perret, -saint-denis, -montreuil, -creteil,
│                    -versailles, -argenteuil
│
├── GUIDES  ✅ built — index at /guides, 5 guides, 1,500+ words each, real FAQ blocks
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

**Zone choice was deliberate.** Paris intra-muros takes 4–8 months to rank. Outer/denser arrondissements move in 6–12 weeks. 1 and 2 for base credibility, 10/11/18/20 because they're winnable faster and full of renters. Early wins buy patience on the hard central zones.

✅ **v1.3 — expansion shipped.** That sequencing logic was sound but was never explained to the client, so it read as a shortfall. Rani raised it after seeing the reference site: _"in the other website he put a lot more city to be visible in other place than just paris."_ All 20 arrondissements, 7 department hubs and 8 city pages are now live, each written to the depth rule below rather than templated. The original six keep their URLs unchanged, so nothing already indexed moves.

🔴 **Hard rule on zone pages.** ~90 near-identical templated city pages is exactly what Google's thin-content filters catch, and the reference site is exposed to that. The 6 existing arrondissement pages set the bar: real landmarks, neighbourhoods, and per-zone FAQ. Every new zone page must clear it. If a page can't be written with real local substance, don't ship it. Coverage without substance is worse than no page. This is why ~140 IDF communes are **named on their department hub** rather than each given a thin page: coverage is stated where it's real, thin pages aren't manufactured to state it.

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

✅ **v1.3 — price grid resolved (B3).** The client's instruction was to publish the real market data, so the grid below _is_ the published grid. All figures live in `lib/pricing.ts`, stored HT because that is the basis the source grid uses, and rendered TTC-first because that is what a French consumer must see.

| Service                       | Published HT | Published TTC | Note                                               |
| ----------------------------- | ------------ | ------------- | -------------------------------------------------- |
| Ouverture porte, sans dégât   | 90 €         | 108 €         | Matches the market grid                            |
| Ouverture porte, avec dégât   | 120 €        | 144 €         | Matches the market grid                            |
| Changement cylindre           | 110 €        | 132 €         | 🆕 line added, gap filled                          |
| Changement serrure complète   | 180 €        | 216 €         | Reconciled up from the earlier 150 € "standard"    |
| Serrure haute sécurité        | 250 €        | 300 €         | Kept, no market equivalent to reconcile against    |
| Multipoints 3 points          | 350 €        | 420 €         | 🆕 real figure, was "sur devis"                    |
| Multipoints 5 points          | 450 €        | 540 €         | 🆕 real figure, was "sur devis"                    |
| Sécurisation après effraction | 150 €        | 180 €         | 🆕 real figure, was "sur devis"                    |
| **Blindage de porte**         | **890 €**    | **1 068 €**   | **B3 resolved — the €80 placeholder is withdrawn** |
| Déplacement seul              | 39 €         | 46,80 €       | Corrected down from 69 €                           |
| Nuit / week-end / férié       | +70 €        | +84 €         | Unchanged                                          |

✅ **HT vs TTC resolved.** Every rendered price now carries its basis. `/tarifs` shows both — `108 € TTC (90 € HT)` — because consumers need TTC and the businesses and syndics targeted in §1 need HT; everywhere else (home service cards, service pages, devis estimator) shows TTC only. `Service` schema `offers/minPrice` emits the TTC figure with `valueAddedTaxIncluded: true`, so markup and page can't disagree. The VAT rate is one constant: if a reduced rate applies to a given job, the quote applies it and the customer pays **less** than published, never more — stated in the page copy rather than left implicit.

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

🆕 **Three conversion paths, not one.** Emergency → tap-to-call. Planned → quote estimate + online booking (date/time slot). B2B/syndic → dedicated enquiry form on the maintenance-contract page. Don't force all three through one generic form. All three are built.

🆕 **WhatsApp, added 12/08/2026 at the client's request.** Two changes, both in service of the same idea — a request should never disappear, and a quoted price should end up in writing on both sides:

- **Every call CTA is one control, not two.** A single phone button (header, sticky mobile bar, service pages, /devis) opens a small popup offering _Appel téléphonique_ or _WhatsApp_. Built on `<details>/<summary>`, so it works with JS disabled and stays a server component. No surface shows two competing contact buttons.
- **Every form submits to WhatsApp.** On submit, the form composes a readable summary — service, options, preferred slot, postcode, contact details — and opens `wa.me` pre-filled, then shows a confirmation panel repeating the link (in case the popup was blocked), the summary itself, the phone number, and an "edit my request" link. This is deliberate scaffolding, not the end state: **there is still no form backend**, and a form that silently goes nowhere is worse than no form. When a backend lands, POST from the same handler and keep the WhatsApp panel as the follow-up step rather than the transport.

Track `whatsapp_click` separately from `call_click` — WhatsApp conversations are attributable and cheap to measure, phone calls aren't (yet).

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
- Events: `call_click`, `whatsapp_click`, `form_submit`, `tarifs_view`, `devis_start`, `booking_complete`

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

| Field                        | Status                                                                                                                                                                                                                                                                                         |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contact                      | Rani Orwan                                                                                                                                                                                                                                                                                     |
| Email                        | admin@parisunlockdoor.fr                                                                                                                                                                                                                                                                       |
| Phone                        | +33 7 83 14 89 94                                                                                                                                                                                                                                                                              |
| Public site phone            | +33 6 49 65 85 10                                                                                                                                                                                                                                                                              |
| Owned domain                 | parisunlockdoor.fr — `DOMAIN` constant set, live canonicals resolve to it                                                                                                                                                                                                                      |
| ⚠️ Our build (dev/staging)   | `serrurier-paris-theta.vercel.app` · repo `github.com/prayoga-cpu/serrurier-paris` — **this is PRIONATION's own build**, the site under development                                                                                                                                            |
| ⚠️ Client-supplied reference | `serrurier-depanneur-idf.fr` — **not ours, not a client property.** A live Paris/IDF locksmith site built by a friend of Rani's; she sent it 01/08/2026 as inspiration ("another website that friend did"). Used here as market evidence for pricing and structure                             |
| ⚠️ Client priority           | Rani, 01/08/2026: _"the most important part is the marketing so no need to rush to optimize the website."_ She's deprioritising polish in favour of visibility. **P0 items in §14 are not polish** — they're credibility faults that would waste ad spend. Fix those, then follow her timeline |
| Positioning                  | 🆕 Confirmed direct artisan, not a lead broker (client questionnaire, Q1 + competitor table)                                                                                                                                                                                                   |
| Audience                     | 🆕 Confirmed: particuliers, commerçants, entreprises, syndics · ages 20–80                                                                                                                                                                                                                     |
| Services                     | 🆕 Confirmed full list incl. B2B premises security + maintenance contracts                                                                                                                                                                                                                     |
| Guarantee                    | 🆕 Installation guarantee confirmed as a formal commitment                                                                                                                                                                                                                                     |
| Insurance                    | 🆕 "Qualifiés et assurés" stated, supports LSA verification                                                                                                                                                                                                                                    |
| Business name                | ✅ B1 closed 12/08/2026 — "Serrurier Paris Express", used everywhere                                                                                                                                                                                                                           |
| SIRET                        | 🔴 still pending, with APE code. `lib/config.ts` — the footer renders each identifier only once it's non-null                                                                                                                                                                                  |
| Blindage price               | ✅ B3 closed 12/08/2026 — market grid adopted, 890 € HT / 1 068 € TTC                                                                                                                                                                                                                          |
| Which domain is live         | ✅ B2 closed 12/08/2026 — `parisunlockdoor.fr` confirmed as SEO target; DNS cutover still off-repo                                                                                                                                                                                             |
| Area served                  | ✅ Paris 1–20 + 7 IDF departments published, `areaServed` matches. Response time stays "moins de 30 minutes selon le secteur"                                                                                                                                                                  |
| WhatsApp                     | ✅ `wa.me/33649658510` confirmed 12/08/2026 — live on every CTA and as the form transport                                                                                                                                                                                                      |
| Real reviews                 | Pending, client acknowledges current testimonials are placeholders                                                                                                                                                                                                                             |

---

## 13. Definition of done (v1 launch)

- [x] All core pages live with unique title + meta — home, /tarifs, /devis, 7 services, /zones + 35 zone pages, /guides + 5 guides, /contact, 3 legal pages, ×2 locales. **114 pages**, each with its own title, description, canonical and hreflang
- [ ] Full content present in raw HTML (JS-disabled test passes) on every page — true for all marketing copy, prices, guides and zone content. One caveat unchanged: the hero/devis request form is a client component, so with JS off a visitor sees the headline and trust content but can't progress past the postal-code step. The call/WhatsApp chooser **does** work without JS (it's `<details>`-based)
- [x] Valid `LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList` schema (no fake `AggregateRating`) — `Service` now carries a real `offers`/`minPrice` for every consumer service, TTC, with `valueAddedTaxIncluded: true`. `FAQPage` on service, zone **and** guide pages. `areaServed` lists Paris + the 7 IDF departments, matching what's actually published
- [ ] robots.txt allows AI crawlers, sitemap submitted and accepted — robots.txt + sitemap.xml correct and covering all 114 pages; Search Console submission is off-repo, not done
- [ ] GTM + GA4 + Ads conversion tracking firing, call tracking live — **scaffold only.** `components/Analytics.tsx` injects GTM behind a CNIL consent gate and forwards the `data-event` CTAs (`call_click`, `whatsapp_click`, `form_submit`, `devis_start`, `tarifs_view`, `booking_complete`). Gated on `NEXT_PUBLIC_GTM_ID`, still unset — nothing renders or fires until a container exists
- [ ] Mobile Core Web Vitals green — not measured
- [x] Sticky tap-to-call on mobile, split urgent/planned CTAs — sticky bar and header CTA both open the call/WhatsApp chooser; `/devis` is the separate planned path; B2B pages route to their own enquiry form
- [x] No `.lovable.app` references anywhere
- [x] 🔴 B1, B2, B3, B4 all resolved — all four closed by the client on 12/08/2026, see §0
- [ ] SIRET published, legal pages complete — legal pages built (FR+EN, footer-linked). SIRET, APE, legal form, registered address, publication director, payment methods and the designated mediator are all marked pending in-page rather than invented. Fill `lib/config.ts` (SIRET, APE — they then appear in the sitewide footer) and `lib/legal.ts` (the rest)
- [x] Custom OG images on key pages — 16 generated at build time via `next/og` (home, /tarifs, /devis, 5 services, ×2 locales). Guides and zone pages fall back to the shared card in `lib/og.tsx`
- [x] 🆕 Two B2B service pages live (premises security, maintenance contracts) — both built, with a dedicated B2B enquiry form (structure, role incl. syndic, number of sites, need) and a proposal-first CTA instead of an emergency call
- [ ] 🆕 Online booking flow working, three conversion paths measured separately — slot picker built on both the hero form and `/devis`; it submits a _preferred_ slot, not a confirmed reservation, and the copy says so. Requests now reach the business via WhatsApp instead of vanishing, but separate measurement is still blocked on the GTM item above
- [x] 🆕 Installation guarantee surfaced on relevant pages + schema — callout on every service page, trust card on the home page, badge list on hero/devis. Still no `WarrantyPromise` node: the duration isn't client-confirmed and an empty one would be meaningless markup
- [x] 🆕 Guides engine live — 5 guides at 1,500–1,700 words, real FAQ blocks feeding `FAQPage`, internal links to services and /tarifs. The price guide pulls its figures from `lib/pricing.ts`, so it cannot drift from /tarifs
- [x] 🆕 Full Île-de-France coverage — 20 arrondissements, 7 department hubs, 8 city pages, "your town isn't listed?" fallback, IDF-aware postcode checker

---

## 14. Development TODO / roadmap

Work top to bottom. Each phase gates the next. Check items as you go. 🔴 = blocked on client, don't code around it.

✅ **P0, P1 and P1.5 are complete as of 12/08/2026.** Kept below as the record of what was fixed and why; only the unchecked lines are still open, and each of those is off-repo.

### ✅ P0 — Live defects (done)

_These were public and each one undercut the honest-pricing positioning the brand rests on._

- [x] **Blindage price resolved.** The client instructed us to use the real market data. `lib/pricing.ts` now publishes 890 € HT / 1 068 € TTC, and the €80 figure is gone from the site
- [x] **Hero H1 rewritten** — _"Serrurier à Paris : le prix d'abord, l'outil ensuite."_ No overlap with the reference, and the §5 primary keyword is in the H1 for the first time
- [x] **The four benefit cards rewritten**, FR and EN, along with the pricing teaser, footer tagline and meta suffixes that carried the same phrasing
- [x] **Tax basis on every displayed price** — `/tarifs` shows `108 € TTC (90 € HT)`, everywhere else shows TTC only, and `Service` schema emits the TTC figure with `valueAddedTaxIncluded: true`
- [x] **Full price grid published** per the client's instruction, with the "sur devis" gaps on cylinder, multipoints 3/5 and sécurisation après effraction all filled
- [x] **Sweep of FR + EN copy** for further overlap with the reference — the teaser headline was the only other match, now rewritten

### ✅ P1 — Geographic expansion (done)

- [x] Paris expanded from 6 to all 20 arrondissements, each with real landmarks, quartiers and a per-zone FAQ
- [x] `/zones` restructured into a real hierarchy: hub → department → city, with breadcrumbs to match
- [x] 7 department hub pages (92, 93, 94, 91, 78, 95, 77), each naming ~20 real communes
- [x] 8 priority city pages: Boulogne-Billancourt, Neuilly-sur-Seine, Levallois-Perret, Saint-Denis, Montreuil, Créteil, Versailles, Argenteuil
- [x] Depth rule held throughout — no templated duplicates; communes without real substance are named on their department hub instead of getting a thin page
- [x] `lib/zones/` now carries the department/city structure (`types`, `paris`, `departments`, `cities`, `index`); the original six arrondissement URLs are unchanged
- [x] `LocalBusiness` `areaServed` updated to Paris + the 7 departments
- [x] "Your town isn't listed?" fallback CTA on every zone page and on the hub, plus an IDF-aware postcode checker (75 → Paris, 77/78/91/92/93/94/95 → IDF, anything else → "we'll confirm")
- [ ] 🔴 Coverage claims are published on the client's instruction to expand into IDF; worth one written confirmation from Rani that she genuinely services the outer departments, particularly 77

### ✅ P1.5 — Trust signals (done)

- [x] Business identifiers in the sitewide footer — "Artisan serrurier indépendant, qualifié et assuré", with SIRET and APE lines that render as soon as `lib/config.ts` has them. 🔴 Still waiting on those two values
- [x] The 24/01/2017 written-quote notice moved into the sitewide footer, not just `/tarifs`
- [x] Starting price on every homepage service card
- [x] Missing price lines filled: cylinder, multipoints 3 and 5 points, sécurisation après effraction

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
- [x] `/services/blindage-de-porte` — ✅ B3 resolved: published at 890 € HT / 1 068 € TTC per the client's market-data instruction
- [x] `/services/serrure-multipoints`
- [x] `/services/securisation-apres-effraction`
- [x] `/tarifs` — honest price grid, "à partir de" wording, the "moins de 30 minutes selon le secteur" response-time line, and the €150 written-quote note all live
- [x] `/devis` — quote-request mechanics fixed per §6 (always-active submit, no pre-submit cancellation warning) **and** the slot picker, though note it collects a _preferred_ slot rather than confirming a reservation (no availability backend — see §13)
- [x] Legal: `/mentions-legales`, `/cgv`, `/politique-de-confidentialite` — built FR+EN, footer-linked. Client-specific facts (SIRET, legal form, address, director, payment methods, mediator) are marked pending in-page, not invented — see `lib/legal.ts`
- [x] Schema on every page: `LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList` (no `AggregateRating`)
- [x] Per-page unique meta + custom OG images — 16 build-time OG PNGs via `next/og`
- [x] Conversion fixes: always-active submit, inline validation, confirmation step — submit buttons are always active, no pre-submit cancellation warning exists, and there **is** now a post-submit confirmation step: the request is composed into a WhatsApp message and a panel repeats the link, the summary and the phone number. Validation is still native HTML `required` plus the postal-code checker, not custom inline messaging

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

- [x] 🆕 `/services/securisation-locaux-pro` — audit of access points, master-key plans, protected-key cylinders, badge access, out-of-hours fitting
- [x] 🆕 `/services/contrats-maintenance` with dedicated B2B enquiry form — estate survey, scheduled visits, contractual on-call rate and response time
- [x] Zone pages, genuinely localized (not templated duplicates) — ✅ now 20 arrondissements + 7 department hubs + 8 city pages, all at the original depth. See §14 P1
- [ ] Review request engine: SMS/email after invoice
- [ ] 🔴 Replace placeholder testimonials with real verified reviews; only then consider `AggregateRating` — no testimonials exist to replace (never added placeholder ones); still no real reviews collected

**Phase 3 done when:** B2B pages live with working enquiry flow, outer-zone pages entering top 20, real reviews collecting.

### Phase 4 — Authority / AEO / GEO (Month 3–6)

_Goal: own the trust and price queries, start earning AI citations._

- [x] `/guides/eviter-arnaque-serrurier-paris` (priority 1) — scam mechanics, the four questions to ask, the legal position, recourse
- [x] `/guides/prix-serrurier-paris` (priority 2) — real figures pulled from `lib/pricing.ts`, so it can't drift from /tarifs
- [x] `/guides/porte-claquee-que-faire` — including when to call 18/112 instead of a locksmith
- [x] `/guides/norme-a2p-expliquee` — what the stars mean, and why the door matters more than the star count
- [x] `/guides/serrurerie-assurance-habitation` — what's covered, the clause that cuts payouts, the claim file
- [x] Each guide 1,000+ words (all land 1,500–1,700), real FAQ blocks feeding `FAQPage`, internal links to services + /tarifs
- [ ] Citations: PagesJaunes, sector directories, syndic/insurer outreach
- [ ] Quarterly /tarifs price refresh routine established

**Phase 4 done when:** guides indexed, AI engines beginning to cite for target queries, central-Paris rankings moving.

### Phase 5 — Compound (Month 6–12)

- [ ] Expand zones beyond the §14 P1 set based on what's actually ranking
- [ ] Scale whatever ad channels convert, cut what doesn't
- [ ] Track organic share of leads climbing vs paid
- [ ] Iterate content on real query data from Search Console

---

## 15b. Benchmark study — spicandspan.fr, 12/08/2026

Researched at the client's request as an SEO reference ("top rank for cleaning service"). Recorded because the finding is counter-intuitive and shapes what we build next.

**What they actually do.** Their entire sitemap is **21 URLs**: 6 city pages, 7 service pages, 1 task page, 5 utility pages. `/en/cities/paris-cleaning-service` is the only Paris URL — the 20 arrondissements and 34 suburbs on it are **plain text, not links, not pages**. They are not a location-page farm.

| Lever                     | Them                                | Us, before this pass                  |
| ------------------------- | ----------------------------------- | ------------------------------------- |
| Money-page depth          | 1,978 words (city), 2,623 (service) | 446–624                               |
| Price in meta description | yes, on every page                  | no                                    |
| Keyword in slug           | `{city}-cleaning-service`           | yes for zones, no for department hubs |
| Task/symptom pages        | yes                                 | none                                  |
| Reviews                   | 25k claim, named, 3 platforms       | none                                  |
| Schema.org                | **none at all**                     | full                                  |
| hreflang                  | **none**, across 10 countries       | full                                  |
| robots.txt                | bare, no sitemap directive          | full, AI crawlers allowed             |

**The real mechanism** is not page volume: it's owning a _qualifier_ ("English-speaking") that strips out most French-language competition, plus depth per page. That is structurally the same asymmetric play §5 already prescribes for us via the price/anti-scam cluster — so the study validates the existing strategy rather than replacing it.

⚠️ Verified: their structure. Not verified: their actual rankings — no rank-tracking data was available, and their copy suggests they rank for English-language queries, a far thinner field than French head terms.

### What we shipped in response (12/08/2026)

- **Depth.** Zone pages 446 → **1,100–1,290 words**, services 510 → **~920**, home 685 → **1,274**. Two new per-zone fields (`localContext`, `commonJobs`) written for all 35 zones × 2 locales, plus two extra FAQ entries each; the rest comes from template sections that were missing (inline price table, how-it-works, trust, guides, nearby zones, reviews).
- **Price in every meta description**, generated from `lib/pricing.ts` so it can't drift.
- **Department hubs moved to keyword URLs**: `/zones/hauts-de-seine-92` → `/serrurier-hauts-de-seine-92`. Done before indexing, so no redirects were needed.
- **Task/intent layer**, the one page type they have and we didn't: `/porte-claquee`, `/cle-cassee-dans-la-serrure`, `/serrure-bloquee`, `/cle-perdue`, `/rideau-metallique-bloque`. Symptom → do now → don't do this → price, ~730 words, transactional rather than editorial.
- **Review system** (`lib/testimonials.ts` + `components/Testimonials.tsx`) with real reviews in `VERIFIED_REVIEWS` and sample data gated behind `NEXT_PUBLIC_SHOW_SAMPLE_REVIEWS`, off in production. Still **no `AggregateRating`**. 🔴 Real reviews remain the single biggest gap versus the benchmark.
- **Cross-link matrix**: zone ↔ adjacent zones (real adjacency, `lib/zones/adjacency.ts`), service ↔ tasks ↔ zones, guide ↔ tasks ↔ services, home → everything.
- **`/a-propos`**, the E-E-A-T page §3 listed and we'd never built: who turns up, qualifications, commitments, and the SIRET/APE block that fills itself from `lib/config.ts`.
- **Hero photo converted from a CSS background to a real `<img>`** with descriptive alt — a background image is invisible to image search.

**Deliberately not copied:** their zero-schema/zero-hreflang setup (our AEO edge), service × zone intersection pages (~140 near-duplicates — the thin-content trap §3 forbids, and which they also refused to build), and more city pages (35 zone pages already exceed their footprint 5×).

---

## 15. Live audit record — 01/08/2026

Audit of the deployed build against a client-supplied reference site. Recorded so the findings survive session boundaries.

**Sources**

- **Our build (the site under development):** `serrurier-paris-theta.vercel.app` · repo `github.com/prayoga-cpu/serrurier-paris`
- **Client-supplied reference (not ours):** `serrurier-depanneur-idf.fr` — a live Paris/IDF locksmith site built by a friend of Rani's. She sent it 01/08/2026 with the note _"another website that friend did, I think it will be kind to inspire from it."_ Treated here as market evidence, not as a client asset

### ✅ Finding 1 — New evidence disputes the €80 blindage price — RESOLVED 12/08/2026

`/tarifs` and `/services/blindage-de-porte` publish "À partir de 80 €". The reference prices the same service at **890€ HT**, aligning with the €990+ range flagged in v1.0.

**Framing matters here.** This was not a blocker ignored. B3 was closed by explicit client override, correctly recorded and correctly implemented. What's changed is the evidence, not the process. The right response is to reopen the fact with Rani, not to relitigate the decision.

**Why it couldn't wait.** The page is headlined transparency. A figure ~10× under market is the exact bait-and-switch signature the DGCCRF documented across this sector.

**Resolution.** The client instructed us to publish the real market data. The grid is now market-aligned throughout — blindage at 890 € HT / 1 068 € TTC — and the €80 figure appears nowhere on the site.

### ✅ Finding 2 — Near-duplicate positioning copy — RESOLVED 12/08/2026

| Element   | Reference                                                | Our build      |
| --------- | -------------------------------------------------------- | -------------- |
| Hero H1   | "Le prix qu'on vous annonce est le prix que vous payez." | identical      |
| Benefit 2 | "Prix annoncé avant travaux"                             | identical      |
| Benefit 3 | "Un artisan, pas un centre d'appel"                      | near-identical |
| Benefit 4 | "Devis écrit systématique"                               | identical      |

The reference was supplied as _inspiration_ and got used as a template. Whatever the relationship between the two businesses, both sites chase the same Paris/IDF search terms, so identical wording means no differentiation and duplicate-content exposure for whichever ranks second.

**Resolution.** All four cards, the H1, the pricing teaser, the footer tagline and the meta suffixes rewritten in `lib/i18n.ts`, FR and EN. Strategy kept, wording is now our own, and the H1 carries the primary keyword.

### ✅ Finding 3 — Geographic coverage gap — RESOLVED 12/08/2026

|                       | Reference | Ours |
| --------------------- | --------- | ---- |
| Paris arrondissements | 20        | 6    |
| IDF departments       | 7         | 0    |
| Named cities          | ~90       | 0    |

Our narrower scope was defensible SEO sequencing, but was never explained to the client, so it read as a shortfall. Rani raised it directly.

**Resolution.** 20 arrondissements, 7 department hubs and 8 city pages shipped, with ~140 communes named on the hubs. The thin-content guardrail held: coverage is stated where it's real, and no page was manufactured to state it.

### ✅ Finding 4 — No tax basis on any price — RESOLVED 12/08/2026

No price on the live site showed HT or TTC. The reference marks every line HT; French B2C pricing should display TTC.

**Resolution.** Prices are stored HT (the source basis) and rendered TTC-first: `/tarifs` shows both, everywhere else shows TTC only, and `Service` schema emits the TTC figure with `valueAddedTaxIncluded: true`. The VAT rate lives in one constant, and the reduced-rate case is stated in the page copy rather than left implicit.

### What the reference did better — all borrowed as of 12/08/2026

- ✅ Business identifiers in the footer — shipped, with SIRET/APE lines that appear as soon as the values exist
- ✅ Legal written-quote notice on every page, not only `/tarifs`
- ✅ Starting price visible on every service card, not behind a click
- ✅ Postcode coverage checker with a graceful "not listed?" fallback — now IDF-aware
- ✅ Complete price grid with no "sur devis" gaps on common interventions

### What we already do better — keep it

- Genuinely localized arrondissement pages with landmarks and per-zone FAQ; the reference lists ~90 cities as flat text with no individual pages
- Structured schema (`LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`) and AEO/GEO groundwork; the reference has none visible
- Build-time OG images across both locales
- CNIL-compliant consent gating built before any tag fires
- Bilingual FR/EN; the reference is FR only
- ✅ Guides engine (5 long-form guides with FAQ schema) and the B2B/maintenance lines — both now live, and absent from the reference site and the §11 competitor set alike
- ✅ WhatsApp as a written second channel, with every form composing its own summary — the reference offers a phone number only

---

_PRIONATION.io | Priority Foundation · Control over dependency. Leverage over labor. Systems over manual execution._
