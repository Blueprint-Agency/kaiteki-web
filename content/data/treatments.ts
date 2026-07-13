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
    machineNames: ["Picosure", "Fotona PQX (StarWalker)", "PicoCare"],
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
  {
    slug: "hifu",
    name: "HIFU",
    category: "Lifting & Tightening",
    image: "/images/treatments/hifu.jpg",
    device: "HIFU",
    machineNames: ["Ultracel Q", "Lifthera"],
    summary: "Focused ultrasound used for non-surgical skin-lifting and tightening concerns.",
    leadAnswer:
      "HIFU (high-intensity focused ultrasound) is a non-surgical treatment that delivers focused ultrasound energy to deeper skin layers. It is commonly used for skin-lifting and tightening concerns. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.",
    concerns: ["aging", "face-lifting", "fine-lines-wrinkles"],
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
          "At Kaiteki, HIFU is delivered using devices such as Lifthera 2 and Ultracel. The treating doctor selects the applicator and settings for your skin and the area being addressed. Any changes develop gradually and vary between individuals.",
        ],
      },
      {
        heading: "Devices & technology: HIFU and Ultherapy",
        body: [
          "HIFU and Ultherapy both use focused ultrasound but are distinct treatments. The HIFU devices used at Kaiteki (Lifthera 2 / Ultracel) deliver focused ultrasound and are often considered for deeper areas such as the jaw and jowls. Ultherapy is a separate micro-focused-ultrasound platform sometimes considered for more precise areas such as the brow and neck.",
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
        a: "Both use focused ultrasound but are different treatments. HIFU at Kaiteki uses devices such as Lifthera 2 and Ultracel and is often considered for deeper areas like the jaw and jowls, while Ultherapy is a separate micro-focused-ultrasound platform sometimes considered for more precise areas such as the brow and neck. Which one suits you, if any, is decided with your doctor.",
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
    parent: "hifu",
    image: "/images/treatments/ultherapy.jpg",
    device: "Ultherapy",
    summary: "A focused-ultrasound platform used for lifting and tightening of the face and neck.",
    leadAnswer: "Ultherapy is a focused-ultrasound treatment used for non-surgical lifting and tightening of areas such as the brow, chin and neck. It works at set depths within the skin. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.",
    concerns: ["aging", "face-lifting"],
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
  { slug: "fotona-4d", name: "Fotona 4D", category: "Lasers", image: "/images/treatments/fotona-4d.png", device: "Fotona", summary: "A laser approach combining several modes for skin-firming and refinement concerns.", leadAnswer: "Fotona 4D is a laser treatment that combines several modes to address firmness and skin-quality concerns from inside the mouth and on the skin surface. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.", concerns: ["aging", "face-lifting", "fine-lines-wrinkles"], related: ["hifu", "ultherapy"], reviewedBy: "dr-chew-yuhhui", lastReviewed: "2026-06-15", kkliu: "KKLIU 0000/2026 (sample)", kkliuExpiry: "2026-12-31",
    sections: [
      {
        heading: "What is Fotona 4D?",
        body: [
          "Fotona 4D refers to a non-surgical laser protocol that uses an Nd:YAG and Er:YAG laser system to deliver energy to the face through a combination of modes. It is called \"4D\" because it works across four steps, treating both the skin surface and the tissue inside the mouth.",
          "The treatment is generally considered for firmness, skin-quality and volume-related concerns of the face. It uses laser energy rather than injectables or surgery. Whether it is appropriate for you, and what it may realistically address, is something a doctor assesses during consultation, as suitability and outcomes vary between individuals.",
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
    slug: "onda",
    name: "Onda",
    category: "Body & Slimming",
    parent: "microwave-contouring",
    image: "/images/treatments/onda.png",
    device: "Onda",
    summary:
      "Microwave-based technology used for body-contouring and firmness concerns.",
    leadAnswer:
      "Onda uses microwave-based energy to address localised fat and skin-firmness concerns on the body. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.",
    concerns: ["body-slimming", "face-contouring"],
    related: ["coolsculpting"],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-06-15",
    kkliu: "KKLIU 0000/2026 (sample)",
    kkliuExpiry: "2026-12-31",
    sections: [
      {
        heading: "What is Onda?",
        body: [
          "Onda is a non-invasive body- and face-contouring device that uses a microwave-based technology the manufacturer calls Coolwaves®. It is used to address localised fat, skin firmness and the appearance of cellulite on the body, and firmness of the face.",
          "At Kaiteki, Onda is offered in two forms — Onda for Body and Onda for Face — using the same underlying technology at settings suited to each area. Whether it suits you depends on your concern, body area, skin and medical history, which a doctor assesses during consultation.",
        ],
      },
      {
        heading: "How Coolwaves technology works",
        body: [
          "Coolwaves® are a specific range of microwaves delivered beneath the skin's surface. The energy is intended to act on the targeted tissue — for example, localised fat cells or the fibrous bands associated with cellulite — while the built-in cooling helps keep the surface of the skin protected during treatment.",
          "The same energy may also prompt a gradual collagen-remodelling response, which is why the device is used for firmness as well as contouring. Settings are selected by the treating doctor for the area and your skin. Results develop over time and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address — body & face",
        body: [
          "Onda is commonly considered for the concerns below. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
          "Onda for Body is used for localised fat and skin firmness, while Onda for Face uses a gentler approach for the face and jawline.",
        ],
        list: [
          "Body: localised fat on areas such as the abdomen and flanks (love handles), thighs and buttocks, upper arms, and the bra-line and back",
          "Body: the dimpled appearance associated with cellulite",
          "Body: skin firmness and tone over treated areas",
          "Face: firmness of the jawline and cheeks, and areas such as jowls, nasolabial folds and under the chin",
          "Face: fine lines and overall skin quality as part of a plan",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Suitability is assessed individually. Onda is not a weight-loss treatment; it addresses localised areas rather than overall body weight. It may not be appropriate during pregnancy, with certain implants or medical devices in the treatment area, or with some skin or health conditions.",
          "Please share your full medical history and any devices or implants at consultation so the doctor can advise safely and confirm whether Onda, or another option, is right for you.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "A typical visit begins with a doctor consultation and assessment of the area of concern. If Onda is appropriate, a handpiece is moved over the treatment area to deliver the energy while the surface is cooled.",
          "A course of several sessions spaced a few weeks apart is common, but the plan is individual and depends on the area and your response. Your doctor will explain what to expect for you.",
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
          "As with any medical procedure, Onda carries risks, which are explained during consultation. Temporary effects can include redness, swelling, warmth or tenderness in the treated area. Serious effects are uncommon when the treatment is appropriately selected and performed by a trained doctor.",
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
        q: "Is Onda a weight-loss treatment?",
        a: "No. Onda addresses localised areas of fat and skin firmness rather than overall body weight. It is not a substitute for weight management, and a doctor assesses at consultation whether it suits your goals.",
      },
      {
        q: "What is the difference between Onda for Body and Onda for Face?",
        a: "Both use the same Coolwaves® microwave technology. Onda for Body targets localised fat, cellulite and firmness on areas such as the abdomen, thighs and arms, while Onda for Face uses a gentler approach for firmness of the face and jawline. Your doctor will advise which is appropriate.",
      },
      {
        q: "Is Onda painful, and is there downtime?",
        a: "Comfort varies between individuals; the built-in cooling is intended to keep the session comfortable, and most people describe a warming sensation. Downtime is usually limited, but any temporary effects and what to expect are explained at consultation.",
      },
      {
        q: "How many Onda sessions will I need?",
        a: "It varies. A course of several sessions spaced a few weeks apart is common, but the plan depends on the area treated and how you respond. Your doctor will outline a realistic plan at consultation.",
      },
    ],
  },
  {
    slug: "radiofrequency",
    name: "Radiofrequency",
    category: "Lifting & Tightening",
    image: "/images/treatments/radiofrequency.jpg",
    machineNames: ["BTL Exilis", "Wonderface"],
    summary: "Radiofrequency energy used to support skin-firmness and texture concerns.",
    leadAnswer:
      "Radiofrequency treatments use controlled energy to warm deeper skin layers, which may support firmness and texture concerns over a course of sessions. Suitability and results vary between individuals; a consultation is required.",
    concerns: ["face-lifting", "enlarged-pores", "dark-eye-circles"],
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
          "Different RF devices allow the treating doctor to adjust treatment depth and intensity for your skin condition and goals. At Kaiteki these include Oligio, which uses monopolar radiofrequency to deliver deep, uniform heating, and Density, an RF platform with precise energy control. A contact-cooling step is used during treatment to help keep each session comfortable.",
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
    machineNames: ["Sylfirm X", "Morpheus8", "Potenza"],
    summary: "A radiofrequency (RF) microneedling treatment used for texture, scarring and pore concerns.",
    leadAnswer:
      "Microneedling at Kaiteki is most often performed as radiofrequency (RF) microneedling, combining fine needles with radiofrequency energy to prompt a controlled skin-renewal response at multiple depths. It is commonly considered for texture, acne-scarring and pore concerns. Suitability and results vary between individuals; a consultation is required.",
    concerns: ["acne", "enlarged-pores"],
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
    slug: "coolsculpting",
    name: "CoolSculpting",
    category: "Body & Slimming",
    parent: "fat-freezing",
    image: "/images/treatments/coolsculpting.png",
    device: "CoolSculpting",
    summary: "A controlled-cooling treatment (cryolipolysis) for localised fat concerns.",
    leadAnswer:
      "CoolSculpting is a controlled-cooling treatment (cryolipolysis) used to address pockets of localised fat in specific areas. It is not a weight-loss treatment. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.",
    concerns: ["body-slimming", "face-contouring"],
    related: ["fat-freezing", "onda"],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-06-10",
    kkliu: "KKLIU 0000/2026 (sample)",
    kkliuExpiry: "2026-12-31",
    sections: [
      {
        heading: "What is CoolSculpting?",
        body: [
          "CoolSculpting is a brand of cryolipolysis (\"fat freezing\") device that uses controlled cooling to target areas of localised fat. It is a non-surgical, non-injectable approach that works through applicators placed on the skin over the treatment area.",
          "It is used to address specific pockets of fat that persist despite diet and exercise, rather than to reduce overall body weight. Whether it suits you depends on your concern, the area involved and your medical history, which a doctor assesses during consultation.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "During treatment, a device applicator draws the target area against a cooling plate. The controlled cooling is intended to affect fat cells beneath the skin while aiming to leave the overlying skin unharmed.",
          "Affected fat cells are gradually processed and cleared by the body over the following weeks. Any change develops slowly rather than immediately, and the extent varies between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "CoolSculpting is commonly considered for localised fat in areas where a suitable applicator can be fitted. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
        ],
        list: [
          "Lower-abdomen and \"muffin top\" area",
          "Flanks (love handles) and back or bra-line fat",
          "Inner and outer thighs",
          "Upper arms",
          "Under-chin (submental) fullness",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "CoolSculpting is not a weight-loss treatment and is not a substitute for diet, exercise or medical management of weight. It is intended for people close to their target weight who have specific, pinchable pockets of fat.",
          "It may not be appropriate during pregnancy, with certain cold-related conditions, or with some medical histories. Please share your full medical history at consultation so the doctor can assess suitability and explain the risks before any treatment is planned.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "A visit begins with a doctor assessment of the area and your goals. If treatment is appropriate, the area is marked, a gel pad is applied to protect the skin, and the applicator is positioned.",
          "Each applicator cycle typically runs for around 35 to 60 minutes, during which you may feel cold and some pulling or pressure that usually eases. A short massage of the treated area may follow. The number of areas and applicators is individual, so overall visit time varies.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime is usually limited, and many people return to daily activities the same day, though this varies. Temporary redness, swelling, firmness, tenderness or altered sensation in the treated area can occur and typically settles over days to weeks.",
          "Your doctor will give aftercare guidance specific to you. Any change to the area develops gradually over the weeks and months that follow.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any medical procedure, cryolipolysis carries risks, which are explained during consultation. Common temporary effects include redness, swelling, bruising, firmness, tingling or numbness in the treated area.",
          "Less common effects exist and are discussed individually. Serious effects are uncommon when the treatment is appropriately selected and performed under a trained doctor's care.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "The number of areas, applicators and sessions depends on your concern and how your body responds, so a plan is individual. Cost depends on these factors and is discussed at consultation rather than quoted online, so any estimate reflects your actual plan.",
          "Message us on WhatsApp to arrange a consultation, where suitability is assessed and the risks are explained before anything is planned.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is CoolSculpting a weight-loss treatment?",
        a: "No. CoolSculpting is a cryolipolysis treatment aimed at specific pockets of localised fat, not overall weight reduction. It is not a substitute for diet, exercise or medical weight management. A consultation assesses whether it is appropriate for you.",
      },
      {
        q: "How long does a CoolSculpting session take?",
        a: "Each applicator cycle usually runs for around 35 to 60 minutes. The overall visit depends on how many areas and applicators are involved, which varies between individuals and is planned by your doctor at consultation.",
      },
      {
        q: "When might I notice a change?",
        a: "Any change develops gradually over the weeks and months after treatment as the body processes the affected fat cells, rather than immediately. The extent varies between individuals, and your doctor will explain what is realistic for you.",
      },
      {
        q: "Does CoolSculpting have downtime?",
        a: "Downtime is usually limited and many people resume daily activities the same day, though this varies. Temporary redness, swelling, firmness or altered sensation can occur and typically settles. Your doctor will give aftercare guidance specific to you.",
      },
    ],
  },
  {
    slug: "fat-freezing",
    name: "Fat Freezing",
    category: "Body & Slimming",
    image: "/images/treatments/fat-freezing.jpg",
    machineNames: ["Cooltech"],
    summary: "The general term for cryolipolysis for localised fat concerns.",
    leadAnswer:
      "Fat freezing (cryolipolysis) uses controlled cooling to target localised fat in specific areas, and is not a weight-loss treatment. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.",
    concerns: ["body-slimming"],
    related: ["coolsculpting", "onda"],
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
    machineNames: ["Profhilo", "Rejuran", "Plinest/Newest", "Restylane Skinboosters", "Hydrodeluxe"],
    summary: "Injectable hydrating treatments used to support skin quality and hydration.",
    leadAnswer:
      "Skin boosters are injectable treatments that deliver hydrating ingredients into the skin to support skin quality and hydration over a course of sessions. Suitability and results vary between individuals; a consultation is required.",
    concerns: ["aging", "fine-lines-wrinkles", "dark-eye-circles"],
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
          "Plinest — a polynucleotide-based formulation used to support skin regeneration and elasticity; often considered for stressed, ageing, or post-treatment skin.",
          "Profhilo — a high-concentration hyaluronic acid formulation used for deep hydration and skin remodelling, and to support firmness.",
          "Rejuran — based on salmon polynucleotide (PN/DNA) technology, used to support the skin barrier and skin healing; often considered for sensitive, acne-prone, or damaged skin.",
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
    machineNames: ["Sculptra", "Ellanse", "Radiesse"],
    summary: "Injectable treatments used to support the skin's own structural renewal.",
    leadAnswer:
      "Bio-stimulator treatments are injectables intended to support the skin's own gradual structural renewal over time. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.",
    concerns: ["aging", "face-lifting"],
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
    concerns: ["aging", "hair-loss"],
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
    slug: "dermav",
    name: "DermaV",
    category: "Lasers",
    parent: "vascular-pigment-laser",
    image: "/images/treatments/dermav.png",
    summary: "A vascular laser used for redness and selected vascular skin concerns.",
    leadAnswer:
      "DermaV is a vascular laser used to address redness and selected vascular concerns in the skin. Suitability and results vary between individuals; a consultation is required to assess whether it is appropriate for you.",
    concerns: ["dark-eye-circles", "pigmentation"],
    related: ["pico-laser"],
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-06-05",
    kkliu: "KKLIU 0000/2026 (sample)",
    kkliuExpiry: "2026-12-31",
    sections: [
      {
        heading: "What is DermaV?",
        body: [
          "DermaV is a dual-wavelength aesthetic laser used to address both vascular (redness-related) and pigment concerns in the skin. Although it is often described as a vascular laser, the device combines two laser wavelengths in one platform, so it can be directed at red and brown concerns within a single treatment plan.",
          "At Kaiteki, DermaV is used as part of an individually assessed plan. Whether it suits your skin depends on your concern, skin type and medical history, which a doctor evaluates during consultation.",
        ],
      },
      {
        heading: "How it works — dual wavelengths",
        body: [
          "DermaV delivers two laser wavelengths that target different concerns. A 595nm wavelength is directed at vascular concerns such as visible vessels and facial redness, while a 1064nm wavelength reaches deeper and is used for certain pigment concerns.",
          "An integrated contact-cooling system helps protect and soothe the skin surface during treatment, which is intended to support comfort and reduce the risk of heat-related effects. The treating doctor selects the wavelength, settings and combination for your skin tone and concern. Results develop gradually and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "DermaV is commonly considered for the following concerns. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
        ],
        list: [
          "Facial redness and rosacea-type flushing",
          "Broken capillaries and spider veins around the nose or cheeks",
          "Brown spots, sun spots and sun-related pigmentation",
          "Post-inflammatory hyperpigmentation (PIH)",
          "Lingering post-acne redness",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Suitability is assessed individually. The dual wavelengths and integrated cooling mean DermaV is used across a range of skin tones, including Asian and more sensitive skin, but this does not make it appropriate for everyone.",
          "DermaV may not be suitable during pregnancy, with certain skin conditions or medications, or on recently tanned skin. Please share your full medical and skincare history at consultation so the doctor can advise safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "A typical visit begins with a doctor consultation and skin assessment. If DermaV is appropriate, a patch or test area may be considered before proceeding. The skin is cleansed and a cooling gel applied, then the laser is delivered using the 595nm and 1064nm wavelengths as needed for your concern.",
          "A cooling and soothing step follows, and the doctor will advise on aftercare and sun protection. A course of several sessions spaced a few weeks apart is common, but the plan is individual and your doctor will explain what to expect for your skin.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime is usually limited but varies between individuals. Temporary redness or mild sensitivity can occur after a session and typically settles within a short period.",
          "Sun protection and gentle skincare are advised afterwards. Your doctor will give aftercare guidance specific to your skin and concern.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any medical procedure, DermaV carries risks, which are explained during consultation. Temporary effects can include redness, swelling or changes in pigmentation. Serious effects are uncommon when the treatment is appropriately selected and performed by a trained doctor.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "The number of sessions and overall cost depend on the concern being addressed, the area treated and your individual response. Some plans include occasional maintenance sessions over time. Pricing is discussed at consultation rather than quoted online, so any estimate reflects your actual plan. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is DermaV suitable for darker or sensitive Asian skin tones?",
        a: "DermaV is used across a range of skin tones, and its dual wavelengths and contact cooling are designed with sensitive and Asian skin in mind. Suitability is still individual, so a doctor assesses your skin type and history at consultation before recommending it.",
      },
      {
        q: "Can DermaV treat both redness and pigmentation?",
        a: "DermaV combines a vascular (595nm) and a pigment (1064nm) wavelength in one device, so it may be directed at both red and brown concerns within a plan. Which wavelengths are used, and whether the treatment suits you, is decided by your doctor at consultation.",
      },
      {
        q: "Is there any downtime after DermaV?",
        a: "Downtime is usually limited. Some slight redness can occur for a few hours after a session and typically settles quickly, though this varies between individuals. Your doctor will explain what to expect and give you aftercare guidance.",
      },
      {
        q: "How many DermaV sessions will I need?",
        a: "It varies. A course of several sessions spaced a few weeks apart is common, sometimes with occasional maintenance afterwards, but the plan depends on your concern and how your skin responds. Your doctor will outline a realistic plan at consultation.",
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
    concerns: [],
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

/** Category (high-level) pages only, in source order. */
export function categoryTreatments() {
  return treatments.filter((t) => !t.parent);
}

/** Machine (low-level) pages that sit under a category. */
export function machinesOf(categorySlug: string) {
  return treatments.filter((t) => t.parent === categorySlug);
}

/** Resolve a nested path. `machine` undefined → a category page. */
export function treatmentByPath(category: string, machine?: string) {
  if (machine) {
    const m = treatments.find((t) => t.slug === machine);
    return m && m.parent === category ? m : undefined;
  }
  const c = treatments.find((t) => t.slug === category);
  return c && !c.parent ? c : undefined;
}

/** Correct URL for any treatment (category or machine). */
export function treatmentHref(t: Treatment) {
  return t.parent ? `/treatments/${t.parent}/${t.slug}` : `/treatments/${t.slug}`;
}

/** Categories filtered to one menu group (hub + nav use this — categories only). */
export function treatmentsByCategory(category: Treatment["category"]) {
  return treatments.filter((t) => t.category === category && !t.parent);
}
