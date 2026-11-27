// Blog strings for the Chinese and Malay blog (/zh/blog, /ms/blog). The English
// blog keeps its strings inline in app/(en)/blog. Placeholders in braces are
// filled by fmt() from content/i18n/chrome.ts.

import type { NonDefaultLocale } from "@/lib/i18n";
import type { PostCategory } from "@/lib/types";

export type BlogUi = {
  /** Date locale for Intl. */
  intl: string;
  home: string;
  blog: string;
  indexTitle: string;
  indexDescription: string;
  indexIntro: string;
  onThisPage: string;
  minRead: string; // "{n} min read"
  commonQuestions: string;
  bookHeading: string;
  bookBody: string;
  waMessage: string; // pre-filled WhatsApp, "{title}"
  waLabel: string;
  relatedPages: string;
  keepReading: string;
  aboutAuthor: string;
  viewProfile: string;
  writtenBy: string;
  reviewedBy: string;
  bylineLabel: string;
  published: string;
  lastReviewed: string;
  categories: Record<PostCategory, string>;
};

export const blogUi: Record<NonDefaultLocale, BlogUi> = {
  zh: {
    intl: "zh-CN",
    home: "首页",
    blog: "医美知识",
    indexTitle: "医美知识：皮肤问题与疗程解说 | Kaiteki",
    indexDescription:
      "由 Kaiteki 医生撰写与审阅的医美知识：皮肤问题成因、疗程差异、术后护理与注意事项。WhatsApp 预约免费咨询。",
    indexIntro: "由我们的医生撰写与审阅，帮助你在咨询前先了解皮肤问题与疗程。",
    onThisPage: "本页内容",
    minRead: "{n} 分钟阅读",
    commonQuestions: "常见问题",
    bookHeading: "预约免费咨询",
    bookBody: "医生会先评估你的皮肤，再坦白告诉你这个方案是否适合你，包括不适合的时候。",
    waMessage: "你好 Kaiteki，我看了你们的文章《{title}》，想预约免费咨询。",
    waLabel: "WhatsApp 咨询",
    relatedPages: "相关页面",
    keepReading: "延伸阅读",
    aboutAuthor: "关于作者",
    viewProfile: "查看医生资料",
    writtenBy: "撰写",
    reviewedBy: "医学审阅",
    bylineLabel: "医学审阅",
    published: "发布日期",
    lastReviewed: "最后审阅",
    categories: {
      "Skin Concerns": "皮肤问题",
      "Treatments Explained": "疗程解说",
      "Device & Injectables": "仪器与注射",
      "Weight & Wellness": "体重与健康",
      Skincare: "护肤",
    },
  },
  ms: {
    intl: "ms-MY",
    home: "Utama",
    blog: "Panduan Kulit",
    indexTitle: "Panduan Kulit & Rawatan Estetik | Kaiteki",
    indexDescription:
      "Artikel dalam Bahasa Melayu yang ditulis dan disemak oleh doktor Kaiteki: punca masalah kulit, beza rawatan dan penjagaan selepas rawatan. Konsultasi percuma.",
    indexIntro:
      "Ditulis dan disemak oleh doktor kami, supaya anda faham masalah kulit dan pilihan rawatan sebelum konsultasi.",
    onThisPage: "Kandungan",
    minRead: "{n} min bacaan",
    commonQuestions: "Soalan lazim",
    bookHeading: "Tempah konsultasi percuma",
    bookBody:
      "Doktor akan menilai kulit anda dan memberitahu dengan jujur sama ada rawatan ini sesuai untuk anda, termasuk jika ia tidak sesuai.",
    waMessage: "Hai Kaiteki, saya baca artikel \"{title}\" dan ingin tempah konsultasi percuma.",
    waLabel: "Tanya di WhatsApp",
    relatedPages: "Halaman berkaitan",
    keepReading: "Bacaan lanjut",
    aboutAuthor: "Tentang penulis",
    viewProfile: "Lihat profil penuh",
    writtenBy: "Ditulis oleh",
    reviewedBy: "Disemak oleh",
    bylineLabel: "Disemak secara perubatan",
    published: "Diterbitkan",
    lastReviewed: "Semakan terakhir",
    categories: {
      "Skin Concerns": "Masalah Kulit",
      "Treatments Explained": "Penjelasan Rawatan",
      "Device & Injectables": "Mesin & Suntikan",
      "Weight & Wellness": "Berat Badan & Kesihatan",
      Skincare: "Penjagaan Kulit",
    },
  },
};
