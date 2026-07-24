import type { Technology } from "@/lib/types";

// Products & Technology catalog (docs/superpowers/specs/2026-07-18…). Each item's
// link to a treatment (`treatments[]`) is the ONLY authored edge; concerns are
// derived via content/data/relations.ts. `group` is the NavCategory of the
// item's primary treatment. Summaries are single, factual, MAB-compliant
// sentences (docs/05, docs/02 §8) — no superlatives, guarantees or before/after.
// `reviewedBy`/`lastReviewed` are SAMPLE placeholders pending real MAB sign-off,
// mirroring the primary treatment's reviewer (see treatments.ts note). coolsculpting, onda-coolwaves and
// dermav carry over the rich sections/faqs from their former child-treatment pages.
export const technology: Technology[] = [
  // ── Lasers ──────────────────────────────────────────────────────────────
  {
    slug: "picosure",
    name: "Picosure",
    group: "Lasers",
    type: "device",
    treatments: ["pico-laser"],
    image: "/images/technology/picosure.jpg",
    device: "PicoSure",
    summary:
      "A picosecond aesthetic laser used within Pico laser treatment for pigmentation, uneven tone and tattoo ink.",
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-18",
    seoTitle: "PicoSure Picosecond Laser Treatment Malaysia | Kaiteki",
    seoDescription:
      "PicoSure is a picosecond laser used within Pico Laser treatment for pigmentation, uneven tone and tattoo ink. Book a free consultation to check suitability.",
  },
  {
    slug: "fotona-pqx",
    name: "Fotona PQX (StarWalker)",
    group: "Lasers",
    type: "device",
    treatments: ["pico-laser"],
    image: "/images/technology/fotona-pqx.jpg",
    device: "Fotona",
    summary:
      "A picosecond laser platform, also known as StarWalker, used within Pico laser treatment for pigment and tattoo concerns.",
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-18",
    seoTitle: "Fotona PQX (StarWalker) Laser Treatment Malaysia | Kaiteki",
    seoDescription:
      "Fotona PQX, also known as StarWalker, is a picosecond laser used within Pico Laser treatment for pigment and tattoo concerns. Book a free consultation today.",
  },
  {
    slug: "fotona-sp-dynamis",
    name: "Fotona SP Dynamis / TimeWalker",
    group: "Lasers",
    type: "device",
    treatments: ["fotona-4d"],
    image: "/images/technology/fotona-sp-dynamis.jpg",
    device: "Fotona",
    summary:
      "An Nd:YAG and Er:YAG laser platform used to deliver Kaiteki's Fotona 4D facial protocol.",
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-18",
    seoTitle: "Fotona SP Dynamis (TimeWalker) Laser Malaysia | Kaiteki",
    seoDescription:
      "Fotona SP Dynamis, also called TimeWalker, is the laser platform behind Kaiteki's Fotona 4D facial protocol. Book a free consultation to check if it suits you.",
  },
  {
    slug: "dermav",
    name: "DermaV",
    group: "Lasers",
    type: "device",
    treatments: ["vascular-pigment-laser"],
    image: "/images/technology/dermav.jpg",
    summary:
      "A dual-wavelength (595nm/1064nm) vascular and pigment laser used for facial redness, visible vessels and pigment concerns.",
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
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-18",
    seoTitle: "DermaV Vascular & Pigment Laser Treatment Malaysia | Kaiteki",
    seoDescription:
      "DermaV is a dual-wavelength laser used at Kaiteki for facial redness, visible vessels and pigment concerns. Book a free consultation to check your suitability.",
  },
  {
    slug: "pro-yellow",
    name: "Pro Yellow (Quadrostar 577nm)",
    group: "Lasers",
    type: "device",
    treatments: ["vascular-pigment-laser"],
    image: "/images/technology/pro-yellow.jpg",
    summary:
      "A 577nm yellow-light laser used for vascular concerns such as facial redness and visible vessels.",
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-18",
    seoTitle: "Pro Yellow 577nm Vascular Laser Malaysia | Kaiteki",
    seoDescription:
      "Pro Yellow (Quadrostar 577nm) is a yellow-light laser used at Kaiteki for facial redness and visible vessels. Book a free consultation to assess suitability.",
  },
  {
    slug: "m22-ipl",
    name: "M22 IPL",
    group: "Lasers",
    type: "device",
    treatments: ["vascular-pigment-laser", "laser-hair-removal"],
    image: "/images/technology/m22-ipl.jpg",
    summary:
      "An intense pulsed light (IPL) platform that can be filtered for vascular or pigment targets and used for hair reduction.",
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-18",
    seoTitle: "M22 IPL Laser Treatment Price in Malaysia | Kaiteki",
    seoDescription:
      "M22 IPL is an intense pulsed light platform used at Kaiteki for vascular, pigment and hair-reduction concerns. Book a free consultation to find what suits you.",
  },
  {
    slug: "fractional-co2",
    name: "Fractional CO2",
    group: "Lasers",
    type: "device",
    treatments: ["resurfacing-laser"],
    image: "/images/technology/fractional-co2.jpg",
    summary:
      "A fractional CO2 laser that creates controlled micro-injury columns, used within resurfacing-laser treatment for texture and scarring.",
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-07-18",
    seoTitle: "Fractional CO2 Laser Resurfacing Malaysia | Kaiteki",
    seoDescription:
      "Fractional CO2 is a resurfacing laser used within Kaiteki's resurfacing-laser treatment for texture and scarring concerns. Book a free consultation today.",
  },

  // ── Lifting & Tightening ────────────────────────────────────────────────
  {
    slug: "ultracel-q",
    name: "Ultracel Q",
    group: "Lifting & Tightening",
    type: "device",
    treatments: ["hifu"],
    image: "/images/technology/ultracel-q.jpg",
    summary:
      "A high-intensity focused ultrasound (HIFU) device used for non-surgical skin-lifting and tightening concerns.",
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-07-18",
    seoTitle: "Ultracel Q HIFU Skin-Lifting Treatment Malaysia | Kaiteki",
    seoDescription:
      "Ultracel Q is a HIFU device used at Kaiteki for non-surgical skin-lifting and tightening concerns. Book a free consultation to check if it suits your skin.",
  },
  {
    slug: "lifthera",
    name: "Lifthera",
    group: "Lifting & Tightening",
    type: "device",
    treatments: ["hifu"],
    image: "/images/technology/lifthera.jpg",
    summary:
      "A focused-ultrasound device used within HIFU treatment for skin-lifting and tightening concerns.",
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-07-18",
    seoTitle: "Lifthera HIFU Skin-Lifting Treatment Malaysia | Kaiteki",
    seoDescription:
      "Lifthera is a focused-ultrasound device used within Kaiteki's HIFU treatment for skin-lifting and tightening concerns. Book a free consultation to learn more.",
  },
  {
    slug: "ultherapy-system",
    name: "Ultherapy System",
    group: "Lifting & Tightening",
    type: "device",
    treatments: ["ultherapy"],
    image: "/images/technology/ultherapy-system.jpg",
    device: "Ultherapy",
    summary:
      "A micro-focused ultrasound platform with built-in ultrasound imaging used for non-surgical lifting of the face and neck.",
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-07-18",
    seoTitle: "Ultherapy System Non-Surgical Lifting Malaysia | Kaiteki",
    seoDescription:
      "The Ultherapy System uses micro-focused ultrasound with built-in imaging for non-surgical face and neck lifting. Book a free consultation to learn more.",
  },
  {
    slug: "sylfirm-x",
    name: "Sylfirm X",
    group: "Lifting & Tightening",
    type: "device",
    treatments: ["microneedling"],
    image: "/images/technology/sylfirm-x.jpg",
    summary:
      "A radiofrequency microneedling device with pulsed and continuous modes used for pigment, vascular and texture concerns.",
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-07-18",
    seoTitle: "Sylfirm X RF Microneedling Treatment Malaysia | Kaiteki",
    seoDescription:
      "Sylfirm X is a radiofrequency microneedling device used at Kaiteki for pigment, vascular and texture concerns. Book a free consultation to check suitability.",
  },
  {
    slug: "morpheus8",
    name: "Morpheus8",
    group: "Lifting & Tightening",
    type: "device",
    treatments: ["microneedling"],
    image: "/images/technology/morpheus8.jpg",
    summary:
      "A radiofrequency microneedling device offering deeper RF penetration, used for skin-tightening and texture concerns.",
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-07-18",
    seoTitle: "Morpheus8 RF Microneedling Treatment Malaysia | Kaiteki",
    seoDescription:
      "Morpheus8 is a radiofrequency microneedling device offering deeper penetration, used at Kaiteki for skin-tightening and texture. Book a free consultation today.",
  },
  {
    slug: "potenza",
    name: "Potenza",
    group: "Lifting & Tightening",
    type: "device",
    treatments: ["microneedling"],
    image: "/images/technology/potenza.jpg",
    device: "Potenza",
    summary:
      "A radiofrequency microneedling device with adjustable depth and monopolar/bipolar modes, used for scarring and pore concerns.",
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-07-18",
    seoTitle: "Potenza RF Microneedling Treatment Malaysia | Kaiteki",
    seoDescription:
      "Potenza is a radiofrequency microneedling device with adjustable depth used at Kaiteki for scarring and pore concerns. Book a free consultation to learn more.",
  },
  {
    slug: "btl-exilis",
    name: "BTL Exilis",
    group: "Lifting & Tightening",
    type: "device",
    treatments: ["radiofrequency"],
    image: "/images/technology/btl-exilis.jpg",
    summary:
      "A monopolar radiofrequency device that delivers deep, uniform heating, used for skin-firmness and texture concerns.",
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-18",
    seoTitle: "BTL Exilis Radiofrequency Skin Firming Malaysia | Kaiteki",
    seoDescription:
      "BTL Exilis is a monopolar radiofrequency device that delivers deep, uniform heating for skin-firmness and texture at Kaiteki. Book a free consultation today.",
  },
  {
    slug: "wonderface",
    name: "Wonderface",
    group: "Lifting & Tightening",
    type: "device",
    treatments: ["radiofrequency"],
    image: "/images/technology/wonderface.jpg",
    summary:
      "A radiofrequency platform with precise energy control used for skin-firmness and contour concerns of the face.",
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-18",
    seoTitle: "Wonderface Radiofrequency Treatment Malaysia | Kaiteki",
    seoDescription:
      "Wonderface is a radiofrequency platform with precise energy control used at Kaiteki for skin-firmness and facial contour. Book a free consultation today.",
  },

  // ── Body & Slimming ─────────────────────────────────────────────────────
  {
    slug: "coolsculpting",
    name: "CoolSculpting",
    group: "Body & Slimming",
    type: "device",
    treatments: ["fat-freezing"],
    image: "/images/technology/coolsculpting.jpg",
    device: "CoolSculpting",
    summary:
      "A cryolipolysis (fat-freezing) device that uses controlled cooling to target pockets of localised fat.",
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
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-07-18",
    seoTitle: "CoolSculpting Fat-Freezing Treatment Malaysia | Kaiteki",
    seoDescription:
      "CoolSculpting is a cryolipolysis device using controlled cooling to target pockets of localised fat. Book a free consultation at Kaiteki to check suitability.",
  },
  {
    slug: "cooltech",
    name: "Cooltech",
    group: "Body & Slimming",
    type: "device",
    treatments: ["fat-freezing"],
    image: "/images/technology/cooltech.jpg",
    summary:
      "A cryolipolysis device that uses controlled cooling to target pockets of localised fat.",
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-07-18",
    seoTitle: "Cooltech Cryolipolysis Fat-Freezing Malaysia | Kaiteki",
    seoDescription:
      "Cooltech is a cryolipolysis device that uses controlled cooling to target pockets of localised fat at Kaiteki. Book a free consultation to check suitability.",
  },
  {
    slug: "onda-coolwaves",
    name: "Onda Coolwaves",
    group: "Body & Slimming",
    type: "device",
    treatments: ["microwave-contouring"],
    image: "/images/technology/onda-coolwaves.jpg",
    device: "Onda",
    summary:
      "A microwave-based (Coolwaves) device used for localised fat, cellulite appearance and skin firmness.",
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
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-07-18",
    seoTitle: "Onda Coolwaves Body & Face Treatment Malaysia | Kaiteki",
    seoDescription:
      "Onda uses microwave-based Coolwaves technology at Kaiteki for localised fat, cellulite appearance and facial firmness. Book a free consultation to learn more.",
  },
  {
    slug: "schwarzy",
    name: "Schwarzy (Em-Fit)",
    group: "Body & Slimming",
    type: "device",
    treatments: ["muscle-stimulation"],
    image: "/images/technology/schwarzy.jpg",
    summary:
      "An electromagnetic muscle-stimulation device used to induce muscle contractions for body-toning concerns.",
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-07-18",
    seoTitle: "Schwarzy (Em-Fit) Muscle-Toning Treatment Malaysia | Kaiteki",
    seoDescription:
      "Schwarzy (Em-Fit) is an electromagnetic muscle-stimulation device used at Kaiteki to induce contractions for body-toning concerns. Book a free consultation.",
  },

  // ── Injectables ─────────────────────────────────────────────────────────
  {
    slug: "profhilo",
    name: "Profhilo",
    group: "Injectables",
    type: "injectable",
    treatments: ["skin-booster"],
    image: "/images/technology/profhilo.jpg",
    device: "Profhilo",
    summary:
      "A high-concentration hyaluronic acid injectable used within skin-booster treatment for hydration and skin remodelling.",
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-18",
    seoTitle: "Profhilo Skin Booster Treatment in Malaysia | Kaiteki",
    seoDescription:
      "Profhilo is a high-concentration hyaluronic acid injectable used within Kaiteki's skin-booster treatment for hydration. Book a free consultation to learn more.",
  },
  {
    slug: "rejuran",
    name: "Rejuran",
    group: "Injectables",
    type: "injectable",
    treatments: ["skin-booster"],
    image: "/images/technology/rejuran.jpg",
    summary:
      "A polynucleotide (salmon PN/DNA) injectable used within skin-booster treatment to support the skin barrier.",
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-18",
    seoTitle: "Rejuran Skin Booster Injectable Treatment Malaysia | Kaiteki",
    seoDescription:
      "Rejuran is a polynucleotide injectable used within Kaiteki's skin-booster treatment to support the skin barrier. Book a free consultation to check suitability.",
  },
  {
    slug: "plinest",
    name: "Plinest/Newest",
    group: "Injectables",
    type: "injectable",
    treatments: ["skin-booster"],
    image: "/images/technology/plinest.jpg",
    summary:
      "A polynucleotide-based injectable used within skin-booster treatment to support skin regeneration and elasticity.",
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-18",
    seoTitle: "Plinest/Newest Skin Booster Injectable Malaysia | Kaiteki",
    seoDescription:
      "Plinest/Newest is a polynucleotide-based injectable used within Kaiteki's skin-booster treatment for regeneration and elasticity. Book a free consultation.",
  },
  {
    slug: "restylane-skinbooster",
    name: "Restylane Skinboosters",
    group: "Injectables",
    type: "injectable",
    treatments: ["skin-booster"],
    image: "/images/technology/restylane-skinbooster.jpg",
    summary:
      "A hyaluronic-acid injectable range used within skin-booster treatment to support skin hydration and quality.",
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-18",
    seoTitle: "Restylane Skinboosters Treatment Malaysia | Kaiteki",
    seoDescription:
      "Restylane Skinboosters is a hyaluronic-acid range used within Kaiteki's skin-booster treatment to support hydration and skin quality. Book a free consultation.",
  },
  {
    slug: "hydrodeluxe",
    name: "Hydrodeluxe",
    group: "Injectables",
    type: "injectable",
    treatments: ["skin-booster"],
    image: "/images/technology/hydrodeluxe.jpg",
    summary:
      "A hydrating injectable formulation used within skin-booster treatment to support skin moisture and quality.",
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-18",
    seoTitle: "Hydrodeluxe Hydrating Skin Booster Malaysia | Kaiteki",
    seoDescription:
      "Hydrodeluxe is a hydrating injectable formulation used within Kaiteki's skin-booster treatment to support moisture and skin quality. Book a free consultation.",
  },
  {
    slug: "sculptra",
    name: "Sculptra",
    group: "Injectables",
    type: "injectable",
    treatments: ["bio-stimulator"],
    image: "/images/technology/sculptra.jpg",
    device: "Sculptra",
    summary:
      "A poly-L-lactic acid (PLLA) injectable used within bio-stimulator treatment to support gradual structural renewal.",
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-18",
    seoTitle: "Sculptra Bio-Stimulator Treatment Malaysia | Kaiteki",
    seoDescription:
      "Sculptra is a poly-L-lactic acid injectable used within Kaiteki's bio-stimulator treatment to support gradual structural renewal. Book a free consultation.",
  },
  {
    slug: "ellanse",
    name: "Ellanse",
    group: "Injectables",
    type: "injectable",
    treatments: ["bio-stimulator"],
    image: "/images/technology/ellanse.jpg",
    summary:
      "A polycaprolactone (PCL) injectable used within bio-stimulator treatment as a collagen-stimulating injectable.",
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-18",
    seoTitle: "Ellanse Bio-Stimulator Treatment Malaysia | Kaiteki",
    seoDescription:
      "Ellanse is a polycaprolactone injectable used within Kaiteki's bio-stimulator treatment as a collagen-supporting option. Book a free consultation to learn more.",
  },
  {
    slug: "radiesse",
    name: "Radiesse",
    group: "Injectables",
    type: "injectable",
    treatments: ["bio-stimulator"],
    image: "/images/technology/radiesse.jpg",
    summary:
      "A calcium hydroxylapatite (CaHA) injectable used within bio-stimulator treatment with collagen-supporting properties.",
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-18",
    seoTitle: "Radiesse Bio-Stimulator Treatment Malaysia | Kaiteki",
    seoDescription:
      "Radiesse is a calcium hydroxylapatite injectable used within Kaiteki's bio-stimulator treatment with collagen-supporting properties. Book a free consultation.",
  },
  {
    slug: "juvederm",
    name: "Juvederm",
    group: "Injectables",
    type: "injectable",
    treatments: ["dermal-fillers"],
    image: "/images/technology/juvederm.jpg",
    summary:
      "A hyaluronic-acid dermal filler range used to add volume and support facial contour.",
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-18",
    seoTitle: "Juvederm Dermal Filler Treatment in Malaysia | Kaiteki",
    seoDescription:
      "Juvederm is a hyaluronic-acid dermal filler range used at Kaiteki to add volume and support facial contour. Book a free consultation to check suitability.",
  },
  {
    slug: "restylane",
    name: "Restylane",
    group: "Injectables",
    type: "injectable",
    treatments: ["dermal-fillers"],
    image: "/images/technology/restylane.jpg",
    summary:
      "A hyaluronic-acid dermal filler range used to add volume and support facial contour.",
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-18",
    seoTitle: "Restylane Dermal Filler Treatment Malaysia | Kaiteki",
    seoDescription:
      "Restylane is a hyaluronic-acid dermal filler range used at Kaiteki to add volume and support facial contour. Book a free consultation to learn more.",
  },
  {
    slug: "belotero",
    name: "Belotero",
    group: "Injectables",
    type: "injectable",
    treatments: ["dermal-fillers"],
    image: "/images/technology/belotero.jpg",
    summary:
      "A hyaluronic-acid dermal filler range used to add volume and soften static lines.",
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-18",
    seoTitle: "Belotero Dermal Filler Treatment in Malaysia | Kaiteki",
    seoDescription:
      "Belotero is a hyaluronic-acid dermal filler range used at Kaiteki to add volume and soften static lines. Book a free consultation to check suitability.",
  },

  // ── Facials ─────────────────────────────────────────────────────────────
  {
    slug: "hydrafacial",
    name: "Hydrafacial",
    group: "Facials",
    type: "device",
    treatments: ["facial-treatments"],
    image: "/images/technology/hydrafacial.jpg",
    summary:
      "A device-based facial that cleanses, exfoliates and infuses serums to support skin quality.",
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-07-18",
    seoTitle: "Hydrafacial Device-Based Facial Treatment Malaysia | Kaiteki",
    seoDescription:
      "Hydrafacial is a device-based facial that cleanses, exfoliates and infuses serums to support skin quality at Kaiteki. Book a free consultation to learn more.",
  },
  {
    slug: "silkpeel",
    name: "Silkpeel",
    group: "Facials",
    type: "device",
    treatments: ["facial-treatments"],
    image: "/images/technology/silkpeel.jpg",
    summary:
      "A device-based facial that combines exfoliation with simultaneous infusion of topical solutions.",
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-07-18",
    seoTitle: "Silkpeel Dermalinfusion Facial Treatment Malaysia | Kaiteki",
    seoDescription:
      "Silkpeel is a device-based facial combining exfoliation with infusion of topical solutions at Kaiteki. Book a free consultation to check what suits your skin.",
  },

  // ── Hair Removal ────────────────────────────────────────────────────────
  {
    slug: "alma",
    name: "Alma (IPL + RF)",
    group: "Hair Removal",
    type: "device",
    treatments: ["laser-hair-removal"],
    image: "/images/technology/alma.jpg",
    summary:
      "A hair-removal platform combining IPL and radiofrequency energy to target hair follicles over a course of sessions.",
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-18",
    seoTitle: "Alma IPL + RF Hair Removal Treatment Malaysia | Kaiteki",
    seoDescription:
      "Alma combines IPL and radiofrequency energy at Kaiteki to target hair follicles over a course of sessions. Book a free consultation to discuss your goals.",
  },
];

export function technologyBySlug(slug: string) {
  return technology.find((x) => x.slug === slug);
}
