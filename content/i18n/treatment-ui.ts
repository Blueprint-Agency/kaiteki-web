// Fixed labels of the treatment-page template, per locale. Per-treatment copy
// lives in content/data/treatments.ts (English) and content/i18n/treatments/
// <locale>/<slug>.json (overlays); this file is only what the template writes.
// "{name}" is the treatment's display name in the page's language.
//
// English is the template's original wording, moved here verbatim.

import type { Locale } from "@/lib/i18n";

export type TreatmentUi = {
  heroCta: string;
  heroNote: string;
  pending: string; // "{summary}", "{name}"
  routesTitle: string; // "{name}"
  concernsHeading: string;
  concernsIntro: string; // "{name}"
  avoidHeading: string;
  suitableHeading: string;
  suitableFor: string;
  notSuitableFor: string;
  sessionHeading: string;
  stepsHeading: string;
  roomHeading: string;
  afterHeading: string;
  risksHeading: string; // "{name}"
  risksCommon: string;
  risksLessCommon: string;
  risksPigment: string;
  risksCannot: string;
  costHeading: string;
  costCta: string;
  manufacturerHeading: string;
  manufacturerIntro: string;
  manufacturerNote: string;
  areasHeading: string;
  areasIntro: string; // "{name}"
  comparisonsHeading: string; // "{name}"
  comparisonColumns: [string, string, string];
  careHeading: string;
  careBefore: string;
  careAfter: string;
  devicesHeading: string;
  devicesIntro: string;
  faqHeading: string;
  nextHeading: string;
  backToAll: string;
  bottomHeading: string;
  bottomBody: string; // "{name}"
  bottomCta: string;
  /** Derived fact-rail labels, for treatments without authored facts. */
  factSession: string;
  factSessions: string;
  factDowntime: string;
  imageAlt: string; // "{name}"
  cardAlt: string; // "{name}"
};

const en: TreatmentUi = {
  heroCta: "Ask if it suits your skin",
  heroNote: "Free consultation, no obligation.",
  pending:
    "{summary} A full, doctor-reviewed guide to {name} is being finalised. Our doctors can explain whether it is suitable for you at a free consultation.",
  routesTitle: "What {name} is used for at Kaiteki",
  concernsHeading: "Concerns this treatment addresses",
  concernsIntro:
    "Each of these pages covers what the concern is and every option considered for it, not only {name}.",
  avoidHeading: "Who should postpone or avoid it",
  suitableHeading: "Is this right for you?",
  suitableFor: "Often considered for",
  notSuitableFor: "Usually not suitable for",
  sessionHeading: "What a session involves",
  stepsHeading: "The procedure, step by step",
  roomHeading: "In the treatment room",
  afterHeading: "After a session",
  risksHeading: "Risks, side effects, and what {name} cannot do",
  risksCommon: "Common and temporary",
  risksLessCommon: "Less common",
  risksPigment: "Pigment change and Malaysian skin",
  risksCannot: "What it cannot do",
  costHeading: "What affects the number of sessions, and the cost",
  costCta: "Ask what a plan might involve",
  manufacturerHeading: "What these treatments do",
  manufacturerIntro:
    "The images below are supplied by the device manufacturers. They are not Kaiteki patients, and they illustrate what this category of treatment is designed to act on.",
  manufacturerNote:
    "Images supplied by device manufacturers. Not Kaiteki patients. Individual results vary and a doctor assesses suitability before treatment.",
  areasHeading: "Treatment areas",
  areasIntro:
    "These are the areas {name} is most often used for at Kaiteki. Which of them apply to you is decided at your consultation.",
  comparisonsHeading: "{name} vs other options",
  comparisonColumns: ["Treatment", "Best for", "Downtime"],
  careHeading: "Pre and post treatment care",
  careBefore: "Before treatment",
  careAfter: "After treatment",
  devicesHeading: "Devices used at Kaiteki",
  devicesIntro: "Which platform is used depends on your individual assessment.",
  faqHeading: "Common questions",
  nextHeading: "Where to go next",
  backToAll: "Back to all treatments",
  bottomHeading: "Book a free consultation",
  bottomBody:
    "The consultation is free, takes about 20 to 30 minutes, and there is no obligation to book treatment afterwards. A doctor will examine your skin and tell you whether {name} is appropriate, and if it isn’t, what would be.",
  bottomCta: "Ask about this treatment",
  factSession: "Typical session time",
  factSessions: "Typical sessions",
  factDowntime: "Downtime",
  imageAlt: "{name} treatment at Kaiteki Skin Aesthetic Clinic Malaysia",
  cardAlt: "{name} treatment at Kaiteki Skin Aesthetic Clinic",
};

