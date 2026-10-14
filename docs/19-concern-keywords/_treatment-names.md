# 19. Treatment and category display names (zh / ms)

**Date:** 2026-10-14 · Proposed localized names for all 19 treatments and 8 categories. They show on every concern page (as treatment cards and links), in the header and in the footer.
**Status:** proposal. `content/i18n/terms.ts` is **not** edited; the lead merges.
**Method:** same as `acne.md` (Google Autocomplete, `gl=my`, `hl=zh-CN` / `hl=ms`; KEYWORD = a real query form is used, DIRECT = faithful translation). The raw dumps are in `C:/tmp/aging-ac-{zh,ms}.json`. Where docs/18 §5 already settled a name, it's kept unless the evidence was clearly better (it wasn't, in any case).

**Rules applied:** device and brand names stay Latin. English is kept (or "English + gloss") where English is what people type. Never "Botox". No prescription drug or device is named as a consumer product (so not 童颜针, 少女针, 瘦脸针). No claim is added that the EN name doesn't make (so 溶脂, 减脂 and *buang lemak* are not used where the EN says contouring or toning). Use 激光, never 雷射. Use Malaysian Malay forms.

## Chinese (`hl=zh-CN&gl=my`)

| slug | English | Proposed zh | Probes | Evidence | Decision |
|---|---|---|---|---|---|
| pico-laser | Pico Laser | **皮秒激光（Pico Laser）** | 皮秒激光, 皮秒, pico laser | `皮秒` → 皮秒激光, 价格, 多久做一次; `pico laser` → 价钱, 中文 | KEYWORD (docs/18, kept) |
| hifu | HIFU | **HIFU 超声波提拉** | hifu, hifu 中文, 超声波提拉, 超声刀 | `hifu` → hifu 中文, hifu 多久做一次; `超声波提拉` → 超声波提拉plus hifu; 超声刀 is mainland slang that also covers Ultherapy | KEYWORD (docs/18, kept). Never 海扶刀. |
| ultherapy | Ultherapy | **Ultherapy** | ultherapy, ultherapy 中文 | `ultherapy` → prime, 中文, 效果; `ultherapy 中文` is TW-skewed | KEYWORD (brand stays Latin) |
| fotona-4d | Fotona Laser | **Fotona 激光** | fotona, fotona 4d, fotona 激光, 4d 激光 | `fotona` → fotona 4d, fotona laser是什么; `fotona 激光` → 价钱, 效果 (价钱 = MY/HK); `4d 激光` is lidar noise | KEYWORD |
| radiofrequency | Radiofrequency | **射频（RF）** | 射频, 射频紧致, rf 紧致 | `射频` is dominated by 射频消融 (ablation), so it's always paired with RF; `rf 紧致` returns | KEYWORD (docs/18, kept) |
| microneedling | RF Microneedling | **射频微针** | 射频微针, 黄金微针 | `射频微针` → 原理, rf 射频微针, potenza; `黄金微针` → 多少钱, 功效 | KEYWORD (docs/18, kept). 黄金微针 is for body copy. |
| fat-freezing | Fat Freezing | **冷冻溶脂** | 冷冻溶脂 | → 价格, 有效吗, 后遗症 | KEYWORD (docs/18, kept) |
| skin-booster | Skin Booster | **水光针（Skin Booster）** | 水光针, skin booster | `水光针` → 效果, 多少钱, 多久打一次; `skin booster` → 是什么, 中文 | KEYWORD (docs/18, kept) |
| botulinum-toxin | Botulinum Toxin | **肉毒杆菌素** | 肉毒杆菌素, 肉毒杆菌 | `肉毒杆菌素` → 价格, 注射; `肉毒杆菌` → 注射, 副作用 | KEYWORD (docs/18, kept). Never Botox or 瘦脸针. |
| bio-stimulator | Bio-stimulator | **胶原蛋白刺激剂（Bio-stimulator）** | 胶原蛋白刺激剂, 胶原刺激剂, 童颜针, 少女针, 聚左旋乳酸, sculptra | `胶原蛋白刺激剂` returns only itself. ⚠️ Demand sits on 童颜针 (= Sculptra) and 少女针 (= Ellansé): those are street names for named prescription devices, so not for display. `sculptra` → 童颜针, 价钱 | KEYWORD (weak). 童颜针 can go in doctor-reviewed treatment-page body copy only, if compliance agrees. |
| exosome-therapy | Exosome Therapy | **外泌体疗程** | 外泌体, 外泌体 医美, 外泌体 皮肤, exosome | `外泌体` → 是什么, 多久打一次, 功效; `外泌体医美` → 费用, 医美疗程; `exosome` → 中文, 华语 (MY signal) | KEYWORD. ⚠️ Its MY regulatory status is still open (acne.md note 12). |
| double-eyelid | Double Eyelid | **双眼皮** | 双眼皮, 双眼皮手术, 埋线双眼皮, 割双眼皮, 双眼皮 马来西亚 | `双眼皮` → 手术, 手术价格, 类型; `埋线双眼皮` → **价格马来西亚**, 恢复期 | KEYWORD. 手术 is left out of the name, so it doesn't imply a method; the treatment page should say which technique is used. |
| vascular-pigment-laser | Vascular / Pigment Laser | **血管与色素激光** | 血管激光, 色素激光, 血管 色素 激光, 祛斑激光, 去红血丝激光 | `血管激光` → 血管激光治疗; `色素激光` and `祛斑激光` return themselves; the combined form and 红血丝 are empty | KEYWORD (component terms) |
| resurfacing-laser | Resurfacing Laser | **点阵激光** | 点阵激光, 二氧化碳点阵激光, co2激光, 换肤激光, 剥脱性激光 | `点阵激光` → 价格, 多久做一次, 恢复期, 副作用; `二氧化碳点阵激光` returns; 换肤激光 and 剥脱性激光 are empty | KEYWORD. treatments.ts: "fractional CO2 laser", so 点阵 is accurate. |
| microwave-contouring | Microwave Contouring | **微波塑形** | 微波溶脂, 微波 塑形, 微波 紧致, onda | `微波溶脂` → onda 微波溶脂, deka 微波溶脂; 塑形 and 紧致 forms are empty | DIRECT. 微波溶脂 has demand but adds a fat-dissolving claim that the EN "contouring" doesn't make. It can go in body copy if the doctor confirms it's accurate. |
| muscle-stimulation | Muscle Stimulation | **肌肉刺激** | 肌肉刺激, 增肌, 增肌减脂, emsculpt, 磁力 增肌 | `肌肉刺激` → 肌肉刺激器 (consumer gadgets); `增肌减脂` → 增肌减脂医美; `emsculpt` → 价钱 | DIRECT. 增肌减脂 adds a fat-loss claim (EN: "body-toning"). |
| dermal-fillers | Dermal Fillers | **玻尿酸填充** | 填充剂, 医美 填充剂, 玻尿酸, 玻尿酸填充, 透明质酸, 皮肤填充剂, 面部填充 | `玻尿酸填充` → 价格, 可以维持多久, 泪沟, 法令纹; `填充剂` is industrial noise; `皮肤填充剂` empty | KEYWORD. treatments.ts: "Hyaluronic-acid injectable fillers", so it's accurate. 玻尿酸 is an ingredient, not a brand. If non-HA fillers are ever added, use 皮肤填充剂. |
| facial-treatments | Facial Treatments | **医美面部护理（Facial）** | 面部护理, 脸部护理, 医美 facial, facial, 清洁 facial | `面部护理` is product-led (油, sabon); `医美 facial` returns; `facial` → facial kl, facial cat ss2 (MY: people type "facial") | KEYWORD (医美 + facial) |
| laser-hair-removal | Laser Hair Removal | **激光脱毛** | 激光脱毛, 脱毛, 冰点脱毛 | `激光脱毛` → 是永久的吗, 价格, 多久一次 | KEYWORD. ⚠️ Copy must answer 是永久的吗 honestly; never say 永久. |

