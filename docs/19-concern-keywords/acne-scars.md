# 19. Concern keyword log: Acne scars (`/concerns/acne-scars`)

**Date:** 2026-10-14 · Follows the pilot format in `acne.md`.
**Outputs:** `content/i18n/concerns/zh/acne-scars.json`, `content/i18n/concerns/ms/acne-scars.json` (same shape as the EN record).
**Inputs:** EN record for `acne-scars`, `docs/18-trilingual-keyword-map.md` §5 (display names) and §7 (avoid list), the pilot outputs for `acne`.

## Method

Same as the pilot (`acne.md`): Google Autocomplete as the volume proxy (`client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`); KEYWORD = phrased around a real Malaysian query form with the EN meaning kept; DIRECT = faithful translation.

- **Probes:** about 85 zh and 60 ms for this page (run in the same batches as `melasma`). Raw dumps are in the session scratchpad, not the repo.
- **Scope:** seoTitle, seoDescription, name, section headings, drivers.heading, variant heading and tab labels/titles, compare columns, CTA headings, FAQ questions. Body copy is a direct, faithful translation.
- **Not in this record:** `jumpNav`, `locationBlock` and `seeDoctor.heading` are absent from the EN record, so nothing is logged for them. Shared H2s come from `concern-ui.ts`.
- **"Permanent scarring"** is rendered 难以逆转的疤痕 / *parut yang sukar dipulihkan*, as in the pilot.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Acne Scars" | 痘疤, 痘坑, 痘疤与痘坑 | `痘疤` → 痘疤怎么消除, 痘疤修复, 痘疤有救吗, 痘疤类型; `痘坑` → 痘坑怎么修复, 痘坑能修复吗, 痘坑治疗; the compound returns nothing | KEYWORD: **痘疤与痘坑** (docs/18 §5 name; both halves have strong AC) |
| **seoTitle** "Acne Scar Treatment in Malaysia \| Kaiteki" | 痘疤治疗, 痘坑治疗, 痘疤激光, 痘坑激光, 痘疤 马来西亚 | `痘疤治疗` → 费用, 治疗方式 (plus dcard/ptt/台北 noise); `痘坑治疗` returns itself; laser and "+马来西亚" forms empty | KEYWORD: **马来西亚痘疤与痘坑治疗 \| Kaiteki** (21 chars) |
| **seoDescription** | (same family) | as above | KEYWORD: 冰锥型/箱型/滚动型/凸起型, 痘疤和痘坑, 免费咨询 (78 chars) |
| sections[0].heading "What are acne scars?" | 痘疤是什么, 什么是痘疤, 痘坑是什么 | `痘疤是什么` and `什么是痘疤` return themselves; `痘坑是什么` empty | KEYWORD: **痘疤是什么？** |
| drivers.heading "What makes acne more likely to scar" | 痘疤形成原因, 痘疤成因, 为什么会留痘疤, 为什么会有痘坑, 痘坑形成原因 | `痘疤形成原因` and `为什么会有痘坑` return; the rest are empty | KEYWORD: **痘疤形成原因：哪些暗疮更容易留疤** |
| variant.heading "Which kind of scar do I have?" | 痘疤类型, 痘坑类型, 痘疤种类 | all three return themselves; `痘疤类型` is also in the `痘疤` top list | KEYWORD: **痘疤类型：我属于哪一种？** |
| tab "Depressed" / "Depressed scars" | 凹陷型痘疤, 凹洞 | `凹陷型痘疤` → 凹陷型痘疤 治疗, 医美 (some traditional-script TW noise); `凹洞` → 凹洞痘疤, 凹洞会慢慢修复吗 (dcard/ptt) | KEYWORD: **凹陷型** / **凹陷型痘疤（痘坑）** |
| tab "Raised" / "Raised scars (hypertrophic or keloid)" | 增生性疤痕, 蟹足肿, 凸起的疤痕 | `增生性疤痕` → 会自己消吗, 治疗, 增生性疤痕 蟹足肿; `蟹足肿` → 是什么, 治疗, 怎么消除; `凸起的疤痕` returns itself | KEYWORD: **凸起型** / **凸起型疤痕（增生性疤痕或蟹足肿）** |
| tab "Marks" / "Marks, not scars" | 痘印, 痘印和痘疤的区别 | `痘印` → 痘印怎么消, 痘印怎么去除, 痘印会自己消失吗 | KEYWORD: **痘印** / **是痘印，不是痘疤** |
| sub-type leads + illustration labels (body, but checked) | 冰锥型痘疤, 箱型痘疤, 滚动型痘疤, 冰锥 | all return; `冰锥` → 冰锥型痘坑, 冰锥型痘疤 | Terms used: 冰锥型, 箱型, 滚动型, 凸起型疤痕 (same as the acne pilot) |
| compare.columns "Downtime" | (docs/18 §6: 医美恢复期, 皮秒恢复期多久) | carried from docs/18; `痘疤 恢复期` empty | KEYWORD: **恢复期** |
| compare.columns other three | n/a | n/a | DIRECT: 你的情况 / 常考虑的疗程 / 一般疗程安排 (matches pilot) |
| ctaMid.heading "Not sure whether it's a scar or a mark?" | n/a (conversion copy) | n/a | DIRECT: 分不清是痘疤还是痘印？ |
| ctaHeading "Find out which scars you have" | n/a (conversion copy) | n/a | DIRECT: 了解你有哪几种痘疤 |
| FAQ 1 "Can acne scars be removed completely?" | 痘疤可以完全消除吗, 痘疤能去掉吗, 痘疤可以消除吗, 痘疤怎么消除, 痘坑可以完全修复吗 | `痘疤可以消除吗` and `痘疤怎么消除` return; the "完全" forms are empty | KEYWORD: **痘疤可以消除吗？能完全去掉吗？** (the answer says 很少能完全抹去) |
| FAQ 2 "Difference between acne scars and acne marks?" | 痘印和痘疤的区别 | returns exactly | KEYWORD: **痘印和痘疤有什么区别？** |
| FAQ 3 "Is pico laser used for acne scars?" | 皮秒 痘疤, 皮秒可以去痘疤吗, 皮秒 痘坑, 皮秒 痘印 | `皮秒 痘疤` → 几次, 效果 (ptt/dcard noise too); `皮秒 痘坑`, `皮秒 痘印` return | KEYWORD: **皮秒激光可以处理痘疤吗？** |
| FAQ 4 "Can ice pick scars be treated?" | 冰锥型痘疤, 冰锥型痘疤可以治疗吗, 冰锥型痘疤治疗 | only the bare term returns | KEYWORD (term): **冰锥型痘疤可以治疗吗？** |
| FAQ 5 "Can I treat my scars while I still have active acne?" | 还在长痘可以做激光吗, 长痘可以做激光吗, 有暗疮可以做痘疤吗, 痘疤 长痘 | nothing | DIRECT: **还在长暗疮，可以先治疗痘疤吗？** |
| FAQ 6 "How many sessions do acne scars need?" | 痘疤要做几次, 痘坑要做几次, 痘疤激光几次, 痘疤 几次 | only `皮秒 痘疤 几次` comes back | KEYWORD (partial): **痘疤需要做几次疗程？** |
| FAQ 7 "How soon will I see a difference in my scars?" | 痘疤多久见效, 痘坑多久见效, 痘疤多久消失 | `痘疤多久消失` returns, but it asks when scars *disappear*, which the answer does not promise | DIRECT: **痘疤多久能看到变化？** (多久消失 and 见效 avoided on purpose) |
| FAQ 8 "Is laser treatment for acne scars safe on Asian skin?" | 痘疤激光 亚洲人, 痘疤 亚洲, 激光反黑 | skin-tone forms empty; `激光反黑` → 激光反黑怎么办 | KEYWORD: **亚洲人的皮肤做痘疤激光安全吗？会反黑吗？** (answer stays conditional, as in the pilot) |
| FAQ 9 "What is the downtime after acne scar treatment?" | 痘疤激光恢复期, 痘坑恢复期, 射频微针恢复期, 痘疤 恢复期 | all empty; 恢复期 carried from docs/18 §6 | KEYWORD (term): **痘疤疗程的恢复期要多久？** |
| FAQ 10 "Is acne scar treatment painful?" | 痘疤激光痛吗, 痘坑激光痛吗, 射频微针痛吗, 痘疤 痛 | nothing | DIRECT: **痘疤疗程会痛吗？** (no 无痛) |
| FAQ 11 "Can acne scars on the back or chest be treated?" | 背部痘疤, 背部痘坑, 胸口痘疤, 背部痘印, 痘疤 背 | `背部痘疤` → 怎么消, 消除 (dcard/雷射 noise); `胸口痘疤` → 消除; `背部痘印` returns | KEYWORD: **背部、胸口的痘疤可以治疗吗？** |
| FAQ 12 "Can new acne still scar after treatment?" | 新的痘痘会留疤吗, 痘疤 复发, 治疗后还会长痘吗, 痘疤治疗后会复发吗 | nothing | DIRECT: **治疗后，新长的暗疮还会留疤吗？** |

