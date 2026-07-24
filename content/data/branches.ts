import type { Branch } from "@/lib/types";

// Area/city/region + NAP migrated from the live site's published branch pages
// (docs/05 §9). Verify against current clinic records before launch — the legacy
// source may be stale. Standard hours (Mon–Fri 10–7, Sat–Sun 10:30–6) apply
// except where noted (Four Seasons closed Thu; Kota Kinabalu daily).
//
// ⚠️ `serves` / `parking` / `gettingHere` are INFERRED from each address for
// local-SEO uniqueness — CLIENT TO VERIFY before launch. `lat`/`lng` left unset
// on purpose (no fabricated coordinates); fill from clinic records to light up
// schema `geo` + the map pack.
const STD_HOURS = ["Mon–Fri: 10am–7pm", "Sat–Sun: 10:30am–6pm"];
const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const WEEKEND = ["Saturday", "Sunday"];
const STD_SPEC = [
  { days: WEEKDAYS, opens: "10:00", closes: "19:00" },
  { days: WEEKEND, opens: "10:30", closes: "18:00" },
];

export const branches: Branch[] = [
  {
    slug: "mont-kiara", name: "Mont Kiara", city: "Kuala Lumpur", state: "WP Kuala Lumpur", region: "Kuala Lumpur",
    photo: "/images/branches/mont-kiara.jpg",
    address: "LOT LG3-2-LG3-3A, LG 3 Level, ARCORIS Plaza, 10 Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur",
    phone: "+6011-3332 5126", hours: STD_HOURS, hoursSpec: STD_SPEC,
    mapUrl: "https://maps.app.goo.gl/BRJmHruQb9QMEYVE6",
    gettingHere: "Kaiteki Mont Kiara sits on the LG3 level of Arcoris Plaza on Jalan Kiara, in the heart of Mont Kiara. Covered mall parking is available on site.",
    parking: "Covered parking at Arcoris Plaza.",
    serves: ["Mont Kiara", "Sri Hartamas", "Desa ParkCity", "Dutamas", "Segambut"],
    seoTitle: "Aesthetic Clinic in Mont Kiara, Kuala Lumpur | Kaiteki",
    seoDescription: "Kaiteki's aesthetic clinic in Mont Kiara — doctor-led skin & aesthetic treatments. See hours, address & doctors. Book a free consultation via WhatsApp.",
  },
  {
    slug: "cheras", name: "Cheras", city: "Kuala Lumpur", state: "WP Kuala Lumpur", region: "Kuala Lumpur",
    photo: "/images/branches/cheras.jpg",
    address: "G-11, Wisma Aman Elite, Jalan Desa Aman 1, Desa Aman, 56100 Kuala Lumpur",
    phone: "+6010-381 8170", hours: STD_HOURS, hoursSpec: STD_SPEC,
    mapUrl: "https://maps.app.goo.gl/o1ZjrDXVU63RpjbM7",
    gettingHere: "Kaiteki Cheras is on the ground floor of Wisma Aman Elite along Jalan Desa Aman 1. On-street and building parking are available nearby.",
    parking: "Street and building parking nearby.",
    serves: ["Cheras", "Desa Aman", "Taman Connaught", "Bandar Sri Permaisuri", "Sungai Long"],
    seoTitle: "Aesthetic Clinic in Cheras, Kuala Lumpur | Kaiteki",
    seoDescription: "Visit Kaiteki's aesthetic clinic in Cheras for doctor-led skin & aesthetic consultations. Check address, hours & doctors. Book free via WhatsApp.",
  },
  {
    slug: "bukit-jalil", name: "Bukit Jalil", city: "Kuala Lumpur", state: "WP Kuala Lumpur", region: "Kuala Lumpur",
    photo: "/images/branches/bukit-jalil.jpg",
    address: "C-5-G, Jalil Link 2, No 5, Jalan Jalil Perkasa 1, Bukit Jalil, 57000 Kuala Lumpur",
    phone: "+6011-3301 7188", hours: STD_HOURS, hoursSpec: STD_SPEC,
    mapUrl: "https://maps.app.goo.gl/eQaG35pEVW5RPjGx8",
    gettingHere: "Kaiteki Bukit Jalil is at Jalil Link 2 on Jalan Jalil Perkasa 1, close to Bukit Jalil City. Ground-level parking is available around the shoplots.",
    parking: "Ground-level parking around Jalil Link.",
    serves: ["Bukit Jalil", "Sri Petaling", "Puchong", "Bukit Kinrara", "Old Klang Road"],
    seoTitle: "Aesthetic Clinic in Bukit Jalil, Kuala Lumpur | Kaiteki",
    seoDescription: "Kaiteki's aesthetic clinic in Bukit Jalil — doctor-led skin & aesthetic assessments. See address, hours & doctors. Book free on WhatsApp.",
  },
  {
    slug: "four-seasons-kl", name: "Four Seasons KL", city: "Kuala Lumpur", state: "WP Kuala Lumpur", region: "Kuala Lumpur",
    alsoKnownAs: "La Jung Clinic by Kaiteki",
    photo: "/images/branches/four-seasons-kl.jpg",
    address: "L4A-1, Level 4A, Shoppes at Four Seasons Place-KL, No 145 Jalan Ampang, 50450 Kuala Lumpur",
    phone: "+6011-1427 8916",
    hours: ["Mon–Wed, Fri: 10am–7pm", "Sat–Sun: 10:30am–6pm", "Closed Thursday"],
    hoursSpec: [
      { days: ["Monday", "Tuesday", "Wednesday", "Friday"], opens: "10:00", closes: "19:00" },
      { days: WEEKEND, opens: "10:30", closes: "18:00" },
    ],
    mapUrl: "https://maps.app.goo.gl/crfDAoT2oGYAc9bP8",
    gettingHere: "Kaiteki Four Seasons is on Level 4A of the Shoppes at Four Seasons Place on Jalan Ampang, by KLCC. Valet and mall parking are available. Note: closed on Thursdays.",
    parking: "Valet and mall parking at Four Seasons Place.",
    serves: ["KLCC", "Kuala Lumpur city centre", "Bukit Bintang", "Ampang", "Kampung Baru"],
    seoTitle: "Aesthetic Clinic Near KLCC, Ampang & Four Seasons | Kaiteki",
    seoDescription: "Kaiteki's clinic at Four Seasons Place serves KLCC, Ampang & Bukit Bintang with doctor-led aesthetic consultations. Book free on WhatsApp.",
  },
  {
    slug: "petaling-jaya", name: "Petaling Jaya", city: "Petaling Jaya", state: "Selangor", region: "Selangor",
    photo: "/images/branches/petaling-jaya.jpg",
    address: "B-1-03, The Hub SS2, 19 Sentral, Jalan Harapan, Seksyen 19, 46300 Petaling Jaya, Selangor",
    phone: "+6010-368 1400", hours: STD_HOURS, hoursSpec: STD_SPEC,
    mapUrl: "https://maps.app.goo.gl/nm3aAT2CikD3pXLb8",
    gettingHere: "Kaiteki Petaling Jaya is at The Hub SS2 (19 Sentral) on Jalan Harapan, Seksyen 19. Covered building parking is available on site.",
    parking: "Covered parking at The Hub SS2.",
    serves: ["Petaling Jaya", "SS2", "Damansara", "Kelana Jaya", "Section 17"],
    seoTitle: "Aesthetic Clinic in Petaling Jaya, Selangor | Kaiteki",
    seoDescription: "Kaiteki's aesthetic clinic in Petaling Jaya (SS2) — doctor-led skin & aesthetic consultations. See hours & doctors. Book free via WhatsApp.",
  },
  {
    slug: "kota-kemuning", name: "Kota Kemuning", city: "Shah Alam", state: "Selangor", region: "Selangor",
    photo: "/images/branches/kota-kemuning.jpg",
    address: "6-1, 8 Jalan Anggerik Vanilla BE31/BE, Kota Kemuning, Seksyen 31, 40460 Shah Alam, Selangor",
    phone: "+6012-686 6818", hours: STD_HOURS, hoursSpec: STD_SPEC,
    mapUrl: "https://maps.app.goo.gl/2ymU6QX2maTupLWJ9",
    gettingHere: "Kaiteki Kota Kemuning is on Jalan Anggerik Vanilla in Kota Kemuning, Seksyen 31, Shah Alam. On-street parking is available in front of the shoplots.",
    parking: "On-street parking by the shoplots.",
    serves: ["Kota Kemuning", "Shah Alam", "Bukit Rimau", "Alam Impian", "Bandar Saujana Putra"],
    seoTitle: "Aesthetic Clinic in Kota Kemuning, Shah Alam | Kaiteki",
    seoDescription: "Kaiteki's aesthetic clinic in Kota Kemuning, Shah Alam — doctor-led skin & aesthetic consultations. See address & hours. Book free via WhatsApp.",
  },
  {
    slug: "southkey-johor-bahru", name: "Southkey, Johor Bahru", city: "Johor Bahru", state: "Johor", region: "Johor",
    photo: "/images/branches/southkey-johor-bahru.jpg",
    address: "No 01-10 Block G, Komersil Southkey Mozek, Persiaran Southkey 1, 80150 Kota Southkey, Johor",
    phone: "+6014-337 5126", hours: STD_HOURS, hoursSpec: STD_SPEC,
    mapUrl: "https://maps.app.goo.gl/ZZE3nJPccPvcL8Sp9",
    gettingHere: "Kaiteki Southkey is at Komersil Southkey Mozek on Persiaran Southkey 1, beside the Mid Valley Southkey precinct. Ample parking is available in the commercial area.",
    parking: "Commercial-area parking beside Mid Valley Southkey.",
    serves: ["Johor Bahru", "Southkey", "Mount Austin", "Tebrau", "Taman Molek"],
    seoTitle: "Aesthetic Clinic in Southkey, Johor Bahru | Kaiteki",
    seoDescription: "Kaiteki's aesthetic clinic at Southkey, Johor Bahru — doctor-led skin & aesthetic consultations. See hours & doctors. Book free on WhatsApp.",
  },
  {
    slug: "pelangi-johor-bahru", name: "Pelangi, Johor Bahru", city: "Johor Bahru", state: "Johor", region: "Johor",
    photo: "/images/branches/pelangi-johor-bahru.jpg",
    address: "12, Blok C, Pusat Komersial Pelangi, Jln Sri Pelangi 4, Taman Pelangi, 80400 Johor Bahru, Johor",
    phone: "+6016-930 0138", hours: STD_HOURS, hoursSpec: STD_SPEC,
    mapUrl: "https://maps.app.goo.gl/pg1Y6ouZFg7QAPZL6",
    gettingHere: "Kaiteki Pelangi is at Pusat Komersial Pelangi on Jalan Sri Pelangi 4, Taman Pelangi. On-street parking is available around the commercial blocks.",
    parking: "On-street parking around the commercial blocks.",
    serves: ["Johor Bahru", "Taman Pelangi", "Century Garden", "Taman Sentosa", "Taman Abad"],
    seoTitle: "Aesthetic Clinic in Taman Pelangi, Johor Bahru | Kaiteki",
    seoDescription: "Kaiteki's aesthetic clinic in Taman Pelangi, Johor Bahru — doctor-led skin & aesthetic consultations. See address & hours. Book free via WhatsApp.",
  },
  {
    slug: "kota-kinabalu", name: "Kota Kinabalu", city: "Kota Kinabalu", state: "Sabah", region: "Sabah",
    photo: "/images/branches/kota-kinabalu.jpg",
    address: "Lot 1-45/46, First Floor, KK Times Square, Imago Shopping Mall, Phase 2, Off Coastal Highway, 88100 Kota Kinabalu, Sabah",
    phone: "+6014-823 1688",
    hours: ["Daily: 10:30am–7pm"],
    hoursSpec: [{ days: [...WEEKDAYS, ...WEEKEND], opens: "10:30", closes: "19:00" }],
    mapUrl: "https://maps.app.goo.gl/7kKAjSdWaALGxMT58",
    gettingHere: "Kaiteki Kota Kinabalu is on the first floor of Imago Shopping Mall (KK Times Square), off the Coastal Highway. Covered mall parking is available; open daily.",
    parking: "Covered mall parking at Imago / KK Times Square.",
    serves: ["Kota Kinabalu", "Imago", "Sutera Harbour", "Likas", "Penampang"],
    seoTitle: "Aesthetic Clinic in Kota Kinabalu, Sabah | Kaiteki",
    seoDescription: "Kaiteki's aesthetic clinic in Kota Kinabalu (Imago) — doctor-led skin & aesthetic consultations. See hours & doctors. Book free via WhatsApp.",
  },
];

export const regionOrder: Branch["region"][] = ["Kuala Lumpur", "Selangor", "Johor", "Sabah"];

export function branchBySlug(slug: string) {
  return branches.find((b) => b.slug === slug);
}
