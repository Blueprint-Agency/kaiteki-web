# 19. Concern keyword log: Aging (`/concerns/aging`)

**Date:** 2026-10-14 · Follows the method and format of the pilot, `acne.md`.
**Outputs:** `content/i18n/concerns/zh/aging.json`, `content/i18n/concerns/ms/aging.json` (same shape as the EN record).
**Inputs:** EN record for `aging`, `docs/18-trilingual-keyword-map.md` §5 (display names) and §7 (avoid list).

## Method

Same as the pilot (`acne.md` § Method): Google Autocomplete with `gl=my` (`hl=zh-CN` for Chinese, `hl=ms` for Malay) is the volume proxy. **HAS VOLUME** means a relevant suggestion with Malaysian context, or at least no Taiwan, HK or Indonesia skew. **NO VOLUME** means nothing relevant came back. **KEYWORD** means the string is phrased around the real query form, and the English meaning is kept. **DIRECT** means it is a faithful translation.

- **Probes:** 220 zh and 194 ms. That total includes the treatment-name probes logged in `_treatment-names.md` (about 80 per language). The raw dumps are in `C:/tmp/aging-ac-{zh,ms}.json` and are not in the repo.
- **Scope:** only search-relevant strings are logged. All body copy is a direct, faithful translation. No claims were added or strengthened.
- **No `seeDoctor.heading` in the source.** As on acne, the heading comes from `content/i18n/concern-ui.ts`.
- **Name:** docs/18 §5 already settled 抗衰老 / Anti-Penuaan, and autocomplete confirms both (below). `terms.ts` is unchanged.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Aging" | 抗衰老, 抗衰老医美, 抗老, 抗老化, 皮肤老化, 皮肤衰老 | `抗衰老` → 抗衰老产品, 抗衰老诊所, 抗衰老面霜消委会 (消委会 is a MY/HK signal); `抗衰老医美` and `抗衰老疗程` return themselves; `抗老` is product-led | KEYWORD: **抗衰老** (docs/18 §5 confirmed) |
| **seoTitle** "Skin Ageing & Anti-Ageing Treatment in Malaysia \| Kaiteki" | 抗衰老治疗, 抗衰老疗程, 皮肤老化治疗, 抗衰老 马来西亚, 抗衰老 吉隆坡, 抗衰老 新山 | `抗衰老疗程` returns itself; `皮肤老化` → 怎么办, 现象, 过程; 治疗 forms and every "+ city" form are empty | KEYWORD: **马来西亚皮肤老化与抗衰老疗程 \| Kaiteki** (24 chars). 马来西亚 kept for the EN geo intent, as on acne. |
| **seoDescription** | (same family) | as above | KEYWORD: uses 皮肤老化, 抗衰老疗程, 免费咨询 (76 chars) |
| sections[0].heading "What is skin ageing?" | 皮肤老化是什么, 什么是皮肤老化, 皮肤衰老是什么 | all empty; the head term `皮肤老化` is strong | DIRECT: **皮肤老化是什么？** (the head term has volume; the question form has none) |
| drivers.heading "What causes it" | 皮肤老化的原因, 皮肤衰老的原因, 皮肤老化原因, 衰老原因, 为什么皮肤会老化 | `皮肤老化的原因`, `皮肤衰老的原因` and `衰老原因` return themselves; `皮肤衰老` → 皮肤衰老的原因 | KEYWORD: **皮肤老化的原因** |
| jumpNav "What causes it" | as above | as above | KEYWORD: **老化原因** |
| variant.heading "Where you are on it" | 皮肤老化阶段, 皮肤衰老阶段, 衰老阶段, 皮肤老化程度, 抗衰老 分期, 皮肤老化过程, 脸部老化过程 | stage forms are empty; `皮肤老化过程` returns itself; `脸部老化` → 脸部老化过程, 特征, 现象 | KEYWORD: **皮肤老化过程：你处在哪个阶段？** |
| jumpNav "Where you are on it" | as above | stage forms empty | DIRECT: **老化阶段** |
| tab "Early" / "Early change" | 初老, 初老症状, 初老是几岁, 熟龄肌 | `初老` → 初老症状, 初老症, 初老是几岁 (some dcard and song noise); `熟龄肌` is product-led | KEYWORD: label **初老**, title **初期变化（初老）** |
| tab "Established" / "Established change" | 皮肤松弛, 脸部松弛, 下巴松弛 | `皮肤松弛` → 原因, 改善, 怎么办; `脸部松弛` → 医美, 怎么办 | KEYWORD (term): label **中期**, title **明显变化（开始松弛）** |
| tab "Advanced" / "Advanced change" | 皮肤松弛下垂, 脸部下垂, 脸部松弛下垂 | `脸部下垂` → 原因, 医美, 改善; `皮肤松弛下垂` returns itself | KEYWORD (term): label **后期**, title **后期变化（松弛下垂）** |
| locationBlock.heading "Where ageing shows first" | 老化 最先, 衰老 部位, 衰老 先从哪里, 脸部老化, 脸部老化 顺序 | "where first" forms are empty; `脸部老化` → 特征, 过程, 现象, 医美 | KEYWORD: **脸部老化：最先出现在哪里** |
| location cards (body, but checked) | 眼周老化, 眼周细纹, 苹果肌下垂, 面中凹陷, 法令纹, 木偶纹, 口周纹, 下颌线, 下巴松弛, 颈纹, 脖子老化, 手部老化 | all return; `眼周老化` → 医美, 原因; `面中凹陷` (dcard noise); `法令纹` and `木偶纹` strong; `下颌线模糊` empty | Terms used: 眼周, 面中与脸颊, 嘴巴周围, 下颌线与下半脸, 颈部、胸口与手部. 法令纹 and 木偶纹 are added as glosses in the card bodies (they name the EN "folds"). |
| jumpNav "Where it shows" | as above | no form for "where" | DIRECT: **老化部位** |
| jumpNav "Treatments" | 抗衰老疗程 | returns itself | DIRECT: **疗程** (same as acne) |
| jumpNav "Risks" | n/a | n/a | DIRECT: **风险** |
| jumpNav "Cost" | (docs/18: 价钱) | carried | KEYWORD (term choice): **价钱** |
| jumpNav "FAQ" | n/a | n/a | DIRECT: **常见问题** |
| compare.columns "Downtime" | (docs/18 §6) | carried | KEYWORD: **恢复期** |
| compare.columns other three | n/a | n/a | DIRECT: 你的情况 / 常考虑的疗程 / 一般疗程安排 |
| ctaMid.heading "Not sure what's actually changing?" | n/a (conversion copy) | n/a | DIRECT: 不确定皮肤到底哪里在变化？ |
| ctaHeading "Map what's actually changing" | n/a (conversion copy) | n/a | DIRECT: 让医生帮你看清楚变化在哪里 |
| FAQ 1 "Can skin ageing be prevented?" | 皮肤老化可以预防吗, 如何预防皮肤老化, 预防皮肤老化, 皮肤老化 预防, 防晒 抗老 | `如何预防皮肤老化` and `预防皮肤老化` return themselves; `防晒抗老` returns (product noise) | KEYWORD: **皮肤老化可以预防吗？要如何预防？** |
| FAQ 2 "What actually changes as skin ages?" | 皮肤老化现象, 脸部老化特征, 胶原蛋白流失 | `皮肤老化现象` returns; `脸部老化特征`; `胶原蛋白流失` → 怎么办, 症状, 年龄 | KEYWORD: **皮肤老化有哪些现象？到底改变了什么？** |
| FAQ 3 "At what age should I start treatment?" | 几岁开始抗衰老, 几岁开始做医美, 医美 几岁, 几岁开始抗老, 抗老 几岁开始, 初老是几岁 | `几岁开始做医美` returns; `医美几岁可以做`; `几岁开始抗老` (dcard) | KEYWORD: **几岁开始做医美抗衰老比较合适？** (the answer keeps "no medically correct age") |
| FAQ 4 "Does skincare make a real difference?" | 护肤品有用吗, 抗老保养品有用吗, 抗衰老护肤品, a醇 抗老 | `护肤品有用吗` returns; `抗衰老护肤品` → 推荐; 保养品 is the Taiwan word | KEYWORD: **抗老护肤品真的有用吗？** (护肤品, not 保养品) |
| FAQ 5 "How soon will I see a difference?" | 医美多久见效, hifu 多久见效, 抗衰老 效果 | only the treatment-level `hifu 多久 见效` | DIRECT: **多久能看到变化？** (见效 avoided, as on acne) |
| FAQ 6 "Will treatment make me look unnatural?" | 医美会不自然吗, 医美 不自然, 打针会僵吗, 玻尿酸 不自然, 医美打太多 | `医美 不自然`, `玻尿酸 不自然` and `医美打太多` return | KEYWORD: **做医美抗衰老会不会看起来不自然？** |
| FAQ 7 "How long do the effects last?" | 医美效果维持多久, 抗衰老 维持多久, hifu 维持多久, 玻尿酸 维持多久, 医美 维持多久 | generic forms are empty; `玻尿酸维持多久` and `hifu 维持多久` return (treatment level) | KEYWORD (pattern): **效果可以维持多久？** |
| FAQ 8 "Is laser treatment safe for Asian skin?" | 激光适合亚洲人吗, 激光反黑 | as on acne: `激光反黑` → 激光反黑怎么办 | KEYWORD: **亚洲人做激光安全吗？会反黑吗？** (the answer stays conditional) |
| FAQ 9 "Should I treat my neck and hands as well?" | 颈部 抗衰老, 手部 抗衰老, 颈部 医美, 手部 医美, 脖子老化, 颈纹 医美 | `颈部 医美` and `手部医美` return; `脖子老化` → 改善, 预防; `颈纹 医美` is TW/HK-skewed | KEYWORD: **颈部和手部也需要做抗老疗程吗？** |
| FAQ 10 "Intrinsic vs extrinsic ageing?" | 内源性老化, 外源性老化, 内源性老化和外源性老化, 光老化 | the intrinsic and extrinsic forms are empty; `光老化` → 光老化是什么, 原因, 防晒 | KEYWORD: **内源性老化和外源性老化（光老化）有什么区别？** (光老化 glosses the UV-led extrinsic part, which the answer explains) |
| FAQ 11 "Do I need to do all of this at once?" | 医美可以一起做吗, 医美疗程可以一起做吗, 医美 一次做完, 医美 疗程 搭配 | nothing | DIRECT: **这些疗程需要一次全部做吗？** |
| FAQ 12 "When isn't non-surgical treatment enough?" | 非手术拉皮, 非手术 提拉, 非手术拉提, 拉皮手术, 拉皮 医美, 拉皮手术马来西亚 | non-surgical forms are empty; `拉皮手术` → 费用, 后遗症 (dcard/ptt noise); `医美 拉皮 价钱` (a MY-style 价钱 form) | KEYWORD: **什么情况下非手术疗程不够，需要考虑拉皮手术？** (the answer only refers out for a surgical opinion, and Kaiteki is never called 整形) |

