import type { Post, PostCategory } from "@/lib/types";
// Explicit extension: scripts/check-blog.mts loads this file in plain Node.
import { legacyPosts } from "./blog-legacy.ts";

/**
 * /blog index. Metadata only — each post's body is `content/blog/<slug>.mdx`.
 *
 * Order here is authoring order and is NOT the display order: every consumer
 * sorts by `publishedAt` via `postsNewestFirst()`, so adding a post is a matter
 * of appending an entry + dropping in the .mdx file.
 *
 * Compliance: descriptions and lead answers are advertising copy under the MAB
 * rules, so they stay factual — no outcome guarantees, no superlatives, no
 * before/after or testimonial framing (docs/02 §8). That applies to posts
 * written here; the archive moved verbatim from blog.kaiteki.my is
 * `legacyPosts` (content/data/blog-legacy.ts), appended below.
 */
const authored: Post[] = [
  {
    slug: "ultherapy-vs-hifu-difference-which-suits-you",
    title: "Ultherapy vs HIFU: what’s the difference and which suits you?",
    seoTitle: "Ultherapy vs HIFU: What’s the Difference? | Kaiteki",
    description:
      "Ultherapy and HIFU both use focused ultrasound. How they differ in imaging and delivery, what each costs in Malaysia, and how to check the device is genuine.",
    category: "Treatments Explained",
    image:
      "https://cdn.kaiteki.my/blog/ultherapy-vs-hifu-difference-which-suits-you/ultherapy-vs-hifu-difference-which-suits-you.png",
    imageAlt:
      "A woman lying back as a clinician passes an ultrasound handpiece along her jawline, for a Kaiteki guide comparing Ultherapy and HIFU",
    author: "dr-jamie-gan",
    reviewedBy: "dr-chew-yuhhui",
    publishedAt: "2026-08-13",
    readingMinutes: 10,
    leadAnswer:
      "Both use focused ultrasound to reach the deeper support layer of the face without surgery, and Kaiteki offers both. The substantive difference is imaging: the Ultherapy platform lets the doctor view tissue layers on screen before delivering energy, while HIFU devices treat at depths set by the cartridge and clinical assessment.",
    concerns: ["face-lifting", "aging"],
    treatments: ["ultherapy", "hifu"],
    technology: ["ultherapy-system", "ultracel-q", "lifthera"],
    related: ["alma-titanium-lifting"],
  },
  {
    slug: "how-to-reduce-facial-redness-causes-treatment",
    title: "How to reduce facial redness: what causes it and what actually helps",
    seoTitle: "How to Reduce Facial Redness: Causes & Treatment | Kaiteki",
    description:
      "What causes facial redness, which ingredients calm it, how ageing skin makes it worse, and when vascular laser or IPL is the right next step.",
    category: "Skin Concerns",
    image:
      "https://cdn.kaiteki.my/blog/how-to-reduce-facial-redness-causes-treatment/how-to-reduce-facial-redness-causes-treatment.png",
    imageAlt:
      "Illustration of a woman with a flushed face wearing a soothing mask and hair towel, for a Kaiteki guide to facial redness",
    author: "dr-jeremy-low",
    publishedAt: "2026-08-13",
    readingMinutes: 8,
    leadAnswer:
      "Facial redness comes from dilated blood vessels near the skin's surface or from inflammation that has damaged the skin barrier. Rosacea, sun damage and over-exfoliation are the usual causes. A gentle barrier-repair routine with daily SPF 50+ settles most cases; persistent vessels are addressed with vascular laser or IPL.",
    concerns: ["vascular-lesions", "aging"],
    treatments: ["vascular-pigment-laser"],
    technology: ["pro-yellow", "dermav", "m22-ipl"],
    related: ["melasma-treatment-malaysia-causes-skincare"],
  },
  {
    slug: "melasma-treatment-malaysia-causes-skincare",
    title: "Melasma treatment in Malaysia: causes, skincare and when to see a doctor",
    seoTitle: "Melasma Treatment Malaysia: Causes & Skincare | Kaiteki",
    description:
      "What causes melasma in Malaysia's tropical climate, how to manage it with daily skincare and sun protection, and when professional treatment is the next step.",
    category: "Skin Concerns",
    image:
      "https://cdn.kaiteki.my/blog/melasma-treatment-malaysia-causes-skincare/melasma-treatment-malaysia-causes-skincare.png",
    imageAlt:
      "Illustration of a woman touching her cheek where a melasma patch sits, for a Kaiteki guide to melasma treatment in Malaysia",
    author: "dr-joaan-kong",
    publishedAt: "2026-08-13",
    readingMinutes: 8,
    leadAnswer:
      "Melasma is a chronic pigmentation disorder causing symmetrical brown or grey patches on the face, driven by UV exposure, hormones and genetics. Daily broad-spectrum SPF 50+ is the foundation of every plan. Where that is not enough, doctors add topical brighteners, oral tranexamic acid or low-energy Pico Laser.",
    concerns: ["melasma", "pigmentation"],
    treatments: ["pico-laser", "vascular-pigment-laser"],
    related: ["how-to-reduce-facial-redness-causes-treatment", "picocare-vs-picosure"],
  },
  {
    slug: "eczema-treatment-daily-skincare-to-clinic-care",
    title: "Eczema treatment: from daily skincare to in-clinic care",
    seoTitle: "Eczema Treatment: Daily Skincare to Clinic Care | Kaiteki",
    description:
      "How to manage eczema with the right daily routine, what triggers flares in Malaysia, and when to see a doctor. Causes, ingredients and clinic options.",
    category: "Skin Concerns",
    image:
      "https://cdn.kaiteki.my/blog/eczema-treatment-daily-skincare-to-clinic-care/eczema-treatment-daily-skincare-to-clinic-care.png",
    imageAlt:
      "Illustration of a woman with eczema patches on her arms, for a Kaiteki guide to daily skincare and in-clinic eczema care",
    author: "dr-yvonne-chuah",
    publishedAt: "2026-08-05",
    readingMinutes: 8,
    leadAnswer:
      "Effective eczema treatment starts with a consistent daily skincare routine built around gentle cleansing, barrier repair moisturisers and targeted topical treatments. When home care is not enough, professional options range from prescription corticosteroids and calcineurin inhibitors to phototherapy and biologic medications like dupilumab.",
    featured: true,
  },
  {
    slug: "excessive-sweating-hyperhidrosis-causes-treatment",
    title: "Excessive sweating (hyperhidrosis): causes and how it’s treated",
    seoTitle: "Excessive Sweating (Hyperhidrosis): Causes & Care | Kaiteki",
    description:
      "Struggling with excessive sweating? What causes hyperhidrosis, how it is diagnosed, and the options from antiperspirants to botulinum toxin.",
    category: "Skin Concerns",
    image:
      "https://cdn.kaiteki.my/blog/excessive-sweating-hyperhidrosis-causes-treatment/excessive-sweating-hyperhidrosis-causes-treatment.png",
    imageAlt:
      "Illustration of a woman blotting sweat from her face, for a Kaiteki guide to hyperhidrosis causes and treatment",
    author: "dr-joaan-kong",
    publishedAt: "2026-08-05",
    readingMinutes: 8,
    leadAnswer:
      "Excessive sweating without a clear trigger is a medical condition called hyperhidrosis, affecting roughly 4.8% of people worldwide. Treatment ranges from clinical strength antiperspirants to Botox injections and longer lasting options like miraDry. Which suits you depends on the type, the areas affected and how severe it is.",
    concerns: ["excessive-sweating"],
    treatments: ["botulinum-toxin"],
  },
  {
    slug: "best-moisturiser-keratosis-pilaris-when-creams-not-enough",
    title: "Best moisturisers for keratosis pilaris, and when creams aren’t enough",
    seoTitle: "Best Moisturisers for Keratosis Pilaris | Kaiteki Malaysia",
    description:
      "Struggling with rough, bumpy skin? Which ingredients help keratosis pilaris, how to apply them, and when it is worth seeing a doctor.",
    category: "Skincare",
    image:
      "https://cdn.kaiteki.my/blog/best-moisturiser-keratosis-pilaris-when-creams-not-enough/best-moisturiser-keratosis-pilaris-when-creams-not-enough.png",
    imageAlt:
      "Illustration of a woman applying moisturiser beside an open cream jar, for a Kaiteki guide to keratosis pilaris moisturisers",
    author: "dr-chin-wei-horng",
    publishedAt: "2026-08-05",
    readingMinutes: 7,
    leadAnswer:
      "Moisturisers that help most with keratosis pilaris contain a chemical exfoliant: lactic acid, salicylic acid or urea. These loosen the keratin plugs, and ceramides alongside them support the skin barrier. Allow four to six weeks of daily use. Where creams are not enough, a doctor can discuss prescription retinoids, clinic peels or laser.",
    concerns: ["excessive-sweating", "acne"],
    treatments: ["resurfacing-laser", "vascular-pigment-laser", "facial-treatments"],
  },
  {
    slug: "alma-titanium-lifting",
    title: "Alma Titanium Lifting: is this non-surgical facelift worth it?",
    seoTitle: "Alma Titanium Lifting: Non-Surgical Lifting | Kaiteki",
    description:
      "How Alma Titanium Lifting works, the areas it treats, who it suits and how many sessions a course usually takes, explained by a Kaiteki doctor.",
    category: "Treatments Explained",
    image: "https://cdn.kaiteki.my/blog/alma-titanium-lifting/alma-titanium-lifting.jpg",
    imageAlt:
      "Alma Titanium Lifting, a triple-wavelength laser lifting treatment at Kaiteki Skin Aesthetic Clinic",
    author: "dr-calvin-tan",
    publishedAt: "2026-07-04",
    readingMinutes: 4,
    leadAnswer:
      "Titanium Lifting is a non-invasive laser treatment. It uses three wavelengths (755nm, 810nm and 1064nm) to work across several skin depths at once, with the aim of tightening skin, supporting collagen and refining facial contour without surgery or significant downtime.",
    concerns: ["face-lifting", "aging", "face-contouring"],
    treatments: ["hifu", "ultherapy", "radiofrequency"],
    legacyPath: "/alma-titanium-lifting-is-this-non-surgical-facelift-worth-it/",
  },
  {
    slug: "picocare-vs-picosure",
    title: "Picocare vs PicoSure: which laser delivers better results?",
    seoTitle: "Picocare vs PicoSure: An Honest Comparison | Kaiteki",
    description:
      "Picocare and PicoSure compared on wavelengths, melasma cautions and safety for Asian and Malaysian skin, so you can ask your doctor the right questions.",
    category: "Device & Injectables",
    image: "https://cdn.kaiteki.my/blog/picocare-vs-picosure/picocare-vs-picosure.png",
    imageAlt:
      "Picocare and PicoSure picosecond lasers compared for pigmentation and tattoo treatment at Kaiteki",
    author: "dr-joaan-kong",
    publishedAt: "2026-05-28",
    updatedAt: "2026-09-07",
    readingMinutes: 6,
    leadAnswer:
      "Neither device is universally better. Picocare is a 1064nm/532nm platform whose 1064nm output is generally the lower-risk setting on deeper skin tones, with 595nm and 660nm handpieces for stubborn tattoo colours. PicoSure's 755nm and Focus lens suit green and blue ink and skin revitalisation. The right choice depends on your concern and your doctor's assessment.",
    concerns: ["pigmentation", "tattoo-removal"],
    treatments: ["pico-laser"],
    technology: ["picosure"],
    legacyPath: "/discovery-pico-vs-picosure/",
  },
  {
    slug: "wegovy-vs-mounjaro",
    title: "Wegovy vs Mounjaro: which is better for you?",
    seoTitle: "Wegovy vs Mounjaro: What the Trial Shows | Kaiteki",
    description:
      "Wegovy and Mounjaro compared on how they work, the SURMOUNT-5 head-to-head data, side effects, switching, and availability in Malaysia.",
    category: "Weight & Wellness",
    image: "https://cdn.kaiteki.my/blog/wegovy-vs-mounjaro/wegovy-vs-mounjaro.png",
    imageAlt:
      "Wegovy and Mounjaro weekly injection pens compared for medical weight management at Kaiteki",
    author: "dr-tim-chua",
    publishedAt: "2026-05-26",
    readingMinutes: 7,
    leadAnswer:
      "Both are once-weekly prescription injections for weight management. In SURMOUNT-5, the one large head-to-head trial, tirzepatide (Mounjaro) produced greater average weight loss than semaglutide (Wegovy). Averages are not individuals: suitability depends on your medical history, tolerance and a doctor's assessment.",
    concerns: ["body-slimming"],
    legacyPath: "/wegovy-vs-mounjaro-which-is-better-for-you/",
  },
  {
    slug: "hair-loss-treatment-malaysia-options-how-to-choose",
    title: "Hair loss treatment in Malaysia: the options, and how to choose",
    seoTitle: "Hair Loss Treatment Malaysia: How to Choose | Kaiteki",
    description:
      "Compare hair loss treatment options in Malaysia, from topical minoxidil and PRP to exosome therapy and transplant surgery, and how to choose the right one.",
    category: "Skin Concerns",
    image:
      "https://cdn.kaiteki.my/blog/hair-loss-treatment-malaysia-options-how-to-choose/hair-loss-treatment-malaysia-options-how-to-choose.png",
    imageAlt:
      "Illustration of a woman brushing her hair with loose strands caught in the brush, for a Kaiteki guide to hair loss treatment in Malaysia",
    author: "dr-tim-chua",
    reviewedBy: "dr-william-yap",
    publishedAt: "2026-09-06",
    readingMinutes: 11,
    leadAnswer:
      "Hair loss treatment in Malaysia ranges from over-the-counter topicals to prescription medical management, in-clinic regenerative treatment and transplant surgery. Which one is appropriate depends on the cause, which is why a scalp assessment comes first. Hereditary pattern loss, stress-related shedding and a scalp condition are each managed differently.",
    concerns: ["hair-loss"],
    treatments: ["exosome-therapy"],
    related: ["excessive-sweating-hyperhidrosis-causes-treatment"],
    faqs: [
      {
        q: "What is the most effective hair loss treatment?",
        a: "There is no single answer, because effectiveness depends on the cause. Hereditary pattern loss is managed medically for the long term, often with in-clinic treatment alongside it. Shedding after illness, childbirth or a stressful period usually settles once the trigger passes. A scalp condition or an iron or thyroid problem needs that cause treated first, since hair rarely improves while the reason it is falling remains unaddressed.",
      },
      {
        q: "Is hair loss reversible?",
        a: "It depends on the cause. Telogen effluvium, the shedding that follows illness, surgery, childbirth or severe stress, usually recovers once the trigger has resolved. Hereditary pattern loss is managed rather than cured, and starting earlier generally leaves more to work with. Follicles that have scarred or been dormant for years cannot be brought back by any treatment, which is why timing matters here more than in most concerns.",
      },
      {
        q: "Why does Kaiteki not publish hair loss treatment prices?",
        a: "Because a price is meaningless before an assessment. What it depends on is the area involved, whether investigation such as blood testing is needed first, how many sessions are appropriate, and whether medical management forms part of the plan alongside in-clinic treatment. The doctor goes through the specifics with you at the consultation, which is free, before you commit to anything.",
      },
      {
        q: "Does minoxidil work for women?",
        a: "Topical minoxidil is well established for female pattern hair loss and is one of the usual starting points. A low-dose oral form is also prescribed for some women under medical supervision. It works only for as long as it is used, and in women it is worth pairing with investigation of iron status and thyroid function, since those are frequent contributors that no topical addresses.",
      },
      {
        q: "How long before hair loss treatment is reviewed?",
        a: "Hair changes slowly, so every option here is judged over months rather than weeks. Photographs taken at the start and compared later are far more reliable than memory or a mirror. Some people notice a brief increase in shedding early in a course, which is expected and should be explained to you in advance. Anyone offering regrowth on a fixed timetable is overstating what is known.",
      },
      {
        q: "Do I need blood tests for hair loss?",
        a: "Often, particularly where the loss is diffuse, came on suddenly, or comes with other symptoms such as fatigue or nail changes. Thyroid function and iron status are common and treatable contributors that no topical or in-clinic treatment addresses, and finding one changes the plan entirely. A clinic proposing a course of treatment for diffuse hair loss without investigating anything is worth questioning.",
      },
      {
        q: "Does Kaiteki perform hair transplant surgery?",
        a: "No. Kaiteki assesses hair loss, investigates the cause, and offers in-clinic treatment alongside medical management where that is appropriate. Transplant surgery is not performed here. If your assessment points that way, the doctor will tell you directly rather than recommend a course of something else.",
      },
    ],
  },
  {
    slug: "onda-coolwave-vs-coolsculpting-fat-cellulite",
    title: "Onda Coolwaves vs CoolSculpting: how they differ and which suits you",
    seoTitle: "Onda Coolwave vs CoolSculpting: Which Suits You | Kaiteki",
    description:
      "Onda Coolwaves and CoolSculpting reduce localised fat by opposite mechanisms. How microwave energy and cryolipolysis differ, and which one suits your goals.",
    category: "Device & Injectables",
    image:
      "https://cdn.kaiteki.my/blog/onda-coolwave-vs-coolsculpting-fat-cellulite/onda-coolwave-vs-coolsculpting-fat-cellulite.png",
    imageAlt:
      "Illustration of a woman in activewear seated against a hibiscus motif, for a Kaiteki guide comparing Onda Coolwaves and CoolSculpting",
    author: "dr-jacqueline-tan",
    reviewedBy: "dr-tim-chua",
    publishedAt: "2026-09-06",
    readingMinutes: 7,
    leadAnswer:
      "Both are non-invasive body contouring devices for localised fat, working by opposite mechanisms. CoolSculpting cools fat cells until they are damaged, a process called cryolipolysis. Onda heats the targeted tissue with microwave energy while cooling the skin. The practical difference is scope: Onda is also used for firmness and the dimpled appearance associated with cellulite.",
    concerns: ["body-slimming"],
    treatments: ["fat-freezing", "microwave-contouring"],
    technology: ["coolsculpting", "onda-coolwaves"],
    related: ["wegovy-vs-mounjaro"],
    faqs: [
      {
        q: "Can Onda and CoolSculpting be combined?",
        a: "Sometimes. The two act on different targets, so a plan can use cryolipolysis for a defined pocket of fat and Onda across a broader zone where firmness and skin texture are also part of the picture. Whether that suits you depends on the areas involved, your skin and your medical history, and it is a decision for the treating doctor rather than a package chosen in advance.",
      },
      {
        q: "Is fat freezing a permanent solution?",
        a: "Fat cells affected by cryolipolysis are cleared by the body and are not replaced, but that is not the same as a permanent result. The fat cells remaining in the treated area can still enlarge if your weight increases, which is why neither device is a substitute for diet, exercise or medical weight management. Both are intended for people close to their target weight.",
      },
      {
        q: "Does Onda hurt, and is there downtime?",
        a: "Comfort varies between individuals. There is no suction and no cold, the built-in cooling is intended to keep the skin surface comfortable, and most people describe a warming sensation. Downtime is usually limited, though temporary warmth, redness or mild tenderness over the treated area can occur and typically settles. Your doctor explains what to expect for you.",
      },
      {
        q: "How many sessions will I need?",
        a: "It is individual with both devices, and it is set after the area has been assessed rather than before. CoolSculpting is planned by area and applicator, with each cycle running around 35 to 60 minutes. Onda is commonly a course of several sessions spaced a few weeks apart. Anyone quoting a fixed session count without assessing the area is guessing.",
      },
      {
        q: "Which one is better for belly fat?",
        a: "Both are used on the abdomen, so the answer depends on what is bothering you. If it is a defined, pinchable pocket of fat and the skin over it is still firm, cryolipolysis is built for that. If loose skin or texture over the area is part of the concern, Onda addresses fat, firmness and the dimpled appearance associated with cellulite together. A doctor decides after examining the area.",
      },
      {
        q: "Will either treatment help me lose weight?",
        a: "No. Both address specific pockets of localised fat rather than overall body weight, and neither substitutes for diet, exercise or medical weight management. They are intended for people already close to their target weight. If overall weight is the concern, that is a different conversation and a different assessment.",
      },
    ],
  },
  {
    slug: "lip-filler-malaysia-types-cost-what-to-expect",
    title: "Lip fillers in Malaysia: types, what the cost depends on, and what to expect",
    seoTitle: "Lip Fillers Malaysia: Types, Cost & What to Expect | Kaiteki",
    description:
      "What lip fillers are, how hyaluronic acid gels differ, the styles people ask for, what the cost depends on, and the risks to understand before you book.",
    category: "Device & Injectables",
    image:
      "https://cdn.kaiteki.my/blog/lip-filler-malaysia-types-cost-what-to-expect/lip-filler-malaysia-types-cost-what-to-expect.png",
    imageAlt:
      "Close-up of a woman's lower face as a fine needle is positioned at her lip, for a Kaiteki guide to lip fillers in Malaysia",
    author: "dr-say-wei-xian",
    reviewedBy: "dr-jessie-lim",
    publishedAt: "2026-09-06",
    readingMinutes: 9,
    leadAnswer:
      "Lip fillers are cross-linked hyaluronic acid gels injected by a doctor to add volume, shape or definition. The injection takes 15 to 30 minutes and downtime is generally limited, but lips swell more than most areas, so the shape settles over the following weeks. Which gel and how much is assessed individually.",
    concerns: ["face-contouring"],
    treatments: ["dermal-fillers"],
    technology: ["juvederm", "restylane"],
    related: ["ultherapy-vs-hifu-difference-which-suits-you"],
    faqs: [
      {
        q: "Do lip fillers hurt?",
        a: "Most people describe filler injection as briefly uncomfortable rather than painful. A topical anaesthetic is commonly applied beforehand, and several gels are supplied with lidocaine included to support comfort during injection. Lips are more sensitive than cheeks, so comfort options are worth discussing before the doctor starts.",
      },
      {
        q: "How long do lip fillers last?",
        a: "It varies between individuals and depends on the gel used, how much was placed and how your body processes it. Lips tend not to hold filler as long as less mobile areas such as the cheeks, because they are in constant motion through eating, speaking and expression. Your doctor can tell you what is realistic for the specific product being considered.",
      },
      {
        q: "Can lip fillers be reversed?",
        a: "Hyaluronic acid fillers can, in certain circumstances, be managed with a dissolving agent, and your doctor can discuss whether that applies to you. It is a genuine advantage over permanent alternatives, but it is not guaranteed in every situation, the agent carries its own risks including allergic reaction, and it is assessed individually rather than treated as an undo button.",
      },
      {
        q: "How much filler will I need?",
        a: "That is assessed rather than chosen in advance, and it depends on your lip anatomy and what you want to change. Starting conservatively and building over more than one session is common for lips, because it is easier to add than to correct. A doctor should tell you plainly if what you are asking for is more than your anatomy will carry well.",
      },
      {
        q: "Why does Kaiteki not publish lip filler prices?",
        a: "Because the plan determines the product and the product determines the cost. Which gel your anatomy calls for, how much of it, whether the area around the lips is involved and whether more than one session is sensible are all decided after assessment. Cost is confirmed at consultation once a plan has been discussed, and the consultation itself is free.",
      },
      {
        q: "What are the serious risks of lip filler?",
        a: "The significant one with any facial filler is a vascular complication, where product enters or compresses a blood vessel and interrupts blood supply to the tissue. It is uncommon, but the lips are well supplied with blood vessels, which is why anatomy and injection technique matter and why this is a doctor's procedure. Severe or increasing pain, blanching, or dusky discolouration in the hours after treatment should be reported to the clinic immediately.",
      },
      {
        q: "How do I choose a doctor for lip filler?",
        a: "Check that they are registered with the Malaysian Medical Council and LCP certified, both of which are verifiable. Beyond that, expect to be examined before anything is recommended, to be told which specific branded product is being used, and to have the risks explained before you consent. A doctor willing to advise against treatment or to suggest starting with less is showing judgement.",
      },
    ],
  },
  {
    slug: "chin-filler-before-and-after",
    title: "Chin filler before and after: what changes, and when",
    seoTitle: "Chin Filler Before and After: What to Expect | Kaiteki",
    description:
      "What chin filler changes and when: the recovery timeline, how long results last, which fillers are used, and when it is paired with tear trough filler.",
    category: "Device & Injectables",
    image:
      "https://cdn.kaiteki.my/blog/chin-filler-before-and-after/chin-filler-before-and-after.png",
    imageAlt:
      "A woman lies back with her eyes closed as a gloved doctor positions a fine needle at her lower face, on a cover titled Chin Filler Before and After",
    author: "dr-chloe-wan",
    reviewedBy: "dr-chew-yuhhui",
    publishedAt: "2026-10-11",
    readingMinutes: 7,
    leadAnswer:
      "Chin filler is an injectable gel placed by a doctor to add projection and definition to a recessed or undefined chin. Some change is visible straight after injection, but swelling hides the settled shape for around two weeks. Hyaluronic acid chin fillers commonly last around a year, sometimes longer, and this varies between individuals.",
    concerns: ["face-contouring", "dark-eye-circles"],
    treatments: ["dermal-fillers", "bio-stimulator"],
    technology: ["juvederm", "belotero"],
    related: ["lip-filler-malaysia-types-cost-what-to-expect"],
    faqs: [
      {
        q: "How noticeable is chin filler?",
        a: "The change is in proportion rather than size. Most people notice their profile first, where the chin sits relative to the lips and nose. How much changes depends on how much projection was lacking and how much filler your anatomy carries well.",
      },
      {
        q: "How long does chin filler last?",
        a: "Hyaluronic acid chin fillers commonly last around a year, and some studies have followed results for 18 months. It varies with the product, the amount placed and how quickly your body breaks the gel down.",
      },
      {
        q: "Does chin filler look natural?",
        a: "It can, when the amount respects your facial proportions. Overfilling is the usual reason a chin looks obviously treated, so a doctor may advise less than you asked for, or building up over two sessions.",
      },
      {
        q: "Can chin filler and tear trough filler be done together?",
        a: "Sometimes, if an assessment finds both areas need it. The under-eye is a more demanding area, and not every dark circle is a hollow, so the tear trough is assessed on its own merits rather than added to a chin plan by default.",
      },
      {
        q: "Is chin filler painful?",
        a: "Most people describe a brief pinch or pressure. Numbing cream is applied first and many chin gels contain lidocaine. Some tenderness for a day or two afterwards is normal.",
      },
    ],
  },
  {
    slug: "radiofrequency-skin-tightening",
    title: "Radiofrequency skin tightening: how it works and what it treats",
    seoTitle: "Radiofrequency Skin Tightening: How It Works | Kaiteki",
    description:
      "How radiofrequency skin tightening works, the device types doctors use, which concerns it suits, what a session and recovery involve, and how results develop.",
    category: "Device & Injectables",
    image:
      "https://cdn.kaiteki.my/blog/radiofrequency-skin-tightening/radiofrequency-skin-tightening.png",
    imageAlt:
      "A smiling woman with her eyes closed holds her cheeks in both hands, on a cover titled Radiofrequency Skin Tightening: How It Works and What It Treats",
    author: "dr-chew-yuhhui",
    reviewedBy: "dr-chloe-wan",
    publishedAt: "2026-10-11",
    readingMinutes: 7,
    leadAnswer:
      "Radiofrequency skin tightening uses controlled electrical energy to warm the deeper layers of the skin, prompting collagen to contract and then remodel over the following months. It is non-surgical with little downtime, suited to mild to moderate laxity rather than marked sagging, and usually planned as a short course of sessions.",
    concerns: ["face-lifting", "face-contouring", "aging"],
    treatments: ["radiofrequency", "microneedling"],
    technology: ["xerf", "btl-exilis", "morpheus8"],
    related: ["ultherapy-vs-hifu-difference-which-suits-you", "alma-titanium-lifting"],
    faqs: [
      {
        q: "Is radiofrequency the same as HIFU?",
        a: "No. Both prompt a collagen response, but HIFU uses focused ultrasound delivered to set points at depth, while radiofrequency warms a broader volume of tissue. They suit different degrees of laxity, which is why clinics often offer both.",
      },
      {
        q: "How many sessions will I need?",
        a: "A course of about two to three sessions, roughly four to six weeks apart, is common, followed by maintenance. The plan is set after assessment rather than fixed in advance.",
      },
      {
        q: "Does radiofrequency hurt?",
        a: "Most people describe a deep, building warmth, like a hot stone massage, rather than pain. Surface devices use contact cooling. RF microneedling is different: numbing cream is usually applied first.",
      },
      {
        q: "How long do the results last?",
        a: "Results typically last one to two years, depending on age, skin quality, sun exposure and lifestyle. The change comes from new collagen, so it fades gradually, and maintenance sessions help it hold.",
      },
      {
        q: "Is it safe for Asian skin?",
        a: "Radiofrequency heats tissue rather than targeting pigment, so it does not depend on colour contrast and is used across a wide range of skin tones. Settings still matter: burns and pigment change trace back to energy that was wrong for the skin.",
      },
    ],
  },
  {
    slug: "best-laser-for-acne-scars",
    title: "Best laser for acne scars: how each works and what to expect",
    seoTitle: "Best Laser for Acne Scars: How Each Works | Kaiteki",
    description:
      "Which laser suits which acne scar: how pico, fractional CO2 and RF microneedling differ, the sessions and downtime involved, and what results to expect.",
    category: "Treatments Explained",
    image: "https://cdn.kaiteki.my/blog/best-laser-for-acne-scars/best-laser-for-acne-scars.png",
    imageAlt:
      "Illustration of a man in a headband applying patches to his cheeks, on a cover titled Best Laser for Acne Scars: How Each Works and What Results to Expect",
    author: "dr-hong-peiyi",
    reviewedBy: "dr-chloe-wan",
    publishedAt: "2026-10-11",
    readingMinutes: 7,
    leadAnswer:
      "There is no single best laser for acne scars. The right choice depends on the scar type: RF microneedling is often the starting point for rolling and boxcar scars, fractional CO2 for established or deeper scarring, and pico laser for the flat marks around them. Most plans combine treatments over several sessions.",
    concerns: ["acne-scars", "acne"],
    treatments: ["resurfacing-laser", "microneedling", "pico-laser"],
    technology: ["fractional-co2", "potenza", "picosure"],
    related: ["picocare-vs-picosure", "radiofrequency-skin-tightening"],
    faqs: [
      {
        q: "What is the best laser for acne scars?",
        a: "There is no universal best laser, because ice pick, boxcar, rolling and raised scars sit at different depths and respond differently. RF microneedling is often the starting point for rolling and boxcar scars, and fractional CO2 for more established scarring. A doctor examines which types you have before recommending a device or a combination.",
      },
      {
        q: "Can laser treatment completely remove acne scars?",
        a: "Depressed scarring can often be improved, though rarely erased. Ice pick scars in particular rarely resolve fully with energy devices alone. A realistic goal is a meaningful improvement in texture over a course of treatment, not a complete erasure.",
      },
      {
        q: "Is laser treatment for acne scars painful?",
        a: "Most people describe it as uncomfortable rather than painful. Numbing cream is applied beforehand where appropriate, and cooling is used during and after. Ablative CO2 resurfacing is felt more than RF microneedling, and RF microneedling more than pico laser.",
      },
      {
        q: "How soon will I see results?",
        a: "Improvement builds gradually over months as collagen remodels, not the following week. Deeper scars are often formally reassessed six to twelve months after a course. Photos taken in the same light help, because slow change is hard to see in the mirror.",
      },
      {
        q: "Is laser for acne scars safe on Asian skin?",
        a: "Yes, when the device and settings suit your skin. Medium and deeper skin tones carry a higher chance of post-inflammatory hyperpigmentation after energy-based treatment, which doctors manage with conservative settings, longer intervals between sessions and strict sun protection.",
      },
    ],
  },
  {
    // kt102 (docs/content-schedule.md). Spoke of /concerns/acne-scars. Competitor
    // gap 2026-11-03: the self-check (stretch test, side light, pores) and the
    // Malaysian-skin note are what the ranking Malaysian posts leave out.
    slug: "ice-pick-scars",
    title: "Ice pick scars: how to recognise them and which treatments reach them",
    seoTitle: "Ice Pick Scars: How to Tell & What Reaches Them | Kaiteki",
    description:
      "How to tell ice pick scars from pores and other acne scars, why lasers alone rarely reach them, and what TCA CROSS and punch excision involve on Malaysian skin.",
    category: "Skin Concerns",
    image: "https://cdn.kaiteki.my/blog/ice-pick-scars/ice-pick-scars-cover.png",
    imageAlt:
      "Line illustration of a man holding a hand mirror and touching his cheek, where a small cluster of pinpoint pits is shaded pink",
    author: "dr-jen-meng",
    reviewedBy: "dr-yeong-bin",
    publishedAt: "2026-11-03",
    readingMinutes: 6,
    leadAnswer:
      "Ice pick scars are narrow, deep acne scars, usually under 2mm wide, that run straight down into the skin. Lasers and microneedling help the skin around them but rarely resolve them alone. The treatments aimed at them work scar by scar, such as TCA CROSS or punch excision, followed by resurfacing.",
    concerns: ["acne-scars", "acne"],
    treatments: ["microneedling", "resurfacing-laser"],
    technology: ["fractional-co2", "potenza"],
    related: ["best-laser-for-acne-scars", "dermapen-vs-rf-microneedling"],
    faqs: [
      {
        q: "Can ice pick scars be removed completely?",
        a: "Rarely. They can often be improved, but not erased, and improvement builds over months as collagen remodels.",
      },
      {
        q: "Can pico laser treat ice pick scars?",
        a: "Pico laser is mainly for the flat marks around scars. It does not reach the depth of an ice pick scar on its own.",
      },
      {
        q: "Do ice pick scars get worse with age?",
        a: "They can look more noticeable as skin loses volume and firmness, even though the scar itself has not changed.",
      },
      {
        q: "How many TCA CROSS sessions are needed?",
        a: "It is usually repeated over several sessions a few weeks apart. The number is set after the doctor has examined each scar.",
      },
    ],
  },
  {
    // kt104 (docs/content-schedule.md). No Malaysian page ranks for the term
    // (2026-11-03); the US pages quote durations, which house rules do not.
    // Facts match the signed /technology/sculptra and /technology/radiesse pages.
    slug: "sculptra-vs-radiesse",
    title: "Sculptra vs Radiesse: how the two collagen stimulators differ",
    seoTitle: "Sculptra vs Radiesse: How They Differ | Kaiteki",
    description:
      "Sculptra and Radiesse are both collagen stimulators but differ in material, timing and where they are used. How each works, and why neither can be dissolved.",
    category: "Device & Injectables",
    image: "https://cdn.kaiteki.my/blog/sculptra-vs-radiesse/sculptra-vs-radiesse-cover.png",
    imageAlt:
      "Line illustration of a woman resting her fingertips on her cheekbone, with the temple, mid-cheek and jawline shaded pink",
    author: "dr-jamie-gan",
    reviewedBy: "dr-chin-wei-horng",
    publishedAt: "2026-11-03",
    readingMinutes: 5,
    leadAnswer:
      "Sculptra and Radiesse both prompt the skin's own collagen, but they behave differently. Sculptra, made of poly-L-lactic acid, works only gradually over a course of sessions. Radiesse, made of calcium hydroxylapatite in a gel, gives some support on the day, then works gradually too. Neither can be dissolved, so a doctor plans either carefully.",
    concerns: ["face-lifting", "aging"],
    treatments: ["bio-stimulator", "dermal-fillers"],
    technology: ["sculptra", "radiesse", "ellanse"],
    related: ["ellanse-vs-sculptra", "radiesse"],
    faqs: [
      {
        q: "Is Sculptra a filler?",
        a: "Not in the usual sense. It is a collagen stimulator: it adds little volume on the day and works by prompting your own collagen over time.",
      },
      {
        q: "Which lasts longer, Sculptra or Radiesse?",
        a: "Both manufacturers publish figures from their own studies, but duration varies between people, because the material is cleared by the body and your tissue keeps ageing. Your doctor will explain what is realistic for you rather than quote a number.",
      },
      {
        q: "Can Sculptra and Radiesse be used together?",
        a: "Sometimes, in different areas or at different stages of a plan. Whether that makes sense for you is decided at assessment.",
      },
      {
        q: "Are Sculptra and Radiesse suitable for Asian skin?",
        a: "Both work biologically rather than with light, so skin tone is not the limiting factor it can be with lasers. Suitability depends on your anatomy, the area and your medical history.",
      },
    ],
  },
  {
    // kt105, English twin of the BM lead piece (pantang selepas laser muka) and
    // the 中文 version (激光后注意事项); both in content/data/blog-locale.ts.
    // Sources: Davis & Callender, J Clin Aesthet Dermatol 2010 (PIH in skin of
    // colour); Mayo Clinic, laser resurfacing; The Star QuickCheck, 6 Mar 2026.
    slug: "after-facial-laser-aftercare",
    title: "What to avoid after laser treatment on your face, and which rules are myths",
    seoTitle: "What to Avoid After Laser Treatment on Your Face | Kaiteki",
    description:
      "What to avoid after a facial laser treatment and why: sun, heat, active skincare and picking. Plus the food myths, and the signs that mean call your doctor.",
    category: "Treatments Explained",
    author: "dr-say-wei-xian",
    reviewedBy: "dr-hong-peiyi",
    publishedAt: "2026-11-09",
    readingMinutes: 3,
    leadAnswer:
      "After a facial laser treatment, the rules that matter are protecting your skin from sun and heat, pausing active skincare such as retinoids and acids, and leaving any fine crusts to fall off on their own. How long depends on the laser used. Avoiding soy sauce or dark foods has no evidence behind it.",
    concerns: ["pigmentation", "melasma"],
    treatments: ["pico-laser", "resurfacing-laser"],
    faqs: [
      {
        q: "Can I eat soy sauce after a facial laser?",
        a: "Yes. There is no evidence that soy sauce or other dark-coloured food darkens skin after laser.",
      },
      {
        q: "How long should I wear sunscreen after laser?",
        a: "Every day, and keep going after the skin has healed, because sun is the main reason pigment comes back.",
      },
      {
        q: "When can I wear makeup again after laser?",
        a: "Once redness settles and the skin is intact. Your doctor will tell you for your own treatment.",
      },
      {
        q: "Can I exercise after a facial laser?",
        a: "Light activity is usually fine. Avoid hard workouts and heat for the period your doctor specifies.",
      },
    ],
  },  {
    // kt106 · Melasma vs pigmentation. BM lead "jeragat vs pigmentasi" (head term
    // jeragat 5,400/mo; docs/03d §3, docs/19 melasma.md); 中文 黄褐斑 vs 色斑 /
    // 黄褐斑和晒斑的区别 (docs/18 §5.1, docs/19 melasma.md); EN "melasma vs
    // pigmentation". EN links to melasma-treatment-malaysia-causes-skincare rather
    // than repeating its treatment plan (no cannibalisation).
    // Sources: Ogbechie-Godec & Elbuluk, "Melasma: an Up-to-Date Comprehensive
    // Review", Dermatology and Therapy 2017 (PMC5574745); Davis & Callender, J Clin
    // Aesthet Dermatol 2010 (PIH in skin of colour); AAD, Melasma overview.
    // Author dr-lim-xiao-chien, reviewer dr-jacqueline-tan (both proposed).
    slug: "melasma-vs-pigmentation",
    title: "Melasma vs pigmentation: how to tell them apart, and why it matters",
    seoTitle: "Melasma vs Pigmentation: How to Tell Them Apart | Kaiteki",
    description: "Melasma, sun spots and post-inflammatory marks look alike but behave differently. How to tell melasma from other pigmentation, and why it matters before laser.",
    category: "Skin Concerns",
    author: "dr-lim-xiao-chien",
    reviewedBy: "dr-jacqueline-tan",
    publishedAt: "2026-11-09",
    readingMinutes: 4,
    leadAnswer: "Melasma is one type of pigmentation. It forms soft-edged, symmetrical patches on both cheeks, the upper lip or forehead, and shifts with sun, heat and hormones. Sun spots are discrete, sharp-edged spots from years of sun, and post-inflammatory marks follow acne or irritation. Each is managed differently, so a doctor confirms the type first.",
    concerns: ["melasma", "pigmentation", "acne"],
    treatments: ["pico-laser"],
    related: ["melasma-treatment-malaysia-causes-skincare", "after-facial-laser-aftercare"],
    faqs: [
      {
        q: "Is melasma the same as pigmentation?",
        a: "Melasma is one kind of pigmentation. Pigmentation also includes sun spots, freckles and the marks left after acne or irritation.",
      },
      {
        q: "How can I tell if I have melasma or sun spots?",
        a: "Melasma tends to form matching, soft-edged patches on both cheeks or above the lip. Sun spots are separate, sharp-edged spots. A doctor can confirm which you have, sometimes under magnification.",
      },
      {
        q: "Can laser make melasma worse?",
        a: "It can, if the wrong device or settings are used. This is why melasma is identified before any laser and treated conservatively.",
      },
      {
        q: "Does post-acne pigmentation go away on its own?",
        a: "It often fades over months once the acne has settled, especially with daily sun protection. Darker skin tones can take longer.",
      },
    ],
  },
  {
    // kt107 · darkening after laser (docs/content-schedule.md). 中文 lead on
    // 激光反黑怎么办 (also 打斑后反黑; docs/18 §6 Q4, docs/19 acne.md, pigmentation.md),
    // BM on "kulit gelap selepas laser" (laser kulit gelap), EN twin on "darkening
    // after laser treatment". Autocomplete demand only, no measured volume.
    // Distinct from kt105 (aftercare/prevention): this is what to do once darkening
    // has appeared. Links to kt105 in each language.
    // Sources: Davis & Callender, J Clin Aesthet Dermatol 2010 (PIH in skin of
    // colour); Mar et al., J Cutan Med Surg 2024;28(5):473-480 (systematic review:
    // partial, inconsistent responses; laser sometimes worsened PIH); Medscape,
    // Postinflammatory Hyperpigmentation (clearing often takes months); NPRA
    // cancellations of cosmetic notifications for mercury/hydroquinone/tretinoin.
    // Bodies: content/blog/darkening-after-laser.mdx, content/blog/zh/…, content/blog/ms/….
    slug: "darkening-after-laser",
    title: "Darkening after laser treatment: why it happens on Asian skin and what to do",
    seoTitle: "Darkening After Laser Treatment: What to Do | Kaiteki",
    description: "Skin turning darker after a laser is usually post-inflammatory hyperpigmentation. Why it happens on Asian skin, how to tell it from melasma, and what to do now.",
    category: "Skin Concerns",
    author: "dr-chloe-wan",
    reviewedBy: "dr-teresa-tan",
    publishedAt: "2026-11-09",
    readingMinutes: 3,
    leadAnswer: "Darkening after a laser is usually post-inflammatory hyperpigmentation, the skin's response to inflammation, and it is more common in Asian and deeper skin tones. Strict daily sun protection and a gentle routine come first, then doctor-guided treatment. It usually fades over months, and another strong laser too soon can make it worse.",
    concerns: ["pigmentation", "melasma"],
    treatments: ["pico-laser"],
    related: ["after-facial-laser-aftercare"],
    faqs: [
      {
        q: "Is darkening after laser permanent?",
        a: "Usually not. Post-inflammatory darkening tends to lighten over months with sun protection and care, though how long it takes varies and some marks need treatment.",
      },
      {
        q: "Should I have another laser to clear the darkening?",
        a: "Not straight away. More heat can deepen it. A doctor may consider low-energy laser later, once the skin has calmed and only if topical care is not enough.",
      },
      {
        q: "Can I use a whitening cream on laser darkening?",
        a: "Only one your doctor recommends. Unregistered lightening creams can contain mercury, hydroquinone or tretinoin, which can irritate skin and make darkening worse.",
      },
      {
        q: "How do I know if it is melasma rather than laser darkening?",
        a: "Melasma forms symmetrical patches on both cheeks, forehead or upper lip, while post-laser darkening follows the treated area. A doctor examines the skin to tell them apart.",
      },
    ],
  },
  {
    // kt108 · Nasolabial folds. 中文 lead: 法令纹怎么消除 (docs/18 §5.1, docs/19
    // fine-lines-wrinkles.md); BM: cara hilangkan garis senyuman; EN: nasolabial
    // folds treatment. Spoke of /concerns/fine-lines-wrinkles.
    // Bodies: content/blog/nasolabial-folds.mdx, content/blog/zh/…, content/blog/ms/….
    // Sources: Rohrich & Pessa, Plast Reconstr Surg 2007;119:2219 (facial fat
    // compartments; nasolabial fat a discrete unit); Beleznay et al., Dermatol Surg
    // 2015 (blindness from fillers: nasolabial fold 13.3% of reported sites).
    // Facts agree with the signed dermal-fillers, bio-stimulator, hifu, ultherapy and
    // radiofrequency pages and the fine-lines-wrinkles concern page ("support placed
    // above the fold"). Author dr-yvonne-chuah, reviewer dr-lucas-chew, both proposed.
    slug: "nasolabial-folds",
    title: "Nasolabial folds: why they deepen and the non-surgical options a doctor considers",
    seoTitle: "Nasolabial Folds Treatment: Causes & Options | Kaiteki",
    description: "Why nasolabial folds deepen, how a doctor finds the cause, and which non-surgical options are considered for each, with the filler risks in this area.",
    category: "Skin Concerns",
    author: "dr-yvonne-chuah",
    reviewedBy: "dr-lucas-chew",
    publishedAt: "2026-11-09",
    readingMinutes: 4,
    leadAnswer: "Nasolabial folds are a normal crease where the cheek meets the lip, so treatment can soften a deepened fold but not remove it. The cause decides the plan: lost cheek volume, descended tissue or loose skin. Options include fillers, bio-stimulators and energy-based lifting, and filler here carries a recognised vascular risk.",
    concerns: ["fine-lines-wrinkles", "face-lifting"],
    treatments: ["dermal-fillers", "bio-stimulator", "hifu", "ultherapy", "radiofrequency"],
    technology: ["sculptra", "radiesse"],
    related: ["sculptra-vs-radiesse"],
    faqs: [
      {
        q: "Can nasolabial folds be removed completely?",
        a: "No. The fold is normal anatomy where the cheek meets the lip. Treatment aims to soften a fold that has deepened, and a face with no fold at all would not look natural.",
      },
      {
        q: "Is filler injected straight into the nasolabial fold?",
        a: "Not always. When the fold has deepened because the cheek above it has lost volume, support is often placed in the cheek rather than in the line. The doctor decides after assessing the whole mid-face.",
      },
      {
        q: "Is filler in the nasolabial area safe?",
        a: "It is a recognised higher-risk area because blood vessels run close to the fold. Serious complications are rare, but it should only be done by a doctor trained in facial anatomy and in managing complications.",
      },
      {
        q: "Can HIFU or radiofrequency treat nasolabial folds?",
        a: "They are used for skin laxity, which is one cause of a deeper fold. They do not replace lost volume, so whether they suit you depends on what is behind your fold.",
      },
    ],
  },
  {
    // kt109 · fat-freezing-aftercare. 中文 lead: 冷冻溶脂后注意事项 (autocomplete also
    // 冷冻溶脂后遗症, gl=my hl=zh-CN, 2026-11-09). EN twin: "fat freezing side effects"
    // (strong autocomplete). BM: unmapped, no Malay autocomplete for aftercare or side
    // effects; written on "rawatan fat freezing" / "bekukan lemak" (both thin autocomplete).
    // Sources: Jalian et al., JAMA Dermatology 2014 (PAH first described; sensation loss
    // up to ~8 weeks); 2025 systematic review, Aesthetic Surgery Journal Open Forum
    // (28 studies, ~13,078 patients, pooled PAH ~0.22% / 1 in 455, low certainty);
    // Keaney, Gudas & Alster, Dermatologic Surgery 2015 (delayed-onset pain).
    // Aftercare kept to the signed /treatments/fat-freezing page (loose clothing or
    // compression garment, stable weight, review ~2 months) and "your doctor's instructions".
    // Author Dr Calvin Tan, reviewer Dr Tim Chua, both proposed.
    slug: "fat-freezing-aftercare",
    title: "Fat freezing aftercare: what is normal, what helps and when to call your doctor",
    seoTitle: "Fat Freezing Side Effects & Aftercare | Kaiteki",
    description: "What is normal after fat freezing, from redness and numbness to delayed pain, what helps, the rare paradoxical fat growth, and when to call your doctor.",
    category: "Treatments Explained",
    author: "dr-calvin-tan",
    reviewedBy: "dr-tim-chua",
    publishedAt: "2026-11-09",
    readingMinutes: 4,
    leadAnswer: "After fat freezing, redness, firmness, swelling, tingling and numbness in the treated area are expected and usually ease over hours to a few weeks. Numbness can last longer. A rare delayed effect, paradoxical adipose hyperplasia, makes the area firmer and larger instead, and needs a doctor's assessment.",
    concerns: ["body-slimming"],
    treatments: ["fat-freezing"],
    technology: ["coolsculpting", "cooltech"],
    related: ["after-facial-laser-aftercare"],
    faqs: [
      {
        q: "How long does numbness last after fat freezing?",
        a: "Reduced sensation in the treated area is common and can take some weeks to return to normal. Tell your doctor if it is still there at your review.",
      },
      {
        q: "Is it normal for pain to start a few days after fat freezing?",
        a: "Some people notice a deeper ache or tingling a few days later, and it usually settles on its own. Let the clinic know so your doctor can advise you.",
      },
      {
        q: "Do I need to avoid any food after fat freezing?",
        a: "No. Keep to your usual diet and activity and aim for a stable weight.",
      },
      {
        q: "What is paradoxical adipose hyperplasia?",
        a: "A rare delayed effect in which the treated fat becomes firmer and larger instead of reducing. It does not go away on its own, so see your doctor if you notice it.",
      },
    ],
  },
  {
    // kt110 · 水光针和微针的区别 (中文 lead, docs/18 §6 Q9; autocomplete hl=zh-CN gl=my
    // "水光针和微针" → "水光针和微针的区别", no volume). BM: "skin booster vs
    // microneedling" (autocomplete hl=ms gl=my) plus the dermapen framing from
    // "lebih bagus skin booster atau dermapen"; no measured volume. EN twin:
    // "skin booster vs microneedling".
    // Sources: Rho N-K et al., "Injectable 'Skin Boosters' in Aging Skin
    // Rejuvenation: A Current Overview", Archives of Plastic Surgery 2024;51(6):528
    // (PMID 39544509); "Radiofrequency and Radiofrequency Microneedling in Skin of
    // Color: A Review of Usage, Safety, and Efficacy", Dermatologic Surgery 2023
    // (PMID 36826381). Facts match the signed /treatments/skin-booster and
    // /treatments/microneedling pages (durationDowntime, afterSession, avoidIf).
    // Author Dr Jeremy Low, reviewer Dr Chang Chee Seong, both proposed.
    slug: "skin-booster-vs-microneedling",
    title: "Skin booster vs microneedling: how they differ and which suits your skin",
    seoTitle: "Skin Booster vs Microneedling: How They Differ | Kaiteki",
    description: "Skin booster vs microneedling: one injects a hydrating or regenerative material, the other uses RF energy. How each works, recovery, and who should avoid them.",
    category: "Treatments Explained",
    author: "dr-jeremy-low",
    reviewedBy: "dr-chang-chee-seong",
    publishedAt: "2026-11-09",
    readingMinutes: 5,
    leadAnswer: "A skin booster injects a material, such as hyaluronic acid or polynucleotide, into the skin to support hydration and skin quality. RF microneedling uses fine needles to deliver radiofrequency energy that prompts the skin's own renewal, and is more often considered for scarring, texture and pores. Your concern decides which, if either, suits.",
    concerns: ["acne-scars", "enlarged-pores", "aging"],
    treatments: ["skin-booster", "microneedling"],
    technology: ["profhilo", "rejuran", "juvelook", "potenza", "sylfirm-x"],
    related: ["after-facial-laser-aftercare"],
    faqs: [
      {
        q: "Should I choose a skin booster or microneedling for acne scars?",
        a: "It depends on the scar. Depressed acne scarring is more often a reason to consider RF microneedling, while skin boosters are mainly considered for hydration and skin quality. A doctor assesses the scar type first.",
      },
      {
        q: "Can I have a skin booster and microneedling together?",
        a: "Sometimes both are part of one plan, usually on separate visits, with the order and spacing set by your doctor.",
      },
      {
        q: "Which has more downtime, a skin booster or RF microneedling?",
        a: "Our pages list 1 to 2 days for a skin booster and 2 to 3 days for RF microneedling. It varies with the product, the device settings and your skin.",
      },
      {
        q: "Is dermapen the same as RF microneedling?",
        a: "No. A dermapen is plain microneedling with needles only. RF microneedling also delivers radiofrequency energy through the needles at a set depth.",
      },
    ],
  },
];

