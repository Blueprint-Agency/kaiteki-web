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
    category: "Lasers",
    image: "/images/treatments/pico-laser.jpg",
    device: "PicoSure",
    summary:
      "A picosecond laser used for pigmentation, dull skin tone and tattoo removal, suited to a range of Asian skin tones.",
    leadAnswer:
      "Pico laser is a picosecond-pulse laser treatment that delivers very short bursts of energy to the skin. It is commonly used for pigmentation concerns, uneven skin tone and tattoo removal. Suitability and the number of sessions vary between individuals; a consultation is required to assess whether it is appropriate for you.",
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
  {
    slug: "hifu",
    name: "HIFU",
    category: "Lifting & Tightening",
    image: "/images/treatments/hifu.jpg",
    device: "HIFU",
    summary: "Focused ultrasound used for non-surgical skin-lifting and tightening concerns.",
    leadAnswer:
      "HIFU (high-intensity focused ultrasound) is a non-surgical treatment that delivers focused ultrasound energy to deeper skin layers. It is commonly used for skin-lifting and tightening concerns. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.",
    related: ["ultherapy", "skin-booster"],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-06-18",
    kkliu: "KKLIU 0000/2026 (sample)",
    kkliuExpiry: "2026-12-31",
    sections: [
      {
        heading: "What is HIFU?",
        body: [
          "HIFU stands for high-intensity focused ultrasound. It is a non-surgical, energy-based treatment that directs focused ultrasound to targeted depths beneath the skin's surface, without cutting or incisions.",
          "At Kaiteki, HIFU is commonly considered for skin-lifting and tightening concerns on the face and neck. Whether it suits you depends on your concern, skin and medical history, which a doctor assesses during consultation.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "HIFU concentrates ultrasound energy at set depths within the skin's supporting layers. This controlled energy is intended to prompt the skin's natural collagen-renewal response over the following weeks, which may gradually support a firmer, more lifted appearance.",
          "At Kaiteki, HIFU is delivered using devices such as Lifthera and Ultracel Q. The treating doctor selects the applicator and settings for your skin and the area being addressed. Any changes develop gradually and vary between individuals.",
        ],
      },
      {
        heading: "Devices & technology: HIFU and Ultherapy",
        body: [
          "HIFU and Ultherapy both use focused ultrasound but are distinct treatments. The HIFU devices used at Kaiteki (Lifthera / Ultracel Q) deliver focused ultrasound and are often considered for deeper areas such as the jaw and jowls. Ultherapy is a separate micro-focused-ultrasound platform sometimes considered for more precise areas such as the brow and neck.",
          "This is a factual difference in how each device delivers energy, not a statement that one is better than the other. Which approach is appropriate — if any — is decided with your doctor at consultation.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "HIFU is commonly considered for the concerns below. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
        ],
        list: [
          "Skin laxity and sagging along the jawline and jowls",
          "Loss of firmness associated with reduced collagen over time",
          "Fine lines and an overall loss of skin tone on the face and neck",
          "Facial contour concerns as part of a wider plan",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Suitability is assessed individually. HIFU may not be appropriate during pregnancy or breastfeeding, with certain skin conditions, active infection or lesions in the treatment area, some implants or medical devices, or particular medications. Please share your full medical and skincare history at consultation so the doctor can advise safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "A typical visit begins with a doctor consultation and skin assessment. If HIFU is appropriate, the ultrasound energy is applied beneath the skin across the treatment area; the collagen-renewal response then continues gradually over the following weeks.",
          "HIFU is often planned as a small number of sessions spaced across the year rather than a single fixed course, but the plan is individual. Your doctor will explain the expected cadence for your skin, without guaranteeing any particular outcome.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "HIFU is usually associated with little to no downtime, though this varies. Temporary redness, mild swelling or tenderness in the treated area can occur and typically settles on its own. Gentle skincare and sun protection are advised afterwards; your doctor will give aftercare guidance specific to you.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any medical procedure, HIFU carries risks, which are explained during consultation. Temporary effects can include redness, swelling, tenderness or altered sensation in the treated area. Less common effects are discussed by your doctor beforehand. Risks are lower when the treatment is appropriately selected and performed by a trained doctor.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "The number of sessions and the cost depend on the area treated, the device used and your individual plan, so pricing is discussed at consultation rather than quoted online. There are no fixed outcomes, and results vary between individuals.",
          "To find out whether HIFU is suitable for you and what a plan might involve, message us on WhatsApp to arrange a consultation with a Kaiteki doctor.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is HIFU surgery?",
        a: "No. HIFU is a non-surgical treatment that uses focused ultrasound energy beneath the skin, with no incisions. Whether it is appropriate for your concern is assessed by a doctor at consultation.",
      },
      {
        q: "What is the difference between HIFU and Ultherapy?",
        a: "Both use focused ultrasound but are different treatments. HIFU at Kaiteki uses devices such as Lifthera and Ultracel Q and is often considered for deeper areas like the jaw and jowls, while Ultherapy is a separate micro-focused-ultrasound platform sometimes considered for more precise areas such as the brow and neck. Which one suits you, if any, is decided with your doctor.",
      },
      {
        q: "Is there any downtime after HIFU?",
        a: "HIFU is usually associated with little to no downtime, though this varies between individuals. Temporary redness, mild swelling or tenderness can occur and typically settles. Your doctor will explain what to expect and provide aftercare advice.",
      },
      {
        q: "How many HIFU sessions will I need?",
        a: "This varies with the area treated and your individual plan; HIFU is often planned as a small number of sessions across the year rather than a single fixed course. Your doctor will recommend a suitable cadence at consultation. Results vary between individuals.",
      },
    ],
  },
  {
    slug: "ultherapy",
    name: "Ultherapy",
    category: "Lifting & Tightening",
    image: "/images/treatments/ultherapy.jpg",
    device: "Ultherapy",
    summary: "A focused-ultrasound platform used for lifting and tightening of the face and neck.",
    leadAnswer: "Ultherapy is a focused-ultrasound treatment used for non-surgical lifting and tightening of areas such as the brow, chin and neck. It works at set depths within the skin. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.",
    related: ["hifu", "fotona-4d"],
    sections: [
      {
        heading: "What is Ultherapy?",
        body: [
          "Ultherapy is a non-surgical treatment that uses focused ultrasound energy to reach set depths within the skin and the tissue beneath it. It is one of the platforms Kaiteki uses for lifting and tightening concerns on the face and neck, and is carried out by a doctor.",
          "A distinguishing feature of the Ultherapy platform is that it pairs ultrasound imaging with the treatment, so the doctor can view the layers of tissue on screen before energy is delivered. It is a treatment, not a surgical facelift, and it does not remove or cut skin.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "Ultherapy delivers focused ultrasound energy to specific depths, including the deeper support layer of the face sometimes referred to as the SMAS layer. This is the same layer that a surgical facelift addresses, though Ultherapy reaches it non-surgically rather than through incisions.",
          "The energy creates controlled points of heat at those depths, which is intended to prompt the skin's own gradual collagen-renewal response. Because this response builds over time, any change tends to develop gradually over weeks to months and varies between individuals.",
          "Before energy is delivered, the doctor uses the built-in ultrasound imaging to map the tissue layers and choose the depth and settings for each area.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Ultherapy is commonly considered for lifting and tightening concerns on the face and neck. Whether it is appropriate for your concern is assessed during a consultation.",
        ],
        list: [
          "Sagging or loss of firmness around the cheeks and jawline",
          "Loose or lax skin on the neck",
          "A drooping or heavy brow",
          "Fine lines and early signs of skin ageing",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Ultherapy is not suitable for everyone, and it is not a substitute for surgery where surgery is more appropriate. It is generally considered for people with mild to moderate skin laxity rather than very advanced sagging. Your doctor will assess your skin, the degree of laxity and your goals to advise whether it is a reasonable option for you.",
          "As a general precaution, focused-ultrasound treatments are usually avoided during pregnancy or breastfeeding, over active skin infection or open lesions in the treatment area, and where there are certain implants or devices in the treatment zone. Tell your doctor about your medical history, medications and any implants during the consultation so suitability can be assessed properly.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "A session begins with a consultation and skin assessment by a Kaiteki doctor, who will discuss your concerns and confirm whether Ultherapy is appropriate. The doctor then uses ultrasound imaging to map the treatment areas before delivering the focused energy.",
          "During delivery most people feel warmth and a tingling or prickling sensation while the energy reaches each point; comfort varies between individuals and by area, and your doctor can discuss comfort measures beforehand. The doctor finishes with aftercare advice and, where relevant, a follow-up plan.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Ultherapy is generally a walk-in, walk-out treatment with little to no set downtime for most people. Some people notice mild redness, slight swelling or tenderness in the treated area for a short period afterwards; this varies between individuals.",
          "Your doctor will give you aftercare guidance, which commonly includes using sunscreen and being gentle with the treated skin for the first few days. Follow the specific advice given for your skin and raise any concerns with the clinic.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any energy-based treatment, Ultherapy carries potential side effects. Commonly reported temporary effects include redness, swelling, tenderness, and small areas of numbness or tingling in the treated area, which typically settle over time.",
          "Less common effects can occur, and the full range of risks and how they apply to you is explained by the doctor during your consultation. Contact the clinic if you have any effect that concerns you or does not settle as expected.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "The number of sessions and any maintenance cadence depend on your skin, the areas treated and your goals, and are planned with your doctor rather than set in advance. Ultherapy is sometimes considered alongside other treatments as part of a wider plan, which the doctor will discuss if relevant.",
          "Cost depends on the areas treated and your individual plan, so it is confirmed at consultation rather than quoted upfront. To ask about a consultation, message Kaiteki on WhatsApp and the team will help you arrange an assessment.",
        ],
      },
    ],
    faqs: [
      {
        q: "How is Ultherapy different from HIFU?",
        a: "Both use focused ultrasound energy to reach deeper layers of the skin. The main factual difference is that the Ultherapy platform includes ultrasound imaging, so the doctor can view the tissue layers on screen and target a chosen depth before delivering energy. HIFU is a broader category of focused-ultrasound devices, which generally do not include this imaging step. Your doctor can explain which approach suits your concern during a consultation.",
      },
      {
        q: "Is Ultherapy a facelift?",
        a: "No. Ultherapy is a non-surgical treatment; it does not cut or remove skin. It reaches some of the same deeper tissue that a surgical facelift addresses, but through focused ultrasound rather than surgery. Where surgery would be more appropriate for your concern, your doctor will tell you.",
      },
      {
        q: "When will I see results?",
        a: "Ultherapy works by prompting the skin's own gradual collagen-renewal response, so any change tends to develop over weeks to months rather than immediately, and it varies between individuals. Your doctor will explain what is realistic for your skin and concern.",
      },
      {
        q: "Is there any downtime?",
        a: "For most people Ultherapy involves little to no set downtime. Some notice mild redness, swelling or tenderness for a short period afterwards. Your doctor will give you aftercare advice, including sun protection, tailored to your skin.",
      },
    ],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-06-18",
    kkliu: "KKLIU 0000/2026 (sample)",
    kkliuExpiry: "2026-12-31",
  },
  { slug: "fotona-4d", name: "Fotona Laser", category: "Lasers", image: "/images/treatments/fotona-laser.jpg", device: "Fotona", summary: "A multi-application Nd:YAG/Er:YAG laser platform, most often used at Kaiteki for its Fotona 4D facial-firming protocol.", leadAnswer: "Fotona Laser refers to Kaiteki's Fotona SP Dynamis / TimeWalker platform, an Nd:YAG and Er:YAG laser system offered in several application modes. Its best-known protocol, Fotona 4D, combines four modes to address facial firmness and skin-quality concerns. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.", related: ["hifu", "ultherapy"], reviewedBy: "dr-chew-yuhhui", lastReviewed: "2026-06-15", kkliu: "KKLIU 0000/2026 (sample)", kkliuExpiry: "2026-12-31",
    sections: [
      {
        heading: "What is Fotona Laser?",
        body: [
          "Fotona Laser refers to Kaiteki's Fotona SP Dynamis / TimeWalker platform, a dual-wavelength (Nd:YAG and Er:YAG) laser system offered in several distinct applications, including NightLase (for snoring-related concerns), LipLase, SmoothEye and TightSculpting, alongside its flagship facial protocol, Fotona 4D.",
          "Fotona 4D is a non-surgical protocol that uses the platform's Nd:YAG and Er:YAG modes together to deliver energy to the face through a combination of steps. It is called \"4D\" because it works across four steps, treating both the skin surface and the tissue inside the mouth. It is generally considered for firmness, skin-quality and volume-related concerns of the face. Whether it — or another application of the platform — is appropriate for you is something a doctor assesses during consultation, as suitability and outcomes vary between individuals.",
        ],
      },
      {
        heading: "How it works — the four modes",
        body: [
          "A Fotona 4D session combines four laser modes in a set sequence. Each mode targets the skin at a different level, and a doctor decides which modes and settings are used based on your assessment.",
        ],
        list: [
          "SMOOTH (intraoral): laser energy is delivered to the tissue inside the mouth, working on the areas behind the cheeks and around the nasolabial region from within.",
          "FRAC3: a fractional mode that reaches deeper layers of the skin to target imperfections such as pigmentation and lines.",
          "PIANO: a bulk-heating mode that warms deeper tissue in a gradual, controlled way, working below the skin surface.",
          "Superficial light peel: a light resurfacing pass over the skin surface intended to smooth texture.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "During consultation, a doctor will discuss whether Fotona 4D is relevant to your concern. It is commonly considered for concerns such as:",
        ],
        list: [
          "Loss of firmness around the cheeks and jawline",
          "Fine lines and expression lines",
          "Skin texture and tone concerns",
          "Volume-related and skin-quality concerns of the face",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Fotona 4D is not suitable for everyone. A doctor assesses your skin, medical history and current medications during consultation to decide whether it is appropriate for you.",
          "Laser treatments may not be advised during pregnancy or breastfeeding, for people with certain photosensitising medications or skin conditions, or where there is active infection, cold sores or broken skin in the treatment area. Recent sun exposure or certain skin conditions may also affect timing. Tell your doctor about your full medical and medication history so suitability can be assessed on an individual basis.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "A session begins with a consultation and skin assessment with one of our doctors, who confirm suitability and plan the treatment. The laser modes are then delivered in sequence, including the intraoral SMOOTH step and the external modes on the skin surface.",
          "Treatment is carried out by our doctors. The number of modes used and the energy settings are tailored to the individual. Your doctor will explain each step and what to expect before treatment begins.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime varies between individuals. Some people notice warmth, mild redness or a flushed appearance in the treated area for a short period afterwards; your doctor will advise what is typical for you.",
          "Aftercare usually includes gentle skincare, moisturising and diligent daily sun protection, as skin can be more sensitive to sunlight after laser treatment. Your doctor will give you specific aftercare instructions and tell you when to follow up.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any laser treatment, Fotona 4D carries potential side effects. These are explained to you during consultation so you can make an informed decision.",
          "Possible effects can include redness, swelling, warmth or temporary sensitivity in the treated area, and, less commonly, changes in skin pigmentation or blistering. The likelihood of side effects varies between individuals and depends on your skin and the settings used. Report any concerns after treatment to the clinic so your doctor can advise.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "Fotona 4D is generally performed as a course of sessions rather than a single treatment, with the number and spacing decided by your doctor based on your concern and how your skin responds. Results develop gradually and vary between individuals.",
          "Cost depends on the treatment plan agreed at consultation, so it is confirmed after your doctor has assessed you rather than quoted upfront. To ask about a consultation, message us on WhatsApp and our team will help you arrange one.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many Fotona 4D sessions will I need?",
        a: "This varies between individuals. Fotona 4D is usually done as a course of sessions, and your doctor will recommend a suitable number and spacing after assessing your skin and concern at consultation.",
      },
      {
        q: "Is Fotona 4D suitable for my skin?",
        a: "Suitability is assessed on an individual basis. A doctor reviews your skin, medical history and current medications during consultation to decide whether Fotona 4D is appropriate for you, and explains the risks and side effects before any treatment.",
      },
      {
        q: "Does Fotona 4D involve needles or injections?",
        a: "No. Fotona 4D uses laser energy delivered to the skin surface and to the tissue inside the mouth, rather than injectables. Your doctor will explain each step of the treatment during consultation.",
      },
      {
        q: "How much does Fotona 4D cost?",
        a: "Cost depends on the treatment plan agreed with your doctor, so it is confirmed at consultation after your skin has been assessed. Message us on WhatsApp to arrange a consultation.",
      },
    ],
  },
  {
    slug: "radiofrequency",
    name: "Radiofrequency",
    category: "Lifting & Tightening",
    image: "/images/treatments/radiofrequency.jpg",
    summary: "Radiofrequency energy used to support skin-firmness and texture concerns.",
    leadAnswer:
      "Radiofrequency treatments use controlled energy to warm deeper skin layers, which may support firmness and texture concerns over a course of sessions. Suitability and results vary between individuals; a consultation is required.",
    related: ["microneedling", "hifu"],
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-06-12",
    kkliu: "KKLIU 0000/2026 (sample)",
    kkliuExpiry: "2026-12-31",
    sections: [
      {
        heading: "What is radiofrequency (RF) treatment?",
        body: [
          "Radiofrequency (RF) treatment is a non-surgical approach that uses controlled energy to warm the deeper layers of the skin. Unlike topical skincare, which acts on the surface, RF energy is delivered beneath the skin to work on its underlying structure.",
          "At Kaiteki, RF is used chiefly for skin-firmness, laxity and contour concerns, without surgery or injections. Whether it suits your skin depends on your concern, skin condition and history, which a doctor assesses during consultation.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "RF devices deliver controlled thermal energy into the dermis, gently heating the tissue. This warming is intended to act on existing collagen fibres and to prompt the skin's own gradual collagen-renewal response over time.",
          "Different RF devices allow the treating doctor to adjust treatment depth and intensity for your skin condition and goals. At Kaiteki these include BTL Exilis, which uses monopolar radiofrequency to deliver deep, uniform heating, and Wonderface, an RF platform with precise energy control. A contact-cooling step is used during treatment to help keep each session comfortable.",
          "Any changes develop gradually over weeks to months and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "RF treatment is commonly considered for the following concerns. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
        ],
        list: [
          "Skin laxity and loss of firmness",
          "Sagging around the jawline, cheeks or neck",
          "Loss of facial definition and contour",
          "Overall skin texture as part of a plan",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Suitability is assessed individually. RF is generally well tolerated, and your doctor adjusts the settings to your skin condition. It may not be appropriate during pregnancy, with certain implanted electronic or metal devices, or with some skin conditions or medications.",
          "Please share your full medical and skincare history at consultation so the doctor can advise safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "A typical visit begins with a doctor consultation and skin assessment. If RF is appropriate, the doctor selects a suitable device and settings for your skin and the area being treated.",
          "Controlled RF energy is then delivered to the target areas, with contact cooling for comfort. A course of about 2 to 3 sessions spaced roughly 4 to 6 weeks apart is common, but the plan is individual and your doctor will explain what to expect for your skin.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime is usually minimal but varies between individuals. Mild redness or a feeling of warmth may occur and typically settles within a few hours.",
          "Gentle skincare and sun protection are advised afterwards. Your doctor will give aftercare guidance specific to you, which may include maintenance care to support ongoing results.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any medical procedure, RF treatment carries risks, which are explained during consultation. Temporary effects can include redness, warmth or mild swelling that usually settles. Less common effects relating to heat energy are discussed with you beforehand.",
          "Serious effects are uncommon when the treatment is appropriately selected and performed by a trained doctor.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "The number of sessions and overall cost depend on your skin condition, the area treated and your individual response. Many plans involve a short course followed by maintenance sessions, often every 6 to 12 months, but this is decided with your doctor.",
          "Pricing is discussed at consultation rather than quoted online, so any estimate reflects your actual plan. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are radiofrequency treatments suitable for sensitive skin?",
        a: "They may be. RF treatments are non-invasive and generally well tolerated, and your doctor adjusts the settings to your skin condition. Suitability is assessed individually at consultation, where any risks are explained.",
      },
      {
        q: "Is there any downtime after RF treatment?",
        a: "Downtime is usually minimal, though it varies between individuals. Mild redness or warmth may occur and typically settles within a few hours. Your doctor will give you aftercare guidance specific to your skin.",
      },
      {
        q: "How many radiofrequency sessions will I need?",
        a: "It varies. A course of about 2 to 3 sessions is common, sometimes followed by maintenance every 6 to 12 months, depending on your skin condition and goals. Your doctor will outline a realistic plan at consultation.",
      },
      {
        q: "When will I see results?",
        a: "Any changes develop gradually over weeks to months as the skin responds, and they vary between individuals. Your doctor will explain what is realistic for your skin and concern.",
      },
    ],
  },
  {
    slug: "microneedling",
    name: "RF Microneedling",
    category: "Lifting & Tightening",
    image: "/images/treatments/microneedling.jpg",
    device: "Potenza",
    summary: "A radiofrequency (RF) microneedling treatment used for texture, scarring and pore concerns.",
    leadAnswer:
      "Microneedling at Kaiteki is most often performed as radiofrequency (RF) microneedling, combining fine needles with radiofrequency energy to prompt a controlled skin-renewal response at multiple depths. It is commonly considered for texture, acne-scarring and pore concerns. Suitability and results vary between individuals; a consultation is required.",
    related: ["pico-laser", "skin-booster"],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-06-12",
    kkliu: "KKLIU 0000/2026 (sample)",
    kkliuExpiry: "2026-12-31",
    sections: [
      {
        heading: "What is RF microneedling?",
        body: [
          "RF microneedling refers to a group of treatments that combine traditional microneedling with radiofrequency (RF) energy. Fine needles create controlled micro-channels in the skin while RF energy is delivered through those needles at set depths.",
          "At Kaiteki, microneedling is most often performed as RF microneedling rather than needling alone. Whether it is appropriate for you, and which settings are used, is something a doctor assesses during consultation.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "The device passes fine needles into the skin to create controlled micro-injuries, then delivers radiofrequency energy from the needle tips as thermal energy within the skin.",
          "Because the needle depth and energy can be adjusted, the treatment can be targeted at multiple skin depths in one session. This combination is intended to prompt the skin's natural repair and collagen-remodelling response over time. The extent of any change varies between individuals.",
        ],
      },
      {
        heading: "Devices & technology",
        body: [
          "Kaiteki offers three RF microneedling devices. Each has different technical characteristics, and a doctor matches the device and settings to your concern and skin during consultation.",
        ],
        list: [
          "Morpheus8 — designed for deeper RF penetration. It is generally discussed in the context of skin-tightening and deeper concerns such as sagging, the jaw and neck area.",
          "Sylfirm X — a dual-wave device that can deliver RF in both pulsed and continuous modes. It is generally discussed in the context of pigment-related and vascular concerns such as melasma, post-inflammatory hyperpigmentation and redness.",
          "Potenza — offers adjustable needle depth with both monopolar and bipolar RF modes. It is generally discussed in the context of acne scarring, enlarged pores and oil-related texture concerns.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "RF microneedling is commonly considered for the following concerns. Whether it is suitable for your situation, and what results are realistic, varies between individuals and is assessed at consultation.",
        ],
        list: [
          "Acne scarring and uneven skin texture",
          "Enlarged or visible pores",
          "Pigmentation concerns such as melasma and post-inflammatory hyperpigmentation",
          "Redness and general skin firmness",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "RF microneedling is not suitable for everyone. A doctor reviews your skin, medical history and any current skin conditions before recommending it.",
          "It may not be appropriate during pregnancy or breastfeeding, over active skin infections, acne flares or inflamed areas, or where certain medications, implants or medical conditions are involved. Please raise any of these at consultation so suitability can be assessed on an individual basis.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "A typical session begins with a consultation, after which a topical numbing cream is applied for around 30 to 45 minutes to help with comfort. The RF microneedling procedure itself usually takes around 20 to 40 minutes, depending on the area and settings.",
          "During treatment, needle depth, energy level and pattern are adjusted to your skin. Many people describe the sensation as mild heat and pressure. Any discomfort and what to expect on the day is explained beforehand.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime varies between individuals. Some redness for one to two days is common, and some dryness or light flaking afterwards can be normal.",
          "Your clinician will give you aftercare guidance, which typically includes sun protection and gentle skincare while the skin settles. Follow the specific instructions given to you at your appointment.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any procedure that penetrates the skin, RF microneedling carries potential risks and side effects. These can include redness, swelling, sensitivity, dryness, and temporary changes in skin appearance, and less commonly other reactions.",
          "The relevant risks for your skin and history are explained during consultation so you can make an informed decision.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "RF microneedling is usually approached as a course of sessions spaced a few weeks apart, with the number and interval tailored to your concern and skin. This is planned with your clinician.",
          "Cost depends on the device, the area treated and your individual plan, so it is confirmed at consultation rather than quoted upfront. To ask about a consultation, message us on WhatsApp at +60 10-381 8170 to book a free consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which device is right for me — Morpheus8, Sylfirm X or Potenza?",
        a: "It depends on your concern and skin. As a general guide, Morpheus8 is associated with deeper, skin-tightening treatment, Sylfirm X with pigment and redness concerns, and Potenza with scarring and pore concerns. The right choice for you is decided by a doctor during consultation.",
      },
      {
        q: "Is RF microneedling painful?",
        a: "A topical numbing cream is applied beforehand to help with comfort, and many people describe the sensation as mild heat and pressure. Comfort varies between individuals, and what to expect is explained on the day.",
      },
      {
        q: "Is there any downtime?",
        a: "Downtime varies between individuals. Some redness for one to two days is common, and mild dryness or flaking can follow. Your clinician will give you aftercare guidance for your situation.",
      },
      {
        q: "How many sessions will I need?",
        a: "RF microneedling is usually planned as a course of sessions spaced a few weeks apart. The number and spacing vary between individuals and are decided with your clinician at consultation.",
      },
    ],
  },
  {
    slug: "fat-freezing",
    name: "Fat Freezing",
    category: "Body & Slimming",
    image: "/images/treatments/fat-freezing.jpg",
    summary: "The general term for cryolipolysis for localised fat concerns.",
    leadAnswer:
      "Fat freezing (cryolipolysis) uses controlled cooling to target localised fat in specific areas, and is not a weight-loss treatment. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.",
    related: ["microwave-contouring"],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-06-10",
    kkliu: "KKLIU 0000/2026 (sample)",
    kkliuExpiry: "2026-12-31",
    sections: [
      {
        heading: "What is fat freezing?",
        body: [
          "Fat freezing is the everyday name for cryolipolysis, a non-surgical approach that uses controlled cooling to target pockets of fat in specific areas of the body. \"Fat freezing\" describes the method rather than any single machine, and several devices work on the same cryolipolysis principle.",
          "It is intended for localised, stubborn fat in defined areas rather than overall weight reduction. Whether it suits you depends on your concern, the area involved and your medical history, which a doctor assesses during consultation.",
        ],
      },
      {
        heading: "How cryolipolysis works",
        body: [
          "Cryolipolysis is based on the idea that fat cells are more sensitive to cold than the surrounding skin, nerves and muscle. During a session, an applicator cools a defined area to a controlled low temperature for a set period.",
          "The aim is to affect fat cells within the treated pocket while limiting effect on nearby tissue. Any change develops gradually over the following weeks as the body processes the treated area. Settings and applicators are selected by the treating doctor, and results vary between individuals.",
        ],
      },
      {
        heading: "Devices we use",
        body: [
          "Kaiteki performs fat-freezing sessions using Cooltech, a cryolipolysis device. CoolSculpting, another cryolipolysis brand offered at Kaiteki, has its own dedicated page, as it is often searched for by name.",
          "Naming a device is a factual description, not a claim that one performs better than another. The treating doctor selects the device and applicator suited to your treatment area and goals at consultation.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Fat freezing is commonly considered for localised areas of fat that persist despite diet and exercise. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
        ],
        list: [
          "Lower-abdomen or \"muffin top\" fullness",
          "Flank fat, sometimes called love handles",
          "Back or bra-line fullness",
          "Inner or outer thigh pockets",
          "Under-chin fullness (assessed individually)",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Fat freezing is not a weight-loss treatment and is not a substitute for a healthy diet and exercise. It is intended for people at or near a stable weight who have specific, pinchable pockets of fat rather than generalised weight to lose.",
          "Suitability is assessed individually. Cryolipolysis may not be appropriate during pregnancy, with certain cold-related conditions, or with some medical histories. Please share your full medical history at consultation so the doctor can advise safely and explain the risks.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "A typical visit begins with a doctor consultation and body assessment. If fat freezing is appropriate, the treatment area is marked and a protective gel pad and applicator are positioned over the pocket of fat.",
          "The area is then cooled for a set period, and a short massage of the treated area may follow. More than one area or session may be discussed depending on your goals, but the plan is individual. Your doctor will explain what to expect for you.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime is usually limited but varies between individuals. Temporary redness, firmness, tingling, numbness or mild tenderness in the treated area can occur and typically settle over time.",
          "Most people are able to return to everyday activities after a session. Your doctor will give aftercare guidance specific to you and explain when any change might become noticeable.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any medical procedure, cryolipolysis carries risks, which are explained during consultation. Temporary effects can include redness, swelling, bruising, firmness and altered sensation in the treated area, which usually resolve.",
          "Less common effects exist and are discussed with you before proceeding so you can make an informed decision. The treatment should be carried out by a trained doctor after an individual assessment.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "The number of sessions and overall cost depend on the areas being addressed, the size of the fat pocket and your individual response. Pricing is discussed at consultation rather than quoted online, so any estimate reflects your actual plan. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is fat freezing a weight-loss treatment?",
        a: "No. Fat freezing (cryolipolysis) is intended to target localised, stubborn pockets of fat in specific areas, not to reduce overall body weight. It works best alongside a stable weight and healthy habits, and a doctor assesses at consultation whether it is appropriate for you.",
      },
      {
        q: "Does fat freezing hurt?",
        a: "Most people describe an intense cold and some numbness when a session begins, which often eases as the area becomes numb. Comfort varies between individuals, and your doctor can talk through what to expect and how the session is managed.",
      },
      {
        q: "How many sessions will I need?",
        a: "It varies. The number of sessions depends on the area, the amount of localised fat and how your body responds. Your doctor will outline a realistic plan at consultation rather than promising a set outcome.",
      },
      {
        q: "When might I notice a change?",
        a: "Any change develops gradually over several weeks as the body processes the treated area, and it varies between individuals. Your doctor will explain what is realistic for your situation at consultation.",
      },
    ],
  },
  {
    slug: "skin-booster",
    name: "Skin Booster",
    category: "Injectables",
    image: "/images/treatments/skin-booster.jpg",
    device: "Profhilo",
    summary: "Injectable hydrating treatments used to support skin quality and hydration.",
    leadAnswer:
      "Skin boosters are injectable treatments that deliver hydrating ingredients into the skin to support skin quality and hydration over a course of sessions. Suitability and results vary between individuals; a consultation is required.",
    related: ["microneedling", "bio-stimulator"],
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-06-08",
    kkliu: "KKLIU 0000/2026 (sample)",
    kkliuExpiry: "2026-12-31",
    sections: [
      {
        heading: "What is a skin booster?",
        body: [
          "A skin booster is an injectable treatment that places hydrating and skin-conditioning ingredients into the skin to support its overall quality, rather than to add volume or change the shape of the face. Because it is an injectable, it is performed by a doctor.",
          "Skin booster is an umbrella term for several different injectable formulations. The right one for you, and whether a skin booster is appropriate at all, is assessed by a doctor during a consultation.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "During a session, a doctor delivers small amounts of the chosen formulation into the skin through a series of fine micro-injections across the treatment area. The ingredients are intended to work within the skin itself to support hydration and skin quality over time.",
          "Skin boosters are generally used as a course rather than a single treatment, and any change tends to develop gradually and varies between individuals. Your doctor will explain what is realistic for your skin and concern.",
        ],
      },
      {
        heading: "Types of skin booster",
        body: [
          "Kaiteki uses several skin-booster formulations, and they differ in their active ingredient and what they are typically used for. A doctor selects and personalises the choice based on your skin during consultation.",
        ],
        list: [
          "Plinest/Newest — a polynucleotide-based formulation used to support skin regeneration and elasticity; often considered for stressed, ageing, or post-treatment skin.",
          "Profhilo — a high-concentration hyaluronic acid formulation used for deep hydration and skin remodelling, and to support firmness.",
          "Rejuran — based on salmon polynucleotide (PN/DNA) technology, used to support the skin barrier and skin healing; often considered for sensitive, acne-prone, or damaged skin.",
          "Restylane Skinboosters — a hyaluronic-acid-based range used to support skin hydration and quality over a course of sessions.",
          "Hydrodeluxe — a hydrating injectable formulation used to support skin moisture and overall skin quality.",
          "Juvelook — a hybrid, collagen-stimulating skin booster used to address pores, texture, and fine lines as part of longer-term skin-quality care.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Skin boosters are commonly considered for skin-quality and hydration concerns. Whether a skin booster is appropriate for your concern, and which formulation suits you, is assessed during a consultation.",
        ],
        list: [
          "Dull, dry or dehydrated-looking skin",
          "Fine lines associated with dryness and loss of skin quality",
          "Uneven texture and the appearance of enlarged pores",
          "Sensitised, acne-affected or post-treatment skin needing support",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Skin boosters are not suitable for everyone. Your doctor will assess your skin, medical history and goals to advise whether a skin booster is a reasonable option for you and, if so, which formulation.",
          "As a general precaution, injectable treatments are usually avoided during pregnancy or breastfeeding, over active skin infection or open lesions in the treatment area, and where there is a known allergy to a formulation's ingredients. Tell your doctor about your medical history, medications and any allergies during the consultation so suitability and risks can be assessed properly.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "A session begins with a consultation and skin assessment by a Kaiteki doctor, who discusses your concerns and, if a skin booster is appropriate, selects a suitable formulation. The skin is then cleansed and prepared.",
          "The doctor delivers the treatment as a series of precise micro-injections into the targeted areas, and finishes with soothing care and aftercare advice. Because this is an injectable treatment, it is carried out by a doctor throughout. Comfort varies between individuals, and your doctor can discuss comfort measures beforehand.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime is generally minimal for most people. Mild redness or small injection marks can occur in the treated area and commonly settle within a day or two; this varies between individuals.",
          "Your doctor will give you aftercare guidance, which commonly includes using sunscreen and being gentle with the treated skin for the first few days. Follow the specific advice given for your skin and raise any concerns with the clinic.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any injectable treatment, skin boosters carry potential side effects. Commonly reported temporary effects include redness, minor swelling, small bruises or injection marks, and tenderness at the injection sites, which typically settle over a short period.",
          "Less common effects can occur, and the full range of risks and how they apply to you is explained by the doctor during your consultation. Contact the clinic if you have any effect that concerns you or does not settle as expected.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "Skin boosters are typically planned as a short course, with the number of sessions and any maintenance cadence depending on your skin, the formulation chosen and your goals. This is planned with your doctor rather than set in advance.",
          "Cost depends on the formulation and your individual plan, so it is confirmed at consultation rather than quoted upfront. To ask about a consultation, message Kaiteki on WhatsApp and the team will help you arrange an assessment.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are skin boosters suitable for sensitive or acne-prone skin?",
        a: "They may be. Some formulations, such as Rejuran and Plinest, are often considered for sensitive or damaged skin, but suitability depends on your individual skin and is assessed by a doctor during consultation. The doctor will also explain the risks before any treatment.",
      },
      {
        q: "Do skin boosters change the shape of my face?",
        a: "No. Skin boosters are intended to support skin quality and hydration rather than to add volume or alter facial features. If your concern is better addressed by a different type of treatment, your doctor will discuss that with you at consultation.",
      },
      {
        q: "Is there any downtime?",
        a: "Downtime is usually minimal. Mild redness or small injection marks may occur and commonly subside within a day or two, though this varies between individuals. Your doctor will give aftercare advice tailored to your skin.",
      },
      {
        q: "How many sessions will I need?",
        a: "Skin boosters are generally planned as a course, and the number of sessions and any maintenance vary between individuals depending on your skin and goals. Your doctor will plan this with you rather than set it in advance.",
      },
    ],
  },
  {
    slug: "bio-stimulator",
    name: "Bio-stimulator",
    category: "Injectables",
    image: "/images/treatments/bio-stimulator.jpg",
    device: "Sculptra",
    summary: "Injectable treatments used to support the skin's own structural renewal.",
    leadAnswer:
      "Bio-stimulator treatments are injectables intended to support the skin's own gradual structural renewal over time. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.",
    related: ["skin-booster"],
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-06-08",
    kkliu: "KKLIU 0000/2026 (sample)",
    kkliuExpiry: "2026-12-31",
    sections: [
      {
        heading: "What is a bio-stimulator?",
        body: [
          "A bio-stimulator is a type of injectable treatment given by a doctor that is intended to support the skin's own collagen framework, rather than to add immediate volume the way a conventional dermal filler does.",
          "This distinction matters. Some injectables sit within the tissue to provide structural fill; bio-stimulators are formulated to work more gradually, with the aim of prompting the skin's natural renewal processes over a period of weeks. Which approach is appropriate depends on the individual, and this is something a doctor assesses during consultation.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "Bio-stimulators are delivered by injection into targeted layers of the skin. The formulation acts as a scaffold within the tissue, and the body is intended to respond by gradually renewing its own supporting structures around it.",
          "Because the process is gradual, bio-stimulators are typically approached as a course of sessions rather than a single treatment. How an individual responds, and how many sessions may be considered, varies between people and is assessed by the doctor.",
        ],
      },
      {
        heading: "Types of bio-stimulator",
        body: [
          "Several bio-stimulator products may be used, each with a different base material and characteristics. Product selection is made by the doctor based on the individual assessment. Common examples include:",
        ],
        list: [
          "Radiesse — based on calcium hydroxylapatite (CaHA), a substance also found naturally in bone. It is used as a bio-stimulatory injectable with collagen-supporting properties.",
          "Ellansé — based on polycaprolactone (PCL), a biocompatible material suspended in a gel carrier and used as a collagen-stimulating injectable.",
          "Sculptra — based on poly-L-lactic acid (PLLA), a biocompatible material used to support the skin's gradual structural renewal over a course of sessions.",
          "Deusaderm — a collagen-based injectable intended to support skin quality, structure and elasticity.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Bio-stimulators are most often considered for concerns relating to skin firmness and structural support. During consultation, the doctor discusses which concerns are relevant to you and whether this approach is suitable. Concerns for which they are commonly considered include:",
        ],
        list: [
          "Loss of skin firmness and elasticity",
          "Early laxity around the cheeks, jawline or temples",
          "Fine lines associated with reduced skin support",
          "Overall skin quality and structure",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Bio-stimulators are not suitable for everyone. Suitability depends on your skin condition, medical history and treatment goals, all of which the doctor assesses before any treatment is carried out.",
          "As a general guide, injectable treatments are usually not appropriate during pregnancy or breastfeeding, where there is active infection or inflammation in the treatment area, or where there are certain skin or medical conditions. Please share your full medical history and any allergies at consultation so the doctor can determine whether the treatment is appropriate for you.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "Bio-stimulator treatments at Kaiteki are injectables performed by a doctor. A typical session begins with a consultation and skin assessment, during which suitability is confirmed and the plan discussed.",
          "The skin is then cleansed and prepared, and the doctor administers the injections into the assessed areas. The number of sessions and the interval between them varies between individuals; a common approach is a short course of sessions spaced several weeks apart, with the specifics determined at consultation.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime is generally minimal. Mild swelling, redness or tenderness at the injection sites may occur and usually settles within a few days, though this varies between individuals.",
          "The doctor will provide aftercare guidance specific to your treatment, which may include how to care for the treated area in the days following the session. Follow any instructions given, and contact the clinic if you have concerns.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any injectable treatment, bio-stimulators carry potential risks and side effects. These commonly include temporary redness, swelling, bruising or tenderness at the injection sites, and less commonly other reactions.",
          "All potential risks and side effects relevant to you are explained by the doctor at consultation before any treatment proceeds, so that you can make an informed decision. Raise any questions or concerns during that discussion.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "Because bio-stimulator treatment is tailored to the individual, the number of sessions and the product used depend on your assessment. Cost is discussed at consultation once the doctor has determined a suitable plan, as it varies with these factors.",
          "To ask a question or arrange a consultation, message the clinic on WhatsApp to book a consultation, and the team will assist you.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a bio-stimulator the same as a dermal filler?",
        a: "Not exactly. Both are injectables, but a conventional dermal filler is generally used to add volume directly, whereas a bio-stimulator is intended to support the skin's own gradual structural renewal. Which is appropriate for you is assessed by the doctor at consultation.",
      },
      {
        q: "Are bio-stimulator treatments suitable for sensitive skin?",
        a: "They may be suitable for some people with sensitive skin, but this cannot be assumed. The doctor assesses your skin condition and medical history at consultation to determine whether the treatment is appropriate for you.",
      },
      {
        q: "Is there any downtime?",
        a: "Downtime is generally minimal. Mild swelling, redness or tenderness may occur at the injection sites and usually settles within a few days, though this varies between individuals.",
      },
      {
        q: "How many sessions will I need?",
        a: "Bio-stimulators are typically approached as a short course of sessions rather than a single treatment, and some people consider periodic maintenance afterwards. The number and spacing vary between individuals and are determined by the doctor at consultation.",
      },
    ],
  },
  {
    slug: "exosome-therapy",
    name: "Exosome Therapy",
    category: "Regenerative",
    image: "/images/treatments/exosome-therapy.jpg",
    summary:
      "A regenerative approach used alongside other treatments for skin and scalp concerns.",
    leadAnswer:
      "Exosome therapy is a regenerative approach sometimes used alongside other treatments for skin and scalp concerns. The evidence base continues to develop; a consultation is required to assess whether it is appropriate for you.",
    related: ["skin-booster"],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-06-05",
    kkliu: "KKLIU 0000/2026 (sample)",
    kkliuExpiry: "2026-12-31",
    sections: [
      {
        heading: "What is exosome therapy?",
        body: [
          "Exosomes are tiny cell-derived vesicles that carry signalling molecules such as proteins, lipids and RNA. In the body they act as messengers between cells, and this signalling role is why they are being explored in regenerative aesthetics.",
          "Exosome therapy applies preparations of these vesicles to the skin or scalp, usually as part of a wider treatment plan rather than on its own. It is an emerging area, and the evidence base continues to develop, so a doctor assesses whether it is appropriate for you during consultation.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "The aim of exosome therapy is to support the skin's or scalp's own repair and renewal processes by delivering exosome-based signalling molecules to the treated area. Because exosomes are small, they are commonly applied after a procedure that briefly opens channels in the skin, such as microneedling or certain lasers.",
          "How an individual responds varies, and any change tends to develop gradually rather than immediately. Your doctor will explain what is realistic for your skin or scalp and how exosome therapy fits your overall plan.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Exosome therapy is being used, often within a broader plan, in relation to the concerns below. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
        ],
        list: [
          "Skin quality, texture and tone as part of a facial-rejuvenation plan",
          "Support for the skin after resurfacing procedures such as laser or microneedling",
          "Fine lines and general signs of skin ageing",
          "Scalp and hair concerns, including thinning hair, often alongside other hair treatments",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Suitability is assessed individually. As exosome therapy is an emerging treatment whose evidence base continues to develop, your doctor will discuss what is and is not known before you decide. It may not be appropriate during pregnancy or breastfeeding, with certain skin or scalp conditions, or alongside some medical conditions or medications.",
          "Please share your full medical, skincare and hair history at consultation so the doctor can advise you safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "A visit begins with a doctor consultation and assessment of your skin or scalp. Exosome therapy is often combined with another treatment — for example microneedling, a laser, or a PRP (platelet-rich plasma) procedure — so the session is planned around that combination where appropriate.",
          "The number of sessions is individual. A short course spaced a few weeks apart is common for regenerative treatments, but your doctor will outline a plan suited to you rather than a fixed package.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime depends largely on any procedure exosome therapy is combined with, and varies between individuals. When paired with microneedling or a laser, temporary redness, mild swelling or sensitivity can occur and typically settles over the following days.",
          "Gentle skincare and sun protection are usually advised afterwards. Your doctor will give aftercare guidance specific to your treatment.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any medical procedure, exosome therapy carries risks, which are explained during consultation. Temporary effects can include redness, swelling, sensitivity or irritation at the treated area, and any combined procedure carries its own considerations.",
          "Because this is an emerging treatment, your doctor will also discuss the current limits of the evidence so that you can make an informed decision.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "The number of sessions and overall cost depend on the concern being addressed, the area treated, any treatments it is combined with and your individual response. Pricing is discussed at consultation rather than quoted online, so any estimate reflects your actual plan. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is exosome therapy safe?",
        a: "Exosome therapy is a medical procedure and, like any procedure, carries risks that are explained during consultation. It is an emerging treatment whose evidence base continues to develop, so a doctor will discuss what is currently known, assess your history and confirm whether it is appropriate for you before proceeding.",
      },
      {
        q: "Can exosome therapy be combined with other treatments?",
        a: "It is often used alongside other treatments, such as microneedling, certain lasers or PRP, as part of a wider plan. Whether combining is appropriate for you depends on your concern and history, which your doctor assesses at consultation.",
      },
      {
        q: "Who is a suitable candidate for exosome therapy?",
        a: "Suitability is individual and determined at consultation. People considering it for skin quality, signs of ageing or scalp and hair concerns may be assessed, but it is not appropriate for everyone. Your doctor will review your medical, skincare and hair history before advising.",
      },
      {
        q: "When might I notice a change?",
        a: "Any change tends to develop gradually over the weeks after treatment rather than immediately, and the extent varies between individuals. As this is an emerging area, your doctor will explain what is realistic for you and what the current evidence does and does not support.",
      },
    ],
  },
  {
    slug: "double-eyelid",
    name: "Double Eyelid",
    category: "Eyes",
    image: "/images/treatments/double-eyelid.jpg",
    summary: "A procedure to create or refine an upper-eyelid crease, assessed individually.",
    leadAnswer:
      "Double-eyelid treatment creates or refines an upper-eyelid crease and is assessed individually within the clinic's scope of practice. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.",
    related: [],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-06-01",
    kkliu: "KKLIU 0000/2026 (sample)",
    kkliuExpiry: "2026-12-31",
    sections: [
      {
        heading: "What is double-eyelid treatment?",
        body: [
          "A double eyelid refers to the crease that forms across the upper eyelid. Many people of Asian descent naturally have a single eyelid without this crease, and some wish to create or refine one. Double-eyelid treatment is a minor procedure that aims to form or adjust this upper-eyelid crease.",
          "It is a surgical procedure and is assessed individually within the clinic's scope of practice. Whether it suits you depends on your eyelid anatomy, skin and medical history, which a doctor evaluates during consultation.",
        ],
      },
      {
        heading: "Methods — suture and incisional",
        body: [
          "There are two broad approaches. The suture (embedding) method uses small access points through which fine sutures are placed to form the crease, without a continuous incision. The incisional method uses an incision along the intended crease line and is sometimes considered where there is excess skin or fat, or where a suture approach is less suitable.",
          "The two methods differ in recovery and how long the crease tends to hold. Which approach is appropriate — if any — is decided by the treating doctor based on your eyelids and goals, and discussed at consultation.",
        ],
      },
      {
        heading: "What it may help with",
        body: [
          "Double-eyelid treatment is commonly considered by people who wish to change the appearance of the upper eyelid. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
        ],
        list: [
          "Creating an upper-eyelid crease where there is a single eyelid",
          "Refining or defining an existing but faint or uneven crease",
          "Reducing the effort of achieving a crease with eye make-up",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Suitability is assessed individually. This is a procedure around the eye, so certain conditions make it unsuitable or higher-risk, and the doctor will explain this at consultation. It may not be appropriate for people with the following:",
        ],
        list: [
          "Chronic or dry-eye conditions, which upper-eyelid procedures can aggravate",
          "Uncontrolled high blood pressure",
          "Circulation disorders",
          "Thyroid disease",
          "Diabetes",
          "Glaucoma",
          "Heart disease",
        ],
      },
      {
        heading: "The procedure at Kaiteki",
        body: [
          "A visit begins with a doctor consultation and assessment of your eyelids. If the procedure is appropriate, the doctor first designs and marks the intended crease height and shape on the eyelid.",
          "Local anaesthesia is used for comfort. Depending on the method chosen, fine sutures are embedded through small access points, or a small incision is made along the marked line; excess fat may be addressed if the doctor considers it necessary. The doctor will explain the specific steps planned for you and answer your questions beforehand.",
        ],
      },
      {
        heading: "Recovery & aftercare",
        body: [
          "Some swelling and bruising of the eyelids is expected afterwards and settles over time. Recovery varies with the method and the individual — the suture approach generally involves a shorter period of swelling than the incisional approach.",
          "Many people return to everyday activities within around ten to fourteen days, though this varies. The eyelids' appearance continues to settle over the following weeks to months. Your doctor will give aftercare guidance specific to you.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any medical procedure, double-eyelid treatment carries risks, which are explained during consultation. Temporary effects can include swelling, bruising, tightness or asymmetry while healing. Because the procedure is around the eye, the doctor will discuss the specific risks and contraindications with you before proceeding.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "The approach, and the overall cost, depend on your eyelid anatomy, the method chosen and your individual assessment. Pricing is discussed at consultation rather than quoted online, so any estimate reflects your actual plan. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does recovery take after double-eyelid treatment?",
        a: "It varies between individuals and by method. Swelling and bruising are expected early on, and many people return to everyday activities within around ten to fourteen days. The eyelids continue to settle over the following weeks to months. Your doctor will explain what to expect for you.",
      },
      {
        q: "How long do the results last?",
        a: "This varies between individuals and depends on the method used and how your eyelids heal. The incisional approach tends to hold longer than the suture approach, but no specific duration can be promised. Your doctor will discuss realistic expectations at consultation.",
      },
      {
        q: "Am I suitable for double-eyelid treatment?",
        a: "Suitability is assessed individually. It may not be appropriate for people with conditions such as dry-eye disease, uncontrolled high blood pressure, circulation disorders, thyroid disease, diabetes, glaucoma or heart disease. Please share your full medical history so the doctor can advise safely.",
      },
      {
        q: "Does the procedure hurt?",
        a: "Local anaesthesia is used for comfort during the procedure. Some tightness, swelling or tenderness is common while healing and typically settles. Your doctor will discuss comfort and aftercare with you at consultation.",
      },
    ],
  },

  // 8 new category (parent-less) pages, authored to the pico-laser template
  // (docs/superpowers/plans/2026-07-13-treatment-taxonomy-restructure.md, Task 8).
  {
    slug: "vascular-pigment-laser",
    name: "Vascular / Pigment Laser",
    category: "Lasers",
    image: "/images/treatments/vascular-pigment-laser.jpg",
    summary:
      "Laser and light-based devices used for visible blood vessels, redness and pigment concerns.",
    leadAnswer:
      "Vascular / Pigment Laser refers to devices used to address visible blood vessels, facial redness and pigment concerns using targeted wavelengths of light. At Kaiteki this includes Pro Yellow and M22 IPL, alongside the dedicated DermaV platform. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.",
    related: ["pico-laser"],
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-13",
    kkliu: "KKLIU 0000/2026 (sample)",
    kkliuExpiry: "2026-12-31",
    sections: [
      {
        heading: "What is Vascular / Pigment Laser treatment?",
        body: [
          "Vascular / Pigment Laser is a category of light-based devices selected for their ability to target either visible blood vessels or pigment in the skin, depending on the wavelength used. It is not a single machine but a group of technologies matched to the concern being addressed.",
          "At Kaiteki this category includes Pro Yellow (a Quadrostar 577nm yellow-light laser) and M22 IPL (intense pulsed light), used alongside the dedicated DermaV vascular-pigment platform. Whether any of these suits your skin depends on your concern, skin type and history, which a doctor assesses during consultation.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "Pro Yellow delivers 577nm yellow-light energy, a wavelength associated with absorption by blood vessels, and is generally considered for vascular concerns such as redness and visible vessels. M22 IPL delivers broad-spectrum light that can be filtered for either vascular or pigment targets, offering flexibility across different skin concerns in one platform.",
          "The treating doctor selects the device, wavelength and settings appropriate to your concern and skin tone. Energy is absorbed by the target (vessel or pigment particle), which may gradually reduce its visibility or prompt the body to clear it over time. Results develop gradually and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "This category is commonly considered for the following concerns. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
        ],
        list: [
          "Facial redness and visible thread veins",
          "Sun spots and other pigment-related marks",
          "Rosacea-associated flushing (as part of a wider plan)",
          "General skin-tone refinement alongside other treatments",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Suitability is assessed individually and depends on the specific device being considered. These treatments may not be appropriate during pregnancy, with certain skin conditions or medications, or on recently tanned skin. Please share your full medical and skincare history at consultation so the doctor can advise safely and select the appropriate device, if any.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "A typical visit begins with a doctor consultation and skin assessment. If a vascular or pigment laser is appropriate, the doctor selects the device and settings suited to your concern, and a patch or test area may be considered before proceeding.",
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
          "As with any medical procedure, these treatments carry risks, which are explained during consultation. Temporary effects can include redness, swelling or changes in pigmentation. Serious effects are uncommon when the treatment is appropriately selected and performed by a trained doctor.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "The number of sessions and overall cost depend on the device used, the concern being addressed and your individual response. Pricing is discussed at consultation rather than quoted online, so any estimate reflects your actual plan. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between Pro Yellow and M22 IPL?",
        a: "Pro Yellow delivers a specific 577nm yellow-light wavelength generally considered for vascular concerns, while M22 IPL delivers broad-spectrum light that can be filtered for either vascular or pigment targets. Which device suits your concern is decided by your doctor at consultation.",
      },
      {
        q: "How is this different from DermaV?",
        a: "DermaV is a dedicated dual-wavelength vascular-pigment device offered at Kaiteki alongside Pro Yellow and M22 IPL within this category. All three address related concerns using different technologies; your doctor selects the one suited to your skin and concern.",
      },
      {
        q: "Is this suitable for darker Asian skin tones?",
        a: "These devices are used across a range of skin tones, but suitability is individual. A doctor assesses your skin type and history first, as some concerns and skin types need particular care to reduce the risk of pigment changes.",
      },
      {
        q: "How many sessions will I need?",
        a: "It varies. A course of several sessions spaced a few weeks apart is common, but the plan depends on your concern and how your skin responds. Your doctor will outline a realistic plan at consultation.",
      },
    ],
  },
  {
    slug: "resurfacing-laser",
    name: "Resurfacing Laser",
    category: "Lasers",
    image: "/images/treatments/resurfacing-laser.jpg",
    summary: "A fractional CO2 laser used for skin texture, scarring and pore concerns.",
    leadAnswer:
      "Resurfacing Laser at Kaiteki uses fractional CO2 laser technology to create controlled micro-injury columns in the skin, prompting a renewal response. It is commonly considered for texture, scarring and enlarged-pore concerns. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.",
    related: ["pico-laser", "microneedling"],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-07-13",
    kkliu: "KKLIU 0000/2026 (sample)",
    kkliuExpiry: "2026-12-31",
    sections: [
      {
        heading: "What is Resurfacing Laser treatment?",
        body: [
          "Resurfacing Laser refers to ablative and fractional laser technology — at Kaiteki, a fractional CO2 laser — that works by creating a controlled pattern of micro-injury columns across the treated skin, leaving surrounding tissue intact to support recovery.",
          "This differs from non-ablative lasers such as Pico laser, which do not remove tissue at the surface. Whether fractional CO2 resurfacing suits your skin depends on your concern, skin type and history, which a doctor assesses during consultation.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "The fractional CO2 laser delivers energy in a grid-like pattern of microscopic columns, each surrounded by untreated skin. This fractional approach is intended to prompt a controlled skin-renewal and collagen-remodelling response while allowing faster recovery than treating the entire surface at once.",
          "Settings, depth and density are selected by the treating doctor for your skin type and concern. Results develop gradually over the following weeks and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Resurfacing Laser is commonly considered for the following concerns. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
        ],
        list: [
          "Acne scarring and uneven skin texture",
          "Enlarged or visible pores",
          "Fine lines and areas of textural irregularity",
          "Overall skin-tone and texture refinement as part of a plan",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Suitability is assessed individually. Fractional CO2 resurfacing may not be appropriate during pregnancy, with certain skin conditions, active infection or a history of keloid scarring, or on recently tanned skin. Please share your full medical and skincare history at consultation so the doctor can advise safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "A typical visit begins with a doctor consultation and skin assessment. Topical numbing is usually applied beforehand to help with comfort. If resurfacing is appropriate, the laser is passed across the treatment area at settings chosen for your skin.",
          "The number and spacing of sessions is individual and depends on the concern and depth of treatment. Your doctor will explain what to expect for your skin.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime is generally more noticeable than with non-ablative lasers and varies with the settings used. Redness, swelling and skin flaking or peeling over several days to about a week are common and typically settle. Diligent sun protection and gentle skincare are advised afterwards; your doctor will give aftercare guidance specific to you.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any medical procedure, Resurfacing Laser carries risks, which are explained during consultation. Temporary effects can include redness, swelling, peeling and changes in pigmentation. Serious effects are uncommon when the treatment is appropriately selected and performed by a trained doctor.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "The number of sessions and overall cost depend on the concern being addressed, the treatment depth and your individual response. Pricing is discussed at consultation rather than quoted online, so any estimate reflects your actual plan. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Resurfacing Laser the same as Pico laser?",
        a: "No. Resurfacing Laser uses a fractional CO2 laser that creates controlled micro-injury columns in the skin, while Pico laser is non-ablative and does not remove tissue at the surface. Your doctor can explain which is more appropriate for your concern.",
      },
      {
        q: "How much downtime should I expect?",
        a: "Downtime is generally more noticeable than with non-ablative treatments. Redness, swelling and flaking over several days to about a week are common and typically settle, though this varies between individuals. Your doctor will explain what to expect for your settings.",
      },
      {
        q: "Is it painful?",
        a: "Topical numbing is usually applied beforehand to help with comfort. Many people describe a warm or prickling sensation during treatment. Comfort varies between individuals, and your doctor can discuss options beforehand.",
      },
      {
        q: "How many sessions will I need?",
        a: "It varies with the concern and treatment depth. Your doctor will outline a realistic plan and spacing between sessions at consultation, based on your skin and how it responds.",
      },
    ],
  },
  {
    slug: "microwave-contouring",
    name: "Microwave Contouring",
    category: "Body & Slimming",
    image: "/images/treatments/microwave-contouring.jpg",
    summary: "Microwave-based technology used for body-contouring, cellulite and firmness concerns.",
    leadAnswer:
      "Microwave Contouring uses microwave-based energy, delivered at Kaiteki through the Onda platform, to address localised fat, cellulite appearance and skin firmness. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.",
    related: ["fat-freezing", "muscle-stimulation"],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-07-13",
    kkliu: "KKLIU 0000/2026 (sample)",
    kkliuExpiry: "2026-12-31",
    sections: [
      {
        heading: "What is Microwave Contouring?",
        body: [
          "Microwave Contouring is a category of non-invasive body- and face-contouring technology that uses microwave-based energy to act on tissue beneath the skin's surface. At Kaiteki this is delivered using the Onda platform, which the manufacturer refers to as Coolwaves® technology.",
          "It is used to address localised fat, the appearance of cellulite, and skin firmness. Whether it suits you depends on your concern, body area, skin and medical history, which a doctor assesses during consultation.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "Microwave energy is delivered beneath the skin's surface while built-in cooling helps keep the surface protected during treatment. The energy is intended to act on the targeted tissue — for example localised fat cells or the fibrous bands associated with cellulite — and may also prompt a gradual collagen-remodelling response supporting firmness.",
          "Settings and applicator are selected by the treating doctor for the area and your skin. Results develop over time and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Microwave Contouring is commonly considered for the concerns below. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
        ],
        list: [
          "Localised fat on areas such as the abdomen, flanks, thighs and arms",
          "The dimpled appearance associated with cellulite",
          "Skin firmness and tone over treated areas",
          "Firmness concerns of the face and jawline as part of a plan",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Suitability is assessed individually. Microwave Contouring is not a weight-loss treatment; it addresses localised areas rather than overall body weight. It may not be appropriate during pregnancy, with certain implants or medical devices in the treatment area, or with some skin or health conditions.",
          "Please share your full medical history and any devices or implants at consultation so the doctor can advise safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "A typical visit begins with a doctor consultation and assessment of the area of concern. If Microwave Contouring is appropriate, a handpiece is moved over the treatment area to deliver the energy while the surface is cooled.",
          "A course of several sessions spaced a few weeks apart is common, but the plan is individual. Your doctor will explain what to expect for you.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime is usually limited, though this varies between individuals. Temporary warmth, redness or mild tenderness over the treated area can occur and typically settles. Most people are able to return to usual activities, and your doctor will give aftercare guidance specific to you.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any medical procedure, Microwave Contouring carries risks, which are explained during consultation. Temporary effects can include redness, swelling, warmth or tenderness in the treated area. Serious effects are uncommon when the treatment is appropriately selected and performed by a trained doctor.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "The number of sessions and overall cost depend on the area being treated, the concern being addressed and your individual response. Pricing is discussed at consultation rather than quoted online, so any estimate reflects your actual plan. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Microwave Contouring a weight-loss treatment?",
        a: "No. It addresses localised areas of fat, cellulite appearance and skin firmness rather than overall body weight. It is not a substitute for weight management, and a doctor assesses at consultation whether it suits your goals.",
      },
      {
        q: "What device is used at Kaiteki?",
        a: "Kaiteki delivers Microwave Contouring using the Onda platform (Coolwaves® technology). Your doctor can explain how it is applied to your specific area of concern.",
      },
      {
        q: "Is it painful, and is there downtime?",
        a: "Comfort varies between individuals; built-in cooling is intended to keep the session comfortable, and most people describe a warming sensation. Downtime is usually limited, but any temporary effects are explained at consultation.",
      },
      {
        q: "How many sessions will I need?",
        a: "It varies. A course of several sessions spaced a few weeks apart is common, but the plan depends on the area treated and how you respond. Your doctor will outline a realistic plan at consultation.",
      },
    ],
  },
  {
    slug: "muscle-stimulation",
    name: "Muscle Stimulation",
    category: "Body & Slimming",
    image: "/images/treatments/muscle-stimulation.jpg",
    summary: "Electromagnetic muscle-stimulation technology used for body-toning concerns.",
    leadAnswer:
      "Muscle Stimulation at Kaiteki uses the Schwarzy (Em-Fit) platform, which delivers electromagnetic energy intended to induce muscle contractions that can be difficult to achieve through voluntary exercise alone. It is considered for body-toning concerns as part of an individual plan. Suitability and results vary between individuals; a consultation is required.",
    related: ["fat-freezing", "microwave-contouring"],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-07-13",
    kkliu: "KKLIU 0000/2026 (sample)",
    kkliuExpiry: "2026-12-31",
    sections: [
      {
        heading: "What is Muscle Stimulation?",
        body: [
          "Muscle Stimulation is a non-invasive treatment category that uses electromagnetic energy to induce repeated muscle contractions in a targeted area. At Kaiteki this is delivered using the Schwarzy (Em-Fit) platform.",
          "It is generally considered for body-toning concerns in areas such as the abdomen, thighs or buttocks, rather than for fat reduction or weight loss. Whether it suits you depends on your goals, body area and medical history, which a doctor assesses during consultation.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "The device delivers electromagnetic energy through an applicator placed over the target muscle group, inducing supramaximal contractions — a level of contraction that is difficult to achieve through voluntary exercise alone.",
          "Repeated contractions during a session are intended to work the muscle in a concentrated way. Any change in muscle tone develops gradually over a course of sessions and varies between individuals; it is not a substitute for regular exercise.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Muscle Stimulation is commonly considered for the following concerns. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
        ],
        list: [
          "Muscle tone and definition in targeted areas such as the abdomen",
          "Firmness of the thighs or buttocks as part of a wider plan",
          "Support alongside a fitness routine, rather than as a replacement for it",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Suitability is assessed individually. Muscle Stimulation is not a weight-loss or fat-reduction treatment, and it is not a substitute for exercise. It may not be appropriate for people with certain implanted electronic devices, during pregnancy, or with some medical conditions affecting the treatment area.",
          "Please share your full medical history at consultation so the doctor can advise safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "A typical visit begins with a doctor consultation and assessment of the area and your goals. If appropriate, the applicator is positioned over the target muscle group and the device delivers a programme of contractions for a set period.",
          "A course of several sessions spaced across a few weeks is common, but the plan is individual. Your doctor will explain what to expect for you.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "There is generally no set downtime, though muscle soreness similar to that after exercise can occur following a session and typically settles within a few days. Most people return to usual activities immediately; your doctor will give guidance specific to you.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any medical procedure, Muscle Stimulation carries risks, which are explained during consultation. Temporary effects can include muscle soreness, mild redness or tenderness at the treated area. Serious effects are uncommon when the treatment is appropriately selected and performed by a trained doctor.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "The number of sessions and overall cost depend on the area treated, your goals and your individual response. Pricing is discussed at consultation rather than quoted online, so any estimate reflects your actual plan. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Muscle Stimulation a substitute for exercise?",
        a: "No. It is generally considered as a complement to, rather than a replacement for, regular exercise and a healthy lifestyle. A doctor assesses at consultation whether it is a reasonable addition to your routine.",
      },
      {
        q: "Does it reduce fat?",
        a: "Muscle Stimulation is aimed at muscle tone and contraction rather than fat reduction. If fat reduction is your goal, your doctor may discuss other options such as fat-freezing or microwave contouring as part of a wider plan.",
      },
      {
        q: "Is there any downtime?",
        a: "There is generally no set downtime. Muscle soreness similar to that after exercise can occur and typically settles within a few days. Your doctor will explain what to expect for you.",
      },
      {
        q: "How many sessions will I need?",
        a: "It varies. A course of several sessions spaced across a few weeks is common, but the plan depends on your goals and how you respond. Your doctor will outline a realistic plan at consultation.",
      },
    ],
  },
  {
    slug: "dermal-fillers",
    name: "Dermal Fillers",
    category: "Injectables",
    image: "/images/treatments/dermal-fillers.jpg",
    summary: "Hyaluronic-acid injectable fillers used to add volume and support facial contour.",
    leadAnswer:
      "Dermal fillers are hyaluronic-acid (HA) based injectables used by a doctor to add volume or support the shape of specific facial areas. At Kaiteki these include Juvederm, Restylane and Belotero. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.",
    related: ["skin-booster", "bio-stimulator"],
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-13",
    kkliu: "KKLIU 0000/2026 (sample)",
    kkliuExpiry: "2026-12-31",
    sections: [
      {
        heading: "What are dermal fillers?",
        body: [
          "Dermal fillers are injectable gels based on hyaluronic acid (HA), a substance naturally present in skin. Unlike bio-stimulators, which work gradually by supporting the skin's own structural renewal, HA fillers are formulated to sit within the tissue and provide volume or support more directly once injected.",
          "At Kaiteki this includes Juvederm, Restylane and Belotero — established HA filler ranges that differ in gel formulation and are used across different facial areas. Because it is an injectable, it is performed by a doctor, who assesses whether filler is appropriate for you at consultation.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "HA fillers are injected into targeted layers of the skin or the tissue beneath it, where the gel is intended to provide volume or structural support at the treated site. HA is also naturally water-binding, so filler placed in the skin may contribute a degree of hydration.",
          "Different formulations vary in thickness and how they behave in tissue, which is why the doctor selects a specific filler and technique for the area and outcome being considered. Any effect is present from the point of injection but continues to settle over the following days, and varies between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Dermal fillers are commonly considered for the following concerns. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
        ],
        list: [
          "Volume loss in areas such as the cheeks or temples",
          "Definition of the chin, jawline or nose bridge as part of facial contouring",
          "Static lines such as nasolabial folds and marionette lines",
          "Lip volume and shape, assessed individually",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Dermal fillers are not suitable for everyone. As a general precaution, injectable treatments are usually avoided during pregnancy or breastfeeding, over active skin infection or open lesions in the treatment area, and where there is a known allergy to a formulation's ingredients.",
          "Please share your full medical history, medications and any allergies at consultation so the doctor can advise safely and confirm whether filler, or another option, is appropriate for you.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "A session begins with a consultation and facial assessment by a Kaiteki doctor, who discusses your goals and, if filler is appropriate, selects a suitable product for the area. The skin is cleansed and, where relevant, a topical numbing step is used for comfort.",
          "The doctor then administers the injections into the assessed areas. Because this is an injectable treatment, it is carried out by a doctor throughout, and comfort measures can be discussed beforehand.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime is generally minimal for most people. Mild swelling, redness, bruising or tenderness at the injection sites can occur and commonly settles within a few days to about a week; this varies between individuals.",
          "Your doctor will give aftercare guidance specific to your treatment, which may include avoiding certain activities in the days afterwards. Follow the specific advice given and contact the clinic with any concerns.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any injectable treatment, dermal fillers carry potential risks and side effects. Commonly reported temporary effects include swelling, redness, bruising, tenderness or lumpiness at the injection site, which typically settle over time.",
          "Less common but more serious effects can occur with any filler injection, and the full range of risks relevant to you is explained by the doctor during consultation before proceeding, so you can make an informed decision.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "The amount of filler, the product used and overall cost depend on the area treated and your individual assessment. Cost is confirmed at consultation once a plan has been discussed, so it is not quoted online. To ask about a consultation, message us on WhatsApp.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between dermal fillers and bio-stimulators?",
        a: "Dermal fillers are HA-based gels that provide volume or support once injected, while bio-stimulators are intended to work more gradually by supporting the skin's own structural renewal. Which is appropriate for you is assessed by the doctor at consultation.",
      },
      {
        q: "How long do dermal fillers last?",
        a: "This varies between individuals and depends on the product, the area treated and how your body processes it. Your doctor can discuss what is realistic for the specific filler and area being considered.",
      },
      {
        q: "Is there any downtime?",
        a: "Downtime is generally minimal. Mild swelling, bruising or tenderness may occur at the injection sites and usually settles within a few days to about a week, though this varies between individuals.",
      },
      {
        q: "Are dermal fillers reversible?",
        a: "Some HA fillers can, in certain circumstances, be managed with a dissolving agent, which your doctor can discuss if relevant. This is not guaranteed in every situation and is assessed individually.",
      },
    ],
  },
  {
    slug: "facial-treatments",
    name: "Facial Treatments",
    category: "Facials",
    image: "/images/treatments/facial-treatments.jpg",
    summary: "Clinic facials used to support skin cleansing, exfoliation and general skin quality.",
    leadAnswer:
      "Facial Treatments at Kaiteki are clinic-based facials — including Hydrafacial and Silkpeel — that combine cleansing, exfoliation and skin-conditioning steps to support general skin quality. Suitability and results vary between individuals; a consultation helps determine which option, if any, is appropriate for you.",
    related: ["pico-laser", "skin-booster"],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-07-13",
    kkliu: "KKLIU 0000/2026 (sample)",
    kkliuExpiry: "2026-12-31",
    sections: [
      {
        heading: "What are Facial Treatments?",
        body: [
          "Facial Treatments are clinic-based procedures that combine cleansing, exfoliation and skin-conditioning steps in a single session, generally with gentler technology than laser or energy-based devices. At Kaiteki this category includes Hydrafacial and Silkpeel.",
          "They are typically considered for general skin maintenance and quality, and can be used alongside other treatments as part of a wider plan. Whether a facial is appropriate for you, and which one, is assessed by a doctor or trained clinician during consultation.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "Hydrafacial uses a device-based process that cleanses, exfoliates and extracts debris from pores before infusing serums suited to the skin. Silkpeel combines exfoliation with simultaneous infusion of topical solutions.",
          "Across these options, the aim is to clear surface build-up, refine texture and support skin hydration, rather than to address deeper structural concerns. The clinician selects the treatment and any add-on serums for your skin type. Results are generally supportive rather than corrective and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Facial Treatments are commonly considered for the following concerns, generally as gentle, ongoing skin support. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
        ],
        list: [
          "Congested pores and surface-level acne-prone skin",
          "Dull or uneven-looking skin tone",
          "Enlarged-pore appearance as part of routine skin maintenance",
          "General hydration and skin-quality support between other treatments",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Facial Treatments are generally gentle, but suitability is still assessed individually. They may not be appropriate over active skin infection, significant inflammation, or immediately after certain other procedures. Please share your skincare and medical history at consultation so the clinician can advise on a suitable option.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "A session begins with a brief skin assessment to confirm which facial is appropriate. The skin is then cleansed, exfoliated and, depending on the option chosen, treated with a device-based extraction and serum-infusion step.",
          "Sessions are generally comfortable, and most people can return to normal activities immediately afterwards. Your clinician will explain what to expect for the specific facial chosen.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime is minimal to none for most people. Mild, temporary redness can occur immediately after some facials and usually settles within a few hours. Sun protection and gentle skincare are advised afterwards; your clinician will give guidance specific to your skin.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "Facial Treatments are generally low-risk, but as with any procedure, mild temporary redness, sensitivity or, uncommonly, an irritation reaction to a serum can occur. These are discussed at consultation, particularly if you have known sensitivities.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "Facial Treatments are often booked periodically as part of ongoing skin maintenance, though the suitable frequency depends on your skin and goals. Cost depends on the option chosen and is confirmed at consultation rather than quoted online. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between Hydrafacial and Silkpeel?",
        a: "Both combine exfoliation with serum infusion, but they use different device technology and formulations. Your clinician can advise which suits your skin type and concern at consultation.",
      },
      {
        q: "Can facials replace treatments like Pico laser or skin boosters?",
        a: "No. Facial Treatments are generally supportive and address surface-level skin quality, while lasers and injectables work at a different level and are used for more specific concerns. A doctor can advise how a facial fits into a wider plan, if at all.",
      },
      {
        q: "Is there any downtime?",
        a: "Downtime is minimal to none for most people. Mild, temporary redness can occur and usually settles within a few hours. Your clinician will give aftercare guidance for the option chosen.",
      },
      {
        q: "How often should I get a facial?",
        a: "This depends on your skin and goals, and is best discussed with your clinician, as there is no single frequency that suits everyone.",
      },
    ],
  },
  {
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    category: "Hair Removal",
    image: "/images/treatments/laser-hair-removal.jpg",
    summary: "IPL and radiofrequency technology used to reduce unwanted hair over a course of sessions.",
    leadAnswer:
      "Laser Hair Removal at Kaiteki uses the Alma platform, which combines IPL (intense pulsed light) and radiofrequency energy, to target hair follicles over a course of sessions. Suitability and results vary between individuals and hair type; a consultation is required to assess whether it is appropriate for you.",
    related: ["exosome-therapy"],
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-13",
    kkliu: "KKLIU 0000/2026 (sample)",
    kkliuExpiry: "2026-12-31",
    sections: [
      {
        heading: "What is Laser Hair Removal?",
        body: [
          "Laser Hair Removal is a treatment intended to reduce unwanted hair by targeting the hair follicle with light or energy-based technology. At Kaiteki this is delivered using the Alma platform, which combines IPL (intense pulsed light) with radiofrequency energy.",
          "It is generally considered for areas such as the underarms, legs, arms or face. Whether it suits you depends on your hair type, skin tone and medical history, which a doctor or trained clinician assesses during consultation.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "The device delivers IPL energy combined with radiofrequency to the treatment area. The light energy is intended to be absorbed by pigment in the hair follicle, while the radiofrequency component adds a further energy pathway to the follicle, which may support the treatment's effect on the hair-growth cycle.",
          "Because hair follicles cycle through active and resting phases, a single session only affects follicles that are in an active growth phase at the time. A course of sessions over time is intended to address more of the follicles across their cycle. Results vary between individuals and hair and skin type.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Laser Hair Removal is commonly considered for reducing unwanted hair in the areas below. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
        ],
        list: [
          "Underarm hair",
          "Leg and arm hair",
          "Facial hair, assessed individually",
          "Other body areas, assessed at consultation",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Suitability is assessed individually and depends partly on hair colour and skin tone, as light-based hair removal generally works best on hair with more pigment. It may not be appropriate during pregnancy, on recently tanned skin, over certain skin conditions, or with some medications that increase light sensitivity.",
          "Please share your full medical and skincare history at consultation so the clinician can advise safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "A typical visit begins with a consultation and assessment of the treatment area, hair type and skin tone. The area is cleansed and, if appropriate, the device is passed over the area to deliver the combined IPL and radiofrequency energy.",
          "A course of several sessions spaced a few weeks apart is common, reflecting the hair-growth cycle, but the plan is individual. Your clinician will explain what to expect for you.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime is usually minimal. Temporary redness, warmth or mild sensitivity in the treated area can occur and typically settles within a few hours to a day. Sun protection is advised on treated areas between sessions; your clinician will give aftercare guidance specific to you.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any energy-based procedure, Laser Hair Removal carries risks, which are explained during consultation. Temporary effects can include redness, swelling or changes in pigmentation. Serious effects are uncommon when the treatment is appropriately selected and performed by a trained clinician.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "The number of sessions and overall cost depend on the area treated, hair type and your individual response, reflecting the hair-growth cycle. Pricing is discussed at consultation rather than quoted online, so any estimate reflects your actual plan. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many sessions will I need?",
        a: "It varies with hair type, area and the hair-growth cycle. A course of several sessions spaced a few weeks apart is common, since a single session only affects hairs in an active growth phase. Your clinician will outline a realistic plan at consultation.",
      },
      {
        q: "Is Laser Hair Removal permanent?",
        a: "It is intended to reduce hair over a course of sessions rather than guarantee permanent removal, and some regrowth or maintenance sessions may be needed over time. Your clinician will explain what is realistic for your hair and skin type.",
      },
      {
        q: "Is it suitable for all skin tones and hair colours?",
        a: "Suitability depends partly on hair colour and skin tone, as light-based hair removal generally works best where there is more contrast between hair and skin pigment. A consultation assesses whether it suits your specific hair and skin type.",
      },
      {
        q: "Is there any downtime?",
        a: "Downtime is usually minimal. Temporary redness or warmth can occur and typically settles within a few hours to a day. Your clinician will give aftercare guidance specific to you.",
      },
    ],
  },
];

export const treatmentCategories: Treatment["category"][] = [
  "Lasers",
  "Lifting & Tightening",
  "Body & Slimming",
  "Injectables",
  "Facials",
  "Hair Removal",
  "Regenerative",
  "Eyes",
];

export function treatmentBySlug(slug: string) {
  return treatments.find((t) => t.slug === slug);
}

/** All treatments, in source order. */
export function categoryTreatments() {
  return treatments;
}

/** Canonical URL for a treatment. */
export function treatmentHref(t: Treatment) {
  return `/treatments/${t.slug}`;
}

/** Treatments filtered to one menu group. */
export function treatmentsByCategory(category: Treatment["category"]) {
  return treatments.filter((t) => t.category === category);
}
