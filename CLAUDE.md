# PARISLOCK — Locksmith Website Build

> **How to use this file.** Save it as `CLAUDE.md` at the repo root. Claude Code reads it automatically as project context. It is the single source of truth for scope, stack, and standards. When something here is marked 🔴 BLOCKER, do not hardcode a value, stop and ask.

Built by PRIONATION.io | Priority Foundation. Client: Serrurier Paris Express (working name, see blockers). Prepared 20/07/2026.

---

## 0. Read first — decisions that gate the build

Three things must be confirmed by the client before or during Phase 0. Do not guess them into the codebase.

| # | Blocker | Why it gates everything | Default until confirmed |
|---|---|---|---|
| 🔴 B1 | **Business name** | "Serrurier Paris Express" collides with a 10-year-old identical business. Ranking under it is near-impossible. May change to a distinct brand. | Use a single config constant `BRAND_NAME`, never inline the string. Placeholder: `"Serrurier Paris Express"` |
| 🔴 B2 | **Primary domain** | `parisunlockdoor.fr` is owned and clean. `parisunlockdoor.lovable.app` is throwaway. Build for the real domain. | Target `parisunlockdoor.fr`. Never ship anything pointing at `.lovable.app` |
| 🔴 B3 | **Blindage price** | Prototype lists "Porte blindée +80€". Real market is €990+ HT. €80 reads as the exact scam pattern the brand fights. | Do not publish any blindage price until confirmed. Leave "sur devis" |

Also unconfirmed, needed before launch, not before code: SIRET number, exact arrondissements served, real customer reviews, final logo and palette.

---

## 1. What we're building

A production locksmith website for the Paris market, built to be found (SEO + AI search), trusted (anti-scam positioning), and to convert emergency and planned jobs into calls and quote requests.

**Positioning.** Honest, transparent pricing in a market where the French consumer authority DGCCRF flagged anomalies in 60% of inspected home-repair providers, with locksmithing the most-reported sector. The whole brand is "the price we say is the price you pay." Every build decision serves that.

**Two customer modes, designed for both:**
- **Emergency** — locked out now, on a phone, panicking. Wants to call in one tap. Speed and reassurance.
- **Planned** — lock upgrade, blindage, post-burglary. Wants a quote and proof of competence. Form and detail.

**What this is not.** Not a call-center lead-broker. Not a template locksmith site. Not blue-and-orange with stock photos of hands holding keys.

---

## 2. Tech stack

Non-negotiable choices, they serve the SEO/AEO/GEO goals directly.

