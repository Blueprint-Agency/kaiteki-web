// Localized display names for the shared taxonomy: concerns, treatments,
// treatment categories, concern groups, regions and branches.
//
// Each name is the form people actually search in that language (docs/18), so
// a card or menu label doubles as the anchor text for its page. A name missing
// here falls back to the English one: device and brand names (HIFU, Ultherapy,
// Rejuran) are searched in English by Chinese and Malay speakers alike, and an
// English label is better than an invented one. Fill names in as each section's
// research lands; don't guess.

import type { Locale, NonDefaultLocale } from "@/lib/i18n";

type Names = Partial<Record<string, string>>;
type Kind = "concern" | "treatment" | "category" | "group" | "region" | "branch";

// Round 1 (docs/18 §2, §5): the names the homepage, header and footer show.
// Chinese place names need the bilingual reviewer's eye (docs/18 §8.5).
const terms: Record<NonDefaultLocale, Record<Kind, Names>> = {
  zh: {
    concern: {
      acne: "暗疮痘痘",
      "acne-scars": "痘疤与痘坑",
      pigmentation: "色斑",
      melasma: "黄褐斑",
      "enlarged-pores": "毛孔粗大",
      "fine-lines-wrinkles": "皱纹与细纹",
      "dark-eye-circles": "黑眼圈",
      "face-contouring": "脸型轮廓（V脸）",
      "face-lifting": "提拉紧致",
      aging: "抗衰老",
      "body-slimming": "瘦身",
      "hair-loss": "脱发",
      "tattoo-removal": "洗纹身",
      "birthmark": "胎记",
      "vascular-lesions": "红血丝与血管性病变",
      "excessive-sweating": "多汗症",
    },
    treatment: {
      "pico-laser": "皮秒激光（Pico Laser）",
      hifu: "HIFU 超声波提拉",
      radiofrequency: "射频（RF）",
      microneedling: "射频微针",
      "fat-freezing": "冷冻溶脂",
      "skin-booster": "水光针（Skin Booster）",
      "botulinum-toxin": "肉毒杆菌素",
      // Round 2 (docs/19 _treatment-names.md). 童颜针 / 微波溶脂 / 增肌减脂 carry
      // more demand but name a prescription device or add a fat-loss claim.
      "fotona-4d": "Fotona 激光",
      "bio-stimulator": "胶原蛋白刺激剂（Bio-stimulator）",
      "exosome-therapy": "外泌体疗程",
      "double-eyelid": "双眼皮",
      "vascular-pigment-laser": "血管与色素激光",
      "resurfacing-laser": "点阵激光",
      "microwave-contouring": "微波塑形",
      "muscle-stimulation": "肌肉刺激",
      "dermal-fillers": "玻尿酸填充",
      "facial-treatments": "医美面部护理（Facial）",
      "laser-hair-removal": "激光脱毛",
    },
    category: {
      Lasers: "激光疗程",
      "Lifting & Tightening": "提拉紧致",
      "Body & Slimming": "身体塑形",
      Injectables: "注射疗程",
      Facials: "医美面部护理",
      "Hair Removal": "脱毛",
      Regenerative: "再生疗法",
      Eyes: "眼部疗程",
    },
    group: {
      Skin: "皮肤",
      Face: "脸部",
      Eyes: "眼部",
      "Hair & Body": "头发与身体",
    },
    region: {
      "Kuala Lumpur": "吉隆坡",
      Selangor: "雪兰莪",
      Johor: "柔佛（新山）",
      Sabah: "沙巴（亚庇）",
    },
    branch: {
      cheras: "Cheras 蕉赖",
      "mont-kiara": "Mont Kiara 满家乐",
      "bukit-jalil": "Bukit Jalil 武吉加里尔",
      "petaling-jaya": "Petaling Jaya 八打灵再也",
      "kota-kemuning": "Kota Kemuning 哥打甘文宁",
      "southkey-johor-bahru": "Southkey，新山",
      "pelangi-johor-bahru": "Pelangi 彩虹花园，新山",
      "kota-kinabalu": "Kota Kinabalu 亚庇",
    },
  },
  ms: {
    concern: {
      acne: "Jerawat",
      "acne-scars": "Parut Jerawat",
      pigmentation: "Pigmentasi",
      melasma: "Jeragat (Melasma)",
      "enlarged-pores": "Liang Pori Besar",
      // "kedutan" alone means twitching in Indonesian; always paired (docs/18 §7.2).
      "fine-lines-wrinkles": "Garis Halus & Kedutan",
      "dark-eye-circles": "Lingkaran Gelap Bawah Mata",
      "face-contouring": "Kontur Muka (V-Shape)",
      "face-lifting": "Tegang & Angkat Muka",
      aging: "Anti-Penuaan",
      "body-slimming": "Pelangsingan Badan",
      "hair-loss": "Rambut Gugur",
      "tattoo-removal": "Buang Tatu",
      "birthmark": "Tanda Lahir",
      "vascular-lesions": "Urat Merah & Lesi Vaskular",
      "excessive-sweating": "Peluh Berlebihan (Hiperhidrosis)",
    },
    treatment: {
      radiofrequency: "Radiofrekuensi (RF)",
      "fat-freezing": "Fat Freezing (Kriolipolisis)",
      "botulinum-toxin": "Toksin Botulinum",
      // Round 2 (docs/19 _treatment-names.md).
      "fotona-4d": "Laser Fotona",
      "bio-stimulator": "Bio-stimulator (Perangsang Kolagen)",
      "exosome-therapy": "Rawatan Exosome",
      "vascular-pigment-laser": "Laser Vaskular & Pigmentasi",
      "resurfacing-laser": "Laser Resurfacing",
      "microwave-contouring": "Kontur Gelombang Mikro",
      "muscle-stimulation": "Rangsangan Otot",
      "dermal-fillers": "Dermal Filler",
      "facial-treatments": "Rawatan Facial",
      "laser-hair-removal": "Laser Buang Bulu",
    },
    category: {
      Lasers: "Laser",
      "Lifting & Tightening": "Tegang & Angkat Kulit",
      "Body & Slimming": "Badan & Pelangsingan",
      Injectables: "Rawatan Suntikan",
      Facials: "Rawatan Facial",
      "Hair Removal": "Buang Bulu",
      Regenerative: "Rawatan Regeneratif",
      Eyes: "Mata",
    },
    group: {
      Skin: "Kulit",
      Face: "Muka",
      Eyes: "Mata",
      "Hair & Body": "Rambut & Badan",
    },
    region: {},
    branch: {
      // Kota Kemuning has no Malay search demand of its own; Shah Alam does (docs/18 §2.2).
      "kota-kemuning": "Kota Kemuning, Shah Alam",
    },
  },
};

/** Localized name for `key` (a slug, or the English label for categories,
 *  groups and regions), else the English `fallback`. */
export function term(locale: Locale, kind: Kind, key: string, fallback: string): string {
  if (locale === "en") return fallback;
  return terms[locale][kind][key] ?? fallback;
}
