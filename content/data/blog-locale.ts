import type { NonDefaultLocale } from "@/lib/i18n";
import type { Post } from "@/lib/types";

/**
 * Chinese and Malay blog posts (/zh/blog/<slug>, /ms/blog/<slug>). Unblocked
 * 2026-11-09 by the owner, replacing the 3 Nov "English only" call.
 *
 * - Same slug as the English twin (locale-neutral URLs, docs/04 §8). Every post
 *   here needs that twin in content/data/blog.ts, or hreflang would point at a
 *   page that does not exist (`pnpm check:blog` enforces it).
 * - Written on the locale's own keyword (docs/18), never a line-by-line
 *   translation of the English.
 * - Body at content/blog/<locale>/<slug>.mdx.
 * - A URL exists only once content/i18n/pages.ts has a live entry for
 *   "/blog/<slug>" in that locale (drafts render in dev and on staging only).
 *   `/blog` itself needs an entry too before the locale hub resolves.
 */
export const localePosts: Record<NonDefaultLocale, Post[]> = {
  zh: [
    {
      // kt105 · 激光后注意事项 (also 医美恢复期, 激光祛斑多久恢复; docs/18 §6 Q7).
      slug: "after-facial-laser-aftercare",
      category: "Treatments Explained",
      author: "dr-say-wei-xian",
      reviewedBy: "dr-hong-peiyi",
      publishedAt: "2026-11-09",
      readingMinutes: 3,
      concerns: ["pigmentation", "melasma"],
      treatments: ["pico-laser", "resurfacing-laser"],
      title: "激光后注意事项：哪些真的要避免，哪些只是迷思",
      seoTitle: "激光后注意事项：恢复期要避免什么 | Kaiteki",
      description:
        "做完脸部激光后要避免什么？防晒、避热、暂停酸类和A醇、不抠痂是关键；酱油和深色食物会变黑则没有根据。另附需要联系医生的情况。",
      leadAnswer:
        "做完脸部激光后，真正重要的是做好防晒与避热、暂停A醇和果酸等活性护肤品，以及让细小的痂自然脱落。恢复期长短取决于激光类型。吃酱油或深色食物会让皮肤变黑的说法，并没有科学根据。",
      faqs: [
        { q: "激光后可以吃酱油吗？", a: "可以。目前没有证据显示酱油或其他深色食物会让激光后的皮肤变黑。" },
        { q: "激光后要防晒多久？", a: "每天都要，皮肤恢复后也要继续，因为日晒是色斑复发的主要原因。" },
        { q: "激光后什么时候可以化妆？", a: "泛红消退、皮肤没有伤口时就可以。医生会根据你的疗程告诉你。" },
        { q: "激光后可以运动吗？", a: "轻度活动通常没问题。剧烈运动和高温环境，请在医生指定的时间内避免。" },
      ],
    },
  ],
  ms: [
    {
      // kt105 · BM lead piece: pantang selepas laser muka (docs/18 §6 Q7).
      slug: "after-facial-laser-aftercare",
      category: "Treatments Explained",
      author: "dr-say-wei-xian",
      reviewedBy: "dr-hong-peiyi",
      publishedAt: "2026-11-09",
      readingMinutes: 3,
      concerns: ["pigmentation", "melasma"],
      treatments: ["pico-laser", "resurfacing-laser"],
      title: "Pantang selepas laser muka: apa yang perlu dielakkan, dan apa yang mitos",
      seoTitle: "Pantang Selepas Laser Muka: Apa Perlu Dielakkan | Kaiteki",
      description:
        "Pantang selepas laser muka yang benar-benar penting: matahari, haba, produk aktif dan kudis. Juga mitos kicap dan makanan, serta bila perlu hubungi doktor.",
      leadAnswer:
        "Pantang selepas laser muka yang paling penting ialah melindungi kulit daripada matahari dan haba, berhenti sementara produk aktif seperti retinoid dan asid, dan tidak mengopek kudis halus. Tempoh pantang bergantung pada jenis laser. Kicap, telur dan makanan gelap tidak terbukti menggelapkan kulit selepas laser.",
      faqs: [
        { q: "Bolehkah saya makan kicap selepas laser muka?", a: "Boleh. Tiada bukti kicap atau makanan gelap menggelapkan kulit selepas laser." },
        { q: "Berapa lama perlu pakai pelindung matahari selepas laser?", a: "Setiap hari, dan teruskan selepas kulit pulih, kerana matahari ialah punca utama pigmentasi kembali." },
        { q: "Bila boleh pakai solekan semula selepas laser?", a: "Apabila kemerahan reda dan kulit tidak luka. Doktor akan beritahu untuk rawatan anda." },
        { q: "Bolehkah saya bersenam selepas laser muka?", a: "Aktiviti ringan biasanya boleh. Elak senaman berat dan haba untuk tempoh yang doktor tetapkan." },
      ],
    },
  ],
};

export function localePostBySlug(locale: NonDefaultLocale, slug: string): Post | undefined {
  return localePosts[locale].find((p) => p.slug === slug);
}