### Categories (zh)

| Category | Proposed zh | Probes | Evidence | Decision |
|---|---|---|---|---|
| Lasers | **激光疗程** | 激光疗程 | returns itself (激光疗程 皮肤) | KEYWORD (docs/18, kept) |
| Lifting & Tightening | **提拉紧致** | 提拉紧致 | product-led (美容仪, 精华), but docs/18 settled it | KEYWORD (docs/18, kept) |
| Body & Slimming | **身体塑形** | 身体塑形 | returns itself | KEYWORD (docs/18, kept) |
| Injectables | **注射疗程** | 注射疗程, 注射美容 | both are empty or KR-led | DIRECT (docs/18, kept) |
| Facials | **医美面部护理** | 面部护理, 医美 facial | as above | KEYWORD (医美 + facial) |
| Hair Removal | **脱毛** | 脱毛, 激光脱毛 | `脱毛` is product-led (脱毛膏); `激光脱毛` strong | KEYWORD |
| Regenerative | **再生疗法** | 再生医学, 再生疗法 | `再生疗法` → 是什么, prp, 费用; `再生医学` → 公司, 干细胞 (corporate) | KEYWORD |
| Eyes | **眼部疗程** | 眼部疗程, 眼部, 眼部护理, 医美 眼部 | `眼部疗程` → 眼部疗程 美容; `医美 眼部` returns | KEYWORD |

