// /treatments hub copy per locale. English is the original, moved here verbatim.
//
// Keyword check, 2026-10-14 (Google Autocomplete, gl=my; docs/20 README):
//   zh  医美疗程 → 医美疗程有哪些 (has demand) → title/description; 皮肤疗程 → nothing
//   ms  rawatan estetik → rawatan estetik muka; jenis rawatan muka (has demand) →
//       title/description; rawatan kecantikan muka → itself only
//   Everything else on the page is direct translation.

import type { Locale } from "@/lib/i18n";

export type TreatmentsHubCopy = {
  title: string;
  description: string;
  crumb: string;
  eyebrow: string;
  h1: string;
  intro: string;
  estimateNote: string;
  helpBody: string;
  helpCta: string;
  explorer: {
    all: string;
    tabs: Record<"Lasers" | "Lifting & Tightening" | "Body & Slimming" | "Injectables" | "Specialist", string>;
  };
};

const en: TreatmentsHubCopy = {
  title: "Skin & Aesthetic Treatments | Kaiteki Clinic Malaysia",
  description:
    "Laser, lifting, skin boosters and body treatments. Every option is doctor-assessed before it's recommended. Explore our full treatment menu.",
  crumb: "Treatments",
  eyebrow: "Doctor-led care",
  h1: "Treatments",
  intro:
    "Every treatment below is assessed and carried out by a registered doctor. Browse by category, or start from your concern if you're not sure which treatment you need.",
  estimateNote:
    "Duration and downtime are general estimates. Your doctor will advise based on your specific treatment plan.",
  helpBody:
    "Not sure which treatment fits your concern? That’s what consultations are for. A doctor will assess your skin and recommend the right option.",
  helpCta: "Book a free consultation",
  explorer: {
    all: "All treatments",
    tabs: {
      Lasers: "Lasers",
      "Lifting & Tightening": "Lifting & Tightening",
      "Body & Slimming": "Body & Slimming",
      Injectables: "Injectables",
      Specialist: "Specialist",
    },
  },
};

const zh: TreatmentsHubCopy = {
  title: "医美疗程有哪些？激光、提拉、水光针 | Kaiteki",
  description:
    "医美疗程有哪些？激光、提拉紧致、水光针与身体塑形，每一项都先由MMC注册医生评估才建议。查看 Kaiteki 全部疗程，WhatsApp 预约免费咨询。",
  crumb: "医美疗程",
  eyebrow: "医生主导",
  h1: "医美疗程",
  intro: "以下每一项疗程都由注册医生评估和执行。你可以按类别浏览；如果不确定自己需要哪一项，也可以从皮肤问题开始。",
  estimateNote: "疗程时间和恢复期只是一般估计，医生会按你的个人疗程计划给建议。",
  helpBody: "不确定哪一项疗程适合你的皮肤问题？这正是咨询的用意。医生会评估你的皮肤，再建议合适的选择。",
  helpCta: "WhatsApp 预约免费咨询",
  explorer: {
    all: "所有疗程",
    tabs: {
      Lasers: "激光疗程",
      "Lifting & Tightening": "提拉紧致",
      "Body & Slimming": "身体塑形",
      Injectables: "注射疗程",
      Specialist: "专项疗程",
    },
  },
};

const ms: TreatmentsHubCopy = {
  title: "Jenis Rawatan Estetik Muka & Badan | Kaiteki",
  description:
    "Jenis rawatan estetik muka dan badan di Kaiteki: laser, tegang kulit, skin booster dan rawatan badan. Setiap pilihan dinilai doktor dahulu sebelum dicadangkan.",
  crumb: "Rawatan",
  eyebrow: "Dikendalikan doktor",
  h1: "Rawatan",
  intro:
    "Setiap rawatan di bawah dinilai dan dijalankan oleh doktor berdaftar. Lihat mengikut kategori, atau mula dengan masalah kulit anda jika tidak pasti rawatan mana yang diperlukan.",
  estimateNote:
    "Tempoh dan downtime ialah anggaran umum. Doktor anda akan memberi nasihat berdasarkan pelan rawatan anda.",
  helpBody:
    "Tidak pasti rawatan mana yang sesuai untuk masalah kulit anda? Itulah tujuan konsultasi. Doktor akan menilai kulit anda dan mencadangkan pilihan yang sesuai.",
  helpCta: "Tempah Konsultasi Percuma",
  explorer: {
    all: "Semua rawatan",
    tabs: {
      Lasers: "Laser",
      "Lifting & Tightening": "Tegang & Angkat Kulit",
      "Body & Slimming": "Badan & Pelangsingan",
      Injectables: "Rawatan Suntikan",
      Specialist: "Rawatan Khusus",
    },
  },
};

export const treatmentsHub: Record<Locale, TreatmentsHubCopy> = { en, zh, ms };
