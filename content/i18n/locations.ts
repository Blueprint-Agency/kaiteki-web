// Copy for the /locations hub and the nine /locations/[slug] branch pages, per
// locale. Keyword log: docs/22-location-keywords/README.md.
//
// What stays out of translation, on purpose:
//  - the address and phone. They are the NAP that must match each branch's
//    Google Business Profile character for character, so every locale prints
//    the English (content/data/branches.ts);
//  - "Kaiteki" + the Latin area name in every heading. Branch searches are typed
//    in Latin script in both languages ("kaiteki mont kiara", "kaiteki southkey
//    jb"); the Chinese area name sits beside it, as on the homepage.
//
// Self-contained (type imports only) so scripts/validate-locale.mts can load it
// and hold it to the same L-02/L-03/L-04 rules as the page translations.

import type { Locale, NonDefaultLocale } from "@/lib/i18n";

export type LocationsCopy = {
  hub: {
    title: string;
    description: string;
    crumb: string;
    eyebrow: string;
    h1: string;
    headerDescription: string;
    lede: string;
    all: string;
    /** "{n} branch" / "{n} branches". */
    countOne: string;
    countMany: string;
    mapTitle: string; // {region}
    cardAlt: string; // {name} {place}
    notSureHeading: string;
    notSureBody: string;
  };
  page: {
    alsoKnownAs: string;
    h1: string; // {name}
    introFallback: string; // {name} {city} {state}
    introCta: string;
    serving: string; // {list}
    galleryAlt: string; // {name} {city} {state}
    address: string;
    phone: string;
    hours: string;
    parking: string;
    hoursJoin: string;
    /** Joins opening-hours lines inside an FAQ sentence. */
    hoursSentenceJoin: string;
    /** Between two sentences: a space in English and Malay, nothing in Chinese. */
    sentenceGap: string;
    contact: string; // {name}
    mapTitle: string; // {name}
    doctors: string;
    treatments: string; // {name}
    treatmentsIntro: string;
    notEvery: string; // {name}
    faqHeading: string; // {name}
    nearby: string; // {region}
    allBranches: string;
    reviewsHeading: string; // {name}
    readAllReviews: string;
    listJoin: string;
    /** WhatsApp prefills, in the reader's language so the front desk replies in it. */
    waBook: string; // {name}
    waAbout: string; // {name} {names}
    pickerHeading: string;
    pickerBody: string; // {name}
    pickerButton: string;
    faq: {
      whereQ: string; // {name}
      whereA: string; // {name} {address} {gettingHere}
      hoursQ: string;
      hoursA: string; // {hours}
      parkingQ: string;
      parkingA: string; // {parking}
      servesQ: string;
      servesA: string; // {name} {serves} {city}
      bookQ: string;
      bookA: string; // {phone}
    };
  };
  /** City and state as printed beside a branch; English passes through. */
  places: Record<string, string>;
};

/** Per-branch copy in a locale. `name` is the display name (the term map's). */
export type BranchCopy = {
  gettingHere: string;
  parking: string;
  serves: string[];
  hours: string[];
  seoTitle: string;
  seoDescription: string;
};