| Layer | Choice | Reason |
|---|---|---|
| Framework | **Next.js, static export** (`output: 'export'`) | Raw HTML must be complete before JS runs. This is the single most important technical requirement, see §7 |
| Styling | Tailwind CSS | Fast, consistent, matches PRIONATION workflow |
| Hosting | Vercel | Static, fast, owned by client |
| Forms | React Hook Form + Zod validation + Cloudflare Turnstile | Spam protection without friction |
| Form backend | Notion API (or client's CRM), server route or edge function | Matches PRIONATION's existing pattern |
| Analytics | GTM container → GA4 + Google Ads conversion linker | See §8 |
| Call tracking | Dynamic number insertion or per-source tracking numbers | Calls are the primary conversion, they must be measurable |
| Language | **French primary.** EN optional later, do not build multilingual scaffolding in v1 unless trivial | Customers are French. FR-first is a ranking and trust decision |

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
│   └── /services/securisation-apres-effraction
│
├── /tarifs                             full transparent price grid, the trust weapon
├── /devis                              quote request tool, rebuilt (see §6)
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

**Build order for pages:** home → 5 services → /tarifs → /devis → legal → zones → guides. Ship and index the money pages before the long tail.

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

**Service pages** — the problem, the intervention, honest price range, what's included, FAQ (feeds FAQPage schema), CTA split call vs devis.

**/tarifs** — the centerpiece. A clear, honest price grid. This is the most citable asset in the whole build, generative engines pull structured price answers. Mark prices "à partir de", include the travel/labor basis, note written quote required above €150 (French law since 24/01/2017).

**Zone pages** — genuinely localized, not templated duplicates. Local landmarks, arrondissement-specific content, the services offered there. Thin duplicate zone pages get filtered by Google, write real content per zone.

**Guides** — long-form (1,000+ words), real FAQ blocks, internal links to services and /tarifs. `/guides/eviter-arnaque-serrurier-paris` and `/guides/prix-serrurier-paris` are the priority two, they own the trust and price-research queries almost nobody competes on.

---

## 5. SEO keyword map

| Page | Primary keyword | Notes |
|---|---|---|
| / | serrurier paris | + urgence variants in H1/hero |
| /services/ouverture-de-porte | ouverture de porte paris | porte claquée as secondary |
| /services/changement-de-serrure | changement de serrure paris | cylindre / barillet secondary |
| /services/blindage-de-porte | blindage de porte paris | 🔴 price gated |
| /services/serrure-multipoints | serrure multipoints paris | |
| /services/securisation-apres-effraction | sécurisation après effraction | high emotional intent |
| /tarifs | prix serrurier paris | + tarif ouverture de porte |
| /serrurier-paris-11 (etc.) | serrurier paris 11 | ~€20 CPC but winnable |
| /guides/eviter-arnaque-serrurier-paris | arnaque serrurier paris | low competition, high conversion |
| /guides/prix-serrurier-paris | combien coûte un serrurier | high AEO value |

**The asymmetric play.** Everyone fights "serrurier urgence" (brutal, ~€13 CPC). Almost nobody owns "what should this cost." The price and trust clusters convert better, cost less, and are exactly what people ask ChatGPT before they call anyone. Weight content effort there.

---

## 6. Conversion architecture

The prototype gets the instinct right and the mechanics wrong. Fix all of these:

| Prototype issue | Required fix |
|---|---|
| Quote form is the only primary CTA | Split paths. **Urgent → sticky tap-to-call.** Planned → form. Someone locked out at 23h calls, they don't fill 7 fields |
| Submit disabled until an option is picked | Button always active. Validate on submit with clear inline errors |
| €69 cancellation warning directly above submit | Move to confirmation step, not pre-submit. It suppresses conversion where it sits |
| "+1,900 interventions, 4.9★" with no visible reviews | Show real reviews or soften the claim. **Do NOT add AggregateRating schema to unverifiable numbers**, that's a structured-data violation and it contradicts the whole honest pitch |
| No SIRET shown | Publish it (once B-list confirmed). French buyers check it. Free trust |
| Generic OG image | Custom branded OG image, 1200×630, per key page |

**Call is the primary conversion.** Track calls of 60s+ as the real signal. Form is secondary. Design and measurement both reflect that.

---

## 7. Technical SEO / AEO / GEO requirements

The reason the prototype is invisible to AI search: client-side rendering. Fixing it is the point of this build.

**Rendering**
- Static export, complete HTML before JS
- Verify every page with JS disabled shows full content
- No core content injected by client-side JS

**Structured data** (JSON-LD in HTML, server-rendered, never JS-injected)
- `LocalBusiness` (type `Locksmith`) sitewide — name, phone, area served, hours (24/7), geo
- `Service` on each service page
- `FAQPage` on service pages and guides that have FAQ blocks
- **No `AggregateRating` until real, verifiable reviews exist**
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

## 9. Branding

🔴 Final logo and palette pending client pick (and the name decision B1). Do not hardcode brand colors, use CSS variables / Tailwind config tokens so a palette swap is one file.

**Direction, pending confirmation** — three palette routes were presented. Client leaning to be confirmed:

| Route | Feel | Core colors |
|---|---|---|
| A · Institutional trust | Verified document, calm, anti-panic | Ink `#12213A`, Paper `#F7F5F1`, Verified `#1F7A5C`, Signal `#E8A33D` |
| B · Artisan craft | Brass, steel, real workshop | Charcoal `#23211E`, Bone `#EFE9DF`, Brass `#B08D3F`, Oxide `#7A3B2E` |
| C · Clinical clarity | Swiss, high-contrast, price-list precision | Near-black `#0E0E10`, White, Accent `#FF4D2E`, Confirm `#00875A` |

**Hard brand rules (regardless of route):**
- No emergency-red as the dominant color, it's the scam signal. If route C, cap the red accent under ~10% coverage
- No stock photos of hands holding keys or blurry locks
- No clipart key in the logo
- No blue-and-orange template look
- No "24H" starburst
- Calm over loud. The competition shouts, calm is the differentiator
- Typography: avoid Montserrat/Poppins (template default). Must render French accents cleanly at 14px on mobile. Suggested: a serif or grotesque headline + Inter/Public Sans body
- Logo must survive at 40px (favicon, Google Business Profile, van livery). Test small first

Set up Tailwind config with semantic tokens: `--color-ink`, `--color-paper`, `--color-verified`, `--color-signal`, so the final palette drops in cleanly.

---

## 10. Build phases

| Phase | Window | Ships | Done when |
|---|---|---|---|
| **0 · Foundation** | Wk 1–2 | Repo, Next.js static scaffold, domain, GTM+GA4+call tracking, robots.txt + sitemap, schema base, GBP claim started, LSA verification submitted | Site deploys, indexes, tracking fires |
| **1 · Core pages** | Wk 3–4 | Home, 5 service pages, /tarifs, rebuilt /devis, legal | All indexed, unique meta, schema valid |
| **2 · Paid on** | Wk 5–6 | Conversion tracking verified, ready for LSA + Search campaigns | First tracked calls, real CPL |
| **3 · Local depth** | Mo 2–3 | 6 zone pages, review engine | Outer-zone pages entering top 20 |
| **4 · Authority** | Mo 3–6 | 5 guides, citations, syndic/insurer outreach | AI citations begin, central rankings move |
| **5 · Compound** | Mo 6–12 | Expand zones, refresh prices, scale what converts | Organic share of leads climbing vs paid |

LSA verification (background check, insurance, licence) takes 1–2 weeks on its own. Start it in Phase 0, not Phase 2.

---

## 11. Google Ads structure (context, separate workstream)

Not part of the codebase, but the site must support it (tracking, landing pages matched to ad groups).

| Campaign | Type | Priority |
|---|---|---|
| Local Services Ads | Pay-per-lead | 1st — Google-verified badge, ~€20–60/lead |
| Brand | Search | 2nd — cheap, defensive |
| Emergency | Call-only | 3rd — mobile, day-parted |
| Service | Search | 4th — one ad group per service page |
| Local | Search | 5th — outer arrondissements first |

Each ad group points to its matched landing page, never all to home. Negative keywords from day one: `gratuit, formation, emploi, tuto, pas cher, comment ouvrir une porte soi-même`.

---

## 12. Competitor reference

Study for structure and messaging, not visual style (the vertical is aesthetically poor).

| Competitor | Note |
|---|---|
| serrurerie-tan.fr | The one to beat, ~955 reviews, 30+ yrs, physical shop |
| serruredumonde.com | Publishes a real 2026 price grid, closest to the transparency model |
| lacledu16.fr | Leads with brand-name parts (Picard, Fichet, Vachette) as trust |
| serrurier-paris-express.com | The name collision, study SEO, ignore business model |
| top-serrurier-paris.fr | 128 guides, the content depth to aim at, a link target |

---

## 13. Client info status

| Field | Status |
|---|---|
| Contact | Rani Orwan |
| Email | admin@parisunlockdoor.fr |
| Phone | +33 7 83 14 89 94 |
| Public site phone | +33 6 49 65 85 10 |
| Owned domain | parisunlockdoor.fr |
| Business name | 🔴 B1 unconfirmed |
| SIRET | pending |
| Arrondissements served | pending (assumed Paris + petite couronne) |
| Real reviews | pending |

---

## 14. Definition of done (v1 launch)

- [ ] All core pages live with unique title + meta
- [ ] Full content present in raw HTML (JS-disabled test passes) on every page
- [ ] Valid `LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList` schema (no fake `AggregateRating`)
- [ ] robots.txt allows AI crawlers, sitemap submitted and accepted
- [ ] GTM + GA4 + Ads conversion tracking firing, call tracking live
- [ ] Mobile Core Web Vitals green
- [ ] Sticky tap-to-call on mobile, split urgent/planned CTAs
- [ ] No `.lovable.app` references anywhere
- [ ] Brand tokens in config, final palette applied
- [ ] 🔴 B1, B2, B3 all resolved
- [ ] SIRET published, legal pages complete
- [ ] Custom OG images on key pages

---

*PRIONATION.io | Priority Foundation · Control over dependency. Leverage over labor. Systems over manual execution.*
