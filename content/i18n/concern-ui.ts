// Fixed labels of the concern-page template, per locale. The per-concern copy
// lives in content/data/concerns.ts (English) and content/i18n/concerns/<locale>/
// <slug>.json (overlays); this file is only what the template itself writes.
//
// English is the template's original wording, moved here verbatim. Chinese and
// Malay follow docs/18 (激光 not 雷射; rawatan, doktor, percuma) and docs/19.

import type { Locale } from "@/lib/i18n";
import type { SkinDiagramLabels } from "@/components/SkinDepthDiagram";

export type ConcernUi = {
  /** Intl locale for review dates. */
  intl: string;
  home: string;
  inBrief: string;
  learnMore: string;
  routing: string;
  /** Melasma's skin cross-section; undefined keeps the English default. */
  skinDiagram?: SkinDiagramLabels;
  concerns: string;
  kicker: string; // "{group}"
  heroCta: string;
  heroNote: string;
  pending: string; // "{summary}", "{name}"
  seeDoctor: string;
  treatmentsHeading: string;
  treatmentsIntro: string; // "{name}"
  whyFallback: string;
  compareHeading: string;
  resultsPatients: string;
  resultsIllustrated: string;
  technologyHeading: string;
  technologyIntro: string;
  risksHeading: string;
  firstVisitHeading: string;
  costHeading: string;
  costCta: string;
  faqHeading: string;
  relatedHeading: string;
  backToAll: string;
  bottomHeading: string;
  bottomBody: string; // "{assesses}"
  bottomAssesses: string;
  bottomCta: string;
  reviewedByCard: string;
  ledgerReviewedBy: string;
  ledgerLast: string;
  ledgerNext: string;
  bylineLabel: string;
  viewProfile: string;
  onThisPage: string;
  whichType: string;
  prevImage: string;
  nextImage: string;
  viewLarger: string; // "{caption}"
  ctaMid: {
    button: string;
    note: string;
    steps: { title: string; body: string }[];
  };
  /** Technology card type badges, by Technology["type"]. */
  techType: Record<string, string>;
};

const en: ConcernUi = {
  intl: "en-GB",
  home: "Home",
  inBrief: "In brief",
  learnMore: "Learn more",
  routing: "Usually assessed for:",
  concerns: "Concerns",
  kicker: "Concern · {group}",
  heroCta: "Book a free consultation",
  heroNote: "Free, about 20–30 minutes, no obligation to book treatment.",
  pending:
    "{summary} A full, doctor-reviewed guide to {name} is being finalised. Our doctors can talk you through the options at a free consultation.",
  seeDoctor: "When to see a doctor",
  treatmentsHeading: "Treatment options at Kaiteki",
  treatmentsIntro:
    "These are the treatments most often considered at our clinics for {name}. None of them is a default. Which one is appropriate, and whether any of them is, depends on what the assessment finds.",
  whyFallback: "Considered case by case at consultation",
  compareHeading: "Which treatment suits which type?",
  resultsPatients: "Results from Kaiteki patients",
  resultsIllustrated: "How treatment works, illustrated",
  technologyHeading: "Technology used",
  technologyIntro:
    "Having more than one platform means the doctor can match the device to your skin type and to what is being treated, rather than fitting your skin to a single machine.",
  risksHeading: "Risks and what to expect",
  firstVisitHeading: "What your first visit involves",
  costHeading: "What affects the cost",
  costCta: "Ask about pricing for your case",
  faqHeading: "Common questions",
  relatedHeading: "Related concerns",
  backToAll: "Back to all concerns",
  bottomHeading: "Have a doctor look at it",
  bottomBody:
    "The consultation is free, takes about 20 to 30 minutes, and there is no obligation to book treatment afterwards. A doctor will examine {assesses} and talk you through what is, and is not, worth doing.",
  bottomAssesses: "your skin",
  bottomCta: "Book a free consultation",
  reviewedByCard: "Medically reviewed by",
  ledgerReviewedBy: "Reviewed by",
  ledgerLast: "Last reviewed",
  ledgerNext: "Next review due",
  bylineLabel: "Medically reviewed",
  viewProfile: "View full profile",
  onThisPage: "On this page",
  whichType: "Which type",
  prevImage: "Previous image",
  nextImage: "Next image",
  viewLarger: "View larger: {caption}",
  ctaMid: {
    button: "Ask about this on WhatsApp",
    note: "Free consultation, no obligation.",
    steps: [
      { title: "Message us", body: "Send a question, or a photo, on WhatsApp." },
      { title: "Free consultation", body: "About 20 to 30 minutes, with no obligation to book treatment." },
      {
        title: "Assessment first",
        body: "A doctor examines your skin and explains the options and risks before any treatment.",
      },
    ],
  },
  techType: { device: "Device", injectable: "Injectable" },
};

