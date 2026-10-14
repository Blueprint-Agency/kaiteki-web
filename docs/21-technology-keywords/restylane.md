# 21. Technology keyword log: Restylane (`/technology/restylane`)

**Date:** 2026-10-14 · Follows the pilot method in `onda-coolwaves.md`.
**Outputs:** `content/i18n/technology/zh/restylane.json`, `content/i18n/technology/ms/restylane.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/restylane.json`.
**Inputs:** EN record for `restylane`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `dermal-fillers` treatment page and its log, the `fine-lines-wrinkles`, `face-contouring`, `dark-eye-circles` and `aging` concern pages, and `juvederm.md` (sister page, same terms).

## Method

- Same as the pilot (autocomplete, `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`; KEYWORD vs DIRECT).
- **Probes:** shared dump with the other three filler brand pages: 230 zh and 178 ms. Raw dumps: `C:/tmp/filler4-ac-zh.json`, `C:/tmp/filler4-ac-ms.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, seven section headings, four FAQ questions. Everything else is a direct, faithful translation.
- **Filler term, hyaluronidase, body terms:** as in `juvederm.md` (玻尿酸填充 search-facing, 玻尿酸填充剂 / 填充剂 in body; 透明质酸酶 / hialuronidase because the EN names it).
- **Untranslated by design:** `slug`, `group`, `type`, `treatments`, `image`, `reviewedBy`, `lastReviewed`; product and technology names (Restylane, Galderma, NASHA®, OBT™, XpresHAn Technology™, Lyft, Refyne, Defyne, Kysse). zh glosses NASHA® once as 非动物来源稳定玻尿酸 (the EN spells the acronym out); OBT™'s English expansion is kept as is.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Restylane" | restylane, restylane 中文, 瑞蓝 | `restylane` → kysse, vital light, **效果**, filler, lyft, **restylane juvederm 分别**; `restylane 中文` → 中文名; `瑞蓝` is the CN name (瑞蓝唯瑅 etc.), no MY signal | KEYWORD (brand): **Restylane**, kept in Latin |
| **seoTitle** | restylane 玻尿酸, restylane 马来西亚 | `restylane 玻尿酸` → 价格 (some 價格); `restylane 马来西亚` empty | KEYWORD: **马来西亚 Restylane 玻尿酸填充 \| Kaiteki** (30 chars) |
| **seoDescription** | nasha 玻尿酸, obt 玻尿酸 | `nasha玻尿酸` → nasha 级 玻尿酸; `obt 玻尿酸` → dcard, 价格 | KEYWORD: Restylane, NASHA®, OBT™, 玻尿酸填充剂, 容量与轮廓, 免费咨询 (75 chars) |
| sections[0] "What is Restylane?" | restylane 是什么 | `restylane是什么` returns | KEYWORD: **Restylane 是什么？** |
| sections[1] "How NASHA® and OBT™ gel technologies differ" | nasha, nasha 玻尿酸, obt 玻尿酸, nasha obt, restylane 原理 | `nasha` alone is song-lyric noise; `nasha 玻尿酸` and `obt 玻尿酸` return; `nasha obt` → nasha vs obt (English, global) | KEYWORD: **NASHA® 和 OBT™ 玻尿酸凝胶技术有什么不同** |
| sections[2] "Can Restylane be reversed, and how long does it last?" | restylane 溶解, restylane 维持多久, 玻尿酸 溶解, 玻尿酸 维持多久 | brand forms empty; generic forms strong | KEYWORD (pattern): **Restylane 可以溶解（逆转）吗？可以维持多久？** |
| sections[3] "Restylane or another HA filler: what actually differs?" | restylane 分别, restylane juvederm, 玻尿酸 品牌, 玻尿酸 品牌 区别, 玻尿酸 区别 | `restylane 分别` → **restylane juvederm 分别**; `玻尿酸品牌` → **比较**, 推荐 (not used), 差异; `玻尿酸 区别` returns | KEYWORD: **Restylane 和其他玻尿酸品牌：真正的区别在哪里？** (区别 over the colloquial 分别, matching the treatment page) |
| sections[4] "Does a wide range of gels mean Restylane suits everyone?" | restylane 适合, 玻尿酸 适合 | empty / skincare | DIRECT: **Restylane 凝胶种类多，就代表适合每个人吗？** |
| sections[5] "What happens at a Restylane appointment, and how much swelling follows?" | restylane 肿, restylane 肿多久, 玻尿酸 肿 | brand forms empty; `玻尿酸 肿` → 肿起来, 肿几天, 肿胀期 | KEYWORD (weak): **打 Restylane 的过程是怎样的？打完会肿得多明显？** |
| sections[6] "Which side effects after Restylane need reporting straight away?" | restylane 副作用, restylane 风险 | `restylane 副作用` returns; 风险 empty | KEYWORD: **打完 Restylane 后，哪些副作用要马上告诉医生？** |
| FAQ 1 "Difference between Restylane NASHA® and OBT™ gels?" | restylane nasha obt, nasha obt, restylane 区别 | `restylane nasha obt` → nasha vs obt (English); 区别 empty | KEYWORD (weak): **Restylane 的 NASHA® 和 OBT™ 凝胶有什么区别？** |
| FAQ 2 "How does Restylane compare with other HA filler brands?" | 玻尿酸 品牌, restylane juvederm, restylane vs | `玻尿酸品牌比较` (2nd); `restylane juvederm 分别`; `restylane vs` → juvederm (English) | KEYWORD: **Restylane 和其他玻尿酸品牌比较起来怎样？** |
| FAQ 3 "Does Restylane hurt, and is anaesthetic used?" | restylane 痛吗, 打玻尿酸 痛吗, 玻尿酸 麻药 | brand form empty; `打玻尿酸痛吗` returns; `玻尿酸 麻药` → 含 麻药, 打 玻尿酸 麻药 | KEYWORD: **打 Restylane 痛吗？会用麻药吗？** The answer keeps the EN wording ("短暂的不适，而不是疼痛"); nothing says painless. |
| FAQ 4 "Can Restylane be used for the chin and jawline, or only for lines?" | restylane 下巴, restylane 下颚, 玻尿酸 下颚线 | `restylane 下巴` returns; `玻尿酸 下颚线` returns (dcard-mixed); 下颚 brand form empty | KEYWORD: **Restylane 可以打下巴和下颚线吗？还是只用于纹路？** |

**Chinese tally (14 logged strings):** 13 KEYWORD, 1 DIRECT (sections[5] and FAQ 1 weak).

**Not usable:** `瑞蓝` (CN brand name), `restylane 价钱 / 价格` (no price on the page), `玻尿酸品牌推荐` (a recommendation/superlative frame), `restylane skin booster / vital` (a different product line the EN doesn't cover).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Restylane" | restylane, restylane malaysia | `restylane malaysia` → **price malaysia** | KEYWORD (brand): **Restylane** |
| **seoTitle** | restylane malaysia, restylane filler, rawatan restylane | `restylane malaysia` returns; `restylane filler` → price, lips, under eyes (English); *rawatan restylane* empty | KEYWORD: **Rawatan Dermal Filler Restylane di Malaysia \| Kaiteki** (53 chars) |
| **seoDescription** | restylane nasha, restylane obt | both return (English, global) | KEYWORD: Restylane, filler asid hialuronik, NASHA®, OBT™, Kaiteki, konsultasi percuma (157 chars) |
| sections[0] "What is Restylane?" | apa itu restylane, restylane adalah | `apa itu restylane` returns; `restylane adalah` is ID | KEYWORD: **Apa itu Restylane?** |
| sections[1] "How NASHA® and OBT™ gel technologies differ" | restylane obt, nasha obt, beza restylane | English only (`restylane obt vs nasha`); `beza restylane` empty | DIRECT: **Bagaimana teknologi gel NASHA® dan OBT™ berbeza** |
| sections[2] "Can Restylane be reversed, and how long does it last?" | restylane tahan berapa lama, filler tahan berapa lama, restylane dissolve | brand Malay form empty; `filler tahan berapa lama` (MY); `restylane dissolve` English | KEYWORD (pattern): **Boleh ke Restylane dilarutkan, dan tahan berapa lama?** |
| sections[3] "Restylane or another HA filler: what actually differs?" | beza restylane, restylane vs, restylane juvederm beza | Malay forms empty; `restylane vs` English | DIRECT: **Restylane atau filler HA lain: apa sebenarnya bezanya?** |
| sections[4] "Does a wide range of gels mean Restylane suits everyone?" | filler sesuai untuk, restylane untuk | `restylane untuk` → untuk apa (lyft, skin booster); suitability forms empty | DIRECT: **Adakah pilihan gel yang banyak bermakna Restylane sesuai untuk semua orang?** |
| sections[5] "What happens at a Restylane appointment, and how much swelling follows?" | restylane bengkak, filler bengkak | brand form empty; `filler bengkak` returns (mixed MY/ID) | KEYWORD (partial): **Apa yang berlaku semasa sesi Restylane, dan sebanyak mana bengkak selepas itu?** |
| sections[6] "Which side effects after Restylane need reporting straight away?" | restylane kesan sampingan, kesan sampingan filler | brand form empty; `kesan sampingan filler` returns | KEYWORD: **Kesan sampingan Restylane yang mana perlu dilaporkan dengan segera?** |
| FAQ 1 "Difference between Restylane NASHA® and OBT™ gels?" | as sections[1] | English only | DIRECT: **Apa beza gel Restylane NASHA® dan OBT™?** |
| FAQ 2 "How does Restylane compare with other HA filler brands?" | restylane vs, jenama filler, filler jenama | `restylane vs` English; *jenama* forms empty | DIRECT: **Bagaimana Restylane dibandingkan dengan jenama filler asid hialuronik lain?** |
| FAQ 3 "Does Restylane hurt, and is anaesthetic used?" | restylane sakit, filler sakit, filler sakit tak, filler bius, filler kebas | `filler sakit` → *sakit ga, sakit gak* (ID); *sakit tak*, *bius*, *kebas* forms empty | DIRECT: **Sakit tak buat Restylane, dan adakah ubat bius digunakan?** |
| FAQ 4 "Can Restylane be used for the chin and jawline, or only for lines?" | restylane dagu, filler dagu, filler garis rahang | `restylane dagu` → **filler dagu restylane**; `filler garis rahang` returns | KEYWORD: **Boleh ke Restylane digunakan untuk dagu dan garis rahang, atau untuk garis muka sahaja?** |

**Malay tally (14 logged strings):** 8 KEYWORD, 6 DIRECT.

**Indonesian pollution seen and avoided:** `restylane adalah`, `filler sakit ga/gak`, `filler dagu butuh berapa cc`, `filler dagu bertahan berapa lama`. Never *harga restylane* bare.

## Terms carried over

Same table as `juvederm.md`, plus:

| EN | zh | ms | Source |
|---|---|---|---|
| stabilised (HA) | 经过稳定处理的 | distabilkan | new |
| particle sizing | 颗粒大小 | saiz zarah | new |
| rheological | 流变学 | reologi | new |
| expressive, mobile areas | 表情多、活动多的部位 | kawasan yang ekspresif dan banyak bergerak | new |
| bleeding tendency | 容易出血 | kecenderungan mudah berdarah | new |
| abnormal scars | 异常疤痕 | parut yang tidak normal | new |

## For the bilingual doctor-reviewer

1. **"Neither approach is better" / "Neither is superior"** are 没有谁比较好 / *Tiada satu pendekatan yang lebih baik* and *Tiada yang lebih unggul*. Both are negated comparisons, as in the EN.
2. **"Briefly uncomfortable rather than painful"** is 短暂的不适，而不是疼痛 / *rasa tidak selesa yang sekejap, bukan sakit*. It's the EN's own wording, not a painless claim; confirm it reads that way.
3. **NASHA® gloss (zh):** 非动物来源稳定玻尿酸. Confirm.
4. **区别 vs 分别:** Malaysian Chinese also search `restylane juvederm 分别`; copy keeps the standard 区别, as on the treatment page.
5. **L-03r warnings** (永久 / kekal) are negated ("不是永久的", "tidak kekal") or factual (permanent implant).
