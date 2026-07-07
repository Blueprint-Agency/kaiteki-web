import type { Treatment } from "@/lib/types";

// KKLIU numbers, review dates are SAMPLE placeholders pending the real MAB
// approvals (docs/05 §8–§9). `reviewedBy` points at real doctors from
// content/data/doctors.ts as a plausible provisional assignment — it is NOT a
// confirmed claim that they personally reviewed this page; real editorial
// sign-off must replace this before launch. Copy is written to the
// MAB-compliant patterns in docs/05 §2 — no superlatives, guarantees or
// before/after. pico-laser is fully authored as the master-template showcase.
export const treatments: Treatment[] = [
  {
    slug: "pico-laser",
    name: "Pico Laser",
    category: "Pigment & Resurfacing",
    image: "/images/treatments/pico-laser.webp",
    device: "PicoSure",
    summary:
      "A picosecond laser used for pigmentation, dull skin tone and tattoo removal, suited to a range of Asian skin tones.",
    leadAnswer:
      "Pico laser is a picosecond-pulse laser treatment that delivers very short bursts of energy to the skin. It is commonly used for pigmentation concerns, uneven skin tone and tattoo removal. Suitability and the number of sessions vary between individuals; a consultation is required to assess whether it is appropriate for you.",
    concerns: ["pigmentation", "acne", "enlarged-pores"],
    related: ["microneedling", "skin-booster"],
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-06-20",
    kkliu: "KKLIU 0000/2026 (sample)",
    kkliuExpiry: "2026-12-31",
    sections: [
      {
        heading: "What is Pico laser?",
        body: [
          "Pico laser refers to a group of aesthetic lasers that release energy in picoseconds — trillionths of a second. Because the pulses are so short, the energy is delivered as a rapid photomechanical effect rather than mainly as heat.",
          "At Kaiteki, Pico laser is used chiefly to address pigmentation, uneven tone and certain tattoo inks. Whether it suits your skin depends on your concern, skin type and history, which a doctor assesses during consultation.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "The short pulses target pigment particles and break them into smaller fragments that the body may gradually clear over time. The same photomechanical effect can also prompt a mild skin-renewal response.",
          "Settings are selected by the treating doctor for your skin tone and concern. Results develop gradually and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Pico laser is commonly considered for the following concerns. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
        ],
        list: [
          "Uneven pigmentation and dull-looking skin tone",
          "Certain sun-related and post-inflammatory marks",
          "Selected tattoo inks (as tattoo removal)",
          "Overall skin-tone refinement as part of a plan",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Suitability is assessed individually. Pico laser may not be appropriate during pregnancy, with certain skin conditions or medications, or on recently tanned skin. Please share your full medical and skincare history at consultation so the doctor can advise safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "A typical visit begins with a doctor consultation and skin assessment. If Pico laser is appropriate, a patch or test area may be considered before proceeding. Sessions are usually short; a cooling or soothing step may follow.",
          "A course of several sessions spaced a few weeks apart is common, but the plan is individual. Your doctor will explain what to expect for your skin.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime is usually limited but varies. Temporary redness or mild sensitivity can occur and typically settles. Sun protection and gentle skincare are advised afterwards; your doctor will give aftercare guidance specific to you.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any medical procedure, Pico laser carries risks, which are explained during consultation. Temporary effects can include redness, swelling or changes in pigmentation. Serious effects are uncommon when the treatment is appropriately selected and performed by a trained doctor.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "The number of sessions and overall cost depend on the concern being addressed, the area treated and your individual response. Pricing is discussed at consultation rather than quoted online, so any estimate reflects your actual plan. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Pico laser painful?",
        a: "Most people describe a mild, brief sensation during the pulses. Comfort varies between individuals, and your doctor can discuss options to keep the session comfortable. Any discomfort is typically short-lived.",
      },
      {
        q: "How many Pico laser sessions will I need?",
        a: "It varies. A course of several sessions spaced a few weeks apart is common, but the plan depends on your concern and how your skin responds. Your doctor will outline a realistic plan at consultation.",
      },
      {
        q: "Is Pico laser suitable for darker Asian skin tones?",
        a: "Pico laser is used across a range of skin tones, but suitability is individual. A doctor assesses your skin type and history first, as some concerns and skin types need particular care to reduce the risk of pigment changes.",
      },
      {
        q: "When will I see results?",
        a: "Results develop gradually over weeks as the skin responds, and they vary between individuals. Your doctor will explain what is realistic for your skin and concern.",
      },
    ],
  },

  // Nav / hub / card entries. Each carries a compliant summary + lead answer so
  // its [slug] page renders honestly; deep sections are authored progressively.
  { slug: "hifu", name: "HIFU", category: "Lifting & Tightening", image: "/images/treatments/hifu.png", device: "HIFU", summary: "Focused ultrasound used for non-surgical skin-lifting and tightening concerns.", leadAnswer: "HIFU (high-intensity focused ultrasound) is a non-surgical treatment that delivers focused ultrasound energy to deeper skin layers. It is commonly used for skin-lifting and tightening concerns. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.", concerns: ["aging", "face-lifting", "fine-lines-wrinkles"], related: ["ultherapy", "skin-booster"], reviewedBy: "dr-yeong-bin", lastReviewed: "2026-06-18", kkliu: "KKLIU 0000/2026 (sample)", kkliuExpiry: "2026-12-31" },
  { slug: "ultherapy", name: "Ultherapy", category: "Lifting & Tightening", image: "/images/treatments/ultherapy.png", device: "Ultherapy", summary: "A focused-ultrasound platform used for lifting and tightening of the face and neck.", leadAnswer: "Ultherapy is a focused-ultrasound treatment used for non-surgical lifting and tightening of areas such as the brow, chin and neck. It works at set depths within the skin. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.", concerns: ["aging", "face-lifting"], related: ["hifu", "fotona-4d"], reviewedBy: "dr-yeong-bin", lastReviewed: "2026-06-18", kkliu: "KKLIU 0000/2026 (sample)", kkliuExpiry: "2026-12-31" },
  { slug: "fotona-4d", name: "Fotona 4D", category: "Lifting & Tightening", image: "/images/treatments/fotona-4d.png", device: "Fotona", summary: "A laser approach combining several modes for skin-firming and refinement concerns.", leadAnswer: "Fotona 4D is a laser treatment that combines several modes to address firmness and skin-quality concerns from inside the mouth and on the skin surface. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.", concerns: ["aging", "face-lifting", "fine-lines-wrinkles"], related: ["hifu", "ultherapy"], reviewedBy: "dr-chew-yuhhui", lastReviewed: "2026-06-15", kkliu: "KKLIU 0000/2026 (sample)", kkliuExpiry: "2026-12-31" },
  { slug: "onda", name: "Onda", category: "Lifting & Tightening", image: "/images/treatments/onda.png", device: "Onda", summary: "Microwave-based technology used for body-contouring and firmness concerns.", leadAnswer: "Onda uses microwave-based energy to address localised fat and skin-firmness concerns on the body. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.", concerns: ["body-slimming", "face-contouring"], related: ["coolsculpting"], reviewedBy: "dr-yeong-bin", lastReviewed: "2026-06-15", kkliu: "KKLIU 0000/2026 (sample)", kkliuExpiry: "2026-12-31" },
  { slug: "radiofrequency", name: "Radiofrequency", category: "Lifting & Tightening", image: "/images/treatments/radiofrequency.png", summary: "Radiofrequency energy used to support skin-firmness and texture concerns.", leadAnswer: "Radiofrequency treatments use controlled energy to warm deeper skin layers, which may support firmness and texture concerns over a course of sessions. Suitability and results vary between individuals; a consultation is required.", concerns: ["face-lifting", "enlarged-pores", "dark-eye-circles"], related: ["microneedling", "hifu"], reviewedBy: "dr-chew-yuhhui", lastReviewed: "2026-06-12", kkliu: "KKLIU 0000/2026 (sample)", kkliuExpiry: "2026-12-31" },
  { slug: "microneedling", name: "Microneedling", category: "Pigment & Resurfacing", image: "/images/treatments/microneedling.png", device: "Potenza", summary: "A controlled skin-renewal treatment used for texture, scarring and pore concerns.", leadAnswer: "Microneedling uses fine needles to create controlled micro-channels that prompt a skin-renewal response. It is commonly considered for texture, acne-scarring and pore concerns. Suitability and results vary between individuals; a consultation is required.", concerns: ["acne", "enlarged-pores"], related: ["pico-laser", "skin-booster"], reviewedBy: "dr-yeong-bin", lastReviewed: "2026-06-12", kkliu: "KKLIU 0000/2026 (sample)", kkliuExpiry: "2026-12-31" },
  { slug: "tattoo-removal", name: "Tattoo Removal", category: "Pigment & Resurfacing", image: "/images/treatments/tattoo-removal.jpg", device: "PicoSure", summary: "Laser tattoo removal, most often performed with a picosecond laser.", leadAnswer: "Tattoo removal at Kaiteki is most often performed with a picosecond laser that breaks down tattoo ink over a course of sessions. The number of sessions varies with ink type and depth; a consultation is required to assess suitability.", concerns: [], related: ["pico-laser"], reviewedBy: "dr-chew-yuhhui", lastReviewed: "2026-06-10", kkliu: "KKLIU 0000/2026 (sample)", kkliuExpiry: "2026-12-31" },
  { slug: "coolsculpting", name: "CoolSculpting", category: "Body Contouring", image: "/images/treatments/coolsculpting.png", device: "CoolSculpting", summary: "A controlled-cooling treatment (cryolipolysis) for localised fat concerns.", leadAnswer: "CoolSculpting is a controlled-cooling treatment (cryolipolysis) used to address pockets of localised fat in specific areas. It is not a weight-loss treatment. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.", concerns: ["body-slimming", "face-contouring"], related: ["fat-freezing", "onda"], reviewedBy: "dr-yeong-bin", lastReviewed: "2026-06-10", kkliu: "KKLIU 0000/2026 (sample)", kkliuExpiry: "2026-12-31" },
  { slug: "fat-freezing", name: "Fat Freezing", category: "Body Contouring", image: "/images/treatments/fat-freezing.jpg", summary: "The general term for cryolipolysis for localised fat concerns.", leadAnswer: "Fat freezing (cryolipolysis) uses controlled cooling to target localised fat in specific areas, and is not a weight-loss treatment. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.", concerns: ["body-slimming"], related: ["coolsculpting", "onda"], reviewedBy: "dr-yeong-bin", lastReviewed: "2026-06-10", kkliu: "KKLIU 0000/2026 (sample)", kkliuExpiry: "2026-12-31" },
  { slug: "skin-booster", name: "Skin Booster", category: "Regenerative & Injectables", image: "/images/treatments/skin-booster.jpg", device: "Profhilo", summary: "Injectable hydrating treatments used to support skin quality and hydration.", leadAnswer: "Skin boosters are injectable treatments that deliver hydrating ingredients into the skin to support skin quality and hydration over a course of sessions. Suitability and results vary between individuals; a consultation is required.", concerns: ["aging", "fine-lines-wrinkles", "dark-eye-circles"], related: ["microneedling", "bio-stimulator"], reviewedBy: "dr-chew-yuhhui", lastReviewed: "2026-06-08", kkliu: "KKLIU 0000/2026 (sample)", kkliuExpiry: "2026-12-31" },
  { slug: "bio-stimulator", name: "Bio-stimulator", category: "Regenerative & Injectables", image: "/images/treatments/bio-stimulator.jpg", device: "Sculptra", summary: "Injectable treatments used to support the skin's own structural renewal.", leadAnswer: "Bio-stimulator treatments are injectables intended to support the skin's own gradual structural renewal over time. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.", concerns: ["aging", "face-lifting"], related: ["skin-booster"], reviewedBy: "dr-chew-yuhhui", lastReviewed: "2026-06-08", kkliu: "KKLIU 0000/2026 (sample)", kkliuExpiry: "2026-12-31" },
  { slug: "exosome-therapy", name: "Exosome Therapy", category: "Regenerative & Injectables", image: "/images/treatments/exosome-therapy.jpg", summary: "A regenerative approach used alongside other treatments for skin and scalp concerns.", leadAnswer: "Exosome therapy is a regenerative approach sometimes used alongside other treatments for skin and scalp concerns. The evidence base continues to develop; a consultation is required to assess whether it is appropriate for you.", concerns: ["aging", "hair-loss"], related: ["skin-booster"], reviewedBy: "dr-yeong-bin", lastReviewed: "2026-06-05", kkliu: "KKLIU 0000/2026 (sample)", kkliuExpiry: "2026-12-31" },
  { slug: "dermav", name: "DermaV", category: "Regenerative & Injectables", image: "/images/treatments/dermav.png", summary: "A vascular laser used for redness and selected vascular skin concerns.", leadAnswer: "DermaV is a vascular laser used to address redness and selected vascular concerns in the skin. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.", concerns: ["dark-eye-circles", "pigmentation"], related: ["pico-laser"], reviewedBy: "dr-chew-yuhhui", lastReviewed: "2026-06-05", kkliu: "KKLIU 0000/2026 (sample)", kkliuExpiry: "2026-12-31" },
  { slug: "double-eyelid", name: "Double Eyelid", category: "Eyes", image: "/images/treatments/double-eyelid.jpg", summary: "A procedure to create or refine an upper-eyelid crease, assessed individually.", leadAnswer: "Double-eyelid treatment creates or refines an upper-eyelid crease and is assessed individually within the clinic's scope of practice. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.", concerns: [], related: [], reviewedBy: "dr-yeong-bin", lastReviewed: "2026-06-01", kkliu: "KKLIU 0000/2026 (sample)", kkliuExpiry: "2026-12-31" },
];

export const treatmentCategories: Treatment["category"][] = [
  "Lifting & Tightening",
  "Pigment & Resurfacing",
  "Body Contouring",
  "Regenerative & Injectables",
  "Eyes",
];

export function treatmentBySlug(slug: string) {
  return treatments.find((t) => t.slug === slug);
}

export function treatmentsByCategory(category: Treatment["category"]) {
  return treatments.filter((t) => t.category === category);
}
