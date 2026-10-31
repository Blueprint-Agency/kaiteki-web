import type { HomeCopy } from "./home";

// Homepage, Bahasa Malaysia. Written from docs/18 §4 (slots and primary
// queries) and §6 (FAQ phrased as people ask it). Head term "klinik estetik",
// with "klinik kulit" secondary; never "pakar kulit" (a gazetted specialist).
// Malaysian, not Indonesian, forms throughout: rawatan, kos, doktor, percuma,
// muka, liang pori (docs/18 §7.2). Status: DRAFT until a Malay-reading doctor
// signs it (content/i18n/pages.ts).
export const homeMs: HomeCopy = {
  meta: {
    title: "Klinik Estetik & Kulit di Malaysia, 9 Cawangan | Kaiteki",
    description:
      "Klinik estetik Kaiteki di KL, Selangor, Johor Bahru dan Kota Kinabalu. Doktor berdaftar MMC menilai kulit anda dahulu. Tempah konsultasi percuma di WhatsApp.",
  },
  hero: {
    kicker: "Kulit · Estetik · Laser",
    h1: { pre: "Rawatan kulit dan estetik dengan ", em: "ketelitian ala Jepun", post: "." },
    sub: "Kami tak tergesa-gesa cadangkan rawatan. Doktor akan nilai kulit anda dahulu. 9 cawangan di seluruh Malaysia, {n} doktor, dan setiap rawatan bermula dengan penilaian.",
    cta: "Tempah Konsultasi Percuma",
    explore: "Lihat rawatan",
    branchesLine: "9 cawangan di KL, Selangor, Johor dan Sabah:",
    findNearest: "cari cawangan terdekat",
    imageAlt: "Seorang wanita tersenyum dengan kulit yang tenang dan sihat, tangan di bawah dagu",
    spotCta: "Pilihan selepas penilaian doktor",
    spotAria: "{name}, baca panduan masalah kulit",
    spots: {
      "fine-lines-wrinkles": "Garis di dahi dan garis ekspresi, dinilai dahulu sebelum apa-apa dicadangkan.",
      "dark-eye-circles": "Lingkaran gelap dan kantung mata: pilihan bergantung pada puncanya.",
      pigmentation: "Tompok matahari, jeragat dan warna kulit tidak sekata, dipadankan dengan laser yang sesuai.",
      "enlarged-pores": "Tekstur kulit dan liang pori yang ketara: biasanya digandingkan dengan rawatan hidrasi.",
      "face-contouring": "Garis rahang dan bentuk muka, dirancang bersama doktor.",
    },
  },
  // No badges: "paling banyak … di Malaysia" is a superlative (docs/18 §8.1).
  // Restore as a stated count once one is verified.
  concerns: {
    h2: "Apa masalah kulit anda?",
    sub: "Beritahu kami masalahnya. Doktor akan menilai dahulu sebelum mencadangkan sebarang rawatan.",
    viewAll: "Lihat semua masalah kulit",
    explore: "Lihat pilihan rawatan",
    cardAria: "{name}, baca panduan masalah kulit",
    imageAlt: "{name}, masalah kulit yang dirawat di Kaiteki Skin Aesthetic Clinic",
    summaries: {
      acne: "Jerawat aktif dan parut lama memerlukan rawatan yang berbeza. Doktor akan kenal pasti jenis dan puncanya dahulu sebelum mencadangkan pelan.",
      "body-slimming": "Lemak degil di kawasan tertentu boleh dirawat tanpa pembedahan. Ini rawatan membentuk badan, bukan penyelesaian menurunkan berat badan.",
      "fine-lines-wrinkles": "Garis yang muncul ketika anda bergerak dan garis yang kekal ketika muka rehat memerlukan pendekatan berbeza. Doktor akan nilai jenis anda dahulu.",
      "tattoo-removal": "Warna dakwat, kedalaman dan warna kulit mempengaruhi proses buang tatu. Doktor akan menilai tatu anda sebelum menerangkan apa yang boleh dijangka.",
      "hair-loss": "Rambut menipis, garis rambut berundur dan keguguran bertompok ada punca yang berbeza. Doktor akan menilai corak anda sebelum menyatakan sama ada rawatan boleh membantu.",
      "face-contouring": "Garis rahang, isi pipi dan perkadaran muka boleh diperhalusi tanpa pembedahan. Doktor merancang pendekatan berdasarkan struktur muka anda.",
    },
  },
  treatments: {
    h2: "Rawatan kami, dan cara ia dilakukan",
    sub: "Laser muka, tegang kulit, skin booster dan rawatan badan. Setiap pilihan dinilai oleh doktor dan tanpa pembedahan.",
    viewAll: "Lihat semua rawatan",
    learnMore: "Ketahui lebih lanjut",
    cardAria: "{name}, baca panduan rawatan",
    imageAlt: "Rawatan {name} di Kaiteki Skin Aesthetic Clinic",
    summaries: {
      "pico-laser": "Laser pikosaat untuk pigmentasi, kulit kusam dan buang tatu, sesuai untuk pelbagai warna kulit Asia.",
      hifu: "Ultrabunyi terfokus untuk masalah kulit kendur dan rawatan tegang muka tanpa pembedahan.",
      ultherapy: "Platform ultrabunyi terfokus untuk menegangkan kulit muka dan leher.",
      "fotona-4d": "Platform laser Nd:YAG/Er:YAG pelbagai guna, paling kerap digunakan di Kaiteki untuk protokol tegang muka Fotona 4D.",
      radiofrequency: "Tenaga radiofrekuensi untuk membantu masalah kulit kendur dan tekstur kulit.",
      microneedling: "Rawatan RF microneedling untuk tekstur kulit, parut jerawat dan liang pori.",
    },
  },
  how: {
    kicker: "Apa yang dijangka",
    h2: "Lawatan pertama anda, langkah demi langkah",
    sub: "Setiap rawatan di Kaiteki bermula dengan cara yang sama, iaitu perbualan. Ini proses dari awal hingga akhir.",
    steps: [
      {
        title: "Konsultasi Percuma",
        kicker: "Berbual, bukan jualan",
        body: "WhatsApp kami untuk tempah konsultasi percuma di cawangan terdekat. Doktor akan meneliti masalah kulit, sejarah kulit dan matlamat anda. Anda akan faham apa yang mungkin, apa yang terlibat, dan sama ada rawatan sesuai untuk anda. Tiada pakej ditolak, tiada paksaan.",
      },
      {
        title: "Pelan Rawatan Anda",
        kicker: "Dinilai doktor, diterangkan sepenuhnya",
        body: "Jika rawatan sesuai, doktor akan menyediakan pelan untuk masalah khusus anda: rawatan mana, berapa sesi, tempoh yang dijangka dan hasil yang realistik. Semuanya diterangkan sebelum anda membuat sebarang keputusan.",
      },
      {
        title: "Hari Rawatan",
        kicker: "Dikendalikan doktor dari mula hingga akhir",
        body: "Rawatan anda dijalankan oleh doktor berdaftar yang sama yang menilai anda. Setiap sesi biasanya mengambil 15 hingga 90 minit, bergantung pada rawatan. Doktor akan terangkan setiap langkah dan pastikan anda selesa sepanjang rawatan.",
      },
      {
        title: "Penjagaan Selepas Rawatan",
        kicker: "Kami tetap ikuti perkembangan anda",
        body: "Anda akan menerima panduan penjagaan selepas rawatan yang khusus untuk rawatan anda. Pasukan doktor akan menghubungi anda untuk memantau pemulihan dan perkembangan. Jika pelan anda melibatkan beberapa sesi, setiap sesi dinilai semula sebelum diteruskan.",
      },
    ],
  },
  doctors: {
    h2: "Kenali doktor yang merawat anda",
    body: "{n} doktor estetik bertauliah LCP dan berdaftar MMC di 9 cawangan. Kami namakan doktor di setiap halaman rawatan kerana kami mahu anda menilai kelayakan, bukan testimoni.",
    teamLabel: "Pasukan perubatan",
    teamValue: "{n} doktor estetik",
    credLabel: "Kelayakan",
    credValue: "Bertauliah LCP · Berdaftar MMC",
    meetAll: "Kenali semua doktor kami",
    imageAlt: "Tiga doktor Kaiteki, Dr Chew, Dr Jessie dan Dr Yeong Bin, berpakaian scrub klinik hitam",
    roles: {
      "dr-chew-yuhhui": "Pengasas Bersama",
      "dr-jessie-lim": "Pengasas & CEO",
      "dr-yeong-bin": "Pengasas Bersama",
    },
    profileAria: "{name}, {role}, lihat profil",
  },
  why: {
    h2: "Klinik estetik yang berbeza",
    sub: "Pendekatan perubatan yang tenang untuk kulit dan estetik. Doktor menilai masalah anda dan mencadangkan apa yang sesuai. Itulah standard di setiap cawangan.",
    reasons: [
      {
        title: "Sentiasa dikendalikan doktor",
        body: "Setiap pelan dinilai dan dijalankan oleh doktor berdaftar MMC, bukan diserahkan kepada jurujual.",
      },
      {
        title: "Sembilan cawangan, satu standard",
        body: "Di KL, Selangor, Johor dan Sabah: doktor yang sama dan protokol yang sama di setiap cawangan.",
      },
      {
        title: "Diiktiraf oleh jenama dalam bidang ini",
        body: "Anugerah prestasi daripada jenama mesin dan produk di sebalik rawatan yang kami tawarkan.",
      },
    ],
  },
  recognition: {
    h2: "Diiktiraf oleh jenama di sebalik rawatan anda",
    body: "Pengeluar mesin dan produk suntikan kami mengaudit klinik yang menggunakannya: dari segi latihan, jumlah penggunaan, dan sama ada setiap produk diperoleh melalui bekalan yang sah. Inilah anugerah hasil audit itu, direkodkan di sini sepenuhnya sebagai rekod cara kami bekerja.",
    partnersLabel: "Rakan jenama",
    onRecordLabel: "Dalam rekod",
    onRecordValue: "{n} anugerah rakan jenama",
    yearsLabel: "Tahun",
    link: "Kenali doktor yang memenanginya",
    alsoOnRecord: "Turut dalam rekod",
  },
  reviews: {
    heading: "Kata pesakit kami",
    count: "{n} ulasan Google",
    countAll: "{n} ulasan Google di 9 cawangan",
    byBranch: "Ulasan mengikut cawangan",
    note: "Ulasan dipaparkan seperti yang ditulis, setakat {date}. Buka profil Google untuk senarai penuh tanpa tapisan.",
    viewOnGoogle: "Lihat di Google",
    intl: "ms-MY",
  },
  branches: {
    h2: "Cari cawangan terdekat anda",
    sub: "Sembilan lokasi di KL, Selangor, Johor dan Sabah. Doktor yang sama, protokol yang sama di setiap cawangan.",
    all: "Semua lokasi",
    allTab: "Semua cawangan",
  },
  closing: {
    kicker: "Konsultasi percuma · Tiada paksaan",
    h2: { pre: "Tak pasti ", em: "nak mula dari mana?" },
    body: "Berbincang dengan doktor dahulu. WhatsApp kami untuk konsultasi percuma. Kami bantu anda cari cawangan dan pelan yang sesuai, tanpa paksaan.",
    branchesLine: "9 cawangan di KL, Selangor, Johor dan Sabah",
  },
  faq: {
    h2: "Soalan Lazim",
    items: [
      {
        q: "Konsultasi di Kaiteki betul-betul percuma ke?",
        a: "Ya. Konsultasi pertama anda percuma dan tanpa sebarang kewajipan. Doktor akan menilai masalah kulit anda, menerangkan pilihan yang ada, dan memberi cadangan yang jujur. Anda boleh ambil masa untuk membuat keputusan.",
      },
      {
        q: "Perlu ke tahu nak buat rawatan apa sebelum datang?",
        a: "Tidak perlu. Kebanyakan pesakit datang dengan masalah kulit, bukan nama rawatan. Semasa konsultasi, doktor akan menilai kulit anda dan mencadangkan pilihan yang paling sesuai. Anda tak perlu mengkaji rawatan terlebih dahulu.",
      },
      {
        q: "Siapa yang buat rawatan di Kaiteki, doktor atau terapis?",
        a: "Setiap rawatan dinilai dan dijalankan oleh doktor berdaftar. Doktor kami bertauliah LCP dan berdaftar dengan MMC. Kami tidak menyerahkan rawatan kepada terapis atau kakitangan bukan perubatan.",
      },
      {
        q: "Laser sesuai ke untuk kulit sawo matang atau gelap?",
        a: "Banyak rawatan kami, termasuk pico laser, sesuai untuk pelbagai warna kulit Asia. Namun, kesesuaian bergantung pada jenis kulit dan masalah khusus anda. Doktor akan menilainya semasa konsultasi dan menerangkan rawatan mana yang sesuai untuk anda.",
      },
      {
        q: "Kaiteki ada cawangan di mana? Mana satu paling dekat dengan saya?",
        a: "Kami ada sembilan cawangan di KL, Selangor, Johor dan Sabah. Semua cawangan menawarkan rawatan yang sama, mengikut protokol yang sama, dan dikendalikan oleh doktor berdaftar. Pilih yang paling dekat dengan anda, atau WhatsApp kami dan kami akan cadangkan cawangan berdekatan dengan slot terawal.",
      },
      {
        q: "Berapa kos rawatan di Kaiteki?",
        a: "Kos rawatan bergantung pada jenis rawatan, kawasan yang dirawat dan bilangan sesi yang dicadangkan. Doktor akan memberikan pecahan kos yang jelas semasa konsultasi, sebelum sebarang rawatan bermula. Kami tidak menjual secara pakej.",
      },
      {
        q: "Ada downtime atau pantang selepas rawatan?",
        a: "Bergantung pada rawatan. Kebanyakan pilihan tanpa pembedahan seperti HIFU, Ultherapy, radiofrekuensi dan skin booster mempunyai downtime yang minimum atau tiada langsung. Rawatan seperti laser CO₂ fraksional atau RF microneedling mungkin memerlukan beberapa hari untuk pulih. Doktor akan terangkan apa yang perlu dijaga dan dielakkan sebelum anda meneruskan rawatan.",
      },
      {
        q: "Perlu buat berapa sesi? Berapa kerap?",
        a: "Ini bergantung pada masalah kulit, keadaan kulit dan rawatan yang dicadangkan. Sesetengah pesakit nampak perubahan selepas satu sesi, manakala yang lain memerlukan beberapa sesi dalam tempoh beberapa minggu atau bulan. Doktor akan terangkan anggaran bilangan sesi semasa konsultasi, tanpa desakan untuk terus komited.",
      },
      {
        q: "Boleh ke gabungkan beberapa rawatan sekali gus?",
        a: "Ya, dalam banyak keadaan rawatan boleh digabungkan atau dibuat mengikut turutan sebagai sebahagian daripada pelan yang lebih menyeluruh. Contohnya, doktor mungkin mencadangkan laser bersama skin booster, atau rawatan tegang muka bersama rawatan suntikan. Doktor akan menilai gabungan mana yang sesuai dan selamat untuk kulit anda.",
      },
      {
        q: "Kalau doktor kata saya tak perlu rawatan, macam mana?",
        a: "Itulah cadangannya. Doktor kami akan beritahu dengan jujur jika rawatan tidak perlu, jika masalah anda lebih sesuai diurus dengan penjagaan kulit, atau jika hasil yang dijangka tidak berbaloi dengan kosnya. Kami lebih rela memberi jawapan yang jujur daripada rawatan yang tidak perlu.",
      },
    ],
  },
  promo: {
    dialogLabel: "Promosi Skincare Mix & Match",
    close: "Tutup promosi",
    imageAlt: "Promosi Skincare Mix & Match Kaiteki: RM699",
    enquire: "Tanya di WhatsApp",
    viewProducts: "Lihat produk",
    waMessage: "Hai Kaiteki, saya nak tahu lebih lanjut tentang promosi Skincare Mix & Match RM699.",
  },
  campaign: {
    slides: [
      {
        label: "Promosi Ulang Tahun ke-7, bahagian 1",
        alt: "Jualan Ulang Tahun ke-7 Kaiteki, Positive Face Project, 1 hingga 30 November. Pakej rawatan: Happy Face Reset (diskaun 39%), Bye Bye Angry Face, Dull Out Glow On (diskaun 48%), BB Face Lift (jimat RM2,500) dan Tired Face Quickfix. Juga percuma minyak wangi perjalanan edisi terhad, konsultasi percuma, beg cenderahati percuma dan kredit tunai sehingga RM5,000. Tertakluk pada terma dan syarat.",
      },
      {
        label: "Promosi Ulang Tahun ke-7, bahagian 2",
        alt: "Jualan Ulang Tahun ke-7 Kaiteki, Positive Face Project, 1 hingga 30 November. Pakej rawatan: Face Sculpt & Slim, Clear Skin Glow (diskaun 49%), Sick/Fatigue No More, Blooming Scalp (jimat RM1,600) dan tawaran beli dengan pembelian (diskaun 50%). Juga percuma minyak wangi perjalanan edisi terhad, konsultasi percuma, beg cenderahati percuma dan kredit tunai sehingga RM5,000. Tertakluk pada terma dan syarat.",
      },
    ],
    waMessage: "Hai Kaiteki, saya nak tahu lebih lanjut tentang promosi Positive Face Project sempena Ulang Tahun ke-7.",
  },
};