const en: LocationsCopy = {
  hub: {
    title: "Find a Branch | Kaiteki Skin Aesthetic Clinic",
    description:
      "Doctor-led aesthetic care at 9 locations across Malaysia. Find your nearest branch with full address, hours and directions. Book a free consultation.",
    crumb: "Locations",
    eyebrow: "Nine branches",
    h1: "Find your nearest branch",
    headerDescription:
      "Nine locations across KL, Selangor, Johor and Sabah. Same doctors, same protocols, same standard of care at every one.",
    lede: "Every Kaiteki branch offers the same treatments, the same doctor-led process and the same standard of care. Choose the location closest to you. Each branch page has directions, opening hours and contact details.",
    all: "All branches",
    countOne: "{n} branch",
    countMany: "{n} branches",
    mapTitle: "Map of Kaiteki Skin Aesthetic Clinic branches in {region}",
    cardAlt: "Kaiteki Skin Aesthetic Clinic {name}, {place}",
    notSureHeading: "Not sure which branch to visit?",
    notSureBody:
      "Message us on WhatsApp with your location and we’ll suggest the nearest branch with the earliest availability.",
  },
  page: {
    alsoKnownAs: "Also known as",
    h1: "Kaiteki {name}",
    introFallback: "Our {name} branch offers doctor-led skin, aesthetic and laser treatments in {city}, {state}.",
    introCta: "Message us on WhatsApp to book a free consultation or ask about directions and parking.",
    serving: "Serving {list}.",
    galleryAlt: "Kaiteki Skin Aesthetic Clinic {name}: aesthetic clinic in {city}, {state}",
    address: "Address",
    phone: "Phone",
    hours: "Hours",
    parking: "Parking",
    hoursJoin: " · ",
    hoursSentenceJoin: ". ",
    sentenceGap: " ",
    contact: "Contact {name}",
    mapTitle: "Map of Kaiteki {name}",
    doctors: "Doctors at this branch",
    treatments: "Treatments at Kaiteki {name}",
    treatmentsIntro:
      "Every plan starts with a doctor's assessment, so the treatment follows your concern rather than a menu.",
    notEvery:
      "Not every device is present at every branch. Message us and we’ll confirm what is available at {name}, or point you to the nearest branch that has it.",
    faqHeading: "Kaiteki {name}: common questions",
    nearby: "Other Kaiteki branches in {region}",
    allBranches: "All 9 branches",
    reviewsHeading: "What patients say about {name}",
    readAllReviews: "Read all reviews on Google",
    listJoin: ", ",
    waBook: "Hi Kaiteki {name}, I'd like to book a free consultation.",
    waAbout: "Hi Kaiteki {name}, I'd like a free consultation about: {names}.",
    pickerHeading: "What’s your top skin concern?",
    pickerBody: "Pick as many as apply. We’ll carry them straight into your WhatsApp message to Kaiteki {name}.",
    pickerButton: "Continue on WhatsApp",
    faq: {
      whereQ: "Where is Kaiteki {name}?",
      whereA: "Kaiteki {name} is at {address}.{gettingHere}",
      hoursQ: "What are Kaiteki {name}'s opening hours?",
      hoursA: "{hours}. Hours can change on public holidays, so message us on WhatsApp to confirm before travelling.",
      parkingQ: "Is there parking at Kaiteki {name}?",
      parkingA: "{parking} If you are unsure where to enter, message us on WhatsApp and we will send directions.",
      servesQ: "Which areas does Kaiteki {name} serve?",
      servesA:
        "Kaiteki {name} is convenient for {serves}, and for anyone travelling within {city}. Kaiteki has nine branches across Malaysia, so if another is closer to you we will say so.",
      bookQ: "How do I book an appointment at Kaiteki {name}?",
      bookA:
        "Booking is by WhatsApp on {phone} or through the button on this page. Your first visit is a free consultation with a doctor rather than a treatment: the doctor assesses your skin and explains what is appropriate, and sometimes the honest answer is to wait or to do something else.",
    },
  },
  places: {},
};

