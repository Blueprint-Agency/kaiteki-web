// Fixed labels of the device & injectable page template and its hub explorer,
// per locale. Shared labels (breadcrumb, "In brief", contents rail, FAQ heading,
// reviewer ledger, cost block) come from concern-ui.ts and treatment-ui.ts so
// each is translated once. "{name}" is the device name, "{type}" the lower-case
// type word, "{device}" the brand.
//
// English is the template's original wording, moved here verbatim.

import type { Locale } from "@/lib/i18n";

export type TechnologyUi = {
  /** Kicker / card badge, by Technology["type"]. */
  type: { device: string; injectable: string };
  /** The lower-case word inside sentences ("Concerns this {type} addresses"). */
  typeWord: { device: string; injectable: string };
  heroCta: string;
  heroNote: string;
  pending: string; // "{summary}", "{name}"
  concernsHeading: string; // "{type}"
  concernsIntro: string;
  usedInHeading: string; // "{name}"
  backToAll: string;
  alternativesIntro: string;
  /** "Other … we use" by Technology["group"]; `other` for any group not listed. */
  alternatives: Partial<Record<string, string>> & { other: string };
  manufacturer: string;
  logoAlt: string; // "{device}"
  bottomHeading: string;
  bottomBody: string; // "{name}"
  bottomCta: string;
  imageAlt: string; // "{name}", "{device}" (with its brackets, or empty)
  // ── hub explorer ──
  searchPlaceholder: string;
  searchAria: string;
  clearSearch: string;
  all: string;
  typePlural: { device: string; injectable: string };
  allCategories: string;
  /** Section headings/chips by their English name (see TechnologyExplorer). */
  sections: Partial<Record<string, string>>;
  empty: string;
};

const en: TechnologyUi = {
  type: { device: "Device", injectable: "Injectable" },
  typeWord: { device: "device", injectable: "injectable" },
  heroCta: "Ask if it suits your skin",
  heroNote: "Free consultation, no obligation.",
  pending:
    "{summary} A fuller, doctor-reviewed guide to {name} is being prepared. Our doctors can tell you whether it suits your skin at a free consultation.",
  concernsHeading: "Concerns this {type} addresses",
  concernsIntro:
    "Whether it is the right choice for any of these is a decision for a doctor who has examined your skin.",
  usedInHeading: "Treatments that use {name}",
  backToAll: "Back to all devices and injectables",
  alternativesIntro:
    "These address overlapping concerns. Which one suits you is a decision for a doctor who has examined your skin, not a choice to make from a page.",
  alternatives: {
    Injectables: "Other injectables we use",
    Lasers: "Other lasers we work with",
    "Lifting & Tightening": "Other lifting and tightening devices",
    "Body & Slimming": "Other body and slimming devices",
    Facials: "Other facial devices we use",
    "Hair Removal": "Other hair-removal devices",
    other: "Other devices we work with",
  },
  manufacturer: "Manufacturer",
  logoAlt: "{device} logo",
  bottomHeading: "Book a free consultation",
  bottomBody:
    "The consultation is free, takes about 20 to 30 minutes, and there is no obligation to book treatment afterwards. A doctor will examine your skin and tell you whether {name} is appropriate, and if it isn’t, what would be.",
  bottomCta: "Ask about this",
  imageAlt: "{name}{device} at Kaiteki Skin Aesthetic Clinic Malaysia",
  searchPlaceholder: "Search devices & injectables…",
  searchAria: "Search technology by name",
  clearSearch: "Clear search",
  all: "All",
  typePlural: { device: "Devices", injectable: "Injectables" },
  allCategories: "All categories",
  sections: {},
  empty: "No matching devices or injectables.",
};

