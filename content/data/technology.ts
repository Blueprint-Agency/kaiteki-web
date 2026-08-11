import type { Technology } from "@/lib/types";

// Device & Injectables catalog (docs/superpowers/specs/2026-07-18…). Each item's
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
      "A 755nm picosecond aesthetic laser used within Pico laser treatment for pigmentation, uneven tone and tattoo ink.",
    sections: [
      {
        heading: "What is PicoSure?",
        body: [
          "PicoSure is a picosecond aesthetic laser made by Cynosure (United States), used at Kaiteki as one of the devices within our Pico laser treatment. Picosecond lasers fire pulses measured in trillionths of a second, which is short enough that the energy acts on pigment largely through a photomechanical shockwave rather than by heating the surrounding skin.",
          "What separates PicoSure from most other picosecond platforms is its primary wavelength. Cynosure describes it as a 755nm picosecond laser (755nm is the alexandrite wavelength), whereas the majority of pico devices are built around a 1064nm/532nm Nd:YAG source. The manufacturer also offers optional 532nm and 1064nm delivery systems for tattoo work. Which wavelength, and whether a pico laser suits you at all, is something a doctor decides after examining your skin at consultation.",
        ],
      },
      {
        heading: "How the 755nm picosecond platform works",
        body: [
          "At 755nm, absorption by melanin is comparatively high relative to longer wavelengths, so the pulse can be aimed at pigment clusters with less energy spilling into surrounding tissue. Cynosure states that the 755nm system is indicated for tattoo and benign pigmented lesion removal, and, with the Platinum Focus™ lens array, for acne scars and wrinkles in skin types I to IV. The optional 532nm delivery is indicated by the manufacturer for tattoo removal in skin types I to III, and the optional 1064nm delivery for tattoo and benign pigmented lesions, including black ink in darker skin types.",
          "Delivery is adjustable rather than one-size-fits-all: Cynosure lists a zoom handpiece covering 2–6mm and fixed handpieces at 5, 6, 8 and 10mm, a flat lens for pigment work, and the focus lens array, which concentrates energy into microscopic points in the epidermis for skin revitalisation passes. A shortened-pulse turbo mode is offered for stubborn tattoo ink. Fluence, spot size and lens are selected by the treating doctor for your skin type and concern; changes develop gradually over a course and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Within Kaiteki's Pico laser treatment, PicoSure is commonly considered for the concerns below. It is not appropriate for everyone, and a consultation determines whether it is suitable for you and whether a different wavelength or device would be a better fit.",
        ],
        list: [
          "Sun spots, freckles and other benign pigmented lesions",
          "Melasma and stubborn dermal pigmentation, as assessed by your doctor",
          "Dermal pigment conditions such as naevus of Ota and Hori's naevus",
          "Unwanted tattoo ink, including darker blue, green and black pigments",
          "Uneven skin tone, enlarged-looking pores and dull texture",
          "Acne scarring and fine lines, using the focus lens array",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Because 755nm is well absorbed by melanin, skin tone matters more with this wavelength than with a 1064nm pico laser. That is precisely why your doctor may recommend PicoSure for one patient and a 1064nm platform such as Fotona PQX for another, and why the manufacturer's own indications are limited by skin type for certain wavelengths. A doctor assesses your Fitzpatrick skin type, pigment pattern and tendency to pigment after inflammation before proposing settings.",
          "A pico laser may not be suitable during pregnancy or breastfeeding, on recently tanned or sunburnt skin, with active skin infection or inflammation in the treatment area, with a history of keloid scarring, or while you are taking medications that increase light sensitivity, oral isotretinoin among them. Please bring your full medical, medication and skincare history to consultation, including any previous laser or peel treatments, so the doctor can advise safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "Your first visit is a doctor consultation and skin assessment rather than a treatment. If PicoSure is appropriate, the doctor may treat a small test area first, particularly for dermal pigment or for tattoo ink of unknown composition. On a treatment day the skin is cleansed, eye shields are fitted, and topical numbing may be applied where the plan calls for it.",
          "The handpiece is then passed over the area in overlapping passes. Most patients describe brief snapping or prickling sensations rather than sustained pain, and pigment lesions may look temporarily darker or greyish immediately afterwards. A facial pigment session is usually a short appointment, often around 20 to 40 minutes including preparation, while tattoo work depends on size. Courses are typically several sessions spaced a few weeks apart to allow the skin to clear treated pigment between visits; your doctor will set the interval for your case.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime is usually short but varies between individuals and with the intensity used. Mild redness, a warm sensation and slight swelling are common for a few hours to a day or two. Where pigment has been targeted directly, small darkened flecks or fine crusting may appear and then flake away over roughly one to two weeks. These should be left alone rather than picked.",
          "Daily broad-spectrum sunscreen and strict sun avoidance are important afterwards, because sun exposure between sessions is one of the main reasons pigment concerns return. Keep skincare gentle and pause actives such as retinoids and acids until your doctor confirms it is fine to resume. You will be given aftercare instructions specific to the area treated.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any medical laser procedure, PicoSure carries risks, and these are explained to you at consultation before anything is booked. Temporary effects can include redness, swelling, pinpoint bruising, crusting, and either darkening (post-inflammatory hyperpigmentation) or lightening of the treated skin, which is a particular consideration for melasma and for deeper skin tones. Blistering and scarring are uncommon. Risk is reduced, though never removed, when the device and settings are appropriately selected and the treatment is performed by a trained doctor.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "What drives session count is the depth and type of pigment, the size of the area, your skin's response between visits and, for tattoos, the ink colours and how many layers were applied. Superficial sun spots generally need fewer visits than dermal pigment or a dense multicolour tattoo, and some pigment conditions such as melasma are managed on an ongoing basis rather than finished in a fixed number of sessions.",
          "Cost follows the same variables: area, session count and whether pico work is combined with other steps in your plan. Pricing is discussed at consultation rather than quoted online, so the figure you are given reflects your actual assessed plan. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "How is PicoSure different from a 1064nm pico laser?",
        a: "PicoSure's main wavelength is 755nm, while most picosecond platforms are built around a 1064nm/532nm Nd:YAG source. The shorter 755nm wavelength is absorbed more strongly by melanin, which is useful for some pigment and tattoo colours but makes skin tone a bigger factor in the settings chosen. Your doctor may recommend one over the other, or a combination across a plan, after assessing your skin at consultation.",
      },
      {
        q: "Is PicoSure safe for Malaysian and other Asian skin tones?",
        a: "Pico lasers are used across a wide range of skin tones, but a 755nm wavelength interacts more with melanin than a 1064nm one, so conservative settings and a test area are often used on deeper skin. Cynosure itself limits some of the device's indications by Fitzpatrick skin type. A doctor assesses your skin type and pigment history at consultation and will tell you honestly if another device suits you better.",
      },
      {
        q: "Does PicoSure hurt, and is numbing cream used?",
        a: "Most people describe brief snapping or hot-pinprick sensations rather than continuous pain, and picosecond pulses are generally reported as more tolerable than older longer-pulse lasers. Topical numbing can be applied for sensitive areas or tattoo work when your doctor considers it appropriate. Comfort varies between individuals, so raise your concerns at consultation and during the session.",
      },
      {
        q: "Will the pigment come back after a course of PicoSure?",
        a: "Some pigment concerns are one-off lesions and others, such as melasma, are chronic conditions that fluctuate with sun exposure, hormones and skincare. That means maintenance sessions and daily sun protection are often part of a realistic plan rather than an optional extra. Your doctor will explain what to expect for your particular pigment pattern at consultation.",
      },
    ],
    reviewedBy: "dr-jade",
    lastReviewed: "2026-07-18",
    seoTitle: "PicoSure 755nm Picosecond Laser Malaysia | Kaiteki",
    seoDescription:
      "PicoSure is a 755nm picosecond laser used at Kaiteki within Pico laser treatment for pigmentation, uneven tone and tattoo ink. Book a free consultation today.",
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
      "A 1064nm/532nm picosecond and Q-switched laser platform, also known as StarWalker PQX, used within Pico laser treatment for pigment and tattoo concerns.",
    sections: [
      {
        heading: "What is Fotona StarWalker PQX?",
        body: [
          "StarWalker® PQX is a picosecond laser platform built by Fotona (Slovenia) and used at Kaiteki as one of the devices within our Pico laser treatment. Fotona describes it as an ultra-performance pico laser: the system generates Q-switched Nd:YAG energy at 1064nm and, via a KTP crystal, at 532nm, and delivers it in pulses short enough that pigment is broken up photoacoustically rather than by sustained heating. The manufacturer describes this as a non-thermal mechanism, which is one reason picosecond platforms are used across a wide range of skin types.",
          "Its buyer-relevant distinction is breadth of pulse control and delivery options rather than a single headline wavelength. Fotona highlights the platform's high pulse energy and peak power together with its ASP (Adaptive Structured Pulse) technology, plus a range of both full-beam and fractional handpieces on an OPTOflex® articulated arm. Whether a picosecond laser is right for your concern, and which device and settings within it, is decided by a doctor after examining your skin at consultation.",
        ],
      },
      {
        heading: "How it works: 1064nm, 532nm and structured pulses",
        body: [
          "The 1064nm Nd:YAG wavelength penetrates more deeply and is absorbed relatively little by melanin in the epidermis, which is why it is the wavelength usually chosen for deeper pigment and for darker skin types. The frequency-doubled 532nm output is more strongly absorbed by superficial pigment and by red-family tattoo inks. Both are delivered as very short pulses, and Fotona's ASP technology governs the structure of each pulse so the doctor can vary how the energy is packaged for the target. Fotona also builds in EFC (Energy Feedback Control), which monitors the energy of each individual pulse against the setting the practitioner selected.",
          "Delivery matters as much as the source. Alongside conventional full-beam handpieces, Fotona offers fractional handpieces for its patented FracTAT® method, in which micro-holes are first created with a fractional handpiece before a full-beam pass; Fotona explains that these micro-holes reduce frosting and act as pressure-relief ducts so gases formed during tattoo clearance can escape. A related two-step protocol, FracRevive®, combines full-spot brushing with fractional stamping for photorejuvenation. Wavelength, handpiece, spot size and energy are all selected by the treating doctor, and changes develop gradually across a course and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Within Kaiteki's Pico laser treatment, StarWalker PQX is commonly considered for the concerns listed below. It is not suitable for everyone, and a consultation establishes whether it is appropriate for you and which wavelength is the sensible starting point.",
        ],
        list: [
          "Sun spots, freckles and other benign pigmented lesions",
          "Dermal pigment concerns such as naevus of Ota and Hori's naevus, as assessed by your doctor",
          "Melasma, managed conservatively as part of a longer-term plan",
          "Black and multicolour tattoo ink, including the fractional FracTAT® approach",
          "Uneven tone, dullness and enlarged-looking pores",
          "Acne scarring and skin texture, using fractional handpieces",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "The 1064nm wavelength's low melanin absorption is the practical reason a doctor may prefer this platform for deeper Fitzpatrick skin types or for pigment that sits deeper in the skin. That does not make it universally safe: settings still have to be matched to your skin, and a test patch is often used first for dermal pigment, melasma or a tattoo whose ink composition is unknown.",
          "A picosecond laser may not be suitable during pregnancy or breastfeeding, on recently tanned or sunburnt skin, over active infection, eczema or open wounds in the area, where you have a history of keloid scarring, or while you are taking photosensitising medication including oral isotretinoin. Please share your full medical, medication and treatment history at consultation, including previous lasers, peels or injectables in the area, so the doctor can advise safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "Every plan starts with a doctor consultation and skin assessment, not a treatment. If StarWalker PQX is appropriate, the doctor decides which wavelength and handpiece to use and may treat a small test area before committing to a full session. On the day, the skin is cleansed, eye protection is fitted, and topical numbing may be used where the doctor considers it appropriate, more often for tattoo work than for a light toning pass.",
          "During the pass you will hear rapid clicking and feel brief snapping or hot-pinprick sensations. Superficial pigment may whiten or grey momentarily, and treated tattoo areas commonly frost. A facial session is usually a short appointment, often in the region of 20 to 40 minutes including preparation, while tattoo sessions scale with size and the number of steps in a FracTAT® protocol. Courses are typically several sessions a few weeks apart so the skin can clear treated pigment in between; tattoo courses are usually spaced further apart. Your doctor sets the interval.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime is generally short but varies with the intensity used and between individuals. Expect the possibility of redness, warmth and mild swelling for a few hours to a couple of days. Where pigment or ink was targeted directly, pinpoint darkening, fine crusting or small scabs can appear and then flake off over roughly one to two weeks; fractional passes may leave a sandpaper-like texture briefly. Let all of it shed naturally.",
          "Daily broad-spectrum sunscreen and genuine sun avoidance between sessions are essential, and gentle cleansing with actives paused until your doctor clears you. Tattoo areas may need a dressing and specific wound-care instructions. Your doctor will give aftercare guidance matched to the area and the protocol used.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any medical laser, StarWalker PQX carries risks, which are explained at consultation before treatment is arranged. Temporary effects can include redness, swelling, pinpoint bleeding or bruising, crusting, and either darkening or lightening of the treated skin; melasma in particular can behave unpredictably and is approached cautiously. Blistering, infection of a crusted area and scarring are uncommon. Risk is reduced, but never eliminated, when the wavelength and settings are appropriately selected and the treatment is performed by a trained doctor.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "Session count is driven by how deep the pigment sits, the size of the area, how your skin clears pigment between visits, and for tattoos the ink colours, density and layering. A small black amateur tattoo behaves very differently from a dense multicolour piece. Fractional protocols add steps to a session, which also affects appointment length.",
          "Cost tracks the same variables, plus whether pico work is combined with other steps in your plan. Pricing is discussed at consultation rather than quoted online, so any figure reflects your assessed plan rather than a generic package. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between Fotona PQX and PicoSure?",
        a: "Both are picosecond lasers, but PQX is a 1064nm/532nm Nd:YAG platform while PicoSure's primary wavelength is 755nm. The 1064nm output is absorbed less by melanin and reaches deeper, which is often why it is chosen for deeper pigment or deeper skin tones, whereas 755nm interacts more strongly with melanin. Your doctor will explain which is better matched to your pigment pattern at consultation.",
      },
      {
        q: "What is FracTAT® and why would my doctor use it for a tattoo?",
        a: "FracTAT® is Fotona's patented two-step method in which a fractional handpiece first creates micro-holes in the skin, followed by a full-beam pass. Fotona describes these micro-holes as pressure-relief ducts that reduce frosting and let gases formed during the process escape. Whether this approach is used on your tattoo depends on the ink, the site and your skin, and is a decision for the treating doctor.",
      },
      {
        q: "Can StarWalker PQX be used on tanned skin?",
        a: "Recent tanning or sunburn is normally a reason to postpone, because pigment in the epidermis changes how the energy is absorbed and raises the risk of unwanted pigment change. Doctors generally ask you to avoid deliberate sun exposure and tanning products for a period before and throughout a course. Tell your doctor at consultation about any recent sun exposure or holidays you have planned.",
      },
      {
        q: "How long should I wait between PQX sessions?",
        a: "Intervals are set by your doctor rather than by a fixed rule, because the skin needs time to clear the pigment fragments broken up in the previous session. Facial pigment courses are commonly spaced a few weeks apart, while tattoo sessions are usually spaced further apart to allow full healing. Your doctor will confirm the schedule that suits your skin and concern.",
      },
    ],
    reviewedBy: "dr-teresa-tan",
    lastReviewed: "2026-07-18",
    seoTitle: "Fotona PQX StarWalker Pico Laser Malaysia | Kaiteki",
    seoDescription:
      "Fotona StarWalker PQX is a 1064nm/532nm picosecond laser used at Kaiteki for pigment and tattoo concerns. Book a free consultation to check your suitability.",
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
      "A dual-wavelength Er:YAG (2940nm) and Nd:YAG (1064nm) laser platform used to deliver Kaiteki's Fotona 4D facial protocol.",
    sections: [
      {
        heading: "What is Fotona SP Dynamis?",
        body: [
          "SP Dynamis is a multi-application aesthetic laser platform from Fotona (Slovenia), and it is the machine behind Kaiteki's Fotona 4D facial treatment. Its defining feature is that it houses two complementary laser sources in one system: an Er:YAG laser at 2940nm and an Nd:YAG laser at 1064nm. Fotona describes the Nd:YAG wavelength as reaching the deepest layers of the skin, and the Er:YAG wavelength as suited to working on the surface. TimeWalker® is Fotona's related dual-wavelength system dedicated to facial aesthetics, and the manufacturer lists both as suitable platforms for the Fotona4D® protocol.",
          "That dual-source design is what makes a multi-step protocol possible at all: a single-wavelength device cannot work intraorally, deep in the dermis and on the skin surface within one appointment. It does not, however, make the treatment right for everyone. Whether Fotona 4D suits your face, your skin and your medical history is assessed by a doctor at an in-person consultation.",
        ],
      },
      {
        heading: "How the dual-wavelength platform enables a 4D protocol",
        body: [
          "Fotona describes Fotona4D® as applying its two wavelengths across four named modes. SmoothLiftin™ uses the Er:YAG laser in SMOOTH® mode from inside the mouth, working on the tissue behind the perioral area; FRAC3® is a non-ablative Nd:YAG mode that Fotona describes as a three-dimensional effect seeking out small age-related irregularities in the tissue; PIANO® is an ultra-long-pulse Nd:YAG bulk-heating mode; and SupErficial™ is a light Er:YAG pass over the skin surface. Fotona documents PIANO® pulse durations of 0.3 to 60 seconds, longer than the thermal relaxation time of the epidermis, which is why it can warm deeper tissue while keeping the surface comfortable. SMOOTH® mode is described as a rapid sequence of low-fluence pulses inside an overall super-long pulse of 200–350 milliseconds, producing gentle coagulative heating without significant ablation of the epidermis.",
          "Underneath all of this sits Fotona's patented VSP (Variable Square Pulse) technology, which the manufacturer states allows pulse durations to be adjusted from 50 microseconds up to 1500 microseconds, plus EFC (Energy Feedback Control), which monitors each individual pulse's energy against the setting chosen. Energy is delivered through named scanners and handpieces: the S-11 Nd:YAG scanner and the L-Runner Pro with MatrixView® temperature sensing, and the T-Runner Er:YAG scanner among them. Which modes are included, in what order and at what settings is decided by the treating doctor; changes develop gradually over weeks and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "As the platform for Kaiteki's Fotona 4D treatment, SP Dynamis is commonly considered for the concerns below. It is not appropriate for everyone, and a consultation determines whether it suits your face and your goals, including whether a different approach would serve you better.",
        ],
        list: [
          "Early skin laxity along the jawline, cheeks and neck",
          "Fine lines and wrinkles, including lines around the mouth",
          "Loss of firmness where you would prefer not to use injectables",
          "Dull or uneven skin surface and texture",
          "Enlarged-looking pores and general tone",
          "Overall facial rejuvenation as part of a maintenance plan",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Fotona notes that the Nd:YAG wavelength's low absorption in melanin allows it to be used across skin types, which is relevant for Malaysian patients, and the Er:YAG surface pass is typically kept light in a 4D protocol. Even so, the treatment is aimed at people with early to moderate laxity rather than significant sagging, where a doctor may tell you a laser is not the right tool, and saying so honestly is part of the consultation.",
          "The protocol may not be suitable during pregnancy or breastfeeding, with active infection, cold sores or inflamed skin in the area, with recent sunburn or tanning, with a history of keloid scarring, or while you are taking photosensitising medication including oral isotretinoin. Because one step is delivered intraorally, your doctor also needs to know about oral or dental conditions, recent dental work and any oral appliances. Please bring your full medical, dental and medication history to consultation.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "The first appointment is a doctor consultation and facial assessment, where the doctor decides which of the modes are appropriate for you and in what sequence. On a treatment day the skin is cleansed and make-up removed, eye protection is fitted, and, because the intraoral step works through the inside of the mouth, you will be positioned and prepared for that part separately.",
          "The steps are then performed in sequence, and most patients describe the sensation as spreading warmth rather than sharp pain, with the intraoral step feeling warm against the inner cheek. A full protocol is generally around 45 to 60 minutes depending on how many modes are included. A course of several sessions spaced a few weeks apart is common, followed by occasional maintenance, but the schedule is individual and your doctor will explain what is realistic for your skin.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime is usually limited, which is much of the appeal of a non-ablative protocol, but it varies between individuals. Flushing, warmth and a mild tight feeling for a few hours to a day are common, and the skin can look slightly pink after the surface pass. Most people return to normal activities the same day.",
          "Keep skincare gentle and well moisturised for a few days, pause retinoids and acids until your doctor says otherwise, and use daily broad-spectrum sunscreen. Avoid heat exposure such as saunas and hot yoga for the period your doctor specifies. You will be given aftercare instructions specific to the steps performed.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any medical laser procedure, treatment on this platform carries risks, and these are explained at consultation before anything is arranged. Temporary effects can include redness, warmth, mild swelling, transient dryness or flaking, and temporary sensitivity of the inner cheek or lips after the intraoral step; cold sores can be reactivated in people prone to them. Burns, blistering, changes in pigmentation and scarring are uncommon. Risk is reduced, though never removed, when settings are appropriately selected and the treatment is performed by a trained doctor.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "Session count depends on how much laxity and surface change you are starting with, your age and skin quality, how your collagen responds and how many of the four modes your plan includes. A two-step protocol is not the same appointment as a full four-step one. Because the effect relies on gradual tissue remodelling, plans are usually built as a short course followed by maintenance rather than a single visit.",
          "Cost follows the number of steps, the number of sessions and whether the protocol is combined with other treatments in your plan. Pricing is discussed at consultation rather than quoted online, so the figure you receive reflects your actual assessment. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why does Fotona 4D need two different lasers?",
        a: "The protocol works at different depths and from two directions, and no single wavelength does all of it. Fotona's Er:YAG laser at 2940nm is strongly absorbed by water and works at the surface and intraorally, while the Nd:YAG laser at 1064nm penetrates deeper to create thermal effects without ablating the skin surface. Which combination of modes applies to you is decided by the treating doctor at consultation.",
      },
      {
        q: "What does the intraoral step of Fotona 4D actually involve?",
        a: "In the step Fotona calls SmoothLiftin™, the Er:YAG laser is applied in SMOOTH® mode from inside the mouth rather than through the outer skin. Fotona describes SMOOTH® mode as a rapid sequence of low-fluence pulses within a much longer pulse, producing gentle coagulative heating rather than ablation. Most people describe it as warm; tell your doctor about any dental work or oral conditions beforehand so suitability can be assessed.",
      },
      {
        q: "How does Fotona 4D compare with HIFU or RF tightening?",
        a: "They are different energy types reaching tissue in different ways: Fotona 4D uses two laser wavelengths including an intraoral step, while HIFU uses focused ultrasound and RF devices use radiofrequency heating. One is not automatically better than the other; the sensible choice depends on your degree of laxity, your skin and what you want to avoid. A doctor will compare the realistic options for your face at consultation.",
      },
      {
        q: "Can I have Fotona 4D if I have deeper skin tone?",
        a: "Fotona states that the Nd:YAG wavelength has low absorption in melanin, which is why it can be used across skin types, and the surface Er:YAG pass in a 4D protocol is typically light. Suitability is still individual and depends on your skin's history of pigment change and current condition. Your doctor assesses this and selects settings accordingly at consultation.",
      },
    ],
    reviewedBy: "dr-chin-wei-horng",
    lastReviewed: "2026-07-18",
    seoTitle: "Fotona SP Dynamis 4D Laser Treatment Malaysia | Kaiteki",
    seoDescription:
      "Fotona SP Dynamis is the Er:YAG and Nd:YAG laser platform behind Kaiteki's Fotona 4D facial protocol. Book a free consultation to check if it suits your skin.",
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
        heading: "How it works: dual wavelengths",
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
    reviewedBy: "dr-yvonne-chuah",
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
      "A 577nm yellow-light laser used for vascular concerns such as facial redness and visible vessels, and for some superficial pigment.",
    sections: [
      {
        heading: "What is Pro Yellow?",
        body: [
          "Pro Yellow is the name commonly used in Malaysian clinics for the QuadroStarPRO YELLOW, a yellow-light laser made by Asclepion Laser Technologies in Jena, Germany. It emits a single wavelength of 577nm, generated by what the manufacturer calls HOPSL technology, and Asclepion positions it for the treatment of superficial vessels and pigmented lesions in dermatology practice. At Kaiteki it is used within our vascular and pigment laser treatment.",
          "Its distinguishing feature is the wavelength itself rather than a long list of modes. Yellow light at 577nm sits close to a peak in oxyhaemoglobin absorption while being absorbed comparatively little by melanin. Asclepion describes it as offering maximum haemoglobin absorption with low melanin absorption for fewer side effects. That combination is the whole argument for choosing yellow over other vascular options. Whether it is the right choice for your redness or vessels is a judgement a doctor makes after examining your skin at consultation.",
        ],
      },
      {
        heading: "How 577nm yellow light works",
        body: [
          "Vascular lasers work by selective photothermolysis: the wavelength is chosen so that the target, in this case haemoglobin inside small vessels, absorbs the light far more strongly than the surrounding tissue does. Because 577nm is well absorbed by haemoglobin and poorly absorbed by melanin, the energy is preferentially taken up by the vessel rather than by pigment in the overlying epidermis. In practice this is why a doctor may favour yellow light in more pigmented skin, where a wavelength with higher melanin absorption carries more risk of unwanted pigment change.",
          "Asclepion lists a standard handpiece spot size of 1.0mm with optional 0.5mm, 1.5mm and 2.8mm optics for precise work on individual vessels, and an optional scanner with integrated skin cooling that covers a 15 x 15mm scan area at a 1mm spot with adjustable scan density of 60 to 100 percent, intended for treating larger areas more quickly and comfortably. The system offers several treatment modes from basic to expert. Spot size, energy and whether the scanner is used are selected by the treating doctor for your skin and vessel type. Changes develop gradually across a course and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Pro Yellow is commonly considered for the concerns below. It is not suitable for everyone, and a consultation determines whether it is appropriate for you or whether another device in the same category is better matched to your skin.",
        ],
        list: [
          "Facial redness and rosacea-type flushing",
          "Telangiectasia and broken capillaries around the nose and cheeks",
          "Small haemangiomas and couperose skin",
          "Lingering post-acne redness and red acne marks",
          "Benign superficial pigmentation such as sun spots",
          "Vascular-toned scars and stretch marks, as assessed by your doctor",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Low melanin absorption is the reason 577nm is often discussed as a reasonable option for Asian and more pigmented skin, but that is a matter of relative risk, not an exemption from assessment. Vessels that are very deep or large may respond differently from fine superficial ones, and your doctor may recommend a different wavelength, a combination approach, or in some cases no laser at all. Test spots are sometimes used before a full treatment.",
          "Treatment may not be suitable during pregnancy or breastfeeding, on recently tanned or sunburnt skin, over active infection or inflamed skin in the area, where you have a history of keloid scarring, or while you are taking photosensitising medication including oral isotretinoin. Rosacea is a chronic condition, so your doctor also needs to know about triggers, current topical or oral treatment and any prior vascular laser work. Please share your full medical and skincare history at consultation.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "Your first visit is a doctor consultation and skin assessment. The doctor examines the pattern and depth of the redness or vessels, discusses what is realistic, and decides whether the fine handpiece, the cooling scanner or a combination is appropriate. Where useful, a small test area may be treated first and reviewed before proceeding.",
          "On a treatment day the skin is cleansed, eye protection is fitted, and the laser is applied either vessel by vessel with the small-spot handpiece or in scanned passes over broader areas of redness. Most patients describe brief hot pinpricks or a snapping sensation; the scanner's integrated skin cooling is intended to make larger-area work more comfortable. Sessions are typically short, often around 15 to 30 minutes for a face depending on the area covered. A course of several sessions spaced a few weeks apart is common, with occasional maintenance for chronic redness, but your doctor will set the plan.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime is usually limited but varies between individuals. Redness, warmth and mild swelling in the treated area for a few hours to a day or two are common, and treated vessels can look temporarily darker, greyish or slightly bruised before settling. Occasionally fine crusting appears over a treated vessel and should be left to flake away on its own.",
          "Daily broad-spectrum sunscreen and sun avoidance are important, as is avoiding heat triggers such as saunas, hot showers, spicy food and alcohol for the period your doctor specifies, particularly if flushing is part of your concern. Keep skincare gentle and pause actives until your doctor confirms it is fine to resume. Aftercare guidance is tailored to your skin and the area treated.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any medical laser procedure, Pro Yellow carries risks, which are explained during consultation before treatment is arranged. Temporary effects can include redness, swelling, bruising, small crusts over treated vessels, and changes in pigmentation of the treated area. Blistering and scarring are uncommon, and vessels can also recur over time because the underlying tendency remains. Risk is reduced, though never removed, when the wavelength and settings are appropriately selected and the treatment is performed by a trained doctor.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "The main drivers of session count are how extensive and how deep the vascular concern is, whether it is a handful of discrete vessels or diffuse background redness, and whether the underlying condition is chronic. Rosacea and persistent flushing are generally managed with a course plus periodic maintenance rather than a fixed endpoint, while a few isolated capillaries may need far fewer visits.",
          "Cost follows the area treated, the number of sessions and whether treatment is combined with other steps in your plan such as topical therapy. Pricing is discussed at consultation rather than quoted online, so any figure reflects your assessed plan. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why is 577nm yellow light used for redness and visible vessels?",
        a: "At 577nm the light is strongly absorbed by haemoglobin in small blood vessels while being absorbed comparatively little by melanin in the surrounding skin, which is what allows the energy to be directed at the vessel rather than the pigment above it. Asclepion describes the wavelength as offering maximum haemoglobin absorption with low melanin absorption. Whether it is the right wavelength for your vessels is assessed by a doctor at consultation.",
      },
      {
        q: "How is Pro Yellow different from IPL for facial redness?",
        a: "IPL emits a broad band of wavelengths filtered towards a range, while Pro Yellow emits a single 577nm wavelength, which allows more selective targeting of individual vessels with small spot sizes down to 0.5mm. That precision suits discrete vessels, whereas broader diffuse redness is sometimes approached differently. Your doctor will explain which tool fits your pattern of redness at consultation.",
      },
      {
        q: "Is Pro Yellow suitable for pigmented Asian skin?",
        a: "The low melanin absorption at 577nm is one reason this wavelength is often discussed for more pigmented skin, since less energy is taken up by the epidermis. This lowers risk relative to some alternatives but does not remove it, and settings still need to be matched to your skin. A doctor assesses your skin type and pigment history before recommending it.",
      },
      {
        q: "Will my facial redness stay away after a course of Pro Yellow?",
        a: "Conditions such as rosacea and a tendency to flush are chronic, so the underlying predisposition remains even when treated vessels have been addressed, and new vessels can appear over time. Many plans therefore include occasional maintenance sessions alongside trigger management and sun protection. Your doctor will set out a realistic expectation for your case at consultation.",
      },
    ],
    reviewedBy: "dr-jamie-gan",
    lastReviewed: "2026-07-18",
    seoTitle: "Pro Yellow 577nm Vascular Laser Treatment Malaysia | Kaiteki",
    seoDescription:
      "Pro Yellow (QuadroStarPRO 577nm) is a yellow-light laser used at Kaiteki for facial redness and visible vessels. Book a free consultation to assess suitability.",
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
      sections: [
        {
          heading: "What is M22 IPL?",
          body: [
            "M22 is a modular aesthetic light platform made by Lumenis, and the M22 IPL module is its intense pulsed light component. The distinction that matters when comparing devices is that IPL is not a laser: a laser emits a single coherent wavelength, while IPL emits a broadband pulse of non-coherent light which the manufacturer describes as spanning roughly 400nm to 1200nm, then filters it down to the band suited to the target. That is why one IPL handpiece can be directed at redness one week and brown pigment the next, whereas a laser is generally bought for a narrower job.",
            "What sets the M22 module apart within the IPL category is how that filtering is handled. Lumenis describes the Universal IPL handpiece as taking nine interchangeable ExpertFilters™ with computer-enabled filter recognition, so the doctor changes the light band in seconds rather than swapping handpieces. At Kaiteki, M22 IPL is used within our vascular and pigment laser treatment and our laser hair removal treatment. Whether IPL suits your concern, or whether a true laser would suit you better, is assessed by a doctor at an in-person consultation.",
          ],
        },
        {
          heading: "How M22 IPL works",
          body: [
            "Each pulse of filtered light is absorbed preferentially by a target in the skin, haemoglobin in a visible vessel, melanin in a sun spot, or pigment in a hair follicle, and converted to heat. Changing the filter shifts which target absorbs most strongly. Lumenis calls the delivery method Optimal Pulse Technology (OPT™), which the manufacturer describes as allowing control of pulse shape and equalising energy distribution across the pulse or sequential sub-pulses, so higher peak power can be delivered in shorter pulses at lower effective fluence.",
            "Comfort is managed at the skin surface: the manufacturer describes three SapphireCool™ lightguides in different sizes providing continuous contact cooling while the pulse is delivered, so the epidermis is cooled as the light passes through it. Because M22 is modular, the same console can carry laser modules such as ResurFX™ for non-ablative fractional resurfacing, so a plan may combine modules where appropriate. Filter choice, pulse settings and energy are selected by the treating doctor for your skin tone and concern, and results develop gradually and vary between individuals.",
          ],
        },
        {
          heading: "What it may help address",
          body: [
            "M22 IPL is commonly considered for the concerns below, usually across a course of sessions rather than a single visit. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
          ],
          list: [
            "Facial redness and flushing, and small visible vessels",
            "Sun spots, freckling and other superficial brown pigmentation",
            "Uneven skin tone and general photoageing on the face, neck, chest and hands",
            "Post-acne redness that lingers after breakouts settle",
            "Unwanted hair on suitable areas, as part of a hair-reduction course",
          ],
        },
        {
          heading: "Suitability & who should avoid it",
          body: [
            "Because IPL is absorbed by melanin, skin tone matters more with broadband light than with some longer-wavelength lasers. IPL is generally aimed at lighter and mid-range skin tones, and at hair that is dark against paler surrounding skin. On deeper skin tones, or where a tan is present, the surrounding skin competes for the light and your doctor may recommend a laser wavelength instead.",
            "M22 IPL may not be suitable during pregnancy, on recently tanned or sunburnt skin, with active infection or inflammation in the area, with a history of light-sensitive conditions, or while taking photosensitising medication such as isotretinoin or certain antibiotics. Please share your full medical, medication and skincare history at consultation, including recent sun exposure and hair-removal methods, so the doctor can advise safely.",
          ],
        },
        {
          heading: "The session at Kaiteki",
          body: [
            "A visit begins with a doctor consultation and skin assessment, and a test area may be considered first. The skin is cleansed, eye protection fitted and cooling gel applied. The doctor then fits the filter suited to your concern and places the cooled lightguide against the skin, working across the area pulse by pulse. Most people describe each pulse as a brief warm snap, eased by the cooled contact tip between pulses.",
            "A facial session is often in the region of 20 to 40 minutes including preparation; larger body areas take longer. IPL is normally planned as a course of several sessions spaced a few weeks apart, with hair-reduction spacing following the growth cycle rather than the calendar. Your doctor will explain the course they consider realistic and review it as your skin responds.",
          ],
        },
        {
          heading: "Downtime & aftercare",
          body: [
            "Downtime is usually limited and most people return to normal activity the same day, though this varies between individuals. Mild redness or a warm, mildly sunburnt feeling for a few hours is common, and treated pigment may look temporarily darker or slightly crusted before flaking away over the following days.",
            "Daily sun protection matters before and after an IPL course, since the light targets pigment and treated skin is more sun-reactive. Gentle cleansing, no scrubbing or active acids for a few days, and avoiding heat such as hot showers, saunas and vigorous exercise immediately afterwards are usually advised. Your doctor will give aftercare instructions specific to your skin.",
          ],
        },
        {
          heading: "Risks & side effects",
          body: [
            "As with any medical procedure, IPL carries risks, which are explained during consultation. Temporary effects can include redness, swelling around treated vessels or follicles, mild crusting of treated pigment, and short-lived changes in pigmentation. Blistering, burns and longer-lasting pigment change are uncommon but possible, and are more likely where the device is used on unsuitable or recently tanned skin. Serious effects are uncommon when the treatment is appropriately selected and performed by a trained doctor.",
          ],
        },
        {
          heading: "Sessions & cost factors",
          body: [
            "Session count and cost depend on the concern, the size and number of areas treated, and how your skin responds between visits. Vascular and pigment concerns are usually planned as a short course with occasional maintenance, while hair reduction needs more sessions because only follicles in the active growth phase respond at any one time. Pricing is discussed at consultation rather than quoted online, so any figure reflects your actual plan. Message us on WhatsApp to arrange a consultation.",
          ],
        },
      ],
      faqs: [
        {
          q: "Is M22 IPL a laser, and does that matter when choosing a treatment?",
          a: "It is not a laser. IPL emits a broad band of light that is then filtered towards a target, while a laser emits one specific wavelength. In practice that makes IPL flexible across redness, pigment and hair with one handpiece, while a laser is often the better choice when a concern needs a single wavelength delivered precisely or at depth. Your doctor will explain which approach suits your concern at consultation.",
        },
        {
          q: "Is M22 IPL safe for darker or tanned Asian skin?",
          a: "Broadband light is absorbed by melanin in the surrounding skin as well as the target, so IPL is generally aimed at lighter and mid-range skin tones and is not recommended on recently tanned skin. For deeper skin tones your doctor may suggest a longer-wavelength laser instead. Suitability is assessed individually by a doctor at an in-person consultation before any course is planned.",
        },
        {
          q: "How does the M22 Universal IPL handpiece differ from a single-filter IPL?",
          a: "Lumenis describes the Universal IPL handpiece as accepting nine interchangeable ExpertFilters™ with automatic filter recognition, so the light band can be changed within a session rather than requiring a separate handpiece for each indication. The manufacturer also describes Optimal Pulse Technology (OPT™) for controlling pulse shape. Whether that flexibility is useful for your plan depends on your concern, which the doctor assesses at consultation.",
        },
        {
          q: "Will M22 IPL stop hair growing back permanently?",
          a: "No light-based treatment should be described as permanent. IPL hair treatment is planned as hair reduction over a course of sessions, because only follicles in the active growth phase respond to any one session, and maintenance sessions are often part of a longer-term plan. Response varies with hair colour, thickness, hormones and skin tone, and your doctor will set out realistic expectations at consultation.",
        },
      ],
      reviewedBy: "dr-jen-meng",
      lastReviewed: "2026-07-18",
      seoTitle: "M22 IPL Photorejuvenation Treatment Malaysia | Kaiteki",
      seoDescription:
        "M22 IPL is a filtered intense pulsed light system used at Kaiteki for redness, pigment and hair-reduction concerns. Book a free consultation today.",
    },
  {
      slug: "fractional-co2",
      name: "Fractional CO2",
      group: "Lasers",
      type: "device",
      treatments: ["resurfacing-laser"],
      image: "/images/technology/fractional-co2.jpg",
      summary:
        "A fractional ablative CO2 resurfacing laser that creates controlled columns of micro-injury, used within resurfacing-laser treatment for texture and scarring.",
      sections: [
        {
          heading: "What is fractional CO2 laser resurfacing?",
          body: [
            "Fractional CO2 is a category of resurfacing laser rather than a single brand. A carbon dioxide laser emits infrared light at 10,600nm, a wavelength strongly absorbed by water in the skin, which makes it ablative: rather than heating tissue through an intact surface, it vaporises a thin amount of tissue where the beam lands. That places it at the more assertive end of the laser spectrum, which is why it is generally considered for textural concerns and scarring rather than surface tone alone.",
            "The word fractional describes how the energy is delivered. Instead of treating the whole surface at once, the beam is split into a grid of very fine columns, commonly called microthermal treatment zones, so each treated column is surrounded by untreated skin. That untreated skin is what separates fractional delivery from the fully ablative resurfacing that preceded it: it shortens recovery considerably, at the cost of treating less surface per pass, which is why a small course is usual. At Kaiteki, fractional CO2 is used within our resurfacing laser treatment. Whether it suits your skin, or whether a gentler non-ablative option would be more appropriate, is assessed by a doctor at an in-person consultation.",
          ],
        },
        {
          heading: "How fractional CO2 works",
          body: [
            "Each ablated column is surrounded by a narrow zone of coagulated tissue, and the intact skin between columns acts as a reservoir for healing. Remodelling depends on the skin's repair response to those columns, so the effect develops over weeks rather than appearing on the treatment table. Three variables determine how a session behaves: how deep the columns go, how densely they are placed, and how much total area is covered. Fewer, shallower columns mean a lighter session and quicker recovery; deeper or denser settings reach more tissue but ask more of your recovery time.",
            "Comfort is managed rather than eliminated. A topical anaesthetic cream is normally applied and given time to work beforehand, and cool air or cooling packs may be used during and after the pass. Because ablative resurfacing removes surface tissue, settings appropriate to your skin tone matter, and Asian skin is generally treated conservatively to reduce the risk of pigment change. All settings are selected by the treating doctor, and results develop gradually and vary between individuals.",
          ],
        },
        {
          heading: "What it may help address",
          body: [
            "Fractional CO2 resurfacing is commonly considered for concerns that involve the texture or structure of the skin rather than its colour alone. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
          ],
          list: [
            "Atrophic acne scarring, including boxcar and rolling scars",
            "Uneven or rough skin texture and enlarged-looking pores",
            "Fine lines, including around the eyes and mouth",
            "Certain surgical or traumatic scars, where assessed as suitable",
            "Sun-related textural change and general photoageing of the skin surface",
          ],
        },
        {
          heading: "Suitability & who should avoid it",
          body: [
            "Fractional CO2 is aimed at people willing to accept a genuine recovery period in exchange for addressing deeper textural concerns, and is often considered after gentler resurfacing options. Skin tone is a real factor: deeper and Asian skin tones carry a higher risk of post-inflammatory hyperpigmentation after ablative resurfacing, so settings are typically conservative, priming skincare may be advised, and more sessions at lower intensity may be preferred over one aggressive session.",
            "It may not be suitable during pregnancy or breastfeeding, with active infection or inflammation in the area including acne or cold sores, with a history of keloid or hypertrophic scarring, with certain autoimmune or connective-tissue conditions, on recently tanned skin, or after recent isotretinoin. Please share your full medical, medication and skincare history at consultation, including any history of scarring or pigmentation problems, so the doctor can advise safely.",
          ],
        },
        {
          heading: "The session at Kaiteki",
          body: [
            "A visit begins with a doctor consultation and skin assessment, and for ablative resurfacing that includes planning your recovery around work or events before anything is booked. On the day the skin is cleansed, topical anaesthetic is applied and left to take effect, and eye protection is fitted. The doctor then passes the handpiece across the area, and individual scars may be treated at different settings from the surrounding skin.",
            "The laser pass itself is often quick, commonly in the region of 15 to 30 minutes for a full face, but the appointment is longer because of numbing and cooling. A small course spaced several weeks to a few months apart is usual, to allow full healing and remodelling between visits, and for scarring it may be combined with other modalities within a plan. Your doctor will explain the course they consider realistic for your skin.",
          ],
        },
        {
          heading: "Downtime & aftercare",
          body: [
            "This is not a lunchtime treatment and it is worth planning for. Expect treated skin to look red, feel hot and tight and be visibly swollen for the first day or two, followed by bronzing, roughness and flaking as the treated columns work their way out. Recovery commonly spans several days to around a week for a lighter session, longer for deeper settings, and varies between individuals.",
            "Aftercare matters as much as the session. Gentle cleansing, a bland emollient or occlusive ointment as directed, no picking or exfoliating, and strict daily sun protection are usually advised, while heat, saunas, swimming, makeup and active skincare are paused for a defined period. Because pigmentation risk is higher on Asian skin, your doctor may advise specific products before and after treatment, and will give instructions specific to your skin.",
          ],
        },
        {
          heading: "Risks & side effects",
          body: [
            "As an ablative procedure, fractional CO2 carries more risk than non-ablative resurfacing, and these risks are explained during consultation. Expected temporary effects include redness, swelling, heat, crusting and peeling, and lingering pinkness that can persist for weeks. Less common effects include post-inflammatory hyperpigmentation, prolonged redness, reactivation of cold sores, infection, and scarring or textural change. Serious effects are uncommon when settings are appropriately selected for your skin tone and the treatment is performed by a trained doctor with proper aftercare.",
          ],
        },
        {
          heading: "Sessions & cost factors",
          body: [
            "The main cost drivers are the size of the area, the depth and density of settings your concern calls for, how many sessions the plan involves, and whether fractional CO2 is combined with other treatments in a scar or resurfacing programme. Established acne scarring generally needs a course rather than one visit, spaced widely enough for healing. Pricing is discussed at consultation rather than quoted online, so any figure reflects your actual plan and the recovery it involves. Message us on WhatsApp to arrange a consultation.",
          ],
        },
      ],
      faqs: [
        {
          q: "What is the difference between fractional and fully ablative CO2 resurfacing?",
          a: "Fully ablative resurfacing treats the entire surface of the skin in a pass, which means an extended and demanding recovery. Fractional delivery splits the beam into microscopic columns and deliberately leaves untreated skin between them, which shortens recovery substantially because healing draws on the surrounding intact skin. The trade-off is that less surface is treated per session, so a course is usually planned. Your doctor will explain which approach is appropriate for your concern at consultation.",
        },
        {
          q: "How much downtime should I plan for after fractional CO2?",
          a: "Realistically, expect redness, swelling and a hot, tight feeling for the first day or two, then several days of bronzing and flaking, with lingering pinkness possible for longer. A lighter session commonly settles within about a week, while deeper settings take longer, and it varies between individuals. Plan the session around your commitments and follow the aftercare your doctor gives you.",
        },
        {
          q: "Is fractional CO2 suitable for Asian skin and acne scarring?",
          a: "It is used on Asian skin, but more conservatively, because deeper skin tones carry a higher risk of post-inflammatory hyperpigmentation after ablative resurfacing. That often means lower-intensity settings across more sessions, priming skincare beforehand and strict sun protection afterwards. Whether your particular scarring is suited to fractional CO2, or better addressed by another modality or a combination, is assessed by a doctor at consultation.",
        },
        {
          q: "How painful is fractional CO2, and what is done about it?",
          a: "Ablative resurfacing is more uncomfortable than non-ablative treatments, typically described as intense heat with a prickling sensation. A topical anaesthetic is normally applied and given time to work beforehand, and cool air or cooling packs are used during and after the pass. Most of the discomfort afterwards is heat and tightness rather than sharp pain, and your doctor will discuss comfort measures with you before the session.",
        },
      ],
      reviewedBy: "dr-chloe-wan",
      lastReviewed: "2026-07-18",
      seoTitle: "Fractional CO2 Laser Resurfacing Malaysia | Kaiteki",
      seoDescription:
        "Fractional CO2 is an ablative resurfacing laser used at Kaiteki for texture, pores and acne scarring. Book a free consultation to check your suitability.",
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
        "A multi-cartridge HIFU platform from Jeisys Medical, used within Kaiteki's HIFU treatment for non-surgical lifting and tightening concerns.",
      sections: [
        {
          heading: "What is Ultracel Q?",
          body: [
            "Ultracel Q is a high-intensity focused ultrasound (HIFU) platform made by Jeisys Medical, a Korean aesthetic device manufacturer. It sits in the non-surgical lifting and tightening category, and at Kaiteki it is one of the devices used within the HIFU treatment. Rather than working on the skin surface, HIFU passes focused ultrasound energy through the surface and concentrates it at a chosen depth below it, so the layer being treated is deeper than the layer the handpiece touches.",
            "What distinguishes the platform for someone comparing HIFU devices is that it is cartridge-based: the doctor swaps cartridges to change the focal depth and the shape of the heat that is delivered, instead of working at one fixed setting. Whether HIFU is appropriate for you at all, and if so, which depths and how many passes, depends on your degree of laxity, tissue thickness and medical history, which a doctor assesses at an in-person consultation.",
          ],
        },
        {
          heading: "How focused ultrasound works on Ultracel Q",
          body: [
            "Each cartridge focuses ultrasound to a small point at a set depth, creating controlled heating there while the skin surface is largely spared. Jeisys supplies cartridges of differing focal depths so that the dermis, the deeper SMAS layer or the fat layer can be targeted according to the plan; the manufacturer also offers a linear cartridge series it calls LinearFirm, which spreads the focus along a line rather than a single dot, giving a longer continuous heat zone in one pulse. Jeisys states that irradiation time drops from roughly 1.5 seconds per pulse with a dot cartridge to about 0.7 seconds with a linear cartridge, and describes the shorter exposure as more comfortable.",
            "Jeisys also describes the platform as operating at a moderated focal temperature (quoted in its clinician material as around 60–65°C, below the range at which collagen is fully broken down) with the intention of prompting collagen renewal through partial thermal denaturation rather than complete destruction. The cartridges have a compact contact tip, which the manufacturer says helps reach awkward contours such as the jawline and under the chin. Depth, energy, cartridge choice and the number of lines delivered are all selected by the treating doctor. Any change develops gradually over weeks and varies between individuals.",
          ],
        },
        {
          heading: "What it may help address",
          body: [
            "Ultracel Q is commonly considered for early to moderate laxity in the lower face and neck, and for definition along the jaw. It is a tightening-type treatment rather than a substitute for surgery, and it is not suitable for everyone.",
          ],
          list: [
            "Mild to moderate sagging along the jawline and lower face",
            "Loss of definition under the chin and in the submental area",
            "Laxity in the cheeks and mid-face",
            "Crepey or loose-feeling skin on the neck",
            "Overall skin firmness as part of a longer-term maintenance plan",
          ],
        },
        {
          heading: "Suitability & who should avoid it",
          body: [
            "Because focused ultrasound is absorbed by tissue rather than by pigment, HIFU is generally used across a wide range of skin tones, including deeper Asian skin, without the pigment-related considerations that apply to some lasers. It tends to be aimed at people with early to moderate laxity who want a non-surgical option; significant, heavy sagging is often better discussed as a surgical question, and your doctor will say so honestly if that is the case.",
            "Ultracel Q may not be suitable during pregnancy or breastfeeding, over active skin infection or inflammation in the treatment area, or where there are implants, metallic devices, cardiac devices or dermal fillers in the intended path. Certain medications, keloid tendency and some medical conditions also need to be considered. Please share your full medical history, medication list and any previous aesthetic treatments at consultation so the doctor can advise safely.",
          ],
        },
        {
          heading: "The session at Kaiteki",
          body: [
            "A visit starts with a doctor consultation, an assessment of where your laxity actually sits, and a discussion of whether HIFU is the right tool for it. If it is appropriate, the skin is cleansed, treatment areas are marked, and ultrasound coupling gel is applied. Topical numbing may be used depending on the area and your comfort. The doctor then delivers the shots line by line with the selected cartridges; most people describe brief warmth, prickling or a deep tapping sensation that comes and goes with each pulse rather than continuous pain.",
            "A full face and neck session commonly takes somewhere in the region of 45 to 90 minutes including preparation, depending on the areas covered. HIFU is often planned as a single session with review some months later, or as a small number of sessions spaced out over time, with occasional maintenance afterwards. Your doctor will set out what is realistic for your face at consultation.",
          ],
        },
        {
          heading: "Downtime & aftercare",
          body: [
            "Downtime is usually minimal, and most people return to normal activities the same day. Mild redness, slight swelling, tenderness to touch or a temporary feeling of firmness in the treated area can occur and generally settle over a few days.",
            "Gentle skincare and daily sun protection are advised afterwards. Your doctor may ask you to avoid vigorous heat exposure such as saunas for a short period, and will give aftercare guidance specific to your treatment plan.",
          ],
        },
        {
          heading: "Risks & side effects",
          body: [
            "As with any medical procedure, HIFU with Ultracel Q carries risks, which are explained during consultation. Temporary effects can include redness, swelling, tenderness, small areas of bruising, or transient numbness or tingling in the treated area; less commonly, welts or temporary nerve-related effects such as localised muscle weakness have been reported with focused-ultrasound treatments. Serious effects are uncommon when the treatment is appropriately selected, correctly mapped and performed by a trained doctor.",
          ],
        },
        {
          heading: "Sessions & cost factors",
          body: [
            "What drives the cost of a HIFU session is the area treated, the number of shots or lines delivered, and which cartridges are needed for your plan. A jawline-and-neck plan is a different amount of work from a full face and neck. How your tissue responds also affects whether a review or maintenance session is worth considering later.",
            "Pricing is discussed at consultation rather than quoted online, so that any figure reflects the plan actually recommended for you rather than a generic package. Message us on WhatsApp to arrange a consultation.",
          ],
        },
      ],
      faqs: [
        {
          q: "How does Ultracel Q differ from other HIFU devices?",
          a: "The main practical difference is its cartridge system: the doctor changes cartridges to alter the focal depth and whether energy is focused as a dot or along a line, so the same platform can be aimed at the dermis, the SMAS layer or the fat layer. Jeisys also describes a shorter pulse exposure and a moderated focal temperature compared with earlier HIFU designs. Which of these settings suits your face is decided by your doctor at consultation.",
        },
        {
          q: "Is Ultracel Q HIFU safe for deeper or Asian skin tones?",
          a: "Focused ultrasound is absorbed by tissue rather than by melanin, so HIFU is generally used across a broad range of skin tones without the pigment considerations that apply to some light-based treatments. That does not make it right for everyone, since laxity, tissue thickness and medical history all matter. A doctor assesses your suitability in person before recommending it.",
        },
        {
          q: "How painful is a HIFU session?",
          a: "Most people describe brief warmth, prickling or a deep tapping with each pulse rather than sustained pain, and it is usually felt more over bony areas such as the jaw and forehead. Topical numbing and adjusted settings can be used to keep it tolerable. Tell your doctor how you are finding it during the session so the settings can be adapted.",
        },
        {
          q: "Are HIFU results permanent?",
          a: "No. Skin continues to age after any tightening treatment, so any change is not permanent and varies between individuals. Many plans include a review some months later and occasional maintenance rather than a single one-off treatment. Your doctor will explain a realistic timeline for your skin at consultation.",
        },
      ],
      reviewedBy: "dr-say-wei-xian",
      lastReviewed: "2026-07-18",
      seoTitle: "Ultracel Q HIFU Skin-Lifting Treatment Malaysia | Kaiteki",
      seoDescription:
        "Ultracel Q is a multi-cartridge HIFU device used at Kaiteki for non-surgical lifting and tightening concerns. Book a free consultation to check your suitability.",
    },
  {
      slug: "lifthera",
      name: "Lifthera",
      group: "Lifting & Tightening",
      type: "device",
      treatments: ["hifu"],
      image: "/images/technology/lifthera.jpg",
      summary:
        "A line-focused ultrasound lifting device from Korean manufacturer Asterasys, used within Kaiteki's HIFU treatment for lifting and tightening concerns.",
      sections: [
        {
          heading: "What is Lifthera?",
          body: [
            "Lifthera (also written Liftera) is a focused-ultrasound lifting device from Asterasys, a Korean medical aesthetic device manufacturer. It belongs to the same broad category as other HIFU devices: ultrasound energy is focused to a point beneath the skin surface so that heating happens in a chosen deeper layer while the surface is largely spared. At Kaiteki it is one of the devices used within the HIFU treatment, and it is often chosen for facial contour work rather than as a whole-face blanket treatment.",
            "Where it sits in the category is worth understanding if you are comparing quotes. It is a line-focused HIFU platform, not an imaging-guided system, and it is generally positioned as a comfort-oriented, contour-focused option rather than a deep single-session lift. Whether it is the right device for your particular pattern of laxity is a clinical judgement your doctor makes at an in-person consultation.",
          ],
        },
        {
          heading: "How line-focused ultrasound works",
          body: [
            "Asterasys describes the platform as using what it calls Thermal Diffusion Treatment (TDT™) technology delivered through line-type cartridges. Instead of depositing energy as a series of separate dots, the focus is drawn along a line, and the manufacturer states that this produces larger, more continuous zones of thermal coagulation in the target tissue than dot-based delivery at the same depth. Asterasys also describes irradiation at a faster 10 Hz rate, with the intention of depositing energy at the chosen depth without damaging the epidermis.",
            "Practically, that continuous-line approach is what the manufacturer links to reduced discomfort: the exposure at any one point is brief, and the heat is spread rather than concentrated in single hot spots. Asterasys supplies a pen-type applicator alongside the standard cartridges for smaller and more curved areas such as around the eyes, the nasolabial region and along the jaw. Cartridge choice, depth, energy level and the number of lines are all set by the treating doctor for your anatomy. Any change develops gradually over the following weeks and varies between individuals.",
          ],
        },
        {
          heading: "What it may help address",
          body: [
            "Lifthera is commonly considered where the concern is contour and firmness rather than surface texture or pigment. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
          ],
          list: [
            "Softening definition along the jawline and jowl area",
            "Mild to moderate laxity in the cheeks and mid-face",
            "Loose-feeling skin under the chin",
            "Laxity in smaller, curved areas such as around the eyes and nasolabial region",
            "Overall skin firmness as part of a maintenance plan",
          ],
        },
        {
          heading: "Suitability & who should avoid it",
          body: [
            "Focused ultrasound is absorbed by tissue rather than by melanin, so it is generally used across a wide range of skin tones, including deeper Asian skin, without the pigment considerations that apply to some light-based treatments. It is usually aimed at people with early to moderate laxity. If your laxity is advanced, your doctor may tell you plainly that a non-surgical tightening device is unlikely to be the right answer.",
            "It may not be suitable during pregnancy or breastfeeding, over active infection, inflamed acne or open wounds in the treatment area, or where implants, metallic or cardiac devices, or recently placed dermal fillers lie in the intended path. Keloid tendency, certain medications and some medical conditions also need to be considered. Please bring your full medical history and a list of previous aesthetic treatments to consultation.",
          ],
        },
        {
          heading: "The session at Kaiteki",
          body: [
            "A visit begins with a doctor consultation and an assessment of where your laxity actually sits, so that the treatment is mapped rather than applied uniformly. If Lifthera is appropriate, the skin is cleansed, the areas are marked and ultrasound coupling gel is applied. Topical numbing may be offered depending on the area. The doctor then delivers passes with the selected cartridges, using the pen-type applicator for smaller or curved regions where a large cartridge does not sit well.",
            "A face and neck session commonly takes in the region of 45 to 75 minutes including preparation, depending on the areas covered. Plans vary: some are structured as a single session with a review a few months later, others as a small number of sessions spaced weeks apart, sometimes combined with other devices. Your doctor will set out what is realistic for you.",
          ],
        },
        {
          heading: "Downtime & aftercare",
          body: [
            "Downtime is usually minimal and most people carry on with their day afterwards. Mild redness, slight swelling or tenderness in the treated area can occur and generally settles within a few days, though this varies between individuals.",
            "Gentle skincare and daily sun protection are advised afterwards, and your doctor may ask you to avoid intense heat such as saunas or hot yoga for a short period. Specific aftercare guidance is given for your plan.",
          ],
        },
        {
          heading: "Risks & side effects",
          body: [
            "As with any medical procedure, focused-ultrasound treatment with Lifthera carries risks, which are explained during consultation. Temporary effects can include redness, swelling, tenderness, small bruises, or transient numbness or tingling; less commonly, welts or temporary nerve-related effects such as localised muscle weakness have been reported with focused-ultrasound treatments generally. Serious effects are uncommon when the treatment is appropriately selected, carefully mapped and performed by a trained doctor.",
          ],
        },
        {
          heading: "Sessions & cost factors",
          body: [
            "Cost is driven by the areas treated and the number of lines or passes delivered rather than by time in the chair, so a targeted jawline plan and a full face-and-neck plan are priced differently. Whether your plan is a single session with review or a short course also affects the total, as does any decision to combine it with another device.",
            "Pricing is discussed at consultation rather than quoted online, so any figure reflects the plan actually recommended for you. Message us on WhatsApp to arrange a consultation.",
          ],
        },
      ],
      faqs: [
        {
          q: "What is Lifthera and who makes it?",
          a: "Lifthera, also written Liftera, is a focused-ultrasound lifting device made by Asterasys, a Korean aesthetic device manufacturer. It delivers ultrasound energy focused along a line at a set depth beneath the skin, using what the manufacturer calls Thermal Diffusion Treatment technology. Your doctor can explain at consultation why this device might be chosen for your face rather than another in the same category.",
        },
        {
          q: "How does Lifthera differ from dot-based HIFU devices?",
          a: "Conventional HIFU deposits energy as a row of separate focal dots, whereas Asterasys describes Lifthera as drawing the focus along a continuous line, which it says creates larger and more continuous heated zones at the same depth and is more comfortable. Neither approach is automatically better for every face. They suit different patterns of laxity and different areas. Your doctor selects the device and settings after assessing your skin.",
        },
        {
          q: "Can Lifthera be used around the eyes and other small areas?",
          a: "Asterasys supplies a pen-type applicator intended for curved and delicate regions such as the periorbital area, the nasolabial folds and along the jaw, where a full-size cartridge does not make good contact. Whether these areas are treated in your case depends on your anatomy and what you are trying to address. Your doctor decides which areas are appropriate at consultation.",
        },
        {
          q: "How soon would I notice anything after a session?",
          a: "Focused-ultrasound treatments work by prompting a gradual tissue response, so any change tends to develop over weeks to a few months rather than immediately, and it varies considerably between individuals. Some people notice a mild firmness early on that is not the final picture. Your doctor will explain a realistic timeline and when a review makes sense.",
        },
      ],
      reviewedBy: "dr-jessie-lim",
      lastReviewed: "2026-07-18",
      seoTitle: "Lifthera HIFU Lifting & Tightening Malaysia | Kaiteki",
      seoDescription:
        "Lifthera is a line-focused ultrasound device from Asterasys, used within Kaiteki's HIFU treatment for lifting and firmness concerns. Book a free consultation.",
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
        "A micro-focused ultrasound platform from Merz Aesthetics with built-in DeepSEE ultrasound imaging, used for non-surgical lifting of the face and neck.",
      sections: [
        {
          heading: "What is the Ultherapy System?",
          body: [
            "The Ultherapy System is a micro-focused ultrasound platform developed by Ulthera and now part of Merz Aesthetics. It is used within Kaiteki's Ultherapy treatment for non-surgical lifting of the brow, lower face and neck, and for lines on the décolletage. Like other focused-ultrasound devices, it passes energy through the skin surface and concentrates it at a chosen depth beneath, so the layer being heated is deeper than the layer the transducer touches.",
            "The feature that separates it from the rest of the category is imaging. Merz refers to the technology as micro-focused ultrasound with visualisation (MFU-V), because the same transducer that delivers energy also produces a live ultrasound image of the tissue beneath it, through what the manufacturer calls DeepSEE® imaging. That means the doctor can see the tissue planes on screen before energy is delivered rather than working from external landmarks alone. Whether it is appropriate for your face, and where the energy should go, is determined by a doctor at an in-person consultation.",
          ],
        },
        {
          heading: "How micro-focused ultrasound with visualisation works",
          body: [
            "Energy is focused to very small points at set depths, producing discrete zones of controlled heating that prompt a tissue-repair and collagen-remodelling response over the following months. Merz describes DeepSEE transducers that treat at three depths (approximately 1.5 mm in the superficial dermis, 3.0 mm in the deeper dermis and 4.5 mm at the level of the SMAS fascia), so the doctor can choose the layer rather than treating one fixed plane. The intervening tissue and the skin surface are not the target, which is why there is no wound to heal afterwards.",
            "The imaging is the practical difference during the session. The manufacturer states that the system visualises tissue to a depth of around 8 mm; the current Ultherapy PRIME generation adds a larger screen and a faster image refresh, and Merz lists the face, neck, décolletage, abdomen and arms among the areas it is indicated for. This does not make imaging-free HIFU devices unsuitable (they are well established and are chosen for good reasons), but visualisation does let the doctor confirm depth and avoid structures such as bone and dense fascia before each line. Transducer choice, depth and line count are decided by the treating doctor, and any change develops gradually and varies between individuals.",
          ],
        },
        {
          heading: "What it may help address",
          body: [
            "Ultherapy is commonly considered where the concern is laxity and loss of definition rather than surface texture or pigment. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
          ],
          list: [
            "Sagging along the jawline, jowls and lower face",
            "Loose or crepey skin on the neck and under the chin",
            "A heavy or descending brow line",
            "Lines and laxity on the chest and décolletage",
            "Laxity on the abdomen or upper arms, where clinically appropriate",
          ],
        },
        {
          heading: "Suitability & who should avoid it",
          body: [
            "Micro-focused ultrasound is absorbed by tissue rather than by melanin, so it is generally used across the full range of skin tones, including deeper Asian skin, without the pigment-related risk profile of some lasers. It tends to suit people with mild to moderate laxity who still have reasonable skin quality. If your laxity is advanced or there is significant excess skin, your doctor may say honestly that a non-surgical option is unlikely to achieve what you have in mind.",
            "It may not be suitable during pregnancy or breastfeeding, over active infection, open wounds or significant inflammatory acne in the treatment area, or where implants, metallic or electronic devices such as pacemakers, or recently placed fillers or threads lie in the intended path. Keloid tendency, bleeding disorders, certain medications and some autoimmune conditions also need to be weighed. Please share your full medical history and previous aesthetic treatments at consultation.",
          ],
        },
        {
          heading: "The session at Kaiteki",
          body: [
            "A visit begins with a doctor consultation and an assessment of how your laxity is distributed, since this treatment is planned area by area rather than applied uniformly. If Ultherapy is appropriate, the skin is cleansed, treatment zones are marked on a grid, and coupling gel is applied. The doctor then places the transducer, checks the tissue image on screen to confirm the plane, and delivers a line of micro-focused pulses; this is repeated line by line across the mapped area.",
            "Most people describe brief deep prickling, heat or tingling with each line, felt more strongly over bony areas, with the sensation ending as soon as the pulse does. Comfort measures can be discussed beforehand. A face and neck session commonly takes in the region of 60 to 90 minutes. It is often planned as a single session with a review a few months later once the tissue response has had time to develop, with maintenance considered periodically rather than on a fixed schedule.",
          ],
        },
        {
          heading: "Downtime & aftercare",
          body: [
            "There is usually no wound and no dressing, and most people return to normal activities the same day. Mild redness, slight swelling, tenderness to touch, or a temporary firm or lumpy feeling under the skin can occur and generally settle over days to a few weeks, though this varies between individuals.",
            "Gentle skincare and daily sun protection are advised, and your doctor may ask you to avoid strenuous heat exposure for a short period. Aftercare guidance is given specific to the areas treated.",
          ],
        },
        {
          heading: "Risks & side effects",
          body: [
            "As with any medical procedure, Ultherapy carries risks, which are explained during consultation. Temporary effects can include redness, swelling, tenderness, bruising, welts, or transient numbness or tingling in the treated area; less commonly, temporary nerve-related effects such as localised muscle weakness or altered sensation have been reported with focused-ultrasound treatments. Serious effects are uncommon when the treatment is appropriately selected, carefully mapped and performed by a trained doctor.",
          ],
        },
        {
          heading: "Sessions & cost factors",
          body: [
            "Cost in this category is driven by the number of ultrasound lines delivered and the areas covered, not by how long you are in the room. A brow-and-jawline plan, a full face and neck, and a décolletage or body area each represent a different amount of energy delivered. Whether a review or a later maintenance session is worthwhile depends on how your tissue responds.",
            "Pricing is discussed at consultation rather than quoted online, so that any figure reflects the plan actually recommended for you. Message us on WhatsApp to arrange a consultation.",
          ],
        },
      ],
      faqs: [
        {
          q: "What is the difference between Ultherapy and HIFU?",
          a: "Both focus ultrasound energy at a depth beneath the skin, so mechanically they belong to the same family. The distinction is that the Ultherapy System includes built-in real-time ultrasound imaging, so the doctor can see the tissue plane on screen before delivering energy, whereas most HIFU platforms treat at a preset depth without visualisation. Imaging-free HIFU devices remain widely and appropriately used; which is better for you depends on your anatomy and goals, and your doctor will explain the reasoning at consultation.",
        },
        {
          q: "Why does the built-in imaging matter for me as a patient?",
          a: "Visualisation lets the doctor confirm that the focal point is landing in the intended layer for your particular tissue thickness, and to see structures such as bone or dense fascia before each line is delivered. It supports precision in planning rather than guaranteeing any specific outcome. Your doctor can show you what the imaging is being used for during your session.",
        },
        {
          q: "Is Ultherapy suitable for Asian skin tones?",
          a: "Micro-focused ultrasound is absorbed by tissue rather than by melanin, so it is generally used across all skin tones, including deeper Asian skin, without the pigmentary considerations that apply to some light-based devices. Suitability still depends on your degree of laxity, tissue thickness and medical history. A doctor assesses this in person before recommending treatment.",
        },
        {
          q: "How long before I see anything, and how long does it last?",
          a: "The tissue response is gradual, so any change typically develops over roughly two to six months rather than immediately, and it varies considerably between individuals. It is not permanent (skin continues to age), so plans often include a review and periodic maintenance. Your doctor will give you a realistic timeline for your own skin at consultation.",
        },
      ],
      reviewedBy: "dr-chew-yuhhui",
      lastReviewed: "2026-07-18",
      seoTitle: "Ultherapy System Non-Surgical Lifting Malaysia | Kaiteki",
      seoDescription:
        "The Ultherapy System uses micro-focused ultrasound with built-in DeepSEE imaging for non-surgical face and neck lifting. Book a free consultation at Kaiteki.",
    },
  {
      slug: "xerf",
      name: "XERF",
      group: "Lifting & Tightening",
      type: "device",
      treatments: ["radiofrequency"],
      image: "/images/technology/xerf.png",
      summary:
        "A multifrequency monopolar radiofrequency platform with integrated cryogen cooling, used within RF treatment for skin-firmness and laxity concerns.",
      sections: [
        {
          heading: "What is XERF?",
          body: [
            "XERF is a monopolar radiofrequency (RF) platform from Cynosure Lutronic, used at Kaiteki within our radiofrequency treatment for skin-firmness and laxity concerns. The manufacturer markets it under the term Structural Skin Tightening. What sets it apart in the RF category is that it is multifrequency: rather than running at a single fixed frequency, it combines 6.78 MHz and 2 MHz simultaneously, so energy can be biased towards shallower or deeper tissue depending on what the doctor is treating.",
            "If you are comparing options, the practical distinction is that XERF is a bulk-heating, non-needling device. It works entirely from the skin surface with no needles, no incisions and no topical anaesthetic, different from RF microneedling platforms such as Sylfirm X or Morpheus8, which create fractional channels in the skin and are covered on their own pages. Whether XERF, a needling device, or something else fits your concern is decided by a doctor at an in-person consultation.",
          ],
        },
        {
          heading: "How multifrequency monopolar RF works",
          body: [
            "Monopolar RF sends current from a single treatment electrode through the tissue towards a return path, which is what allows it to reach deeper than bipolar or multipolar RF, where the current simply arcs between two or more closely spaced electrodes and stays comparatively superficial. Depth is also a function of frequency: higher frequencies deposit energy more superficially, lower frequencies travel further. By combining 6.78 MHz and 2 MHz, XERF is intended to deposit energy across the shallow, middle and deeper layers within one pass rather than forcing a single-depth compromise. Controlled heating in the dermis is what RF uses to prompt collagen remodelling over time.",
            "Comfort is handled by two manufacturer technologies: the pulse-shaping the manufacturer calls Wave Fit™, and an Advanced Integrated Cryogen Delivery cooling system that keeps the skin surface cool while heat builds underneath. Surface cooling matters more than it sounds: it is what lets a device heat the dermis to a useful temperature without the epidermis becoming the limiting factor, and it is the reason the manufacturer describes XERF as a Never-Numb™ treatment that does not require numbing cream beforehand. Frequency balance, energy level and number of passes are all selected by the treating doctor for your skin. Any change develops gradually and varies between individuals.",
          ],
        },
        {
          heading: "What it may help address",
          body: [
            "XERF is commonly considered for concerns related to skin laxity and firmness, on the face and on selected body areas. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
          ],
          list: [
            "Mild to moderate skin laxity along the jawline and lower face",
            "Loose or crepey skin on the neck and under the chin",
            "Softening facial contour and a less defined jaw outline",
            "Fine lines and general loss of skin firmness",
            "Laxity on body areas such as the abdomen, arms or inner thighs",
            "Overall skin quality and texture as part of a broader plan",
          ],
        },
        {
          heading: "Suitability & who should avoid it",
          body: [
            "XERF is generally aimed at people with early to moderate laxity who want a non-needling, no-downtime option and are not looking for surgery. Because RF heats tissue rather than targeting pigment, it does not rely on colour contrast in the skin, which is why RF platforms are used across a wide range of skin tones including Asian skin. That is a genuine advantage over some light-based devices, but it does not make XERF appropriate for everyone, and marked sagging may be better served by other approaches your doctor can discuss.",
            "RF is generally avoided during pregnancy, over active skin infections or inflamed areas, and near metal implants or electronic implanted devices such as pacemakers. Recent injectables, certain medications, thyroid conditions in the neck area and a history of keloid scarring are also relevant. Please share your full medical history, current medications and any implanted devices at consultation so the doctor can advise safely.",
          ],
        },
        {
          heading: "The session at Kaiteki",
          body: [
            "A visit begins with a doctor consultation and skin assessment to confirm that RF is the right category for your concern and to map the areas to be treated. If XERF is appropriate, the skin is cleansed and a coupling gel applied. The handpiece is then moved over the treatment area in passes while the integrated cooling holds the surface temperature down; most people describe RF as a warm, deep massage-like sensation that builds and eases as the handpiece moves. No numbing cream is needed.",
            "Session length depends on how many areas are being treated: a single facial area is typically shorter than a full face and neck, and body areas take longer again. A course of several sessions spaced a few weeks apart is common for RF, with occasional maintenance afterwards, but the plan is individual and your doctor will explain what to expect for your skin.",
          ],
        },
        {
          heading: "Downtime & aftercare",
          body: [
            "Downtime is usually minimal, which is much of the appeal of non-needling RF: most people return to normal activities and can wear makeup the same day. Mild warmth or pinkness in the treated area can occur and typically settles within a few hours, though this varies between individuals.",
            "Gentle skincare, good hydration and daily sun protection are advised afterwards. Avoid very hot showers, saunas and vigorous heat exposure for the rest of the day. Your doctor will give aftercare guidance specific to your skin and the areas treated.",
          ],
        },
        {
          heading: "Risks & side effects",
          body: [
            "As with any medical procedure, XERF carries risks, which are explained during consultation. Temporary effects can include redness, warmth, mild swelling or short-lived tenderness in the treated area. Uncommon effects include blistering, burns or changes in pigmentation, and are less likely when the device is appropriately selected, cooling is used correctly and treatment is performed by a trained doctor.",
          ],
        },
        {
          heading: "Sessions & cost factors",
          body: [
            "Session count and overall cost depend on how many areas you are treating, the size of those areas, the degree of laxity and how your skin responds. Face-only plans differ from face-and-neck or body plans, and some people include occasional maintenance sessions over time. Pricing is discussed at consultation rather than quoted online, so any figure you are given reflects your actual plan rather than a generic package. Message us on WhatsApp to arrange a consultation.",
          ],
        },
      ],
      faqs: [
        {
          q: "How is XERF different from RF microneedling like Sylfirm X or Morpheus8?",
          a: "XERF is a surface-applied bulk-heating device: the handpiece glides over intact skin and no needles are involved, so there are no pinpoint marks and essentially no downtime. RF microneedling instead delivers energy through fine needles into the skin, which suits some texture and scarring concerns but involves recovery time. They are different tools rather than better and worse ones, and your doctor will advise at consultation which category fits your concern.",
        },
        {
          q: "Why does XERF use two frequencies instead of one?",
          a: "Higher RF frequencies deposit energy more superficially and lower frequencies reach further into tissue, so a single-frequency device has to compromise on depth. XERF combines 6.78 MHz and 2 MHz so energy can be directed across shallow, middle and deeper layers. The frequency balance used on you is chosen by the treating doctor based on your skin and the area being treated.",
        },
        {
          q: "Does XERF need numbing cream, and how does it feel?",
          a: "The manufacturer describes XERF as a Never-Numb™ treatment because its integrated cryogen cooling keeps the skin surface cool while heat builds beneath, so topical anaesthetic is generally not required. Most people describe the sensation as deep warmth moving across the skin. Comfort still varies between individuals, and you should tell your doctor during the session if anything feels too warm.",
        },
        {
          q: "Is XERF safe for Asian or darker skin tones?",
          a: "Radiofrequency heats tissue rather than targeting pigment, so unlike some light-based devices it does not depend on contrast between skin and target colour, which is why RF is used across a wide range of skin tones. Suitability is still assessed individually, taking into account your skin history, medications and any implanted devices. A doctor confirms this at an in-person consultation before treatment.",
        },
      ],
      reviewedBy: "dr-chloe-wan",
      lastReviewed: "2026-07-26",
      seoTitle: "XERF RF Skin Tightening Treatment Malaysia | Kaiteki",
      seoDescription:
        "XERF is a multifrequency monopolar RF platform used at Kaiteki for skin firmness and laxity, with no needles or numbing cream. Book a free consultation.",
    },
  {
    slug: "sylfirm-x",
    name: "Sylfirm X",
    group: "Lifting & Tightening",
    type: "device",
    treatments: ["microneedling"],
    image: "/images/technology/sylfirm-x.jpg",
    summary:
      "A dual-mode (pulsed and continuous wave) radiofrequency microneedling device used for pigment, vascular and texture concerns.",
    sections: [
      {
        heading: "What is Sylfirm X?",
        body: [
          "Sylfirm X is a radiofrequency (RF) microneedling device made by Viol, a South Korean medical-aesthetic device manufacturer. Like other RF microneedling systems, it passes very fine needles through the skin surface and delivers radiofrequency energy from the needle tips, so the energy is placed at a chosen depth rather than heating the skin from the outside in. At Kaiteki it is used within our microneedling treatment.",
          "What distinguishes it within the RF microneedling category is that it offers two energy delivery modes rather than one. Alongside a continuous wave (CW) mode, which is the more familiar heating mode used for firmness and texture work, it has a pulsed wave (PW) mode that the manufacturer developed with pigment and vascular concerns in mind, which is often why a doctor reaches for this device rather than a purely tightening-focused one. Whether Sylfirm X suits your skin depends on your concern, skin type, medical history and what you want to address, and that is assessed by a doctor at an in-person consultation.",
        ],
      },
      {
        heading: "How pulsed and continuous wave modes work",
        body: [
          "Sylfirm X uses non-insulated gold microneedles that the manufacturer describes as 300 microns in diameter, delivering bipolar radiofrequency at 2MHz. Because the needles are non-insulated, energy is released along the needle rather than only at the tip. In pulsed wave mode, the manufacturer describes the energy as producing selective coagulation around the basement membrane and small vessels near the epidermal-dermal junction and upper dermis, with the intention of limiting effect on surrounding tissue, the mechanism the manufacturer markets as Selective Regional Regeneration. Continuous wave mode delivers a steadier heating pattern used for deeper collagen-focused work.",
          "The two waveforms are subdivided into several preset modes, and needle depth is adjustable so the doctor can work shallow for surface pigment and texture or deeper for dermal remodelling. Topical numbing cream is normally applied beforehand, and the treated area is cooled and soothed afterwards. The mode, depth, energy and number of passes are all selected by the treating doctor for your skin. Results develop gradually over weeks and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Sylfirm X is commonly considered for the concerns below. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
        ],
        list: [
          "Melasma and stubborn patchy pigmentation",
          "Post-inflammatory hyperpigmentation (PIH)",
          "Facial redness and small visible vessels",
          "Enlarged pores and uneven skin texture",
          "Acne scarring and rolling scars",
          "Mild skin laxity and loss of firmness",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Because radiofrequency energy is not absorbed by melanin the way laser light is, RF microneedling is used across a broad range of skin tones, including the deeper Asian skin tones common in Malaysia. That does not make it appropriate for everyone. Pigment concerns such as melasma are chronic and relapsing, so any plan involving Sylfirm X is usually combined with topical care and strict sun protection rather than treated as a one-off procedure.",
          "Sylfirm X may not be suitable during pregnancy or breastfeeding, with active skin infection, inflamed acne or eczema in the treatment area, a history of keloid scarring, certain medications including recent oral isotretinoin, blood-clotting disorders, or if you have a pacemaker or other implanted electronic device. Recently tanned or sunburnt skin may also mean postponing. Please share your full medical, medication and skincare history at consultation so the doctor can advise safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "Your visit begins with a doctor consultation and skin assessment to confirm whether RF microneedling is the right route for your concern, and whether Sylfirm X specifically is the appropriate device. If it is, the skin is cleansed and topical anaesthetic cream is applied and left to take effect, which usually accounts for most of the appointment time.",
          "The handpiece is then passed over the treatment area, stamping the microneedles and delivering RF at the selected depth. Most people describe a warm prickling or tapping sensation. Active treatment of a full face commonly takes around 20 to 30 minutes, with the whole appointment nearer an hour once numbing and aftercare are included. A course of several sessions spaced roughly a month apart is typical, with the exact plan and spacing decided by your doctor based on your concern and how your skin responds.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Expect the skin to look flushed and feel warm immediately afterwards, often with a faint grid pattern from the needle tips. This commonly settles within a day or two, though it varies between individuals and with the depth and energy used. Mild swelling, dryness or slight roughness for a few days is not unusual.",
          "Gentle cleansing, a bland moisturiser and diligent daily sunscreen are advised while the skin settles, and actives such as retinoids or acids are usually paused for a short period. Sun protection matters particularly when pigment is the concern being addressed. Your doctor will give aftercare guidance specific to your skin and the settings used.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any medical procedure, Sylfirm X carries risks, which are explained during consultation. Temporary effects can include redness, swelling, pinpoint bruising or scabbing, dryness and transient changes in pigmentation. Less commonly, infection, prolonged pigment change or scarring can occur. Serious effects are uncommon when the treatment is appropriately selected and performed by a trained doctor.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "Session count and overall cost depend on the concern, the size of the area treated, the depth and modes used, whether the plan combines Sylfirm X with topical or other treatments, and how your skin responds. Consumable needle tips are single-use, which is part of what shapes the cost of any RF microneedling session. Pigment-driven plans often include occasional maintenance sessions over time.",
          "Pricing is discussed at consultation rather than quoted online, so any figure reflects your actual plan rather than a generic package. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "How is Sylfirm X different from other RF microneedling devices?",
        a: "Most RF microneedling devices deliver a continuous heating mode aimed at firmness and texture. Sylfirm X adds a pulsed wave mode that the manufacturer designed around pigment and vascular concerns, alongside its continuous mode. That dual capability is usually the reason a doctor selects it, but device choice depends on your concern and is decided at consultation.",
      },
      {
        q: "Can Sylfirm X be used for melasma on Asian skin?",
        a: "Melasma is one of the concerns the manufacturer positions the pulsed wave mode for, and radiofrequency energy is not melanin-targeted, so RF microneedling is used across deeper skin tones. Melasma is still a chronic, relapsing condition that needs ongoing topical care and sun protection rather than a single procedure. A doctor will assess your pigment pattern at consultation before advising whether it is appropriate.",
      },
      {
        q: "Does Sylfirm X hurt, and how long does the redness last?",
        a: "Topical numbing cream is applied first, and most people describe the treatment itself as a warm prickling or tapping sensation. Afterwards the skin usually looks flushed and feels warm for a day or two, sometimes with a faint needle-tip pattern. Comfort and recovery vary with the depth and energy used, which your doctor selects and will explain beforehand.",
      },
      {
        q: "Is there anything that would rule me out of Sylfirm X?",
        a: "Pregnancy, active infection or inflamed skin in the treatment area, a keloid-scarring history, recent oral isotretinoin, clotting disorders and implanted electronic devices such as pacemakers are among the situations that may make it unsuitable or mean postponing. Recently tanned skin can also mean waiting. Share your full medical and medication history at consultation so your doctor can advise safely.",
      },
    ],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-07-18",
    seoTitle: "Sylfirm X RF Microneedling Treatment Malaysia | Kaiteki",
    seoDescription:
      "Sylfirm X is a dual-mode RF microneedling device used at Kaiteki for pigment, vascular and texture concerns. Book a free consultation to check your suitability.",
  },
  {
    slug: "morpheus8",
    name: "Morpheus8",
    group: "Lifting & Tightening",
    type: "device",
    treatments: ["microneedling"],
    image: "/images/technology/morpheus8.jpg",
    summary:
      "A fractional radiofrequency microneedling device that reaches into the subdermal layer, used for skin-firmness and texture concerns.",
    sections: [
      {
        heading: "What is Morpheus8?",
        body: [
          "Morpheus8 is a fractional radiofrequency (RF) microneedling device made by InMode, an Israeli medical-aesthetic device company. It works on the same principle as other RF microneedling systems (fine needles carry radiofrequency energy through the skin surface and release it at a set depth), and at Kaiteki it is used within our microneedling treatment.",
          "What sets it apart in this category is reach and pattern of delivery. The manufacturer positions Morpheus8 for both dermal contraction and subdermal work, and it can be set to work below the dermis into the fatty layer rather than only within the skin. That deeper subdermal capability is usually why a doctor selects it when the primary concern is firmness along the jawline, lower face or neck rather than surface pigment or pore texture. Whether it suits you depends on your anatomy, skin quality and medical history, which a doctor assesses at an in-person consultation.",
        ],
      },
      {
        heading: "How the Burst technology works",
        body: [
          "Morpheus8 delivers bipolar radiofrequency between the microneedles, so the energy stays between the pins at the depth they are set to. The manufacturer's SCALE and BURST functions automatically deploy that energy to several treatment depths within a single pulse at programmable energy levels, so one insertion can address more than one layer instead of requiring separate passes at each depth. The manufacturer states that its Body platform, using Burst and 3D Smart Frame, produces a thermal profile reaching around 8mm.",
          "The system uses interchangeable fractional tips with different pin configurations for different jobs (the manufacturer lists a 12-pin Burst Prime, a 24-pin Burst, a 24-pin Burst Resurfacing tip and a 40-pin Burst Deep tip), so finer facial areas, resurfacing-style work and larger or deeper body areas can be handled with the appropriate tip. Topical numbing is applied beforehand and the area is cooled afterwards. Tip choice, depth, energy and coverage are all selected by the treating doctor. Tissue responses to heating develop over weeks to months and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Morpheus8 is commonly considered for the concerns below, on the face and on selected body areas. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
        ],
        list: [
          "Loss of firmness along the jawline and lower face",
          "Early laxity and crepey texture on the neck",
          "Acne scarring and uneven skin texture",
          "Enlarged pores and rough skin surface",
          "Fine lines and general skin quality on the face",
          "Laxity and texture concerns on body areas such as the abdomen or arms",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Radiofrequency energy is not absorbed by melanin the way laser light is, so RF microneedling is used across a wide range of skin tones, including deeper Asian skin tones. Suitability for Morpheus8 specifically has more to do with what you are trying to change: it is aimed at skin quality and tissue firmness, and it is not a substitute for surgery where there is significant sagging or excess skin. A doctor will be straightforward with you at consultation about whether your degree of laxity is likely to respond to this kind of treatment.",
          "It may not be suitable during pregnancy or breastfeeding, with active infection, inflamed acne or dermatitis in the treatment area, a history of keloid scarring, recent oral isotretinoin, clotting disorders or if you take blood thinners, and it is generally avoided in people with a pacemaker or other implanted electronic device. Metal implants or permanent fillers in the treatment area should also be declared. Please share your full medical and medication history at consultation.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "Your visit starts with a doctor consultation and assessment, including which areas are being treated and whether a deeper subdermal setting is appropriate for them. The skin is cleansed, topical anaesthetic is applied and left to take effect, and the treatment map is marked out. Numbing usually accounts for a large share of the appointment.",
          "The handpiece is then applied in overlapping stamps across the marked area, delivering radiofrequency at the set depths. Most people describe pressure, heat and a prickling sensation, with deeper settings felt more distinctly, particularly over bony areas such as the jaw. Active treatment of the lower face and neck commonly takes around 30 to 45 minutes; larger body areas take longer. A course of around three sessions spaced roughly four to six weeks apart is a common starting plan, but your doctor decides the number and spacing based on your assessment and response.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Redness, warmth and some swelling are usual immediately afterwards, and a faint grid pattern from the needle pins is often visible. Most people find this settles substantially within two to three days, though swelling along the jaw or neck can linger a little longer and recovery varies with the depth and energy used. Small scabs or pinpoint bruising can occur, particularly with deeper settings.",
          "Gentle cleansing, a bland moisturiser and daily sunscreen are advised while the skin recovers, with actives such as retinoids and acids paused for a short period. Strenuous exercise, heat and sun exposure are usually avoided for a few days. Your doctor will give aftercare guidance specific to the areas and settings treated.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any medical procedure, Morpheus8 carries risks, which are explained during consultation. Temporary effects can include redness, swelling, bruising, small scabs, tenderness and transient changes in pigmentation. Less commonly, infection, prolonged pigment change, scarring, small contour irregularities where deeper subdermal settings are used, or temporary nerve-related numbness or tingling can occur. Serious effects are uncommon when the treatment is appropriately selected and performed by a trained doctor.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "Session count and cost depend on how many areas are treated and their size, whether treatment is limited to the face or extends to the neck or body, the tips and depths required, and how your tissue responds. Fractional tips are single-use consumables and larger tips cover more area per session, both of which shape the cost of a plan. Some people choose an occasional maintenance session in later years.",
          "Pricing is discussed at consultation rather than quoted online, so any figure reflects the areas and plan actually agreed with your doctor. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "How deep does Morpheus8 go compared with standard RF microneedling?",
        a: "Morpheus8 can be set to work below the dermis into the subdermal fatty layer, and the manufacturer describes a thermal profile reaching around 8mm on its Body platform, which is deeper than devices designed to work within the skin alone. Deeper is not automatically better: the right depth depends on the concern and the area. Your doctor selects tip and depth at consultation.",
      },
      {
        q: "Will Morpheus8 tighten sagging skin without surgery?",
        a: "It is aimed at skin quality and tissue firmness rather than removing excess skin, so it is used for early to moderate laxity rather than as an alternative to a surgical lift. Changes develop gradually over weeks to months and vary between individuals. A doctor will tell you honestly at consultation whether your degree of laxity is likely to respond.",
      },
      {
        q: "Is Morpheus8 safe for darker skin tones?",
        a: "Radiofrequency energy is not melanin-targeted the way laser light is, which is why RF microneedling is used across a broad range of skin tones including deeper Asian skin. Temporary pigment changes are still possible, particularly with deeper settings or without good sun protection afterwards. Your doctor assesses your skin type and history before recommending settings.",
      },
      {
        q: "How much downtime should I plan for after Morpheus8?",
        a: "Most people plan for two to three days of visible redness, warmth and some swelling, with a faint grid pattern from the needle pins. Deeper settings and neck or body areas can take a little longer to settle, and this varies between individuals. Your doctor will tell you what to expect for the areas and depths in your plan.",
      },
    ],
    reviewedBy: "dr-william-yap",
    lastReviewed: "2026-07-18",
    seoTitle: "Morpheus8 RF Microneedling Treatment Malaysia | Kaiteki",
    seoDescription:
      "Morpheus8 is a fractional RF microneedling device with subdermal reach, used at Kaiteki for firmness and texture. Book a free consultation to check suitability.",
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
      "A radiofrequency microneedling device combining monopolar and bipolar modes at two frequencies, used for scarring, pore and texture concerns.",
    sections: [
      {
        heading: "What is Potenza?",
        body: [
          "Potenza is a radiofrequency (RF) microneedling device from Cynosure Lutronic. Like other devices in this category it passes very fine needles through the skin surface and releases radiofrequency energy from them at a chosen depth, and at Kaiteki it is used within our microneedling treatment.",
          "Its distinguishing feature is configurability. Most RF microneedling devices deliver one type of radiofrequency; Potenza offers four combinations (monopolar or bipolar radiofrequency, each delivered at 1MHz or 2MHz) in a single platform, alongside a range of interchangeable tips and adjustable needle depth. That range of settings is usually why a doctor selects it when the plan involves working at several different depths across a face, which is common with scarring and pore concerns. Whether it is the right device for you depends on your concern, skin type and medical history, which a doctor assesses at an in-person consultation.",
        ],
      },
      {
        heading: "How the four modes and depth control work",
        body: [
          "Bipolar radiofrequency passes energy between the needles, keeping it relatively contained around the needle field; monopolar radiofrequency travels from the needles toward a return electrode, which spreads the energy more broadly and deeply. Frequency changes the character of the heating as well: the manufacturer pairs these two options with 1MHz and 2MHz settings, giving four modes that can be matched to shallow or deeper work. Needle depth is set separately, so the doctor can treat superficially around fine surface texture and go deeper into a tethered scar in the same session.",
          "Tips are interchangeable, with different pin counts and configurations for small precise areas versus broader coverage. The manufacturer also offers a Fusion Tip, which it describes as using a dual air-chamber design to release air toward the skin with each pulse in order to help topical products applied during the session penetrate; the manufacturer states this tip runs in monopolar mode at 1MHz. Topical numbing is applied first and the area cooled afterwards. Mode, frequency, tip, depth and energy are all chosen by the treating doctor. Changes develop gradually over weeks to months and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Potenza is commonly considered for the concerns below. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
        ],
        list: [
          "Acne scarring, including boxcar and rolling scars",
          "Enlarged pores and coarse skin texture",
          "Uneven surface texture and fine lines",
          "Active or oil-prone acne-affected skin, using shallower settings",
          "Mild skin laxity and loss of firmness",
          "Selected surgical or trauma scars, as assessed by a doctor",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Because radiofrequency is not absorbed by melanin the way laser light is, RF microneedling is used across a broad range of skin tones, including the deeper Asian skin tones common in Malaysia. Scar work in particular is a staged process: different scar types respond differently, some benefit from being released or combined with other treatments, and a doctor will set realistic expectations at consultation rather than promising a single fix.",
          "Potenza may not be suitable during pregnancy or breastfeeding, with active skin infection or inflamed dermatitis in the area, a history of keloid scarring, recent oral isotretinoin, clotting disorders or while taking blood thinners. Monopolar radiofrequency in particular means implanted electronic devices such as pacemakers, and metal implants in the treatment area, must be declared, as does any permanent filler. Please share your full medical, medication and skincare history at consultation so the doctor can advise safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "Your visit begins with a doctor consultation and a close look at your skin, mapping which areas need which depth: scarred areas, pore-dense zones and finer skin are often treated with different settings in the same session. The skin is then cleansed and topical anaesthetic applied and left to take effect, which usually takes up most of the appointment time.",
          "The handpiece is passed over the mapped areas in overlapping stamps, with the doctor changing depth, mode or tip as they move between zones. Most people describe heat and a prickling or tapping sensation, felt more distinctly at deeper settings. Active treatment of a full face commonly takes around 30 to 45 minutes, with the full appointment closer to an hour and a half including numbing and aftercare. Scar-focused plans typically run to several sessions spaced roughly four to six weeks apart, with the number and spacing decided by your doctor.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Redness, warmth and mild swelling are usual straight afterwards, often with a visible pattern from the needle pins. This commonly settles over two to three days, though it varies between individuals and with the depths used. Deeper scar settings tend to leave the skin looking flushed and feeling tender for slightly longer, and pinpoint scabs can occur.",
          "Gentle cleansing, a bland moisturiser and daily sunscreen are advised while the skin recovers, with retinoids, acids and other actives paused for a short period. Makeup is usually left off for the first day or so, and heat, sweat and sun exposure avoided for a few days. Your doctor will give aftercare guidance specific to your skin and the settings used.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any medical procedure, Potenza carries risks, which are explained during consultation. Temporary effects can include redness, swelling, pinpoint bruising or scabbing, tenderness, dryness and transient changes in pigmentation. Less commonly, infection, an acne flare, prolonged pigment change or scarring can occur. Serious effects are uncommon when the treatment is appropriately selected and performed by a trained doctor.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "Session count and cost depend on the concern and its severity, the size of the area treated, the number of modes and tips a session requires, and how your skin responds. Scarring generally needs a longer course than pore or texture work, and treatment tips are single-use consumables, both of which shape what a plan costs. Some plans combine Potenza with other treatments where the doctor judges that appropriate.",
          "Pricing is discussed at consultation rather than quoted online, so any figure reflects your actual plan. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "What do Potenza's monopolar and bipolar modes actually change for me?",
        a: "Bipolar radiofrequency keeps energy between the needles for more contained, superficial work, while monopolar spreads it more broadly and deeply. Combined with 1MHz and 2MHz settings and adjustable needle depth, that lets a doctor treat several depths across one face in a single session. Which combinations are used is a clinical decision made at consultation.",
      },
      {
        q: "Is Potenza used for acne scars, and how many sessions does scar work take?",
        a: "Acne scarring and pore texture are among the concerns it is commonly considered for, and its depth control is part of why it is chosen for that work. Scar plans generally run to several sessions spaced roughly four to six weeks apart, and different scar types respond differently. Your doctor will assess your scar pattern and set out a realistic plan at consultation.",
      },
      {
        q: "What is the Fusion Tip for?",
        a: "The manufacturer describes the Fusion Tip as using a dual air-chamber design that releases air toward the skin with each pulse, intended to help topical products applied during the session penetrate, and states it operates in monopolar mode at 1MHz. Whether a session includes it, and which topical is used, is decided by the treating doctor. Suitability is assessed at consultation.",
      },
      {
        q: "Can I have Potenza if I have a pacemaker or metal implants?",
        a: "Monopolar radiofrequency passes energy through tissue toward a return electrode, so implanted electronic devices such as pacemakers, and metal implants in the treatment area, are important to declare and may make the treatment unsuitable. Permanent fillers should also be disclosed. Bring details of any implant or device to your consultation so your doctor can advise safely.",
      },
    ],
    reviewedBy: "dr-lim-xiao-chien",
    lastReviewed: "2026-07-18",
    seoTitle: "Potenza RF Microneedling Treatment Malaysia | Kaiteki",
    seoDescription:
      "Potenza is an RF microneedling device with four RF modes and adjustable depth, used at Kaiteki for scars and pores. Book a free consultation to check suitability.",
  },
  {
      slug: "btl-exilis",
      name: "BTL Exilis",
      group: "Lifting & Tightening",
      type: "device",
      treatments: ["radiofrequency"],
      image: "/images/technology/btl-exilis.jpg",
      summary:
        "A monopolar radiofrequency device with embedded cooling that heats tissue volumetrically, used for skin-firmness, texture and body-contour concerns.",
      sections: [
        {
          heading: "What is BTL Exilis?",
          body: [
            "BTL Exilis is a monopolar radiofrequency (RF) platform made by BTL, the manufacturer behind Emsculpt and Emsella, and it is used at Kaiteki within our radiofrequency treatment. Its category is non-invasive tissue heating: the handpiece is moved over intact skin and RF energy warms the dermis and, at deeper settings, the fatty layer beneath. BTL positions Exilis as a head-to-toe platform, with different applicators for delicate facial areas and for larger body areas, and the Exilis Ultra generation adds an ultrasound component alongside the RF in the same applicator.",
            "What distinguishes Exilis within the RF category is the combination of monopolar delivery with embedded surface cooling. Because the skin surface is actively cooled while energy is applied, the device can keep working for longer at a depth that reaches subcutaneous fat rather than being limited by surface discomfort, which is why Exilis is used for body-contour concerns as well as facial firmness. Whether it suits your concern is assessed by a doctor at an in-person consultation.",
          ],
        },
        {
          heading: "How monopolar RF with cooling works",
          body: [
            "In a monopolar system the current passes from a single treatment electrode through the tissue towards a return path, so energy travels further into the tissue than in bipolar or multipolar designs, where current arcs between electrodes only millimetres apart and therefore stays comparatively superficial. BTL describes the applicators as delivering volumetric 360° heating, meaning the aim is even heat distribution through a tissue volume rather than a concentrated hot spot, and the manufacturer's Energy Flow Control monitors and adjusts output in real time as tissue impedance changes during the pass. Controlled dermal heating is the mechanism RF uses to prompt collagen remodelling; deeper heating in the fat layer is what BTL relates to its body applications.",
            "The embedded cooling is central rather than incidental. Cooling the epidermis while heat accumulates below lets the doctor use higher energy for longer without the skin surface becoming the limiting factor, and BTL's own patient material describes the sensation as comparable to a hot stone massage. Applicator choice, energy level, treatment temperature and number of passes are all set by the treating doctor for the area being treated. Any change develops gradually over the weeks after a course and varies between individuals.",
          ],
        },
        {
          heading: "What it may help address",
          body: [
            "Exilis is commonly considered for firmness and contour concerns on both face and body. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
          ],
          list: [
            "Mild to moderate skin laxity on the lower face, jawline and neck",
            "Loose or crepey skin on the abdomen, arms, knees or inner thighs",
            "Localised fat deposits being addressed alongside laxity",
            "Fine lines and loss of skin firmness",
            "Skin texture and the appearance of cellulite-related dimpling",
            "Post-pregnancy abdominal skin laxity",
          ],
        },
        {
          heading: "Suitability & who should avoid it",
          body: [
            "Exilis is generally aimed at people with mild to moderate laxity, and at those who want a non-needling option with little interruption to daily life. BTL states there are no BMI or skin type restrictions for the platform, and because RF heats tissue rather than targeting pigment it is used across a wide range of skin tones including Asian skin. That said, it is a firming and contouring device, not a substitute for surgery where there is significant excess skin. Your doctor will be direct with you about what category of treatment matches your concern.",
            "RF is generally avoided during pregnancy or breastfeeding, over active skin infections, inflamed skin or open wounds, and in the presence of pacemakers, defibrillators or other electronic or metal implants in or near the treatment area. Recent fillers or threads, certain medications, impaired sensation in the area and a history of keloid scarring are also relevant. Please share your full medical history, medications and any implanted devices at consultation so the doctor can advise safely.",
          ],
        },
        {
          heading: "The session at Kaiteki",
          body: [
            "A visit begins with a doctor consultation and assessment to confirm RF is the appropriate category and to define the treatment area. If Exilis is appropriate, the skin is cleansed and a coupling gel applied, then the applicator is moved continuously over the area in passes while temperature is monitored. Nothing is injected and no needles are used, so numbing cream is generally not required; most people describe steady, deep warmth that eases as the applicator moves on.",
            "Session length depends on the area: BTL indicates that treating a specific area commonly takes somewhere between a few minutes and around half an hour, so a small facial area is much shorter than an abdomen. For courses, BTL's patient material describes most people having roughly two to four treatments spaced about seven to ten days apart, though your doctor will set the actual plan and spacing for your skin and concern.",
          ],
        },
        {
          heading: "Downtime & aftercare",
          body: [
            "Downtime is usually minimal. Most people return to work, exercise and normal routine the same day, and makeup can generally be worn straight after a facial session. Temporary warmth, pinkness or mild tenderness in the treated area can occur and typically settles within a few hours, though this varies between individuals.",
            "Drinking water, gentle skincare and daily sun protection are advised afterwards, and it is sensible to avoid saunas, hot baths and intense heat for the rest of the day. Your doctor will give aftercare guidance specific to the area treated.",
          ],
        },
        {
          heading: "Risks & side effects",
          body: [
            "As with any medical procedure, Exilis carries risks, which are explained during consultation. Temporary effects can include redness, warmth, mild swelling, tenderness or small firm areas in treated fat that settle over time. Burns, blistering and changes in pigmentation are uncommon and are less likely when the applicator and settings are appropriately selected, cooling is used correctly and treatment is performed by a trained doctor.",
          ],
        },
        {
          heading: "Sessions & cost factors",
          body: [
            "The number of sessions and overall cost depend on the size and number of areas treated, whether you are addressing laxity alone or laxity together with localised fat, and how your body responds. Body areas involve more surface to cover than facial areas, so they generally require longer sessions. Some plans include occasional maintenance over time.",
            "Pricing is discussed at consultation rather than quoted online, so any figure reflects your actual plan rather than a generic package. Message us on WhatsApp to arrange a consultation.",
          ],
        },
      ],
      faqs: [
        {
          q: "Can BTL Exilis be used on the body as well as the face?",
          a: "Yes. Exilis is a platform with different applicators, and BTL positions it for both facial areas and larger body areas such as the abdomen, arms and thighs. Because its cooling allows energy to reach the deeper fatty layer, it is often considered where laxity and localised fat occur together. Which areas are suitable for you, and in what order, is decided by your doctor at consultation.",
        },
        {
          q: "How is Exilis different from a bipolar or multipolar RF facial device?",
          a: "Monopolar RF passes current from a single treatment electrode through the tissue towards a return path, so it reaches deeper than bipolar or multipolar designs where the current arcs between closely spaced electrodes and stays comparatively superficial. That depth is why monopolar devices are used for structural firmness and body areas rather than surface-level skin quality alone. Your doctor will explain which type of RF fits your concern.",
        },
        {
          q: "Is BTL Exilis painful?",
          a: "It is generally well tolerated. The embedded cooling keeps the skin surface comfortable while heat builds underneath, and BTL's own patient material likens the sensation to a hot stone massage. Comfort varies between individuals and with the energy used, so tell your doctor during the session if the warmth becomes too intense: settings can be adjusted.",
        },
        {
          q: "How many Exilis sessions are typical, and is the effect permanent?",
          a: "BTL's patient material describes most people having around two to four treatments spaced roughly a week to ten days apart, though the actual plan depends on your concern and response. No non-invasive RF treatment stops ageing, so skin continues to change over time and occasional maintenance is common. Your doctor will outline a realistic plan and timeframe at consultation.",
        },
      ],
      reviewedBy: "dr-jeremy-low",
      lastReviewed: "2026-07-18",
      seoTitle: "BTL Exilis RF Skin Tightening Treatment Malaysia | Kaiteki",
      seoDescription:
        "BTL Exilis is a monopolar radiofrequency device with embedded cooling, used at Kaiteki for facial firmness and body contour. Book a free consultation today.",
    },
  {
      slug: "wonderface",
      name: "Wonderface",
      group: "Lifting & Tightening",
      type: "device",
      treatments: ["radiofrequency"],
      image: "/images/technology/wonderface.jpg",
      summary:
        "A facial platform combining bipolar radiofrequency with neuromuscular stimulation, used for skin-firmness and facial contour concerns.",
      sections: [
        {
          heading: "What is Wonderface?",
          body: [
            "Wonderface is a face-specific device from the Spanish aesthetic-technology brand Wonder, used at Kaiteki within our radiofrequency treatment. Unlike a pure skin-tightening machine, it is a two-technology platform: a bipolar radiofrequency mode that warms the skin, and a neuromuscular stimulation mode that produces controlled contractions in the facial muscles. The manufacturer describes the two as independent modes rather than a single blended output, so a session can be weighted towards skin quality, towards muscle work, or set to include both.",
            "That second element is the reason people compare Wonderface with muscle-stimulating facial devices rather than only with RF machines: the premise is that facial ageing is partly a matter of muscle tone and support, not skin laxity alone. It is a non-needling, surface-applied treatment: nothing is injected and nothing pierces the skin, which is what separates it from RF microneedling devices covered on their own pages. Whether it suits your face is assessed by a doctor at an in-person consultation.",
          ],
        },
        {
          heading: "How the two modes work",
          body: [
            "In the radiofrequency mode, Wonderface uses a bipolar configuration: current passes between two closely spaced electrodes rather than travelling deep towards a return path as in monopolar systems. Bipolar RF is therefore more contained and comparatively superficial, which suits the thinner, more delicate tissue of the face where controlled, shallower heating is the point. The manufacturer describes the RF mode as bringing tissue to a controlled temperature in the region of 42 to 44 °C to a depth of approximately 2 cm, the range used in aesthetics to encourage collagen remodelling without damaging the skin surface.",
            "In the neuromuscular mode, the applicators deliver pulses intended to stimulate the motor nerves supplying selected facial muscle groups, producing repeated involuntary contractions, the manufacturer's own description is of muscle conditioning rather than paralysis, and it is worth being clear that this is a different mechanism from botulinum toxin, which reduces muscle activity rather than exercising it. The two are not interchangeable and are not alternatives for the same goal. Which mode is used, at what intensity, over which muscle groups and for how long is decided by the treating doctor. Any change develops gradually across a course and varies between individuals.",
          ],
        },
        {
          heading: "What it may help address",
          body: [
            "Wonderface is commonly considered for facial firmness and contour concerns, particularly where loss of definition rather than surface pigmentation is the issue. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
          ],
          list: [
            "Loss of definition along the jawline and lower face",
            "Softening of the cheek and mid-face contour",
            "Mild skin laxity and loss of facial firmness",
            "The appearance of a fuller under-chin area",
            "Fine lines and general skin quality on the face",
            "Facial tone as part of a wider non-surgical plan",
          ],
        },
        {
          heading: "Suitability & who should avoid it",
          body: [
            "Wonderface is generally aimed at people with early to moderate loss of facial firmness who want a non-needling, no-downtime option, and it tends to appeal to those who prefer working on facial tone rather than adding volume. Because RF heats tissue rather than targeting pigment, it does not depend on contrast in skin colour and is used across a wide range of skin tones including Asian skin. It is not a substitute for surgery where there is significant excess skin, and your doctor will tell you plainly if your concern sits outside what this device is used for.",
            "Devices that deliver electrical stimulation and RF to the face are generally avoided during pregnancy, over active skin infections or inflamed skin, and in people with pacemakers, defibrillators, implanted electronic devices, metal implants in the treatment area or a history of seizures. Recent injectables, threads, dental metalwork, neurological conditions and certain medications are all relevant to the assessment. Please share your full medical and treatment history at consultation so the doctor can advise safely.",
          ],
        },
        {
          heading: "The session at Kaiteki",
          body: [
            "A visit begins with a doctor consultation and facial assessment, including which muscle groups and which skin areas are relevant to your concern. If Wonderface is appropriate, the skin is cleansed and applicators or pads are positioned on the face. In the neuromuscular mode you will feel repeated tapping or twitching sensations as the muscles contract, which is expected and not painful for most people; in the RF mode you feel building warmth as the applicator works over the area. No numbing is generally required and nothing is injected.",
            "Sessions are typically short: this is a treatment people often schedule around a working day. A course of several sessions over a few weeks is usual for tone-based treatments, sometimes followed by periodic maintenance, but the number, spacing and mode balance are set by your doctor for your face rather than fixed in advance.",
          ],
        },
        {
          heading: "Downtime & aftercare",
          body: [
            "Downtime is usually minimal. Most people return to normal activities immediately and can apply makeup the same day. Temporary warmth, pinkness, or a mild worked or tired feeling in the treated muscles can occur afterwards and typically settles within hours, though this varies between individuals.",
            "Gentle skincare, hydration and daily sun protection are advised. Your doctor will give aftercare guidance specific to your skin and the areas treated, including how it fits around any injectables or other treatments you are having.",
          ],
        },
        {
          heading: "Risks & side effects",
          body: [
            "As with any medical procedure, Wonderface carries risks, which are explained during consultation. Temporary effects can include redness, warmth, mild swelling, transient muscle fatigue or tenderness where the applicators sat. Skin irritation, burns or blistering are uncommon and are less likely when settings are appropriately selected and treatment is performed by a trained doctor who has reviewed your medical history and any implanted devices.",
          ],
        },
        {
          heading: "Sessions & cost factors",
          body: [
            "The number of sessions and overall cost depend on your concern, whether you are using one mode or both, the areas treated and how your face responds. Tone-based plans generally involve a short initial course followed by less frequent maintenance, and some people combine Wonderface with other treatments, which changes the plan.",
            "Pricing is discussed at consultation rather than quoted online, so any figure reflects your actual plan rather than a generic package. Message us on WhatsApp to arrange a consultation.",
          ],
        },
      ],
      faqs: [
        {
          q: "How is Wonderface different from a normal RF skin-tightening facial?",
          a: "A conventional RF facial only heats the skin. Wonderface pairs bipolar radiofrequency with a separate neuromuscular stimulation mode that produces controlled contractions in facial muscle groups, so the plan can address muscle tone as well as skin quality. The manufacturer describes these as independent modes, and your doctor decides which are used, at what intensity, at consultation.",
        },
        {
          q: "Is Wonderface an alternative to botulinum toxin?",
          a: "No. The mechanisms are opposite. Botulinum toxin is a prescription medicine that reduces the activity of selected muscles, while Wonderface's neuromuscular mode stimulates muscles to contract. They are used for different goals and are not substitutes for one another. If you are considering either, discuss it with your doctor, who will advise what is appropriate and how treatments can be sequenced.",
        },
        {
          q: "What does the muscle stimulation feel like?",
          a: "Most people describe repeated tapping or twitching as the targeted muscles contract, alongside gentle warmth when the radiofrequency mode is used. It is an unusual sensation rather than a painful one for most people, and intensity is adjustable. Tell your doctor during the session if anything feels uncomfortable so settings can be changed.",
        },
        {
          q: "Can I have Wonderface if I have fillers, threads or dental implants?",
          a: "It depends on what you have, where it sits and how recently it was placed: existing injectables, threads and metal in or near the treatment area all need to be assessed before treatment, and implanted electronic devices such as pacemakers are a contraindication. This is exactly why a full treatment history matters. Bring the details to your consultation so the doctor can advise safely.",
        },
      ],
      reviewedBy: "dr-chang-chee-seong",
      lastReviewed: "2026-07-18",
      seoTitle: "Wonderface RF & Muscle Stimulation Malaysia | Kaiteki",
      seoDescription:
        "Wonderface combines bipolar radiofrequency with neuromuscular stimulation, used at Kaiteki for facial firmness and contour. Book a free consultation today.",
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
    reviewedBy: "dr-jacqueline-tan",
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
      "A cryolipolysis device with 360° cooling applicators and multi-applicator capability, used to target pockets of localised fat.",
    sections: [
      {
        heading: "What is Cooltech?",
        body: [
          "Cooltech is a non-invasive cryolipolysis (controlled-cooling) body-contouring platform developed by Cocoon Medical, a Barcelona-based aesthetic device manufacturer. It sits in the same category as other fat-freezing systems and is used within Kaiteki's fat freezing treatment to address pockets of localised fat that have not responded to diet and exercise. The manufacturer refers to the process as cryoadipolysis.",
          "What distinguishes Cooltech for someone comparing devices is the applicator design. The manufacturer describes 360° cooling plates (cooling delivered around the drawn-in tissue rather than from a single contact plate) together with a range of applicator shapes and sizes, and the ability to run more than one applicator at the same time. In practice this means two areas, or two sides of a symmetrical area such as the flanks, may be addressed within the same appointment rather than across separate visits. Whether Cooltech is appropriate for you, and which areas can reasonably be addressed, is assessed by a doctor at an in-person consultation.",
        ],
      },
      {
        heading: "How cryolipolysis works",
        body: [
          "Fat cells are more sensitive to cold than the skin, nerves and other tissue around them. Cryolipolysis applies a controlled, sustained low temperature to a defined pocket of subcutaneous fat, which is intended to trigger a gradual breakdown of those fat cells; the body then clears the affected cells over the following weeks through its normal metabolic processes. This is why nothing is cut, injected or suctioned out, and why change appears slowly rather than immediately.",
          "The applicator is placed against the treatment area and gentle vacuum suction draws the fat pocket into the cup so the cooling plates surround it. The manufacturer describes several selectable suction levels so the setting can be matched to the tissue and the applicator in use, and a gel pad placed on the skin beforehand to protect the surface during cooling. A massage step over the treated area typically follows the cooling cycle. The applicator, temperature, suction level and cycle time are all selected by the treating doctor for your body area and tissue. Results develop gradually over weeks and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Cooltech is commonly considered for defined pockets of pinchable fat in the areas below. It is a contouring option for localised areas, not a weight-loss treatment, and it is not suitable for everyone. A consultation determines whether it is appropriate for you.",
        ],
        list: [
          "Lower abdomen and upper abdomen",
          "Flanks (love handles) and the bra-line or back area",
          "Inner and outer thighs",
          "Upper arms",
          "Under the chin and the submental area, using a smaller applicator",
          "Above the knees and other small, well-defined pockets",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Cooltech is aimed at people who are close to a stable weight and have discrete, pinchable pockets of fat in specific areas. It is not a weight-loss treatment, not a treatment for obesity, and not a substitute for diet, exercise or medical weight management. If overall weight is your main concern, your doctor will discuss more appropriate options. Because it acts on fat below the skin rather than on pigment, skin tone is not the primary consideration it is with lasers, but the thickness and distribution of fat in the area very much are.",
          "Cryolipolysis may not be appropriate during pregnancy or breastfeeding, with cold-related conditions such as cryoglobulinaemia, cold urticaria or paroxysmal cold haemoglobinuria, with hernias in or near the treatment area, over broken or infected skin, or with certain circulatory, nerve or liver conditions. Please share your full medical history, current medications, any implants or devices, and any previous body-contouring procedures at consultation so the doctor can advise safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "A visit begins with a doctor consultation, an assessment of the area and a discussion of what is realistic for your body. If Cooltech is appropriate, the area is marked, a protective gel pad is applied, and the applicator is positioned and switched on. There is an initial period of intense cold and a firm pulling sensation from the suction, which commonly eases as the area becomes numb; most people sit or lie comfortably for the rest of the cycle. A single cooling cycle usually takes in the region of half an hour to an hour depending on the applicator and settings, and because more than one applicator can run at once, a plan covering two areas need not always mean two appointments.",
          "The applicator is removed at the end of the cycle and the area is massaged. Many areas are addressed with one or two cycles spaced several weeks or months apart, since the body needs that time to clear the affected cells before the outcome can be judged. Your doctor will set out a realistic schedule for your areas at consultation.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "There is generally no formal downtime and most people return to usual activities the same day, though this varies between individuals. Immediately after the applicator is removed the area often looks red and feels firm, cold or oddly numb, and this typically settles over the following hours to days.",
          "Temporary tenderness, swelling, tingling or a dull ache in the treated area can persist for a few days to a couple of weeks, and some people find loose clothing or a compression garment more comfortable during that period. Maintaining a stable weight with your usual diet and activity supports the contour you are working towards. Your doctor will give aftercare guidance specific to you.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any medical procedure, cryolipolysis carries risks, which are explained during consultation. Temporary effects can include redness, swelling, bruising, firmness, numbness, tingling, itching or cramping in the treated area, and altered skin sensation that may take some weeks to normalise. Less common effects include lingering pain in the treated area and paradoxical adipose hyperplasia, in which the treated fat pocket firms and enlarges rather than reduces. Serious effects are uncommon when the treatment is appropriately selected and performed by a trained doctor, and your doctor will discuss how any complication would be managed.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "The main drivers are how many areas you want addressed, the size of applicator each area needs, how many cooling cycles each area requires and how your body responds. Larger areas such as the abdomen may need several applicator placements to cover fully, while a small pocket may need only one. Being able to run applicators simultaneously can reduce the number of appointments for a multi-area plan, though it does not change the amount of treatment delivered.",
          "Pricing is discussed at consultation rather than quoted online, so any figure reflects your actual areas and plan rather than a generic package. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will Cooltech help me lose weight?",
        a: "No. Cryolipolysis is used to address defined, pinchable pockets of localised fat in specific areas: it is a contouring option, not a weight-loss treatment and not a substitute for diet, exercise or medical weight management. Your weight on the scales is unlikely to change meaningfully. If overall weight is your main concern, discuss that with the doctor at consultation so you are pointed towards something appropriate.",
      },
      {
        q: "Can more than one area be treated in the same visit?",
        a: "Cooltech is designed so that more than one applicator can operate at the same time, so a plan covering two areas, or both flanks, may be able to be done within a single appointment rather than across separate visits. Whether that is sensible for you depends on the areas involved and your tolerance on the day. Your doctor will decide the sequence and settings at consultation.",
      },
      {
        q: "What does the session actually feel like?",
        a: "Most people describe intense cold and a firm pulling or tugging sensation from the vacuum in the first several minutes, which commonly eases as the area becomes numb. It is not usually described as painful, and no anaesthetic is involved. Comfort varies between individuals, and your doctor will explain what to expect and check on you during the cycle.",
      },
      {
        q: "How soon might I notice a change, and will it last?",
        a: "Cryolipolysis works gradually: the body clears the affected fat cells over the weeks following a session, so any change is typically assessed a couple of months later rather than immediately. Outcomes vary between individuals and no result can be guaranteed. Maintaining a stable weight matters, because remaining fat cells can still enlarge with weight gain; your doctor will explain what is realistic for you at consultation.",
      },
    ],
    reviewedBy: "dr-joaan-kong",
    lastReviewed: "2026-07-18",
    seoTitle: "Cooltech Cryolipolysis Fat-Freezing Malaysia | Kaiteki",
    seoDescription:
      "Cooltech is a cryolipolysis device with 360° cooling applicators, used at Kaiteki for pockets of localised fat. Book a free consultation to check suitability.",
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
          "At Kaiteki, Onda is offered in two forms, Onda for Body and Onda for Face, using the same underlying technology at settings suited to each area. Whether it suits you depends on your concern, body area, skin and medical history, which a doctor assesses during consultation.",
        ],
      },
      {
        heading: "How Coolwaves technology works",
        body: [
          "Coolwaves® are a specific range of microwaves delivered beneath the skin's surface. The energy is intended to act on the targeted tissue, for example, localised fat cells or the fibrous bands associated with cellulite, while the built-in cooling helps keep the surface of the skin protected during treatment.",
          "The same energy may also prompt a gradual collagen-remodelling response, which is why the device is used for firmness as well as contouring. Settings are selected by the treating doctor for the area and your skin. Results develop over time and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address: body & face",
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
    reviewedBy: "dr-tim-chua",
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
      "An electromagnetic muscle-stimulation device that induces involuntary contractions, used for muscle tone rather than fat reduction.",
    sections: [
      {
        heading: "What is Schwarzy?",
        body: [
          "Schwarzy is a non-invasive muscle-stimulation platform made by DEKA, an Italian medical laser and aesthetic device manufacturer. It uses a technology the manufacturer calls TOP FMS (Flat Magnetic Stimulation) to induce involuntary muscle contractions in a targeted area. At Kaiteki it is offered under the Em-Fit name as part of the muscle stimulation treatment, and it is used for muscle tone and definition, not for fat reduction.",
          "That boundary is the most important thing to understand before booking. Schwarzy works on muscle: it is a toning modality, it is not a fat-reduction device, it is not a weight-loss treatment, and it is not a substitute for diet, exercise or medical weight management. Where fat is the concern, it is used alongside a separate fat-reduction approach rather than in place of one. What distinguishes it mechanically from a simple electrical stimulator is that the stimulus is magnetic rather than electrical, so it does not have to cross the resistance of the skin, and the manufacturer describes the field as deliberately flat and evenly distributed, without the intensity peaks associated with discomfort. Whether it is appropriate for you is assessed by a doctor at an in-person consultation.",
        ],
      },
      {
        heading: "How flat magnetic stimulation works",
        body: [
          "A coil inside the applicator generates a rapidly changing magnetic field. Rather than passing current through the skin the way electrode-based electrical stimulation does, the field passes through tissue and acts on the motor nerves supplying the muscle beneath, prompting it to contract. Because pain receptors in the skin are not being driven directly, the manufacturer describes the treatment as tolerable at intensities that would be difficult to reach with electrical stimulation, and no conductive gel or adhesive electrode is needed.",
          "The contractions are involuntary and repeated many times over a session, at a rate and depth you could not produce by choice in the gym, which is the intended mechanism for a change in muscle tone. DEKA supplies three pad shapes so the applicator can sit properly against different areas: a FLAT pad chiefly for the thighs and buttocks, a CURVE pad for the lower legs and forearms, and an ELLIPSE pad for the abdomen. The manufacturer also describes selectable programmes graded by physical condition (Aerobic, Shaping and Strength) for people at different levels of conditioning. The programme, pad, intensity and progression are all selected by the treating doctor. Any change develops gradually over a course and varies between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Schwarzy is commonly considered for muscle tone and definition in the areas below, usually where someone is already reasonably close to their target shape and wants more definition. It does not reduce fat and it does not tighten loose skin, and it is not suitable for everyone. A consultation determines whether it is appropriate for you.",
        ],
        list: [
          "Abdominal muscle tone and core definition",
          "Buttock tone and shape",
          "Thigh muscle tone, front and back",
          "Upper arm tone",
          "Calf and lower-leg tone",
          "Core support as part of a wider strengthening plan, including after a period of inactivity",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "It is aimed at people whose concern is definition and tone rather than volume of fat. If a layer of fat sits over the muscle, strengthening what is underneath will not change what is above it. Your doctor may discuss pairing it with a separate fat-reduction treatment, or addressing that first. It is likewise not appropriate as a way of avoiding exercise or managing weight; it is best thought of as something that sits alongside your own activity.",
          "Because the technology is magnetic, metal and electronic implants matter a great deal. Schwarzy is generally not used in people with a cardiac pacemaker, implanted defibrillator, neurostimulator, drug pump, metal implants, plates, screws, coils or an intrauterine device in or near the treatment area, and it may not be appropriate during pregnancy, with epilepsy or seizure history, with a hernia in the area, with active infection or malignancy, or with certain heart, kidney or bleeding conditions. Please declare every implant, device and medication along with your full medical history at consultation so the doctor can advise safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "A visit starts with a doctor consultation, an assessment of the area and a review of your implant and medical history, since that is the main gate on suitability. If Schwarzy is appropriate you stay fully clothed or lightly draped, the pad is positioned and secured over the target muscle group, and the intensity is raised gradually. You will feel the muscle tense and release repeatedly in a way that feels strange at first but not painful; there are no needles and no anaesthetic.",
          "A session commonly runs around half an hour per area, and treatment is typically planned as a course of several sessions over a few weeks, spaced so the muscle has time to recover between visits, much as you would space training. Occasional maintenance sessions afterwards are common, since muscle tone gained is not held indefinitely without ongoing stimulus or activity. Your doctor will set out a realistic schedule at consultation.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "There is generally no downtime and most people return to usual activities immediately, though this varies between individuals. The most common after-effect is muscle soreness in the treated area over the following day or two, similar to the ache after unfamiliar exercise, sometimes with a brief sensation of tightness or fatigue in the muscle.",
          "Staying hydrated, keeping up gentle movement and allowing the muscle a recovery day are usually advised, and your doctor will tell you how to space it around your own training. Aftercare guidance is given specific to you and the area treated.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any medical procedure, Schwarzy carries risks, which are explained during consultation. Temporary effects can include muscle soreness, aching or cramping in the treated area, transient muscle fatigue, mild redness or warmth where the pad sat, and occasionally a temporary change in skin sensation. Serious effects are uncommon when the treatment is appropriately selected, particularly when implants, pregnancy and seizure history have been properly screened, and performed by a trained doctor, who will explain how any problem would be managed.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "Cost is driven by how many muscle groups you want addressed, how many sessions the plan calls for and whether maintenance sessions are included, since tone is not held indefinitely without ongoing stimulus. A single area over a short course sits at one end of the range; a multi-area plan with maintenance at the other. If your goals involve both fat and tone, the plan will likely combine treatments, and that combination is what determines the overall figure.",
          "Pricing is discussed at consultation rather than quoted online, so any estimate reflects your actual plan. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does Schwarzy reduce fat or help with weight loss?",
        a: "No. Schwarzy is a muscle-stimulation device: it acts on muscle tone and definition, not on fat, and it is not a weight-loss treatment or a substitute for diet, exercise or medical weight management. If fat is your concern, it pairs with a separate fat-reduction treatment rather than replacing one. Your doctor will explain at consultation which approach, or combination, actually fits your goal.",
      },
      {
        q: "Can I have Schwarzy if I have metal implants, a pacemaker or an IUD?",
        a: "Generally no, or not in that area. Because the stimulus is a magnetic field, implanted electronic devices such as pacemakers, defibrillators, neurostimulators and drug pumps, as well as metal implants, plates, screws and intrauterine devices, are important contraindications. This is why you must declare every implant and device before treatment. The doctor screens for this at consultation and will tell you clearly whether it can proceed.",
      },
      {
        q: "How is it different from doing the exercise myself?",
        a: "The contractions are involuntary and are repeated at a rate and depth you cannot produce voluntarily, which is the mechanism the manufacturer describes for changing muscle tone. It is intended to work alongside your own activity, not to replace it: general fitness, cardiovascular health and weight management still come from exercise and diet. Your doctor will discuss how to fit it around your training at consultation.",
      },
      {
        q: "Is the effect permanent, and will I need top-ups?",
        a: "No muscle treatment is permanent. Tone gained through stimulation behaves like tone gained through training and gradually reduces without ongoing stimulus or activity, which is why occasional maintenance sessions are common after an initial course. Outcomes vary between individuals. Your doctor will outline a realistic maintenance plan at consultation.",
      },
    ],
    reviewedBy: "dr-calvin-tan",
    lastReviewed: "2026-07-18",
    seoTitle: "Schwarzy Em-Fit Muscle Toning Treatment Malaysia | Kaiteki",
    seoDescription:
      "Schwarzy (Em-Fit) by DEKA uses flat magnetic stimulation for muscle tone, not fat reduction. Book a free consultation at Kaiteki to check your suitability.",
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
      "A hyaluronic acid injectable made with IBSA's NAHYCO hybrid technology, used within skin-booster treatment for hydration and skin remodelling rather than contour.",
    sections: [
      {
        heading: "What is Profhilo?",
        body: [
          "Profhilo is an injectable hyaluronic acid (HA) product made by IBSA, an Italian pharmaceutical group. It sits in the skin-booster category rather than the dermal-filler category: it is not designed to add contour or reshape a feature, but to be placed into the skin so that HA is distributed through the tissue. The manufacturer describes this purpose as bio-remodelling.",
          "What makes Profhilo mechanically distinct from other HA injectables is how the HA itself is prepared. IBSA describes its NAHYCO® Hybrid Technology as a patented thermal process in which high-molecular-weight and low-molecular-weight hyaluronic acid are bound into stable hybrid cooperative complexes by hydrogen bonds, without a chemical cross-linking agent such as BDDE. Whether Profhilo is an appropriate choice for you, and which product, quantity and technique are used, is a decision your doctor makes at an in-person consultation, not something that can be settled online.",
        ],
      },
      {
        heading: "How it works: NAHYCO hybrid complexes",
        body: [
          "IBSA states the composition as 32 mg of high-molecular-weight and 32 mg of low-molecular-weight hyaluronic acid in a 2 ml presentation, giving 64 mg of HA in total. The manufacturer associates the long-chain fraction mainly with water-binding and the short-chain fraction with signalling to the skin's own cells, and describes the hybrid complexes as spreading within the tissue rather than staying as a shaped bolus. Because there is no chemical cross-linker holding a gel structure, it behaves very differently from a contouring filler.",
          "The manufacturer also describes a standardised placement approach it calls Bio Aesthetic Points (BAP), a defined set of entry points chosen to sit in anatomically safer areas and to allow the product to distribute. How that is applied to your face, neck or body, the points used, the amount, the depth and the number of visits, is determined entirely by the treating doctor after assessing you. Changes develop gradually over weeks and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Profhilo is commonly considered where the concern is skin quality and firmness rather than lost volume or a change in shape. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
          "Concerns it is typically directed at include:",
        ],
        list: [
          "Dehydrated, dull-looking skin on the face",
          "Mild skin laxity and loss of firmness or tone",
          "Crepey skin texture on the neck and décolletage",
          "Fine lines associated with dryness rather than muscle movement",
          "Skin quality on the arms, hands or abdomen",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Profhilo is aimed at adults whose main concern is skin hydration, texture and firmness. If what you actually want is contour, a fuller cheek, a defined chin, a corrected hollow, a skin booster is the wrong category, and your doctor will say so rather than substituting one for the other. Because Profhilo works through hyaluronic acid rather than light or heat, skin tone is not a limiting factor in the way it can be with laser treatment, though this does not make it appropriate for everyone.",
          "It may not be suitable during pregnancy or breastfeeding, if you have a known hypersensitivity to hyaluronic acid products, if there is active infection, acne or inflammation at the intended site, if you have a bleeding disorder or take blood-thinning medication, or alongside certain autoimmune conditions. Please share your full medical history, medications, supplements and any previous injectable treatments at consultation so your doctor can advise safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "Every Profhilo session at Kaiteki starts with a doctor consultation and skin assessment, since Profhilo is used within Kaiteki's skin-booster treatment and is only one of several products a doctor may consider. If it is appropriate, the skin is cleansed and a topical anaesthetic may be applied for comfort. The doctor then places the product using the technique and points they judge suitable for you.",
          "The injecting itself is usually brief: the visit often takes well under an hour including preparation. The manufacturer describes an initial course of more than one visit spaced some weeks apart, followed by periodic maintenance, but the number of sessions and their spacing is not a fixed schedule and will be set by your doctor based on your skin and your response. Nothing about quantity, depth or interval should be decided in advance of assessment.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime is usually limited but varies. Small raised bumps at the entry points are expected immediately afterwards and typically settle within hours to about a day as the product distributes. Mild redness, tenderness or pinpoint bruising can also occur.",
          "Your doctor will give aftercare guidance specific to you, which commonly includes gentle skincare, sun protection and temporarily avoiding heat, strenuous exercise and pressure on the treated area. Follow their instructions rather than general advice found online.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any injectable procedure, Profhilo carries risks, which are explained during consultation. Temporary effects can include injection-site swelling, redness, bruising, tenderness and small palpable lumps. Less common effects include infection, prolonged swelling, nodules or hypersensitivity reactions, and vascular complications are rare but recognised with any facial injection. Serious effects are uncommon when the product is appropriately selected and administered by a trained doctor.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "The number of sessions and the overall cost depend on the area or areas being addressed (face, neck, décolletage, arms or abdomen all differ), the quantity of product your doctor judges appropriate, and whether maintenance visits form part of your plan over time.",
          "Pricing is discussed at consultation rather than quoted online, so any figure reflects your actual assessed plan rather than a generic package. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "How is Profhilo different from a dermal filler?",
        a: "Both are hyaluronic acid, but they are made and used for different purposes. Cross-linked fillers are formulated to hold a shape and are placed to change contour; Profhilo uses IBSA's NAHYCO hybrid complexes with no chemical cross-linker and is intended to distribute through the skin to address hydration and firmness. That means it is not a substitute for a filler, and your doctor will tell you at consultation which category actually fits your concern.",
      },
      {
        q: "Is Profhilo suitable for Asian skin tones?",
        a: "Profhilo works through hyaluronic acid rather than light or heat, so the pigment-related considerations that apply to lasers do not apply in the same way, and it is used across a range of skin tones. Suitability is still individual and depends on your skin condition, medical history and what you want to change. A doctor assesses this in person before recommending it.",
      },
      {
        q: "Does Profhilo hurt, and will the bumps be visible?",
        a: "Most people describe it as brief discomfort at the entry points, and a topical anaesthetic may be applied beforehand for comfort. Small raised bumps at those points are expected straight after and usually settle within hours to about a day, though this varies between individuals. Your doctor will explain what to expect for your skin and when to plan the visit around any commitments.",
      },
      {
        q: "Is Profhilo permanent?",
        a: "No. Hyaluronic acid is gradually broken down and resorbed by the body, so any change is temporary and not permanent. Some plans therefore include maintenance visits over time. How often, if at all, is something your doctor will discuss with you at consultation based on your skin and response.",
      },
    ],
    reviewedBy: "dr-lucas-chew",
    lastReviewed: "2026-07-18",
    seoTitle: "Profhilo Skin Booster Treatment in Malaysia | Kaiteki",
    seoDescription:
      "Profhilo is an IBSA hyaluronic acid injectable used within Kaiteki's skin-booster treatment for hydration and skin firmness. Book a free consultation.",
  },
  {
    slug: "rejuran",
    name: "Rejuran",
    group: "Injectables",
    type: "injectable",
    treatments: ["skin-booster"],
    image: "/images/technology/rejuran.jpg",
    summary:
      "A polynucleotide (salmon-derived PN) injectable range from Pharma Research, used within skin-booster treatment to support skin quality and the skin barrier.",
    sections: [
      {
        heading: "What is Rejuran?",
        body: [
          "Rejuran is a range of injectable polynucleotide (PN) products made by Pharma Research, a South Korean company. Polynucleotides are chains of purified DNA fragments; in Rejuran's case they are sourced from salmon, chosen by the manufacturer for its biocompatibility. This places Rejuran in a different skin-booster category from hyaluronic acid boosters: an HA booster is chosen mainly to hold water in the skin, whereas a polynucleotide product is directed at the skin's own repair and barrier environment.",
          "The range is not a single product. Alongside the original Rejuran, the manufacturer produces variants formulated for different purposes, including a scar-directed version (Rejuran S), an eye-area version, and a hybrid that combines polynucleotides with hyaluronic acid (Rejuran HB). Which variant is appropriate, whether Rejuran is the right category for you at all, and the amount and technique used are decisions the treating doctor makes after an in-person assessment.",
        ],
      },
      {
        heading: "How polynucleotides work",
        body: [
          "The manufacturer describes Rejuran's polynucleotides as purified, fragmented DNA chains that form a soft gel-like matrix once placed in the skin and that support fibroblast activity, the cells responsible for producing the skin's structural proteins. It is described as working with the skin's own repair processes rather than adding volume, which is why the intended change is in skin quality, texture and resilience rather than in shape. The hybrid variant adds hyaluronic acid so that a hydration component sits alongside the polynucleotide component.",
          "Delivery is by a series of small injections spread across the treatment area rather than a single placement, and a topical anaesthetic is commonly applied beforehand for comfort. The variant, the quantity, the distribution and the depth are all selected by the treating doctor for your skin and concern. Changes develop gradually over weeks and vary between individuals. Nothing here is a promised outcome.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Rejuran is commonly considered where the concern is skin quality and resilience rather than volume. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
          "Concerns it is typically directed at include:",
        ],
        list: [
          "Rough or uneven skin texture",
          "Fine lines and crepey skin, including around the eyes",
          "A sensitive or easily irritated skin barrier",
          "Enlarged-looking pores and general skin dullness",
          "Textural irregularity from acne scarring",
          "Thin-looking, dehydrated skin",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Rejuran is aimed at adults whose priority is skin quality rather than contour, and because it does not rely on light or heat, skin tone is not a limiting factor in the way it can be with laser treatment. It is used across a range of skin tones, though that does not make it appropriate for everyone. Because the polynucleotides are salmon-derived, you must tell your doctor if you have any fish or seafood allergy.",
          "It may not be suitable during pregnancy or breastfeeding, where there is active infection, an acne flare or inflammation at the intended site, if you have a tendency to keloid or hypertrophic scarring, if you have a bleeding disorder or take blood-thinning medication, or alongside certain autoimmune conditions. Please share your full medical history, allergies, medications and previous injectable treatments at consultation so your doctor can advise safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "Rejuran is used within Kaiteki's skin-booster treatment, and a session begins with a doctor consultation and skin assessment, including which variant, if any, suits your concern. If it is appropriate, the skin is cleansed and a topical anaesthetic is usually applied and left to take effect, which accounts for much of the appointment time.",
          "The doctor then places a series of small injections across the assessed area. Including preparation and numbing, a visit commonly runs from around half an hour to somewhat longer depending on the area. A course of several sessions spaced a few weeks apart is often described for polynucleotide treatment, but the number and spacing is set by your doctor for your skin rather than fixed in advance, and should not be treated as a guaranteed schedule.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime is usually short but genuinely visible for a period. Small raised bumps at each injection point are expected and commonly settle over roughly one to two days as the product disperses, though this varies. Redness, mild swelling and pinpoint bruising can also occur.",
          "Gentle skincare and diligent sun protection are advised afterwards, and your doctor will tell you when to resume actives, makeup, exercise and heat exposure. Follow their instructions for your skin rather than generic advice.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any injectable procedure, Rejuran carries risks, which are explained during consultation. Temporary effects can include injection-site bumps, swelling, redness, bruising and tenderness. Less common effects include infection, prolonged swelling, nodules or hypersensitivity reactions, and vascular complications are rare but recognised with any facial injection. Serious effects are uncommon when the product is appropriately selected and administered by a trained doctor.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "What drives session count and cost is which variant your doctor selects, the size and number of areas being addressed (a full face, the under-eye area and scar-focused work all differ), the quantity of product used, and how your skin responds over the course.",
          "Pricing is discussed at consultation rather than quoted online, so any figure reflects your assessed plan rather than a generic package. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between Rejuran and a hyaluronic acid skin booster like Profhilo?",
        a: "They are different materials aimed at different things. A hyaluronic acid booster is chosen mainly for water-binding and hydration in the skin, while Rejuran's polynucleotides are directed at the skin's own repair and barrier environment and at texture. Some patients are more suited to one, some to the other, and Rejuran's own hybrid variant combines both materials. Which category fits your concern is assessed by a doctor in person.",
      },
      {
        q: "Is Rejuran safe if I have a fish or seafood allergy?",
        a: "Rejuran's polynucleotides are salmon-derived, so any fish or seafood allergy must be declared before treatment. Your doctor will weigh that history and may advise against it or consider a different category of product. Never proceed without disclosing an allergy, and raise it explicitly at consultation.",
      },
      {
        q: "How long do the bumps after Rejuran last?",
        a: "Small raised bumps at each injection point are an expected part of the treatment rather than a complication. They commonly settle over roughly one to two days as the product disperses, though this varies between individuals and with the area treated. Your doctor will explain what to expect so you can time the appointment around any commitments.",
      },
      {
        q: "Which Rejuran variant do I need?",
        a: "That is not something to choose yourself. The range includes formulations intended for general skin quality, for the eye area, for scar-related texture, and a hybrid combined with hyaluronic acid. Your doctor selects the variant, if any is appropriate, based on an in-person assessment of your skin, your concern and your medical history.",
      },
    ],
    reviewedBy: "dr-jade",
    lastReviewed: "2026-07-18",
    seoTitle: "Rejuran Skin Booster Injectable Treatment Malaysia | Kaiteki",
    seoDescription:
      "Rejuran is a salmon-derived polynucleotide injectable used within Kaiteki's skin-booster treatment for skin texture and barrier. Book a free consultation.",
  },
  {
    slug: "plinest",
    name: "Plinest/Newest",
    group: "Injectables",
    type: "injectable",
    treatments: ["skin-booster"],
    image: "/images/technology/plinest.jpg",
    summary:
      "An Italian polynucleotide injectable range from Mastelli, made with PN-HPT technology and used within skin-booster treatment for skin quality and elasticity.",
    sections: [
      {
        heading: "What is Plinest/Newest?",
        body: [
          "Plinest and Newest are injectable polynucleotide products made by Mastelli, an Italian pharmaceutical company. Polynucleotides are chains of purified DNA fragments, and Mastelli's are derived from trout, a point of difference worth knowing, since the better-known Korean polynucleotide products are salmon-derived. The manufacturer's trademark for its extraction and purification process is PN-HPT™, which stands for Polynucleotides Highly Purified Technology, and it presents the purity grade of the polynucleotide chains as the defining feature of the range.",
          "The two names are not interchangeable products. Plinest is the polynucleotide formulation on its own; Newest is described by the manufacturer as combining PN-HPT with hyaluronic acid and mannitol, so a hydration component and an antioxidant component sit alongside the polynucleotides. The range also includes presentations intended for particular areas such as the eye region. Which product, if any in this category, suits you, and the quantity and technique used, is decided by the treating doctor after an in-person assessment.",
        ],
      },
      {
        heading: "How PN-HPT polynucleotides work",
        body: [
          "Polynucleotides are a different material from the hyaluronic acid used in hydration boosters and from the poly-lactic acid used in collagen-stimulating boosters. Mastelli describes PN-HPT as producing long polynucleotide chains that form a hydrating gel-like matrix in the skin and support fibroblast activity, the cells that produce the skin's structural proteins. The intention is a change in skin quality, elasticity and resilience rather than in contour or volume. In Newest, the added hyaluronic acid contributes water-binding, while the manufacturer associates mannitol with antioxidant, free-radical-scavenging properties.",
          "Delivery is by a series of small injections distributed across the treatment area. A topical anaesthetic is commonly applied beforehand for comfort. The formulation, the quantity, the distribution and the depth are all chosen by the treating doctor for your skin, your concern and the area involved. Changes develop gradually over weeks and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Plinest and Newest are commonly considered where the concern is the quality and elasticity of the skin itself rather than lost volume. Neither is suitable for everyone, and a consultation determines whether either is appropriate for you.",
          "Concerns the range is typically directed at include:",
        ],
        list: [
          "Thin, crepey or fragile-looking skin",
          "Reduced skin elasticity and firmness",
          "Fine lines, including in the periorbital area",
          "A reactive or easily irritated skin barrier",
          "Dehydrated, dull-looking skin",
          "Uneven skin texture on the face, neck or hands",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "The range is aimed at adults whose priority is skin quality rather than contour. Because it works through injected material rather than light or heat, skin tone is not a limiting factor in the way it can be with laser treatment, and it is used across a range of skin tones, though that does not make it appropriate for everyone. As the polynucleotides are fish-derived, you must declare any fish or seafood allergy before treatment.",
          "It may not be suitable during pregnancy or breastfeeding, where there is active infection, an acne flare or inflammation at the intended site, if you have a known hypersensitivity to hyaluronic acid or mannitol in the case of Newest, if you have a bleeding disorder or take blood-thinning medication, or alongside certain autoimmune conditions. Please share your full medical history, allergies, medications and previous injectable treatments at consultation so your doctor can advise safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "These products are used within Kaiteki's skin-booster treatment, so a visit begins with a doctor consultation and skin assessment that includes whether a polynucleotide product is the right category for you, and if so which formulation. If it is appropriate, the skin is cleansed and a topical anaesthetic is usually applied and left to take effect, which accounts for much of the appointment time.",
          "The doctor then places a series of small injections across the assessed area. Including preparation and numbing, a visit commonly runs from around half an hour upwards depending on the area. A course of several sessions spaced a few weeks apart is often described for polynucleotide treatment, but the number and the spacing are set by your doctor for your skin and response rather than fixed in advance, and should not be read as a promised schedule.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime is usually short but visible for a period. Small raised bumps at each injection point are expected and commonly settle within a day or two as the product disperses, though this varies between individuals and by area. Redness, mild swelling and pinpoint bruising can also occur.",
          "Gentle skincare and consistent sun protection are advised afterwards, and your doctor will tell you when to resume active skincare, makeup, exercise and heat exposure. Follow the aftercare they give you for your skin rather than generic advice.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any injectable procedure, Plinest and Newest carry risks, which are explained during consultation. Temporary effects can include injection-site bumps, swelling, redness, bruising and tenderness. Less common effects include infection, prolonged swelling, nodules or hypersensitivity reactions, and vascular complications are rare but recognised with any facial injection. Serious effects are uncommon when the product is appropriately selected and administered by a trained doctor.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "What drives session count and cost is which formulation your doctor selects, the number and size of areas being addressed (a full face, the eye area or the neck and hands all differ), the quantity of product used, and how your skin responds across the course.",
          "Pricing is discussed at consultation rather than quoted online, so any figure reflects your assessed plan rather than a generic package. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between Plinest and Newest?",
        a: "Plinest is the polynucleotide formulation on its own, made with Mastelli's PN-HPT technology. Newest is described by the manufacturer as PN-HPT combined with hyaluronic acid and mannitol, adding hydration and antioxidant components. The choice between them is not a matter of one being better; it depends on your skin and concern, and your doctor decides which is appropriate at consultation.",
      },
      {
        q: "How does Plinest differ from Rejuran?",
        a: "Both are polynucleotide skin boosters, but they come from different manufacturers and different sources: Mastelli's polynucleotides are trout-derived and use its PN-HPT purification technology, while Rejuran's are salmon-derived and made by Pharma Research in Korea. Their formulations and available variants also differ. Neither is presented here as superior: which one a doctor selects depends on your assessment, and that decision is theirs to make in person.",
      },
      {
        q: "Will Plinest or Newest add volume to my face?",
        a: "No. These are skin boosters, not fillers: the material is not formulated to hold a shape or restore contour, and the intended change is in skin quality and elasticity. If contour is what concerns you, a different category of treatment applies. Your doctor will tell you at consultation which category actually fits what you want to address.",
      },
      {
        q: "Can it be used around the eyes?",
        a: "The Mastelli range includes presentations intended for particular areas, including the periorbital region, and thin under-eye skin is one of the concerns polynucleotide products are commonly considered for. The eye area is delicate and not every patient is a candidate. Whether it is appropriate for your eye area, and which product is used, is determined by your doctor at an in-person consultation.",
      },
    ],
    reviewedBy: "dr-teresa-tan",
    lastReviewed: "2026-07-18",
    seoTitle: "Plinest/Newest Skin Booster Injectable Malaysia | Kaiteki",
    seoDescription:
      "Plinest and Newest are Mastelli PN-HPT polynucleotide injectables used within Kaiteki's skin-booster treatment for skin quality. Book a free consultation.",
  },
  {
    slug: "juvelook",
    name: "Juvelook",
    group: "Injectables",
    type: "injectable",
    treatments: ["skin-booster"],
    image: "/images/technology/juvelook.png",
    summary:
      "A Korean collagen-stimulating injectable combining PDLLA microspheres with non-crosslinked hyaluronic acid, used within skin-booster treatment for pore, texture and fine-line concerns.",
    sections: [
      {
        heading: "What is Juvelook?",
        body: [
          "Juvelook is an injectable made by VAIM, a South Korean manufacturer. It belongs to a third skin-booster category, distinct from the other two you are likely comparing it against: hyaluronic acid boosters are chosen mainly for water-binding, polynucleotide products such as Rejuran or Plinest work through purified DNA fragments, and Juvelook is a collagen-stimulating (biostimulator) product built around poly-D,L-lactic acid, abbreviated PDLLA.",
          "Mechanically, what distinguishes it is that it combines two things in one product: PDLLA microspheres, which act as the biostimulator, suspended in non-crosslinked hyaluronic acid, which acts as the carrier and contributes hydration. It is supplied as a lyophilised (freeze-dried) powder that is reconstituted before use, and the manufacturer produces more than one concentration in the range, including a higher-concentration version intended as a volume biostimulator rather than a skin-quality booster. Which product, what quantity and what technique are used are decisions your doctor makes after an in-person assessment.",
        ],
      },
      {
        heading: "How PDLLA collagen stimulation works",
        body: [
          "Poly-D,L-lactic acid is a resorbable polymer. As microspheres, it is not intended to act as a space-filling gel; the manufacturer's premise is that the particles remain in the tissue for a period, during which they act as a stimulus for fibroblast activity, and are then gradually broken down by hydrolysis into lactic acid and cleared by the body over a period of months. That is why any change is described as developing gradually rather than appearing on the day, and why the hyaluronic acid carrier matters: it provides the immediate hydration component while the PDLLA component works on a much slower timescale.",
          "Because the product is reconstituted before use, the dilution, the quantity, the placement and the plane are entirely determined by the treating doctor for your skin and concern. This is not a fixed recipe, and it is not something a patient should specify. Changes develop gradually over weeks to months and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Juvelook is commonly considered where the concern is overall skin quality and firmness rather than a change in contour. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
          "Concerns it is typically directed at include:",
        ],
        list: [
          "Enlarged-looking pores",
          "Uneven or rough skin texture",
          "Fine lines and crepey skin",
          "Thin-looking skin and loss of firmness",
          "Textural irregularity from acne scarring",
          "General dullness and poor skin quality",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Juvelook is aimed at adults who want a change in skin quality and are willing to wait for a gradual one. If you are looking for an immediate visible difference, or for contour correction, this is the wrong category and your doctor will say so. Because it works through injected material rather than light or heat, skin tone is not a limiting factor in the way it can be with laser treatment.",
          "Biostimulators have their own contraindications. Juvelook may not be suitable during pregnancy or breastfeeding, where there is active infection, an acne flare or inflammation at the intended site, if you have a tendency to keloid or hypertrophic scarring, if you have a history of nodules or granulomatous reactions to previous biostimulator or filler treatment, if you have a bleeding disorder or take blood-thinning medication, or alongside certain autoimmune conditions. Please share your full medical history, allergies, medications and every previous injectable you have had at consultation so your doctor can advise safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "Juvelook is used within Kaiteki's skin-booster treatment, so a visit begins with a doctor consultation and skin assessment, including whether a collagen-stimulating product suits your concern, or whether a hydrating or polynucleotide booster would be the more sensible starting point. If Juvelook is appropriate, the product is prepared, the skin is cleansed and a topical anaesthetic is usually applied and left to take effect.",
          "The doctor then places the product across the assessed area. Including preparation and numbing, a visit commonly runs from around half an hour upwards. Biostimulator treatment is typically described as a course of more than one session spaced several weeks apart, with the change appearing over months rather than days, but the number of sessions and the interval between them are set by your doctor based on your skin and your response, not by a standard schedule.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime is usually short but varies. Redness, mild swelling, small bumps at injection points and pinpoint bruising can occur and commonly settle over a few days. Some tenderness in the treated area is also possible in the days afterwards.",
          "Your doctor will give aftercare guidance specific to you, which for biostimulator treatment may include instructions on skincare, sun protection, and temporarily avoiding heat, strenuous exercise and pressure on the area. Follow their instructions precisely rather than advice found online, and contact the clinic if anything concerns you.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any injectable procedure, Juvelook carries risks, which are explained during consultation. Temporary effects can include swelling, redness, bruising, tenderness and small palpable bumps. Less common effects include infection, prolonged swelling, persistent nodules or granuloma formation (a recognised consideration with collagen-stimulating products generally), and hypersensitivity reactions, while vascular complications are rare but recognised with any facial injection. Serious effects are uncommon when the product is appropriately selected and administered by a trained doctor.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "What drives session count and cost is the number and size of areas being addressed, the quantity of product your doctor judges appropriate, which concentration in the range is used, and how gradually your skin responds across the course. Because the effect of a biostimulator builds over months, plans are usually reviewed between sessions rather than fixed at the outset.",
          "Pricing is discussed at consultation rather than quoted online, so any figure reflects your assessed plan rather than a generic package. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "How is Juvelook different from Rejuran or a hyaluronic acid skin booster?",
        a: "They are three different materials. A hyaluronic acid booster is chosen mainly for hydration, Rejuran's polynucleotides are directed at the skin's repair and barrier environment, and Juvelook's PDLLA microspheres act as a collagen-stimulating agent with hyaluronic acid as the carrier. That also means Juvelook works on a slower timescale than a purely hydrating booster. Which category fits your concern is assessed by a doctor in person, and some plans consider more than one.",
      },
      {
        q: "How long before anything is visible, and is it permanent?",
        a: "Any hydration effect from the hyaluronic acid carrier is immediate but short-lived, while the PDLLA component is intended to work gradually over weeks to months as the polymer is broken down and cleared. Nothing about it is permanent: PDLLA is resorbable, and results vary between individuals. Your doctor will set out a realistic timeframe for your skin at consultation.",
      },
      {
        q: "Is Juvelook the same as Sculptra?",
        a: "They are not the same product. Both are poly-lactic-acid-based collagen stimulators, but they differ in polymer form, formulation and how they are prepared and used: Juvelook suspends PDLLA microspheres in non-crosslinked hyaluronic acid, and VAIM's range includes a separate higher-concentration product intended for volume rather than skin quality. Which is appropriate for you, if either, is a decision for your doctor after assessment.",
      },
      {
        q: "Can Juvelook cause lumps or nodules?",
        a: "Small bumps at injection points are common in the first days and usually settle. Persistent nodules are an uncommon but recognised consideration with collagen-stimulating products as a class, which is why your medical history and any previous injectable treatment matter. Your doctor will discuss this risk with you at consultation and how it is managed if it occurs.",
      },
    ],
    reviewedBy: "dr-chin-wei-horng",
    lastReviewed: "2026-07-26",
    seoTitle: "Juvelook PDLLA Skin Booster Treatment Malaysia | Kaiteki",
    seoDescription:
      "Juvelook is a PDLLA collagen-stimulating injectable used within Kaiteki's skin-booster treatment for pore and texture concerns. Book a free consultation.",
  },
  {
    slug: "hydrodeluxe",
    name: "Hydrodeluxe",
    group: "Injectables",
    type: "injectable",
    treatments: ["skin-booster"],
    image: "/images/technology/hydrodeluxe.jpg",
    summary:
      "A non-crosslinked hyaluronic acid hydrogel enriched with calcium hydroxyapatite and amino acids, used within skin-booster treatment for hydration and skin quality.",
    sections: [
      {
        heading: "What is Hydrodeluxe?",
        body: [
          "Hydrodeluxe is the injectable skin booster marketed under the Neauvia brand as Hydro Deluxe, manufactured by Matex Lab in Italy. It sits in the hyaluronic acid family of skin boosters (the category chosen primarily for hydration and skin quality), rather than among the polynucleotide products such as Rejuran or Plinest, or the collagen-stimulating poly-lactic-acid products such as Juvelook. Because clinics sometimes shorten or vary the trade name, it is worth confirming at consultation exactly which product is being used.",
          "What distinguishes it within the hyaluronic acid category is the rest of the formulation. The manufacturer describes it as a biodegradable linear hyaluronic acid hydrogel (non-crosslinked, so not designed to hold a shape) enriched with calcium hydroxyapatite (CaHA) and with the amino acids glycine and L-proline. That places it a little apart from a plain hydrating booster. Whether it is the right product for you, and the quantity and technique used, is a decision the treating doctor makes after an in-person assessment.",
        ],
      },
      {
        heading: "How the formulation works",
        body: [
          "The hyaluronic acid component is linear and non-crosslinked, which means it is not formulated to resist spreading or to create structure the way a contouring filler is; the manufacturer describes it as a hydrogel intended to be placed into the skin and resorbed over time. Its role is water-binding, supporting hydration and, through that, the look and feel of the skin surface. This is also why it is not an alternative to a filler and should not be discussed as one.",
          "The additional ingredients are what the manufacturer positions as the difference. Glycine and proline are the two amino acids most abundant in collagen, and the manufacturer includes them along with calcium hydroxyapatite, a mineral-based material used elsewhere in aesthetics as a collagen-stimulating agent. Here it appears in a hydrating, non-crosslinked hydrogel rather than as a volumising product. The quantity, distribution and depth are selected entirely by the treating doctor. Changes develop gradually and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Hydrodeluxe is commonly considered where the concern is skin hydration, density and general quality rather than contour. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
          "Concerns it is typically directed at include:",
        ],
        list: [
          "Dehydrated, dull or tired-looking skin",
          "Fine lines associated with dryness rather than muscle movement",
          "Loss of skin firmness and density",
          "Crepey texture on the neck and décolletage",
          "Rough or uneven skin texture on the face",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "It is aimed at adults whose priority is skin hydration and quality. If contour is what concerns you, this is the wrong category and your doctor will tell you so rather than substituting one for the other. Because it works through injected material rather than light or heat, skin tone is not a limiting factor in the way it can be with laser treatment, and it is used across a range of skin tones, though that alone does not make it appropriate for everyone.",
          "It may not be suitable if you have a known hypersensitivity to hyaluronic acid or to calcium hydroxyapatite, during pregnancy or breastfeeding, where there is active infection, an acne flare or inflammation at the intended site, if you have a bleeding disorder or take blood-thinning medication, if you have a tendency to keloid scarring, or alongside certain autoimmune conditions. Tell your doctor about any previous CaHA-based or filler treatment, along with your full medical history, allergies and medications, so they can advise safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "Hydrodeluxe is used within Kaiteki's skin-booster treatment, so a visit begins with a doctor consultation and skin assessment, including whether a hydrating booster is the sensible starting point for your concern or whether another category would be more appropriate. If it is suitable, the skin is cleansed and a topical anaesthetic may be applied for comfort.",
          "The doctor then places the product across the assessed area using the technique they judge appropriate. Including preparation, a visit is typically short, commonly well under an hour. A course of more than one session spaced some weeks apart, with occasional maintenance afterwards, is a common pattern for hydrating boosters, but the number of sessions and the interval are set by your doctor for your skin and response rather than promised in advance.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime is usually limited but varies between individuals. Small bumps at the injection points, redness, mild swelling, tenderness or pinpoint bruising can occur and commonly settle over a short period as the product distributes.",
          "Gentle skincare and consistent sun protection are advised afterwards. Your doctor will tell you when to resume makeup, active skincare, exercise and heat exposure, and will give aftercare guidance specific to your skin and the area treated.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any injectable procedure, Hydrodeluxe carries risks, which are explained during consultation. Temporary effects can include injection-site swelling, redness, bruising, tenderness and small palpable bumps. Less common effects include infection, prolonged swelling, nodules or hypersensitivity reactions, and vascular complications are rare but recognised with any facial injection. Serious effects are uncommon when the product is appropriately selected and administered by a trained doctor.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "What drives session count and cost is the number and size of areas being addressed (face, neck and décolletage all differ), the quantity of product your doctor judges appropriate, and whether maintenance visits form part of your plan over time.",
          "Pricing is discussed at consultation rather than quoted online, so any figure reflects your assessed plan rather than a generic package. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Hydrodeluxe a filler?",
        a: "No. The hyaluronic acid in it is linear and non-crosslinked, so it is not formulated to hold a shape or restore contour the way a cross-linked filler is; it is a skin booster intended for hydration and skin quality. If contour is your concern, a different category of product applies. Your doctor will tell you at consultation which category actually fits what you want to address.",
      },
      {
        q: "How does Hydrodeluxe differ from Profhilo?",
        a: "Both are hyaluronic acid skin boosters from Italian manufacturers, but the formulations differ: Profhilo is built on IBSA's NAHYCO hybrid complexes of high and low molecular weight HA, while Hydrodeluxe is a non-crosslinked HA hydrogel that the manufacturer enriches with calcium hydroxyapatite and the amino acids glycine and L-proline. Neither is presented here as superior. Which one a doctor selects depends on your skin, your concern and your history, assessed in person.",
      },
      {
        q: "What do the added amino acids and calcium hydroxyapatite do?",
        a: "Glycine and proline are the amino acids most abundant in collagen, and calcium hydroxyapatite is a mineral-based material used elsewhere in aesthetics as a collagen-stimulating agent; the manufacturer includes all three alongside the hyaluronic acid. What this means for your skin specifically is not something that can be promised, as responses vary between individuals. Your doctor will explain what is realistic for you at consultation.",
      },
      {
        q: "How many Hydrodeluxe sessions are typical?",
        a: "It varies. A short course of sessions spaced some weeks apart, with occasional maintenance afterwards, is a common pattern for hydrating boosters, but nothing about it is fixed. The plan depends on the areas treated, your skin and how it responds. Your doctor will outline a realistic plan at consultation.",
      },
    ],
    reviewedBy: "dr-yvonne-chuah",
    lastReviewed: "2026-07-18",
    seoTitle: "Hydrodeluxe Hydrating Skin Booster Malaysia | Kaiteki",
    seoDescription:
      "Hydrodeluxe is a non-crosslinked hyaluronic acid injectable used within Kaiteki's skin-booster treatment for hydration and skin quality. Book a free consultation.",
  },
  {
    // Botox is a prescription medicine, not a device or cosmetic. Copy stays
    // factual and mechanism-level: no efficacy, longevity or outcome claims, no
    // pricing, no "packages", and every line defers dose and suitability to an
    // in-person doctor assessment (docs/02 §8).
    slug: "botox",
    name: "Botox",
    group: "Injectables",
    type: "injectable",
    treatments: ["botulinum-toxin"],
    image: "/images/technology/botox.png",
    device: "Botox",
    summary:
      "A registered botulinum toxin type A injectable (onabotulinumtoxinA) from Allergan, used within botulinum toxin treatment and dosed in units by a doctor.",
    reviewedBy: "dr-chang-chee-seong",
    lastReviewed: "2026-07-24",
    seoTitle: "Botox in Malaysia | Kaiteki Skin Aesthetic Clinic",
    seoDescription:
      "Botox is a registered botulinum toxin type A injectable used at Kaiteki within doctor-assessed botulinum toxin treatment. Book a free consultation on WhatsApp.",
    sections: [
      {
        heading: "What Botox is",
        body: [
          "Botox is a brand of botulinum toxin type A, developed by Allergan (now part of AbbVie). Its active substance is onabotulinumtoxinA, a purified protein produced by the bacterium Clostridium botulinum. It is one of several registered botulinum toxin products, and the one most people have heard of. The name is often used loosely to mean any botulinum toxin treatment, which it is not.",
          "It is supplied as a sterile powder in single-use vials, kept refrigerated and reconstituted with sterile saline by the doctor immediately before treatment. Alongside aesthetic use, botulinum toxin type A has a long clinical history in neurology and ophthalmology, and Botox specifically holds registered indications for conditions including excessive underarm sweating and chronic migraine.",
        ],
      },
      {
        heading: "How it is dosed",
        body: [
          "Dosing is measured in units, not millilitres, and units are specific to each product: Botox units cannot be converted to another brand's units, and the two are not interchangeable. This is why comparing brands or clinics on unit count alone is misleading.",
          "The number of units, the injection points and the depth are clinical decisions your doctor makes after examining the area at rest and in movement. They depend on the muscle being treated, your anatomy and your assessment, so they are not set from a menu or quoted before a consultation.",
        ],
      },
      {
        heading: "How it is handled at Kaiteki",
        body: [
          "Kaiteki uses product registered with Malaysia's National Pharmaceutical Regulatory Agency, sourced through licensed channels and stored under the cold-chain conditions the manufacturer specifies. Vials are reconstituted for a single patient and used within the stated window. Nothing is pooled or carried over between patients.",
          "As a prescription medicine, it is prescribed and administered by a registered doctor after an in-person assessment. It is never given by a therapist acting alone and never supplied for you to take away or inject yourself.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Botox the same as botulinum toxin?",
        a: "Botox is one registered brand of botulinum toxin type A, not a separate treatment. Several brands are registered in Malaysia and they differ in formulation and unit potency. Your doctor will tell you which product they are recommending for you and why at consultation.",
      },
      {
        q: "Can I ask for a specific number of units?",
        a: "You can raise it, but dose is a clinical decision. Your doctor examines how the muscles in the area move before deciding units and placement, and will explain what they are recommending. Units are also product-specific, so a figure quoted for another brand or clinic does not transfer.",
      },
      {
        q: "Is Botox permanent?",
        a: "No. The effect is temporary: nerve signalling gradually returns and the treated muscle or gland resumes its usual activity. How long that takes varies between individuals, so treatment is planned as a repeating cycle and reviewed by your doctor rather than set to a fixed schedule.",
      },
    ],
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
      sections: [
        {
          heading: "What is Sculptra?",
          body: [
            "Sculptra is an injectable collagen stimulator made by Galderma. Its active material is poly-L-lactic acid (the manufacturer refers to its particle form as PLLA-SCA) supplied as a dry powder that the clinic reconstitutes with sterile water before use. It sits in the bio-stimulator category rather than the dermal filler category, and that distinction matters if you are comparing options: a hyaluronic acid filler adds volume the moment it is placed, whereas Sculptra is intended to work by prompting your own collagen response over a period of months.",
            "Because of that mechanism, Sculptra is generally considered where the concern is overall firmness and skin quality across a region, the cheek area, for example, rather than reshaping a single line on the day. Whether it is an appropriate choice for you, and whether a filler or a different bio-stimulator would suit your concern better, is a clinical decision your doctor makes at an in-person consultation.",
          ],
        },
        {
          heading: "How poly-L-lactic acid works",
          body: [
            "Poly-L-lactic acid is a synthetic, bioresorbable material that has long been used in absorbable medical sutures. Once injected, the PLLA particles are gradually broken down and cleared by the body; while that happens, they act as a stimulus for the skin's own collagen-forming activity. The reconstituting fluid is absorbed relatively quickly, so any immediate change you see straight after a session is not the treatment effect: the intended change develops slowly as new collagen is laid down.",
            "This is why Sculptra is planned as a short course rather than a single visit, and why the manufacturer's own materials describe change appearing over weeks to months rather than immediately. Product choice, the number of sessions, the depth and the amount used are all decided by the treating doctor after examining you. Kaiteki does not publish dose guidance, because it is not something a reader should self-prescribe. Results develop gradually and vary between individuals.",
          ],
        },
        {
          heading: "What it may help address",
          body: [
            "Within Kaiteki's bio-stimulator treatment, Sculptra is commonly considered for concerns related to gradual loss of firmness and structural support. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
          ],
          list: [
            "Loss of firmness and definition across the cheek region",
            "Nasolabial folds and other established facial folds",
            "General laxity and thinning skin quality on the face",
            "Softening of the jawline contour",
            "Temple and mid-face hollowing associated with volume loss",
            "Crepey texture on the face where a filler-based approach is not appropriate",
          ],
        },
        {
          heading: "Suitability & who should avoid it",
          body: [
            "Sculptra is aimed at adults who accept a gradual, staged approach and are not looking for an immediate change. It suits people who prefer to build support progressively, and it is used across a range of skin tones because the mechanism is biological rather than light-based, so skin tone is not the limiting factor it can be with lasers. Your existing facial structure, skin thickness and how much support has already been lost all influence whether it is the right category of product for you.",
            "Sculptra is not appropriate for anyone with a known allergy to its components, and the manufacturer advises against use in people with a history of keloid or hypertrophic scarring. It is not used in pregnancy or while breastfeeding, or where there is active infection or inflammation in the intended treatment area. Bleeding disorders, blood-thinning medication, autoimmune conditions and previous injectable treatments in the same area are all relevant. Please share your full medical history, medication list and any past injectable or surgical work at consultation so the doctor can advise safely.",
          ],
        },
        {
          heading: "The session at Kaiteki",
          body: [
            "A visit begins with a doctor consultation and facial assessment, where the concern, your history and the realistic time course are discussed. If Sculptra is appropriate, the product is reconstituted in advance per the manufacturer's instructions, the skin is cleansed and a topical anaesthetic or local anaesthetic is used for comfort. The injection itself typically takes a relatively short time: most of the appointment is assessment, preparation and aftercare discussion rather than the injecting.",
            "The doctor may massage the treated area afterwards and will explain the aftercare routine, including whether any at-home massage is advised for you. Sculptra is normally planned as a small number of sessions spaced a few weeks apart, with the response reviewed between visits. The exact number and spacing depend on your assessment, and your doctor will set out what to expect for your case.",
          ],
        },
        {
          heading: "Downtime & aftercare",
          body: [
            "Most people return to normal activity the same day, though this varies. Injection-site swelling, redness, tenderness or bruising is common in the first few days and usually settles; bruising can occasionally take longer to fade, which is worth planning around if you have an event coming up.",
            "Your doctor will advise on aftercare specific to you, which commonly includes avoiding pressure or vigorous facial treatments on the area for a short period, and following any massage instructions given. Because change develops over months, review appointments matter more here than with an immediate-result treatment: keep them, and raise anything unexpected with the clinic rather than waiting.",
          ],
        },
        {
          heading: "Risks & side effects",
          body: [
            "As with any injectable procedure, Sculptra carries risks, which are explained during consultation. Temporary effects can include swelling, redness, tenderness, bruising, bleeding at the injection site and small bumps under the skin. Delayed-onset lumps or nodules have been reported with poly-L-lactic acid products, sometimes months after treatment, and rare but serious vascular complications are recognised for facial injectables in general. These are uncommon when the treatment is appropriately selected and performed by a trained doctor using an assessed injection plan, and your doctor will explain the warning signs to report.",
          ],
        },
        {
          heading: "Sessions & cost factors",
          body: [
            "What drives cost is the area being addressed, how much structural support has been lost, how many sessions your plan involves and how your skin responds between visits. Because Sculptra is a staged treatment, the plan is best understood as a course rather than a single appointment, and some people choose occasional maintenance later.",
            "Pricing is discussed at consultation rather than quoted online, so any figure you are given reflects your actual assessed plan rather than a generic package. Message us on WhatsApp to arrange a consultation.",
          ],
        },
      ],
      faqs: [
        {
          q: "How is Sculptra different from a hyaluronic acid filler?",
          a: "A hyaluronic acid filler adds volume in the moment it is placed and can often be dissolved if needed. Sculptra instead works through poly-L-lactic acid, which is gradually resorbed while acting as a stimulus for your own collagen, so change is intended to appear over weeks to months and it cannot be dissolved in the same way. Neither category is better in the abstract: they answer different concerns, and your doctor will advise which fits yours at consultation.",
        },
        {
          q: "How soon would I notice a change after Sculptra?",
          a: "Not immediately. The fluid used to reconstitute the product is absorbed within days, so early appearance is not the treatment effect. The intended change develops gradually over a period of months as the collagen response builds, and it varies considerably between individuals. Your doctor will set out a realistic time course for your own plan at consultation.",
        },
        {
          q: "Does Sculptra hurt, and is anaesthetic used?",
          a: "It involves injections, so some discomfort is expected. Topical or local anaesthetic is commonly used to make the session more comfortable, and tenderness afterwards is normal for a few days. Your doctor will discuss comfort measures with you beforehand and can adjust the approach if you are needle-anxious.",
        },
        {
          q: "Is Sculptra permanent?",
          a: "No. The poly-L-lactic acid itself is bioresorbable and is broken down and cleared by the body. Any change comes from your own collagen response, which continues to age normally afterwards, so the effect is not permanent and duration is not guaranteed: how long it holds differs between individuals. Your doctor will discuss review and any maintenance at consultation.",
        },
      ],
      reviewedBy: "dr-jamie-gan",
      lastReviewed: "2026-07-18",
      seoTitle: "Sculptra PLLA Bio-Stimulator Treatment Malaysia | Kaiteki",
      seoDescription:
        "Sculptra is a poly-L-lactic acid collagen stimulator used within Kaiteki's bio-stimulator treatment for gradual structural support. Book a free consultation.",
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
      sections: [
        {
          heading: "What is Ellansé?",
          body: [
            "Ellansé is an injectable implant whose active material is polycaprolactone, smooth PCL microspheres suspended in a carrier gel that the manufacturer describes as a carboxymethylcellulose-based gel. It is manufactured in the Netherlands and distributed by Sinclair, and its CE-marked intended use is subdermal implantation in the face for the correction of wrinkles and signs of facial ageing. Kaiteki uses it within its bio-stimulator treatment, alongside other bio-stimulator materials.",
            "What distinguishes Ellansé from a hyaluronic acid filler is the two-part behaviour the manufacturer describes: the carrier gel provides support when it is placed, while the PCL microspheres remain and act as a stimulus for the skin's own collagen response as they are gradually resorbed. So part of the intended change is immediate and part of it develops over months. Whether Ellansé, another bio-stimulator or a filler suits your concern is a clinical judgement your doctor makes at an in-person consultation.",
          ],
        },
        {
          heading: "How polycaprolactone works",
          body: [
            "Polycaprolactone is a synthetic, bioresorbable polymer already used in absorbable medical implants and sutures. In Ellansé the PCL is formed into uniform microspheres held in the carrier gel. The gel component is absorbed over time, leaving the microspheres in place; as those are gradually broken down and cleared, they act as a scaffold and stimulus around which the body forms its own collagen. That is why the manufacturer frames Ellansé as regenerative rather than purely volumising: the later part of the effect is your tissue, not the product.",
            "Ellansé is supplied as a range of variants (identified by the manufacturer as Ellansé-S through to Ellansé-E) which differ in how long the PCL microspheres take to be resorbed. The manufacturer describes the range as offering sustained duration from around twelve months at the shorter end up to several years at the longest, but individual response varies and duration is not guaranteed. Which variant is used, where it is placed and how much is used are decisions for the treating doctor after assessing your face, not something to choose from a website. Results develop gradually and vary between individuals.",
          ],
        },
        {
          heading: "What it may help address",
          body: [
            "Within Kaiteki's bio-stimulator treatment, Ellansé is commonly considered where the concern combines loss of structural support with declining skin quality. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
          ],
          list: [
            "Nasolabial folds and other established facial folds",
            "Loss of definition across the mid-face and cheek region",
            "Softening of the chin and jawline contour",
            "Temple hollowing associated with volume loss",
            "General facial laxity and thinning skin quality",
            "Marionette lines and the lower-face area",
          ],
        },
        {
          heading: "Suitability & who should avoid it",
          body: [
            "Ellansé is aimed at adults who want a staged, structural approach and understand that part of the change appears later rather than immediately. Because the mechanism is biological rather than light-based, skin tone is not a limiting factor in the way it can be for laser treatments, so it is used across a range of skin tones including Asian skin. Your facial anatomy, how much support has been lost and any previous injectable work in the area all influence whether it is appropriate.",
            "Ellansé is not appropriate for anyone with a known hypersensitivity to its components, and it is not used where there is active infection or inflammation at or near the intended site. It is not used in pregnancy or while breastfeeding. Bleeding disorders and blood-thinning medication, autoimmune or connective-tissue conditions, a history of keloid or hypertrophic scarring, and previous permanent or semi-permanent implants in the same area are all relevant considerations. Because polycaprolactone cannot be dissolved the way hyaluronic acid can, careful assessment before treatment matters more, not less. Please share your full medical history, medication list and any past injectable or surgical treatments at consultation.",
          ],
        },
        {
          heading: "The session at Kaiteki",
          body: [
            "The visit starts with a doctor consultation and facial assessment, covering your concern, your medical history, which product category is appropriate and the realistic time course. If Ellansé is appropriate, the doctor selects the variant and plan, the skin is cleansed and prepared, and topical or local anaesthetic is used for comfort. The injection is carried out according to the assessed plan; the appointment as a whole is usually short, with most of the time spent on assessment and aftercare rather than injecting.",
            "The doctor may shape and massage the area afterwards and will explain aftercare. Many plans are built around a single treatment session with a review afterwards, though some people need more than one depending on the assessment and how the area responds. Your doctor will explain what to expect for you and when to come back for review.",
          ],
        },
        {
          heading: "Downtime & aftercare",
          body: [
            "Downtime is usually limited, but this varies. Swelling, redness, tenderness or bruising at the injection sites is common in the first days and typically settles; bruising can take longer to fade in some people, so it is worth planning around any upcoming event.",
            "Your doctor will give aftercare guidance for your case, which commonly includes avoiding pressure, vigorous massage, facial treatments, heat and strenuous exercise on the area for a short period, plus any specific instructions for the treated region. Because part of the intended change develops over months, attending the review appointment matters, and anything unexpected should be raised with the clinic promptly rather than left.",
          ],
        },
        {
          heading: "Risks & side effects",
          body: [
            "As with any injectable procedure, Ellansé carries risks, which are explained during consultation. The manufacturer lists possible effects including pain, swelling, redness, bruising, inflammation, infection, hypersensitivity reactions and nodule or lump formation, and recognises rare but serious complications associated with inadvertent intravascular injection during facial filler procedures. These are uncommon when the treatment is appropriately selected and performed by a trained doctor working to an assessed plan, and your doctor will explain which symptoms to report and how quickly.",
          ],
        },
        {
          heading: "Sessions & cost factors",
          body: [
            "Cost is driven by the area being addressed, how much structural support has been lost, the variant and quantity your doctor judges appropriate, and whether your plan involves more than one session. Because part of the effect develops over months, the plan is best understood as a course with review rather than a one-off purchase.",
            "Pricing is discussed at consultation rather than quoted online, so any figure reflects your actual assessed plan. Message us on WhatsApp to arrange a consultation.",
          ],
        },
      ],
      faqs: [
        {
          q: "How is Ellansé different from Sculptra?",
          a: "Both are bio-stimulators, but the material differs. Ellansé uses polycaprolactone microspheres in a carrier gel, so the manufacturer describes support from the gel when it is placed plus a collagen response as the PCL is resorbed. Sculptra uses poly-L-lactic acid, which is reconstituted before use and is intended to act more purely as a gradual collagen stimulus over a course of sessions. Which is appropriate for your concern is decided by your doctor at consultation, not by comparing materials online.",
        },
        {
          q: "Can Ellansé be dissolved if I change my mind?",
          a: "No. Unlike hyaluronic acid fillers, polycaprolactone has no dissolving agent: it is bioresorbable and is cleared by the body over time rather than reversed on demand. That is precisely why assessment beforehand is so important, and why the doctor talks through expectations and alternatives with you before proceeding. Raise any concerns at consultation before treatment.",
        },
        {
          q: "What do the different Ellansé variants mean?",
          a: "The manufacturer supplies Ellansé as a range of variants that differ in how long the PCL microspheres take to be resorbed, described as spanning around a year at the shorter end up to several years. Those are the manufacturer's figures for its product range, not a promise for any individual: response and duration vary and are not guaranteed. Which variant suits you, if any, is the treating doctor's decision after examining you in person.",
        },
        {
          q: "Is Ellansé suitable for Asian skin and facial structure?",
          a: "The mechanism is biological rather than light-based, so skin tone is not a limiting factor in the way it can be for lasers, and Ellansé is used across a range of skin tones. Facial structure does matter to planning, though, and mid-face and jawline proportions differ between individuals. A doctor assesses your anatomy, skin and medical history at consultation before advising whether it is appropriate.",
        },
      ],
      reviewedBy: "dr-jen-meng",
      lastReviewed: "2026-07-18",
      seoTitle: "Ellansé PCL Bio-Stimulator Treatment Malaysia | Kaiteki",
      seoDescription:
        "Ellansé is a polycaprolactone injectable implant used within Kaiteki's bio-stimulator treatment to support collagen gradually. Book a free consultation.",
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
      sections: [
        {
          heading: "What is Radiesse?",
          body: [
            "Radiesse is an injectable made by Merz Aesthetics. Its active material is calcium hydroxylapatite (CaHA) in the form of microspheres suspended in a gel carrier; the manufacturer describes CaHA as a mineral-like substance also found naturally in the body. It belongs to the bio-stimulator category rather than the hyaluronic acid filler category, and Kaiteki uses it within its bio-stimulator treatment.",
            "The buyer's distinction is what happens on the day versus what happens later. A hyaluronic acid filler adds volume immediately and can be dissolved if needed; a pure collagen stimulator such as a poly-L-lactic acid product works mainly over months. Radiesse sits between the two in behaviour: the manufacturer describes immediate volume correction from the gel carrier alongside stimulation of the skin's own collagen and elastin over time, with the CaHA microspheres being gradually resorbed. Whether that profile suits your concern is a clinical judgement your doctor makes at an in-person consultation.",
          ],
        },
        {
          heading: "How calcium hydroxylapatite works",
          body: [
            "Once placed, the gel carrier provides support immediately and is then absorbed, leaving the CaHA microspheres in the tissue. Those microspheres act as a stimulus around which the body forms its own collagen, and the manufacturer also describes an elastin response. The CaHA itself is bioresorbable (it is broken down into calcium and phosphate components and cleared over time), so what remains later is your own tissue response rather than the injected material.",
            "The manufacturer also describes a diluted application in which Radiesse is thinned with sterile saline so it can be spread across a broader area rather than used for focal support; this is the approach usually referred to as hyperdilute or HD Radiesse, and the manufacturer's own labelling covers a diluted preparation for the décolletage. Whether standard or diluted preparation is appropriate, at what dilution, where and in what quantity are all decisions for the treating doctor after examining you. Kaiteki does not publish dilution ratios, volumes or injection technique, because those are not choices a reader should make. Results develop gradually and vary between individuals.",
          ],
        },
        {
          heading: "What it may help address",
          body: [
            "Within Kaiteki's bio-stimulator treatment, Radiesse is commonly considered where structural support and skin quality are both part of the concern. The manufacturer's cleared indications include facial folds, the back of the hands, the décolletage in diluted form and jawline contour. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
          ],
          list: [
            "Nasolabial folds and other moderate to severe facial folds",
            "Loss of definition along the jawline",
            "Volume loss and visible structures on the back of the hands",
            "Crepey texture and fine lines on the décolletage",
            "Loss of firmness across the mid-face and cheek region",
            "General facial laxity associated with declining collagen support",
          ],
        },
        {
          heading: "Suitability & who should avoid it",
          body: [
            "Radiesse is aimed at adults who want structural support with a collagen response building afterwards, and it is one of the few injectables in this category with manufacturer-cleared use beyond the face, on the hands and décolletage. Because the mechanism is biological rather than light-based, skin tone does not limit suitability the way it can for laser treatments, so it is used across a range of skin tones. Your anatomy, how much support has been lost, the area concerned and any previous injectable work all influence whether it is appropriate.",
            "Radiesse is not appropriate for anyone with a known allergy or hypersensitivity to its components, and the manufacturer advises against use where there is a bleeding disorder or an active skin infection or inflammation at or near the intended site. It is not used in pregnancy or while breastfeeding. Blood-thinning medication, autoimmune and connective-tissue conditions, a history of keloid or hypertrophic scarring, and previous permanent or semi-permanent implants in the same area are all relevant. Calcium hydroxylapatite is radiopaque, which means it can be visible on some imaging. Tell your doctor if you are due to have imaging of the treated region. Please share your full medical history and medication list at consultation.",
          ],
        },
        {
          heading: "The session at Kaiteki",
          body: [
            "The visit begins with a doctor consultation and assessment of the area, your medical history and whether a bio-stimulator or a different category is the right answer for your concern. If Radiesse is appropriate, the doctor decides the preparation and plan, the area is cleansed, and topical or local anaesthetic is used for comfort. The injection is then carried out to the assessed plan: the injecting portion is usually brief, with most of the appointment given to assessment, comfort and aftercare.",
            "The area is commonly shaped or massaged afterwards, particularly on the hands, and your doctor will explain aftercare and when to return for review. Some plans are a single session with a review; others are staged over more than one visit depending on the area and how it responds. Your doctor will set out what to expect for your case.",
          ],
        },
        {
          heading: "Downtime & aftercare",
          body: [
            "Most people carry on with normal activity the same day, though this varies. Swelling, redness, tenderness, bruising or itching at the injection sites is common in the first days and generally settles; the manufacturer notes that lumps can occur after hand treatment and may take longer to resolve, which the doctor will discuss with you if the hands are being treated.",
            "Your doctor will give aftercare instructions specific to the area, commonly including avoiding pressure, vigorous massage, heat and strenuous exercise for a short period. Where the décolletage or hands are treated, sun protection on the area is advised. Raise anything unexpected with the clinic promptly rather than waiting for your review appointment.",
          ],
        },
        {
          heading: "Risks & side effects",
          body: [
            "As with any injectable procedure, Radiesse carries risks, which are explained during consultation. The manufacturer lists common effects including bruising, redness, swelling, pain and itching at the injection site, and notes that nodules may occur, particularly in hand treatment, and can persist for a period. Rare but serious vascular complications are recognised for facial injectables generally. These are uncommon when the treatment is appropriately selected and performed by a trained doctor working to an assessed plan, and your doctor will explain which symptoms warrant contacting the clinic immediately.",
          ],
        },
        {
          heading: "Sessions & cost factors",
          body: [
            "Cost is driven by the area treated (a single fold, a jawline, both hands or the décolletage are very different in scope), how much support has been lost, the quantity your doctor judges appropriate, and whether your plan is staged across more than one visit. Diluted applications over broader areas are often planned as a short course with review.",
            "Pricing is discussed at consultation rather than quoted online, so any figure reflects your actual assessed plan rather than a generic package. Message us on WhatsApp to arrange a consultation.",
          ],
        },
      ],
      faqs: [
        {
          q: "Is Radiesse a filler or a collagen stimulator?",
          a: "Both descriptions are used, which is why it confuses comparison shoppers. The manufacturer describes immediate volume correction from the gel carrier plus stimulation of your own collagen and elastin over time as the calcium hydroxylapatite microspheres are resorbed. That makes it behave differently from a hyaluronic acid filler and differently again from a purely gradual stimulator, and your doctor will explain which behaviour fits your concern at consultation.",
        },
        {
          q: "What is hyperdilute or HD Radiesse?",
          a: "It refers to Radiesse thinned with sterile saline so it can be spread more thinly across a broader area rather than used for focal structural support, the manufacturer's labelling covers a diluted preparation for the décolletage. Whether a diluted approach is appropriate for you, and at what dilution, is entirely the treating doctor's decision after in-person assessment. We do not publish dilution or volume guidance.",
        },
        {
          q: "Can Radiesse be used on the hands and chest, not just the face?",
          a: "The manufacturer's cleared indications include restoring volume to the back of the hands and, in diluted form, the décolletage, in addition to facial folds and jawline contour. Whether those areas are appropriate for you depends on your skin, your medical history and the assessment. A doctor examines the area in person before advising.",
        },
        {
          q: "How long does Radiesse last, and can it be reversed?",
          a: "Duration varies between individuals and is not something we quote as a promise: the calcium hydroxylapatite is bioresorbable and is cleared by the body over time, and your own tissue continues to age. Unlike hyaluronic acid fillers, it has no dissolving agent, so it cannot be reversed on demand, which is why careful assessment beforehand matters. Your doctor will discuss realistic expectations and review timing at consultation.",
        },
      ],
      reviewedBy: "dr-chloe-wan",
      lastReviewed: "2026-07-18",
      seoTitle: "Radiesse CaHA Bio-Stimulator Treatment Malaysia | Kaiteki",
      seoDescription:
        "Radiesse is a calcium hydroxylapatite injectable used within Kaiteki's bio-stimulator treatment for support and collagen. Book a free consultation.",
    },
  {
    slug: "juvederm",
    name: "Juvederm",
    group: "Injectables",
    type: "injectable",
    treatments: ["dermal-fillers"],
    image: "/images/technology/juvederm.jpg",
    summary:
      "A cross-linked hyaluronic-acid dermal filler range from Allergan Aesthetics, built on the manufacturer's VYCROSS® gel technology and spanning soft gels for fine lines through to firm gels used for structural contour.",
    sections: [
      {
        heading: "What is Juvéderm?",
        body: [
          "Juvéderm is a collection of injectable hyaluronic-acid (HA) dermal fillers made by Allergan Aesthetics, an AbbVie company. Hyaluronic acid occurs naturally in skin, and the HA in every Juvéderm gel is of non-animal origin. Because HA on its own would break down within days, it is chemically cross-linked into a gel so it can sit in the tissue and provide volume and support. Several Juvéderm gels are also supplied with lidocaine included to support injection comfort.",
          "What distinguishes Juvéderm from other HA ranges is not the raw ingredient (all four of the main filler families used at Kaiteki are cross-linked HA), but the gel engineering. Allergan Aesthetics markets most of the current range on a cross-linking platform it calls VYCROSS®, and the range is deliberately graded from soft, spreadable gels through to firm gels used where structural support is the goal. Juvéderm is used within Kaiteki's dermal fillers treatment. Which filler family suits you, if any, and which gel within it, is a clinical decision your doctor makes at an in-person consultation.",
        ],
      },
      {
        heading: "How VYCROSS® gel technology works",
        body: [
          "Allergan Aesthetics describes VYCROSS® as a cross-linking process that combines shorter-chain and longer-chain hyaluronic acid in the same gel, which the manufacturer says produces a smooth, cohesive gel. That cohesivity is the practical point for a comparison shopper: it influences how the gel behaves once placed: how readily it spreads, how much it resists deformation, and therefore which part of the face it is used in. The manufacturer also reports that tissue integration was demonstrated for gels including Volbella, Volift, Voluma and Volux in animal in-vivo studies.",
          "The range is graded by firmness rather than sold as one product. Softer, lower-firmness gels such as Volbella are used in delicate areas including the lips and perioral lines; mid-range gels such as Volift are used for facial lines and folds; firmer gels such as Voluma and Volux are used where projection and contour definition are the objective, for example the mid-face or jawline. Allergan Aesthetics states that duration in clinical studies varies by the area treated and the specific filler used. Product selection, placement and quantity are decided by the treating doctor after assessing your face in person. Results vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Juvéderm gels are commonly considered for the following concerns as part of an individually planned dermal filler treatment. Being on this list does not mean the treatment is appropriate for you. That is determined at consultation.",
        ],
        list: [
          "Loss of mid-face or cheek volume",
          "Nasolabial folds and marionette lines",
          "Lip volume and lip definition",
          "Perioral lines around the mouth",
          "Chin projection and jawline contour",
          "Under-eye hollowing, where clinically appropriate",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Juvéderm is aimed at adults seeking volume replacement or contour support rather than skin-surface texture change. The manufacturer notes that formulas in the collection were studied across Fitzpatrick skin types I to VI, and HA fillers are not light-based, so skin tone itself is not the limiting factor it can be with lasers. Suitability instead depends on your facial anatomy, your concern, and your medical history.",
          "The manufacturer advises against treatment where there is known hypersensitivity to hyaluronic acid or to lidocaine and amide-type local anaesthetics, a history of severe allergy or anaphylaxis, or active inflammation or infection at the intended site. Fillers are generally not used during pregnancy or breastfeeding. Tell your doctor about autoimmune conditions, blood-thinning or immune-modulating medication, previous filler or any permanent implant in the area, and any recent or planned laser, peel or dental work, so a full assessment can be made before anything is injected.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "Every filler visit begins with a doctor consultation: your concern, your medical history and an assessment of your facial proportions. If treatment is appropriate, the doctor discusses which areas to address and in what order, and explains the risks before you consent. The skin is cleansed and a topical anaesthetic may be applied; many Juvéderm gels also contain lidocaine, which contributes to comfort during injection. The gel is then placed in small increments using a needle or cannula, depending on the area and the doctor's judgement.",
          "Injection time for a single area is typically short, often within 15 to 30 minutes once preparation is complete, although a multi-area plan takes longer. Many plans are staged across more than one visit rather than treating everything at once, and a review appointment is commonly arranged so the doctor can assess how the area has settled. Product choice, placement and quantity are the treating doctor's decisions, never a fixed formula.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Most people return to normal activity the same day, but swelling, tenderness and bruising at injection points are common in the first few days and vary considerably between individuals: the lips and under-eye area tend to swell more visibly than the cheeks or jawline. If you have a significant event coming up, allow a comfortable margin and discuss timing at consultation.",
          "Your doctor will give aftercare guidance for the specific area treated. This usually includes avoiding pressure or massage on the treated site, keeping strenuous exercise, heat exposure and alcohol to a minimum for a short period, and contacting the clinic promptly rather than waiting if anything feels unusual.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "As with any injectable medical device, Juvéderm carries risks, and these are explained to you at consultation before you consent. Temporary effects can include redness, swelling, bruising, tenderness, firmness or small lumps at the injection site, and occasionally discolouration. Less common effects include infection, inflammatory nodules and delayed hypersensitivity. The most serious recognised risk of any dermal filler is vascular occlusion, filler entering or compressing a blood vessel, which can affect the skin or, rarely, vision. It is uncommon, but it is the reason fillers must be administered by a doctor trained in facial anatomy and in managing complications, and the reason you should report sudden pain, skin blanching or any visual change immediately. Hyaluronic-acid fillers such as Juvéderm can be dissolved with hyaluronidase where a doctor judges this clinically indicated.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "Filler cost is driven by how many areas are being addressed, which gel in the range is clinically appropriate for each of them, and how much product your anatomy actually calls for, which is why an online figure would be meaningless. Firmer structural gels and delicate-area gels are not interchangeable, so a plan is priced around what the doctor selects rather than a single per-area rate.",
          "Duration is finite: hyaluronic-acid fillers are gradually broken down by the body, and Allergan Aesthetics reports duration in clinical studies as varying by product and treatment area. Top-up intervals are individual and depend on the area, the gel used and your own metabolism. Pricing is discussed at consultation rather than quoted online, so any estimate reflects your actual plan. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between the Juvéderm gels, and how does the doctor choose?",
        a: "The range is graded by gel firmness rather than being one product. Softer gels are used in delicate areas such as the lips and fine perioral lines, while firmer gels are used where projection or contour definition is the objective, such as the mid-face, chin or jawline. Choosing between them depends on the area, your facial anatomy and how much support the tissue needs. That selection is your doctor's decision after an in-person assessment.",
      },
      {
        q: "Is Juvéderm safe for Asian skin tones?",
        a: "Hyaluronic-acid fillers do not rely on light or heat, so skin tone is not the limiting factor it can be with laser treatments, and the manufacturer notes the collection was studied across Fitzpatrick skin types I to VI. What matters far more is facial anatomy and your medical history. Your doctor assesses both at consultation before deciding whether filler is appropriate for you.",
      },
      {
        q: "Can Juvéderm be reversed if I do not like the result?",
        a: "Because Juvéderm is a hyaluronic-acid filler, it can be dissolved with an enzyme called hyaluronidase where a doctor judges this clinically indicated. This is a medical procedure with its own risks and assessment, not a routine undo button, and it is not appropriate in every situation. Discuss reversibility with your doctor before treatment so you understand what is and is not possible.",
      },
      {
        q: "How long does Juvéderm last?",
        a: "Hyaluronic-acid fillers are gradually broken down by the body, so the effect is not permanent. Allergan Aesthetics reports duration in clinical studies as varying according to which gel is used and which area is treated, and individual metabolism, the area's movement and the amount placed all influence it. Your doctor will give you a realistic expectation for your own plan at consultation.",
      },
    ],
    reviewedBy: "dr-say-wei-xian",
    lastReviewed: "2026-07-18",
    seoTitle: "Juvederm Dermal Filler Treatment in Malaysia | Kaiteki",
    seoDescription:
      "Juvederm is a hyaluronic-acid filler range using VYCROSS® gel technology, used at Kaiteki for volume and contour. Book a free consultation to check suitability.",
  },
  {
    slug: "restylane",
    name: "Restylane",
    group: "Injectables",
    type: "injectable",
    treatments: ["dermal-fillers"],
    image: "/images/technology/restylane.jpg",
    summary:
      "A hyaluronic-acid dermal filler range from Galderma built on two distinct gel technologies: firmer NASHA® gels for definition and flexible OBT™ gels for expressive areas.",
    sections: [
      {
        heading: "What is Restylane?",
        body: [
          "Restylane is a range of injectable hyaluronic-acid (HA) dermal fillers from Galderma. It is a stabilised, non-animal hyaluronic-acid range that Galderma states has been in clinical use for over 25 years. Like all HA fillers, the gel is cross-linked so it resists rapid breakdown and can provide volume, support or line softening once placed in the tissue.",
          "The distinguishing feature of Restylane for anyone comparing filler brands is that Galderma manufactures it using two different gel technologies rather than one: NASHA® and OBT™ (marketed as XpresHAn Technology™ in the US). Those two technologies behave differently in tissue, which is why the range covers both structural work and movement-heavy areas of the face. Restylane is used within Kaiteki's dermal fillers treatment. Whether filler suits you at all, and which gel would be appropriate, is assessed by a doctor at an in-person consultation.",
        ],
      },
      {
        heading: "How NASHA® and OBT™ gel technologies differ",
        body: [
          "Galderma describes NASHA® (Non-Animal Stabilised Hyaluronic Acid) as engineered for precision and structure: it uses minimal chemical modification and controlled particle sizing, producing a firmer gel that the manufacturer says is used to create projection and definition, for example lifting the cheeks, defining the jawline or the chin profile. In rheological terms this is the higher-firmness end of the range, where the gel is intended to hold its shape and resist the surrounding tissue rather than spread through it.",
          "OBT™ (Optimal Balance Technology) takes the opposite approach. Galderma describes OBT™ gels as softer and more flexible, with firmness varied by the degree of cross-linking, designed to integrate into the tissue and to suit dynamic, expressive areas such as the lips, cheeks and facial lines, or patients with thinner tissue coverage where a softer gel is preferred. The range therefore includes both: gels such as Lyft on the firmer side and gels such as Refyne, Defyne and Kysse on the flexible side. Neither approach is better than the other; they are suited to different jobs. Which technology and gel is used, where and in what amount, is decided by the treating doctor after in-person assessment. Results vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Restylane gels are commonly considered for the following concerns within an individually planned filler treatment. Appearing on this list does not mean the treatment is suitable for you; that is established at consultation.",
        ],
        list: [
          "Nasolabial folds and marionette lines",
          "Loss of cheek or mid-face volume",
          "Lip volume, shape and definition",
          "Chin profile and jawline definition",
          "Softening of static facial lines in mobile areas",
          "Loss of facial contour with age-related volume change",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Restylane is aimed at adults who want volume replacement, contour support or line softening. Because HA fillers do not use light or heat, skin tone is not the constraint it can be with laser treatments: the relevant factors are your facial anatomy, the mobility of the area concerned, and your medical history. The breadth of the range means the doctor can choose a firmer or more flexible gel to match the area, but breadth is not the same as universal suitability.",
          "Fillers are generally avoided in pregnancy and breastfeeding, and where there is active infection, inflammation or a skin lesion at the intended injection site. Tell your doctor if you have a history of severe allergy or anaphylaxis, known sensitivity to hyaluronic acid or to lidocaine and amide-type local anaesthetics, an autoimmune condition, a bleeding tendency or blood-thinning medication, previous filler or any permanent implant in the area, or a tendency to form abnormal scars. Please share your full medical history so the doctor can advise safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "A visit starts with a doctor consultation covering your concern, your medical history and an assessment of your facial proportions and tissue quality: the latter matters here, because it influences whether a firmer NASHA® gel or a more flexible OBT™ gel is the better fit. Risks are explained before you give consent. The area is cleansed and a topical anaesthetic may be used; several gels in the range are also available with lidocaine included for injection comfort.",
          "The gel is placed in small increments with a needle or cannula according to the area and the doctor's judgement. Injection for a single area is usually a matter of minutes rather than hours, with a typical appointment often running 15 to 30 minutes once preparation is done. Multi-area plans are frequently staged over more than one visit rather than completed in a single sitting, and a follow-up review is commonly arranged once swelling has settled.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Downtime is generally limited, though this varies between individuals. Swelling, tenderness, redness and bruising at injection points are common in the first few days, and mobile areas such as the lips tend to swell more noticeably than the cheeks or jawline. Plan a comfortable margin before any event that matters to you.",
          "Your doctor will give aftercare guidance specific to the area treated, which typically covers avoiding pressure or massage on the site, limiting strenuous exercise, saunas and alcohol briefly, and contacting the clinic straight away rather than waiting if anything feels unexpected.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "Restylane is an injectable medical device and carries risks, which are explained to you at consultation before you consent. Temporary effects can include swelling, bruising, redness, tenderness, firmness or small lumps at the injection site. Less common effects include infection, inflammatory nodules and delayed hypersensitivity reactions. The most serious recognised risk of any dermal filler is vascular occlusion, filler entering or compressing a blood vessel, which can affect the skin and, rarely, vision. It is uncommon, but it is precisely why filler must be administered by a doctor trained in facial anatomy and complication management, and why sudden pain, skin blanching or any change in vision should be reported immediately. Hyaluronic-acid gels such as Restylane can be dissolved with hyaluronidase where a doctor judges this clinically indicated.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "Cost depends on how many areas are being addressed, which gel technology and which specific gel the doctor selects for each of them, and how much product your anatomy calls for. A firmer structural gel used for jawline definition and a flexible gel used for lips are not interchangeable products, so a plan is costed around the clinical selection rather than a flat per-area rate.",
          "Hyaluronic-acid fillers are gradually broken down by the body, so the effect is not permanent and maintenance is individual: the area's movement, the gel used and your own metabolism all influence how long it lasts. Pricing is discussed at consultation rather than quoted online, so any figure reflects your actual plan. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between Restylane NASHA® and OBT™ gels?",
        a: "Galderma describes NASHA® as a firmer gel made with minimal modification and controlled particle sizing, used where projection and definition are the objective. OBT™ gels are softer and more flexible, intended to integrate into tissue and suited to expressive, mobile areas or thinner tissue coverage. Neither is superior: they are engineered for different jobs. Your doctor decides which is appropriate for your face at an in-person consultation.",
      },
      {
        q: "How does Restylane compare with other hyaluronic-acid filler brands?",
        a: "All the main filler families used at Kaiteki are cross-linked hyaluronic acid, so the meaningful difference is the gel technology rather than the ingredient. Restylane is distinctive in offering two separate technologies, a firmer particle-based gel and a flexible integrating gel, within one range. Which brand and gel is appropriate depends on the area being treated and your anatomy, and that is a clinical decision made at consultation.",
      },
      {
        q: "Does Restylane hurt, and is anaesthetic used?",
        a: "Most people describe filler injection as briefly uncomfortable rather than painful. A topical anaesthetic may be applied beforehand, and several gels in the range are available with lidocaine included to support comfort during injection. Sensitivity differs by area: lips are generally more sensitive than cheeks. Your doctor will discuss comfort options with you before starting.",
      },
      {
        q: "Can Restylane be used for the chin and jawline, or only for lines?",
        a: "The range spans both. Galderma states that firmer NASHA® gels are used where projection and definition are the goal, including the cheeks, chin profile and jawline, while the more flexible gels are used for lines and mobile areas such as the lips. Whether your chin or jawline is suited to filler at all depends on your underlying anatomy, which your doctor assesses in person before recommending anything.",
      },
    ],
    reviewedBy: "dr-jessie-lim",
    lastReviewed: "2026-07-18",
    seoTitle: "Restylane Dermal Filler Treatment Malaysia | Kaiteki",
    seoDescription:
      "Restylane is a hyaluronic-acid filler range built on NASHA® and OBT™ gel technologies, used at Kaiteki for volume and contour. Book a free consultation today.",
  },
  {
    slug: "belotero",
    name: "Belotero",
    group: "Injectables",
    type: "injectable",
    treatments: ["dermal-fillers"],
    image: "/images/technology/belotero.jpg",
    summary:
      "A hyaluronic-acid dermal filler range from Merz Aesthetics made with a two-phase dynamic cross-linking process, giving softer gels used for fine lines and delicate areas alongside firmer gels for volume.",
    sections: [
      {
        heading: "What is Belotero?",
        body: [
          "Belotero is a range of injectable hyaluronic-acid (HA) dermal fillers from Merz Aesthetics, the German aesthetics company. Hyaluronic acid is a substance that occurs naturally in skin; for use as a filler it must be cross-linked, because uncross-linked HA would break down within days. The Belotero range spans several gel densities, including Belotero Balance and Belotero Intense for lines and lip work, Belotero Volume for volume and contour such as cheeks and chin, and Belotero Revive, which the manufacturer positions for overall skin quality rather than volume.",
          "What sets Belotero apart from other HA ranges is how the gel is cross-linked. Merz Aesthetics states that, unlike HA fillers made with a single phase of cross-linking, Belotero uses a patented two-phase dynamic cross-linking process, the technology long marketed as Cohesive Polydensified Matrix (CPM®) and now presented as Belotero Biomimetic Matrix Technology. Belotero is used within Kaiteki's dermal fillers treatment. Whether it is appropriate for you, and which gel in the range, is decided by a doctor at an in-person consultation.",
        ],
      },
      {
        heading: "How the biomimetic matrix cross-linking works",
        body: [
          "In a standard process, HA strands are straightened out of their natural coiled form and cross-linked once with an ether to form a gel. Merz Aesthetics describes Belotero as going a step further: the cross-linked gel is expanded so that additional hyaluronic acid can be introduced and cross-linked in a second, dynamic phase. The manufacturer says this creates a three-dimensional structure with varying HA densities within the same gel, intended to mimic the natural detail of skin, hence the biomimetic description.",
          "For a comparison shopper the practical consequence is placement. A gel with lower firmness and good spread can be used more superficially and in delicate skin, which is why the softer Belotero gels are commonly discussed for fine lines and thin-skinned areas, while the firmer Belotero Volume gel is used where support and projection are the objective. That is a difference in engineering, not a ranking: a structural gel and a fine-line gel are simply built for different jobs. Gel choice, placement depth and quantity are the treating doctor's decisions, and results develop over the days after treatment and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Belotero gels are commonly considered for the following concerns as part of an individually planned filler treatment. Inclusion here does not mean the treatment is right for you. That is established at consultation.",
        ],
        list: [
          "Fine superficial lines and etched-in creases",
          "Nasolabial folds and marionette lines",
          "Lip volume, smoothness and definition",
          "Loss of cheek volume and mid-face flattening",
          "Chin shape and facial balance",
          "Skin quality and hydration in thin-skinned areas, where clinically appropriate",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Belotero is aimed at adults who want lines softened, volume replaced or contour supported. HA fillers do not use light or heat, so skin tone is not a limiting factor as it can be with lasers; anatomy, skin thickness and medical history matter far more. Thin, delicate skin, around the eyes or the perioral area, needs particular care with any filler regardless of brand, and whether it should be treated at all is a clinical judgement.",
          "Fillers are generally avoided in pregnancy and breastfeeding, and where there is active infection, inflammation or a skin lesion at the intended site. Tell your doctor about known hypersensitivity to hyaluronic acid or to lidocaine and amide-type local anaesthetics, a history of severe allergy or anaphylaxis, autoimmune conditions or immune-modulating treatment, bleeding tendency or blood-thinning medication, previous filler or any permanent implant in the area, a tendency to abnormal scarring, and any recent or planned laser, peel or dermabrasion. Please share your full medical history so the doctor can advise safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "Your visit begins with a doctor consultation: your concern, your medical history, and an assessment of your facial proportions and skin thickness: the latter is directly relevant to which Belotero gel would be appropriate. The doctor explains the risks before you consent. The skin is then cleansed and a topical anaesthetic may be applied; some gels in the range are supplied with lidocaine included to support comfort during injection.",
          "The gel is placed in small increments using a needle or a cannula, chosen according to the area and the doctor's judgement. A single-area appointment is usually short, often 15 to 30 minutes once preparation is complete, while a multi-area plan takes longer and is frequently staged across more than one visit rather than done all at once. A review appointment is commonly arranged so the doctor can assess the area after swelling has settled.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Most people carry on with their day afterwards, but redness, swelling, tenderness and bruising at injection points are common in the first few days and vary between individuals. Fine, superficial placement can leave small raised areas that settle over the following days, and mobile or thin-skinned areas such as the lips and perioral region tend to swell more visibly.",
          "Your doctor will give aftercare guidance for the specific area treated: typically avoiding pressure or massage on the site, keeping strenuous exercise, heat and alcohol to a minimum briefly, and contacting the clinic promptly rather than waiting if anything feels unusual.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "Belotero is an injectable medical device and carries risks, which are explained at consultation before you consent. Temporary effects can include swelling, bruising, redness, tenderness, firmness or small nodules at the injection site, and occasionally a bluish discolouration where filler sits very superficially. Less common effects include infection, inflammatory nodules and delayed hypersensitivity. The most serious recognised risk of any dermal filler is vascular occlusion, filler entering or compressing a blood vessel, which can affect the skin and, rarely, vision. It is uncommon, but it is exactly why filler must be administered by a doctor trained in facial anatomy and in managing complications, and why sudden pain, skin blanching or any visual change must be reported immediately. Hyaluronic-acid gels such as Belotero can be dissolved with hyaluronidase where a doctor judges this clinically indicated.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "Cost is driven by how many areas are addressed, which gel density in the range is clinically appropriate for each, and how much product your anatomy actually calls for. A fine-line gel and a volumising gel are different products with different roles, so a plan is costed around what the doctor selects rather than a single per-area figure.",
          "Hyaluronic-acid fillers are gradually broken down by the body, so the effect is not permanent, and maintenance intervals are individual: the area's movement, the gel used and your own metabolism all play a part. Some plans combine a softer gel superficially with a firmer gel for support, which also affects planning. Pricing is discussed at consultation rather than quoted online, so any estimate reflects your actual plan. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "What makes Belotero different from other hyaluronic-acid fillers?",
        a: "The ingredient is the same class (cross-linked hyaluronic acid), so the difference lies in the gel. Merz Aesthetics states that Belotero is made with a patented two-phase dynamic cross-linking process rather than a single phase, producing a gel with varying hyaluronic-acid densities that the manufacturer describes as biomimetic. Whether that makes it the right choice for your concern depends on the area and your skin, which your doctor assesses in person.",
      },
      {
        q: "Is Belotero suitable for very fine lines and thin skin?",
        a: "The softer gels in the Belotero range are commonly discussed for fine lines and delicate, thin-skinned areas, because a lower-firmness gel with good spread can be placed more superficially than a structural gel. That said, superficial placement carries its own considerations, including the risk of visible or bluish-looking filler. Whether your particular lines should be treated with filler at all is a clinical judgement your doctor makes at consultation.",
      },
      {
        q: "Which Belotero product would I need?",
        a: "That is not something to decide before being seen. The range covers several gel densities, from softer gels for lines and lip work to firmer gels for cheek and chin volume, plus a formulation the manufacturer positions for skin quality rather than volume. Product choice, placement and quantity are the treating doctor's decisions after assessing your face, skin thickness and goals in person.",
      },
      {
        q: "How soon will I look normal after Belotero, and how long does it last?",
        a: "Swelling and small injection-point marks are usual for the first few days and settle at different rates in different people, so allow a comfortable margin before any important event. Hyaluronic-acid filler is gradually broken down by the body, so it is not permanent, and duration varies with the gel used, the area's movement and your own metabolism. Your doctor will give you a realistic expectation for your plan at consultation.",
      },
    ],
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-18",
    seoTitle: "Belotero Dermal Filler Treatment in Malaysia | Kaiteki",
    seoDescription:
      "Belotero is a hyaluronic-acid filler range from Merz Aesthetics, used at Kaiteki for fine lines, volume and contour. Book a free consultation to learn more.",
  },
  {
    slug: "art-filler",
    name: "Art Filler",
    group: "Injectables",
    type: "injectable",
    treatments: ["dermal-fillers"],
    image: "/images/technology/art-filler.png",
    summary:
      "A hyaluronic-acid dermal filler range from Laboratoires Fillmed, built on the manufacturer's Tri-Hyal® technology, which blends three hyaluronic-acid fractions in each gel.",
    sections: [
      {
        heading: "What is Art Filler?",
        body: [
          "Art Filler is a range of injectable hyaluronic-acid (HA) dermal fillers from Laboratoires Fillmed, a French aesthetics manufacturer. The range was introduced in 2016 and, according to Fillmed, every gel in it is made from non-animal-origin hyaluronic acid combined with lidocaine, which is included to support comfort during injection. The range is graded by correction potential rather than sold as a single product: Fillmed lists gels including Fine Lines, Universal, Volume, Lips, Lips Soft and Eyes, each intended for a different depth and type of correction.",
          "What differentiates Art Filler from other HA ranges is the gel formulation rather than the raw ingredient: all the main filler families used at Kaiteki are cross-linked hyaluronic acid. Fillmed formulates Art Filler with a technology it calls Tri-Hyal®, which combines three hyaluronic-acid fractions in a controlled balance. Art Filler is used within Kaiteki's dermal fillers treatment. Whether filler is appropriate for you at all, and which gel in the range, is a clinical decision your doctor makes at an in-person consultation.",
        ],
      },
      {
        heading: "How Tri-Hyal® technology works",
        body: [
          "Fillmed describes Tri-Hyal® as combining three types of hyaluronic acid in the same gel: very long chains (above 3.5 MDa) and long chains (above 1.5 MDa), which are entangled and cross-linked with BDDE, together with free, uncross-linked hyaluronic acid (above 1.5 MDa) that the manufacturer says supports smooth integration into the tissue. Fillmed states that the character of each gel is tuned by adjusting three parameters (chain length, BDDE concentration and free-HA content), so a single technology platform can produce both structured gels for support and softer gels for delicate work.",
          "The practical relevance for someone comparing brands is where each gel is suited. A gel with higher firmness resists the surrounding tissue and is used where projection or contour support is the objective, such as temples, mid-face, jawline and chin in the case of Art Filler Volume; a softer, more spreadable gel is used for superficial lines and delicate skin, as with the Fine Lines and Lips Soft gels. That is a difference in engineering, not a hierarchy. Which gel is used, at what depth and in what quantity, is decided by the treating doctor after assessing your face in person. Results develop over the days following treatment and vary between individuals.",
        ],
      },
      {
        heading: "What it may help address",
        body: [
          "Fillmed lists the following indications across the Art Filler range. They are commonly considered within an individually planned filler treatment, but appearing here does not mean the treatment is appropriate for you. That is established at consultation.",
        ],
        list: [
          "Superficial to medium wrinkles and fine lines",
          "Nasolabial folds and marionette lines",
          "Lip volume, lip outline and perioral lines",
          "Loss of volume in the temples and mid-face",
          "Jawline and chin contour",
          "Periorbital concerns including tear-trough hollowing and crow's feet, where clinically appropriate",
        ],
      },
      {
        heading: "Suitability & who should avoid it",
        body: [
          "Art Filler is intended for adults seeking wrinkle correction, lip enhancement or volume restoration. HA fillers are not light-based, so skin tone is not the constraint it can be with lasers; facial anatomy, skin thickness and medical history are what matter. Fillmed states that Art Filler is not for use in anyone under 18.",
          "Fillmed's stated contraindications are specific and worth raising at consultation. The range is not to be used in pregnancy or breastfeeding, where there is known hypersensitivity to hyaluronic acid, lidocaine or amide-type local anaesthetics, in a history of autoimmune illness or ongoing immunotherapy, in a history of severe multiple allergies or anaphylactic shock, in uncontrolled epilepsy, in porphyria, in a tendency to hypertrophic scarring, in an area where a non-absorbable implant has already been placed, on inflamed or contagious skin lesions such as active acne or herpes, or immediately before or after laser treatment, deep chemical peeling or dermabrasion. Fillmed also flags interactions with cytochrome P450 inhibitors because of the lidocaine content. Please share your full medical history and medication list so the doctor can assess you safely.",
        ],
      },
      {
        heading: "The session at Kaiteki",
        body: [
          "Your visit opens with a doctor consultation covering your concern, your medical history and medications, and an assessment of your facial proportions and skin thickness, all of which bear on which Art Filler gel would be appropriate. The doctor explains the risks before you consent. The skin is then cleansed and a topical anaesthetic may be applied in addition to the lidocaine already present in the gel.",
          "The gel is placed in small increments using a needle or a cannula depending on the area and the doctor's judgement. A single-area appointment is usually short, often around 15 to 30 minutes once preparation is complete, while a multi-area plan takes longer and is frequently staged across more than one visit rather than completed at once. A review appointment is commonly arranged so the doctor can assess the area once swelling has settled.",
        ],
      },
      {
        heading: "Downtime & aftercare",
        body: [
          "Most people return to their day afterwards, but swelling, redness, tenderness and bruising at injection points are common in the first few days and vary between individuals. Lips and the periorbital area tend to swell more visibly than the jawline or temples, so allow a comfortable margin before any event that matters.",
          "Your doctor will give aftercare guidance specific to the area treated. Fillmed advises against combining Art Filler with laser treatment, deep peels or dermabrasion around the time of injection, and your doctor will tell you how long to leave between procedures. Contact the clinic promptly rather than waiting if anything feels unusual.",
        ],
      },
      {
        heading: "Risks & side effects",
        body: [
          "Art Filler is an injectable medical device and carries risks, which are explained to you at consultation before you consent. Fillmed lists potential adverse effects including inflammatory reactions such as burning, swelling, redness, nodules, granuloma and pain; bruising, haematoma and skin discolouration including the Tyndall effect; infection; local and systemic allergic reactions; and vascular complications. Vascular occlusion (filler entering or compressing a blood vessel) is the most serious recognised risk of any dermal filler and can affect the skin or, rarely, vision. It is uncommon, but it is the reason fillers must be administered by a doctor trained in facial anatomy and in managing complications, and the reason sudden pain, skin blanching or any change in vision must be reported immediately. Hyaluronic-acid gels such as Art Filler can be dissolved with hyaluronidase where a doctor judges this clinically indicated.",
        ],
      },
      {
        heading: "Sessions & cost factors",
        body: [
          "Cost depends on how many areas are addressed, which gel in the range is clinically appropriate for each, and how much product your anatomy actually calls for. A structural volumising gel and a fine-line gel are different products with different roles, so a plan is costed around the doctor's selection rather than a flat per-area rate.",
          "Hyaluronic-acid fillers are gradually broken down by the body, so the effect is not permanent. Fillmed cites 18-month clinical studies for several Art Filler indications, including wrinkles and volume restoration, but a manufacturer's study range is not a promise: how long it lasts for you depends on the gel used, the movement of the area and your own metabolism. Pricing is discussed at consultation rather than quoted online, so any estimate reflects your actual plan. Message us on WhatsApp to arrange a consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is Tri-Hyal® technology, and why does it matter?",
        a: "Fillmed describes Tri-Hyal® as balancing three hyaluronic-acid fractions in one gel: very long chains and long chains that are cross-linked, plus free hyaluronic acid that the manufacturer says supports smooth tissue integration. By adjusting chain length, cross-linker concentration and free-HA content, Fillmed produces gels of different firmness from one platform. Whether a firmer or softer gel suits your concern is a decision your doctor makes after assessing you in person.",
      },
      {
        q: "Is Art Filler suitable for the under-eye area?",
        a: "Fillmed lists periorbital indications including tear-trough hollowing and crow's feet within the range. The under-eye area is thin-skinned and anatomically demanding, however, so it is not appropriate for everyone and carries specific considerations such as visible swelling or filler showing through the skin. Whether your under-eye area should be treated with filler at all is a clinical judgement your doctor makes at consultation.",
      },
      {
        q: "Does Art Filler already contain anaesthetic?",
        a: "Fillmed states that Art Filler gels are formulated with lidocaine to make injection more comfortable. A topical anaesthetic may also be applied beforehand depending on the area. Because of the lidocaine content, you should tell your doctor about any sensitivity to amide-type local anaesthetics and about medications that inhibit cytochrome P450. Your doctor will confirm what comfort measures are appropriate for you before starting.",
      },
      {
        q: "Which Art Filler product would I need for my concern?",
        a: "That is not something to settle before being assessed. The range spans several correction potentials, from gels for superficial lines through gels for lips and gels used for temple, mid-face, jawline and chin volume. Product choice, placement depth and quantity are the treating doctor's decisions after an in-person assessment of your anatomy and goals, and in some cases the doctor may advise against filler entirely.",
      },
    ],
    reviewedBy: "dr-jessie-lim",
    lastReviewed: "2026-07-26",
    seoTitle: "Art Filler Dermal Filler Treatment Malaysia | Kaiteki",
    seoDescription:
      "Art Filler is a hyaluronic-acid filler range from Fillmed built on Tri-Hyal® technology, used at Kaiteki for lines and volume. Book a free consultation today.",
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
        "A device-based facial using a spiral tip with vacuum suction and simultaneous serum delivery to cleanse, exfoliate, extract and infuse in one pass.",
      sections: [
        {
          heading: "What is Hydrafacial?",
          body: [
            "Hydrafacial is a device-based facial platform, used within Kaiteki's facial treatments. Rather than a therapist working purely by hand, a handpiece fitted with a spiral tip is drawn across the skin while the machine simultaneously delivers a solution and applies vacuum suction, so exfoliating, lifting debris out of pores and applying serum happen in the same pass. The manufacturer has described this simultaneous suction-and-delivery mechanism as Vortex-Fusion.",
            "That mechanism is the practical difference from a traditional manual facial, where extraction is done by pressing on the skin and serums are applied afterwards. With a device, the depth of exfoliation is set by the tip and the pressure setting rather than by hand pressure, and debris is drawn away into a waste canister rather than being worked across the surface. It is a skin-quality and maintenance treatment, not a medical treatment for a diagnosed skin condition, and your doctor or therapist will assess whether it fits your skin at consultation.",
          ],
        },
        {
          heading: "How the treatment steps work",
          body: [
            "The manufacturer describes the treatment as a sequence of steps delivered through interchangeable tips. Physical exfoliation, which it terms microdermabrasion, uses a crystal-free tip to lift away surface dead skin. A gentle peel step applies a mild chemical exfoliating solution intended to help loosen the contents of clogged pores. An extraction step uses vacuum suction through the tip to draw out debris. A hydration and infusion step then delivers an antioxidant-rich serum to the freshly exfoliated surface, and a lymphatic drainage step uses gentler suction over the face and neck.",
            "Beyond the standard sequence, Hydrafacial offers targeted serum boosters that can be selected according to the concern being addressed, and many providers pair the session with LED light. Which tips, which solutions, how much suction and which boosters are used are chosen for your skin on the day: a reactive, thin skin type is treated very differently from congested, oily skin. Any change in skin appearance is gradual and varies between individuals.",
          ],
        },
        {
          heading: "What it may help address",
          body: [
            "Hydrafacial is commonly considered as a maintenance treatment for general skin quality and congestion. It is not a substitute for medical treatment of acne or pigmentation, and a consultation determines what is appropriate for you.",
          ],
          list: [
            "Congested pores, blackheads and a rough surface texture",
            "Dull or tired-looking skin lacking radiance",
            "Dryness and dehydration at the skin surface",
            "Oiliness and shine through the T-zone",
            "General skin upkeep between clinical treatments, or before an event",
          ],
        },
        {
          heading: "Suitability & who should avoid it",
          body: [
            "Because the treatment does not use light or laser energy, it is generally suitable across skin tones, and the settings can be dialled down considerably for sensitive skin. It is often chosen by people who want regular upkeep with little disruption to their week, and it can be adapted for teenage congestion as well as mature, drier skin.",
            "It may not be appropriate over active inflamed or pustular acne, open or broken skin, active cold sores, sunburn, eczema or rosacea flares, or where you are using strong topical retinoids or have recently had a peel, laser or waxing in the area. It is also not advised for anyone with a known allergy to ingredients in the serums, and recent isotretinoin use needs to be declared. Please share your skincare routine, medications and full medical history so the treatment can be adjusted or deferred safely.",
          ],
        },
        {
          heading: "The session at Kaiteki",
          body: [
            "A visit starts with a skin assessment so that the tips, solutions and suction level can be matched to your skin, and any boosters discussed. The face is cleansed, then the handpiece is worked systematically across the face in sections. Most people find it comfortable: the usual description is a cool, wet feeling with a light tugging or vacuum sensation, particularly around the nose during extraction. There are no needles and no anaesthetic.",
            "A standard session commonly takes around 30 to 60 minutes depending on the steps and any add-ons included. Because it is a maintenance treatment, it is often repeated on a regular rhythm (monthly is a common pattern), rather than as a fixed course, and it is frequently scheduled alongside other treatments in a longer-term plan. Your doctor or therapist will suggest a realistic interval for your skin.",
          ],
        },
        {
          heading: "Downtime & aftercare",
          body: [
            "Downtime is typically minimal, which is much of the appeal: most people go back to work or out the same day. Mild redness or a warm flush can occur for a short period afterwards, and skin that was congested may look a little pink where extraction was done.",
            "Keep skincare gentle for a day or two, hold off on strong actives such as retinoids and acids unless advised otherwise, and use daily sun protection. Your therapist will give aftercare guidance based on what was used in your session.",
          ],
        },
        {
          heading: "Risks & side effects",
          body: [
            "Hydrafacial is a low-risk treatment for most people, but it is not risk-free and the considerations are explained beforehand. Temporary effects can include redness, mild sensitivity or tightness, small areas of irritation where extraction was firm, and occasionally a short-lived breakout as congestion clears. Reactions to serum ingredients are uncommon but possible, which is why your product history matters. Serious effects are uncommon when the treatment is appropriately selected and performed by trained staff under medical supervision.",
          ],
        },
        {
          heading: "Sessions & cost factors",
          body: [
            "What drives cost is the length of the session, which steps are included, whether targeted serum boosters or add-ons such as LED are used, and whether areas beyond the face, the neck, chest or back, are treated. Because it is maintenance rather than a one-off correction, the frequency you settle on also affects what you spend over a year.",
            "Pricing is discussed at consultation rather than quoted online, so that any figure reflects the session actually recommended for your skin. Message us on WhatsApp to arrange a consultation.",
          ],
        },
      ],
      faqs: [
        {
          q: "How is Hydrafacial different from a normal facial?",
          a: "The main difference is that exfoliation, extraction and serum delivery are done by a device rather than by hand. A spiral tip exfoliates while vacuum suction draws debris away into a waste canister and a solution is delivered at the same time, so the depth of exfoliation is controlled by the tip and pressure setting rather than by manual pressure. Whether this suits your skin better than a hands-on facial is something to discuss at your assessment.",
        },
        {
          q: "Will Hydrafacial help with my clogged pores and blackheads?",
          a: "The extraction step uses vacuum suction after a chemical exfoliating solution has been applied, which is commonly used to address congestion and blackheads, and it avoids the manual squeezing used in traditional extraction. Congestion tends to return without an appropriate home routine, so it is usually approached as ongoing maintenance. If your congestion is really inflammatory acne, your doctor may recommend a medical treatment path instead.",
        },
        {
          q: "Can I have a Hydrafacial if my skin is sensitive or reactive?",
          a: "Often yes, because the suction level, the exfoliating tip and the strength of the solutions can all be adjusted, and no light or laser energy is involved. It should be deferred during an active eczema or rosacea flare, over broken skin, or soon after a peel, laser or waxing in the area. Tell your therapist about your reactions and current products so the session can be modified or postponed.",
        },
        {
          q: "How often should I have a Hydrafacial?",
          a: "There is no fixed course. Many people settle into a roughly monthly rhythm for upkeep, while others book before an event or alongside other treatments in a plan. The right interval depends on your skin type, how congested you get and what else you are having done, and your doctor or therapist will suggest something realistic at consultation.",
        },
      ],
      reviewedBy: "dr-yeong-bin",
      lastReviewed: "2026-07-18",
      seoTitle: "Hydrafacial Device Facial Treatment Malaysia | Kaiteki",
      seoDescription:
        "Hydrafacial is a device-based facial that exfoliates, extracts and infuses serums in one pass, used at Kaiteki for skin quality. Book a free consultation.",
    },
  {
      slug: "silkpeel",
      name: "Silkpeel",
      group: "Facials",
      type: "device",
      treatments: ["facial-treatments"],
      image: "/images/technology/silkpeel.jpg",
      summary:
        "A device-based facial that exfoliates with a diamond tip while simultaneously infusing a condition-specific topical serum into the same pass.",
      sections: [
        {
          heading: "What is Silkpeel?",
          body: [
            "Silkpeel is a device-based facial built around the process its makers named Dermalinfusion, a closed handpiece that carries a diamond-abrasive tip, gentle negative pressure and a flow of topical solution all at once. The system originated with Envy Medical in the United States and the Dermalinfusion platform was later acquired by Allergan Aesthetics, which markets the current generation under the DiamondGlow® name; Silkpeel remains the name most clinics and patients in Malaysia know it by. It sits in the medical-facial category rather than the laser or energy category, so it is typically the entry point into a skincare plan rather than a resurfacing procedure.",
            "What distinguishes it mechanically is the word simultaneously. Rather than exfoliating first and applying a serum afterwards, the abrasive tip lifts away surface dead cells while the serum is delivered to that freshly abraded surface within the same closed pass, under the tip, with the negative pressure holding the skin in contact. At Kaiteki, Silkpeel is used within our facial treatments, often alongside other treatments in a longer plan. Which serum and which settings suit your skin, and whether a facial is the right starting point at all, is assessed at consultation.",
          ],
        },
        {
          heading: "How Dermalinfusion works",
          body: [
            "The handpiece does three things in one movement. The recessed diamond-coated tip provides mechanical exfoliation of the stratum corneum as it is drawn across the skin; the vacuum applied through the tip holds the skin against the abrasive surface and draws away loosened cells and debris from the pores; and a condition-specific topical solution flows continuously into the same enclosed treatment chamber, so it meets skin whose barrier has just been thinned rather than skin that has been left to close over. Tip grade, vacuum level, number of passes and serum are all variables the therapist adjusts by area: lighter around the eyes and on thinner skin, firmer where the skin is thicker or more congested.",
            "Compared with a suction-based hydra-type facial, the difference is where the work is done. A hydra-type device typically relies on aqueous solutions and vortex suction through a spiral tip to loosen and lift debris, so the exfoliation is largely fluid-driven. Silkpeel's exfoliation is physical abrasion by the diamond tip, with the solution delivered to the abraded surface rather than doing the loosening itself, which is why it is often chosen where texture and congestion, not just hydration, are the concern. Neither approach makes the other unnecessary, and the treating clinician selects the protocol and serum for your skin. Effects are gradual and cumulative across a course, and vary between individuals.",
          ],
        },
        {
          heading: "What it may help address",
          body: [
            "Silkpeel is commonly considered as a maintenance or preparatory treatment for the concerns below, and is often used alongside other treatments in a longer plan. It is not suitable for everyone, and a consultation determines whether it is appropriate for you.",
          ],
          list: [
            "Dull, rough or flaky-looking skin texture",
            "Congestion, blackheads and clogged-looking pores",
            "Oily skin and mild non-inflamed acne",
            "Dehydrated skin that feels tight or looks lacklustre",
            "Uneven tone and superficial sun-related dullness",
            "Skin being prepared for, or maintained between, other in-clinic treatments",
          ],
        },
        {
          heading: "Suitability & who should avoid it",
          body: [
            "Because it is non-ablative and uses no light energy, Silkpeel is generally suitable across skin tones, including Asian skin, and does not carry the pigment-related considerations that come with lasers or IPL. It is often a sensible option if you want a treatment with essentially no recovery period, or if your doctor wants your barrier in better condition before a more assertive treatment is considered. Sensitive or reactive skin can often still be treated, with a lighter tip and lower vacuum.",
            "It may not be appropriate on skin with active inflamed or cystic acne, open or broken skin, active cold sores, eczema or rosacea flares in the treatment area, recent sunburn, or immediately after other resurfacing procedures, and some serum ingredients are avoided in pregnancy. Recent isotretinoin use or a course of topical retinoids may mean waiting or adjusting the protocol. Please share your full skincare and medical history at consultation, including active ingredients you use at home, so your clinician can select a suitable protocol.",
          ],
        },
        {
          heading: "The session at Kaiteki",
          body: [
            "A visit starts with a skin assessment so the tip grade and serum can be matched to your skin on the day rather than assumed. The skin is cleansed, then the handpiece is worked across the face in overlapping passes, section by section, with the therapist adjusting pressure and settings around delicate areas. Most people describe the sensation as a cool, slightly gritty pull across the skin, comparable to a firm massage rather than something requiring numbing, and no anaesthetic is needed.",
            "A session commonly runs in the region of 30 to 45 minutes, longer if it is combined with masking, extractions or another treatment in the same visit. Because the effect is cumulative, Silkpeel is usually planned as a regular treatment, often every few weeks initially and then at a maintenance interval, rather than as a one-off. Your clinician will suggest a rhythm that fits your skin and your other treatments.",
          ],
        },
        {
          heading: "Downtime & aftercare",
          body: [
            "There is typically no meaningful downtime, and most people return to normal activity immediately, though this varies between individuals. Mild pinkness or a slight warm flush for an hour or two is common, and skin can feel a little tight until it rehydrates.",
            "Because a layer of dead surface cells has been removed, your skin is temporarily more receptive, to skincare, and also to sun and irritants. Sunscreen the same day, gentle cleansing, and pausing exfoliating acids and retinoids for a day or two are usually advised, along with avoiding heavy makeup for the rest of the day. Your clinician will give aftercare guidance specific to your skin and the serum used.",
          ],
        },
        {
          heading: "Risks & side effects",
          body: [
            "Silkpeel is a low-risk treatment, but risks exist and are explained beforehand. Temporary effects can include redness, mild sensitivity, dryness or tightness, small pinpoint marks where suction has been applied, and occasional short-lived breakouts as congestion clears. Irritation or an allergic reaction to a serum ingredient is uncommon but possible, which is why your skincare history matters. Serious effects are uncommon when the protocol is appropriately selected and performed by a trained clinician.",
          ],
        },
        {
          heading: "Sessions & cost factors",
          body: [
            "Cost is driven mainly by which serums your skin calls for, whether add-on steps such as extractions, masking or LED are included, whether areas beyond the face are treated, and how frequently you choose to come in. Because the effect is maintenance-led rather than one-off, most people think about it as an ongoing rhythm rather than a single procedure.",
            "Pricing is discussed at consultation rather than quoted online, so what you are told reflects the protocol chosen for your skin. Message us on WhatsApp to arrange a consultation.",
          ],
        },
      ],
      faqs: [
        {
          q: "How is Silkpeel different from a hydra-type suction facial?",
          a: "Both combine exfoliation with serum delivery, but the mechanism differs. A hydra-type device relies mainly on aqueous solutions and vortex suction to loosen and lift debris, while Silkpeel exfoliates physically with a diamond-abrasive tip and delivers the serum to that abraded surface in the same closed pass. That makes it a common choice where texture and congestion are the concern rather than hydration alone. Which is better suited to your skin is best discussed at consultation.",
        },
        {
          q: "Is Silkpeel suitable for sensitive or acne-prone skin?",
          a: "Often yes, with adjustments: a finer tip grade, lower vacuum and a serum chosen for the concern. It is generally avoided on actively inflamed or cystic acne, broken skin or during an eczema or rosacea flare. Your clinician assesses your skin on the day and adapts the protocol, or advises a different treatment if it is not appropriate.",
        },
        {
          q: "How often should I have Silkpeel?",
          a: "The effect is cumulative rather than one-off, so a regular rhythm is usual, commonly every few weeks at first, then at a longer maintenance interval once your skin has settled. The right frequency depends on your skin type, your concern and what else is in your plan. Your clinician will suggest a schedule at consultation and adjust it as your skin responds.",
        },
        {
          q: "Can Silkpeel be combined with other treatments at Kaiteki?",
          a: "It is often used as part of a wider plan, either to prepare the skin before other treatments or as maintenance between them, and it may be paired with steps such as extractions or masking in the same visit. Timing around lasers, peels and injectables matters, so combinations are planned rather than improvised. Your doctor will advise on sequencing at consultation.",
        },
      ],
      reviewedBy: "dr-william-yap",
      lastReviewed: "2026-07-18",
      seoTitle: "Silkpeel Dermalinfusion Facial Treatment Malaysia | Kaiteki",
      seoDescription:
        "Silkpeel exfoliates with a diamond tip while infusing a chosen serum in the same pass, used at Kaiteki for texture and congestion. Book a free consultation.",
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
        "A light-based hair-reduction platform from Alma, combining broadband IPL energy with radiofrequency heating to target hair follicles over a course of sessions.",
      sections: [
        {
          heading: "What is the Alma hair-removal platform?",
          body: [
            "Alma is an Israeli aesthetic device manufacturer whose hair-removal systems are built around light energy delivered through interchangeable applicators. Its broadband applicators use what the manufacturer calls AFT (Advanced Fluorescence Technology), an intense pulsed light approach in which a wide band of light is shaped towards the wavelengths melanin absorbs most strongly, with the Speed AFT applicator described by the manufacturer as covering a 6.4cm² spot for larger areas. Because this is filtered broadband light rather than a single laser wavelength, one applicator can cover a wide range of hair types.",
            "Where a radiofrequency element is combined with the light pulse, the radiofrequency contributes bulk heating of the surrounding dermis rather than being absorbed selectively by pigment. Less light energy is then needed to reach the temperature the follicle requires, which is why combined light-and-radiofrequency systems are generally described as more tolerant across hair colours and skin tones than light alone. Alma is used within Kaiteki's laser hair removal treatment, and which applicator and energy combination suits your hair and skin is decided by a doctor at an in-person consultation.",
          ],
        },
        {
          heading: "How it works",
          body: [
            "Light-based hair removal depends on delivering enough heat to the follicle to interrupt regrowth while leaving surrounding skin unharmed. Alma's approach to that balance is the technology it calls SHR (Super Hair Removal), which the manufacturer describes as delivering low-fluence energy at a high repetition rate while the practitioner glides the applicator over the skin (an in-motion technique), so heat accumulates gradually rather than arriving as one high-energy pulse. Alma states that the applicator's cooled tip protects the epidermis throughout.",
            "That accumulative delivery is the main mechanical difference from conventional stamping IPL, where each pulse is placed shot by shot and gaps can leave uneven coverage. Alma describes the SHR approach as giving more uniform coverage and as being usable on darker, melanin-rich skin. Energy levels, applicator choice, number of passes and endpoint are selected by the treating doctor for your skin tone, hair type and the area treated. Hair reduction develops gradually across a course and varies between individuals.",
          ],
        },
        {
          heading: "What it may help address",
          body: [
            "Alma is commonly considered for unwanted hair on the areas below, planned as a course of sessions rather than a single visit. It is not suitable for every hair type or every area, and a consultation determines whether it is appropriate for you.",
          ],
          list: [
            "Underarms and bikini or Brazilian areas",
            "Legs and arms, where larger applicators cover the area more quickly",
            "Back, chest and shoulders",
            "Upper lip, chin and jawline facial hair",
            "Fine or light hair, which the manufacturer describes as harder to treat and addressed with different wavelengths",
            "Ingrown hairs and razor irritation from repeated shaving or waxing",
          ],
        },
        {
          heading: "Suitability & who should avoid it",
          body: [
            "Alma describes its hair-removal technologies as usable across a wide range of skin types, including darker skin, because low-fluence high-repetition delivery with a cooled tip reduces how much energy the surrounding skin absorbs at once. That makes it worth discussing if you have Asian or deeper skin and have been told elsewhere that hair removal carries more risk for you. It is still not appropriate for everyone, and very light, grey or white hair contains little pigment for light to target on any platform.",
            "It may not be suitable during pregnancy, over tattoos or permanent makeup in the area, on recently tanned or sunburnt skin, where there is active infection, inflammation or open skin, with a history of light-sensitive conditions or keloid scarring, or while taking photosensitising medication. Hormonal causes of excess hair growth may need investigating alongside treatment. Please share your full medical, medication and hair-removal history at consultation, including recent waxing, plucking or threading, so the doctor can advise safely.",
          ],
        },
        {
          heading: "The session at Kaiteki",
          body: [
            "A visit begins with a doctor consultation and a skin and hair assessment, and a test area may be considered first. You will usually be asked to shave shortly beforehand rather than wax or pluck, because the hair above the skin should be short while the follicle below stays intact. On the day the area is cleansed, gel applied where required and eye protection fitted, and the doctor moves the cooled applicator over the area in repeated passes, building warmth gradually.",
            "Most people describe the sensation as spreading warmth rather than the snap of a stamping device, and the manufacturer describes the technique as well tolerated. A small area such as the underarms may take only a few minutes; full legs or a back take considerably longer. A course is always needed, spaced according to the growth cycle for the area, often around four to eight weeks apart, because only follicles in their active growth phase respond to any one session. Your doctor will explain the course they consider realistic and review it as your hair responds.",
          ],
        },
        {
          heading: "Downtime & aftercare",
          body: [
            "Downtime is usually minimal and most people return to normal activity the same day, though this varies between individuals. Mild redness and slight bumpiness around the treated follicles is common for a few hours, and treated hairs may appear to grow out for a week or two before shedding.",
            "Sun protection on exposed areas, avoiding heat such as hot baths, saunas and vigorous exercise for the first day, and skipping deodorant or fragranced products on freshly treated skin are usually advised. Between sessions you can shave, but waxing, plucking, threading and depilatory creams are normally avoided because they remove the follicle contents the light needs to target. Your doctor will give aftercare guidance specific to the area treated.",
          ],
        },
        {
          heading: "Risks & side effects",
          body: [
            "As with any light-based medical treatment, hair removal carries risks, which are explained during consultation. Temporary effects can include redness, mild swelling around the follicles, a warm sunburnt feeling, and short-lived changes in pigmentation. Less common effects include blistering, burns, folliculitis and, rarely, paradoxical stimulation of fine hair in some areas. Serious effects are uncommon when settings are appropriately selected for your skin tone and the treatment is performed by a trained doctor.",
          ],
        },
        {
          heading: "Sessions & cost factors",
          body: [
            "Session count and cost depend mainly on the size and number of areas treated, your hair colour, thickness and density, whether an underlying hormonal factor is driving growth, and how your hair responds as the course progresses. Multiple sessions are always needed because of the growth cycle, and occasional maintenance afterwards is normal rather than a sign something has gone wrong. Pricing is discussed at consultation rather than quoted online, so what you are quoted reflects the areas in your actual plan. Message us on WhatsApp to arrange a consultation.",
          ],
        },
      ],
      faqs: [
        {
          q: "Why combine radiofrequency with IPL for hair removal?",
          a: "Light energy is absorbed selectively by pigment in the follicle, whereas radiofrequency heats the surrounding tissue non-selectively. Combining them means the follicle can reach the required temperature with less light energy, which is why such systems are generally described as more tolerant across a range of hair colours and skin tones. Which energy combination is appropriate for your hair and skin is decided by your doctor at consultation.",
        },
        {
          q: "Is Alma suitable for darker skin tones?",
          a: "Alma describes its SHR technology as delivering low-fluence energy at a high repetition rate with a cooled applicator tip, which the manufacturer states allows treatment of darker, melanin-rich skin. That makes it worth discussing if you have Asian or deeper skin, but it does not remove the need for individual assessment, and recently tanned skin is generally not treated. A doctor assesses your skin tone and history at an in-person consultation before recommending a course.",
        },
        {
          q: "How does in-motion SHR feel compared with conventional stamping IPL?",
          a: "With in-motion treatment the applicator is glided over the area and heat builds gradually, which most people describe as spreading warmth rather than the repeated snap of a stamped pulse. Alma describes the technique as producing more even coverage across the treated area. Comfort still varies between individuals and between body areas, and your doctor will talk through what to expect before your first session.",
        },
        {
          q: "Should I shave or wax before my session?",
          a: "Shave, do not wax. The hair above the skin should be short so energy is not wasted heating it, but the follicle below needs to be intact for the treatment to have a target, and waxing, plucking and threading remove exactly that. Keep to shaving between sessions as well, and your doctor or therapist will tell you how close to your appointment to do it.",
        },
      ],
      reviewedBy: "dr-lim-xiao-chien",
      lastReviewed: "2026-07-18",
      seoTitle: "Alma IPL + RF Hair Removal Treatment Malaysia | Kaiteki",
      seoDescription:
        "Alma combines IPL and radiofrequency energy at Kaiteki to target hair follicles over a course of sessions. Book a free consultation to discuss your goals.",
    },
];

export function technologyBySlug(slug: string) {
  return technology.find((x) => x.slug === slug);
}
