import type { Branch } from "@/lib/types";

// Area/city/region are known; exact street NAP + hours are a client data
// dependency (docs/05 §9) surfaced on the branch page, not invented here.
export const branches: Branch[] = [
  { slug: "mont-kiara", name: "Mont Kiara", city: "Kuala Lumpur", state: "WP Kuala Lumpur", region: "Klang Valley", photo: "/images/branches/mont-kiara.jpg", treatments: ["pico-laser", "hifu", "ultherapy", "coolsculpting"] },
  { slug: "cheras", name: "Cheras", city: "Kuala Lumpur", state: "WP Kuala Lumpur", region: "Klang Valley", photo: "/images/branches/cheras.jpg", treatments: ["pico-laser", "hifu", "skin-booster"] },
  { slug: "bukit-jalil", name: "Bukit Jalil", city: "Kuala Lumpur", state: "WP Kuala Lumpur", region: "Klang Valley", photo: "/images/branches/bukit-jalil.jpg", treatments: ["pico-laser", "fotona-4d", "microneedling"] },
  { slug: "four-seasons-kl", name: "Four Seasons KL", city: "Kuala Lumpur", state: "WP Kuala Lumpur", region: "Klang Valley", photo: "/images/branches/four-seasons-kl.jpg", treatments: ["ultherapy", "hifu", "skin-booster"] },
  { slug: "petaling-jaya", name: "Petaling Jaya", city: "Petaling Jaya", state: "Selangor", region: "Klang Valley", photo: "/images/branches/petaling-jaya.jpg", treatments: ["pico-laser", "coolsculpting", "onda"] },
  { slug: "kota-kemuning", name: "Kota Kemuning", city: "Shah Alam", state: "Selangor", region: "Klang Valley", photo: "/images/branches/kota-kemuning.jpg", treatments: ["pico-laser", "hifu", "microneedling"] },
  { slug: "southkey-johor-bahru", name: "Southkey, Johor Bahru", city: "Johor Bahru", state: "Johor", region: "Johor", photo: "/images/branches/southkey-johor-bahru.jpg", treatments: ["pico-laser", "hifu", "coolsculpting"] },
  { slug: "pelangi-johor-bahru", name: "Pelangi, Johor Bahru", city: "Johor Bahru", state: "Johor", region: "Johor", photo: "/images/branches/pelangi-johor-bahru.jpg", treatments: ["pico-laser", "skin-booster"] },
  { slug: "kota-kinabalu", name: "Kota Kinabalu", city: "Kota Kinabalu", state: "Sabah", region: "Sabah", photo: "/images/branches/kota-kinabalu.jpg", treatments: ["pico-laser", "hifu", "fotona-4d"] },
];

export const regionOrder: Branch["region"][] = ["Klang Valley", "Johor", "Sabah"];

export function branchBySlug(slug: string) {
  return branches.find((b) => b.slug === slug);
}