const zh: TechnologyUi = {
  type: { device: "仪器", injectable: "针剂" },
  typeWord: { device: "仪器", injectable: "针剂" },
  heroCta: "WhatsApp 询问是否适合你",
  heroNote: "免费咨询，没有购买压力。",
  pending: "{summary} 关于{name}的完整医生审阅指南正在整理中。你可以先预约免费咨询，由医生说明它是否适合你的皮肤。",
  concernsHeading: "这款{type}处理的皮肤问题",
  concernsIntro: "是否适合处理其中任何一项，要由检查过你皮肤的医生来决定。",
  usedInHeading: "使用{name}的疗程",
  backToAll: "返回所有仪器与针剂",
  alternativesIntro: "以下这些处理的问题有所重叠。哪一款适合你，要由检查过你皮肤的医生决定，而不是看网页自己挑。",
  alternatives: {
    Injectables: "我们使用的其他针剂",
    Lasers: "我们使用的其他激光",
    "Lifting & Tightening": "其他提拉紧致仪器",
    "Body & Slimming": "其他身体塑形仪器",
    Facials: "我们使用的其他面部仪器",
    "Hair Removal": "其他脱毛仪器",
    other: "我们使用的其他仪器",
  },
  manufacturer: "厂商",
  logoAlt: "{device} 标志",
  bottomHeading: "预约免费咨询",
  bottomBody:
    "咨询免费，约20至30分钟，之后也不必一定要做疗程。医生会检查你的皮肤，告诉你{name}是否适合；如果不适合，什么才适合。",
  bottomCta: "WhatsApp 询问",
  imageAlt: "Kaiteki 皮肤医美诊所的{name}{device}",
  searchPlaceholder: "搜索仪器与针剂…",
  searchAria: "按名称搜索仪器与针剂",
  clearSearch: "清除搜索",
  all: "全部",
  typePlural: { device: "仪器", injectable: "针剂" },
  allCategories: "所有类别",
  sections: {
    Lasers: "激光",
    "Lifting & Tightening": "提拉紧致",
    "Body & Slimming": "身体塑形",
    "Skin Boosters": "水光针（Skin Booster）",
    "Bio-stimulators": "胶原蛋白刺激剂",
    "Dermal Fillers": "玻尿酸填充",
    "Botulinum Toxin": "肉毒杆菌素",
    "Facials & Hair Removal": "面部护理与脱毛",
  },
  empty: "没有符合的仪器或针剂。",
};

const ms: TechnologyUi = {
  type: { device: "Mesin", injectable: "Suntikan" },
  typeWord: { device: "mesin", injectable: "produk suntikan" },
  heroCta: "Tanya sama ada sesuai untuk kulit anda",
  heroNote: "Konsultasi percuma, tiada paksaan.",
  pending:
    "{summary} Panduan lebih lengkap tentang {name} yang disemak doktor sedang disediakan. Doktor kami boleh terangkan sama ada ia sesuai untuk kulit anda semasa konsultasi percuma.",
  concernsHeading: "Masalah kulit yang dirawat dengan {type} ini",
  concernsIntro: "Sama ada ia pilihan yang sesuai untuk mana-mana masalah ini ditentukan oleh doktor yang telah memeriksa kulit anda.",
  usedInHeading: "Rawatan yang menggunakan {name}",
  backToAll: "Kembali ke semua mesin dan suntikan",
  alternativesIntro:
    "Ini merawat masalah yang bertindih. Mana satu yang sesuai untuk anda ditentukan oleh doktor yang telah memeriksa kulit anda, bukan pilihan yang dibuat daripada sebuah halaman.",
  alternatives: {
    Injectables: "Produk suntikan lain yang kami gunakan",
    Lasers: "Laser lain yang kami gunakan",
    "Lifting & Tightening": "Mesin tegang dan angkat kulit yang lain",
    "Body & Slimming": "Mesin badan dan pelangsingan yang lain",
    Facials: "Mesin rawatan muka lain yang kami gunakan",
    "Hair Removal": "Mesin buang bulu yang lain",
    other: "Mesin lain yang kami gunakan",
  },
  manufacturer: "Pengeluar",
  logoAlt: "Logo {device}",
  bottomHeading: "Tempah konsultasi percuma",
  bottomBody:
    "Konsultasi adalah percuma, mengambil masa kira-kira 20 hingga 30 minit, dan tiada paksaan untuk membuat rawatan selepas itu. Doktor akan memeriksa kulit anda dan memberitahu sama ada {name} sesuai, dan jika tidak, apa yang sesuai.",
  bottomCta: "Tanya tentang ini",
  imageAlt: "{name}{device} di Kaiteki Skin Aesthetic Clinic",
  searchPlaceholder: "Cari mesin & suntikan…",
  searchAria: "Cari mesin dan suntikan mengikut nama",
  clearSearch: "Kosongkan carian",
  all: "Semua",
  typePlural: { device: "Mesin", injectable: "Suntikan" },
  allCategories: "Semua kategori",
  sections: {
    Lasers: "Laser",
    "Lifting & Tightening": "Tegang & Angkat Kulit",
    "Body & Slimming": "Badan & Pelangsingan",
    "Skin Boosters": "Skin Booster",
    "Bio-stimulators": "Bio-stimulator",
    "Dermal Fillers": "Dermal Filler",
    "Botulinum Toxin": "Toksin Botulinum",
    "Facials & Hair Removal": "Rawatan Facial & Buang Bulu",
  },
  empty: "Tiada mesin atau suntikan yang sepadan.",
};

export const technologyUi: Record<Locale, TechnologyUi> = { en, zh, ms };
