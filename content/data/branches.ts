import type { Branch } from "@/lib/types";

// Area/city/region + NAP migrated from the live site's published branch pages
// (docs/05 §9). Verify against current clinic records before launch — the legacy
// source may be stale. Standard hours (Mon–Fri 10–7, Sat–Sun 10:30–6) apply
// except where noted (Four Seasons closed Thu; Kota Kinabalu daily).
const STD_HOURS = ["Mon–Fri: 10am–7pm", "Sat–Sun: 10:30am–6pm"];

export const branches: Branch[] = [
  { slug: "mont-kiara", name: "Mont Kiara", city: "Kuala Lumpur", state: "WP Kuala Lumpur", region: "Klang Valley", photo: "/images/branches/mont-kiara.jpg", address: "LOT LG3-2-LG3-3A, LG 3 Level, ARCORIS Plaza, 10 Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur", phone: "+6011-3332 5126", hours: STD_HOURS, mapUrl: "https://maps.app.goo.gl/BRJmHruQb9QMEYVE6", treatments: ["pico-laser", "hifu", "ultherapy", "coolsculpting"] },
  { slug: "cheras", name: "Cheras", city: "Kuala Lumpur", state: "WP Kuala Lumpur", region: "Klang Valley", photo: "/images/branches/cheras.jpg", address: "G-11, Wisma Aman Elite, Jalan Desa Aman 1, Desa Aman, 56100 Kuala Lumpur", phone: "+6010-381 8170", hours: STD_HOURS, mapUrl: "https://maps.app.goo.gl/o1ZjrDXVU63RpjbM7", treatments: ["pico-laser", "hifu", "skin-booster"] },
  { slug: "bukit-jalil", name: "Bukit Jalil", city: "Kuala Lumpur", state: "WP Kuala Lumpur", region: "Klang Valley", photo: "/images/branches/bukit-jalil.jpg", address: "C-5-G, Jalil Link 2, No 5, Jalan Jalil Perkasa 1, Bukit Jalil, 57000 Kuala Lumpur", phone: "+6011-3301 7188", hours: STD_HOURS, mapUrl: "https://maps.app.goo.gl/eQaG35pEVW5RPjGx8", treatments: ["pico-laser", "fotona-4d", "microneedling"] },
  { slug: "four-seasons-kl", name: "Four Seasons KL", city: "Kuala Lumpur", state: "WP Kuala Lumpur", region: "Klang Valley", photo: "/images/branches/four-seasons-kl.jpg", address: "L4A-1, Level 4A, Shoppes at Four Seasons Place-KL, No 145 Jalan Ampang, 50450 Kuala Lumpur", phone: "+6011-1427 8916", hours: ["Mon–Wed, Fri: 10am–7pm", "Sat–Sun: 10:30am–6pm", "Closed Thursday"], mapUrl: "https://maps.app.goo.gl/crfDAoT2oGYAc9bP8", treatments: ["ultherapy", "hifu", "skin-booster"] },
  { slug: "petaling-jaya", name: "Petaling Jaya", city: "Petaling Jaya", state: "Selangor", region: "Klang Valley", photo: "/images/branches/petaling-jaya.jpg", address: "B-1-03, The Hub SS2, 19 Sentral, Jalan Harapan, Seksyen 19, 46300 Petaling Jaya, Selangor", phone: "+6010-368 1400", hours: STD_HOURS, mapUrl: "https://maps.app.goo.gl/nm3aAT2CikD3pXLb8", treatments: ["pico-laser", "coolsculpting", "onda"] },
  { slug: "kota-kemuning", name: "Kota Kemuning", city: "Shah Alam", state: "Selangor", region: "Klang Valley", photo: "/images/branches/kota-kemuning.jpg", address: "6-1, 8 Jalan Anggerik Vanilla BE31/BE, Kota Kemuning, Seksyen 31, 40460 Shah Alam, Selangor", phone: "+6012-686 6818", hours: STD_HOURS, mapUrl: "https://maps.app.goo.gl/2ymU6QX2maTupLWJ9", treatments: ["pico-laser", "hifu", "microneedling"] },
  { slug: "southkey-johor-bahru", name: "Southkey, Johor Bahru", city: "Johor Bahru", state: "Johor", region: "Johor", photo: "/images/branches/southkey-johor-bahru.jpg", address: "No 01-10 Block G, Komersil Southkey Mozek, Persiaran Southkey 1, 80150 Kota Southkey, Johor", phone: "+6014-337 5126", hours: STD_HOURS, mapUrl: "https://maps.app.goo.gl/ZZE3nJPccPvcL8Sp9", treatments: ["pico-laser", "hifu", "coolsculpting"] },
  { slug: "pelangi-johor-bahru", name: "Pelangi, Johor Bahru", city: "Johor Bahru", state: "Johor", region: "Johor", photo: "/images/branches/pelangi-johor-bahru.jpg", address: "12, Blok C, Pusat Komersial Pelangi, Jln Sri Pelangi 4, Taman Pelangi, 80400 Johor Bahru, Johor", phone: "+6016-930 0138", hours: STD_HOURS, mapUrl: "https://maps.app.goo.gl/pg1Y6ouZFg7QAPZL6", treatments: ["pico-laser", "skin-booster"] },
  { slug: "kota-kinabalu", name: "Kota Kinabalu", city: "Kota Kinabalu", state: "Sabah", region: "Sabah", photo: "/images/branches/kota-kinabalu.jpg", address: "Lot 1-45/46, First Floor, KK Times Square, Imago Shopping Mall, Phase 2, Off Coastal Highway, 88100 Kota Kinabalu, Sabah", phone: "+6014-823 1688", hours: ["Daily: 10:30am–7pm"], mapUrl: "https://maps.app.goo.gl/7kKAjSdWaALGxMT58", treatments: ["pico-laser", "hifu", "fotona-4d"] },
];

export const regionOrder: Branch["region"][] = ["Klang Valley", "Johor", "Sabah"];

export function branchBySlug(slug: string) {
  return branches.find((b) => b.slug === slug);
}
