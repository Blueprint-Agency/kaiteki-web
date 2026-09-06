# 03a — Competitor Gap Analysis (re-run, 2026-09-06)

> **Purpose.** Re-runs the site-level teardown in `docs/03` against the **live Malaysian SERP**, because 03's named benchmark set was never validated against who actually ranks. Three of 03's load-bearing claims do not survive. This doc records the measurements and the decisions that follow; `docs/03`'s copy/beat/avoid framing otherwise stands.
>
> **Method.** Ubersuggest SERP + keyword metrics (location: Malaysia, locId 2458), Google Search Console (`sc-domain:kaiteki.my`, 28 days to 2026-09-06), and structural reads of four ranking pages fetched via Jina Reader.
> **Pull dates:** SERP `skin clinic kuala lumpur` 2026-09-06 (fresh); `aesthetic clinic malaysia` 2026-07-20; `aesthetic clinic johor bahru` 2026-07-26. Schema/robots checks live on 2026-09-06.

---

## 1. The benchmark set in `docs/03` is not the ranking set

`docs/03` scoped itself to Clinic Cleo (primary) plus Premier, Nexus and Beverly Wilshire. Measured against the live SERP:

| Doc's benchmark | `aesthetic clinic malaysia` | `skin clinic kuala lumpur` | Verdict |
|---|---|---|---|
| Clinic Cleo | #5 organic | #4 organic, local pack #1 | **Holds.** Still the right primary benchmark. |
| Premier Clinic | absent from top 20 | local pack #2 only, no organic | Reputation/GBP player, not an organic rival |
| Nexus Clinic | absent | absent | **Not in the fight** for head terms |
| Beverly Wilshire | absent | absent | **Not in the fight** for head terms |

Premier and Nexus *do* appear on these SERPs — but **inside DoctorOnCall's listicle**, not on their own pages. That is most likely how they entered 03's scope: they are visible in third-party roundups, which is a different thing from holding the SERP.

**Who actually ranks and was never analysed:** Dr Chong Clinic, Clinic RX, A Klinik, Dr Abby, Ko Skin Specialist, Southern Pixel (JB), plus the aggregator tier (DoctorOnCall, erufucare, WhatClinic).

---

## 2. SERP composition

Positions 1–3 on **both** head queries are the **local pack**. Organic #4 is the first actual webpage. Whatever the rebuild does on-page, the top third of the screen is won or lost in Google Business Profile, not in this repo.

