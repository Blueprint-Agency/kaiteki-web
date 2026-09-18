# 03d — Treatment / Concern / Technology page gap analysis (2026-09-18)

> **Purpose.** Benchmarks Kaiteki's three medical page types against the three clinics that actually hold the
> Malaysian SERPs we want, then turns the gaps into an ordered build list with the SEO, AEO and GEO opportunities
> attached. Follows `docs/03a` (site-level gap analysis, 2026-09-06) and `docs/03b` (AEO/CTR diagnosis).
> Method per `competitor-gap-analysis` skill: SERP first, structure second, decisions last.
> **Execution:** the decisions in §5 are scheduled in `docs/15-four-week-plan-2026-09-21.md`.
>
> **Sources and pull dates.** SERPs: Firecrawl search, location Kuala Lumpur, 2026-09-18. Rival pages: Jina Reader
> / raw HTML, 2026-09-18, saved to the session scratchpad. Kaiteki performance: GSC `sc-domain:kaiteki.my`,
> 2026-06-20 → 2026-09-17 (90 days, all countries — see 03b §1.5 caveat). Volumes and authority: Ubersuggest,
> Malaysia (locId 2458), 2026-09-18. Repo audit: `components/*View.tsx`, `content/data/*.ts`, `lib/schema.ts`,
> `app/robots.ts`, `config/concern-signoff.json`, same day.

---

## 0. The verdict in five lines

1. **The rival set is Cleo, Dr Chong and Clique.** Cleo holds #1 on all three treatment SERPs we tested. Dr Chong is the structural twin (multi-branch, bilingual). Clique is the keyword-overlap rival and has grown organic traffic ~14× in twelve months, almost entirely through blog content.
2. **The SERPs are price-led and blog-tolerant.** 4 of 10 pico results and 3 of 10 HIFU results lead with an RM figure. Clinic *blog posts* rank beside clinic *service pages* on every query. No result on any of the three SERPs shows a named doctor reviewer.
3. **Our moat is built but switched off.** Every rival lacks per-page medical schema and a named MMC reviewer. We have both — yet all 14 concern pages ship with no reviewer (the sign-off ledger is empty), and 36 technology pages emit placeholder review dates. **Correction 2026-09-18 (day 1):** the 19 treatment pages are placeholders too — `content/data/treatments.ts` line 3 says `reviewedBy` is "a plausible provisional assignment, NOT a confirmed claim" — so the byline and schema on every treatment page currently name a doctor who may not have read it. The sign-off ask covers all 69 pages, and until it lands the treatment bylines are a compliance exposure, not a moat. See `docs/15a` Sheet A.
4. **18 of 19 treatment pages are the thin template.** Only `pico-laser` carries the suitability / risks / sessions / cost / comparison blocks specced in `docs/14`. The SERP rewards exactly those blocks.
5. **Technology pages are our best-clicking surface and our weakest template.** They earn 3–5% CTR on brand-name queries (Onda alone: 189 clicks) yet have no lead answer, no anchors, no fact rail and no "which branch has this machine".

---

## 1. Who actually ranks (SERP composition)

| Query (KL, 2026-09-18) | 1 | 2 | 3 | 4 | 5 | 6–10 | Kaiteki |
|---|---|---|---|---|---|---|---|
| `pico laser treatment malaysia` | **Cleo** (service) | Her Clinic (blog) | Glojas (FB video) | BTMC hospital (RM299 promo) | erufucare (aggregator) | Dr Jane blog (RM1,800–2,500) · **Dr Chong** blog · **Clique** service · KPJ (FB) · RJ blog (RM1,200) | GSC pos 12.5 · 14,327 impr · 30 clicks · **0.21% CTR** |
| `acne scar treatment kuala lumpur` | **Cleo** (concern) | Millennium | Dr K (RM300–1,500) | YouTube | NextMed (price breakdown) | **Dr Chong** blog · Yelp · My Bliss · Instagram · WhatClinic | **absent** — no acne-scar page exists; `/concerns/acne` pos 20.5 |
| `hifu treatment malaysia` | **Cleo** (service) | Euphie (blog) | **Dr Chong** (service) | Da Vinci | Beverly Wilshire (RM500–3,800) | Aglow blog · Melaka Fertility · Instagram · Dr Jane (RM500–1,500) · A Klinik | `/treatments/hifu` pos 16.1 · 3,925 impr · 16 clicks |
| `aesthetic clinic kl` | Dr Abby | Millennium | La Jung | Cleo | Reddit | O2 · MyClinic · Instagram · erufucare · MAC | home pos 7.7 for `aesthetic clinic` |

