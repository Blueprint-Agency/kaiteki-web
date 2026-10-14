# 20. Treatment keyword log: Double Eyelid (`/treatments/double-eyelid`)

**Date:** 2026-10-14 · Treatment-page localisation round (format: `pico-laser.md`).
**Outputs:** `content/i18n/treatments/zh/double-eyelid.json`, `content/i18n/treatments/ms/double-eyelid.json` (same shape as the EN record). EN snapshot: `content/i18n/treatments/_en/double-eyelid.json`.
**Inputs:** EN record for `double-eyelid`, `docs/18-trilingual-keyword-map.md` §5 and §7, `docs/19-concern-keywords/_treatment-names.md`, `content/i18n/terms.ts`. No translated concern page discusses this treatment; the ms `dark-eye-circles` page supplied *kelopak mata* and *pembedahan kelopak mata*.

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`. HAS VOLUME / NO VOLUME read as in `pico-laser.md`.
- **Decision:** KEYWORD = phrased around the real query form, English meaning kept. DIRECT = faithful translation.
- **Probes:** 63 zh and 65 ms. Raw dumps: `C:/tmp/msde-ac-zh.json`, `C:/tmp/msde-ac-ms.json` (shared with the muscle-stimulation log; not in the repo).
- **Scope:** seoTitle, seoDescription, name, the six section headings and the four FAQ questions. The record has no jumpNav, routes or ctaMid. Step labels and all body copy are direct translations.
- **This page is surgical, and says so.** The EN calls it "a surgical procedure", so 手术 / *pembedahan* are used. 整形 / 整容 are not used: the EN never contrasts the procedure with plastic surgery. The suture method is never called non-surgical or 免开刀 / *tanpa pembedahan*: the EN only says "without a continuous incision" (没有连续的切口 / *tanpa hirisan yang berterusan*).
- **Untranslated by design:** `slug`, `src`, `reviewedBy`, `lastReviewed`, top-level `category`. *Diabetes* is the same word in Malay.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Double Eyelid" | 双眼皮, 双眼皮手术, 割双眼皮 | `双眼皮` → 双眼皮贴, 双眼皮手术, 双眼皮手术价格, 双眼皮类型 | KEYWORD: **双眼皮** (terms.ts; 手术 kept out of the name, per `_treatment-names.md`) |
| **seoTitle** "Double Eyelid Surgery Malaysia \| Crease Procedure \| Kaiteki" | 双眼皮手术 马来西亚, 割双眼皮马来西亚, 埋线双眼皮 价格 马来西亚 | `双眼皮手术` → 价格, 恢复时间, 后遗症, 恢复期 (strong); "+马来西亚" forms empty except `埋线双眼皮价格马来西亚` | KEYWORD: **马来西亚双眼皮手术 \| 眼皮褶痕塑造 \| Kaiteki** (28 chars). 马来西亚 kept from the EN geo intent. |
| **seoDescription** | (same family) | as above | KEYWORD: 双眼皮手术, 上眼皮褶痕, 免费咨询 (from the EN), 医生 (78 chars) |
| sections[0] "What is double-eyelid treatment?" | 什么是双眼皮, 双眼皮是什么, 双眼皮手术 | `什么是双眼皮` and `双眼皮是什么` return; `双眼皮手术` strong | KEYWORD: **什么是双眼皮手术？** (the EN body says it is a surgical procedure) |
| sections[1] "Methods: suture and incisional" | 埋线双眼皮, 全切双眼皮, 切开双眼皮, 切开式双眼皮, 埋线和全切的区别, 双眼皮类型, 双眼皮手术方法 | `埋线双眼皮` → 过程, 恢复期, 需要拆线吗, **价格马来西亚**; `全切双眼皮` → 恢复过程; `切开双眼皮` and the 区别 forms empty; `双眼皮类型` is about eyelid shapes (内双/外双), not methods | KEYWORD: **两种方法：埋线双眼皮与全切双眼皮**. Body says 缝线（埋线）法 and 切开（全切）法. |
| sections[2] "Who should not have a double-eyelid procedure?" | 双眼皮 适合什么人, 双眼皮手术 适合什么人, 谁不适合割双眼皮, 双眼皮 禁忌, 双眼皮 干眼症 | all empty except `双眼皮 干眼症` (itself) | DIRECT: **哪些人不适合做双眼皮手术？** |
| sections[3] "How long is recovery after double-eyelid surgery?" | 双眼皮 恢复期, 双眼皮手术 恢复期, 割双眼皮 恢复期, 双眼皮 多久消肿 | `双眼皮恢复期多久` (1st); `双眼皮手术恢复期`; `割双眼皮恢复期多久`; `双眼皮多久消肿` | KEYWORD: **双眼皮手术恢复期多久？** |
| sections[4] "What are the risks of a double-eyelid procedure?" | 双眼皮手术 风险, 双眼皮手术 副作用, 双眼皮 后遗症, 割双眼皮 后遗症, 双眼皮手术 失败, 双眼皮 不对称 | `双眼皮手术风险` returns; `割双眼皮后遗症` (+ptt); `双眼皮不对称` (+dcard) | KEYWORD: **双眼皮手术有什么风险？** 后遗症 not used: it implies lasting harm the EN doesn't describe. |
| sections[5] "What affects the cost of double-eyelid surgery?" | 双眼皮手术价钱, 双眼皮 价钱, 割双眼皮 价钱, 双眼皮手术 多少钱, 双眼皮 费用, 双眼皮手术价格 | `双眼皮手术价钱` returns (+香港); `双眼皮 价钱`; `双眼皮手术多少钱`; `双眼皮费用` | KEYWORD: **双眼皮手术的价钱受什么影响？** (价钱 per docs/18 §6) |
| FAQ 1 "How long does recovery take?" | 割双眼皮 恢复期, 割双眼皮恢复期多久 | `割双眼皮` → 费用, 手术, 后遗症, **恢复期**, 多少钱; `割双眼皮恢复期多久` | KEYWORD: **割双眼皮恢复期多久？** (割双眼皮 is the colloquial form; different from the section heading on purpose) |
| FAQ 2 "How long do the results last?" | 双眼皮 维持多久, 双眼皮手术 维持多久, 埋线双眼皮 维持多久, 双眼皮 会掉吗 | all empty | DIRECT: **双眼皮可以维持多久？** |
| FAQ 3 "Am I suitable?" | as sections[2] | empty | DIRECT: **我适合做双眼皮手术吗？** |
| FAQ 4 "Does the procedure hurt?" | 双眼皮 痛吗, 割双眼皮 痛吗, 双眼皮手术 痛吗, 双眼皮 麻醉 | only `割双眼皮痛吗` returns; `双眼皮 麻醉` itself | KEYWORD: **割双眼皮痛吗？** (no 无痛; answer: local anaesthetic, tightness while healing) |

**Chinese tally (13 logged strings):** 10 KEYWORD, 3 DIRECT.

**Not usable:** `双眼皮贴` (tape, a product); `双眼皮吊顶` (ceiling fixture); `双眼皮类型` (eyelid shapes); `内双` (shape, not treatment); `双眼皮手术dcard`, `双眼皮手术推荐` (TW, and 推荐 is a ranking); every "+香港 / 韩国 / 养和" price form.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Double Eyelid" | double eyelid, double eyelid malaysia, kelopak mata tunggal, lipatan kelopak mata, mata sepet | `double eyelid malaysia` → surgery, suture, cost, review (strong); `kelopak mata tunggal` → *ganda, perbedaan* (ID); `lipatan kelopak mata` → *beda sebelah, bayi* (ID) | KEYWORD: **Double Eyelid** (terms.ts; English is what Malaysians type) |
| **seoTitle** | double eyelid malaysia, double eyelid surgery malaysia, pembedahan double eyelid, pembedahan kelopak mata, pembedahan kelopak mata malaysia | `double eyelid malaysia` strong; `pembedahan kelopak mata` → **kos pembedahan kelopak mata** (MY); `pembedahan double eyelid` empty | KEYWORD: **Double Eyelid Malaysia \| Pembedahan Kelopak Mata \| Kaiteki** (58 chars). "Surgery" and "Crease Procedure" are carried by *pembedahan kelopak mata*; *di* dropped to fit 60 (the AC form has no *di*). |
| **seoDescription** | (same family) | as above | KEYWORD: double eyelid di Malaysia, lipatan kelopak mata, konsultasi percuma, doktor (160 chars) |
| sections[0] "What is double-eyelid treatment?" | apa itu double eyelid | → apa itu double eyelid surgery, apa itu monolid dan double eyelid | KEYWORD: **Apa itu rawatan double eyelid?** |
| sections[1] "Methods: suture and incisional" | jenis double eyelid, double eyelid kaedah, double eyelid jahitan, double eyelid jahit, double eyelid suture, double eyelid incision, double eyelid suture vs incision | `double eyelid jenis` → **jenis double eyelid**; `double eyelid suture` → method, recovery, malaysia; `double eyelid incision` → method, recovery; `double eyelid surgery suture vs incision`; Malay *jahitan* / *kaedah* forms empty | KEYWORD: **Jenis double eyelid: kaedah jahitan (suture) dan hirisan (incision)** |
| sections[2] "Who should not have…?" | double eyelid sesuai, double eyelid sesuai untuk siapa, siapa tidak sesuai double eyelid, double eyelid surgery dry eye | Malay forms empty; `double eyelid surgery dry eyes` (English) | DIRECT: **Siapa yang tidak sesuai menjalani prosedur double eyelid?** |
| sections[3] "How long is recovery…?" | double eyelid berapa lama sembuh, double eyelid bengkak berapa lama, pembedahan kelopak mata berapa lama sembuh, double eyelid recovery time | Malay forms empty; `double eyelid recovery time` strong but English | DIRECT: **Berapa lama tempoh pemulihan selepas pembedahan double eyelid?** |
| sections[4] "What are the risks…?" | double eyelid risiko, double eyelid kesan sampingan, pembedahan kelopak mata risiko, double eyelid surgery risk | Malay forms empty; `double eyelid surgery risks` (English) | DIRECT: **Apa risiko prosedur double eyelid?** |
| sections[5] "What affects the cost…?" | kos double eyelid, kos double eyelid malaysia, harga double eyelid di malaysia, kos pembedahan kelopak mata, double eyelid surgery malaysia cost, harga double eyelid | `kos pembedahan kelopak mata` returns (MY *kos*); `double eyelid surgery malaysia cost`; `harga double eyelid` → *operasi, sulam* (ID) | KEYWORD: **Apa yang mempengaruhi kos pembedahan double eyelid?** (*kos*, not bare *harga*) |
| FAQ 1 "How long does recovery take?" | as sections[3] | Malay forms empty | DIRECT: **Berapa lama nak pulih selepas rawatan double eyelid?** |
| FAQ 2 "How long do the results last?" | double eyelid tahan berapa lama, double eyelid tahan, double eyelid kekal | `double eyelid tahan` → **double eyelid tahan berapa lama** (MY); `double eyelid kekal` empty | KEYWORD: **Double eyelid tahan berapa lama?** (no *kekal*; answer: no duration can be promised) |
| FAQ 3 "Am I suitable?" | as sections[2] | empty | DIRECT: **Saya sesuai ke buat rawatan double eyelid?** |
| FAQ 4 "Does the procedure hurt?" | double eyelid sakit, double eyelid sakit tak, double eyelid surgery sakit, pembedahan kelopak mata sakit | all empty | DIRECT: **Prosedur ini sakit tak?** |

**Malay tally (13 logged strings):** 7 KEYWORD, 6 DIRECT.

**Indonesian pollution seen and avoided:** *kelopak mata tunggal dan ganda / perbedaan / adalah*, *lipatan kelopak mata beda sebelah*, *harga operasi double eyelid*, *harga sulam double eyelid*. *Hukum double eyelid* came back empty.

## Terms used

| EN | zh | ms |
|---|---|---|
| suture (embedding) method | 缝线（埋线）法 / 埋线法 | kaedah jahitan (suture/embedding) |
| incisional method | 切开（全切）法 | kaedah hirisan (incisional) |
| upper-eyelid crease | 上眼皮褶痕 | lipatan kelopak mata atas |
| single eyelid | 单眼皮 | kelopak mata tunggal (single eyelid) |
| local anaesthetic / not sedated | 局部麻醉 / 没有使用镇静 | ubat bius setempat / tidak diberi ubat penenang |
| review appointment | 复诊 | sesi semakan susulan (not *temujanji*) |
| dry eye | 干眼症 | mata kering |

## For the bilingual doctor-reviewer

1. **Incisional = 全切?** The EN describes an incision along the whole intended crease line, so 切开（全切）法 is used. If Kaiteki also does partial-incision (小切口) techniques under "incisional", drop 全切 from the heading and body.
2. **割双眼皮** (literally "cut double eyelid") is used in two zh FAQ questions because it's how Malaysians search for any double-eyelid surgery, including the suture method. Confirm it doesn't read as incisional-only.
3. **Suture method body copy** keeps the EN wording: "small access points … without a continuous incision" (几个很小的入口……没有连续的切口 / *beberapa titik masuk kecil … tanpa hirisan yang berterusan*). Neither locale calls it non-surgical or 免开刀.
4. **The EN step 2 has an em-dash**; both locales use a colon instead (house voice).
5. **No duration is promised:** 无法承诺 / *tiada tempoh yang boleh dijanjikan*. 后遗症 (strong AC) was not used as the risks heading because it implies lasting complications the EN doesn't list.
6. **"Reducing the effort of achieving a crease with eye make-up"** is 减少每天用眼妆做出褶痕的麻烦 / *mengurangkan usaha membentuk lipatan dengan solekan mata*. 双眼皮贴 (eyelid tape) has big demand but isn't make-up and isn't in the EN, so it isn't added.
