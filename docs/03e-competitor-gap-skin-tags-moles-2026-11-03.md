# 03e. Competitor gap: skin tags and moles (`/concerns/skin-tags-moles`)

**Date:** 2026-11-03 · **For:** content schedule kt101 · **Method:** `competitor-gap-analysis` skill.

## Evidence

- **SERPs:** Firecrawl search, location Malaysia, 2026-11-03: `skin tag removal malaysia` and
  `mole removal malaysia clinic`, top 10 each.
- **Demand:** Ubersuggest, Malaysia (locId 2458), 2026-11-03. `skin tag removal` 2,900/mo,
  `skin tag` 9,900, `skin tag reason` 720, `skin tag by anus` 880, removal creams ~580 combined,
  `skin tag removal malaysia` 70. `mole removal` measured **0** in English. Malay: `tahi lalat`
  1,900, `buang tahi lalat` 260, `kanser tahi lalat` 140, `klinik buang tahi lalat` 170;
  `ketuat kaki` (warts) 3,600.
- **Pages read** (Jina Reader, 2026-11-03): Millennium Clinic, Nexus Clinic, MyGP Clinic,
  GTS Dermatology. **Clinic Cleo (#1 on both queries) not read:** its page returns a bot-check
  screen and was not bypassed. Its row uses the search listing only.

## SERP composition

Four kinds of player share page one: aesthetic clinics (Cleo, Millennium, LiV, A Klinik), price
directories (WhatClinic, Erufu Care, Bookimed), a GP chain (MyGP) and dermatology or hospital
pages (GTS, Pantai, Nexus). Directories and two clinics lead with prices. **Kaiteki's own legacy
post `/blog/skin-tag-removal-malaysia` ranks #3** for the skin tag query, so the new concern page
competes with it (decision 5).

## 8a. Deep-dive

| Source | Words | Structure | Strengths | Weaknesses |
|---|---|---|---|---|
| Clinic Cleo (#1, both) | not read | Title "Best Laser Skin Tag & Mole Removal"; tags and moles on one page | Ranks first for both terms with one combined page | Listing leads with "best", "flawless results"; body not verified |
| Millennium Clinic (#2 tags) | ~2,000 | "No.1 / Best" hero, dated case photos, two named doctors with photos, voucher | Named doctors; many case photos; covers warts too | Superlatives, no explanation of what a tag is, no safety or mole content |
| Nexus Clinic (#2 moles) | ~2,200 | At a glance · ABCDE · when a mole needs a biopsy first · type-to-method framework · day-by-day healing · scar by method · what happens to the tissue · process · before/after · 2026 prices · candidacy · FAQ | Thorough on assessment and histopathology; prices; dermoscopy; cites guidelines | Moles only; nothing on where melanoma appears in Asian skin; long |
| MyGP Clinic (#6 tags) | ~2,400 (3 languages) | Check before removal · when to see a doctor · treatment · before your appointment · risks and aftercare · FAQ, repeated in BM and 中文 | GP-safe framing; full BM and Chinese versions on the same page | Generic; no method detail, no moles |
| GTS Dermatology (#9 tags) | ~1,400 | What tags are · why they appear · treatment options · procedure · price · aftercare · when to see a dermatologist | Covers cryo, cautery, excision; insulin-resistance link; price ranges | Tags only; nothing on moles or lookalikes beyond a line |

The 2026-09 premise (docs/15 item 3.4) that no rival explains why a mole is assessed before
removal **no longer holds**: Nexus does it in depth and MyGP opens with it. The assessment angle
is now table stakes, not the differentiator.

## 8b. Gap table

| Element | Cleo | Millennium | Nexus | MyGP | GTS | Us |
|---|---|---|---|---|---|---|
| Tags and moles on one page, routed by type | ⚠️ (one page, routing unverified) | ❌ | ❌ | ❌ | ❌ | ✅ three-tab selector |
| Mole examined before removal, laser vs testable removal | ? | ❌ | ✅ | ⚠️ | ⚠️ | ✅ |
| Where melanoma appears in Asian skin (palms, soles, under nails) | ? | ❌ | ❌ | ❌ | ❌ | ✅ **owned** |
| Lookalikes routed, incl. genital and anal growths (880/mo "by anus") | ? | ⚠️ warts only | ❌ | ❌ | ❌ | ✅ **owned** |
| Healing on Malaysian skin (darkening, keloid sites) | ? | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ✅ |
| Home removal and creams answered | ? | ⚠️ | ⚠️ | ✅ | ✅ | ✅ |
| Insulin-resistance link | ? | ❌ | ❌ | ❌ | ✅ | ✅ |
| Day-by-day healing timeline | ? | ❌ | ✅ | ❌ | ⚠️ | ⚠️ summary only |
| What the clinic does with removed tissue | ? | ❌ | ✅ | ❌ | ⚠️ | ❌ **unknown, ask client** |
| Prices | ? | ❌ | ✅ | ❌ | ✅ | ❌ **client rule: factors only** |
| Before/after or case photos | ? | ✅ | ✅ | ❌ | ❌ | ❌ **none we own** |
| Named doctor on the page | ? | ✅ | ⚠️ | ❌ | ⚠️ | ❌ **until signed** |
| Wart removal | ? | ✅ | ❌ | ❌ | ❌ | ❌ **not known if offered** |
| BM and 中文 versions | ? | ❌ | ❌ | ✅ | ❌ | ❌ **EN first** |

## Decisions

1. **Differentiator:** the two owned rows. Asian-skin melanoma locations and lookalike routing
   stay prominent (location block, see-a-doctor, note card). The assessment angle stays, as
   parity with Nexus rather than as the lead claim.
2. **Draft edits made:** `seoTitle` uses "Skin Tag & Mole Removal" (the SERP's phrase; "mole
   assessment" lost it); the CO2 section names the other methods and why only cutting out keeps
   tissue for testing; one FAQ ("Will a skin tag grow back?", covered in risks) became "Is a
   removed mole sent to a laboratory?".
3. **Compensating moves for the ❌ column:** prices → the cost-factors block; no photos → no
   borrowed gallery (`noBorrowedResults`), the first-visit block explains the visit instead;
   no named doctor → sign-off (proposed Dr Chew) turns the byline on.
4. **Ask the client:** what happens to a suspicious mole (excised and sent for histopathology
   in-house, or referred); whether warts are removed (Malay `ketuat` demand is large); whether
   the resurfacing CO2 laser is the device used for tags and moles.
5. **Cannibalisation with the legacy post (#3):** recommend a 301 from
   `/blog/skin-tag-removal-malaysia` to the concern page once it is live and signed, which
   consolidates the ranking on the stronger page. The post is thin (559 words), calls the
   doctors "dermatologists" and lists methods the clinic is not confirmed to use. Owner decides.
6. **Skip:** a day-by-day healing timeline (clinic aftercare instructions are not documented;
   a generic one would invent them) and price ranges.