const zh: ConcernUi = {
  intl: "zh-CN",
  home: "首页",
  inBrief: "重点摘要",
  learnMore: "了解更多",
  routing: "通常会评估：",
  skinDiagram: {
    aria: "皮肤分层示意图，显示{depth}。",
    depth: {
      epidermis: "色素集中在表皮，也就是皮肤最外层",
      dermis: "色素集中在真皮，也就是表皮下较深的一层",
      both: "表皮和真皮都有色素",
    },
    surface: "皮肤表面",
    epidermis: "表皮",
    dermis: "真皮",
    fat: "脂肪层",
    caption: "仅为示意图。色素位于哪一层，由医生检查时判断。",
  },
  concerns: "皮肤问题",
  kicker: "皮肤问题 · {group}",
  heroCta: "WhatsApp 预约免费咨询",
  heroNote: "免费，约20至30分钟，不必当场决定做疗程。",
  pending: "{summary} 关于{name}的完整医生审阅指南正在整理中。你可以先预约免费咨询，由医生为你说明有哪些选择。",
  seeDoctor: "什么时候应该看医生",
  treatmentsHeading: "Kaiteki 的疗程选择",
  treatmentsIntro:
    "以下是我们诊所处理{name}时最常考虑的疗程。没有一项是默认方案。哪一项合适，甚至是否需要疗程，都要看评估的结果。",
  whyFallback: "咨询时按个人情况评估",
  compareHeading: "哪一种疗程适合哪一种类型？",
  resultsPatients: "Kaiteki 患者的疗程记录",
  resultsIllustrated: "图解：疗程如何进行",
  technologyHeading: "使用的仪器",
  technologyIntro: "拥有不止一种仪器，医生就能按你的肤质和要处理的问题选择合适的仪器，而不是让你的皮肤去迁就单一机器。",
  risksHeading: "风险与注意事项",
  firstVisitHeading: "第一次就诊会做什么",
  costHeading: "影响价钱的因素",
  costCta: "WhatsApp 询问你的疗程价钱",
  faqHeading: "常见问题",
  relatedHeading: "相关皮肤问题",
  backToAll: "返回所有皮肤问题",
  bottomHeading: "先让医生看一看",
  bottomBody: "咨询免费，约20至30分钟，之后也不必一定要做疗程。医生会检查{assesses}，并说明哪些值得做、哪些不值得做。",
  bottomAssesses: "你的皮肤",
  bottomCta: "WhatsApp 预约免费咨询",
  reviewedByCard: "医学审阅",
  ledgerReviewedBy: "审阅医生",
  ledgerLast: "最近审阅",
  ledgerNext: "下次审阅",
  bylineLabel: "医学审阅",
  viewProfile: "查看医生简介",
  onThisPage: "本页内容",
  whichType: "类型",
  prevImage: "上一张",
  nextImage: "下一张",
  viewLarger: "放大查看：{caption}",
  ctaMid: {
    button: "WhatsApp 询问",
    note: "免费咨询，没有购买压力。",
    steps: [
      { title: "发信息给我们", body: "在 WhatsApp 发问题或照片给我们。" },
      { title: "免费咨询", body: "约20至30分钟，不必当场决定做疗程。" },
      { title: "先评估", body: "医生会先检查你的皮肤，在任何疗程之前说明选择与风险。" },
    ],
  },
  techType: { device: "仪器", injectable: "针剂" },
};