const zh: LocationsCopy = {
  hub: {
    title: "Kaiteki 分店｜吉隆坡、雪兰莪、新山、亚庇医美诊所",
    description:
      "Kaiteki 皮肤医美诊所在吉隆坡、雪兰莪、新山和亚庇设有9间分店。查看每间分店的地址、营业时间、停车和交通指引，再在 WhatsApp 预约免费咨询。",
    crumb: "分店",
    eyebrow: "9间分店",
    h1: "找一间离你近的分店",
    headerDescription: "9间分店遍布吉隆坡、雪兰莪、柔佛和沙巴。每一间都是同样的医生团队、同样的流程、同样的护理标准。",
    lede: "每一间 Kaiteki 分店都提供同样的疗程、同样由医生主导的流程和同样的护理标准。选一间离你近的分店就可以了。每个分店页面都有交通指引、营业时间和联络方式。",
    all: "所有分店",
    countOne: "{n} 间分店",
    countMany: "{n} 间分店",
    mapTitle: "{region}的 Kaiteki 皮肤医美诊所分店地图",
    cardAlt: "Kaiteki 皮肤医美诊所 {name}，{place}",
    notSureHeading: "不确定去哪一间分店？",
    notSureBody: "在 WhatsApp 告诉我们你在哪里，我们会建议离你近、可以早点预约的分店。",
  },
  page: {
    alsoKnownAs: "又称",
    h1: "Kaiteki {name}",
    introFallback: "Kaiteki {name} 分店位于{city}，提供由医生主导的皮肤、医美和激光疗程。",
    introCta: "欢迎在 WhatsApp 预约免费咨询，或询问交通和停车。",
    serving: "方便前往的地区：{list}。",
    galleryAlt: "Kaiteki 皮肤医美诊所 {name}：位于{city}的医美诊所",
    address: "地址",
    phone: "电话",
    hours: "营业时间",
    parking: "停车",
    hoursJoin: " · ",
    hoursSentenceJoin: "；",
    sentenceGap: "",
    contact: "联络 {name} 分店",
    mapTitle: "Kaiteki {name} 地图",
    doctors: "这间分店的医生",
    treatments: "Kaiteki {name} 的疗程",
    treatmentsIntro: "每一个方案都从医生评估开始，所以疗程是按你的问题来决定，而不是照着价目表选。",
    notEvery: "不是每一间分店都有每一台仪器。欢迎联络我们，我们会确认 {name} 分店有哪些仪器，或告诉你哪一间分店有。",
    faqHeading: "Kaiteki {name}：常见问题",
    nearby: "{region}的其他 Kaiteki 分店",
    allBranches: "所有9间分店",
    reviewsHeading: "患者对 Kaiteki {name} 的评价",
    readAllReviews: "在 Google 查看所有评价",
    listJoin: "、",
    waBook: "你好 Kaiteki {name}，我想预约免费咨询。",
    waAbout: "你好 Kaiteki {name}，我想预约免费咨询，了解：{names}。",
    pickerHeading: "你最想改善的皮肤问题是什么？",
    pickerBody: "可以选多个。我们会把你选的问题直接带进发给 Kaiteki {name} 的 WhatsApp 信息里。",
    pickerButton: "在 WhatsApp 继续",
    faq: {
      whereQ: "Kaiteki {name} 分店在哪里？",
      whereA: "Kaiteki {name} 的地址是 {address}。{gettingHere}",
      hoursQ: "Kaiteki {name} 的营业时间是几点到几点？",
      hoursA: "{hours}。公共假期的营业时间可能不同，出发前请先在 WhatsApp 和我们确认。",
      parkingQ: "Kaiteki {name} 有停车位吗？",
      parkingA: "{parking}如果不确定从哪里进去，可以在 WhatsApp 问我们，我们会把路线发给你。",
      servesQ: "Kaiteki {name} 方便哪些地区的人前往？",
      servesA: "从{serves}，以及{city}一带过来都很方便。Kaiteki 在全马有9间分店，如果另一间离你更近，我们会告诉你。",
      bookQ: "怎样预约 Kaiteki {name}？",
      bookA:
        "可以通过 WhatsApp {phone} 预约，或点击这个页面上的按钮。第一次来是和医生的免费咨询，不是直接做疗程：医生会先评估你的皮肤，说明哪些做法适合你。有时候，诚实的建议是先等一等，或者换一个方法。",
    },
  },
  places: {
    "Kuala Lumpur": "吉隆坡",
    "WP Kuala Lumpur": "吉隆坡联邦直辖区",
    "Petaling Jaya": "八打灵再也",
    Selangor: "雪兰莪",
    "Shah Alam": "莎阿南",
    "Johor Bahru": "新山",
    Johor: "柔佛",
    "Kota Kinabalu": "亚庇",
    Sabah: "沙巴",
  },
};

