// /technology hub copy per locale. English is the original, moved here verbatim.
//
// Keyword check, 2026-10-14 (Google Autocomplete, gl=my; docs/21 README):
//   zh  医美仪器 → 医美仪器介绍; 医美针剂 → 医美针剂种类 (has demand) → title/description
//       医美仪器有哪些 → nothing
//   ms  mesin laser muka (has demand) → title/description; mesin kecantikan skews to
//       buying machines (harga mesin, layan diri), not patients: not used
//   Everything else on the page is direct translation.

import type { Locale } from "@/lib/i18n";

export type TechnologyHubCopy = {
  title: string;
  description: string;
  crumb: string;
  eyebrow: string;
  h1: string;
  intro: string;
  whyHeading: string;
  whyBody: string;
  unsureHeading: string;
  unsureBody: string;
  cta: string;
};

const en: TechnologyHubCopy = {
  title: "Technology Behind Our Treatments | Kaiteki Malaysia",
  description:
    "The devices and injectables in active clinical use at Kaiteki, across lasers, lifting, body, injectables and facials. Selected by our doctors and matched to you.",
  crumb: "Device & Injectables",
  eyebrow: "In active use",
  h1: "Device & Injectables",
  intro:
    "Every device and injectable below is in active clinical use at Kaiteki, chosen for clinical evidence and matched to each patient rather than one default machine.",
  whyHeading: "Why multiple devices for the same treatment?",
  whyBody:
    "Different skin types, concerns and treatment depths respond better to different platforms. Having more than one device in a category gives our doctors the flexibility to match the technology to your specific needs rather than fitting every patient to a single machine.",
  unsureHeading: "Not sure which device or product applies to your concern?",
  unsureBody:
    "You don’t need to choose the technology. Tell us the concern, and a doctor will recommend the right device or product during consultation.",
  cta: "Book a free consultation on WhatsApp",
};

const zh: TechnologyHubCopy = {
  title: "医美仪器与针剂介绍 | Kaiteki",
  description:
    "Kaiteki 正在使用的医美仪器与针剂介绍，涵盖激光、提拉紧致、身体塑形、医美针剂种类与面部护理。由医生挑选，并按你的情况配合使用。",
  crumb: "仪器与注射",
  eyebrow: "临床使用中",
  h1: "仪器与注射",
  intro: "以下每一款仪器和针剂都在 Kaiteki 临床使用中，按临床证据挑选，并配合每位患者的情况，而不是一台机器用到底。",
  whyHeading: "为什么同一种疗程要用多款仪器？",
  whyBody:
    "不同的肤质、皮肤问题和治疗深度，适合不同的仪器平台。同一类别有不止一款仪器，医生就能按你的需要配合合适的技术，而不是让每位患者都迁就同一台机器。",
  unsureHeading: "不确定哪一款仪器或产品适合你的皮肤问题？",
  unsureBody: "你不需要自己挑选仪器。告诉我们你的困扰，医生会在咨询时建议合适的仪器或产品。",
  cta: "WhatsApp 预约免费咨询",
};

const ms: TechnologyHubCopy = {
  title: "Mesin Laser Muka & Produk Suntikan | Kaiteki",
  description:
    "Mesin laser muka, mesin tegang kulit, rawatan badan dan produk suntikan yang digunakan di Kaiteki. Dipilih oleh doktor kami dan dipadankan dengan keperluan anda.",
  crumb: "Teknologi & Suntikan",
  eyebrow: "Digunakan secara aktif",
  h1: "Teknologi & Suntikan",
  intro:
    "Setiap mesin dan produk suntikan di bawah digunakan secara klinikal di Kaiteki, dipilih berdasarkan bukti klinikal dan dipadankan dengan setiap pesakit, bukan satu mesin untuk semua.",
  whyHeading: "Kenapa beberapa mesin untuk rawatan yang sama?",
  whyBody:
    "Jenis kulit, masalah kulit dan kedalaman rawatan yang berbeza lebih sesuai dengan platform yang berbeza. Dengan lebih daripada satu mesin dalam satu kategori, doktor kami boleh memadankan teknologi dengan keperluan anda, bukan memaksa setiap pesakit mengikut satu mesin sahaja.",
  unsureHeading: "Tidak pasti mesin atau produk mana yang sesuai untuk masalah kulit anda?",
  unsureBody:
    "Anda tidak perlu memilih teknologi sendiri. Beritahu kami masalahnya, dan doktor akan mencadangkan mesin atau produk yang sesuai semasa konsultasi.",
  cta: "Tempah Konsultasi Percuma di WhatsApp",
};

export const technologyHub: Record<Locale, TechnologyHubCopy> = { en, zh, ms };