**Chinese tally (25 logged strings):** 18 KEYWORD, 7 DIRECT. CTA headings counted as DIRECT; the sub-type term row isn't counted.

**Not usable:** every "+马来西亚" form, `痘疤激光`, `痘坑激光`, `CO2激光 痘疤`, `点阵激光 痘疤`, `射频微针 痘疤`, `黄金微针 痘坑`, and all price forms (`痘疤价钱`, `痘坑价钱`). `痘疤 价格` returns, but only with 雷射 / 异体真皮 / 真皮移植 (TW clinic terms).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Acne Scars" | parut jerawat | → hitam, berlubang, badan, merah, timbul, boleh hilang ke, belakang badan | KEYWORD: **Parut Jerawat** (docs/18 §5) |
| **seoTitle** | rawatan parut jerawat, rawatan parut jerawat malaysia | `rawatan parut jerawat` → berlubang, kos rawatan parut jerawat, rawatan laser parut jerawat; "+malaysia" empty | KEYWORD: **Rawatan Parut Jerawat di Malaysia \| Kaiteki** (43 chars) |
| **seoDescription** | parut jerawat ice pick, boxcar, parut timbul, konsultasi percuma (docs/18) | see rows below | KEYWORD: ice pick, boxcar, rolling, timbul, konsultasi percuma (157 chars) |
| sections[0].heading "What are acne scars?" | apa itu parut jerawat | returns itself | KEYWORD: **Apa itu parut jerawat?** |
| drivers.heading "What makes acne more likely to scar" | punca parut jerawat, kenapa jerawat meninggalkan parut, sebab parut jerawat | `punca parut jerawat` → hitam, berlubang, susah hilang; others empty | KEYWORD: **Punca parut jerawat: apa yang meningkatkan risikonya** |
| variant.heading "Which kind of scar do I have?" | jenis parut jerawat, jenis parut jerawat berlubang | `jenis parut jerawat` returns | KEYWORD: **Jenis parut jerawat: yang mana satu anda alami?** |
| tab "Depressed" / "Depressed scars" | parut jerawat berlubang | strong: → rawatan, hilangkan, punca, ubat parut jerawat berlubang | KEYWORD: **Berlubang** / **Parut jerawat berlubang** |
| tab "Raised" / "Raised scars (hypertrophic or keloid)" | parut timbul, parut keloid, keloid | `parut timbul` → boleh hilang ke, di muka, parut jerawat timbul; `parut keloid` → di muka, di dada | KEYWORD: **Timbul** / **Parut timbul (hipertrofik atau keloid)** |
| tab "Marks" / "Marks, not scars" | kesan jerawat, parut jerawat hitam, parut jerawat merah | `kesan jerawat` → di muka, hitam, kesan parut jerawat; `parut jerawat hitam/merah` strong but uses *parut* for flat marks (see pilot note 6) | KEYWORD: **Kesan jerawat** / **Kesan jerawat, bukan parut** |
| sub-type leads + illustration labels | parut jerawat ice pick, parut jerawat boxcar, parut jerawat rolling, parut ice pick | `ice pick` and `boxcar` forms return; `rolling` empty | English terms kept (**Ice pick, Boxcar, Rolling**), as in the pilot |
| compare.columns "Downtime" | downtime rf microneedling | returns (English-led); docs/18 §6 `pico laser ada downtime` | KEYWORD: **Downtime** |
| compare.columns other three | n/a | n/a | DIRECT: Masalah anda / Biasa dipertimbangkan / Kursus biasa |
| ctaMid.heading | n/a | n/a | DIRECT: Tak pasti sama ada itu parut atau kesan jerawat? |
| ctaHeading | n/a | n/a | DIRECT: Ketahui jenis parut yang anda ada |
| FAQ 1 "Can acne scars be removed completely?" | parut jerawat boleh hilang ke, parut jerawat boleh hilang sepenuhnya | the first returns (and is in the `parut jerawat` top list); the second is empty | KEYWORD: **Parut jerawat boleh hilang ke sama sekali?** (*hilang sepenuhnya* is a banned form; answer says *jarang dapat dipadam sama sekali*) |
| FAQ 2 "Difference between acne scars and acne marks?" | beza parut jerawat dan kesan jerawat | nothing | DIRECT: **Apa beza parut jerawat dan kesan jerawat?** |
| FAQ 3 "Is pico laser used for acne scars?" | pico laser parut jerawat, pico laser untuk parut jerawat, pico laser | concern forms empty; `pico laser` → untuk apa, scar before and after (English) | DIRECT: **Adakah pico laser digunakan untuk parut jerawat?** |
| FAQ 4 "Can ice pick scars be treated?" | parut jerawat ice pick, ice pick boleh hilang ke | the first returns | KEYWORD (term): **Parut jerawat ice pick boleh dirawat ke?** |
| FAQ 5 "Treat scars while acne is active?" | boleh rawat parut jerawat masa ada jerawat | nothing | DIRECT: **Boleh ke rawat parut semasa masih ada jerawat aktif?** |
| FAQ 6 "How many sessions?" | berapa sesi rawatan parut jerawat | nothing | DIRECT: **Parut jerawat perlu berapa sesi rawatan?** |
| FAQ 7 "How soon will I see a difference?" | berapa lama nampak hasil rawatan parut jerawat | nothing | DIRECT: **Berapa lama baru nampak perubahan pada parut?** |
| FAQ 8 "Safe on Asian skin?" | laser parut jerawat, laser parut jerawat selamat ke, laser kulit gelap | `laser parut jerawat` strong (harga, kos, rawatan); `laser kulit gelap` returns; "selamat ke" empty | KEYWORD: **Rawatan laser parut jerawat selamat ke untuk kulit Asia atau sawo matang?** (answer stays conditional) |
| FAQ 9 "Downtime?" | downtime laser parut jerawat, downtime rf microneedling | the RF form returns | KEYWORD (term): **Berapa lama downtime selepas rawatan parut jerawat?** |
| FAQ 10 "Painful?" | rawatan parut jerawat sakit ke, laser parut jerawat sakit | nothing | DIRECT: **Rawatan parut jerawat sakit ke?** |
| FAQ 11 "Back or chest?" | parut jerawat belakang, parut jerawat di belakang badan, parut jerawat dada, parut jerawat badan | `parut jerawat belakang badan` is in the `parut jerawat` top list; `parut jerawat badan` strong; `dada` empty | KEYWORD: **Parut jerawat di belakang badan atau dada boleh dirawat ke?** |
| FAQ 12 "Can new acne still scar after treatment?" | jerawat datang balik selepas rawatan, jerawat berulang | `jerawat berulang` → di dagu, ditempat yang sama | KEYWORD: **Jerawat boleh berulang dan meninggalkan parut baru selepas rawatan?** |