**Chinese tally (33 logged strings):** 22 KEYWORD, 11 DIRECT. The 2 CTA headings are counted as DIRECT. The location-card row is a body-term check and isn't counted.

**Not usable:** `抗衰老 马来西亚 / 吉隆坡 / 新山` and `拉皮手术马来西亚` are all empty. `抗衰老诊所` is Taiwan-led (高雄, 台北, 台中). Chinese ageing demand is phenomenon and age led (初老, 皮肤老化现象, 几岁开始做医美), not clinic led.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Aging" | anti penuaan, rawatan anti penuaan, anti aging, rawatan anti aging, klinik anti penuaan | `anti penuaan` → maksud, in english (it also returns *terbaik* and *dini*, which are ID or superlative); `rawatan anti penuaan` returns itself; `anti aging` → anti aging in malay | KEYWORD: **Anti-Penuaan** (docs/18 §5 confirmed) |
| **seoTitle** | penuaan kulit, rawatan anti penuaan, rawatan penuaan kulit, rawatan anti aging malaysia | `penuaan kulit` returns (with *wajah* and *jurnal* noise); `rawatan anti penuaan` returns; "+malaysia" is empty | KEYWORD: **Penuaan Kulit & Rawatan Anti-Penuaan di Malaysia \| Kaiteki** (58 chars) |
| **seoDescription** | (same family) + konsultasi percuma | as above | KEYWORD: penuaan kulit, anti-penuaan, doktor, konsultasi percuma (160 chars) |
| sections[0].heading "What is skin ageing?" | apa itu penuaan kulit, penuaan kulit adalah | `apa itu penuaan kulit` returns exactly | KEYWORD: **Apa itu penuaan kulit?** |
| drivers.heading "What causes it" | punca penuaan kulit, punca kulit cepat tua, kenapa kulit cepat tua, punca kulit kendur, muka cepat tua | `punca penuaan kulit` returns exactly; `punca kulit (muka) kendur`; `muka cepat tua` → kenapa, punca (MY) | KEYWORD: **Punca penuaan kulit** |
| jumpNav "What causes it" | as above | as above | KEYWORD: **Punca** |
| variant.heading "Where you are on it" | tahap penuaan kulit, peringkat penuaan kulit, tanda penuaan kulit | the stage forms are empty | DIRECT: **Tahap penuaan kulit: di mana anda sekarang?** |
| jumpNav "Where you are on it" | as above | as above | DIRECT: **Tahap penuaan** |
| tab "Early" | penuaan pramatang, penuaan kulit pramatang | `penuaan pramatang` → in english only | DIRECT: label **Awal**, title **Perubahan awal** |
| tab "Established" | kulit kendur, kulit muka kendur, muka kendur, rawatan muka kendur | `kulit muka kendur` → punca, rawatan untuk kulit muka kendur (MY); `muka kendur` → rawatan muka kendur | KEYWORD (term): label **Ketara**, title **Perubahan ketara (kulit mula kendur)** |
| tab "Advanced" | as above + rahang kendur, kulit leher kendur | `rahang kendur`, `kulit leher kendur` return | KEYWORD (term): label **Lanjut**, title **Perubahan lanjut (kulit kendur)** |
| locationBlock.heading "Where ageing shows first" | tanda penuaan, tanda penuaan muka, tanda penuaan pada muka, penuaan kulit muka | `tanda penuaan muka` returns itself and `tanda penuaan di muka` (MY *muka*); bare `tanda penuaan` is ID (*wajah, dini*) | KEYWORD: **Tanda penuaan muka: di mana ia muncul dahulu** |
| location cards (body, but checked) | garis halus bawah mata, kulit bawah mata kendur, pipi cengkung, muka cengkung, garis senyum, garis mulut, rahang kendur, dagu kendur, kulit leher kendur, leher berkedut, kedutan leher, kulit tangan berkedut | `garis halus bawah mata` and `pipi cengkung` are MY (*punca, rawatan*); `garis senyum` is ID-leaning; ⚠️ `kedutan leher` and `leher berkedut` mean **twitching** (primbon) | Terms used: *Sekitar mata, Tengah muka dan pipi, Sekitar mulut, Garis rahang…, Leher, dada dan tangan*. **berkedut / kedutan are not used for neck or hands.** *Kedutan* appears only as *kedutan muka* (one slide alt). |
| jumpNav "Where it shows" | as above | as above | KEYWORD: **Tanda penuaan** |
| jumpNav "Treatments" | (docs/18 §2.2) | carried | KEYWORD (term): **Rawatan** |
| jumpNav "Risks" | n/a | n/a | DIRECT: **Risiko** |
| jumpNav "Cost" | (acne: kos rawatan …) | carried | KEYWORD: **Kos** |
| jumpNav "FAQ" | n/a | n/a | DIRECT: **Soalan lazim** |
| compare.columns "Downtime" | (docs/18 §6) | carried | KEYWORD: **Downtime** |
| compare.columns other three | n/a | n/a | DIRECT: Masalah anda / Biasa dipertimbangkan / Kursus biasa |
| ctaMid.heading | n/a | n/a | DIRECT: Tak pasti apa sebenarnya yang berubah? |
| ctaHeading | n/a | n/a | DIRECT: Kenal pasti apa yang sebenarnya berubah |
| FAQ 1 "Can skin ageing be prevented?" | penuaan kulit boleh dicegah, cara cegah penuaan kulit, cara mencegah penuaan kulit, cegah penuaan, mencegah penuaan kulit, cara elak kulit cepat tua | `cegah penuaan` returns; `mencegah penuaan kulit` (ID-leaning *wajah, dini*); the *boleh* forms are empty | KEYWORD (partial: *cegah penuaan*): **Boleh ke penuaan kulit dicegah?** |
| FAQ 2 "What actually changes?" | tanda penuaan kulit, tanda penuaan muka | `tanda penuaan kulit` returns (with *wajah* noise) | KEYWORD: **Apa tanda penuaan kulit, dan apa sebenarnya yang berubah?** |
| FAQ 3 "At what age should I start?" | umur berapa mula anti aging, umur berapa perlu guna anti aging, umur berapa mula guna retinol, umur berapa buat rawatan muka, umur berapa mula skincare, retinol umur berapa | only `retinol umur berapa` → retinol start umur berapa (MY *start umur berapa*) | KEYWORD (pattern *umur berapa*): **Umur berapa patut mula rawatan anti-penuaan?** |
| FAQ 4 "Does skincare make a real difference?" | skincare anti aging, skincare anti aging berkesan ke, skincare berkesan ke, penjagaan kulit anti penuaan | `skincare anti aging` returns (and *terbaik*, *yang bagus*, which we don't use); *berkesan ke* is empty | KEYWORD: **Skincare anti-aging betul-betul berkesan ke?** |
| FAQ 5 "How soon will I see a difference?" | berapa lama nampak hasil, berapa lama nampak hasil hifu, hasil hifu | only ID forms (*infus whitening*, *hasil hifu terlihat*) | DIRECT: **Berapa lama baru nampak perubahan?** (same as acne) |
| FAQ 6 "Will treatment make me look unnatural?" | nampak tak natural, filler nampak tak natural, filler tak natural | nothing | DIRECT: **Adakah rawatan akan buat muka saya nampak tak natural?** |
| FAQ 7 "How long do the effects last?" | anti aging tahan berapa lama, hifu tahan berapa lama, filler tahan berapa lama, filler muka tahan berapa lama | `hifu tahan berapa lama` and `filler (muka) tahan berapa lama` are strong and MY | KEYWORD: **Kesannya tahan berapa lama?** |
| FAQ 8 "Is laser safe for Asian skin?" | laser kulit gelap, laser selamat ke | `laser kulit gelap` returns (as on acne) | KEYWORD: **Rawatan laser selamat ke untuk kulit Asia atau sawo matang?** (the answer begins *Ya, jika…*) |
| FAQ 9 "Treat neck and hands as well?" | rawatan leher, rawatan tangan, kulit leher kendur, kulit tangan berkedut | `rawatan leher/tangan` is medical (sakit, kebas); `kulit tangan berkedut` returns but is ambiguous (see the location row) | DIRECT: **Perlu ke rawat kulit leher dan tangan juga?** |
| FAQ 10 "Intrinsic vs extrinsic?" | penuaan intrinsik, penuaan ekstrinsik, penuaan intrinsik dan ekstrinsik, photoaging | `penuaan intrinsik dan ekstrinsik` returns exactly (academic, but the term is shared MY/ID) | KEYWORD: **Apa beza penuaan intrinsik dan ekstrinsik?** |
| FAQ 11 "Do all of this at once?" | n/a (no plausible form) | n/a | DIRECT: **Perlu ke buat semua rawatan ini sekali gus?** |
| FAQ 12 "When isn't non-surgical enough?" | tanpa pembedahan, tegang muka tanpa pembedahan, rawatan tegang muka tanpa pembedahan, facelift malaysia, pembedahan facelift | `tanpa pembedahan` → rawatan fibroid/tiroid/hernia tanpa pembedahan (a MY pattern, other conditions); `facelift malaysia` is English and car-heavy | KEYWORD (pattern *tanpa pembedahan*): **Bila rawatan tanpa pembedahan tidak lagi mencukupi?** |

**Malay tally (33 logged strings):** 21 KEYWORD, 12 DIRECT. CTA headings are counted as DIRECT. The location-card term row isn't counted.

**Indonesian pollution seen and avoided:** tanda penuaan dini (wajah), kulit kendur karena apa, perawatan kulit muka kendur, hasil hifu terlihat, hifu bisa tahan, klinik anti aging (Jakarta, Surabaya), and primbon "kedutan" (twitching) on every *kedutan/berkedut* + body-part form.

## For the bilingual doctor-reviewer

1. **初老** is the label for the Early tab. It's a Taiwan-born coinage, but AC shows it's widely used (初老症状, 初老是几岁). Please confirm it reads naturally to Malaysian Chinese readers. If not, use **初期**.
2. **拉皮手术** is used in zh FAQ 12 as the surgical referent, because people search for it. It's a referral only. Kaiteki is never described as doing surgery, and 整形/整容 are not used anywhere.
3. **Skin boosters in zh are 水光针** (docs/18 §5). The compare row and FAQ 5 use it.
4. **胶原蛋白刺激剂 / bio-stimulator** in the compare row. 童颜针 has heavy AC but is the street name for Sculptra, a named prescription device, so it's avoided, the same way docs/18 treats 瘦脸针.
5. **"Resurfacing laser" is 点阵激光 in zh** (treatments.ts says fractional CO2) and *Laser resurfacing* in ms.
6. **Permanence wording.** 永久 and *kekal* are kept out of the copy so they don't trip the lint. "Results are maintained rather than permanent" became 效果需要定期维持，不会一直保持 / *hasil perlu dikekalkan dengan penjagaan berkala dan tidak bertahan selama-lamanya*. Please confirm the nuance.
7. **"Surgical opinion"** is 外科手术意见 / *pendapat pakar bedah*. *Pakar bedah* is a real specialist (a referral), not a label for Kaiteki, so it's not the banned *pakar kulit* use.
8. **"Vascular occlusion"** is 血管栓塞 / *oklusi vaskular (saluran darah tersumbat)*.
9. **Sunscreen evidence line (FAQ 1).** "By a distance the most evidenced thing" is rendered as 证据最充分 … 远远超过其他方法 / *bukti paling kukuh, jauh mengatasi yang lain*. It's a statement about sunscreen, not about Kaiteki, and it's faithful to the EN, but please confirm it's acceptable under the superlative rule.
10. **Location card glosses (zh).** 法令纹 and 木偶纹 are added in brackets to name the EN "folds". They are strong AC terms and don't change the meaning.