/**
 * Page links for legacy posts (docs/15 item 4.3). blog-legacy.ts is generated
 * and moved the posts verbatim with no concern, treatment or technology tags,
 * which left treatment, concern and technology pages with no "Read next" row
 * even where the archive had a post on exactly that subject. Tags are layered
 * on here so a re-run of the migration keeps them. Only metadata changes: the
 * post bodies stay as published. `pnpm check:links` lists the pages that still
 * have no post.
 */
const legacyLinks: Record<string, Pick<Post, "concerns" | "treatments" | "technology">> = {
  "fotona-4d-laser": { treatments: ["fotona-4d"], technology: ["fotona-sp-dynamis"] },
  "fotona-6d-vs-fotona-4d": { treatments: ["fotona-4d"], technology: ["fotona-sp-dynamis"] },
  "face-lifting-treatments": { concerns: ["face-lifting"], treatments: ["fotona-4d", "hifu"] },
  "profhilo-vs-rejuran": { treatments: ["skin-booster"], technology: ["profhilo", "rejuran"] },
  "plinest-vs-rejuran": { treatments: ["skin-booster"], technology: ["plinest", "rejuran"] },
  "juvelook-vs-profhilo": { treatments: ["skin-booster"], technology: ["juvelook", "profhilo"] },
  "rejuran-healer": { technology: ["rejuran"] },
  schwarzy: { concerns: ["body-slimming"], treatments: ["muscle-stimulation"], technology: ["schwarzy"] },
  "alma-hair-removal": { treatments: ["laser-hair-removal"], technology: ["alma"] },
  "diode-laser-hair-removal": { treatments: ["laser-hair-removal"] },
  "laser-hair-removal-vs-ipl-which-is-right-for-you": { treatments: ["laser-hair-removal"] },
  "open-pores-how-to-treat-them": { concerns: ["enlarged-pores"] },
  "tips-to-minimise-enlarged-pores": { concerns: ["enlarged-pores"] },
  "botox-vs-dermal-filler-which-is-right-for-you": {
    concerns: ["fine-lines-wrinkles"],
    treatments: ["botulinum-toxin", "dermal-fillers"],
  },
  "8-facts-about-botox": { concerns: ["fine-lines-wrinkles"], treatments: ["botulinum-toxin"] },
  "birthmark-removal": { concerns: ["birthmark"] },
  "double-eyelid-suture": { treatments: ["double-eyelid"] },
};