const ms: LocationsCopy = {
  hub: {
    title: "9 Cawangan Klinik Estetik di KL, Selangor, JB & KK | Kaiteki",
    description:
      "Klinik estetik Kaiteki di Kuala Lumpur, Selangor, Johor Bahru dan Kota Kinabalu. Lihat alamat, waktu operasi dan arah ke setiap cawangan. Tempah konsultasi percuma.",
    crumb: "Lokasi",
    eyebrow: "Sembilan cawangan",
    h1: "Cari cawangan terdekat anda",
    headerDescription:
      "Sembilan lokasi di KL, Selangor, Johor dan Sabah. Doktor, protokol dan standard penjagaan yang sama di setiap cawangan.",
    lede: "Setiap cawangan Kaiteki menawarkan rawatan yang sama, proses yang dipimpin doktor yang sama dan standard penjagaan yang sama. Pilih lokasi yang paling dekat dengan anda. Setiap halaman cawangan ada arah, waktu operasi dan butiran untuk dihubungi.",
    all: "Semua cawangan",
    countOne: "{n} cawangan",
    countMany: "{n} cawangan",
    mapTitle: "Peta cawangan Kaiteki Skin Aesthetic Clinic di {region}",
    cardAlt: "Kaiteki Skin Aesthetic Clinic {name}, {place}",
    notSureHeading: "Tak pasti cawangan mana nak pergi?",
    notSureBody: "Beritahu lokasi anda kepada kami di WhatsApp dan kami akan cadangkan cawangan terdekat yang ada slot paling awal.",
  },
  page: {
    alsoKnownAs: "Juga dikenali sebagai",
    h1: "Kaiteki {name}",
    introFallback: "Cawangan Kaiteki {name} menawarkan rawatan kulit, estetik dan laser yang dipimpin doktor di {city}, {state}.",
    introCta: "Hantar mesej kepada kami di WhatsApp untuk tempah konsultasi percuma atau bertanya tentang arah dan tempat letak kereta.",
    serving: "Berhampiran {list}.",
    galleryAlt: "Kaiteki Skin Aesthetic Clinic {name}: klinik estetik di {city}, {state}",
    address: "Alamat",
    phone: "Telefon",
    hours: "Waktu operasi",
    parking: "Tempat letak kereta",
    hoursJoin: " · ",
    hoursSentenceJoin: ". ",
    sentenceGap: " ",
    contact: "Hubungi {name}",
    mapTitle: "Peta Kaiteki {name}",
    doctors: "Doktor di cawangan ini",
    treatments: "Rawatan di Kaiteki {name}",
    treatmentsIntro:
      "Setiap pelan bermula dengan penilaian doktor, jadi rawatan ditentukan oleh masalah anda, bukan dipilih daripada senarai harga.",
    notEvery:
      "Bukan semua peranti ada di setiap cawangan. Hubungi kami dan kami akan sahkan apa yang ada di {name}, atau tunjukkan cawangan terdekat yang memilikinya.",
    faqHeading: "Kaiteki {name}: soalan lazim",
    nearby: "Cawangan Kaiteki lain di {region}",
    allBranches: "Semua 9 cawangan",
    reviewsHeading: "Kata pesakit tentang Kaiteki {name}",
    readAllReviews: "Baca semua ulasan di Google",
    listJoin: ", ",
    waBook: "Hai Kaiteki {name}, saya nak tempah konsultasi percuma.",
    waAbout: "Hai Kaiteki {name}, saya nak konsultasi percuma tentang: {names}.",
    pickerHeading: "Apa masalah kulit utama anda?",
    pickerBody: "Pilih seberapa banyak yang berkaitan. Kami akan masukkan terus ke dalam mesej WhatsApp anda kepada Kaiteki {name}.",
    pickerButton: "Teruskan di WhatsApp",
    faq: {
      whereQ: "Di mana Kaiteki {name}?",
      whereA: "Kaiteki {name} terletak di {address}.{gettingHere}",
      hoursQ: "Bila waktu operasi Kaiteki {name}?",
      hoursA: "{hours}. Waktu operasi mungkin berubah pada cuti umum, jadi hantar mesej kepada kami di WhatsApp untuk sahkan sebelum datang.",
      parkingQ: "Ada tempat letak kereta di Kaiteki {name}?",
      parkingA: "{parking} Kalau tak pasti di mana pintu masuknya, hantar mesej kepada kami di WhatsApp dan kami akan hantar arah.",
      servesQ: "Kawasan mana yang dekat dengan Kaiteki {name}?",
      servesA:
        "Kaiteki {name} mudah dikunjungi dari {serves}, dan oleh sesiapa yang berada di sekitar {city}. Kaiteki ada sembilan cawangan di seluruh Malaysia, jadi kalau ada cawangan lain yang lebih dekat dengan anda, kami akan beritahu.",
      bookQ: "Bagaimana nak tempah di Kaiteki {name}?",
      bookA:
        "Tempahan dibuat melalui WhatsApp di {phone} atau melalui butang di halaman ini. Lawatan pertama anda ialah konsultasi percuma dengan doktor, bukan rawatan: doktor menilai kulit anda dan menerangkan apa yang sesuai, dan kadangkala jawapan yang jujur ialah tunggu dahulu atau cuba cara lain.",
    },
  },
  places: {},
};

