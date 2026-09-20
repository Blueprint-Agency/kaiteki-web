# 15a — Day 1 client pack (18–19 Sep 2026)

Everything the client needs to answer the six day-1 asks in `docs/15`, plus the two things we do ourselves.
Send §1 as-is (WhatsApp or email). Attach the two CSVs. Keep the returned sheets in this folder.

**What changed on day 1 while preparing this** (both already recorded in `03d` and `15`):

- **The Cloudflare block is gone.** The live `kaiteki.my/robots.txt` on 18 Sep is the repo's own file: one
  `User-agent: *` group, the six AI retrieval agents allowed, no managed block, no `Content-Signal`. 03b T2 step 1
  is done. Only the training-bucket decision (step 3) remains, folded into ask 5 below.
- **Treatment reviewers are placeholders too.** `content/data/treatments.ts` line 3 says `reviewedBy` is "a
  plausible provisional assignment, NOT a confirmed claim". Every treatment page currently shows "Medically reviewed
  · Dr X · MMC nnnnn · date" and emits it in schema on that basis. The sign-off ask therefore covers all 69 pages.
- **The 6 Sep indexing requests worked.** `/technology`, `/technology/rejuran` and `/technology/profhilo` were
  crawled and indexed within a day of the client's requests. The URLs that were never requested
  (`laser-hair-removal`, `botulinum-toxin`, `dermal-fillers`, checked 18 Sep) are still "Discovered, not indexed".
  The mechanism is proven; the rest of the queue just needs doing.

---

## 0. Client answers — received 2026-09-20

Answered against this document's section numbers.

| § | Ask | Answer | Consequence |
|---|---|---|---|
| 1 | Message to the client | **Sent** | — |
| 2 | Sheet A, medical sign-off | **Done** | ⚠️ **The returned sheet is not in the repo yet.** Plan items 1.1 and 1.2 cannot start until the filled CSV lands in `docs/15a/`. This is the only thing blocking week 1's first two items. |
| 3 | Sheet B, branch × device | **Not needed — the machines rotate between branches** | The "Available at" block is **cancelled** (plan items 2.2 and 2.4). We lose what 03d called the second ownable gap: there is no stable branch→device fact, so publishing one would be wrong within a month. Freed capacity moves to per-page lead answers (2.3, widened from 12 pages to 36). |
| 4 | Price | **Show no price at all** | D4 closes at option (c). No price list, no indicative range, no `Offer` schema, no `/pricing` page. Cost sections list factors only. Rule R-03 stands; no ADR needed. This is a deliberate concession on the most-rewarded element of every SERP we tested — the compensation is specificity (contraindications, session length, interval, device names). |
| 5 | AI crawlers | **OK to allow training bots** | No code change: nothing is disallowed today, so `app/robots.ts` already reflects this. Decision recorded against 03b T2 step 3, which now closes. |
| 6 | Indexing requests | **Requesting manually, no movement from Google** | Re-diagnosed the same day — see §6 below and the 03b T0 update. **Stop requesting.** It is not discovery, not linking and not thin content; it is cluster template sameness, and the plan's depth work is the fix. |
| 7 | Chinese and Bahasa Malaysia | **OK** | Both confirmed for week 4 (item 4.5), closing 03b T7. Still needed before 12 Oct: one Chinese-reading and one Malay-reading doctor to sign the pilot pages. |

**Still open:** the original ask 4 in the message below (does any branch offer skin-tag/mole removal or subcision?)
has no answer yet. It feeds item 3.7 only, so nothing before 11 Oct is blocked.

---

## 1. Message to the client

Written for: Kaiteki management (the person who can reach the doctors, the branch managers, and the price decision).