const ms: ConcernUi = {
  intl: "ms-MY",
  home: "Laman Utama",
  inBrief: "Ringkasan",
  learnMore: "Ketahui lebih lanjut",
  routing: "Biasanya dinilai untuk:",
  skinDiagram: {
    aria: "Rajah ilustrasi lapisan kulit, menunjukkan {depth}.",
    depth: {
      epidermis: "pigmen tertumpu pada epidermis, lapisan luar kulit",
      dermis: "pigmen tertumpu pada dermis, lapisan lebih dalam di bawahnya",
      both: "pigmen pada epidermis dan dermis",
    },
    surface: "Permukaan kulit",
    epidermis: "Epidermis",
    dermis: "Dermis",
    fat: "Lapisan lemak",
    caption: "Ilustrasi sahaja. Kedudukan pigmen dianggarkan oleh doktor semasa pemeriksaan.",
  },
  concerns: "Masalah Kulit",
  kicker: "Masalah Kulit · {group}",
  heroCta: "Tempah Konsultasi Percuma",
  heroNote: "Percuma, kira-kira 20 hingga 30 minit, tiada paksaan untuk membuat rawatan.",
  pending:
    "{summary} Panduan penuh tentang {name} yang disemak doktor sedang disiapkan. Doktor kami boleh terangkan pilihan yang ada semasa konsultasi percuma.",
  seeDoctor: "Bila perlu berjumpa doktor",
  treatmentsHeading: "Pilihan rawatan di Kaiteki",
  treatmentsIntro:
    "Ini rawatan yang paling kerap dipertimbangkan di klinik kami untuk {name}. Tiada satu pun yang menjadi pilihan lalai. Rawatan mana yang sesuai, atau sama ada rawatan diperlukan, bergantung pada hasil penilaian.",
  whyFallback: "Dinilai mengikut kes semasa konsultasi",
  compareHeading: "Rawatan mana sesuai untuk jenis mana?",
  resultsPatients: "Hasil pesakit Kaiteki",
  resultsIllustrated: "Bagaimana rawatan berfungsi, dalam ilustrasi",
  technologyHeading: "Teknologi yang digunakan",
  technologyIntro:
    "Dengan lebih daripada satu platform, doktor boleh memadankan mesin dengan jenis kulit anda dan masalah yang dirawat, bukan memaksa kulit anda mengikut satu mesin sahaja.",
  risksHeading: "Risiko dan apa yang perlu dijangka",
  firstVisitHeading: "Apa yang berlaku semasa lawatan pertama",
  costHeading: "Apa yang mempengaruhi kos",
  costCta: "Tanya kos untuk kes anda",
  faqHeading: "Soalan lazim",
  relatedHeading: "Masalah kulit berkaitan",
  backToAll: "Kembali ke semua masalah kulit",
  bottomHeading: "Biar doktor periksa dahulu",
  bottomBody:
    "Konsultasi adalah percuma, mengambil masa kira-kira 20 hingga 30 minit, dan tiada paksaan untuk membuat rawatan selepas itu. Doktor akan memeriksa {assesses} dan menerangkan apa yang berbaloi, dan apa yang tidak, untuk dilakukan.",
  bottomAssesses: "kulit anda",
  bottomCta: "Tempah Konsultasi Percuma",
  reviewedByCard: "Disemak secara perubatan oleh",
  ledgerReviewedBy: "Disemak oleh",
  ledgerLast: "Semakan terakhir",
  ledgerNext: "Semakan seterusnya",
  bylineLabel: "Disemak doktor",
  viewProfile: "Lihat profil penuh",
  onThisPage: "Dalam halaman ini",
  whichType: "Jenis",
  prevImage: "Gambar sebelumnya",
  nextImage: "Gambar seterusnya",
  viewLarger: "Lihat lebih besar: {caption}",
  ctaMid: {
    button: "Tanya di WhatsApp",
    note: "Konsultasi percuma, tiada paksaan.",
    steps: [
      { title: "Hantar mesej", body: "Hantar soalan atau gambar melalui WhatsApp." },
      { title: "Konsultasi percuma", body: "Kira-kira 20 hingga 30 minit, tiada paksaan untuk membuat rawatan." },
      {
        title: "Penilaian dahulu",
        body: "Doktor memeriksa kulit anda dan menerangkan pilihan serta risiko sebelum sebarang rawatan.",
      },
    ],
  },
  techType: { device: "Mesin", injectable: "Suntikan" },
};

export const concernUi: Record<Locale, ConcernUi> = { en, zh, ms };
