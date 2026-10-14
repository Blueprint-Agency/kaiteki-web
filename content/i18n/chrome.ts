// Site chrome per locale: header, menus, footer, the WhatsApp CTAs and their
// pre-filled messages. Plain strings only — this is passed to client components.
//
// The zh/ms labels are the query forms from docs/18 (keyword research), not a
// gloss of the English. Placeholders in braces ({label}, {name}) are filled by fmt().

import type { Locale } from "@/lib/i18n";

export type Chrome = {
  nav: {
    concerns: string;
    treatments: string;
    technology: string;
    products: string;
    locations: string;
    about: string;
    blog: string;
    allLocations: string;
    ourStory: string;
    ourDoctors: string;
  };
  header: {
    homeLabel: string;
    logoAlt: string;
    menuFor: string; // "{label} menu"
    openMenu: string;
    closeMenu: string;
    viewAllTreatments: string;
    viewAllConcerns: string;
    language: string;
  };
  cta: {
    /** Default inline WhatsApp button. */
    book: string;
    /** Mobile sticky bar. */
    bookShort: string;
    /** Desktop floating pill on hover. */
    sticky: string;
  };
  /** Pre-filled WhatsApp messages. The language of the message tells the front
   *  desk which language to reply in. */
  wa: {
    generic: string;
    about: string; // "{name}"
  };
  footer: {
    tagline: string;
    positioning: string;
    treatments: string;
    concerns: string;
    locations: string;
    company: string;
    allTreatments: string;
    allConcerns: string;
    allLocations: string;
    aboutUs: string;
    doctors: string;
    technology: string;
    products: string;
    blog: string;
    privacy: string;
    privacyPdpa: string;
    mmcNote: string;
  };
  notFound: {
    kicker: string;
    title: string;
    home: string;
  };
};

const en: Chrome = {
  nav: {
    concerns: "Concerns",
    treatments: "Treatments",
    technology: "Device & Injectables",
    products: "Products",
    locations: "Locations",
    about: "About",
    blog: "Blog",
    allLocations: "All locations",
    ourStory: "Our story",
    ourDoctors: "Our doctors",
  },
  header: {
    homeLabel: "Kaiteki home",
    logoAlt: "Kaiteki Skin Aesthetic Clinic",
    menuFor: "{label} menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    viewAllTreatments: "View all treatments →",
    viewAllConcerns: "View all concerns →",
    language: "Language",
  },
  cta: {
    book: "Book a free consultation on WhatsApp",
    bookShort: "Book a free consultation",
    sticky: "Free consultation",
  },
  wa: {
    generic: "Hi Kaiteki, I'd like to book a free consultation.",
    about: "Hi Kaiteki, I'd like a free consultation about {name}.",
  },
  footer: {
    tagline: "Skin · Aesthetic · Laser",
    positioning: "MOH-licensed skin & aesthetic clinic, 9 branches across Malaysia.",
    treatments: "Treatments",
    concerns: "Concerns",
    locations: "Locations",
    company: "Company",
    allTreatments: "All treatments",
    allConcerns: "All concerns",
    allLocations: "All locations",
    aboutUs: "About us",
    doctors: "Doctors",
    technology: "Device & Injectables",
    products: "Products",
    blog: "Blog",
    privacy: "Privacy",
    privacyPdpa: "Privacy (PDPA)",
    mmcNote: "All treatments are performed by MMC-registered doctors.",
  },
  notFound: {
    kicker: "Page not found",
    title: "We couldn’t find that page",
    home: "Back to the home page",
  },
};

