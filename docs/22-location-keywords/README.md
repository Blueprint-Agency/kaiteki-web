# 22. Location pages in Chinese and Malay: keyword log

**Round 5 of the trilingual rollout** (2026-10-17). Covers the `/locations` hub and the nine `/locations/[slug]` branch pages. Same rule as rounds 2 to 4 (`docs/19-concern-keywords/README.md`): check the keyword first; where autocomplete shows demand, phrase the string around the real query; where it shows none, translate directly.

## Files

| What | Where |
|---|---|
| Hub, template and per-branch copy, all three languages | `content/i18n/locations.ts` |
| Branch and region display names | `content/i18n/terms.ts` (`branch`, `region`), decided in `docs/18` §2 and §4 |
| Shared page bodies | `components/LocationsHub.tsx`, `components/BranchPage.tsx` |
| Routes | `app/(en)/locations/**`, `app/zh/locations/**`, `app/ms/locations/**` |
| Gate | `pnpm validate:locale` now loads `locations.ts` too (L-02 to L-06, plus L-11: a branch in the ledger with no copy) |

One file instead of 18 JSON overlays: a branch page is a template filled from six short fields per branch, so there is no long English record to overlay.

## What is never translated

- **Address and phone.** They are each branch's NAP and must match its Google Business Profile character for character, in every language. Schema keeps the one `MedicalClinic` node per branch (same `@id` as English); a translated page adds a `WebPage` node in its own language that points at it.
- **"Kaiteki" plus the Latin area name** in every heading. See the branch-query finding below.
- Doctor names and credentials, the reviews (quoted as written), the map query.

## Method

Google Autocomplete, `gl=my`, `hl=zh-CN` and `hl=ms`, 105 probes in four batches (raw dumps in the session scratchpad, not in the repo). Read with the same skew filters as `docs/18` §1: Taiwan/HK markers for Chinese, Indonesian markers for Malay.

## Findings

**1. Branch searches are typed in Latin script in both languages.** `kaiteki mont kiara`, `kaiteki bukit jalil`, `kaiteki kota kemuning`, `kaiteki southkey jb`, `kaiteki pelangi jb`, `kaiteki taman pelangi`, `kaiteki kk`, `kaiteki pj`, `kaiteki four seasons`, `la jung clinic by kaiteki` all return, under `hl=zh-CN` and `hl=ms` alike. `kaiteki 新山`, `kaiteki 吉隆坡`, `kaiteki 亚庇`, `kaiteki 分店` return nothing. So every H1 is **Kaiteki + Latin area name**, with the Chinese area name beside it on Chinese pages (the `docs/18` term map: "Mont Kiara 满家乐", "Cheras 蕉赖").

**2. Chinese demand is at city level, never area level.**

| Probe | Result | Decision |
|---|---|---|
| 新山 医美 / 新山 医美诊所 | `新山医美`, `新山医美诊所` | KEYWORD: **新山医美诊所** leads both JB titles |
| 新山 诊所 | `新山诊所`, `新山 诊所 推荐` | supports the above |
| 吉隆坡 医美 | `吉隆坡医美` | KEYWORD: **吉隆坡医美诊所** leads the four KL titles |
| 满家乐 / 蕉赖 / 武吉加里尔 / 八打灵 / 哥打哥文宁 / 莎阿南 / 亚庇 + 医美 | all empty | DIRECT: area name translated, no invented keyword |
| 医美诊所 + Latin area (cheras, mont kiara, pj, jb, kk…) | all empty | Latin area kept beside the Chinese name, not in a keyword phrase |
| 新山 皮肤 / 亚庇 皮肤 | 新山皮肤科, 皮肤专科 | **Not used.** 皮肤科 and 皮肤专科 imply specialist status (`docs/18` §7) |
| 吉隆坡四季 | 吉隆坡四季酒店 (the hotel) | The Four Seasons title leads with **吉隆坡 KLCC 医美诊所**, as English leads with KLCC |
| 医美诊所 营业时间 | `医美诊所营业时间` | the template's ledger label is **营业时间** |

**3. Malay demand: "klinik kecantikan" and "klinik estetik" + city.**

| Probe | Result | Decision |
|---|---|---|
| klinik estetik / kecantikan kuala lumpur | both return | KL titles: **Klinik Estetik di …, Kuala Lumpur** |
| klinik kecantikan cheras | returns (klinik estetik cheras empty) | Cheras: **Klinik Kecantikan & Estetik di Cheras, KL** |
| klinik estetik / kecantikan shah alam | both return; Kota Kemuning has none of its own | **Klinik Kecantikan di Kota Kemuning, Shah Alam** (`docs/18` §2.2 anchor) |
| klinik estetik / kecantikan johor bahru, jb | all return | Southkey **Klinik Estetik**, Pelangi **Klinik Kecantikan**, one head term each |
| klinik estetik / kecantikan kota kinabalu | both return | **Klinik Estetik di Kota Kinabalu, Sabah**; the description carries *kecantikan* |
| klinik estetik / kecantikan + mont kiara, bukit jalil, pj, southkey, pelangi | empty | DIRECT: area kept, head term + city |
| klinik kecantikan terdekat | returns (with *dari lokasi saya*) | hub H1: **Cari cawangan terdekat anda** (*terdekat* is locational, not a superlative; `docs/18` §5) |
| klinik kulit cheras / berdekatan | return, with *klinik pakar kulit* beside them | **Not used** on branch pages: *pakar kulit* implies a specialist, and the homepage already owns *klinik kulit & estetik* |
| waktu operasi klinik | only government clinics | the label **Waktu operasi** is the natural Malaysian form; no keyword claim |

**4. Hub.** Chinese title **Kaiteki 分店｜吉隆坡、雪兰莪、新山、亚庇医美诊所** carries both city terms. Malay title **9 Cawangan Klinik Estetik di KL, Selangor, JB & KK | Kaiteki**. The H1 avoids 最近 in Chinese (`docs/18` §5: no superlative-looking word in a headline), using **找一间离你近的分店**.

## Sign-off

The ten location entries in `content/i18n/pages.ts` are drafts that name **Dr Chew** (client, 2026-10-17: Dr Chew reviews every page without an English reviewer). Branch pages show no reviewer byline in any language, so the name is a record only. They go live the day his date comes back for each page (`docs/15a` Sheet C).

## Open for the client

- `serves`, `parking` and `gettingHere` are flagged in `content/data/branches.ts` as inferred from each address and still to be verified by the clinic. The translations carry the same facts, so a correction there must be made in `locations.ts` too.