> Hi team,
>
> We've finished the competitor review of the treatment, concern and device pages against Cleo, Dr Chong and
> Clique, and we're starting a four-week push on Monday to close the gaps. Five things need your input before we
> can start, and one is a quick confirmation. Ideally by **Tuesday 23 Sep** so week 1 stays on track.
>
> **1. Doctor sign-off for every medical page (the important one).**
> Right now the website names a reviewing doctor on each page, but those names were assigned when the pages were
> written, not confirmed by the doctors. On the concern pages the byline is hidden until a doctor signs; on the
> treatment and device pages it is showing. We want every "Medically reviewed by" on the site to be a real read
> by that doctor. No competitor does this, and it is the single biggest trust signal we have with Google and with
> AI search.
>
> Attached is **Sheet A** with all 69 pages and a proposed doctor for each (spread across 20 doctors, 2 to 5 pages
> each). For each row we need: the doctor who actually read the live page, and the date they read it. If the
> proposed doctor is wrong, change the name. If a page needs changes before they will sign it, tell us what and
> we'll fix it first. A doctor can do their 3 or 4 pages in about 20 minutes.
>
> **2. Which device is at which branch.**
> Nobody in the market tells patients which clinic has which machine. We want to be the first. **Sheet B** lists
> the 36 devices and injectables against the 9 branches. Tick where each one is available. If a unit rotates
> between branches, note it in the last column and we'll word it as "by appointment".
>
> **3. Prices.**
> On every search we checked, the pages that rank show a Ringgit figure. We currently show none. Three options,
> pick one:
> - **(a)** Publish Kaiteki's own price list per treatment. Strongest for search and for conversion. Prices must
>   then be kept current on the site.
> - **(b)** Show an indicative market range per treatment ("Pico laser in Malaysia is typically RM x to RM y a
>   session; your quote is confirmed at consultation"), sourced from public listings, not a Kaiteki price.
> - **(c)** No figures. A "what affects the cost" section only, listing the factors.
> Our recommendation is (b) now, moving to (a) if you are comfortable maintaining a list. People are already
> searching "kaiteki clinic price list" and landing on us.
>
> **4. Two services to confirm.**
> Do any branches offer skin-tag or mole removal, and subcision for acne scars? Both have search demand and
> competitor pages, and neither has a page on our site. A yes or no per service is enough.
>
> **5. AI crawlers (confirmation only).**
> Your Cloudflare setting that was blocking AI search engines has been cleared, so ChatGPT, Perplexity and Claude
> search can now read the site. One decision remains: whether to also allow the *training* crawlers (GPTBot,
> ClaudeBot, Common Crawl, Google-Extended). Allowing them has no effect on Google rankings or AI Overviews. Our
> recommendation is to allow them; say if you'd rather not.
>
> **6. Indexing requests (your GSC login).**
> Google still hasn't crawled about 37 of our pages, including botox and dermal fillers. The requests you made on
> 6 Sep worked within a day. We'll send the remaining list in three batches of 12 over the next three days; each
> batch takes about five minutes in Search Console. If you'd rather we do it, add us as an owner on the property.
>
> **7. Chinese and Malay versions.**
> In the last week of the plan we'll build the site's language layer and launch a first set of pages in Chinese
> and in Bahasa Malaysia (about eight pages each: the most-searched treatment, concern and device pages, the home
> page and one clinic page), with the rest following after. Two things from you: confirm you want both languages,
> and name one doctor who reads Chinese and one who reads Malay to sign off the translated medical text, the same
> way as in point 1. Translation will be done by people, not software.
>
> Once 1 and 2 are back we can ship the first changes the same week.
>
> Thanks,

---

## 2. Sheet A — medical sign-off (`sheet-a-medical-signoff.csv`)

69 rows: 14 concerns, 19 treatments, 36 technologies. Columns: page type, slug, page name, live URL, proposed
reviewer (from the data files), confirmed reviewer (editable), date read, initials. Proposed load per doctor:

| Doctor | Pages | Doctor | Pages |
|---|---|---|---|
| Dr Jessie Lim Jia Min | acne · fat-freezing · lifthera · restylane · art-filler | Dr Chloe Wan Poh Yee | radiofrequency · fractional-co2 · xerf · radiesse |
| Dr Chew Yuhhui | pigmentation · pico-laser · skin-booster · ultherapy-system · belotero | Dr Say Wei Xian | microneedling · ultracel-q · juvederm |
| Dr Yeong Bin | enlarged-pores · bio-stimulator · sylfirm-x · hydrafacial | Dr Jamie Gan Ee Vienn | ultherapy · pro-yellow · sculptra |
| Dr William Yap | fine-lines-wrinkles · exosome-therapy · morpheus8 · silkpeel | Dr Jen Meng | fotona-4d · m22-ipl · ellanse |
| Dr Lim Xiao Chien | dark-eye-circles · double-eyelid · potenza · alma | Dr Yvonne Chuah | hifu · dermav · hydrodeluxe |
| Dr Jeremy Low Jia Wei | face-contouring · botulinum-toxin · vascular-pigment-laser · btl-exilis | Dr Teresa Tan | excessive-sweating · fotona-pqx · plinest |
| Dr Chang Chee Seong | face-lifting · resurfacing-laser · wonderface · botox | Dr Chin Wei Horng | fotona-sp-dynamis · juvelook |
| Dr Jacqueline Tan | aging · microwave-contouring · coolsculpting | Dr Jade | vascular-lesions · picosure · rejuran |
| Dr Joaan Kong | body-slimming · muscle-stimulation · cooltech | Dr Calvin Tan | tattoo-removal · facial-treatments · schwarzy |
| Dr Tim Chua | hair-loss · dermal-fillers · onda-coolwaves | Dr Lucas Chew | birthmark · laser-hair-removal · profhilo |

Dr Hong Peiyi (added 17 Sep) has no pages proposed; assign if another doctor is unavailable.

**What we do with it.** Concerns go into `config/concern-signoff.json` as `{ "slug": { "doctor", "date" } }`.
Treatments and technologies: replace `reviewedBy`/`lastReviewed` in the data files with the confirmed values and
delete the placeholder header comments. Any page still unsigned at the end of week 1 gets gated through the same
ledger pattern as concerns so it says "awaiting medical review" instead of naming a doctor (plan item 1.2).

## 3. ~~Sheet B — branch × device~~ · CANCELLED 2026-09-20

> **The client's answer: not needed, the machines rotate between branches.** The CSV stays in this folder as a
> record of what was asked, unfilled. Do not add `availableAt` to the `Technology` type; plan items 2.2 and 2.4
> are struck. If the client later wants rotation described honestly on the page, the cheapest version is one
> sentence plus the WhatsApp CTA ("our devices move between clinics — message us to confirm where this one is"),
> which needs no matrix and no maintenance. Proposed, not scheduled.

### What was asked (`sheet-b-branch-device-matrix.csv`)

36 rows × 9 branch columns (Mont Kiara, Cheras, Bukit Jalil, Four Seasons KL, Petaling Jaya SS2, Kota Kemuning,
Southkey JB, Pelangi JB, Kota Kinabalu) plus a notes column. Any mark in a cell counts as available.

**What we do with it.** New `availableAt: BranchSlug[]` on the `Technology` type, rendered as an "Available at"
branch-card row on every technology page and, as a stretch, a reciprocal "Devices at this clinic" list on each
location page (plan items 2.1, 2.2, 2.4).

## 4. Price decision — CLOSED at option (c), 2026-09-20: no price at all

| Option | Build | Compliance | Search effect |
|---|---|---|---|
| (a) own price list | `/pricing` page + per-treatment "Price" H2 + `Offer` schema **visible on-page**; a validator that fails the build if a schema price is not in the rendered HTML | Fees must be honest and current (PHFSA fee display; no comparative pricing, no inducements) | Highest: matches the price-led SERP directly and captures "kaiteki clinic price list" |
| (b) indicative range | "What does X cost in Malaysia" H2 with a market range + factors table + "confirmed at consultation"; source note kept in the data file | Not a Kaiteki price claim; must be sourced and dated | Captures the "price" query cluster (e.g. `pico laser price malaysia`, 110/mo); Cleo's exact pattern |
| (c) factors only | `costFactors` block on all 19 treatments (already built for pico-laser) | Safest | Weakest; Dr Chong ranks with this alone but we are behind them on authority |

Rule R-03 ("no from RM") stays under (b) and (c). Under (a) it is superseded by a client decision and should be
recorded as an ADR.

> **Decision: (c).** No Kaiteki price, no indicative market range, no `Offer` schema, no `/pricing` page. Treatment
> pages get a "What affects the cost of X" section listing factors — area treated, number of sessions, device,
> whether it is combined — with no figure anywhere. Rule R-03 stands unchanged and no ADR is needed.
>
> **State the cost plainly for the record:** a third of every treatment SERP we sampled leads with a Ringgit
> figure, and we are choosing not to compete on that element. The compensating move is D8 — be the page that
> states contraindications, session length, interval, device name and honest caveats, none of which our rivals do.
> Worth revisiting at the 4.4 measurement, once depth has shipped and we can see whether the factors-only section
> captures any of the price query cluster on its own.
>
> **Build guard:** add a lint that fails on any `RM` or digit-currency string inside `costFactors`, so this cannot
> drift back in by accident.

## 5. AI crawler decision — CLOSED 2026-09-20: training bots allowed

Live state 18 Sep: all agents allowed; six retrieval agents named explicitly (`OAI-SearchBot`, `ChatGPT-User`,
`Claude-SearchBot`, `Claude-User`, `PerplexityBot`, `Applebot`). Nothing is disallowed, so the training bots are
allowed by default today. If the client says no to training, add a `Disallow: /` group for `GPTBot`, `ClaudeBot`,
`CCBot`, `Google-Extended`, `Applebot-Extended`, `Meta-ExternalAgent` in `app/robots.ts` (Clique's exact setup).
Either way, record the call in 03b T2.

> **Decision: allow the training bots.** No code change is required — nothing is disallowed in `app/robots.ts`
> today, so the live file already reflects this. 03b T2 closes.

## 6. Indexing queue — SUSPENDED 2026-09-20

> **The client reports requesting manually since 6 Sep with no movement, and the spot checks agree.** On 18 Sep,
> `/treatments/laser-hair-removal`, `/treatments/botulinum-toxin` and `/treatments/dermal-fillers` were all still
> "Discovered – currently not indexed" with no crawl ever recorded.
>
> **Stop requesting.** Re-diagnosis on 2026-09-20 (full working in the 03b T0 update) tested four explanations:
>
> - **Not discoverable?** No — every URL is in a clean submitted sitemap with a valid `lastmod`.
> - **Not internally linked?** No — the live `/technology` hub links 36 of 36, `/treatments` 19 of 19, `/concerns`
>   14 of 14, and all three hubs are themselves indexed.
> - **Thin content?** No, and it is the reverse of what we assumed: the never-crawled technology pages average
>   1,342 words against 1,274 for the crawled ones. Length does not predict crawl status at all.
> - **Cluster template sameness?** Yes. Thirty-five of the 36 technology pages share the same five section
>   headings; 18 of 19 treatments share three. Fifty-five URLs that differ mainly in their nouns. The one
>   treatment authored off that spine, `pico-laser`, is crawled, indexed and ranking. All 13 injectables, the most
>   templated sub-group on the site, are uncrawled without exception.
>
> So the lever is not Search Console. It is making the pages genuinely different from one another, which is
> already what plan items 1.5, 2.3, 2.5, 3.4 and 4.1 do. Item 2.3 was widened from 12 technology pages to all 36
> because of this finding. Item 4.4 measures whether it worked, and can falsify it.
>
> **What to tell the client:** stop spending time in Search Console on this; it is not their fault and it is not a
> bug. The fix is the content work already scheduled, and we will report the crawl recovery at the 18 Oct
> measurement.

### The queue as it stood (retained for reference, not for action)

Source: `docs/03c-request-indexing-queue.txt` (37 unrequested as of 6 Sep). GSC allows roughly 10–15 requests a
day. Order is by commercial value, then by "unknown to Google" first within a group. Tick as requested.

**Batch 1 — Fri 19 Sep (12)**
- [ ] https://kaiteki.my/treatments/botulinum-toxin
- [ ] https://kaiteki.my/treatments/dermal-fillers
- [ ] https://kaiteki.my/treatments/laser-hair-removal
- [ ] https://kaiteki.my/treatments/muscle-stimulation
- [ ] https://kaiteki.my/treatments/double-eyelid
- [ ] https://kaiteki.my/treatments/resurfacing-laser
- [ ] https://kaiteki.my/treatments/vascular-pigment-laser
- [ ] https://kaiteki.my/treatments/microwave-contouring
- [ ] https://kaiteki.my/treatments/facial-treatments
- [ ] https://kaiteki.my/concerns/excessive-sweating
- [ ] https://kaiteki.my/concerns/vascular-lesions
- [ ] https://kaiteki.my/technology/botox

**Batch 2 — Sat 20 Sep (13)**
- [ ] https://kaiteki.my/technology/juvederm
- [ ] https://kaiteki.my/technology/restylane
- [ ] https://kaiteki.my/technology/sculptra
- [ ] https://kaiteki.my/technology/radiesse
- [ ] https://kaiteki.my/technology/belotero
- [ ] https://kaiteki.my/technology/juvelook
- [ ] https://kaiteki.my/technology/plinest
- [ ] https://kaiteki.my/technology/hydrodeluxe
- [ ] https://kaiteki.my/technology/ellanse
- [ ] https://kaiteki.my/technology/art-filler
- [ ] https://kaiteki.my/technology/sylfirm-x
- [ ] https://kaiteki.my/technology/morpheus8
- [ ] https://kaiteki.my/technology/ultherapy-system

**Batch 3 — Sun 21 Sep (12)**
- [ ] https://kaiteki.my/technology/ultracel-q
- [ ] https://kaiteki.my/technology/fractional-co2
- [ ] https://kaiteki.my/technology/fotona-sp-dynamis
- [ ] https://kaiteki.my/technology/cooltech
- [ ] https://kaiteki.my/technology/wonderface
- [ ] https://kaiteki.my/technology/xerf
- [ ] https://kaiteki.my/technology/lifthera
- [ ] https://kaiteki.my/doctors/dr-chew-yuhhui
- [ ] https://kaiteki.my/doctors/dr-jeremy-low
- [ ] https://kaiteki.my/doctors/dr-jessie-lim
- [ ] https://kaiteki.my/doctors/dr-tim-chua
- [ ] https://kaiteki.my/doctors/dr-yeong-bin
- [ ] https://kaiteki.my/doctors/dr-say-wei-xian
- [ ] https://kaiteki.my/blog/how-to-reduce-facial-redness-causes-treatment

Already done on 6 Sep and confirmed indexed 18 Sep: `/technology`, `/technology/rejuran`, `/technology/profhilo`.
`/concerns/melasma` is in the old queue but does not exist yet (plan item 3.3); do not request it.

**How to request one** (client, in Search Console): open the property `kaiteki.my`, paste the URL in the top
inspection bar, wait for the result, click **Request indexing**. Roughly 30 seconds each. If it says the quota is
exceeded, stop for the day and continue tomorrow.

**Verification** (us, plan item 3.1): re-inspect the whole list on 6 Oct. Anything still "Discovered, not indexed"
gets a second request and a contextual link from an already-crawled page.

## 7. Languages — what week 4 delivers and what it does not

Plan item 4.5. **Delivers:** `/zh/**` and `/ms/**` routing with the same slugs as English, translated chrome,
reciprocal hreflang with `x-default`, locale URLs in the sitemap, a language switcher, and the `/cn/*` legacy
redirects re-pointed to `/zh/*`. Plus a signed pilot of 8 pages per language:

| Locale | Pilot pages | Why these |
|---|---|---|
| `/zh` | home · treatments/pico-laser · concerns/pigmentation · technology/onda-coolwaves · one KL location · 3 by client choice | Highest-impression pages; the legacy `/cn/` mirror had indexed equity on these topics |
| `/ms` | home · technology/rejuran · treatments/skin-booster · concerns/acne · one JB location · 3 by client choice | Kaiteki already ranks pos 1 for `jenis rejuran` / `macam macam rejuran` with no Malay content; `jerawat` and `harga` clusters (03b T7, 03d) |

**Does not deliver:** the other 61 pages per language. Those follow in week 5+, paced by in-language doctor
sign-off. No page goes live under a locale prefix as English or as machine translation; a page without a signed
translation simply has no locale URL and no hreflang.

**Needs from the client:** confirmation of both languages, and bilingual reviewers (ask 7). If the reviewers are
not named by 12 Oct, the plumbing ships with no locale URLs live and the pilot moves to week 5.

## 8. Side finding to park

GSC reports the `/technology` hub with a **Product snippets: FAIL** rich-result verdict. The hub emits
`CollectionPage` + `ItemList`, not `Product`, so this is Google interpreting the list as products. Not urgent; add
to the week-4 internal-link audit (plan item 4.3) and check whether an `ItemList` of `MedicalDevice` nodes reads
cleaner than the current shape.