export const posts: Post[] = [
  ...authored,
  ...legacyPosts.map((p) => (legacyLinks[p.slug] ? { ...p, ...legacyLinks[p.slug] } : p)),
];

/** Display order everywhere — newest first. */
export function postsNewestFirst(): Post[] {
  return [...posts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function postBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Categories that actually have posts, in the order declared on PostCategory.
 *  Empty archives are never linked — a thin-content and crawl-budget problem. */
const CATEGORY_ORDER: PostCategory[] = [
  "Treatments Explained",
  "Skin Concerns",
  "Device & Injectables",
  "Weight & Wellness",
  "Skincare",
];

export function activeCategories(): PostCategory[] {
  return CATEGORY_ORDER.filter((c) => posts.some((p) => p.category === c));
}

/** URL-safe slug for a category archive, e.g. "Device & Injectables" → "device-injectables". */
export function categorySlug(category: PostCategory): string {
  return category
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function categoryBySlug(slug: string): PostCategory | undefined {
  return CATEGORY_ORDER.find((c) => categorySlug(c) === slug);
}

export function postsInCategory(category: PostCategory): Post[] {
  return postsNewestFirst().filter((p) => p.category === category);
}

/** The post shown large at the top of the hub — the flagged one, else the newest. */
export function featuredPost(): Post {
  return posts.find((p) => p.featured) ?? postsNewestFirst()[0];
}

/** The hub's list under the featured card: every post except that one. */
export function hubPosts(): Post[] {
  const featured = featuredPost();
  return postsNewestFirst().filter((p) => p.slug !== featured.slug);
}

/** Cards per listing page, on the hub and every category archive. A multiple
 *  of 3 and 2 so the last row of a full page is never ragged. */
export const PAGE_SIZE = 12;

export function pageCount(total: number): number {
  return Math.max(1, Math.ceil(total / PAGE_SIZE));
}

/** One page of a listing, 1-based. */
export function pageOf<T>(list: T[], page: number): T[] {
  return list.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
}

/** generateStaticParams for /page/[page] routes: page 1 is the base URL itself
 *  (next.config.ts 301s /page/1 there), so only 2..n are built. */
export function laterPages(total: number): { page: string }[] {
  return Array.from({ length: pageCount(total) - 1 }, (_, i) => ({ page: String(i + 2) }));
}

type PostTag = "concerns" | "treatments" | "technology";

/**
 * The "Read next" row on a treatment, concern or technology page (`docs/15`
 * item 1.3): posts carrying this page's slug in the matching tag array, newest
 * first. `fallback` names tags one hop away and only fills slots the direct
 * match leaves empty — a device page falls back to the treatments it delivers,
 * so Belotero surfaces the lip filler guide tagged to dermal fillers.
 *
 * Unlike `relatedPosts`, this never pads with unrelated newest posts. A guide
 * that has nothing to do with the page is a worse link than none, so no match
 * means no row.
 *
 * The hop runs one way only. Treatment → its devices was tried and put the
 * facial redness guide on laser hair removal, via the M22 it shares.
 */
export function postsFor(
  tag: PostTag,
  slug: string,
  fallback?: { tag: PostTag; slugs: readonly string[] },
  limit = 3,
): Post[] {
  const newest = postsNewestFirst();
  const direct = newest.filter((p) => p[tag]?.includes(slug));
  const hop = fallback
    ? newest.filter(
        (p) => !direct.includes(p) && p[fallback.tag]?.some((s) => fallback.slugs.includes(s)),
      )
    : [];
  return [...direct, ...hop].slice(0, limit);
}

/** Up to `limit` related posts: explicit `related` first, then same-category,
 *  then newest — so a young blog never renders an empty "Keep reading" block. */
export function relatedPosts(post: Post, limit = 3): Post[] {
  const seen = new Set([post.slug]);
  const out: Post[] = [];

  const push = (p: Post | undefined) => {
    if (!p || seen.has(p.slug) || out.length >= limit) return;
    seen.add(p.slug);
    out.push(p);
  };

  post.related?.forEach((s) => push(postBySlug(s)));
  postsInCategory(post.category).forEach(push);
  postsNewestFirst().forEach(push);
  return out;
}
