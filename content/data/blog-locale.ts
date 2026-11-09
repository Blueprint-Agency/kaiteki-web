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
    {
      // kt106, see the English entry in content/data/blog.ts for sources.
      slug: "melasma-vs-pigmentation",
      title: "黄褐斑和色斑有什么区别？一次分清黄褐斑、晒斑和痘印",
      seoTitle: "黄褐斑和色斑有什么区别？| Kaiteki",
      description: "黄褐斑、晒斑和痘印看起来很像，处理方式却不同。教你从分布和变化分辨黄褐斑与其他色斑，以及为什么做激光前要先分清楚。",
      category: "Skin Concerns",
      author: "dr-lim-xiao-chien",
      reviewedBy: "dr-jacqueline-tan",
      publishedAt: "2026-11-09",
      readingMinutes: 3,
      leadAnswer: "黄褐斑是色斑的一种，多是两颊、上唇或额头左右对称、边缘模糊的一片，会随日晒、高温和荷尔蒙变化。晒斑是长年日晒形成的独立斑点，痘印是发炎后留下的印记。三者处理方式不同，医生会先确认类型。",
      concerns: ["melasma", "pigmentation", "acne"],
      treatments: ["pico-laser"],
      faqs: [
        {
          q: "黄褐斑和色斑是一样的吗？",
          a: "黄褐斑是色斑的一种。色斑还包括晒斑、雀斑，以及痘痘或发炎后留下的印记。",
        },
        {
          q: "黄褐斑和晒斑的区别是什么？",
          a: "黄褐斑通常是两颊或上唇左右对称、边缘模糊的一片；晒斑是一颗颗分开、边缘清楚的斑点。医生可以确认，有时会用放大镜检查。",
        },
        {
          q: "激光会让黄褐斑变严重吗？",
          a: "如果仪器或参数不对，有可能。所以做激光前要先确认是不是黄褐斑，并以保守方式处理。",
        },
        {
          q: "痘印会自己消失吗？",
          a: "痘痘消退后，痘印通常会在几个月内慢慢变淡，每天防晒会有帮助。肤色较深的人可能需要更久。",
        },
      ],
    },
    {
      // kt107, see the English entry in content/data/blog.ts for sources.
      slug: "darkening-after-laser",
      title: "激光反黑怎么办？亚洲肤色为什么会反黑，以及现在该做什么",
      seoTitle: "激光反黑怎么办？原因与处理方法 | Kaiteki",
      description: "打完激光反黑怎么办？了解亚洲肤色为何容易反黑、如何分辨反黑与黄褐斑，以及现在该做和不该做的事，什么情况要尽快找医生。",
      category: "Skin Concerns",
      author: "dr-chloe-wan",
      reviewedBy: "dr-teresa-tan",
      publishedAt: "2026-11-09",
      readingMinutes: 3,
      leadAnswer: "激光反黑通常是炎症后色素沉着，是皮肤对发炎的反应，在亚洲人和偏深肤色中更常见。先做好每天防晒、保持温和护肤，再在医生指导下治疗。反黑一般以月计慢慢变淡，太快再打强激光反而可能更黑。",
      concerns: ["pigmentation", "melasma"],
      treatments: ["pico-laser"],
      related: ["after-facial-laser-aftercare"],
      faqs: [
        {
          q: "激光反黑会永久吗？",
          a: "通常不会。做好防晒和护理，炎症后反黑一般会在几个月内慢慢变淡，但所需时间因人而异，有些需要治疗。",
        },
        {
          q: "反黑要再打激光才能退吗？",
          a: "不要马上再打。更多热能可能让它更黑。医生可能在皮肤稳定、外用治疗不够时，才考虑低能量激光。",
        },
        {
          q: "反黑可以擦美白霜吗？",
          a: "只用医生建议的产品。来路不明的美白霜可能含汞、氢醌或维A酸，会刺激皮肤，反而让反黑加重。",
        },
        {
          q: "怎么知道是黄褐斑还是激光反黑？",
          a: "黄褐斑多是双颊、额头或上唇的对称斑块，激光反黑则跟着治疗范围出现。医生检查皮肤后才能分辨。",
        },
      ],
    },
    {
      // kt108, see the English entry in content/data/blog.ts for sources.
      slug: "nasolabial-folds",
      title: "法令纹可以消除吗？成因与非手术改善选择",
      seoTitle: "法令纹怎么消除？成因与非手术改善选择 | Kaiteki",
      description: "法令纹可以消除吗？了解法令纹变深的成因、医生如何判断，以及填充、胶原蛋白再生针与提拉仪器各适合哪种情况，还有这个部位的填充风险。",
      category: "Skin Concerns",
      author: "dr-yvonne-chuah",
      reviewedBy: "dr-lucas-chew",
      publishedAt: "2026-11-09",
      readingMinutes: 4,
      leadAnswer: "法令纹是脸颊与嘴唇交界的正常折痕，治疗可以淡化变深的法令纹，但无法让它消除。方案取决于成因：脸颊容量流失、组织下移或皮肤松弛。选择包括玻尿酸填充、胶原蛋白再生针和提拉仪器；这个部位的填充有已知的血管风险。",
      concerns: ["fine-lines-wrinkles", "face-lifting"],
      treatments: ["dermal-fillers", "bio-stimulator", "hifu", "ultherapy", "radiofrequency"],
      technology: ["sculptra", "radiesse"],
      faqs: [
        {
          q: "法令纹可以完全消除吗？",
          a: "不可以。法令纹是脸颊与嘴唇交界的正常结构，治疗的目标是淡化已经变深的纹路，完全没有法令纹的脸反而不自然。",
        },
        {
          q: "玻尿酸是直接打在法令纹里吗？",
          a: "不一定。如果法令纹是因为上方脸颊容量流失而变深，支撑通常放在脸颊，而不是纹路里。医生会在评估整个中脸部之后决定。",
        },
        {
          q: "法令纹打玻尿酸安全吗？",
          a: "这是公认风险较高的部位，因为血管就在附近。严重并发症很少见，但只应由熟悉脸部解剖并懂得处理并发症的医生进行。",
        },
        {
          q: "HIFU 或射频可以改善法令纹吗？",
          a: "它们针对的是皮肤松弛，这是法令纹变深的其中一个原因，但无法补回流失的容量。是否适合你，要看你的法令纹背后是什么原因。",
        },
      ],
    },
    {
      // kt109, see the English entry in content/data/blog.ts for sources.
      slug: "fat-freezing-aftercare",
      title: "冷冻溶脂后注意事项：哪些反应正常，什么时候要找医生",
      seoTitle: "冷冻溶脂后注意事项与后遗症 | Kaiteki",
      description: "冷冻溶脂后泛红、麻木、肿痛正常吗？整理恢复期的正常反应、护理方式、罕见的反常性脂肪增生，以及需要联系医生的情况。",
      category: "Treatments Explained",
      author: "dr-calvin-tan",
      reviewedBy: "dr-tim-chua",
      publishedAt: "2026-11-09",
      readingMinutes: 3,
      leadAnswer: "冷冻溶脂后，治疗部位泛红、变硬、肿胀、刺麻和麻木都在预期之内，通常在几小时到几周内缓解，麻木可能持续更久。罕见的延迟后遗症“反常性脂肪增生”会让部位变硬变大，需要医生评估。",
      concerns: ["body-slimming"],
      treatments: ["fat-freezing"],
      technology: ["coolsculpting", "cooltech"],
      faqs: [
        {
          q: "冷冻溶脂后麻木会持续多久？",
          a: "治疗部位感觉变钝很常见，可能需要几周才恢复。如果复诊时仍然麻木，请告诉医生。",
        },
        {
          q: "冷冻溶脂几天后才开始痛，正常吗？",
          a: "有些人几天后才出现较深的闷痛或刺麻，通常会自行缓解。请告诉诊所，让医生给你建议。",
        },
        {
          q: "冷冻溶脂后需要戒口吗？",
          a: "不需要。保持平常的饮食和活动，尽量维持体重稳定即可。",
        },
        {
          q: "什么是反常性脂肪增生？",
          a: "一种罕见的延迟后遗症，治疗部位的脂肪变硬变大而不是减少。它不会自行消退，发现时请回诊。",
        },
      ],
    },
    {
      // kt110, see the English entry in content/data/blog.ts for sources.
      slug: "skin-booster-vs-microneedling",
      title: "水光针和微针的区别：原理、恢复期与适合谁",
      seoTitle: "水光针和微针的区别：原理、恢复期与适合谁 | Kaiteki",
      description: "水光针和微针有什么区别？一个是注射保湿修复成分，一个是射频能量刺激更新。比较原理、适合的皮肤问题、恢复期和不适合的人。",
      category: "Treatments Explained",
      author: "dr-jeremy-low",
      reviewedBy: "dr-chang-chee-seong",
      publishedAt: "2026-11-09",
      readingMinutes: 4,
      leadAnswer: "水光针是把玻尿酸、多核苷酸等成分注射进皮肤，主要用于补水和改善整体肤质；射频微针则用细针把射频能量送进皮肤，刺激自身更新，较常用于痘疤、粗糙和毛孔问题。哪一种适合，甚至两者都不适合，要看你的皮肤问题。",
      concerns: ["acne-scars", "enlarged-pores", "aging"],
      treatments: ["skin-booster", "microneedling"],
      technology: ["profhilo", "rejuran", "juvelook", "potenza", "sylfirm-x"],
      faqs: [
        {
          q: "改善痘疤，该选水光针还是微针？",
          a: "要看痘疤类型。凹陷型痘疤较常考虑射频微针，水光针则主要用于补水和肤质。医生会先判断痘疤类型。",
        },
        {
          q: "水光针和微针可以一起做吗？",
          a: "有时两者会在同一个方案里，通常分开不同日子进行，先后顺序和间隔由医生决定。",
        },
        {
          q: "水光针和射频微针，哪个恢复期比较长？",
          a: "我们页面列出的恢复期是水光针 1 至 2 天、射频微针 2 至 3 天，实际会因产品、仪器参数和肤质而不同。",
        },
        {
          q: "黄金微针和射频微针是一样的吗？",
          a: "通常指的是同一类疗程，都是通过针释放射频能量。单纯的微针（如 dermapen）则没有射频能量，是不同的疗程。",
        },
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
    {
      // kt106, see the English entry in content/data/blog.ts for sources.
      slug: "melasma-vs-pigmentation",
      title: "Jeragat vs pigmentasi: apa bezanya, dan kenapa ia penting",
      seoTitle: "Jeragat vs Pigmentasi: Apa Bezanya? | Kaiteki",
      description: "Jeragat (melasma), tompok matahari dan tanda selepas jerawat nampak serupa tetapi berbeza. Cara membezakannya, dan kenapa ia penting sebelum rawatan laser.",
      category: "Skin Concerns",
      author: "dr-lim-xiao-chien",
      reviewedBy: "dr-jacqueline-tan",
      publishedAt: "2026-11-09",
      readingMinutes: 3,
      leadAnswer: "Jeragat (melasma) ialah satu jenis pigmentasi. Ia membentuk tompok bertepi lembut dan simetri di kedua-dua pipi, atas bibir atau dahi, dan berubah mengikut matahari, haba dan hormon. Tompok matahari pula bintik berasingan bertepi jelas, manakala tanda gelap muncul selepas jerawat. Setiap jenis dirawat berbeza, jadi doktor sahkan dahulu.",
      concerns: ["melasma", "pigmentation", "acne"],
      treatments: ["pico-laser"],
      faqs: [
        {
          q: "Adakah jeragat sama dengan pigmentasi?",
          a: "Jeragat ialah satu jenis pigmentasi. Pigmentasi juga termasuk tompok matahari, bintik dan tanda gelap selepas jerawat atau kerengsaan.",
        },
        {
          q: "Macam mana nak tahu ini jeragat atau tompok matahari?",
          a: "Jeragat biasanya membentuk tompok sepadan bertepi lembut di kedua-dua pipi atau atas bibir. Tompok matahari pula bintik berasingan bertepi jelas. Doktor boleh mengesahkannya, kadangkala dengan pembesaran.",
        },
        {
          q: "Laser boleh buat jeragat makin teruk ke?",
          a: "Boleh, jika mesin atau tetapan yang salah digunakan. Sebab itu jeragat dikenal pasti dahulu dan dirawat dengan berhati-hati.",
        },
        {
          q: "Tanda gelap selepas jerawat boleh hilang sendiri ke?",
          a: "Selalunya ia pudar dalam beberapa bulan selepas jerawat reda, terutama dengan pelindung matahari setiap hari. Kulit lebih gelap mungkin mengambil masa lebih lama.",
        },
      ],
    },
    {
      // kt107, see the English entry in content/data/blog.ts for sources.
      slug: "darkening-after-laser",
      title: "Kulit gelap selepas laser: kenapa ia berlaku pada kulit Asia dan apa perlu dibuat",
      seoTitle: "Kulit Gelap Selepas Laser: Punca & Apa Perlu Buat | Kaiteki",
      description: "Kulit menjadi gelap selepas laser biasanya hiperpigmentasi pasca-keradangan. Kenapa ia berlaku pada kulit Asia, beza dengan melasma, dan apa perlu dibuat.",
      category: "Skin Concerns",
      author: "dr-chloe-wan",
      reviewedBy: "dr-teresa-tan",
      publishedAt: "2026-11-09",
      readingMinutes: 3,
      leadAnswer: "Kulit gelap selepas laser biasanya hiperpigmentasi pasca-keradangan, iaitu tindak balas kulit terhadap keradangan, dan ia lebih kerap pada kulit Asia dan kulit lebih gelap. Perlindungan matahari setiap hari dan rutin lembut didahulukan, kemudian rawatan di bawah doktor. Ia biasanya pudar dalam beberapa bulan.",
      concerns: ["pigmentation", "melasma"],
      treatments: ["pico-laser"],
      related: ["after-facial-laser-aftercare"],
      faqs: [
        {
          q: "Adakah kulit gelap selepas laser kekal?",
          a: "Biasanya tidak. Dengan perlindungan matahari dan penjagaan, ia cenderung mencerah dalam beberapa bulan, walaupun tempohnya berbeza dan sesetengah tompok memerlukan rawatan.",
        },
        {
          q: "Perlukah saya buat laser lagi untuk menghilangkan kulit gelap?",
          a: "Bukan dengan segera. Lebih banyak haba boleh menjadikannya lebih gelap. Doktor mungkin mempertimbangkan laser bertenaga rendah kemudian, jika rawatan topikal tidak mencukupi.",
        },
        {
          q: "Bolehkah saya guna krim pemutih untuk kulit gelap selepas laser?",
          a: "Hanya yang disyorkan oleh doktor. Krim tidak berdaftar boleh mengandungi merkuri, hidrokuinon atau tretinoin yang merengsa kulit dan memburukkan warna gelap.",
        },
        {
          q: "Bagaimana nak tahu sama ada ia melasma atau kesan laser?",
          a: "Melasma membentuk tompok simetri di kedua-dua pipi, dahi atau atas bibir, manakala kulit gelap selepas laser mengikut kawasan yang dirawat. Doktor perlu memeriksa untuk membezakannya.",
        },
      ],
    },
    {
      // kt108, see the English entry in content/data/blog.ts for sources.
      slug: "nasolabial-folds",
      title: "Cara hilangkan garis senyuman: punca dan pilihan rawatan tanpa pembedahan",
      seoTitle: "Cara Hilangkan Garis Senyuman: Punca & Rawatan | Kaiteki",
      description: "Kenapa garis senyuman semakin dalam, bagaimana doktor menentukan puncanya, dan pilihan rawatan tanpa pembedahan untuk setiap punca, termasuk risiko filler.",
      category: "Skin Concerns",
      author: "dr-yvonne-chuah",
      reviewedBy: "dr-lucas-chew",
      publishedAt: "2026-11-09",
      readingMinutes: 4,
      leadAnswer: "Garis senyuman ialah lipatan normal tempat pipi bertemu bibir, jadi rawatan boleh melembutkan garis yang semakin dalam tetapi tidak menghilangkannya. Punca menentukan pelan: isipadu pipi berkurang, tisu turun atau kulit kendur. Pilihan termasuk filler, bio-stimulator dan rawatan tenaga, dan filler di kawasan ini ada risiko vaskular yang diketahui.",
      concerns: ["fine-lines-wrinkles", "face-lifting"],
      treatments: ["dermal-fillers", "bio-stimulator", "hifu", "ultherapy", "radiofrequency"],
      technology: ["sculptra", "radiesse"],
      faqs: [
        {
          q: "Bolehkah garis senyuman dihilangkan sepenuhnya?",
          a: "Tidak. Garis senyuman ialah struktur normal tempat pipi bertemu bibir. Rawatan bertujuan melembutkan garis yang semakin dalam, dan wajah tanpa garis langsung tidak akan kelihatan semula jadi.",
        },
        {
          q: "Adakah filler disuntik terus ke dalam garis senyuman?",
          a: "Tidak semestinya. Jika garis menjadi dalam kerana pipi di atasnya kehilangan isipadu, sokongan selalunya diletakkan di pipi, bukan dalam garis. Doktor memutuskan selepas menilai seluruh bahagian tengah muka.",
        },
        {
          q: "Selamatkah filler untuk garis senyuman?",
          a: "Kawasan ini diketahui berisiko lebih tinggi kerana saluran darah berada dekat. Komplikasi serius jarang berlaku, tetapi ia hanya patut dilakukan oleh doktor yang terlatih dalam anatomi muka dan pengurusan komplikasi.",
        },
        {
          q: "Bolehkah HIFU atau radiofrekuensi merawat garis senyuman?",
          a: "Ia digunakan untuk kulit kendur, iaitu salah satu punca garis menjadi dalam. Ia tidak menggantikan isipadu yang hilang, jadi kesesuaiannya bergantung pada punca garis anda.",
        },
      ],
    },
    {
      // kt109, see the English entry in content/data/blog.ts for sources.
      slug: "fat-freezing-aftercare",
      title: "Selepas fat freezing: apa yang normal, apa yang membantu dan bila perlu jumpa doktor",
      seoTitle: "Selepas Fat Freezing: Kesan Sampingan & Penjagaan | Kaiteki",
      description: "Apa yang normal selepas rawatan fat freezing, daripada kemerahan dan kebas hingga sakit lewat, apa yang membantu, kesan jarang PAH, dan bila perlu jumpa doktor.",
      category: "Treatments Explained",
      author: "dr-calvin-tan",
      reviewedBy: "dr-tim-chua",
      publishedAt: "2026-11-09",
      readingMinutes: 3,
      leadAnswer: "Selepas fat freezing, kemerahan, rasa keras, bengkak, kesemutan dan kebas di kawasan dirawat adalah dijangka dan biasanya reda dalam beberapa jam hingga beberapa minggu. Kebas boleh kekal lebih lama. Kesan lewat yang jarang, hiperplasia adipos paradoks, menyebabkan kawasan itu menjadi keras dan membesar, dan perlu dinilai doktor.",
      concerns: ["body-slimming"],
      treatments: ["fat-freezing"],
      technology: ["coolsculpting", "cooltech"],
      faqs: [
        {
          q: "Berapa lama kebas selepas fat freezing?",
          a: "Deria rasa yang berkurang di kawasan dirawat adalah biasa dan mungkin mengambil masa beberapa minggu untuk pulih. Beritahu doktor jika ia masih ada semasa semakan.",
        },
        {
          q: "Normalkah sakit bermula beberapa hari selepas fat freezing?",
          a: "Ada orang mengalami sakit yang lebih dalam atau kesemutan beberapa hari kemudian, dan ia biasanya reda sendiri. Maklumkan klinik supaya doktor boleh menasihati anda.",
        },
        {
          q: "Adakah perlu pantang makan selepas fat freezing?",
          a: "Tidak. Teruskan pemakanan dan aktiviti biasa, dan cuba kekalkan berat badan yang stabil.",
        },
        {
          q: "Apakah hiperplasia adipos paradoks?",
          a: "Kesan lewat yang jarang di mana lemak yang dirawat menjadi lebih keras dan besar, bukan berkurang. Ia tidak hilang sendiri, jadi jumpa doktor jika anda perasan.",
        },
      ],
    },
    {
      // kt110, see the English entry in content/data/blog.ts for sources.
      slug: "skin-booster-vs-microneedling",
      title: "Skin booster vs microneedling: apa bezanya, dan mana sesuai untuk kulit anda",
      seoTitle: "Skin Booster vs Microneedling: Apa Bezanya | Kaiteki",
      description: "Skin booster vs microneedling: satu menyuntik bahan pelembap atau pemulih, satu lagi guna tenaga RF. Cara kerja, pemulihan dan siapa yang tidak sesuai.",
      category: "Treatments Explained",
      author: "dr-jeremy-low",
      reviewedBy: "dr-chang-chee-seong",
      publishedAt: "2026-11-09",
      readingMinutes: 4,
      leadAnswer: "Skin booster menyuntik bahan seperti asid hialuronik atau polinukleotida ke dalam kulit untuk menyokong kelembapan dan kualiti kulit. RF microneedling menggunakan jarum halus untuk menghantar tenaga radiofrekuensi yang merangsang pembaharuan kulit, dan lebih kerap dipertimbangkan untuk parut, tekstur dan liang pori. Masalah kulit anda menentukan pilihan.",
      concerns: ["acne-scars", "enlarged-pores", "aging"],
      treatments: ["skin-booster", "microneedling"],
      technology: ["profhilo", "rejuran", "juvelook", "potenza", "sylfirm-x"],
      faqs: [
        {
          q: "Skin booster atau dermapen, mana patut saya pilih?",
          a: "Bergantung pada masalah kulit anda. Dermapen ialah microneedling biasa, manakala skin booster ialah suntikan untuk kelembapan dan kualiti kulit. Doktor menilai masalah kulit anda dahulu.",
        },
        {
          q: "Bolehkah buat skin booster dan microneedling bersama?",
          a: "Kadangkala kedua-duanya dalam satu pelan, biasanya pada hari berasingan, dengan susunan dan jarak yang ditetapkan oleh doktor.",
        },
        {
          q: "Mana lebih lama tempoh pemulihan, skin booster atau RF microneedling?",
          a: "Halaman kami menyenaraikan 1 hingga 2 hari untuk skin booster dan 2 hingga 3 hari untuk RF microneedling. Ia berbeza mengikut produk, tetapan mesin dan kulit anda.",
        },
        {
          q: "Adakah Rejuran sesuai jika saya alah kepada ikan?",
          a: "Rejuran dan Plinest berasal daripada ikan, jadi alahan ikan atau makanan laut mesti dimaklumkan kepada doktor sebelum rawatan.",
        },
      ],
    },
  ],
};

export function localePostBySlug(locale: NonDefaultLocale, slug: string): Post | undefined {
  return localePosts[locale].find((p) => p.slug === slug);
}