**Composition read.** Three player types share each page: clinic service pages, clinic blog posts, and aggregators/social. The split that matters is **price**: the results that state a Ringgit figure in the title or snippet are a third of every treatment SERP, and the searcher plainly wants one. The second signal is that **blog posts do ranking work for clinics** (Dr Chong, Her Clinic, Dr Jane, RJ, Euphie all rank blogs, not service pages, for these commercial terms). A near-identical "what is / how it works / benefits / FAQ" scaffold appears on every clinic page, so matching it ranks sixth; the win has to come from what none of them do.

**Authority (Ubersuggest, MY, 2026-09-18):**

| Domain | DA | Organic kw | Est. monthly organic | 12-month trend |
|---|---|---|---|---|
| cliniccleo.com | 45 | 2,625 | 22,073 | flat/volatile (79k → 22k) |
| drchongclinic.com | 25 | 6,818 | 29,425 | steady 26–54k |
| cliqueclinic.com | 24 | 13,212 | 49,536 | **3.5k → 49.5k** (blog-driven) |
| **kaiteki.my** | **19** | **873** | **2,759** | **4.8k → 2.8k (down 42%)** |

Authority is not the gate (03a's finding holds: DA-14 pages outrank Cleo). Content depth and page-type coverage are.

---

## 2. Deep-dive (8a)

| Source | Words | Structure | Strengths | Weaknesses |
|---|---|---|---|---|
| **Cleo Clinic** — #1 pico, #1 acne scar, #1 HIFU | Pico ~2,900 · HIFU ~1,700 · Acne scar ~1,250 | H1 → What is → How it works → Benefits (H3s) → What it treats → **Price in Malaysia (RM range + 5-row factors table)** → Safe for Asian skin → vs Q-switch/Ultherapy/threads → Steps → Downtime & side effects → Combinations → FAQ (5) → Named doctors (LCP) → Google-reviews band | Only rival with an RM price section on every treatment page; contraindication list on HIFU; external citations (DermNet, Cleveland Clinic); 6–8 contextual links into blog; named device and named rival devices; actively re-editing (HIFU modified the day we fetched) | **Zero medical schema** (Yoast defaults only); no `wa.me` deep-link (converts via Linktree/wa.link off-site); no location pages, branches only in footer; no MMC numbers, doctor cards don't link anywhere; acne-scar page is a 2024 stub with no FAQ, no price, no scar-type→treatment map and no link to their own Pico page; duplicate H2s and `noimageindex` from layered rewrites; heavy superlatives ("safest", "most powerful machine", "best clinic") |
| **Dr Chong Clinic** — #3 HIFU (service), #6/#7 via blog | HIFU ~1,100 · Pico ~1,500 · blogs 900–1,200 | Fixed 12-block scaffold: What is → Uses → Benefits (flip cards) → Process (images only) → How it works → **"How much does it cost" H2 (no figure)** → Side effects → Sessions/longevity → FAQ (5, **FAQPage** marked up) → About → Why us → branch-picker form. Blogs: comparison list, H3 per option, visible "updated" date, link into service page | Sessions/interval/duration stated precisely (3–6, 3–4 wk, 20–30 min); `/ms/` Malay twin of every page; 24 real location pages; blog↔service split covers informational + commercial intent; KKLIU number in footer | No device brand named anywhere; **no visible RM price yet `Product+Offer` schema hard-codes RM1,400 / RM199** (schema–page mismatch, a rich-result risk); author is an admin gravatar, no doctor, no MMC; no contraindications; no comparisons beyond one FAQ line; service pages link to nothing (no blog, no locations); copy says "13 branches" while footer lists 24; "dermatologist"/"specialist" wording |
| **Clique Clinic** — #8 pico; 139 shared keywords | PicoSure ~1,500 · Ultherapy ~2,200 · Scar ~1,100 · Sylfirm X ~1,800 | Device-branded H1 + "Malaysia" → What is → What it treats → Why Clique (awards, celebrity video) → **very long visible FAQ (11–30 Qs)** → Contact. Site organised **by device (~70 product pages)** under a Body/Face/Skin/Hair › concern mega-menu; concern pages are thin routers | FAQ sweeps long-tail (pain, downtime, makeup, "worth it", "vs X"); Sylfirm X page is the bar: RM2,500–3,000 range, 5–10 sessions, 5 short comparisons, page-specific `MedicalWebPage`+`FAQPage`, 12-link related block; `VideoObject` on every page; robots.txt explicitly **allows retrieval bots, blocks training bots**; sticky WhatsApp+Appointment widget | One global generic 11-Q `FAQPage` copy-pasted on every page (rich-result eligibility weaker than it looks); no named doctors, no MMC; no price on 3 of 4 pages; no contraindications anywhere; FAQ questions marked up as H2s; Ultherapy page runs "highest satisfaction rate", "no complications to date"; no location or doctor page types; GTranslate machine copies for 14 languages; much of the 49k traffic is off-topic health content (magnesium, water fasting, power naps) |
| **Kaiteki (us)** — for reference | Treatment 700–1,600 · Concern 1,200–2,500 · Technology 500–1,000 | Treatment: hero → fact rail → lead answer → ToC → sections → related concerns → FAQ → related → CTA → AuthorCard+ledger. Concern: banner → (byline) → fact rail → lead answer → sections → drivers/variants/red flags → treatments → compare → results → risks → first visit → cost factors → FAQ → related. Technology: hero → byline → SectionCards → concern chips → treatment chips → brand logo → FAQ → CTA → ledger | Only site with `MedicalProcedure` / `MedicalCondition` / `Physician`-typed reviewer / per-branch `MedicalClinic`; lead-answer capsule on 33 pages; pre-filled treatment-specific `wa.me` CTA; 9 real location pages; native `<details>` FAQ with answers in the DOM; truthful sitemap `lastmod` | **Concern sign-off ledger empty → 0/14 concerns show a reviewer**; technology `reviewedBy`/`lastReviewed` are placeholders; only 1/19 treatments has the v2 block set; no price or cost-factor section on 18/19 treatments; no blog links from any of the three templates; technology template has no lead answer, anchors, fact rail or cost block; no "available at these branches" anywhere; Cloudflare's managed robots.txt overrides our AI allowlist; organic traffic down 42% YoY |

---

## 3. Gap table (8b)

Every row changes what gets built. ✅ present · ⚠️ partial · ❌ absent.

| Element | Cleo | Dr Chong | Clique | **Us** | Why the row exists |
|---|---|---|---|---|---|
| Visible RM price or price-range on the treatment page | ✅ market range + factors table | ⚠️ "cost" H2, no figure (schema hides RM1,400) | ⚠️ Sylfirm only | **❌** (rule R-03: no "from RM"; no price field on any type) | The single most-rewarded element on every SERP tested. See D4. |
| "How much does X cost" section (captures the query even without a figure) | ✅ | ✅ | ⚠️ FAQ | ⚠️ `costFactors` 1/19 treatments, 10/14 concerns | Cheap to add; Dr Chong ranks with it empty |
| Named reviewer + MMC + linked doctor page | ⚠️ named, LCP, no MMC, no link | ❌ admin author | ❌ | ⚠️ treatments (placeholder assignment, shown as if signed) · **❌ concerns (ledger empty)** · ⚠️ technology (placeholder dates) | **The ownable gap.** Nobody else does it; we do it on 19 of 69 pages |
| `MedicalProcedure` / `MedicalCondition` / `Physician` schema | ❌ | ❌ (`Product+Offer+FAQPage`) | ❌ (Sylfirm only) | ✅ | Ownable and already shipped; keep it clean |
| Who is **not** suitable / contraindications | ⚠️ HIFU only | ❌ | ❌ | ⚠️ 1/19 treatments (`avoidIf`) · 10/14 concerns (`seeDoctor`/`risks`) | Ownable; also the most compliance-safe way to sound expert |
| Sessions · interval · session duration as facts | ⚠️ | ✅ precise | ⚠️ Sylfirm only | ⚠️ fact rail 19/19 but `typicalSessions` authored 1/19 | Extractable facts AI answers quote; ours are derived, not authored |
| Device named by brand | ✅ | ❌ | ✅ | ✅ (36 technology pages; `device` on 7/19 treatments) | Parity; link the two directions harder |
| **Which branch has which device** | ❌ | ❌ | ❌ | ❌ | **Second ownable gap.** 9 branches × 36 machines; nobody answers "is Onda at Cheras?" |
| In-page comparison vs the obvious alternative | ✅ | ⚠️ one FAQ line | ✅ Sylfirm (5 short) | ⚠️ `comparisons` 1/19 treatments · `compare` 7/14 concerns | 03b: comparison is the one format still earning clicks |
| Concern → treatment mapping (which treatment for which scar type) | ❌ | ✅ (blog) | ❌ | ⚠️ `treatmentWhy` 10/14 concerns; `routes` 1/19 treatments | Cleo is #1 for acne scars *without* it; we can beat the page |
| Visible FAQ depth | 5 | 5 | 11–30 | ~4 treatments · ~9 concerns · ~4 technology | Clique's long-tail sweep works; ours is shallowest on the surface with most pages |
| Treatment/concern page links to supporting blog posts | ✅ 6–8 contextual | ⚠️ blog→service only | ❌ | **❌ zero from all three templates** | Our comparison posts (`discovery-pico-vs-picosure`, `ultherapy-vs-hifu`) already rank pos 7 and get no equity from the money pages |
| Per-branch location pages | ❌ | ✅ 24 | ❌ | ✅ 9 | Parity with the one rival that has them |
| Pre-filled, treatment-specific WhatsApp deep-link | ❌ Linktree | ⚠️ wa.link, no text | ⚠️ empty text | ✅ | Conversion edge to keep |
| Lead answer / answer-first capsule | ❌ | ❌ | ❌ | ✅ treatments+concerns · **❌ technology** | AEO extractability; extend to the 36 pages that click best |
| AI retrieval bots allowed | ✅ open | ⚠️ open today; Cloudflare block seen 2026-09-06 | ✅ allows retrieval, blocks training | ⚠️ allowlist written, **Cloudflare overrides it live** | 03b T2; Clique's policy is the one docs/02 §9.9 specifies |
| Bahasa Malaysia version | ⚠️ BM blog posts (rank: `jeragat` 5,400/mo) | ✅ `/ms/` twin of every page | ⚠️ GTranslate | **❌** (locked: EN, then `/zh`) | 03b T7 escalation stands; two of three rivals capture BM demand |
| Before/after imagery | ✅ | ❌ | ❌ | ⚠️ 9/14 concerns under ADR-0001 | Not a gap to chase; keep ADR conditions |
| Testimonials / celebrity video / Google-reviews band | ✅ | ❌ | ✅ celebrity | **❌ cannot** (MAB) | Named handicap; compensate with specificity |
| Superlative and outcome copy ("best", "proven", "scar-free") | ✅ freely | ✅ freely | ✅ freely | **❌ cannot** | Named handicap; every rival is exposed on it |
| Branch count | 4 | 24 | 3 | 9 | Out-covered by Dr Chong; compete on per-branch depth (03a) |

**Rows we cannot match, said plainly:** we will not publish superlatives, testimonials or celebrity video; we will not (under the current rule) publish "from RM" prices; we will not ship BM this quarter; and we have 9 branches to Dr Chong's 24. The compensating moves are in §5.

---

## 4. What our own pages are doing (GSC, 90 days)

**Treatments (19 pages, 12 with impressions).** ~41,900 impressions, 279 clicks.

| Page | Impr | Clicks | CTR | Pos |
|---|---|---|---|---|
| pico-laser | 14,327 | 30 | 0.21% | 12.5 |
| exosome-therapy | 6,603 | 78 | 1.18% | 8.8 |
| skin-booster | 4,616 | 34 | 0.74% | 10.4 |
| microneedling | 4,518 | 67 | 1.48% | 10.2 |
| hifu | 3,925 | 16 | 0.41% | 16.1 |
| ultherapy | 2,629 | 13 | 0.49% | 29.8 |
| fat-freezing | 1,833 | 10 | 0.55% | 32.7 |
| fotona-4d | 1,588 | 12 | 0.76% | 11.9 |
| radiofrequency | 1,156 | 13 | 1.12% | 16.9 |
| bio-stimulator | 665 | 6 | 0.90% | 23.9 |
| **Zero impressions:** botulinum-toxin · dermal-fillers · double-eyelid · vascular-pigment-laser · resurfacing-laser · microwave-contouring · muscle-stimulation · **laser-hair-removal** (2,900/mo transactional term) | | | | |

**Concerns (14 pages, 12 with impressions).** ~46,300 impressions, 119 clicks.

| Page | Impr | Clicks | CTR | Pos |
|---|---|---|---|---|
| pigmentation | 14,098 | 10 | **0.07%** | 18.5 |
| dark-eye-circles | 8,809 | 46 | 0.52% | 8.6 |
| body-slimming | 4,814 | 3 | 0.06% | 14.8 |
| face-lifting | 3,453 | 10 | 0.29% | 15.3 |
| acne | 3,388 | 11 | 0.32% | 20.5 |
| enlarged-pores | 3,155 | 9 | 0.29% | 11.2 |
| tattoo-removal | 2,760 | 5 | 0.18% | 10.7 |
| aging | 2,383 | 1 | 0.04% | 32.7 |
| **Zero impressions:** vascular-lesions · excessive-sweating | | | | |

**Technology (36 pages, 29 with impressions).** ~25,000 impressions, **380 clicks** — the most clicks of the three types on the fewest impressions.

| Page | Impr | Clicks | CTR | Pos |
|---|---|---|---|---|
| onda-coolwaves | 5,551 | **189** | 3.40% | 7.8 |
| coolsculpting | 8,622 | 28 | 0.32% | 15.1 |
| dermav | 567 | 27 | 4.76% | 12.1 |
| m22-ipl | 553 | 23 | 4.16% | 6.9 |
| potenza | 1,194 | 17 | 1.42% | 11.4 |
| hydrafacial | 922 | 13 | 1.41% | 16.3 |
| plinest | 549 | 12 | 2.19% | 11.4 |
| **Zero impressions:** fotona-sp-dynamis · ultracel-q · lifthera · xerf · wonderface · cooltech · juvederm | | | | |

**Two readings.**
- **Brand-name (technology) queries are navigational and AIO-light**, so they click at 3–5%. Concern and treatment queries sit under AI Overviews and click at 0.1–1% (03b's diagnosis). The technology surface is where a template upgrade pays back fastest.
- **Seventeen pages across the three types have zero impressions in 90 days.** That matches 03b T0 (never crawled). Any content work on those slugs is wasted until T0 is cleared; the laser-hair-removal page (2,900/mo, transactional, SD 23) is the costliest example.

**The blog subdomain still holds the biggest pools**: `blog.kaiteki.my/rejuran-healer` 50,425 impressions, `nose-thread-lift` 24,933, `accutane-malaysia` 10,402 / 160 clicks. In-repo `/blog/` comparison posts earn pos 6–8 on their first months (`alma-titanium-lifting` 29 clicks, `discovery-pico-vs-picosure` 26) and are linked from nothing.

---

## 5. Decisions

Ordered by leverage per unit of work. Each ❌ in the Us column has a compensating move here.

### D1 · Turn the reviewer moat on — P0, no build
Sign 14 concern pages in `config/concern-signoff.json` and replace the placeholder `reviewedBy`/`lastReviewed` on 36 technology entries with real sign-offs. Until then the one gap no rival can close is live on 19 of 69 pages, and the sitemap carries no `lastmod` for concerns. **Ask the client:** which doctor signs which concern; a 30-minute pass.

### D2 · Roll the v2 block set to the five treatment pages that already have impressions — P0, content
`hifu`, `skin-booster`, `microneedling`, `exosome-therapy`, `ultherapy` (then `fat-freezing`, `fotona-4d`). Authored `typicalSessions`, `suitableFor`/`notSuitableFor`/`avoidIf`, `sessionSteps`, `afterSession`, `risks`, `costFactors`, one `comparisons` table each. The template already renders all of it; `pico-laser` is the worked example. This is the answer to rows 2, 5, 6, 9 of §3 at once.

### D3 · Upgrade the technology template — P0, template (one PR, 36 pages)
Add `leadAnswer`, `FactRail`, heading anchors + ToC, a `costFactors` block, the `AuthorCard`, and **an "Available at" branch list** (row 8: nobody has it). Requires a branch × device matrix from the client. Payback is fastest here because these pages already click.

### D4 · Price — P1, client decision, then content
The SERP is price-led and rule R-03 forbids "from RM". Two moves that stay inside the rule: (a) a "What affects the cost of X in Malaysia" section with a factors table on every treatment page (Cleo's pattern, no Kaiteki price stated); (b) an honest market-range line sourced from public listings, framed as *indicative, confirmed at consultation*. **Escalate to the client** whether to publish Kaiteki's own price list: the query `kaiteki clinic price list` already lands at pos 1.3 with 148 impressions, so people are asking. Do **not** copy Dr Chong's hidden `Offer` price; a schema price that is not on the page is a manual-action risk.

### D5 · Link the money pages to the blog — P1, template + data
A `relatedPosts` slot on all three templates, populated from `content/data/blog.ts` tags. Cleo's rewritten pages carry 6–8 contextual blog links; ours carry none. The comparison posts are the format still earning clicks (03b T10) and get zero internal equity today.

### D6 · Fill three page-level holes — P1, new pages (after T0 is cleared)
- **Acne scars concern page** (`/concerns/acne-scars`): Cleo is #1 with a 1,250-word 2024 stub that has no FAQ, no price, no scar-type→treatment map. Beatable with the concern v2 template, `compare` block, and links to `resurfacing-laser`, `microneedling`, `pico-laser`, `dermal-fillers`. Ubersuggest returns no volume for `acne scar treatment` (MY) — treat as unmeasured, not zero; the SERP is plainly contested and `ice pick scars` alone is 880/mo (Clique #2 via blog).
- **Melasma concern page**: 720/mo, SD 42, informational. We have only a blog post (855 impr). Melasma is the caveat every rival buries in a paragraph; a page that leads with "when Pico is *not* the answer" is both compliant and distinctive.
- **Laser hair removal**: 2,900/mo, transactional, SD 23, and our page has **0 impressions**. Confirm it is in the T0 never-crawled set, request indexing, then apply D2.

### D7 · Fix the AI-bot block at the edge — P0, ops (03b T2, still open)
Clique's robots.txt is the exact policy `docs/02` §9.9 prescribes (allow OAI-SearchBot / ChatGPT-User / PerplexityBot / Claude-SearchBot; disallow GPTBot / CCBot / Google-Extended). Ours says the same and Cloudflare overrides it. One dashboard toggle.

### D8 · Compensating moves for the four ❌ rows we cannot fix
- **No superlatives / testimonials** → be the page that states contraindications, interval, session length, device name and branch availability as plain facts. Every rival's copy is exposed on MAB grounds; ours reads as the clinic that doesn't need to shout.
- **No BM** → keep 03b T7 open; note that Cleo's BM blog posts rank for 5,400/mo (`jeragat`). If `/zh` stays first, publish BM *blog* posts, not BM page types, as the interim.
- **9 vs 24 branches** → per-branch device availability (D3) and per-branch doctor listing make each of our 9 pages deeper than any of Dr Chong's 24.
- **No own price** → D4(a) and (b).

### What to skip
- `FAQPage` schema (rich result removed 7 May 2026; Dr Chong and Clique still ship it, to no effect).
- Hidden `Product+Offer` prices, celebrity `VideoObject`, GTranslate language copies, Google-reviews widgets with schema.
- Matching Clique's 30-question FAQ walls with off-topic questions; add 4–6 real questions per page instead, phrased as the query.
- Any content work on the 17 zero-impression slugs before T0 is cleared.

### Asks for the client (one message)
1. Doctor sign-off for 14 concerns and 36 technologies (D1).
2. Branch × device matrix: which machine is at which of the 9 clinics (D3).
3. Decision on publishing Kaiteki's own price list vs indicative market ranges (D4).
4. Confirm whether skin-tag/mole removal (2,900/mo, Cleo #6) and subcision (590/mo, Dr Chong #2) are offered; both are uncovered page-level gaps if so.

---

## 6. Measurement notes

- `acne scar treatment` and `acne treatment` returned 0 volume from Ubersuggest (MY); both SERPs are contested, so these are tool floors, not dead terms. Do not re-propose "acne treatment has no demand".
- `hifu price malaysia` = 20/mo, flat at the floor: a real but tiny term. `pico laser price malaysia` = 110/mo (SD 26) is the one price query worth a section heading.
- `rejuran` = 5,400/mo (peaked 9,900 in Jun–Jul 2026); 03b T4/T5 stand.
- GSC figures are global; Malaysian share is lower (03b §1.5). Relative rankings between our pages hold.
- Re-baseline after D1–D3 ship, 28 days minimum, before touching titles.