**Malay tally (25 logged strings):** 16 KEYWORD, 9 DIRECT. CTA headings counted as DIRECT; the sub-type row isn't counted.

**Indonesian / off-market pollution seen and avoided:** `harga rawatan parut jerawat` (empty), *bekas jerawat*, *bopeng*. `cara hilangkan parut jerawat …` is strong but home-remedy led (*tradisional, dalam masa seminggu*), and promises removal, so it was not used.

## For the bilingual doctor-reviewer

1. **FAQ 1 question wording.** zh 痘疤可以消除吗？能完全去掉吗？ and ms *Parut jerawat boleh hilang ke sama sekali?* echo how people ask. Both answers open with "often improved, rarely erased". Please confirm the question form doesn't read as an implied promise.
2. **痘坑 in the tab title** (凹陷型痘疤（痘坑）) is the colloquial gloss for depressed scars, matching the docs/18 name. Confirm it's acceptable as a clinical gloss.
3. **"Bronzing" after CO2** is rendered 皮肤会变深色 / *kulit menjadi gelap*. Confirm this won't be read as PIH.
4. **"Topical numbing cream"** is 表面麻醉膏 / *krim kebas*.
5. **Pico fractional lens claim:** kept as 制造商标示 / *ditetapkan oleh pengeluar*, the manufacturer's indication only, for skin types I to IV, as in EN.
6. **Exosome therapy** stays 再生疗法 / *pendekatan regeneratif* (no 外泌体), as in the pilot. Same regulatory check applies.
7. **FAQ 12 (ms)** is phrased around *jerawat berulang* ("can acne recur and leave new scars"), slightly broader than EN "can new acne still scar". The answer is unchanged.

