import type { Concern } from "@/lib/types";
// Relative + import attribute, not the "@/" alias: the validate:* scripts load
// this module through node --experimental-strip-types, which resolves neither.
import registry from "../../config/concerns.json" with { type: "json" };

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
      "Active breakouts and old scarring respond to different treatments. A doctor identifies the type and cause before recommending a plan.",
    leadAnswer:
      "Acne is a common skin condition in which pores become blocked, sometimes leading to spots, inflammation and, over time, scarring. It has several causes and types, so what helps one person may not suit another. A consultation helps determine which approach, if any, is appropriate for your skin.",
    treatments: [
      "pico-laser",
      "microneedling",
      "exosome-therapy",
      "resurfacing-laser",
      "facial-treatments",
    ],
    reviewedBy: "dr-jessie-lim",
    lastReviewed: "2026-06-22",
    seoTitle: "Acne & Acne Scar Treatment in Malaysia | Kaiteki",
    seoDescription:
      "Active acne and acne scarring are different problems with different treatments. A doctor assesses which you have. Book a free consultation at Kaiteki.",

    // ── 01 · the banner pair. Subject hard left, headline in the right half.
    // The alt describes the illustrative photograph as what it is: this is not
    // a Kaiteki patient and not a result, so it must not read as either.
    banner: {
      src: "https://cdn.kaiteki.my/concerns/acne/banner.jpg",
      sm: "https://cdn.kaiteki.my/concerns/acne/banner-sm.jpg",
      alt: "Illustrative photograph: a person holding a magnifying glass over a spot on their cheek",
    },

    // ── 02 · three neutral process facts. The v2 spec's "results in 4–8 weeks"
    // was removed outright: it is an outcome promise (R-01), and it is wrong for
    // scarring, where collagen remodelling continues for months.
    facts: [
      {
        value: "Very common",
        label: "Affects up to 85% of people aged 12–24, and can continue or begin in adulthood.",
      },
      {
        value: "Two different problems",
        label:
          "Active breakouts and the marks or scarring left behind need different approaches.",
      },
      {
        value: "Assessment first",
        label:
          "A doctor examines your skin and explains the options and risks before any treatment.",
      },
    ],

    // ── 02b · seven decision points, not eighteen sections (R-13).
    jumpNav: [
      { id: "which-type", label: "Which type do I have?" },
      { id: "where", label: "Where it appears" },
      { id: "treatments", label: "Treatments" },
      { id: "first-visit", label: "Your first visit" },
      { id: "risks", label: "Risks" },
      { id: "cost", label: "Cost" },
      { id: "faq", label: "FAQ" },
    ],

    sections: [
      {
        heading: "What is acne?",
        body: [
          "Acne occurs when hair follicles become blocked with oil and dead skin cells. That blockage can stay quiet as a blackhead or whitehead, or it can become inflamed and form a red, tender spot. It most often appears on the face, but the back, chest and shoulders are also common.",
          "Acne is a medical condition, not just a cosmetic one. It affects teenagers and adults, and it is one of the most common reasons people see a doctor about their skin. Understanding which type you have is the first step in working out whether treatment is likely to help.",
        ],
      },
    ],

    // ── 04 · archetype A: causes. Bold lead-in per bullet — scannable, and the
    // shape an assistant quotes cleanly.
    drivers: {
      heading: "Common causes",
      intro:
        "Acne is usually driven by several factors at once rather than one single cause. The main ones are:",
      items: [
        {
          lead: "Hormonal changes:",
          body: "puberty, menstrual cycles, pregnancy, polycystic ovary syndrome, or stopping hormonal contraception.",
        },
        {
          lead: "Excess sebum and blocked pores:",
          body: "oil glands producing more than the skin can clear, and dead skin cells building up inside the follicle instead of shedding.",
        },
        {
          lead: "Inflammation and skin bacteria:",
          body: "Cutibacterium acnes multiplying in a blocked follicle and triggering redness and swelling.",
        },
        {
          lead: "Contributing factors:",
          body: "family history, certain medications, occlusive skincare or makeup, humidity and sweat, friction from helmets, straps or masks.",
        },
      ],
      outro:
        "Diet, stress and sleep can influence acne for some people, but they are rarely the whole picture on their own.",
    },

    // ── 04 media · one figure per cause, in the same order as `drivers.items`.
    // Every one is a photograph with its subject left and the right half empty,
    // so the caption sits in that space and carries the meaning — the image
    // itself is decorative and renders with an empty alt.
    figures: [
      {
        src: "https://cdn.kaiteki.my/concerns/acne/hormonal-changes.jpg",
        caption:
          "Hormonal shifts change how much oil the skin produces, which is why adult acne often sits along the jaw and chin.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/acne/sebum-skin-debris.jpg",
        caption:
          "Oil and dead skin cells collect inside the follicle. That blockage is where every type of acne begins.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/acne/inflammation.jpg",
        caption:
          "When a blocked follicle becomes inflamed, the spot turns red, raised and tender to touch.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/acne/skincare-habits.jpg",
        caption:
          "Heavy or occlusive products can worsen blockage on skin that is already prone to it.",
      },
    ],

    // ── 05 · the differentiator. Three tabs, each ending in a routing line that
    // sends a different group to a different treatment set. This orients; it
    // never states a conclusion about the reader — the doctor diagnoses.
    variant: {
      kind: "tabs",
      heading: "Which type do I have?",
      intro:
        "Most people arrive with a mix. Working out the balance matters, because treating scarring while acne is still active usually does not work well, and treating active acne will not remove existing scars.",
      tabs: [
        {
          label: "Active acne",
          sub: "Spots you have now",
          title: "Active acne",
          body: "Spots that are currently forming. These are usually treated medically first, with topical or oral treatment, because settling the inflammation protects the skin from further marking and scarring.",
          items: [
            {
              lead: "Comedonal:",
              body: "blackheads and whiteheads, no redness. Often across the forehead, nose and chin.",
            },
            {
              lead: "Inflammatory:",
              body: "red papules and pustules that are tender to touch.",
            },
            {
              lead: "Nodulocystic:",
              body: "deep, firm, painful lumps under the skin that do not come to a head. This type carries the highest risk of permanent scarring and should be assessed sooner rather than later.",
            },
          ],
          routing:
            "medical management first, with clinic facials or RF microneedling considered as support once the doctor advises it.",
        },
        {
          label: "Marks",
          sub: "Flat red or brown",
          title: "Post-acne marks",
          body: "Flat discolouration left behind after a spot has healed. The skin is smooth to the touch. Only the colour is different. Marks often fade on their own over months, but treatment can shorten that.",
          items: [
            {
              lead: "Red or purple marks",
              body: "(post-inflammatory erythema), from dilated blood vessels near the surface. More visible on lighter skin.",
            },
            {
              lead: "Brown marks",
              body: "(post-inflammatory hyperpigmentation), from excess pigment produced during inflammation. Very common in the medium and deeper skin tones seen across Malaysia, and worsened by sun exposure.",
            },
          ],
          routing: "pico laser, with daily sunscreen as a non-negotiable part of the plan.",
        },
        {
          label: "Scarring",
          sub: "Texture you can feel",
          title: "Acne scarring",
          body: "A change in the skin's structure, not just its colour. If you run a finger over it, you can feel a dip or an irregularity. Scars do not fade on their own. They are remodelled, gradually, over months.",
          items: [
            {
              lead: "Ice pick:",
              body: "narrow, deep, sharply defined pits. The hardest type to treat with energy devices alone.",
            },
            {
              lead: "Boxcar:",
              body: "wider depressions with defined edges, like a shallow crater.",
            },
            {
              lead: "Rolling:",
              body: "soft, wave-like undulations caused by tethering beneath the skin.",
            },
            {
              lead: "Raised (hypertrophic or keloid):",
              body: "firm, thickened tissue sitting above skin level. More common on the chest, shoulders and back, and treated very differently from depressed scars.",
            },
          ],
          routing:
            "RF microneedling or resurfacing laser, often over several sessions, with combinations chosen by scar type.",
        },
      ],
    },

    // ── 05 media · the type illustrations, grouped. Active acne and scarring
    // are two different problems treated two different ways, so they read as
    // two sets rather than one grid of eight. Transparent scalloped die-cuts:
    // they sit on the page ground, never on a tinted band.
    illustrations: [
      {
        src: "https://cdn.kaiteki.my/concerns/acne/comedonal.png",
        label: "Comedonal",
        sub: "Blackheads and whiteheads, no redness",
        group: "Types of active acne",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/acne/inflammatory.png",
        label: "Inflammatory",
        sub: "Red, raised and tender",
        group: "Types of active acne",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/acne/cystic.png",
        label: "Nodulocystic",
        sub: "Deep, painful, scars most readily",
        group: "Types of active acne",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/acne/hormonal.png",
        label: "Hormonal pattern",
        sub: "Jaw, chin and lower face",
        group: "Types of active acne",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/acne/ice-pick-scars.png",
        label: "Ice pick scars",
        sub: "Narrow, deep, sharply defined",
        group: "Types of scarring",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/acne/boxcar-scars.png",
        label: "Boxcar scars",
        sub: "Wider depressions with defined edges",
        group: "Types of scarring",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/acne/rolling-scars.png",
        label: "Rolling scars",
        sub: "Broad, soft-edged undulations",
        group: "Types of scarring",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/acne/hypertrophic-and-keloid-scars.png",
        label: "Raised scars",
        sub: "Hypertrophic and keloid",
        group: "Types of scarring",
      },
    ],

    // ── 05 media · the stage infographics. Headline and body are burned into
    // the artwork, so these carry no caption and the alt transcribes what the
    // slide says. Transcriptions are provisional and are on the list for
    // editorial sign-off (issue 06) — they must match the artwork verbatim.
    slides: [
      {
        src: "https://cdn.kaiteki.my/concerns/acne/stage-1.jpg",
        alt: "Stage 1, comedonal acne: follicles clog with oil and dead skin cells, forming blackheads and whiteheads without redness.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/acne/stage-2.jpg",
        alt: "Stage 2, inflammatory acne: blocked follicles become inflamed, forming red papules and pustules that are tender to touch.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/acne/stage-3.jpg",
        alt: "Stage 3, nodulocystic acne: inflammation reaches deeper into the skin, forming firm nodules and cysts that carry the highest risk of scarring.",
      },
    ],

    // ── 06 · where it appears. The closing differential card is the honest part,
    // and the part most likely to be cited.
    locationBlock: {
      heading: "Where acne appears",
      intro:
        "Location is a clue, not a diagnosis. The idea that a spot in one place points to a specific organ has no clinical basis, but some patterns are genuinely useful to notice.",
      cards: [
        {
          title: "Chin and jawline",
          body: "Often follows a hormonal pattern, particularly in adult women, and can flare in a monthly cycle. Worth mentioning at consultation if it recurs in the same place.",
        },
        {
          title: "Forehead",
          body: "Commonly linked to oil, sweat, hair products and friction from caps, helmets or fringes. Small rough bumps here are usually closed comedones.",
        },
        {
          title: "Cheeks",
          body: "Friction and contact are frequent contributors: phone screens, pillowcases, mask edges. Cheeks also mark and scar readily, so early assessment matters.",
        },
        {
          title: "Nose",
          body: "Dense oil glands mean blackheads and visible pores are common here. Squeezing tends to worsen both.",
        },
        {
          title: "Back, chest and shoulders",
          body: "Sweat, friction and heavier body products play a part. Lesions here can be larger and are more likely to leave raised rather than depressed scars.",
        },
      ],
      note: {
        title: "Not typical acne?",
        body: "Small uniform bumps that itch, or rashes that do not respond to acne treatment, may be something else entirely, such as folliculitis or rosacea. A doctor can tell the difference.",
      },
    },

    // ── 07
    seeDoctor: {
      intro: "It is reasonable to get your skin looked at if any of the following apply:",
      triggers: [
        "Over-the-counter products have not helped after around eight to twelve weeks of consistent use.",
        "Spots are deep, painful or leaving marks behind.",
        "You are already seeing indentations or texture change.",
        "Breakouts started in adulthood, or changed pattern suddenly.",
        "Your acne is affecting your mood, confidence or how you go about your day.",
      ],
      outro:
        "Earlier assessment matters most with deep or scarring acne, because the aim is to settle inflammation before it leaves permanent change. There is no benefit in waiting to see whether it resolves on its own.",
    },

    // ── 08
    ctaMid: {
      heading: "Not sure which one you're dealing with?",
      body: "Send us a photo on WhatsApp and a doctor can tell you whether you're looking at active acne, marks, scarring, or a combination.",
    },

    // ── 09 · the "why for acne" line on every card is what stops five concern
    // pages that share this treatment list from competing with each other (R-04).
    treatmentsIntro:
      "These are the treatments most often considered for acne at our clinics. None of them is a default. Which one is appropriate, and whether any of them is, depends on what the assessment finds.",
    treatmentWhy: {
      "pico-laser": {
        why: "For post-acne marks and uneven tone",
        body: "A picosecond laser that targets pigment in short, high-speed pulses. Most relevant once acne has settled and what remains is discolouration rather than texture. Typically has minimal downtime.",
      },
      microneedling: {
        why: "For depressed scarring, texture and enlarged pores",
        body: "Fine needles deliver radiofrequency energy into the deeper layer of the skin to stimulate collagen. Often the starting point for rolling and boxcar scarring, and generally considered a lower pigmentation-risk option for medium and deeper skin tones.",
      },
      "resurfacing-laser": {
        why: "For deeper scarring and significant texture change",
        body: "A fractional CO₂ laser used where scarring is more established. More downtime than the options above, and requires careful sun avoidance afterwards. The doctor will weigh this against your skin tone and your schedule.",
      },
      "exosome-therapy": {
        why: "Used alongside other treatments, not instead of them",
        body: "A regenerative approach applied after energy-based treatment to support skin recovery. The evidence base is still developing, and it is offered as an adjunct rather than a standalone acne treatment.",
      },
      "facial-treatments": {
        why: "For congestion, cleansing and ongoing maintenance",
        body: "Hydrafacial and Silkpeel are used to support cleansing and exfoliation, particularly with comedonal congestion. Supportive care. They do not replace medical treatment for inflammatory acne.",
      },
    },
    treatmentsNote:
      "Active inflammatory acne is usually managed medically first. Energy-based treatments are generally considered once breakouts are under control, or alongside medical treatment where the doctor judges it appropriate.",

    // ── 10 · full depth only. "Commonly considered", never "best suited" (R-02),
    // and no column promises a result or a timeframe to one.
    compare: {
      intro:
        "A general guide only. Combinations are common, and the doctor may recommend something different after examining your skin.",
      columns: ["What you have", "Commonly considered", "Typical course", "Downtime"],
      rows: [
        [
          "Active inflammatory acne",
          "Medical management, with supportive facials",
          "Reviewed at 8–12 weeks",
          "None",
        ],
        ["Blackheads & congestion", "Clinic facials, topical treatment", "Ongoing maintenance", "None"],
        ["Red marks after spots", "Pico laser", "Multiple sessions, spaced", "Minimal"],
        [
          "Brown marks after spots",
          "Pico laser + daily sun protection",
          "Multiple sessions, spaced",
          "Minimal",
        ],
        ["Rolling & boxcar scars", "RF microneedling", "Several sessions, ~4 weeks apart", "2–3 days redness"],
        ["Deeper or mixed scarring", "Assessed individually", "Assessed individually", "5–7 days"],
        [
          "Raised or keloid scars",
          "Assessed separately: different approach",
          "Individual",
          "Individual",
        ],
      ],
      note: "Session counts and intervals are set by the doctor after assessment. Skin responds at different rates, and plans are adjusted as they go.",
    },

    // ── results · pre-composited before-and-after in a single file, so the
    // gallery is captioned single images and not a two-panel comparator.
    // `nativeWidth` is the source width recorded in config/concern-media.json
    // (gate rule Q-16): the cell is capped there rather than upscaled, because
    // most of this set is small. Captions say what was treated and nothing
    // more — session counts and intervals are per-patient facts the clinic has
    // to supply, and inventing them here would be an outcome claim.
    results: [
      { src: "https://cdn.kaiteki.my/concerns/acne/before-after-01.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Active acne, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/acne/before-after-02.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Active acne, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/acne/before-after-03.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Active acne, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/acne/before-after-04.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Active acne, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/acne/before-after-05.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Active acne, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/acne/before-after-06.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Acne scarring, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/acne/before-after-07.jpg", nativeWidth: 600, ratio: "1/1", caption: "Active acne, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/acne/before-after-08.jpg", nativeWidth: 600, ratio: "1/1", caption: "Active acne, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/acne/before-after-09.jpg", nativeWidth: 600, ratio: "1/1", caption: "Active acne, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/acne/before-after-10.jpg", nativeWidth: 600, ratio: "1/1", caption: "Active acne, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/acne/before-after-11.jpg", nativeWidth: 600, ratio: "1/1", caption: "Active acne, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/acne/before-after-12.jpg", nativeWidth: 600, ratio: "1/1", caption: "Skin texture and tone, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/acne/before-after-13.jpg", nativeWidth: 600, ratio: "1/1", caption: "Skin texture and tone, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/acne/before-after-14.jpg", nativeWidth: 1412, ratio: "1/1", caption: "Acne scarring, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/acne/before-after-15.jpg", nativeWidth: 1415, ratio: "1/1", caption: "Acne scarring, before and after a course of treatment at Kaiteki" },
      // before-after-16 is deliberately absent: it carries a hold in
      // config/concern-media.json (ownership unconfirmed, ADR-0001 §5) and the
      // sync script refuses to upload it. It can be authored here once the
      // hold is lifted.
      { src: "https://cdn.kaiteki.my/concerns/acne/before-after-17.jpg", nativeWidth: 1735, ratio: "5/4", caption: "Acne and post-acne marks, before and after a course of treatment at Kaiteki" },
    ],

    // ── 12
    firstVisit: {
      intro:
        "The consultation is free and there is no obligation to book treatment afterwards. It usually takes 20 to 30 minutes.",
      steps: [
        {
          title: "History",
          body: "What you've tried, how long it's been going on, your medical history, and any medication or skincare you're currently using.",
        },
        {
          title: "Examination",
          body: "The doctor examines your skin, sometimes under magnification, to identify what's active, what's marking, and what's scarring.",
        },
        {
          title: "Discussion",
          body: "What the options are, what each involves, what the risks and downtime are, and what is realistic for your skin. Including when the honest answer is to wait.",
        },
        {
          title: "Plan",
          body: "If you choose to proceed, a sequence and a review point. You can take the plan away and think about it.",
        },
      ],
      outro:
        "Bring a list of anything you're currently applying or taking, including supplements and oral acne medication. If you have photographs of your skin during a flare, those help too.",
    },

    // ── 12 media · in-clinic photography of a session in progress. Kept out of
    // `results` deliberately: a photograph of a device is not an outcome
    // (docs/11 §3), and these three were reassigned here for exactly that.
    visitImages: [
      {
        src: "https://cdn.kaiteki.my/concerns/first-visit/treatment-in-progress-01.jpg",
        caption: "The doctor examines the skin, sometimes under magnification, before anything is recommended.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/first-visit/treatment-in-progress-02.jpg",
        caption: "Device and settings are matched to your skin type rather than to a fixed protocol.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/first-visit/treatment-in-progress-03.jpg",
        caption: "Sessions are carried out at the clinic, and the plan is reviewed as your skin responds.",
      },
    ],

    // ── 13 · the PIH paragraph is the most locally relevant thing on the page,
    // and "what treatment cannot do" is mandatory (R-05).
    risks: {
      intro: "Every treatment on this page carries some risk.",
      items: [
        {
          lead: "Common and usually temporary",
          body: "Redness, swelling, dryness, flaking and a warm or gritty sensation for a few days. Less common effects include prolonged redness, blistering, infection, or a change in skin pigment.",
        },
        {
          lead: "Pigment change and Malaysian skin",
          body: "Medium and deeper skin tones, common across Malaysia, carry a higher chance of post-inflammatory hyperpigmentation after energy-based treatment. This is why doctors here often choose gentler settings and longer intervals between sessions. It can extend the timeline, and it is a deliberate safety trade-off.",
        },
        {
          lead: "Sun protection is not optional",
          body: "Daily broad-spectrum sunscreen is part of the plan for every treatment listed above, both before and after. Without it, marks are likely to return or deepen.",
        },
        {
          lead: "What treatment cannot do",
          body: "Ice-pick scarring rarely resolves fully with energy devices alone. Acne can recur after treatment, because treating marks or scars does not change the tendency to break out. Improvement builds gradually over months as collagen remodels. It is not visible the following week.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant or breastfeeding, take or recently took oral acne medication, have a history of cold sores, keloid scarring or recent tanning, or have had any skin procedure in the past few weeks. Any of these may change what is appropriate or when.",
    },

    // ── 14 · factors only, no figures (R-03). Structured as a list so it can
    // become a price table later without restructuring the page.
    costFactors: {
      intro:
        "Costs are not published because they depend on the assessment. What they depend on is worth knowing before you come in:",
      factors: [
        "What is being treated: marks generally need a different approach from structural scarring.",
        "The area: full face, targeted zone, or back and chest.",
        "The treatment and device: different platforms have different session structures.",
        "How many sessions: set after assessment, and adjusted at review as your skin responds.",
        "Whether treatments are combined: mixed scarring sometimes responds better to more than one modality.",
      ],
      outro:
        "The doctor will go through the specifics with you at the consultation, including how many sessions they'd expect and over what period, before you commit to anything.",
    },

    // ── 15
    technologyIntro:
      "Having more than one platform means the doctor can match the device to your skin type and to what is being treated, rather than fitting your skin to a single machine.",

    // ── 16 · twelve questions, 60–90 words each, all in the DOM (R-10).
    faqs: [
      {
        q: "What's the difference between active acne and acne scars?",
        a: "Active acne is what's forming now: spots, redness, congestion. Scarring is the structural change left behind after inflammation has settled, and you can usually feel it as a dip or an irregularity. Between the two sit flat marks: red or brown discolouration where the skin is smooth but the colour hasn't returned to normal. All three are common at the same time, and each is treated differently, which is why assessment comes first.",
      },
      {
        q: "Can acne scarring be treated?",
        a: "Depressed scarring can often be improved, though rarely erased. Treatments like RF microneedling and resurfacing lasers work by stimulating the skin to remodel its own collagen, which takes place gradually over months rather than immediately. How much improvement is realistic depends heavily on scar type: rolling and boxcar scars usually respond better than ice-pick scars, which are narrow and deep. A doctor will look at what you actually have and tell you what's achievable before recommending anything.",
      },
      {
        q: "Why does adult acne happen?",
        a: "Adult acne is usually multi-factorial. Hormonal fluctuation is a frequent contributor, particularly for women with breakouts around the jawline and chin that follow a cycle. Skincare and makeup that block pores, certain medications, stress affecting sleep and skin barrier function, and simple genetic tendency all play a part. It's also common for adult acne to look different from teenage acne: fewer spots, but deeper and slower to settle. Identifying the likely contributors for you is part of the consultation.",
      },
      {
        q: "Will treatment make my acne worse first?",
        a: "Some medical acne treatments involve an initial adjustment period where the skin appears worse before it improves. This is expected with certain topical treatments and your doctor will tell you in advance if it applies. Energy-based treatments don't typically cause a flare, but they can leave redness or dryness for a few days. Either way, the point is that you should know what to expect before you start, not discover it afterwards.",
      },
      {
        q: "How many sessions will I need?",
        a: "This is set after the doctor examines your skin, because it depends on what's being treated and how severe it is. Energy-based treatments for scarring are typically planned as a course of several sessions spaced around four weeks apart, with a review point built in to check how your skin is responding. Plans are adjusted as they go. Nobody can accurately predict the full course at the first visit, and anyone who does should be treated with caution.",
      },
      {
        q: "How soon will I see a difference?",
        a: "It depends entirely on what's being treated. Marks and discolouration generally shift earlier than structural scarring. Scar treatment works by stimulating collagen remodelling, and that process continues for months beneath the surface after the skin looks recovered. Deeper scars are often formally reassessed six to twelve months after a course. It's genuinely gradual. Taking your own photographs in consistent lighting helps, because daily change is very hard to notice in the mirror.",
      },
      {
        q: "Is laser treatment safe for darker or Asian skin tones?",
        a: "Yes, when the device and settings are chosen appropriately by a doctor who is experienced with your skin type. The specific concern with medium and deeper skin tones is post-inflammatory hyperpigmentation, the skin responding to treatment by producing extra pigment. This is managed by selecting suitable devices, using conservative settings, spacing sessions further apart, and being strict about sun protection. It's a real consideration, not a reason to avoid treatment, and it's a large part of what the assessment is for.",
      },
      {
        q: "Can I wear makeup after treatment?",
        a: "It depends on the treatment. After minimal-downtime treatments, makeup can usually be applied the following day. After RF microneedling, most people wait until the redness settles, typically two to three days. After resurfacing laser, longer: the skin needs to re-epithelialise first. Your doctor will give you specific timing for what you've had, and it's worth asking before you book if you have an event coming up.",
      },
      {
        q: "Will my acne come back after treatment?",
        a: "Possibly. Treating marks or scars addresses what previous breakouts left behind. It doesn't change your skin's underlying tendency to break out. Acne is a chronic condition for many people, with periods of flare and quiet. That's why the plan usually includes a maintenance element: appropriate daily skincare, sun protection, and ongoing medical management where indicated. Long-term control is a realistic goal; a permanent cure isn't something anyone can promise.",
      },
      {
        q: "Do I need to stop my current skincare or acne medication?",
        a: "Don't stop anything without telling your doctor first. Some products, retinoids and exfoliating acids in particular, are usually paused for a period before and after energy-based treatment. Oral acne medication matters especially: if you're taking it now or have taken it recently, say so at the consultation, as it can affect the timing of what's appropriate. Bring the actual products or a photo of the labels if that's easier than remembering names.",
      },
      {
        q: "Is treatment painful?",
        a: "Most people describe energy-based treatments as uncomfortable rather than painful. Topical numbing cream is applied beforehand where appropriate, and cooling is used during and after. RF microneedling is generally felt more than pico laser. If discomfort is a particular concern for you, raise it at the consultation. Settings and numbing time can be adjusted.",
      },
      {
        q: "Can acne on my back or chest be treated?",
        a: "Yes, though these areas behave differently from the face. Skin on the back and chest is thicker, lesions there tend to be larger, and scarring is more likely to be raised than depressed, which calls for a different approach entirely. Treatment sessions also cover a bigger area. It's assessed the same way: the doctor looks at what's active versus what's scarred before recommending anything.",
      },
    ],

    // ── 17
    relatedConcerns: [
      {
        slug: "pigmentation",
        reason: "Melasma, sun spots and uneven tone: overlaps with post-acne marks.",
      },
      {
        slug: "enlarged-pores",
        reason: "Often noticed alongside oily skin and congestion.",
      },
      {
        slug: "aging",
        reason: "Texture, laxity and fine lines: sometimes treated with the same devices.",
      },
    ],

    // ── 18
    ctaHeading: "Have a doctor look at it",
    ctaAssesses: "your skin",
  },

  {
    slug: "pigmentation",
    name: "Pigmentation",
    group: "Skin",
    image: "/images/concerns/pigmentation.jpg",
    summary:
      "Melasma, sun spots and post-inflammatory marks each behave differently. The right laser or treatment depends on which type you have.",
    leadAnswer:
      "Pigmentation describes areas of darker skin such as melasma, sun-related spots or marks left after inflammation. The type matters, because each responds differently and some need particular care. A consultation helps determine which approach, if any, may be appropriate for your skin.",
    treatments: [
      "pico-laser",
      "skin-booster",
      "vascular-pigment-laser",
      "resurfacing-laser",
      "facial-treatments",
    ],
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-06-20",
    seoTitle: "Pigmentation Treatment Options in Malaysia | Kaiteki",
    seoDescription:
      "Melasma, sun spots and post-inflammatory marks need different care. A doctor assesses your pigmentation before any treatment. Book a free consultation.",
    sections: [
      {
        heading: "What is pigmentation?",
        body: [
          "Skin colour comes from melanin, a pigment produced by specialised cells called melanocytes. Melanin exists in two main forms: eumelanin, which is brown to black, and pheomelanin, which is yellow to red. The amount and type present help determine each person's natural skin tone.",
          "Pigmentation becomes a concern when melanin is distributed unevenly, leaving patches that are darker or lighter than the surrounding skin. Because several different conditions can produce this, understanding which type you have is the first step in deciding whether treatment may help.",
        ],
      },
      {
        heading: "What causes it",
        body: [
          "Uneven pigmentation usually reflects a change in how melanin is produced, often from more than one factor at once. Sun exposure is a common trigger, but hormones, inflammation and family history can all play a part.",
        ],
        list: [
          "Sun and UV exposure",
          "Hormonal changes",
          "Inflammation or skin injury",
          "Genetics and skin type",
        ],
      },
      {
        heading: "Types of pigmentation",
        body: [
          "Hyperpigmentation is where patches of skin become darker than the surrounding area, often linked to sun exposure, hormonal changes, inflammation or injury. Melasma and sun or age spots are common examples. Hypopigmentation is the opposite: patches that become lighter, and can be associated with conditions such as vitiligo, certain fungal infections, or as a side effect of some treatments.",
          "Post-inflammatory hyperpigmentation (PIH) refers to dark spots or patches left after the skin has been inflamed or injured, for example following acne, eczema or a cut, which may fade over time. Albinism is a separate, congenital condition marked by a lack of melanin in the skin, hair and eyes. Because these types differ, a doctor assesses which you have before discussing options.",
        ],
      },
      {
        heading: "When to see a doctor",
        body: [
          "It is reasonable to seek advice if pigmentation is spreading, changing, not fading, or affecting how you feel. A doctor can examine your skin, identify the likely type, explain the options and their risks, and help you decide on a sensible plan. Any new, changing or unusual mark should always be checked.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can pigmentation be treated?",
        a: "Some types of pigmentation may improve with appropriate care, while others need particular caution, and results vary between individuals. A consultation helps determine which type you have and which approach, if any, is appropriate before anything is recommended.",
      },
      {
        q: "Why does pigmentation sometimes come back?",
        a: "Pigmentation can be influenced by ongoing factors such as sun exposure and hormones, so it may recur even after it has faded. Melasma in particular can be persistent. A doctor can explain what is realistic for your skin and how everyday habits affect the outcome.",
      },
      {
        q: "How can I help prevent pigmentation?",
        a: "Consistent sun protection is one of the most widely recommended steps, since UV exposure is a common trigger, and treating inflammation early may reduce marks left behind. A consultation helps tailor sensible measures to your skin.",
      },
    ],
  },
  {
    slug: "enlarged-pores",
    name: "Enlarged Pores",
    group: "Skin",
    image: "/images/concerns/enlarged-pores.jpg",
    summary:
      "Visible pores are often tied to oil production, texture or age. Treatment options range from lasers to skin boosters, matched to the cause.",
    leadAnswer:
      "Enlarged-looking pores are influenced by oil production, skin texture, sun exposure and age. Pores do not physically open and close, but their appearance can sometimes be refined. A consultation helps determine which approach, if any, may suit your skin.",
    treatments: [
      "microneedling",
      "pico-laser",
      "radiofrequency",
      "resurfacing-laser",
      "facial-treatments",
    ],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-06-18",
    seoTitle: "Enlarged Pores Treatment & Assessment in Malaysia | Kaiteki",
    seoDescription:
      "Pore appearance is shaped by oil, texture, sun exposure and age. A doctor assesses your skin before an enlarged pores treatment. Book a free consultation.",
    sections: [
      {
        heading: "What are enlarged pores?",
        body: [
          "Pores are the small openings on the surface of the skin that connect to the follicles and glands beneath, which produce the oil and sweat that lubricate and cool the skin. Everyone has them, and they are a normal, necessary part of healthy skin.",
          "When people talk about \"enlarged\" pores, they usually mean pores that look more visible than they would like, most often across the nose, forehead and chin. The pores have not truly changed size on their own; rather, several factors can make them appear larger. Understanding what is influencing yours is the first step in deciding whether treatment may help.",
        ],
      },
      {
        heading: "What makes pores look larger",
        body: [
          "Pore visibility is influenced by a combination of factors rather than a single cause, and it varies between individuals. When a pore becomes clogged with oil, dead skin cells or other build-up, or when the surrounding skin loses firmness, the pore can appear more prominent.",
        ],
        list: [
          "Higher oil (sebum) production and skin type",
          "Build-up of dead skin cells and impurities in the pore",
          "Sun exposure and related skin damage over time",
          "Age and a gradual loss of skin firmness and elasticity",
          "Genetics, which influence natural pore size",
        ],
      },
      {
        heading: "Types of pores",
        body: [
          "Skin has two broad kinds of pores. Sebaceous (oil) pores connect to the glands that produce sebum and are more concentrated on the face, especially the T-zone of the forehead, nose and chin. These are the pores most people notice.",
          "Sweat pores connect to sweat glands, which help regulate body temperature. These are generally far less visible, so when people refer to enlarged pores they are usually describing the sebaceous pores of the face.",
        ],
      },
      {
        heading: "When to see a doctor",
        body: [
          "Visible pores are normal and not a medical problem, but if their appearance bothers you, a doctor can assess your skin, explain what is likely contributing, and outline the options and their risks. This helps you decide whether any approach is worthwhile and set realistic expectations.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can pores be shrunk permanently?",
        a: "Pores cannot be closed or removed permanently, because the skin needs them to release oil and sweat and stay healthy. Some treatments and skincare may reduce the appearance of pores, but results vary between individuals and are not permanent. A consultation helps determine which approach, if any, is appropriate for your skin.",
      },
      {
        q: "Do pores open and close?",
        a: "Pores do not have muscles, so they do not physically open and close the way this is sometimes described. Their appearance can change with oil, build-up, hydration and skin firmness, which is why they may look more or less visible at different times.",
      },
      {
        q: "Is skincare or in-clinic treatment better for pores?",
        a: "A consistent skincare routine can help keep pores clear and improve skin texture over time, while in-clinic options may be considered for more noticeable concerns. Which is suitable varies between individuals, and a consultation helps determine which approach, if any, is appropriate for you.",
      },
    ],
  },
  {
    slug: "fine-lines-wrinkles",
    name: "Fine Lines & Wrinkles",
    group: "Face",
    image: "/images/concerns/fine-lines-wrinkles.jpg",
    summary:
      "Lines that appear when you move and lines that stay at rest need different approaches. A doctor assesses which type you have before recommending treatment.",
    leadAnswer:
      "Fine lines and wrinkles develop with movement, age and skin quality. Expression lines and static lines are approached differently, so a doctor assesses which you have. A consultation helps determine which approach, if any, may be appropriate for your skin.",
    treatments: [
      "hifu",
      "ultherapy",
      "skin-booster",
      "microneedling",
      "botulinum-toxin",
      "dermal-fillers",
      "resurfacing-laser",
    ],
    reviewedBy: "dr-william-yap",
    lastReviewed: "2026-06-16",
    seoTitle: "Fine Lines & Wrinkles Treatment in Malaysia | Kaiteki",
    seoDescription:
      "Expression lines and static wrinkles are approached differently. A consultation identifies the right fine lines and wrinkles treatment. Book a free session.",
    sections: [
      {
        heading: "What are fine lines and wrinkles?",
        body: [
          "Fine lines and wrinkles are creases that form in the skin over time. Expression lines appear with movement, smiling, squinting or frowning, and are linked to how the face moves, often showing around the eyes, forehead and mouth.",
          "Static wrinkles are lines that remain visible even when the face is at rest. They tend to develop gradually as the skin's collagen and elastin change with age and sun exposure. Because expression lines and static lines behave differently, understanding which you have is the first step in deciding whether treatment may help.",
        ],
      },
      {
        heading: "What causes them",
        body: [
          "Fine lines and wrinkles usually result from several factors acting together over time, combining how the face moves with changes in the skin itself. Habits and daily sun protection can also play a part.",
        ],
        list: [
          "Repeated facial expressions such as smiling, squinting and frowning",
          "Intrinsic ageing and the gradual loss of collagen and elastin",
          "Sun exposure: daily sunscreen of SPF 30 or higher helps protect the skin",
          "Dehydration, which can leave skin less plump",
          "Genetics, which influence how skin ages",
        ],
      },
      {
        heading: "Types of wrinkles",
        body: [
          "Wrinkles can appear in several forms, each with its own pattern and typical location. A doctor considers the type and its likely cause when discussing whether any approach is suitable.",
        ],
        list: [
          "Expression lines: from repeated movement, such as crow's feet, forehead lines and laugh lines",
          "Static wrinkles: lines visible at rest, often on the cheeks, temples and neck",
          "Sleep lines: from sleeping positions that press the skin against a pillow over time",
          "Marionette lines: running from the corners of the mouth down toward the chin",
          "Glabellar lines: vertical \"frown\" lines between the eyebrows",
          "Perioral lines: fine vertical lines around the mouth",
          "Neck lines: horizontal or vertical creases on the neck, linked to age, sun and gravity",
        ],
      },
      {
        heading: "When to see a doctor",
        body: [
          "It is reasonable to seek advice if lines are becoming more noticeable, or if they are affecting how you feel about your appearance. A doctor can assess your skin, explain the available options and their risks, and help you decide whether a plan makes sense for you.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between fine lines and wrinkles?",
        a: "Fine lines are shallower surface creases, while wrinkles are deeper and more established. Both develop with movement, age and skin quality, and they can be linked. A consultation helps clarify what you are seeing and which approach, if any, may be appropriate.",
      },
      {
        q: "Can fine lines and wrinkles be prevented?",
        a: "Everyone's skin ages, and lines are a normal part of that. Habits such as daily sun protection and staying hydrated may help support skin health, though results vary between individuals. A doctor can talk through what is realistic for your skin.",
      },
      {
        q: "How are fine lines and wrinkles treated?",
        a: "Expression lines and static lines are approached differently, and several options may be considered depending on the type and your skin. A consultation helps determine which approach, if any, is appropriate, and what to expect before anything is recommended.",
      },
    ],
  },
  {
    slug: "dark-eye-circles",
    name: "Dark Eye Circles",
    group: "Eyes",
    image: "/images/concerns/dark-eye-circles.jpg",
    summary:
      "Dark circles can come from pigment, blood vessels or hollowing under the eye. The treatment depends entirely on which cause is behind yours.",
    leadAnswer:
      "Dark eye circles can be caused by pigmentation, visible blood vessels, or the structure and hollowing of the under-eye area, often in combination. Because the causes differ, a consultation helps determine which approach, if any, may be appropriate for you.",
    treatments: [
      "skin-booster",
      "vascular-pigment-laser",
      "radiofrequency",
      "dermal-fillers",
    ],
    reviewedBy: "dr-lim-xiao-chien",
    lastReviewed: "2026-06-14",
    seoTitle: "Dark Eye Circle Treatment Assessment in Malaysia | Kaiteki",
    seoDescription:
      "Dark eye circles can be pigment, vascular or structural in cause. A doctor assesses yours before recommending treatment. Book a free consultation with Kaiteki.",
    sections: [
      {
        heading: "What causes dark eye circles?",
        body: [
          "Dark circles under the eyes are not a single condition. The darkness can come from extra pigment in the skin, from blood vessels showing through the thin under-eye skin, or from the shape of the area itself, where hollows and shadows make the region look darker. Often more than one of these is involved at the same time.",
          "Because the underlying cause differs from person to person, what looks similar on the surface can have very different reasons behind it. Identifying which factors are contributing is the first step, since the cause guides whether any treatment may help.",
        ],
      },
      {
        heading: "Common contributing factors",
        body: [
          "Several factors can make dark circles more noticeable, often in combination rather than on their own. Family history, everyday habits and natural changes over time all play a part.",
        ],
        list: [
          "Genetics: inherited tendencies toward darker pigmentation around the eyes",
          "Lifestyle factors such as inadequate sleep, alcohol and diet",
          "Ageing, as under-eye skin thins and blood vessels become more visible",
          "Sun exposure, which can increase pigmentation",
          "Allergies, which can cause inflammation and swelling around the eyes",
          "Dehydration, which can leave the skin looking dull and sunken",
        ],
      },
      {
        heading: "Types of dark eye circles",
        body: [
          "Pigmentation circles are caused by excess melanin and tend to appear as brown or greyish patches beneath the eyes, usually fairly even in tone. Vascular circles come from blood vessels visible through thin skin and often look bluish or purplish, sometimes more obvious in people with fair or delicate skin.",
          "Structural circles relate to the shape of the area: thinner skin, loss of fat and volume, and natural changes over time can create hollows that cast shadows and give a tired look in certain light. Mixed circles combine features of more than one type, which is why a doctor assesses which is present before discussing any options.",
        ],
      },
      {
        heading: "When to see a doctor",
        body: [
          "It is reasonable to seek advice if under-eye darkness is persistent, changing, or affecting how you feel about your appearance. A doctor can look at the area, help identify the likely cause, and explain the options and their risks so you can decide on a sensible plan.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why does the cause of dark circles matter?",
        a: "Pigment, blood vessels and under-eye structure are different things, and each is approached differently. Because the cause differs between individuals, and is often a mix, a consultation helps determine which approach, if any, is appropriate for you rather than assuming one method suits everyone.",
      },
      {
        q: "Do eye creams help with dark circles?",
        a: "Skincare may support the appearance of the under-eye area for some people, particularly where dryness or surface pigment is involved, but results vary between individuals and depend on the underlying cause. A doctor can explain what skincare can and cannot realistically do for your situation.",
      },
      {
        q: "Are dark circles treatable?",
        a: "Some causes of dark circles may respond to treatment while others are harder to change, so it depends on what is driving them in your case. Results vary between individuals, and a consultation helps identify the likely cause and explain what is realistic before recommending anything.",
      },
    ],
  },
  {
    slug: "face-contouring",
    name: "Face Contouring",
    group: "Face",
    image: "/images/concerns/face-contouring.jpg",
    summary:
      "Jawline definition, cheek volume and facial proportions can be refined without surgery. A doctor plans the approach based on your facial structure.",
    leadAnswer:
      "Face-contouring concerns relate to the shape and definition of areas such as the jawline and chin. Several treatments may be considered depending on the concern and your anatomy. A consultation helps determine which approach, if any, may be appropriate.",
    treatments: ["hifu", "fat-freezing", "radiofrequency", "botulinum-toxin", "dermal-fillers"],
    reviewedBy: "dr-jeremy-low",
    lastReviewed: "2026-06-12",
    seoTitle: "Face Contouring Treatment & Assessment in Malaysia | Kaiteki",
    seoDescription:
      "Jawline and chin definition are assessed individually before any face contouring treatment is suggested. Book a free consultation with a Kaiteki doctor.",
    sections: [
      {
        heading: "What is face contouring?",
        body: [
          "Face contouring refers to the shape, definition and proportion of facial areas such as the jawline, chin and cheeks. It is about how these features relate to one another rather than any single feature in isolation.",
          "What reads as a balanced contour differs from person to person, so it is assessed individually. Understanding your own facial structure is the first step in deciding whether treatment may be relevant at all.",
        ],
      },
      {
        heading: "What influences facial contour",
        body: [
          "Facial contour is shaped by several factors, often in combination, and it can change gradually with age. These influences differ between individuals, which is why the same concern may be approached in different ways.",
        ],
        list: [
          "Underlying bone structure",
          "Volume loss over time",
          "Skin laxity and reduced firmness",
          "Fat distribution across the face",
        ],
      },
      {
        heading: "How contour concerns are approached",
        body: [
          "Because facial contour has several possible contributors, there is no single treatment that suits everyone. Several options may be considered depending on the concern, your anatomy and your general health.",
          "A doctor assesses your face, explains the available options and their risks, and helps you decide which approach, if any, is appropriate. The chosen approach is determined at consultation rather than in advance.",
        ],
      },
      {
        heading: "When to see a doctor",
        body: [
          "It is reasonable to seek advice if you have questions about facial shape or definition, or if changes over time are affecting how you feel. A consultation lets a doctor assess your face, explain what is realistic, and discuss whether any option is suitable for you.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which treatment is commonly considered for face contouring?",
        a: "There is no single default treatment, because facial contour has several possible contributors and suitable options vary between individuals. A consultation helps a doctor assess your face and determine which approach, if any, may be appropriate.",
      },
      {
        q: "Can non-surgical treatments change facial contour?",
        a: "Some non-surgical approaches may help with aspects of facial shape or firmness, while others are better suited to different concerns. Results vary between individuals, so a doctor explains what is realistic before recommending anything.",
      },
      {
        q: "Does facial contour change with age?",
        a: "Facial contour can change gradually with age as volume, skin firmness and fat distribution shift, though this varies between individuals. A consultation helps identify the likely contributors for you so any plan is tailored to your face.",
      },
    ],
  },
  {
    slug: "face-lifting",
    name: "Face Lifting",
    group: "Face",
    image: "/images/concerns/face-lifting.jpg",
    summary:
      "Sagging along the jawline, neck or mid-face can be addressed with non-surgical lifting options. A doctor assesses the degree of laxity first.",
    leadAnswer:
      "Face-lifting concerns relate to firmness and laxity as skin changes over time. Non-surgical, energy-based treatments may be considered depending on your assessment. A consultation helps determine which approach, if any, may be appropriate for you.",
    treatments: [
      "hifu",
      "ultherapy",
      "fotona-4d",
      "microwave-contouring",
      "bio-stimulator",
      "dermal-fillers",
    ],
    reviewedBy: "dr-chang-chee-seong",
    lastReviewed: "2026-06-12",
    seoTitle: "Non-Surgical Face Lifting Treatment in Malaysia | Kaiteki",
    seoDescription:
      "Firmness and skin laxity are assessed before any non-surgical face lifting treatment is discussed. Book a free consultation to find what may suit you.",
    sections: [
      {
        heading: "What is face lifting (as a concern)?",
        body: [
          "As a concern, face lifting refers to the gradual loss of firmness and the skin laxity that develops as the face changes over time. Rather than a single procedure, it describes wanting skin that sits and feels firmer, particularly around the cheeks, jawline and neck.",
          "It is worth distinguishing this from surgery. A surgical face-lift is a separate procedure carried out by relevant specialists, whereas the firmness concerns discussed here are commonly approached with non-surgical, energy-based options. Whether any of these are suitable depends on an individual assessment.",
        ],
      },
      {
        heading: "What causes facial sagging",
        body: [
          "Facial firmness usually changes for several reasons at once rather than any single cause. As the skin's supporting structure gradually alters with age, and as everyday factors add up over time, the skin can begin to feel and look less firm.",
        ],
        list: [
          "Gradual loss of collagen, which supports skin structure",
          "Reduced skin elasticity, leading to laxity",
          "The natural effects of gravity over time",
          "Loss of underlying facial volume",
          "Cumulative sun exposure",
          "Lifestyle factors such as smoking, diet and skincare habits",
          "Individual and genetic differences",
        ],
      },
      {
        heading: "How lifting concerns are approached",
        body: [
          "There is no single answer for firmness and laxity. Several non-surgical, energy-based treatments may be considered, and each works differently and suits different people. Because of this, an approach is chosen only after a doctor has assessed your skin and discussed your goals.",
          "The aim of any assessment is to understand what is contributing to the concern before discussing whether treatment is appropriate at all, and if so, which option or combination may be sensible for you.",
        ],
      },
      {
        heading: "When to see a doctor",
        body: [
          "It is reasonable to seek advice if changes in firmness are affecting how you feel, or if you are unsure which options are worth considering. A doctor can assess your skin, explain the available approaches and their risks, and help you decide on a sensible plan, including whether treatment is needed at all.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between non-surgical and surgical face lifting?",
        a: "A surgical face-lift is an operation performed by relevant specialists, while non-surgical options use energy-based devices and are less invasive. They are different in nature and suitability, so a consultation helps determine which approach, if any, is appropriate for you.",
      },
      {
        q: "When should I consider a lifting treatment?",
        a: "There is no fixed point at which lifting treatments become appropriate, as firmness changes differ between individuals. A doctor can assess your skin and explain whether any option is worth considering for your situation.",
      },
      {
        q: "Do the results of non-surgical lifting last?",
        a: "How long any effect lasts varies between individuals and depends on the approach used, your skin and the natural ageing process, which continues over time. A doctor can explain what is realistic for you before recommending anything.",
      },
    ],
  },
  {
    slug: "aging",
    name: "Aging",
    group: "Skin",
    image: "/images/concerns/aging.jpg",
    summary:
      "Firmness, texture and volume change at different rates. A doctor maps what's happening with your skin before building a plan.",
    leadAnswer:
      "Skin ageing involves gradual changes in firmness, texture, hydration and volume. Because several factors are usually involved, a plan is individual. A consultation helps determine which approaches, if any, may be appropriate for your skin and goals.",
    treatments: [
      "hifu",
      "ultherapy",
      "skin-booster",
      "bio-stimulator",
      "dermal-fillers",
      "resurfacing-laser",
      "fotona-4d",
    ],
    reviewedBy: "dr-jacqueline-tan",
    lastReviewed: "2026-06-10",
    seoTitle: "Skin Ageing & Anti-Ageing Treatment in Malaysia | Kaiteki",
    seoDescription:
      "Skin ageing involves firmness, texture and volume changes over time. A consultation helps map an anti-ageing treatment plan. Book a free session with Kaiteki.",
    sections: [
      {
        heading: "What is skin ageing?",
        body: [
          "Skin ageing is the natural process by which skin gradually loses collagen and elasticity, becoming thinner and drier and showing lines over time. Part of this is intrinsic ageing, changes driven largely by your genes and the passage of time, which affects everyone and cannot be halted.",
          "Alongside this, skin is shaped by extrinsic ageing: changes linked to sun exposure and everyday habits rather than age alone. Understanding how firmness, texture, hydration and volume are changing is the first step in deciding whether any care or treatment may help.",
        ],
      },
      {
        heading: "What causes it",
        body: [
          "Ageing skin usually reflects several factors working together rather than a single cause. The gradual decline of collagen and elastin reduces firmness and support, while external influences, particularly sun exposure, can accelerate visible change.",
        ],
        list: [
          "Natural, gene-influenced loss of collagen and elastin over time",
          "Cumulative sun exposure and UV damage",
          "Lifestyle factors such as smoking, alcohol and diet",
          "Reduced skin hydration and thinning of the skin",
        ],
      },
      {
        heading: "The stages of skin ageing",
        body: [
          "Skin ageing tends to progress gradually, and it can be helpful to think of it as a spectrum. In the earliest stage, skin loses a little of its elasticity and fine lines or expression lines become more noticeable. As changes continue, wrinkles deepen, the skin thins, and mild sagging may begin around the eyes and jawline.",
          "In more advanced stages, folds become more pronounced, jowls and a loss of definition along the cheekbones and jawline can appear, and laxity may extend to the neck and décolletage. How far and how quickly these changes develop varies between individuals, so an assessment considers your skin specifically rather than a fixed timeline.",
        ],
      },
      {
        heading: "Caring for ageing skin & when to see a doctor",
        body: [
          "While ageing itself cannot be stopped, everyday habits can support skin health over time. Daily sun protection, not smoking, a balanced diet, limiting alcohol, regular exercise, using a moisturiser and avoiding products that irritate your skin are all commonly recommended steps.",
          "If you would like to understand the changes you are seeing, or are considering treatment, it is reasonable to seek advice. A doctor can assess your skin, explain the available options and their risks, and help you decide on a sensible plan.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can skin ageing be prevented?",
        a: "Ageing is a natural process that cannot be stopped, but some everyday habits, such as daily sun protection, not smoking and a balanced diet, may help support skin health over time. A consultation helps determine which approach, if any, is appropriate for your skin.",
      },
      {
        q: "What treatments are available for ageing skin?",
        a: "Several non-surgical options may be considered depending on your skin, the changes you are seeing and your goals. Because ageing involves firmness, texture and volume together, a doctor assesses your skin and explains what is realistic before recommending anything.",
      },
      {
        q: "When should I see a doctor about ageing skin?",
        a: "It is reasonable to seek advice whenever you would like to understand the changes you are noticing or are thinking about treatment. Results vary between individuals, so a consultation helps identify which approaches, if any, may suit you.",
      },
    ],
  },
  {
    slug: "body-slimming",
    ctaHeading: "Not sure where to start?",
    ctaAssesses: "the areas you’re concerned about",
    name: "Body Slimming",
    group: "Hair & Body",
    image: "/images/concerns/body-slimming.jpg",
    summary:
      "Stubborn fat in specific areas can be targeted without surgery. These are body-contouring treatments, not weight-loss solutions.",
    leadAnswer:
      "Body-contouring concerns relate to pockets of localised fat in specific areas, rather than overall weight. In-clinic treatments are not a substitute for weight loss. A consultation helps determine which approach, if any, may be appropriate for you.",
    treatments: ["fat-freezing", "microwave-contouring", "muscle-stimulation"],
    reviewedBy: "dr-joaan-kong",
    lastReviewed: "2026-06-08",
    seoTitle: "Body Slimming Treatment & Assessment in Malaysia | Kaiteki",
    seoDescription:
      "Localised fat pockets are assessed individually. Body slimming is not a weight-loss treatment. Book a free consultation to discuss suitable options today.",
    sections: [
      {
        heading: "What is body slimming / contouring?",
        body: [
          "Body slimming, more accurately called body contouring, describes in-clinic approaches aimed at the shape and definition of a specific area, such as pockets of stubborn fat, muscle tone or skin firmness, rather than reducing overall body weight.",
          "It is not a weight-loss treatment. Contouring is concerned with how a particular area looks, not the number on the scales, so it is considered alongside, never in place of, a healthy diet and regular exercise.",
        ],
      },
      {
        heading: "What it addresses",
        body: [
          "Body-contouring concerns usually fall into a few areas, and often more than one is involved. A doctor assesses which apply to you before discussing whether any approach may help.",
        ],
        list: [
          "Localised fat pockets in specific areas, such as the abdomen or flanks",
          "Muscle tone and definition in targeted areas",
          "Skin firmness and the appearance of cellulite",
        ],
      },
      {
        heading: "How it differs from weight loss",
        body: [
          "Weight loss reduces fat across the whole body and depends on diet, activity and overall health. Body contouring focuses only on a specific area and does not lower your overall weight, so it is not a method of losing weight or a treatment for obesity.",
          "For these reasons, contouring is generally considered for people who are already close to a stable weight and have a localised concern, rather than as a shortcut to it. A consultation helps determine which approach, if any, is appropriate.",
        ],
      },
      {
        heading: "When to see a doctor",
        body: [
          "It is reasonable to seek advice if a localised area is not responding to diet and exercise and it affects how you feel. A doctor can assess the area, explain the options and their risks, and help you decide on a sensible plan, or advise that no treatment is needed.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is body slimming a way to lose weight?",
        a: "No. Body contouring addresses the shape of a specific area, not your overall weight, and it is not a substitute for a healthy diet and regular exercise. A consultation helps determine whether any approach may suit your particular concern.",
      },
      {
        q: "Are the results permanent?",
        a: "Results vary between individuals and are influenced by your lifestyle, diet and weight over time. A doctor will explain what is realistic for your situation before recommending anything, so you can decide with clear expectations.",
      },
      {
        q: "Who is body contouring for?",
        a: "It is generally considered for people near a stable weight who have a localised concern in a specific area, rather than as a way to lose weight. A consultation helps determine which approach, if any, is appropriate for you.",
      },
    ],
  },
  {
    slug: "hair-loss",
    ctaHeading: "Not sure what’s behind your hair loss?",
    ctaAssesses: "your scalp",
    name: "Hair Loss",
    group: "Hair & Body",
    image: "/images/concerns/hair-loss.jpg",
    summary:
      "Thinning, receding and patchy hair loss each have different causes. A doctor evaluates your pattern before recommending whether treatment can help.",
    leadAnswer:
      "Hair loss has several patterns and causes, and some shedding is normal. Identifying the likely cause is important before considering treatment. A consultation helps determine which approach, if any, may be appropriate for you.",
    treatments: ["exosome-therapy"],
    reviewedBy: "dr-tim-chua",
    lastReviewed: "2026-06-06",
    seoTitle: "Hair Loss Treatment & Assessment in Malaysia | Kaiteki",
    seoDescription:
      "Hair loss has several patterns and causes, and a doctor identifies yours before any treatment. Book a free hair loss consultation with Kaiteki today.",
    sections: [
      {
        heading: "Understanding hair loss",
        body: [
          "Hair loss and hair thinning are common and affect both men and women. As we age, hair follicles can change over time, much like other parts of the body, and a degree of daily shedding is a normal part of the hair's natural cycle.",
          "Because hair loss can have many different causes, and can look different from one person to the next, understanding the likely reason behind it matters before considering whether any treatment may help.",
        ],
      },
      {
        heading: "The hair-growth cycle",
        body: [
          "Each hair follicle moves through a repeating cycle with three main phases. In the anagen (growing) phase, the hair actively grows from the follicle over a period of years. In the catagen (transitional) phase, growth slows and the follicle begins to shrink over a short period of weeks. In the telogen (resting) phase, the hair is released and eventually sheds, after which the follicle can begin the cycle again.",
          "At any given time, hairs across the scalp sit at different stages of this cycle, which is why some everyday shedding is normal. Changes in how the cycle behaves can contribute to noticeable thinning.",
        ],
      },
      {
        heading: "Common causes",
        body: [
          "Research into hair loss is ongoing, and there are several recognised contributors, often in combination. A doctor considers these when assessing the likely cause for you.",
        ],
        list: [
          "Genetics and family history (hereditary hair loss)",
          "Hormonal changes",
          "Physical or emotional stress",
          "Scalp conditions such as fungal infections",
          "Seborrhoeic dermatitis",
          "Underlying medical conditions such as hypothyroidism",
          "Nutritional factors",
        ],
      },
      {
        heading: "When to see a doctor",
        body: [
          "It is reasonable to seek advice if hair loss is persistent, appears in patches, or comes on suddenly, as these can point to a cause worth assessing. A doctor can examine your scalp and hair, consider possible underlying factors, and explain the options and their risks so you can decide on a sensible plan.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why does hair loss happen?",
        a: "Hair loss can be influenced by genetics, hormones, stress, scalp conditions and underlying medical or nutritional factors, often in combination. Some shedding is also a normal part of the hair-growth cycle. A consultation helps identify the likely contributors for you before anything is considered.",
      },
      {
        q: "Is hair loss treatable?",
        a: "It depends on the cause, and outcomes vary between individuals. Some causes may respond to treatment while others are managed differently, so a doctor assesses the likely cause first and explains what is realistic. A consultation helps determine which approach, if any, is appropriate.",
      },
      {
        q: "When should I see a doctor about hair loss?",
        a: "It is sensible to seek advice if hair loss is persistent, patchy or comes on suddenly, or if it is affecting how you feel. A doctor can assess your scalp and hair, consider possible underlying factors, and help you decide on a suitable plan.",
      },
    ],
  },
  {
    slug: "tattoo-removal",
    ctaHeading: "Not sure if your tattoo can be treated?",
    ctaAssesses: "your tattoo",
    name: "Tattoo Removal",
    group: "Skin",
    image: "/images/concerns/tattoo-removal.jpg",
    summary:
      "Ink colour, depth and skin tone all affect how removal works. A doctor assesses your tattoo before estimating what to expect.",
    leadAnswer:
      "Tattoo removal is the gradual fading of tattoo ink using laser energy that breaks pigment into smaller particles the body may clear over time. Ink type, colour, depth and skin type all affect suitability and the number of sessions, which a doctor assesses at consultation.",
    treatments: ["pico-laser"],
    reviewedBy: "dr-calvin-tan",
    lastReviewed: "2026-07-13",
    seoTitle: "Laser Tattoo Removal Assessment in Malaysia | Kaiteki",
    seoDescription:
      "Ink type, colour, depth and skin type affect tattoo removal suitability and session count. A doctor assesses your tattoo. Book a free consultation today.",
    sections: [
      {
        heading: "What is laser tattoo removal?",
        body: [
          "Laser tattoo removal is a procedure that uses focused laser energy to gradually break down the ink held in the skin. People consider it for many reasons, including a change in personal taste or simply wanting to move on from an earlier decision.",
          "It is not an instant process: a tattoo is removed progressively across several sessions, and how a given tattoo responds varies between individuals. A doctor assesses your tattoo during consultation before any treatment is recommended.",
        ],
      },
      {
        heading: "What affects the number of sessions",
        body: [
          "There is no fixed number of sessions that suits everyone. The tattoo is reviewed at each visit to track how it is fading and to decide whether further sessions are needed. Several factors influence how a tattoo responds, often in combination.",
        ],
        list: [
          "Ink colour: different colours absorb laser energy differently",
          "Depth of the ink in the skin",
          "Size of the tattoo",
          "Location on the body",
          "Age of the tattoo",
        ],
      },
      {
        heading: "Types of ink & response",
        body: [
          "Darker inks such as black and dark blue tend to respond more predictably to laser treatment, while certain colours, particularly light colours, white, and some cosmetic or permanent-makeup pigments, can be more resistant or behave less predictably. Amateur tattoos with less densely packed ink often fade differently to professional tattoos.",
          "Because ink composition varies and is rarely known with certainty, a doctor assesses the tattoo directly rather than predicting the outcome from a description alone.",
        ],
      },
      {
        heading: "When to see a doctor",
        body: [
          "It is reasonable to seek advice if you are considering removing or fading a tattoo. A doctor can examine the tattoo, discuss your medical history, explain the options and their risks, and help you decide whether treatment is appropriate for you.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a tattoo be fully removed?",
        a: "It varies between individuals and cannot be predicted before a consultation. Some tattoos fade substantially over a course of sessions, while others respond less completely depending on ink colour, depth, size, location and age. A doctor assesses your tattoo and explains what a course of treatment may realistically involve for you.",
      },
      {
        q: "Is laser tattoo removal painful?",
        a: "There may be some discomfort during treatment. People describe the sensation differently, and the treated area may feel sore afterwards. Your doctor can discuss comfort measures at your appointment.",
      },
      {
        q: "How many sessions will removal take?",
        a: "There is no fixed number. The tattoo is reviewed at each visit and sessions continue until you and the doctor are satisfied with the fading, or agree to stop. The total varies between individuals, which is why an in-person assessment is needed before a plan is set.",
      },
    ],
  },
  {
    slug: "birthmark",
    ctaHeading: "Not sure which type you have?",
    ctaAssesses: "your birthmark",
    name: "Birthmark",
    group: "Skin",
    image: "/images/concerns/birthmark.jpg",
    summary:
      "Not all birthmarks respond to treatment the same way. A doctor evaluates the type, depth and location before discussing options.",
    leadAnswer:
      "Birthmarks are marks present at or shortly after birth, caused by clusters of pigment cells or blood vessels in the skin. They vary in colour, size and type, and most are harmless. A consultation helps determine whether any treatment is appropriate, and which approach may suit your skin.",
    treatments: ["pico-laser", "vascular-pigment-laser"],
    reviewedBy: "dr-lucas-chew",
    lastReviewed: "2026-07-13",
    seoTitle: "Birthmark Removal Assessment in Malaysia | Kaiteki",
    seoDescription:
      "Birthmarks vary widely in type and cause, and most are harmless. A doctor examines yours before discussing birthmark removal. Book a free consultation.",
    sections: [
      {
        heading: "What is a birthmark?",
        body: [
          "A birthmark is an area of skin that is discoloured from birth or appears shortly afterwards. Birthmarks are common and most are benign, but they differ widely in cause, colour and depth, which is why they are assessed individually.",
          "Understanding the type of birthmark you have is the first step in deciding whether any treatment may be relevant at all.",
        ],
      },
      {
        heading: "Types of birthmarks",
        body: [
          "Birthmarks broadly fall into two groups. Pigmented birthmarks, such as café-au-lait patches, Mongolian spots and moles, arise from clusters of pigment-producing cells. Vascular birthmarks, such as salmon patches, port-wine stains and some haemangiomas, arise from blood vessels in the skin and can appear pink, red or purplish.",
        ],
        list: [
          "Pigmented: café-au-lait patches, Mongolian spots, congenital moles",
          "Vascular: salmon patches, port-wine stains, haemangiomas",
        ],
      },
      {
        heading: "When to see a doctor",
        body: [
          "Most birthmarks are harmless, but it is reasonable to have any birthmark examined, particularly if it changes in size, shape or colour, becomes raised, bleeds, or affects how you feel about your appearance. A doctor can assess the mark, explain what it likely is, and discuss the options and their risks if treatment is being considered.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can birthmarks be removed?",
        a: "It depends on the type of birthmark, and outcomes vary between individuals. Some pigmented or vascular birthmarks may be considered for laser treatment, while others are more appropriately left alone or monitored. A doctor assesses the mark and explains what is realistic before recommending anything.",
      },
      {
        q: "Are birthmarks dangerous?",
        a: "Most birthmarks are harmless, but any mark that changes over time, becomes raised, bleeds or looks unusual should be examined by a doctor. This is a general precaution and does not mean a birthmark is a concern in itself.",
      },
      {
        q: "Why do different birthmarks need different treatments?",
        a: "Pigmented and vascular birthmarks arise from different structures in the skin, pigment cells versus blood vessels, so they respond to different types of laser energy. A doctor identifies the type first before discussing which approach, if any, may be appropriate.",
      },
    ],
  },
  {
    slug: "vascular-lesions",
    ctaHeading: "Not sure which type you have?",
    ctaAssesses: "the affected skin",
    name: "Vascular Lesions",
    group: "Skin",
    image: "/images/concerns/vascular-lesions.jpg",
    summary:
      "Visible blood vessels, redness and broken capillaries can have different causes. A doctor identifies yours before recommending a treatment path.",
    leadAnswer:
      "Vascular lesions are visible blood vessels or areas of redness in the skin, such as facial thread veins, spider veins or persistent flushing. They have several possible causes, so a doctor assesses the type before discussing whether any treatment may be appropriate for you.",
    treatments: ["vascular-pigment-laser"],
    reviewedBy: "dr-jade",
    lastReviewed: "2026-07-13",
    seoTitle: "Vascular Lesions & Facial Redness Care in Malaysia | Kaiteki",
    seoDescription:
      "Thread veins, spider veins and persistent redness have several causes. A doctor assesses the type before any treatment. Book a free consultation today.",
    sections: [
      {
        heading: "What are vascular lesions?",
        body: [
          "Vascular lesions occur when small blood vessels near the surface of the skin become visible or dilated, appearing as fine red or purplish lines, patches, or persistent redness. They most commonly affect the face, particularly the cheeks and nose, but can appear elsewhere on the body.",
          "Because visible vessels can arise from several different underlying causes, a doctor assesses which type is present before discussing any approach.",
        ],
      },
      {
        heading: "Common types & causes",
        body: [
          "Several patterns of vascular lesion are commonly seen, often influenced by more than one factor.",
        ],
        list: [
          "Facial thread veins (telangiectasia): fine visible vessels, often on the cheeks and nose",
          "Spider veins: small clusters of vessels radiating from a central point",
          "Persistent facial redness or flushing, sometimes associated with rosacea",
          "Sun exposure and skin ageing, which can make vessels more visible over time",
          "Genetics and skin type",
        ],
      },
      {
        heading: "When to see a doctor",
        body: [
          "It is reasonable to seek advice if visible vessels or redness are persistent, spreading, or affecting how you feel. A doctor can examine the area, help identify the likely cause, and explain the options and their risks so you can decide on a sensible plan.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can vascular lesions be treated?",
        a: "Some vascular lesions may respond to laser treatment, while others need a different approach or ongoing management, and results vary between individuals. A consultation helps determine which type is present and which approach, if any, is appropriate.",
      },
      {
        q: "Why does the cause of redness matter?",
        a: "Persistent redness can come from visible blood vessels, skin sensitivity, or conditions such as rosacea, each of which is approached differently. A doctor assesses the likely cause before discussing any treatment.",
      },
      {
        q: "Do vascular lesions come back after treatment?",
        a: "New vessels can develop over time, particularly with continued sun exposure or an underlying tendency toward them, so outcomes vary between individuals. A doctor can explain what is realistic for your skin before recommending anything.",
      },
    ],
  },
  {
    slug: "excessive-sweating",
    ctaHeading: "Not sure which areas are affected?",
    ctaAssesses: "the affected areas",
    name: "Excessive Sweating",
    group: "Skin",
    image: "/images/concerns/excessive-sweating.jpg",
    summary:
      "Sweating that disrupts daily life can often be managed. A doctor assesses your pattern and severity to determine which approach fits.",
    leadAnswer:
      "Excessive sweating (hyperhidrosis) is sweating beyond what is needed to regulate body temperature, most often affecting the underarms, palms, soles or face. It can have several causes. A consultation helps assess your situation and discuss whether any approach may be appropriate for you.",
    treatments: ["botulinum-toxin"],
    reviewedBy: "dr-teresa-tan",
    lastReviewed: "2026-07-13",
    seoTitle: "Excessive Sweating Treatment & Assessment | Kaiteki",
    seoDescription:
      "Hyperhidrosis goes beyond normal temperature regulation and has several possible causes. A consultation helps assess your situation. Book a free session today.",
    sections: [
      {
        heading: "What is excessive sweating?",
        body: [
          "Sweating is a normal bodily function that helps regulate temperature. Excessive sweating, medically known as hyperhidrosis, describes sweating that is noticeably more than what is needed for temperature regulation, and can affect daily activities and confidence.",
          "It most commonly affects the underarms, palms, soles of the feet and, less often, the face. Understanding the pattern and likely cause is the first step in deciding whether any approach may help.",
        ],
      },
      {
        heading: "Possible causes",
        body: [
          "Excessive sweating can occur on its own (primary hyperhidrosis) or alongside another underlying condition (secondary hyperhidrosis). A doctor considers both possibilities when assessing you.",
        ],
        list: [
          "Primary focal hyperhidrosis, often without an identifiable underlying cause",
          "Hormonal changes",
          "Anxiety or stress",
          "Certain medications",
          "Underlying medical conditions, in some cases",
        ],
      },
      {
        heading: "When to see a doctor",
        body: [
          "It is reasonable to seek advice if sweating is persistent, affects daily life or confidence, or occurs alongside other symptoms. A doctor can assess your situation, consider possible underlying causes, and explain the options and their risks so you can decide on a sensible plan, including whether treatment is needed at all.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is excessive sweating a medical condition?",
        a: "Yes. When sweating is noticeably beyond what is needed to regulate temperature, it is recognised as a condition called hyperhidrosis. A doctor can assess whether this applies to you and discuss it accordingly.",
      },
      {
        q: "What causes excessive sweating?",
        a: "It can occur on its own or alongside factors such as hormonal changes, stress or certain medications and medical conditions. A consultation helps identify the likely contributors for you before anything is considered.",
      },
      {
        q: "Is excessive sweating treatable?",
        a: "This depends on the cause and your individual situation, and outcomes vary between individuals. A doctor assesses your situation at consultation and explains what may be appropriate before recommending anything.",
      },
    ],
  },
];

/**
 * config/concerns.json is the source of truth for archetype and depth (spec
 * §00: "parse it, don't infer from prose"). They are merged in here rather than
 * duplicated on each object above, so adding a page is one JSON object plus its
 * copy — and a concern missing from the registry throws at build rather than
 * silently rendering with an invented archetype.
 */
for (const c of concerns) {
  const entry = registry.concerns.find((r) => r.slug === c.slug);
  if (!entry) {
    throw new Error(
      `concerns.ts: "${c.slug}" is not in config/concerns.json. Add it to the registry (slug, archetype, depth, reviewer, lastReviewed). Do not guess an archetype.`,
    );
  }
  c.archetype = entry.archetype as Concern["archetype"];
  c.depth = entry.depth as Concern["depth"];
}

export const concernGroups: Concern["group"][] = ["Skin", "Face", "Eyes", "Hair & Body"];

export function concernBySlug(slug: string) {
  return concerns.find((c) => c.slug === slug);
}

export function concernsByGroup(group: Concern["group"]) {
  return concerns.filter((c) => c.group === group);
}
