import type { Treatment } from "@/lib/types";

// KKLIU numbers remain SAMPLE placeholders pending the real MAB approvals
// (docs/05 §8–§9).
//
// `reviewedBy` / `lastReviewed` — updated 2026-09-20. Kaiteki confirmed the
// medical review is carried out offline by the named doctors and directed that
// the byline stay on the page, so these are the clinic's editorial record, not
// a placeholder. Reviewers are distributed evenly across all 21 doctors in
// content/data/doctors.ts (3-4 pages each) rather than matched to specialty;
// `scripts/rebalance-reviewers.md` in docs/15 describes the rule. Changing a
// reviewer here is a change to a published claim about a named, MMC-registered
// person: change it deliberately, and keep it consistent with
// config/concern-signoff.json. Copy is written to the
// MAB-compliant patterns in docs/05 §2 — no superlatives, guarantees or
// before/after. pico-laser is fully authored as the master-template showcase.
export const treatments: Treatment[] = [
  // ── Reference implementation of the v2 treatment template (config/treatments.json,
  // archetype ED, depth "full"). Copy authored in the Pico Laser page preview,
  // 30 Jul 2026, pending Dr Chew Yuhhui's clinical sign-off. Two deliberate
  // departures from that document, both because the source it cited is a 404:
  // Picocare is absent from T-07 and T-15, and the fact strip says two platforms,
  // not three. Restore both together if /technology/picocare ships.
  {
    slug: "pico-laser",
    durationDowntime: "20-40 min · Minimal downtime (1-2 days)",
    name: "Pico Laser",
    category: "Lasers",
    image: "https://cdn.kaiteki.my/treatments/pico-laser/hero-2.jpg",
    procedureImages: [
      { src: "https://cdn.kaiteki.my/treatments/pico-laser/procedure-01.jpg", caption: "A practitioner guides the laser handpiece over the patient's cheek during a session at Kaiteki." },
      { src: "https://cdn.kaiteki.my/treatments/pico-laser/procedure-02.jpg", caption: "A practitioner in protective eyewear works the laser handpiece across the patient's face." },
      { src: "https://cdn.kaiteki.my/treatments/pico-laser/procedure-03.jpg", caption: "A practitioner positions the laser arm beside a patient wearing eye protection." },
    ],
    device: "PicoSure",
    summary:
      "A picosecond laser used for pigmentation, dull skin tone and tattoo removal, suited to a range of Asian skin tones.",
    // T-01 "In brief" — leads with the page's key distinction inside 60 words
    // (pico is a category, wavelength decides suitability), not a definition.
    leadAnswer:
      "Pico laser is a category of laser, not a single machine. Every pico device fires pulses lasting trillionths of a second, but they differ in wavelength, which decides which pigment, ink colours and skin tones a device suits. Kaiteki runs more than one pico platform for that reason, and a doctor decides which, if any, fits your skin.",

    // T-02 — process facts only. A time-to-result here would be an outcome
    // claim (R-01) and is medically wrong for melasma regardless.
    facts: [
      { value: "2 pico platforms", label: "Matched to your skin type and pigment" },
      { value: "20–40 minutes", label: "Typical facial pigment appointment, including preparation" },
      { value: "Assessment first", label: "Your first visit is a doctor consultation, not a treatment" },
    ],

    // T-03 — seven is the ceiling, not the target.
    jumpNav: [
      { id: "what-is-pico-laser", label: "What it is" },
      { id: "what-it-treats", label: "What it treats" },
      { id: "which-device", label: "Which device" },
      { id: "suitability", label: "Suitability" },
      { id: "after-a-session", label: "After a session" },
      { id: "risks", label: "Risks & limits" },
      { id: "sessions-cost", label: "Sessions & cost" },
    ],

    // T-06 — routes the deeper query to the concern page that owns it instead
    // of competing with it. Descriptions are specific to pico laser (R-04).
    routes: [
      {
        title: "Surface pigment",
        body: "Sun spots, freckles and other benign pigmented marks sitting in the upper skin.",
        links: [{ href: "/concerns/pigmentation", label: "Read about pigmentation" }],
      },
      {
        title: "Deeper and hormonal pigment",
        body: "Melasma, and dermal pigment conditions such as naevus of Ota or Hori's naevus. These sit deeper and respond less predictably.",
        links: [{ href: "/concerns/pigmentation", label: "Read about pigmentation" }],
      },
      {
        title: "Post-acne marks and tone",
        body: "Brown marks left behind after spots have settled, along with dull or uneven overall tone and the look of enlarged pores.",
        links: [
          { href: "/concerns/acne", label: "Read about acne" },
          { href: "/concerns/enlarged-pores", label: "Enlarged pores" },
        ],
      },
      {
        title: "Tattoo ink",
        body: "Black and dark blue inks respond most predictably. Light colours, white and some cosmetic or permanent-makeup pigments can be resistant or behave unpredictably, so tattoos are assessed individually.",
        links: [{ href: "/concerns/tattoo-removal", label: "Read about tattoo removal" }],
      },
    ],

    // T-07 — a factual difference in energy delivery, never a ranking (R-02).
    variantModule: {
      heading: "Which pico device, and why it matters",
      intro:
        "Both platforms fire picosecond pulses, but their primary wavelengths differ, and wavelength changes how strongly melanin absorbs the pulse. That is a difference in energy delivery, not a ranking.",
      items: [
        {
          eyebrow: "755nm · Cynosure",
          title: "PicoSure",
          body: "An alexandrite-wavelength platform. 755nm is absorbed strongly by melanin, which is useful for certain pigment and ink colours but makes skin tone a larger factor in the settings chosen. The manufacturer limits some indications by Fitzpatrick skin type.",
          href: "/technology/picosure",
          hrefLabel: "About PicoSure",
        },
        {
          eyebrow: "1064nm · Fotona",
          title: "Fotona PQX (StarWalker)",
          body: "Built around the longer 1064nm Nd:YAG wavelength, which interacts less with surface melanin and travels deeper. Often chosen where skin tone or pigment depth makes a 755nm pass less appropriate.",
          href: "/technology/fotona-pqx",
          hrefLabel: "About Fotona PQX",
        },
      ],
    },

    // T-08 — placed at the point of maximum unanswered question.
    ctaMid: {
      heading: "Not sure which applies to you?",
      body: "A doctor can look at your skin, tell you which type of pigment you have, and say honestly whether a pico laser is the right tool for it.",
    },

    // T-09
    avoidIf: [
      { lead: "Pregnancy or breastfeeding.", body: "Treatment is generally deferred." },
      {
        lead: "Recently tanned or sunburnt skin.",
        body: "This raises the risk of an uneven response and of pigment change afterwards.",
      },
      {
        lead: "Active infection, inflammation or open skin",
        body: "in the area to be treated.",
      },
      { lead: "A history of keloid or hypertrophic scarring.", body: "" },
      {
        lead: "Medications that increase light sensitivity,",
        body: "including oral isotretinoin.",
      },
      { lead: "Recent lasers, peels or other procedures", body: "on the same area." },
    ],

    // T-10 — step 1 states the first visit is not a treatment.
    sessionSteps: [
      {
        title: "Consultation and skin assessment",
        body: "The doctor examines the area, takes your history, and explains whether a pico laser is appropriate. Sometimes the answer is a different treatment, or waiting.",
      },
      {
        title: "Test area where appropriate",
        body: "A small patch may be treated first, particularly for deeper pigment or for tattoo ink of unknown composition, and reviewed before a full session is booked.",
      },
      {
        title: "Preparation",
        body: "The skin is cleansed and eye shields are fitted. Topical numbing may be applied where the plan calls for it, most often for sensitive areas and tattoo work.",
      },
      {
        title: "The treatment pass",
        body: "The handpiece is passed over the area in overlapping passes. Most people describe brief snapping or hot-pinprick sensations rather than sustained pain. Treated pigment may look temporarily darker or greyish straight away, which is expected.",
      },
      {
        title: "Afterwards",
        body: "A cooling or soothing step, sunscreen, and aftercare instructions for the area treated.",
      },
    ],

    // T-11 — physical healing timeframes only, never a timeframe to a result.
    afterSession: {
      intro: "",
      bands: [
        {
          title: "The first few hours",
          body: "Mild redness, warmth and sometimes slight swelling. Most people go back to their day.",
        },
        {
          title: "Day one to two",
          body: "Redness typically settles. Where pigment was targeted directly, treated spots often look darker than before.",
        },
        {
          title: "Day three to roughly two weeks",
          body: "Small darkened flecks or fine crusting may appear and then flake away on their own. Leave them alone; picking is the most common cause of a mark that outlasts the treatment.",
        },
      ],
      aftercare:
        "Daily broad-spectrum sunscreen and real sun avoidance; gentle cleansing and moisturising; and no retinoids or acids until your doctor says to resume.",
    },

    // T-12 — the pigment-change note is mandatory on energy-based treatments (R-05).
    risks: {
      intro: "",
      common:
        "Redness, warmth, mild swelling, pinpoint bruising and small crusts that flake away over one to two weeks.",
      lessCommon:
        "Darkening of the treated skin after treatment (post-inflammatory hyperpigmentation), lightening of the treated skin, blistering and, rarely, scarring.",
      pigmentNote:
        "Post-inflammatory hyperpigmentation is the risk that matters most in the skin tones common here: skin with more melanin answers injury with more pigment, so an over-aggressive setting can leave a darker mark than the one it targeted. That is why a doctor may choose lower energy, longer intervals, a test patch or a different wavelength.",
      cannotDo: [
        "It does not stop new pigment forming. Without daily sun protection, sun-related marks return, and melasma fluctuates with sun exposure and hormones.",
        "It does not treat active acne. Marks left behind, yes; the inflammatory condition itself is managed medically.",
        "It cannot promise complete clearance of a tattoo. Ink composition is rarely known with certainty, and some colours respond poorly.",
        "It does not lift or tighten skin.",
      ],
      disclose:
        "Also tell your doctor about any history of cold sores.",
    },

    // T-13 — factors only, no figures (R-03). A list so it can become a price
    // table later without a rebuild.
    costFactors: {
      intro:
        "Kaiteki does not quote prices online; the figure you get at consultation reflects your assessed plan. What moves it:",
      factors: [
        "Type and depth of pigment. Surface sun spots generally need fewer visits than deeper dermal pigment.",
        "Size of the area treated, whether a few spots, a full face, or a body area.",
        "Which device and settings your doctor selects for your skin type.",
        "For tattoos: ink colours, density, how many layers were applied, the age of the tattoo and where it sits on the body.",
        "Whether pico work is combined with other steps in a wider plan.",
      ],
    },

    // T-17 — each reason is specific to what pico laser does NOT do.
    related: ["microneedling", "vascular-pigment-laser", "resurfacing-laser"],
    relatedReasons: {
      microneedling:
        "Considered where the concern is depressed acne scarring or texture rather than pigment.",
      "vascular-pigment-laser":
        "Used where redness and visible vessels sit alongside the pigment, which a pico laser does not address.",
      "resurfacing-laser":
        "A fractional CO2 approach, considered for deeper scarring and significant texture change.",
    },

    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-06-20",
    // Title drops "Tattoo" so /concerns/tattoo-removal owns tattoo queries (OV-00c).
    seoTitle: "Pico Laser Treatment Malaysia | Pigmentation | Kaiteki",
    seoDescription:
      "Pico laser at Kaiteki uses picosecond pulses for pigmentation, uneven tone and tattoo ink. A doctor assesses which device and settings suit your skin.",
    sections: [
      {
        // T-04 — para 2 is what earns the snippet / AI-answer citation.
        heading: "What is Pico laser?",
        body: [
          "“Pico” refers to the length of the laser pulse, not to a brand. A picosecond is a trillionth of a second, and pulses that short deliver their energy faster than the surrounding skin can heat up. The effect on pigment is therefore largely photomechanical (a rapid shockwave that fractures pigment clusters) rather than thermal.",
          "That matters because heat tends to provoke pigment problems in the skin tones common in Malaysia, which is why picosecond devices are widely used here for pigment work. Suitability still turns on three things a doctor checks: the type and depth of your pigment, your skin type, and whether you mark after inflammation.",
        ],
      },
      {
        // T-05
        heading: "How does a picosecond pulse break up pigment?",
        body: [
          "The pulse is absorbed by pigment far more strongly than by the surrounding skin. Because it arrives and ends in trillionths of a second, the pigment particle takes the energy as a mechanical shock and breaks into smaller fragments. Those fragments are then cleared gradually by the body's own immune cells over the weeks that follow.",
          "Delivered at lower energy with a diffractive lens, the same pulse creates small zones of controlled injury in the upper skin without breaking the surface, which is used as a skin-renewal pass for texture and tone rather than for a specific mark.",
        ],
      },
    ],
    // T-16 — 10 at Full depth, 40–55 words each, no restating a block above. Required mix: device
    // comparison, pain, session count, post-session timeline, expectations,
    // local skin tones, cost-without-a-price, then practical.
    faqs: [
      {
        q: "Does Pico laser hurt?",
        a: "Picosecond pulses are generally reported as more tolerable than older longer-pulse lasers, and settings can be adjusted during the session.",
      },
      {
        q: "How many sessions will I need?",
        a: "Surface sun spots generally need fewer sessions than dermal pigment or a dense tattoo. Facial pigment is commonly planned as several sessions a few weeks apart.",
      },
      {
        q: "Will I see a difference after one session?",
        a: "Not reliably. Your body clears fragmented pigment gradually, so change develops over the weeks after each session. Progress is reviewed at each visit.",
      },
      {
        q: "Can Pico laser treat melasma?",
        a: "Sometimes, with caution. Over-aggressive treatment can worsen melasma, so it is usually managed as an ongoing plan of sun protection, topical care and conservative in-clinic settings. A doctor decides whether any laser suits your melasma at all.",
      },
      {
        q: "How much does Pico laser cost in Malaysia?",
        a: "Kaiteki does not quote prices online. Pricing is given at consultation for your assessed plan.",
      },
      {
        q: "Can I wear makeup or go back to work afterwards?",
        a: "Makeup can go back on once redness settles, over intact skin only and never over crusting.",
      },
    ],
  },

  // Nav / hub / card entries. Each carries a compliant summary + lead answer so
  // its [slug] page renders honestly; deep sections are authored progressively.
  {
    slug: "hifu",
    durationDowntime: "30-60 min · No downtime",
    name: "HIFU",
    category: "Lifting & Tightening",
    image: "https://cdn.kaiteki.my/treatments/hifu/hero.jpg",
    procedureImages: [
      { src: "https://cdn.kaiteki.my/treatments/hifu/procedure-01.jpg", caption: "The ultrasound handpiece on a gel-coated cheek, with eye shields in place." },
      { src: "https://cdn.kaiteki.my/treatments/hifu/procedure-02.jpg", caption: "A gloved practitioner holds the ultrasound handpiece along the patient's jawline." },
      { src: "https://cdn.kaiteki.my/treatments/hifu/procedure-03.jpg", caption: "A practitioner works on the patient's cheek with the handpiece; eye pads cover the eyes." },
    ],
    device: "HIFU",
    typicalSessions: "1 to a few, with review",
    summary: "Focused ultrasound used for non-surgical skin-lifting and tightening concerns.",
    leadAnswer:
      "HIFU (high-intensity focused ultrasound) is a non-surgical treatment that delivers focused ultrasound energy to deeper skin layers. How much laxity there is, and how deep it sits, is what decides whether it applies to you at all — so a doctor examines your face before any plan is made.",

    // docs/15 item 1.4 (2026-09-24): the v2 block set, applied under docs/16 R1.
    // Seven shared prose sections became typed blocks and were deleted. Every
    // clinical line below is restructured from copy that already carries a
    // named reviewer: this page's own sections, the Ultracel Q and Liftera
    // device pages, and the Ultherapy vs HIFU guide. No new claim, no figure.
    // The re-arrangement goes to Dr Chuah in the offline review round, which is
    // why `lastReviewed` is unchanged.
    facts: [
      { value: "2 ultrasound platforms", label: "Selected for your face and the depth being treated" },
      { value: "30–60 minutes", label: "Typical face and neck appointment, including preparation" },
      { value: "Assessment first", label: "Your first visit is a doctor consultation, not a treatment" },
    ],

    // T-06 — the concern pages that list HIFU, each reached by what it is
    // actually used for rather than by a list of nouns.
    routes: [
      {
        title: "Sagging along the jaw and jowls",
        body: "Early to moderate laxity in the lower face and along the jawline, and loss of definition under the chin.",
        links: [
          { href: "/concerns/face-lifting", label: "Read about face lifting" },
          { href: "/concerns/face-contouring", label: "Face contouring" },
        ],
      },
      {
        title: "Firmness and fine lines with age",
        body: "Loss of firmness associated with reduced collagen, crepey or loose-feeling skin on the neck, and an overall loss of tone.",
        links: [
          { href: "/concerns/aging", label: "Read about ageing skin" },
          { href: "/concerns/fine-lines-wrinkles", label: "Fine lines & wrinkles" },
        ],
      },
    ],

    // T-07 — the two HIFU platforms Kaiteki runs, told apart by how each
    // delivers energy. A factual difference, never a ranking (R-02).
    variantModule: {
      heading: "Ultracel Q or Liftera: which HIFU device, and why",
      intro:
        "Both devices focus ultrasound beneath the surface. They differ in how that energy is shaped.",
      items: [
        {
          eyebrow: "Cartridge-based · Jeisys Medical",
          title: "Ultracel Q",
          body: "The doctor changes cartridges to change the focal depth, so the same platform can be aimed at the dermis, the deeper SMAS layer or the fat layer, with the energy focused either as a dot or along a line.",
          href: "/technology/ultracel-q",
          hrefLabel: "About Ultracel Q",
        },
        {
          eyebrow: "Line-focused · Asterasys",
          title: "Liftera",
          body: "Draws the focus along a continuous line rather than a row of separate dots, which the manufacturer links to reduced discomfort. A pen-type applicator reaches smaller, curved areas such as around the eyes, the nasolabial region and along the jaw.",
          href: "/technology/lifthera",
          hrefLabel: "About Liftera",
        },
      ],
    },

    ctaMid: {
      heading: "Not sure whether lifting is what your face needs?",
      body: "A doctor can tell whether what you see is laxity, volume loss or skin quality, and whether HIFU addresses it.",
    },

    // T-09
    avoidIf: [
      { lead: "Pregnancy or breastfeeding.", body: "Treatment is deferred." },
      {
        lead: "Active infection, inflamed acne or open wounds",
        body: "in the area to be treated.",
      },
      {
        lead: "Implants, metallic or cardiac devices, or recently placed dermal fillers",
        body: "lying in the path of the energy.",
      },
      { lead: "A tendency to keloid scarring.", body: "" },
      {
        lead: "Certain medications and medical conditions.",
        body: "",
      },
    ],

    // T-10 — step 1 states the first visit is not a treatment.
    sessionSteps: [
      {
        title: "Consultation and assessment",
        body: "The doctor examines where your laxity sits, whether there is enough for focused ultrasound to be worth doing, and which device suits each area.",
      },
      {
        title: "Mapping and preparation",
        body: "The skin is cleansed, the treatment areas are marked so the energy is mapped rather than applied uniformly, and ultrasound coupling gel is applied. Topical numbing may be used depending on the area.",
      },
      {
        title: "The treatment lines",
        body: "The doctor delivers the energy line by line with the selected cartridges. Most people describe brief warmth, prickling or a deep tapping with each pulse rather than continuous pain, felt more over bony areas such as the jaw and forehead.",
      },
      {
        title: "Afterwards",
        body: "The gel is removed and you are given aftercare advice.",
      },
    ],

    // T-11 — physical recovery only, never a timeframe to a result.
    afterSession: {
      intro: "",
      bands: [
        {
          title: "Straight afterwards",
          body: "Mild redness and slight swelling in the treated area can occur. Most people carry on with their day.",
        },
        {
          title: "The first few days",
          body: "Tenderness to touch, or a temporary feeling of firmness in the treated area, generally settles on its own over a few days.",
        },
      ],
      aftercare:
        "Gentle skincare and daily sun protection. You may be asked to avoid intense heat, such as saunas or hot yoga, for a short period.",
    },

    // T-12
    risks: {
      intro: "",
      common:
        "Redness, swelling, tenderness, small areas of bruising, and transient numbness or tingling in the treated area.",
      lessCommon:
        "Welts, and temporary nerve-related effects such as localised muscle weakness, have been reported with focused-ultrasound treatments.",
      pigmentNote:
        "Focused ultrasound is absorbed by tissue rather than by melanin, so HIFU is generally used across a wide range of skin tones, including deeper Asian skin, without the pigment considerations that apply to some lasers. The bigger risk here is the device and the operator. See “Is cheap HIFU safe?” below.",
      cannotDo: [
        "It is not a facelift. It does not cut, lift or remove skin. Heavy sagging is often better discussed as a surgical question.",
        "It does not replace lost volume, relax lines caused by muscle movement, or treat surface texture and pigment.",
        "It is not permanent. Skin continues to age after any tightening treatment, which is why plans include review and occasional maintenance.",
      ],
      disclose:
        "Tell your doctor about anything listed under who should postpone it.",
    },

    // T-13 — factors only, no figures (settled 2026-09-20).
    costFactors: {
      intro:
        "Kaiteki does not quote HIFU prices online; the plan is set by examining your face. What moves it:",
      factors: [
        "The areas treated. A jawline-and-neck plan is a different amount of work from a full face and neck.",
        "The number of shots or lines delivered across those areas.",
        "Which device and cartridges your plan needs.",
        "Whether HIFU is combined with another treatment in a wider plan.",
      ],
    },

    // Factual rows only. Downtime is each treatment's own `durationDowntime`.
    comparisons: [
      {
        name: "HIFU",
        bestFor: "Early to moderate laxity along the jaw, lower face and neck",
        downtime: "None for most people",
      },
      {
        name: "Dermal fillers",
        bestFor: "Lines and hollows caused by lost volume or structure",
        downtime: "1-3 days",
      },
    ],

    related: ["ultherapy", "skin-booster", "botulinum-toxin"],
    relatedReasons: {
      ultherapy:
        "Focused ultrasound with on-screen imaging, used where the doctor wants to see the tissue layers before placing energy.",
      "skin-booster":
        "Considered where the concern is skin quality and hydration rather than laxity, which HIFU does not address.",
      "botulinum-toxin":
        "Used for lines caused by muscle movement, which focused ultrasound does not treat.",
    },
    reviewedBy: "dr-yvonne-chuah",
    lastReviewed: "2026-06-18",
    seoTitle: "HIFU Malaysia | Non-Surgical Lifting Treatment | Kaiteki",
    seoDescription:
      "HIFU treatment in Malaysia for non-surgical skin lifting and tightening concerns. Book a free consultation with a Kaiteki doctor to check suitability.",
    sections: [
      {
        heading: "What is HIFU?",
        body: [
          "HIFU stands for high-intensity focused ultrasound: a non-surgical, energy-based treatment that directs ultrasound to set depths beneath the skin, without incisions.",
        ],
      },
      {
        heading: "How does HIFU reach the layer a facelift works on?",
        body: [
          "HIFU concentrates ultrasound energy at set depths beneath the surface, including the deeper support layer sometimes called the SMAS (superficial muscular aponeurotic system). That is the same layer a surgical facelift addresses, though focused ultrasound reaches it without incisions. The energy creates small, controlled points of heat at those depths while the skin surface is largely spared, which is why there is no wound to heal.",
          "That controlled heating prompts the body's repair response, and the skin produces fresh collagen in the treated zones. Because this is a collagen response rather than mechanical tightening, any change is gradual and differs from person to person.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between HIFU and Ultherapy?",
        a: "Both use focused ultrasound. Ultherapy is a separate platform that shows the tissue layers on screen before treating.",
      },
      {
        q: "Is there any downtime after HIFU?",
        a: "Usually little to none. Temporary redness, mild swelling or tenderness can occur and typically settles within a few days.",
      },
      {
        q: "How many HIFU sessions will I need?",
        a: "HIFU is often planned as one session with a review, or a small number of sessions across the year, rather than a fixed course.",
      },
      {
        q: "Does HIFU hurt?",
        a: "Numbing cream and adjusted settings keep it tolerable, so say if it is uncomfortable.",
      },
      {
        q: "Is cheap HIFU safe?",
        a: "Very low-priced HIFU, particularly in non-medical settings, is where the real risk sits: a poorly calibrated device or an untrained operator can cause burns, unwanted fat loss or nerve injury. Choose a clinic that names its device, uses one registered with Malaysia's Medical Device Authority, and has a registered doctor delivering the treatment.",
      },
    ],
  },
  {
    slug: "ultherapy",
    durationDowntime: "60-90 min · No downtime",
    name: "Ultherapy",
    category: "Lifting & Tightening",
    image: "https://cdn.kaiteki.my/treatments/ultherapy/hero-2.jpg",
    procedureImages: [
      { src: "https://cdn.kaiteki.my/treatments/ultherapy/procedure-01.jpg", caption: "A practitioner moves the ultrasound transducer along the patient's jaw and neck." },
      { src: "https://cdn.kaiteki.my/treatments/ultherapy/procedure-02.jpg", caption: "A practitioner positions the ultrasound transducer under the patient's jaw." },
      { src: "https://cdn.kaiteki.my/treatments/ultherapy/procedure-03.jpg", caption: "A doctor applies the ultrasound transducer to the patient's cheek beside the imaging screen." },
    ],
    device: "Ultherapy",
    summary: "A focused-ultrasound platform used for lifting and tightening of the face and neck.",
    leadAnswer: "Ultherapy is a focused-ultrasound treatment used for non-surgical lifting and tightening of the brow, chin and neck. It heats set depths beneath the skin, and its built-in ultrasound imaging lets the doctor see those layers before delivering energy — the practical difference from other focused-ultrasound devices.",
    related: ["hifu", "fotona-4d"],
    seoTitle: "Ultherapy Malaysia | Non-Surgical Face Lifting | Kaiteki",
    seoDescription:
      "Ultherapy treatment in Malaysia using focused ultrasound for non-surgical lifting and tightening. Book a free consultation to assess suitability at Kaiteki.",
    // docs/15 item 2.3 (2026-09-28): the v2 block set, applied under docs/16 R1.
    // Two prose sections kept; the rest became typed blocks and were deleted.
    // Block copy is restructured from reviewed text only: this page, the
    // Ultherapy System device page, the HIFU page and the Ultherapy vs HIFU
    // guide, and the concern pages' treatmentWhy lines. No new claim, no
    // figure. The re-arrangement goes to Dr Gan in the offline review round,
    // which is why `lastReviewed` is unchanged.
    typicalSessions: "Often 1, with a review",
    facts: [
      { value: "On-screen imaging", label: "The doctor sees the tissue layers before each line" },
      { value: "60–90 minutes", label: "Typical face and neck session" },
      { value: "Assessment first", label: "Your first visit is a doctor consultation, not a treatment" },
    ],

    // T-06 — from the concern pages' reviewed treatmentWhy lines.
    routes: [
      {
        title: "Lifting where laxity leads the picture",
        body: "Mild to moderate laxity of the lower face and neck, where precision at depth matters or anatomy makes treating without imaging less appropriate.",
        links: [
          { href: "/concerns/face-lifting", label: "Read about face lifting" },
          { href: "/concerns/aging", label: "Ageing skin" },
        ],
      },
      {
        title: "Lifting that softens the fold above it",
        body: "Laxity around the brow and lower face.",
        links: [{ href: "/concerns/fine-lines-wrinkles", label: "Fine lines & wrinkles" }],
      },
    ],

    // T-07 — imaging is the one factual difference; never a ranking (R-02).
    variantModule: {
      heading: "Ultherapy or HIFU: what the imaging changes",
      intro:
        "Both focus ultrasound at a depth beneath the skin.",
      items: [
        {
          eyebrow: "Imaging-guided · Merz Aesthetics",
          title: "Ultherapy",
          body: "Transducers treat at three depths, approximately 1.5 mm, 3.0 mm and 4.5 mm at the level of the SMAS fascia, chosen per area after viewing the anatomy.",
          href: "/technology/ultherapy-system",
          hrefLabel: "About the Ultherapy System",
        },
        {
          eyebrow: "Depth set by cartridge · Ultracel Q, Liftera",
          title: "HIFU",
          body: "Energy is delivered at depths set by the chosen cartridge and the doctor's assessment, without an on-screen view.",
          href: "/treatments/hifu",
          hrefLabel: "About HIFU",
        },
      ],
    },

    ctaMid: {
      heading: "Not sure whether Ultherapy or HIFU fits your face?",
      body: "A doctor can tell you whether your laxity is the kind focused ultrasound addresses, and which device suits your anatomy.",
    },

    // T-09 — this page's suitability copy plus the Ultherapy System page.
    avoidIf: [
      { lead: "Pregnancy or breastfeeding.", body: "Treatment is deferred." },
      {
        lead: "Active skin infection, open lesions or significant inflammatory acne",
        body: "in the treatment area.",
      },
      {
        lead: "Implants, metallic or electronic devices such as pacemakers, or recently placed fillers or threads",
        body: "lying in the intended path.",
      },
      {
        lead: "Keloid tendency, bleeding disorders, certain medications and some autoimmune conditions,",
        body: "which are reviewed before treatment.",
      },
    ],

    // T-10 — step 1 states the first visit is not a treatment.
    sessionSteps: [
      {
        title: "Consultation and assessment",
        body: "The doctor assesses where your laxity sits and whether Ultherapy is appropriate.",
      },
      {
        title: "Mapping with imaging",
        body: "The skin is cleansed, treatment zones are marked on a grid and coupling gel is applied.",
      },
      {
        title: "The treatment lines",
        body: "The doctor confirms the plane on screen and delivers a line of focused pulses, repeated across the mapped area. Most people feel warmth and prickling, stronger over bony areas; comfort measures can be discussed beforehand.",
      },
      {
        title: "Afterwards",
        body: "You leave with aftercare advice and, where relevant, a review date.",
      },
    ],

    // T-11 — physical recovery only, never a timeframe to a result.
    afterSession: {
      intro: "",
      bands: [
        {
          title: "Straight afterwards",
          body: "Some people notice mild redness or slight swelling in the treated area for a short period. Most return to normal activities the same day.",
        },
        {
          title: "Days to a few weeks",
          body: "Tenderness to touch, or a temporary firm or lumpy feeling under the skin, can occur and generally settles over days to a few weeks.",
        },
      ],
      aftercare:
        "Sun protection, and nothing abrasive on the treated skin for a few days. Contact the clinic about anything that does not settle.",
    },

    // T-12
    risks: {
      intro: "",
      common:
        "Redness, swelling, tenderness, and small areas of numbness or tingling in the treated area, which typically settle over time.",
      lessCommon:
        "Temporary muscle weakness or altered sensation where a nerve runs close to the treatment plane.",
      pigmentNote:
        "Micro-focused ultrasound is absorbed by tissue rather than by melanin, so it is generally used across the full range of skin tones, including deeper Asian skin, without the pigment-related risk profile of some lasers.",
      cannotDo: [
        "It is not a facelift and does not cut or remove skin.",
        "It is generally considered for mild to moderate laxity rather than very advanced sagging.",
        "It addresses laxity and loss of definition, not surface texture or pigment.",
        "It is not permanent. Skin continues to age, so plans often include a review and periodic maintenance.",
      ],
      disclose:
        "Implants, fillers and threads in the treatment area are the items most often forgotten.",
    },

    // T-13 — factors only, no figures (settled 2026-09-20).
    costFactors: {
      intro:
        "Kaiteki does not quote prices online; the plan is set at consultation. What moves the cost:",
      factors: [
        "The number of lines of energy delivered.",
        "The areas treated — brow and jawline, full face and neck, or décolletage.",
        "The number of sessions and any maintenance plan.",
        "Whether Ultherapy is combined with other treatments as part of a wider plan.",
      ],
    },

    // Factual rows, as on the HIFU page. Downtime is each treatment's own.
    comparisons: [
      {
        name: "Ultherapy",
        bestFor: "Laxity where the doctor views the tissue layers on screen before treating",
        downtime: "None for most people",
      },
      {
        name: "Dermal fillers",
        bestFor: "Lines and hollows caused by lost volume or structure",
        downtime: "1-3 days",
      },
      {
        name: "Botulinum toxin",
        bestFor: "Lines caused by muscle movement",
        downtime: "None",
      },
    ],

    relatedReasons: {
      hifu: "The same focused-ultrasound principle on devices without on-screen imaging.",
      "fotona-4d":
        "A multi-mode laser protocol generally considered for firmness and skin-quality concerns, a different mechanism from focused ultrasound.",
    },

    sections: [
      {
        heading: "What is Ultherapy?",
        body: [
          "Ultherapy is a non-surgical, doctor-delivered treatment that focuses ultrasound energy at set depths beneath the skin.",
        ],
      },
      {
        heading: "How does Ultherapy see the layer it treats?",
        body: [
          "The transducer that delivers the energy also produces a live ultrasound image, so the doctor sees the tissue layers, including the deeper support layer called the SMAS, before choosing the depth and settings for each area. The SMAS is the layer a surgical facelift addresses; Ultherapy reaches it without incisions.",
          "At the chosen depth, the energy creates controlled points of heat, which is intended to prompt the skin's own gradual collagen-renewal response.",
        ],
      },
    ],
    faqs: [
      {
        q: "How is Ultherapy different from HIFU?",
        a: "Ultherapy includes ultrasound imaging, so the doctor views the tissue layers on screen before delivering energy; HIFU devices generally do not include this step.",
      },
      {
        q: "Is Ultherapy a facelift?",
        a: "No. It reaches some of the same deeper tissue a facelift addresses, but the degree of change is not comparable to surgery.",
      },
      {
        q: "When will I see results?",
        a: "Any change develops gradually over weeks to months, because it depends on your own collagen response, and it varies between people.",
      },
      {
        q: "Is there any downtime?",
        a: "Little to none for most people.",
      },
    ],
    reviewedBy: "dr-jamie-gan",
    lastReviewed: "2026-06-18",
  },
  { slug: "fotona-4d", durationDowntime: "30-60 min · No downtime", name: "Fotona Laser", category: "Lasers", image: "https://cdn.kaiteki.my/treatments/fotona-4d/hero.jpg", procedureImages: [{ src: "https://cdn.kaiteki.my/treatments/fotona-4d/procedure-01.jpg", caption: "A doctor holds the laser handpiece above the patient's cheek during a session." }, { src: "https://cdn.kaiteki.my/treatments/fotona-4d/procedure-02.jpg", caption: "A doctor steadies the patient's face while guiding the laser handpiece." }, { src: "https://cdn.kaiteki.my/treatments/fotona-4d/procedure-03.jpg", caption: "A practitioner works inside the mouth area with a laser handpiece." }], device: "Fotona", summary: "A multi-application Nd:YAG/Er:YAG laser platform, most often used at Kaiteki for its Fotona 4D facial-firming protocol.", leadAnswer: "Fotona Laser is Kaiteki's Fotona SP Dynamis / TimeWalker platform, an Nd:YAG and Er:YAG laser system with several application modes. Its main facial protocol, Fotona 4D, combines four modes — one delivered from inside the mouth — for facial firmness and skin-quality concerns. A doctor decides which modes, if any, suit you.", related: ["hifu", "ultherapy"], reviewedBy: "dr-jen-meng", lastReviewed: "2026-06-15", seoTitle: "Fotona 4D Laser Skin Tightening Malaysia | Kaiteki", seoDescription: "Fotona 4D is a multi-mode laser used for facial firming and skin quality, doctor-assessed at Kaiteki clinics in Malaysia. Book a free consultation on WhatsApp.",
    // docs/15 item 3.6 (2026-10-11): the v2 block set, applied under docs/16 R1.
    // Two prose sections kept; the rest became typed blocks and were deleted.
    // Block copy is restructured from reviewed text only: this page, the Fotona SP Dynamis page,
    // and the concern pages' treatmentWhy lines. No new claim, no figure. The
    // re-arrangement goes to Dr Jen Meng in the offline review round, which is why
    // `lastReviewed` is unchanged.
    typicalSessions: "A course, then maintenance",
    facts: [
      { value: "Two lasers, four modes", label: "Nd:YAG and Er:YAG, combined in one protocol" },
      { value: "45–60 minutes", label: "A full protocol, depending on how many modes are included" },
      { value: "Assessment first", label: "Your first visit is a doctor consultation, not a treatment" },
    ],

    // T-06 — from the concern pages' reviewed treatmentWhy lines.
    routes: [
      {
        title: "Laxity treated from inside the mouth outwards",
        body: "Early to moderate laxity of the lower face, where firmness and skin quality are both part of the picture rather than descent alone.",
        links: [{ href: "/concerns/face-lifting", label: "Read about face lifting" }],
      },
      {
        title: "Firmness and surface quality in the same course",
        body: "Loss of firmness alongside surface texture and fine lines.",
        links: [{ href: "/concerns/aging", label: "Ageing skin" }],
      },
    ],

    // T-07 — the former "four modes" section, as the variant module (R1).
    variantModule: {
      heading: "The four modes, and what each one does",
      intro:
        "Fotona 4D runs four laser modes in a set sequence, each working at a different level of the skin.",
      items: [
        {
          eyebrow: "Er:YAG · intraoral",
          title: "SMOOTH",
          body: "Delivered from inside the mouth, to the tissue behind the cheeks and around the nasolabial region.",
        },
        {
          eyebrow: "Nd:YAG · fractional",
          title: "FRAC3",
          body: "A fractional mode that reaches deeper layers of the skin to target imperfections such as pigmentation and lines.",
        },
        {
          eyebrow: "Nd:YAG · bulk heating",
          title: "PIANO",
          body: "A bulk-heating mode that warms deeper tissue in a gradual, controlled way, working below the skin surface.",
        },
        {
          eyebrow: "Er:YAG · surface",
          title: "Superficial peel",
          body: "A light resurfacing pass over the skin surface intended to smooth texture.",
          href: "/technology/fotona-sp-dynamis",
          hrefLabel: "About the Fotona platform",
        },
      ],
    },

    ctaMid: {
      heading: "Not sure whether a laser or another energy suits your laxity?",
      body: "Fotona 4D, focused ultrasound and radiofrequency reach tissue in different ways. A doctor can compare them for your face.",
    },

    // T-09 — the SP Dynamis page.
    avoidIf: [
      { lead: "Pregnancy or breastfeeding.", body: "Treatment is deferred." },
      { lead: "Active infection, cold sores or inflamed skin", body: "in the area to be treated." },
      { lead: "Recent sunburn or tanning.", body: "" },
      { lead: "A history of keloid scarring.", body: "" },
      { lead: "Photosensitising medication,", body: "including oral isotretinoin." },
      {
        lead: "Oral or dental conditions, recent dental work or oral appliances,",
        body: "because one step is delivered from inside the mouth.",
      },
    ],

    // T-10 — step 1 states the first visit is not a treatment.
    sessionSteps: [
      {
        title: "Consultation and assessment",
        body: "The doctor decides which modes suit your face, and in what order.",
      },
      {
        title: "Preparation",
        body: "The skin is cleansed and make-up removed, eye protection is fitted, and you are positioned and prepared separately for the intraoral step.",
      },
      {
        title: "The protocol",
        body: "The modes are performed in sequence. Most patients describe spreading warmth rather than sharp pain, including against the inner cheek during the intraoral step.",
      },
      {
        title: "Afterwards",
        body: "You leave with aftercare advice.",
      },
    ],

    // T-11 — physical recovery only.
    afterSession: {
      intro: "",
      bands: [
        {
          title: "The same day",
          body: "Flushing, warmth and a mild tight feeling for a few hours to a day are common, and the skin can look slightly pink after the surface pass. Most people return to normal activities the same day.",
        },
        {
          title: "The first few days",
          body: "Keep skincare gentle and well moisturised, and pause retinoids and acids until your doctor says otherwise.",
        },
      ],
      aftercare:
        "Use daily broad-spectrum sunscreen, and avoid heat such as saunas and hot yoga for the period your doctor specifies.",
    },

    // T-12
    risks: {
      intro: "",
      common:
        "Redness, warmth, mild swelling, transient dryness or flaking, and temporary sensitivity of the inner cheek or lips after the intraoral step.",
      lessCommon:
        "Cold sores can be reactivated in people prone to them. Burns, blistering, changes in pigmentation and scarring are uncommon.",
      pigmentNote:
        "Fotona notes that the Nd:YAG wavelength's low absorption in melanin allows use across skin types, and the Er:YAG surface pass is kept light in a 4D protocol. A history of pigment change after heat, lasers or inflammation still needs raising before treatment.",
      cannotDo: [
        "It is aimed at early to moderate laxity rather than significant sagging, where a doctor may tell you a laser is not the right tool.",
        "It is not a single visit: the effect relies on gradual tissue remodelling across a course.",
      ],
      disclose:
        "Tell your doctor if you are prone to cold sores.",
    },

    // T-13 — factors only, no figures (settled 2026-09-20).
    costFactors: {
      intro:
        "Kaiteki does not quote prices online, because cost depends on the plan agreed at consultation. What moves it:",
      factors: [
        "How many of the four modes your plan uses.",
        "How many areas are covered.",
        "The number of sessions in the course, and any maintenance.",
        "Whether the protocol is combined with other treatments in your plan.",
      ],
    },

    relatedReasons: {
      hifu: "Focused ultrasound for laxity at a chosen depth, a different energy type from laser.",
      ultherapy:
        "Focused ultrasound with on-screen imaging of the tissue layers, a different energy type from laser.",
    },

    sections: [
      {
        heading: "What is Fotona Laser?",
        body: [
          "The Fotona SP Dynamis / TimeWalker platform combines two lasers, Nd:YAG and Er:YAG, and runs several distinct applications: NightLase (for snoring-related concerns), LipLase, SmoothEye, TightSculpting and the facial protocol Fotona 4D.",
        ],
      },
      {
        heading: "Why does Fotona 4D work from inside the mouth?",
        body: [
          "In the step Fotona calls SmoothLiftin™, the Er:YAG laser is applied in SMOOTH® mode to the inner cheek, working from within rather than through the outer skin. Fotona describes SMOOTH® mode as a rapid sequence of low-fluence pulses inside a longer pulse, producing gentle coagulative heating rather than ablation.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many Fotona 4D sessions will I need?",
        a: "Usually a course of several sessions spaced a few weeks apart, then occasional maintenance.",
      },
      {
        q: "Is Fotona 4D suitable for darker or Asian skin?",
        a: "It can be. A history of pigment change should be raised first.",
      },
      {
        q: "Does Fotona 4D involve needles or injections?",
        a: "No. It uses laser energy only, on the skin surface and inside the mouth.",
      },
      {
        q: "How much does Fotona 4D cost?",
        a: "It is confirmed at consultation rather than quoted online.",
      },
    ],
  },
  {
    slug: "radiofrequency",
    durationDowntime: "30-60 min · No downtime",
    name: "Radiofrequency",
    category: "Lifting & Tightening",
    image: "https://cdn.kaiteki.my/treatments/radiofrequency/hero.jpg",
    procedureImages: [
      { src: "https://cdn.kaiteki.my/treatments/radiofrequency/procedure-01.jpg", caption: "The radiofrequency handpiece is glided along the patient's jaw." },
      { src: "https://cdn.kaiteki.my/treatments/radiofrequency/procedure-02.jpg", caption: "A practitioner works near the eye area while cotton pads shield the eyes." },
      { src: "https://cdn.kaiteki.my/treatments/radiofrequency/procedure-03.jpg", caption: "A practitioner moves the radiofrequency handpiece across the patient's forehead." },
    ],
    summary: "Radiofrequency energy used to support skin-firmness and texture concerns.",
    leadAnswer:
      "Radiofrequency (RF) treatments use controlled energy, delivered from the skin surface with no needles, to warm the deeper layers of the skin. Kaiteki runs four RF platforms, and a doctor examines your skin before choosing one.",
    related: ["microneedling", "hifu"],
    reviewedBy: "dr-chloe-wan",
    lastReviewed: "2026-06-12",
    seoTitle: "Radiofrequency Treatment Malaysia | Skin Firmness | Kaiteki",
    seoDescription:
      "Radiofrequency (RF) treatment in Malaysia to support skin firmness and texture concerns. Book a free consultation with a Kaiteki doctor to assess suitability.",
    // docs/15 item 3.6 (2026-10-11): the v2 block set, applied under docs/16 R1.
    // Two prose sections kept; the rest became typed blocks and were deleted.
    // Block copy is restructured from reviewed text only: this page, the BTL Exilis, Wonderface and XERF pages,
    // and the concern pages' treatmentWhy lines. No new claim, no figure. The
    // re-arrangement goes to Dr Chloe Wan in the offline review round, which is why
    // `lastReviewed` is unchanged.
    typicalSessions: "About 2 to 3, then maintenance",
    facts: [
      { value: "4 RF platforms", label: "BTL Exilis, Oligio X, Wonderface and XERF, matched to your skin" },
      { value: "30–60 minutes", label: "Typical session, depending on the areas treated" },
      { value: "Assessment first", label: "Your first visit is a doctor consultation, not a treatment" },
    ],

    // T-06 — from the concern pages' reviewed treatmentWhy lines.
    routes: [
      {
        title: "Skin firmness across the lower face",
        body: "Heats the dermis to prompt collagen change across a broader area than a focused device.",
        links: [{ href: "/concerns/face-contouring", label: "Read about face contouring" }],
      },
      {
        title: "Laxity in the lower lid",
        body: "Gentle heating to prompt collagen change where the lower lid skin has loosened and creased. Considered where crepiness accompanies the darkness rather than where a hollow dominates.",
        links: [{ href: "/concerns/dark-eye-circles", label: "Dark eye circles" }],
      },
    ],

    // T-07 — the devices paragraph of "How it works", as the variant module (R1).
    variantModule: {
      heading: "BTL Exilis, Oligio X, Wonderface or XERF: which RF platform, and why",
      intro:
        "The four platforms differ in how deep the energy reaches and how the surface is cooled.",
      items: [
        {
          eyebrow: "Monopolar · embedded cooling",
          title: "BTL Exilis",
          body: "Monopolar delivery with embedded surface cooling lets the device keep working at a depth that reaches subcutaneous fat, which is why it is used for body-contour concerns as well as facial firmness.",
          href: "/technology/btl-exilis",
          hrefLabel: "About BTL Exilis",
        },
        {
          eyebrow: "Monopolar 6.78 MHz · contact cooling",
          title: "Oligio X",
          body: "A Korean monopolar platform delivered shot by shot through a cooled tip that monitors contact, studied mainly for mild to moderate laxity of the lower face.",
          href: "/technology/oligio",
          hrefLabel: "About Oligio X",
        },
        {
          eyebrow: "Bipolar RF + neuromuscular",
          title: "Wonderface",
          body: "A face-specific platform pairing bipolar radiofrequency, more contained and comparatively superficial, with a separate neuromuscular stimulation mode that works on muscle tone.",
          href: "/technology/wonderface",
          hrefLabel: "About Wonderface",
        },
        {
          eyebrow: "Multifrequency monopolar · cryogen cooling",
          title: "XERF",
          body: "Combines 6.78 MHz and 2 MHz so energy can be biased towards shallower or deeper tissue, with integrated cryogen cooling.",
          href: "/technology/xerf",
          hrefLabel: "About XERF",
        },
      ],
    },

    ctaMid: {
      heading: "Not sure whether radiofrequency or another energy fits your skin?",
      body: "Surface RF, focused ultrasound and RF microneedling reach tissue differently. A doctor can tell you which your skin calls for.",
    },

    // T-09 — this page and the three device pages.
    avoidIf: [
      { lead: "Pregnancy.", body: "Treatment is deferred." },
      {
        lead: "Implanted electronic or metal devices,",
        body: "such as a pacemaker, in or near the treatment area.",
      },
      { lead: "Active skin infection or inflamed areas", body: "where the treatment would be applied." },
      { lead: "A history of keloid scarring.", body: "" },
      { lead: "Some skin conditions or medications,", body: "reviewed before treatment." },
    ],

    // T-10 — step 1 states the first visit is not a treatment.
    sessionSteps: [
      {
        title: "Consultation and assessment",
        body: "The doctor assesses your skin's thickness and laxity, which decide the device and settings.",
      },
      {
        title: "The treatment",
        body: "Controlled RF energy is delivered to the target areas, with contact cooling for comfort. Most people describe a warm, deep, massage-like sensation that builds and eases as the handpiece moves.",
      },
      {
        title: "Afterwards",
        body: "Sessions in a course are usually spaced about 4 to 6 weeks apart.",
      },
    ],

    // T-11 — physical recovery only.
    afterSession: {
      intro: "",
      bands: [
        {
          title: "Straight afterwards",
          body: "Mild redness or a feeling of warmth may occur and typically settles within a few hours.",
        },
        {
          title: "The same day",
          body: "Most people return to normal activities, and makeup can generally be worn straight after a facial session.",
        },
      ],
      aftercare:
        "Gentle skincare and daily sun protection afterwards.",
    },

    // T-12
    risks: {
      intro: "",
      common: "Redness, warmth or mild swelling that usually settles.",
      lessCommon:
        "Burns and lasting pigment change.",
      pigmentNote:
        "RF heats tissue rather than targeting pigment, so it does not rely on colour contrast and is used across a wide range of skin tones, including Asian skin.",
      cannotDo: [
        "It is not a substitute for surgery where there is significant excess skin.",
        "It does not change the skin on the day; any change depends on slow tissue remodelling.",
      ],
      disclose:
        "Tell your doctor about anything on the avoid list above, including implanted devices anywhere near the treatment area.",
    },

    // T-13 — factors only, no figures (settled 2026-09-20).
    costFactors: {
      intro:
        "Kaiteki does not quote prices online, because the course is set by what the assessment finds. What moves the cost:",
      factors: [
        "Your skin condition.",
        "The area treated. Face-only plans differ from face-and-neck or body plans.",
        "The number of sessions in the course.",
        "Any maintenance sessions.",
      ],
    },

    relatedReasons: {
      microneedling:
        "Radiofrequency delivered through fine needles, used for texture and scarring, with more recovery time.",
      hifu: "Focused ultrasound for laxity at a chosen depth, a different energy type from radiofrequency.",
    },

    sections: [
      {
        heading: "What is radiofrequency (RF) treatment?",
        body: [
          "Radiofrequency (RF) treatment is a non-surgical approach that uses controlled energy to warm the deeper layers of the skin, rather than acting on the surface as skincare does.",
        ],
      },
      {
        heading: "How does radiofrequency warm the skin without needles?",
        body: [
          "RF devices deliver controlled thermal energy into the dermis, gently heating the tissue. This warming is intended to act on existing collagen fibres and to prompt the skin's own gradual collagen-renewal response over time.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are radiofrequency treatments suitable for sensitive skin?",
        a: "Often, yes. Surface RF is non-invasive and generally well tolerated, and settings are adjusted to your skin. Mention any retinoids or recent peels, which change what the skin will tolerate.",
      },
      {
        q: "Is there any downtime after RF treatment?",
        a: "Usually minimal. Mild redness or warmth typically settles within a few hours, and most people go straight back to normal activities.",
      },
      {
        q: "How many radiofrequency sessions will I need?",
        a: "A course of about 2 to 3 sessions is common, sometimes followed by maintenance every 6 to 12 months.",
      },
      {
        q: "When will I see results?",
        a: "Any change develops gradually over weeks to months and varies between people.",
      },
    ],
  },
  {
    slug: "microneedling",
    durationDowntime: "30-60 min · 2-3 days recovery",
    name: "RF Microneedling",
    category: "Lifting & Tightening",
    image: "https://cdn.kaiteki.my/treatments/microneedling/hero-v2.jpg",
    imageAlt: "A practitioner holds the Sylfirm X RF-microneedling handpiece to a patient's forehead, the console beside her",
    // procedure-01 is the hero now, so the gallery starts at -02.
    procedureImages: [
      { src: "https://cdn.kaiteki.my/treatments/microneedling/procedure-02.jpg", caption: "A doctor moves the microneedling handpiece along the patient's face." },
    ],
    device: "Potenza",
    summary: "A radiofrequency (RF) microneedling treatment used for texture, scarring and pore concerns.",
    leadAnswer:
      "Microneedling at Kaiteki is usually radiofrequency (RF) microneedling: fine needles deliver radiofrequency energy at set depths to prompt a controlled skin-renewal response. The doctor chooses one of three devices and sets needle depth and energy for each area after assessing your skin.",
    related: ["pico-laser", "skin-booster"],
    reviewedBy: "dr-say-wei-xian",
    lastReviewed: "2026-06-12",
    seoTitle: "RF Microneedling Malaysia | Potenza, Morpheus8 | Kaiteki",
    seoDescription:
      "RF microneedling in Malaysia for texture, acne scarring and pore concerns using Potenza, Morpheus8 or Sylfirm X. Book a free consultation at Kaiteki.",
    // docs/15 item 2.3 (2026-09-28): the v2 block set, applied under docs/16 R1.
    // Two prose sections kept. "Devices & technology" became the variant
    // module, and the shared sections became typed blocks and were deleted.
    // Block copy is restructured from reviewed text only: this page, the
    // Morpheus8, Sylfirm X and Potenza device pages, and the concern pages'
    // treatmentWhy lines. No new claim, no figure. The re-arrangement goes to
    // Dr Say in the offline review round; `lastReviewed` is unchanged.
    typicalSessions: "A course, spaced a few weeks apart",
    facts: [
      { value: "3 RF microneedling devices", label: "Matched to your concern and skin" },
      { value: "30–45 minutes of numbing", label: "Before a treatment of around 20 to 40 minutes" },
      { value: "Assessment first", label: "Your first visit is a doctor consultation, not a treatment" },
    ],

    // T-06 — from the concern pages' reviewed treatmentWhy lines.
    routes: [
      {
        title: "Depressed scarring, texture and enlarged pores",
        body: "Often the starting point for rolling and boxcar scarring.",
        links: [
          { href: "/concerns/acne-scars", label: "Read about acne scars" },
          { href: "/concerns/acne", label: "Acne" },
          { href: "/concerns/enlarged-pores", label: "Enlarged pores" },
        ],
      },
      {
        title: "Etched lines and overall texture",
        body: "Considered for static lines and general texture, where the aim is collagen through the deeper skin rather than relaxing movement.",
        links: [{ href: "/concerns/fine-lines-wrinkles", label: "Fine lines & wrinkles" }],
      },
    ],

    // T-07 — the "Devices & technology" section, as the variant module (R1).
    variantModule: {
      heading: "Morpheus8, Sylfirm X or Potenza: which device, and why",
      intro:
        "Kaiteki offers three RF microneedling devices with different reach and RF modes.",
      items: [
        {
          eyebrow: "Subdermal reach · InMode",
          title: "Morpheus8",
          body: "Designed for deeper RF penetration, and generally considered for skin tightening along the jaw and neck.",
          href: "/technology/morpheus8",
          hrefLabel: "About Morpheus8",
        },
        {
          eyebrow: "Pulsed and continuous wave · Viol",
          title: "Sylfirm X",
          body: "Delivers RF in pulsed and continuous modes, and is generally considered for melasma, post-inflammatory hyperpigmentation and redness.",
          href: "/technology/sylfirm-x",
          hrefLabel: "About Sylfirm X",
        },
        {
          eyebrow: "Monopolar and bipolar · Cynosure Lutronic",
          title: "Potenza",
          body: "Adjustable needle depth with monopolar and bipolar RF modes, generally considered for acne scarring, enlarged pores and oily texture.",
          href: "/technology/potenza",
          hrefLabel: "About Potenza",
        },
      ],
    },

    ctaMid: {
      heading: "Not sure which of the three devices suits your skin?",
      body: "Scarring, pores, pigment and firmness call for different devices and depths. A doctor can tell you which you are dealing with.",
    },

    // T-09 — this page's suitability copy plus the three device pages.
    avoidIf: [
      { lead: "Pregnancy or breastfeeding.", body: "Treatment is deferred." },
      {
        lead: "Active skin infection, acne flares or inflamed areas",
        body: "in the treatment area.",
      },
      { lead: "Recent oral isotretinoin,", body: "or other medications your doctor goes through with you." },
      { lead: "A history of keloid scarring.", body: "" },
      {
        lead: "A pacemaker or other implanted electronic device,",
        body: "metal implants or permanent fillers in the treatment area, which must be declared.",
      },
      { lead: "Clotting disorders or blood thinners.", body: "" },
    ],
    bringToConsult:
      "Recently tanned or sunburnt skin may mean postponing.",

    // T-10 — step 1 states the first visit is not a treatment.
    sessionSteps: [
      {
        title: "Consultation and assessment",
        body: "A doctor reviews your skin and medical history and chooses the device and settings.",
      },
      {
        title: "Numbing",
        body: "Numbing cream is applied for around 30 to 45 minutes, which is much of the appointment.",
      },
      {
        title: "The treatment",
        body: "Needle depth, energy level and pattern are adjusted to your skin, and many people describe the sensation as mild heat and pressure.",
      },
      {
        title: "Afterwards",
        body: "The skin is cooled and soothed, and you are given aftercare guidance.",
      },
    ],

    // T-11 — physical recovery only.
    afterSession: {
      intro: "",
      bands: [
        {
          title: "The first one to two days",
          body: "Some redness is common, and the skin can look flushed and feel warm, often with a faint grid pattern from the needle tips.",
        },
        {
          title: "The following days",
          body: "Some dryness or light flaking afterwards can be normal. Deeper settings can leave the skin flushed and tender for slightly longer, and pinpoint scabs can occur.",
        },
      ],
      aftercare:
        "Sun protection and gentle skincare while the skin settles, with retinoids and acids usually paused for a short period.",
    },

    // T-12
    risks: {
      intro: "",
      common:
        "Redness, swelling, sensitivity, dryness, pinpoint bruising or scabbing, and temporary changes in skin appearance.",
      lessCommon:
        "Infection, prolonged pigment change or scarring.",
      pigmentNote:
        "Radiofrequency is not absorbed by melanin the way laser light is, so RF microneedling is used across a broad range of skin tones, including deeper Asian skin. Temporary pigment change is still possible, particularly with deeper settings or poor sun protection afterwards.",
      cannotDo: [
        "It is not a substitute for surgery where there is significant sagging or excess skin.",
        "Scar work is staged. Different scar types respond differently, and no single session is a fix.",
        "It does not settle melasma for good. Melasma is chronic and relapsing, and needs ongoing topical care and sun protection alongside any procedure.",
      ],
      disclose:
        "Tell your doctor about anything in the list under who should postpone or avoid it, even if it seems minor.",
    },

    // T-13 — factors only, no figures (settled 2026-09-20).
    costFactors: {
      intro:
        "Kaiteki does not quote prices online, because the device, area and plan are set at consultation. What moves it:",
      factors: [
        "Which device your doctor selects for your concern.",
        "The size of the area treated.",
        "The depths and modes used.",
        "The number of sessions in the course.",
        "Single-use consumable needle tips.",
      ],
    },

    relatedReasons: {
      "pico-laser":
        "Considered where the concern is pigment rather than texture or scarring.",
      "skin-booster":
        "Injectable hydrating treatments used to support skin quality and hydration, where an injectable rather than a device is the route.",
    },

    sections: [
      {
        heading: "What is RF microneedling?",
        body: [
          "RF microneedling refers to a group of treatments that combine traditional microneedling with radiofrequency (RF) energy.",
        ],
      },
      {
        heading: "How does RF microneedling treat several depths in one session?",
        body: [
          "The needles create controlled micro-injuries, then release radiofrequency energy as heat from their tips. Because needle depth and energy are adjustable, several skin depths can be treated in one session. The combination is intended to prompt the skin's repair and collagen-remodelling response over time, and the extent of any change varies between individuals.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which device is right for me: Morpheus8, Sylfirm X or Potenza?",
        a: "As a general guide, Morpheus8 is associated with deeper skin tightening, Sylfirm X with pigment and redness, and Potenza with scarring and pores.",
      },
      {
        q: "Is RF microneedling painful?",
        a: "Numbing cream is applied first.",
      },
      {
        q: "Is there any downtime?",
        a: "Some redness for one to two days is common, and mild dryness or flaking can follow.",
      },
      {
        q: "How many sessions will I need?",
        a: "Usually a course of sessions spaced a few weeks apart.",
      },
    ],
  },
  {
    slug: "fat-freezing",
    durationDowntime: "35-60 min per area · No downtime",
    name: "Fat Freezing",
    category: "Body & Slimming",
    image: "https://cdn.kaiteki.my/treatments/fat-freezing/hero.jpg",
    procedureImages: [
      { src: "https://cdn.kaiteki.my/treatments/fat-freezing/procedure-01.jpg", caption: "A cooling applicator sits on the patient's flank, connected to the treatment machine." },
      { src: "https://cdn.kaiteki.my/treatments/fat-freezing/procedure-02.jpg", caption: "The patient reclines while a cooling applicator works on the abdomen." },
      { src: "https://cdn.kaiteki.my/treatments/fat-freezing/procedure-03.jpg", caption: "A patient relaxes with their phone while the cooling applicator works." },
    ],
    summary: "The general term for cryolipolysis for localised fat concerns.",
    leadAnswer:
      "Fat freezing (cryolipolysis) uses controlled cooling to target localised fat in specific areas, and is not a weight-loss treatment. Whether a given area can be treated at all depends on whether an applicator can draw and hold it, which is something a doctor checks in person.",
    related: ["microwave-contouring"],
    reviewedBy: "dr-jessie-lim",
    lastReviewed: "2026-06-10",
    seoTitle: "Fat Freezing Malaysia | Cryolipolysis Treatment | Kaiteki",
    seoDescription:
      "Fat freezing (cryolipolysis) in Malaysia for localised fat pockets, not weight loss. Book a free consultation with a Kaiteki doctor to check suitability.",
    // docs/15 item 3.6 (2026-10-11): the v2 block set, applied under docs/16 R1.
    // Two prose sections kept; the rest became typed blocks and were deleted.
    // Block copy is restructured from reviewed text only: this page, the Cooltech and CoolSculpting pages,
    // and the concern pages' treatmentWhy lines. No new claim, no figure. The
    // re-arrangement goes to Dr Jessie Lim in the offline review round, which is why
    // `lastReviewed` is unchanged.
    typicalSessions: "Individual, per area",
    facts: [
      { value: "Controlled cooling", label: "Applied to a pocket of fat an applicator can draw and hold" },
      { value: "35–60 minutes", label: "Typical applicator cycle, per area" },
      { value: "Assessment first", label: "Your first visit is a doctor consultation, not a treatment" },
    ],

    // T-06 — from the concern pages' reviewed treatmentWhy lines.
    routes: [
      {
        title: "A pinchable pocket that diet has not shifted",
        body: "Controlled cooling applied to a defined pocket of fat that can be pinched and drawn into an applicator.",
        links: [{ href: "/concerns/body-slimming", label: "Read about body slimming" }],
      },
      {
        title: "A defined pocket of fat under the chin",
        body: "Relevant only where the fullness under the chin is genuinely fat.",
        links: [{ href: "/concerns/face-contouring", label: "Face contouring" }],
      },
    ],

    // T-07 — the former "Devices we use" section, as the variant module (R1).
    variantModule: {
      heading: "Cooltech or CoolSculpting: which device, and why",
      intro:
        "Both are cryolipolysis devices working on the same principle. They differ in applicator design.",
      items: [
        {
          eyebrow: "360° cooling · Cocoon Medical",
          title: "Cooltech",
          body: "The manufacturer describes 360° cooling around the drawn-in tissue rather than from one contact plate, and more than one applicator can run at once, so two areas or both flanks may be treated in one appointment.",
          href: "/technology/cooltech",
          hrefLabel: "About Cooltech",
        },
        {
          eyebrow: "Cryolipolysis · CoolSculpting",
          title: "CoolSculpting",
          body: "An applicator draws the target area against a cooling plate.",
          href: "/technology/coolsculpting",
          hrefLabel: "About CoolSculpting",
        },
      ],
    },

    ctaMid: {
      heading: "Not sure whether your area is one an applicator can hold?",
      body: "A doctor can check in person, with a pinch test, whether the area is fat an applicator can treat.",
    },

    // T-09 — this page and the Cooltech page.
    avoidIf: [
      { lead: "Pregnancy or breastfeeding.", body: "Treatment is deferred." },
      {
        lead: "Cold-related conditions",
        body: "such as cryoglobulinaemia, cold urticaria or paroxysmal cold haemoglobinuria.",
      },
      { lead: "A hernia", body: "in or near the treatment area." },
      { lead: "Broken or infected skin", body: "over the area to be treated." },
      { lead: "Certain circulatory, nerve or liver conditions,", body: "which your doctor goes through with you." },
    ],

    // T-10 — step 1 states the first visit is not a treatment.
    sessionSteps: [
      {
        title: "Consultation and assessment",
        body: "The doctor checks whether the fat in the area can be drawn into an applicator.",
      },
      {
        title: "Preparation",
        body: "The treatment area is marked, and a protective gel pad and applicator are positioned over the pocket of fat.",
      },
      {
        title: "The cooling cycle",
        body: "The area is cooled for a set period. There is an initial period of intense cold and a firm pulling sensation from the suction, which commonly eases as the area becomes numb.",
      },
      {
        title: "Afterwards",
        body: "The applicator is removed and the area is massaged.",
      },
    ],

    // T-11 — physical recovery only, never a timeframe to a result.
    afterSession: {
      intro: "",
      bands: [
        {
          title: "Straight afterwards",
          body: "The area often looks red and feels firm, cold or oddly numb, and this typically settles over the following hours to days.",
        },
        {
          title: "The first weeks",
          body: "Temporary tenderness, swelling, tingling or a dull ache in the treated area can persist for a few days to a couple of weeks, and some people find loose clothing or a compression garment more comfortable during that period.",
        },
      ],
      aftercare:
        "Keep to a stable weight with your usual diet and activity.",
    },

    // T-12
    risks: {
      intro: "",
      common:
        "Redness, swelling, bruising, firmness, numbness, tingling, itching or cramping in the treated area, and altered skin sensation that may take some weeks to normalise.",
      lessCommon:
        "Lingering pain in the treated area, and paradoxical adipose hyperplasia, in which the treated fat pocket firms and enlarges rather than reduces.",
      pigmentNote:
        "It acts on fat below the skin, not on pigment, so skin tone matters less than it does with lasers. The thickness and distribution of fat in the area matter more.",
      cannotDo: [
        "It is not a weight-loss treatment, not a treatment for obesity, and not a substitute for diet, exercise or medical weight management.",
        "Not every pocket of fat is one an applicator can draw and hold.",
        "It does not stop remaining fat cells enlarging with weight gain, which is why a stable weight matters.",
      ],
      disclose:
        "Tell your doctor about anything in the list under who should postpone or avoid it, and about any implant, device or medication.",
    },

    // T-13 — factors only, no figures (settled 2026-09-20).
    costFactors: {
      intro:
        "Kaiteki does not quote prices online. Cost is quoted per applicator cycle once the doctor has seen which areas can actually be treated. What moves it:",
      factors: [
        "The areas being addressed.",
        "The size of the fat pocket, and how many applicator placements it needs to cover.",
        "The number of cycles each area requires, and whether a further session is planned after review.",
      ],
    },

    relatedReasons: {
      "microwave-contouring":
        "A microwave-based approach for localised fat, cellulite appearance and firmness, where cooling is not the method.",
    },

    sections: [
      {
        heading: "What is fat freezing?",
        body: [
          "Fat freezing is the everyday name for cryolipolysis, a non-surgical approach that uses controlled cooling to target pockets of fat in specific areas of the body.",
        ],
      },
      {
        heading: "Why does cooling affect fat and not the skin around it?",
        body: [
          "Cryolipolysis is based on the idea that fat cells are more sensitive to cold than the surrounding skin, nerves and muscle. During a session, an applicator cools a defined area to a controlled low temperature for a set period.",
          "The aim is to affect fat cells within the treated pocket while limiting the effect on nearby tissue.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is fat freezing a weight-loss treatment?",
        a: "No. It targets localised pockets of fat in specific areas, not overall body weight, and is intended for people at or near a stable weight.",
      },
      {
        q: "Does fat freezing hurt?",
        a: "Most people feel intense cold and a firm pulling from the suction at the start, which usually eases as the area goes numb.",
      },
      {
        q: "How many sessions will I need?",
        a: "It depends on the area, the amount of localised fat and how you respond.",
      },
      {
        q: "When might I notice a change?",
        a: "Any change is gradual, because the body clears the treated cells over several weeks, so it is usually assessed a couple of months after the session.",
      },
    ],
  },
  {
    slug: "skin-booster",
    durationDowntime: "15-30 min · 1-2 days",
    name: "Skin Booster",
    category: "Injectables",
    image: "https://cdn.kaiteki.my/treatments/skin-booster/hero-2.jpg",
    device: "Profhilo",
    typicalSessions: "A short course, then maintenance",
    summary: "Injectable hydrating treatments used to support skin quality and hydration.",
    leadAnswer:
      "Skin boosters are injectable treatments that deliver hydrating ingredients into the skin. Which product suits your skin, and whether an injectable is the right route for what is bothering you, is decided by a doctor at consultation.",

    // docs/15 item 1.4 (2026-09-24): the v2 block set, applied under docs/16 R1.
    // Seven shared prose sections became typed blocks and were deleted. Every
    // clinical line below is restructured from copy that already carries a
    // named reviewer: this page's own sections and the five product pages
    // (Rejuran, Profhilo, Plinest, Juvelook, Hydrodeluxe). Where the products
    // differ, the block says which one it means rather than averaging them.
    // The re-arrangement goes to Dr Chew in the offline review round, which is
    // why `lastReviewed` is unchanged.

    // T-06 — the concern pages that list skin boosters, plus the two the
    // product pages route to (acne-affected skin, texture and pores).
    routes: [
      {
        title: "Dull, dry or dehydrated-looking skin",
        body: "Hydration and overall skin quality, and fine lines associated with dryness.",
        links: [
          { href: "/concerns/aging", label: "Read about ageing skin" },
          { href: "/concerns/fine-lines-wrinkles", label: "Fine lines & wrinkles" },
        ],
      },
      {
        title: "Sensitised, acne-affected or post-treatment skin",
        body: "Skin that needs support rather than hydration alone. The polynucleotide boosters, Rejuran and Plinest, are often considered here, once any active acne flare has settled.",
        links: [{ href: "/concerns/acne", label: "Read about acne" }],
      },
      {
        title: "Texture, pores and the under-eye area",
        body: "Uneven texture and enlarged-looking pores, where a collagen-stimulating booster such as Juvelook is one option, and the under-eye area.",
        links: [
          { href: "/concerns/enlarged-pores", label: "Enlarged pores" },
          { href: "/concerns/dark-eye-circles", label: "Dark eye circles" },
        ],
      },
    ],

    // T-07 — the five products, told apart by what is in them. Material and
    // manufacturer are the facts already on each product page (docs/15 2.0).
    variantModule: {
      heading: "Which skin booster, and what is in it",
      intro:
        "Skin booster is an umbrella term, and the products under it are not interchangeable. They differ in their active ingredient.",
      items: [
        {
          eyebrow: "Salmon polynucleotide · Pharma Research, Korea",
          title: "Rejuran",
          body: "Used to support the skin barrier and skin healing, and often considered for sensitive, acne-prone or damaged skin.",
          href: "/technology/rejuran",
          hrefLabel: "About Rejuran",
        },
        {
          eyebrow: "Trout polynucleotide · Mastelli, Italy",
          title: "Plinest / Newest",
          body: "A polynucleotide range used to support skin regeneration and elasticity, often considered for stressed, ageing or post-treatment skin. Also fish-derived.",
          href: "/technology/plinest",
          hrefLabel: "About Plinest",
        },
        {
          eyebrow: "Hyaluronic acid · IBSA, Italy",
          title: "Profhilo",
          body: "A high-concentration hyaluronic acid used for deep hydration and skin remodelling, and to support firmness.",
          href: "/technology/profhilo",
          hrefLabel: "About Profhilo",
        },
        {
          eyebrow: "Non-crosslinked HA · Matex Lab, Italy",
          title: "Hydrodeluxe",
          body: "A hyaluronic acid hydrogel enriched with calcium hydroxyapatite and amino acids, used to support skin moisture and overall skin quality.",
          href: "/technology/hydrodeluxe",
          hrefLabel: "About Hydrodeluxe",
        },
        {
          eyebrow: "PDLLA + HA · VAIM, South Korea",
          title: "Juvelook",
          body: "A collagen-stimulating booster used for pores, texture and fine lines.",
          href: "/technology/juvelook",
          hrefLabel: "About Juvelook",
        },
      ],
    },

    // T-09 — the union of the five product pages' contraindications, each
    // tied to the product it applies to where it is product-specific.
    avoidIf: [
      { lead: "Pregnancy or breastfeeding.", body: "Treatment is deferred." },
      {
        lead: "Active infection, an acne flare or inflammation",
        body: "at the intended injection site.",
      },
      {
        lead: "A fish or seafood allergy",
        body: "for Rejuran and Plinest, which are fish-derived, or a known hypersensitivity to hyaluronic acid or another ingredient.",
      },
      {
        lead: "A bleeding disorder or blood-thinning medication.",
        body: "",
      },
      {
        lead: "A tendency to keloid or hypertrophic scarring,",
        body: "or certain autoimmune conditions.",
      },
      {
        lead: "Nodules or granulomatous reactions to a previous filler or biostimulator,",
        body: "which is a consideration for collagen-stimulating products such as Juvelook.",
      },
    ],

    // T-10 — step 1 states the first visit is not a treatment.
    sessionSteps: [
      {
        title: "Consultation and skin assessment",
        body: "A doctor examines your skin and decides whether a skin booster suits your concern and, if so, which type: hydrating, polynucleotide or collagen-stimulating.",
      },
      {
        title: "Preparation",
        body: "The skin is cleansed and a topical anaesthetic is usually applied and left to take effect, which accounts for much of the appointment time.",
      },
      {
        title: "The injections",
        body: "The doctor places the product as a series of small injections across the assessed area.",
      },
      {
        title: "Afterwards",
        body: "Soothing care and aftercare advice.",
      },
    ],

    // T-11 — physical recovery only. The bands follow the product pages:
    // hyaluronic acid disperses faster than polynucleotide.
    afterSession: {
      intro: "",
      bands: [
        {
          title: "Straight afterwards",
          body: "Small raised bumps at each injection point are expected. Redness, mild swelling and pinpoint bruising can also occur.",
        },
        {
          title: "The first day or two",
          body: "The bumps settle as the product disperses: within hours to about a day for hyaluronic acid boosters such as Profhilo, and over roughly one to two days for polynucleotides such as Rejuran and Plinest.",
        },
        {
          title: "The following few days",
          body: "Some tenderness and any bruising fade. After a collagen-stimulating booster such as Juvelook, redness and bumps can take a few days to settle.",
        },
      ],
      aftercare:
        "Gentle skincare and sun protection, and a short break from heat, strenuous exercise and pressure on the treated area before resuming actives and makeup.",
    },

    // T-12 — not energy-based, so no pigment note: skin tone is not a
    // limiting factor the way it is with lasers (every product page says so).
    risks: {
      intro: "",
      common:
        "Bumps at the injection points, swelling, redness, bruising, tenderness and small palpable lumps, which typically settle over a short period.",
      lessCommon:
        "Infection, prolonged swelling, nodules and hypersensitivity reactions. Persistent nodules or granuloma formation are a recognised consideration with collagen-stimulating products. Vascular complications are rare but recognised with any facial injection.",
      cannotDo: [
        "It does not add volume or change the shape of the face.",
        "It does not work in a single session. Skin boosters are used as a course, and any change develops gradually.",
        "It is not permanent. Courses are commonly followed by periodic maintenance.",
      ],
      disclose:
        "Tell your doctor about anything in the list under who should postpone or avoid it, and about every previous filler or biostimulator.",
    },

    // T-13 — factors only, no figures (settled 2026-09-20).
    costFactors: {
      intro:
        "Kaiteki does not quote prices online, because the product and the amount of it are decided after examining your skin. What moves it:",
      factors: [
        "Which product your doctor selects, and for Juvelook which concentration.",
        "The number and size of areas: a full face, the under-eye area, the neck, hands or décolletage all differ.",
        "The quantity of product your doctor judges appropriate.",
        "How many sessions the course needs, and whether maintenance visits form part of the plan.",
      ],
    },

    // Factual rows only. Downtime is each treatment's own `durationDowntime`.
    comparisons: [
      {
        name: "Skin booster",
        bestFor: "Skin quality, hydration and fine lines linked to dryness",
        downtime: "1-2 days",
      },
      {
        name: "Dermal fillers",
        bestFor: "Lines and hollows caused by lost volume or structure",
        downtime: "1-3 days",
      },
      {
        name: "HIFU / Ultherapy",
        bestFor: "Laxity and firmness rather than skin quality",
        downtime: "None for most people",
      },
    ],

    related: ["microneedling", "bio-stimulator", "botulinum-toxin"],
    relatedReasons: {
      microneedling:
        "Radiofrequency microneedling, considered for texture, acne-scarring and pore concerns where a device rather than an injectable is the route.",
      "bio-stimulator":
        "Injectables intended to support the skin's own structural renewal, planned across months, where the concern is structure rather than hydration.",
      "botulinum-toxin":
        "Used for lines caused by muscle movement, which a skin booster does not treat.",
    },
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-06-08",
    seoTitle: "Skin Booster Malaysia | Rejuran, Profhilo & Juvelook",
    seoDescription:
      "Injectable skin boosters in Malaysia, including Rejuran, Profhilo and Juvelook, for skin hydration and quality. Book a free consultation at Kaiteki.",
    sections: [
      {
        heading: "What is a skin booster?",
        body: [
          "A skin booster is an injectable treatment that places hydrating and skin-conditioning ingredients into the skin to support its overall quality. Because it is an injectable, it is performed by a doctor.",
        ],
      },
      {
        heading: "How is a skin booster different from a filler?",
        body: [
          "A filler is placed to add volume or change contour: a fuller cheek, a defined chin, a corrected hollow. A skin booster is not. It is delivered as small amounts through a series of fine micro-injections spread across the treatment area, and the ingredients are intended to work within the skin itself to support hydration and skin quality over time.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are skin boosters suitable for sensitive or acne-prone skin?",
        a: "They may be, once any active acne flare has settled.",
      },
      {
        q: "Is there any downtime?",
        a: "Small bumps at each injection point are expected and settle within hours to about a day for hyaluronic acid boosters, and over one to two days for polynucleotides.",
      },
      {
        q: "How many sessions will I need?",
        a: "Usually a short course spaced some weeks apart, then periodic maintenance.",
      },
      {
        q: "What is the difference between Rejuran and Profhilo?",
        a: "They are built on different ingredients: Rejuran is a salmon-derived polynucleotide, Profhilo a high-concentration hyaluronic acid.",
      },
      {
        q: "Can I have a skin booster if I am allergic to fish?",
        a: "Tell your doctor first. Rejuran and Plinest are fish-derived polynucleotides. The hyaluronic acid boosters, such as Profhilo and Hydrodeluxe, are built on a different ingredient.",
      },
    ],
  },
  {
    // The procedure page; brands live on their /technology pages (Botox today).
    // Botulinum toxin is a prescription medicine, so copy stays mechanism-level:
    // no efficacy, longevity or outcome promises, no pricing or packages, and
    // dose and suitability always defer to an in-person assessment (docs/02 §8).
    // Client to confirm with their MAB advisor that brand-level pages for a
    // prescription medicine are within their approved advertising position.
    slug: "botulinum-toxin",
    durationDowntime: "10-20 min · No downtime",
    name: "Botulinum Toxin",
    category: "Injectables",
    image: "https://cdn.kaiteki.my/treatments/botulinum-toxin/hero.jpg",
    typicalSessions: "1 per cycle",
    summary:
      "A doctor-administered prescription injectable used to relax targeted muscles or reduce sweat-gland activity.",
    leadAnswer:
      "Botulinum toxin is a prescription injectable that temporarily reduces the signal between nerves and the muscle or sweat gland it acts on. In aesthetic medicine it is used for expression lines, jaw and calf muscle bulk, and excessive sweating. It is a medicine, so a doctor must assess suitability before it can be prescribed or given.",
    areas: ["Forehead", "Frown lines", "Crow's feet", "Jawline", "Underarms", "Palms", "Calves"],
    // docs/15 item 4.1 (2026-10-28): the v2 block set, applied under docs/16 R1.
    // Two prose sections kept; the rest became typed blocks and were deleted.
    // Block copy is restructured from reviewed text only: this page and the
    // Botox page. The avoidIf leads are the former notSuitableFor lines
    // verbatim, so their signed translations carry over. No new claim, no
    // figure. The re-arrangement goes to Dr Jeremy Low in the offline review
    // round, which is why `lastReviewed` is unchanged.
    avoidIf: [
      { lead: "Pregnancy or breastfeeding", body: "" },
      { lead: "Known neuromuscular conditions such as myasthenia gravis or Lambert-Eaton syndrome", body: "" },
      { lead: "Known allergy to botulinum toxin or any component of the preparation", body: "" },
      { lead: "Active skin infection or inflammation at the intended injection site", body: "" },
      { lead: "Certain medications, including some antibiotics and muscle relaxants: bring a full list", body: "" },
    ],
    sessionSteps: [
      {
        title: "Consultation and assessment",
        body: "It starts with a consultation. The doctor watches the area at rest and in movement, explains what is and is not achievable, and goes through the risks. Only then is a dose decided.",
      },
      {
        title: "The injections, then a review",
        body: "The area is cleansed and the doctor gives a series of small injections with a fine needle at planned points. Most people describe brief stinging, and numbing or cooling can be used. Any change develops over the following days, and a review appointment checks it before anything further is decided.",
      },
    ],
    risks: {
      intro: "",
      common:
        "Commonly reported temporary effects include tenderness, redness or small bruises at the injection points, and headache. These are usually mild and short-lived.",
      lessCommon:
        "Less commonly, the effect extends slightly beyond the intended muscle, causing temporary asymmetry, a heavy-feeling brow or eyelid drooping, which can take weeks to resolve. Rarely, spread of the toxin has been reported to cause difficulty swallowing, speaking or breathing, or weakness away from the injection site. These need urgent medical attention.",
      cannotDo: [
        "It is not permanent: nerve signalling gradually returns and the muscle or gland resumes its usual activity.",
        "It does not add volume, so it does not address lines or hollows caused by lost volume or structure.",
        "It does not treat a cause of excessive sweating, which is ruled out first.",
      ],
      disclose:
        "Tell your doctor about all medicines and supplements, especially blood thinners, and any neuromuscular condition",
    },
    costFactors: {
      intro:
        "Cost depends on the area and the dose. As a prescription medicine it cannot be quoted or sold as a package before assessment.",
      factors: [
        "The area or areas being treated.",
        "The number of units your doctor decides after examining how the muscles move. Units are product-specific, so a figure quoted for another brand or clinic does not transfer.",
        "Your plan over time: the effect is temporary, so treatment is a repeating cycle reviewed by your doctor.",
      ],
    },
    comparisons: [
      {
        name: "Botulinum toxin",
        bestFor: "Lines caused by muscle movement; sweating; muscle bulk",
        downtime: "None",
      },
      {
        name: "Dermal fillers",
        bestFor: "Lines and hollows caused by lost volume or structure",
        downtime: "1-3 days",
      },
    ],
    preCare: [
      "Tell your doctor about all medicines and supplements, especially blood thinners, and any neuromuscular condition",
      "Avoid alcohol for around 24 hours beforehand to reduce bruising",
      "Come with the treatment area clean and free of make-up where possible",
      "Reschedule if you have an active infection, rash or cold sore in the area",
    ],
    postCare: [
      "Stay upright for about four hours and avoid pressing, rubbing or massaging the area",
      "Skip strenuous exercise, saunas, steam and hot yoga for the rest of the day",
      "Avoid facials, facial massage and lying face-down for around 24 hours",
      "Small raised bumps at the injection points usually settle within an hour",
      "Contact the clinic if you notice drooping, double vision, swallowing or breathing difficulty",
    ],
    related: ["dermal-fillers", "skin-booster", "hifu"],
    reviewedBy: "dr-jeremy-low",
    lastReviewed: "2026-07-24",
    seoTitle: "Botulinum Toxin Injections in Malaysia | Kaiteki",
    seoDescription:
      "Botulinum toxin is a prescription injectable used for expression lines, jaw or calf muscle bulk and excessive sweating. Doctor-assessed at Kaiteki Malaysia.",
    sections: [
      {
        heading: "What is botulinum toxin?",
        body: [
          "Botulinum toxin is a purified protein produced by the bacterium Clostridium botulinum. In very small, controlled doses it is used in medicine to temporarily reduce the activity of a specific muscle or gland.",
          "In Malaysia it is a prescription medicine: only a registered doctor can supply and administer it, after an in-person assessment.",
        ],
      },
      {
        heading: "How does botulinum toxin relax a muscle or sweat gland?",
        body: [
          "Muscles contract when a nerve releases a chemical messenger called acetylcholine at the junction between the nerve and the muscle. Botulinum toxin temporarily blocks that release, so the treated muscle contracts less strongly. The same mechanism applies to the nerves that switch on sweat glands, which is why it is also used for excessive sweating.",
          "The effect is confined to the small area injected and is temporary: nerve signalling gradually returns and the muscle or gland resumes its usual activity, at a pace that varies between people.",
          "Because the effect wears off, treatment is a repeating cycle, not a course with an endpoint. How often depends on the area, the dose and how you respond, and is decided at review.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is botulinum toxin permanent?",
        a: "No. Treatment is a repeating cycle, timed at review rather than on a fixed schedule.",
      },
      {
        q: "Can it help with excessive sweating?",
        a: "It is one option for excessive sweating of the underarms, palms or soles, usually where antiperspirants have not been enough. Underlying causes of the sweating are ruled out first.",
      },
      {
        q: "Will my face look frozen or expressionless?",
        a: "That look comes from dose and placement, which is why the doctor watches how your muscles move first. Say how much movement you want to keep.",
      },
      {
        q: "Is this the same as Botox?",
        a: "Botox is one registered brand of botulinum toxin type A: a product, not a separate treatment. Several brands are registered in Malaysia and differ in formulation and unit potency.",
      },
      {
        q: "Is it the same as dermal filler?",
        a: "No. Botulinum toxin relaxes muscle activity, so it addresses lines caused by movement. Dermal fillers add volume or structure, for hollowing and lines caused by lost volume. The two are sometimes used together.",
      },
    ],
  },
  {
    slug: "bio-stimulator",
    durationDowntime: "15-30 min · 1-2 days",
    name: "Bio-stimulator",
    category: "Injectables",
    image: "https://cdn.kaiteki.my/treatments/bio-stimulator/hero-2.jpg",
    device: "Sculptra",
    summary: "Injectable treatments used to support the skin's own structural renewal.",
    leadAnswer:
      "Bio-stimulators, such as Sculptra, Radiesse and Ellansé, are injectables intended to prompt the skin's own collagen rather than add volume on the day, as a dermal filler does. Any change is gradual, and unlike a hyaluronic acid filler they cannot be dissolved, so a doctor plans the course across months after assessment.",
    related: ["skin-booster"],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-06-08",
    seoTitle: "Bio-Stimulator Malaysia | Sculptra, Ellanse | Kaiteki",
    seoDescription:
      "Bio-stimulator injectables in Malaysia, including Sculptra and Ellanse, to support the skin's structural renewal. Book a free consultation at Kaiteki.",
    // docs/15 item 3.6 (2026-10-11): the v2 block set, applied under docs/16 R1.
    // Two prose sections kept; the rest became typed blocks and were deleted.
    // Block copy is restructured from reviewed text only: this page, the Sculptra, Radiesse and Ellansé pages,
    // and the concern pages' treatmentWhy lines. No new claim, no figure. The
    // re-arrangement goes to Dr Yeong Bin in the offline review round, which is why
    // `lastReviewed` is unchanged.
    typicalSessions: "A short course, spaced several weeks apart",
    facts: [
      { value: "Gradual by design", label: "Supports your own collagen rather than adding volume on the day" },
      { value: "15–30 minutes", label: "Typical injecting appointment" },
      { value: "Assessment first", label: "Your first visit is a doctor consultation, not a treatment" },
    ],

    // T-06 — from the concern pages' reviewed treatmentWhy lines.
    routes: [
      {
        title: "Gradual collagen rebuilding over months",
        body: "Change is deliberately slow, which some people prefer and others find frustrating.",
        links: [
          { href: "/concerns/face-lifting", label: "Read about face lifting" },
          { href: "/concerns/aging", label: "Ageing skin" },
        ],
      },
    ],

    // T-07 — the former "Types of bio-stimulator" section (R1).
    variantModule: {
      heading: "Sculptra, Radiesse or Ellansé: which material, and why",
      intro:
        "Each product uses a different base material, which changes how it behaves and how long it takes to resorb.",
      items: [
        {
          eyebrow: "Poly-L-lactic acid · Galderma",
          title: "Sculptra",
          body: "Reconstituted before use and intended to act as a gradual collagen stimulus over a course of sessions. The reconstituting fluid is absorbed within days, so early appearance is not the treatment effect.",
          href: "/technology/sculptra",
          hrefLabel: "About Sculptra",
        },
        {
          eyebrow: "Calcium hydroxylapatite · Merz",
          title: "Radiesse",
          body: "Support from the gel carrier when it is placed, then a collagen and elastin response as the microspheres are resorbed, with manufacturer-cleared use on the hands and décolletage as well as the face.",
          href: "/technology/radiesse",
          hrefLabel: "About Radiesse",
        },
        {
          eyebrow: "Polycaprolactone · Sinclair",
          title: "Ellansé",
          body: "Support from the carrier gel when it is placed, plus a collagen response as the PCL microspheres are resorbed, supplied in variants that differ in how long the microspheres take to clear.",
          href: "/technology/ellanse",
          hrefLabel: "About Ellansé",
        },
        {
          eyebrow: "Collagen-based",
          title: "Deusaderm",
          body: "A collagen-based injectable intended to support skin quality, structure and elasticity.",
        },
      ],
    },

    ctaMid: {
      heading: "Not sure whether you need a filler or a bio-stimulator?",
      body: "A doctor can tell you which your concern calls for, or whether it needs neither.",
    },

    // T-09 — this page and the three product pages.
    avoidIf: [
      { lead: "Pregnancy or breastfeeding.", body: "Treatment is deferred." },
      { lead: "Active infection or inflammation", body: "in the treatment area." },
      { lead: "A history of keloid or hypertrophic scarring.", body: "" },
      { lead: "Bleeding disorders or blood-thinning medication.", body: "" },
      { lead: "Autoimmune or connective-tissue conditions.", body: "" },
      {
        lead: "Previous permanent or semi-permanent implants",
        body: "in the same area.",
      },
    ],

    // T-10 — step 1 states the first visit is not a treatment.
    sessionSteps: [
      {
        title: "Consultation and assessment",
        body: "The doctor assesses your skin, confirms suitability, discusses the realistic time course and selects the product.",
      },
      {
        title: "Preparation",
        body: "The skin is cleansed and prepared, and topical or local anaesthetic is used for comfort.",
      },
      {
        title: "The injections",
        body: "The doctor injects the assessed areas.",
      },
      {
        title: "Afterwards",
        body: "The doctor may massage the treated area and explains aftercare, including any massage to do at home.",
      },
    ],

    // T-11 — injection site, the first days, review.
    afterSession: {
      intro: "",
      bands: [
        {
          title: "At the injection sites",
          body: "Mild swelling, redness or tenderness may occur and usually settles within a few days. Bruising can occasionally take longer to fade.",
        },
        {
          title: "The first days",
          body: "Avoid pressure or vigorous facial treatments on the area for a short period, and follow any massage instructions given.",
        },
      ],
      aftercare:
        "Follow the massage and aftercare instructions you are given for your product.",
    },

    // T-12
    risks: {
      intro: "",
      common: "Temporary redness, swelling, bruising or tenderness at the injection sites.",
      lessCommon:
        "Delayed-onset lumps or nodules have been reported with collagen-stimulating products, sometimes months after treatment, and rare but serious vascular complications are recognised for facial injectables in general.",
      cannotDo: [
        "It does not add volume on the day: change develops gradually over months.",
        "It cannot be dissolved the way a hyaluronic acid filler can.",
        "It is not permanent. The material is resorbed, and your own tissue continues to age.",
      ],
      disclose:
        "Raise any delayed lump, swelling or skin change with the clinic straight away, even months after treatment.",
    },

    // T-13 — factors only, no figures (settled 2026-09-20).
    costFactors: {
      intro:
        "Kaiteki does not quote prices online, because the product and the plan are decided at consultation. What moves it:",
      factors: [
        "Which product the doctor selects for your assessment.",
        "The area being addressed, and how much structural support has been lost.",
        "The number of sessions in the course.",
        "Whether periodic maintenance is part of the plan.",
      ],
    },

    relatedReasons: {
      "skin-booster":
        "Injectable hydrating treatments for skin quality, where the concern is hydration rather than structure.",
    },

    sections: [
      {
        heading: "What is a bio-stimulator?",
        body: [
          "A bio-stimulator is a type of injectable treatment given by a doctor that is intended to support the skin's own collagen framework, rather than to add immediate volume the way a conventional dermal filler does.",
        ],
      },
      {
        heading: "How does a bio-stimulator work with your own collagen?",
        body: [
          "Bio-stimulators are delivered by injection into targeted layers of the skin. The formulation acts as a scaffold within the tissue, and the body is intended to respond by gradually renewing its own supporting structures around it.",
          "Because the response builds gradually and varies between people, review appointments are how change is judged.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a bio-stimulator the same as a dermal filler?",
        a: "No. A dermal filler adds volume directly and, if hyaluronic acid, can be dissolved. A bio-stimulator prompts your own collagen gradually and cannot be dissolved.",
      },
      {
        q: "Are bio-stimulator treatments suitable for sensitive skin?",
        a: "Sometimes, but it cannot be assumed. Active inflammation, keloid scarring and autoimmune conditions are the factors the doctor checks first.",
      },
      {
        q: "Is there any downtime?",
        a: "Usually minimal: mild swelling, redness or tenderness at the injection sites that settles within a few days. Bruising can take longer.",
      },
      {
        q: "How many sessions will I need?",
        a: "Usually a short course spaced several weeks apart, sometimes with periodic maintenance afterwards.",
      },
    ],
  },
  {
    slug: "exosome-therapy",
    durationDowntime: "Consult required · Recovery varies",
    name: "Exosome Therapy",
    category: "Regenerative",
    image: "https://cdn.kaiteki.my/treatments/exosome-therapy/hero-v2.jpg",
    imageAlt: "A doctor injects along a patient's scalp hairline while an assistant steadies the area",
    // procedure-01 is the hero now, so the gallery starts at -02.
    procedureImages: [
      { src: "https://cdn.kaiteki.my/treatments/exosome-therapy/procedure-02.jpg", caption: "A doctor moves a handheld device over the patient's scalp as an assistant helps." },
      { src: "https://cdn.kaiteki.my/treatments/exosome-therapy/procedure-03.jpg", caption: "A handheld device is applied to the scalp during a session." },
    ],
    summary:
      "A regenerative approach used alongside other treatments for skin and scalp concerns.",
    leadAnswer:
      "Exosome therapy applies preparations of exosomes, tiny cell-derived vesicles that carry signalling molecules, to the skin or scalp. At Kaiteki it is usually used alongside another procedure such as microneedling, a laser or PRP, not on its own. The evidence base is still developing, so a doctor assesses whether it suits your plan.",
    related: ["skin-booster"],
    reviewedBy: "dr-william-yap",
    lastReviewed: "2026-06-05",
    seoTitle: "Exosome Therapy Malaysia | Regenerative Treatment | Kaiteki",
    seoDescription:
      "Exosome therapy in Malaysia, a regenerative approach for skin and scalp concerns. Book a free consultation with a Kaiteki doctor to assess suitability.",
    // docs/15 item 2.3 (2026-09-28): the v2 block set, applied under docs/16 R1.
    // Two prose sections kept; the rest became typed blocks and were deleted.
    // Block copy is restructured from reviewed text only: this page and the
    // acne and hair-loss pages' treatmentWhy lines. No variant module: the RG
    // archetype's T-07 is an evidence-status comparison, and no reviewed copy
    // states one, so it is left out rather than written (docs/16 R3). The
    // re-arrangement goes to Dr Yap in the offline review round.
    typicalSessions: "A short course, individual",
    facts: [
      { value: "Used alongside other treatments", label: "Microneedling, a laser or PRP, planned together" },
      { value: "Skin or scalp", label: "The two areas it is applied to" },
      { value: "Assessment first", label: "Your first visit is a doctor consultation, not a treatment" },
    ],

    // T-06 — from the concern pages' reviewed treatmentWhy lines.
    routes: [
      {
        title: "Skin recovery after energy-based acne treatment",
        body: "A regenerative approach applied after energy-based treatment to support skin recovery.",
        links: [{ href: "/concerns/acne", label: "Read about acne" }],
      },
      {
        title: "The scalp, alongside medical hair-loss treatment",
        body: "A regenerative preparation applied to the scalp to support the follicular environment, offered as an adjunct to medical management.",
        links: [{ href: "/concerns/hair-loss", label: "Read about hair loss" }],
      },
    ],

    ctaMid: {
      heading: "Wondering whether exosome therapy adds anything to your plan?",
      body: "It is an adjunct, so whether it belongs in your plan depends on what it would accompany.",
    },

    // T-09
    avoidIf: [
      { lead: "Pregnancy or breastfeeding.", body: "Treatment is deferred." },
      { lead: "Certain skin or scalp conditions", body: "in the area to be treated." },
      {
        lead: "Some medical conditions or medications,",
        body: "which your doctor goes through with you at consultation.",
      },
    ],

    // T-10 — step 1 states the first visit is not a treatment.
    sessionSteps: [
      {
        title: "Consultation and assessment",
        body: "Your first visit is a consultation, not a treatment. A doctor assesses your skin or scalp and decides whether exosome therapy is appropriate, and what it would be combined with.",
      },
      {
        title: "The accompanying procedure",
        body: "The session is built around the procedure exosome therapy accompanies: microneedling, a laser, or PRP (platelet-rich plasma).",
      },
      {
        title: "Application",
        body: "The exosome preparation is applied to the treated skin or scalp.",
      },
      {
        title: "Afterwards",
        body: "A short course spaced a few weeks apart is common.",
      },
    ],

    // T-11 — RG archetype: same day, the first week, cadence.
    afterSession: {
      intro:
        "Downtime is set mostly by the procedure exosome therapy is combined with.",
      bands: [
        {
          title: "The first few days",
          body: "When paired with microneedling or a laser, temporary redness, mild swelling or sensitivity can occur, and typically settles over the following days.",
        },
      ],
      aftercare:
        "Gentle skincare and sun protection are usually advised afterwards.",
    },

    // T-12
    risks: {
      intro:
        "The doctor explains these, and those of the procedure it accompanies, before you decide.",
      common: "Redness, swelling, sensitivity or irritation at the treated area.",
      lessCommon:
        "The procedure it is combined with carries its own considerations.",
      cannotDo: [
        "It is not a standalone acne treatment, only an adjunct after energy-based treatment.",
        "It is not a treatment for hair loss in its own right, and it is not a substitute for finding the cause.",
        "It is not established in the way the procedures it accompanies are. The evidence base is still developing.",
      ],
      disclose:
        "Tell your doctor if you are or may be pregnant or breastfeeding.",
    },

    // T-13 — factors only, no figures (settled 2026-09-20).
    costFactors: {
      intro:
        "Kaiteki does not quote prices online: exosome therapy is priced as part of a combination, so the cost only exists once that is decided. What moves it:",
      factors: [
        "The concern being addressed.",
        "The area treated, skin or scalp.",
        "The number of sessions, and your individual response across the course.",
      ],
    },

    relatedReasons: {
      "skin-booster":
        "Injectable hydrating treatments used to support skin quality and hydration, with their own established role rather than as an adjunct.",
    },

    sections: [
      {
        heading: "What is exosome therapy?",
        body: [
          "Exosomes are tiny cell-derived vesicles that carry signalling molecules such as proteins, lipids and RNA. In the body they act as messengers between cells, and this signalling role is why they are being explored in regenerative aesthetics.",
        ],
      },
      {
        heading: "Why is exosome therapy applied after another procedure?",
        body: [
          "The aim of exosome therapy is to support the skin's or scalp's own repair and renewal processes by delivering exosome-based signalling molecules to the treated area. Because exosomes are small, they are commonly applied after a procedure that briefly opens channels in the skin, such as microneedling or certain lasers.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is exosome therapy safe?",
        a: "Common effects are temporary redness, swelling, sensitivity or irritation, and the accompanying procedure carries its own risks. The evidence base is still developing.",
      },
      {
        q: "Who is a suitable candidate for exosome therapy?",
        a: "People already planning microneedling, a laser or PRP for skin recovery or scalp concerns may be assessed for it.",
      },
      {
        q: "When might I notice a change?",
        a: "Any change develops gradually over the weeks after treatment, not immediately, and the extent varies between people.",
      },
      {
        q: "Can exosome therapy treat hair loss on its own?",
        a: "No. On the scalp it is used alongside medical hair-loss treatment, not as a treatment in its own right, and it is not a substitute for finding the cause of the hair loss.",
      },
    ],
  },
  {
    slug: "double-eyelid",
    durationDowntime: "Consult required · Recovery varies",
    name: "Double Eyelid",
    category: "Eyes",
    image: "https://cdn.kaiteki.my/treatments/double-eyelid/hero-v2.jpg",
    imageAlt: "Illustrative photograph: a woman with her hands framing her face, looking at the camera",
    summary: "A procedure to create or refine an upper-eyelid crease, assessed individually.",
    leadAnswer:
      "Double-eyelid treatment is a surgical procedure that creates or refines an upper-eyelid crease, using either a suture (embedding) method or an incisional method. Eyelid anatomy decides which method applies, and whether either does, so the eyelid is examined in person before anything is arranged.",
    related: [],
    reviewedBy: "dr-lim-xiao-chien",
    lastReviewed: "2026-06-01",
    seoTitle: "Double Eyelid Surgery Malaysia | Crease Procedure | Kaiteki",
    seoDescription:
      "Double-eyelid procedure in Malaysia to create or refine an upper-eyelid crease. Book a free consultation with a Kaiteki doctor to assess suitability.",
    // docs/15 item 4.1 (2026-10-28): the v2 block set, applied under docs/16 R1.
    // Two prose sections kept; the rest became typed blocks and were deleted.
    // Copy is this page's own reviewed text, re-arranged: the avoidIf leads and
    // their intro are the former list verbatim. The illustrated `steps` stay as
    // the session sequence, so there is no sessionSteps. No new claim. The
    // re-arrangement goes to Dr Lim Xiao Chien in the offline review round.
    typicalSessions: "One procedure, then a review",
    bringToConsult:
      "Because the procedure is around the eye, these conditions can make it unsuitable or higher-risk:",
    avoidIf: [
      { lead: "Chronic or dry-eye conditions, which upper-eyelid procedures can aggravate", body: "" },
      { lead: "Uncontrolled high blood pressure", body: "" },
      { lead: "Circulation disorders", body: "" },
      { lead: "Thyroid disease", body: "" },
      { lead: "Diabetes", body: "" },
      { lead: "Glaucoma", body: "" },
      { lead: "Heart disease", body: "" },
    ],
    afterSession: {
      intro:
        "Swelling and bruising of the eyelids are expected and settle over time, generally sooner with the suture method. Many people return to everyday activities within around ten to fourteen days. The eyelids continue to settle over the following weeks to months, so the early crease is not the final one.",
      bands: [],
      aftercare: "Follow the eye-area aftercare the doctor gives you, and come back for the review appointment.",
    },
    risks: {
      intro:
        "Temporary effects include swelling, bruising, tightness and asymmetry while healing. The doctor goes through the specific risks around the eye before you consent.",
      common: "Swelling, bruising, tightness and asymmetry while the eyelid heals.",
      lessCommon: "Risks specific to surgery around the eye, which the doctor goes through with you before you consent.",
      cannotDo: [
        "No specific duration can be promised. The incisional approach tends to hold longer than the suture approach.",
        "The early crease is not the final one: the eyelids keep settling for weeks to months.",
        "Not every eyelid suits either method. Anatomy decides, which is why the eyelid is examined in person first.",
      ],
      disclose: "Bring your full medical history, including any eye condition.",
    },
    costFactors: {
      intro:
        "Cost depends mainly on the method. Suture and incisional are different procedures with different costs, and which one applies cannot be settled before the eyelid is examined.",
      factors: [
        "The method: suture or incisional.",
        "Whether excess fat is addressed during the procedure.",
      ],
    },
    // The only authored `steps` sequence. Sources are 156×156 icons and the
    // cell is capped there (Q-19) — the order is the information, not the art.
    steps: [
      {
        label: "Design",
        src: "https://cdn.kaiteki.my/treatments/double-eyelid/step-1-design.png",
        body: "The doctor marks the intended crease height and shape with you, checking symmetry with your eyes open and closed.",
      },
      {
        label: "Anaesthesia",
        src: "https://cdn.kaiteki.my/treatments/double-eyelid/step-2-anesthesia.png",
        body: "Local anaesthetic is given to the eyelid area. You stay awake throughout — the area is numbed, not sedated.",
      },
      {
        label: "The procedure begins",
        src: "https://cdn.kaiteki.my/treatments/double-eyelid/step-3-start-process.png",
        body: "The doctor works along the marked line using the suture or incisional method agreed at your consultation, addressing excess fat if needed.",
      },
      {
        label: "Suturing",
        src: "https://cdn.kaiteki.my/treatments/double-eyelid/step-4-suturing.png",
        body: "Fine sutures form and secure the crease. How many are placed, and where, depends on the method used.",
      },
      {
        label: "Healing and review",
        src: "https://cdn.kaiteki.my/treatments/double-eyelid/step-5-results.png",
        body: "Swelling and bruising are expected in the first days, and a review appointment checks how the eyelid is healing. How the crease settles differs between individuals.",
      },
    ],
    sections: [
      {
        heading: "What is double-eyelid treatment?",
        body: [
          "A double eyelid is the crease across the upper eyelid. Many people of Asian descent naturally have a single eyelid without one. Double-eyelid treatment is a surgical procedure that forms or adjusts that crease.",
        ],
        list: [
          "Creating an upper-eyelid crease where there is a single eyelid",
          "Refining a faint or uneven crease",
          "Reducing the effort of achieving a crease with eye make-up",
        ],
      },
      {
        heading: "Methods: suture and incisional",
        body: [
          "There are two broad approaches. The suture (embedding) method uses small access points through which fine sutures are placed to form the crease, without a continuous incision. The incisional method uses an incision along the intended crease line and is sometimes considered where there is excess skin or fat, or where a suture approach is less suitable.",
          "The suture method generally involves shorter swelling; the incisional method tends to hold longer.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long do the results last?",
        a: "It depends on the method and how your eyelids heal. The incisional approach tends to hold longer than the suture approach, but no specific duration can be promised.",
      },
      {
        q: "Am I suitable for double-eyelid treatment?",
        a: "It depends on your eyelid anatomy and health. Dry-eye disease, uncontrolled high blood pressure, circulation disorders, thyroid disease, diabetes, glaucoma and heart disease can rule it out, so bring your full medical history.",
      },
      {
        q: "Does the procedure hurt?",
        a: "The eyelid is numbed with local anaesthetic, and you stay awake. Tightness, swelling or tenderness while healing is common and typically settles.",
      },
      {
        q: "How long is the recovery after double eyelid surgery?",
        a: "Many people return to everyday activities within around ten to fourteen days, generally sooner with the suture method. The eyelids keep settling for weeks to months after that, so the early crease is not the final one.",
      },
      {
        q: "What is the difference between the suture and incisional methods?",
        a: "The suture method forms the crease with fine sutures through small access points, without a continuous incision, and generally means shorter swelling. The incisional method uses an incision along the crease line and tends to hold longer. Your eyelid anatomy decides which applies, if either.",
      },
    ],
  },

  // 8 new category (parent-less) pages, authored to the pico-laser template
  // (docs/superpowers/plans/2026-07-13-treatment-taxonomy-restructure.md, Task 8).
  {
    slug: "vascular-pigment-laser",
    durationDowntime: "15-30 min · Minimal downtime (1-3 days)",
    name: "Vascular / Pigment Laser",
    category: "Lasers",
    image: "https://cdn.kaiteki.my/treatments/vascular-pigment-laser/hero.jpg",
    procedureImages: [
      { src: "https://cdn.kaiteki.my/treatments/vascular-pigment-laser/procedure-01.jpg", caption: "A practitioner in protective eyewear works on the patient's face with a fine laser handpiece." },
      { src: "https://cdn.kaiteki.my/treatments/vascular-pigment-laser/procedure-02.jpg", caption: "A practitioner applies the light-based handpiece to the patient's cheek." },
      { src: "https://cdn.kaiteki.my/treatments/vascular-pigment-laser/procedure-03.jpg", caption: "A practitioner directs a laser at the patient's forehead; the patient wears eye shields." },
    ],
    summary:
      "Laser and light-based devices used for visible blood vessels, redness and pigment concerns.",
    leadAnswer:
      "Vascular / Pigment Laser covers the light-based devices Kaiteki uses on visible blood vessels, facial redness and pigment: Pro Yellow, M22 IPL and the dedicated DermaV platform. Which one a doctor uses depends on whether the target is a vessel or a pigment, and how deep it sits, which is decided at examination.",
    related: ["pico-laser"],
    reviewedBy: "dr-jeremy-low",
    lastReviewed: "2026-07-13",
    seoTitle: "Pigmentation & Vascular Laser Malaysia | Kaiteki",
    seoDescription:
      "Laser treatment in Malaysia for pigmentation, redness and visible vessels using M22 IPL, Pro Yellow and DermaV. Book a free consultation at Kaiteki.",
    // `vascular-lesions.png` stays out: it is a magnified side-by-side of a
    // treated and an untreated leg — a before/after in all but name, and the
    // treatment revamp ships none (docs/13 §3.3, ADR-0001).
    //
    // docs/15 item 4.1 (2026-10-28): the v2 block set, applied under docs/16 R1.
    // Two prose sections kept; the rest became typed blocks and were deleted.
    // Block copy is restructured from reviewed text only: this page and the
    // Pro Yellow, M22 IPL and DermaV pages. No new claim, no figure. The
    // re-arrangement goes to Dr Jeremy Low in the offline review round.
    typicalSessions: "Several, a few weeks apart",
    bringToConsult:
      "Suitability also depends on which of the three devices is being considered, so bring your full medical and skincare history. With rosacea, mention your triggers, current treatment and any previous vascular laser.",
    avoidIf: [
      { lead: "Pregnancy or breastfeeding.", body: "Treatment is deferred." },
      { lead: "Recently tanned or sunburnt skin.", body: "" },
      { lead: "Active infection or inflamed skin", body: "in the area to be treated." },
      { lead: "Photosensitising medication,", body: "including oral isotretinoin and certain antibiotics." },
      { lead: "A history of keloid scarring or a light-sensitive condition.", body: "" },
    ],
    sessionSteps: [
      {
        title: "Consultation and assessment",
        body: "Your first visit is a consultation, not a treatment. The doctor examines whether the target is a vessel or a pigment, and how deep it sits, before choosing a device.",
      },
      {
        title: "A test area, where useful",
        body: "A patch or test area may be done before treatment goes ahead.",
      },
      {
        title: "The treatment",
        body: "The skin is cleansed, eye protection is fitted and the light is applied. Most people describe each pulse as a brief hot pinprick or warm snap.",
      },
    ],
    afterSession: {
      intro:
        "Downtime is usually limited. Temporary redness or mild sensitivity typically settles. Use sun protection and gentle skincare afterwards.",
      bands: [
        {
          title: "The first day or two",
          body: "Redness, warmth and mild swelling are common. Treated vessels can look temporarily darker or greyish, and treated pigment can darken or crust slightly before flaking away.",
        },
      ],
      aftercare:
        "Use daily sun protection, keep skincare gentle, and avoid heat such as saunas and hot showers for as long as your doctor specifies.",
    },
    risks: {
      intro:
        "Temporary effects can include redness, swelling or changes in pigmentation. Treating a vessel with a wavelength meant for pigment, or the reverse, is the mistake that causes the rest, and it is what the assessment and any test patch exist to prevent.",
      common: "Redness, swelling, bruising and small crusts over treated vessels.",
      lessCommon:
        "Blistering, burns, scarring and longer-lasting pigment change, more likely on unsuitable or recently tanned skin.",
      pigmentNote:
        "These devices are used across a range of skin tones, but some skin types and concerns need particular care to reduce the risk of pigment change, so your skin type and history are assessed first.",
      cannotDo: [
        "Vessels can recur, because the tendency behind them remains.",
        "Rosacea and a tendency to flush are chronic: treatment addresses visible vessels, not the condition.",
        "Very deep or large vessels may respond differently from fine superficial ones, and may need another approach.",
      ],
      disclose: "Tell your doctor about recent sun exposure and every medication you take.",
    },
    costFactors: {
      intro:
        "Sessions and cost depend on the device, the concern and how your skin responds. The three platforms are not priced alike, so the cost follows the doctor's choice of device rather than preceding it.",
      factors: [
        "Which device the doctor selects.",
        "How extensive the concern is: a few discrete vessels, or diffuse redness.",
        "The size of the area.",
        "Whether a chronic concern needs occasional maintenance sessions.",
      ],
    },
    sections: [
      {
        heading: "What is Vascular / Pigment Laser treatment?",
        body: [
          "Vascular / Pigment Laser is a group of light-based devices, not a single machine. Each wavelength is chosen to target either visible blood vessels or pigment in the skin. The group is commonly considered for facial redness and thread veins, sun spots and other pigment marks, and rosacea-associated flushing as part of a wider plan.",
          "At Kaiteki the group is Pro Yellow (a QuadroStar 577nm yellow-light laser), M22 IPL (intense pulsed light) and the dedicated DermaV vascular-pigment platform.",
        ],
      },
      {
        heading: "How does one wavelength target a vessel and another a pigment?",
        body: [
          "Pro Yellow delivers 577nm yellow-light energy, a wavelength associated with absorption by blood vessels, and is generally considered for vascular concerns such as redness and visible vessels. M22 IPL delivers broad-spectrum light that can be filtered for either vascular or pigment targets, offering flexibility across different skin concerns in one platform.",
          "The doctor selects the device, wavelength and settings for your concern and skin tone. The target, a vessel or a pigment particle, absorbs the energy, which may gradually reduce its visibility or prompt the body to clear it over time.",
        ],
      },
    ],
    faqs: [
      {
        q: "How is this different from DermaV?",
        a: "DermaV is a dedicated dual-wavelength vascular-pigment device, used alongside Pro Yellow and M22 IPL.",
      },
      {
        q: "Is this suitable for darker Asian skin tones?",
        a: "These devices are used across a range of skin tones, but some skin types and concerns need particular care to reduce the risk of pigment change, so your skin type and history are assessed first.",
      },
      {
        q: "How many sessions will I need?",
        a: "A course of several sessions spaced a few weeks apart is common. Vessels can recur because the tendency behind them remains, so the doctor will say whether you are looking at a course or an ongoing arrangement.",
      },
      {
        q: "Does vascular laser hurt?",
        a: "Most people describe each pulse as a brief hot pinprick or warm snap. The devices cool the skin surface as they work, which is intended to keep sessions comfortable.",
      },
      {
        q: "Is there downtime after laser for redness or pigmentation?",
        a: "Usually little. Redness and mild swelling for a few hours to a day or two are common, and treated vessels or pigment can look temporarily darker before settling. Sun protection matters afterwards.",
      },
    ],
  },
  {
    slug: "resurfacing-laser",
    durationDowntime: "30-60 min · 5-7 days recovery",
    name: "Resurfacing Laser",
    category: "Lasers",
    image: "https://cdn.kaiteki.my/treatments/resurfacing-laser/hero.jpg",
    procedureImages: [
      { src: "https://cdn.kaiteki.my/treatments/resurfacing-laser/procedure-01.jpg", caption: "A doctor guides the laser handpiece close to the patient's skin." },
      { src: "https://cdn.kaiteki.my/treatments/resurfacing-laser/procedure-02.jpg", caption: "A doctor holds the patient's face steady while applying the laser handpiece." },
      { src: "https://cdn.kaiteki.my/treatments/resurfacing-laser/procedure-03.jpg", caption: "A practitioner moves the laser handpiece along the patient's jawline." },
    ],
    summary: "A fractional CO2 laser used for skin texture, scarring and pore concerns.",
    leadAnswer:
      "Resurfacing Laser at Kaiteki uses fractional CO2 laser technology to create controlled micro-injury columns in the skin, prompting a renewal response. It is commonly considered for texture, scarring and enlarged-pore concerns. It asks more of both recovery and skin type than the non-ablative lasers do, so a doctor is deliberate about who it is offered to.",
    related: ["pico-laser", "microneedling"],
    reviewedBy: "dr-chang-chee-seong",
    lastReviewed: "2026-07-13",
    seoTitle: "CO2 Resurfacing Laser Malaysia | Kaiteki",
    seoDescription:
      "Fractional CO2 resurfacing laser in Malaysia for skin texture, acne scarring and pores. Book a free consultation with a Kaiteki doctor to assess suitability.",
    // docs/15 item 4.1 (2026-10-28): the v2 block set, applied under docs/16 R1.
    // Two prose sections kept; the rest became typed blocks and were deleted.
    // Block copy is restructured from reviewed text only: this page and the
    // fractional CO2 page. No new claim, no figure. The re-arrangement goes to
    // Dr Chang Chee Seong in the offline review round.
    typicalSessions: "A small course, spaced weeks apart",
    bringToConsult:
      "Raise any history of cold sores, or of scarring badly, without being asked: both change whether, and how, it is done.",
    avoidIf: [
      { lead: "Pregnancy or breastfeeding.", body: "Treatment is deferred." },
      { lead: "Active infection or inflammation", body: "in the area, including acne or cold sores." },
      { lead: "A history of keloid or hypertrophic scarring.", body: "" },
      { lead: "Recently tanned skin, or recent isotretinoin.", body: "" },
      { lead: "Certain autoimmune or connective-tissue conditions,", body: "which your doctor goes through with you." },
    ],
    sessionSteps: [
      {
        title: "Consultation and recovery planning",
        body: "Your first visit is a consultation, not a treatment. For an ablative laser it includes planning your recovery around work or events before anything is booked.",
      },
      {
        title: "Numbing, then the laser",
        body: "Topical numbing is applied, then the laser is passed across the area at settings chosen for your skin.",
      },
      {
        title: "Healing between sessions",
        body: "Sessions are spaced several weeks to a few months apart, so the skin heals and remodels fully between visits.",
      },
    ],
    afterSession: {
      intro:
        "Expect more downtime than with non-ablative lasers. Redness, swelling and flaking or peeling over several days to about a week are common and typically settle. Diligent sun protection and gentle skincare follow.",
      bands: [
        {
          title: "The first day or two",
          body: "Treated skin looks red, feels hot and tight, and is visibly swollen.",
        },
        {
          title: "The rest of the week",
          body: "Bronzing, roughness and flaking as the treated columns work their way out. Pinkness can linger for weeks.",
        },
      ],
      aftercare:
        "Gentle cleansing, the emollient you are given, no picking or exfoliating, and strict daily sun protection. Heat, swimming, makeup and active skincare are paused for as long as your doctor specifies.",
    },
    risks: {
      intro:
        "Temporary effects include redness, swelling, peeling and changes in pigmentation. Because the laser is ablative, the skin is genuinely wounded and then heals, so infection and scarring are real if uncommon possibilities. That is why aftercare here is instruction rather than advice.",
      common: "Redness, swelling, heat, crusting and peeling, and pinkness that can last for weeks.",
      lessCommon:
        "Post-inflammatory hyperpigmentation, prolonged redness, reactivation of cold sores, infection, and scarring or textural change.",
      pigmentNote:
        "Deeper and Asian skin tones carry a higher risk of post-inflammatory hyperpigmentation after ablative resurfacing, so settings are kept conservative, priming skincare may be advised, and more sessions at lower intensity may be preferred over one aggressive session.",
      cannotDo: [
        "It is not a lunchtime treatment: the recovery is real and has to be planned for.",
        "Established acne scarring generally needs a course, not one visit.",
        "It works on texture and structure, not on skin colour alone.",
      ],
      disclose:
        "Tell your doctor about any history of cold sores, scarring or pigment problems, and any recent isotretinoin.",
    },
    costFactors: {
      intro:
        "Sessions and cost depend on the concern, the treatment depth and how your skin responds. Depth and density are set for your skin type, and they are what the cost tracks, so it is confirmed at consultation rather than published as a rate.",
      factors: [
        "The size of the area.",
        "The depth and density of settings your concern calls for.",
        "How many sessions the plan involves.",
        "Whether it is combined with other treatments in a scar or resurfacing plan.",
      ],
    },
    sections: [
      {
        heading: "What is Resurfacing Laser treatment?",
        body: [
          "Resurfacing Laser refers to ablative and fractional laser technology (at Kaiteki, a fractional CO2 laser) that works by creating a controlled pattern of micro-injury columns across the treated skin, leaving surrounding tissue intact to support recovery.",
          "This differs from non-ablative lasers such as Pico laser, which do not remove tissue at the surface. It is commonly considered for acne scarring and uneven texture, enlarged pores, and fine lines or other textural irregularity.",
        ],
      },
      {
        heading: "Why does a fractional CO2 laser heal faster than full resurfacing?",
        body: [
          "The fractional CO2 laser delivers energy in a grid-like pattern of microscopic columns, each surrounded by untreated skin. This fractional approach is intended to prompt a controlled skin-renewal and collagen-remodelling response while allowing faster recovery than treating the entire surface at once.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much downtime should I expect?",
        a: "More than with non-ablative lasers. Redness, swelling and flaking over several days to about a week are common and typically settle; how much depends on the settings used.",
      },
      {
        q: "Is it painful?",
        a: "Topical numbing is usually applied beforehand. Many people describe a warm or prickling sensation during treatment.",
      },
      {
        q: "How many sessions will I need?",
        a: "It depends on the concern and the treatment depth. The doctor sets the number and spacing of sessions once your skin has been assessed.",
      },
      {
        q: "Is CO2 laser safe for Asian skin?",
        a: "It is used on Asian skin, but more conservatively, because deeper skin tones carry a higher risk of post-inflammatory hyperpigmentation after ablative resurfacing. That often means lower settings across more sessions, and strict sun protection afterwards.",
      },
      {
        q: "What is the difference between fractional and fully ablative CO2 laser?",
        a: "Fully ablative resurfacing treats the whole surface in one pass, with a long recovery. Fractional delivery leaves untreated skin between microscopic columns, so healing draws on that intact skin and recovery is shorter. The trade-off is less surface treated per session, which is why a course is usual.",
      },
    ],
  },
  {
    slug: "microwave-contouring",
    durationDowntime: "20-30 min · No downtime",
    name: "Microwave Contouring",
    category: "Body & Slimming",
    image: "https://cdn.kaiteki.my/treatments/microwave-contouring/hero.jpg",
    procedureImages: [
      { src: "https://cdn.kaiteki.my/treatments/microwave-contouring/procedure-01.jpg", caption: "A practitioner moves the handpiece across the patient's abdomen." },
      { src: "https://cdn.kaiteki.my/treatments/microwave-contouring/procedure-02.jpg", caption: "A gloved practitioner applies the handpiece to the upper arm area." },
      { src: "https://cdn.kaiteki.my/treatments/microwave-contouring/procedure-03.jpg", caption: "A practitioner works under the jaw with the handpiece." },
    ],
    summary: "Microwave-based technology used for body-contouring, cellulite and firmness concerns.",
    leadAnswer:
      "Microwave Contouring uses microwave-based energy, delivered at Kaiteki through the Onda platform, to address localised fat, cellulite appearance and skin firmness. Which areas are treatable, and whether any of yours are, is settled by examining the area rather than by naming the concern.",
    related: ["fat-freezing", "muscle-stimulation"],
    reviewedBy: "dr-jacqueline-tan",
    lastReviewed: "2026-07-13",
    seoTitle: "Onda Microwave Contouring Malaysia | Kaiteki",
    seoDescription:
      "Onda microwave contouring in Malaysia for localised fat, cellulite appearance and firmness. Book a free consultation with a Kaiteki doctor to check suitability.",
    // Text chips (the die-cut zone photographs were stock and some were
    // mislabelled; dropped 2026-10-12). Labels name the body area, not the
    // concern: a list of named defects reads as an indication list on an
    // advertisement page (docs/02 §8).
    areas: [
      "Forehead and brow",
      "Cheeks",
      "Nasolabial folds",
      "Jowls",
      "Jawline",
      "Under the chin",
      "Upper arms",
      "Back and bra line",
      "Flanks and waist",
      "Thighs",
      "Knees",
    ],
    // docs/15 item 4.1 (2026-10-28): the v2 block set, applied under docs/16 R1.
    // Two prose sections kept; the rest became typed blocks and were deleted.
    // Block copy is restructured from reviewed text only: this page and the
    // Onda page. The one exception is `pigmentNote`, which the template makes
    // mandatory on energy-based pages and no reviewed copy states for Onda: it
    // is worded on the RF page's note and flagged for Dr Jacqueline Tan, who
    // gets the whole re-arrangement in the offline review round.
    typicalSessions: "Several, a few weeks apart",
    bringToConsult: "Mention every device or implant at consultation.",
    avoidIf: [
      { lead: "Pregnancy.", body: "Treatment is deferred." },
      { lead: "Implants or medical devices", body: "in the treatment area." },
      { lead: "Some skin or health conditions,", body: "which your doctor goes through with you." },
    ],
    sessionSteps: [
      {
        title: "Consultation and assessment",
        body: "Your first visit is a consultation, not a treatment. The doctor examines the area, decides whether it is treatable, and chooses between Onda for Body and Onda for Face.",
      },
      {
        title: "The treatment",
        body: "After the area is examined, a handpiece is moved over it to deliver the energy while the surface is cooled. Most people describe a warming sensation.",
      },
    ],
    afterSession: {
      intro: "Downtime is usually limited.",
      bands: [
        {
          title: "Straight afterwards",
          body: "Temporary warmth, redness or mild tenderness over the treated area can occur and typically settles.",
        },
      ],
      aftercare: "Most people return to usual activities. The doctor gives aftercare guidance specific to you.",
    },
    risks: {
      intro: "Like any energy-based treatment, it carries risks, which are explained before a course is booked.",
      common: "Redness, swelling, warmth or tenderness in the treated area.",
      lessCommon:
        "The energy is thermal, so the risk that matters is overheating one spot. It is managed by keeping the handpiece moving and by treating within what the doctor judges the tissue can take.",
      pigmentNote:
        "Microwave energy heats tissue beneath a cooled surface rather than targeting pigment, so it does not rely on colour contrast the way a laser does.",
      cannotDo: [
        "It is not a weight-loss treatment: it treats localised areas, not overall body weight.",
        "Not every area is treatable. That is settled by examining it, not by naming the concern.",
        "It is not a single-session treatment. A course is common, and a body area generally takes more sessions than a facial one.",
      ],
      disclose: "Tell your doctor about every implant or medical device, and your full medical history.",
    },
    costFactors: {
      intro:
        "Sessions and cost depend on the areas treated and how you respond. A facial area and a body area take very different amounts of time on the handpiece, so cost follows the areas agreed at consultation.",
      factors: [
        "The area being treated, body or face.",
        "The concern being addressed.",
        "How many sessions the course needs, which depends on your response.",
      ],
    },
    sections: [
      {
        heading: "What is Microwave Contouring?",
        body: [
          "Microwave Contouring is a category of non-invasive body- and face-contouring technology that uses microwave-based energy to act on tissue beneath the skin's surface. At Kaiteki this is delivered using the Onda platform, which the manufacturer refers to as Coolwaves® technology.",
          "It is used on localised fat on areas such as the abdomen, flanks, thighs and arms, on the dimpled appearance of cellulite, and on skin firmness, including the face and jawline. It is not a weight-loss treatment: it treats localised areas, not overall body weight.",
        ],
      },
      {
        heading: "How can microwave energy reach fat without burning the skin?",
        body: [
          "Microwave energy is delivered beneath the skin's surface while built-in cooling helps keep the surface protected during treatment. The energy is intended to act on the targeted tissue, for example localised fat cells or the fibrous bands associated with cellulite, and may also prompt a gradual collagen-remodelling response supporting firmness.",
        ],
      },
    ],
    faqs: [
      {
        q: "What device is used at Kaiteki?",
        a: "The Onda platform, which its manufacturer calls Coolwaves® technology.",
      },
      {
        q: "Is it painful, and is there downtime?",
        a: "Built-in cooling protects the surface, and most people describe a warming sensation. Downtime is usually limited.",
      },
      {
        q: "How many sessions will I need?",
        a: "A course of several sessions spaced a few weeks apart is common. A body area generally takes more sessions than a facial one, simply because there is more of it.",
      },
      {
        q: "Is Onda a weight-loss treatment?",
        a: "No. It addresses localised areas of fat and skin firmness, not overall body weight, and it is not a substitute for weight management.",
      },
      {
        q: "What is the difference between Onda and Onda Pro?",
        a: "Onda Pro is DEKA's newer generation of Onda. Both use the same Coolwaves® microwave technology, and Onda Pro has dedicated handpieces for the face and the body. Kaiteki has both, and the doctor chooses the device for the area being treated.",
      },
    ],
  },
  {
    slug: "muscle-stimulation",
    durationDowntime: "20-30 min · No downtime",
    name: "Muscle Stimulation",
    category: "Body & Slimming",
    image: "https://cdn.kaiteki.my/treatments/muscle-stimulation/hero-v2.jpg",
    imageAlt: "The DEKA Schwarzy body-contouring device on a plain background",
    summary: "Electromagnetic muscle-stimulation technology used for body-toning concerns.",
    leadAnswer:
      "Muscle Stimulation at Kaiteki uses the Schwarzy (Em-Fit) platform, which delivers electromagnetic energy to induce muscle contractions that are difficult to achieve through voluntary exercise alone. It is considered for body-toning concerns. It acts on muscle, not on fat or body weight, and a doctor confirms that is what you are after before sessions are planned.",
    related: ["fat-freezing", "microwave-contouring"],
    reviewedBy: "dr-joaan-kong",
    lastReviewed: "2026-07-13",
    seoTitle: "Muscle Stimulation Treatment Malaysia | Kaiteki",
    seoDescription:
      "Electromagnetic muscle-stimulation treatment in Malaysia for body-toning concerns as part of an individual plan. Book a free consultation at Kaiteki.",
    figures: [
      {
        src: "https://cdn.kaiteki.my/treatments/muscle-stimulation/image-schwarzy.jpg",
        caption: "A Schwarzy applicator and its strap, positioned before the belt is fastened over the area.",
      },
    ],
    // docs/15 item 4.1 (2026-10-28): the v2 block set, applied under docs/16 R1.
    // Two prose sections kept; the rest became typed blocks and were deleted.
    // Block copy is restructured from reviewed text only: this page and the
    // Schwarzy page. `pigmentNote` follows the Schwarzy page's account of a
    // magnetic field acting on motor nerves. No new claim, no figure. The
    // re-arrangement goes to Dr Joaan Kong in the offline review round.
    typicalSessions: "A short block over a few weeks",
    bringToConsult:
      "The medical history is taken before the belt goes on, so declare every implant, device and medication.",
    avoidIf: [
      { lead: "Metal implants, pacemakers or copper IUDs", body: "in or near the treatment field." },
      { lead: "Other implanted devices,", body: "such as a defibrillator, neurostimulator or drug pump." },
      { lead: "Pregnancy.", body: "Treatment is deferred." },
      { lead: "Epilepsy or a seizure history,", body: "or a hernia in the area." },
      { lead: "Some medical conditions affecting the treatment area,", body: "including certain heart, kidney or bleeding conditions." },
    ],
    sessionSteps: [
      {
        title: "Consultation and screening",
        body: "Your first visit is a consultation, not a treatment. The doctor assesses the area and your goals and reviews your implant and medical history, which is the main gate on suitability.",
      },
      {
        title: "The session",
        body: "After the area and your goals are assessed, the applicator is strapped over the target muscle group and the device runs a programme of contractions for a set period.",
      },
    ],
    afterSession: {
      intro:
        "There is no set downtime. Soreness like that after exercise, mild redness or tenderness at the treated area can follow and typically settles within a few days.",
      bands: [
        {
          title: "Between sessions",
          body: "Allow the muscle a recovery day, keep up gentle movement and stay hydrated, much as you would space training.",
        },
      ],
      aftercare: "Your doctor will tell you how to space sessions around your own training.",
    },
    risks: {
      intro: "Like any medical procedure, it carries risks, which are explained before a block is booked.",
      common:
        "Muscle soreness, aching or cramping in the treated area, brief muscle fatigue, and mild redness or warmth where the pad sat.",
      lessCommon: "A temporary change in skin sensation.",
      pigmentNote:
        "The stimulus is a magnetic field acting on the nerves to the muscle, not light or heat, so skin tone does not decide suitability. Implants and medical history do.",
      cannotDo: [
        "It does not reduce fat, and it is not a weight-loss treatment.",
        "It does not tighten loose skin.",
        "If a layer of fat sits over the muscle, strengthening what is underneath will not change what is above it.",
        "Tone gained is not held indefinitely without ongoing stimulus or activity.",
      ],
      disclose: "Declare every implant, device and medication before treatment.",
    },
    costFactors: {
      intro:
        "Sessions are usually booked as a short block spaced across a few weeks rather than singly, so the cost is set for the block at consultation. It depends on the area treated, your goals and how you respond.",
      factors: [
        "How many muscle groups you want addressed.",
        "How many sessions the plan calls for.",
        "Whether maintenance sessions are included.",
        "Whether your goals involve both fat and tone, in which case the plan combines treatments.",
      ],
    },
    sections: [
      {
        heading: "What is Muscle Stimulation?",
        body: [
          "Muscle Stimulation is a non-invasive treatment category that uses electromagnetic energy to induce repeated muscle contractions in a targeted area.",
          "It is generally considered for muscle tone in areas such as the abdomen, thighs or buttocks, alongside a fitness routine rather than instead of one.",
        ],
      },
      {
        heading: "What is a supramaximal contraction?",
        body: [
          "The device delivers electromagnetic energy through an applicator placed over the target muscle group, inducing supramaximal contractions, a level of contraction that is difficult to achieve through voluntary exercise alone.",
          "Any change in tone develops gradually over a course of sessions.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does it reduce fat?",
        a: "No. It works on muscle tone, not fat. If fat reduction is the goal, the doctor may discuss fat freezing or microwave contouring instead.",
      },
      {
        q: "Is there any downtime?",
        a: "No set downtime. Exercise-like soreness can follow for a few days, more so if you have not trained the area recently.",
      },
      {
        q: "How many sessions will I need?",
        a: "A short block spaced across a few weeks is common. As with any muscle work, what it holds depends on what you do between and after the sessions.",
      },
      {
        q: "Can I have muscle stimulation with an IUD or a metal implant?",
        a: "Not in or near that area. The stimulus is a magnetic field, so metal implants, pacemakers and copper IUDs in or near the treatment field rule it out. That is why every implant and device is declared before the belt goes on.",
      },
      {
        q: "How is it different from exercising myself?",
        a: "The contractions are involuntary and repeated at a rate and depth you cannot produce by choice. It sits alongside your own activity, not in place of it: fitness and weight management still come from exercise and diet.",
      },
    ],
  },
  {
    slug: "dermal-fillers",
    durationDowntime: "15-30 min · 1-3 days",
    name: "Dermal Fillers",
    category: "Injectables",
    image: "https://cdn.kaiteki.my/treatments/dermal-fillers/hero.jpg",
    summary: "Hyaluronic-acid injectable fillers used to add volume and support facial contour.",
    leadAnswer:
      "Dermal fillers are hyaluronic-acid (HA) based injectables used by a doctor to add volume or support the shape of specific facial areas. At Kaiteki these include Juvederm, Restylane, Belotero and Art Filler. Filler is placed into the face by a doctor, so facial structure and your medical history are assessed before any product, plane or plan is chosen.",
    related: ["skin-booster", "bio-stimulator", "botulinum-toxin"],
    reviewedBy: "dr-tim-chua",
    lastReviewed: "2026-07-13",
    seoTitle: "Dermal Fillers Malaysia | Juvederm, Restylane | Kaiteki",
    seoDescription:
      "Dermal filler treatment in Malaysia using Juvederm, Restylane, Belotero and Art Filler to support facial volume and contour. Book a free consultation at Kaiteki.",
    // docs/15 item 4.1 (2026-10-28): the v2 block set, applied under docs/16 R1.
    // Two prose sections kept; the rest became typed blocks and were deleted.
    // Block copy is restructured from reviewed text only: this page and the
    // Juvéderm, Restylane, Belotero and Art Filler pages. No new claim, no
    // figure. The re-arrangement goes to Dr Tim Chua in the offline review round.
    typicalSessions: "One visit, or staged across several",
    bringToConsult:
      "Bring your medical history, medications and allergies, including any autoimmune condition and any blood-thinning or immune-modulating medication.",
    avoidIf: [
      { lead: "Pregnancy or breastfeeding.", body: "Filler is generally not used." },
      { lead: "Active skin infection or open lesions", body: "in the area to be treated." },
      {
        lead: "A known allergy",
        body: "to hyaluronic acid, lidocaine or amide-type local anaesthetics, or a history of severe allergy or anaphylaxis.",
      },
      { lead: "Previous filler or a permanent implant", body: "in the area, which the doctor needs to know about first." },
    ],
    sessionSteps: [
      {
        title: "Consultation and facial assessment",
        body: "Your first visit is a consultation, not a treatment. The doctor assesses your facial proportions and medical history, decides which areas to address and in what order, and explains the risks before you consent.",
      },
      {
        title: "Product and preparation",
        body: "After a facial assessment, the doctor selects a product for the area, cleanses the skin and, where relevant, applies topical numbing before injecting.",
      },
      {
        title: "The injections",
        body: "The gel is placed in small increments with a needle or a cannula. A single area often takes 15 to 30 minutes once preparation is done, and many plans are staged across more than one visit.",
      },
      {
        title: "Review",
        body: "A review appointment is commonly arranged so the doctor can assess the area once the swelling has settled.",
      },
    ],
    afterSession: {
      intro:
        "Mild swelling, redness, bruising or tenderness at the injection sites commonly settles within a few days to about a week. Follow the aftercare you are given, which may include avoiding certain activities for a few days, and contact the clinic with any concern.",
      bands: [
        {
          title: "The first few days",
          body: "The lips and under-eye area tend to swell more visibly than the cheeks or jawline. Allow a comfortable margin before any event that matters to you.",
        },
      ],
      aftercare:
        "Avoid pressure or massage on the treated site, keep strenuous exercise, heat and alcohol to a minimum for a short period, and contact the clinic promptly if anything feels unusual.",
    },
    risks: {
      intro: "Filler is an injectable medical device, and its risks are explained at consultation before you consent.",
      common:
        "Common temporary effects are swelling, redness, bruising, tenderness or lumpiness at the injection site, which typically settle.",
      lessCommon:
        "Infection, inflammatory nodules and delayed hypersensitivity. The most serious recognised risk of any filler is vascular occlusion: filler entering or compressing a blood vessel, which can affect the skin or, rarely, vision.",
      cannotDo: [
        "It is not permanent: hyaluronic-acid filler is gradually broken down by the body.",
        "It does not relax muscle, so it does not address lines caused by movement.",
        "Dissolving it is not a routine undo. Hyaluronidase is a medical procedure with its own risks, and not appropriate in every situation.",
      ],
      disclose: "Report sudden pain, skin blanching or any change in vision to the clinic immediately, rather than waiting.",
    },
    costFactors: {
      intro:
        "The amount and the product used, and so the cost, depend on the areas treated and your assessment. Cost is confirmed once a plan is agreed, not quoted online.",
      factors: [
        "How many areas are being addressed.",
        "Which gel suits each area. Firmer structural gels and softer gels for delicate areas are not interchangeable.",
        "How much product your anatomy calls for.",
        "How often top-ups are needed, which is individual.",
      ],
    },
    sections: [
      {
        heading: "What are dermal fillers?",
        body: [
          "Dermal fillers are injectable gels based on hyaluronic acid (HA), a substance naturally present in skin. They are formulated to sit within the tissue and provide volume or support directly once injected.",
          "At Kaiteki the ranges are Juvederm, Restylane, Belotero and Art Filler (Laboratoires Fillmed).",
          "Fillers are commonly considered for volume loss in the cheeks or temples, definition of the chin, jawline or nose bridge, static lines such as nasolabial folds and marionette lines, and lip volume and shape.",
        ],
      },
      {
        heading: "How does a hyaluronic acid gel add volume?",
        body: [
          "HA fillers are injected into targeted layers of the skin or the tissue beneath it, where the gel is intended to provide volume or structural support at the treated site.",
          "Formulations differ in thickness and in how they behave in tissue, which is why the doctor matches the product and technique to the area. The effect is present from injection and continues to settle over the following days.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between dermal fillers and bio-stimulators?",
        a: "Dermal fillers are HA gels that provide volume or support once injected. Bio-stimulators work gradually, by supporting the skin's own structural renewal.",
      },
      {
        q: "How long do dermal fillers last?",
        a: "It depends on the product, the area treated and how your body breaks it down. The doctor can say what is realistic for the filler and area being considered.",
      },
      {
        q: "Are dermal fillers reversible?",
        a: "Some HA fillers can, in certain circumstances, be broken down with a dissolving agent. Whether that applies to your product and situation is assessed individually.",
      },
      {
        q: "Do dermal fillers hurt?",
        a: "Most people describe filler injection as briefly uncomfortable rather than painful. Topical numbing may be applied first, and many filler gels contain lidocaine. Lips are generally more sensitive than cheeks.",
      },
      {
        q: "Are dermal fillers safe for Asian skin?",
        a: "Hyaluronic-acid fillers do not use light or heat, so skin tone is not the limiting factor it can be with lasers. Facial anatomy and medical history matter far more, and the doctor assesses both before deciding whether filler is appropriate.",
      },
      {
        q: "What are the warning signs after filler?",
        a: "Sudden pain, skin blanching or any change in vision can signal filler affecting a blood vessel, the most serious recognised risk of any filler. Contact the clinic immediately rather than waiting.",
      },
    ],
  },
  {
    slug: "facial-treatments",
    durationDowntime: "30-60 min · No downtime",
    name: "Facial Treatments",
    category: "Facials",
    image: "https://cdn.kaiteki.my/treatments/facial-treatments/hero.jpg",
    procedureImages: [
      { src: "https://cdn.kaiteki.my/treatments/facial-treatments/procedure-01.jpg", caption: "A therapist uses a suction wand across the patient's cheek during a facial." },
      { src: "https://cdn.kaiteki.my/treatments/facial-treatments/procedure-02.jpg", caption: "A therapist works a facial wand along the jawline." },
      { src: "https://cdn.kaiteki.my/treatments/facial-treatments/procedure-03.jpg", caption: "A therapist guides a facial device over the patient's upper lip area." },
    ],
    summary: "Clinic facials used to support skin cleansing, exfoliation and general skin quality.",
    leadAnswer:
      "Facial Treatments at Kaiteki are clinic-based facials, including Hydrafacial and Silkpeel, that combine cleansing, exfoliation and skin-conditioning steps to support general skin quality. They work at the surface rather than on deeper structural concerns, and a skin assessment decides which one suits you, or whether your skin needs medical treatment instead.",
    related: ["pico-laser", "skin-booster"],
    reviewedBy: "dr-calvin-tan",
    lastReviewed: "2026-07-13",
    seoTitle: "Facial Treatments Malaysia | Hydrafacial, Silkpeel | Kaiteki",
    seoDescription:
      "Clinic facial treatments in Malaysia, including Hydrafacial and Silkpeel, to support skin cleansing and quality. Book a free consultation at Kaiteki.",
    // docs/15 item 4.1 (2026-10-28): the v2 block set, applied under docs/16 R1.
    // Two prose sections kept; the rest became typed blocks and were deleted.
    // Block copy is restructured from reviewed text only: this page and the
    // Hydrafacial and Silkpeel pages. Not energy-based, so no pigment note. No
    // new claim, no figure. The re-arrangement goes to Dr Calvin Tan in the
    // offline review round.
    typicalSessions: "Periodic, as maintenance",
    bringToConsult:
      "Mention your skincare and medical history, especially any known sensitivity to skincare products.",
    avoidIf: [
      { lead: "Active inflamed acne, infection or broken skin", body: "in the area." },
      { lead: "An eczema or rosacea flare, or sunburn.", body: "" },
      { lead: "Straight after a peel, laser or waxing", body: "in the area." },
      { lead: "Recent isotretinoin or strong topical retinoids,", body: "which can mean waiting or adjusting the facial." },
    ],
    sessionSteps: [
      {
        title: "Skin assessment",
        body: "Your first visit starts with an assessment, not a treatment. It confirms which facial suits you, or whether your skin needs medical treatment instead.",
      },
      {
        title: "The facial",
        body: "The skin is cleansed, exfoliated and, depending on the option, given device-based extraction and serum infusion. Sessions are generally comfortable, and most people return to normal activities straight away.",
      },
    ],
    afterSession: {
      intro:
        "Mild, temporary redness can follow some facials and usually settles within a few hours. Uncommonly, a serum causes an irritation reaction. Use sun protection and gentle skincare afterwards.",
      bands: [
        {
          title: "The next day or two",
          body: "Keep skincare gentle, and hold off on strong actives such as retinoids and acids unless advised otherwise.",
        },
      ],
      aftercare: "Use daily sun protection.",
    },
    risks: {
      intro: "Clinic facials are low-risk for most people, but not risk-free.",
      common: "Redness, mild sensitivity or tightness, and small areas of irritation where extraction was firm.",
      lessCommon: "A short-lived breakout as congestion clears, and, uncommonly, a reaction to a serum ingredient.",
      cannotDo: [
        "It works at the surface, not on deeper structural concerns.",
        "It is not a substitute for medical treatment of acne or pigmentation.",
        "Congestion tends to return without a suitable home routine, which is why a facial is maintenance rather than a one-off.",
      ],
      disclose: "Tell the clinician about your current products, any past reactions and any recent isotretinoin.",
    },
    costFactors: {
      intro:
        "Cost depends on which facial is chosen and what is added to it, so it is confirmed once that is settled.",
      factors: [
        "Which facial is chosen, and the steps included.",
        "Add-ons such as serum boosters, extractions, masking or LED.",
        "Whether areas beyond the face are treated.",
        "How often you choose to come in.",
      ],
    },
    sections: [
      {
        heading: "What are Facial Treatments?",
        body: [
          "Facial Treatments are clinic-based procedures that combine cleansing, exfoliation and skin-conditioning steps in a single session, generally with gentler technology than laser or energy-based devices. At Kaiteki this category includes Hydrafacial and Silkpeel.",
          "They are typically considered for congested pores, dull or uneven-looking tone and general hydration, as routine maintenance or between other treatments.",
        ],
      },
      {
        heading: "How do Hydrafacial and Silkpeel work?",
        body: [
          "Hydrafacial uses a device-based process that cleanses, exfoliates and extracts debris from pores before infusing serums suited to the skin. Silkpeel combines exfoliation with simultaneous infusion of topical solutions.",
          "Both aim to clear surface build-up, refine texture and support hydration rather than treat deeper structural concerns.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between Hydrafacial and Silkpeel?",
        a: "Both combine exfoliation with serum infusion, but they use different device technology and formulations. The clinician advises which suits your skin.",
      },
      {
        q: "Can facials replace treatments like Pico laser or skin boosters?",
        a: "No. Facials address surface skin quality; lasers and injectables work at a different level, for more specific concerns. A facial can sit alongside them in a wider plan.",
      },
      {
        q: "How often should I get a facial?",
        a: "There is no single frequency that suits everyone. Facials are booked periodically as maintenance, at an interval set by your skin and goals.",
      },
      {
        q: "Is a clinic facial suitable for sensitive skin?",
        a: "Often yes, because suction, exfoliation and solutions can all be turned down, and no light or laser energy is involved. It is deferred during an eczema or rosacea flare, over broken skin, or soon after a peel, laser or waxing.",
      },
      {
        q: "Can a facial clear blackheads and clogged pores?",
        a: "Extraction after exfoliation is commonly used for congestion and blackheads, but congestion tends to return without a suitable home routine. If it is really inflammatory acne, the doctor may recommend medical treatment instead.",
      },
    ],
  },
  {
    slug: "laser-hair-removal",
    durationDowntime: "15-45 min · No downtime",
    name: "Laser Hair Removal",
    category: "Hair Removal",
    image: "https://cdn.kaiteki.my/treatments/laser-hair-removal/hero.jpg",
    procedureImages: [
      { src: "https://cdn.kaiteki.my/treatments/laser-hair-removal/procedure-01.jpg", caption: "A practitioner glides the laser handpiece along the patient's forearm." },
    ],
    summary: "IPL and radiofrequency technology used to reduce unwanted hair over a course of sessions.",
    leadAnswer:
      "Laser Hair Removal at Kaiteki uses the Alma platform, which combines IPL (intense pulsed light) with radiofrequency, to target hair follicles over a course of sessions. Hair colour, skin tone and the cause of the growth decide what a course can reasonably do, so suitability is assessed before any treatment.",
    related: ["exosome-therapy"],
    reviewedBy: "dr-lucas-chew",
    lastReviewed: "2026-07-13",
    seoTitle: "Laser Hair Removal Malaysia | IPL & RF Treatment | Kaiteki",
    seoDescription:
      "Laser hair removal in Malaysia using IPL and radiofrequency over a course of sessions. Book a free consultation with a Kaiteki doctor to assess suitability.",
    // docs/15 item 3.6 (2026-10-11): the v2 block set, applied under docs/16 R1.
    // Two prose sections kept; the rest became typed blocks and were deleted.
    // Block copy is restructured from reviewed text only: this page, the Alma page,
    // (no concern page links to it, so there is no routing block). No new claim, no figure. The
    // re-arrangement goes to Dr Lucas Chew in the offline review round, which is why
    // `lastReviewed` is unchanged.
    typicalSessions: "A course, spaced with the growth cycle",
    facts: [
      { value: "IPL and radiofrequency", label: "Two energies on the Alma platform" },
      { value: "15–45 minutes", label: "Typical session, depending on the area" },
      { value: "Assessment first", label: "Your first visit is a consultation, not a treatment" },
    ],

    ctaMid: {
      heading: "Not sure whether your hair and skin suit light-based removal?",
      body: "A doctor can tell you what a course can realistically do for your hair and skin before you commit.",
    },

    // T-09 — this page and the Alma page.
    avoidIf: [
      { lead: "Pregnancy.", body: "Treatment is deferred." },
      { lead: "Recently tanned or sunburnt skin.", body: "" },
      { lead: "Tattoos or permanent makeup", body: "in the area to be treated." },
      { lead: "Active infection, inflammation or open skin", body: "in the area." },
      {
        lead: "Light-sensitive conditions, keloid scarring, or photosensitising medication,",
        body: "which your clinician goes through with you.",
      },
    ],
    bringToConsult:
      "Hormonal causes of excess hair may need investigating alongside treatment.",

    // T-10 — step 1 states the first visit is not a treatment.
    sessionSteps: [
      {
        title: "Consultation and assessment",
        body: "Your first visit is a consultation, not a treatment. The treatment area, hair type and skin tone are assessed, and a test area may be considered first.",
      },
      {
        title: "The treatment",
        body: "The area is cleansed and the cooled applicator is moved over it in repeated passes, building warmth gradually.",
      },
    ],

    // T-11 — physical recovery only.
    afterSession: {
      intro: "Downtime is usually minimal.",
      bands: [
        {
          title: "Straight afterwards",
          body: "Temporary redness, warmth or mild sensitivity in the treated area can occur and typically settles within a few hours to a day.",
        },
        {
          title: "The following weeks",
          body: "Treated hairs may appear to grow out for a week or two before shedding.",
        },
        {
          title: "Between sessions",
          body: "You can shave, but waxing, plucking, threading and depilatory creams are normally avoided because they remove the follicle contents the light needs to target.",
        },
      ],
      aftercare:
        "Protect treated areas from the sun between sessions.",
    },

    // T-12
    risks: {
      intro:
        "Like any energy-based treatment, it carries risks, which are explained before a course is booked.",
      common: "Redness, swelling or changes in pigmentation.",
      lessCommon:
        "Blistering, burns, folliculitis and, rarely, paradoxical stimulation of fine hair in some areas.",
      pigmentNote:
        "Light-based hair removal generally works best where there is more contrast between hair and skin pigment. Alma describes its low-fluence, high-repetition delivery with a cooled applicator tip as usable on darker skin, but recently tanned skin is generally not treated.",
      cannotDo: [
        "It is not permanent removal.",
        "One session cannot do it, because only follicles in their active growth phase respond to any one session.",
        "Very light, grey or white hair contains little pigment for light to target on any platform.",
      ],
      disclose:
        "Tell your clinician about every medication you take.",
    },

    // T-13 — factors only, no figures (settled 2026-09-20).
    costFactors: {
      intro:
        "Courses are priced by area across a series, not per visit, and the series is set at consultation. What moves it:",
      factors: [
        "Your hair type: colour, thickness and density.",
        "How your hair responds across the course.",
        "Whether maintenance sessions are needed afterwards.",
      ],
    },

    relatedReasons: {
      "exosome-therapy":
        "A regenerative preparation applied to the scalp alongside medical hair-loss treatment: for hair loss, not unwanted hair.",
    },

    sections: [
      {
        heading: "What is Laser Hair Removal?",
        body: [
          "Laser Hair Removal is a treatment intended to reduce unwanted hair by targeting the hair follicle with light or energy-based technology.",
          "It is generally considered for areas such as the underarms, legs, arms or face.",
        ],
      },
      {
        heading: "Why does hair removal need a course of sessions?",
        body: [
          "The light is intended to be absorbed by pigment in the hair follicle, and the radiofrequency adds a second energy pathway to the follicle.",
          "Follicles cycle through active and resting phases, and a session only affects those in an active growth phase at the time. A course spaced with that cycle is intended to reach more of them.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many sessions will I need?",
        a: "A course of several sessions spaced a few weeks apart is common. The number depends on your hair type and the area.",
      },
      {
        q: "Is Laser Hair Removal permanent?",
        a: "No. It reduces hair over a course of sessions, and some regrowth or maintenance sessions may be needed over time.",
      },
      {
        q: "Is it suitable for all skin tones and hair colours?",
        a: "Not all. Very light, grey or white hair has little pigment to target, and recently tanned skin is generally not treated.",
      },
      {
        q: "Can I shave between laser hair removal sessions?",
        a: "Yes. Shaving is fine, but waxing, plucking, threading and depilatory creams are normally avoided between sessions, because they remove the follicle contents the light needs to target.",
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
