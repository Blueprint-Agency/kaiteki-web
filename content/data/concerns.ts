import type { Concern } from "@/lib/types";

// acne is fully authored as the concern-pillar showcase (docs/06 §5.3). Others
// carry a compliant summary + lead answer so their [slug] page renders honestly.
// `reviewedBy` points at real doctors from content/data/doctors.ts as a
// plausible provisional assignment — NOT a confirmed claim that they
// personally reviewed this page; real editorial sign-off must replace this
// before launch.
export const concerns: Concern[] = [
  {
    slug: "acne",
    name: "Acne",
    group: "Skin",
    image: "/images/concerns/acne.jpg",
    summary:
      "Acne and acne scarring have several causes and types — assessment guides which treatments may help.",
    leadAnswer:
      "Acne is a common skin condition in which pores become blocked, sometimes leading to spots, inflammation and, over time, scarring. It has several causes and types, so what helps one person may not suit another. A consultation helps determine which approach, if any, is appropriate for your skin.",
    treatments: ["pico-laser", "microneedling", "exosome-therapy"],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-06-22",
    sections: [
      {
        heading: "What is acne?",
        body: [
          "Acne occurs when hair follicles become blocked with oil and dead skin cells, which can lead to blackheads, whiteheads and inflamed spots. It most often affects the face but can appear on the back and chest.",
          "Acne is a medical condition rather than simply a cosmetic concern, and it is common in both teenagers and adults. Understanding your type of acne is the first step in deciding whether treatment may help.",
        ],
      },
      {
        heading: "Common causes",
        body: [
          "Several factors can contribute to acne, often in combination. These may include hormones, oil production, certain bacteria and inflammation. Skincare habits, environment and family history can also play a part.",
        ],
        list: [
          "Hormonal changes and cycles",
          "Excess oil (sebum) production",
          "Blocked pores and skin-cell build-up",
          "Inflammation and skin bacteria",
        ],
      },
      {
        heading: "Types of acne & scarring",
        body: [
          "Acne ranges from non-inflamed blackheads and whiteheads to inflamed papules, pustules and deeper nodules. When inflamed acne settles, it can sometimes leave marks or scarring — such as rolling, boxcar or ice-pick scars — which are addressed differently from active acne.",
          "Because active acne and acne scarring are different, a doctor assesses which you have before discussing options.",
        ],
      },
      {
        heading: "When to see a doctor",
        body: [
          "It is reasonable to seek advice if acne is persistent, painful, leaving marks, or affecting how you feel. A doctor can assess your skin, explain the options and their risks, and help you decide on a sensible plan.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can acne scarring be treated?",
        a: "Acne scarring is approached differently from active acne, and several options may be considered depending on the scar type. Results vary between individuals, so a doctor assesses your skin and explains what is realistic before recommending anything.",
      },
      {
        q: "Why does adult acne happen?",
        a: "Adult acne can be influenced by hormones, oil production, skincare and other factors, often in combination. A consultation helps identify the likely contributors for your skin so any plan is tailored to you.",
      },
      {
        q: "Will treatment make my acne worse first?",
        a: "Some approaches can involve an adjustment period, which your doctor will explain beforehand. Sharing your history at consultation helps the doctor choose an approach suited to your skin and set realistic expectations.",
      },
    ],
  },

  { slug: "pigmentation", name: "Pigmentation", group: "Skin", image: "/images/concerns/pigmentation.jpg", summary: "Uneven pigmentation such as melasma, sun spots and post-inflammatory marks are assessed individually.", leadAnswer: "Pigmentation describes areas of darker skin such as melasma, sun-related spots or marks left after inflammation. The type matters, because each responds differently and some need particular care. A consultation helps determine which approach, if any, may be appropriate for your skin.", treatments: ["pico-laser", "skin-booster", "dermav"], reviewedBy: "dr-chew-yuhhui", lastReviewed: "2026-06-20" },
  { slug: "enlarged-pores", name: "Enlarged Pores", group: "Skin", image: "/images/concerns/enlarged-pores.jpg", summary: "Pore appearance is influenced by oil, skin texture and age — several options may help.", leadAnswer: "Enlarged-looking pores are influenced by oil production, skin texture, sun exposure and age. Pores do not physically open and close, but their appearance can sometimes be refined. A consultation helps determine which approach, if any, may suit your skin.", treatments: ["microneedling", "pico-laser", "radiofrequency"], reviewedBy: "dr-chew-yuhhui", lastReviewed: "2026-06-18" },
  { slug: "fine-lines-wrinkles", name: "Fine Lines & Wrinkles", group: "Skin", image: "/images/concerns/fine-lines-wrinkles.jpg", summary: "Expression lines and static wrinkles are approached differently — assessment guides the plan.", leadAnswer: "Fine lines and wrinkles develop with movement, age and skin quality. Expression lines and static lines are approached differently, so a doctor assesses which you have. A consultation helps determine which approach, if any, may be appropriate for your skin.", treatments: ["hifu", "ultherapy", "skin-booster", "microneedling"], reviewedBy: "dr-yeong-bin", lastReviewed: "2026-06-16" },
  { slug: "dark-eye-circles", name: "Dark Eye Circles", group: "Skin", image: "/images/concerns/dark-eye-circles.jpg", summary: "Under-eye darkness can be pigment, vascular or structural — the cause guides the approach.", leadAnswer: "Dark eye circles can be caused by pigmentation, visible blood vessels, or the structure and hollowing of the under-eye area — often in combination. Because the causes differ, a consultation helps determine which approach, if any, may be appropriate for you.", treatments: ["skin-booster", "dermav", "radiofrequency"], reviewedBy: "dr-chew-yuhhui", lastReviewed: "2026-06-14" },
  { slug: "face-contouring", name: "Face Contouring", group: "Face & Body", image: "/images/concerns/face-contouring.jpg", summary: "Facial contour concerns are assessed individually to determine suitable options.", leadAnswer: "Face-contouring concerns relate to the shape and definition of areas such as the jawline and chin. Several treatments may be considered depending on the concern and your anatomy. A consultation helps determine which approach, if any, may be appropriate.", treatments: ["hifu", "coolsculpting", "radiofrequency"], reviewedBy: "dr-yeong-bin", lastReviewed: "2026-06-12" },
  { slug: "face-lifting", name: "Face Lifting", group: "Face & Body", image: "/images/concerns/face-lifting.jpg", summary: "Non-surgical lifting and firmness concerns are assessed to guide a suitable plan.", leadAnswer: "Face-lifting concerns relate to firmness and laxity as skin changes over time. Non-surgical, energy-based treatments may be considered depending on your assessment. A consultation helps determine which approach, if any, may be appropriate for you.", treatments: ["hifu", "ultherapy", "fotona-4d", "onda"], reviewedBy: "dr-yeong-bin", lastReviewed: "2026-06-12" },
  { slug: "aging", name: "Aging", group: "Face & Body", image: "/images/concerns/aging.jpg", summary: "Skin ageing involves firmness, texture and volume — approached with an individual plan.", leadAnswer: "Skin ageing involves gradual changes in firmness, texture, hydration and volume. Because several factors are usually involved, a plan is individual. A consultation helps determine which approaches, if any, may be appropriate for your skin and goals.", treatments: ["hifu", "ultherapy", "skin-booster", "bio-stimulator"], reviewedBy: "dr-chew-yuhhui", lastReviewed: "2026-06-10" },
  { slug: "body-slimming", name: "Body Slimming", group: "Face & Body", image: "/images/concerns/body-slimming.jpg", summary: "Localised fat concerns are assessed individually; these are not weight-loss treatments.", leadAnswer: "Body-contouring concerns relate to pockets of localised fat in specific areas, rather than overall weight. In-clinic treatments are not a substitute for weight loss. A consultation helps determine which approach, if any, may be appropriate for you.", treatments: ["coolsculpting", "fat-freezing", "onda"], reviewedBy: "dr-yeong-bin", lastReviewed: "2026-06-08" },
  { slug: "hair-loss", name: "Hair Loss", group: "Face & Body", image: "/images/concerns/hair-loss.jpg", summary: "Hair-loss patterns have different causes — assessment guides whether treatment may help.", leadAnswer: "Hair loss has several patterns and causes, and some shedding is normal. Identifying the likely cause is important before considering treatment. A consultation helps determine which approach, if any, may be appropriate for you.", treatments: ["exosome-therapy"], reviewedBy: "dr-yeong-bin", lastReviewed: "2026-06-06" },
];

export const concernGroups: Concern["group"][] = ["Skin", "Face & Body"];

export function concernBySlug(slug: string) {
  return concerns.find((c) => c.slug === slug);
}

export function concernsByGroup(group: Concern["group"]) {
  return concerns.filter((c) => c.group === group);
}