## Malay (`hl=ms&gl=my`)

| slug | English | Proposed ms | Probes | Evidence | Decision |
|---|---|---|---|---|---|
| pico-laser | Pico Laser | **Pico Laser** | pico laser, pico laser malaysia | → price malaysia, jb, review | KEYWORD (docs/18) |
| hifu | HIFU | **HIFU** | hifu, hifu malaysia | `hifu malaysia` → price, jb; `hifu tahan berapa lama` | KEYWORD (docs/18) |
| ultherapy | Ultherapy | **Ultherapy** | ultherapy, ultherapy malaysia | `ultherapy malaysia` → price, clinic, cost | KEYWORD (docs/18) |
| fotona-4d | Fotona Laser | **Laser Fotona** | fotona, fotona 4d, fotona 4d malaysia, laser fotona | `laser fotona` returns (global); `fotona 4d malaysia` → price malaysia | KEYWORD (Malay word order, matches `laser fotona`) |
| radiofrequency | Radiofrequency | **Radiofrekuensi (RF)** | radiofrequency, radiofrekuensi, rawatan rf, rf muka | `radiofrekuensi` is ID/medical (ablasi); `rf muka` → rf untuk muka (MY); `rawatan rf` = slip disc | KEYWORD (docs/18, kept). RF stays prominent. |
| microneedling | RF Microneedling | **RF Microneedling** | rf microneedling, microneedling, rawatan microneedling | `rf microneedling` → price malaysia, malaysia | KEYWORD (docs/18) |
| fat-freezing | Fat Freezing | **Fat Freezing (Kriolipolisis)** | fat freezing, kriolipolisis | `fat freezing` → **johor**, near me; `kriolipolisis` → criolipolisis (ES) | KEYWORD (docs/18, kept) |
| skin-booster | Skin Booster | **Skin Booster** | skin booster | → injection, untuk apa, pdrn (and *paling bagus*, which we don't use) | KEYWORD (docs/18) |
| botulinum-toxin | Botulinum Toxin | **Toksin Botulinum** | toksin botulinum, botulinum, suntikan botox | `toksin botulinum` → adalah, untuk apa (ID-leaning but the term is shared); demand is on "botox", which is banned | KEYWORD (docs/18, kept). Never Botox. |
| bio-stimulator | Bio-stimulator | **Bio-stimulator (Perangsang Kolagen)** | bio stimulator, biostimulator, sculptra malaysia, suntikan kolagen, perangsang kolagen | `bio stimulator` → for face, treatment (English); `perangsang kolagen` returns (food noise); `sculptra malaysia` strong, but it's a brand | KEYWORD (English + Malay gloss) |
| exosome-therapy | Exosome Therapy | **Rawatan Exosome** | exosome, exosome malaysia, exosome therapy, rawatan exosome | `exosome malaysia` → price, therapy malaysia; `rawatan exosome` returns itself | KEYWORD |
| double-eyelid | Double Eyelid | **Double Eyelid** | double eyelid, double eyelid malaysia, rawatan double eyelid, kelopak mata berlipat, mata dua lapis, pembedahan kelopak mata | `double eyelid malaysia` → surgery, suture, cost (strong); Malay forms are empty or wrong (*kelopak mata berlipat* = multiple wrinkled folds) | KEYWORD (English kept) |
| vascular-pigment-laser | Vascular / Pigment Laser | **Laser Vaskular & Pigmentasi** | laser vaskular, laser pigmentasi, vascular laser, laser jeragat, laser urat merah | `laser vaskular` → harga (some *erha*, ID); `laser pigmentasi` → *kos rawatan laser pigmentasi* (MY); `laser jeragat` strong MY | KEYWORD |
| resurfacing-laser | Resurfacing Laser | **Laser Resurfacing** | resurfacing laser, laser resurfacing malaysia, laser co2, co2 laser malaysia, fractional laser | `laser resurfacing malaysia` → price; `co2 laser malaysia` strong | KEYWORD (word order matches AC) |
| microwave-contouring | Microwave Contouring | **Kontur Badan Gelombang Mikro** | microwave, microwave lemak, onda, buang lemak perut, rawatan buang lemak | microwave forms are only appliances; `rawatan buang lemak` returns, but it adds a fat-removal claim | DIRECT |
| muscle-stimulation | Muscle Stimulation | **Rangsangan Otot** | muscle stimulation, rangsangan otot, emsculpt malaysia, bina otot mesin | `rangsangan otot` is ID biology; `muscle stimulation` is physio; `emsculpt malaysia` is a brand | DIRECT |
| dermal-fillers | Dermal Fillers | **Dermal Filler** | filler, filler malaysia, suntikan filler, filler muka, dermal filler, dermal filler malaysia | `filler muka` → tahan berapa lama, keburukan (MY); `dermal filler malaysia` → price; bare `filler` is hardware | KEYWORD. *Filler muka* is for body copy and FAQ. |
| facial-treatments | Facial Treatments | **Rawatan Facial** | facial, facial treatment, rawatan facial, rawatan facial muka, rawatan muka, facial klinik | `rawatan facial` → muka, untuk lelaki; `facial` → kuala lumpur, cheras | KEYWORD |
| laser-hair-removal | Laser Hair Removal | **Laser Buang Bulu** | laser buang bulu, laser hair removal malaysia, buang bulu laser, buang bulu ketiak | `laser buang bulu` → muka, ketiak, harga (MY) | KEYWORD. ⚠️ AC has *secara kekal* and *hukum*; never claim kekal. |

### Categories (ms)

| Category | Proposed ms | Probes | Evidence | Decision |
|---|---|---|---|---|
| Lasers | **Laser** | rawatan laser | `rawatan laser` → muka, jeragat, muka harga (also eye-surgery noise) | KEYWORD (docs/18, kept) |
| Lifting & Tightening | **Tegang & Angkat Kulit** | rawatan tegang muka, tegang kulit | both return (MY *petua tegang kulit muka*) | KEYWORD (docs/18, kept) |
| Body & Slimming | **Badan & Pelangsingan** | pelangsingan badan, rawatan pelangsingan badan | return; *pusat pelangsingan badan* | KEYWORD (docs/18, kept) |
| Injectables | **Rawatan Suntikan** | rawatan suntikan, suntikan | `rawatan suntikan` → saraf, lutut (medical); `suntikan` → vaccines | DIRECT (docs/18, kept). Weak, but there's no better Malay form. |
| Facials | **Rawatan Facial** | rawatan facial, rawatan muka | as above | KEYWORD |
| Hair Removal | **Buang Bulu** | laser buang bulu, buang bulu ketiak | strong MY | KEYWORD |
| Regenerative | **Rawatan Regeneratif** | rawatan regeneratif, perubatan regeneratif, regeneratif | the first two return themselves; bare `regeneratif` is ID/KBBI | KEYWORD (weak) |
| Eyes | **Mata** | rawatan mata, mata | `rawatan mata` → rabun, juling, kering (ophthalmology, misleading) | DIRECT. Matches the group name *Mata* in terms.ts. |

## Paste list (for `terms.ts`)

| slug / category | zh | ms |
|---|---|---|
| pico-laser | 皮秒激光（Pico Laser） | Pico Laser |
| hifu | HIFU 超声波提拉 | HIFU |
| ultherapy | Ultherapy | Ultherapy |
| fotona-4d | Fotona 激光 | Laser Fotona |
| radiofrequency | 射频（RF） | Radiofrekuensi (RF) |
| microneedling | 射频微针 | RF Microneedling |
| fat-freezing | 冷冻溶脂 | Fat Freezing (Kriolipolisis) |
| skin-booster | 水光针（Skin Booster） | Skin Booster |
| botulinum-toxin | 肉毒杆菌素 | Toksin Botulinum |
| bio-stimulator | 胶原蛋白刺激剂（Bio-stimulator） | Bio-stimulator (Perangsang Kolagen) |
| exosome-therapy | 外泌体疗程 | Rawatan Exosome |
| double-eyelid | 双眼皮 | Double Eyelid |
| vascular-pigment-laser | 血管与色素激光 | Laser Vaskular & Pigmentasi |
| resurfacing-laser | 点阵激光 | Laser Resurfacing |
| microwave-contouring | 微波塑形 | Kontur Badan Gelombang Mikro |
| muscle-stimulation | 肌肉刺激 | Rangsangan Otot |
| dermal-fillers | 玻尿酸填充 | Dermal Filler |
| facial-treatments | 医美面部护理（Facial） | Rawatan Facial |
| laser-hair-removal | 激光脱毛 | Laser Buang Bulu |
| *Lasers* | 激光疗程 | Laser |
| *Lifting & Tightening* | 提拉紧致 | Tegang & Angkat Kulit |
| *Body & Slimming* | 身体塑形 | Badan & Pelangsingan |
| *Injectables* | 注射疗程 | Rawatan Suntikan |
| *Facials* | 医美面部护理 | Rawatan Facial |
| *Hair Removal* | 脱毛 | Buang Bulu |
| *Regenerative* | 再生疗法 | Rawatan Regeneratif |
| *Eyes* | 眼部疗程 | Mata |
