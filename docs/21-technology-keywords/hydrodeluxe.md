# 21. Technology keyword log: Hydrodeluxe (`/technology/hydrodeluxe`)

**Date:** 2026-10-14 · Follows the pilot format in `onda-coolwaves.md`.
**Outputs:** `content/i18n/technology/zh/hydrodeluxe.json`, `content/i18n/technology/ms/hydrodeluxe.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/hydrodeluxe.json`.
**Inputs:** EN record for `hydrodeluxe`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `skin-booster` and `bio-stimulator` treatment pages and the `profhilo` device page from this batch.

## Method

- **Client rule, volume proxy and decision rules:** as in `onda-coolwaves.md` and `profhilo.md`.
- **Probes:** shared batch for the five skin-booster products, 133 zh and 145 ms. Raw dumps: `C:/tmp/sbdev-ac-zh*.json`, `C:/tmp/sbdev-ac-ms*.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, seven section headings, four FAQ questions. All body copy is a direct, faithful translation.
- **Result in short:** Hydrodeluxe has almost no Malaysian demand in either language. `hydrodeluxe` and `hydro deluxe` return Thai, Spanish, Polish and Turkish forms; `hydrodeluxe malaysia` and `hydro deluxe malaysia` are empty. Most strings are therefore DIRECT.
- **Untranslated by design:** `slug`, `group`, `type`, `treatments`, `image`, `reviewedBy`, `lastReviewed` (no `device` in this record); the names Hydrodeluxe, Hydro Deluxe, Neauvia, Matex Lab, CaHA, Profhilo, IBSA, NAHYCO.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Hydrodeluxe" | hydrodeluxe, hydro deluxe, neauvia | `hydrodeluxe` returns itself, + คือ (Thai), que es; `neauvia` → neauvia hydro deluxe | KEYWORD (brand): **Hydrodeluxe**, Latin |
| **seoTitle** "Hydrodeluxe Hydrating Skin Booster Malaysia \| Kaiteki" | hydrodeluxe 水光针, hydro deluxe 水光针 | empty | DIRECT: **Hydrodeluxe 补水水光针 \| Kaiteki** (27 chars). 马来西亚 doesn't fit in 30 next to the 11-letter brand; it moves to the description. |
| **seoDescription** | hydrodeluxe 是什么 | empty | DIRECT: Hydrodeluxe, 非交联玻尿酸, 马来西亚, 水光针, 补水, 肤质, 免费咨询 (76 chars) |
| sections[0].heading "What is Hydrodeluxe?" | hydrodeluxe 是什么 | empty | DIRECT: **Hydrodeluxe 是什么？** |
| sections[1].heading "How the formulation works" | (no brand form) | none | DIRECT: **Hydrodeluxe 的配方如何作用** |
| sections[2].heading "Why is Hydrodeluxe not used for contour?" | hydrodeluxe 填充, 水光针 填充 | brand form empty | DIRECT: **为什么 Hydrodeluxe 不用于填充轮廓？** |
| sections[3].heading "Hydrodeluxe or Profhilo" | hydrodeluxe 和 profhilo | empty | DIRECT: **Hydrodeluxe 还是 Profhilo：两种玻尿酸水光针有什么区别？** |
| sections[4].heading "Who should avoid it, including anyone sensitive to CaHA?" | 羟基磷灰石钙 | returns (医美, caha) but not with the brand | DIRECT: **哪些人不适合打 Hydrodeluxe，包括对羟基磷灰石钙（CaHA）敏感的人？** |
| sections[5].heading "Visit, downtime?" | hydrodeluxe 恢复期 | empty | DIRECT: **打 Hydrodeluxe 的过程是怎样的？有恢复期吗？** |
| sections[6].heading "Is Hydrodeluxe safe, and what side effects?" | hydrodeluxe 副作用, 水光针 副作用 | brand form empty; `水光针副作用` returns (ptt, dcard) | DIRECT: **Hydrodeluxe 安全吗？可能有什么副作用？** (a question; the body does not call it safe) |
| FAQ 1 "Is Hydrodeluxe a filler?" | hydrodeluxe 填充 | empty | DIRECT: **Hydrodeluxe 算是填充吗？** (same wording as Profhilo sections[2]) |
| FAQ 2 "How does it differ from Profhilo?" | hydrodeluxe 和 profhilo | empty | DIRECT: **Hydrodeluxe 和 Profhilo 有什么区别？** |
| FAQ 3 "What do the amino acids and calcium hydroxyapatite do?" | 羟基磷灰石钙 | returns: 羟基磷灰石钙 医美, 羟基磷灰石钙(caha) | KEYWORD (partial): **添加的氨基酸和羟基磷灰石钙有什么作用？** |
| FAQ 4 "How many sessions are typical?" | hydrodeluxe 要打几次 | empty | DIRECT: **Hydrodeluxe 一般要打几次？** |

**Chinese tally (14 logged strings):** 2 KEYWORD, 12 DIRECT.

**Not usable:** **冰冰针** (`neauvia 冰冰针`, a China-market nickname for Neauvia's booster): a consumer nickname for a prescription injectable, like 三文鱼针. Not used.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Hydrodeluxe" | hydrodeluxe, hydro deluxe | → hydro deluxe skin booster, neauvia, treatment, injection (English) | KEYWORD (brand): **Hydrodeluxe** |
| **seoTitle** | hydrodeluxe malaysia, hydro deluxe malaysia | empty | DIRECT: **Skin Booster Penghidratan Hydrodeluxe di Malaysia \| Kaiteki** (59 chars) |
| **seoDescription** | apa itu hydrodeluxe | empty | DIRECT: suntikan, asid hialuronik tidak berangkai silang, skin booster, Kaiteki, konsultasi percuma (155 chars) |
| sections[0].heading "What is Hydrodeluxe?" | apa itu hydrodeluxe, hydro deluxe untuk apa | empty | DIRECT: **Apa itu Hydrodeluxe?** |
| sections[1].heading "How the formulation works" | none | none | DIRECT: **Bagaimana formulasinya berfungsi** |
| sections[2].heading "Why not used for contour?" | hydro deluxe filler | → neauvia hydro deluxe filler (English) | DIRECT: **Kenapa Hydrodeluxe tidak digunakan untuk kontur?** |
| sections[3].heading "Hydrodeluxe or Profhilo" | hydro deluxe vs profhilo, hydrodeluxe vs profhilo | both → (neauvia) hydro deluxe vs profhilo, reviews | KEYWORD (pattern): **Hydrodeluxe atau Profhilo: apa beza dua skin booster HA ini?** |
| sections[4].heading "Who should avoid it, CaHA?" | kalsium hidroksiapatit | → *adalah*, rumus kimia (ID / chemistry) | DIRECT: **Siapa yang patut mengelak Hydrodeluxe, termasuk sesiapa yang sensitif terhadap CaHA?** |
| sections[5].heading "Visit, downtime?" | hydro deluxe downtime | → neauvia hydro deluxe downtime (thin, English) | DIRECT: **Apa yang berlaku dalam sesi Hydrodeluxe, dan ada downtime ke?** (pilot form) |
| sections[6].heading "Safe, side effects?" | hydro deluxe side effects | English only | DIRECT: **Adakah Hydrodeluxe selamat, dan apakah kesan sampingan yang mungkin berlaku?** |
| FAQ 1 "Is it a filler?" | hydro deluxe filler | returns (English) | KEYWORD (weak): **Hydrodeluxe ialah filler ke?** |
| FAQ 2 "Differ from Profhilo?" | hydro deluxe vs profhilo | returns | KEYWORD (pattern): **Apa beza Hydrodeluxe dan Profhilo?** |
| FAQ 3 "Amino acids and CaHA?" | kalsium hidroksiapatit | ID-led (*adalah*) | DIRECT: **Apa fungsi asid amino dan kalsium hidroksiapatit yang ditambah?** |
| FAQ 4 "How many sessions?" | hydro deluxe how many sessions | → neauvia hydro deluxe how many sessions (English) | DIRECT: **Biasanya perlu buat Hydrodeluxe berapa sesi?** |

**Malay tally (14 logged strings):** 4 KEYWORD, 10 DIRECT.

**Indonesian pollution seen and avoided:** *kalsium hidroksiapatit adalah*.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| non-crosslinked (linear) HA hydrogel | 非交联（线性）玻尿酸水凝胶 | hidrogel asid hialuronik linear tidak berangkai silang | skin-booster |
| calcium hydroxyapatite (CaHA) | 羟基磷灰石钙 | kalsium hidroksiapatit | skin-booster |
| glycine, L-proline | 甘氨酸、L-脯氨酸 | glisina, L-prolina | new |
| density | 密度 | ketumpatan | new |
| décolletage | 胸口部位 | dada atas | skin-booster |
| hydrating booster | 补水型水光针 | skin booster penghidratan | skin-booster |

## For the bilingual doctor-reviewer

1. **"Calcium hydroxyapatite" in Malay:** skin-booster writes *kalsium hidroksiapatit*, bio-stimulator writes *kalsium hidroksilapatit*. This page follows skin-booster. One of the two treatment pages should be aligned.
2. **"Is Hydrodeluxe safe?"** stays a question in both locales (安全吗 / *Adakah … selamat*). The answer lists risks and never says it is safe.
3. **冰冰针 not used** (Neauvia nickname).
4. **seoTitle (zh)** drops 马来西亚 for length. Alternative: 马来西亚 Hydrodeluxe 水光针 \| Kaiteki (30 chars, drops "hydrating").
5. **"Clinics sometimes shorten or vary the trade name"** is kept as written; it explains why the brand appears as both Hydrodeluxe and Hydro Deluxe.
