// /concerns hub copy per locale. English is the original, moved here verbatim.
//
// Keyword check, 2026-10-14 (Google Autocomplete, gl=my; docs/19 index):
//   zh  皮肤问题 → 皮肤问题有哪些 (has demand) → title/description use it
//       皮肤问题 医美 → nothing → rest is direct translation
//   ms  masalah kulit muka / jenis masalah kulit muka (has demand) → title/description
//       rawatan masalah kulit → nothing → rest is direct translation

import type { ConcernPickerCopy } from "@/components/ConcernPicker";
import type { Locale } from "@/lib/i18n";

export type ConcernsHubCopy = {
  title: string;
  description: string;
  crumb: string;
  eyebrow: string;
  h1: string;
  intro: string;
  approachHeading: string;
  approachBody: string;
  explorer: { all: string; tabs: { Skin: string; "Face & Eyes": string; "Hair & Body": string }; explore: string };
  /** Card image alt, "{name}". */
  cardAlt: string;
  picker?: Omit<ConcernPickerCopy, "names">;
};

const en: ConcernsHubCopy = {
  title: "Skin Concerns We Treat | Kaiteki Aesthetic Clinic",
  description:
    "Acne, pigmentation, fine lines, dark eye circles, enlarged pores and more. Start with what concerns you. A doctor will assess and guide the right plan.",
  crumb: "Concerns",
  eyebrow: "Start here",
  h1: "What brings you in?",
  intro:
    "Tell us the concern. Each guide below is reviewed by a doctor and explains what they look for, what options exist, and what to realistically expect.",
  approachHeading: "How we approach your concern",
  approachBody:
    "Every concern is different, and so is every person’s skin. At Kaiteki, treatment always starts with a doctor’s assessment. We look at your skin type, history and goals before recommending any option. This applies at all nine branches, with the same standard of care.",
  explorer: { all: "All concerns", tabs: { Skin: "Skin", "Face & Eyes": "Face & Eyes", "Hair & Body": "Hair & Body" }, explore: "Explore options" },
  cardAlt: "{name}, skin concern treated at Kaiteki Skin Aesthetic Clinic",
};

const zh: ConcernsHubCopy = {
  title: "皮肤问题有哪些？暗疮、色斑、皱纹 | Kaiteki",
  description:
    "常见皮肤问题有哪些？暗疮痘痘、色斑、皱纹、黑眼圈、毛孔粗大等。从你的困扰开始，由MMC注册医生先评估，再建议合适的方案。WhatsApp 预约免费咨询。",
  crumb: "皮肤问题",
  eyebrow: "从这里开始",
  h1: "你想改善哪一个皮肤问题？",
  intro: "告诉我们你的困扰。以下每一篇指南都由医生审阅，说明医生会看什么、有哪些选择，以及可以实际期待什么。",
  approachHeading: "我们如何处理你的皮肤问题",
  approachBody:
    "每一种皮肤问题都不同，每个人的皮肤也不同。在 Kaiteki，疗程一定从医生评估开始。我们会先了解你的肤质、过往状况和期望，才建议任何选择。全马9间分店都是同一个标准。",
  explorer: { all: "所有皮肤问题", tabs: { Skin: "皮肤", "Face & Eyes": "脸部与眼部", "Hair & Body": "头发与身体" }, explore: "了解处理方式" },
  cardAlt: "{name}，Kaiteki 皮肤医美诊所处理的皮肤问题",
  picker: {
    heading: "你最想改善的皮肤问题是什么？",
    body: "可以选多个。我们会把你选的问题直接带进 WhatsApp 信息里。",
    button: "在 WhatsApp 继续",
    waNone: "你好 Kaiteki，我想预约免费咨询。",
    waSome: "你好 Kaiteki，我想预约免费咨询，了解：{names}。",
    join: "、",
  },
};

const ms: ConcernsHubCopy = {
  title: "Jenis Masalah Kulit Muka & Rawatan | Kaiteki",
  description:
    "Jenis masalah kulit muka yang kami rawat: jerawat, pigmentasi, garis halus, lingkaran gelap dan liang pori besar. Doktor menilai dahulu sebelum mencadangkan pelan.",
  crumb: "Masalah Kulit",
  eyebrow: "Mula di sini",
  h1: "Apa masalah kulit anda?",
  intro:
    "Beritahu kami masalahnya. Setiap panduan di bawah disemak oleh doktor dan menerangkan apa yang doktor perhatikan, pilihan yang ada, dan apa yang boleh dijangka secara realistik.",
  approachHeading: "Cara kami menangani masalah kulit anda",
  approachBody:
    "Setiap masalah kulit berbeza, begitu juga kulit setiap orang. Di Kaiteki, rawatan sentiasa bermula dengan penilaian doktor. Kami melihat jenis kulit, sejarah dan matlamat anda sebelum mencadangkan sebarang pilihan. Ini terpakai di kesemua sembilan cawangan, dengan standard penjagaan yang sama.",
  explorer: { all: "Semua masalah kulit", tabs: { Skin: "Kulit", "Face & Eyes": "Muka & Mata", "Hair & Body": "Rambut & Badan" }, explore: "Lihat pilihan rawatan" },
  cardAlt: "{name}, masalah kulit yang dirawat di Kaiteki Skin Aesthetic Clinic",
  picker: {
    heading: "Apa masalah kulit utama anda?",
    body: "Pilih seberapa banyak yang berkaitan. Kami akan masukkan terus ke dalam mesej WhatsApp anda.",
    button: "Teruskan di WhatsApp",
    waNone: "Hai Kaiteki, saya nak tempah konsultasi percuma.",
    waSome: "Hai Kaiteki, saya nak konsultasi percuma tentang: {names}.",
    join: ", ",
  },
};

export const concernsHub: Record<Locale, ConcernsHubCopy> = { en, zh, ms };