Below the pack the page splits three ways: **individual clinics** (the majority), **hospital dermatology departments** (Pantai #7, Sunway Velocity #12 on `skin clinic kuala lumpur`), and **"Top N" aggregator listicles** (DoctorOnCall #8/#13, WhatClinic #10/#16, erufucare #19/#20). An Instagram post ranks #6 for `aesthetic clinic malaysia`.

The aggregators rank because the searcher is choosing *between* clinics and no clinic page helps them choose. That is a content gap, but it is one Kaiteki cannot fill the obvious way — see §5, MAB.

**Authority is not the gate.** Clinic RX (DA 14) outranks Cleo (DA 45) on `aesthetic clinic malaysia`. Southern Pixel (DA **5**) holds #4 for `aesthetic clinic johor bahru` with 245 clicks. This is a low-authority, winnable SERP.

---

## 3. Deep-dive (8a)

Word counts are Jina-rendered homepage body text, for context only — not a target.

| Source | Words | Structure | Strengths | Weaknesses |
|---|---|---|---|---|
| **Dr Chong Clinic** (#5 skin-clinic-KL, local pack #3, DA 24) | ~1,690 | Hero / Why people choose us (Quality, Team, Price, Technology) / Schedule consultation / **24 branch blocks** | **24 branches with real `/location/{slug}` pages**, incl. `/location/pelangi/`, `/location/taman-molek/` (JB) and `/location/kota-kinabalu/`. **Bilingual: `/ms/lokasi/{slug}`.** Per-branch WhatsApp + Waze + Maps. Current KKLIU (2399/EXP 31.12.2027). 15k FB shares | Two parallel treatment trees (`/our-treatments/...` nested 4 deep **and** flat `/service/...`) = cannibalisation. No medical schema (Place/Person/Article only). robots.txt **blocks** GPTBot, ClaudeBot, CCBot, Google-Extended, Applebot-Extended (Cloudflare default). Despite 2 JB branches, ranks nowhere organic for `aesthetic clinic johor bahru` |
| **Clinic RX** (#4 aesthetic-clinic-MY, #8 JB, DA 14) | ~275 | Popular Services / NEW TREATMENT / Our Doctors ×2 / Contact Us | Ranks #4 nationally on ~275 words. Doctors surfaced on the homepage. Proof that this SERP is not won by depth | Almost no content, no treatment depth, no location pages. 4 schema types total, none medical. No AI-crawler directives |
| **Clinic Cleo** (#4–5 both, DA 45) | ~2,630 | Hero / About / then the **same 5–6 treatments repeated 3×** (HIFU, PICO, acne, filler, wrinkles, peel) | Highest DA in the set. Holds local pack #1 for skin-clinic-KL | Word count is carousel duplication, not depth. **Zero medical schema — Yoast defaults only** (03's finding re-confirmed). MAB-breaching superlatives in the H2s ("No #1", "Fastest and most advanced", "instant results"). CTA routes to **linktr.ee**; no WhatsApp |
| **DoctorOnCall** (aggregator, #8 & #13) | ~1,300 | Choosing the Best Aesthetic Clinic / 6 ranked clinics | Owns the "which clinic" intent no clinic page serves. Ranks on two head terms | Not a competitor to out-page — a channel. **Kaiteki is not in its top 6** |

---

## 4. Gap analysis (8b)

Every row below changes something we build. `⚠️` = partial.

| Element | Dr Chong | Clinic RX | Cleo | DoctorOnCall | **Us (Kaiteki)** |
|---|---|---|---|---|---|
| Per-branch location pages | ✅ 24 | ❌ | ❌ | n/a | ✅ 9 planned |
| Branch footprint | ✅ 24 | ❌ | ⚠️ 4 | n/a | **❌ 9 — we are out-covered 2.7:1** |
| Malay (`/ms/`) location pages | ✅ | ❌ | ❌ | ❌ | **❌ not planned; `/zh` is next, BM is a later reserve** |
| Local pack on head terms | ✅ #3 | ❌ | ✅ #1 | n/a | **❌ absent — and the pack owns positions 1–3** |
| Medical schema (`MedicalClinic`/`Physician`/`MedicalWebPage` + `reviewedBy`/`lastReviewed`) | ❌ | ❌ | ❌ | ❌ | ✅ **ownable — nobody has it** |
| Named MMC-credentialed reviewer per page | ❌ | ❌ | ❌ | ❌ | ✅ **ownable — nobody has it** |
| Device/ingredient-term coverage (exosome, Onda, Oligio X, Plenhyage) | ❌ | ❌ | ❌ | ❌ | ✅ **already ranking 3–7; nobody contests it** |
| AI **retrieval** crawlers allowed (OAI-SearchBot, Claude-SearchBot, PerplexityBot) | ⚠️ training blocked, retrieval open by default | ⚠️ no directives | ⚠️ no directives | — | ✅ deliberate allowlist |
| Superlative title tags ("Best/Top/#1/Award Winning") | ✅ | ✅ | ✅ | ✅ | **❌ MAB-prohibited — a real CTR handicap we accept** |
| Before/after galleries + testimonials | ✅ | ⚠️ | ✅ | n/a | **❌ MAB-prohibited** |
| "Which clinic should I choose" comparison content | ❌ | ❌ | ❌ | ✅ | **❌ cannot compare clinics under MAB** |
| Single WhatsApp CTA | ✅ per branch | ⚠️ contact page | ❌ linktr.ee | n/a | ✅ |
| Clean treatment IA (one tree) | ❌ two trees | ⚠️ shallow | ⚠️ | n/a | ✅ |

---

## 5. Measured demand

| Keyword | Volume/mo (MY) | SD | Series | Note |
|---|---|---|---|---|
| `aesthetic clinic johor bahru` | **480** | 15 | 390–590, stable | **Bigger and easier than the national head term** |
| `aesthetic clinic malaysia` | 390 | 27 | 170–720, volatile | |
| `aesthetic clinic kota kinabalu` | **140** | 16 | 90–210 | Real demand, but small. Not at a reporting floor — the series moves |

**Our current position** (GSC, 28 days to 2026-09-06): non-brand traffic is almost entirely **device/ingredient** terms — `exosome therapy` pos 3.1 (669 impr), `onda` pos 4.6 (572), `exosome` pos 6.5 (1,187), `oligio x` pos 6.9, `plenhyage vs rejuran` pos 5.4. CTR on these is **0.9–3%** despite top-10 positions. `aesthetic clinic johor bahru` sits at pos **7.7** — and the ranking URL is the **legacy `kaiteki.my/johor.php`**. `aesthetic clinic kota kinabalu` pos 4.0 (72 impr).

---

## 6. What changes

1. **Correct `docs/03`'s benchmark set.** Demote Nexus and Beverly Wilshire; they hold nothing. Add **Dr Chong Clinic as the primary structural rival** and Clinic RX as the proof that this SERP is not depth-gated. Keep Cleo.
2. **Retire the "nobody has location pages" moat.** Dr Chong has 24, bilingual, covering both JB and Kota Kinabalu. The moat is *depth and schema per branch*, not existence. Still worth building — Dr Chong's JB pages do not rank organically — but it is a contested build, not an open goal.
3. **JB is the priority local market, not a footnote.** 480/mo, SD 15, more volume and less difficulty than the national term, and we are already at 7.7 on a legacy `.php` URL. The `johor.php` → `/locations/...` 301 is revenue-relevant, not hygiene.
4. **Kota Kinabalu: report the number.** 140/mo, and we already rank 4.0. Build the page for completeness; do not plan a campaign around it. Recorded so it is not re-proposed as an opportunity.
5. **Make device/ingredient terms a named pillar.** This is our one uncontested win and it came from our own GSC data, not from a competitor. Nobody in the ranking set targets exosome, Onda, Oligio X or Plenhyage. The positions already exist; the **CTR is the problem** (0.9–3%). Audit titles/meta on those pages before writing anything new.
6. **Medical schema + named reviewer survive re-testing as the wedge.** Zero of four have `MedicalClinic`, `Physician`, or `MedicalWebPage` with `reviewedBy`/`lastReviewed`. Still the cheapest, biggest structural win.
7. **Allow the AI *retrieval* bots deliberately.** Dr Chong blocks the training bucket via Cloudflare's default and leaves retrieval open by accident; Cleo and Clinic RX set no directives at all. A deliberate allowlist is a small but free edge.

### Compensating moves for each ❌ in the Us column

| We cannot match | Compensating move |
|---|---|
| 24 branches vs our 9 | Compete on **per-branch depth** (doctor roster, hours, real photos, `MedicalClinic` schema), not branch count. Dr Chong's 24 pages are thin address blocks |
| No Malay `/ms/` pages | Surface as a decision: `/zh` is locked next. Dr Chong monetising `/ms/lokasi/` is new evidence BM may outrank `/zh` in priority — **flag to client, do not silently re-order a locked decision** |
| Absent from local pack | **Out of repo scope.** Needs a 9-branch GBP program (categories, photos, reviews, per-branch phones). Raise as a client action — no amount of Next.js fixes positions 1–3 |
| No superlatives in titles | Win CTR with **specificity instead of hype**: branch name, doctor name, price range, "MOH-registered". Cleo's "No #1" cannot say what we can say |
| No before/after or testimonials | Lean on **named-clinician E-E-A-T and device transparency** — the only trust signals the law leaves open, and the ones no competitor has wired |
| No clinic-comparison content | Compare **treatments and devices**, never clinics (Onda vs CoolSculpting, Plenhyage vs Rejuran already do this and already rank) |

---

*Sources: Ubersuggest SERP + keyword metrics (Malaysia, locId 2458); Google Search Console `sc-domain:kaiteki.my`; live fetches of cliniccleo.com, drchongclinic.com, clinicrx.com.my, doctoroncall.com.my. Pull dates in the header. Competitor names here are structural input only — per house rule they never appear in published copy.*