## Re-sync 2026-10-14 (English rewrite)

The English page was rewritten upstream; the sync tool kept every unchanged translation and blanked 27 strings per locale. **None is search-relevant** (no seoTitle, seoDescription, name, heading, tab title, compare column, FAQ question or jumpNav blank), so no probes were needed and all are DIRECT.

### Chinese

| English | Probes | Evidence | Decision |
|---|---|---|---|
| (no search-relevant blanks) | n/a | n/a | n/a |

**Body blanks translated directly:** 27 (banner alt, fact 3, section 1 body, driver 2 lead and body, depressed and marks tab bodies, seeDoctor intro, treatments intro and note, compare intro, first-visit intro and step 3, risks 2 and 4, cost intro, 9 FAQ answers).

### Malay

| English | Probes | Evidence | Decision |
|---|---|---|---|
| (no search-relevant blanks) | n/a | n/a | n/a |

**Body blanks translated directly:** 27 (same set as Chinese).

### Reviewer notes

1. Driver 2 "permanent change" is 难以逆转的改变 / *perubahan yang sukar dipulihkan*, as in the pilot.
2. Risk 4 keeps "rarely erased" and "ice pick scars rarely resolve with energy devices alone" as negated forms: 很少能完全抹去 / 很少能完全改善, *jarang dapat dipadam sama sekali* / *jarang pulih sepenuhnya*.
3. Step 3 "with no obligation to proceed" is 你没有义务一定要进行疗程 / *tanpa sebarang kewajipan untuk meneruskan*, matching acne.
