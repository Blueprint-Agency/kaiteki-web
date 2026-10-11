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
    image: "/images/treatments/pico-laser.jpg",
    device: "PicoSure",
    summary:
      "A picosecond laser used for pigmentation, dull skin tone and tattoo removal, suited to a range of Asian skin tones.",
    // T-01 "In brief" — leads with the page's key distinction inside 60 words
    // (pico is a category, wavelength decides suitability), not a definition.
    leadAnswer:
      "Pico laser is a category of laser rather than a single machine. Every pico device fires pulses measured in trillionths of a second, but they differ in wavelength, and wavelength is what determines which pigment, which ink colours and which skin tones a device is appropriate for. Kaiteki uses more than one pico platform for that reason. A doctor examines your skin and decides which, if any, is suitable before anything is booked.",

    // T-02 — process facts only. A time-to-result here would be an outcome
    // claim (R-01) and is medically wrong for melasma regardless.
    facts: [
      { value: "2 pico platforms", label: "Matched to your skin type and pigment at consultation" },
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
        body: "Sun spots, freckles and other benign pigmented marks sitting in the upper skin. These are generally the most predictable pigment to treat and usually need the fewest sessions.",
        links: [{ href: "/concerns/pigmentation", label: "Read about pigmentation" }],
      },
      {
        title: "Deeper and hormonal pigment",
        body: "Melasma, and dermal pigment conditions such as naevus of Ota or Hori's naevus. These sit deeper, respond less predictably, and melasma in particular is a long-term condition managed rather than finished.",
        links: [{ href: "/concerns/pigmentation", label: "Read about pigmentation" }],
      },
      {
        title: "Post-acne marks and tone",
        body: "Brown marks left behind after spots have settled, along with dull or uneven overall tone and the look of enlarged pores. Active acne is managed medically first; see below.",
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
    routesNote:
      "An honest note on acne. Pico laser addresses the marks acne leaves behind, not acne itself. If you have active inflammatory spots, those are usually managed medically first, and pigment work follows once the skin has settled. A doctor will tell you if that is the sequence in your case.",

    // T-07 — a factual difference in energy delivery, never a ranking (R-02).
    variantModule: {
      heading: "Which pico device, and why it matters",
      intro:
        "Both platforms below fire picosecond pulses, but their primary wavelengths differ, and wavelength changes how strongly the pulse is absorbed by melanin. That is a factual difference in how each device delivers energy, not a ranking. Which one suits you, if any, is decided by your doctor after examining your skin.",
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
          body: "Built around the longer 1064nm Nd:YAG wavelength, which interacts less with surface melanin and travels deeper. Often the platform of choice where skin tone or depth of pigment makes a 755nm pass less appropriate.",
          href: "/technology/fotona-pqx",
          hrefLabel: "About Fotona PQX",
        },
      ],
      note: "This is the reason Kaiteki runs more than one pico platform. A clinic with a single device can only offer that device's wavelength; having more than one means the device is matched to your skin rather than your skin being matched to the device.",
    },

    // T-08 — placed at the point of maximum unanswered question.
    ctaMid: {
      heading: "Not sure which applies to you?",
      body: "A doctor can look at your skin, tell you which type of pigment you have, and say honestly whether a pico laser is the right tool for it. Free consultation, no obligation.",
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
        body: "including oral isotretinoin. Bring your current list rather than trying to recall it.",
      },
      { lead: "Recent lasers, peels or other procedures", body: "on the same area." },
    ],
    bringToConsult:
      "Bring your full medical, medication and skincare history to the consultation, including any previous laser or peel treatments and any tendency to darken after a spot or a scratch. That last detail changes the settings a doctor will choose.",

    // T-10 — step 1 states the first visit is not a treatment.
    sessionSteps: [
      {
        title: "Consultation and skin assessment",
        body: "Your first visit is a doctor consultation, not a treatment. The doctor examines the area, takes your history, and explains whether a pico laser is appropriate. Sometimes the answer is a different treatment, or waiting.",
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
        body: "A cooling or soothing step, sunscreen, and aftercare instructions specific to the area treated. A facial pigment appointment is usually around 20 to 40 minutes including preparation; tattoo work depends on size.",
      },
    ],

    // T-11 — physical healing timeframes only, never a timeframe to a result.
    afterSession: {
      intro:
        "Downtime after a pico laser is usually short, but “short” is not “none”, and what you see in the first fortnight is part of the process rather than a problem. This varies with the intensity used and between individuals.",
      bands: [
        {
          title: "The first few hours",
          body: "Mild redness, warmth and sometimes slight swelling. Most people go back to their day.",
        },
        {
          title: "Day one to two",
          body: "Redness typically settles. Where pigment was targeted directly, treated spots often look darker than before. This is expected and not a sign the treatment has gone wrong.",
        },
        {
          title: "Day three to roughly two weeks",
          body: "Small darkened flecks or fine crusting may appear and then flake away on their own. Leave them alone; picking is the most common cause of a mark that outlasts the treatment.",
        },
        {
          title: "Between sessions",
          body: "Sessions are spaced a few weeks apart to let the skin clear treated pigment before the next pass.",
        },
      ],
      aftercare:
        "Aftercare that actually matters: daily broad-spectrum sunscreen and genuine sun avoidance, because sun exposure between sessions is one of the main reasons pigment returns; gentle cleansing and moisturising; and pausing actives such as retinoids and acids until your doctor confirms it is fine to resume.",
    },

    // T-12 — the pigment-change note is mandatory on energy-based treatments (R-05).
    risks: {
      intro:
        "As with any medical laser procedure, a pico laser carries risks. These are explained to you in full at consultation, before anything is booked.",
      common:
        "Redness, warmth, mild swelling, pinpoint bruising and small crusts that flake away over one to two weeks.",
      lessCommon:
        "Darkening of the treated skin after treatment (post-inflammatory hyperpigmentation), lightening of the treated skin, blistering and, rarely, scarring.",
      pigmentNote:
        "Post-inflammatory hyperpigmentation is the risk that matters most in the skin tones common here. Skin with more melanin responds to injury by producing more pigment, which means an over-aggressive laser setting can leave a darker mark than the one it was aimed at. This is why a doctor may choose lower energy, a longer interval between sessions, a test patch, or a different wavelength than you were expecting, and why a plan that looks slower is often the safer one. It is a deliberate trade-off, not caution for its own sake.",
      cannotDo: [
        "It does not stop new pigment forming. Without daily sun protection, sun-related marks return, and melasma in particular fluctuates with sun exposure and hormones, so it is managed long-term rather than finished in a fixed course.",
        "It does not treat active acne. Marks left behind, yes; the inflammatory condition itself is managed medically.",
        "It cannot guarantee complete clearance of a tattoo. Ink composition is rarely known with certainty, and some colours respond poorly.",
        "It does not lift or tighten skin. That is a different category of treatment entirely.",
      ],
      disclose:
        "Tell your doctor if you are or may be pregnant or breastfeeding, are taking any medication, have a history of cold sores or keloid scarring, have had recent procedures on the area, or have been in strong sun recently.",
    },

    // T-13 — factors only, no figures (R-03). A list so it can become a price
    // table later without a rebuild.
    costFactors: {
      intro:
        "There is no single course length that fits everyone, and Kaiteki does not quote prices online. The figure you are given at consultation reflects the plan actually assessed for you rather than an average. What moves it:",
      factors: [
        "Type and depth of pigment. Surface sun spots generally need fewer visits than deeper dermal pigment.",
        "Size of the area treated, whether a few spots, a full face, or a body area.",
        "Which device and settings your doctor selects for your skin type.",
        "For tattoos: ink colours, density, how many layers were applied, the age of the tattoo and where it sits on the body.",
        "How your skin responds between sessions, which is reviewed each visit.",
        "Whether pico work is combined with other steps in a wider plan.",
      ],
      outro:
        "Facial pigment is commonly planned as a course of several sessions spaced a few weeks apart, with the plan reviewed as it goes. Some conditions, melasma among them, are managed on an ongoing basis rather than completed in a fixed number of visits.",
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
    // Four figure candidates, one slot: this page carries two prose sections,
    // so Q-23 allows floor(2 / 2) = 1. The device photograph is the one kept —
    // `lasers`, `pro-yellow-laser-2` and `premium-laser` are generic handpiece
    // stock and none of them names the platform. They re-enter when the body
    // grows; this is a section-count problem, not a media one.
    figures: [
      {
        src: "https://cdn.kaiteki.my/treatments/pico-laser/picosure.jpg",
        caption: "A PicoSure handpiece held against the cheek during a session.",
      },
      // `lasers.jpg` is a second usable session photograph, held out rather
      // than authored: pico-laser runs only two prose sections, and Variant A
      // renders floor(sections / 2) = 1 figure. A second one would be dropped
      // silently (Q-23). It lands the moment a third section is written.
    ],
    sections: [
      {
        // T-04 — para 2 is what earns the snippet / AI-answer citation.
        heading: "What is Pico laser?",
        body: [
          "“Pico” refers to the length of the laser pulse, not to a brand. A picosecond is a trillionth of a second, and pulses that short deliver their energy faster than the surrounding skin can heat up. The effect on pigment is therefore largely photomechanical (a rapid shockwave that fractures pigment clusters) rather than thermal.",
          "That matters because heat is what tends to provoke pigment problems in the skin tones common in Malaysia. It is the reason picosecond devices are widely used here for pigment work. It is not, however, a guarantee of suitability: what actually determines whether a pico laser is appropriate for you is the type and depth of your pigment, your skin type, and your history of marking after inflammation. A doctor assesses all three before recommending anything.",
        ],
      },
      {
        // T-05
        heading: "How it works",
        body: [
          "The pulse is absorbed by pigment far more strongly than by the surrounding skin. Because it arrives and ends in trillionths of a second, the pigment particle takes the energy as a mechanical shock and breaks into smaller fragments. Those fragments are then cleared gradually by the body's own immune cells over the weeks that follow, which is why the visible change after a pico session develops over time rather than appearing on the day.",
          "Delivered at lower energy with a diffractive lens, the same pulse creates small zones of controlled injury in the upper skin without breaking the surface, which is used as a skin-renewal pass for texture and tone rather than for a specific mark. Wavelength, energy, spot size and lens are all selected by the treating doctor for your skin and your concern; they are not fixed settings.",
        ],
      },
    ],
    // T-16 — 10 at Full depth, 60–90 words each. Required mix: device
    // comparison, pain, session count, post-session timeline, expectations,
    // local skin tones, cost-without-a-price, then practical.
    faqs: [
      {
        q: "What is the difference between PicoSure and Fotona PQX?",
        a: "Both are picosecond lasers, but their primary wavelengths differ. PicoSure's main wavelength is 755nm, which is absorbed strongly by melanin and is useful for certain pigment and ink colours, though it makes skin tone a bigger factor in the settings chosen. Fotona PQX is built around the longer 1064nm wavelength, which interacts less with surface melanin and travels deeper. Your doctor may use one, the other, or both across a plan, decided after examining your skin.",
      },
      {
        q: "Does Pico laser hurt?",
        a: "Most people describe brief snapping or hot-pinprick sensations during the pulses rather than sustained pain, and picosecond pulses are generally reported as more tolerable than older longer-pulse lasers. Comfort varies between individuals and with the area treated. Topical numbing can be applied where your doctor considers it appropriate, particularly for sensitive areas and tattoo work. Tell the team during the session if anything is uncomfortable, as settings and pacing can be adjusted.",
      },
      {
        q: "How many sessions will I need?",
        a: "It depends on the type and depth of pigment, the size of the area, and how your skin responds between visits. Surface sun spots generally need fewer sessions than deeper dermal pigment or a dense tattoo. Facial pigment is commonly planned as a course of several sessions spaced a few weeks apart, reviewed as it goes. Some conditions, melasma among them, are managed on an ongoing basis rather than completed in a fixed number of visits.",
      },
      {
        q: "What happens in the days after a session?",
        a: "Expect mild redness and warmth for a few hours, sometimes with slight swelling. Where pigment was targeted directly, the treated spots often look darker over the first day or two, which is expected. Small darkened flecks or fine crusting may then appear and flake away on their own over roughly one to two weeks. Leave them alone rather than picking, keep skincare gentle, and use sunscreen daily.",
      },
      {
        q: "Will I see a difference after one session?",
        a: "It varies, and a single session is not a reliable guide to how a course will go. Because the fragmented pigment is cleared gradually by your own body, change develops over the weeks after each session rather than on the day. Deeper pigment typically needs more sessions than surface marks. Your doctor will tell you what is realistic for your particular pigment before you commit to anything, and will review progress at each visit.",
      },
      {
        q: "Is Pico laser suitable for darker Malaysian skin tones?",
        a: "Picosecond lasers are used across a wide range of skin tones, but skin with more melanin carries a higher risk of darkening after treatment, so settings, wavelength and intervals are chosen more conservatively and a test patch is often used. A 755nm wavelength interacts more with melanin than a 1064nm one, which is one reason Kaiteki runs more than one platform. Your doctor assesses your skin type and marking history and will say honestly if another approach suits you better.",
      },
      {
        q: "Can Pico laser treat melasma?",
        a: "Melasma is sometimes addressed with picosecond lasers, but it needs particular caution. It is a chronic condition influenced by sun exposure and hormones, it can recur, and over-aggressive treatment can make it worse rather than better. That is why melasma is usually managed as an ongoing plan combining sun protection, topical care and conservative in-clinic settings rather than treated as a fixed course. A doctor assesses whether any laser is appropriate for your melasma at all.",
      },
      {
        q: "Can a tattoo be completely removed?",
        a: "It cannot be predicted before assessment. Black and dark blue inks generally respond most predictably, while light colours, white, and some cosmetic or permanent-makeup pigments can be resistant or behave unpredictably. Ink composition is rarely known with certainty, so a doctor assesses the tattoo directly and may treat a small test area first. Size, depth, age and body location all affect how a tattoo responds and how many sessions it needs.",
      },
      {
        q: "How much does Pico laser cost in Malaysia?",
        a: "Kaiteki does not quote prices online, because the cost depends on what is actually being treated: the type and depth of pigment, the size of the area, the device and settings chosen, the number of sessions, and whether pico work forms part of a wider plan. For tattoos, ink colours and density matter too. Pricing is discussed at consultation so the figure reflects your assessed plan rather than an average.",
      },
      {
        q: "Can I wear makeup or go back to work afterwards?",
        a: "Most people return to their usual day straight after a facial pigment session. Redness typically settles within a few hours to a day or two. Your doctor will advise when makeup can be reapplied, which is usually once any redness has settled and always over intact skin, so avoid applying it over crusting. Daily sunscreen matters more than makeup timing, since sun exposure between sessions is a common reason pigment returns.",
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
    image: "/images/treatments/hifu.jpg",
    device: "HIFU",
    typicalSessions: "1 to a few, with review",
    summary: "Focused ultrasound used for non-surgical skin-lifting and tightening concerns.",
    leadAnswer:
      "HIFU (high-intensity focused ultrasound) is a non-surgical treatment that delivers focused ultrasound energy to deeper skin layers. It is commonly used for skin-lifting and tightening concerns. How much laxity there is, and how deep it sits, is what decides whether it applies to you at all — so a doctor examines your face before any plan is made.",

    // docs/15 item 1.4 (2026-09-24): the v2 block set, applied under docs/16 R1.
    // Seven shared prose sections became typed blocks and were deleted. Every
    // clinical line below is restructured from copy that already carries a
    // named reviewer: this page's own sections, the Ultracel Q and Lifthera
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
        body: "Early to moderate laxity in the lower face and along the jawline, and loss of definition under the chin. This is the pattern focused ultrasound is most often considered for.",
        links: [
          { href: "/concerns/face-lifting", label: "Read about face lifting" },
          { href: "/concerns/face-contouring", label: "Face contouring" },
        ],
      },
      {
        title: "Firmness and fine lines with age",
        body: "Loss of firmness associated with reduced collagen, crepey or loose-feeling skin on the neck, and an overall loss of tone. Usually part of a longer-term maintenance plan rather than a single fix.",
        links: [
          { href: "/concerns/aging", label: "Read about ageing skin" },
          { href: "/concerns/fine-lines-wrinkles", label: "Fine lines & wrinkles" },
        ],
      },
    ],
    routesNote:
      "Laxity, volume loss and skin quality look alike in the mirror and are treated differently. Focused ultrasound addresses laxity. It does not replace lost volume, relax movement lines or improve skin quality, so plans often combine it with other treatments.",

    // T-07 — the two HIFU platforms Kaiteki runs, told apart by how each
    // delivers energy. A factual difference, never a ranking (R-02).
    variantModule: {
      heading: "Ultracel Q or Lifthera: which HIFU device, and why",
      intro:
        "Both devices focus ultrasound to a depth beneath the skin surface so that heating happens in a chosen deeper layer while the surface is largely spared. They differ in how that energy is shaped, which is why a doctor chooses between them for your face rather than using one for everyone.",
      items: [
        {
          eyebrow: "Cartridge-based · Jeisys Medical",
          title: "Ultracel Q",
          body: "The doctor changes cartridges to change the focal depth, so the same platform can be aimed at the dermis, the deeper SMAS layer or the fat layer, with the energy focused either as a dot or along a line. The compact tip is designed to reach contours such as the jawline and under the chin.",
          href: "/technology/ultracel-q",
          hrefLabel: "About Ultracel Q",
        },
        {
          eyebrow: "Line-focused · Asterasys",
          title: "Lifthera",
          body: "Draws the focus along a continuous line rather than a row of separate dots, which the manufacturer links to reduced discomfort. A pen-type applicator reaches smaller, curved areas such as around the eyes, the nasolabial region and along the jaw.",
          href: "/technology/lifthera",
          hrefLabel: "About Lifthera",
        },
      ],
      note: "Neither device includes on-screen imaging of the tissue layers. Where the doctor wants to see those layers before placing energy, the separate Ultherapy platform is the one used.",
    },

    ctaMid: {
      heading: "Not sure whether lifting is what your face needs?",
      body: "Laxity, volume loss and skin quality look similar in the mirror and are treated differently. A doctor can tell you which one you are actually seeing, and whether HIFU addresses it. Free consultation, no obligation.",
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
        lead: "Certain medications and medical conditions,",
        body: "which your doctor goes through with you at consultation.",
      },
    ],
    bringToConsult:
      "Bring your full medical history, a list of your medications and every previous aesthetic treatment. Implants and devices in the treatment field are the ones people most often forget to mention, and they matter here.",

    // T-10 — step 1 states the first visit is not a treatment.
    sessionSteps: [
      {
        title: "Consultation and assessment",
        body: "Your first visit is a consultation, not a treatment. The doctor examines where your laxity actually sits and decides whether there is enough of it for focused ultrasound to be worth doing, and which device suits the areas involved.",
      },
      {
        title: "Mapping and preparation",
        body: "The skin is cleansed, the treatment areas are marked so the energy is mapped rather than applied uniformly, and ultrasound coupling gel is applied. Topical numbing may be used depending on the area.",
      },
      {
        title: "The treatment lines",
        body: "The doctor delivers the energy line by line with the selected cartridges. Most people describe brief warmth, prickling or a deep tapping with each pulse rather than continuous pain, felt more over bony areas such as the jaw and forehead. Settings can be adjusted if it is uncomfortable.",
      },
      {
        title: "Afterwards",
        body: "The gel is removed and you are given aftercare advice. Most people return to normal activities the same day.",
      },
    ],

    // T-11 — physical recovery only, never a timeframe to a result.
    afterSession: {
      intro:
        "HIFU is usually associated with little to no downtime, though this varies between individuals. Nothing needs to heal on the surface, because the energy is placed beneath it.",
      bands: [
        {
          title: "Straight afterwards",
          body: "Mild redness and slight swelling in the treated area can occur. Most people carry on with their day.",
        },
        {
          title: "The first few days",
          body: "Tenderness to touch, or a temporary feeling of firmness in the treated area, generally settles on its own over a few days.",
        },
        {
          title: "The following weeks and months",
          body: "The collagen response continues gradually, so any change develops over weeks to a few months rather than on the day, and it varies considerably between individuals. Plans often include a review once enough time has passed to judge it.",
        },
      ],
      aftercare:
        "Gentle skincare and daily sun protection afterwards. Your doctor may ask you to avoid intense heat such as saunas or hot yoga for a short period, and will give aftercare guidance specific to your plan.",
    },

    // T-12
    risks: {
      intro:
        "As with any medical procedure, HIFU carries risks. These are explained to you in full at consultation, before anything is booked.",
      common:
        "Redness, swelling, tenderness, small areas of bruising, and transient numbness or tingling in the treated area.",
      lessCommon:
        "Welts, and temporary nerve-related effects such as localised muscle weakness, have been reported with focused-ultrasound treatments. Serious effects are uncommon when the treatment is appropriately selected, correctly mapped and performed by a trained doctor.",
      pigmentNote:
        "Focused ultrasound is absorbed by tissue rather than by melanin, so HIFU is generally used across a wide range of skin tones, including deeper Asian skin, without the pigment considerations that apply to some lasers. The risk that matters here is a different one: energy delivered deep into tissue by a poorly calibrated device or an untrained operator can cause burns, unwanted fat loss or nerve injury. That is why the specific named device, and a doctor delivering it, matter more than the word HIFU on a price list.",
      cannotDo: [
        "It is not a facelift. It does not cut, lift or remove skin, and the degree of change is not comparable to surgery. Significant, heavy sagging is often better discussed as a surgical question, and your doctor will say so honestly.",
        "It does not replace lost volume, relax lines caused by muscle movement, or treat surface texture and pigment.",
        "It is not permanent. Skin continues to age after any tightening treatment, which is why plans include review and occasional maintenance.",
      ],
      disclose:
        "Tell your doctor if you are or may be pregnant or breastfeeding, have implants, metallic or cardiac devices or recent dermal fillers in the treatment area, have a tendency to keloid scarring, take any medication, or have had previous energy-based treatments.",
    },

    // T-13 — factors only, no figures (settled 2026-09-20).
    costFactors: {
      intro:
        "Kaiteki does not quote prices online, because what a HIFU plan involves is decided by examining your face. What moves it:",
      factors: [
        "The areas treated. A jawline-and-neck plan is a different amount of work from a full face and neck.",
        "The number of shots or lines delivered across those areas.",
        "Which device and cartridges your plan needs.",
        "Whether the plan is a single session with a review, or a short course.",
        "Whether HIFU is combined with another treatment in a wider plan.",
      ],
      outro:
        "HIFU is often planned as a single session with a review some months later, or as a small number of sessions spaced over time, with occasional maintenance afterwards. Your doctor sets out what is realistic for your face.",
    },

    // Factual rows only. Downtime is each treatment's own `durationDowntime`.
    comparisons: [
      {
        name: "HIFU",
        bestFor: "Early to moderate laxity along the jaw, lower face and neck",
        downtime: "None for most people",
      },
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
      {
        name: "Skin booster",
        bestFor: "Skin quality and hydration rather than laxity",
        downtime: "1-2 days",
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
    figures: [
      {
        src: "https://cdn.kaiteki.my/treatments/hifu/hifu.jpg",
        caption: "An ultrasound handpiece held along the jaw and under the chin during a session.",
      },
    ],
    sections: [
      {
        heading: "What is HIFU?",
        body: [
          "HIFU stands for high-intensity focused ultrasound. It is a non-surgical, energy-based treatment that directs focused ultrasound to targeted depths beneath the skin's surface, without cutting or incisions.",
          "At Kaiteki, HIFU is commonly considered for skin-lifting and tightening concerns on the face and neck. Whether it suits you depends on your concern, skin and medical history, which a doctor assesses during consultation.",
        ],
      },
      {
        heading: "How does HIFU reach the layer a facelift works on?",
        body: [
          "HIFU concentrates ultrasound energy at set depths beneath the surface, including the deeper support layer sometimes called the SMAS (superficial muscular aponeurotic system). That is the same layer a surgical facelift addresses, though focused ultrasound reaches it without incisions. The energy creates small, controlled points of heat at those depths while the skin surface is largely spared, which is why there is no wound to heal.",
          "That controlled heating is what prompts the body's repair response, and over the following weeks the skin produces fresh collagen in the treated zones. Because the mechanism is a collagen response rather than a mechanical tightening, any change develops gradually and varies between individuals. The treating doctor selects the device, depth and settings for your face and the area being addressed.",
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
      {
        q: "Does HIFU hurt?",
        a: "Most people describe brief warmth, prickling or a deep tapping with each pulse rather than sustained pain, and it is usually felt more over bony areas such as the jaw and forehead. Topical numbing and adjusted settings can be used to keep it tolerable. Tell your doctor how you are finding it during the session so the settings can be adapted.",
      },
      {
        q: "Are HIFU results permanent?",
        a: "No. Skin continues to age after any tightening treatment, so any change is not permanent and varies between individuals. Many plans include a review some months later and occasional maintenance rather than a single one-off treatment. Your doctor will explain a realistic timeline for your skin at consultation.",
      },
      {
        q: "Is cheap HIFU safe?",
        a: "Very low-priced HIFU, particularly in non-medical settings, is where the real risk sits. Focused ultrasound delivers energy deep into tissue, and a poorly calibrated device or an untrained operator can cause burns, unwanted fat loss or nerve injury. Choose a clinic that names its device, uses one registered with Malaysia's Medical Device Authority, and has a registered doctor delivering the treatment.",
      },
    ],
  },
  {
    slug: "ultherapy",
    durationDowntime: "60-90 min · No downtime",
    name: "Ultherapy",
    category: "Lifting & Tightening",
    image: "/images/treatments/ultherapy.jpg",
    device: "Ultherapy",
    summary: "A focused-ultrasound platform used for lifting and tightening of the face and neck.",
    leadAnswer: "Ultherapy is a focused-ultrasound treatment used for non-surgical lifting and tightening of areas such as the brow, chin and neck. It works at set depths within the skin, and the platform's own ultrasound imaging lets the doctor see those depths before energy is delivered — the practical difference from other focused-ultrasound devices. Whether it suits you is still decided at consultation.",
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
        body: "The same principle as HIFU, with real-time imaging so the doctor can see the tissue layers as energy is delivered. Relevant where precision at depth matters, or where anatomy makes blind delivery less appropriate.",
        links: [
          { href: "/concerns/face-lifting", label: "Read about face lifting" },
          { href: "/concerns/aging", label: "Ageing skin" },
        ],
      },
      {
        title: "Lifting that softens the fold above it",
        body: "Relevant where the doctor wants to see the tissue planes while treating, particularly around the brow and lower face.",
        links: [{ href: "/concerns/fine-lines-wrinkles", label: "Fine lines & wrinkles" }],
      },
    ],
    routesNote:
      "Laxity, volume loss and skin quality look alike in the mirror and are treated differently. Focused ultrasound addresses laxity. It does not replace lost volume, relax movement lines or improve skin quality, so plans often combine it with other treatments.",

    // T-07 — imaging is the one factual difference; never a ranking (R-02).
    variantModule: {
      heading: "Ultherapy or HIFU: what the imaging changes",
      intro:
        "Both focus ultrasound energy at a depth beneath the skin, so mechanically they belong to the same family. The distinction is whether the doctor sees the tissue layers on screen before delivering energy, or selects the depth from assessment alone.",
      items: [
        {
          eyebrow: "Imaging-guided · Merz Aesthetics",
          title: "Ultherapy",
          body: "The same transducer that delivers energy also produces a live ultrasound image of the tissue beneath it, which the manufacturer calls DeepSEE imaging. Transducers treat at three depths, approximately 1.5 mm, 3.0 mm and 4.5 mm at the level of the SMAS fascia, chosen per area after viewing the anatomy.",
          href: "/technology/ultherapy-system",
          hrefLabel: "About the Ultherapy System",
        },
        {
          eyebrow: "Depth set by cartridge · Ultracel Q, Lifthera",
          title: "HIFU",
          body: "Energy is delivered at depths set by the cartridge and the doctor's assessment, without the on-screen view. Depth is chosen per area from the available cartridge depths.",
          href: "/treatments/hifu",
          hrefLabel: "About HIFU",
        },
      ],
      note: "Imaging-free HIFU devices remain widely and appropriately used. Which suits you depends on your anatomy and goals, and your doctor will explain the reasoning at consultation.",
    },

    ctaMid: {
      heading: "Not sure whether Ultherapy or HIFU fits your face?",
      body: "Both address laxity, and they differ in whether the doctor sees the tissue layers while treating. A doctor can tell you whether your laxity is the kind focused ultrasound addresses, and which approach suits your anatomy. Free consultation, no obligation.",
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
        body: "which your doctor weighs with you at consultation.",
      },
    ],
    bringToConsult:
      "Tell your doctor about your medical history, medications and any implants during the consultation so suitability can be assessed properly, along with any previous aesthetic treatments.",

    // T-10 — step 1 states the first visit is not a treatment.
    sessionSteps: [
      {
        title: "Consultation and assessment",
        body: "Your first visit is a consultation, not a treatment. A Kaiteki doctor discusses your concerns, assesses how your laxity is distributed and confirms whether Ultherapy is appropriate.",
      },
      {
        title: "Mapping with imaging",
        body: "The skin is cleansed, treatment zones are marked on a grid and coupling gel is applied. The doctor then uses the ultrasound imaging to map the tissue layers and choose the depth and settings for each area.",
      },
      {
        title: "The treatment lines",
        body: "The doctor places the transducer, checks the tissue image on screen to confirm the plane, and delivers a line of focused pulses, repeated line by line across the mapped area. Most people feel warmth and a tingling or prickling sensation, felt more strongly over bony areas, and comfort measures can be discussed beforehand.",
      },
      {
        title: "Afterwards",
        body: "The doctor finishes with aftercare advice and, where relevant, a follow-up plan. Ultherapy is often planned as a single session with a review a few months later, with maintenance considered periodically rather than on a fixed schedule.",
      },
    ],

    // T-11 — physical recovery only, never a timeframe to a result.
    afterSession: {
      intro:
        "Ultherapy is generally a walk-in, walk-out treatment with little to no set downtime for most people. There is usually no wound and no dressing.",
      bands: [
        {
          title: "Straight afterwards",
          body: "Some people notice mild redness or slight swelling in the treated area for a short period. Most return to normal activities the same day.",
        },
        {
          title: "Days to a few weeks",
          body: "Tenderness to touch, or a temporary firm or lumpy feeling under the skin, can occur and generally settles over days to a few weeks, though this varies between individuals.",
        },
        {
          title: "Weeks to months",
          body: "Ultherapy works by prompting the skin's own gradual collagen-renewal response, so any change tends to develop over weeks to months rather than immediately, and it varies between individuals.",
        },
      ],
      aftercare:
        "The aftercare is short and unglamorous: sun protection, and nothing abrasive on the treated skin for a few days. Your doctor will set out the version that applies to your skin, and the clinic is the right place to take anything that does not settle.",
    },

    // T-12
    risks: {
      intro:
        "As with any energy-based treatment, Ultherapy carries potential side effects. These are explained to you at consultation, before anything is booked.",
      common:
        "Redness, swelling, tenderness, and small areas of numbness or tingling in the treated area, which typically settle over time.",
      lessCommon:
        "Because the energy is delivered at fixed depths, the less common effects are the ones that follow from placing it wrongly: temporary weakness or altered sensation where a nerve runs close to the treatment plane. The imaging step exists to make that less likely, and the doctor will go through it with you before treating.",
      pigmentNote:
        "Micro-focused ultrasound is absorbed by tissue rather than by melanin, so it is generally used across the full range of skin tones, including deeper Asian skin, without the pigment-related risk profile of some lasers.",
      cannotDo: [
        "It is not a facelift. It does not cut or remove skin. It reaches some of the same deeper tissue a surgical facelift addresses, but where surgery would be more appropriate for your concern, your doctor will tell you.",
        "It is generally considered for mild to moderate laxity rather than very advanced sagging.",
        "It addresses laxity and loss of definition, not surface texture or pigment.",
        "It is not permanent. Skin continues to age, so plans often include a review and periodic maintenance.",
      ],
      disclose:
        "Tell your doctor if you are or may be pregnant or breastfeeding, have implants, electronic devices, fillers or threads in the treatment area, have a keloid tendency or bleeding disorder, or take any medication.",
    },

    // T-13 — factors only, no figures (settled 2026-09-20).
    costFactors: {
      intro:
        "Kaiteki does not quote prices online, because cost is set by the lines of energy delivered and over which areas, and those are decided at consultation. What moves it:",
      factors: [
        "The number of lines of energy delivered.",
        "Which areas are treated. A brow-and-jawline plan, a full face and neck, and a décolletage each represent a different amount of energy delivered.",
        "The number of sessions and any maintenance cadence, planned with your doctor rather than set in advance.",
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
        name: "HIFU",
        bestFor: "Early to moderate laxity along the jaw, lower face and neck",
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
      hifu: "The same focused-ultrasound principle on devices without on-screen imaging, with the depth set by cartridge and assessment.",
      "fotona-4d":
        "A multi-mode laser protocol generally considered for firmness and skin-quality concerns, a different mechanism from focused ultrasound.",
    },

    sections: [
      {
        heading: "What is Ultherapy?",
        body: [
          "Ultherapy is a non-surgical treatment that uses focused ultrasound energy to reach set depths within the skin and the tissue beneath it. It is one of the platforms Kaiteki uses for lifting and tightening concerns on the face and neck, and is carried out by a doctor.",
          "A distinguishing feature of the Ultherapy platform is that it pairs ultrasound imaging with the treatment, so the doctor can view the layers of tissue on screen before energy is delivered. It is a treatment, not a surgical facelift, and it does not remove or cut skin.",
        ],
      },
      {
        heading: "How does Ultherapy see the layer it treats?",
        body: [
          "Ultherapy delivers focused ultrasound energy to specific depths, including the deeper support layer of the face sometimes referred to as the SMAS layer. This is the same layer that a surgical facelift addresses, though Ultherapy reaches it non-surgically rather than through incisions.",
          "The energy creates controlled points of heat at those depths, which is intended to prompt the skin's own gradual collagen-renewal response. Because this response builds over time, any change tends to develop gradually over weeks to months and varies between individuals.",
          "Before energy is delivered, the doctor uses the built-in ultrasound imaging to map the tissue layers and choose the depth and settings for each area.",
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
        a: "Ultherapy works by prompting the skin's own gradual collagen-renewal response, so any change tends to develop over weeks to months rather than immediately, and it varies between individuals. Anyone promising you a visible lift on the day is describing a different treatment.",
      },
      {
        q: "Is there any downtime?",
        a: "For most people Ultherapy involves little to no set downtime. Some notice mild redness, swelling or tenderness for a short period afterwards. Your doctor will give you aftercare advice, including sun protection, tailored to your skin.",
      },
    ],
    reviewedBy: "dr-jamie-gan",
    lastReviewed: "2026-06-18",
  },
  { slug: "fotona-4d", durationDowntime: "30-60 min · No downtime", name: "Fotona Laser", category: "Lasers", image: "/images/treatments/fotona-laser.jpg", device: "Fotona", summary: "A multi-application Nd:YAG/Er:YAG laser platform, most often used at Kaiteki for its Fotona 4D facial-firming protocol.", leadAnswer: "Fotona Laser refers to Kaiteki's Fotona SP Dynamis / TimeWalker platform, an Nd:YAG and Er:YAG laser system offered in several application modes. Its best-known protocol, Fotona 4D, combines four modes to address facial firmness and skin-quality concerns. Which modes are used, and whether any application of the platform fits, is decided by a doctor at consultation.", related: ["hifu", "ultherapy"], reviewedBy: "dr-jen-meng", lastReviewed: "2026-06-15", seoTitle: "Fotona 4D Laser Skin Tightening Malaysia | Kaiteki", seoDescription: "Fotona 4D is a multi-mode laser used for facial firming and skin quality, doctor-assessed at Kaiteki clinics in Malaysia. Book a free consultation on WhatsApp.",
    // The third candidate, `fotona-4d.jpg`, is held: it is a manufacturer
    // infographic with outcome copy burned into the artwork ("restore youthful
    // texture", "tighten and lift"), which no caption can walk back (R-01).
    // docs/13 §8 also names it as the duplicate of the file kept here.
    // `fotona-laser.jpg` (the external pass) is held since 3.6: two prose
    // sections render at most floor(2/2) = 1 figure (Q-23).
    figures: [
      {
        src: "https://cdn.kaiteki.my/treatments/fotona-4d/fotona-4d-2.jpg",
        caption: "A Fotona handpiece being worked over the cheek and jaw during a session at Kaiteki.",
      },
    ],

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
        body: "A laser protocol that works in several passes, one of them delivered through the inside of the cheek. Considered where firmness and skin quality are both part of the picture rather than descent alone.",
        links: [{ href: "/concerns/face-lifting", label: "Read about face lifting" }],
      },
      {
        title: "Firmness and surface quality in the same course",
        body: "A laser protocol working in several passes at different depths, including one delivered from inside the mouth. Considered where firmness and surface quality both need attention in the same course.",
        links: [{ href: "/concerns/aging", label: "Ageing skin" }],
      },
    ],
    routesNote:
      "The treatment is aimed at people with early to moderate laxity rather than significant sagging, where a doctor may tell you a laser is not the right tool, and saying so honestly is part of the consultation.",

    // T-07 — the former "four modes" section, as the variant module (R1).
    variantModule: {
      heading: "The four modes, and what each one does",
      intro:
        "A Fotona 4D session combines four laser modes in a set sequence. Each mode targets the skin at a different level, and a doctor decides which modes and settings are used based on your assessment.",
      items: [
        {
          eyebrow: "Er:YAG · intraoral",
          title: "SMOOTH",
          body: "Laser energy is delivered to the tissue inside the mouth, working on the areas behind the cheeks and around the nasolabial region from within.",
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
      note: "All four run on the Fotona SP Dynamis / TimeWalker platform. Not every plan includes every mode.",
    },

    ctaMid: {
      heading: "Not sure whether a laser or another energy suits your laxity?",
      body: "Fotona 4D, focused ultrasound and radiofrequency reach tissue in different ways, and one is not automatically better than the other. A doctor will compare the realistic options for your face. Free consultation, no obligation.",
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
    bringToConsult: "Please bring your full medical, dental and medication history to consultation.",

    // T-10 — step 1 states the first visit is not a treatment.
    sessionSteps: [
      {
        title: "Consultation and assessment",
        body: "Your first visit is a consultation, not a treatment. The doctor assesses your face and decides which of the modes are appropriate for you, and in what sequence.",
      },
      {
        title: "Preparation",
        body: "The skin is cleansed and make-up removed, eye protection is fitted, and you are positioned and prepared separately for the intraoral step.",
      },
      {
        title: "The protocol",
        body: "The modes are performed in sequence. Most patients describe spreading warmth rather than sharp pain, with the intraoral step feeling warm against the inner cheek. A full protocol is generally around 45 to 60 minutes.",
      },
      {
        title: "Afterwards",
        body: "Your doctor explains aftercare and when to follow up. A course of several sessions spaced a few weeks apart is common, followed by occasional maintenance.",
      },
    ],

    // T-11 — physical recovery only.
    afterSession: {
      intro:
        "Downtime is usually limited, which is much of the appeal of a non-ablative protocol, but it varies between individuals.",
      bands: [
        {
          title: "The same day",
          body: "Flushing, warmth and a mild tight feeling for a few hours to a day are common, and the skin can look slightly pink after the surface pass. Most people return to normal activities the same day.",
        },
        {
          title: "The first few days",
          body: "Keep skincare gentle and well moisturised, and pause retinoids and acids until your doctor says otherwise.",
        },
        {
          title: "Between sessions",
          body: "The effect relies on gradual tissue remodelling, so plans are usually built as a short course followed by maintenance rather than a single visit.",
        },
      ],
      aftercare:
        "Use daily broad-spectrum sunscreen, as skin can be more sensitive to sunlight after laser treatment, and avoid heat such as saunas and hot yoga for the period your doctor specifies.",
    },

    // T-12
    risks: {
      intro:
        "As with any laser treatment, Fotona 4D carries potential side effects. These are explained to you during consultation so you can make an informed decision.",
      common:
        "Redness, warmth, mild swelling, transient dryness or flaking, and temporary sensitivity of the inner cheek or lips after the intraoral step.",
      lessCommon:
        "Cold sores can be reactivated in people prone to them. Burns, blistering, changes in pigmentation and scarring are uncommon.",
      pigmentNote:
        "Fotona notes that the Nd:YAG wavelength's low absorption in melanin allows it to be used across skin types, which is relevant for Malaysian patients, and the Er:YAG surface pass is typically kept light in a 4D protocol. Suitability is still individual and depends on your skin's history of pigment change.",
      cannotDo: [
        "It is aimed at early to moderate laxity rather than significant sagging, where a doctor may tell you a laser is not the right tool.",
        "It is not a single visit: the effect relies on gradual tissue remodelling across a course.",
        "It is not automatically better than focused ultrasound or radiofrequency. They are different energy types reaching tissue in different ways.",
      ],
      disclose:
        "Tell your doctor if you are or may be pregnant or breastfeeding, are prone to cold sores, have had recent sun exposure, dental work or an oral condition, have a keloid tendency, or take photosensitising medication including oral isotretinoin.",
    },

    // T-13 — factors only, no figures (settled 2026-09-20).
    costFactors: {
      intro:
        "Kaiteki does not quote prices online, because cost depends on the plan agreed at consultation. What moves it:",
      factors: [
        "How many of the platform's modes your plan uses. A two-step protocol is not the same appointment as a full four-step one.",
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
          "Fotona Laser refers to Kaiteki's Fotona SP Dynamis / TimeWalker platform, a dual-wavelength (Nd:YAG and Er:YAG) laser system offered in several distinct applications, including NightLase (for snoring-related concerns), LipLase, SmoothEye and TightSculpting, alongside its flagship facial protocol, Fotona 4D.",
          "Fotona 4D is a non-surgical protocol that uses the platform's Nd:YAG and Er:YAG modes together to deliver energy to the face through a combination of steps. It is called \"4D\" because it works across four steps, treating both the skin surface and the tissue inside the mouth. It is generally considered for firmness, skin-quality and volume-related concerns of the face. Whether it, or another application of the platform, is appropriate for you is something a doctor assesses during consultation, as suitability and outcomes vary between individuals.",
        ],
      },
      {
        heading: "Why does Fotona 4D work from inside the mouth?",
        body: [
          "Fotona describes the Nd:YAG wavelength as reaching the deepest layers of the skin, and the Er:YAG wavelength as suited to working on the surface. That dual-source design is what makes a multi-step protocol possible at all: a single-wavelength device cannot work intraorally, deep in the dermis and on the skin surface within one appointment.",
          "In the step Fotona calls SmoothLiftin™, the Er:YAG laser is applied in SMOOTH® mode from inside the mouth rather than through the outer skin. Fotona describes SMOOTH® mode as a rapid sequence of low-fluence pulses within a much longer pulse, producing gentle coagulative heating rather than ablation.",
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
        a: "Cost depends on which of the platform's modes your plan uses and how many areas are covered, so it is confirmed at consultation once your skin has been assessed rather than quoted from a list. You can message us on WhatsApp to arrange that assessment.",
      },
    ],
  },
  {
    slug: "radiofrequency",
    durationDowntime: "30-60 min · No downtime",
    name: "Radiofrequency",
    category: "Lifting & Tightening",
    image: "/images/treatments/radiofrequency.jpg",
    summary: "Radiofrequency energy used to support skin-firmness and texture concerns.",
    leadAnswer:
      "Radiofrequency treatments use controlled energy to warm deeper skin layers, which may support firmness and texture concerns over a course of sessions. How many sessions, and whether radiofrequency is the right energy for your skin at all, follows a doctor's examination rather than the concern name.",
    related: ["microneedling", "hifu"],
    reviewedBy: "dr-chloe-wan",
    lastReviewed: "2026-06-12",
    seoTitle: "Radiofrequency Treatment Malaysia | Skin Firmness | Kaiteki",
    seoDescription:
      "Radiofrequency (RF) treatment in Malaysia to support skin firmness and texture concerns. Book a free consultation with a Kaiteki doctor to assess suitability.",
    // `wonderface-1` and `-2` are held: both are 1544×2000 portraits and the
    // figure frame is 2:1, so placing them means a 2.6× crop that loses the
    // subject. They wait for a container that can carry a portrait.
    figures: [
      {
        src: "https://cdn.kaiteki.my/treatments/radiofrequency/oligio.jpg",
        caption: "An Oligio session in progress, with the device console and its handpiece alongside.",
      },
    ],
    manufacturerImages: [
      {
        src: "https://cdn.kaiteki.my/treatments/radiofrequency/logo-oligio.png",
        alt: "Oligio manufacturer logo",
        caption: "Oligio — the manufacturer's mark for the monopolar radiofrequency platform.",
      },
    ],
    // docs/15 item 3.6 (2026-10-11): the v2 block set, applied under docs/16 R1.
    // Two prose sections kept; the rest became typed blocks and were deleted.
    // Block copy is restructured from reviewed text only: this page, the BTL Exilis, Wonderface and XERF pages,
    // and the concern pages' treatmentWhy lines. No new claim, no figure. The
    // re-arrangement goes to Dr Chloe Wan in the offline review round, which is why
    // `lastReviewed` is unchanged.
    typicalSessions: "About 2 to 3, then maintenance",
    facts: [
      { value: "3 RF platforms", label: "BTL Exilis, Wonderface and XERF, matched to your skin" },
      { value: "30–60 minutes", label: "Typical session, depending on the areas treated" },
      { value: "Assessment first", label: "Your first visit is a doctor consultation, not a treatment" },
    ],

    // T-06 — from the concern pages' reviewed treatmentWhy lines.
    routes: [
      {
        title: "Skin firmness across the lower face",
        body: "Heats the dermis to prompt collagen change across a broader area than a focused device. Considered where general firmness rather than a single line is the concern.",
        links: [{ href: "/concerns/face-contouring", label: "Read about face contouring" }],
      },
      {
        title: "Laxity in the lower lid",
        body: "Gentle heating to prompt collagen change where the lower lid skin has loosened and creased. Considered where crepiness accompanies the darkness rather than where a hollow dominates.",
        links: [{ href: "/concerns/dark-eye-circles", label: "Dark eye circles" }],
      },
    ],
    routesNote:
      "Skin thickness, how much laxity there is and what has already been tried all change the answer, so a doctor decides after examining you rather than from the concern name alone.",

    // T-07 — the devices paragraph of "How it works", as the variant module (R1).
    variantModule: {
      heading: "BTL Exilis, Wonderface or XERF: which RF platform, and why",
      intro:
        "Different RF devices allow the treating doctor to adjust treatment depth and intensity for your skin condition and goals.",
      items: [
        {
          eyebrow: "Monopolar · embedded cooling",
          title: "BTL Exilis",
          body: "Monopolar delivery with embedded surface cooling lets the device keep working at a depth that reaches subcutaneous fat, which is why it is used for body-contour concerns as well as facial firmness.",
          href: "/technology/btl-exilis",
          hrefLabel: "About BTL Exilis",
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
          body: "Combines 6.78 MHz and 2 MHz so energy can be biased towards shallower or deeper tissue, with integrated cryogen cooling, and works entirely from the skin surface with no needles.",
          href: "/technology/xerf",
          hrefLabel: "About XERF",
        },
      ],
      note: "The doctor selects the device and settings for your skin and the area being treated.",
    },

    ctaMid: {
      heading: "Not sure whether radiofrequency or another energy fits your skin?",
      body: "Surface radiofrequency, focused ultrasound and RF microneedling reach tissue in different ways. A doctor can tell you which one your laxity actually calls for. Free consultation, no obligation.",
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
      { lead: "Some skin conditions or medications,", body: "which your doctor goes through with you." },
    ],
    bringToConsult:
      "Tell the doctor what you are already using on your skin as well as what you take: retinoids and recent peels change what the skin will tolerate on the day.",

    // T-10 — step 1 states the first visit is not a treatment.
    sessionSteps: [
      {
        title: "Consultation and assessment",
        body: "Your first visit is a consultation, not a treatment. The doctor assesses your skin's thickness and how it sits, because both change the settings.",
      },
      {
        title: "Device and settings",
        body: "If RF is appropriate, the doctor selects a suitable device and settings for your skin and the area being treated.",
      },
      {
        title: "The treatment",
        body: "Controlled RF energy is delivered to the target areas, with contact cooling for comfort. Most people describe a warm, deep, massage-like sensation that builds and eases as the handpiece moves.",
      },
      {
        title: "Afterwards",
        body: "A course of about 2 to 3 sessions spaced roughly 4 to 6 weeks apart is common, but the plan is individual and your doctor will explain what to expect for your skin.",
      },
    ],

    // T-11 — physical recovery only.
    afterSession: {
      intro: "Downtime is usually minimal but varies between individuals.",
      bands: [
        {
          title: "Straight afterwards",
          body: "Mild redness or a feeling of warmth may occur and typically settles within a few hours.",
        },
        {
          title: "The same day",
          body: "Most people return to normal activities, and makeup can generally be worn straight after a facial session.",
        },
        {
          title: "Over the following months",
          body: "Collagen turnover is slow, so any change develops gradually over weeks to months, and a plan here is written in months rather than weeks.",
        },
      ],
      aftercare:
        "Gentle skincare and sun protection are advised afterwards. Your doctor will give aftercare guidance specific to you, which may include maintenance care to support ongoing results.",
    },

    // T-12
    risks: {
      intro:
        "As with any medical procedure, RF treatment carries risks, which are explained during consultation.",
      common: "Redness, warmth or mild swelling that usually settles.",
      lessCommon:
        "Burns and lasting pigment change are the effects that matter here, and both trace back to energy settings. That is why the settings are chosen for your skin by a doctor rather than fixed at the machine.",
      pigmentNote:
        "Because RF heats tissue rather than targeting pigment, it does not rely on colour contrast in the skin, which is why RF platforms are used across a wide range of skin tones including Asian skin. That does not make it appropriate for everyone.",
      cannotDo: [
        "It is not a substitute for surgery where there is significant excess skin.",
        "Marked sagging may be better served by other approaches your doctor can discuss.",
        "There is nothing to see immediately after a session: radiofrequency works by warming tissue and letting it remodel afterwards.",
      ],
      disclose:
        "Tell your doctor if you are or may be pregnant, have a pacemaker, metal implant or other implanted device, have a keloid tendency, or use retinoids or have had a recent peel.",
    },

    // T-13 — factors only, no figures (settled 2026-09-20).
    costFactors: {
      intro:
        "Kaiteki does not quote prices online. The course length is set by what the assessment finds rather than by the device, so a figure quoted before that assessment would be a guess. What moves it:",
      factors: [
        "Your skin condition.",
        "The area treated. Face-only plans differ from face-and-neck or body plans.",
        "The number of sessions in the course.",
        "Maintenance sessions, often every 6 to 12 months, decided with your doctor.",
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
          "Radiofrequency (RF) treatment is a non-surgical approach that uses controlled energy to warm the deeper layers of the skin. Unlike topical skincare, which acts on the surface, RF energy is delivered beneath the skin to work on its underlying structure.",
          "At Kaiteki, RF is used chiefly for skin-firmness, laxity and contour concerns, without surgery or injections. Whether it suits your skin depends on your concern, skin condition and history, which a doctor assesses during consultation.",
        ],
      },
      {
        heading: "How does radiofrequency warm the skin without needles?",
        body: [
          "RF devices deliver controlled thermal energy into the dermis, gently heating the tissue. This warming is intended to act on existing collagen fibres and to prompt the skin's own gradual collagen-renewal response over time.",
          "A contact-cooling step is used during treatment to help keep each session comfortable. Any changes develop gradually over weeks to months and vary between individuals.",
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
        a: "It varies. A course of about 2 to 3 sessions is common, sometimes followed by maintenance every 6 to 12 months, depending on your skin condition and goals. Collagen turnover is slow, so a plan here is written in months rather than weeks.",
      },
      {
        q: "When will I see results?",
        a: "Any changes develop gradually over weeks to months as the skin responds, and they vary between individuals. Radiofrequency works by warming tissue and letting it remodel afterwards, so there is nothing to see immediately after a session.",
      },
    ],
  },
  {
    slug: "microneedling",
    durationDowntime: "30-60 min · 2-3 days recovery",
    name: "RF Microneedling",
    category: "Lifting & Tightening",
    image: "/images/treatments/microneedling.jpg",
    device: "Potenza",
    summary: "A radiofrequency (RF) microneedling treatment used for texture, scarring and pore concerns.",
    leadAnswer:
      "Microneedling at Kaiteki is most often performed as radiofrequency (RF) microneedling, combining fine needles with radiofrequency energy to prompt a controlled skin-renewal response at multiple depths. It is commonly considered for texture, acne-scarring and pore concerns. Needle depth and energy are set per area by the treating doctor, and suitability is assessed before the first pass.",
    related: ["pico-laser", "skin-booster"],
    reviewedBy: "dr-say-wei-xian",
    lastReviewed: "2026-06-12",
    seoTitle: "RF Microneedling Malaysia | Potenza, Morpheus8 | Kaiteki",
    seoDescription:
      "RF microneedling in Malaysia for texture, acne scarring and pore concerns using Potenza, Morpheus8 or Sylfirm X. Book a free consultation at Kaiteki.",
    figures: [
      {
        src: "https://cdn.kaiteki.my/treatments/microneedling/sylfirm.jpg",
        caption: "A microneedling handpiece stamped along the jaw, one pass at a time.",
      },
    ],
    manufacturerImages: [
      {
        src: "https://cdn.kaiteki.my/treatments/microneedling/logo-sylfirm.png",
        alt: "Sylfirm manufacturer logo",
        caption: "Sylfirm — the manufacturer's mark for the radiofrequency microneedling device.",
      },
    ],
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
        body: "Fine needles deliver radiofrequency energy into the deeper layer of the skin to stimulate collagen. Often the starting point for rolling and boxcar scarring.",
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
    routesNote:
      "Scar work is a staged process: different scar types respond differently, and some benefit from being combined with other treatments. A doctor sets realistic expectations at consultation rather than promising a single fix.",

    // T-07 — the "Devices & technology" section, as the variant module (R1).
    variantModule: {
      heading: "Morpheus8, Sylfirm X or Potenza: which device, and why",
      intro:
        "Kaiteki offers three RF microneedling devices. Each has different technical characteristics, and a doctor matches the device and settings to your concern and skin during consultation.",
      items: [
        {
          eyebrow: "Subdermal reach · InMode",
          title: "Morpheus8",
          body: "Designed for deeper RF penetration. It is generally discussed in the context of skin-tightening and deeper concerns such as sagging, the jaw and neck area.",
          href: "/technology/morpheus8",
          hrefLabel: "About Morpheus8",
        },
        {
          eyebrow: "Pulsed and continuous wave · Viol",
          title: "Sylfirm X",
          body: "A dual-wave device that can deliver RF in both pulsed and continuous modes. It is generally discussed in the context of pigment-related and vascular concerns such as melasma, post-inflammatory hyperpigmentation and redness.",
          href: "/technology/sylfirm-x",
          hrefLabel: "About Sylfirm X",
        },
        {
          eyebrow: "Monopolar and bipolar · Cynosure Lutronic",
          title: "Potenza",
          body: "Offers adjustable needle depth with both monopolar and bipolar RF modes. It is generally discussed in the context of acne scarring, enlarged pores and oil-related texture concerns.",
          href: "/technology/potenza",
          hrefLabel: "About Potenza",
        },
      ],
      note: "The right choice for you is decided by a doctor during consultation.",
    },

    ctaMid: {
      heading: "Not sure which of the three devices suits your skin?",
      body: "Scarring, pores, pigment and firmness point to different devices and different depths. A doctor can tell you which one you are actually dealing with. Free consultation, no obligation.",
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
      "Please share your full medical, medication and skincare history at consultation. Recently tanned or sunburnt skin may also mean postponing.",

    // T-10 — step 1 states the first visit is not a treatment.
    sessionSteps: [
      {
        title: "Consultation and assessment",
        body: "Your first visit is a consultation, not a treatment. A doctor reviews your skin, medical history and any current skin conditions, and matches the device and settings to your concern.",
      },
      {
        title: "Numbing",
        body: "A topical numbing cream is applied for around 30 to 45 minutes to help with comfort. This usually accounts for much of the appointment.",
      },
      {
        title: "The treatment",
        body: "The procedure itself usually takes around 20 to 40 minutes, depending on the area and settings. Needle depth, energy level and pattern are adjusted to your skin, and many people describe the sensation as mild heat and pressure.",
      },
      {
        title: "Afterwards",
        body: "The treated area is cooled and soothed, and you are given aftercare guidance. RF microneedling is usually approached as a course of sessions spaced a few weeks apart, planned with your clinician.",
      },
    ],

    // T-11 — physical recovery only.
    afterSession: {
      intro: "Downtime varies between individuals, and with the depth and energy used.",
      bands: [
        {
          title: "The first one to two days",
          body: "Some redness is common, and the skin can look flushed and feel warm, often with a faint grid pattern from the needle tips.",
        },
        {
          title: "The following days",
          body: "Some dryness or light flaking afterwards can be normal. Deeper settings can leave the skin flushed and tender for slightly longer, and pinpoint scabs can occur.",
        },
        {
          title: "Between sessions",
          body: "The skin's repair and collagen-remodelling response builds over time, which is why the course is spaced a few weeks apart and reviewed as it goes.",
        },
      ],
      aftercare:
        "Sun protection and gentle skincare while the skin settles, with actives such as retinoids or acids usually paused for a short period. Follow the specific instructions given to you at your appointment.",
    },

    // T-12
    risks: {
      intro:
        "As with any procedure that penetrates the skin, RF microneedling carries potential risks and side effects. The relevant risks for your skin and history are explained during consultation so you can make an informed decision.",
      common:
        "Redness, swelling, sensitivity, dryness, pinpoint bruising or scabbing, and temporary changes in skin appearance.",
      lessCommon:
        "Infection, prolonged pigment change or scarring. Serious effects are uncommon when the treatment is appropriately selected and performed by a trained doctor.",
      pigmentNote:
        "Radiofrequency energy is not absorbed by melanin the way laser light is, so RF microneedling is used across a broad range of skin tones, including deeper Asian skin, and is generally considered a lower pigmentation-risk option for medium and deeper skin tones. Temporary pigment changes are still possible, particularly with deeper settings or without good sun protection afterwards.",
      cannotDo: [
        "It is not a substitute for surgery where there is significant sagging or excess skin.",
        "Scar work is staged. Different scar types respond differently, and no single session is a fix.",
        "It does not settle melasma for good. Melasma is chronic and relapsing, and needs ongoing topical care and sun protection alongside any procedure.",
      ],
      disclose:
        "Tell your doctor if you are or may be pregnant or breastfeeding, have taken oral isotretinoin recently, have a keloid history, a clotting disorder or take blood thinners, or have a pacemaker, metal implants or permanent fillers.",
    },

    // T-13 — factors only, no figures (settled 2026-09-20).
    costFactors: {
      intro:
        "Kaiteki does not quote prices online, because the device, the area and the plan are decided at consultation. What moves it:",
      factors: [
        "Which device your doctor selects for your concern.",
        "The size of the area treated.",
        "The depths and modes used.",
        "The number of sessions in the course.",
        "Single-use consumable needle tips, which are part of what shapes the cost of any RF microneedling session.",
      ],
    },

    relatedReasons: {
      "pico-laser":
        "A picosecond laser used for pigmentation, dull skin tone and tattoo removal, where the concern is pigment rather than texture or scarring.",
      "skin-booster":
        "Injectable hydrating treatments used to support skin quality and hydration, where an injectable rather than a device is the route.",
    },

    sections: [
      {
        heading: "What is RF microneedling?",
        body: [
          "RF microneedling refers to a group of treatments that combine traditional microneedling with radiofrequency (RF) energy. Fine needles create controlled micro-channels in the skin while RF energy is delivered through those needles at set depths.",
          "At Kaiteki, microneedling is most often performed as RF microneedling rather than needling alone. Whether it is appropriate for you, and which settings are used, is something a doctor assesses during consultation.",
        ],
      },
      {
        heading: "How does RF microneedling treat several depths in one session?",
        body: [
          "The device passes fine needles into the skin to create controlled micro-injuries, then delivers radiofrequency energy from the needle tips as thermal energy within the skin.",
          "Because the needle depth and energy can be adjusted, the treatment can be targeted at multiple skin depths in one session. This combination is intended to prompt the skin's natural repair and collagen-remodelling response over time. The extent of any change varies between individuals.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which device is right for me: Morpheus8, Sylfirm X or Potenza?",
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
    durationDowntime: "35-60 min per area · No downtime",
    name: "Fat Freezing",
    category: "Body & Slimming",
    image: "/images/treatments/fat-freezing.jpg",
    summary: "The general term for cryolipolysis for localised fat concerns.",
    leadAnswer:
      "Fat freezing (cryolipolysis) uses controlled cooling to target localised fat in specific areas, and is not a weight-loss treatment. Whether a given area can be treated at all depends on whether an applicator can draw and hold it, which is something a doctor checks in person.",
    related: ["microwave-contouring"],
    reviewedBy: "dr-jessie-lim",
    lastReviewed: "2026-06-10",
    seoTitle: "Fat Freezing Malaysia | Cryolipolysis Treatment | Kaiteki",
    seoDescription:
      "Fat freezing (cryolipolysis) in Malaysia for localised fat pockets, not weight loss. Book a free consultation with a Kaiteki doctor to check suitability.",
    // `body-slimming.jpg` is held: a tape measure drawn round a waist is an
    // outcome picture, and the caption cannot undo what the image says (R-01).
    figures: [
      {
        src: "https://cdn.kaiteki.my/treatments/fat-freezing/coolsculpting.jpg",
        caption: "An applicator clamped over the abdomen with its gel membrane in place, partway through a cycle.",
      },
    ],
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
        body: "Controlled cooling applied to a defined pocket of fat, which the body then clears over the following weeks. Suitable where the fat can be drawn into an applicator, which is why the pinch test at assessment decides whether it applies at all.",
        links: [{ href: "/concerns/body-slimming", label: "Read about body slimming" }],
      },
      {
        title: "A defined pocket of fat under the chin",
        body: "Controlled cooling applied to the submental area to reduce a localised fat pocket. Relevant only where fat is genuinely what is there, which is why the pinch test at assessment matters.",
        links: [{ href: "/concerns/face-contouring", label: "Face contouring" }],
      },
    ],
    routesNote:
      "Fat freezing is not a weight-loss treatment and is not a substitute for a healthy diet and exercise. It is intended for people at or near a stable weight who have specific, pinchable pockets of fat rather than generalised weight to lose.",

    // T-07 — the former "Devices we use" section, as the variant module (R1).
    variantModule: {
      heading: "Cooltech or CoolSculpting: which device, and why",
      intro:
        "Both are cryolipolysis devices working on the same principle. They differ in applicator design, and the treating doctor selects the device and applicator suited to your treatment area and goals at consultation.",
      items: [
        {
          eyebrow: "360° cooling · Cocoon Medical",
          title: "Cooltech",
          body: "The manufacturer describes 360° cooling plates, cooling delivered around the drawn-in tissue rather than from a single contact plate, and the ability to run more than one applicator at the same time, so two areas or both flanks may be addressed within one appointment.",
          href: "/technology/cooltech",
          hrefLabel: "About Cooltech",
        },
        {
          eyebrow: "Cryolipolysis · CoolSculpting",
          title: "CoolSculpting",
          body: "A device applicator draws the target area against a cooling plate. Each applicator cycle typically runs for around 35 to 60 minutes, and the number of areas and applicators is individual.",
          href: "/technology/coolsculpting",
          hrefLabel: "About CoolSculpting",
        },
      ],
      note: "Naming a device is a factual description, not a claim that one performs better than another.",
    },

    ctaMid: {
      heading: "Not sure whether your area is one an applicator can hold?",
      body: "Not every pocket of fat is one an applicator can draw and hold, and that is something a doctor checks in person. Free consultation, no obligation.",
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
    bringToConsult:
      "Please share your full medical history, current medications, any implants or devices, and any previous body-contouring procedures at consultation so the doctor can advise safely.",

    // T-10 — step 1 states the first visit is not a treatment.
    sessionSteps: [
      {
        title: "Consultation and assessment",
        body: "Your first visit is a consultation, not a treatment. The doctor assesses the area, including whether the fat can be drawn into an applicator, and discusses what is realistic for your body.",
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
        body: "The applicator is removed and the area is massaged. More than one area or session may be discussed depending on your goals, but the plan is individual.",
      },
    ],

    // T-11 — physical recovery only, never a timeframe to a result.
    afterSession: {
      intro:
        "Downtime is usually limited but varies between individuals, and most people return to everyday activities after a session.",
      bands: [
        {
          title: "Straight afterwards",
          body: "The area often looks red and feels firm, cold or oddly numb, and this typically settles over the following hours to days.",
        },
        {
          title: "The first weeks",
          body: "Temporary tenderness, swelling, tingling or a dull ache in the treated area can persist for a few days to a couple of weeks, and some people find loose clothing or a compression garment more comfortable during that period.",
        },
        {
          title: "Weeks to months",
          body: "Any change is gradual, because the body clears the treated cells over the following weeks rather than at the appointment, so it is typically assessed a couple of months later rather than immediately.",
        },
      ],
      aftercare:
        "Maintaining a stable weight with your usual diet and activity supports the contour you are working towards. Your doctor will give aftercare guidance specific to you.",
    },

    // T-12
    risks: {
      intro:
        "As with any medical procedure, cryolipolysis carries risks, which are explained during consultation.",
      common:
        "Redness, swelling, bruising, firmness, numbness, tingling, itching or cramping in the treated area, and altered skin sensation that may take some weeks to normalise.",
      lessCommon:
        "Lingering pain in the treated area, and paradoxical adipose hyperplasia, in which the treated fat pocket firms and enlarges rather than reduces. Serious effects are uncommon when the treatment is appropriately selected and performed by a trained doctor.",
      pigmentNote:
        "Because it acts on fat below the skin rather than on pigment, skin tone is not the primary consideration it is with lasers, but the thickness and distribution of fat in the area very much are.",
      cannotDo: [
        "It is not a weight-loss treatment, not a treatment for obesity, and not a substitute for diet, exercise or medical weight management.",
        "Not every pocket of fat is one an applicator can draw and hold.",
        "It does not stop remaining fat cells enlarging with weight gain, which is why a stable weight matters.",
      ],
      disclose:
        "Tell your doctor if you are or may be pregnant or breastfeeding, have a cold-related condition, a hernia, or any implant or device, take any medication, or have had previous body-contouring procedures.",
    },

    // T-13 — factors only, no figures (settled 2026-09-20).
    costFactors: {
      intro:
        "Kaiteki does not quote prices online. Cost is quoted per applicator cycle once the doctor has seen which areas can actually be treated. What moves it:",
      factors: [
        "The areas being addressed.",
        "The size of the fat pocket, and how many applicator placements it needs to cover.",
        "The number of cycles each area requires.",
        "Your individual response.",
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
          "Fat freezing is the everyday name for cryolipolysis, a non-surgical approach that uses controlled cooling to target pockets of fat in specific areas of the body. \"Fat freezing\" describes the method rather than any single machine, and several devices work on the same cryolipolysis principle.",
          "It is intended for localised, stubborn fat in defined areas rather than overall weight reduction. Whether it suits you depends on your concern, the area involved and your medical history, which a doctor assesses during consultation.",
        ],
      },
      {
        heading: "Why does cooling affect fat and not the skin around it?",
        body: [
          "Cryolipolysis is based on the idea that fat cells are more sensitive to cold than the surrounding skin, nerves and muscle. During a session, an applicator cools a defined area to a controlled low temperature for a set period.",
          "The aim is to affect fat cells within the treated pocket while limiting effect on nearby tissue. Any change develops gradually over the following weeks as the body processes the treated area. Settings and applicators are selected by the treating doctor, and results vary between individuals.",
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
    durationDowntime: "15-30 min · 1-2 days",
    name: "Skin Booster",
    category: "Injectables",
    image: "/images/treatments/skin-booster.jpg",
    device: "Profhilo",
    typicalSessions: "A short course, then maintenance",
    summary: "Injectable hydrating treatments used to support skin quality and hydration.",
    leadAnswer:
      "Skin boosters are injectable treatments that deliver hydrating ingredients into the skin to support skin quality and hydration over a course of sessions. Which product suits your skin, and whether an injectable is the right route for what is bothering you, is decided by a doctor at consultation.",

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
        body: "Hydration and overall skin quality, and fine lines associated with dryness. Profhilo and Hydrodeluxe are the hyaluronic acid products in the range, built for hydration.",
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
        body: "Uneven texture and the look of enlarged pores, where a collagen-stimulating booster such as Juvelook is one option, and the under-eye area, which some products are specifically used for.",
        links: [
          { href: "/concerns/enlarged-pores", label: "Enlarged pores" },
          { href: "/concerns/dark-eye-circles", label: "Dark eye circles" },
        ],
      },
    ],
    routesNote:
      "If what you want is a change in contour, such as a fuller cheek, a defined chin or a corrected hollow, a skin booster is the wrong category. Your doctor will say so rather than substituting one for the other.",

    // T-07 — the five products, told apart by what is in them. Material and
    // manufacturer are the facts already on each product page (docs/15 2.0).
    variantModule: {
      heading: "Which skin booster, and what is in it",
      intro:
        "Skin booster is an umbrella term, and the products under it are not interchangeable. They differ in their active ingredient, and the ingredient is what decides which skin a doctor considers them for. Which one suits you, if any, is decided after examining your skin.",
      items: [
        {
          eyebrow: "Salmon polynucleotide · Pharma Research, Korea",
          title: "Rejuran",
          body: "Used to support the skin barrier and skin healing, and often considered for sensitive, acne-prone or damaged skin. Because it is salmon-derived, any fish or seafood allergy must be declared.",
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
          body: "A high-concentration hyaluronic acid used for deep hydration and skin remodelling, and to support firmness. It is not a contour filler.",
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
          body: "A collagen-stimulating booster used for pores, texture and fine lines. The change builds over months rather than days, so it suits someone willing to wait for a gradual one.",
          href: "/technology/juvelook",
          hrefLabel: "About Juvelook",
        },
      ],
      note: "This is why the consultation comes first. A doctor may decide a hydrating or polynucleotide booster is the sensible starting point before a collagen-stimulating one, or that a skin booster is not the right category at all.",
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
        body: "for the polynucleotide products, Rejuran and Plinest, which are fish-derived. Any known hypersensitivity to hyaluronic acid or another ingredient matters for the others.",
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
    bringToConsult:
      "Bring your full medical history, allergies and medications, and a list of every injectable you have had before, including fillers. Which product is appropriate, if any, depends on all of it.",

    // T-10 — step 1 states the first visit is not a treatment.
    sessionSteps: [
      {
        title: "Consultation and skin assessment",
        body: "A doctor examines your skin and decides whether a skin booster is the right category for your concern and, if so, which one: hydrating, polynucleotide or collagen-stimulating.",
      },
      {
        title: "Preparation",
        body: "The skin is cleansed and a topical anaesthetic is usually applied and left to take effect, which accounts for much of the appointment time.",
      },
      {
        title: "The injections",
        body: "The doctor places the product as a series of small injections across the assessed area, using the technique and points they judge suitable for you. Because this is an injectable treatment, it is carried out by a doctor throughout.",
      },
      {
        title: "Afterwards",
        body: "Soothing care and aftercare advice. The number of sessions and the interval between them are set for your skin and your response, not by a standard schedule.",
      },
    ],

    // T-11 — physical recovery only. The bands follow the product pages:
    // hyaluronic acid disperses faster than polynucleotide.
    afterSession: {
      intro:
        "Downtime after a skin booster is usually short but genuinely visible for a period, and it varies between products and between individuals.",
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
        {
          title: "Across the course",
          body: "Sessions are spaced some weeks apart. Any change develops gradually, and for a collagen-stimulating booster it appears over months rather than days.",
        },
      ],
      aftercare:
        "Gentle skincare and consistent sun protection afterwards, and temporarily avoiding heat, strenuous exercise and pressure on the treated area. Your doctor will tell you when to resume active skincare, makeup and exercise.",
    },

    // T-12 — not energy-based, so no pigment note: skin tone is not a
    // limiting factor the way it is with lasers (every product page says so).
    risks: {
      intro:
        "As with any injectable treatment, skin boosters carry risks. These are explained to you in full at consultation, before anything is booked.",
      common:
        "Bumps at the injection points, swelling, redness, bruising, tenderness and small palpable lumps, which typically settle over a short period.",
      lessCommon:
        "Infection, prolonged swelling, nodules and hypersensitivity reactions. Persistent nodules or granuloma formation are a recognised consideration with collagen-stimulating products. Vascular complications are rare but recognised with any facial injection. Serious effects are uncommon when the product is appropriately selected and administered by a trained doctor.",
      cannotDo: [
        "It does not add volume or change the shape of the face. Skin boosters are not fillers, and a concern about contour needs a different treatment.",
        "It does not work in a single session. Skin boosters are used as a course, and any change develops gradually.",
        "It is not permanent. Courses are commonly followed by periodic maintenance.",
      ],
      disclose:
        "Tell your doctor if you are or may be pregnant or breastfeeding, have a fish, seafood or other allergy, take blood-thinning or other medication, have a tendency to keloid scarring or an autoimmune condition, or have had any previous filler or biostimulator treatment.",
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
        "How your skin responds across the course, which is reviewed between sessions.",
      ],
      outro:
        "Skin boosters are typically planned as a short course with maintenance afterwards, but the number of sessions and their spacing are set by your doctor rather than fixed in advance.",
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
        name: "Botulinum toxin",
        bestFor: "Lines caused by muscle movement",
        downtime: "None",
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
    // Two prose sections, so Q-23 allows floor(2 / 2) = 1 figure. The general
    // session photograph is the one kept. Held out rather than authored until
    // the body grows, as pico-laser does:
    //   treatments/skin-booster/profhilo.jpg        "An injection placed along the lower cheek — one of the points used in a Profhilo protocol."
    //   treatments/skin-booster/rejuran-healer.jpg  "Injection points marked out on the cheek before a Rejuran Healer session."
    //   treatments/skin-booster/skin-booster-2.jpg  "The doctor steadies the jawline while positioning the needle at the cheek."
    // `rejuran.jpg` stays out for the reason it always did: a packaging shot.
    figures: [
      {
        src: "https://cdn.kaiteki.my/treatments/skin-booster/skin-booster.jpg",
        caption: "A fine needle positioned at the cheek under a treatment lamp during a skin-booster session.",
      },
    ],
    manufacturerImages: [
      {
        src: "https://cdn.kaiteki.my/treatments/skin-booster/logo-plinest.png",
        alt: "Plinest manufacturer logo",
        caption: "Plinest — the manufacturer's mark for the polynucleotide skin booster.",
      },
    ],
    sections: [
      {
        heading: "What is a skin booster?",
        body: [
          "A skin booster is an injectable treatment that places hydrating and skin-conditioning ingredients into the skin to support its overall quality, rather than to add volume or change the shape of the face. Because it is an injectable, it is performed by a doctor.",
          "Skin booster is an umbrella term for several different injectable formulations. The right one for you, and whether a skin booster is appropriate at all, is assessed by a doctor during a consultation.",
        ],
      },
      {
        heading: "How is a skin booster different from a filler?",
        body: [
          "A filler is placed to add volume or change contour: a fuller cheek, a defined chin, a corrected hollow. A skin booster is not. It is delivered as small amounts through a series of fine micro-injections spread across the treatment area, and the ingredients are intended to work within the skin itself to support hydration and skin quality over time.",
          "That is also why the two are planned differently. A skin booster is generally used as a course rather than a single treatment, and any change tends to develop gradually and varies between individuals. It is worth being clear about which of the two you are after before the first session, because a doctor will not substitute one for the other.",
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
      {
        q: "What is the difference between Rejuran and Profhilo?",
        a: "They are built on different ingredients. Rejuran is a salmon-derived polynucleotide, used to support the skin barrier and healing and often considered for sensitive or damaged skin. Profhilo is a high-concentration hyaluronic acid, used for deep hydration and skin remodelling. Neither is a contour filler. Which suits you, if either, depends on your skin and is decided by a doctor at consultation.",
      },
      {
        q: "Can I have a skin booster if I am allergic to fish?",
        a: "Tell your doctor before anything else. Rejuran and Plinest are polynucleotide products derived from fish, so a fish or seafood allergy matters for those two. The hyaluronic acid boosters are built on a different ingredient, and your doctor will go through your allergies and history before recommending any product.",
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
    image: "/images/treatments/botulinum-toxin.jpg",
    typicalSessions: "1 per cycle",
    summary:
      "A doctor-administered prescription injectable used to relax targeted muscles or reduce sweat-gland activity.",
    leadAnswer:
      "Botulinum toxin is a prescription injectable that temporarily reduces the signal between nerves and the muscle or sweat gland it acts on. In aesthetic medicine it is used for expression lines, jaw and calf muscle bulk, and excessive sweating. It is a medicine, so a doctor must assess suitability before it can be prescribed or given.",
    areas: ["Forehead", "Frown lines", "Crow's feet", "Jawline", "Underarms", "Palms", "Calves"],
    suitableFor: [
      "Adults in general good health seeking assessment for dynamic expression lines",
      "People bothered by excessive underarm, palm or sole sweating that has not responded to antiperspirants",
      "People interested in assessment for jaw or calf muscle bulk",
      "People comfortable with a treatment that wears off and needs repeating",
    ],
    notSuitableFor: [
      "Pregnancy or breastfeeding",
      "Known neuromuscular conditions such as myasthenia gravis or Lambert-Eaton syndrome",
      "Known allergy to botulinum toxin or any component of the preparation",
      "Active skin infection or inflammation at the intended injection site",
      "Certain medications, including some antibiotics and muscle relaxants: tell your doctor everything you take",
    ],
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
      {
        name: "Skin booster",
        bestFor: "Fine lines linked to skin dryness and skin quality",
        downtime: "1-2 days",
      },
      {
        name: "HIFU / Ultherapy",
        bestFor: "Laxity and firmness rather than movement lines",
        downtime: "None to minimal",
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
    figures: [
      {
        src: "https://cdn.kaiteki.my/treatments/botulinum-toxin/face-muscle-relax.png",
        caption:
          "A fine needle positioned at the outer eye — one of the sites treated for lines that appear on movement.",
      },
    ],
    sections: [
      {
        heading: "What is botulinum toxin?",
        body: [
          "Botulinum toxin is a purified protein produced by the bacterium Clostridium botulinum. In very small, controlled doses it is used in medicine to temporarily reduce the activity of a specific muscle or gland. It has been used clinically for decades, originally in neurology and ophthalmology, and later in aesthetic medicine.",
          "In Malaysia it is a prescription medicine. That means it can only be supplied and administered by a registered doctor after an in-person assessment, and it cannot be bought, requested or self-administered like a cosmetic product.",
          "Several brands of botulinum toxin type A are registered in Malaysia, of which Botox is the best known: the name is widely used to mean the treatment itself, though it is one product among several. Which one your doctor recommends depends on the area being treated and your assessment.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "Muscles contract when a nerve releases a chemical messenger called acetylcholine at the junction between the nerve and the muscle. Botulinum toxin temporarily blocks that release, so the treated muscle contracts less strongly. The same mechanism applies to the nerves that switch on sweat glands, which is why it is also used for excessive sweating.",
          "The effect is confined to the small area injected and is temporary: nerve signalling gradually returns and the muscle or gland resumes its usual activity. How long that takes, and how noticeable any change is, varies considerably between individuals. Because the effect wears off, this is a treatment that is repeated rather than a one-off procedure.",
        ],
      },
      {
        heading: "What it may be used for",
        body: [
          "A doctor considers botulinum toxin for concerns driven by muscle movement or gland activity, rather than by volume loss or skin quality. If your concern is not movement-related, another approach may be more appropriate, and your doctor will say so.",
        ],
        list: [
          "Dynamic expression lines: forehead lines, frown lines between the brows, and lines at the outer eye",
          "Excessive sweating (hyperhidrosis) of the underarms, palms or soles",
          "Jawline width associated with masseter muscle bulk",
          "Calf shape associated with muscle bulk",
          "Certain medical uses, such as chronic migraine or muscle spasm, assessed separately",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Botulinum toxin is not suitable for everyone, and being interested in it is not the same as being a candidate for it. Your doctor examines the area, watches how the muscles move, reviews your medical history and medications, and then advises whether treatment is reasonable, including advising against it.",
          "It is generally avoided in pregnancy and breastfeeding, where there is a neuromuscular disorder such as myasthenia gravis, where there is a known allergy to the preparation, and over active infection or inflammation at the injection site. Some medications, including certain antibiotics and muscle relaxants, can interact with it, so bring a full list to your consultation.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "Your appointment starts with a consultation. The doctor assesses the area at rest and in movement, discusses what you are hoping to change, explains what is and is not achievable, and goes through the risks. Only then is a treatment plan and dose decided: dosing is individual and is not set from a price list.",
          "If you proceed, the area is cleansed and the doctor administers a series of small injections with a fine needle at planned points. Most sessions take ten to twenty minutes. Discomfort is usually described as brief stinging; the doctor can discuss numbing or cooling beforehand if you are concerned. You are given written aftercare before you leave.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "There is normally no downtime and most people return to their day straight away. Small raised bumps, minor redness or a mild headache can occur and usually settle quickly; bruising is possible, particularly around the eyes.",
          "For the first day, stay upright for around four hours, do not rub or massage the treated area, and avoid strenuous exercise, saunas, steam rooms and facials. Any change develops gradually over the following days rather than immediately, and your doctor will usually offer a review appointment to assess the result before deciding anything further.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "Commonly reported temporary effects include tenderness, redness or small bruises at the injection points, and headache. These are usually mild and short-lived.",
          "Less commonly, the effect can extend slightly beyond the intended muscle, which may cause temporary asymmetry, a heavy-feeling brow or eyelid drooping. These are temporary but can take weeks to resolve. Rarely, more serious effects associated with spread of the toxin, including difficulty swallowing, speaking or breathing, or muscle weakness away from the injection site, have been reported and require urgent medical attention. Your doctor will explain the full risk profile as it applies to you before you consent, and Kaiteki asks you to contact the clinic about any effect that concerns you.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "Because the effect is temporary, treatment is planned as a repeating cycle rather than a course with an endpoint. How often that is appropriate depends on the area, the dose used and how your body responds, and is decided with your doctor at review rather than fixed in advance.",
          "Cost depends on the area, the dose your doctor determines and your individual plan, so it is confirmed at consultation. As a prescription medicine, it cannot be quoted or promoted as a package before assessment. To arrange an assessment, message Kaiteki on WhatsApp.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is botulinum toxin permanent?",
        a: "No. The effect is temporary because nerve signalling gradually returns, so the treated muscle or gland resumes its usual activity. How long that takes varies between individuals, which is why treatment is planned as a repeating cycle and reviewed by your doctor rather than set to a fixed schedule.",
      },
      {
        q: "Can it help with excessive sweating?",
        a: "It is one option a doctor may consider for excessive sweating of the underarms, palms or soles, usually where antiperspirants have not been enough. It works on the nerves that activate sweat glands. Whether it is appropriate for you depends on assessment, including ruling out underlying causes of the sweating.",
      },
      {
        q: "Will my face look frozen or expressionless?",
        a: "That outcome relates to dose and placement, which is why the doctor assesses how your muscles move before deciding anything. Tell your doctor at consultation how much movement you want to keep, and ask what is realistic. A review appointment lets the doctor assess the result before considering any further treatment.",
      },
      {
        q: "Is this the same as Botox?",
        a: "Botox is one registered brand of botulinum toxin type A, and it is the brand most people mean when they say the word. It is a product, not a separate treatment. Several brands are registered in Malaysia and they differ in formulation and unit potency, so your doctor will explain which one they are recommending for you and why.",
      },
      {
        q: "Is it the same as dermal filler?",
        a: "No. Botulinum toxin relaxes muscle activity, so it addresses lines caused by movement. Dermal fillers add volume or structure, so they address hollowing and lines caused by lost volume. They work differently and are sometimes considered together. Your doctor will explain which, if either, fits your concern.",
      },
    ],
  },
  {
    slug: "bio-stimulator",
    durationDowntime: "15-30 min · 1-2 days",
    name: "Bio-stimulator",
    category: "Injectables",
    image: "/images/treatments/bio-stimulator.jpg",
    device: "Sculptra",
    summary: "Injectable treatments used to support the skin's own structural renewal.",
    leadAnswer:
      "Bio-stimulator treatments are injectables intended to support the skin's own gradual structural renewal over time. Because any change is cumulative rather than immediate, the plan is set across months by a doctor rather than booked as a single visit.",
    related: ["skin-booster"],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-06-08",
    seoTitle: "Bio-Stimulator Malaysia | Sculptra, Ellanse | Kaiteki",
    seoDescription:
      "Bio-stimulator injectables in Malaysia, including Sculptra and Ellanse, to support the skin's structural renewal. Book a free consultation at Kaiteki.",
    figures: [
      {
        src: "https://cdn.kaiteki.my/treatments/bio-stimulator/radiesse.jpg",
        caption: "A syringe held at the mid-cheek, one of the planes a collagen stimulator is placed in.",
      },
    ],
    manufacturerImages: [
      {
        src: "https://cdn.kaiteki.my/treatments/bio-stimulator/logo-radiesse.png",
        alt: "Radiesse manufacturer logo",
        caption: "Radiesse — the manufacturer's mark for the calcium hydroxylapatite stimulator.",
      },
      {
        src: "https://cdn.kaiteki.my/treatments/bio-stimulator/logo-ellanse.png",
        alt: "Ellansé manufacturer logo",
        caption: "Ellansé — the manufacturer's mark for the polycaprolactone stimulator.",
      },
    ],
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
        body: "An injectable that prompts the skin to produce its own collagen rather than adding volume directly. Change is deliberately slow, which some people prefer and others find frustrating.",
        links: [{ href: "/concerns/face-lifting", label: "Read about face lifting" }],
      },
      {
        title: "Rebuilding structure rather than filling",
        body: "An injectable that prompts your own collagen production over months instead of adding volume immediately. Suits people who want change to arrive slowly and are willing to wait for it.",
        links: [{ href: "/concerns/aging", label: "Ageing skin" }],
      },
    ],
    routesNote:
      "Some injectables sit within the tissue to provide structural fill; bio-stimulators are formulated to work more gradually. Which approach is appropriate depends on the individual.",

    // T-07 — the former "Types of bio-stimulator" section (R1).
    variantModule: {
      heading: "Sculptra, Radiesse or Ellansé: which material, and why",
      intro:
        "Several bio-stimulator products may be used, each with a different base material and characteristics. Product selection is made by the doctor based on the individual assessment.",
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
      note: "None of these can be dissolved the way a hyaluronic acid filler can, which is why assessment beforehand matters.",
    },

    ctaMid: {
      heading: "Not sure whether you need a filler or a bio-stimulator?",
      body: "Both are injectables, but one adds volume directly and the other supports your own gradual renewal. A doctor can tell you which your concern calls for. Free consultation, no obligation.",
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
    bringToConsult:
      "Please share your full medical history, any allergies, your medication list and any past injectable or surgical treatments at consultation so the doctor can determine whether the treatment is appropriate for you.",

    // T-10 — step 1 states the first visit is not a treatment.
    sessionSteps: [
      {
        title: "Consultation and assessment",
        body: "Your first visit is a consultation, not a treatment. The doctor assesses your skin, confirms suitability, discusses the realistic time course and selects the product.",
      },
      {
        title: "Preparation",
        body: "The skin is cleansed and prepared, and topical or local anaesthetic is used for comfort.",
      },
      {
        title: "The injections",
        body: "The doctor administers the injections into the assessed areas. The injecting itself usually takes a relatively short time: most of the appointment is assessment, preparation and aftercare.",
      },
      {
        title: "Afterwards",
        body: "The doctor may massage the treated area and will explain aftercare. A common approach is a short course of sessions spaced several weeks apart, with the specifics determined at consultation.",
      },
    ],

    // T-11 — injection site, the first days, review.
    afterSession: {
      intro: "Downtime is generally minimal, though this varies between individuals.",
      bands: [
        {
          title: "At the injection sites",
          body: "Mild swelling, redness or tenderness may occur and usually settles within a few days. Bruising can occasionally take longer to fade, which is worth planning around if you have an event coming up.",
        },
        {
          title: "The first days",
          body: "Avoid pressure or vigorous facial treatments on the area for a short period, and follow any massage instructions given.",
        },
        {
          title: "Review",
          body: "Because change develops over months, review appointments matter more here than with an immediate-result treatment. Keep them, and raise anything unexpected with the clinic rather than waiting.",
        },
      ],
      aftercare:
        "The doctor will provide aftercare guidance specific to your treatment. Follow any instructions given, and contact the clinic if you have concerns.",
    },

    // T-12
    risks: {
      intro:
        "As with any injectable treatment, bio-stimulators carry potential risks and side effects, which the doctor explains before any treatment proceeds.",
      common: "Temporary redness, swelling, bruising or tenderness at the injection sites.",
      lessCommon:
        "Delayed-onset lumps or nodules have been reported with collagen-stimulating products, sometimes months after treatment, and rare but serious vascular complications are recognised for facial injectables in general.",
      cannotDo: [
        "It does not add volume on the day: change develops gradually over months.",
        "It cannot be dissolved the way a hyaluronic acid filler can.",
        "It is not permanent. The material is resorbed, and your own tissue continues to age.",
      ],
      disclose:
        "Tell your doctor about any allergy, keloid or hypertrophic scarring, bleeding disorder or blood-thinning medication, autoimmune condition, and any previous injectable, implant or surgery in the area.",
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
          "This distinction matters. Some injectables sit within the tissue to provide structural fill; bio-stimulators are formulated to work more gradually, with the aim of prompting the skin's natural renewal processes over a period of weeks. Which approach is appropriate depends on the individual, and this is something a doctor assesses during consultation.",
        ],
      },
      {
        heading: "How does a bio-stimulator work with your own collagen?",
        body: [
          "Bio-stimulators are delivered by injection into targeted layers of the skin. The formulation acts as a scaffold within the tissue, and the body is intended to respond by gradually renewing its own supporting structures around it.",
          "Because the process is gradual, bio-stimulators are typically approached as a course of sessions rather than a single treatment. How an individual responds, and how many sessions may be considered, varies between people and is assessed by the doctor.",
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
    durationDowntime: "Consult required · Recovery varies",
    name: "Exosome Therapy",
    category: "Regenerative",
    image: "/images/treatments/exosome-therapy.jpg",
    summary:
      "A regenerative approach used alongside other treatments for skin and scalp concerns.",
    leadAnswer:
      "Exosome therapy is a regenerative approach sometimes used alongside other treatments for skin and scalp concerns. The evidence base continues to develop; a consultation is required to assess whether it is appropriate for you.",
    related: ["skin-booster"],
    reviewedBy: "dr-william-yap",
    lastReviewed: "2026-06-05",
    seoTitle: "Exosome Therapy Malaysia | Regenerative Treatment | Kaiteki",
    seoDescription:
      "Exosome therapy in Malaysia, a regenerative approach for skin and scalp concerns. Book a free consultation with a Kaiteki doctor to assess suitability.",
    // The caption names PRP rather than exosomes, because that is what the
    // photograph shows. The page says exosome therapy is often paired with a
    // PRP procedure, so the image belongs here — but captioning it as exosomes
    // would be labelling one treatment with another's picture.
    figures: [
      {
        src: "https://cdn.kaiteki.my/treatments/exosome-therapy/prp.jpg",
        caption:
          "A PRP preparation drawn up at the couch — one of the procedures exosome therapy is combined with.",
      },
    ],
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
        body: "A regenerative approach applied after energy-based treatment to support skin recovery. It is offered as an adjunct rather than a standalone acne treatment.",
        links: [{ href: "/concerns/acne", label: "Read about acne" }],
      },
      {
        title: "The scalp, alongside medical hair-loss treatment",
        body: "A regenerative preparation applied to the scalp to support the follicular environment, offered as an adjunct to medical management. It is not a substitute for finding the cause.",
        links: [{ href: "/concerns/hair-loss", label: "Read about hair loss" }],
      },
    ],
    routesNote:
      "Exosome therapy is used alongside other treatments, not instead of them. The evidence base is still developing, so a doctor will be explicit at consultation about what is established and what is not before suggesting it to anyone.",

    ctaMid: {
      heading: "Wondering whether exosome therapy adds anything to your plan?",
      body: "It is an adjunct, so whether it belongs in your plan depends on what it would accompany. A doctor will explain what the current evidence does and does not support. Free consultation, no obligation.",
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
    bringToConsult:
      "Please share your full medical, skincare and hair history at consultation so the doctor can advise you safely. Because this is an emerging treatment, your doctor will also discuss what is and is not known before you decide.",

    // T-10 — step 1 states the first visit is not a treatment.
    sessionSteps: [
      {
        title: "Consultation and assessment",
        body: "Your first visit is a consultation, not a treatment. A doctor assesses your skin or scalp and decides whether exosome therapy is appropriate, and what it would be combined with.",
      },
      {
        title: "The accompanying procedure",
        body: "Exosome therapy is often combined with another treatment, for example microneedling, a laser, or a PRP (platelet-rich plasma) procedure, so the session is planned around that combination. Because exosomes are small, they are commonly applied after a procedure that briefly opens channels in the skin.",
      },
      {
        title: "Application",
        body: "The exosome preparation is applied to the treated skin or scalp.",
      },
      {
        title: "Afterwards",
        body: "You are given aftercare guidance specific to your treatment. The number of sessions is individual: a short course spaced a few weeks apart is common for regenerative treatments, but your doctor will outline a plan suited to you rather than a fixed package.",
      },
    ],

    // T-11 — RG archetype: same day, the first week, cadence.
    afterSession: {
      intro:
        "Downtime depends largely on any procedure exosome therapy is combined with, and varies between individuals.",
      bands: [
        {
          title: "The same day",
          body: "When paired with microneedling or a laser, temporary redness, mild swelling or sensitivity can occur.",
        },
        {
          title: "The first week",
          body: "These typically settle over the following days.",
        },
        {
          title: "Across a course",
          body: "Any change tends to develop gradually over the weeks after treatment rather than immediately, and the extent varies between individuals.",
        },
      ],
      aftercare:
        "Gentle skincare and sun protection are usually advised afterwards. Your doctor will give aftercare guidance specific to your treatment.",
    },

    // T-12
    risks: {
      intro:
        "As with any medical procedure, exosome therapy carries risks, which are explained during consultation.",
      common: "Redness, swelling, sensitivity or irritation at the treated area.",
      lessCommon:
        "Any procedure it is combined with, such as microneedling, a laser or PRP, carries its own considerations, which are explained alongside it.",
      cannotDo: [
        "It is not a standalone acne treatment. It is offered as an adjunct, applied after energy-based treatment to support skin recovery.",
        "It is not a treatment for hair loss in its own right, and it is not a substitute for finding the cause.",
        "It is not an established treatment in the way the procedures it accompanies are. The evidence base continues to develop, and your doctor will discuss its current limits so you can make an informed decision.",
      ],
      disclose:
        "Tell your doctor if you are or may be pregnant or breastfeeding, and share your full medical, skincare and hair history, including any skin or scalp condition and any medication.",
    },

    // T-13 — factors only, no figures (settled 2026-09-20).
    costFactors: {
      intro:
        "Kaiteki does not quote prices online. Exosome therapy is almost always planned as part of a combination rather than on its own, so the figure only means anything once that combination is decided. What moves it:",
      factors: [
        "The concern being addressed.",
        "The area treated, skin or scalp.",
        "Any treatment it is combined with.",
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
          "Exosome therapy applies preparations of these vesicles to the skin or scalp, usually as part of a wider treatment plan rather than on its own. It is an emerging area, and the evidence base continues to develop, so a doctor assesses whether it is appropriate for you during consultation.",
        ],
      },
      {
        heading: "Why is exosome therapy applied after another procedure?",
        body: [
          "The aim of exosome therapy is to support the skin's or scalp's own repair and renewal processes by delivering exosome-based signalling molecules to the treated area. Because exosomes are small, they are commonly applied after a procedure that briefly opens channels in the skin, such as microneedling or certain lasers.",
          "How an individual responds varies, and any change tends to develop gradually rather than immediately. Your doctor will explain what is realistic for your skin or scalp and how exosome therapy fits your overall plan.",
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
    durationDowntime: "Consult required · Recovery varies",
    name: "Double Eyelid",
    category: "Eyes",
    image: "/images/treatments/double-eyelid.jpg",
    summary: "A procedure to create or refine an upper-eyelid crease, assessed individually.",
    leadAnswer:
      "Double-eyelid treatment creates or refines an upper-eyelid crease and is assessed individually within the clinic's scope of practice. Eyelid anatomy decides which method applies, and whether either of them does, so it is examined in person before anything is arranged.",
    related: [],
    reviewedBy: "dr-lim-xiao-chien",
    lastReviewed: "2026-06-01",
    seoTitle: "Double Eyelid Surgery Malaysia | Crease Procedure | Kaiteki",
    seoDescription:
      "Double-eyelid procedure in Malaysia to create or refine an upper-eyelid crease. Book a free consultation with a Kaiteki doctor to assess suitability.",
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
        body: "The doctor works along the marked line, using the suture or incisional method agreed at your consultation.",
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
          "A double eyelid refers to the crease that forms across the upper eyelid. Many people of Asian descent naturally have a single eyelid without this crease, and some wish to create or refine one. Double-eyelid treatment is a minor procedure that aims to form or adjust this upper-eyelid crease.",
          "It is a surgical procedure and is assessed individually within the clinic's scope of practice. Whether it suits you depends on your eyelid anatomy, skin and medical history, which a doctor evaluates during consultation.",
        ],
      },
      {
        heading: "Methods: suture and incisional",
        body: [
          "There are two broad approaches. The suture (embedding) method uses small access points through which fine sutures are placed to form the crease, without a continuous incision. The incisional method uses an incision along the intended crease line and is sometimes considered where there is excess skin or fat, or where a suture approach is less suitable.",
          "The two methods differ in recovery and how long the crease tends to hold. Which approach is appropriate, if any, is decided by the treating doctor based on your eyelids and goals, and discussed at consultation.",
        ],
      },
      {
        heading: "What it may help with",
        body: [
          "Double-eyelid treatment is commonly considered by people who wish to change the appearance of the upper eyelid. Eyelid anatomy varies a great deal between individuals, and a doctor examines the lid, its skin and its fat before saying whether a suture approach, an incision approach, or neither, fits.",
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
          "Some swelling and bruising of the eyelids is expected afterwards and settles over time. Recovery varies with the method and the individual: the suture approach generally involves a shorter period of swelling than the incisional approach.",
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
          "The approach, and the overall cost, depend on your eyelid anatomy, the method chosen and your individual assessment. A suture method and an incision method are different procedures with different costs, and which one applies is not something that can be settled before the lid is examined. Message us on WhatsApp to book that examination.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does recovery take after double-eyelid treatment?",
        a: "It varies between individuals and by method. Swelling and bruising are expected early on, and many people return to everyday activities within around ten to fourteen days. The eyelids continue to settle over the following weeks to months, and the crease you see in the first fortnight is not the crease you keep. Your surgeon will tell you what the recovery looks like for the method used.",
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
    durationDowntime: "15-30 min · Minimal downtime (1-3 days)",
    name: "Vascular / Pigment Laser",
    category: "Lasers",
    image: "/images/treatments/vascular-pigment-laser.jpg",
    summary:
      "Laser and light-based devices used for visible blood vessels, redness and pigment concerns.",
    leadAnswer:
      "Vascular / Pigment Laser refers to devices used to address visible blood vessels, facial redness and pigment concerns using targeted wavelengths of light. At Kaiteki this includes Pro Yellow and M22 IPL, alongside the dedicated DermaV platform. Which of the three a doctor reaches for turns on whether the target is a vessel or a pigment, and how deep it sits — a distinction made at examination.",
    related: ["pico-laser"],
    reviewedBy: "dr-jeremy-low",
    lastReviewed: "2026-07-13",
    seoTitle: "Pigmentation & Vascular Laser Malaysia | Kaiteki",
    seoDescription:
      "Laser treatment in Malaysia for pigmentation, redness and visible vessels using M22 IPL, Pro Yellow and DermaV. Book a free consultation at Kaiteki.",
    // `vascular-lesions.png` stays out: it is a magnified side-by-side of a
    // treated and an untreated leg — a before/after in all but name, and the
    // treatment revamp ships none (docs/13 §3.3, ADR-0001). The Pro Yellow
    // session photograph below was mis-filed under pico-laser by the first
    // media pass; Pro Yellow is the QuadroStar 577nm, which belongs here.
    figures: [
      {
        src: "https://cdn.kaiteki.my/treatments/vascular-pigment-laser/pro-yellow-laser.jpg",
        caption:
          "A Pro Yellow pass across the cheek, with the patient's eyes shielded for the wavelength.",
      },
    ],
    manufacturerImages: [
      {
        src: "https://cdn.kaiteki.my/treatments/vascular-pigment-laser/logo-quadrostar.png",
        alt: "QuadroStar manufacturer logo",
        caption: "QuadroStar — the manufacturer's mark for the vascular and pigment laser platform.",
      },
    ],
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
          "This category is commonly considered for the following concerns. Which of the three devices fits, if any of them does, turns on whether the target is a vessel or a pigment and how deep it sits — a distinction a doctor makes at examination, not one you can make from a mirror.",
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
          "The visit starts with the doctor working out what is actually being looked at — a vessel, a pigment, or both — because that determines everything after it. If a vascular or pigment laser is appropriate, the doctor selects the device and settings suited to your concern, and a patch or test area may be considered before proceeding.",
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
          "As with any medical procedure, these treatments carry risks, which are explained during consultation. Temporary effects can include redness, swelling or changes in pigmentation. Treating a vessel with a wavelength meant for pigment, or the reverse, is the mistake that causes the rest — which is what the pre-treatment assessment and any test patch exist to prevent.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "The number of sessions and overall cost depend on the device used, the concern being addressed and your individual response. Three platforms sit in this category and they are not priced alike, so the figure follows the doctor's choice of device rather than preceding it. Message us on WhatsApp to have your skin looked at first.",
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
        a: "It varies. A course of several sessions spaced a few weeks apart is common, but the plan depends on your concern and how your skin responds. Vessels in particular can recur because the tendency behind them remains, so the doctor will be clear about whether you are looking at a course or an ongoing arrangement.",
      },
    ],
  },
  {
    slug: "resurfacing-laser",
    durationDowntime: "30-60 min · 5-7 days recovery",
    name: "Resurfacing Laser",
    category: "Lasers",
    image: "/images/treatments/resurfacing-laser.jpg",
    summary: "A fractional CO2 laser used for skin texture, scarring and pore concerns.",
    leadAnswer:
      "Resurfacing Laser at Kaiteki uses fractional CO2 laser technology to create controlled micro-injury columns in the skin, prompting a renewal response. It is commonly considered for texture, scarring and enlarged-pore concerns. It asks more of both recovery and skin type than the non-ablative lasers do, so a doctor is deliberate about who it is offered to.",
    related: ["pico-laser", "microneedling"],
    reviewedBy: "dr-chang-chee-seong",
    lastReviewed: "2026-07-13",
    seoTitle: "CO2 Resurfacing Laser Malaysia | Kaiteki",
    seoDescription:
      "Fractional CO2 resurfacing laser in Malaysia for skin texture, acne scarring and pores. Book a free consultation with a Kaiteki doctor to assess suitability.",
    // `retinopeel.jpg` is held on two counts: it is an opaque packaging JPEG,
    // which `manufacturerImages` renders as a white rectangle on page ground,
    // and NeoStrata makes a peel kit rather than the laser this page describes.
    figures: [
      {
        src: "https://cdn.kaiteki.my/treatments/resurfacing-laser/chemical-peel.jpg",
        caption: "Product applied to the face in sections, with a handpiece held above the treated area.",
      },
    ],
    sections: [
      {
        heading: "What is Resurfacing Laser treatment?",
        body: [
          "Resurfacing Laser refers to ablative and fractional laser technology (at Kaiteki, a fractional CO2 laser) that works by creating a controlled pattern of micro-injury columns across the treated skin, leaving surrounding tissue intact to support recovery.",
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
          "Resurfacing Laser is commonly considered for the following concerns. It asks more of both recovery and skin type than anything else in this category, so a doctor is correspondingly careful about who it is offered to, and will say when it is not the right tool.",
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
          "Suitability is assessed individually. Fractional CO2 resurfacing may not be appropriate during pregnancy, with certain skin conditions, active infection or a history of keloid scarring, or on recently tanned skin. A history of cold sores and any tendency to scar badly are the two things worth raising unprompted at consultation — both change whether, and how, this is done.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "The visit begins with the doctor assessing your skin type and scarring history, both of which carry more weight here than on any other laser at the clinic. Topical numbing is usually applied beforehand to help with comfort. If resurfacing is appropriate, the laser is passed across the treatment area at settings chosen for your skin.",
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
          "As with any medical procedure, Resurfacing Laser carries risks, which are explained during consultation. Temporary effects can include redness, swelling, peeling and changes in pigmentation. Because this is an ablative laser, the skin is genuinely wounded and then heals, so infection and scarring are real if uncommon possibilities — which is why aftercare here is instruction rather than advice.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "The number of sessions and overall cost depend on the concern being addressed, the treatment depth and your individual response. Depth and density are set for your skin type, and they are what the cost tracks — which is why it is confirmed at consultation rather than published as a rate. Message us on WhatsApp to arrange one.",
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
    durationDowntime: "20-30 min · No downtime",
    name: "Microwave Contouring",
    category: "Body & Slimming",
    image: "/images/treatments/microwave-contouring.jpg",
    summary: "Microwave-based technology used for body-contouring, cellulite and firmness concerns.",
    leadAnswer:
      "Microwave Contouring uses microwave-based energy, delivered at Kaiteki through the Onda platform, to address localised fat, cellulite appearance and skin firmness. Which areas are treatable, and whether any of yours are, is settled by examining the area rather than by naming the concern.",
    related: ["fat-freezing", "muscle-stimulation"],
    reviewedBy: "dr-jacqueline-tan",
    lastReviewed: "2026-07-13",
    seoTitle: "Onda Microwave Contouring Malaysia | Kaiteki",
    seoDescription:
      "Onda microwave contouring in Malaysia for localised fat, cellulite appearance and firmness. Book a free consultation with a Kaiteki doctor to check suitability.",
    // The zone gallery (docs/13 §6) — 15 die-cut files, 11 subjects. The four
    // `*-2` files are the same photographs cut to a circle instead of the
    // scalloped shape, so shipping both would show one body area twice.
    figures: [
      {
        src: "https://cdn.kaiteki.my/treatments/microwave-contouring/onda-coolwave-therapy.png",
        caption:
          "The Onda handpiece being moved across the abdomen during a session, with the console beside the couch.",
      },
    ],
    // Labels name the body area, not the concern. The source filenames are
    // concern-shaped ("heavyjowl", "dullskin", "skinlaxity") and each photograph
    // is simply that part of the body — a captioned grid of named defects reads
    // as an indication list on an advertisement page (docs/02 §8).
    areas: [
      { label: "Forehead and brow", src: "https://cdn.kaiteki.my/treatments/microwave-contouring/area-skin-laxity.png" },
      { label: "Cheeks", src: "https://cdn.kaiteki.my/treatments/microwave-contouring/area-dull-skin.png" },
      { label: "Nasolabial folds", src: "https://cdn.kaiteki.my/treatments/microwave-contouring/area-nasolabial.png" },
      { label: "Jowls", src: "https://cdn.kaiteki.my/treatments/microwave-contouring/area-heavy-jowl.png" },
      { label: "Jawline", src: "https://cdn.kaiteki.my/treatments/microwave-contouring/area-sagging-jawline.png" },
      { label: "Under the chin", src: "https://cdn.kaiteki.my/treatments/microwave-contouring/area-double-chin.png" },
      { label: "Upper arms", src: "https://cdn.kaiteki.my/treatments/microwave-contouring/area-upper-arms.png" },
      { label: "Back and bra line", src: "https://cdn.kaiteki.my/treatments/microwave-contouring/area-bra-fat.png" },
      { label: "Flanks and waist", src: "https://cdn.kaiteki.my/treatments/microwave-contouring/area-love-handles.png" },
      { label: "Thighs", src: "https://cdn.kaiteki.my/treatments/microwave-contouring/area-thigh.png" },
      { label: "Knees", src: "https://cdn.kaiteki.my/treatments/microwave-contouring/area-knees.png" },
    ],
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
          "Microwave energy is delivered beneath the skin's surface while built-in cooling helps keep the surface protected during treatment. The energy is intended to act on the targeted tissue, for example localised fat cells or the fibrous bands associated with cellulite, and may also prompt a gradual collagen-remodelling response supporting firmness.",
          "Settings and applicator are selected by the treating doctor for the area and your skin. Results develop over time and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Microwave Contouring is commonly considered for the concerns below. Which areas are worth treating — and whether any of them are — is settled by examining the area itself, because the same concern name covers very different tissue from one person to the next.",
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
          "A course of several sessions spaced a few weeks apart is common, but the plan is individual, and how many areas you are treating changes it as much as how many sessions.",
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
          "As with any medical procedure, Microwave Contouring carries risks, which are explained during consultation. Temporary effects can include redness, swelling, warmth or tenderness in the treated area. The energy is thermal, so the risk that matters is over-heating a spot; it is managed by keeping the handpiece moving and by treating within the doctor's assessment of what the tissue can take.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "The number of sessions and overall cost depend on the area being treated, the concern being addressed and your individual response. A facial area and a body area take very different amounts of time on the handpiece, so cost follows the areas agreed at consultation. Message us on WhatsApp to arrange one.",
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
        a: "It varies. A course of several sessions spaced a few weeks apart is common, but the plan depends on the area treated and how you respond. A body area generally takes more sessions than a facial one, simply because there is more of it.",
      },
    ],
  },
  {
    slug: "muscle-stimulation",
    durationDowntime: "20-30 min · No downtime",
    name: "Muscle Stimulation",
    category: "Body & Slimming",
    image: "/images/treatments/muscle-stimulation.jpg",
    summary: "Electromagnetic muscle-stimulation technology used for body-toning concerns.",
    leadAnswer:
      "Muscle Stimulation at Kaiteki uses the Schwarzy (Em-Fit) platform, which delivers electromagnetic energy intended to induce muscle contractions that can be difficult to achieve through voluntary exercise alone. It is considered for body-toning concerns as part of an individual plan. It acts on muscle rather than on fat or body weight, and a doctor will confirm that is actually what you are after before a block of sessions is planned.",
    related: ["fat-freezing", "microwave-contouring"],
    reviewedBy: "dr-joaan-kong",
    lastReviewed: "2026-07-13",
    seoTitle: "Muscle Stimulation Treatment Malaysia | Kaiteki",
    seoDescription:
      "Electromagnetic muscle-stimulation treatment in Malaysia for body-toning concerns as part of an individual plan. Book a free consultation at Kaiteki.",
    figures: [
      {
        src: "https://cdn.kaiteki.my/treatments/muscle-stimulation/schwarzy.jpg",
        caption: "A Schwarzy applicator and its strap, positioned before the belt is fastened over the area.",
      },
    ],
    manufacturerImages: [
      {
        src: "https://cdn.kaiteki.my/treatments/muscle-stimulation/logo-schwazy.png",
        alt: "Schwarzy manufacturer logo",
        caption: "Schwarzy — the manufacturer's mark for the electromagnetic muscle-stimulation device.",
      },
    ],
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
          "The device delivers electromagnetic energy through an applicator placed over the target muscle group, inducing supramaximal contractions, a level of contraction that is difficult to achieve through voluntary exercise alone.",
          "Repeated contractions during a session are intended to work the muscle in a concentrated way. Any change in muscle tone develops gradually over a course of sessions and varies between individuals; it is not a substitute for regular exercise.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Muscle Stimulation is commonly considered for the following concerns. It acts on muscle, not on fat and not on body weight, and a doctor will say so plainly at consultation if what you are hoping for is something this treatment does not do.",
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
          "A course of several sessions spaced across a few weeks is common, but the plan is individual, and it is usually written as a block rather than as visits booked one at a time.",
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
          "As with any medical procedure, Muscle Stimulation carries risks, which are explained during consultation. Temporary effects can include muscle soreness, mild redness or tenderness at the treated area. The more important limits are absolute rather than statistical: metal implants, pacemakers and copper IUDs in or near the treatment field rule the treatment out, which is why the medical history is taken before the belt goes on.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "The number of sessions and overall cost depend on the area treated, your goals and your individual response. Sessions here are usually booked as a short block rather than singly, so the figure that matters is the block's, and it is set at consultation. Message us on WhatsApp to arrange one.",
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
        a: "There is generally no set downtime. Muscle soreness similar to that after exercise can occur and typically settles within a few days; people who have not trained the area recently tend to notice it more.",
      },
      {
        q: "How many sessions will I need?",
        a: "It varies. A course of several sessions spaced across a few weeks is common, but the plan depends on your goals and how you respond. Like any muscle work, what it holds depends on what you do between and after the sessions, and the doctor will say so.",
      },
    ],
  },
  {
    slug: "dermal-fillers",
    durationDowntime: "15-30 min · 1-3 days",
    name: "Dermal Fillers",
    category: "Injectables",
    image: "/images/treatments/dermal-fillers.jpg",
    summary: "Hyaluronic-acid injectable fillers used to add volume and support facial contour.",
    leadAnswer:
      "Dermal fillers are hyaluronic-acid (HA) based injectables used by a doctor to add volume or support the shape of specific facial areas. At Kaiteki these include Juvederm, Restylane, Belotero and Art Filler. Filler is placed into the face by a doctor, so facial structure and your medical history are assessed before any product, plane or plan is chosen.",
    related: ["skin-booster", "bio-stimulator", "botulinum-toxin"],
    reviewedBy: "dr-tim-chua",
    lastReviewed: "2026-07-13",
    seoTitle: "Dermal Fillers Malaysia | Juvederm, Restylane | Kaiteki",
    seoDescription:
      "Dermal filler treatment in Malaysia using Juvederm, Restylane, Belotero and Art Filler to support facial volume and contour. Book a free consultation at Kaiteki.",
    figures: [
      {
        src: "https://cdn.kaiteki.my/treatments/dermal-fillers/dermal-fillers.jpg",
        caption: "Syringes positioned at the temple and the cheek — two of the planes filler is placed in.",
      },
    ],
    manufacturerImages: [
      {
        src: "https://cdn.kaiteki.my/treatments/dermal-fillers/logo-juvaderm.png",
        alt: "Juvéderm manufacturer logo",
        caption: "Juvéderm — the manufacturer's mark for its hyaluronic acid filler range.",
      },
      {
        src: "https://cdn.kaiteki.my/treatments/dermal-fillers/logo-restylane.png",
        alt: "Restylane manufacturer logo",
        caption: "Restylane — the manufacturer's mark for its hyaluronic acid filler range.",
      },
    ],
    sections: [
      {
        heading: "What are dermal fillers?",
        body: [
          "Dermal fillers are injectable gels based on hyaluronic acid (HA), a substance naturally present in skin. Unlike bio-stimulators, which work gradually by supporting the skin's own structural renewal, HA fillers are formulated to sit within the tissue and provide volume or support more directly once injected.",
          "At Kaiteki this includes Juvederm, Restylane, Belotero and Art Filler, established HA filler ranges that differ in gel formulation and are used across different facial areas.",
          "Art Filler, from Laboratoires Fillmed, is one of the ranges available here; like the others, it is selected by the doctor for a specific area rather than chosen from a menu. Because it is an injectable, it is performed by a doctor, who assesses whether filler is appropriate for you at consultation.",
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
          "Dermal fillers are commonly considered for the following concerns. Filler is a medical device placed into the face by a doctor, so the assessment covers facial structure and your medical history before any decision about whether, and where, it is appropriate.",
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
    durationDowntime: "30-60 min · No downtime",
    name: "Facial Treatments",
    category: "Facials",
    image: "/images/treatments/facial-treatments.jpg",
    summary: "Clinic facials used to support skin cleansing, exfoliation and general skin quality.",
    leadAnswer:
      "Facial Treatments at Kaiteki are clinic-based facials, including Hydrafacial and Silkpeel, that combine cleansing, exfoliation and skin-conditioning steps to support general skin quality. Suitability and results vary between individuals; a consultation helps determine which option, if any, is appropriate for you.",
    related: ["pico-laser", "skin-booster"],
    reviewedBy: "dr-calvin-tan",
    lastReviewed: "2026-07-13",
    seoTitle: "Facial Treatments Malaysia | Hydrafacial, Silkpeel | Kaiteki",
    seoDescription:
      "Clinic facial treatments in Malaysia, including Hydrafacial and Silkpeel, to support skin cleansing and quality. Book a free consultation at Kaiteki.",
    figures: [
      {
        src: "https://cdn.kaiteki.my/treatments/facial-treatments/hydroglow.jpg",
        caption: "The cleansing and extraction stage of a facial, worked over with pads before the device passes.",
      },
    ],
    manufacturerImages: [
      {
        src: "https://cdn.kaiteki.my/treatments/facial-treatments/logo-hydrafacial.png",
        alt: "HydraFacial manufacturer logo",
        caption: "HydraFacial — the manufacturer's mark for the hydradermabrasion system.",
      },
      {
        src: "https://cdn.kaiteki.my/treatments/facial-treatments/logo-silkpeel.png",
        alt: "SilkPeel manufacturer logo",
        caption: "SilkPeel — the manufacturer's mark for the dermalinfusion system.",
      },
    ],
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
          "Facial Treatments are commonly considered for the following concerns, generally as gentle, ongoing skin support. They do not replace medical treatment where a skin condition needs it, and a doctor will tell you at consultation if that is what your skin actually calls for.",
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
          "Facial Treatments are often booked periodically as part of ongoing skin maintenance, though the suitable frequency depends on your skin and goals. Cost depends on which of the facial options is chosen and on what is added to it, so it is confirmed once that is settled rather than quoted online. Message us on WhatsApp to arrange an assessment.",
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
    durationDowntime: "15-45 min · No downtime",
    name: "Laser Hair Removal",
    category: "Hair Removal",
    image: "/images/treatments/laser-hair-removal.jpg",
    summary: "IPL and radiofrequency technology used to reduce unwanted hair over a course of sessions.",
    leadAnswer:
      "Laser Hair Removal at Kaiteki uses the Alma platform, which combines IPL (intense pulsed light) and radiofrequency energy, to target hair follicles over a course of sessions. Suitability and results vary between individuals and hair type; a consultation is required to assess whether it is appropriate for you.",
    related: ["exosome-therapy"],
    reviewedBy: "dr-lucas-chew",
    lastReviewed: "2026-07-13",
    seoTitle: "Laser Hair Removal Malaysia | IPL & RF Treatment | Kaiteki",
    seoDescription:
      "Laser hair removal in Malaysia using IPL and radiofrequency over a course of sessions. Book a free consultation with a Kaiteki doctor to assess suitability.",
    // No net-new photography exists for this page (docs/13 §3, the one
    // EXCLUDE). What does exist is the mark of the platform the copy names in
    // its own lead answer, which is worth more than a generated motif was.
    manufacturerImages: [
      {
        src: "https://cdn.kaiteki.my/treatments/laser-hair-removal/logo-alma-lasers.png",
        alt: "Alma Lasers manufacturer logo",
        caption: "Alma Lasers — the manufacturer's mark for the IPL and radiofrequency platform.",
      },
    ],
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
      body: "Hair colour, skin tone and the reason for the growth all change what a course can reasonably do. A doctor can tell you what is realistic before you commit. Free consultation, no obligation.",
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
      "Please share your full medical, medication and hair-removal history at consultation, including recent waxing, plucking or threading. Hormonal causes of excess hair growth may need investigating alongside treatment.",

    // T-10 — step 1 states the first visit is not a treatment.
    sessionSteps: [
      {
        title: "Consultation and assessment",
        body: "Your first visit is a consultation, not a treatment. The treatment area, hair type and skin tone are assessed, and a test area may be considered first.",
      },
      {
        title: "Before the session",
        body: "You will usually be asked to shave shortly beforehand rather than wax or pluck, because the hair above the skin should be short while the follicle below stays intact.",
      },
      {
        title: "The treatment",
        body: "The area is cleansed and the cooled applicator is moved over it in repeated passes, building warmth gradually. Most people describe spreading warmth rather than the snap of a stamping device.",
      },
      {
        title: "Afterwards",
        body: "A course of several sessions spaced a few weeks apart is common, reflecting the hair-growth cycle, but the plan is individual.",
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
        "Sun protection is advised on treated areas between sessions; your clinician will give aftercare guidance specific to you.",
    },

    // T-12
    risks: {
      intro:
        "As with any energy-based procedure, Laser Hair Removal carries risks, which are explained during consultation.",
      common: "Redness, swelling or changes in pigmentation.",
      lessCommon:
        "Blistering, burns, folliculitis and, rarely, paradoxical stimulation of fine hair in some areas. Serious effects are uncommon when the treatment is appropriately selected and performed by a trained clinician.",
      pigmentNote:
        "Light-based hair removal generally works best where there is more contrast between hair and skin pigment. Alma describes its low-fluence, high-repetition delivery with a cooled applicator tip as usable on darker skin, but recently tanned skin is generally not treated.",
      cannotDo: [
        "It is not permanent removal. It reduces hair over a course of sessions, and some regrowth or maintenance sessions may be needed over time.",
        "One session cannot do it, because only follicles in their active growth phase respond to any one session.",
        "Very light, grey or white hair contains little pigment for light to target on any platform.",
      ],
      disclose:
        "Tell your clinician if you are pregnant, have recent tanning, tattoos or permanent makeup in the area, a light-sensitive condition or keloid tendency, or take photosensitising medication.",
    },

    // T-13 — factors only, no figures (settled 2026-09-20).
    costFactors: {
      intro:
        "Kaiteki does not quote prices online. Courses are priced by area across a series rather than per visit, and the series is set at consultation. What moves it:",
      factors: [
        "The area treated.",
        "Your hair type: colour, thickness and density.",
        "Your individual response across the course.",
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
          "Laser Hair Removal is a treatment intended to reduce unwanted hair by targeting the hair follicle with light or energy-based technology. At Kaiteki this is delivered using the Alma platform, which combines IPL (intense pulsed light) with radiofrequency energy.",
          "It is generally considered for areas such as the underarms, legs, arms or face. Whether it suits you depends on your hair type, skin tone and medical history, which a doctor or trained clinician assesses during consultation.",
        ],
      },
      {
        heading: "Why does hair removal need a course of sessions?",
        body: [
          "The device delivers IPL energy combined with radiofrequency to the treatment area. The light energy is intended to be absorbed by pigment in the hair follicle, while the radiofrequency component adds a further energy pathway to the follicle, which may support the treatment's effect on the hair-growth cycle.",
          "Because hair follicles cycle through active and resting phases, a single session only affects follicles that are in an active growth phase at the time. A course of sessions over time is intended to address more of the follicles across their cycle. Results vary between individuals and hair and skin type.",
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