const zh: Chrome = {
  nav: {
    concerns: "皮肤问题",
    treatments: "医美疗程",
    technology: "仪器与注射",
    products: "护肤产品",
    locations: "分店",
    about: "关于我们",
    blog: "医美知识",
    allLocations: "所有分店",
    ourStory: "品牌故事",
    ourDoctors: "医生团队",
  },
  header: {
    homeLabel: "Kaiteki 首页",
    logoAlt: "Kaiteki 皮肤医美诊所",
    menuFor: "{label}菜单",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    viewAllTreatments: "查看所有疗程 →",
    viewAllConcerns: "查看所有皮肤问题 →",
    language: "语言",
  },
  cta: {
    book: "WhatsApp 预约免费咨询",
    bookShort: "预约免费咨询",
    sticky: "免费咨询",
  },
  wa: {
    generic: "你好 Kaiteki，我想预约免费咨询。",
    about: "你好 Kaiteki，我想咨询关于{name}的疗程。",
  },
  footer: {
    tagline: "皮肤 · 医美 · 激光",
    positioning: "持有卫生部执照的皮肤医美诊所，全马9间分店。",
    treatments: "医美疗程",
    concerns: "皮肤问题",
    locations: "分店",
    company: "关于 Kaiteki",
    allTreatments: "所有疗程",
    allConcerns: "所有皮肤问题",
    allLocations: "所有分店",
    aboutUs: "关于我们",
    doctors: "医生团队",
    technology: "仪器与注射",
    products: "护肤产品",
    blog: "医美知识",
    privacy: "隐私政策",
    privacyPdpa: "隐私政策（PDPA）",
    mmcNote: "所有疗程均由MMC注册医生亲自进行。",
  },
  notFound: {
    kicker: "找不到页面",
    title: "抱歉，这个页面不存在",
    home: "返回首页",
  },
};

const ms: Chrome = {
  nav: {
    concerns: "Masalah Kulit",
    treatments: "Rawatan",
    technology: "Teknologi & Suntikan",
    products: "Produk",
    locations: "Lokasi",
    about: "Tentang Kami",
    blog: "Panduan Kulit",
    allLocations: "Semua Lokasi",
    ourStory: "Kisah Kami",
    ourDoctors: "Doktor Kami",
  },
  header: {
    homeLabel: "Laman utama Kaiteki",
    logoAlt: "Kaiteki Skin Aesthetic Clinic",
    menuFor: "Menu {label}",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    viewAllTreatments: "Lihat semua rawatan →",
    viewAllConcerns: "Lihat semua masalah kulit →",
    language: "Bahasa",
  },
  cta: {
    // "Tempah", never "temujanji": that reads as a government-counter booking (docs/18 §7.2).
    book: "Tempah Konsultasi Percuma di WhatsApp",
    bookShort: "Tempah Konsultasi Percuma",
    sticky: "Konsultasi percuma",
  },
  wa: {
    generic: "Hai Kaiteki, saya nak tempah konsultasi percuma.",
    about: "Hai Kaiteki, saya nak tanya tentang {name}.",
  },
  footer: {
    tagline: "Kulit · Estetik · Laser",
    positioning: "Klinik kulit & estetik berlesen KKM, 9 cawangan di seluruh Malaysia.",
    treatments: "Rawatan",
    concerns: "Masalah Kulit",
    locations: "Lokasi",
    company: "Syarikat",
    allTreatments: "Semua rawatan",
    allConcerns: "Semua masalah kulit",
    allLocations: "Semua lokasi",
    aboutUs: "Tentang kami",
    doctors: "Doktor kami",
    technology: "Teknologi & Suntikan",
    products: "Produk",
    blog: "Panduan Kulit",
    privacy: "Dasar Privasi",
    privacyPdpa: "Dasar Privasi (PDPA)",
    mmcNote: "Semua rawatan dijalankan oleh doktor berdaftar MMC.",
  },
  notFound: {
    kicker: "Halaman tidak dijumpai",
    title: "Maaf, halaman ini tiada",
    home: "Kembali ke laman utama",
  },
};

export const chrome: Record<Locale, Chrome> = { en, zh, ms };

/** "{label} menu" + { label: "Treatments" } → "Treatments menu". */
export function fmt(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => vars[k] ?? "");
}