export const locationsCopy: Record<Locale, LocationsCopy> = { en, zh, ms };

/** City or state as printed in `locale`. */
export const place = (locale: Locale, s: string) => locationsCopy[locale].places[s] ?? s;

const STD_ZH = ["周一至周五：上午10点至晚上7点", "周六、周日：上午10点30分至傍晚6点"];
const STD_MS = ["Isnin–Jumaat: 10 pagi–7 malam", "Sabtu–Ahad: 10:30 pagi–6 petang"];

export const branchCopy: Record<NonDefaultLocale, Record<string, BranchCopy>> = {
  zh: {
    "mont-kiara": {
      gettingHere: "Kaiteki Mont Kiara 位于满家乐中心 Jalan Kiara 的 Arcoris Plaza 地下3楼（LG3）。商场内有室内停车场。",
      parking: "Arcoris Plaza 室内停车场。",
      serves: ["Mont Kiara 满家乐", "Sri Hartamas", "Desa ParkCity", "Dutamas", "Segambut"],
      hours: STD_ZH,
      seoTitle: "吉隆坡医美诊所 Mont Kiara 满家乐 | Kaiteki",
      seoDescription: "Kaiteki 满家乐分店（Arcoris Plaza）：由医生主导的皮肤与医美咨询。查看地址、营业时间和医生，在 WhatsApp 预约免费咨询。",
    },
    cheras: {
      gettingHere: "Kaiteki Cheras 位于 Jalan Desa Aman 1 的 Wisma Aman Elite 底楼。附近有路边停车位和大楼停车场。",
      parking: "附近有路边停车位和大楼停车场。",
      serves: ["Cheras 蕉赖", "Desa Aman", "Taman Connaught", "Bandar Sri Permaisuri", "Sungai Long"],
      hours: STD_ZH,
      seoTitle: "吉隆坡医美诊所 Cheras 蕉赖 | Kaiteki",
      seoDescription: "Kaiteki 蕉赖分店位于 Desa Aman 的 Wisma Aman Elite：由医生主导的皮肤与医美咨询。查看地址、营业时间和医生，在 WhatsApp 预约免费咨询。",
    },
    "bukit-jalil": {
      gettingHere: "Kaiteki Bukit Jalil 位于 Jalan Jalil Perkasa 1 的 Jalil Link 2，靠近 Bukit Jalil City。店屋周围有地面停车位。",
      parking: "Jalil Link 周围的地面停车位。",
      serves: ["Bukit Jalil 武吉加里尔", "Sri Petaling", "Puchong 蒲种", "Bukit Kinrara", "Old Klang Road 旧巴生路"],
      hours: STD_ZH,
      seoTitle: "吉隆坡医美诊所 Bukit Jalil | Kaiteki",
      seoDescription: "Kaiteki 武吉加里尔分店（Jalil Link）：由医生主导的皮肤与医美评估。查看地址、营业时间和医生，在 WhatsApp 预约免费咨询。",
    },
    "four-seasons-kl": {
      gettingHere: "Kaiteki Four Seasons 位于 Jalan Ampang 的 Shoppes at Four Seasons Place 4A楼，靠近 KLCC。有代客泊车和商场停车场。请注意：逢星期四休息。",
      parking: "Four Seasons Place 代客泊车和商场停车场。",
      serves: ["KLCC", "吉隆坡市中心", "Bukit Bintang 武吉免登", "Ampang 安邦", "Kampung Baru"],
      hours: ["周一至周三、周五：上午10点至晚上7点", "周六、周日：上午10点30分至傍晚6点", "周四休息"],
      seoTitle: "吉隆坡 KLCC 医美诊所 | Kaiteki",
      seoDescription: "Kaiteki 位于 Four Seasons Place 的诊所，方便 KLCC、安邦和武吉免登一带的人前往。由医生主导的医美咨询，在 WhatsApp 预约免费咨询。",
    },
    "petaling-jaya": {
      gettingHere: "Kaiteki Petaling Jaya 位于 Seksyen 19 Jalan Harapan 的 The Hub SS2（19 Sentral）。大楼内有室内停车场。",
      parking: "The Hub SS2 室内停车场。",
      serves: ["Petaling Jaya 八打灵再也", "SS2", "Damansara 白沙罗", "Kelana Jaya", "Section 17"],
      hours: STD_ZH,
      seoTitle: "八打灵再也医美诊所 PJ SS2 | Kaiteki",
      seoDescription: "Kaiteki 八打灵再也分店位于 SS2 的 The Hub：由医生主导的皮肤与医美咨询。查看地址、营业时间和医生，在 WhatsApp 预约免费咨询。",
    },
    "kota-kemuning": {
      gettingHere: "Kaiteki Kota Kemuning 位于莎阿南 Seksyen 31 哥打甘文宁的 Jalan Anggerik Vanilla。店屋前有路边停车位。",
      parking: "店屋旁的路边停车位。",
      serves: ["Kota Kemuning 哥打甘文宁", "Shah Alam 莎阿南", "Bukit Rimau", "Alam Impian", "Bandar Saujana Putra"],
      hours: STD_ZH,
      seoTitle: "莎阿南医美诊所 Kota Kemuning | Kaiteki",
      seoDescription: "Kaiteki 哥打甘文宁分店位于莎阿南 Seksyen 31：由医生主导的皮肤与医美咨询。查看地址、营业时间和停车，在 WhatsApp 预约免费咨询。",
    },
    "southkey-johor-bahru": {
      gettingHere: "Kaiteki Southkey 位于 Persiaran Southkey 1 的 Komersil Southkey Mozek，就在 Mid Valley Southkey 旁边。商业区内停车位充足。",
      parking: "Mid Valley Southkey 旁的商业区停车位。",
      serves: ["新山 Johor Bahru", "Southkey", "Mount Austin", "Tebrau 地不佬", "Taman Molek"],
      hours: STD_ZH,
      seoTitle: "新山医美诊所 Southkey | Kaiteki",
      seoDescription: "Kaiteki 新山 Southkey 分店就在 Mid Valley Southkey 旁边：由医生主导的皮肤与医美咨询。查看营业时间和医生，在 WhatsApp 预约免费咨询。",
    },
    "pelangi-johor-bahru": {
      gettingHere: "Kaiteki Pelangi 位于彩虹花园 Jalan Sri Pelangi 4 的 Pusat Komersial Pelangi。商业区周围有路边停车位。",
      parking: "商业区周围的路边停车位。",
      serves: ["新山 Johor Bahru", "Taman Pelangi 彩虹花园", "Century Garden", "Taman Sentosa", "Taman Abad"],
      hours: STD_ZH,
      seoTitle: "新山医美诊所 Pelangi 彩虹花园 | Kaiteki",
      seoDescription: "Kaiteki 新山彩虹花园分店位于 Pusat Komersial Pelangi：由医生主导的皮肤与医美咨询。查看地址和营业时间，在 WhatsApp 预约免费咨询。",
    },
    "kota-kinabalu": {
      gettingHere: "Kaiteki Kota Kinabalu 位于沿海大道旁 Imago Shopping Mall（KK Times Square）一楼。商场内有室内停车场，每天营业。",
      parking: "Imago / KK Times Square 室内停车场。",
      serves: ["亚庇 Kota Kinabalu", "Imago", "Sutera Harbour", "Likas", "Penampang 兵南邦"],
      hours: ["每天：上午10点30分至晚上7点"],
      seoTitle: "亚庇医美诊所 Kota Kinabalu | Kaiteki",
      seoDescription: "Kaiteki 亚庇分店位于 Imago Shopping Mall（KK Times Square）：由医生主导的皮肤与医美咨询。每天营业，在 WhatsApp 预约免费咨询。",
    },
  },
  ms: {
    "mont-kiara": {
      gettingHere: "Kaiteki Mont Kiara terletak di aras LG3 Arcoris Plaza di Jalan Kiara, di tengah-tengah Mont Kiara. Tempat letak kereta berbumbung disediakan di pusat beli-belah ini.",
      parking: "Tempat letak kereta berbumbung di Arcoris Plaza.",
      serves: ["Mont Kiara", "Sri Hartamas", "Desa ParkCity", "Dutamas", "Segambut"],
      hours: STD_MS,
      seoTitle: "Klinik Estetik di Mont Kiara, Kuala Lumpur | Kaiteki",
      seoDescription: "Klinik estetik Kaiteki di Mont Kiara: konsultasi kulit dan estetik oleh doktor. Lihat waktu operasi, alamat dan doktor. Tempah konsultasi percuma di WhatsApp.",
    },
    cheras: {
      gettingHere: "Kaiteki Cheras terletak di tingkat bawah Wisma Aman Elite di Jalan Desa Aman 1. Tempat letak kereta di tepi jalan dan di bangunan berdekatan.",
      parking: "Tempat letak kereta di tepi jalan dan di bangunan berdekatan.",
      serves: ["Cheras", "Desa Aman", "Taman Connaught", "Bandar Sri Permaisuri", "Sungai Long"],
      hours: STD_MS,
      seoTitle: "Klinik Kecantikan & Estetik di Cheras, KL | Kaiteki",
      seoDescription: "Klinik kecantikan dan estetik Kaiteki di Cheras: konsultasi kulit oleh doktor. Lihat alamat, waktu operasi dan doktor. Tempah konsultasi percuma di WhatsApp.",
    },
    "bukit-jalil": {
      gettingHere: "Kaiteki Bukit Jalil terletak di Jalil Link 2, Jalan Jalil Perkasa 1, berhampiran Bukit Jalil City. Tempat letak kereta di aras jalan disediakan di sekitar rumah kedai.",
      parking: "Tempat letak kereta di aras jalan di sekitar Jalil Link.",
      serves: ["Bukit Jalil", "Sri Petaling", "Puchong", "Bukit Kinrara", "Old Klang Road"],
      hours: STD_MS,
      seoTitle: "Klinik Estetik di Bukit Jalil, Kuala Lumpur | Kaiteki",
      seoDescription: "Klinik estetik Kaiteki di Bukit Jalil: penilaian kulit dan estetik oleh doktor. Lihat alamat, waktu operasi dan doktor. Tempah konsultasi percuma di WhatsApp.",
    },
    "four-seasons-kl": {
      gettingHere: "Kaiteki Four Seasons terletak di Aras 4A, Shoppes at Four Seasons Place di Jalan Ampang, berhampiran KLCC. Valet dan tempat letak kereta pusat beli-belah disediakan. Perhatian: tutup pada hari Khamis.",
      parking: "Valet dan tempat letak kereta pusat beli-belah di Four Seasons Place.",
      serves: ["KLCC", "pusat bandar Kuala Lumpur", "Bukit Bintang", "Ampang", "Kampung Baru"],
      hours: ["Isnin–Rabu, Jumaat: 10 pagi–7 malam", "Sabtu–Ahad: 10:30 pagi–6 petang", "Tutup pada hari Khamis"],
      seoTitle: "Klinik Estetik Berhampiran KLCC & Ampang | Kaiteki",
      seoDescription: "Klinik Kaiteki di Four Seasons Place dekat dengan KLCC, Ampang dan Bukit Bintang. Konsultasi estetik oleh doktor. Tempah konsultasi percuma di WhatsApp.",
    },
    "petaling-jaya": {
      gettingHere: "Kaiteki Petaling Jaya terletak di The Hub SS2 (19 Sentral), Jalan Harapan, Seksyen 19. Tempat letak kereta berbumbung disediakan di bangunan ini.",
      parking: "Tempat letak kereta berbumbung di The Hub SS2.",
      serves: ["Petaling Jaya", "SS2", "Damansara", "Kelana Jaya", "Seksyen 17"],
      hours: STD_MS,
      seoTitle: "Klinik Estetik di Petaling Jaya, Selangor | Kaiteki",
      seoDescription: "Klinik estetik Kaiteki di Petaling Jaya (SS2): konsultasi kulit dan estetik oleh doktor. Lihat waktu operasi dan doktor. Tempah konsultasi percuma di WhatsApp.",
    },
    "kota-kemuning": {
      gettingHere: "Kaiteki Kota Kemuning terletak di Jalan Anggerik Vanilla, Kota Kemuning, Seksyen 31, Shah Alam. Tempat letak kereta di tepi jalan disediakan di hadapan rumah kedai.",
      parking: "Tempat letak kereta di tepi jalan berhampiran rumah kedai.",
      serves: ["Kota Kemuning", "Shah Alam", "Bukit Rimau", "Alam Impian", "Bandar Saujana Putra"],
      hours: STD_MS,
      seoTitle: "Klinik Kecantikan di Kota Kemuning, Shah Alam | Kaiteki",
      seoDescription: "Klinik kecantikan dan estetik Kaiteki di Kota Kemuning, Shah Alam: konsultasi oleh doktor. Lihat alamat dan waktu operasi. Tempah konsultasi percuma di WhatsApp.",
    },
    "southkey-johor-bahru": {
      gettingHere: "Kaiteki Southkey terletak di Komersil Southkey Mozek, Persiaran Southkey 1, bersebelahan kawasan Mid Valley Southkey. Banyak tempat letak kereta di kawasan komersial ini.",
      parking: "Tempat letak kereta kawasan komersial bersebelahan Mid Valley Southkey.",
      serves: ["Johor Bahru", "Southkey", "Mount Austin", "Tebrau", "Taman Molek"],
      hours: STD_MS,
      seoTitle: "Klinik Estetik di Southkey, Johor Bahru | Kaiteki",
      seoDescription: "Klinik estetik Kaiteki di Southkey, Johor Bahru: konsultasi kulit dan estetik oleh doktor. Lihat waktu operasi dan doktor. Tempah konsultasi percuma di WhatsApp.",
    },
    "pelangi-johor-bahru": {
      gettingHere: "Kaiteki Pelangi terletak di Pusat Komersial Pelangi, Jalan Sri Pelangi 4, Taman Pelangi. Tempat letak kereta di tepi jalan disediakan di sekitar blok komersial.",
      parking: "Tempat letak kereta di tepi jalan di sekitar blok komersial.",
      serves: ["Johor Bahru", "Taman Pelangi", "Century Garden", "Taman Sentosa", "Taman Abad"],
      hours: STD_MS,
      seoTitle: "Klinik Kecantikan di Taman Pelangi, Johor Bahru | Kaiteki",
      seoDescription: "Klinik kecantikan dan estetik Kaiteki di Taman Pelangi, Johor Bahru: konsultasi oleh doktor. Lihat alamat dan waktu operasi. Tempah konsultasi percuma di WhatsApp.",
    },
    "kota-kinabalu": {
      gettingHere: "Kaiteki Kota Kinabalu terletak di tingkat satu Imago Shopping Mall (KK Times Square), di luar Lebuhraya Pantai. Tempat letak kereta berbumbung disediakan di pusat beli-belah ini; dibuka setiap hari.",
      parking: "Tempat letak kereta berbumbung di Imago / KK Times Square.",
      serves: ["Kota Kinabalu", "Imago", "Sutera Harbour", "Likas", "Penampang"],
      hours: ["Setiap hari: 10:30 pagi–7 malam"],
      seoTitle: "Klinik Estetik di Kota Kinabalu, Sabah | Kaiteki",
      seoDescription: "Klinik estetik dan kecantikan Kaiteki di Kota Kinabalu (Imago): konsultasi kulit oleh doktor. Lihat waktu operasi dan doktor. Tempah konsultasi percuma di WhatsApp.",
    },
  },
};