const zh: TreatmentUi = {
  heroCta: "WhatsApp 询问是否适合你",
  heroNote: "免费咨询，没有购买压力。",
  pending: "{summary} 关于{name}的完整医生审阅指南正在整理中。你可以先预约免费咨询，由医生说明它是否适合你。",
  routesTitle: "{name}在 Kaiteki 用于处理哪些问题",
  concernsHeading: "这项疗程处理的皮肤问题",
  concernsIntro: "以下每一页都说明该皮肤问题是什么，以及所有可考虑的选择，不只是{name}。",
  avoidHeading: "哪些人应该延后或避免",
  suitableHeading: "这项疗程适合你吗？",
  suitableFor: "常考虑的情况",
  notSuitableFor: "通常不适合的情况",
  sessionHeading: "一次疗程包括什么",
  stepsHeading: "疗程步骤",
  roomHeading: "疗程室实况",
  afterHeading: "疗程之后",
  risksHeading: "{name}的风险、副作用，以及它做不到的事",
  risksCommon: "常见且短暂",
  risksLessCommon: "较少见",
  risksPigment: "色素变化与马来西亚肤色",
  risksCannot: "它做不到的事",
  costHeading: "影响疗程次数与价钱的因素",
  costCta: "WhatsApp 询问疗程计划",
  manufacturerHeading: "这类疗程的作用",
  manufacturerIntro: "以下图片由仪器厂商提供，并非 Kaiteki 的患者，用于说明这类疗程设计上作用的部位。",
  manufacturerNote: "图片由仪器厂商提供，并非 Kaiteki 患者。效果因人而异，疗程前由医生评估是否适合。",
  areasHeading: "疗程部位",
  areasIntro: "以下是 Kaiteki 最常用{name}处理的部位。哪些适合你，会在咨询时决定。",
  comparisonsHeading: "{name}与其他选择比较",
  comparisonColumns: ["疗程", "适合处理", "恢复期"],
  careHeading: "疗程前后护理",
  careBefore: "疗程前",
  careAfter: "疗程后",
  devicesHeading: "Kaiteki 使用的仪器",
  devicesIntro: "使用哪一种仪器，取决于你的个人评估。",
  faqHeading: "常见问题",
  nextHeading: "接下来可以看",
  backToAll: "返回所有疗程",
  bottomHeading: "预约免费咨询",
  bottomBody:
    "咨询免费，约20至30分钟，之后也不必一定要做疗程。医生会检查你的皮肤，告诉你{name}是否适合；如果不适合，什么才适合。",
  bottomCta: "WhatsApp 询问这项疗程",
  factSession: "一般疗程时间",
  factSessions: "一般疗程次数",
  factDowntime: "恢复期",
  imageAlt: "Kaiteki 皮肤医美诊所的{name}疗程",
  cardAlt: "Kaiteki 皮肤医美诊所的{name}疗程",
};

const ms: TreatmentUi = {
  heroCta: "Tanya sama ada sesuai untuk kulit anda",
  heroNote: "Konsultasi percuma, tiada paksaan.",
  pending:
    "{summary} Panduan penuh tentang {name} yang disemak doktor sedang disiapkan. Doktor kami boleh terangkan sama ada ia sesuai untuk anda semasa konsultasi percuma.",
  routesTitle: "Kegunaan {name} di Kaiteki",
  concernsHeading: "Masalah kulit yang dirawat dengan rawatan ini",
  concernsIntro:
    "Setiap halaman ini menerangkan apa masalah kulit itu dan semua pilihan yang dipertimbangkan untuknya, bukan {name} sahaja.",
  avoidHeading: "Siapa yang perlu menangguhkan atau mengelak",
  suitableHeading: "Adakah ini sesuai untuk anda?",
  suitableFor: "Biasa dipertimbangkan untuk",
  notSuitableFor: "Biasanya tidak sesuai untuk",
  sessionHeading: "Apa yang berlaku dalam satu sesi",
  stepsHeading: "Prosedur, langkah demi langkah",
  roomHeading: "Di bilik rawatan",
  afterHeading: "Selepas sesi",
  risksHeading: "Risiko, kesan sampingan, dan apa yang {name} tidak dapat lakukan",
  risksCommon: "Biasa dan sementara",
  risksLessCommon: "Kurang biasa",
  risksPigment: "Perubahan pigmen dan kulit rakyat Malaysia",
  risksCannot: "Apa yang ia tidak dapat lakukan",
  costHeading: "Apa yang mempengaruhi bilangan sesi dan kos",
  costCta: "Tanya tentang pelan rawatan",
  manufacturerHeading: "Apa fungsi rawatan ini",
  manufacturerIntro:
    "Gambar di bawah dibekalkan oleh pengeluar mesin. Ia bukan pesakit Kaiteki, dan menunjukkan bahagian yang menjadi sasaran rawatan kategori ini.",
  manufacturerNote:
    "Gambar dibekalkan oleh pengeluar mesin. Bukan pesakit Kaiteki. Hasil berbeza bagi setiap individu dan doktor menilai kesesuaian sebelum rawatan.",
  areasHeading: "Kawasan rawatan",
  areasIntro:
    "Ini kawasan yang paling kerap dirawat dengan {name} di Kaiteki. Kawasan mana yang sesuai untuk anda ditentukan semasa konsultasi.",
  comparisonsHeading: "{name} berbanding pilihan lain",
  comparisonColumns: ["Rawatan", "Sesuai untuk", "Downtime"],
  careHeading: "Penjagaan sebelum dan selepas rawatan",
  careBefore: "Sebelum rawatan",
  careAfter: "Selepas rawatan",
  devicesHeading: "Mesin yang digunakan di Kaiteki",
  devicesIntro: "Platform yang digunakan bergantung pada penilaian individu anda.",
  faqHeading: "Soalan lazim",
  nextHeading: "Seterusnya",
  backToAll: "Kembali ke semua rawatan",
  bottomHeading: "Tempah konsultasi percuma",
  bottomBody:
    "Konsultasi adalah percuma, mengambil masa kira-kira 20 hingga 30 minit, dan tiada paksaan untuk membuat rawatan selepas itu. Doktor akan memeriksa kulit anda dan memberitahu sama ada {name} sesuai, dan jika tidak, apa yang sesuai.",
  bottomCta: "Tanya tentang rawatan ini",
  factSession: "Tempoh sesi biasa",
  factSessions: "Bilangan sesi biasa",
  factDowntime: "Downtime",
  imageAlt: "Rawatan {name} di Kaiteki Skin Aesthetic Clinic",
  cardAlt: "Rawatan {name} di Kaiteki Skin Aesthetic Clinic",
};

export const treatmentUi: Record<Locale, TreatmentUi> = { en, zh, ms };
