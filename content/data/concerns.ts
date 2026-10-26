import type { Concern } from "@/lib/types";
// Relative + import attribute, not the "@/" alias: the validate:* scripts load
// this module through node --experimental-strip-types, which resolves neither.
import registry from "../../config/concerns.json" with { type: "json" };

// All sixteen concerns are fully authored against the template (acne-scars and
// melasma added 2026-10-11, docs/15 3.3 and 3.5), with acne as the
// concern-pillar showcase (docs/06 §5.3). Copy and media were trimmed on
// 2026-10-12: decorative stock figures and slides removed, legacy framed
// before/after composites taken out of `visitImages`, duplicate and
// claim-bearing `results` dropped, and three tab diagrams (skin-depth,
// under-eye, face-layers) drawn as components instead of photographs.
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
    image: "https://cdn.kaiteki.my/concerns/acne/card.jpg",
    summary:
      "Active breakouts and old scarring respond to different treatments.",
    leadAnswer:
      "Acne is a common skin condition in which pores become blocked with oil and dead skin, leading to blackheads, inflamed spots and sometimes scarring. Active acne is usually managed medically first, and energy-based treatment is considered for the marks and scars it leaves.",
    treatments: [
      "pico-laser",
      "microneedling",
      "exosome-therapy",
      "resurfacing-laser",
      "facial-treatments",
    ],
    reviewedBy: "dr-jen-meng",
    lastReviewed: "2026-06-22",
    seoTitle: "Acne Treatment in Malaysia: Types & Causes | Kaiteki",
    seoDescription:
      "Active acne and acne scarring are different problems with different treatments. A doctor assesses which you have. Book a free consultation at Kaiteki.",

    // ── 01 · the banner pair. Subject hard left, headline in the right half.
    // The alt describes the illustrative photograph as what it is: this is not
    // a Kaiteki patient and not a result, so it must not read as either.
    // Pexels (pexels.com/photo/5468704), wall extended right; uploaded by hand
    // (`manual` in config/concern-media.json).
    banner: {
      src: "https://cdn.kaiteki.my/concerns/acne/banner.jpg",
      sm: "https://cdn.kaiteki.my/concerns/acne/banner-mobile.jpg",
      alt: "Illustrative photograph: a woman in a white bathrobe touching her chin, with small blemishes on her cheek and jaw, against a plain off-white wall",
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
        value: "Medical first",
        label:
          "Active inflamed acne is usually settled with topical or oral treatment before any device is considered.",
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
          "Acne occurs when hair follicles become blocked with oil and dead skin cells. That blockage can stay quiet as a blackhead or whitehead, or it can become inflamed and form a red, tender spot.",
        ],
      },
    ],

    // ── 04 · archetype A: causes. Bold lead-in per bullet — scannable, and the
    // shape an assistant quotes cleanly.
    drivers: {
      heading: "Common causes",
      intro:
        "Usually several of these at once:",
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
    },

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
          body: "Spots that are currently forming.",
          routing:
            "medical management first, with clinic facials or RF microneedling considered as support once the doctor advises it.",
        },
        {
          label: "Marks",
          sub: "Flat red or brown",
          title: "Post-acne marks",
          body: "Flat discolouration left after a spot heals. The skin is smooth; only the colour differs. Marks often fade on their own over months.",
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
          routing: "pico laser.",
        },
        {
          label: "Scarring",
          sub: "Texture you can feel",
          title: "Acne scarring",
          body: "A change in the skin's structure you can feel as a dip or a raised area. Scars do not fade on their own.",
          routing:
            "RF microneedling or resurfacing laser, often over several sessions, with combinations chosen by scar type.",
        },
      ],
    },

    // ── 05 media · the active-acne type illustrations. The scar die-cuts live on
    // /concerns/acne-scars only (they were exact duplicates here). Transparent
    // scalloped die-cuts: they sit on the page ground, never on a tinted band.
    illustrations: [
      {
        src: "https://cdn.kaiteki.my/concerns/acne/image-comedonal.png",
        label: "Comedonal",
        sub: "Blackheads and whiteheads, no redness",
        group: "Types of active acne",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/acne/image-inflammatory.png",
        label: "Inflammatory",
        sub: "Red, raised and tender",
        group: "Types of active acne",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/acne/image-cystic.png",
        label: "Nodulocystic",
        sub: "Deep, painful, scars most readily",
        group: "Types of active acne",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/acne/image-hormonal.png",
        label: "Hormonal pattern",
        sub: "Jaw, chin and lower face",
        group: "Types of active acne",
      },
    ],

    // ── 06 · where it appears. The closing differential card is the honest part,
    // and the part most likely to be cited.
    locationBlock: {
      heading: "Where acne appears",
      intro:
        "Location is a clue, not a diagnosis.",
      cards: [
        {
          title: "Chin and jawline",
          body: "Often follows a hormonal pattern, particularly in adult women, and can flare in a monthly cycle.",
        },
        {
          title: "Forehead",
          body: "Commonly linked to oil, sweat, hair products and friction from caps, helmets or fringes.",
        },
        {
          title: "Cheeks",
          body: "Friction and contact are frequent contributors: phone screens, pillowcases, mask edges.",
        },
        {
          title: "Nose",
          body: "Dense oil glands mean blackheads and visible pores are common here.",
        },
        {
          title: "Back, chest and shoulders",
          body: "Sweat, friction and heavier body products play a part. Lesions here can be larger and are more likely to leave raised rather than depressed scars.",
        },
      ],
      note: {
        title: "Not typical acne?",
        body: "Small uniform bumps that itch, or rashes that do not respond to acne treatment, may be something else entirely, such as folliculitis or rosacea.",
      },
    },

    // ── 07
    seeDoctor: {
      intro: "See a doctor if:",
      triggers: [
        "Over-the-counter products have not helped after around eight to twelve weeks of consistent use.",
        "Spots are deep, painful or leaving marks behind.",
        "Breakouts started in adulthood, or changed pattern suddenly.",
        "Your acne is affecting your mood, confidence or how you go about your day.",
      ],
    },

    // ── 08
    ctaMid: {
      heading: "Not sure which one you're dealing with?",
      body: "Send us a photo on WhatsApp and a doctor can tell you whether you're looking at active acne, marks, scarring, or a combination.",
    },

    // ── 09 · the "why for acne" line on every card is what stops five concern
    // pages that share this treatment list from competing with each other (R-04).
    treatmentsIntro:
      "Treatments considered for acne at Kaiteki, by what each addresses:",
    treatmentWhy: {
      "pico-laser": {
        why: "For post-acne marks and uneven tone",
        body: "A picosecond laser that targets pigment in short, high-speed pulses.",
      },
      microneedling: {
        why: "For depressed scarring, texture and enlarged pores",
        body: "Fine needles deliver radiofrequency energy into the deeper layer of the skin to stimulate collagen. Often the starting point for rolling and boxcar scarring, and generally considered a lower pigmentation-risk option for medium and deeper skin tones.",
      },
      "resurfacing-laser": {
        why: "For deeper scarring and significant texture change",
        body: "A fractional CO₂ laser used where scarring is more established. More downtime than the options above.",
      },
      "exosome-therapy": {
        why: "Used alongside other treatments, not instead of them",
        body: "A regenerative approach applied after energy-based treatment to support skin recovery. The evidence base is still developing.",
      },
      "facial-treatments": {
        why: "For congestion, cleansing and ongoing maintenance",
        body: "Hydrafacial and Silkpeel are used to support cleansing and exfoliation, particularly with comedonal congestion. They do not replace medical treatment for inflammatory acne.",
      },
    },

    // ── 10 · full depth only. "Commonly considered", never "best suited" (R-02),
    // and no column promises a result or a timeframe to one.
    compare: {
      intro:
        "A general guide. Combinations are common, and sessions are set after assessment.",
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
      ],
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
      // before-after-07…11 and -13 were removed: they re-frame the cases in
      // -01…06 in the legacy pink "Acne Treatment" template (the same patients
      // shown twice).
      { src: "https://cdn.kaiteki.my/concerns/acne/before-after-12.jpg", nativeWidth: 600, ratio: "1/1", caption: "Skin texture and tone, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/acne/before-after-14.jpg", nativeWidth: 1412, ratio: "1/1", caption: "Acne scarring, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/acne/before-after-15.jpg", nativeWidth: 1415, ratio: "1/1", caption: "Acne scarring, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/acne/before-after-16.jpg", nativeWidth: 1735, ratio: "5/4", caption: "Acne and post-acne marks, before and after a course of treatment at Kaiteki" },
    ],

    // ── 12
    firstVisit: {
      intro:
        "The first job is telling apart what is active, what is marking and what is scarring.",
      steps: [
        {
          title: "History",
          body: "What you've tried, and any medication or skincare you currently use.",
        },
        {
          title: "Examination",
          body: "The doctor examines your skin, sometimes under magnification.",
        },
        {
          title: "Discussion and plan",
          body: "Options, risks and downtime, with no obligation to proceed.",
        },
      ],
    },

    // ── 12 media · no visitImages: the three legacy "procedure" files were
    // framed before/after composites, which this block must never show.

    // ── 13 · the PIH paragraph is the most locally relevant thing on the page,
    // and "what treatment cannot do" is mandatory (R-05).
    risks: {
      items: [
        {
          lead: "Common and usually temporary",
          body: "Redness, swelling, dryness, flaking and a warm or gritty sensation for a few days. Less common effects include prolonged redness, blistering, infection, or a change in skin pigment.",
        },
        {
          lead: "Pigment change and Malaysian skin",
          body: "Medium and deeper skin tones, common across Malaysia, carry a higher chance of post-inflammatory hyperpigmentation after energy-based treatment. This is why doctors here often choose gentler settings and longer intervals between sessions.",
        },
        {
          lead: "Sun protection is not optional",
          body: "Daily broad-spectrum sunscreen is part of the plan for every treatment listed above, both before and after.",
        },
        {
          lead: "What treatment cannot do",
          body: "Ice-pick scarring rarely resolves fully with energy devices alone. Acne can recur after treatment, because treating marks or scars does not change the tendency to break out. Improvement builds gradually over months as collagen remodels.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant or breastfeeding, take or recently took oral acne medication, have a history of cold sores, keloid scarring or recent tanning, or have had any skin procedure in the past few weeks. Any of these may change what is appropriate or when.",
    },

    // ── 14 · factors only, no figures (R-03). Structured as a list so it can
    // become a price table later without restructuring the page.
    costFactors: {
      intro:
        "Pricing is set after assessment. It depends on:",
      factors: [
        "What is being treated: marks generally need a different approach from structural scarring.",
        "The area: full face, targeted zone, or back and chest.",
        "The treatment and device: different platforms have different session structures.",
        "How many sessions: set after assessment, and adjusted at review as your skin responds.",
        "Whether treatments are combined: mixed scarring sometimes responds better to more than one modality.",
      ],
    },

    // ── 16 · eight questions (full depth), short answers, all in the DOM (R-10).
    faqs: [
      {
        q: "Can acne scarring be treated?",
        a: "Depressed scarring can often be improved, though rarely erased. How much improvement is realistic depends heavily on scar type: rolling and boxcar scars usually respond better than ice-pick scars, which are narrow and deep. See the acne scars page for each scar type.",
      },
      {
        q: "Why does adult acne happen?",
        a: "Adult acne is usually multi-factorial. Hormonal fluctuation is a frequent contributor, particularly for women with breakouts around the jawline and chin that follow a cycle. It's also common for adult acne to look different from teenage acne: fewer spots, but deeper and slower to settle.",
      },
      {
        q: "Will treatment make my acne worse first?",
        a: "Some medical acne treatments involve an initial adjustment period where the skin appears worse before it improves. Energy-based treatments don't typically cause a flare, but they can leave redness or dryness for a few days.",
      },
      {
        q: "Is laser treatment safe for darker or Asian skin tones?",
        a: "Yes, when the device and settings are chosen appropriately by a doctor who is experienced with your skin type. The specific concern with medium and deeper skin tones is post-inflammatory hyperpigmentation, the skin responding to treatment by producing extra pigment. It's a real consideration, not a reason to avoid treatment.",
      },
      {
        q: "Can I wear makeup after treatment?",
        a: "After minimal-downtime treatments, makeup can usually be applied the following day. After RF microneedling, most people wait until the redness settles, typically two to three days. After resurfacing laser, longer: the skin needs to re-epithelialise first.",
      },
      {
        q: "Will my acne come back after treatment?",
        a: "Possibly. Acne is a chronic condition for many people, with periods of flare and quiet. That's why the plan usually includes a maintenance element: appropriate daily skincare, sun protection, and ongoing medical management where indicated.",
      },
      {
        q: "Do I need to stop my current skincare or acne medication?",
        a: "Don't stop anything without telling your doctor first. Some products, retinoids and exfoliating acids in particular, are usually paused for a period before and after energy-based treatment.",
      },
      {
        q: "Is treatment painful?",
        a: "Most people describe energy-based treatments as uncomfortable rather than painful. Topical numbing cream is applied beforehand where appropriate, and cooling is used during and after. RF microneedling is generally felt more than pico laser.",
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
        slug: "acne-scars",
        reason: "Ice pick, boxcar, rolling and raised scars, and which treatment suits each.",
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

  // docs/15 item 3.3 (2026-10-11). A new page, so there is no copy of its own
  // to rearrange: every clinical line is lifted from text that already names a
  // reviewer — the acne page's scarring material (the scar types, the routing,
  // the ice-pick limit, the PIH paragraph, the scar FAQs), the PicoSure,
  // fractional CO2 and microneedling pages. No new claim, no figure. It is NOT
  // in config/concern-signoff.json, so it renders without a byline until a
  // doctor signs it off; `reviewedBy` is the proposed reviewer, chosen to keep
  // the client's even spread (Dr Hong carried 3 pages).
  // Deliberately absent: dermal fillers and subcision. No reviewed copy covers
  // either for acne scars, and subcision is still an open client question.
  {
    slug: "acne-scars",
    name: "Acne Scars",
    group: "Skin",
    image: "https://cdn.kaiteki.my/concerns/acne-scars/card-2.jpg",
    summary:
      "Acne scars are a change in the skin's structure, not its colour, and the type of scar decides what is likely to help.",
    leadAnswer:
      "Acne scarring is a change in the skin's structure, felt as a dip or an irregularity once inflammation has settled. Scars do not fade on their own; they are remodelled gradually, over months. Pico laser is mainly for flat marks rather than texture, so depressed scars usually start with RF microneedling or a resurfacing laser.",
    treatments: ["microneedling", "resurfacing-laser", "pico-laser", "exosome-therapy"],
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-10-11",
    seoTitle: "Acne Scar Treatment in Malaysia | Kaiteki",
    seoDescription:
      "Ice pick, boxcar, rolling and raised acne scars respond to different treatments. A doctor assesses which you have. Book a free consultation at Kaiteki.",

    // ── 01 · Pexels (pexels.com/photo/9253763), skin close-up faded into the
    // page on the right; uploaded by hand (`manual` in config/concern-media.json).
    // Illustrative stock photography: not a patient, not a result.
    banner: {
      src: "https://cdn.kaiteki.my/concerns/acne-scars/banner-skin.jpg",
      sm: "https://cdn.kaiteki.my/concerns/acne-scars/banner-skin-mobile.jpg",
      alt: "Illustrative photograph: close-up of a cheek with uneven texture and marks left by past breakouts",
    },

    // ── 02 · three process facts, no time-to-result (R-01).
    facts: [
      {
        value: "Texture, not colour",
        label: "A scar is a change in the skin's structure you can feel, not only a mark you can see.",
      },
      {
        value: "Type decides the plan",
        label: "Ice pick, boxcar, rolling and raised scars respond to different approaches.",
      },
      {
        value: "Acne settled first",
        label: "Scar treatment usually starts once active breakouts are under control.",
      },
    ],

    sections: [
      {
        heading: "What are acne scars?",
        body: [
          "A scar is a change in the skin's structure, felt as a dip or a raised area. A mark is flat: red or brown discolouration on smooth skin.",
        ],
      },
    ],

    // ── 04 · archetype A: what raises the chance of scarring.
    drivers: {
      heading: "What makes acne more likely to scar",
      intro: "Scarring follows inflammation. What raises the chance of it:",
      items: [
        {
          lead: "Deep, cystic breakouts:",
          body: "deep, firm, painful lumps under the skin that do not come to a head carry the highest risk of permanent scarring.",
        },
        {
          lead: "Untreated inflammation:",
          body: "the longer deep, inflamed acne goes on, the more chance it leaves permanent change.",
        },
        {
          lead: "Where the acne sits:",
          body: "cheeks mark and scar readily, and lesions on the back, chest and shoulders are more likely to leave raised rather than depressed scars.",
        },
      ],
    },

    // ── 05 · the differentiator: the scar types, and the flat marks that are
    // not scars at all, which is where pico laser belongs.
    variant: {
      kind: "tabs",
      heading: "Which kind of scar do I have?",
      intro:
        "Most people have more than one type.",
      tabs: [
        {
          label: "Depressed",
          sub: "Dips you can feel",
          title: "Depressed scars",
          body: "Dips below the skin surface.",
          items: [
            {
              lead: "Ice pick:",
              body: "narrow, deep, sharply defined pits.",
            },
            {
              lead: "Boxcar:",
              body: "wider depressions with defined edges, like a shallow crater.",
            },
            {
              lead: "Rolling:",
              body: "soft, wave-like undulations caused by tethering beneath the skin.",
            },
          ],
          routing:
            "RF microneedling or resurfacing laser, often over several sessions, with combinations chosen by scar type.",
        },
        {
          label: "Raised",
          sub: "Firm, above the skin",
          title: "Raised scars (hypertrophic or keloid)",
          body: "Firm, thickened tissue sitting above skin level. More common on the chest, shoulders and back.",
          routing: "a separate assessment, because the approach differs from depressed scarring.",
        },
        {
          label: "Marks",
          sub: "Flat red or brown",
          title: "Marks, not scars",
          body: "Flat red or brown discolouration on smooth skin. Not a scar, and often fades on its own over months.",
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
          routing: "pico laser.",
        },
      ],
    },

    // ── 05 media · the acne page's scar-type die-cuts, already on the CDN.
    illustrations: [
      {
        src: "https://cdn.kaiteki.my/concerns/acne-scars/image-ice-pick-scars.png",
        label: "Ice pick scars",
        sub: "Narrow, deep, sharply defined",
        group: "Types of scarring",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/acne-scars/image-boxcar-scars.png",
        label: "Boxcar scars",
        sub: "Wider depressions with defined edges",
        group: "Types of scarring",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/acne-scars/image-rolling-scars.png",
        label: "Rolling scars",
        sub: "Broad, soft-edged undulations",
        group: "Types of scarring",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/acne-scars/image-hypertrophic-and-keloid-scars.png",
        label: "Raised scars",
        sub: "Hypertrophic and keloid",
        group: "Types of scarring",
      },
    ],

    // ── 07
    seeDoctor: {
      intro: "Have it assessed if:",
      triggers: [
        "You are already seeing indentations or texture change.",
        "You still have active breakouts.",
        "A scar is raised and firm.",
      ],
    },

    // ── 08
    ctaMid: {
      heading: "Not sure whether it's a scar or a mark?",
      body: "Send us a photo on WhatsApp and a doctor can tell you whether you're looking at scarring, flat marks, or a combination.",
    },

    // ── 09 · "why for X" lines unique across all concern pages (R-04, Q-03).
    treatmentsIntro:
      "Which treatment fits depends on scar type, skin tone and how much recovery time you can plan around.",
    treatmentWhy: {
      microneedling: {
        why: "For rolling and boxcar scars, including on deeper skin tones",
        body: "Fine needles deliver radiofrequency energy into the deeper layer of the skin to stimulate collagen.",
      },
      "resurfacing-laser": {
        why: "For established scarring, where the recovery time works for you",
        body: "A fractional CO₂ laser used where scarring is more established.",
      },
      "pico-laser": {
        why: "For the flat marks around scars, rather than the dips themselves",
        body: "A picosecond laser that targets pigment in short, high-speed pulses.",
      },
      "exosome-therapy": {
        why: "To support the skin after scar treatment, as an adjunct",
        body: "A regenerative approach applied after energy-based treatment to support skin recovery. The evidence base is still developing.",
      },
    },

    // ── 10 · full depth. "Commonly considered", never "best suited" (R-02).
    compare: {
      intro:
        "A general guide. Combinations are common, and sessions are set after assessment.",
      columns: ["What you have", "Commonly considered", "Typical course", "Downtime"],
      rows: [
        ["Rolling & boxcar scars", "RF microneedling", "Several sessions, ~4 weeks apart", "2–3 days redness"],
        ["Deeper or mixed scarring", "Resurfacing laser, or a combination", "Assessed individually", "5–7 days"],
        ["Ice pick scars", "Assessed individually", "Individual", "Individual"],
        [
          "Raised or keloid scars",
          "Assessed separately: different approach",
          "Individual",
          "Individual",
        ],
        ["Flat red or brown marks", "Pico laser + daily sun protection", "Multiple sessions, spaced", "Minimal"],
      ],
    },

    // ── 12
    firstVisit: {
      intro:
        "The examination separates the scar types from flat marks, because each is approached differently.",
      steps: [
        {
          title: "History",
          body: "How long the scarring has been there, and whether you still break out.",
        },
        {
          title: "Examination",
          body: "The doctor examines your skin, sometimes under magnification.",
        },
        {
          title: "Discussion and plan",
          body: "Options, risks and downtime, with no obligation to proceed.",
        },
      ],
    },
    // procedure-01/02 (framed legacy before/after composites) removed: this
    // block shows a device in use, never an outcome.
    visitImages: [
      {
        src: "https://cdn.kaiteki.my/concerns/acne-scars/procedure-03.png",
        caption: "A resurfacing laser for scarring in progress. The depth is set by the type of scar and your skin tone.",
      },
    ],

    // An illustration, not a photograph: the before-and-afters on file are the
    // acne page's, and none is borrowed. The caption says so up front, and the
    // shared results disclaimer still renders beneath it.
    results: [
      {
        src: "https://cdn.kaiteki.my/concerns/acne-scars/before-after-01.png",
        nativeWidth: 1200,
        ratio: "1.71/1",
        illustration: true,
        caption: "Illustration, not a patient result: collagen remodelling can make the edges of some depressed scars shallower",
      },
    ],

    // ── 13 · R-05: "what treatment cannot do" is mandatory.
    risks: {
      items: [
        {
          lead: "Common and usually temporary",
          body: "Redness, swelling, dryness, flaking and a warm or gritty sensation for a few days. Less common effects include prolonged redness, blistering, infection, or a change in skin pigment.",
        },
        {
          lead: "Pigment change and Malaysian skin",
          body: "Medium and deeper skin tones, common across Malaysia, carry a higher chance of post-inflammatory hyperpigmentation after energy-based treatment. This is why doctors here often choose gentler settings and longer intervals between sessions.",
        },
        {
          lead: "Sun protection is not optional",
          body: "Daily broad-spectrum sunscreen is part of the plan for every treatment listed above, both before and after.",
        },
        {
          lead: "What treatment cannot do",
          body: "Scars are improved, rarely erased, and ice pick scars rarely resolve with energy devices alone. Treating scars does not stop new breakouts. Collagen remodels over months.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant or breastfeeding, take or recently took oral acne medication, have a history of cold sores, keloid scarring or recent tanning, or have had any skin procedure in the past few weeks. Any of these may change what is appropriate or when.",
    },

    // ── 14 · factors only, no figures (R-03).
    costFactors: {
      intro:
        "Pricing is set after assessment. It depends on:",
      factors: [
        "The type of scarring: rolling and boxcar scars, ice pick scars and raised scars are approached differently.",
        "The area: full face, targeted zone, or back and chest.",
        "The treatment and device: different platforms have different session structures.",
        "How many sessions: set after assessment, and adjusted at review as your skin responds.",
        "Whether treatments are combined: mixed scarring sometimes responds better to more than one modality.",
      ],
    },

    // ── 16 · eight questions (full depth), all from reviewed copy.
    faqs: [
      {
        q: "Can acne scars be removed completely?",
        a: "Depressed scarring can often be improved, though rarely erased. Treatments like RF microneedling and resurfacing lasers work by stimulating the skin to remodel its own collagen, which takes place gradually over months rather than immediately.",
      },
      {
        q: "Is pico laser used for acne scars?",
        a: "Pico laser is most relevant to the flat marks and discolouration acne leaves, rather than to the texture of a scar. Some pico devices carry a fractional lens array that the manufacturer indicates for acne scars in skin types I to IV.",
      },
      {
        q: "Can ice pick scars be treated?",
        a: "Ice pick scars are narrow, deep pits and the hardest type to treat with energy devices alone; they rarely resolve fully that way. Rolling and boxcar scars usually respond better.",
      },
      {
        q: "Can I treat my scars while I still have active acne?",
        a: "Usually not yet. Treating scarring while acne is still active usually does not work well, and treating active acne will not remove existing scars.",
      },
      {
        q: "Is laser treatment for acne scars safe on Asian skin?",
        a: "Yes, when the device and settings are chosen appropriately by a doctor who is experienced with your skin type. The specific concern with medium and deeper skin tones is post-inflammatory hyperpigmentation, the skin responding to treatment by producing extra pigment. It's a real consideration, not a reason to avoid treatment.",
      },
      {
        q: "What is the downtime after acne scar treatment?",
        a: "After RF microneedling, most people wait until the redness settles, typically two to three days. After fractional CO2 resurfacing, expect redness, swelling and a hot, tight feeling for the first day or two, then several days of bronzing and flaking; a lighter session commonly settles within about a week, and deeper settings take longer.",
      },
      {
        q: "Is acne scar treatment painful?",
        a: "Most people describe energy-based treatments as uncomfortable rather than painful. Topical numbing cream is applied beforehand where appropriate, and cooling is used during and after. Ablative resurfacing is more uncomfortable than non-ablative treatments, and RF microneedling is generally felt more than pico laser.",
      },
      {
        q: "Can acne scars on the back or chest be treated?",
        a: "Yes, though these areas behave differently from the face. Skin on the back and chest is thicker, lesions there tend to be larger, and scarring is more likely to be raised than depressed, which calls for a different approach entirely.",
      },
    ],

    // ── 17
    relatedConcerns: [
      {
        slug: "melasma",
        reason: "Melasma on its own: why laser needs caution, depth, and what managing it involves.",
      },
      {
        slug: "acne",
        reason: "Active breakouts come first: scarring is usually treated once acne is under control.",
      },
      {
        slug: "pigmentation",
        reason: "Brown marks after spots overlap with uneven tone and pigmentation.",
      },
      {
        slug: "enlarged-pores",
        reason: "Texture and pores are often treated with the same devices as scarring.",
      },
    ],

    // ── 18
    ctaHeading: "Find out which scars you have",
    ctaAssesses: "your scarring",
  },

  {
    slug: "pigmentation",
    name: "Pigmentation",
    group: "Skin",
    image: "https://cdn.kaiteki.my/concerns/pigmentation/card.jpg",
    summary:
      "Melasma, sun spots and post-inflammatory marks each behave differently.",
    leadAnswer:
      "Pigmentation describes areas of darker skin, most commonly sun spots, melasma and marks left after inflammation. They can look alike but are managed differently: sun spots are often treated with pico laser, melasma is managed conservatively and long-term, and post-inflammatory marks usually start with treating the cause.",
    treatments: [
      "pico-laser",
      "skin-booster",
      "vascular-pigment-laser",
      "resurfacing-laser",
      "facial-treatments",
    ],
    reviewedBy: "dr-hong-peiyi",
    lastReviewed: "2026-06-20",
    seoTitle: "Pigmentation Treatment Options in Malaysia | Kaiteki",
    seoDescription:
      "Melasma, sun spots and post-inflammatory marks need different care. A doctor assesses your pigmentation before any treatment. Book a free consultation.",
    // ── 01 · Pexels (pexels.com/photo/7479572), skin close-up faded into the
    // page on the right; uploaded by hand (`manual` in config/concern-media.json).
    banner: {
      src: "https://cdn.kaiteki.my/concerns/pigmentation/banner-skin.jpg",
      sm: "https://cdn.kaiteki.my/concerns/pigmentation/banner-skin-mobile.jpg",
      alt: "Illustrative photograph: close-up of skin with patches of brown pigmentation of varying size",
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
          "Skin colour comes from melanin, made by cells called melanocytes. Pigmentation becomes a concern when melanin is produced or distributed unevenly, leaving patches darker than the surrounding skin.",
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
        "Usually more than one at once:",
      items: [
        {
          lead: "Sun and UV exposure:",
          body: "the most consistent contributor in a country with year-round equatorial UV. It both triggers new pigment and darkens what is already there, including through cloud and window glass.",
        },
        {
          lead: "Hormonal change:",
          body: "pregnancy, hormonal contraception and thyroid conditions are all associated with melasma.",
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
    },

    // ── 05 · the differentiator. Three tabs, each with a routing line, because
    // the treatment decision on this page is made almost entirely by type.
    variant: {
      kind: "tabs",
      heading: "Which type do I have?",
      // Where each type's pigment sits, drawn beside the tabs (replaces the
      // five captionless stock "stage" photos). Mapping to be confirmed by the
      // reviewing doctor: sun spots epidermal; melasma and PIH can be either.
      diagram: "skin-depth",
      intro:
        "These three account for most cases.",
      tabs: [
        {
          depth: "epidermis",
          label: "Sun spots",
          sub: "Defined brown patches",
          title: "Sun-related pigmentation",
          body: "Discrete, fairly well-defined brown patches on the areas that catch the most light. They accumulate slowly over years and do not fade in the way a tan does.",
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
          routing: "commonly assessed for pico laser.",
        },
        {
          depth: "both",
          label: "Melasma",
          sub: "Symmetrical, blurred edges",
          title: "Melasma",
          body: "Larger, symmetrical patches with soft, ill-defined edges, typically across the cheeks, upper lip, forehead and jaw. It is hormone-influenced and heat-sensitive.",
          items: [
            {
              lead: "It fluctuates:",
              body: "it darkens with sun, heat and hormonal shifts, and lightens again in quieter periods.",
            },
          ],
          routing:
            "assessed cautiously: conservative settings, longer intervals, daily protection.",
        },
        {
          depth: "both",
          label: "Post-inflammatory",
          sub: "Marks after a spot heals",
          title: "Post-inflammatory hyperpigmentation",
          body: "Flat brown or grey-brown marks exactly where something happened: a spot, scratch, eczema or insect bite.",
          items: [
            {
              lead: "It follows the injury:",
              body: "the shape of the mark matches whatever caused it, which is usually the clearest way to tell it apart from melasma.",
            },
            {
              lead: "It often fades on its own:",
              body: "though slowly, over months, and sun exposure prolongs it.",
            },
          ],
          routing:
            "settling the underlying cause first, then pico laser or supportive treatment if the mark persists.",
        },
      ],
    },

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
          body: "Sun exposure dominates here.",
        },
        {
          title: "Nose and bridge",
          body: "Catches direct light all day, so freckles and solar lentigines cluster here.",
        },
        {
          title: "Neck, chest and hands",
          body: "Frequently overlooked and frequently the most sun-damaged. Skin here is thinner, heals more slowly and is treated more conservatively than the face.",
        },
      ],
      note: {
        title: "Not typical pigmentation?",
        body: "A mark that is changing in size, shape or colour, has an irregular border, itches or bleeds should be examined promptly.",
      },
    },

    // ── 07
    seeDoctor: {
      intro: "Have it looked at if:",
      triggers: [
        "Over-the-counter brightening products have not helped after a few months of consistent use.",
        "The patches are spreading, or returning each time they fade.",
        "The pigmentation followed acne, eczema or a cosmetic procedure.",
      ],
    },

    // ── 08
    ctaMid: {
      heading: "Sun spots or melasma?",
      body: "Send us a photo on WhatsApp and a doctor can tell you which you are looking at.",
    },

    // ── 09
    treatmentsIntro:
      "Which one fits depends on the type:",
    treatmentWhy: {
      "pico-laser": {
        why: "For sun spots, freckles and stubborn pigment",
        body: "A picosecond laser that shatters pigment with very short pulses rather than heating the surrounding skin.",
      },
      "vascular-pigment-laser": {
        why: "For redness sitting under the brown",
        body: "Targets both pigment and superficial blood vessels.",
      },
      "resurfacing-laser": {
        why: "For pigment bound up with texture change",
        body: "A fractional laser used where uneven tone sits alongside roughness, sun damage or scarring rather than on its own. More downtime.",
      },
      "skin-booster": {
        why: "For dull, dehydrated skin around the patches",
        body: "Injectable hydration that addresses the overall quality of the skin rather than the pigment itself.",
      },
      "facial-treatments": {
        why: "For gentle exfoliation between laser sessions",
        body: "Hydrafacial and Silkpeel support surface cell turnover without the heat or aggression that aggravates melasma.",
      },
    },

    // ── 10
    compare: {
      intro:
        "A general guide. Mixed pigmentation is common; sessions are set after assessment.",
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
      ],
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
      // -10…13 removed (the cases in -03…06 again, in the pink legacy frame);
      // -14 removed (burned-in QR code and device brand name).
    ],

    // ── 12
    firstVisit: {
      intro:
        "The examination reads the pattern and how deep the pigment sits, sometimes under a Wood's lamp.",
      steps: [
        {
          title: "History",
          body: "Whether it followed pregnancy, contraception, acne or a procedure.",
        },
        {
          title: "Examination",
          body: "The doctor examines your skin, sometimes under magnification.",
        },
        {
          title: "Discussion and plan",
          body: "Options, risks and downtime, with no obligation to proceed.",
        },
      ],
    },
    visitImages: [
      {
        src: "https://cdn.kaiteki.my/concerns/pigmentation/procedure-02.png",
        caption: "A picosecond laser session in progress. Eye shields stay on for every laser treatment to the face.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/pigmentation/procedure-03.png",
        caption: "The doctor works across the area in passes, adjusting the settings to the type of pigment being treated.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/pigmentation/procedure-04.png",
        caption: "Pigment treatment is carried out at the clinic, and the plan is reviewed at each visit.",
      },
    ],

    // ── 13
    risks: {
      items: [
        {
          lead: "Common and usually temporary",
          body: "Redness, mild swelling, dryness and a gritty or warm sensation for a few days. Treated spots may darken and flake before they lift. Less common effects include blistering, prolonged redness or infection.",
        },
        {
          lead: "Pigment change and Malaysian skin",
          body: "Medium and deeper skin tones carry a higher chance of post-inflammatory hyperpigmentation after energy-based treatment: the exact problem being treated, made worse. This is why doctors here choose conservative settings and longer intervals, and why the course may run longer than you expect.",
        },
        {
          lead: "Melasma can rebound",
          body: "Treated too aggressively, melasma can darken rather than lighten, and that setback can take many months to settle.",
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
        "Pricing is set after assessment. It depends on:",
      factors: [
        "Which type it is: melasma is managed over a longer period than a handful of sun spots.",
        "The area treated: a few discrete spots, the full face, or the neck, chest and hands as well.",
        "The device chosen, since different platforms have different session structures.",
        "How many sessions, which is set after assessment and adjusted at review.",
        "Whether medical treatment or prescription topicals form part of the plan alongside any device.",
      ],
    },

    // ── 16
    faqs: [
      {
        q: "What is the difference between melasma and sun spots?",
        a: "Sun spots are discrete brown patches with a fairly clear border. Melasma is larger, symmetrical and soft-edged, and it is influenced by hormones and heat as well as sun. They can look similar in a mirror and they are managed almost oppositely.",
      },
      {
        q: "Why does pigmentation come back?",
        a: "Because treatment addresses the pigment that is there, not the tendency to produce it. Daily sun protection and, where relevant, ongoing medical treatment are what keep treated skin stable.",
      },
      {
        q: "Is laser safe for darker or Asian skin tones?",
        a: "Yes, when the device and settings are chosen by a doctor experienced with your skin type. The specific risk in medium and deeper tones is post-inflammatory hyperpigmentation: the skin responding to treatment by producing more pigment. It is a real consideration rather than a reason to avoid treatment.",
      },
      {
        q: "Does sunscreen actually help pigmentation?",
        a: "It is the single most consistent thing you can do, both to prevent new pigmentation and to hold on to any improvement. A broad-spectrum sunscreen applied every morning and reapplied through the day is standard advice, and tinted formulations add some protection against visible light, which is relevant in melasma.",
      },
      {
        q: "Can pigmentation be treated during pregnancy?",
        a: "Elective treatment is generally deferred until after pregnancy and breastfeeding. Melasma often appears or worsens during pregnancy because of hormonal change, and it commonly settles to some degree afterwards.",
      },
      {
        q: "Will over-the-counter brightening products work?",
        a: "They can help with mild surface pigmentation and they support any in-clinic plan, but expectations should be modest. Where the pigment sits deeper, topical products alone often reach a ceiling.",
      },
      {
        q: "Does the pigmentation get darker before it fades?",
        a: "With some laser treatments, yes. Treated spots can appear darker for several days, then flake or lift as the skin turns over. This is an expected part of how the treatment works rather than a sign something has gone wrong.",
      },
      {
        q: "Can I still use my retinol or acid products?",
        a: "Do not stop or start anything without telling your doctor. Retinoids and exfoliating acids are usually paused for a period before and after energy-based treatment, because they thin the surface and increase sensitivity.",
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
  // docs/15 item 3.5 (2026-10-11). A new page built from text that already
  // names a reviewer: Dr Joaan Kong's melasma post (content/blog/melasma-
  // treatment-malaysia-causes-skincare.mdx), the pigmentation page's melasma
  // material, and the Sylfirm X page. Three things in the post are left out on
  // purpose, because this is a service page under the advertising rules:
  // prescription drug names and doses, timeframes to a result (R-01), and the
  // "combinations outperform any single agent" line (R-02). Lite depth: three
  // treatments. Not in config/concern-signoff.json, so no byline until signed;
  // proposed reviewer is the post's author. Banner and card image are one
  // AI-generated illustrative photograph (see the banner note below).
  {
    slug: "melasma",
    name: "Melasma",
    group: "Skin",
    image: "https://cdn.kaiteki.my/concerns/melasma/card.jpg",
    summary:
      "Melasma is managed rather than cured, and the wrong laser can darken it.",
    leadAnswer:
      "Laser can make melasma worse if the wrong device or settings are used: high-heat lasers create inflammation, and inflammation tells pigment cells to darken. Melasma is a chronic pigmentation condition causing symmetrical brown or grey patches, driven by UV, hormones and genetics.",
    treatments: ["pico-laser", "microneedling", "facial-treatments"],
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-10-11",
    seoTitle: "Melasma Treatment in Malaysia | Kaiteki",
    seoDescription:
      "Melasma is managed, not cured, and the wrong laser can darken it. A doctor assesses its type and depth first. Book a free consultation at Kaiteki.",

    // ── 01 · AI-generated illustrative photograph (Higgsfield Soul 2.0, outpainted
    // with FLUX.2 Pro to the banner shape), approved by the owner 2026-10-11. Not a
    // patient and not a result; the alt says so. Uploaded by hand: the source
    // binaries are pbanner_melasma(.jpg|_sm.jpg) for the media export folder.
    banner: {
      src: "https://cdn.kaiteki.my/concerns/melasma/hero.jpg",
      sm: "https://cdn.kaiteki.my/concerns/melasma/hero-mobile.jpg",
      alt: "Illustrative photograph: a person with soft brown melasma patches across both cheeks, touching one cheek",
    },

    // ── 02 · process facts, no time-to-result (R-01).
    facts: [
      {
        value: "Managed, not cured",
        label: "Melasma is a chronic condition that commonly returns with sun, heat or hormonal change.",
      },
      {
        value: "Laser needs caution",
        label: "The same laser that suits sun spots can aggravate melasma, so identification comes first.",
      },
      {
        value: "Depth decides the plan",
        label: "Epidermal, dermal and mixed melasma are approached differently.",
      },
    ],

    sections: [
      {
        heading: "What is melasma?",
        body: [
          "Melasma is a chronic pigmentation disorder in which melanocytes, the pigment-producing cells in the skin, go into overdrive and produce excess melanin. The result is dark brown, light brown or grey patches on the face.",
          "It is not harmful or contagious, but it rarely clears on its own. It is far more common in women, and in medium to deep skin tones.",
        ],
      },
    ],

    // ── 04 · archetype A: what drives it.
    drivers: {
      heading: "What drives melasma",
      intro: "Usually more than one at once:",
      items: [
        {
          lead: "UV radiation:",
          body: "the primary trigger. Malaysia's equatorial position means intense UV exposure all year.",
        },
        {
          lead: "Hormonal change:",
          body: "higher oestrogen and progesterone during pregnancy, oral contraceptive use or hormone replacement therapy make pigment cells more reactive.",
        },
        {
          lead: "Genetics:",
          body: "if close family members have melasma, your pigment cells are more likely to react strongly to the same triggers.",
        },
        {
          lead: "Heat and visible light:",
          body: "infrared heat from cooking, saunas or direct sun warmth, and blue light from screens, can stimulate pigment pathways without classic UV exposure.",
        },
      ],
    },

    // ── 05 · the differentiator: depth, because depth decides the plan.
    variant: {
      kind: "tabs",
      heading: "How deep does your melasma sit?",
      diagram: "skin-depth",
      intro:
        "Melasma is classified by depth, and the depth changes what is likely to help.",
      tabs: [
        {
          depth: "epidermis",
          label: "Epidermal",
          sub: "In the outer layer",
          title: "Epidermal melasma",
          body: "Sits in the outer skin layer, appears dark brown with sharp borders, and tends to respond to topical treatment.",
          routing:
            "a tailored topical routine and daily sun protection first, with clinical treatment added if that is not enough.",
        },
        {
          depth: "dermis",
          label: "Dermal",
          sub: "Deeper, blue-grey",
          title: "Dermal melasma",
          body: "Sits deeper, appears as a muted blue-grey with softer borders, and generally needs clinical devices as part of the plan.",
          routing:
            "low-energy pico laser or pulsed-wave RF microneedling, within a combined plan.",
        },
        {
          depth: "both",
          label: "Mixed",
          sub: "Both depths",
          title: "Mixed melasma",
          body: "Involves pigment at both depths, and is the most common type.",
          routing:
            "combination care: a tailored topical routine with prescription treatment and, where suitable, a low-energy device.",
        },
      ],
    },

    // ── 06 · where it appears.
    locationBlock: {
      heading: "Where melasma appears",
      cards: [
        {
          title: "Cheekbones",
          body: "The most sun-exposed part of the face. Symmetry across both cheeks points toward melasma; scattered discrete spots point away from it.",
        },
        {
          title: "Upper lip, forehead, nose and chin",
          body: "A symmetrical shadow above the lip is a common melasma pattern, and one that is often mistaken for facial hair or a shaving mark.",
        },
        {
          title: "Jawline",
          body: "A symmetrical shadow along the jaw is another common pattern.",
        },
      ],
      note: {
        title: "Brown patches and redness?",
        body: "Melasma is brown or grey, not red. If you also have redness, have both assessed together.",
      },
    },

    // ── 07
    seeDoctor: {
      intro: "Have it assessed if:",
      triggers: [
        "A consistent home routine with daily sunscreen has not moved things far enough after 8 to 12 weeks.",
        "You are considering a laser or other device.",
      ],
    },

    // ── 08
    ctaMid: {
      heading: "Not sure it's melasma?",
      body: "Send us a photo on WhatsApp and a doctor can tell you whether you're looking at melasma, sun spots or post-inflammatory marks.",
    },

    // ── 09 · "why for X" lines unique across all concern pages (R-04, Q-03).
    treatmentsIntro:
      "These are the treatments considered for melasma at our clinics, always alongside daily sun protection and usually alongside topical or oral prescription treatment.",
    treatmentWhy: {
      "pico-laser": {
        why: "For melasma at low energy, as part of a course",
        body: "Delivers ultra-short pulses that work largely through photoacoustic pressure rather than heat.",
      },
      microneedling: {
        why: "For melasma, using a pulsed-wave mode",
        body: "Sylfirm X has a pulsed wave mode that the manufacturer developed with pigment and vascular concerns in mind.",
      },
      "facial-treatments": {
        why: "For surface turnover without heat",
        body: "Hydrafacial and Silkpeel exfoliate gently without heat.",
      },
    },

    // ── 12
    firstVisit: {
      intro:
        "The examination confirms it is melasma, not sun spots or marks, and estimates its depth.",
      steps: [
        {
          title: "History",
          body: "When the patches appeared, and whether they changed with pregnancy, contraception or sun exposure.",
        },
        {
          title: "Examination",
          body: "The doctor examines your skin, sometimes under magnification.",
        },
        {
          title: "Discussion and plan",
          body: "Options, risks and downtime, with no obligation to proceed.",
        },
      ],
    },
    // procedure-01 (a framed legacy before/after composite) removed: this
    // block shows a device in use, never an outcome.
    visitImages: [
      {
        src: "https://cdn.kaiteki.my/concerns/melasma/procedure-02.png",
        caption: "A low-energy laser session in progress.",
      },
    ],

    // ── 13 · R-05: "what treatment cannot do" is mandatory.
    risks: {
      items: [
        {
          lead: "Melasma can rebound",
          body: "Treated too aggressively, melasma can darken rather than lighten, and that setback can take many months to settle.",
        },
        {
          lead: "Pigment change and Malaysian skin",
          body: "Medium and deeper skin tones, common across Malaysia, carry a higher chance of post-inflammatory hyperpigmentation after energy-based treatment. This is why doctors here often choose gentler settings and longer intervals between sessions.",
        },
        {
          lead: "Sun protection is not optional",
          body: "Daily broad-spectrum sunscreen is the part of treatment with the strongest evidence behind it, and stopping it is the most common reason patches come back.",
        },
        {
          lead: "What treatment cannot do",
          body: "No treatment changes the tendency to produce pigment. How much a given person improves varies, and nobody can promise a specific result in advance.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant or breastfeeding, take hormonal contraception or hormone therapy, have a history of clotting problems, take any medication, or have had recent sun exposure or a skin procedure.",
    },

    // ── 14 · factors only, no figures (R-03).
    costFactors: {
      intro:
        "Pricing is set after assessment. It depends on:",
      factors: [
        "Which type and depth of melasma it is: it is managed over a longer period than a handful of sun spots.",
        "Whether a device is part of the plan at all, or topical care and sun protection come first.",
        "The number of sessions in a device course, and any maintenance.",
        "Whether treatments are combined.",
      ],
    },

    // ── 16 · six questions (lite depth).
    faqs: [
      {
        q: "Is melasma curable?",
        a: "No. Melasma is a chronic condition, because the pigment cells retain a kind of biological memory and can reactivate when triggered. What treatment aims for is meaningful lightening and then keeping it that way, which depends on daily sun protection and periodic maintenance.",
      },
      {
        q: "Can laser make melasma worse?",
        a: "Yes, if the wrong device or the wrong settings are used. This is why melasma is treated with low-energy, photoacoustic settings and conservative spacing.",
      },
      {
        q: "What is the difference between melasma and sun spots?",
        a: "Sun spots are discrete, sharp-edged brown spots that build up over years on the most sun-exposed skin. Melasma forms larger, symmetrical, soft-edged patches across both cheeks, the upper lip or forehead, and it shifts with hormones and heat.",
      },
      {
        q: "Does pregnancy melasma go away after childbirth?",
        a: "Often it lightens over the months after delivery, as hormones settle. Residual patches frequently remain, particularly in a high UV country like Malaysia.",
      },
      {
        q: "Can I have melasma treatment while pregnant or breastfeeding?",
        a: "Elective treatment is usually deferred until after pregnancy and breastfeeding, because melasma often settles to some degree afterwards. In the meantime the advice is sun protection and gentle skincare your doctor has cleared.",
      },
      {
        q: "Can Sylfirm X be used for melasma on Asian skin?",
        a: "Melasma is one of the concerns the manufacturer positions the pulsed wave mode for, and radiofrequency energy is not melanin-targeted, so RF microneedling is used across deeper skin tones.",
      },
    ],

    // ── 17
    relatedConcerns: [
      {
        slug: "pigmentation",
        reason: "Sun spots and post-inflammatory marks, which look similar and are managed differently.",
      },
      {
        slug: "vascular-lesions",
        reason: "Facial redness and visible vessels, which can sit on the same face as melasma.",
      },
      {
        slug: "acne",
        reason: "Brown marks after spots, which are post-inflammatory rather than melasma.",
      },
    ],

    // ── 18
    ctaHeading: "Find out whether it's melasma",
    ctaAssesses: "your pigmentation",
  },

  {
    slug: "enlarged-pores",
    ctaHeading: "Want to know what is making yours visible?",
    ctaAssesses: "your skin and pores",
    name: "Enlarged Pores",
    group: "Skin",
    image: "https://cdn.kaiteki.my/concerns/enlarged-pores/card.jpg",
    summary:
      "Visible pores are often tied to oil production, texture or age.",
    leadAnswer:
      "Enlarged-looking pores are shaped by oil production, build-up, sun damage and loss of firmness with age. Pores cannot be closed or removed, and they do not open and close. What treatment and skincare may change is how visible they look, by addressing whichever of those factors is driving yours.",
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

    // ── 01 · Pexels (pexels.com/photo/7479592), skin close-up faded into the
    // page on the right; uploaded by hand (`manual` in config/concern-media.json).
    banner: {
      src: "https://cdn.kaiteki.my/concerns/enlarged-pores/banner-skin.jpg",
      sm: "https://cdn.kaiteki.my/concerns/enlarged-pores/banner-skin-mobile.jpg",
      alt: "Illustrative photograph: close-up of the side of the nose and cheek with visible pores",
    },

    // ── 02 · process facts. Nothing about how much smaller pores get, or how
    // soon: either would be an outcome claim (R-01).
    facts: [
      {
        value: "Every face has them",
        label: "Pores carry oil and sweat to the surface. They cannot be removed, only made less noticeable.",
      },
      {
        value: "Several causes at once",
        label: "Oil, build-up, sun damage and loss of firmness each make pores look larger, and usually overlap.",
      },
      {
        value: "Skincare is part of it",
        label: "A daily routine and sunscreen sit alongside any in-clinic treatment.",
      },
    ],

    // ── 02b
    jumpNav: [
      { id: "causes", label: "What makes them visible" },
      { id: "which-type", label: "Myths and facts" },
      { id: "treatments", label: "Treatments" },
      { id: "compare", label: "Compare options" },
      { id: "risks", label: "Risks" },
      { id: "cost", label: "Cost" },
      { id: "faq", label: "FAQ" },
    ],

    sections: [
      {
        heading: "What are enlarged pores?",
        body: [
          "The ones people notice are the oil pores of the T-zone (nose, forehead, inner cheeks and chin).",
        ],
      },
      {
        heading: "Pores, blackheads and sebaceous filaments",
        body: [
          "Sebaceous filaments are the fine, greyish dots across the nose that look like blackheads: they are a normal lining of oil and skin cells in every pore, and they refill within weeks of being squeezed or stripped out. Blackheads are true plugs that have darkened at the surface and are a mild form of acne. An enlarged pore is the opening itself, visible whether or not anything is sitting in it.",
          "Filaments are usually left alone or managed with skincare, blackheads respond to acne care and clinical cleansing, and a pore that stays visible on clean skin is a texture and firmness question.",
        ],
      },
    ],

    // ── 04 · archetype B: contributing factors, not causes. A pore does not have
    // a single cause, so the heading says what makes it look this way.
    drivers: {
      heading: "What makes pores look larger",
      intro:
        "Usually a mix of these:",
      items: [
        {
          lead: "Oil production:",
          body: "more sebum fills and stretches the opening, and an oily surface reflects light in a way that makes pores stand out.",
        },
        {
          lead: "Build-up inside the pore:",
          body: "oil and dead skin cells collecting in the opening make it look wider and darker, especially when the mix oxidises at the surface.",
        },
        {
          lead: "Loss of firmness:",
          body: "collagen and elastin around each pore help hold the opening tight. As they decline with age, the edges slacken and pores can look elongated or teardrop-shaped, particularly on the cheeks.",
        },
        {
          lead: "Sun exposure:",
          body: "years of UV damage weaken the supporting structure of the skin, so sun-exposed areas often show more visible pores than protected ones.",
        },
        {
          lead: "Heat and humidity:",
          body: "warm, humid conditions increase oil and sweat on the surface, which is part of why pores can look more obvious in Malaysia's climate by the end of the day.",
        },
      ],
    },

    // ── 05 · archetype B: works vs doesn't. The claims are the ones people
    // arrive with; the realities are the honest answer to each.
    variant: {
      kind: "pairs",
      heading: "Pore myths and what is actually true",
      intro:
        "Several pore myths lead to habits that make things worse.",
      pairs: [
        {
          claim: "Hot water opens pores and cold water closes them.",
          reality:
            "Pores have no muscles, so they cannot open or close.",
        },
        {
          claim: "Pore strips and squeezing shrink pores.",
          reality:
            "They empty the pore for a short time, which can make it look smaller until it refills, usually within weeks. Squeezing in particular can inflame the skin, leave marks and, done repeatedly, stretch the opening.",
        },
        {
          claim: "A treatment can close pores permanently.",
          reality:
            "Pores cannot be closed, because skin needs them to release oil.",
        },
        {
          claim: "Only oily skin has visible pores.",
          reality:
            "Oily skin shows them earlier, but loss of firmness with age and sun damage make pores more visible on drier skin too.",
        },
        {
          claim: "Primers and mattifying products shrink pores.",
          reality:
            "They blur pores optically and absorb surface oil, which can look good for a day. They do not change the pore itself, and heavy, occlusive layers can add to congestion on skin that is already prone to it.",
        },
      ],
    },

    // ── 07
    seeDoctor: {
      intro:
        "Not a medical problem in itself, but worth a look if:",
      triggers: [
        "A consistent skincare routine has not made a difference after a few months.",
        "Pores come with frequent breakouts, blackheads or congestion.",
        "You can feel dips or uneven texture, which may be early scarring rather than pores.",
      ],
    },

    // ── 08
    ctaMid: {
      heading: "Not sure what is behind your pores?",
      body: "Send us a photo on WhatsApp and a doctor can tell you what is most likely behind yours.",
    },

    // ── 09 · the "why for pores" line on each card must differ from every other
    // concern page that lists the same treatment (R-04).
    treatmentsIntro:
      "Which one fits depends on what is driving yours: congestion, oil, texture or loss of firmness.",
    treatmentWhy: {
      microneedling: {
        why: "For pores that look stretched as skin loses firmness",
        body: "Fine needles deliver radiofrequency energy into the dermis to stimulate collagen around the pore walls.",
      },
      "pico-laser": {
        why: "For pores alongside dullness and uneven tone",
        body: "A picosecond laser mainly used for pigment, with a fractional mode some doctors use for surface texture.",
      },
      radiofrequency: {
        why: "For firmness around the pores without needles",
        body: "Radiofrequency energy heats the deeper layers of the skin to support collagen without breaking the surface.",
      },
      "resurfacing-laser": {
        why: "For pores set in rough, uneven texture",
        body: "A fractional CO₂ laser that resurfaces columns of skin to prompt remodelling. Reserved for more marked texture change, often with scarring, and carries more downtime and a higher pigment-change risk than the options above.",
      },
      "facial-treatments": {
        why: "For clearing build-up from congested pores",
        body: "Clinical facials such as Hydrafacial and Silkpeel cleanse, exfoliate and extract. They do not change the structure of the pore.",
      },
    },
    treatmentsNote:
      "Active acne is usually settled first: energy-based treatment on inflamed skin carries more risk.",

    // ── 10 · full depth only. "Commonly considered", never a ranking (R-02).
    compare: {
      intro:
        "A general guide. Most people have more than one factor; sessions are set after assessment.",
      columns: ["What you notice", "Commonly considered", "Typical course", "Downtime"],
      rows: [
        ["Congestion and blackheads", "Clinic facials, with acne-focused skincare", "Ongoing maintenance", "None"],
        ["Pores with uneven tone or marks", "Pico laser", "Multiple sessions, spaced", "Minimal"],
        ["Pores with loss of firmness", "Radiofrequency or RF microneedling", "Several sessions, spaced", "None to 2–3 days redness"],
        ["Pores with rough texture or scarring", "RF microneedling or resurfacing laser", "Several sessions, spaced", "2–3 days to 5–7 days"],
        ["Single large pore or new bumps", "Assessed individually", "Assessed individually", "Individual"],
      ],
    },

    // ── results · 03 and 04 are the same patients as 01 and 02 in a branded
    // frame naming the product, so only the unbranded crops are used.
    results: [
      { src: "https://cdn.kaiteki.my/concerns/enlarged-pores/before-after-01.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Pore appearance on the cheek, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/enlarged-pores/before-after-02.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Skin texture and pores, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/enlarged-pores/before-after-03.jpg", nativeWidth: 1412, ratio: "1/1", caption: "Pores and texture across the face, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/enlarged-pores/before-after-04.jpg", nativeWidth: 1415, ratio: "1/1", caption: "Pores on the nose and cheek, before and after a course of treatment at Kaiteki" },
    ],

    // ── 12
    firstVisit: {
      intro:
        "The examination is done on clean skin, to separate open pores from blackheads, filaments, texture change and early scarring.",
      steps: [
        {
          title: "History",
          body: "Your skincare routine, how oily your skin runs through the day, and any breakouts.",
        },
        {
          title: "Examination",
          body: "The doctor examines your skin, sometimes under magnification.",
        },
        {
          title: "Discussion and plan",
          body: "What is likely driving your pores, including when skincare alone is the sensible answer.",
        },
      ],
    },
    // ── 04 media · pairs with the five drivers by position (Q-19); only the
    // skin-structure diagram carries information, so the rest are null.
    figures: [
      null,
      {
        src: "https://cdn.kaiteki.my/concerns/enlarged-pores/image-skin-structure.jpg",
        caption: "Oil glands open into the hair follicle, and what collects in that opening is what makes a pore look larger. Illustration: National Cancer Institute.",
      },
      null,
      null,
      null,
    ],
    visitImages: [
      {
        src: "https://cdn.kaiteki.my/concerns/enlarged-pores/procedure-02.png",
        caption: "A fractional laser treatment in progress. The doctor sets the depth and density for your skin type before starting.",
      },
    ],

    // ── 13 · R-05: names what treatment cannot do, and carries the pigment
    // note because energy devices are listed.
    risks: {
      items: [
        {
          lead: "Common and usually temporary",
          body: "Redness, mild swelling, dryness, flaking and a warm or tight feeling for a few days after energy-based treatment. Less common effects include prolonged redness, breakouts, blistering, infection or a change in skin pigment.",
        },
        {
          lead: "Pigment change and Malaysian skin",
          body: "Medium and deeper skin tones, common across Malaysia, carry a higher chance of post-inflammatory hyperpigmentation after laser and other energy-based treatment. Doctors manage this by choosing suitable devices, using conservative settings and spacing sessions further apart.",
        },
        {
          lead: "Sun protection and skincare are part of it",
          body: "Daily broad-spectrum sunscreen protects the collagen that keeps pores looking tighter.",
        },
        {
          lead: "What treatment cannot do",
          body: "Treatment cannot close or remove pores, and it does not change the genetic pore size you were born with. It does not stop your skin producing oil. Any improvement in appearance builds gradually and needs maintaining, because ageing and sun exposure continue afterwards.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant or breastfeeding, take or recently took oral acne medication, use retinoids or exfoliating acids, have a history of cold sores, keloid scarring or recent tanning, or have had any skin procedure in the past few weeks.",
    },

    // ── 14 · factors only, no figures (R-03).
    costFactors: {
      intro:
        "Pricing is set after assessment. It depends on:",
      factors: [
        "What is driving your pores: congestion, oil, texture or firmness each lead to a different approach.",
        "The area: full face, or a targeted zone such as the nose and inner cheeks.",
        "The treatment and device, since different platforms have different session structures.",
        "How many sessions, which is set after assessment and adjusted at review.",
        "Whether treatments are combined, and whether maintenance sessions are part of the plan.",
      ],
    },

    // ── 16 · eight questions (full depth).
    faqs: [
      {
        q: "Can pores be shrunk permanently?",
        a: "Pores cannot be closed or removed permanently, because the skin needs them to release oil and sweat and stay healthy. Some treatments and skincare may reduce the appearance of pores by improving firmness, texture and oil control around them, but results vary between individuals and need maintaining.",
      },
      {
        q: "Is skincare or in-clinic treatment better for pores?",
        a: "They do different jobs. A consistent routine with gentle cleansing, sun protection and, where suitable, ingredients such as retinoids or salicylic acid keeps pores clearer and supports texture over time. In-clinic treatment is considered when the issue is firmness or texture that skincare alone does not reach.",
      },
      {
        q: "Why are my pores bigger on my nose and cheeks?",
        a: "The nose and central face have the densest oil glands, so pores there carry more sebum and look wider. Cheek pores behave differently: they often become more visible with age, as the skin around them loses firmness and the openings stretch into an oval or teardrop shape.",
      },
      {
        q: "Do pore strips and extractions help?",
        a: "They empty the pore for a while, which can make it look smaller until it refills. Professional extraction during a clinical facial is done with the skin prepared and in a controlled way, which limits damage.",
      },
      {
        q: "Does the humid weather in Malaysia make pores worse?",
        a: "The pores themselves do not grow in hot weather. Light, non-comedogenic products, regular gentle cleansing and daily sunscreen help keep oily skin manageable in this climate.",
      },
      {
        q: "Is treatment for pores safe for darker or Asian skin tones?",
        a: "It can be, when the device and settings are chosen by a doctor experienced with your skin type. The main concern with medium and deeper skin tones is post-inflammatory hyperpigmentation after laser or other energy-based treatment.",
      },
      {
        q: "Can enlarged pores be a sign of something else?",
        a: "Usually they are just pores. Occasionally what looks like an enlarged pore is a different, benign condition: a single very large pore with a dark plug, or small yellowish bumps with a central dip that become more common with age. Both are treated differently from ordinary pores, so have a doctor confirm what they are.",
      },
      {
        q: "What should I stop before treatment?",
        a: "Do not stop anything without telling your doctor first. Retinoids and exfoliating acids are usually paused for a few days before and after energy-based treatment, and recent oral acne medication can affect what is appropriate and when.",
      },
    ],

    // ── 17
    relatedConcerns: [
      {
        slug: "acne",
        reason: "Oily skin, blackheads and congestion often come with visible pores.",
      },
      {
        slug: "acne-scars",
        reason: "Small rolling or boxcar scars can be mistaken for enlarged pores.",
      },
      {
        slug: "aging",
        reason: "Loss of firmness with age is a common reason cheek pores become visible.",
      },
      {
        slug: "pigmentation",
        reason: "Uneven tone and sun damage are often treated alongside pore texture.",
      },
    ],
  },
  {
    slug: "fine-lines-wrinkles",
    name: "Fine Lines & Wrinkles",
    group: "Face",
    image: "https://cdn.kaiteki.my/concerns/fine-lines-wrinkles/card.jpg",
    summary:
      "Lines that appear when you move and lines that stay at rest need different approaches.",
    leadAnswer:
      "Fine lines and wrinkles come from three sources: muscle movement folding the skin (dynamic lines), the skin itself thinning with age and sun (static lines), and lost volume creating folds. Each is approached differently: muscle-relaxing injection for dynamic lines, collagen-stimulating treatment for static ones, and support above the fold for volume loss.",
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
      src: "https://cdn.kaiteki.my/concerns/fine-lines-wrinkles/hero.jpg",
      sm: "https://cdn.kaiteki.my/concerns/fine-lines-wrinkles/hero-mobile.jpg",
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
        value: "At rest and moving",
        label: "The face is examined still and through expressions, because that decides the line type.",
      },
    ],

    // ── 02b
    jumpNav: [
      { id: "causes", label: "What causes them" },
      { id: "which-type", label: "Which type do I have?" },
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
        ],
      },
    ],

    // ── 04 · causes, organised by the line each one produces. No figures: the
    // seven stock photographs mostly did not show the line their caption named.
    drivers: {
      heading: "What causes them",
      intro:
        "Most lines have a specific cause, and the cause decides the treatment:",
      items: [
        {
          lead: "Repeated expression:",
          body: "smiling, squinting and raising the brows fold the skin in the same place thousands of times. Crow's feet and forehead lines start here.",
        },
        {
          lead: "Frowning and concentration:",
          body: "the vertical glabellar lines between the brows come from the muscles that pull them together.",
        },
        {
          lead: "Pursing and lip movement:",
          body: "fine vertical perioral lines around the mouth come from the circular muscle in the lips.",
        },
        {
          lead: "Volume loss and gravity:",
          body: "marionette lines running from the mouth corners toward the chin deepen as support in the mid-face is lost and tissue settles.",
        },
        {
          lead: "Collagen decline and sun damage:",
          body: "static wrinkles present at rest reflect the skin's own structure thinning. UV exposure is the single largest accelerator.",
        },
        {
          lead: "Sleep position:",
          body: "sleeping face-down or consistently on one side presses the skin into the same folds for hours each night.",
        },
        {
          lead: "Neck posture and exposure:",
          body: "horizontal neck lines are shaped by movement, posture and looking downward, and the neck is both thinner-skinned and the area most often left out of a sunscreen routine.",
        },
      ],
      outro:
        "Dehydration, smoking, poor sleep and genetics speed all of these up.",
    },

    // ── 05 · the differentiator. Three tabs, because the treatment decision
    // turns on whether a line is made by muscle, by lost support, or by the
    // skin itself.
    variant: {
      kind: "tabs",
      heading: "Which type do I have?",
      intro:
        "One test separates most of this. Look in a mirror with your face completely relaxed, then make the expression that produces the line.",
      tabs: [
        {
          label: "Dynamic",
          sub: "Only when you move",
          title: "Dynamic lines",
          body: "Lines that appear when you make an expression and vanish when your face relaxes. They are produced by muscle folding the skin above it, and the skin itself is still intact.",
          routing:
            "commonly assessed for muscle-relaxing injection, with attention to skin quality alongside it.",
        },
        {
          label: "Static",
          sub: "Visible at rest",
          title: "Static lines",
          body: "Lines still present when your face is completely relaxed. The skin has been folded often enough, or has thinned enough, that the crease persists.",
          items: [
            {
              lead: "The tell:",
              body: "you can see it with a still face, and stretching the skin gently reduces it.",
            },
          ],
          routing:
            "assessed for skin-directed treatment such as resurfacing or collagen stimulation, often combined with muscle treatment.",
        },
        {
          label: "Fold",
          sub: "Made by lost support",
          title: "Volume-related folds",
          body: "Deeper creases such as nasolabial folds and marionette lines, which are not really wrinkles at all. They mark where tissue has descended or deflated.",
          items: [
            {
              lead: "The tell:",
              body: "lying down softens it considerably, and lifting the cheek gently with a fingertip reduces the fold.",
            },
          ],
          routing:
            "assessed for support placed where volume was lost, rather than product placed into the line itself.",
        },
      ],
    },

    // ── 06 · no location block: it repeated the drivers by area (the ageing
    // page carries the cluster's "where it shows" block). Its red-flag note is
    // now a seeDoctor trigger.

    // ── 07
    seeDoctor: {
      intro: "There is no threshold at which lines need treating. It is worth an assessment if:",
      triggers: [
        "Lines that used to appear only on movement are now visible when your face is at rest.",
        "You have had treatment elsewhere and were unhappy with how it looked.",
        "A crease is red, scaly, itchy or bleeding, or the skin has changed texture rather than folded: that needs examining, not cosmetic treatment.",
      ],
    },

    // ── 08
    ctaMid: {
      heading: "Wrinkle or fold?",
      body: "Send us a photo on WhatsApp and a doctor can tell you which you're looking at.",
    },

    // ── 09
    treatmentsIntro:
      "Which fits depends on whether the line comes from muscle, lost support or the skin itself.",
    treatmentWhy: {
      "botulinum-toxin": {
        why: "For lines that appear when you move",
        body: "Relaxes the specific muscle folding the skin, so the line forms less forcefully. Temporary, and repeated periodically.",
      },
      "dermal-fillers": {
        why: "For folds held open by lost volume",
        body: "Placed to restore support where the face has flattened, rather than into the crease itself.",
      },
      "skin-booster": {
        why: "For fine crepe lines and surface dryness",
        body: "Injectable hydration that improves the quality and light-reflection of the skin rather than filling any single line.",
      },
      microneedling: {
        why: "For etched lines and overall texture",
        body: "Fine needles with radiofrequency energy stimulate collagen through the deeper skin.",
      },
      "resurfacing-laser": {
        why: "For deeper static lines around the mouth",
        body: "A fractional laser used where lines are etched into the skin and texture change has set in. More downtime than the options above.",
      },
      hifu: {
        why: "For laxity that deepens the folds",
        body: "Focused ultrasound aimed at firmness beneath the skin.",
      },
      ultherapy: {
        why: "For lifting that softens the fold above it",
        body: "The same principle with ultrasound imaging to guide delivery. Relevant where the doctor wants to see the tissue planes while treating, particularly around the brow and lower face.",
      },
    },
    treatmentsNote:
      "Sequence matters: relaxing the muscle first often shows how much of a line was actually etched into the skin.",

    // ── 10
    compare: {
      intro:
        "A general guide. Most plans combine approaches; sessions are set after assessment.",
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
    },

    // ── results · before-after-01 is still left out: it reads as a supplier
    // demonstration rather than a Kaiteki patient (docs/11 §3), and the block is
    // headed "Results from Kaiteki patients". 02–04 are the clinic's own
    // watermarked patient photographs (supplied 2026-10).
    results: [
      { src: "https://cdn.kaiteki.my/concerns/fine-lines-wrinkles/before-after-02.png", nativeWidth: 1080, ratio: "1/1", caption: "Forehead lines, before and after treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/fine-lines-wrinkles/before-after-03.png", nativeWidth: 1080, ratio: "1/1", caption: "Forehead lines, before and after treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/fine-lines-wrinkles/before-after-04.png", nativeWidth: 1080, ratio: "1/1", caption: "Frown lines between the brows, before and after treatment at Kaiteki" },
    ],

    // ── 12
    firstVisit: {
      intro:
        "The doctor watches your face at rest and through expressions.",
      steps: [
        {
          title: "History",
          body: "Any previous injectables or laser treatment, and whether you smoke.",
        },
        {
          title: "Examination",
          body: "Which lines vanish when you relax and which do not.",
        },
        {
          title: "Discussion and plan",
          body: "What each option changes, and a conservative first step, with no obligation to proceed.",
        },
      ],
    },
    visitImages: [
      {
        src: "https://cdn.kaiteki.my/concerns/fine-lines-wrinkles/procedure-02.png",
        caption: "A prescription injectable being placed by the doctor. The dose and the injection points are planned at the consultation, not on the day.",
      },
    ],

    // ── 13
    risks: {
      items: [
        {
          lead: "Common and usually temporary",
          body: "Redness, swelling, bruising and tenderness at injection points. Energy-based treatment leaves redness, dryness and a gritty sensation for a few days. Muscle-relaxing injection can cause a mild headache in the first days.",
        },
        {
          lead: "Uncommon but important",
          body: "Muscle-relaxing injection can spread slightly beyond the intended muscle and cause a temporary drooping brow or eyelid, which resolves as the effect wears off. Injectables carry a rare but serious risk of vascular occlusion.",
        },
        {
          lead: "Pigment change and Malaysian skin",
          body: "Medium and deeper skin tones carry a higher chance of post-inflammatory hyperpigmentation after laser or energy-based treatment. Settings are chosen conservatively and sessions spaced further apart for this reason.",
        },
        {
          lead: "What treatment cannot do",
          body: "Nothing here stops your face ageing, and no treatment removes a deep static line entirely. Relaxing a muscle will not erase a crease already etched into the skin, and filling a fold does not address the descent that created it. Effects are temporary and maintained rather than permanent.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant or breastfeeding, take blood thinners, have a neuromuscular condition, use retinoids or acids, have a history of cold sores or keloid scarring, have had any injectable or laser treatment recently, or have tanned in the past few weeks.",
    },

    // ── 14
    costFactors: {
      intro:
        "Pricing is set after assessment. It depends on:",
      factors: [
        "Which type of line is being treated, since muscle, skin and volume are different treatments.",
        "How many areas: one region of the face, the upper face, or a full-face plan.",
        "The product or device, and how much of it your anatomy and the pattern of movement call for.",
        "How many sessions, which is set after assessment and reviewed as your skin responds.",
        "How often maintenance is likely, because muscle-relaxing treatment is repeated over time.",
      ],
    },

    // ── 15
    technologyIntro:
      "Lines come from three different sources, so no single device or product addresses all of them.",

    // ── 16
    faqs: [
      {
        q: "What is the difference between fine lines and wrinkles?",
        a: "Fine lines are shallow surface creases, often the first thing people notice around the eyes and on the lip. Wrinkles are deeper and more established.",
      },
      {
        q: "Can lines and wrinkles be prevented?",
        a: "Not entirely, since everyone's face ages and movement is part of living in it. What is well established is that daily broad-spectrum sunscreen slows the process considerably, particularly in a country with year-round equatorial UV, and that not smoking makes a visible difference around the mouth.",
      },
      {
        q: "Will muscle-relaxing injection make my face look frozen?",
        a: "Only if it is overdosed or misplaced. Used conservatively, it reduces how forcefully a specific muscle folds the skin while leaving expression intact. A frozen appearance almost always comes from treating too many muscles at once, or from too much product in one area.",
      },
      {
        q: "How long do the effects last?",
        a: "Muscle-relaxing injection wears off over a period of months and is repeated. Volume support is gradually broken down by the body over a longer period. Collagen-based change builds and then recedes as ageing continues. None of it is permanent.",
      },
      {
        q: "Is treatment painful?",
        a: "Injections are described as quick sharp pinches, and most people find muscle-relaxing treatment easily tolerable without numbing. Fillers usually contain local anaesthetic. RF microneedling and resurfacing laser are more uncomfortable and are done with numbing cream and cooling.",
      },
      {
        q: "Can I start treatment in my twenties or thirties?",
        a: "Many people do, usually for dynamic lines that are beginning to persist. The argument for it is that a line is simpler to address before it becomes etched into the skin. The argument against starting too early is cost, commitment and the fact that some lines never progress.",
      },
      {
        q: "Does skincare actually help?",
        a: "It helps with skin quality, which is a real part of how lines read, and a sensible routine supports any in-clinic plan. Well-formulated retinoids and antioxidants have reasonable support behind them.",
      },
      {
        q: "What if I don't like the result?",
        a: "Muscle-relaxing injection is temporary and wears off, which is one reason it is a reasonable first treatment. Hyaluronic-acid fillers can be dissolved, which is why they are generally preferred over permanent products. Energy-based treatments cannot be undone, which is an argument for treating conservatively first.",
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
    image: "https://cdn.kaiteki.my/concerns/dark-eye-circles/card.jpg",
    summary:
      "Dark circles can come from pigment, blood vessels or hollowing under the eye.",
    leadAnswer:
      "Dark eye circles come from three things that look alike: extra pigment in the skin, blood vessels showing through thin under-eye skin, and a hollow that casts a shadow. Most people have more than one. Each is treated differently: laser for pigment or vessels, skin-quality treatment for thin skin, and volume support for a hollow.",
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
    // ── 01 · Pexels (pexels.com/photo/24428508), skin close-up faded into the
    // page on the right; uploaded by hand (`manual` in config/concern-media.json).
    banner: {
      src: "https://cdn.kaiteki.my/concerns/dark-eye-circles/banner-skin.jpg",
      sm: "https://cdn.kaiteki.my/concerns/dark-eye-circles/banner-skin-mobile.jpg",
      alt: "Illustrative photograph: close-up of an eye with visible dark shadowing in the skin beneath it",
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
        heading: "What are dark eye circles?",
        body: [
          "Dark circles are not a single condition.",
        ],
      },
    ],

    // ── 04 · the three mechanisms that actually produce the darkness. Sleep,
    // alcohol and dehydration sit in the outro rather than as items: they
    // modulate all three rather than causing any of them. No figures: the
    // under-eye diagram beside the tabs shows the three mechanisms instead.
    drivers: {
      heading: "What causes dark eye circles?",
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
    },

    // ── 05 · the differentiator. Two self-tests give the visitor something they
    // can actually do before they arrive, and route them to the right block.
    // The under-eye diagram beside the tabs brings each mechanism forward.
    variant: {
      kind: "tabs",
      heading: "Which type do I have?",
      diagram: "under-eye",
      intro:
        "Two mirror checks narrow it down: stretch the skin gently, and change the light so it comes from straight ahead.",
      tabs: [
        {
          focus: "pigment",
          label: "Pigment",
          sub: "Brown, stays when stretched",
          title: "Pigmented circles",
          body: "A brown or grey-brown discolouration that stays visible when you stretch the skin gently and when light hits the area straight on.",
          routing:
            "commonly assessed for pigment-targeted laser, with sun protection and any allergy or eczema addressed alongside.",
        },
        {
          focus: "vascular",
          label: "Vascular",
          sub: "Blue or purple tint",
          title: "Vascular circles",
          body: "A bluish or purplish cast, sometimes with visible fine vessels, which becomes more obvious when you are tired, congested or crying. Stretching the skin makes it fade slightly as the vessels are drawn flatter.",
          routing:
            "assessed for vascular laser or skin-quality treatment, with nasal allergy managed if it is contributing.",
        },
        {
          focus: "structural",
          label: "Structural",
          sub: "Shadow that light removes",
          title: "Structural circles",
          body: "A hollow or groove between the lower lid and the cheek.",
          items: [
            {
              lead: "The tell:",
              body: "shine a light directly at the face, or tilt your chin down toward a window. If the darkness vanishes, it is shadow.",
            },
          ],
          routing:
            "assessed for volume support placed conservatively, or skin-quality treatment where the skin is very thin.",
        },
        {
          focus: "mixed",
          label: "Mixed",
          sub: "More than one at once",
          title: "Mixed circles",
          body: "The most common answer, particularly past the mid-thirties. Pigment sits over a hollow, or thin skin shows vessels while a shadow deepens the effect.",
          routing:
            "assessed as a sequence, with the dominant component treated first and the remainder reviewed afterwards.",
        },
      ],
    },

    // ── 06
    locationBlock: {
      heading: "Where the darkness sits",
      intro:
        "Where the darkness falls is a clue: a groove by the nose is usually shadow; a band under the lashes or a broad brown wash is usually vessels or pigment.",
      cards: [
        {
          title: "Outer corner and toward the temple",
          body: "Darkness that continues outward past the eye is more often pigmentary, and worth assessing alongside sun exposure and any skincare that irritates the area.",
        },
      ],
      note: {
        title: "Not just a dark circle?",
        body: "Persistent puffiness, swelling that comes and goes through the day, a lump, or any change in vision or in the appearance of one eye only should be assessed by a doctor.",
      },
    },

    // ── 07
    seeDoctor: {
      intro: "Have it looked at if:",
      triggers: [
        "Eye creams and concealer have not made a difference after a few months of consistent use.",
        "The darkness appeared or worsened noticeably over a short period.",
        "It sits alongside itching, congestion or eczema, which may be aggravating it.",
      ],
    },

    // ── 08
    ctaMid: {
      heading: "Pigment, vessels or shadow?",
      body: "Send us a photo on WhatsApp and a doctor can tell you which you're looking at.",
    },

    // ── 09
    treatmentsIntro:
      "Which fits depends on which mechanism is behind yours:",
    treatmentWhy: {
      "skin-booster": {
        why: "For thin, crepey under-eye skin",
        body: "Injectable hydration placed superficially to improve the quality and thickness of very thin skin, so less shows through it.",
      },
      "vascular-pigment-laser": {
        why: "For bluish vessels showing through",
        body: "Targets superficial vessels and pigment around the eye, with settings chosen conservatively because the skin here is far thinner than on the cheek.",
      },
      radiofrequency: {
        why: "For laxity in the lower lid",
        body: "Gentle heating to prompt collagen change where the lower lid skin has loosened and creased.",
      },
      "dermal-fillers": {
        why: "For the hollow that casts the shadow",
        body: "Small volumes placed deeply to soften a groove between lid and cheek.",
      },
    },

    // ── 10
    compare: {
      intro:
        "A general guide. Mixed circles are the norm, and treatment here is deliberately conservative.",
      columns: ["What you have", "Commonly considered", "Typical course", "Downtime"],
      rows: [
        ["Brown, unchanged when stretched", "Pigment-targeted laser", "Multiple sessions, spaced", "Minimal"],
        ["Blue or purple tint", "Vascular laser", "Multiple sessions, spaced", "Minimal"],
        ["Hollow that light removes", "Volume support, placed deeply", "Staged, reviewed between", "Bruising possible"],
        ["Thin, crepey skin", "Skin boosters", "Short course, then maintenance", "1–2 days swelling"],
        ["Loose lower-lid skin", "Radiofrequency", "Course, spaced", "Minimal"],
        ["Pigment over a hollow", "Sequenced: one component at a time", "Assessed individually", "Individual"],
      ],
    },

    // ── results · -06…09 removed: the same four patients as -01…04 again, in
    // the pink legacy frame. -02 and -03 are the cases that frame titled
    // "Undereyes Filler", so they say "before and after treatment" rather than
    // "after a course of treatment": under-eye volume support is a single
    // appointment, and calling it a course would overstate the photograph
    // (ADR-0001 §2).
    results: [
      { src: "https://cdn.kaiteki.my/concerns/dark-eye-circles/before-after-01.jpg", nativeWidth: 498, ratio: "5/4", caption: "Under-eye area, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/dark-eye-circles/before-after-02.jpg", nativeWidth: 498, ratio: "5/4", caption: "Under-eye hollowing, before and after treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/dark-eye-circles/before-after-03.jpg", nativeWidth: 498, ratio: "5/4", caption: "Under-eye hollowing, before and after treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/dark-eye-circles/before-after-04.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Under-eye darkness, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/dark-eye-circles/before-after-05.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Under-eye darkness, before and after a course of treatment at Kaiteki" },
    ],

    // ── 12
    firstVisit: {
      intro:
        "The area is checked in more than one light and angle.",
      steps: [
        {
          title: "History",
          body: "Whether anyone in your family has the same pattern, and any allergy, eczema or congestion.",
        },
        {
          title: "Examination",
          body: "The doctor stretches the skin gently and checks whether the darkness moves with the light.",
        },
        {
          title: "Discussion and plan",
          body: "Which mechanism is leading, and the specific risks of treating this area, with no obligation to proceed.",
        },
      ],
      outro:
        "Come without makeup if you can, and bring a photograph of yourself in daylight.",
    },
    visitImages: [
      {
        src: "https://cdn.kaiteki.my/concerns/dark-eye-circles/procedure-02.png",
        caption: "Laser work near the eye is done with protective shields in place and settings chosen for the thinner skin of the area.",
      },
    ],

    // ── 13
    risks: {
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
          body: "Nothing on this page changes an inherited eye-socket shape or removes a shadow that comes from bone. Treating pigment will not lift a hollow, and volume will not lighten brown skin. Improvement is usually partial.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant or breastfeeding, take blood thinners, have thyroid or kidney conditions associated with puffiness, have a history of cold sores or keloid scarring, have had eyelid surgery or injectables in this area before, or have any current eye condition.",
    },

    // ── 14
    costFactors: {
      intro:
        "Pricing is set after assessment. It depends on:",
      factors: [
        "Which mechanism is being treated: pigment, vessels, skin quality and volume are entirely different treatments.",
        "Whether more than one component is present, since mixed circles are treated in sequence.",
        "The product or device chosen, and how conservative the plan needs to be for your skin.",
        "How many sessions, which is set after assessment and reviewed as the area responds.",
        "Whether an underlying contributor such as allergy is being managed alongside.",
      ],
    },

    // ── 15
    technologyIntro:
      "The under-eye area tolerates far less energy than the cheek, so the device and its settings matter more here than the brand name on it.",

    // ── 16
    faqs: [
      {
        q: "Are dark circles caused by lack of sleep?",
        a: "Not usually, though poor sleep makes them more visible. Tiredness dilates vessels and leaves the face paler, which increases the contrast. If your circles are present on well-rested mornings too, sleep is not the cause.",
      },
      {
        q: "Do eye creams work?",
        a: "They can help modestly where surface pigment or dryness is part of the picture, and a well-formulated one supports any in-clinic plan. They will not lift a hollow or remove vessels beneath the skin.",
      },
      {
        q: "Is filler under the eyes safe?",
        a: "It is a well-established treatment in experienced hands, but it is the most technically demanding injection on the face and it deserves a careful conversation. It is dissolvable, which matters.",
      },
      {
        q: "Will treatment get rid of them completely?",
        a: "Rarely. Improvement is usually partial, particularly where more than one mechanism is involved or where the socket shape is inherited.",
      },
      {
        q: "Can dark circles be treated during pregnancy?",
        a: "Elective treatment is generally deferred until after pregnancy and breastfeeding. Fluid shifts and hormonal change during pregnancy also make the area behave differently, so an assessment made then may not reflect your baseline.",
      },
      {
        q: "Why do my dark circles look worse in photos?",
        a: "Overhead lighting is the usual explanation. Ceiling lights, and phone cameras held above eye level, both throw the light from above, which deepens any shadow under the eye. A photograph taken in daylight, with the light coming from in front, shows the area far more honestly.",
      },
      {
        q: "Can men have this treated?",
        a: "Yes, and it is a common reason men attend, often described as looking permanently tired rather than as a cosmetic concern. Where volume support is involved, the placement differs, because a male lower lid usually reads better with less fullness than a female one.",
      },
      {
        q: "Should I just use concealer?",
        a: "Sometimes that is the honest recommendation, and it is not a failure of the consultation. Where the darkness is largely inherited pigment, or where the socket shape casts a shadow no treatment can reach, well-matched concealer achieves more than a course of treatment would, at no risk.",
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
    image: "https://cdn.kaiteki.my/concerns/face-contouring/card.jpg",
    summary:
      "Jawline definition, cheek volume and facial proportions can be refined without surgery.",
    leadAnswer:
      "Face contouring addresses the shape and definition of the jawline, chin and cheeks. The same complaint can come from fat under the chin, chewing-muscle bulk, loose skin or a lack of projection, and each is treated differently. Non-surgical treatment works on those soft-tissue layers; it does not change bone.",
    treatments: ["hifu", "fat-freezing", "radiofrequency", "botulinum-toxin", "dermal-fillers"],
    reviewedBy: "dr-hong-peiyi",
    lastReviewed: "2026-06-12",
    seoTitle: "Face Contouring Treatment & Assessment in Malaysia | Kaiteki",
    seoDescription:
      "Jawline and chin definition are assessed individually before any face contouring treatment is suggested. Book a free consultation with a Kaiteki doctor.",
    // ── 01
    banner: {
      src: "https://cdn.kaiteki.my/concerns/face-contouring/hero.jpg",
      sm: "https://cdn.kaiteki.my/concerns/face-contouring/hero-mobile.jpg",
      alt: "Illustrative photograph: a smiling young woman, facing the camera, with one hand resting on her cheek",
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
        value: "Layer decides treatment",
        label: "Fat, muscle, skin and projection each have a different answer.",
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
        ],
      },
    ],

    // ── 04 · archetype E: what influences it. Two causes, two photographs,
    // paired by position. The other layers (muscle, volume, structure) are the
    // variant tabs, so they are not repeated here.
    drivers: {
      heading: "What influences facial contour",
      intro:
        "Within the outline bone sets, two soft-tissue changes account for most lost jaw definition:",
      items: [
        {
          lead: "Soft-tissue descent along the jawline:",
          body: "as skin and the layer beneath it loosen, tissue settles downward and breaks the jaw into two lines rather than one.",
        },
        {
          lead: "Fullness under the chin:",
          body: "a pocket of fat in the submental area sits between the chin and the neck and blurs the angle between them. It can be present at any weight.",
        },
      ],
    },

    // ── 04 media · one figure per cause, in the same order as `drivers.items`.
    figures: [
      {
        src: "https://cdn.kaiteki.my/concerns/face-contouring/image-sagging-jawline.jpg",
        caption: "Settled tissue breaks the jaw into two lines.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/face-contouring/image-doublechin.jpg",
        caption: "A fat pocket under the chin blurs the jaw–neck angle.",
      },
    ],

    // ── 05 · the differentiator. The whole page turns on this: the same
    // complaint has four different causes and four different answers.
    variant: {
      kind: "tabs",
      heading: "What's shaping yours?",
      intro:
        "Most faces involve more than one.",
      tabs: [
        {
          label: "Fat",
          sub: "Fullness under the chin",
          title: "Fat under the chin or along the jaw",
          body: "A soft pocket you can pinch, sitting between the chin and the neck or spilling slightly over the jawline.",
          items: [
            {
              lead: "The tell:",
              body: "you can hold it between finger and thumb, and it softens or shifts when you tip your head back.",
            },
          ],
          routing: "commonly assessed for fat-reduction treatment targeted at the submental area.",
        },
        {
          label: "Muscle",
          sub: "Width at the back of the jaw",
          title: "Chewing-muscle bulk",
          body: "The masseter muscle at the back of the jaw can be naturally strong or enlarged by clenching and grinding, widening the lower face when viewed from the front.",
          items: [
            {
              lead: "The tell:",
              body: "clench your teeth and feel just above the angle of the jaw. If a firm bulge pushes out under your fingers, muscle is part of the picture.",
            },
          ],
          routing:
            "assessed for muscle-relaxing injection, with any dental cause of grinding addressed alongside it.",
        },
        {
          label: "Skin",
          sub: "Laxity breaking the line",
          title: "Skin and soft-tissue laxity",
          body: "The jaw outline is intact but the edge is no longer crisp, with small jowls either side of the chin.",
          items: [
            {
              lead: "The tell:",
              body: "lying down improves it noticeably, and gentle backward tension with a fingertip restores the outline.",
            },
          ],
          routing:
            "assessed for energy-based tightening.",
        },
        {
          label: "Structure",
          sub: "Projection and proportion",
          title: "Bone and volume proportion",
          body: "A recessed chin, a flat mid-face or a short lower third change how defined a jawline looks without anything having sagged.",
          items: [
            {
              lead: "The tell:",
              body: "in profile, the chin sits well behind the lower lip, or the mid-face reads flat while the jaw itself is unchanged.",
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
        "Where non-surgical treatment stops being the right tool:",
      cards: [
        {
          title: "What non-surgical options do",
          body: "They reduce a fat pocket, relax an overactive muscle, firm loose skin or add support where projection is lacking. Each addresses one layer, and the change is proportionate rather than transformative.",
        },
        {
          title: "What surgery does",
          body: "Procedures such as jaw or chin surgery, or surgical removal of tissue, change structure directly.",
        },
        {
          title: "Where the line usually falls",
          body: "Bone is the clearest boundary: if the outline you want requires a different jaw or chin, no injectable or device will produce it.",
        },
      ],
    },

    // ── 07
    seeDoctor: {
      heading: "When it is worth an assessment",
      intro:
        "There is no clinical threshold. It is worth an assessment if:",
      triggers: [
        "The lower face has widened, or you clench and grind your teeth and wake with a tight jaw.",
        "The jawline has lost definition over time rather than always having looked this way.",
        "You have been offered a treatment elsewhere and want a second opinion on whether it matches the cause.",
      ],
      outro:
        "Jaw tension, grinding and disturbed sleep are worth raising with a doctor or dentist regardless of any cosmetic question, because they have consequences for your teeth.",
    },

    // ── 08
    ctaMid: {
      heading: "Fat, muscle or skin?",
      body: "Send us a photo on WhatsApp and a doctor can tell you which it is.",
    },

    // ── 09
    treatmentsIntro:
      "Which fits depends on the layer responsible:",
    treatmentWhy: {
      "fat-freezing": {
        why: "For a defined pocket of fat under the chin",
        body: "Controlled cooling applied to the submental area to reduce a localised fat pocket.",
      },
      "botulinum-toxin": {
        why: "For a wide jaw driven by chewing muscle",
        body: "A small dose placed into the masseter muscle so it works less forcefully and gradually reduces in bulk. The effect is temporary and repeated periodically.",
      },
      hifu: {
        why: "For a softer jawline outline",
        body: "Focused ultrasound delivered beneath the skin to firm the tissue along the jaw.",
      },
      radiofrequency: {
        why: "For skin firmness across the lower face",
        body: "Heats the dermis to prompt collagen change across a broader area than a focused device.",
      },
      "dermal-fillers": {
        why: "For projection at the chin and cheek",
        body: "Placed on bone to build structure where projection or proportion is lacking, rather than to fill a line.",
      },
    },

    // ── 10
    compare: {
      intro:
        "A general guide. Most faces involve more than one layer, and sequenced plans are reviewed between stages.",
      columns: ["What you have", "Commonly considered", "Typical course", "Downtime"],
      rows: [
        ["Pinchable fat under the chin", "Targeted fat reduction", "Staged, reviewed between", "Several days tenderness"],
        ["Wide lower face from clenching", "Muscle-relaxing injection", "Repeated periodically", "None"],
        ["Blurred jaw outline from laxity", "Focused ultrasound", "Single session, reviewed", "None to minimal"],
        ["General firmness across the lower face", "Radiofrequency", "Course, spaced", "Minimal"],
        ["Recessed chin or flat mid-face", "Volume support on bone", "Staged over sessions", "1–2 days swelling"],
        ["Fat and laxity together", "Sequenced: fat first, then firmness", "Assessed individually", "Individual"],
      ],
    },

    // ── results · these captions say "before and after treatment", not "after a
    // course of treatment" as elsewhere. That is deliberate: several contouring
    // treatments are a single appointment, and describing one injection as a
    // course would overstate what the photograph shows (ADR-0001 §2).
    // -11, -12 and -13 were removed: they repeat the cases in -03, -09 and -04
    // in the legacy "Beauty begins" frame.
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
    ],

    // ── 12
    firstVisit: {
      intro:
        "Fat, muscle, skin and structure are assessed separately, front-on and in profile.",
      steps: [
        {
          title: "History",
          body: "Your weight history, whether you clench or grind, and any previous injectables, threads or surgery.",
        },
        {
          title: "Examination",
          body: "Including a pinch test under the chin and a clench test at the angle of the jaw.",
        },
        {
          title: "Discussion and plan",
          body: "Which layer is responsible, and whether the outcome you have in mind is achievable, with no obligation to proceed.",
        },
      ],
    },
    visitImages: [
      {
        src: "https://cdn.kaiteki.my/concerns/face-contouring/procedure-02.png",
        caption: "Focused ultrasound being applied along the jawline, one line at a time, at depths chosen for the area.",
      },
    ],

    // ── 13
    risks: {
      items: [
        {
          lead: "Common and usually temporary",
          body: "Swelling, bruising, tenderness and numbness over the treated area for several days. Muscle-relaxing injection can cause temporary aching or a feeling of weakness when chewing. Fat-reduction treatment often leaves the area firm and tender for a week or more.",
        },
        {
          lead: "Uncommon but important",
          body: "Injectables carry a rare but serious risk of vascular occlusion, and muscle-relaxing injection can, uncommonly, affect a neighbouring muscle and alter the smile temporarily.",
        },
        {
          lead: "Asymmetry is normal, and worth knowing about",
          body: "Almost every face is asymmetric before treatment. The doctor should point it out at assessment so it is not later mistaken for a treatment effect.",
        },
        {
          lead: "Pigment change and Malaysian skin",
          body: "Where energy-based devices are used along the jawline, medium and deeper skin tones carry a higher chance of post-inflammatory pigment change. Settings are chosen conservatively for this reason.",
        },
        {
          lead: "What treatment cannot do",
          body: "Nothing on this page changes bone, so a jaw or chin outline set by structure will not be produced by injectables or devices. Fat reduction does not tighten loose skin, and muscle-relaxing injection does not remove fat. Effects are not permanent and are maintained rather than fixed.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant or breastfeeding, take blood thinners, have a neuromuscular condition, have a hernia or cold-sensitivity condition relevant to cooling treatment, have had facial surgery, threads or injectables before, or have a history of cold sores or keloid scarring.",
    },

    // ── 14
    costFactors: {
      intro:
        "Pricing is set after assessment. It depends on:",
      factors: [
        "Which layer is being treated: fat, muscle, skin and structure are entirely different treatments.",
        "The area and how much of it: under the chin only, the jawline, or the lower face as a whole.",
        "The product or device chosen, and how much of it your anatomy calls for.",
        "How many stages, since contouring is often sequenced with a review between stages.",
        "How often maintenance is likely, because muscle-relaxing and volume treatments are repeated over time.",
      ],
    },

    // ── 15
    technologyIntro:
      "Contouring draws on cooling, ultrasound, radiofrequency and injectables, because the four things that shape a jawline need four different tools.",

    // ── 16
    faqs: [
      {
        q: "How do I know whether it is fat or loose skin under my chin?",
        a: "The pinch test is the usual starting point: if you can hold it between finger and thumb and it feels soft and substantial, fat is likely part of it. If gently drawing the skin back toward the ear restores the jaw outline, laxity is contributing.",
      },
      {
        q: "Does treating the masseter muscle change my face shape?",
        a: "It can, where the muscle is genuinely contributing to width at the back of the jaw. The muscle works less forcefully after treatment and gradually reduces in bulk over weeks, which softens the outline viewed from the front.",
      },
      {
        q: "Is chin filler safe?",
        a: "In trained hands and with an appropriate product, it is a well-established treatment, but it is not trivial. The chin and jaw area contains arteries, and the serious risk with any filler is accidental placement into a vessel.",
      },
      {
        q: "Will fat freezing under my chin help me lose weight?",
        a: "No. It targets a localised pocket in a specific area and does not change your overall weight or treat obesity. It is generally considered for people who are near a stable weight and have a defined pocket that has not responded to diet and exercise.",
      },
      {
        q: "Will I look overdone?",
        a: "That risk comes almost entirely from too much product placed to chase a shape the face cannot naturally hold. It is avoided by treating conservatively, staging over sessions and reviewing between them, and by the doctor being willing to say that a request is not proportionate.",
      },
      {
        q: "Can men have face contouring?",
        a: "Yes, and jaw and chin definition is one of the more common reasons men attend. The assessment differs, because a male jawline is typically wider and more angular and treatment aimed at a narrower outline would be the wrong goal.",
      },
      {
        q: "Can I bring a photo of the look I want?",
        a: "Please do. Be prepared for an honest answer: reference images are often of faces with different bone structure, and sometimes the truthful response is that the outline in the picture is not reachable on your face by any non-surgical route.",
      },
      {
        q: "What if nothing here suits me?",
        a: "Then that is what the consultation should tell you. If the change you want requires surgery, or if the assessment finds nothing that treatment would meaningfully improve, our doctors will say so and, where appropriate, suggest a surgical opinion.",
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
    image: "https://cdn.kaiteki.my/concerns/face-lifting/card.jpg",
    summary:
      "Sagging along the jawline, neck or mid-face can be addressed with non-surgical lifting options.",
    leadAnswer:
      "Sagging comes from three layers: the skin loosening, the face losing volume, and the deeper tissue under the skin descending. Non-surgical options such as focused ultrasound, laser protocols and collagen-stimulating injectables work gradually, in degrees of firmness rather than lift.",
    treatments: [
      "hifu",
      "ultherapy",
      "fotona-4d",
      "microwave-contouring",
      "bio-stimulator",
      "dermal-fillers",
    ],
    reviewedBy: "dr-hong-peiyi",
    lastReviewed: "2026-06-12",
    seoTitle: "Non-Surgical Face Lifting Treatment in Malaysia | Kaiteki",
    seoDescription:
      "Firmness and skin laxity are assessed before any non-surgical face lifting treatment is discussed. Book a free consultation to find what may suit you.",
    // ── 01
    banner: {
      src: "https://cdn.kaiteki.my/concerns/face-lifting/hero.jpg",
      sm: "https://cdn.kaiteki.my/concerns/face-lifting/hero-mobile.jpg",
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
        value: "Sitting upright",
        label: "Laxity is examined upright, because it looks different lying down.",
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
        heading: "What is non-surgical face lifting?",
        body: [
          "As a concern, face lifting means wanting firmer skin that sits higher, mainly along the cheeks, jawline and neck.",
        ],
      },
    ],

    // ── 04 · archetype E: what influences it. No figures: three were generic
    // renders or stock, and the one with real information (the SMAS layer) is
    // now the face-layers diagram beside the tabs.
    drivers: {
      heading: "What influences facial firmness",
      intro:
        "Several of these at once, and which one leads decides the treatment:",
      items: [
        {
          lead: "Collagen and elastin decline:",
          body: "the scaffolding that holds skin taut is renewed more slowly from the mid-twenties onward, so the skin recovers its shape less readily after it is stretched.",
        },
        {
          lead: "Changes in muscle and the layer beneath:",
          body: "the sheet of muscle and connective tissue under the skin, the SMAS, loosens with age, and the ligaments that anchor it to bone stretch.",
        },
        {
          lead: "Gravity and time:",
          body: "constant downward load on tissue that resists it less each year, so change shows first along the jawline and under the chin.",
        },
      ],
      outro:
        "Sun exposure, smoking and rapid weight loss accelerate all of it.",
    },

    // ── 05 · the differentiator for archetype E: which layer is driving it.
    // The routing lines are the point — the same face can need three different
    // conversations depending on the answer. The face-layers diagram beside the
    // tabs brings the active layer forward.
    variant: {
      kind: "tabs",
      heading: "Which layer is it?",
      diagram: "face-layers",
      intro:
        "Non-surgical lifting is three different conversations, and most faces involve more than one.",
      tabs: [
        {
          focus: "skin",
          label: "Skin",
          sub: "Surface laxity and texture",
          title: "Skin-level laxity",
          body: "The skin itself has thinned and lost elasticity. Pinch it gently on the cheek and it returns to place slowly.",
          routing:
            "commonly assessed for energy-based tightening or collagen-stimulating treatments aimed at skin quality.",
        },
        {
          focus: "volume",
          label: "Volume",
          sub: "Flattening and hollowing",
          title: "Volume-related change",
          body: "The face has deflated rather than descended. Cheeks flatten, the temples and under-eye area hollow, and the folds either side of the mouth deepen because the support above them has gone, not because the skin below has slipped.",
          items: [
            {
              lead: "The tell:",
              body: "lying down, or lifting the cheek gently with a fingertip, restores much of the shape.",
            },
          ],
          routing:
            "assessed for volume support or collagen-stimulating injectables, placed to rebuild structure rather than to fill a line.",
        },
        {
          focus: "structure",
          label: "Deeper structure",
          sub: "Jowls, jawline and neck",
          title: "Structural descent",
          body: "The layer beneath the skin has loosened, and tissue has genuinely moved downward. Jowls break the jawline, the neck angle softens, and pulling the skin taut with a hand makes an obvious difference to the outline of the face.",
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
        "Different categories of intervention, not two strengths of one.",
      cards: [
        {
          title: "What non-surgical options do",
          body: "Heat or stimulate tissue to build collagen, or support structure with injectables. Change is gradual and measured in firmness, not centimetres.",
        },
        {
          title: "What surgery does",
          body: "Repositions and removes tissue under anaesthetic. Reaches descent no device does, with recovery, scars and surgical risk.",
        },
        {
          title: "Downtime and commitment",
          body: "Non-surgical treatments are typically same-day, with little or no time away from work. Surgery involves weeks of recovery.",
        },
      ],
    },

    // ── 07
    seeDoctor: {
      heading: "When it is worth an assessment",
      intro:
        "There is no age or threshold at which lifting treatment becomes appropriate. It is worth an assessment if:",
      triggers: [
        "You are noticing the jawline losing definition, or jowls forming either side of the chin.",
        "Skin along the neck feels looser, or the angle under the jaw has softened.",
      ],
    },

    // ── 08
    ctaMid: {
      heading: "Not sure if it's skin, volume or structure?",
      body: "Send us a photo on WhatsApp and a doctor can tell you which layer is driving what you're seeing, and whether a non-surgical option can reach it.",
    },

    // ── 09
    treatmentsIntro:
      "Which fits depends on the layer responsible:",
    treatmentWhy: {
      hifu: {
        why: "For laxity along the jawline and neck",
        body: "Focused ultrasound delivered to set depths beneath the skin, including the layer surgeons address.",
      },
      ultherapy: {
        why: "For lifting with ultrasound imaging to guide it",
        body: "The same principle as HIFU, with real-time imaging so the doctor can see the tissue layers as energy is delivered.",
      },
      "fotona-4d": {
        why: "For laxity treated from inside the mouth outwards",
        body: "A laser protocol that works in several passes, one of them delivered through the inside of the cheek.",
      },
      "microwave-contouring": {
        why: "For fullness under the chin that blurs the jawline",
        body: "Targets fat and skin firmness in the submental area.",
      },
      "bio-stimulator": {
        why: "For gradual collagen rebuilding over months",
        body: "An injectable that prompts the skin to produce its own collagen rather than adding volume directly.",
      },
      "dermal-fillers": {
        why: "For support where volume loss is doing the sagging",
        body: "Placed to rebuild structure in a flattened mid-face rather than to fill a line.",
      },
    },

    // ── 10
    compare: {
      intro:
        "A general guide. Most plans combine approaches, and collagen-based plans include review points.",
      columns: ["What you have", "Commonly considered", "Typical course", "Downtime"],
      rows: [
        ["Skin looseness and crepe texture", "Collagen-stimulating treatment", "Course, then maintenance", "Minimal"],
        ["Mild jawline softening", "Focused ultrasound", "Single session, reviewed", "None to minimal"],
        ["Flattened mid-face", "Volume support or bio-stimulator", "Staged over sessions", "1–2 days swelling"],
        ["Fullness under the chin", "Microwave contouring", "Assessed individually", "Several days tenderness"],
        ["Firmness plus skin quality", "Laser protocol across depths", "Course, spaced", "1–3 days redness"],
      ],
    },

    // ── results · -11 (burned-in "Lifted & Firmed / Restored collagen / More
    // youthful look") and -14, -15 (burned-in "1 session") were removed: both
    // are outcome claims under the advertising rules (docs/02 §8).
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
      { src: "https://cdn.kaiteki.my/concerns/face-lifting/before-after-12.jpg", nativeWidth: 1080, ratio: "1/1", caption: "Facial firmness, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-lifting/before-after-13.jpg", nativeWidth: 1080, ratio: "1/1", caption: "Facial firmness, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-lifting/before-after-16.jpg", nativeWidth: 600, ratio: "1/1", caption: "Facial firmness, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/face-lifting/before-after-17.jpg", nativeWidth: 1415, ratio: "1/1", caption: "Jawline and neck contour, before and after a course of treatment at Kaiteki" },
    ],

    // ── 12
    firstVisit: {
      intro:
        "Skin quality, volume and descent are assessed separately, sitting upright.",
      steps: [
        {
          title: "History",
          body: "Previous treatments, surgery, threads or injectables, and your medical history.",
        },
        {
          title: "Examination",
          body: "Each layer is examined in turn.",
        },
        {
          title: "Discussion and plan",
          body: "Which layer is leading, what each option can reach, and whether a surgical opinion would serve you better.",
        },
      ],
    },

    // ── 12 media · the clinic's own session photography (Drive "Media Sync",
    // issue #16). Each concern renders different photographs, so no image
    // appears on two concern pages.
    visitImages: [
      {
        src: "https://cdn.kaiteki.my/concerns/face-lifting/procedure-02.png",
        caption: "Microfocused ultrasound with on-screen imaging, which lets the doctor see the layers beneath the skin before energy is delivered.",
      },
    ],

    // ── 13
    risks: {
      items: [
        {
          lead: "Common and usually temporary",
          body: "Redness, swelling, tenderness and a tingling or numb sensation over the treated area for a few days. Bruising is common with injectables. Less common effects include prolonged swelling, lumps under the skin, or a temporary change in sensation.",
        },
        {
          lead: "Uncommon but important",
          body: "Energy-based lifting can, rarely, cause a temporary weakness in a facial nerve branch or a small area of fat loss. Injectables carry a rare but serious risk of vascular occlusion.",
        },
        {
          lead: "Pigment change and Malaysian skin",
          body: "Where laser or energy is used, medium and deeper skin tones carry a higher chance of post-inflammatory pigment change. Settings are chosen conservatively for this reason, and sun protection afterwards is part of the plan.",
        },
        {
          lead: "What treatment cannot do",
          body: "No non-surgical treatment removes excess skin or stops ageing, and advanced descent is beyond these options. Collagen-based change builds over months and is maintained, not permanent.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant or breastfeeding, take blood thinners, have an autoimmune or connective-tissue condition, have a pacemaker or metal implants in the treatment area, have had facial surgery, threads or injectables before, or have a history of cold sores or keloid scarring.",
    },

    // ── 14
    costFactors: {
      intro:
        "Pricing is set after assessment. It depends on:",
      factors: [
        "Which layer is being treated: skin quality, volume support and deeper lifting are different treatments with different structures.",
        "The area: lower face and jawline only, full face, or including the neck.",
        "The device or product chosen, and how much of it your assessment calls for.",
        "How many sessions, and over what period, which is set after assessment.",
        "Whether more than one approach is combined, which is common where several layers are involved.",
      ],
    },

    // ── 15
    technologyIntro:
      "Lifting treatments differ mainly in the depth they reach and how they deliver energy there.",


    // ── 16
    faqs: [
      {
        q: "What is the difference between non-surgical and surgical face lifting?",
        a: "A surgical face-lift repositions and removes tissue directly under anaesthetic, performed by a qualified surgeon, and it reaches a degree of descent no device can. Non-surgical options work by stimulating the skin to build collagen, or by supporting structure with injectables, and the change is gradual and partial.",
      },
      {
        q: "How long does the effect last?",
        a: "Collagen-based treatments build change over several months and then that change gradually recedes as ageing continues, so they are typically repeated periodically rather than done once.",
      },
      {
        q: "Is it painful?",
        a: "Most people describe energy-based lifting as uncomfortable rather than painful, with a deep warm or prickling sensation that comes in pulses. Numbing cream, cooling and, where appropriate, oral pain relief are used. Injectables are generally more comfortable, often with local anaesthetic in the product.",
      },
      {
        q: "How soon will I see a difference?",
        a: "With collagen-stimulating treatments, gradually. A degree of immediate tightening is sometimes noticeable from tissue contraction, but the meaningful change comes as new collagen forms over the following months, and it is often more obvious to other people than to you.",
      },
      {
        q: "Will it make my face look done or unnatural?",
        a: "Energy-based lifting does not add anything to the face, so it does not carry that risk in the way injectables can. With volume support, an overdone look almost always comes from too much product placed to fill lines rather than to rebuild structure.",
      },
      {
        q: "Is there any downtime?",
        a: "For most energy-based lifting, little to none: some redness, warmth and tenderness for a day or two, and you can generally go back to work the same day. Injectables can leave bruising and swelling for several days, which is worth planning around if you have an event.",
      },
      {
        q: "Can I have this if I have had fillers or threads before?",
        a: "Usually yes, but the doctor needs to know exactly what you have had and when, because it changes the assessment and sometimes the technique. Bring records if you have them, including product names and dates.",
      },
      {
        q: "Can non-surgical lifting treat the neck?",
        a: "The neck is commonly assessed alongside the lower face. It also behaves differently: skin there is thinner, has less support beneath it and recovers more slowly, so treatment is typically more conservative.",
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
    image: "https://cdn.kaiteki.my/concerns/aging/card.jpg",
    summary:
      "Firmness, texture and volume change at different rates.",
    leadAnswer:
      "Skin ageing is gradual change in firmness, texture, hydration and volume, driven by genetics and time (intrinsic ageing) and, to a large extent, by cumulative sun exposure and habits (extrinsic ageing).",
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
    // ── 01 · Pexels (pexels.com/photo/7859324), wall extended right; uploaded
    // by hand (`manual` in config/concern-media.json).
    banner: {
      src: "https://cdn.kaiteki.my/concerns/aging/banner.jpg",
      sm: "https://cdn.kaiteki.my/concerns/aging/banner-mobile.jpg",
      alt: "Illustrative photograph: a mature woman with short greying hair and a light scarf, in profile, against a plain light grey background",
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
        value: "Staged, not all at once",
        label: "Plans address the leading change first and review before adding more.",
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
          "Skin ageing is the gradual loss of collagen, elasticity, hydration and volume.",
        ],
      },
    ],

    // ── 04 · causes. No figures are authored: this concern has none in the
    // inventory (docs/11 §2).
    drivers: {
      heading: "What causes it",
      intro:
        "Several processes run in parallel, at different speeds:",
      items: [
        {
          lead: "Collagen and elastin decline:",
          body: "production slows from the mid-twenties and the existing framework degrades, so skin becomes thinner, less firm and slower to spring back.",
        },
        {
          lead: "Cumulative UV exposure:",
          body: "the single largest external contributor, and the one most within your control.",
        },
        {
          lead: "Volume loss and redistribution:",
          body: "fat pads in the mid-face shrink and descend, and bone itself remodels over decades.",
        },
        {
          lead: "Reduced hydration and barrier function:",
          body: "skin holds less water and produces less oil over time, which makes it drier, duller and more easily irritated, and makes fine lines read more sharply than they otherwise would.",
        },
        {
          lead: "Lifestyle and health:",
          body: "smoking, heavy alcohol use, disturbed sleep, a diet high in sugar and chronic stress all accelerate the same processes.",
        },
      ],
    },

    // ── 05 · the differentiator. Registry note for this concern: use stages,
    // not types (config/concerns.json `variantNote`). Each stage ends in a
    // routing line rather than a recommendation — the doctor decides.
    variant: {
      kind: "tabs",
      heading: "Where you are on it",
      intro:
        "These stages overlap, but they change what a sensible plan looks like.",
      tabs: [
        {
          label: "Early",
          sub: "Quality and prevention",
          title: "Early change",
          body: "The face still holds its shape. What has changed is skin quality: a little less bounce, fine lines appearing on movement, tone less even, and skin that looks tired earlier in the day than it used to.",
          routing:
            "commonly assessed for skin-quality treatment and a sensible daily routine rather than anything structural.",
        },
        {
          label: "Established",
          sub: "Lines at rest, early laxity",
          title: "Established change",
          body: "Lines are now visible when the face is relaxed, the mid-face has begun to flatten, and the jawline is a little less crisp than it was.",
          routing:
            "assessed as a sequence across skin quality, volume and firmness, with review points between stages.",
        },
        {
          label: "Advanced",
          sub: "Laxity, folds and texture",
          title: "Advanced change",
          body: "Laxity along the jawline and neck, deeper folds, significant volume loss and accumulated sun damage in the skin surface.",
          routing:
            "assessed individually, with a frank discussion about what non-surgical treatment can and cannot reach.",
        },
      ],
    },

    // ── 06
    locationBlock: {
      heading: "Where ageing shows first",
      cards: [
        {
          title: "Around the eyes",
          body: "The thinnest skin on the face, in near-constant movement. Usually the first area to show fine lines, crepiness and hollowing, often a decade before anywhere else.",
        },
        {
          title: "Mid-face and cheeks",
          body: "Where volume loss shows most clearly, and what deepens the folds below.",
        },
        {
          title: "Around the mouth",
          body: "Fine vertical lines on the lip and folds running from the mouth corners.",
        },
        {
          title: "Jawline and lower face",
          body: "Where descent becomes visible: the jaw stops reading as one clean line and the neck angle softens.",
        },
        {
          title: "Neck, chest and hands",
          body: "Thin skin, few oil glands and decades of missed sunscreen.",
        },
      ],
      note: {
        title: "Not ageing?",
        body: "A new or changing mark, a patch that is scaly, crusting or bleeding, or a lesion that will not heal is not a sign of ageing and should be examined promptly.",
      },
    },

    // ── 07
    seeDoctor: {
      intro:
        "There is no age at which an assessment becomes necessary. It is worth having one if:",
      triggers: [
        "Change seems to have accelerated over a short period, which is worth examining on its own.",
      ],
    },

    // ── 08
    ctaMid: {
      heading: "Not sure what's actually changing?",
      body: "Send us a photo on WhatsApp and a doctor can map it with you.",
    },

    // ── 09
    treatmentsIntro:
      "Plans are usually sequenced rather than chosen one from a list:",
    treatmentWhy: {
      "skin-booster": {
        why: "For hydration and skin quality overall",
        body: "Injectable hydration distributed across an area to improve how the skin holds water and reflects light.",
      },
      "resurfacing-laser": {
        why: "For sun damage, texture and tone together",
        body: "A fractional laser used where accumulated UV damage shows as roughness, uneven tone and etched lines at the same time.",
      },
      "fotona-4d": {
        why: "For a layered approach across several depths",
        body: "A laser protocol working in several passes at different depths, including one delivered from inside the mouth.",
      },
      hifu: {
        why: "For firmness in the lower third of the face",
        body: "Focused ultrasound delivered beneath the skin to prompt collagen change at depth.",
      },
      ultherapy: {
        why: "For a targeted lift where laxity leads the picture",
        body: "The same principle with ultrasound imaging so the doctor can see the tissue layers while treating.",
      },
      "bio-stimulator": {
        why: "For rebuilding structure gradually rather than filling",
        body: "An injectable that prompts your own collagen production over months instead of adding volume immediately.",
      },
      "dermal-fillers": {
        why: "For restoring volume where the face has flattened",
        body: "Placed to rebuild support in a deflated mid-face rather than to fill individual lines.",
      },
    },

    // ── 10
    compare: {
      intro:
        "A general guide. Most faces show several changes; collagen-based plans include review points.",
      columns: ["What you have", "Commonly considered", "Typical course", "Downtime"],
      rows: [
        ["Dullness and dehydration", "Skin boosters", "Short course, then maintenance", "1–2 days swelling"],
        ["Sun damage, texture and uneven tone", "Resurfacing laser", "Assessed individually", "5–7 days"],
        ["Fine lines with good firmness", "Skin-quality treatment", "Course, spaced", "Minimal"],
        ["Flattened mid-face", "Volume support or bio-stimulator", "Staged over sessions", "1–2 days swelling"],
        ["Softening jawline", "Focused ultrasound", "Single session, reviewed", "None to minimal"],
        ["Firmness and surface quality together", "Laser protocol across depths", "Course, spaced", "1–3 days redness"],
      ],
    },

    // ── results
    results: [
      { src: "https://cdn.kaiteki.my/concerns/aging/before-after-01.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Skin tone and texture, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/aging/before-after-02.jpg", nativeWidth: 1410, ratio: "1/1", caption: "Overall skin quality, before and after a course of treatment at Kaiteki" },
    ],

    // ── 12
    firstVisit: {
      intro:
        "Skin quality, tone, volume and firmness are assessed separately.",
      steps: [
        {
          title: "History",
          body: "Your sun habits, smoking, skincare and previous treatments.",
        },
        {
          title: "Examination",
          body: "Sitting upright, sometimes under magnification.",
        },
        {
          title: "Discussion and plan",
          body: "Which change is leading, and a conservative first step.",
        },
      ],
      outro:
        "Bring photographs of yourself from five or ten years ago: gradual change is hard to judge from a mirror.",
    },
    visitImages: [
      {
        src: "https://cdn.kaiteki.my/concerns/aging/procedure-02.jpg",
        caption: "A laser session for skin ageing in progress. Settings are matched to your skin type, and gentler settings are often chosen for deeper skin tones.",
      },
    ],

    // ── 13
    risks: {
      items: [
        {
          lead: "Common and usually temporary",
          body: "Redness, swelling, bruising, dryness, flaking and tenderness for a few days depending on the treatment. Laser-based treatment leaves the skin sensitive and requires careful aftercare while it recovers.",
        },
        {
          lead: "Uncommon but important",
          body: "Injectables carry a rare but serious risk of vascular occlusion, and collagen-stimulating products can occasionally form nodules under the skin. Energy-based treatment can, rarely, cause a burn or a small area of fat loss.",
        },
        {
          lead: "Pigment change and Malaysian skin",
          body: "Medium and deeper skin tones carry a higher chance of post-inflammatory hyperpigmentation after laser or energy-based treatment. Settings are chosen conservatively, sessions are spaced further apart, and daily sun protection is a condition of the plan rather than a suggestion.",
        },
        {
          lead: "What treatment cannot do",
          body: "Nothing here stops or reverses ageing. No device removes excess skin, and results are maintained rather than permanent.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant or breastfeeding, take blood thinners, have an autoimmune or connective-tissue condition, use retinoids or acids, have a history of cold sores or keloid scarring, have had injectables, threads or facial surgery before, or have tanned recently.",
    },

    // ── 14
    costFactors: {
      intro:
        "Pricing is set after assessment. It depends on:",
      factors: [
        "Which change is being treated, since skin quality, tone, volume and firmness are separate treatments.",
        "How many areas: face only, or including the neck, chest and hands.",
        "The device or product chosen, and how much of it your assessment calls for.",
        "How many sessions and over what period, which is set after assessment and adjusted at review.",
        "Whether the plan is staged across several treatments, which is common at this concern.",
      ],
    },

    // ── 16
    faqs: [
      {
        q: "Can skin ageing be prevented?",
        a: "Not the intrinsic part, which is driven by genetics and time and happens to everyone. The extrinsic part is a different matter: cumulative UV exposure accounts for a large share of what people describe as ageing skin, and daily broad-spectrum sunscreen is by a distance the most evidenced thing you can do about it.",
      },
      {
        q: "Does skincare make a real difference?",
        a: "For skin quality, yes: sunscreen, well-formulated retinoids and antioxidants have reasonable evidence behind them and support any in-clinic plan. What skincare cannot do is restore lost volume, lift descended tissue or rebuild collagen at depth, so expectations should match the mechanism.",
      },
      {
        q: "How soon will I see a difference?",
        a: "It depends on the treatment. Collagen-stimulating and energy-based treatments build gradually over several months, and are often more noticeable to other people than to you.",
      },
      {
        q: "Will treatment make me look unnatural?",
        a: "That risk comes almost entirely from doing too much at once, particularly with volume. Conservative, staged treatment with a review point between stages is how it is avoided, along with a doctor willing to say that a request is not proportionate.",
      },
      {
        q: "How long do the effects last?",
        a: "Volume support is gradually broken down by the body over a period of months to years depending on the product and placement. Collagen-based change builds and then recedes.",
      },
      {
        q: "Is laser treatment safe for Asian skin?",
        a: "Yes, when the device and settings are chosen by a doctor experienced with your skin type. The specific consideration in medium and deeper tones is post-inflammatory hyperpigmentation, where the skin responds to treatment by producing extra pigment.",
      },
      {
        q: "Should I treat my neck and hands as well?",
        a: "They are worth assessing, and they are often noticeably more sun-damaged than the face because they are protected least. A face treated in isolation while the neck and hands are left can end up looking mismatched.",
      },
      {
        q: "What is the difference between intrinsic and extrinsic ageing?",
        a: "Intrinsic ageing is what your genes and the passage of time do regardless of how you live: gradual collagen decline, thinning skin, volume change. Extrinsic ageing is what environment and habits add on top, and it is dominated by UV exposure, with smoking, pollution and diet contributing.",
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
    image: "https://cdn.kaiteki.my/concerns/body-slimming/card.jpg",
    summary:
      "Stubborn fat in specific areas can be targeted without surgery.",
    leadAnswer:
      "Body contouring targets localised pockets of fat (the lower abdomen, flanks, bra line) that persist at a stable weight, using fat freezing, microwave energy or muscle stimulation.",
    treatments: ["fat-freezing", "microwave-contouring", "muscle-stimulation"],
    reviewedBy: "dr-joaan-kong",
    lastReviewed: "2026-06-08",
    seoTitle: "Body Slimming Treatment & Assessment in Malaysia | Kaiteki",
    seoDescription:
      "Localised fat pockets are assessed individually. Body slimming is not a weight-loss treatment. Book a free consultation to discuss suitable options today.",
    // ── 01
    banner: {
      src: "https://cdn.kaiteki.my/concerns/body-slimming/hero.jpg",
      sm: "https://cdn.kaiteki.my/concerns/body-slimming/hero-mobile.jpg",
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
        value: "Pinch test",
        label: "Whether the fat can be drawn into an applicator decides whether cooling applies.",
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
        heading: "What is body contouring?",
        body: [
          "Body contouring, often called body slimming, describes in-clinic treatments aimed at the shape of a specific area (a fat pocket, muscle tone or skin firmness) rather than body weight.",
        ],
      },
    ],

    // ── 04 · archetype B: what the treatment is actually aimed at. No figures:
    // the four stock photographs were decorative and read as body-shaming.
    drivers: {
      heading: "What contouring actually addresses",
      intro:
        "Where your body stores fat is largely genetic. The areas that most often persist:",
      items: [
        {
          lead: "The lower abdominal pouch:",
          body: "a pocket below the navel that persists at a stable weight, common after pregnancy.",
        },
        {
          lead: "Flanks and love handles:",
          body: "fat over the sides of the waist above the belt line. Spot exercise does not reduce it.",
        },
        {
          lead: "Bra line and upper back:",
          body: "folds across the back and under the arm that show through fitted clothing.",
        },
        {
          lead: "Skin texture and cellulite:",
          body: "dimpling caused by fibrous bands tethering skin to deeper tissue while fat pushes between them.",
        },
      ],
    },

    // ── 05 · archetype B: claim and reality. This is the page's whole job. Most
    // of the harm in this category comes from what people believe before they
    // arrive, so the correction is the differentiator.
    variant: {
      kind: "pairs",
      heading: "What it does and doesn't do",
      intro:
        "Five common beliefs, and what is actually true:",
      pairs: [
        {
          claim: "It will help me lose weight.",
          reality:
            "It will not. Contouring reduces or reshapes fat in one area; it does not lower your overall weight and it is not a treatment for obesity.",
        },
        {
          claim: "The fat comes back somewhere else.",
          reality:
            "Fat cells removed from a treated area do not relocate. What happens is that if you gain weight afterwards, the fat cells you still have everywhere else enlarge, and the treated area can look proportionally different.",
        },
        {
          claim: "One session and it's done.",
          reality:
            "Most areas are planned as a course with review points, and change from fat-reduction treatment builds over weeks to months as the body clears treated cells.",
        },
        {
          claim: "It will tighten loose skin too.",
          reality:
            "Fat reduction and skin firmness are different problems. Reducing fat under loose skin can make the looseness more visible rather than less.",
        },
        {
          claim: "Cellulite can be removed.",
          reality:
            "It can sometimes be made less obvious, but it is a structural feature of how skin attaches to the tissue beneath, present in people of every size and fitness level.",
        },
      ],
    },

    // ── 07 · archetype B has no location block, so this follows the variant.
    seeDoctor: {
      intro: "Have an area assessed if:",
      triggers: [
        "A specific area has not changed despite a stable weight and consistent exercise.",
        "You are unsure whether what you are looking at is fat, loose skin or muscle tone.",
      ],
    },

    // ── 08
    ctaMid: {
      heading: "Not sure if it's fat or loose skin?",
      body: "Send us a photo on WhatsApp and a doctor can tell you which it is.",
    },

    // ── 09
    treatmentsIntro:
      "Which fits depends on whether the area shows fat, looseness or low muscle tone:",
    treatmentWhy: {
      "fat-freezing": {
        why: "For a pinchable pocket that diet has not shifted",
        body: "Controlled cooling applied to a defined pocket of fat, which the body then clears over the following weeks.",
      },
      "microwave-contouring": {
        why: "For fat and skin firmness in one pass",
        body: "Delivers energy that addresses fat volume and skin quality in the same treatment.",
      },
      "muscle-stimulation": {
        why: "For muscle tone under the fat layer",
        body: "Prompts intense muscle contraction to build tone in the underlying muscle rather than to reduce fat.",
      },
    },

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
        "The area is examined standing and seated, with a pinch test to separate fat from loose skin.",
      steps: [
        {
          title: "History",
          body: "Your weight over the past year or two, any pregnancies, and what you have already tried.",
        },
        {
          title: "Examination",
          body: "The doctor judges whether the pocket suits the treatments available.",
        },
        {
          title: "Discussion and plan",
          body: "What is realistic, including waiting until your weight settles.",
        },
      ],
    },
    visitImages: [
      {
        src: "https://cdn.kaiteki.my/concerns/body-slimming/procedure-02.png",
        caption: "A microwave-based body treatment on the lower abdomen. The handpiece keeps moving over the marked area.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/body-slimming/procedure-03.png",
        caption: "A cooling applicator in place on the upper arm. The area is assessed and marked before the applicator goes on.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/body-slimming/procedure-04.png",
        caption: "Smaller areas such as the upper arm are assessed separately, because what suits the abdomen may not suit them.",
      },
    ],

    // ── 13
    risks: {
      items: [
        {
          lead: "Common and usually temporary",
          body: "Redness, swelling, firmness, tenderness, bruising, tingling and numbness over the treated area, sometimes for several weeks. Muscle-stimulation treatment commonly leaves aching similar to a hard workout.",
        },
        {
          lead: "Uncommon but important",
          body: "Cooling-based fat reduction carries a rare risk of paradoxical adipose hyperplasia, where the treated area enlarges rather than reduces and typically requires surgical correction. Prolonged numbness and, rarely, changes in skin sensation can also occur.",
        },
        {
          lead: "Pigment change and Malaysian skin",
          body: "Where energy-based devices are used, medium and deeper skin tones carry a higher chance of post-inflammatory pigment change in the treated area. Body skin also heals more slowly than the face, so settings are conservative and the area is kept covered or protected afterwards.",
        },
        {
          lead: "What treatment cannot do",
          body: "It brings no metabolic health benefit, and it cannot reduce overall weight, treat obesity or tighten loose skin. Cellulite is not removed.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant, breastfeeding or planning pregnancy, have a hernia in or near the area, have a pacemaker or metal implant, take blood thinners, have a cold-sensitivity condition such as cryoglobulinaemia or cold urticaria, or have had surgery in the area.",
    },

    // ── 14
    costFactors: {
      intro:
        "Pricing is set after assessment. It depends on:",
      factors: [
        "Which area, and how many areas are being treated in a plan.",
        "The size of the pocket, since larger areas take more applications to cover.",
        "Which treatment applies, because fat reduction, firmness and muscle tone are different treatments.",
        "How many sessions, which is set after assessment and reviewed as the area responds.",
        "Whether treatments are combined, which is common where fat and firmness both feature.",
      ],
    },

    // ── 15
    technologyIntro:
      "Fat volume, skin firmness and muscle tone are three different problems, and no single device addresses all three.",


    // ── 16
    faqs: [
      {
        q: "Will the fat come back?",
        a: "Fat cells removed from a treated area do not return or move elsewhere. The result depends on your weight staying reasonably stable.",
      },
      {
        q: "How soon will I see a difference?",
        a: "Gradually. Fat-reduction treatment works by causing treated cells to be cleared by the body over the following weeks and months, so there is nothing to see immediately and the area may in fact look swollen at first.",
      },
      {
        q: "Does it hurt?",
        a: "Cooling-based treatment is uncomfortable at first as the area numbs, then usually tolerable, with pulling and tugging sensations from the applicator. Muscle stimulation feels like intense involuntary contractions and leaves aching similar to a hard workout. None of it requires anaesthetic.",
      },
      {
        q: "Can it treat cellulite?",
        a: "The appearance can sometimes be improved, but cellulite is not removed by any treatment on this page.",
      },
      {
        q: "Can I have this after pregnancy?",
        a: "It is generally deferred until you have finished breastfeeding and your weight and body have settled, which usually takes several months at least. Abdominal separation is also assessed first, because a gap between the abdominal muscles produces a shape no contouring treatment addresses and is managed with physiotherapy.",
      },
      {
        q: "How do I know if I'm a suitable candidate?",
        a: "The usual picture is someone at or near a stable weight, in reasonable health, with a defined area that has not responded to diet and exercise, and with realistic expectations about the scale of change. If your weight is still moving, or if the concern is overall size, the honest answer is often no.",
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
    image: "https://cdn.kaiteki.my/concerns/hair-loss/card.jpg",
    summary:
      "Thinning, receding and patchy hair loss each have different causes.",
    leadAnswer:
      "Hair loss is a change from your usual pattern: gradual hereditary thinning, sudden shedding after illness, childbirth or stress, patchy loss, or loss caused by a scalp or medical condition such as thyroid disease or low iron.",
    treatments: ["exosome-therapy"],
    reviewedBy: "dr-tim-chua",
    lastReviewed: "2026-06-06",
    seoTitle: "Hair Loss Treatment & Assessment in Malaysia | Kaiteki",
    seoDescription:
      "Hair loss has several patterns and causes, and a doctor identifies yours before any treatment. Book a free hair loss consultation with Kaiteki today.",
    // ── 01 · Pexels (pexels.com/photo/9755382), mirrored and faded into the
    // page on the right; uploaded by hand (`manual` in config/concern-media.json).
    banner: {
      src: "https://cdn.kaiteki.my/concerns/hair-loss/banner-skin.jpg",
      sm: "https://cdn.kaiteki.my/concerns/hair-loss/banner-skin-mobile.jpg",
      alt: "Illustrative photograph: an open hand holding a clump of shed hair, with a comb in the background",
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
        heading: "What counts as hair loss?",
        body: [
          "Each follicle moves through a repeating cycle: an active growing phase lasting years, a short transitional phase, and a resting phase after which the hair sheds and the follicle can begin again. Hair loss becomes a concern when the balance shifts, and the reason it has shifted matters more than the shedding itself.",
        ],
      },
    ],

    // ── 04 · archetype D: causes. Figures pair with these by position (see the
    // `figures` block below).
    drivers: {
      heading: "Common causes",
      intro:
        "Usually more than one of these at once:",
      items: [
        {
          lead: "Genetics and family history:",
          body: "hereditary pattern loss is by a wide margin the most common cause in both men and women.",
        },
        {
          lead: "Hormonal change:",
          body: "childbirth, stopping hormonal contraception, menopause and thyroid disorders all affect the growth cycle, and the loss is frequently temporary.",
        },
        {
          lead: "Physical or emotional stress:",
          body: "surgery, serious illness, rapid weight loss or a period of severe stress can push a large number of follicles into the resting phase at once.",
        },
        {
          lead: "Scalp conditions:",
          body: "fungal infection, seborrhoeic dermatitis and psoriasis inflame the scalp and disrupt the follicles in it.",
        },
        {
          lead: "Underlying medical conditions:",
          body: "thyroid disease, iron deficiency, autoimmune conditions and some chronic illnesses all show up in the hair.",
        },
        {
          lead: "Nutrition and medication:",
          body: "restrictive dieting, low iron or protein, and certain medications can all contribute.",
        },
        {
          lead: "Traction and styling:",
          body: "consistently tight braids, ponytails or extensions pull on the follicle over years. Caught early this is reversible; left long enough, the follicle scars and it is not.",
        },
      ],
    },

    // ── 05 · archetype D's differentiator: is this the primary condition, or a
    // sign of something else? On this concern that question decides whether the
    // right next step is a treatment at all.
    variant: {
      kind: "tabs",
      heading: "Which kind is it?",
      intro:
        "The most useful thing an assessment does here is separate hair loss that is the condition from hair loss that is a symptom of something else.",
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
          ],
          routing:
            "assessed for long-term medical management, with supportive in-clinic treatment discussed alongside it.",
        },
        {
          label: "Something else",
          sub: "Sudden, patchy or with symptoms",
          title: "Hair loss as a symptom",
          body: "Loss that came on suddenly, appears in discrete patches, follows an illness or a hormonal event, or comes with an itchy, scaly, sore or scarred scalp. Here the hair is a signal.",
          routing:
            "assessed with examination and, where indicated, blood tests, before any cosmetic treatment is discussed.",
        },
      ],
    },

    // ── 06 · archetype D: location grid, read as pattern across the scalp.
    locationBlock: {
      heading: "Pattern on the scalp",
      cards: [
        {
          title: "Temples and receding hairline",
          body: "A hairline moving back at the corners is the classic early male pattern. In women a receding frontal hairline is less typical and is worth assessing, as it points toward other causes.",
        },
        {
          title: "Widening central parting",
          body: "The most common female pattern: the parting broadens while the front hairline stays intact.",
        },
        {
          title: "Discrete round patches",
          body: "Smooth, well-defined bald patches appearing over weeks: a different condition from pattern loss, needing medical assessment.",
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
        "It followed childbirth, illness, surgery, rapid weight loss or a change in medication.",
        "You are also noticing fatigue, weight change, or changes to your nails or skin.",
      ],
    },

    // ── 08
    ctaMid: {
      heading: "Not sure what kind of hair loss you have?",
      body: "Send us a photo on WhatsApp and a doctor can tell you which needs looking at first.",
    },

    // ── 09
    treatmentsIntro:
      "Hair loss is managed medically first. What we offer in-clinic sits alongside that rather than replacing it, and whether it is appropriate depends entirely on what the assessment finds.",
    treatmentWhy: {
      "exosome-therapy": {
        why: "For supporting the scalp alongside medical treatment",
        body: "A regenerative preparation applied to the scalp to support the follicular environment. The evidence base is still developing, and it is offered as an adjunct to medical management rather than as a treatment for hair loss in its own right.",
      },
    },

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
        "The scalp is examined as well as the hair, and blood tests are often part of it.",
      steps: [
        {
          title: "History",
          body: "When it started, family history, recent illness, childbirth or new medication, and how you style your hair.",
        },
        {
          title: "Examination",
          body: "The pattern, the calibre of the hairs and the scalp beneath, sometimes under magnification.",
        },
        {
          title: "Investigation where indicated",
          body: "Blood tests for thyroid function and iron, particularly with diffuse or sudden loss.",
        },
        {
          title: "Discussion and plan",
          body: "The likely cause, and where in-clinic treatment fits alongside medical management.",
        },
      ],
    },
    // ── 04 media · pairs with the seven drivers by position (Q-19). Only the
    // Norwood chart and the parting photograph carry information; the stress
    // and traction stock photographs were removed, so the rest are null.
    figures: [
      {
        src: "https://cdn.kaiteki.my/concerns/hair-loss/image-pattern-scale.jpg",
        caption: "Genetic hair loss in men usually follows a recognisable pattern from the temples and crown, charted here on the Norwood scale.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/hair-loss/image-widening-parting.jpg",
        caption: "In women, hormonal and genetic hair loss more often shows as a widening parting than as bald patches.",
      },
      null,
      null,
      null,
      null,
      null,
    ],
    visitImages: [
      {
        src: "https://cdn.kaiteki.my/concerns/hair-loss/procedure-02.png",
        caption: "Scalp treatment is carried out along partings, so the doctor can see the skin directly.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/hair-loss/procedure-03.png",
        caption: "Injections into the scalp are given by the doctor, with the areas planned at the consultation.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/hair-loss/procedure-04.png",
        caption: "Some scalp treatments use a device rather than a needle.",
      },
    ],

    // ── 13
    risks: {
      items: [
        {
          lead: "Common and usually temporary",
          body: "Scalp tenderness, redness, mild swelling and itching after in-clinic treatment, usually settling within a few days. Some people notice a brief increase in shedding early in a course, which your doctor should warn you about in advance.",
        },
        {
          lead: "The evidence base is still developing",
          body: "Regenerative treatments for hair are an active area of research rather than settled practice.",
        },
        {
          lead: "Treating the wrong thing",
          body: "The most consequential risk on this page is not a side effect. It is spending months on cosmetic treatment while a thyroid disorder, an iron deficiency or a scarring scalp condition goes undiagnosed.",
        },
        {
          lead: "What treatment cannot do",
          body: "No treatment restores a follicle that has already scarred or been dormant for years, and nothing here changes the hereditary tendency behind pattern loss. Improvement is generally slow, measured over many months, and it is maintained rather than permanent.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant, breastfeeding or planning pregnancy, take blood thinners, have an autoimmune condition or thyroid disorder, take any regular medication or supplements, or have had a scalp condition, scalp surgery or a hair transplant.",
    },

    // ── 14
    costFactors: {
      intro:
        "Pricing is set after assessment. It depends on:",
      factors: [
        "Whether investigation such as blood testing is needed before anything is planned.",
        "The area being treated, since a receding hairline and a diffusely thinning scalp are different in scale.",
        "How many sessions, which is set after assessment and reviewed as the scalp responds.",
        "Whether ongoing medical management forms part of the plan alongside in-clinic treatment.",
      ],
    },

    // ── 16
    faqs: [
      {
        q: "How much hair loss is normal?",
        a: "What matters is change: more shedding than is usual for you, sustained over weeks, or a parting or hairline that looks different from photographs a year or two ago.",
      },
      {
        q: "Is hair loss treatable?",
        a: "It depends entirely on the cause. Loss driven by a thyroid disorder, iron deficiency, a scalp infection or a stressful event often improves once that cause is addressed. Hereditary pattern loss is managed long-term rather than cured.",
      },
      {
        q: "Is hair loss after childbirth permanent?",
        a: "Usually not. A large increase in shedding a few months after giving birth is a well-recognised pattern caused by many follicles entering the resting phase together as hormone levels change, and for most people it settles over the following months without treatment.",
      },
      {
        q: "Do supplements help?",
        a: "Only where you are genuinely deficient, in which case correcting the deficiency can make a real difference. Taking hair supplements without knowing your levels is guesswork, and it is not risk-free: excess of some nutrients, selenium and vitamin A among them, causes shedding in its own right.",
      },
      {
        q: "Does stress cause hair loss?",
        a: "It can, through a mechanism where a physical or emotional shock pushes many follicles into the resting phase at once. The shedding typically appears two to three months after the event, which is long enough afterwards that people often do not connect the two.",
      },
      {
        q: "Can women have hair loss too?",
        a: "Yes, and it is far more common than the way it is usually discussed suggests. Hormonal events, iron status and thyroid function are all frequent contributors and are routinely checked.",
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
    image: "https://cdn.kaiteki.my/concerns/tattoo-removal/card-2.jpg",
    summary:
      "Ink colour, depth and skin tone all affect how removal works.",
    leadAnswer:
      "Tattoo removal is the gradual fading of tattoo ink using laser energy that breaks pigment into smaller particles the body may clear over time.",
    treatments: ["pico-laser"],
    reviewedBy: "dr-calvin-tan",
    lastReviewed: "2026-07-13",
    seoTitle: "Laser Tattoo Removal Assessment in Malaysia | Kaiteki",
    seoDescription:
      "Ink type, colour, depth and skin type affect tattoo removal suitability and session count. A doctor assesses your tattoo. Book a free consultation today.",
    // ── 01
    banner: {
      src: "https://cdn.kaiteki.my/concerns/tattoo-removal/hero.jpg",
      sm: "https://cdn.kaiteki.my/concerns/tattoo-removal/hero-mobile.jpg",
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
          "Laser tattoo removal uses focused laser energy to break the ink held in the skin into fragments small enough for the body's own immune system to carry away. That is why the interval between sessions matters as much as the sessions themselves.",
        ],
      },
    ],

    // ── 04 · archetype C: what affects your session count. Figures pair with
    // these by position (see the `figures` block below).
    drivers: {
      heading: "What affects your session count",
      intro:
        "The tattoo is reviewed at each visit and the plan adjusted as it fades. What moves the count most:",
      items: [
        {
          lead: "Ink colour:",
          body: "different pigments absorb different wavelengths.",
        },
        {
          lead: "How deep the ink sits:",
          body: "professional tattoos place ink deeper and more densely than amateur ones. Deeper ink takes more sessions to reach and clear, and layered or covered-up work can hold several depths at once.",
        },
        {
          lead: "Size and density:",
          body: "a larger or heavily saturated piece simply contains more pigment.",
        },
        {
          lead: "Where it sits on the body:",
          body: "areas with stronger circulation clear fragments more readily than the hands, ankles and feet (see below).",
        },
        {
          lead: "Age of the tattoo and your own health:",
          body: "older tattoos have usually faded somewhat already. Smoking, poor circulation and anything that suppresses immune function slow the clearance the treatment depends on.",
        },
      ],
    },

    // ── 05 · archetype C's differentiator is a response table rather than a tab
    // set. Every cell is descriptive: how the ink behaves, never how well it
    // will clear or by when (R-01, R-02).
    variant: {
      kind: "table",
      heading: "How different inks respond",
      intro:
        "Ink composition is not standardised and is rarely documented, so this describes general behaviour rather than what your tattoo will do.",
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
      ],
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
          body: "Strong circulation and good lymphatic drainage.",
        },
        {
          title: "Hands, fingers, ankles and feet",
          body: "Slower drainage and thinner skin over bone. These typically need longer intervals and more patience, and they are the areas where expectations most often need adjusting.",
        },
        {
          title: "Face, neck and eyebrows",
          body: "Treated with particular caution. Cosmetic pigment is unpredictable, the skin is thin, and any pigment change here is highly visible.",
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
        "Your medical history, including anything affecting immune function, healing or photosensitivity.",
      ],
    },

    // ── 08
    ctaMid: {
      heading: "Wondering if yours can be treated?",
      body: "Send us a photo on WhatsApp and a doctor can tell you what to expect from an assessment.",
    },

    // ── 09
    treatmentsIntro:
      "Tattoo removal at our clinics is a single treatment carried out over a course of appointments.",
    treatmentWhy: {
      "pico-laser": {
        why: "For breaking ink into particles the body clears",
        body: "A picosecond laser delivers energy in pulses short enough to shatter pigment mechanically rather than by heating it, which reduces the heat delivered to surrounding skin.",
      },
    },

    // ── results · -07…10 removed: the same four tattoos as -01…04 again, in the
    // pink legacy frame.
    results: [
      { src: "https://cdn.kaiteki.my/concerns/tattoo-removal/before-after-01.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Tattoo, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/tattoo-removal/before-after-02.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Tattoo, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/tattoo-removal/before-after-03.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Tattoo, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/tattoo-removal/before-after-04.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Tattoo, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/tattoo-removal/before-after-05.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Tattoo, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/tattoo-removal/before-after-06.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Tattoo, before and after a course of treatment at Kaiteki" },
    ],

    // ── 12
    firstVisit: {
      intro:
        "The tattoo itself is examined: ink composition is rarely known, so it cannot be judged from a description.",
      steps: [
        {
          title: "History",
          body: "When the tattoo was done, whether it is a cover-up or has been treated before, and how your skin usually heals.",
        },
        {
          title: "Examination",
          body: "Colours, density, depth and the surrounding skin.",
        },
        {
          title: "Discussion",
          body: "Which colours are likely to respond, and how sessions are spaced.",
        },
        {
          title: "Test patch and plan",
          body: "Where colour behaviour is uncertain, a small test area is treated first, then a sequence and a review point.",
        },
      ],
    },

    visitImages: [
      {
        src: "https://cdn.kaiteki.my/concerns/tattoo-removal/procedure-02.jpg",
        caption: "A picosecond laser treatment in progress.",
      },
    ],

    // ── 04 media · pairs with the five drivers by position (Q-19). Only the
    // skin cross-section (ink depth) carries information; the three decorative
    // tattoo photographs were removed, so the rest are null.
    figures: [
      null,
      {
        src: "https://cdn.kaiteki.my/concerns/tattoo-removal/image-ink-depth.jpg",
        caption: "Tattoo ink sits in the dermis, the layer beneath the surface. Illustration: National Cancer Institute.",
      },
      null,
      null,
      null,
    ],

    // ── 13
    risks: {
      items: [
        {
          lead: "Common and expected",
          body: "Immediate whitening of the treated area, then redness, swelling, tenderness and often blistering or crusting over the following days. The area may weep briefly.",
        },
        {
          lead: "Pigment change and Malaysian skin",
          body: "Medium and deeper skin tones carry a higher chance of hypopigmentation, where treated skin ends up lighter than the surrounding area, and of post-inflammatory hyperpigmentation.",
        },
        {
          lead: "Scarring and ink darkening",
          body: "Scarring is uncommon but possible, particularly if crusts are picked or if sessions are spaced too closely. Some pigments, notably white and flesh-tone cosmetic ink, can darken on contact with laser energy.",
        },
        {
          lead: "What treatment cannot do",
          body: "Complete clearance cannot be promised for any tattoo. Yellow and pastel inks often persist after everything else has gone, and a faint shadow or a change in skin texture where the tattoo was is a common end point. Removal does not restore the skin to how it looked before the tattoo.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant or breastfeeding, take photosensitising medication or oral acne medication, have a history of keloid scarring or cold sores, have a condition affecting immune function or healing, have tanned recently, or have had the tattoo treated anywhere else before.",
    },

    // ── 14
    costFactors: {
      intro:
        "Pricing is set once the tattoo is assessed. It depends on:",
      factors: [
        "The size of the piece, and how densely the ink is packed within it.",
        "How many colours are present, since some need a different wavelength from the rest.",
        "Where it sits on the body, which affects both technique and how the area is expected to clear.",
        "How many sessions, which is reviewed at each visit rather than fixed in advance.",
        "Whether a test patch is carried out first, which is standard for colours and cosmetic pigment.",
      ],
    },

    // ── 15
    technologyIntro:
      "Different ink colours absorb different wavelengths, so a platform with only one wavelength can only reach some of a tattoo.",

    // ── 16
    faqs: [
      {
        q: "Can a tattoo be completely removed?",
        a: "Sometimes, but it cannot be promised for any tattoo before it has been treated. Black and dark blue generally clear most predictably, while yellow, pastel and some cosmetic pigments often persist after everything else has gone.",
      },
      {
        q: "How many sessions will it take?",
        a: "There is no fixed number. It depends on the colours, how deeply and densely the ink was placed, the size, where it sits on the body, your skin tone and how well you heal.",
      },
      {
        q: "Does it hurt?",
        a: "It is generally described as more uncomfortable than getting the tattoo, though it is over far more quickly. People often compare it to a hot elastic band snapping against the skin. Numbing cream is applied beforehand and cooling is used during and after.",
      },
      {
        q: "Is it safe on darker skin?",
        a: "Yes, with the right wavelength, conservative settings and longer intervals. The specific issue is that melanin in the skin competes with the ink for laser energy, which raises the chance of the treated area ending up lighter or darker than the surrounding skin.",
      },
      {
        q: "Can eyebrow or lip tattoos be removed?",
        a: "They can be assessed, but they are among the least predictable pigments to treat. A test patch on a small, discreet area is standard practice before treating anything on the face, and the assessment may conclude that treatment is not advisable.",
      },
      {
        q: "What do I need to do afterwards?",
        a: "Keep the area clean, dry and covered as instructed, do not pick at blisters or crusts, avoid swimming pools, saunas and heavy exercise until it has settled, and keep it out of the sun completely. Sun exposure on treated skin is the most common cause of pigment change afterwards.",
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
    image: "https://cdn.kaiteki.my/concerns/birthmark/card.jpg",
    summary:
      "Not all birthmarks respond to treatment the same way.",
    leadAnswer:
      "Birthmarks are marks present at or soon after birth, made either of clustered pigment cells (café-au-lait patches, naevus of Ota, Mongolian spots) or of blood vessels (port-wine stains, salmon patches, haemangiomas).",
    treatments: ["pico-laser", "vascular-pigment-laser"],
    reviewedBy: "dr-lucas-chew",
    lastReviewed: "2026-07-13",
    seoTitle: "Birthmark Removal Assessment in Malaysia | Kaiteki",
    seoDescription:
      "Birthmarks vary widely in type and cause, and most are harmless. A doctor examines yours before discussing birthmark removal. Book a free consultation.",

    // ── 01 · Pexels (pexels.com/photo/7395920), right side extended in the
    // wall tone so the H1 sits on plain ground.
    banner: {
      src: "https://cdn.kaiteki.my/concerns/birthmark/hero.jpg",
      sm: "https://cdn.kaiteki.my/concerns/birthmark/hero-mobile.jpg",
      alt: "Illustrative photograph: a woman with a brown birthmark on her cheek",
    },

    // ── 02 · process facts. Nothing about fading or clearance, which would be
    // an outcome claim, and nothing about how long anything takes (R-01).
    facts: [
      {
        value: "Type before treatment",
        label: "Pigment birthmarks and blood-vessel birthmarks respond to different laser energy.",
      },
      {
        value: "Some are left alone",
        label: "Several common birthmarks fade on their own or are better monitored than treated.",
      },
      {
        value: "Change is the signal",
        label: "A birthmark that grows, darkens, bleeds or becomes raised should be examined.",
      },
    ],

    // ── 02b
    jumpNav: [
      { id: "which-type", label: "Which type is it?" },
      { id: "where", label: "Where it appears" },
      { id: "see-a-doctor", label: "When to see a doctor" },
      { id: "treatments", label: "Treatment" },
      { id: "risks", label: "Risks" },
      { id: "cost", label: "Cost" },
      { id: "faq", label: "FAQ" },
    ],

    // ── 03 · a birthmark has no triggers to avoid, so the drivers block below is
    // framed as what a doctor reads in the mark, not as causes.
    sections: [
      {
        heading: "What is a birthmark?",
        body: [
          "A birthmark is an area of skin that is discoloured from birth or appears in the first weeks of life.",
          "Nothing a parent did or did not do during pregnancy causes a birthmark.",
        ],
      },
    ],

    // ── 04 · what the assessment reads, one figure per item (pairs by position).
    drivers: {
      heading: "What a doctor looks at first",
      intro:
        "Three things decide whether a birthmark is a candidate for treatment at all, and which laser would even be relevant.",
      items: [
        {
          lead: "Which structure it is made of.",
          body: "Pigmented birthmarks come from clusters of melanocytes, the pigment cells in the upper layer of skin. Vascular birthmarks come from blood vessels in the dermis below.",
        },
        {
          lead: "How deep the colour sits.",
          body: "Pigment near the surface looks brown; pigment deeper in the dermis looks blue or grey. A slate-grey patch over an infant's lower back is usually a Mongolian spot, which is common in Asian babies and normally fades during childhood without treatment.",
        },
        {
          lead: "Whether it is changing.",
          body: "A mole or mark that is growing, darkening or becoming raised is examined and monitored rather than lasered, because laser can hide the changes a doctor needs to see.",
        },
      ],
    },
    figures: [
      {
        src: "https://cdn.kaiteki.my/concerns/birthmark/image-how-birthmarks-form.jpg",
        caption: "Cross-section of skin: pigment cells (melanocytes) sit in the upper layer, blood vessels deeper in the dermis. Diagram: National Cancer Institute, public domain.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/birthmark/image-slate-grey-patch.jpg",
        caption: "A slate-grey Mongolian spot on an infant's lower back. Photo: abby lu, CC BY 2.0, via Wikimedia Commons.",
      },
      // The stock "mole check" photograph was removed (the caption carried the
      // point on its own); null keeps the pairing by position (Q-19).
      null,
    ],

    // ── 05 · archetype A: the three-way type selector. The third tab exists
    // because "this one is monitored, not treated" is a real routing answer.
    variant: {
      kind: "tabs",
      heading: "Which type is it?",
      intro:
        "Some marks belong to neither treatment route.",
      tabs: [
        {
          label: "Pigmented",
          sub: "Brown, blue or grey",
          title: "Pigmented birthmarks",
          body: "Flat patches that are light to dark brown, or blue-grey where the pigment sits deeper. Café-au-lait patches, naevus of Ota around the eye and temple, and Mongolian spots that persist past childhood all belong here.",
          routing: "assessed for pigment laser, with a test area often discussed first.",
        },
        {
          label: "Vascular",
          sub: "Pink, red or purple",
          title: "Vascular birthmarks",
          body: "Marks made of blood vessels: flat pink-to-purple port-wine stains, paler salmon patches, and raised haemangiomas in infancy. Port-wine stains persist and can darken or thicken with age, which is one reason adults seek treatment for them.",
          items: [
            {
              lead: "The tell:",
              body: "the colour often fades briefly when pressed, and may look darker when warm, crying or exercising.",
            },
          ],
          routing:
            "assessed for vascular laser, or referred to a paediatric specialist where an infant haemangioma is involved.",
        },
        {
          label: "Monitor",
          sub: "Moles and changing marks",
          title: "Marks to watch, not laser",
          body: "Congenital moles, and any birthmark that has started to change, sit outside the cosmetic route.",
          routing: "assessed and photographed for monitoring, with referral where anything looks atypical.",
        },
      ],
    },

    // ── 06 · archetype A: location grid. Location changes both the likely
    // diagnosis and how cautiously a mark is treated.
    locationBlock: {
      heading: "Where it appears",
      cards: [
        {
          title: "Around the eye and temple",
          body: "A blue-grey or brown patch here in an adult is often naevus of Ota. Treatment near the eye uses protective eye shields and extra care, and the eye itself is sometimes checked as part of the assessment.",
        },
        {
          title: "Cheek and side of the face",
          body: "Port-wine stains and café-au-lait patches are common here.",
        },
        {
          title: "Forehead, eyelids and nape",
          body: "Salmon patches in babies: those on the face commonly fade; those on the nape more often persist.",
        },
        {
          title: "Lower back and buttocks",
          body: "The usual site for Mongolian spots, which normally fade in childhood.",
        },
        {
          title: "Trunk and limbs",
          body: "Café-au-lait patches and congenital moles are frequently found here.",
        },
      ],
      note: {
        title: "Several patches, or a mark across the forehead and eyelid?",
        body: "Six or more café-au-lait patches, or a port-wine stain over the forehead and upper eyelid, can occasionally be linked to conditions affecting other parts of the body. These are referred for medical assessment before any cosmetic treatment is discussed.",
      },
    },

    // ── 07 · with change-monitoring added (registry note): on this concern the
    // most important thing the block does is say which changes need a doctor.
    seeDoctor: {
      heading: "When to see a doctor",
      intro:
        "Most birthmarks are harmless and stay that way. These are the reasons to have one examined:",
      triggers: [
        "It is growing, changing shape, or developing an irregular or blurred edge.",
        "The colour has changed, darkened unevenly, or now has several shades in it.",
        "It has become raised, lumpy, itchy, crusted, or bleeds without an obvious injury.",
        "A new pigmented mark has appeared in adulthood that you did not have before.",
        "An infant's haemangioma is growing quickly, is near the eye, nose, lip or nappy area, or has broken down into a sore.",
      ],
    },

    // ── 08
    ctaMid: {
      heading: "Not sure whether yours is pigment or blood vessels?",
      body: "Send us a photo on WhatsApp and a doctor can tell you what it looks like and whether it is worth an in-person assessment.",
    },

    // ── 09
    treatmentsIntro:
      "Birthmark treatment depends on which structure the mark is made of. Pigmented and vascular birthmarks are treated with different lasers, and some birthmarks are not treated at all.",
    treatmentWhy: {
      "pico-laser": {
        why: "For pigment birthmarks such as naevus of Ota",
        body: "Very short laser pulses break up pigment in the skin so the body can gradually clear it.",
      },
      "vascular-pigment-laser": {
        why: "For port-wine stains and other vessel birthmarks",
        body: "Laser energy absorbed by the blood in the vessels heats and closes them, lightening the colour of a vascular birthmark.",
      },
    },

    // ── results
    results: [
      { src: "https://cdn.kaiteki.my/concerns/birthmark/before-after-01.png", nativeWidth: 1080, ratio: "1/1", caption: "Pigmented birthmark around the mouth, before and after laser treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/birthmark/before-after-02.png", nativeWidth: 1080, ratio: "1/1", caption: "Port-wine stain on the back of the neck, before and after vascular laser at Kaiteki" },
    ],

    // ── 12
    firstVisit: {
      intro:
        "The doctor checks whether the colour blanches under pressure, which tells pigment from blood vessels.",
      steps: [
        {
          title: "History",
          body: "When the mark first appeared, whether it has changed, and any previous treatment.",
        },
        {
          title: "Examination",
          body: "Colour, depth, texture and edge, often under magnification.",
        },
        {
          title: "Photographs",
          body: "Standardised photographs give a fixed record for judging change.",
        },
        {
          title: "Discussion and plan",
          body: "What the mark most likely is, which laser if any, and whether referral is needed.",
        },
      ],
    },

    visitImages: [
      {
        src: "https://cdn.kaiteki.my/concerns/birthmark/procedure-02.png",
        caption: "A vascular laser in use. Its wavelength targets blood vessels, which is why it is used for red and purple marks.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/birthmark/procedure-03.png",
        caption: "Some small marks are treated with a fine laser handpiece that works on a very small area at a time.",
      },
    ],

    // ── 13
    risks: {
      items: [
        {
          lead: "Common and usually temporary",
          body: "Redness, swelling and stinging after a session, and with vascular laser, purple-grey bruising over the treated area that can last one to two weeks. Small crusts or blisters can form and should be left to heal on their own.",
        },
        {
          lead: "Pigment change",
          body: "Darkening (post-inflammatory hyperpigmentation) or lightening of the treated skin is possible with any laser, and is more likely in darker skin types and with sun exposure around treatment. It usually fades over months but can occasionally persist.",
        },
        {
          lead: "Uncommon",
          body: "Scarring, a change in skin texture, and patchy or uneven lightening that leaves the mark looking mottled.",
        },
        {
          lead: "What treatment cannot do",
          body: "Laser cannot promise complete removal of any birthmark. Some types, café-au-lait patches in particular, can return after lightening, and port-wine stains are usually lightened rather than cleared. Laser is not used to remove congenital moles for appearance, and it does not change the underlying tendency that formed the mark.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant, take medication that makes skin sensitive to light, have a tendency to keloid or raised scars, have had recent sun exposure or a tan, or have had previous treatment on the birthmark.",
    },

    // ── 14
    costFactors: {
      intro:
        "Pricing is set after assessment. It depends on:",
      factors: [
        "The type of birthmark, since pigmented and vascular marks are treated with different lasers.",
        "The size of the area and where it sits, because marks near the eye take more time and care.",
        "Whether a test area is done first, which is common on the face and on darker skin.",
        "How many sessions are planned, which varies widely between types and is reviewed as the mark responds.",
      ],
    },

    // ── 16
    faqs: [
      {
        q: "Can birthmarks be removed?",
        a: "It depends on the type, and outcomes vary between individuals. Some pigmented birthmarks, such as naevus of Ota, often lighten with a course of pigment laser, and port-wine stains are commonly lightened with vascular laser.",
      },
      {
        q: "Will my child's birthmark fade on its own?",
        a: "Many do. Mongolian spots usually fade during childhood, salmon patches on the face often fade in the first years, and infant haemangiomas typically grow for several months before slowly shrinking. Port-wine stains and café-au-lait patches generally persist.",
      },
      {
        q: "How many sessions does birthmark laser take?",
        a: "There is no standard number, because it depends on the type, depth, size and location of the mark and on how your skin responds.",
      },
      {
        q: "Does birthmark laser hurt?",
        a: "Most people describe a snapping or stinging sensation, like a rubber band flicked against the skin. Numbing cream and skin cooling are commonly used to make sessions more comfortable.",
      },
      {
        q: "Can a birthmark come back after laser?",
        a: "Some can. Café-au-lait patches in particular may darken again after initial lightening, and port-wine stains can slowly re-darken over years. Sun exposure makes both more likely.",
      },
      {
        q: "Can a mole I was born with be lasered off?",
        a: "Laser is not used to remove congenital moles for appearance. It can lighten the surface while leaving cells deeper down, which makes future changes harder to spot.",
      },
    ],

    // ── 17
    relatedConcerns: [
      {
        slug: "pigmentation",
        reason: "Pigment birthmarks and acquired pigmentation are told apart at the same assessment.",
      },
      {
        slug: "vascular-lesions",
        reason: "Port-wine stains share their treatment approach with visible facial vessels.",
      },
      {
        slug: "tattoo-removal",
        reason: "Pico laser targets birthmark pigment and tattoo ink by a similar mechanism.",
      },
    ],
  },
  {
    slug: "vascular-lesions",
    ctaHeading: "Not sure which type you have?",
    ctaAssesses: "the affected skin",
    name: "Vascular Lesions",
    group: "Skin",
    image: "https://cdn.kaiteki.my/concerns/vascular-lesions/card.jpg",
    summary:
      "Visible blood vessels, redness and broken capillaries can have different causes.",
    leadAnswer:
      "Vascular lesions are visible blood vessels or areas of redness in the skin: facial thread veins, spider angiomas, cherry angiomas and the persistent redness of rosacea.",
    treatments: ["vascular-pigment-laser"],
    reviewedBy: "dr-jade",
    lastReviewed: "2026-07-13",
    seoTitle: "Vascular Lesions & Facial Redness Care in Malaysia | Kaiteki",
    seoDescription:
      "Thread veins, spider veins and persistent redness have several causes. A doctor assesses the type before any treatment. Book a free consultation today.",

    // ── 01 · Pexels (pexels.com/photo/1138531), skin close-up faded into the
    // page on the right; uploaded by hand (`manual` in config/concern-media.json).
    banner: {
      src: "https://cdn.kaiteki.my/concerns/vascular-lesions/banner-skin.jpg",
      sm: "https://cdn.kaiteki.my/concerns/vascular-lesions/banner-skin-mobile.jpg",
      alt: "Illustrative photograph: close-up of the lower face in profile with visible redness across the cheek",
    },

    // ── 02 · process facts. Nothing about clearance or how quickly anything
    // fades, which would be an outcome claim (R-01).
    facts: [
      {
        value: "Type before treatment",
        label: "A thread vein, a red spot and rosacea flushing are assessed and managed differently.",
      },
      {
        value: "Most are harmless",
        label: "The common facial types are cosmetic, but a few patterns are worth checking medically.",
      },
      {
        value: "Face and legs differ",
        label: "Facial vessels and leg veins sit in different systems and are not assessed the same way.",
      },
    ],

    // ── 02b
    jumpNav: [
      { id: "causes", label: "Common causes" },
      { id: "which-type", label: "Which type is it?" },
      { id: "where", label: "Where they appear" },
      { id: "see-a-doctor", label: "When to see a doctor" },
      { id: "treatments", label: "Treatment" },
      { id: "risks", label: "Risks" },
      { id: "faq", label: "FAQ" },
    ],

    sections: [
      {
        heading: "What are vascular lesions?",
        body: [
          "Vascular lesions occur when small blood vessels near the surface of the skin become visible or dilated, appearing as fine red or purplish lines, small red spots, patches, or persistent redness.",
        ],
      },
    ],

    // ── 04 · archetype A: causes only. Types are kept in the tabs below, per
    // the registry flag "split-types-from-causes". No figures: the two
    // remaining stock photographs (a sunhat, two chillies) were decorative.
    drivers: {
      heading: "Common causes",
      intro:
        "Usually more than one of these:",
      items: [
        {
          lead: "Sun exposure:",
          body: "ultraviolet light weakens the collagen that supports the small vessels in the upper skin.",
        },
        {
          lead: "Genetics and skin type:",
          body: "a tendency toward visible vessels and facial flushing often runs in families, and fair or thin skin shows vessels that sit at the same depth in other skin.",
        },
        {
          lead: "Hormonal change:",
          body: "pregnancy and hormonal medication can bring on spider veins, some of which settle on their own afterwards.",
        },
        {
          lead: "Skin damage and harsh routines:",
          body: "long-term use of strong topical steroids, aggressive scrubs, and injury to the skin can all leave vessels more visible.",
        },
      ],
    },

    // ── 05 · archetype A: type selector. Port-wine stains are named and routed
    // to the birthmark page rather than handled here.
    variant: {
      kind: "tabs",
      heading: "Which type is it?",
      intro:
        "Three common patterns, and the pattern decides whether laser is relevant:",
      tabs: [
        {
          label: "Thread veins",
          sub: "Fine red lines",
          title: "Facial thread veins and spider veins",
          body: "Fine red or purple lines (telangiectasia), usually on the cheeks, around the nostrils and on the chin. A spider angioma is a related pattern: a small central red point with fine vessels radiating outward, which briefly blanches when pressed.",
          routing: "usually assessed for vascular laser.",
        },
        {
          label: "Red spots",
          sub: "Small, raised or bluish",
          title: "Cherry angiomas and venous lakes",
          body: "Cherry angiomas are small, bright red, often slightly raised spots, most common on the trunk and arms and increasingly frequent with age. Venous lakes are soft, dark blue or purple bumps, usually on the lips or ears in sun-exposed older skin.",
          routing: "usually assessed for vascular laser once the doctor is satisfied the spot is what it appears to be.",
        },
        {
          label: "Redness",
          sub: "Flushing, patchy redness",
          title: "Persistent redness and rosacea",
          body: "Background redness across the cheeks, nose and chin that worsens with heat, sun, alcohol, spicy food or stress, sometimes with fine visible vessels and, in some people, small bumps. This pattern is frequently part of rosacea.",
          routing: "assessed for medical management first, with vascular laser discussed for persistent vessels.",
        },
      ],
    },

    // ── 06 · archetype A: where they appear.
    locationBlock: {
      heading: "Where they appear",
      intro:
        "Location is a strong clue to type:",
      cards: [
        {
          title: "Cheeks and nose",
          body: "The most common site for thread veins and diffuse redness, because these areas take the most sun and flush the most readily.",
        },
        {
          title: "Chin and around the mouth",
          body: "Fine vessels on the chin and beside the nostrils are common. Redness with scaling or small bumps around the mouth can be a different skin condition and is assessed as such.",
        },
        {
          title: "Legs",
          body: "Fine spider veins on the legs can sometimes be treated, but larger, bulging or rope-like veins are varicose veins. These involve the deeper venous system and need a vascular assessment, not a facial laser.",
        },
      ],
      note: {
        title: "A birthmark rather than a vein?",
        body: "A flat pink, red or purple patch present since birth, such as a port-wine stain, is a vascular birthmark. It is assessed on the birthmark page, because its behaviour and treatment course differ.",
      },
    },

    // ── 07
    seeDoctor: {
      heading: "When to see a doctor",
      intro:
        "Most facial vessels are a cosmetic concern, but a few patterns need medical attention first. Any of these is a reason to be examined:",
      triggers: [
        "A red spot or lesion bleeds easily, bleeds repeatedly or has started to ulcerate.",
        "A lesion is growing quickly, changing colour or looks different from the others around it.",
        "Several new spider angiomas have appeared in a short time. In numbers, these can be linked to liver or hormonal causes and are worth checking with a GP.",
        "Leg veins are bulging, aching, swollen, or the skin over them has changed colour.",
        "Facial redness comes with burning, stinging, bumps or eye irritation.",
      ],
    },

    // ── 08
    ctaMid: {
      heading: "Thread vein, red spot or rosacea?",
      body: "Send us a photo on WhatsApp and a doctor can tell you which it most likely is.",
    },

    // ── 09
    treatmentsIntro:
      "Vascular laser is the in-clinic option for visible vessels on the face and body.",
    treatmentWhy: {
      "vascular-pigment-laser": {
        why: "For dilated vessels you can see at the surface",
        body: "Delivers light absorbed by the haemoglobin in small, superficial vessels, heating them so the body can gradually clear them.",
      },
    },

    // ── results · 02 and 03 repeat the patients in 01 and 04 at a smaller size,
    // so only one of each pair is used.
    results: [
      { src: "https://cdn.kaiteki.my/concerns/vascular-lesions/before-after-01.jpg", nativeWidth: 564, ratio: "1.71/1", caption: "Facial redness on the cheek, before and after a course of treatment at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/vascular-lesions/before-after-02.jpg", nativeWidth: 1415, ratio: "1/1", caption: "Fine thread veins, before and after a course of vascular laser at Kaiteki" },
      { src: "https://cdn.kaiteki.my/concerns/vascular-lesions/before-after-03.png", nativeWidth: 1080, ratio: "1/1", caption: "Thread veins on the cheek, before and after vascular laser at Kaiteki" },
    ],

    // ── 12
    firstVisit: {
      intro:
        "The doctor may press on a lesion to see how it blanches, which separates the three types.",
      steps: [
        {
          title: "History",
          body: "When the vessels or redness appeared, whether they come and go, what makes them worse, and any medication.",
        },
        {
          title: "Examination",
          body: "A close look at the affected skin, sometimes under magnification.",
        },
        {
          title: "Ruling out medical causes",
          body: "Anything that bleeds, is changing or looks unusual is assessed first, with referral where needed.",
        },
        {
          title: "Discussion and plan",
          body: "Whether laser suits your type, and what to do about triggers.",
        },
      ],
      outro:
        "Come without make-up on the affected area if you can. Concealer hides exactly what the doctor needs to see.",
    },

    visitImages: [
      {
        src: "https://cdn.kaiteki.my/concerns/vascular-lesions/procedure-02.png",
        caption: "Light-based treatment for visible vessels in progress, with the eyes shielded throughout.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/vascular-lesions/procedure-03.png",
        caption: "The handpiece moves across the area in overlapping passes, with settings matched to the size and depth of the vessels.",
      },
      {
        src: "https://cdn.kaiteki.my/concerns/vascular-lesions/procedure-04.png",
        caption: "Treatment takes place with the doctor present throughout.",
      },
    ],

    // ── 13
    risks: {
      items: [
        {
          lead: "Common and usually temporary",
          body: "Redness, swelling and a warm, sunburn-like feeling for a short time after treatment. Some vessels darken or look purple-grey before they fade, and some settings leave temporary bruising.",
        },
        {
          lead: "Pigment change",
          body: "Darkening or lightening of the treated skin can occur, particularly in medium to darker skin tones or after sun exposure. This is why settings are adjusted to your skin tone and why sun protection before and after matters.",
        },
        {
          lead: "Less common",
          body: "Blistering, crusting or, rarely, scarring.",
        },
        {
          lead: "What treatment cannot do",
          body: "Laser does not cure rosacea or change a tendency toward visible vessels, so new vessels can appear over time, especially with ongoing sun exposure. It is not suitable for varicose veins, and some deeper or larger vessels respond only partly or not at all.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant or breastfeeding, have a tan or recent sun exposure, take blood thinners or medication that increases light sensitivity, have a history of cold sores in the area, keloid scarring, or a liver or hormonal condition.",
    },

    // ── 14
    costFactors: {
      intro:
        "Pricing is set after assessment. It depends on:",
      factors: [
        "The type of lesion, since a single red spot and widespread facial redness are different in scale.",
        "How large an area is treated, from a few spots to the whole of both cheeks.",
        "How many sessions are planned, which is set after assessment and reviewed as the skin responds.",
        "Whether medical management of rosacea or skin sensitivity forms part of the plan.",
        "Whether occasional maintenance is likely, given that new vessels can form over time.",
      ],
    },

    // ── 16
    faqs: [
      {
        q: "Do vascular lesions come back after treatment?",
        a: "Laser does not change the tendency that produced them, so new vessels can form over time, particularly with sun exposure, heat and flushing triggers.",
      },
      {
        q: "Are broken capillaries actually broken?",
        a: "No. The common name is misleading: the vessels are dilated, not broken. This is also why they do not heal on their own the way a bruise does.",
      },
      {
        q: "Are red spots on my body a sign of something serious?",
        a: "Small, bright red cherry angiomas are very common and harmless, and they tend to increase in number with age. A spot that bleeds, grows quickly or looks different from the others should be examined.",
      },
      {
        q: "Is rosacea the same as a vascular lesion?",
        a: "Not quite. Rosacea is a long-term skin condition that often includes flushing, persistent redness and visible vessels, sometimes with bumps or eye irritation. The visible vessels are one part of it that laser can address, but managing triggers, gentle skincare and sometimes prescribed treatment address the condition itself.",
      },
      {
        q: "Can leg veins be treated the same way?",
        a: "Fine spider veins on the legs can sometimes be treated with laser, but they are assessed differently from facial vessels.",
      },
      {
        q: "Is vascular laser suitable for darker skin tones?",
        a: "It can be, with care. Darker skin carries more pigment that also absorbs laser light, which increases the risk of pigment change.",
      },
    ],

    // ── 17
    relatedConcerns: [
      {
        slug: "birthmark",
        reason: "Port-wine stains and some haemangiomas are vascular birthmarks, assessed on their own page.",
      },
      {
        slug: "pigmentation",
        reason: "Redness and brown patches often sit together, and the same assessment separates them.",
      },
      {
        slug: "aging",
        reason: "Thinning skin and sun damage with age make small vessels easier to see.",
      },
    ],
  },
  {
    slug: "excessive-sweating",
    ctaHeading: "Not sure which areas are affected?",
    ctaAssesses: "the affected areas",
    name: "Excessive Sweating",
    group: "Skin",
    image: "https://cdn.kaiteki.my/concerns/excessive-sweating/card.jpg",
    summary:
      "Sweating that disrupts daily life can often be managed.",
    leadAnswer:
      "Excessive sweating (hyperhidrosis) is sweating beyond what the body needs to regulate temperature, most often in the underarms, palms, soles or face. Primary hyperhidrosis starts young, runs in families and is managed in steps, starting with clinical-strength antiperspirant.",
    treatments: ["botulinum-toxin"],
    reviewedBy: "dr-teresa-tan",
    lastReviewed: "2026-07-13",
    seoTitle: "Excessive Sweating Treatment & Assessment | Kaiteki",
    seoDescription:
      "Hyperhidrosis goes beyond normal temperature regulation and has several possible causes. A consultation helps assess your situation. Book a free session today.",

    // ── 01 · Pexels (pexels.com/photo/5000223), recropped with the wall
    // extended right so the copy sits on plain white. Uploaded by hand
    // (`manual` in config/concern-media.json).
    banner: {
      src: "https://cdn.kaiteki.my/concerns/excessive-sweating/banner.jpg",
      sm: "https://cdn.kaiteki.my/concerns/excessive-sweating/banner-mobile.jpg",
      alt: "Illustrative photograph: a woman in a sports top dabbing her face with a white towel, against a white brick wall",
    },

    // ── 02 · process facts. Nothing about how dry anyone will be, or for how
    // long, which would be an outcome claim (R-01).
    facts: [
      {
        value: "Pattern first",
        label: "Which areas sweat, and when it started, decide what the assessment looks for.",
      },
      {
        value: "Primary or secondary",
        label: "Sweating on its own and sweating caused by something else are handled differently.",
      },
      {
        value: "Stepped approach",
        label: "Simpler measures are usually tried before anything is injected.",
      },
    ],

    // ── 02b
    jumpNav: [
      { id: "causes", label: "Common causes" },
      { id: "which-type", label: "Which kind is it?" },
      { id: "where", label: "Where it happens" },
      { id: "see-a-doctor", label: "When to see a doctor" },
      { id: "treatments", label: "Treatment" },
      { id: "risks", label: "Risks" },
      { id: "faq", label: "FAQ" },
    ],

    sections: [
      {
        heading: "What is excessive sweating?",
        body: [
          "Sweating is a normal bodily function that helps regulate temperature. Excessive sweating, medically known as hyperhidrosis, describes sweating that is noticeably more than what is needed for temperature regulation, and can affect daily activities and confidence.",
        ],
      },
      {
        heading: "How sweating is controlled",
        body: [
          "Eccrine glands are switched on by nerve signals from the sympathetic nervous system, the same system that responds to heat, exercise and stress.",
          "In primary hyperhidrosis the glands themselves are normal; the signal reaching them is stronger or more frequent than the body needs. That is why the condition is not a hygiene problem, and why treatments that work on the signal, rather than on the skin surface, are part of the discussion.",
        ],
      },
    ],

    // ── 04 · archetype D: causes. No figures: the three stock photographs
    // duplicated the card or were decorative.
    drivers: {
      heading: "Common causes",
      items: [
        {
          lead: "Hormonal change:",
          body: "puberty, pregnancy, menopause and thyroid disorders can all increase sweating.",
        },
        {
          lead: "Stress and anxiety:",
          body: "emotional triggers activate the same nerve pathway that drives sweating.",
        },
        {
          lead: "Medication:",
          body: "some antidepressants, diabetes medicines, hormone therapies and other drugs list increased sweating as a side effect.",
        },
        {
          lead: "Underlying medical conditions:",
          body: "an overactive thyroid, diabetes, infections and, rarely, more serious conditions can cause sweating.",
        },
      ],
    },

    // ── 05 · archetype D's differentiator: primary vs secondary. On this
    // concern it decides whether the next step is treatment or investigation.
    variant: {
      kind: "tabs",
      heading: "Which kind is it?",
      intro:
        "The most important thing an assessment does here is decide whether the sweating is the condition itself, or a sign of something else.",
      tabs: [
        {
          label: "Primary",
          sub: "Focal, since your teens",
          title: "Primary focal hyperhidrosis",
          body: "Sweating in specific areas, typically the underarms, palms, soles or face, affecting both sides evenly. It usually began in childhood or adolescence, often runs in the family, and tends to ease during sleep.",
          routing:
            "assessed for a stepped management plan, starting with topical measures and moving on only if they are not enough.",
        },
        {
          label: "Secondary",
          sub: "Generalised or new in adulthood",
          title: "Sweating as a symptom",
          body: "Sweating across large areas of the body, sweating that started in adulthood without an obvious reason, sweating on one side only, or sweating at night that soaks the bedding. Here the sweating is a signal.",
          routing:
            "assessed with history, examination and, where indicated, investigation or referral before any cosmetic treatment is discussed.",
        },
      ],
    },

    // ── 06 · archetype D: location grid.
    locationBlock: {
      heading: "Where it happens",
      intro:
        "Each area is managed differently:",
      cards: [
        {
          title: "Underarms",
          body: "The most common site.",
        },
        {
          title: "Palms",
          body: "Sweaty hands affect handshakes, writing, gripping and using phones or keyboards.",
        },
        {
          title: "Soles of the feet",
          body: "Often accompanies sweaty palms. Constant moisture can lead to slipping in footwear, odour and fungal infection between the toes, which may need treating in their own right.",
        },
        {
          title: "Face and scalp",
          body: "Sweating from the forehead, scalp or upper lip, often triggered by heat, food or stress.",
        },
      ],
      note: {
        title: "Sweating on one side only?",
        body: "Sweating that affects only one side of the body or face, or a single small patch, is not the usual pattern of primary hyperhidrosis and should be examined by a doctor promptly.",
      },
    },

    // ── 07 · archetype D carries extra weight here: whether this is a cosmetic
    // concern or a medical one is decided in this block.
    seeDoctor: {
      heading: "When to see a doctor",
      intro:
        "Any of these is a reason to see a doctor:",
      triggers: [
        "Sweating that soaks through clothing, drips, or interferes with work, gripping or daily tasks.",
        "Night sweats that soak your sleepwear or bedding.",
        "Unexplained weight loss, fever, a racing or irregular heartbeat, or feeling unusually tired alongside the sweating.",
        "Sweating that began or increased after starting a new medication.",
        "Clinical-strength antiperspirant, used correctly for a few weeks, has not made enough difference.",
      ],
    },

    // ── 08
    ctaMid: {
      heading: "Not sure whether your sweating needs investigating?",
      body: "Message us on WhatsApp and a doctor can tell you which you are likely dealing with.",
    },

    // ── 09 · botulinum toxin is a prescription-only medicine (registry flag
    // "names-prescription-medicine"): no brand, no promotion, framed as
    // something the doctor may discuss.
    treatmentsIntro:
      "Excessive sweating is managed in steps, starting with the simplest measures; in-clinic treatment is one step in that sequence.",
    treatmentWhy: {
      "botulinum-toxin": {
        why: "For focal sweating that topical measures have not controlled",
        body: "A prescription injectable the doctor may discuss when primary sweating is confined to defined areas such as the underarms. Small amounts are placed in the skin to interrupt the nerve signal that switches the sweat glands on in that area. It is temporary, needs repeating, and is only considered once secondary causes have been ruled out.",
      },
    },
    treatmentsNote:
      "Clinical-strength antiperspirant applied to dry skin at night is a reasonable first step. Prescription topicals, oral medication and iontophoresis for hands and feet are discussed individually.",

    // ── 12
    firstVisit: {
      intro:
        "The first question is whether the pattern fits primary focal sweating.",
      steps: [
        {
          title: "History",
          body: "When it started, which areas, whether it happens during sleep, family history and your medications.",
        },
        {
          title: "Examination",
          body: "The affected skin, checked for irritation or infection.",
        },
        {
          title: "Ruling out other causes",
          body: "Blood tests or a referral where something else may be driving it.",
        },
        {
          title: "Discussion and plan",
          body: "Which step makes sense now, and what would come next.",
        },
      ],
    },
    visitImages: [
      {
        src: "https://cdn.kaiteki.my/concerns/excessive-sweating/procedure-01.jpg",
        caption: "The first visit is a conversation with the doctor about where and when the sweating happens, before anything is recommended.",
      },
    ],

    // An illustration, not a photograph: Kaiteki has no before-and-after of its
    // own for sweating, and none is borrowed. The caption says so up front, and
    // the shared results disclaimer still renders beneath it.
    results: [
      {
        src: "https://cdn.kaiteki.my/concerns/excessive-sweating/before-after-01.png",
        nativeWidth: 1200,
        ratio: "1.71/1",
        illustration: true,
        caption: "Illustration, not a patient result: a prescription injectable reduces the nerve signal to sweat glands in the treated area, for a limited time",
      },
    ],

    // ── 13
    risks: {
      items: [
        {
          lead: "Common and usually temporary",
          body: "Discomfort, small bruises, redness or tenderness at the injection points, usually settling within days. In the palms, temporary weakness of grip can occur, which is one reason hands are assessed carefully.",
        },
        {
          lead: "Less common",
          body: "Some people notice more sweating in untreated areas, or skin irritation from topical treatments. Allergic reactions are rare.",
        },
        {
          lead: "Treating the wrong thing",
          body: "The most consequential risk here is managing the sweating while an overactive thyroid, an infection or another underlying cause goes unnoticed.",
        },
        {
          lead: "What treatment cannot do",
          body: "Nothing on this page cures primary hyperhidrosis. In-clinic treatment is temporary and needs repeating, it does not change the tendency behind the sweating, and it does not address sweating caused by another condition.",
        },
      ],
      disclose:
        "Tell your doctor if you are pregnant, breastfeeding or planning pregnancy, have a neuromuscular condition, take blood thinners or any regular medication, have had a reaction to an injectable before, or have a thyroid condition, diabetes or any recent unexplained symptoms.",
    },

    // ── 14
    costFactors: {
      intro:
        "Pricing is set after assessment. It depends on:",
      factors: [
        "Which areas are being treated, and how many.",
        "The size of each area, since underarms, palms and the scalp differ considerably.",
        "Whether investigation or a referral is needed before anything is planned.",
        "How often treatment would need repeating, which varies between individuals.",
      ],
    },

    // ── 16
    faqs: [
      {
        q: "Is excessive sweating a medical condition?",
        a: "Yes. When sweating is noticeably beyond what is needed to regulate temperature, it is recognised as a condition called hyperhidrosis.",
      },
      {
        q: "How is it different from normal sweating in hot weather?",
        a: "Everyone sweats more in Malaysia's heat and humidity. Hyperhidrosis is suggested when you sweat heavily in a cool or air-conditioned room, at rest, or in specific areas such as the palms or underarms regardless of the temperature, and when it interferes with daily life.",
      },
      {
        q: "What is the difference between deodorant and antiperspirant?",
        a: "A deodorant masks or reduces odour but does not reduce sweat. An antiperspirant contains aluminium salts that temporarily plug the sweat ducts, reducing how much sweat reaches the skin.",
      },
      {
        q: "Why do night sweats matter?",
        a: "Sweating at night that soaks your sleepwear or bedding is more likely to have another cause, such as a hormonal change, an infection, a medication side effect or another medical condition, and is worth having investigated rather than simply treated.",
      },
      {
        q: "Will treating one area make me sweat more elsewhere?",
        a: "Some people notice more sweating in untreated areas after treatment, which is called compensatory sweating. It is most strongly associated with surgical approaches, which are not offered here.",
      },
      {
        q: "Does excessive sweating cause body odour?",
        a: "Sweat itself has very little smell. Odour develops when bacteria on the skin break down secretions, mostly from the apocrine glands in the underarms and groin. Constant moisture makes this more likely, so sweating and odour often come together, but they are separate problems.",
      },
    ],

    // ── 17
    relatedConcerns: [
      {
        slug: "acne",
        reason: "Heat, sweat and friction can aggravate breakouts on the face, chest and back.",
      },
      {
        slug: "hair-loss",
        reason: "Scalp sweating and scalp conditions are often assessed in the same visit.",
      },
      {
        slug: "pigmentation",
        reason: "Underarm darkening from friction and constant moisture is assessed alongside the sweating.",
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
