import type { Concern } from "@/lib/types";
// Relative + import attribute, not the "@/" alias: the validate:* scripts load
// this module through node --experimental-strip-types, which resolves neither.
import registry from "../../config/concerns.json" with { type: "json" };

// Ten of the fourteen concerns are fully authored against the template: acne as
// the concern-pillar showcase (docs/06 §5.3), then the nine covered concerns.
// The remaining four — enlarged-pores, birthmark, vascular-lesions and
// excessive-sweating — carry a compliant summary + lead answer only, and ship
// text-only until assets exist for them (docs/11 §4).
// `reviewedBy` points at real doctors from content/data/doctors.ts as a
// plausible provisional assignment — NOT a confirmed claim that they
// personally reviewed this page. Nothing here is rendered or put into schema
// as a review claim: the only record of an actual sign-off is
// config/concern-signoff.json, and a concern missing from it renders
// "Awaiting medical review" and is warned by name in `pnpm validate:concerns`
// (Q-20). Real sign-off must land there before launch.
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
    // ── 01
    banner: {
      src: "https://cdn.kaiteki.my/concerns/pigmentation/banner.jpg",
      sm: "https://cdn.kaiteki.my/concerns/pigmentation/banner-sm.jpg",
      alt: "Illustrative photograph: a person examining an area of uneven tone on their cheek in the mirror",
    },

    // ── 02 · process facts only. Nothing here says how long anything takes to
    // fade, because that is an outcome claim and it differs by type (R-01).
    facts: [
      {
        value: "Several conditions",
        label: "Melasma, sun spots and post-inflammatory marks look similar and behave differently.",
      },
      {
        value: "Type before treatment",
        label:
          "The same laser that suits sun spots can aggravate melasma, so identification comes first.",
      },
      {
        value: "Sun protection is part of it",
        label: "Daily broad-spectrum sunscreen is included in every plan discussed here.",
      },
    ],

    // ── 02b
    jumpNav: [
      { id: "causes", label: "What causes it" },
      { id: "which-type", label: "Which type do I have?" },
      { id: "where", label: "Where it appears" },
      { id: "treatments", label: "Treatments" },
      { id: "risks", label: "Risks" },
      { id: "cost", label: "Cost" },
      { id: "faq", label: "FAQ" },
    ],

    sections: [
      {
        heading: "What is pigmentation?",
        body: [
          "Skin colour comes from melanin, a pigment produced by specialised cells called melanocytes. Melanin exists in two main forms: eumelanin, which is brown to black, and pheomelanin, which is yellow to red. The amount and type present help determine each person's natural skin tone.",
          "Pigmentation becomes a concern when melanin is distributed unevenly, leaving patches that are darker or lighter than the surrounding skin. Because several different conditions can produce this, understanding which type you have is the first step in deciding whether treatment may help.",
        ],
      },
    ],

    // ── 04 · causes. No figures are authored here: the two photographs
    // available for this concern are both sun-related (docs/11 §2), and figures
    // pair with causes by position, so two photographs against four causes
    // would re-caption the block. They wait for a matching set.
    drivers: {
      heading: "Common causes",
      intro:
        "Uneven pigmentation usually reflects a change in how melanin is produced, and more than one factor is normally involved at once.",
      items: [
        {
          lead: "Sun and UV exposure:",
          body: "the most consistent contributor in a country with year-round equatorial UV. It both triggers new pigment and darkens what is already there, including through cloud and window glass.",
        },
        {
          lead: "Hormonal change:",
          body: "pregnancy, hormonal contraception and thyroid conditions are all associated with melasma, which is why it is sometimes called the mask of pregnancy.",
        },
        {
          lead: "Inflammation or injury to the skin:",
          body: "acne, eczema, a burn, a cut or an aggressive cosmetic procedure can leave a flat brown mark behind as the skin settles. This is post-inflammatory hyperpigmentation.",
        },
        {
          lead: "Skin type and family history:",
          body: "medium and deeper skin tones produce pigment more readily in response to injury, and melasma in particular tends to run in families.",
        },
      ],
      outro:
        "Heat matters too, independently of UV. Cooking, hot yoga and long periods outdoors can aggravate melasma even where sunscreen is being used properly.",
    },

    // ── 05 · the differentiator. Three tabs, each with a routing line, because
    // the treatment decision on this page is made almost entirely by type.
    variant: {
      kind: "tabs",
      heading: "Which type do I have?",
      intro:
        "These three account for most of what walks into a Malaysian clinic. They can look alike in a mirror and they are managed very differently, which is why the doctor examines the skin, sometimes under a Wood's lamp, before suggesting anything.",
      tabs: [
        {
          label: "Sun spots",
          sub: "Defined brown patches",
          title: "Sun-related pigmentation",
          body: "Discrete, fairly well-defined brown patches on the areas that catch the most light: the cheekbones, the bridge of the nose, the forehead, the backs of the hands. They accumulate slowly over years and do not fade in the way a tan does.",
          items: [
            {
              lead: "Solar lentigines:",
              body: "flat, evenly coloured brown spots with a clear border, often called age spots or sun spots.",
            },
            {
              lead: "Freckles:",
              body: "smaller, lighter and more numerous, usually appearing early in life and darkening with sun exposure.",
            },
          ],
          routing: "commonly assessed for pico laser, with daily sun protection built into the plan.",
        },
        {
          label: "Melasma",
          sub: "Symmetrical, blurred edges",
          title: "Melasma",
          body: "Larger, symmetrical patches with soft, ill-defined edges, typically across the cheeks, upper lip, forehead and jaw. It is hormone-influenced and heat-sensitive, and it is the one type where aggressive treatment tends to make things worse rather than better.",
          items: [
            {
              lead: "Symmetry is the clue:",
              body: "melasma usually appears in a mirror-image pattern on both sides of the face.",
            },
            {
              lead: "It fluctuates:",
              body: "it darkens with sun, heat and hormonal shifts, and lightens again in quieter periods. That cycle continues whether or not it is treated.",
            },
          ],
          routing:
            "assessed cautiously, with conservative settings, longer intervals and a strong emphasis on daily protection rather than a rapid course.",
        },
        {
          label: "Post-inflammatory",
          sub: "Marks after a spot heals",
          title: "Post-inflammatory hyperpigmentation",
          body: "Flat brown or grey-brown marks that sit exactly where something happened: a spot, a scratch, a patch of eczema, an insect bite. The skin surface is smooth, only the colour has changed. Very common in medium and deeper skin tones.",
          items: [
            {
              lead: "It follows the injury:",
              body: "the shape of the mark matches whatever caused it, which is usually the clearest way to tell it apart from melasma.",
            },
            {
              lead: "It often fades on its own:",
              body: "though slowly, over months, and sun exposure prolongs it. Treating the underlying cause matters more than treating the mark.",
            },
          ],
          routing:
            "settling the underlying cause first, then pico laser or supportive treatment if the mark persists.",
        },
      ],
    },

    // ── 05 media · the stage infographics. Headline and body are burned into the
    // artwork, so these carry no caption and the alt transcribes what the slide
    // says. Transcriptions are provisional and are on the list for editorial
    // sign-off (issue 06) — they must match the artwork verbatim.
    slides: [
      {
        src: "https://cdn.kaiteki.my/concerns/pigmentation/stage-1.jpg",
        alt: "Stage 1: UV exposure prompts melanocytes in the lower epidermis to produce extra melanin.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/pigmentation/stage-2.jpg",
        alt: "Stage 2: the extra melanin is passed into surrounding skin cells, and even tone begins to break up.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/pigmentation/stage-3.jpg",
        alt: "Stage 3: pigment concentrates in patches, and defined spots become visible at the surface.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/pigmentation/stage-4.jpg",
        alt: "Stage 4: with continued exposure, patches darken and spread across the sun-exposed areas.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/pigmentation/stage-5.jpg",
        alt: "Stage 5: pigment reaches deeper layers of the skin, where it is harder to reach and slower to change.",
      },
    ],

    // ── 06 · where it appears.
    locationBlock: {
      heading: "Where pigmentation appears",
      intro:
        "Location is a clue rather than a diagnosis, but the pattern is often the first thing a doctor reads.",
      cards: [
        {
          title: "Cheeks and cheekbones",
          body: "The most sun-exposed part of the face and the usual home of both sun spots and melasma. Symmetry across both cheeks points toward melasma; scattered discrete spots point away from it.",
        },
        {
          title: "Upper lip and jaw",
          body: "A symmetrical shadow above the lip or along the jaw is a common melasma pattern, and one that is often mistaken for facial hair or a shaving mark.",
        },
        {
          title: "Forehead and temples",
          body: "Sun exposure dominates here, and hair products or a fringe can also contribute by trapping heat and irritation against the skin.",
        },
        {
          title: "Nose and bridge",
          body: "Catches direct light all day, so freckles and solar lentigines cluster here. Also the area most likely to be missed when sunscreen is applied in a hurry.",
        },
        {
          title: "Neck, chest and hands",
          body: "Frequently overlooked and frequently the most sun-damaged. Skin here is thinner, heals more slowly and is treated more conservatively than the face.",
        },
      ],
      note: {
        title: "Not typical pigmentation?",
        body: "A mark that is changing in size, shape or colour, has an irregular border, itches or bleeds should be examined promptly. That is a different assessment entirely, and it is not a cosmetic one.",
      },
    },

    // ── 07
    seeDoctor: {
      intro: "It is reasonable to have pigmentation looked at if any of the following apply:",
      triggers: [
        "Over-the-counter brightening products have not helped after a few months of consistent use.",
        "The patches are spreading, or returning each time they fade.",
        "You are unsure whether you are looking at melasma or sun damage, and the products you are using are aimed at one of them.",
        "The pigmentation followed acne, eczema or a cosmetic procedure.",
        "Any mark is changing in size, shape, colour or texture, which needs assessment regardless of cosmetic concern.",
      ],
      outro:
        "Getting the type right early matters more here than in most concerns, because the wrong treatment does not simply fail. Aggressive laser on melasma can darken it, and that setback takes months to unwind.",
    },

    // ── 08
    ctaMid: {
      heading: "Sun spots or melasma?",
      body: "They are treated in almost opposite ways, and they are genuinely hard to tell apart in a mirror. Send us a photo on WhatsApp and a doctor can tell you which conversation you are having.",
    },

    // ── 09
    treatmentsIntro:
      "These are the treatments most often considered for pigmentation at our clinics. Which one is appropriate, and whether any of them is, depends entirely on the type the assessment finds.",
    treatmentWhy: {
      "pico-laser": {
        why: "For sun spots, freckles and stubborn pigment",
        body: "A picosecond laser that shatters pigment with very short pulses rather than heating the surrounding skin. Most predictable on discrete, well-defined sun-related spots. Used far more cautiously where melasma is involved.",
      },
      "vascular-pigment-laser": {
        why: "For redness sitting under the brown",
        body: "Targets both pigment and superficial blood vessels, which matters where a patch carries a red or flushed component as well as a brown one. The doctor decides whether the vascular element is driving what you see.",
      },
      "resurfacing-laser": {
        why: "For pigment bound up with texture change",
        body: "A fractional laser used where uneven tone sits alongside roughness, sun damage or scarring rather than on its own. More downtime, and strict sun avoidance afterwards is not optional.",
      },
      "skin-booster": {
        why: "For dull, dehydrated skin around the patches",
        body: "Injectable hydration that addresses the overall quality of the skin rather than the pigment itself. Considered as support, particularly where dryness is making tone look more uneven than it is.",
      },
      "facial-treatments": {
        why: "For gentle exfoliation between laser sessions",
        body: "Hydrafacial and Silkpeel support surface cell turnover without the heat or aggression that aggravates melasma. Maintenance care, not a substitute for identifying the type.",
      },
    },
    treatmentsNote:
      "Melasma is managed, not cured. Where it is the diagnosis, the plan is usually conservative and long-term, and the doctor may recommend medical treatment and sun protection before considering any device at all.",

    // ── 10
    compare: {
      intro:
        "A general guide only. Mixed pigmentation is common, and the doctor may recommend something different after examining your skin.",
      columns: ["What you have", "Commonly considered", "Typical course", "Downtime"],
      rows: [
        ["Sun spots and freckles", "Pico laser", "Multiple sessions, spaced", "Minimal"],
        [
          "Melasma",
          "Conservative medical management first",
          "Long-term, reviewed regularly",
          "None to minimal",
        ],
        [
          "Marks after acne or eczema",
          "Treat the cause first, then pico laser",
          "Reviewed once the cause settles",
          "Minimal",
        ],
        [
          "Pigment with roughness or texture",
          "Resurfacing laser",
          "Assessed individually",
          "5–7 days",
        ],
        ["Brown with a red component", "Vascular and pigment laser", "Multiple sessions", "Minimal"],
        ["Dull, dehydrated, uneven tone", "Skin boosters, clinic facials", "Ongoing maintenance", "None"],
        [
          "A mark that is changing",
          "Assessed separately: not a cosmetic question",
          "Individual",
          "Individual",
        ],
      ],
      note: "Session counts and intervals are set by the doctor after assessment, and adjusted at review as the skin responds.",
    },

    // ── results
    results: [
      { src: "https://cdn.kaiteki.my/concerns/pigmentation/before-after-01.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Facial pigmentation, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/pigmentation/before-after-02.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Facial pigmentation, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/pigmentation/before-after-03.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Uneven tone on the cheek, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/pigmentation/before-after-04.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Uneven tone on the cheek, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/pigmentation/before-after-05.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Sun-related pigmentation, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/pigmentation/before-after-06.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Sun-related pigmentation, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/pigmentation/before-after-07.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Facial pigmentation, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/pigmentation/before-after-08.jpg", nativeWidth: 600, ratio: "1/1", caption: "Skin tone and clarity, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/pigmentation/before-after-09.jpg", nativeWidth: 600, ratio: "1/1", caption: "Skin tone and clarity, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/pigmentation/before-after-10.jpg", nativeWidth: 600, ratio: "1/1", caption: "Facial pigmentation, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/pigmentation/before-after-11.jpg", nativeWidth: 600, ratio: "1/1", caption: "Facial pigmentation, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/pigmentation/before-after-12.jpg", nativeWidth: 600, ratio: "1/1", caption: "Facial pigmentation, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/pigmentation/before-after-13.jpg", nativeWidth: 600, ratio: "1/1", caption: "Facial pigmentation, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/pigmentation/before-after-14.jpg", nativeWidth: 1735, ratio: "5/4", caption: "Uneven tone across the cheeks, before and after a course of treatment at Kaiteki" },
    ],

    // ── 12
    firstVisit: {
      intro:
        "The consultation is free and there is no obligation to book treatment afterwards. It usually takes 20 to 30 minutes.",
      steps: [
        {
          title: "History",
          body: "How long the pigmentation has been there, whether it followed pregnancy, contraception, acne or a procedure, what you have already tried, and any medication you are taking.",
        },
        {
          title: "Examination",
          body: "The doctor examines the skin, sometimes under magnification or a Wood's lamp, to judge the pattern and how deep the pigment appears to sit.",
        },
        {
          title: "Discussion",
          body: "Which type it looks like, what each option involves, what the risks are for your skin tone, and what is realistic. Including when the honest answer is to protect and wait.",
        },
        {
          title: "Plan",
          body: "If you choose to proceed, a sequence and a review point. You can take the plan away and think about it.",
        },
      ],
      outro:
        "Bring the products you are currently using, or photographs of the labels. Bring older photographs of your face too, if you have them: they show whether the pattern is spreading or holding steady.",
    },

    // ── 13
    risks: {
      intro: "Every treatment on this page carries some risk.",
      items: [
        {
          lead: "Common and usually temporary",
          body: "Redness, mild swelling, dryness and a gritty or warm sensation for a few days. Treated spots may darken and flake before they lift. Less common effects include blistering, prolonged redness or infection.",
        },
        {
          lead: "Pigment change and Malaysian skin",
          body: "Medium and deeper skin tones carry a higher chance of post-inflammatory hyperpigmentation after energy-based treatment — the exact problem being treated, made worse. This is why doctors here choose conservative settings and longer intervals, and why the course may run longer than you expect.",
        },
        {
          lead: "Melasma can rebound",
          body: "Treated too aggressively, melasma can darken rather than lighten, and that setback can take many months to settle. Caution here is a clinical decision, not a lack of ambition.",
        },
        {
          lead: "What treatment cannot do",
          body: "No treatment changes the tendency to produce pigment. Melasma is managed rather than cured and commonly returns with sun, heat or hormonal change. Without daily sun protection, treated spots will not stay gone.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant or breastfeeding, taking hormonal contraception or hormone therapy, using retinoids or acids, have a history of cold sores or keloid scarring, have tanned recently, or have had any skin procedure in the past few weeks.",
    },

    // ── 14
    costFactors: {
      intro:
        "Costs are not published because they depend on the assessment. What they depend on is worth knowing before you come in:",
      factors: [
        "Which type it is: melasma is managed over a longer period than a handful of sun spots.",
        "The area treated: a few discrete spots, the full face, or the neck, chest and hands as well.",
        "The device chosen, since different platforms have different session structures.",
        "How many sessions, which is set after assessment and adjusted at review.",
        "Whether medical treatment or prescription topicals form part of the plan alongside any device.",
      ],
      outro:
        "The doctor will go through the specifics with you at the consultation, including how many sessions they would expect and over what period, before you commit to anything.",
    },

    // ── 15
    technologyIntro:
      "Pigmentation is the concern where device choice matters most, because the wavelength and pulse duration that suit a sun spot are not the ones that suit melasma. Having several platforms means the doctor can pick for your skin rather than for the machine.",

    // ── 16
    faqs: [
      {
        q: "What is the difference between melasma and sun spots?",
        a: "Sun spots are discrete brown patches with a fairly clear border, scattered across the areas that catch the most light, and they accumulate slowly over years. Melasma is larger, symmetrical and soft-edged, usually across both cheeks, the upper lip or the forehead, and it is influenced by hormones and heat as well as sun. They can look similar in a mirror and they are managed almost oppositely, which is why the assessment comes first.",
      },
      {
        q: "Can pigmentation be treated?",
        a: "Some types respond well and others need caution, so it depends entirely on which you have. Discrete sun-related spots are generally the most predictable. Melasma is managed rather than resolved, and post-inflammatory marks often fade on their own once the underlying cause settles. A doctor examines the skin and explains what is realistic for your type before recommending anything.",
      },
      {
        q: "Why does pigmentation come back?",
        a: "Because treatment addresses the pigment that is there, not the tendency to produce it. Melanocytes respond to UV, heat, inflammation and hormonal change exactly as they did before. Melasma in particular fluctuates for years. Daily sun protection and, where relevant, ongoing medical treatment are what keep treated skin stable, which is why they are part of every plan rather than an afterthought.",
      },
      {
        q: "Is laser safe for darker or Asian skin tones?",
        a: "Yes, when the device and settings are chosen by a doctor experienced with your skin type. The specific risk in medium and deeper tones is post-inflammatory hyperpigmentation: the skin responding to treatment by producing more pigment. It is managed by selecting suitable wavelengths, using conservative settings, spacing sessions further apart and being strict about sun protection. It is a real consideration rather than a reason to avoid treatment.",
      },
      {
        q: "Does sunscreen actually help pigmentation?",
        a: "It is the single most consistent thing you can do, both to prevent new pigmentation and to hold on to any improvement. Malaysia sits close to the equator, so UV is high year-round and passes through cloud and window glass. A broad-spectrum sunscreen applied every morning and reapplied through the day is standard advice, and tinted formulations add some protection against visible light, which is relevant in melasma.",
      },
      {
        q: "Can pigmentation be treated during pregnancy?",
        a: "Elective treatment is generally deferred until after pregnancy and breastfeeding. Melasma often appears or worsens during pregnancy because of hormonal change, and it commonly settles to some degree afterwards, so treating in the middle of that is rarely sensible. Sun protection and gentle skincare are usually the advice in the meantime. Tell your doctor at consultation if you are pregnant, breastfeeding or planning to be.",
      },
      {
        q: "Will over-the-counter brightening products work?",
        a: "They can help with mild surface pigmentation and they support any in-clinic plan, but expectations should be modest. Most work slowly and their effect depends on consistent use over months. Where the pigment sits deeper, topical products alone often reach a ceiling. A doctor can tell you whether what you are using is appropriate for your type, and whether anything in it risks irritating your skin further.",
      },
      {
        q: "How many sessions will I need?",
        a: "That is set after the doctor examines your skin, because it depends on the type, the depth and the area. Laser courses for sun-related pigmentation are typically planned as several sessions spaced weeks apart, with a review point built in. Melasma is planned as ongoing management rather than a fixed course. Anyone quoting a precise number before examining your skin should be treated with caution.",
      },
      {
        q: "Does the pigmentation get darker before it fades?",
        a: "With some laser treatments, yes. Treated spots can appear darker for several days, then flake or lift as the skin turns over. This is an expected part of how the treatment works rather than a sign something has gone wrong, and your doctor will tell you in advance if it applies to what you are having. If a treated area behaves differently from what you were told to expect, contact the clinic.",
      },
      {
        q: "Can I still use my retinol or acid products?",
        a: "Do not stop or start anything without telling your doctor. Retinoids and exfoliating acids are usually paused for a period before and after energy-based treatment, because they thin the surface and increase sensitivity. Some are useful between sessions. Bring the actual products or photographs of the labels to the consultation, since strengths vary and the name alone is often not enough to judge.",
      },
      {
        q: "What is post-inflammatory hyperpigmentation?",
        a: "It is a flat brown or grey-brown mark left where the skin has been inflamed or injured: after a spot, a scratch, eczema, a burn or a procedure. The surface is smooth and only the colour has changed. It is very common in medium and deeper skin tones. It generally fades on its own over months, faster if the underlying cause is controlled and the area is protected from sun.",
      },
      {
        q: "Can pigmentation on the hands, neck or chest be treated?",
        a: "Yes, though these areas behave differently from the face. Skin there is thinner, has fewer oil glands and recovers more slowly, so treatment is usually more conservative and spaced further apart. They are also the areas people protect least, which is often why the pigmentation is more advanced there than on the face. They are assessed the same way, by looking at what is actually present.",
      },
    ],

    // ── 17
    relatedConcerns: [
      {
        slug: "acne",
        reason: "Post-acne marks are the most common form of pigmentation we see.",
      },
      {
        slug: "aging",
        reason: "Sun damage drives tone and texture change at the same time.",
      },
      {
        slug: "vascular-lesions",
        reason: "Redness can sit alongside brown patches and needs a different device.",
      },
    ],

    // ── 18
    ctaHeading: "Find out which type you have",
    ctaAssesses: "your skin",
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
    // ── 01
    banner: {
      src: "https://cdn.kaiteki.my/concerns/fine-lines-wrinkles/banner.jpg",
      sm: "https://cdn.kaiteki.my/concerns/fine-lines-wrinkles/banner-sm.jpg",
      alt: "Illustrative photograph: a person looking closely at the skin around their eyes in a mirror",
    },

    // ── 02 · process facts. No claim about smoothing, and no timeframe (R-01).
    facts: [
      {
        value: "Two different lines",
        label: "Lines that appear when you move and lines present at rest are treated differently.",
      },
      {
        value: "Movement or structure",
        label: "The same crease can come from muscle, from lost volume, or from the skin itself.",
      },
      {
        value: "Assessment first",
        label: "A doctor examines your face at rest and in movement before any treatment.",
      },
    ],

    // ── 02b
    jumpNav: [
      { id: "causes", label: "What causes them" },
      { id: "which-type", label: "Which type do I have?" },
      { id: "where", label: "Where they appear" },
      { id: "treatments", label: "Treatments" },
      { id: "risks", label: "Risks" },
      { id: "cost", label: "Cost" },
      { id: "faq", label: "FAQ" },
    ],

    sections: [
      {
        heading: "What are fine lines and wrinkles?",
        body: [
          "Fine lines and wrinkles are creases that form in the skin over time. Expression lines appear with movement, smiling, squinting or frowning, and are linked to how the face moves, often showing around the eyes, forehead and mouth.",
          "Static wrinkles are lines that remain visible even when the face is at rest. They tend to develop gradually as the skin's collagen and elastin change with age and sun exposure. Because expression lines and static lines behave differently, understanding which you have is the first step in deciding whether treatment may help.",
        ],
      },
    ],

    // ── 04 · causes, organised by the line each one produces. Seven causes,
    // seven photographs, paired by position — the source filenames encode the
    // subheadings this page needs (docs/12 "Content authoring").
    drivers: {
      heading: "What causes them",
      intro:
        "Almost every line has a specific cause, and naming it is what decides the treatment. These are the ones people most often point at, and what is actually producing each.",
      items: [
        {
          lead: "Repeated expression:",
          body: "smiling, squinting and raising the brows fold the skin in the same place thousands of times. Crow's feet and forehead lines start here, appearing only on movement before they begin to persist.",
        },
        {
          lead: "Frowning and concentration:",
          body: "the vertical glabellar lines between the brows come from the muscles that pull them together. Screen work, bright sun and reading without the right glasses all encourage it.",
        },
        {
          lead: "Pursing and lip movement:",
          body: "fine vertical perioral lines around the mouth come from the circular muscle in the lips. Smoking accelerates them considerably, both mechanically and through its effect on collagen.",
        },
        {
          lead: "Volume loss and gravity:",
          body: "marionette lines running from the mouth corners toward the chin deepen as support in the mid-face is lost and tissue settles. The line is a fold rather than a crease in the skin.",
        },
        {
          lead: "Collagen decline and sun damage:",
          body: "static wrinkles present at rest reflect the skin's own structure thinning. UV exposure is the single largest accelerator, which is why sun-exposed skin ages visibly faster than skin that is covered.",
        },
        {
          lead: "Sleep position:",
          body: "sleeping face-down or consistently on one side presses the skin into the same folds for hours each night. Sleep lines are typically diagonal and asymmetric, which is what distinguishes them.",
        },
        {
          lead: "Neck posture and exposure:",
          body: "horizontal neck lines are shaped by movement, posture and looking downward, and the neck is both thinner-skinned and the area most often left out of a sunscreen routine.",
        },
      ],
      outro:
        "Dehydration, smoking, disturbed sleep and genetics run underneath all of it. None of them creates a line on its own, but each changes how quickly the others do their work.",
    },

    // ── 04 media · one figure per cause, in the same order as `drivers.items`.
    figures: [
      {
        src: "https://cdn.kaiteki.my/concerns/fine-lines-wrinkles/line-expression.jpg",
        caption:
          "Expression lines follow the way a face moves, appearing first only on movement before they begin to persist at rest.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/fine-lines-wrinkles/line-glabellar.jpg",
        caption:
          "Glabellar lines are the vertical creases between the brows, produced by the muscles that pull them together.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/fine-lines-wrinkles/line-perioral.jpg",
        caption:
          "Perioral lines are fine vertical creases around the mouth, driven by the circular muscle in the lips.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/fine-lines-wrinkles/line-marionette.jpg",
        caption:
          "Marionette lines run from the corners of the mouth toward the chin, and deepen as mid-face support is lost.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/fine-lines-wrinkles/line-static.jpg",
        caption:
          "Static wrinkles are visible at rest and reflect the skin's own structure, with sun exposure the largest accelerator.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/fine-lines-wrinkles/line-sleep.jpg",
        caption:
          "Sleep lines come from hours of pressure against a pillow, and are typically diagonal and asymmetric.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/fine-lines-wrinkles/line-neck.jpg",
        caption:
          "Neck lines are shaped by posture and movement, on skin that is thinner and most often left out of a sunscreen routine.",
      },
    ],

    // ── 05 · the differentiator. Three tabs, because the treatment decision
    // turns on whether a line is made by muscle, by lost support, or by the
    // skin itself.
    variant: {
      kind: "tabs",
      heading: "Which type do I have?",
      intro:
        "One test separates most of this. Look in a mirror with your face completely relaxed, then make the expression that produces the line. What the line does between those two states decides how it is treated.",
      tabs: [
        {
          label: "Dynamic",
          sub: "Only when you move",
          title: "Dynamic lines",
          body: "Lines that appear when you make an expression and vanish when your face relaxes. They are produced by muscle folding the skin above it, and the skin itself is still intact. This is the earliest stage, and the one where treatment is most straightforward.",
          items: [
            {
              lead: "The tell:",
              body: "gone entirely at rest, obvious on movement. Crow's feet, forehead lines and frown lines usually begin here.",
            },
            {
              lead: "Why it matters:",
              body: "treating at this stage addresses the folding, before the skin has been creased often enough to hold the line permanently.",
            },
          ],
          routing:
            "commonly assessed for muscle-relaxing injection, with attention to skin quality alongside it.",
        },
        {
          label: "Static",
          sub: "Visible at rest",
          title: "Static lines",
          body: "Lines still present when your face is completely relaxed. The skin has been folded often enough, or has thinned enough, that the crease persists. Sun damage and collagen loss are usually part of the picture rather than muscle alone.",
          items: [
            {
              lead: "The tell:",
              body: "you can see it with a still face, and stretching the skin gently reduces it.",
            },
            {
              lead: "What it means for treatment:",
              body: "relaxing the muscle alone will soften it but not remove it, because part of the line now lives in the skin.",
            },
          ],
          routing:
            "assessed for skin-directed treatment such as resurfacing or collagen stimulation, often combined with muscle treatment.",
        },
        {
          label: "Fold",
          sub: "Made by lost support",
          title: "Volume-related folds",
          body: "Deeper creases such as nasolabial folds and marionette lines, which are not really wrinkles at all. They mark where tissue has descended or deflated, creating a shadowed junction between two areas of the face rather than a crease in the skin surface.",
          items: [
            {
              lead: "The tell:",
              body: "lying down softens it considerably, and lifting the cheek gently with a fingertip reduces the fold.",
            },
            {
              lead: "The common mistake:",
              body: "treating the fold directly rather than the loss above it, which adds weight to an area that is already heavy.",
            },
          ],
          routing:
            "assessed for support placed where volume was lost, rather than product placed into the line itself.",
        },
      ],
    },

    // ── 06
    locationBlock: {
      heading: "Where lines appear",
      intro:
        "Each area of the face moves differently and ages differently, and the treatment differs accordingly.",
      cards: [
        {
          title: "Forehead and between the brows",
          body: "Horizontal forehead lines come from raising the brows; vertical glabellar lines come from frowning. Both are dynamic first. This is also the area where over-treatment is most visible, so conservative dosing matters.",
        },
        {
          title: "Around the eyes",
          body: "Crow's feet, and the fine crepe lines beneath the lower lid. The skin here is the thinnest on the face, so it shows change earliest and tolerates the least aggressive treatment.",
        },
        {
          title: "Around the mouth",
          body: "Fine vertical lines on the lip and the folds running down from the mouth corners. Two different problems in one area: one is skin and muscle, the other is lost support above it.",
        },
        {
          title: "Cheeks and mid-face",
          body: "Where volume change shows most clearly. Lines here are frequently the consequence of flattening above rather than of creasing in the skin, which is why they respond poorly to surface treatment alone.",
        },
        {
          title: "Neck and décolletage",
          body: "Thinner skin, fewer oil glands, constant movement and, for most people, decades of missed sunscreen. Treated more conservatively than the face and often the last area people think to include.",
        },
      ],
      note: {
        title: "Not just a line?",
        body: "A crease that is red, scaly, itchy or bleeding, or an area of skin that has changed texture rather than simply folded, should be examined rather than treated cosmetically.",
      },
    },

    // ── 07
    seeDoctor: {
      intro: "There is no threshold at which lines need treating. It is worth an assessment if:",
      triggers: [
        "Lines that used to appear only on movement are now visible when your face is at rest.",
        "You are unsure whether what you are seeing is a wrinkle or a fold from lost volume.",
        "Skincare has plateaued and you want to know what, if anything, would add to it.",
        "You are considering treatment for the first time and want a conservative, staged plan rather than a package.",
        "You have had treatment elsewhere and were unhappy with how it looked.",
      ],
      outro:
        "Earlier assessment is useful mainly because a dynamic line is simpler to address than one that has become static. That is a reason to understand your options, not a reason to start treatment before you want to.",
    },

    // ── 08
    ctaMid: {
      heading: "Wrinkle or fold?",
      body: "They look similar and are treated in opposite ways: one relaxes muscle, the other restores support. Send us a photo on WhatsApp and a doctor can tell you which you're looking at.",
    },

    // ── 09
    treatmentsIntro:
      "These are the treatments most often considered for lines and wrinkles at our clinics. Which is appropriate, and whether any of them is, depends on whether the line comes from muscle, from lost support, or from the skin itself.",
    treatmentWhy: {
      "botulinum-toxin": {
        why: "For lines that appear when you move",
        body: "Relaxes the specific muscle folding the skin, so the line forms less forcefully. Most relevant on dynamic forehead, frown and crow's-feet lines. Temporary, and repeated periodically. Dose and placement are what separate a natural result from a frozen one.",
      },
      "dermal-fillers": {
        why: "For folds held open by lost volume",
        body: "Placed to restore support where the face has flattened, rather than into the crease itself. Most relevant for nasolabial and marionette folds, which are shadows from descent rather than creases in the skin.",
      },
      "skin-booster": {
        why: "For fine crepe lines and surface dryness",
        body: "Injectable hydration that improves the quality and light-reflection of the skin rather than filling any single line. Considered where fine crepiness across an area, rather than one crease, is what you are noticing.",
      },
      microneedling: {
        why: "For etched lines and overall texture",
        body: "Fine needles with radiofrequency energy stimulate collagen through the deeper skin. Considered for static lines and general texture, and generally a lower pigmentation-risk option for medium and deeper skin tones.",
      },
      "resurfacing-laser": {
        why: "For deeper static lines around the mouth",
        body: "A fractional laser used where lines are etched into the skin and texture change has set in. More downtime than the options above, and strict sun avoidance afterwards is part of the deal.",
      },
      hifu: {
        why: "For laxity that deepens the folds",
        body: "Focused ultrasound aimed at firmness beneath the skin. Considered where folds are being deepened by descent, so the useful target is the support above the line rather than the line itself.",
      },
      ultherapy: {
        why: "For lifting that softens the fold above it",
        body: "The same principle with ultrasound imaging to guide delivery. Relevant where the doctor wants to see the tissue planes while treating, particularly around the brow and lower face.",
      },
    },
    treatmentsNote:
      "Combinations are the norm rather than the exception, because most faces carry dynamic lines, static lines and folds at once. Sequence matters: relaxing the muscle first often shows how much of a line was actually etched into the skin.",

    // ── 10
    compare: {
      intro:
        "A general guide only. Most plans combine more than one approach, and the doctor may recommend something different after examining your face.",
      columns: ["What you have", "Commonly considered", "Typical course", "Downtime"],
      rows: [
        ["Lines only on movement", "Muscle-relaxing injection", "Repeated periodically", "None"],
        ["Lines visible at rest", "Muscle treatment plus skin-directed treatment", "Staged, reviewed", "Varies"],
        ["Fine crepe lines under the eyes", "Skin boosters", "Short course, then maintenance", "1–2 days swelling"],
        ["Etched lines and texture", "RF microneedling", "Several sessions, spaced", "2–3 days redness"],
        ["Deep lines around the mouth", "Resurfacing laser", "Assessed individually", "5–7 days"],
        ["Nasolabial or marionette folds", "Support placed above the fold", "Staged over sessions", "1–2 days swelling"],
        ["Neck lines", "Assessed individually, treated conservatively", "Individual", "Individual"],
      ],
      note: "Session counts and intervals are set by the doctor after assessment. Collagen-based change continues for months after a session, so plans include review points rather than fixed end dates.",
    },

    // ── results · deliberately absent. The one before-and-after asset assigned
    // to this concern reads as a supplier demonstration rather than a Kaiteki
    // patient (docs/11 §3), and the results block is headed "Results from
    // Kaiteki patients". It is authored here only once that provenance is
    // confirmed (issue 06).

    // ── 12
    firstVisit: {
      intro:
        "The consultation is free and there is no obligation to book treatment afterwards. It usually takes 20 to 30 minutes.",
      steps: [
        {
          title: "History",
          body: "What you have noticed and how long ago, any previous injectables or laser treatment, your skincare, sun habits, whether you smoke, and any medical history or medication.",
        },
        {
          title: "Examination",
          body: "The doctor watches your face both at rest and through a set of expressions, because a line that disappears when you relax is a different problem from one that does not.",
        },
        {
          title: "Discussion",
          body: "Which lines are dynamic, which are static, which are folds, what each option changes, downtime, risks, and what a conservative first step would look like.",
        },
        {
          title: "Plan",
          body: "If you choose to proceed, a sequence and a review point. You can take the plan away and think about it.",
        },
      ],
      outro:
        "Bring details of any previous injectable treatment, including the product and roughly when. It changes both the assessment and the timing of anything new.",
    },

    // ── 13
    risks: {
      intro: "Every treatment on this page carries some risk.",
      items: [
        {
          lead: "Common and usually temporary",
          body: "Redness, swelling, bruising and tenderness at injection points. Energy-based treatment leaves redness, dryness and a gritty sensation for a few days. Muscle-relaxing injection can cause a mild headache in the first days.",
        },
        {
          lead: "Uncommon but important",
          body: "Muscle-relaxing injection can spread slightly beyond the intended muscle and cause a temporary drooping brow or eyelid, which resolves as the effect wears off. Injectables carry a rare but serious risk of vascular occlusion. Both are reasons to be treated by a doctor who knows facial anatomy.",
        },
        {
          lead: "Pigment change and Malaysian skin",
          body: "Medium and deeper skin tones carry a higher chance of post-inflammatory hyperpigmentation after laser or energy-based treatment. Settings are chosen conservatively and sessions spaced further apart for this reason, and daily sun protection is part of the plan.",
        },
        {
          lead: "What treatment cannot do",
          body: "Nothing here stops your face ageing, and no treatment removes a deep static line entirely. Relaxing a muscle will not erase a crease already etched into the skin, and filling a fold does not address the descent that created it. Effects are temporary and maintained rather than permanent, and a face that cannot move is a sign of too much rather than of a good result.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant or breastfeeding, take blood thinners, have a neuromuscular condition, use retinoids or acids, have a history of cold sores or keloid scarring, have had any injectable or laser treatment recently, or have tanned in the past few weeks.",
    },

    // ── 14
    costFactors: {
      intro:
        "Costs are not published because they depend on the assessment. What they depend on is worth knowing before you come in:",
      factors: [
        "Which type of line is being treated, since muscle, skin and volume are different treatments.",
        "How many areas: one region of the face, the upper face, or a full-face plan.",
        "The product or device, and how much of it your anatomy and the pattern of movement call for.",
        "How many sessions, which is set after assessment and reviewed as your skin responds.",
        "How often maintenance is likely, because muscle-relaxing treatment is repeated over time.",
      ],
      outro:
        "The doctor will go through the specifics with you at the consultation, including a conservative first step and how it would be reviewed, before you commit to anything.",
    },

    // ── 15
    technologyIntro:
      "Lines come from three different sources, so no single device or product addresses all of them. Having several platforms means the doctor can treat the cause of each line rather than applying one tool to every crease.",

    // ── 16
    faqs: [
      {
        q: "What is the difference between fine lines and wrinkles?",
        a: "Fine lines are shallow surface creases, often the first thing people notice around the eyes and on the lip. Wrinkles are deeper and more established. More useful than depth, though, is whether a line is present when your face is relaxed. A line that only appears on movement is treated differently from one visible at rest, and that distinction guides the plan far more than the label does.",
      },
      {
        q: "Can lines and wrinkles be prevented?",
        a: "Not entirely, since everyone's face ages and movement is part of living in it. What is well established is that daily broad-spectrum sunscreen slows the process considerably, particularly in a country with year-round equatorial UV, and that not smoking makes a visible difference around the mouth. Beyond that, sleep, hydration and a sensible skincare routine support skin quality without stopping the underlying change.",
      },
      {
        q: "Will muscle-relaxing injection make my face look frozen?",
        a: "Only if it is overdosed or misplaced. Used conservatively, it reduces how forcefully a specific muscle folds the skin while leaving expression intact. A frozen appearance almost always comes from treating too many muscles at once, or from too much product in one area. It is entirely reasonable to say at consultation that you want to keep full movement and would rather start low and review.",
      },
      {
        q: "Are nasolabial folds wrinkles?",
        a: "Not really. The fold running from the nose to the corner of the mouth marks the junction between the cheek and the lip area, and everyone has one. It deepens as support in the mid-face is lost, so it becomes a shadow rather than a crease in the skin. Treating it by filling the line directly usually looks heavy; supporting the cheek above it is generally the more sensible approach.",
      },
      {
        q: "How soon will I see a difference?",
        a: "Muscle-relaxing injection takes a few days to begin and around two weeks to show its full effect, which is why review appointments are scheduled at that point rather than sooner. Volume support is visible immediately, though swelling makes the first days unreliable. Collagen-stimulating treatments build gradually over months. Photographs at consistent angles and lighting are far more useful than daily mirror checks.",
      },
      {
        q: "How long do the effects last?",
        a: "It depends entirely on the treatment. Muscle-relaxing injection wears off over a period of months and is repeated. Volume support is gradually broken down by the body over a longer period. Collagen-based change builds and then recedes as ageing continues. None of it is permanent, and any plan should include an honest conversation about how often you would be returning.",
      },
      {
        q: "Is treatment painful?",
        a: "Injections are described as quick sharp pinches, and most people find muscle-relaxing treatment easily tolerable without numbing. Fillers usually contain local anaesthetic. RF microneedling and resurfacing laser are more uncomfortable and are done with numbing cream and cooling. If discomfort is a particular worry, raise it at the consultation, since preparation and settings can be adjusted.",
      },
      {
        q: "Can I start treatment in my twenties or thirties?",
        a: "Many people do, usually for dynamic lines that are beginning to persist. The argument for it is that a line is simpler to address before it becomes etched into the skin. The argument against starting too early is cost, commitment and the fact that some lines never progress. There is no medically correct age, and a doctor who tells you that you need treatment now should be questioned.",
      },
      {
        q: "Does skincare actually help?",
        a: "It helps with skin quality, which is a real part of how lines read, and a sensible routine supports any in-clinic plan. Sunscreen is the single most evidenced item in it. Well-formulated retinoids and antioxidants have reasonable support behind them. What skincare will not do is relax a muscle or restore lost volume, so expectations should match the mechanism of whatever you are buying.",
      },
      {
        q: "Can the lines on my neck be treated?",
        a: "The neck is commonly assessed alongside the face, and it is often where people notice change first. It also behaves differently: the skin is thinner, has fewer oil glands and recovers more slowly, so treatment here is deliberately more conservative and expectations should be modest. Horizontal creases shaped by posture and movement respond less predictably than lines on the face.",
      },
      {
        q: "What if I don't like the result?",
        a: "That depends on what you have had. Muscle-relaxing injection is temporary and wears off, which is one reason it is a reasonable first treatment. Hyaluronic-acid fillers can be dissolved, which is why they are generally preferred over permanent products. Energy-based treatments cannot be undone, which is an argument for treating conservatively first. Ask about reversibility at the consultation, before you decide.",
      },
      {
        q: "Should I treat every line I have?",
        a: "Usually not, and a good consultation will say so. Treating everything at once removes the information you need to judge what actually helped, costs more, and increases the chance of a face that reads as treated. Addressing the one or two things that bother you most, then reviewing, gives a better result and leaves you free to stop at any point.",
      },
    ],

    // ── 17
    relatedConcerns: [
      {
        slug: "aging",
        reason: "Lines are one part of a wider picture of firmness, texture and volume.",
      },
      {
        slug: "face-lifting",
        reason: "Folds deepened by descent are addressed by supporting the tissue above them.",
      },
      {
        slug: "dark-eye-circles",
        reason: "Crepey lower-lid skin is usually assessed at the same time.",
      },
    ],

    // ── 18
    ctaHeading: "Find out what's making your lines",
    ctaAssesses: "your skin and how your face moves",
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
    // ── 01
    banner: {
      src: "https://cdn.kaiteki.my/concerns/dark-eye-circles/banner.jpg",
      sm: "https://cdn.kaiteki.my/concerns/dark-eye-circles/banner-sm.jpg",
      alt: "Illustrative photograph: a person looking into a mirror at the skin beneath their eye",
    },

    // ── 02 · process facts. No claim about sleep fixing it, and no timeframe.
    facts: [
      {
        value: "Three mechanisms",
        label: "Pigment, blood vessels and shadow each produce darkness that looks alike.",
      },
      {
        value: "Often inherited",
        label: "A family pattern of under-eye darkness is common, and it is not caused by tiredness.",
      },
      {
        value: "The most delicate skin",
        label: "Under-eye skin is the thinnest on the body, so treatment here is conservative.",
      },
    ],

    // ── 02b
    jumpNav: [
      { id: "causes", label: "What causes it" },
      { id: "which-type", label: "Which type do I have?" },
      { id: "where", label: "Where it sits" },
      { id: "treatments", label: "Treatments" },
      { id: "risks", label: "Risks" },
      { id: "cost", label: "Cost" },
      { id: "faq", label: "FAQ" },
    ],

    sections: [
      {
        heading: "What causes dark eye circles?",
        body: [
          "Dark circles under the eyes are not a single condition. The darkness can come from extra pigment in the skin, from blood vessels showing through the thin under-eye skin, or from the shape of the area itself, where hollows and shadows make the region look darker. Often more than one of these is involved at the same time.",
          "Because the underlying cause differs from person to person, what looks similar on the surface can have very different reasons behind it. Identifying which factors are contributing is the first step, since the cause guides whether any treatment may help.",
        ],
      },
    ],

    // ── 04 · the three mechanisms that actually produce the darkness. Three
    // causes, three photographs, paired by position. Sleep, alcohol and
    // dehydration sit in the outro rather than as items: they modulate all
    // three rather than causing any of them.
    drivers: {
      heading: "Common causes",
      intro:
        "Under-eye skin is the thinnest on the body, which is why three quite different things can show through it and all read as a dark circle.",
      items: [
        {
          lead: "Extra pigment in the skin:",
          body: "melanin concentrated around the eye, often inherited, and darkened further by sun exposure or by rubbing the area during allergy or eczema flares. Common in medium and deeper skin tones.",
        },
        {
          lead: "Blood vessels showing through:",
          body: "the fine network beneath thin skin reads as blue, purple or grey rather than brown. Nasal congestion, allergy and anything that dilates those vessels makes it more obvious.",
        },
        {
          lead: "Shape and shadow:",
          body: "as the fat pad under the eye shrinks or descends, a groove forms between the lid and the cheek. What you see there is not pigment at all: it is a shadow cast by the contour.",
        },
      ],
      outro:
        "Poor sleep, alcohol, salt and dehydration rarely cause dark circles on their own, but they make all three more visible, which is why the area looks worse on some mornings than others. Ageing thins the skin further and deepens the shadow, so most people over forty have some element of all three.",
    },

    // ── 04 media · one figure per cause, in the same order as `drivers.items`.
    figures: [
      {
        src: "https://cdn.kaiteki.my/concerns/dark-eye-circles/pigmentation-circle.jpg",
        caption:
          "Pigment concentrated in the skin around the eye reads as brown or grey, and is often an inherited pattern.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/dark-eye-circles/vascular.jpg",
        caption:
          "Fine blood vessels beneath very thin skin show through as blue, purple or grey rather than brown.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/dark-eye-circles/figure-01.jpg",
        caption:
          "A groove between the lower lid and the cheek casts a shadow. Nothing there is pigmented — the darkness is contour.",
      },
    ],

    // ── 05 · the differentiator. Two self-tests give the visitor something they
    // can actually do before they arrive, and route them to the right block.
    variant: {
      kind: "tabs",
      heading: "Which type do I have?",
      intro:
        "Two quick checks in front of a mirror narrow this down considerably. Stretch the skin gently sideways, then tilt your head so the light comes from directly in front rather than above.",
      tabs: [
        {
          label: "Pigment",
          sub: "Brown, stays when stretched",
          title: "Pigmented circles",
          body: "A brown or grey-brown discolouration that stays visible when you stretch the skin gently and when light hits the area straight on. It often extends onto the lid or toward the temple rather than sitting only in the hollow.",
          items: [
            {
              lead: "The tell:",
              body: "stretching the skin does not lighten it, and direct light does not remove it.",
            },
            {
              lead: "Frequently linked to:",
              body: "family pattern, sun exposure, and habitual rubbing from allergy or eczema.",
            },
          ],
          routing:
            "commonly assessed for pigment-targeted laser, with sun protection and any allergy or eczema addressed alongside.",
        },
        {
          label: "Vascular",
          sub: "Blue or purple tint",
          title: "Vascular circles",
          body: "A bluish or purplish cast, sometimes with visible fine vessels, which becomes more obvious when you are tired, congested or crying. Stretching the skin makes it fade slightly as the vessels are drawn flatter.",
          items: [
            {
              lead: "The tell:",
              body: "the colour is blue or purple rather than brown, and it fluctuates from day to day.",
            },
            {
              lead: "Frequently linked to:",
              body: "very thin or fair skin, nasal allergy, and anything that leaves you congested.",
            },
          ],
          routing:
            "assessed for vascular laser or skin-quality treatment, with nasal allergy managed if it is contributing.",
        },
        {
          label: "Structural",
          sub: "Shadow that light removes",
          title: "Structural circles",
          body: "A hollow or groove between the lower lid and the cheek that reads as dark in overhead light and largely disappears when light comes from straight ahead. Photographs taken from below often show almost nothing.",
          items: [
            {
              lead: "The tell:",
              body: "shine a light directly at the face, or tilt your chin down toward a window. If the darkness vanishes, it is shadow.",
            },
            {
              lead: "Frequently linked to:",
              body: "volume loss with age, inherited eye-socket shape, and weight loss.",
            },
          ],
          routing:
            "assessed for volume support placed conservatively, or skin-quality treatment where the skin is very thin.",
        },
        {
          label: "Mixed",
          sub: "More than one at once",
          title: "Mixed circles",
          body: "The most common answer, particularly past the mid-thirties. Pigment sits over a hollow, or thin skin shows vessels while a shadow deepens the effect. Treating one component alone then produces a partial, disappointing change.",
          items: [
            {
              lead: "The tell:",
              body: "the mirror tests give ambiguous answers, and the area looks different in every light.",
            },
            {
              lead: "What it means for the plan:",
              body: "a sequence rather than a single treatment, usually with the dominant component addressed first and the rest reassessed.",
            },
          ],
          routing:
            "assessed as a sequence, with the dominant component treated first and the remainder reviewed afterwards.",
        },
      ],
    },

    // ── 06
    locationBlock: {
      heading: "Where the darkness sits",
      intro:
        "Exactly where the darkness falls is a useful clue, and it is the part people find hardest to describe over a message.",
      cards: [
        {
          title: "Inner corner, next to the nose",
          body: "The classic tear-trough position. Darkness concentrated here, deepening toward the nose, is most often shadow from a groove rather than pigment in the skin.",
        },
        {
          title: "Directly under the lash line",
          body: "A narrow band immediately beneath the lashes tends to be vascular or pigmented rather than structural, because there is very little contour to cast a shadow this high.",
        },
        {
          title: "Across the whole lower lid",
          body: "A broad, even brown wash across the whole area, sometimes reaching the upper lid too, usually points toward a pigmented pattern, particularly where it is symmetrical and long-standing.",
        },
        {
          title: "Outer corner and toward the temple",
          body: "Darkness that continues outward past the eye is more often pigmentary, and worth assessing alongside sun exposure and any skincare that irritates the area.",
        },
      ],
      note: {
        title: "Not just a dark circle?",
        body: "Persistent puffiness, swelling that comes and goes through the day, a lump, or any change in vision or in the appearance of one eye only should be assessed by a doctor. That is a medical question, not a cosmetic one.",
      },
    },

    // ── 07
    seeDoctor: {
      intro: "It is reasonable to have the area looked at if any of the following apply:",
      triggers: [
        "Eye creams and concealer have not made a difference after a few months of consistent use.",
        "You cannot tell whether what you have is pigment, vessels or shadow, and are buying products aimed at one of them.",
        "The darkness appeared or worsened noticeably over a short period.",
        "It sits alongside itching, congestion or eczema, which may be aggravating it.",
        "Only one side is affected, or there is swelling, a lump, or any change in your vision.",
      ],
      outro:
        "The under-eye area is where poorly judged treatment shows most, and where complications are hardest to hide. An assessment before you commit to anything is worth more here than almost anywhere else on the face.",
    },

    // ── 08
    ctaMid: {
      heading: "Pigment, vessels or shadow?",
      body: "The three look almost identical in a mirror and none of them responds to the treatment for the others. Send us a photo on WhatsApp and a doctor can tell you which you're looking at.",
    },

    // ── 09
    treatmentsIntro:
      "These are the treatments most often considered for the under-eye area at our clinics. Which one is appropriate, and whether any of them is, depends entirely on which mechanism the assessment identifies.",
    treatmentWhy: {
      "skin-booster": {
        why: "For thin, crepey under-eye skin",
        body: "Injectable hydration placed superficially to improve the quality and thickness of very thin skin, so less shows through it. Considered where skin quality rather than pigment or volume is the leading issue.",
      },
      "vascular-pigment-laser": {
        why: "For bluish vessels showing through",
        body: "Targets superficial vessels and pigment around the eye, with settings chosen conservatively because the skin here is far thinner than on the cheek. Relevant where colour rather than contour is the problem.",
      },
      radiofrequency: {
        why: "For laxity in the lower lid",
        body: "Gentle heating to prompt collagen change where the lower lid skin has loosened and creased. Considered where crepiness accompanies the darkness rather than where a hollow dominates.",
      },
      "dermal-fillers": {
        why: "For the hollow that casts the shadow",
        body: "Small volumes placed deeply to soften a groove between lid and cheek. The most technically demanding injection on the face, and the one where conservative placement matters most, because the area shows every error.",
      },
    },
    treatmentsNote:
      "Where a hollow is the cause, no laser will remove the shadow, and where pigment is the cause, adding volume will not lighten it. Mixed circles are treated in sequence rather than all at once, so each step can be judged on its own.",

    // ── 10
    compare: {
      intro:
        "A general guide only. Mixed circles are the norm rather than the exception, and the doctor may recommend something different after examining the area.",
      columns: ["What you have", "Commonly considered", "Typical course", "Downtime"],
      rows: [
        ["Brown, unchanged when stretched", "Pigment-targeted laser", "Multiple sessions, spaced", "Minimal"],
        ["Blue or purple tint", "Vascular laser", "Multiple sessions, spaced", "Minimal"],
        ["Hollow that light removes", "Volume support, placed deeply", "Staged, reviewed between", "Bruising possible"],
        ["Thin, crepey skin", "Skin boosters", "Short course, then maintenance", "1–2 days swelling"],
        ["Loose lower-lid skin", "Radiofrequency", "Course, spaced", "Minimal"],
        ["Pigment over a hollow", "Sequenced: one component at a time", "Assessed individually", "Individual"],
        ["Puffiness or a persistent lump", "Assessed separately: a medical question", "Individual", "Individual"],
      ],
      note: "Session counts and intervals are set by the doctor after assessment. Treatment here is deliberately conservative, so plans tend to be longer and gentler than they would be elsewhere on the face.",
    },

    // ── results
    results: [
      { src: "https://cdn.kaiteki.my/concerns/dark-eye-circles/before-after-01.jpg", nativeWidth: 498, ratio: "5/4", caption: "Under-eye area, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/dark-eye-circles/before-after-02.jpg", nativeWidth: 498, ratio: "5/4", caption: "Under-eye area, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/dark-eye-circles/before-after-03.jpg", nativeWidth: 498, ratio: "5/4", caption: "Under-eye area, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/dark-eye-circles/before-after-04.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Under-eye darkness, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/dark-eye-circles/before-after-05.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Under-eye darkness, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/dark-eye-circles/before-after-06.jpg", nativeWidth: 600, ratio: "1/1", caption: "Under-eye darkness, before and after a course of treatment at Kaiteki" },
      // The last three say "before and after treatment" rather than "after a
      // course of treatment": under-eye volume support is a single appointment,
      // and calling it a course would overstate the photograph (ADR-0001 §2).
      { src: "https://cdn.kaiteki.my/concerns/dark-eye-circles/before-after-07.jpg", nativeWidth: 600, ratio: "1/1", caption: "Under-eye hollowing, before and after treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/dark-eye-circles/before-after-08.jpg", nativeWidth: 600, ratio: "1/1", caption: "Under-eye hollowing, before and after treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/dark-eye-circles/before-after-09.jpg", nativeWidth: 600, ratio: "1/1", caption: "Under-eye hollowing, before and after treatment at Kaiteki" },
    ],

    // ── 12
    firstVisit: {
      intro:
        "The consultation is free and there is no obligation to book treatment afterwards. It usually takes 20 to 30 minutes.",
      steps: [
        {
          title: "History",
          body: "How long it has been there, whether anyone in your family has the same pattern, any allergy, eczema or congestion, your sleep and general health, and anything you have already tried.",
        },
        {
          title: "Examination",
          body: "The doctor looks at the area in more than one light and angle, stretches the skin gently, and checks whether the darkness moves with the light — the same tests you can do at home, done properly.",
        },
        {
          title: "Discussion",
          body: "Which mechanism is leading, what each option can reach, the specific risks of treating this area, and what is realistic. Including when the honest answer is that concealer is the better tool.",
        },
        {
          title: "Plan",
          body: "If you choose to proceed, a sequence and a review point. You can take the plan away and think about it.",
        },
      ],
      outro:
        "Come without makeup if you can, and bring a photograph of yourself in daylight. Clinic lighting is overhead, which exaggerates shadow, so a daylight photograph often shows the area more honestly than the mirror in the room.",
    },

    // ── 13
    risks: {
      intro:
        "Every treatment on this page carries some risk, and the under-eye area carries more of it than most, because the skin is thin and the anatomy is unforgiving.",
      items: [
        {
          lead: "Common and usually temporary",
          body: "Bruising, swelling and tenderness, which are more visible here than elsewhere and can last a week or more with injectables. Laser treatment can leave redness, dryness and a gritty sensation for several days.",
        },
        {
          lead: "Specific to injectables in this area",
          body: "Product placed too superficially can leave a bluish tinge or visible lumps, and the area holds fluid readily, so puffiness can persist. Filler here is dissolvable, which is one reason it is preferred over permanent options. Vascular occlusion is rare but serious, and the eye area is where its consequences are gravest.",
        },
        {
          lead: "Pigment change and Malaysian skin",
          body: "Medium and deeper skin tones carry a higher chance of post-inflammatory hyperpigmentation after energy-based treatment, which here would darken exactly what is being treated. Settings are chosen conservatively for this reason.",
        },
        {
          lead: "What treatment cannot do",
          body: "Nothing on this page changes an inherited eye-socket shape or removes a shadow that comes from bone. Treating pigment will not lift a hollow, and volume will not lighten brown skin. Sleep does not cure dark circles, and neither does any single session. Improvement is usually partial, and for some people well-matched concealer remains the more sensible answer.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant or breastfeeding, take blood thinners, have thyroid or kidney conditions associated with puffiness, have a history of cold sores or keloid scarring, have had eyelid surgery or injectables in this area before, or have any current eye condition.",
    },

    // ── 14
    costFactors: {
      intro:
        "Costs are not published because they depend on the assessment. What they depend on is worth knowing before you come in:",
      factors: [
        "Which mechanism is being treated: pigment, vessels, skin quality and volume are entirely different treatments.",
        "Whether more than one component is present, since mixed circles are treated in sequence.",
        "The product or device chosen, and how conservative the plan needs to be for your skin.",
        "How many sessions, which is set after assessment and reviewed as the area responds.",
        "Whether an underlying contributor such as allergy is being managed alongside.",
      ],
      outro:
        "The doctor will go through the specifics with you at the consultation, including the sequence and how often anything needs repeating, before you commit to anything.",
    },

    // ── 15
    technologyIntro:
      "The under-eye area tolerates far less energy than the cheek, so the device and its settings matter more here than the brand name on it. Having several platforms means the doctor can pick a gentler, better-matched option rather than turning down whatever is available.",

    // ── 16
    faqs: [
      {
        q: "Are dark circles caused by lack of sleep?",
        a: "Not usually, though poor sleep makes them more visible. The underlying darkness comes from pigment in the skin, blood vessels showing through it, or a shadow cast by the contour beneath the eye, and none of those changes overnight. Tiredness dilates vessels and leaves the face paler, which increases the contrast. If your circles are present on well-rested mornings too, sleep is not the cause.",
      },
      {
        q: "How do I tell which type I have?",
        a: "Two checks help. Stretch the skin gently sideways: if the colour stays, it is likely pigment; if it fades, vessels are contributing. Then change the light so it comes from directly in front rather than overhead: if the darkness largely disappears, you are looking at shadow from a hollow rather than at colour in the skin. Most people find they have more than one.",
      },
      {
        q: "Do eye creams work?",
        a: "They can help modestly where surface pigment or dryness is part of the picture, and a well-formulated one supports any in-clinic plan. They will not lift a hollow or remove vessels beneath the skin, so expectations should match the mechanism. If you have used one consistently for a few months without change, that is useful information rather than a reason to buy a more expensive one.",
      },
      {
        q: "Is filler under the eyes safe?",
        a: "It is a well-established treatment in experienced hands, but it is the most technically demanding injection on the face and it deserves a careful conversation. The skin is thin, the area holds fluid, and product placed poorly can leave a bluish tinge, lumps or lasting puffiness. It is dissolvable, which matters. Ask who is treating you, how often they do it, and what happens if you are unhappy.",
      },
      {
        q: "Will treatment get rid of them completely?",
        a: "Rarely, and anyone promising that should be treated with caution. Improvement is usually partial, particularly where more than one mechanism is involved or where the socket shape is inherited. Many people get a meaningful reduction in how tired they look without the area becoming uniform with the cheek. A doctor should tell you before you start roughly how much change is realistic for what you have.",
      },
      {
        q: "Does rubbing my eyes make dark circles worse?",
        a: "Yes, and it is one of the more fixable contributors. Repeated friction inflames very thin skin and drives pigment production, which is why people with allergic rhinitis or eczema around the eyes often have the darkest circles. Treating the itch is part of treating the circle. If you catch yourself rubbing daily, that is worth raising at the consultation.",
      },
      {
        q: "Can dark circles be treated during pregnancy?",
        a: "Elective treatment is generally deferred until after pregnancy and breastfeeding. Fluid shifts and hormonal change during pregnancy also make the area behave differently, so an assessment made then may not reflect your baseline. Sun protection, gentle skincare and managing any congestion are usually the advice in the meantime. Tell your doctor at consultation if you are pregnant, breastfeeding or planning to be.",
      },
      {
        q: "Why do my dark circles look worse in photos?",
        a: "Overhead lighting is the usual explanation. Ceiling lights, and phone cameras held above eye level, both throw the light from above, which deepens any shadow under the eye. That is also why a bathroom mirror is a poor place to judge them. A photograph taken in daylight, with the light coming from in front, shows the area far more honestly.",
      },
      {
        q: "Is there any downtime?",
        a: "Bruising and swelling after injectable treatment are more visible here than elsewhere and can last a week or more, so plan around events. Laser treatment usually leaves redness and dryness for a few days. Skin boosters can leave small raised points for a day or two. Your doctor will tell you specifically what to expect and when it is reasonable to be photographed.",
      },
      {
        q: "Can men have this treated?",
        a: "Yes, and it is a common reason men attend, often described as looking permanently tired rather than as a cosmetic concern. The assessment is identical. Where volume support is involved, the placement differs, because a male lower lid usually reads better with less fullness than a female one. The plan follows your anatomy rather than a template.",
      },
      {
        q: "Will they come back after treatment?",
        a: "The tendency does not go away. Pigment production, vessel visibility and volume loss all continue, so most people who are pleased with a result return periodically rather than once. Where an underlying contributor such as allergy or sun exposure is managed alongside, the result tends to hold better. Your doctor should be clear at the outset about how often maintenance is likely.",
      },
      {
        q: "Should I just use concealer?",
        a: "Sometimes that is the honest recommendation, and it is not a failure of the consultation. Where the darkness is largely inherited pigment, or where the socket shape casts a shadow no treatment can reach, well-matched concealer achieves more than a course of treatment would, at no risk. A doctor who tells you that is giving you better value than one who sells you a plan regardless.",
      },
    ],

    // ── 17
    relatedConcerns: [
      {
        slug: "pigmentation",
        reason: "Pigmented circles are a form of hyperpigmentation in very thin skin.",
      },
      {
        slug: "aging",
        reason: "Volume loss and thinning skin deepen the hollow over time.",
      },
      {
        slug: "fine-lines-wrinkles",
        reason: "Crepey lower-lid skin is usually assessed at the same time.",
      },
    ],

    // ── 18
    ctaHeading: "Find out which type you have",
    ctaAssesses: "the skin around your eyes",
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
    // ── 01
    banner: {
      src: "https://cdn.kaiteki.my/concerns/face-contouring/banner.jpg",
      sm: "https://cdn.kaiteki.my/concerns/face-contouring/banner-sm.jpg",
      alt: "Illustrative photograph: a person in profile with the light falling along the jawline and chin",
    },

    // ── 02 · process facts. No claim about how much definition anything adds.
    facts: [
      {
        value: "Shape, not size",
        label: "Contouring addresses proportion and definition, and it is not a weight-loss treatment.",
      },
      {
        value: "Four possible causes",
        label: "Bone, fat, muscle and skin all shape a jawline, and each is treated differently.",
      },
      {
        value: "Bone is fixed",
        label: "A doctor works out which soft-tissue layer is responsible before anything is discussed.",
      },
    ],

    // ── 02b
    jumpNav: [
      { id: "causes", label: "What influences it" },
      { id: "which-type", label: "What's shaping yours?" },
      { id: "where", label: "Surgical or not" },
      { id: "treatments", label: "Treatments" },
      { id: "risks", label: "Risks" },
      { id: "cost", label: "Cost" },
      { id: "faq", label: "FAQ" },
    ],

    sections: [
      {
        heading: "What is face contouring?",
        body: [
          "Face contouring refers to the shape, definition and proportion of facial areas such as the jawline, chin and cheeks. It is about how these features relate to one another rather than any single feature in isolation.",
          "What reads as a balanced contour differs from person to person, and it is shaped as much by bone as by anything a clinic can change. Understanding your own facial structure is the first step in deciding whether treatment is relevant at all.",
        ],
      },
    ],

    // ── 04 · archetype E: what influences it. Two causes, two photographs,
    // paired by position. The fixed structural influences — bone, genetics and
    // overall volume — are carried in the intro and outro rather than as items,
    // because they are context for the assessment and not things a treatment
    // addresses.
    drivers: {
      heading: "What influences facial contour",
      intro:
        "Underlying bone sets the outline of a face, and no non-surgical treatment changes it. Within that outline, two soft-tissue changes account for most of what people notice when they say a jawline has lost its definition.",
      items: [
        {
          lead: "Soft-tissue descent along the jawline:",
          body: "as skin and the layer beneath it loosen, tissue settles downward and breaks the jaw into two lines rather than one. This is the change most often described as the face losing its shape.",
        },
        {
          lead: "Fullness under the chin:",
          body: "a pocket of fat in the submental area sits between the chin and the neck and blurs the angle between them. It can be present at any weight, and it is often stubbornly resistant to diet and exercise.",
        },
      ],
      outro:
        "Volume loss in the mid-face changes proportion too: as cheeks flatten, the lower face reads as heavier by comparison even when nothing there has changed. Chewing-muscle bulk, posture and overall weight all contribute, and a doctor separates these at the assessment because they are treated in very different ways.",
    },

    // ── 04 media · one figure per cause, in the same order as `drivers.items`.
    figures: [
      {
        src: "https://cdn.kaiteki.my/concerns/face-contouring/sagging-jawline.jpg",
        caption:
          "As tissue settles downward, the jaw reads as two lines rather than one, which is what most people mean by a lost jawline.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/face-contouring/doublechin.jpg",
        caption:
          "A pocket of fat under the chin blurs the angle between jaw and neck, and it can be present at any weight.",
      },
    ],

    // ── 05 · the differentiator. The whole page turns on this: the same
    // complaint has four different causes and four different answers.
    variant: {
      kind: "tabs",
      heading: "What's shaping yours?",
      intro:
        "A jawline is made by bone, fat, muscle and skin. People arrive describing the same thing and leave with entirely different plans, because the layer responsible decides the treatment. Most faces involve more than one.",
      tabs: [
        {
          label: "Fat",
          sub: "Fullness under the chin",
          title: "Fat under the chin or along the jaw",
          body: "A soft pocket you can pinch, sitting between the chin and the neck or spilling slightly over the jawline. It is often familial, frequently present at a stable and healthy weight, and it rarely responds to general weight loss in proportion to everything else.",
          items: [
            {
              lead: "The tell:",
              body: "you can hold it between finger and thumb, and it softens or shifts when you tip your head back.",
            },
            {
              lead: "What it is not:",
              body: "not skin laxity. Tightening treatments aimed at loose skin will not remove a fat pocket.",
            },
          ],
          routing: "commonly assessed for fat-reduction treatment targeted at the submental area.",
        },
        {
          label: "Muscle",
          sub: "Width at the back of the jaw",
          title: "Chewing-muscle bulk",
          body: "The masseter muscle at the back of the jaw can be naturally strong or enlarged by clenching and grinding, widening the lower face when viewed from the front. Often accompanied by jaw tension, morning aching or worn teeth.",
          items: [
            {
              lead: "The tell:",
              body: "clench your teeth and feel just above the angle of the jaw. If a firm bulge pushes out under your fingers, muscle is part of the picture.",
            },
            {
              lead: "Worth mentioning:",
              body: "if you grind your teeth at night or wake with a tight jaw, say so. It changes both the assessment and the reason for treating.",
            },
          ],
          routing:
            "assessed for muscle-relaxing injection, with any dental cause of grinding addressed alongside it.",
        },
        {
          label: "Skin",
          sub: "Laxity breaking the line",
          title: "Skin and soft-tissue laxity",
          body: "The jaw outline is intact but the edge is no longer crisp, with small jowls either side of the chin. Pulling the skin gently back toward the ear restores the line, which is the clearest indication that laxity rather than volume is responsible.",
          items: [
            {
              lead: "The tell:",
              body: "lying down improves it noticeably, and gentle backward tension with a fingertip restores the outline.",
            },
            {
              lead: "Common alongside:",
              body: "loosening under the jaw and in the upper neck, which is usually assessed at the same time.",
            },
          ],
          routing:
            "assessed for energy-based tightening; see our face-lifting page for how laxity is approached in more depth.",
        },
        {
          label: "Structure",
          sub: "Projection and proportion",
          title: "Bone and volume proportion",
          body: "A recessed chin, a flat mid-face or a short lower third change how defined a jawline looks without anything having sagged. This is a proportion question, and it is often present from youth rather than something that developed.",
          items: [
            {
              lead: "The tell:",
              body: "in profile, the chin sits well behind the lower lip, or the mid-face reads flat while the jaw itself is unchanged.",
            },
            {
              lead: "The honest part:",
              body: "bone is not changed by any treatment on this page. What can change is how much support sits on top of it.",
            },
          ],
          routing:
            "assessed for volume support placed to build projection, with a frank discussion of what proportion allows.",
        },
      ],
    },

    // ── 06 · archetype E's block 06: surgical versus non-surgical.
    locationBlock: {
      heading: "Non-surgical versus surgical",
      intro:
        "Contouring requests sit on a spectrum, and part of an honest consultation is saying where a non-surgical option stops being the right tool.",
      cards: [
        {
          title: "What non-surgical options do",
          body: "They reduce a fat pocket, relax an overactive muscle, firm loose skin or add support where projection is lacking. Each addresses one layer, and the change is proportionate rather than transformative.",
        },
        {
          title: "What surgery does",
          body: "Procedures such as jaw or chin surgery, or surgical removal of tissue, change structure directly. They are carried out by qualified surgeons under anaesthetic, with the recovery and risk that implies.",
        },
        {
          title: "Where the line usually falls",
          body: "Bone is the clearest boundary: if the outline you want requires a different jaw or chin, no injectable or device will produce it, and it is fairer to say so than to stage a course of treatment toward it.",
        },
        {
          title: "Combination is normal",
          body: "Because several layers usually contribute, a plan often addresses more than one, staged over time with a review between stages rather than done in a single visit.",
        },
      ],
      note: {
        title: "When we will say so",
        body: "If what you are describing is a bone-structure change, or if the reference photograph you have brought is not achievable on your face, the doctor will tell you plainly. A referral for a surgical opinion is a legitimate outcome of a consultation here.",
      },
    },

    // ── 07
    seeDoctor: {
      heading: "When it is worth an assessment",
      intro:
        "Facial shape is not a medical problem, so there is no clinical threshold. It is worth an assessment if:",
      triggers: [
        "You are unsure whether what you see under your chin is fat, loose skin or something else.",
        "The lower face has widened, or you clench and grind your teeth and wake with a tight jaw.",
        "The jawline has lost definition over time rather than always having looked this way.",
        "You have a reference image in mind and want an honest answer about whether it is achievable on your face.",
        "You have been offered a treatment elsewhere and want a second opinion on whether it matches the cause.",
      ],
      outro:
        "Jaw tension, grinding and disturbed sleep are worth raising with a doctor or dentist regardless of any cosmetic question, because they have consequences for your teeth.",
    },

    // ── 08
    ctaMid: {
      heading: "Fat, muscle or skin?",
      body: "The three look almost identical in a mirror and are treated in completely different ways. Send us a photo on WhatsApp and a doctor can tell you which conversation you're having.",
    },

    // ── 09
    treatmentsIntro:
      "These are the treatments most often considered for facial contour at our clinics. Which one is appropriate, and whether any of them is, depends on which layer the assessment identifies as responsible.",
    treatmentWhy: {
      "fat-freezing": {
        why: "For a defined pocket of fat under the chin",
        body: "Controlled cooling applied to the submental area to reduce a localised fat pocket. Relevant only where fat is genuinely what is there, which is why the pinch test at assessment matters.",
      },
      "botulinum-toxin": {
        why: "For a wide jaw driven by chewing muscle",
        body: "A small dose placed into the masseter muscle so it works less forcefully and gradually reduces in bulk. Often relevant alongside clenching or grinding. The effect is temporary and repeated periodically.",
      },
      hifu: {
        why: "For a softer jawline outline",
        body: "Focused ultrasound delivered beneath the skin to firm the tissue along the jaw. Considered where the outline has blurred through laxity rather than through volume under the chin.",
      },
      radiofrequency: {
        why: "For skin firmness across the lower face",
        body: "Heats the dermis to prompt collagen change across a broader area than a focused device. Considered where general firmness rather than a single line is the concern.",
      },
      "dermal-fillers": {
        why: "For projection at the chin and cheek",
        body: "Placed on bone to build structure where projection or proportion is lacking, rather than to fill a line. Small volumes change how a profile reads. Poor placement adds weight, so anatomy knowledge matters.",
      },
    },
    treatmentsNote:
      "Combinations are common, and sequence matters: reducing fullness under the chin before addressing laxity gives a clearer picture of what laxity is actually there. Nothing on this list changes the bone beneath.",

    // ── 10
    compare: {
      intro:
        "A general guide only. Most faces involve more than one layer, and the doctor may recommend something different after examining you.",
      columns: ["What you have", "Commonly considered", "Typical course", "Downtime"],
      rows: [
        ["Pinchable fat under the chin", "Targeted fat reduction", "Staged, reviewed between", "Several days tenderness"],
        ["Wide lower face from clenching", "Muscle-relaxing injection", "Repeated periodically", "None"],
        ["Blurred jaw outline from laxity", "Focused ultrasound", "Single session, reviewed", "None to minimal"],
        ["General firmness across the lower face", "Radiofrequency", "Course, spaced", "Minimal"],
        ["Recessed chin or flat mid-face", "Volume support on bone", "Staged over sessions", "1–2 days swelling"],
        ["Fat and laxity together", "Sequenced: fat first, then firmness", "Assessed individually", "Individual"],
        ["Bone-structure change", "Surgical opinion discussed", "Individual", "Individual"],
      ],
      note: "Session counts and intervals are set by the doctor after assessment. Where treatments are sequenced, each stage is reviewed before the next is planned.",
    },

    // ── results · these captions say "before and after treatment", not "after a
    // course of treatment" as elsewhere. That is deliberate: several contouring
    // treatments are a single appointment, and describing one injection as a
    // course would overstate what the photograph shows (ADR-0001 §2).
    results: [
      { src: "https://cdn.kaiteki.my/concerns/face-contouring/before-after-01.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Chin projection, before and after treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-contouring/before-after-02.jpg", nativeWidth: 600, ratio: "1/1", caption: "Cheek support and proportion, before and after treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-contouring/before-after-03.jpg", nativeWidth: 600, ratio: "1/1", caption: "Chin projection, before and after treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-contouring/before-after-04.jpg", nativeWidth: 600, ratio: "1/1", caption: "Chin projection, before and after treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-contouring/before-after-05.jpg", nativeWidth: 600, ratio: "1/1", caption: "Forehead and upper-face proportion, before and after treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-contouring/before-after-06.jpg", nativeWidth: 600, ratio: "1/1", caption: "Jawline definition, before and after treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-contouring/before-after-07.jpg", nativeWidth: 600, ratio: "1/1", caption: "Jawline definition, before and after treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-contouring/before-after-08.jpg", nativeWidth: 1735, ratio: "5/4", caption: "Lower-face contour, before and after treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-contouring/before-after-09.jpg", nativeWidth: 1412, ratio: "1/1", caption: "Lower-face contour, before and after treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-contouring/before-after-10.jpg", nativeWidth: 1415, ratio: "1/1", caption: "Jaw and neck contour, before and after treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-contouring/before-after-11.jpg", nativeWidth: 1415, ratio: "1/1", caption: "Chin projection, before and after treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-contouring/before-after-12.jpg", nativeWidth: 1415, ratio: "1/1", caption: "Chin projection, before and after treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-contouring/before-after-13.jpg", nativeWidth: 1415, ratio: "1/1", caption: "Chin projection, before and after treatment at Kaiteki" },
    ],

    // ── 12
    firstVisit: {
      intro:
        "The consultation is free and there is no obligation to book treatment afterwards. It usually takes 20 to 30 minutes.",
      steps: [
        {
          title: "History",
          body: "What you would like to change and how long it has been that way, your weight history, whether you clench or grind, and any previous injectables, threads or surgery.",
        },
        {
          title: "Examination",
          body: "The doctor assesses fat, muscle, skin and structure separately, front-on and in profile, including a pinch test under the chin and a clench test at the angle of the jaw.",
        },
        {
          title: "Discussion",
          body: "Which layer is responsible, what each option changes, what it will not change, downtime and risks, and whether the outcome you have in mind is achievable on your anatomy.",
        },
        {
          title: "Plan",
          body: "If you choose to proceed, a sequence and a review point. You can take the plan away and think about it.",
        },
      ],
      outro:
        "Bring a photograph of what you have in mind if you have one. It is far more useful than a description, and it lets the doctor be specific about what is and is not achievable on your face.",
    },

    // ── 13
    risks: {
      intro: "Every treatment on this page carries some risk.",
      items: [
        {
          lead: "Common and usually temporary",
          body: "Swelling, bruising, tenderness and numbness over the treated area for several days. Muscle-relaxing injection can cause temporary aching or a feeling of weakness when chewing. Fat-reduction treatment often leaves the area firm and tender for a week or more.",
        },
        {
          lead: "Uncommon but important",
          body: "Injectables carry a rare but serious risk of vascular occlusion, and muscle-relaxing injection can, uncommonly, affect a neighbouring muscle and alter the smile temporarily. Both are reasons to be treated by a doctor familiar with facial anatomy.",
        },
        {
          lead: "Asymmetry is normal, and worth knowing about",
          body: "Almost every face is asymmetric before treatment. It becomes more noticeable once you are paying attention. The doctor should point out existing asymmetry at the assessment so it is not mistaken afterwards for something the treatment caused.",
        },
        {
          lead: "Pigment change and Malaysian skin",
          body: "Where energy-based devices are used along the jawline, medium and deeper skin tones carry a higher chance of post-inflammatory pigment change. Settings are chosen conservatively for this reason, and sun protection afterwards is part of the plan rather than an afterthought.",
        },
        {
          lead: "What treatment cannot do",
          body: "Nothing on this page changes bone, so a jaw or chin outline set by structure will not be produced by injectables or devices. Fat reduction does not tighten loose skin, and muscle-relaxing injection does not remove fat. Effects are not permanent and are maintained rather than fixed. A photograph of someone else's face is not a plan for yours.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant or breastfeeding, take blood thinners, have a neuromuscular condition, have a hernia or cold-sensitivity condition relevant to cooling treatment, have had facial surgery, threads or injectables before, or have a history of cold sores or keloid scarring.",
    },

    // ── 14
    costFactors: {
      intro:
        "Costs are not published because they depend on the assessment. What they depend on is worth knowing before you come in:",
      factors: [
        "Which layer is being treated: fat, muscle, skin and structure are entirely different treatments.",
        "The area and how much of it: under the chin only, the jawline, or the lower face as a whole.",
        "The product or device chosen, and how much of it your anatomy calls for.",
        "How many stages, since contouring is often sequenced with a review between stages.",
        "How often maintenance is likely, because muscle-relaxing and volume treatments are repeated over time.",
      ],
      outro:
        "The doctor will go through the specifics with you at the consultation, including the expected sequence and how often anything needs repeating, before you commit to a first session.",
    },

    // ── 15
    technologyIntro:
      "Contouring draws on cooling, ultrasound, radiofrequency and injectables, because the four things that shape a jawline need four different tools. Having them under one roof means the doctor can choose by cause rather than by what happens to be available.",

    // ── 16
    faqs: [
      {
        q: "Can face contouring change my bone structure?",
        a: "No. Every treatment discussed on this page works on soft tissue: fat, muscle, skin or added volume. Bone sets the outline your face works within, and changing it is a surgical procedure carried out by qualified surgeons. What non-surgical treatment can do is change how much support sits on that structure and how crisply the edges read, which on many faces is the difference people actually notice.",
      },
      {
        q: "How do I know whether it is fat or loose skin under my chin?",
        a: "The pinch test is the usual starting point: if you can hold it between finger and thumb and it feels soft and substantial, fat is likely part of it. If gently drawing the skin back toward the ear restores the jaw outline, laxity is contributing. Many people have both, in which case sequence matters, because reducing fullness first shows how much laxity was really there.",
      },
      {
        q: "Does treating the masseter muscle change my face shape?",
        a: "It can, where the muscle is genuinely contributing to width at the back of the jaw. The muscle works less forcefully after treatment and gradually reduces in bulk over weeks, which softens the outline viewed from the front. It is temporary and repeated periodically to maintain. If you clench or grind, it may also relieve jaw aching, which is often as valuable as the cosmetic effect.",
      },
      {
        q: "Is chin filler safe?",
        a: "In trained hands and with an appropriate product, it is a well-established treatment, but it is not trivial. The chin and jaw area contains arteries, and the serious risk with any filler is accidental placement into a vessel. This is why it should be performed by a doctor who knows the anatomy, with the means to manage a complication. Ask who is treating you and what their experience is.",
      },
      {
        q: "Will fat freezing under my chin help me lose weight?",
        a: "No. It targets a localised pocket in a specific area and does not change your overall weight or treat obesity. It is generally considered for people who are near a stable weight and have a defined pocket that has not responded to diet and exercise. If overall weight is the concern, that is a different conversation, and it belongs with a doctor rather than with a contouring device.",
      },
      {
        q: "How long do the effects last?",
        a: "It varies by treatment. Muscle-relaxing injection wears off over a period of months and is repeated. Volume support lasts longer but is gradually broken down by the body. Fat reduction removes fat cells from the treated pocket, though remaining cells still respond to weight change, so the result depends on your weight staying reasonably stable. Your doctor should be specific about this at the consultation.",
      },
      {
        q: "Will I look overdone?",
        a: "That risk comes almost entirely from too much product placed to chase a shape the face cannot naturally hold. It is avoided by treating conservatively, staging over sessions and reviewing between them, and by the doctor being willing to say that a request is not proportionate. It is entirely reasonable to state at consultation that you want the change to be subtle, and to ask what the plan would be if you dislike it.",
      },
      {
        q: "Is there downtime?",
        a: "Muscle-relaxing injection usually has none. Injectables can bruise and swell for several days, so plan around events. Fat-reduction treatment leaves the area swollen, firm and tender, sometimes for a week or two, and numbness can persist longer. Energy-based tightening is generally same-day with some redness. Your doctor will give you specific timing for what you are having and when it is reasonable to be photographed.",
      },
      {
        q: "Can men have face contouring?",
        a: "Yes, and jaw and chin definition is one of the more common reasons men attend. The assessment differs, because a male jawline is typically wider and more angular and treatment aimed at a narrower outline would be the wrong goal. Masseter treatment in particular is considered carefully in men, since reducing width may not be desirable. The plan follows your anatomy and what you want, not a template.",
      },
      {
        q: "How soon will I see a change?",
        a: "It depends on the treatment. Volume support is visible immediately, though swelling makes the first days misleading. Muscle-relaxing injection takes a couple of weeks to show and continues to develop over the following months. Fat reduction and energy-based tightening build gradually over weeks to months. Consistent photographs at the same angle and lighting are far more reliable than daily mirror checks.",
      },
      {
        q: "Can I bring a photo of the look I want?",
        a: "Please do. It makes the consultation more useful, because it lets the doctor be specific rather than general about what your anatomy allows. Be prepared for an honest answer: reference images are often of faces with different bone structure, and sometimes the truthful response is that the outline in the picture is not reachable on your face by any non-surgical route.",
      },
      {
        q: "What if nothing here suits me?",
        a: "Then that is what the consultation should tell you. If the change you want requires surgery, or if the assessment finds nothing that treatment would meaningfully improve, our doctors will say so and, where appropriate, suggest a surgical opinion. Being told that no treatment is warranted is a legitimate outcome, and the consultation costs you nothing either way.",
      },
    ],

    // ── 17
    relatedConcerns: [
      {
        slug: "face-lifting",
        reason: "Laxity along the jawline is assessed in more depth there.",
      },
      {
        slug: "body-slimming",
        reason: "Localised fat pockets elsewhere are approached with the same principle.",
      },
      {
        slug: "aging",
        reason: "Volume loss changes proportion as much as it changes firmness.",
      },
    ],

    // ── 18
    ctaHeading: "Find out what's shaping your jawline",
    ctaAssesses: "your facial structure",
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
    // ── 01
    banner: {
      src: "https://cdn.kaiteki.my/concerns/face-lifting/banner.jpg",
      sm: "https://cdn.kaiteki.my/concerns/face-lifting/banner-sm.jpg",
      alt: "Illustrative photograph: a person resting a hand along their jawline in front of a mirror",
    },

    // ── 02 · process facts. Nothing here says how long a lift lasts, because
    // that is an outcome claim and it varies with the person (R-01).
    facts: [
      {
        value: "Not a surgical face-lift",
        label: "These are energy-based and injectable options, a different category from surgery.",
      },
      {
        value: "Laxity has layers",
        label: "Skin, fat and the layer beneath them each change, and each is treated differently.",
      },
      {
        value: "Assessment first",
        label: "A doctor examines your face and explains what is realistic before any treatment.",
      },
    ],

    // ── 02b
    jumpNav: [
      { id: "causes", label: "What influences it" },
      { id: "which-type", label: "Which layer is it?" },
      { id: "where", label: "Surgical or not" },
      { id: "treatments", label: "Treatments" },
      { id: "risks", label: "Risks" },
      { id: "cost", label: "Cost" },
      { id: "faq", label: "FAQ" },
    ],

    sections: [
      {
        heading: "What is face lifting (as a concern)?",
        body: [
          "As a concern, face lifting refers to the gradual loss of firmness and the skin laxity that develops as the face changes over time. Rather than a single procedure, it describes wanting skin that sits and feels firmer, particularly around the cheeks, jawline and neck.",
          "It is worth distinguishing this from surgery. A surgical face-lift is a separate procedure carried out by relevant specialists, whereas the firmness concerns discussed here are commonly approached with non-surgical, energy-based options. Whether any of these are suitable depends on an individual assessment.",
        ],
      },
    ],

    // ── 04 · archetype E: what influences it. Four causes, four photographs,
    // paired by position.
    drivers: {
      heading: "What influences facial firmness",
      intro:
        "Firmness changes for several reasons at once rather than any single one. Understanding which of them is doing most of the work on your face is what decides whether a lifting treatment is a sensible idea at all.",
      items: [
        {
          lead: "Collagen and elastin decline:",
          body: "the scaffolding that holds skin taut is renewed more slowly from the mid-twenties onward, so the skin recovers its shape less readily after it is stretched.",
        },
        {
          lead: "Skin laxity:",
          body: "as that scaffolding thins, skin has more surface area than the structure beneath it needs, and the excess settles downward along the jaw and neck.",
        },
        {
          lead: "Changes in muscle and the layer beneath:",
          body: "the sheet of muscle and connective tissue under the skin, the SMAS, loosens with age, and the ligaments that anchor it to bone stretch. Much of what reads as sagging happens at this depth rather than at the surface.",
        },
        {
          lead: "Gravity and time:",
          body: "constant downward load on tissue that resists it less each year. This is why change tends to show first where tissue is heaviest and least supported, along the jawline and under the chin.",
        },
      ],
      outro:
        "Volume loss matters too. Fat pads in the mid-face shrink and shift downward, so a face can look like it has descended when part of what happened is that it has deflated. Sun exposure, smoking and rapid weight loss all accelerate the whole picture.",
    },

    // ── 04 media · one figure per cause, in the same order as `drivers.items`.
    figures: [
      {
        src: "https://cdn.kaiteki.my/concerns/face-lifting/lossof-collagen.jpg",
        caption:
          "Collagen and elastin are renewed more slowly over time, so skin recovers its shape less readily after it is stretched.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/face-lifting/skin-laxity.jpg",
        caption:
          "As the supporting scaffold thins, skin sits looser than the structure beneath it, and the excess settles along the jaw.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/face-lifting/muscle-changes.jpg",
        caption:
          "The muscle and connective-tissue layer under the skin loosens with age. Much of what reads as sagging happens at this depth.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/face-lifting/gravity.jpg",
        caption:
          "A constant downward load on tissue that resists it less each year, which is why the jawline and neck change first.",
      },
    ],

    // ── 05 · the differentiator for archetype E: which layer is driving it.
    // The routing lines are the point — the same face can need three different
    // conversations depending on the answer.
    variant: {
      kind: "tabs",
      heading: "Which layer is it?",
      intro:
        "Non-surgical lifting is really three different conversations, and most faces involve more than one. Working out which layer leads the picture is what stops a treatment being aimed at the wrong problem.",
      tabs: [
        {
          label: "Skin",
          sub: "Surface laxity and texture",
          title: "Skin-level laxity",
          body: "The skin itself has thinned and lost elasticity. Pinch it gently on the cheek and it returns to place slowly. Surface texture, fine crepe lines and a general looseness dominate, while the underlying shape of the face still looks broadly intact.",
          items: [
            {
              lead: "How it shows:",
              body: "crepey texture, fine lines at rest, and skin that reads as loose rather than heavy.",
            },
            {
              lead: "What it is not:",
              body: "not a shape problem. Adding volume to skin-level laxity usually makes a face look fuller rather than firmer.",
            },
          ],
          routing:
            "commonly assessed for energy-based tightening or collagen-stimulating treatments aimed at skin quality.",
        },
        {
          label: "Volume",
          sub: "Flattening and hollowing",
          title: "Volume-related change",
          body: "The face has deflated rather than descended. Cheeks flatten, the temples and under-eye area hollow, and the folds either side of the mouth deepen because the support above them has gone, not because the skin below has slipped.",
          items: [
            {
              lead: "How it shows:",
              body: "a flatter mid-face, deeper nasolabial folds, and a tired look that photographs worse than it looks in person.",
            },
            {
              lead: "The tell:",
              body: "lying down, or lifting the cheek gently with a fingertip, restores much of the shape.",
            },
          ],
          routing:
            "assessed for volume support or collagen-stimulating injectables, placed to rebuild structure rather than to fill a line.",
        },
        {
          label: "Deeper structure",
          sub: "Jowls, jawline and neck",
          title: "Structural descent",
          body: "The layer beneath the skin has loosened, and tissue has genuinely moved downward. Jowls break the jawline, the neck angle softens, and pulling the skin taut with a hand makes an obvious difference to the outline of the face.",
          items: [
            {
              lead: "How it shows:",
              body: "a jawline that is no longer a single clean line, jowls either side of the chin, and loose tissue under the jaw.",
            },
            {
              lead: "The honest part:",
              body: "this is the layer where non-surgical options have the most limited reach, and where a surgical opinion is sometimes the more useful conversation.",
            },
          ],
          routing:
            "assessed for deeper energy-based treatment, with a frank discussion about where non-surgical options stop.",
        },
      ],
    },

    // ── 06 · archetype E's block 06 is surgical vs non-surgical rather than a
    // location grid. This is the block people actually arrive looking for.
    locationBlock: {
      heading: "Non-surgical versus surgical",
      intro:
        "These are different categories of intervention, not two strengths of the same one. Being clear about which you are considering saves a great deal of disappointment.",
      cards: [
        {
          title: "What non-surgical options do",
          body: "They work by heating or stimulating tissue so the body produces new collagen, or by supporting structure with injectables. Change builds gradually over months and is measured in degrees of firmness rather than in centimetres of lift.",
        },
        {
          title: "What surgery does",
          body: "A surgical face-lift repositions and removes tissue directly, under anaesthetic, by a qualified surgeon. It addresses a degree of descent that no device reaches. It also involves recovery, scars and surgical risk.",
        },
        {
          title: "Downtime and commitment",
          body: "Non-surgical treatments are typically same-day, with little or no time away from work. Surgery involves weeks of recovery. That difference is often the deciding factor rather than the result itself.",
        },
        {
          title: "How long the effect holds",
          body: "Neither stops ageing. Non-surgical treatments are usually repeated periodically to maintain what they build. Surgery lasts longer but the face continues to change around it.",
        },
      ],
      note: {
        title: "When we will say so",
        body: "If the degree of laxity is beyond what a device can meaningfully address, the doctor will tell you that rather than sell you a course that will not deliver. A referral for a surgical opinion is a legitimate outcome of a consultation here.",
      },
    },

    // ── 07
    seeDoctor: {
      heading: "When it is worth an assessment",
      intro:
        "There is no age or threshold at which lifting treatment becomes appropriate. It is worth an assessment if:",
      triggers: [
        "You are noticing the jawline losing definition, or jowls forming either side of the chin.",
        "Skin along the neck feels looser, or the angle under the jaw has softened.",
        "You are considering treatment and want to know whether non-surgical options can realistically address what you have.",
        "You have been recommended a treatment elsewhere and want a second opinion on whether it fits the problem.",
        "The change is affecting your confidence and you would like to understand your options honestly.",
      ],
      outro:
        "An assessment is also worth having if you are unsure whether anything needs doing. A doctor saying that no treatment is warranted yet is a useful answer, and it costs nothing.",
    },

    // ── 08
    ctaMid: {
      heading: "Not sure if it's skin, volume or structure?",
      body: "Send us a photo on WhatsApp and a doctor can tell you which layer is driving what you're seeing, and whether a non-surgical option can reach it.",
    },

    // ── 09
    treatmentsIntro:
      "These are the treatments most often considered for firmness and laxity at our clinics. Which one is appropriate, and whether any of them is, depends on the layer the assessment identifies.",
    treatmentWhy: {
      hifu: {
        why: "For laxity along the jawline and neck",
        body: "Focused ultrasound delivered to set depths beneath the skin, including the layer surgeons address. Considered where mild to moderate descent is the concern rather than skin quality. Change builds gradually over months.",
      },
      ultherapy: {
        why: "For lifting with ultrasound imaging to guide it",
        body: "The same principle as HIFU, with real-time imaging so the doctor can see the tissue layers as energy is delivered. Relevant where precision at depth matters, or where anatomy makes blind delivery less appropriate.",
      },
      "fotona-4d": {
        why: "For laxity treated from inside the mouth outwards",
        body: "A laser protocol that works in several passes, one of them delivered through the inside of the cheek. Considered where firmness and skin quality are both part of the picture rather than descent alone.",
      },
      "microwave-contouring": {
        why: "For fullness under the chin that blurs the jawline",
        body: "Targets fat and skin firmness in the submental area. Considered where what obscures the jawline is tissue volume under the chin rather than laxity along it.",
      },
      "bio-stimulator": {
        why: "For gradual collagen rebuilding over months",
        body: "An injectable that prompts the skin to produce its own collagen rather than adding volume directly. Change is deliberately slow, which some people prefer and others find frustrating.",
      },
      "dermal-fillers": {
        why: "For support where volume loss is doing the sagging",
        body: "Placed to rebuild structure in a flattened mid-face rather than to fill a line. Most relevant where the face has deflated rather than descended. Poorly placed volume adds weight, so assessment matters here more than most.",
      },
    },
    treatmentsNote:
      "Combinations are common, because most faces involve more than one layer. Where descent is advanced, no device on this list will match what surgery does, and the doctor will say so.",

    // ── 10
    compare: {
      intro:
        "A general guide only. Most plans combine more than one approach, and the doctor may recommend something different after examining your face.",
      columns: ["What you have", "Commonly considered", "Typical course", "Downtime"],
      rows: [
        ["Skin looseness and crepe texture", "Collagen-stimulating treatment", "Course, then maintenance", "Minimal"],
        ["Mild jawline softening", "Focused ultrasound", "Single session, reviewed", "None to minimal"],
        ["Jowls with a clear jawline break", "Focused ultrasound, assessed individually", "Assessed individually", "None to minimal"],
        ["Flattened mid-face", "Volume support or bio-stimulator", "Staged over sessions", "1–2 days swelling"],
        ["Fullness under the chin", "Microwave contouring", "Assessed individually", "Several days tenderness"],
        ["Firmness plus skin quality", "Laser protocol across depths", "Course, spaced", "1–3 days redness"],
        ["Advanced descent", "Surgical opinion discussed", "Individual", "Individual"],
      ],
      note: "Session counts and intervals are set by the doctor after assessment. Collagen-based change continues for months after a session, so plans include review points rather than fixed end dates.",
    },

    // ── results
    results: [
      { src: "https://cdn.kaiteki.my/concerns/face-lifting/before-after-01.jpg", nativeWidth: 1080, ratio: "1/1", caption: "Facial firmness, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-lifting/before-after-02.jpg", nativeWidth: 1080, ratio: "1/1", caption: "Facial firmness, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-lifting/before-after-03.jpg", nativeWidth: 1080, ratio: "1/1", caption: "Jawline definition, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-lifting/before-after-04.jpg", nativeWidth: 1080, ratio: "1/1", caption: "Jawline definition, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-lifting/before-after-05.jpg", nativeWidth: 1080, ratio: "1/1", caption: "Jawline definition, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-lifting/before-after-06.jpg", nativeWidth: 1080, ratio: "1/1", caption: "Lower-face firmness, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-lifting/before-after-07.jpg", nativeWidth: 1080, ratio: "1/1", caption: "Lower-face firmness, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-lifting/before-after-08.jpg", nativeWidth: 1080, ratio: "1/1", caption: "Mid-face and cheek support, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-lifting/before-after-09.jpg", nativeWidth: 1080, ratio: "1/1", caption: "Mid-face and cheek support, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-lifting/before-after-10.jpg", nativeWidth: 1080, ratio: "1/1", caption: "Facial firmness, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-lifting/before-after-11.jpg", nativeWidth: 1080, ratio: "1/1", caption: "Facial firmness, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-lifting/before-after-12.jpg", nativeWidth: 1080, ratio: "1/1", caption: "Facial firmness, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-lifting/before-after-13.jpg", nativeWidth: 1080, ratio: "1/1", caption: "Facial firmness, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-lifting/before-after-14.jpg", nativeWidth: 1080, ratio: "1/1", caption: "Skin tightening across the lower face, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-lifting/before-after-15.jpg", nativeWidth: 1080, ratio: "1/1", caption: "Skin tightening across the lower face, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-lifting/before-after-16.jpg", nativeWidth: 600, ratio: "1/1", caption: "Facial firmness, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-lifting/before-after-17.jpg", nativeWidth: 1415, ratio: "1/1", caption: "Jawline and neck contour, before and after a course of treatment at Kaiteki" },
    ],

    // ── 12
    firstVisit: {
      intro:
        "The consultation is free and there is no obligation to book treatment afterwards. It usually takes 20 to 30 minutes.",
      steps: [
        {
          title: "History",
          body: "What you have noticed and over what period, any previous treatments or surgery, your medical history, and any medication or injectables you have had.",
        },
        {
          title: "Examination",
          body: "The doctor assesses skin quality, volume and the degree of descent separately, usually with you sitting upright, because laxity looks different lying down.",
        },
        {
          title: "Discussion",
          body: "Which layer is leading, what each option can and cannot reach, downtime, risks, and where the honest answer is that a surgical opinion would serve you better.",
        },
        {
          title: "Plan",
          body: "If you choose to proceed, a sequence and a review point. You can take the plan away and think about it.",
        },
      ],
      outro:
        "Bring photographs of yourself from five or ten years ago if you have them. They are far more useful than a description for judging what has actually changed and how quickly.",
    },

    // ── 12 media · deliberately absent. Only three treatment-in-progress
    // photographs exist (docs/11 §3) and acne already renders all three;
    // repeating them here would put the same imagery on two concern pages.

    // ── 13
    risks: {
      intro: "Every treatment on this page carries some risk.",
      items: [
        {
          lead: "Common and usually temporary",
          body: "Redness, swelling, tenderness and a tingling or numb sensation over the treated area for a few days. Bruising is common with injectables. Less common effects include prolonged swelling, lumps under the skin, or a temporary change in sensation.",
        },
        {
          lead: "Uncommon but important",
          body: "Energy-based lifting can, rarely, cause a temporary weakness in a facial nerve branch or a small area of fat loss. Injectables carry a rare but serious risk of vascular occlusion. Both are reasons treatment should be carried out by a doctor who knows the anatomy at depth.",
        },
        {
          lead: "Pigment change and Malaysian skin",
          body: "Where laser or energy is used, medium and deeper skin tones carry a higher chance of post-inflammatory pigment change. Settings are chosen conservatively for this reason, and sun protection afterwards is part of the plan.",
        },
        {
          lead: "What treatment cannot do",
          body: "No non-surgical treatment removes excess skin, and none stops ageing. Where descent is advanced, these options will not match what surgery does, and pretending otherwise wastes your money. Change from collagen-based treatments builds over months rather than appearing the following week, and it is maintained rather than permanent.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant or breastfeeding, take blood thinners, have an autoimmune or connective-tissue condition, have a pacemaker or metal implants in the treatment area, have had facial surgery, threads or injectables before, or have a history of cold sores or keloid scarring.",
    },

    // ── 14
    costFactors: {
      intro:
        "Costs are not published because they depend on the assessment. What they depend on is worth knowing before you come in:",
      factors: [
        "Which layer is being treated: skin quality, volume support and deeper lifting are different treatments with different structures.",
        "The area: lower face and jawline only, full face, or including the neck.",
        "The device or product chosen, and how much of it your assessment calls for.",
        "How many sessions, and over what period, which is set after assessment.",
        "Whether more than one approach is combined, which is common where several layers are involved.",
      ],
      outro:
        "The doctor will go through the specifics with you at the consultation, including how many sessions they would expect and how often maintenance is likely, before you commit to anything.",
    },

    // ── 15
    technologyIntro:
      "Lifting treatments differ mainly in the depth they reach and how they deliver energy there. Having several platforms means the doctor can match the depth to your anatomy rather than treating every face at the same setting.",

    // ── 16
    faqs: [
      {
        q: "What is the difference between non-surgical and surgical face lifting?",
        a: "A surgical face-lift repositions and removes tissue directly under anaesthetic, performed by a qualified surgeon, and it reaches a degree of descent no device can. Non-surgical options work by stimulating the skin to build collagen, or by supporting structure with injectables, and the change is gradual and partial. They are different categories rather than two strengths of the same thing, and a consultation should tell you honestly which one your face is asking for.",
      },
      {
        q: "When should I consider a lifting treatment?",
        a: "There is no fixed age. What matters is what is actually changing: skin quality, volume, or the position of deeper tissue. Many people are assessed in their thirties and forties for skin-level laxity and volume, and treated more conservatively than they expected. Others arrive with descent that has passed what a device can reach. An assessment answers the question, and being told nothing is needed yet is a legitimate result.",
      },
      {
        q: "How long does the effect last?",
        a: "It varies with the treatment, your skin and how quickly you age, and no one can put a reliable number on it in advance. Collagen-based treatments build change over several months and then that change gradually recedes as ageing continues, so they are typically repeated periodically rather than done once. Volume support behaves differently again. Your doctor should tell you at the consultation how often maintenance is likely for what you are considering.",
      },
      {
        q: "Is it painful?",
        a: "Most people describe energy-based lifting as uncomfortable rather than painful, with a deep warm or prickling sensation that comes in pulses. Treatment at deeper settings is felt more. Numbing cream, cooling and, where appropriate, oral pain relief are used. Injectables are generally more comfortable, often with local anaesthetic in the product. If discomfort is a particular worry for you, raise it at the consultation, as settings and preparation can be adjusted.",
      },
      {
        q: "How soon will I see a difference?",
        a: "With collagen-stimulating treatments, gradually. A degree of immediate tightening is sometimes noticeable from tissue contraction, but the meaningful change comes as new collagen forms over the following months, and it is often more obvious to other people than to you. Volume support shows immediately, though swelling in the first days makes early judgement unreliable. Taking your own photographs in consistent lighting helps more than checking the mirror daily.",
      },
      {
        q: "Will it make my face look done or unnatural?",
        a: "Energy-based lifting does not add anything to the face, so it does not carry that risk in the way injectables can. With volume support, an overdone look almost always comes from too much product placed to fill lines rather than to rebuild structure. Conservative, staged treatment with a review point between sessions is how that is avoided. It is reasonable to say at consultation that subtlety matters more to you than magnitude.",
      },
      {
        q: "Is there any downtime?",
        a: "For most energy-based lifting, little to none: some redness, warmth and tenderness for a day or two, and you can generally go back to work the same day. Injectables can leave bruising and swelling for several days, which is worth planning around if you have an event. Laser-based protocols can leave redness for longer. Your doctor will give you specific timing for what you are having.",
      },
      {
        q: "Can I have this if I have had fillers or threads before?",
        a: "Usually yes, but the doctor needs to know exactly what you have had and when, because it changes the assessment and sometimes the technique. Energy delivered over existing product may affect it, and previous threads alter the tissue planes. Bring records if you have them, including product names and dates. Withholding this makes the treatment less safe, not more discreet.",
      },
      {
        q: "Can non-surgical lifting treat the neck?",
        a: "The neck is commonly assessed alongside the lower face, and it is often where people notice change first. It also behaves differently: skin there is thinner, has less support beneath it and recovers more slowly, so treatment is typically more conservative. Where the concern is loose skin rather than firmness, expectations should be modest, and a surgical opinion is sometimes the more honest recommendation.",
      },
      {
        q: "Do I need several sessions or just one?",
        a: "That depends on the treatment. Some focused-ultrasound protocols are planned as a single session with a review months later, while collagen-stimulating injectables and laser protocols are typically staged across several visits weeks apart. What is common to all of them is that the plan is set after assessment and adjusted at review, rather than sold as a fixed package before anyone has examined your face.",
      },
      {
        q: "Will I need to keep having treatment?",
        a: "If you want to hold the change, generally yes. These treatments work with your own collagen, and ageing continues around them. Most people who are pleased with the result return periodically rather than once. That is worth factoring into the decision at the outset, and the doctor should tell you at the consultation roughly how often maintenance is likely, before you commit to a first session.",
      },
      {
        q: "What if a doctor tells me nothing here will work?",
        a: "That is a useful consultation, not a wasted one. Where descent is advanced, no non-surgical device reaches what surgery does, and a course of treatment sold into that situation costs money and delivers disappointment. Our doctors will say so and, where appropriate, suggest a surgical opinion. You are also free to have the assessment and decide to do nothing at all.",
      },
    ],

    // ── 17
    relatedConcerns: [
      {
        slug: "aging",
        reason: "Firmness is one part of a broader picture that includes texture and volume.",
      },
      {
        slug: "face-contouring",
        reason: "A softened jawline is often a shape question as much as a firmness one.",
      },
      {
        slug: "fine-lines-wrinkles",
        reason: "Laxity deepens folds, so the two are frequently assessed together.",
      },
    ],

    // ── 18
    ctaHeading: "Find out what's actually loosening",
    ctaAssesses: "your skin and facial structure",
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
    // ── 01
    banner: {
      src: "https://cdn.kaiteki.my/concerns/aging/banner.jpg",
      sm: "https://cdn.kaiteki.my/concerns/aging/banner-sm.jpg",
      alt: "Illustrative photograph: a person looking at their reflection in soft daylight",
    },

    // ── 02 · process facts. Nothing here promises to reverse or slow anything,
    // which would be an outcome claim (R-01).
    facts: [
      {
        value: "Four things at once",
        label: "Firmness, texture, hydration and volume change at different rates on the same face.",
      },
      {
        value: "Most of it is sun",
        label: "A large share of visible skin ageing is cumulative UV exposure rather than years alone.",
      },
      {
        value: "Assessment first",
        label: "A doctor maps what is actually changing before discussing whether treatment helps.",
      },
    ],

    // ── 02b
    jumpNav: [
      { id: "causes", label: "What causes it" },
      { id: "which-type", label: "Where you are on it" },
      { id: "where", label: "Where it shows" },
      { id: "treatments", label: "Treatments" },
      { id: "risks", label: "Risks" },
      { id: "cost", label: "Cost" },
      { id: "faq", label: "FAQ" },
    ],

    sections: [
      {
        heading: "What is skin ageing?",
        body: [
          "Skin ageing is the natural process by which skin gradually loses collagen and elasticity, becoming thinner and drier and showing lines over time. Part of this is intrinsic ageing, changes driven largely by your genes and the passage of time, which affects everyone and cannot be halted.",
          "Alongside this, skin is shaped by extrinsic ageing: changes linked to sun exposure and everyday habits rather than age alone. The distinction matters, because the second part is the part anything can be done about. Understanding how firmness, texture, hydration and volume are changing on your own face is the first step in deciding whether any care or treatment is worth considering.",
        ],
      },
    ],

    // ── 04 · causes. No figures are authored: this concern has none in the
    // inventory (docs/11 §2), and its explainer artwork is the stage set,
    // which belongs with block 05.
    drivers: {
      heading: "What causes it",
      intro:
        "Ageing skin reflects several processes running in parallel at different speeds, which is why two people the same age can look very different and why one treatment rarely addresses everything.",
      items: [
        {
          lead: "Collagen and elastin decline:",
          body: "production slows from the mid-twenties and the existing framework degrades, so skin becomes thinner, less firm and slower to spring back. This is the intrinsic part, and it happens to everyone.",
        },
        {
          lead: "Cumulative UV exposure:",
          body: "the single largest external contributor, and the one most within your control. Compare the skin on your inner arm with the back of your hand: the difference is largely sun rather than years.",
        },
        {
          lead: "Volume loss and redistribution:",
          body: "fat pads in the mid-face shrink and descend, and bone itself remodels over decades. Much of what reads as sagging is actually deflation, and it changes proportion as well as firmness.",
        },
        {
          lead: "Reduced hydration and barrier function:",
          body: "skin holds less water and produces less oil over time, which makes it drier, duller and more easily irritated, and makes fine lines read more sharply than they otherwise would.",
        },
        {
          lead: "Lifestyle and health:",
          body: "smoking, heavy alcohol use, disturbed sleep, a diet high in sugar and chronic stress all accelerate the same processes. None of them causes ageing; each one speeds it up.",
        },
      ],
      outro:
        "Genetics set the pace underneath all of this, including how readily your skin pigments, how thick it is to begin with, and when volume change starts. That is context for a plan rather than something to be treated.",
    },

    // ── 05 · the differentiator. Registry note for this concern: use stages,
    // not types (config/concerns.json `variantNote`). Each stage ends in a
    // routing line rather than a recommendation — the doctor decides.
    variant: {
      kind: "tabs",
      heading: "Where you are on it",
      intro:
        "Ageing is a spectrum rather than a set of categories, and these stages overlap. They are useful mainly because they change what a sensible plan looks like: the same treatment given ten years apart is answering two different questions.",
      tabs: [
        {
          label: "Early",
          sub: "Quality and prevention",
          title: "Early change",
          body: "The face still holds its shape. What has changed is skin quality: a little less bounce, fine lines appearing on movement, tone less even, and skin that looks tired earlier in the day than it used to. Volume and firmness are broadly intact.",
          items: [
            {
              lead: "What people notice:",
              body: "makeup sitting differently, fine lines around the eyes on movement, and a duller surface.",
            },
            {
              lead: "What the plan usually is:",
              body: "sun protection and skin quality, treated conservatively. This is the stage where doing less is often the right advice.",
            },
          ],
          routing:
            "commonly assessed for skin-quality treatment and a sensible daily routine rather than anything structural.",
        },
        {
          label: "Established",
          sub: "Lines at rest, early laxity",
          title: "Established change",
          body: "Lines are now visible when the face is relaxed, the mid-face has begun to flatten, and the jawline is a little less crisp than it was. Several things are changing at once, which is what makes this stage the one where sequencing matters most.",
          items: [
            {
              lead: "What people notice:",
              body: "static lines, a heavier lower face in photographs, and folds that were not there five years ago.",
            },
            {
              lead: "What the plan usually is:",
              body: "a staged combination, addressing the leading change first and reviewing before adding anything else.",
            },
          ],
          routing:
            "assessed as a sequence across skin quality, volume and firmness, with review points between stages.",
        },
        {
          label: "Advanced",
          sub: "Laxity, folds and texture",
          title: "Advanced change",
          body: "Laxity along the jawline and neck, deeper folds, significant volume loss and accumulated sun damage in the skin surface. Non-surgical treatment still has a role here, but it is important to be clear about its reach.",
          items: [
            {
              lead: "What people notice:",
              body: "jowls, a softened neck angle, crepey texture, and pigmentation that has built up over decades.",
            },
            {
              lead: "The honest part:",
              body: "this is where non-surgical options improve the picture rather than reset it, and where a surgical opinion is sometimes the more useful conversation.",
            },
          ],
          routing:
            "assessed individually, with a frank discussion about what non-surgical treatment can and cannot reach.",
        },
      ],
    },

    // ── 05 media · the stage infographics. Headline and body are burned into the
    // artwork, so these carry no caption and the alt transcribes what the slide
    // says. Transcriptions are provisional and are on the list for editorial
    // sign-off (issue 06) — they must match the artwork verbatim.
    slides: [
      {
        src: "https://cdn.kaiteki.my/concerns/aging/stage-1.jpg",
        alt: "Stage 1: skin loses a little elasticity, and fine expression lines become more noticeable on movement.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/aging/stage-2.jpg",
        alt: "Stage 2: lines begin to remain visible at rest as collagen decline continues and the skin thins.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/aging/stage-3.jpg",
        alt: "Stage 3: wrinkles deepen and mild laxity appears around the eyes and along the jawline.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/aging/stage-4.jpg",
        alt: "Stage 4: folds become more pronounced and definition is lost along the cheekbones and jaw.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/aging/stage-5.jpg",
        alt: "Stage 5: laxity extends to the neck and décolletage, with accumulated texture and tone change in the skin.",
      },
    ],

    // ── 06
    locationBlock: {
      heading: "Where ageing shows first",
      intro:
        "Different areas change at different rates, largely according to how thin the skin is, how much it moves and how much sun it has taken.",
      cards: [
        {
          title: "Around the eyes",
          body: "The thinnest skin on the face, in near-constant movement. Usually the first area to show fine lines, crepiness and hollowing, often a decade before anywhere else.",
        },
        {
          title: "Mid-face and cheeks",
          body: "Where volume loss shows most clearly. Flattening here is what deepens the folds below it, which is why treating the fold directly so often misses the point.",
        },
        {
          title: "Around the mouth",
          body: "Fine vertical lines on the lip and folds running from the mouth corners. Movement, sun and volume change all contribute, and smoking accelerates all three.",
        },
        {
          title: "Jawline and lower face",
          body: "Where descent becomes visible: the jaw stops reading as one clean line and the neck angle softens. Frequently the change that prompts the first appointment.",
        },
        {
          title: "Neck, chest and hands",
          body: "Thin skin, few oil glands and decades of missed sunscreen. Often noticeably older than the face, and treated more conservatively because they heal more slowly.",
        },
      ],
      note: {
        title: "Not ageing?",
        body: "A new or changing mark, a patch that is scaly, crusting or bleeding, or a lesion that will not heal is not a sign of ageing and should be examined promptly. Years of sun exposure make that check more important, not less.",
      },
    },

    // ── 07
    seeDoctor: {
      intro:
        "There is no age at which an assessment becomes necessary. It is worth having one if:",
      triggers: [
        "You want to understand what is actually changing rather than guess at it from product marketing.",
        "Your skincare routine has plateaued and you are unsure what would add to it.",
        "Change seems to have accelerated over a short period, which is worth examining on its own.",
        "You are considering treatment and want a staged, conservative plan rather than a package.",
        "There is a mark or patch you are unsure about, which should be looked at regardless of anything cosmetic.",
      ],
      outro:
        "Being told that daily sun protection and a sensible routine are all you need for now is a legitimate outcome, and it costs nothing to find out.",
    },

    // ── 08
    ctaMid: {
      heading: "Not sure what's actually changing?",
      body: "Firmness, texture, volume and tone move at different speeds, and treating the wrong one is the usual reason people feel a plan did nothing. Send us a photo on WhatsApp and a doctor can map it with you.",
    },

    // ── 09
    treatmentsIntro:
      "These are the treatments most often considered for ageing skin at our clinics. Ageing involves several changes at once, so plans are usually sequenced rather than chosen one from a list.",
    treatmentWhy: {
      "skin-booster": {
        why: "For hydration and skin quality overall",
        body: "Injectable hydration distributed across an area to improve how the skin holds water and reflects light. Considered where dullness, dryness and fine crepiness are what you are noticing rather than shape.",
      },
      "resurfacing-laser": {
        why: "For sun damage, texture and tone together",
        body: "A fractional laser used where accumulated UV damage shows as roughness, uneven tone and etched lines at the same time. More downtime, and strict sun avoidance afterwards is part of the plan.",
      },
      "fotona-4d": {
        why: "For a layered approach across several depths",
        body: "A laser protocol working in several passes at different depths, including one delivered from inside the mouth. Considered where firmness and surface quality both need attention in the same course.",
      },
      hifu: {
        why: "For firmness in the lower third of the face",
        body: "Focused ultrasound delivered beneath the skin to prompt collagen change at depth. Considered where the jawline and lower face are leading the picture rather than skin surface or volume.",
      },
      ultherapy: {
        why: "For a targeted lift where laxity leads the picture",
        body: "The same principle with ultrasound imaging so the doctor can see the tissue layers while treating. Relevant where precision at depth matters more than breadth of coverage.",
      },
      "bio-stimulator": {
        why: "For rebuilding structure gradually rather than filling",
        body: "An injectable that prompts your own collagen production over months instead of adding volume immediately. Suits people who want change to arrive slowly and are willing to wait for it.",
      },
      "dermal-fillers": {
        why: "For restoring volume where the face has flattened",
        body: "Placed to rebuild support in a deflated mid-face rather than to fill individual lines. Conservative, staged placement is what separates a rested look from an overfilled one.",
      },
    },
    treatmentsNote:
      "Almost nobody needs all of these, and treating everything at once removes the information needed to judge what actually helped. A sensible plan addresses the change that bothers you most, reviews it, and stops when you are satisfied.",

    // ── 10
    compare: {
      intro:
        "A general guide only. Most faces show several changes at once, and the doctor may recommend something different after examining your skin.",
      columns: ["What you have", "Commonly considered", "Typical course", "Downtime"],
      rows: [
        ["Dullness and dehydration", "Skin boosters", "Short course, then maintenance", "1–2 days swelling"],
        ["Sun damage, texture and uneven tone", "Resurfacing laser", "Assessed individually", "5–7 days"],
        ["Fine lines with good firmness", "Skin-quality treatment", "Course, spaced", "Minimal"],
        ["Flattened mid-face", "Volume support or bio-stimulator", "Staged over sessions", "1–2 days swelling"],
        ["Softening jawline", "Focused ultrasound", "Single session, reviewed", "None to minimal"],
        ["Firmness and surface quality together", "Laser protocol across depths", "Course, spaced", "1–3 days redness"],
        ["Advanced laxity", "Surgical opinion discussed", "Individual", "Individual"],
      ],
      note: "Session counts and intervals are set by the doctor after assessment. Collagen-based change continues for months after a session, so plans include review points rather than fixed end dates.",
    },

    // ── results
    results: [
      { src: "https://cdn.kaiteki.my/concerns/aging/before-after-01.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Skin tone and texture, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/aging/before-after-02.jpg", nativeWidth: 1410, ratio: "1/1", caption: "Overall skin quality, before and after a course of treatment at Kaiteki" },
    ],

    // ── 12
    firstVisit: {
      intro:
        "The consultation is free and there is no obligation to book treatment afterwards. It usually takes 20 to 30 minutes.",
      steps: [
        {
          title: "History",
          body: "What you have noticed and over what period, your sun habits, whether you smoke, your current skincare, any previous treatments, and your general health and medication.",
        },
        {
          title: "Examination",
          body: "The doctor assesses skin quality, tone, volume and firmness separately, sitting upright and sometimes under magnification, because these four things rarely need the same treatment.",
        },
        {
          title: "Discussion",
          body: "Which change is leading, what each option addresses, what it will not address, downtime and risks, and what a conservative first step would look like.",
        },
        {
          title: "Plan",
          body: "If you choose to proceed, a sequence and a review point. You can take the plan away and think about it.",
        },
      ],
      outro:
        "Bring photographs of yourself from five or ten years ago. They are the most useful thing in the room, because gradual change is genuinely hard to judge from memory or from a mirror seen every day.",
    },

    // ── 13
    risks: {
      intro: "Every treatment on this page carries some risk.",
      items: [
        {
          lead: "Common and usually temporary",
          body: "Redness, swelling, bruising, dryness, flaking and tenderness for a few days depending on the treatment. Laser-based treatment leaves the skin sensitive and requires careful aftercare while it recovers.",
        },
        {
          lead: "Uncommon but important",
          body: "Injectables carry a rare but serious risk of vascular occlusion, and collagen-stimulating products can occasionally form nodules under the skin. Energy-based treatment can, rarely, cause a burn or a small area of fat loss. All are reasons to be treated by a doctor rather than by a device operator.",
        },
        {
          lead: "Pigment change and Malaysian skin",
          body: "Medium and deeper skin tones carry a higher chance of post-inflammatory hyperpigmentation after laser or energy-based treatment. Settings are chosen conservatively, sessions are spaced further apart, and daily sun protection is a condition of the plan rather than a suggestion.",
        },
        {
          lead: "What treatment cannot do",
          body: "Nothing here stops or reverses ageing. Treatment addresses some of the visible change, gradually and partially, and the process continues underneath it. No device removes excess skin, results are maintained rather than permanent, and a face treated to look younger than it is generally reads as treated rather than as young.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant or breastfeeding, take blood thinners, have an autoimmune or connective-tissue condition, use retinoids or acids, have a history of cold sores or keloid scarring, have had injectables, threads or facial surgery before, or have tanned recently.",
    },

    // ── 14
    costFactors: {
      intro:
        "Costs are not published because they depend on the assessment. What they depend on is worth knowing before you come in:",
      factors: [
        "Which change is being treated, since skin quality, tone, volume and firmness are separate treatments.",
        "How many areas: face only, or including the neck, chest and hands.",
        "The device or product chosen, and how much of it your assessment calls for.",
        "How many sessions and over what period, which is set after assessment and adjusted at review.",
        "Whether the plan is staged across several treatments, which is common at this concern.",
      ],
      outro:
        "The doctor will go through the specifics with you at the consultation, including a conservative first step and how often maintenance is likely, before you commit to anything.",
    },

    // ── 15
    technologyIntro:
      "Ageing shows up as four different problems on the same face, and no single platform addresses all of them well. Having several means the doctor can match the treatment to what is actually changing rather than to what is available in the room.",

    // ── 16
    faqs: [
      {
        q: "Can skin ageing be prevented?",
        a: "Not the intrinsic part, which is driven by genetics and time and happens to everyone. The extrinsic part is a different matter: cumulative UV exposure accounts for a large share of what people describe as ageing skin, and daily broad-spectrum sunscreen is by a distance the most evidenced thing you can do about it. Not smoking, sleeping properly and a sensible diet all support the same outcome without stopping the underlying process.",
      },
      {
        q: "What actually changes as skin ages?",
        a: "Four things, at different speeds. Collagen and elastin decline, so firmness and recoil reduce. Volume is lost and redistributed as fat pads shrink and descend. Hydration and barrier function fall, making skin drier and duller. And accumulated sun damage shows as uneven tone and rough texture. Two people the same age can be dominated by entirely different ones, which is why a generic plan rarely satisfies anybody.",
      },
      {
        q: "At what age should I start treatment?",
        a: "There is no medically correct age, and anyone telling you that you need to start now should be questioned. What is true is that skin quality and sun protection matter at every age, and that a change addressed early is generally simpler than one addressed late. Plenty of people are assessed, told that their routine is doing the job, and leave without booking anything.",
      },
      {
        q: "Does skincare make a real difference?",
        a: "For skin quality, yes: sunscreen, well-formulated retinoids and antioxidants have reasonable evidence behind them and support any in-clinic plan. What skincare cannot do is restore lost volume, lift descended tissue or rebuild collagen at depth, so expectations should match the mechanism. A doctor can tell you whether what you already use is appropriate before you add anything to it.",
      },
      {
        q: "How soon will I see a difference?",
        a: "It depends on the treatment. Volume support is visible immediately, though swelling makes the first days unreliable. Skin boosters show over a few weeks. Collagen-stimulating and energy-based treatments build gradually over several months, and are often more noticeable to other people than to you. Consistent photographs at the same angle and lighting are far more useful than checking the mirror each morning.",
      },
      {
        q: "Will treatment make me look unnatural?",
        a: "That risk comes almost entirely from doing too much at once, particularly with volume. Conservative, staged treatment with a review point between stages is how it is avoided, along with a doctor willing to say that a request is not proportionate. It is entirely reasonable to state at the consultation that you would rather look rested than different, and to ask what happens if you dislike the result.",
      },
      {
        q: "How long do the effects last?",
        a: "None of it is permanent, and ageing continues underneath whatever is done. Volume support is gradually broken down by the body over a period of months to years depending on the product and placement. Collagen-based change builds and then recedes. Most people who are pleased with a result return periodically, and that commitment is worth understanding before the first session rather than after it.",
      },
      {
        q: "Is laser treatment safe for Asian skin?",
        a: "Yes, when the device and settings are chosen by a doctor experienced with your skin type. The specific consideration in medium and deeper tones is post-inflammatory hyperpigmentation, where the skin responds to treatment by producing extra pigment. It is managed by choosing suitable wavelengths, using conservative settings, spacing sessions further apart and being strict about sun protection afterwards. It is a real factor rather than a reason to avoid treatment.",
      },
      {
        q: "Should I treat my neck and hands as well?",
        a: "They are worth assessing, and they are often noticeably more sun-damaged than the face because they are protected least. They also behave differently: thinner skin, fewer oil glands and slower recovery mean treatment is more conservative and expectations more modest. A face treated in isolation while the neck and hands are left can end up looking mismatched, which is worth raising at the consultation.",
      },
      {
        q: "What is the difference between intrinsic and extrinsic ageing?",
        a: "Intrinsic ageing is what your genes and the passage of time do regardless of how you live: gradual collagen decline, thinning skin, volume change. Extrinsic ageing is what environment and habits add on top, and it is dominated by UV exposure, with smoking, pollution and diet contributing. The useful part of the distinction is that the second is largely within your control, and it is the larger share of what most people see.",
      },
      {
        q: "Do I need to do all of this at once?",
        a: "No, and it is usually a poor idea. Treating everything simultaneously costs more, increases the chance of an overdone look, and removes the information you need to judge what actually worked. Addressing the one thing that bothers you most, reviewing it, then deciding whether to continue is both cheaper and more likely to leave you satisfied. You are free to stop at any point.",
      },
      {
        q: "Is there a point where non-surgical treatment isn't enough?",
        a: "Yes, and an honest consultation will say so. Where laxity is advanced and skin has genuinely descended, no device removes excess skin, and a course of treatment sold into that situation delivers disappointment. Our doctors will tell you when that is the case and, where appropriate, suggest a surgical opinion. Deciding to do nothing at all is also a perfectly reasonable outcome.",
      },
    ],

    // ── 17
    relatedConcerns: [
      {
        slug: "fine-lines-wrinkles",
        reason: "Lines are usually the first change people notice and name.",
      },
      {
        slug: "face-lifting",
        reason: "Firmness and laxity are assessed in more depth there.",
      },
      {
        slug: "pigmentation",
        reason: "Sun damage drives tone change alongside everything else.",
      },
    ],

    // ── 18
    ctaHeading: "Map what's actually changing",
    ctaAssesses: "your skin",
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
    // ── 01
    banner: {
      src: "https://cdn.kaiteki.my/concerns/body-slimming/banner.jpg",
      sm: "https://cdn.kaiteki.my/concerns/body-slimming/banner-sm.jpg",
      alt: "Illustrative photograph: a person measuring their waist with a tape measure",
    },

    // ── 02 · process facts. Nothing about centimetres lost or dress sizes:
    // both would be outcome claims (R-01).
    facts: [
      {
        value: "Not weight loss",
        label: "Contouring addresses a specific area. It does not change the number on the scales.",
      },
      {
        value: "For a stable weight",
        label: "It is generally considered for people already near a weight they can maintain.",
      },
      {
        value: "Assessment first",
        label: "A doctor examines the area and explains what is realistic before any treatment.",
      },
    ],

    // ── 02b · archetype B has no location block, so the nav is six items.
    jumpNav: [
      { id: "causes", label: "What it addresses" },
      { id: "which-type", label: "What it does and doesn't do" },
      { id: "treatments", label: "Treatments" },
      { id: "risks", label: "Risks" },
      { id: "cost", label: "Cost" },
      { id: "faq", label: "FAQ" },
    ],

    sections: [
      {
        heading: "What is body slimming / contouring?",
        body: [
          "Body slimming, more accurately called body contouring, describes in-clinic approaches aimed at the shape and definition of a specific area, such as pockets of stubborn fat, muscle tone or skin firmness, rather than reducing overall body weight.",
          "It is not a weight-loss treatment. Contouring is concerned with how a particular area looks, not the number on the scales, so it is considered alongside, never in place of, a healthy diet and regular exercise. Where overall weight is the concern, that is a medical conversation and a different one.",
        ],
      },
    ],

    // ── 04 · archetype B: what the treatment is actually aimed at. Four areas,
    // four photographs, paired by position.
    drivers: {
      heading: "What contouring actually addresses",
      intro:
        "Fat is not distributed evenly, and where your body stores it is largely genetic. These are the areas people most often describe as not shifting no matter what the rest of their body does.",
      items: [
        {
          lead: "The lower abdominal pouch:",
          body: "a pocket sitting below the navel that persists at a stable weight. Common after pregnancy and in people whose abdomen is otherwise flat, and one of the more frequent reasons for an assessment.",
        },
        {
          lead: "Flanks and love handles:",
          body: "fat over the sides of the waist that sits above the belt line. Genetically determined in most people, and famously unresponsive to targeted exercise, because spot reduction through exercise does not work.",
        },
        {
          lead: "Bra line and upper back:",
          body: "folds that show through fitted clothing across the back and under the arm. Frequently mentioned as a clothing problem rather than a body-image one, and often overlooked in general weight loss.",
        },
        {
          lead: "Skin texture and cellulite:",
          body: "dimpling caused by fibrous bands tethering skin to deeper tissue while fat pushes between them. It is a structural feature of skin, present at every body size, and it is not a sign of excess weight.",
        },
      ],
      outro:
        "Muscle tone underneath all of this changes how an area reads, which is why definition can look different at the same weight and body-fat level. Where skin has loosened after significant weight change or pregnancy, that is assessed separately again, because firmness and fat are different problems.",
    },

    // ── 04 media · one figure per area, in the same order as `drivers.items`.
    figures: [
      {
        src: "https://cdn.kaiteki.my/concerns/body-slimming/lowerbellypouch.jpg",
        caption:
          "A pocket below the navel that persists at a stable weight, and often on an abdomen that is otherwise flat.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/body-slimming/lovehandles.jpg",
        caption:
          "Fat over the sides of the waist. Where your body stores it is largely genetic, and targeted exercise does not reduce it.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/body-slimming/brabunglesbackfat.jpg",
        caption:
          "Folds across the back and under the arm that show through fitted clothing, and are often missed by general weight loss.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/body-slimming/cellulite-smoothing.jpg",
        caption:
          "Dimpling from fibrous bands tethering skin to deeper tissue. It is a feature of skin structure at every body size.",
      },
    ],

    // ── 05 · archetype B: claim and reality. This is the page's whole job. Most
    // of the harm in this category comes from what people believe before they
    // arrive, so the correction is the differentiator.
    variant: {
      kind: "pairs",
      heading: "What it does and doesn't do",
      intro:
        "This is the corner of aesthetics with the most marketing noise around it. These are the six things people most often arrive believing, and what is actually true.",
      pairs: [
        {
          claim: "It will help me lose weight.",
          reality:
            "It will not. Contouring reduces or reshapes fat in one area; it does not lower your overall weight and it is not a treatment for obesity. If weight is the concern, that belongs with a doctor and a plan involving diet, activity and, where appropriate, medical management.",
        },
        {
          claim: "The fat comes back somewhere else.",
          reality:
            "Fat cells removed from a treated area do not relocate. What happens is that if you gain weight afterwards, the fat cells you still have everywhere else enlarge, and the treated area can look proportionally different. The outcome depends on your weight staying reasonably stable.",
        },
        {
          claim: "One session and it's done.",
          reality:
            "Most areas are planned as a course with review points, and change from fat-reduction treatment builds over weeks to months as the body clears treated cells. A single session may be appropriate for a small area, but it is decided after assessment rather than sold in advance.",
        },
        {
          claim: "It will tighten loose skin too.",
          reality:
            "Fat reduction and skin firmness are different problems. Reducing fat under loose skin can make the looseness more visible rather than less. Where skin laxity is the leading issue, it is assessed on its own terms and may call for a different treatment entirely, or none.",
        },
        {
          claim: "Cellulite can be removed.",
          reality:
            "It can sometimes be made less obvious, but it is a structural feature of how skin attaches to the tissue beneath, present in people of every size and fitness level. Any treatment aimed at it should be discussed as improvement in appearance rather than removal.",
        },
        {
          claim: "It replaces diet and exercise.",
          reality:
            "It sits alongside them and depends on them. Contouring is generally considered for people already close to a weight they can maintain, because that is the situation in which a localised change holds. Without that, treatment is being asked to do a job it was never designed for.",
        },
      ],
    },

    // ── 07 · archetype B has no location block, so this follows the variant.
    seeDoctor: {
      intro: "It is reasonable to have an area assessed if any of the following apply:",
      triggers: [
        "A specific area has not changed despite a stable weight and consistent exercise.",
        "You are unsure whether what you are looking at is fat, loose skin or muscle tone.",
        "Clothing fits everywhere except one place, and it bothers you enough to be worth a conversation.",
        "You have been offered a treatment elsewhere and want a second opinion on whether it matches the concern.",
        "Your weight is still changing, in which case timing is part of the advice.",
      ],
      outro:
        "If your weight is not yet stable, the honest answer is usually to wait, because treating a moving target rarely holds. A doctor telling you that is giving you better value than one who books you in regardless.",
    },

    // ── 08
    ctaMid: {
      heading: "Not sure if it's fat or loose skin?",
      body: "The two look similar and are treated in completely different ways. Send us a photo on WhatsApp and a doctor can tell you which you're dealing with before you book anything.",
    },

    // ── 09
    treatmentsIntro:
      "These are the treatments most often considered for body contouring at our clinics. None of them is a weight-loss treatment, and which is appropriate, if any, depends on what the assessment finds in the area.",
    treatmentWhy: {
      "fat-freezing": {
        why: "For a pinchable pocket that diet has not shifted",
        body: "Controlled cooling applied to a defined pocket of fat, which the body then clears over the following weeks. Suitable where the fat can be drawn into an applicator, which is why the pinch test at assessment decides whether it applies at all.",
      },
      "microwave-contouring": {
        why: "For fat and skin firmness in one pass",
        body: "Delivers energy that addresses fat volume and skin quality in the same treatment. Considered where an area shows both a pocket and some looseness, rather than one or the other cleanly.",
      },
      "muscle-stimulation": {
        why: "For muscle tone under the fat layer",
        body: "Prompts intense muscle contraction to build tone in the underlying muscle rather than to reduce fat. Considered where definition rather than volume is the concern, and often discussed alongside, not instead of, exercise.",
      },
    },
    treatmentsNote:
      "Sequence matters where more than one applies: reducing a fat pocket first shows how much of what you were seeing was actually skin looseness underneath. None of these treats obesity, and none replaces diet and exercise.",

    // ── results
    results: [
      { src: "https://cdn.kaiteki.my/concerns/body-slimming/before-after-01.jpg", nativeWidth: 600, ratio: "1/1", caption: "Body contour, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/body-slimming/before-after-02.jpg", nativeWidth: 600, ratio: "1/1", caption: "Abdominal contour, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/body-slimming/before-after-03.jpg", nativeWidth: 600, ratio: "1/1", caption: "Abdominal contour, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/body-slimming/before-after-04.jpg", nativeWidth: 600, ratio: "1/1", caption: "Localised fat pocket, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/body-slimming/before-after-05.jpg", nativeWidth: 600, ratio: "1/1", caption: "Body contour, before and after a course of treatment at Kaiteki" },
    ],

    // ── 12
    firstVisit: {
      intro:
        "The consultation is free and there is no obligation to book treatment afterwards. It usually takes 20 to 30 minutes.",
      steps: [
        {
          title: "History",
          body: "Your weight over the past year or two, whether it is stable, what you have already tried, any pregnancies or significant weight change, your general health and any medication.",
        },
        {
          title: "Examination",
          body: "The doctor examines the area standing and seated, including a pinch test, to separate fat from loose skin and to judge whether the pocket suits the treatments available.",
        },
        {
          title: "Discussion",
          body: "What each option does, how long change takes to appear, downtime, risks, and what is realistic. Including when the honest answer is to wait until your weight settles.",
        },
        {
          title: "Plan",
          body: "If you choose to proceed, a sequence and a review point. You can take the plan away and think about it.",
        },
      ],
      outro:
        "Wear or bring clothing that lets the area be examined comfortably. If you have photographs from a period when your weight was different, they help the doctor judge what has actually changed.",
    },

    // ── 13
    risks: {
      intro: "Every treatment on this page carries some risk.",
      items: [
        {
          lead: "Common and usually temporary",
          body: "Redness, swelling, firmness, tenderness, bruising, tingling and numbness over the treated area, sometimes for several weeks. Muscle-stimulation treatment commonly leaves aching similar to a hard workout.",
        },
        {
          lead: "Uncommon but important",
          body: "Cooling-based fat reduction carries a rare risk of paradoxical adipose hyperplasia, where the treated area enlarges rather than reduces and typically requires surgical correction. Prolonged numbness and, rarely, changes in skin sensation can also occur. These should be explained before consent, not after.",
        },
        {
          lead: "It is not a health treatment",
          body: "Reducing a fat pocket does not improve the metabolic risks associated with excess weight. Anyone using contouring as a substitute for managing their weight is buying a cosmetic change and no health benefit at all.",
        },
        {
          lead: "Pigment change and Malaysian skin",
          body: "Where energy-based devices are used, medium and deeper skin tones carry a higher chance of post-inflammatory pigment change in the treated area. Body skin also heals more slowly than the face, so settings are conservative and the area is kept covered or protected afterwards.",
        },
        {
          lead: "What treatment cannot do",
          body: "It cannot reduce your overall weight, treat obesity, or tighten loose skin. It will not stop fat returning if your weight rises, because the cells you still have elsewhere enlarge. Cellulite is not removed by any of it, and change builds over weeks to months rather than appearing after the appointment.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant, breastfeeding or planning pregnancy, have a hernia in or near the area, have a pacemaker or metal implant, take blood thinners, have a cold-sensitivity condition such as cryoglobulinaemia or cold urticaria, or have had surgery in the area.",
    },

    // ── 14
    costFactors: {
      intro:
        "Costs are not published because they depend on the assessment. What they depend on is worth knowing before you come in:",
      factors: [
        "Which area, and how many areas are being treated in a plan.",
        "The size of the pocket, since larger areas take more applications to cover.",
        "Which treatment applies, because fat reduction, firmness and muscle tone are different treatments.",
        "How many sessions, which is set after assessment and reviewed as the area responds.",
        "Whether treatments are combined, which is common where fat and firmness both feature.",
      ],
      outro:
        "The doctor will go through the specifics with you at the consultation, including how long change takes to appear and when it is reviewed, before you commit to anything.",
    },

    // ── 15
    technologyIntro:
      "Fat volume, skin firmness and muscle tone are three different problems, and no single device addresses all three well. Having more than one platform means the doctor can match the treatment to what the area actually shows.",

    // ── 16
    faqs: [
      {
        q: "Is body contouring a way to lose weight?",
        a: "No. It reduces or reshapes fat in one specific area and does not change your overall weight, body mass index or metabolic health. It is not a treatment for obesity and it is not a substitute for diet and exercise. It is generally considered for people already near a weight they can maintain who have a localised area that has not responded. If weight itself is the concern, that is a different conversation.",
      },
      {
        q: "Will the fat come back?",
        a: "Fat cells removed from a treated area do not return or move elsewhere. What can happen is that if you gain weight afterwards, the fat cells you still have throughout your body enlarge, including any remaining in the treated area, so the shape changes again. The result depends on your weight staying reasonably stable, which is why timing relative to weight change matters so much.",
      },
      {
        q: "How soon will I see a difference?",
        a: "Gradually. Fat-reduction treatment works by causing treated cells to be cleared by the body over the following weeks and months, so there is nothing to see immediately and the area may in fact look swollen at first. Muscle-stimulation treatment builds tone over a course. Photographs taken in consistent lighting and posture are far more reliable than the mirror or the scales.",
      },
      {
        q: "Does it hurt?",
        a: "Cooling-based treatment is uncomfortable at first as the area numbs, then usually tolerable, with pulling and tugging sensations from the applicator. Afterwards the area is often tender, swollen and numb for some time, and a deep ache in the first days is common. Muscle stimulation feels like intense involuntary contractions and leaves aching similar to a hard workout. None of it requires anaesthetic.",
      },
      {
        q: "Can it treat cellulite?",
        a: "The appearance can sometimes be improved, but cellulite is not removed by any treatment on this page. It is caused by fibrous bands tethering the skin to deeper tissue while fat pushes up between them, and it is present in people of every size and fitness level. Any conversation about it should be framed as making it less noticeable, not as getting rid of it.",
      },
      {
        q: "Will it tighten loose skin?",
        a: "Not on its own, and reducing the fat beneath loose skin can make the looseness more obvious. Skin firmness is a separate problem from fat volume, assessed separately, and after significant weight loss or pregnancy it is often the leading issue. Where that is the case a doctor should say so, because treating the fat first would move you in the wrong direction.",
      },
      {
        q: "Can I have this after pregnancy?",
        a: "It is generally deferred until you have finished breastfeeding and your weight and body have settled, which usually takes several months at least. Abdominal separation is also assessed first, because a gap between the abdominal muscles produces a shape no contouring treatment addresses and is managed with physiotherapy. Tell your doctor at the consultation where you are in that timeline.",
      },
      {
        q: "How do I know if I'm a suitable candidate?",
        a: "The usual picture is someone at or near a stable weight, in reasonable health, with a defined area that has not responded to diet and exercise, and with realistic expectations about the scale of change. The pinch test at assessment decides whether the fat can be treated with the equipment available. If your weight is still moving, or if the concern is overall size, the honest answer is often no.",
      },
    ],

    // ── 17
    relatedConcerns: [
      {
        slug: "face-contouring",
        reason: "Fullness under the chin is the same principle applied to a smaller area.",
      },
      {
        slug: "face-lifting",
        reason: "Skin firmness after fat reduction is assessed the same way.",
      },
      {
        slug: "aging",
        reason: "Skin quality and laxity change on the body as well as the face.",
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
    // ── 01
    banner: {
      src: "https://cdn.kaiteki.my/concerns/hair-loss/banner.jpg",
      sm: "https://cdn.kaiteki.my/concerns/hair-loss/banner-sm.jpg",
      alt: "Illustrative photograph: a person parting their hair to look at the scalp beneath",
    },

    // ── 02 · process facts. Nothing about regrowth, which would be an outcome
    // claim, and nothing about how long anything takes (R-01).
    facts: [
      {
        value: "Shedding is normal",
        label: "Losing some hair daily is part of the growth cycle, not a sign of hair loss.",
      },
      {
        value: "Cause before treatment",
        label: "Hereditary thinning, a scalp condition and a medical cause are managed differently.",
      },
      {
        value: "Timing matters",
        label: "Follicles that have been dormant for years respond differently from ones that have not.",
      },
    ],

    // ── 02b
    jumpNav: [
      { id: "causes", label: "Common causes" },
      { id: "which-type", label: "Which kind is it?" },
      { id: "where", label: "Pattern on the scalp" },
      { id: "treatments", label: "Treatment" },
      { id: "risks", label: "Risks" },
      { id: "cost", label: "Cost" },
      { id: "faq", label: "FAQ" },
    ],

    sections: [
      {
        heading: "Understanding hair loss",
        body: [
          "Hair loss and hair thinning are common and affect both men and women. As we age, hair follicles can change over time, much like other parts of the body, and a degree of daily shedding is a normal part of the hair's natural cycle.",
          "Each follicle moves through a repeating cycle: an active growing phase lasting years, a short transitional phase, and a resting phase after which the hair sheds and the follicle can begin again. Hairs across the scalp sit at different points of this cycle at any moment, which is why finding hair on a pillow or in a drain is usually normal. Hair loss becomes a concern when the balance shifts, and the reason it has shifted matters more than the shedding itself.",
        ],
      },
    ],

    // ── 04 · archetype D: causes. No figures are authored: the two photographs
    // available for this concern show patterns of loss rather than causes
    // (docs/11 §2), and figures pair with causes by position.
    drivers: {
      heading: "Common causes",
      intro:
        "Research into hair loss is ongoing, and several recognised contributors are usually involved at once. This list is what a doctor works through at an assessment.",
      items: [
        {
          lead: "Genetics and family history:",
          body: "hereditary pattern loss is by a wide margin the most common cause in both men and women. Follicles gradually produce finer, shorter hairs until they stop, which is why it shows as thinning before it shows as a bare patch.",
        },
        {
          lead: "Hormonal change:",
          body: "childbirth, stopping hormonal contraception, menopause and thyroid disorders all affect the growth cycle. Loss after a hormonal shift is frequently temporary, which is one reason not to rush into treatment.",
        },
        {
          lead: "Physical or emotional stress:",
          body: "surgery, serious illness, rapid weight loss or a period of severe stress can push a large number of follicles into the resting phase at once. The shedding typically appears two to three months after the event, long enough afterwards that people often miss the connection.",
        },
        {
          lead: "Scalp conditions:",
          body: "fungal infection, seborrhoeic dermatitis and psoriasis inflame the scalp and disrupt the follicles in it. These are treated as scalp problems first, because the hair rarely improves while the scalp is inflamed.",
        },
        {
          lead: "Underlying medical conditions:",
          body: "thyroid disease, iron deficiency, autoimmune conditions and some chronic illnesses all show up in the hair. This is why blood tests are often part of the assessment rather than an upsell.",
        },
        {
          lead: "Nutrition and medication:",
          body: "restrictive dieting, low iron or protein, and certain medications can all contribute. Excessive supplementation is not neutral either: too much of some nutrients causes shedding in its own right.",
        },
        {
          lead: "Traction and styling:",
          body: "consistently tight braids, ponytails or extensions pull on the follicle over years. Caught early this is reversible; left long enough, the follicle scars and it is not.",
        },
      ],
      outro:
        "More than one of these is usually present. Hereditary thinning uncovered by a stressful year is a far more common story than either cause acting alone, which is why a single explanation is rarely the whole answer.",
    },

    // ── 05 · archetype D's differentiator: is this the primary condition, or a
    // sign of something else? On this concern that question decides whether the
    // right next step is a treatment at all.
    variant: {
      kind: "tabs",
      heading: "Which kind is it?",
      intro:
        "The most useful thing an assessment does here is separate hair loss that is the condition from hair loss that is a symptom of something else. The second needs investigating rather than treating.",
      tabs: [
        {
          label: "Pattern loss",
          sub: "Gradual, in a recognisable shape",
          title: "Hereditary pattern loss",
          body: "Gradual thinning in a predictable distribution: a receding temple line and crown in men, a widening central parting with the front hairline preserved in women. It develops over years, without inflammation, itching or a sudden increase in shedding.",
          items: [
            {
              lead: "The tell:",
              body: "hairs become finer and shorter over time rather than falling out in numbers, and the pattern is familiar from relatives.",
            },
            {
              lead: "What it means:",
              body: "it is a long-term condition to be managed rather than an event to be fixed, and earlier action generally leaves more to work with.",
            },
          ],
          routing:
            "assessed for long-term medical management, with supportive in-clinic treatment discussed alongside it.",
        },
        {
          label: "Something else",
          sub: "Sudden, patchy or with symptoms",
          title: "Hair loss as a symptom",
          body: "Loss that came on suddenly, appears in discrete patches, follows an illness or a hormonal event, or comes with an itchy, scaly, sore or scarred scalp. Here the hair is a signal, and treating it cosmetically without finding the cause wastes time.",
          items: [
            {
              lead: "The tell:",
              body: "a clear change over weeks rather than years, distinct bald patches, or scalp symptoms alongside the loss.",
            },
            {
              lead: "What it means:",
              body: "investigation first. Blood tests, scalp examination and sometimes referral, because several causes here are treatable and some are time-sensitive.",
            },
          ],
          routing:
            "assessed with examination and, where indicated, blood tests, before any cosmetic treatment is discussed.",
        },
      ],
    },

    // ── 06 · archetype D: location grid, read as pattern across the scalp.
    locationBlock: {
      heading: "Pattern on the scalp",
      intro:
        "Where hair is thinning is one of the most informative things a doctor looks at, and it is what a photograph rarely captures well.",
      cards: [
        {
          title: "Temples and receding hairline",
          body: "A hairline moving back at the corners is the classic early male pattern. In women a receding frontal hairline is less typical and is worth assessing, as it points toward other causes.",
        },
        {
          title: "Crown and vertex",
          body: "Thinning at the back of the crown often goes unnoticed until someone else mentions it or it appears in a photograph. It is a common pattern site and one people track with a mirror over months.",
        },
        {
          title: "Widening central parting",
          body: "The most common female pattern: the parting broadens while the front hairline stays intact. Comparing the parting with a photograph from a few years ago is often more informative than counting shed hairs.",
        },
        {
          title: "Discrete round patches",
          body: "Smooth, well-defined bald patches that appear over weeks are a different condition entirely from pattern loss, and they need medical assessment rather than a cosmetic plan.",
        },
        {
          title: "Diffuse across the whole scalp",
          body: "Even thinning everywhere, often with noticeably increased shedding, more commonly reflects a systemic cause: a hormonal event, illness, nutritional deficiency or medication.",
        },
      ],
      note: {
        title: "Scarring, redness or soreness?",
        body: "A scalp that is red, scaly, itchy, painful or shiny and smooth where hair has gone should be examined promptly. Some scarring conditions destroy follicles permanently, and early treatment is what limits it.",
      },
    },

    // ── 07 · archetype D carries extra weight here: the difference between a
    // cosmetic concern and a medical one is decided in this block.
    seeDoctor: {
      heading: "When to see a doctor",
      intro:
        "Some shedding is normal, so the question is what makes it worth an appointment. Any of these is a reason:",
      triggers: [
        "Hair loss came on suddenly, or shedding increased noticeably over a few weeks.",
        "It is appearing in discrete patches rather than thinning evenly.",
        "The scalp is itchy, sore, scaly, red, or smooth and shiny where hair has gone.",
        "It followed childbirth, illness, surgery, rapid weight loss or a change in medication.",
        "You are also noticing fatigue, weight change, or changes to your nails or skin.",
        "It has been gradual, is affecting your confidence, and you want to understand your options while there is still hair to work with.",
      ],
      outro:
        "Timing genuinely matters here, more than in most cosmetic concerns. A follicle that has been dormant for years behaves differently from one that is still producing fine hair, and scarring conditions cause permanent loss if they are left. Earlier assessment is not a sales line on this page — it is the honest advice.",
    },

    // ── 08
    ctaMid: {
      heading: "Not sure what kind of hair loss you have?",
      body: "Gradual pattern thinning and hair loss that signals something else need completely different responses. Send us a photo on WhatsApp and a doctor can tell you which needs looking at first.",
    },

    // ── 09
    treatmentsIntro:
      "Hair loss is managed medically first. What we offer in-clinic sits alongside that rather than replacing it, and whether it is appropriate depends entirely on what the assessment finds.",
    treatmentWhy: {
      "exosome-therapy": {
        why: "For supporting the scalp alongside medical treatment",
        body: "A regenerative preparation applied to the scalp to support the follicular environment. The evidence base is still developing, and it is offered as an adjunct to medical management rather than as a treatment for hair loss in its own right. It is not a substitute for finding the cause.",
      },
    },
    treatmentsNote:
      "Where the assessment points to a scalp condition, a nutritional deficiency or an underlying medical cause, that is treated first: hair rarely improves while the reason it is falling remains unaddressed. Some causes are managed with prescribed medical treatment, which the doctor will discuss with you individually rather than advertise here.",

    // ── results
    results: [
      { src: "https://cdn.kaiteki.my/concerns/hair-loss/before-after-01.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Scalp coverage, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/hair-loss/before-after-02.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Scalp coverage, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/hair-loss/before-after-03.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Scalp coverage, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/hair-loss/before-after-04.jpg", nativeWidth: 600, ratio: "1/1", caption: "Hair density, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/hair-loss/before-after-05.jpg", nativeWidth: 600, ratio: "1/1", caption: "Hair density, before and after a course of treatment at Kaiteki" },
    ],

    // ── 12
    firstVisit: {
      intro:
        "The consultation is free and there is no obligation to book treatment afterwards. It usually takes 20 to 30 minutes.",
      steps: [
        {
          title: "History",
          body: "When it started and how quickly, family history, any recent illness, childbirth, weight change or new medication, your diet, and how you style and treat your hair.",
        },
        {
          title: "Examination",
          body: "The doctor examines the scalp itself as well as the hair, sometimes under magnification, looking at the pattern, the calibre of the hairs and the condition of the skin beneath them.",
        },
        {
          title: "Investigation where indicated",
          body: "Blood tests are often appropriate, particularly with diffuse or sudden loss, because thyroid function and iron are common and treatable contributors that no topical treatment addresses.",
        },
        {
          title: "Discussion and plan",
          body: "What the likely cause is, what medical management would involve, where in-clinic treatment fits, and what is realistic. You can take the plan away and think about it.",
        },
      ],
      outro:
        "Bring photographs of your hair from one, three and five years ago if you have them. They are the most useful thing you can bring, because gradual change is almost impossible to judge from memory.",
    },

    // ── 13
    risks: {
      intro: "Every treatment discussed on this page carries some risk.",
      items: [
        {
          lead: "Common and usually temporary",
          body: "Scalp tenderness, redness, mild swelling and itching after in-clinic treatment, usually settling within a few days. Some people notice a brief increase in shedding early in a course, which your doctor should warn you about in advance.",
        },
        {
          lead: "The evidence base is still developing",
          body: "Regenerative treatments for hair are an active area of research rather than settled practice. That is not a reason to avoid them, but it is a reason to be told honestly where the evidence stands before paying for a course, and to be sceptical of anyone presenting them as established.",
        },
        {
          lead: "Treating the wrong thing",
          body: "The most consequential risk on this page is not a side effect. It is spending months on cosmetic treatment while a thyroid disorder, an iron deficiency or a scarring scalp condition goes undiagnosed. This is why assessment comes before treatment here rather than alongside it.",
        },
        {
          lead: "What treatment cannot do",
          body: "No treatment restores a follicle that has already scarred or been dormant for years, and nothing here changes the hereditary tendency behind pattern loss. Improvement is generally slow, measured over many months, and it is maintained rather than permanent. Anyone promising regrowth on a timetable is not being straight with you.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant, breastfeeding or planning pregnancy, take blood thinners, have an autoimmune condition or thyroid disorder, take any regular medication or supplements, or have had a scalp condition, scalp surgery or a hair transplant.",
    },

    // ── 14
    costFactors: {
      intro:
        "Costs are not published because they depend on the assessment. What they depend on is worth knowing before you come in:",
      factors: [
        "Whether investigation such as blood testing is needed before anything is planned.",
        "The area being treated, since a receding hairline and a diffusely thinning scalp are different in scale.",
        "How many sessions, which is set after assessment and reviewed as the scalp responds.",
        "Whether ongoing medical management forms part of the plan alongside in-clinic treatment.",
        "How long the plan runs, because hair changes are judged over many months rather than weeks.",
      ],
      outro:
        "The doctor will go through the specifics with you at the consultation, including what would be reviewed and when, before you commit to anything.",
    },

    // ── 16
    faqs: [
      {
        q: "How much hair loss is normal?",
        a: "Finding hair on your pillow, in the shower or on a brush is a normal part of the growth cycle, and most people shed a noticeable amount every day without their hair thinning at all. What matters is change: more shedding than is usual for you, sustained over weeks, or a parting or hairline that looks different from photographs a year or two ago. That is when it is worth assessing.",
      },
      {
        q: "Is hair loss treatable?",
        a: "It depends entirely on the cause, which is why the assessment matters more here than the treatment. Loss driven by a thyroid disorder, iron deficiency, a scalp infection or a stressful event often improves once that cause is addressed. Hereditary pattern loss is managed long-term rather than cured. Scarring conditions cause permanent loss, and there the goal is to stop further damage rather than to recover what has gone.",
      },
      {
        q: "Why is timing so important?",
        a: "Because follicles change over time. A follicle still producing fine, short hair can often be supported; one that has been dormant for years, or that has scarred, cannot be brought back by any treatment. Scarring conditions in particular do permanent damage while they are active. This is the one cosmetic concern where waiting to see what happens genuinely costs you options.",
      },
      {
        q: "Do I need blood tests?",
        a: "Often, particularly where the loss is diffuse, sudden or accompanied by other symptoms. Thyroid function and iron status are common, treatable contributors that no shampoo or in-clinic treatment addresses, and finding one changes the plan entirely. If a clinic proposes a course of treatment for diffuse hair loss without investigating anything, that is worth questioning.",
      },
      {
        q: "Is hair loss after childbirth permanent?",
        a: "Usually not. A large increase in shedding a few months after giving birth is a well-recognised pattern caused by many follicles entering the resting phase together as hormone levels change, and for most people it settles over the following months without treatment. It is still worth an assessment if it is prolonged or severe, since iron and thyroid changes are also common in the same period.",
      },
      {
        q: "Do supplements help?",
        a: "Only where you are genuinely deficient, in which case correcting the deficiency can make a real difference. Taking hair supplements without knowing your levels is guesswork, and it is not risk-free: excess of some nutrients, selenium and vitamin A among them, causes shedding in its own right. Bring whatever you are taking to the consultation so it can be reviewed properly.",
      },
      {
        q: "Does stress cause hair loss?",
        a: "It can, through a mechanism where a physical or emotional shock pushes many follicles into the resting phase at once. The shedding typically appears two to three months after the event, which is long enough afterwards that people often do not connect the two. It usually recovers once the trigger has passed, though it can also unmask hereditary thinning that was already underway.",
      },
      {
        q: "Can women have hair loss too?",
        a: "Yes, and it is far more common than the way it is usually discussed suggests. The pattern differs: women more often notice a widening central parting with the front hairline preserved, rather than a receding hairline. Hormonal events, iron status and thyroid function are all frequent contributors and are routinely checked. It is assessed the same way, by examining the scalp and working out the cause.",
      },
    ],

    // ── 17
    relatedConcerns: [
      {
        slug: "excessive-sweating",
        reason: "Scalp conditions and sweating are sometimes assessed together.",
      },
      {
        slug: "aging",
        reason: "Hair thinning is one of the changes people notice alongside skin change.",
      },
      {
        slug: "acne",
        reason: "Scalp inflammation and folliculitis are assessed the same way as facial acne.",
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
    // ── 01
    banner: {
      src: "https://cdn.kaiteki.my/concerns/tattoo-removal/banner.jpg",
      sm: "https://cdn.kaiteki.my/concerns/tattoo-removal/banner-sm.jpg",
      alt: "Illustrative photograph: a tattooed forearm resting on a clinic treatment surface",
    },

    // ── 02 · process facts. No session count and no fading timeline: both are
    // set by the tattoo, and stating either here would be an outcome claim.
    facts: [
      {
        value: "A course, not a session",
        label: "Ink is cleared gradually by the body between visits, over a series of appointments.",
      },
      {
        value: "Colour decides a lot",
        label: "Black and dark blue behave predictably; some colours and cosmetic pigments do not.",
      },
      {
        value: "Assessed in person",
        label: "Ink composition is rarely known, so the tattoo is examined rather than described.",
      },
    ],

    // ── 02b
    jumpNav: [
      { id: "causes", label: "What affects sessions" },
      { id: "which-type", label: "How ink responds" },
      { id: "where", label: "Body location" },
      { id: "treatments", label: "Treatment" },
      { id: "risks", label: "Risks" },
      { id: "cost", label: "Cost" },
      { id: "faq", label: "FAQ" },
    ],

    sections: [
      {
        heading: "What is laser tattoo removal?",
        body: [
          "Laser tattoo removal uses focused laser energy to break the ink held in the skin into fragments small enough for the body's own immune system to carry away. The laser does not remove ink directly; it makes the particles small enough for the body to clear over the weeks that follow. That is why the interval between sessions matters as much as the sessions themselves.",
          "People consider it for many reasons, including a change in personal taste, a name they have moved on from, or a tattoo that no longer suits their work. It is a gradual process carried out over a course of appointments, and how a given tattoo responds varies considerably. A doctor assesses your tattoo at consultation before any treatment is recommended.",
        ],
      },
    ],

    // ── 04 · archetype C: what affects your session count. No figure is
    // authored: the single photograph available for this concern (docs/11 §2)
    // cannot pair one-to-one with five factors, and figures pair by position.
    drivers: {
      heading: "What affects your session count",
      intro:
        "There is no fixed number of sessions that suits every tattoo, and anyone quoting one before seeing it is guessing. The tattoo is reviewed at each visit and the plan is adjusted as it fades. These are the factors that influence it most.",
      items: [
        {
          lead: "Ink colour:",
          body: "different pigments absorb different wavelengths. Black and dark blue absorb broadly and respond predictably. Greens, light blues, yellows and some reds need specific wavelengths and behave less consistently.",
        },
        {
          lead: "How deep the ink sits:",
          body: "professional tattoos place ink deeper and more densely than amateur ones. Deeper ink takes more sessions to reach and clear, and layered or covered-up work can hold several depths at once.",
        },
        {
          lead: "Size and density:",
          body: "a larger or heavily saturated piece simply contains more pigment. Solid black fill behaves differently from fine line work of the same dimensions.",
        },
        {
          lead: "Where it sits on the body:",
          body: "areas with strong circulation, closer to the heart, tend to clear fragments more readily than the hands, ankles and feet, where lymphatic drainage is slower.",
        },
        {
          lead: "Age of the tattoo and your own health:",
          body: "older tattoos have usually faded somewhat already. Smoking, poor circulation and anything that suppresses immune function slow the clearance the treatment depends on.",
        },
      ],
      outro:
        "Skin tone is assessed alongside all of this. Medium and deeper skin tones contain more melanin, which competes with the ink for laser energy, so settings are chosen more conservatively and sessions are spaced further apart.",
    },

    // ── 05 · archetype C's differentiator is a response table rather than a tab
    // set. Every cell is descriptive: how the ink behaves, never how well it
    // will clear or by when (R-01, R-02).
    variant: {
      kind: "table",
      heading: "How different inks respond",
      intro:
        "Ink composition is not standardised and is rarely documented, so this describes general behaviour rather than what your tattoo will do. It is a guide to the conversation, not a prediction.",
      columns: ["Ink", "How it behaves", "What that means in practice"],
      rows: [
        [
          "Black and dark blue",
          "Absorbs a wide range of wavelengths",
          "The most predictable to treat, and usually the reference point for planning a course",
        ],
        [
          "Green and turquoise",
          "Absorbs only within a narrow band",
          "Needs a specific wavelength; typically assessed for whether the clinic's platform can reach it",
        ],
        [
          "Red and orange",
          "Responds to shorter wavelengths",
          "Generally treatable, though more prone to a temporary reaction in the surrounding skin",
        ],
        [
          "Yellow and light pastels",
          "Absorbs poorly across most wavelengths",
          "Often the last colour still visible, and sometimes the reason a course is stopped short of clear",
        ],
        [
          "White and flesh-tone pigment",
          "Can darken on contact with laser energy",
          "Tested on a small area first, because some formulations oxidise to grey or black",
        ],
        [
          "Cosmetic and permanent makeup",
          "Composition varies widely and is rarely known",
          "Always patch-tested; brow and lip pigment are among the most unpredictable to treat",
        ],
        [
          "Amateur or hand-poked",
          "Shallower and less densely packed",
          "Often responds sooner than professional work of the same size",
        ],
      ],
      note: "A test patch on a small, discreet area is standard practice where colour behaviour is uncertain. It costs one appointment and prevents a surprise across the whole piece.",
    },

    // ── 06 · archetype C's block 06 is body location rather than a where-it-
    // appears grid: on this concern, location changes the plan.
    locationBlock: {
      heading: "Where the tattoo sits",
      intro:
        "The body clears ink fragments through the lymphatic system, so how well an area drains changes how a tattoo behaves between sessions.",
      cards: [
        {
          title: "Upper arm, chest and back",
          body: "Strong circulation and good lymphatic drainage. These areas generally clear fragments more readily between appointments, which is why they are often used as the reference for planning.",
        },
        {
          title: "Forearm and lower leg",
          body: "Intermediate. Frequently exposed to sun as well, which matters both for the risk of pigment change and for how carefully the area has to be protected between sessions.",
        },
        {
          title: "Hands, fingers, ankles and feet",
          body: "Slower drainage and thinner skin over bone. These typically need longer intervals and more patience, and they are the areas where expectations most often need adjusting.",
        },
        {
          title: "Face, neck and eyebrows",
          body: "Treated with particular caution. Cosmetic pigment is unpredictable, the skin is thin, and any pigment change here is highly visible. A test patch is standard rather than optional.",
        },
      ],
      note: {
        title: "Over a scar or a raised tattoo?",
        body: "Tattoos placed over scar tissue, or work that sits raised or itchy, are assessed separately. So is any tattoo containing a mole or a changing mark, which must be examined before laser is used anywhere near it.",
      },
    },

    // ── 07 · archetype C: what a doctor checks first.
    seeDoctor: {
      heading: "What a doctor checks first",
      intro:
        "Before any laser is used, an assessment covers a short list of things that change whether treatment is appropriate at all:",
      triggers: [
        "The colours present, and whether the clinic's platform has a wavelength for each of them.",
        "Whether the tattoo is a cover-up, a rework, or has been treated elsewhere before.",
        "Your skin tone, since it determines how conservative the settings need to be.",
        "Any mole, changing mark or scar within or beside the tattoo, which is examined on its own terms.",
        "Your medical history, including anything affecting immune function, healing or photosensitivity.",
      ],
      outro:
        "A test patch is often carried out at or shortly after this visit, particularly with colours, cosmetic pigment or deeper skin tones. It is the cheapest way to find out how your tattoo behaves before committing to a course.",
    },

    // ── 08
    ctaMid: {
      heading: "Wondering if yours can be treated?",
      body: "Colour, depth and skin tone decide most of it, and none of them can be judged from a description. Send us a photo on WhatsApp and a doctor can tell you what to expect from an assessment.",
    },

    // ── 09
    treatmentsIntro:
      "Tattoo removal at our clinics is a single treatment carried out over a course of appointments. What varies is the wavelength used, the settings chosen for your skin, and how far apart the sessions are spaced.",
    treatmentWhy: {
      "pico-laser": {
        why: "For breaking ink into particles the body clears",
        body: "A picosecond laser delivers energy in pulses short enough to shatter pigment mechanically rather than by heating it, which reduces the heat delivered to surrounding skin. Several wavelengths are available so different ink colours can be targeted, and settings are chosen for your skin tone.",
      },
    },
    treatmentsNote:
      "Sessions are spaced weeks apart deliberately: the interval is when your body clears the fragmented ink, so treating sooner adds risk without adding benefit. The tattoo is reviewed at each visit and the course continues, is adjusted, or is stopped by agreement.",

    // ── results
    results: [
      { src: "https://cdn.kaiteki.my/concerns/tattoo-removal/before-after-01.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Tattoo, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/tattoo-removal/before-after-02.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Tattoo, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/tattoo-removal/before-after-03.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Tattoo, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/tattoo-removal/before-after-04.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Tattoo, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/tattoo-removal/before-after-05.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Tattoo, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/tattoo-removal/before-after-06.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Tattoo, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/tattoo-removal/before-after-07.jpg", nativeWidth: 600, ratio: "1/1", caption: "Tattoo, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/tattoo-removal/before-after-08.jpg", nativeWidth: 600, ratio: "1/1", caption: "Tattoo, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/tattoo-removal/before-after-09.jpg", nativeWidth: 600, ratio: "1/1", caption: "Tattoo, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/tattoo-removal/before-after-10.jpg", nativeWidth: 600, ratio: "1/1", caption: "Tattoo, before and after a course of treatment at Kaiteki" },
    ],

    // ── 12
    firstVisit: {
      intro:
        "The consultation is free and there is no obligation to book treatment afterwards. It usually takes 20 to 30 minutes.",
      steps: [
        {
          title: "History",
          body: "When and where the tattoo was done, whether it is a cover-up or has been treated before, your medical history, medication, and how your skin usually heals.",
        },
        {
          title: "Examination",
          body: "The doctor examines the tattoo directly: colours, density, depth, the state of the surrounding skin, and anything within it that needs assessing on its own terms.",
        },
        {
          title: "Discussion",
          body: "Which colours are likely to respond, how spacing works and why, aftercare, risks including pigment change and scarring, and what a realistic course looks like for a tattoo like yours.",
        },
        {
          title: "Test patch and plan",
          body: "Where colour behaviour is uncertain, a small test area is treated first. If you choose to proceed, a sequence and a review point. You can take the plan away and think about it.",
        },
      ],
      outro:
        "Bring any information you have about the tattoo: who did it, when, and whether it covers earlier work. Photographs from when it was new are useful, since they show how much it has already faded.",
    },

    // ── 13
    risks: {
      intro: "Laser tattoo removal carries real risks, and they are worth reading before you book.",
      items: [
        {
          lead: "Common and expected",
          body: "Immediate whitening of the treated area, then redness, swelling, tenderness and often blistering or crusting over the following days. The area may weep briefly. Full aftercare instructions are given, and following them is the main thing that protects the outcome.",
        },
        {
          lead: "Pigment change and Malaysian skin",
          body: "Medium and deeper skin tones carry a higher chance of hypopigmentation, where treated skin ends up lighter than the surrounding area, and of post-inflammatory hyperpigmentation. Both are why conservative settings and long intervals are used here, and why a test patch matters.",
        },
        {
          lead: "Scarring and ink darkening",
          body: "Scarring is uncommon but possible, particularly if crusts are picked or if sessions are spaced too closely. Some pigments, notably white and flesh-tone cosmetic ink, can darken on contact with laser energy. Test patching is how that is found out on a small area rather than a large one.",
        },
        {
          lead: "What treatment cannot do",
          body: "Complete clearance cannot be promised for any tattoo. Yellow and pastel inks often persist after everything else has gone, and a faint shadow or a change in skin texture where the tattoo was is a common end point. Removal does not restore the skin to how it looked before the tattoo, and no one can tell you in advance exactly how many sessions yours will take.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant or breastfeeding, take photosensitising medication or oral acne medication, have a history of keloid scarring or cold sores, have a condition affecting immune function or healing, have tanned recently, or have had the tattoo treated anywhere else before.",
    },

    // ── 14
    costFactors: {
      intro:
        "Costs are not published because they depend on the tattoo. What they depend on is worth knowing before you come in:",
      factors: [
        "The size of the piece, and how densely the ink is packed within it.",
        "How many colours are present, since some need a different wavelength from the rest.",
        "Where it sits on the body, which affects both technique and how the area is expected to clear.",
        "How many sessions, which is reviewed at each visit rather than fixed in advance.",
        "Whether a test patch is carried out first, which is standard for colours and cosmetic pigment.",
      ],
      outro:
        "The doctor will go through the specifics with you at the consultation, including how sessions are spaced and how the plan is reviewed as the tattoo fades, before you commit to anything.",
    },

    // ── 15
    technologyIntro:
      "Different ink colours absorb different wavelengths, so a platform with only one wavelength can only reach some of a tattoo. Having more than one means the doctor can match the wavelength to the colour in front of them rather than to what the machine happens to offer.",

    // ── 16
    faqs: [
      {
        q: "Can a tattoo be completely removed?",
        a: "Sometimes, but it cannot be promised for any tattoo before it has been treated. Black and dark blue generally clear most predictably, while yellow, pastel and some cosmetic pigments often persist after everything else has gone. A faint shadow or a subtle change in skin texture where the tattoo sat is a common end point. A doctor should tell you what is realistic for your piece before you start.",
      },
      {
        q: "How many sessions will it take?",
        a: "There is no fixed number, and anyone giving you one before examining the tattoo is guessing. It depends on the colours, how deeply and densely the ink was placed, the size, where it sits on the body, your skin tone and how well you heal. The tattoo is reviewed at every visit and the plan is adjusted as it fades, which is more honest than selling a package up front.",
      },
      {
        q: "Why do sessions have to be spaced so far apart?",
        a: "Because the laser does not remove ink. It fragments it, and your own immune system carries the fragments away over the following weeks. The interval is when the actual clearing happens. Treating sooner adds heat and risk to skin that has not finished recovering, without giving the body time to do its part. Patience between sessions genuinely affects the outcome.",
      },
      {
        q: "Does it hurt?",
        a: "It is generally described as more uncomfortable than getting the tattoo, though it is over far more quickly. People often compare it to a hot elastic band snapping against the skin. Numbing cream is applied beforehand and cooling is used during and after. Bony areas such as the ribs, ankles and hands are felt more. Raise it at the consultation if pain is a particular concern.",
      },
      {
        q: "Will it leave a scar?",
        a: "Scarring is uncommon when treatment is spaced properly and aftercare is followed, but it is a real risk rather than a theoretical one. Picking at crusts or blisters is the most avoidable cause. Existing scarring from the original tattooing may also become more visible once the ink covering it is gone, which the doctor should point out at the assessment.",
      },
      {
        q: "Is it safe on darker skin?",
        a: "Yes, with the right wavelength, conservative settings and longer intervals. The specific issue is that melanin in the skin competes with the ink for laser energy, which raises the chance of the treated area ending up lighter or darker than the surrounding skin. This is exactly what a test patch is for, and why treatment here is deliberately slower than you may have seen elsewhere.",
      },
      {
        q: "Can eyebrow or lip tattoos be removed?",
        a: "They can be assessed, but they are among the least predictable pigments to treat. Cosmetic formulations vary widely, are rarely documented, and some contain compounds that darken on contact with laser energy rather than fading. A test patch on a small, discreet area is standard practice before treating anything on the face, and the assessment may conclude that treatment is not advisable.",
      },
      {
        q: "What do I need to do afterwards?",
        a: "Keep the area clean, dry and covered as instructed, do not pick at blisters or crusts, avoid swimming pools, saunas and heavy exercise until it has settled, and keep it out of the sun completely. Sun exposure on treated skin is the most common cause of pigment change afterwards. Your doctor will give you specific written instructions for the area you have had treated.",
      },
    ],

    // ── 17
    relatedConcerns: [
      {
        slug: "pigmentation",
        reason: "Pigment change after removal is assessed the same way as any other.",
      },
      {
        slug: "birthmark",
        reason: "Pigmented marks are treated with related laser principles.",
      },
      {
        slug: "acne",
        reason: "Texture change left behind is assessed alongside scarring of any origin.",
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
