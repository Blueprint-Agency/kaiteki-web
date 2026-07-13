import type { Concern } from "@/lib/types";

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
      "Acne and acne scarring have several causes and types — assessment guides which treatments may help.",
    leadAnswer:
      "Acne is a common skin condition in which pores become blocked, sometimes leading to spots, inflammation and, over time, scarring. It has several causes and types, so what helps one person may not suit another. A consultation helps determine which approach, if any, is appropriate for your skin.",
    treatments: ["pico-laser", "microneedling", "exosome-therapy"],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-06-22",
    sections: [
      {
        heading: "What is acne?",
        body: [
          "Acne occurs when hair follicles become blocked with oil and dead skin cells, which can lead to blackheads, whiteheads and inflamed spots. It most often affects the face but can appear on the back and chest.",
          "Acne is a medical condition rather than simply a cosmetic concern, and it is common in both teenagers and adults. Understanding your type of acne is the first step in deciding whether treatment may help.",
        ],
      },
      {
        heading: "Common causes",
        body: [
          "Several factors can contribute to acne, often in combination. These may include hormones, oil production, certain bacteria and inflammation. Skincare habits, environment and family history can also play a part.",
        ],
        list: [
          "Hormonal changes and cycles",
          "Excess oil (sebum) production",
          "Blocked pores and skin-cell build-up",
          "Inflammation and skin bacteria",
        ],
      },
      {
        heading: "Types of acne & scarring",
        body: [
          "Acne ranges from non-inflamed blackheads and whiteheads to inflamed papules, pustules and deeper nodules. When inflamed acne settles, it can sometimes leave marks or scarring — such as rolling, boxcar or ice-pick scars — which are addressed differently from active acne.",
          "Because active acne and acne scarring are different, a doctor assesses which you have before discussing options.",
        ],
      },
      {
        heading: "When to see a doctor",
        body: [
          "It is reasonable to seek advice if acne is persistent, painful, leaving marks, or affecting how you feel. A doctor can assess your skin, explain the options and their risks, and help you decide on a sensible plan.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can acne scarring be treated?",
        a: "Acne scarring is approached differently from active acne, and several options may be considered depending on the scar type. Results vary between individuals, so a doctor assesses your skin and explains what is realistic before recommending anything.",
      },
      {
        q: "Why does adult acne happen?",
        a: "Adult acne can be influenced by hormones, oil production, skincare and other factors, often in combination. A consultation helps identify the likely contributors for your skin so any plan is tailored to you.",
      },
      {
        q: "Will treatment make my acne worse first?",
        a: "Some approaches can involve an adjustment period, which your doctor will explain beforehand. Sharing your history at consultation helps the doctor choose an approach suited to your skin and set realistic expectations.",
      },
    ],
  },

  {
    slug: "pigmentation",
    name: "Pigmentation",
    group: "Skin",
    image: "/images/concerns/pigmentation.jpg",
    summary:
      "Uneven pigmentation such as melasma, sun spots and post-inflammatory marks are assessed individually.",
    leadAnswer:
      "Pigmentation describes areas of darker skin such as melasma, sun-related spots or marks left after inflammation. The type matters, because each responds differently and some need particular care. A consultation helps determine which approach, if any, may be appropriate for your skin.",
    treatments: ["pico-laser", "skin-booster", "dermav"],
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-06-20",
    sections: [
      {
        heading: "What is pigmentation?",
        body: [
          "Skin colour comes from melanin, a pigment produced by specialised cells called melanocytes. Melanin exists in two main forms — eumelanin, which is brown to black, and pheomelanin, which is yellow to red — and the amount and type present help determine each person's natural skin tone.",
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
          "Hyperpigmentation is where patches of skin become darker than the surrounding area, often linked to sun exposure, hormonal changes, inflammation or injury. Melasma and sun or age spots are common examples. Hypopigmentation is the opposite — patches that become lighter — and can be associated with conditions such as vitiligo, certain fungal infections, or as a side effect of some treatments.",
          "Post-inflammatory hyperpigmentation (PIH) refers to dark spots or patches left after the skin has been inflamed or injured — for example following acne, eczema or a cut — which may fade over time. Albinism is a separate, congenital condition marked by a lack of melanin in the skin, hair and eyes. Because these types differ, a doctor assesses which you have before discussing options.",
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
        a: "Pigmentation can be influenced by ongoing factors such as sun exposure and hormones, so it may recur even after it has faded — melasma in particular can be persistent. A doctor can explain what is realistic for your skin and how everyday habits affect the outcome.",
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
    summary: "Pore appearance is influenced by oil, skin texture and age — several options may help.",
    leadAnswer:
      "Enlarged-looking pores are influenced by oil production, skin texture, sun exposure and age. Pores do not physically open and close, but their appearance can sometimes be refined. A consultation helps determine which approach, if any, may suit your skin.",
    treatments: ["microneedling", "pico-laser", "radiofrequency"],
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-06-18",
    sections: [
      {
        heading: "What are enlarged pores?",
        body: [
          "Pores are the small openings on the surface of the skin that connect to the follicles and glands beneath, which produce the oil and sweat that lubricate and cool the skin. Everyone has them, and they are a normal, necessary part of healthy skin.",
          "When people talk about \"enlarged\" pores, they usually mean pores that look more visible than they would like — most often across the nose, forehead and chin. The pores have not truly changed size on their own; rather, several factors can make them appear larger. Understanding what is influencing yours is the first step in deciding whether treatment may help.",
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
          "Skin has two broad kinds of pores. Sebaceous (oil) pores connect to the glands that produce sebum and are more concentrated on the face, especially the T-zone of the forehead, nose and chin — these are the pores most people notice.",
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
      "Expression lines and static wrinkles are approached differently — assessment guides the plan.",
    leadAnswer:
      "Fine lines and wrinkles develop with movement, age and skin quality. Expression lines and static lines are approached differently, so a doctor assesses which you have. A consultation helps determine which approach, if any, may be appropriate for your skin.",
    treatments: ["hifu", "ultherapy", "skin-booster", "microneedling"],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-06-16",
    sections: [
      {
        heading: "What are fine lines and wrinkles?",
        body: [
          "Fine lines and wrinkles are creases that form in the skin over time. Expression lines appear with movement — smiling, squinting or frowning — and are linked to how the face moves, often showing around the eyes, forehead and mouth.",
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
          "Sun exposure — daily sunscreen of SPF 30 or higher helps protect the skin",
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
          "Expression lines — from repeated movement, such as crow's feet, forehead lines and laugh lines",
          "Static wrinkles — lines visible at rest, often on the cheeks, temples and neck",
          "Sleep lines — from sleeping positions that press the skin against a pillow over time",
          "Marionette lines — running from the corners of the mouth down toward the chin",
          "Glabellar lines — vertical \"frown\" lines between the eyebrows",
          "Perioral lines — fine vertical lines around the mouth",
          "Neck lines — horizontal or vertical creases on the neck, linked to age, sun and gravity",
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
      "Under-eye darkness can be pigment, vascular or structural — the cause guides the approach.",
    leadAnswer:
      "Dark eye circles can be caused by pigmentation, visible blood vessels, or the structure and hollowing of the under-eye area — often in combination. Because the causes differ, a consultation helps determine which approach, if any, may be appropriate for you.",
    treatments: ["skin-booster", "dermav", "radiofrequency"],
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-06-14",
    sections: [
      {
        heading: "What causes dark eye circles?",
        body: [
          "Dark circles under the eyes are not a single condition. The darkness can come from extra pigment in the skin, from blood vessels showing through the thin under-eye skin, or from the shape of the area itself — where hollows and shadows make the region look darker. Often more than one of these is involved at the same time.",
          "Because the underlying cause differs from person to person, what looks similar on the surface can have very different reasons behind it. Identifying which factors are contributing is the first step, since the cause guides whether any treatment may help.",
        ],
      },
      {
        heading: "Common contributing factors",
        body: [
          "Several factors can make dark circles more noticeable, often in combination rather than on their own. Family history, everyday habits and natural changes over time all play a part.",
        ],
        list: [
          "Genetics — inherited tendencies toward darker pigmentation around the eyes",
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
          "Structural circles relate to the shape of the area — thinner skin, loss of fat and volume, and natural changes over time can create hollows that cast shadows and give a tired look in certain light. Mixed circles combine features of more than one type, which is why a doctor assesses which is present before discussing any options.",
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
        a: "Pigment, blood vessels and under-eye structure are different things, and each is approached differently. Because the cause differs between individuals — and is often a mix — a consultation helps determine which approach, if any, is appropriate for you rather than assuming one method suits everyone.",
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
      "Facial contour concerns are assessed individually to determine suitable options.",
    leadAnswer:
      "Face-contouring concerns relate to the shape and definition of areas such as the jawline and chin. Several treatments may be considered depending on the concern and your anatomy. A consultation helps determine which approach, if any, may be appropriate.",
    treatments: ["hifu", "coolsculpting", "radiofrequency"],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-06-12",
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
        q: "Which treatment is best for face contouring?",
        a: "There is no single best treatment, because facial contour has several possible contributors and suitable options vary between individuals. A consultation helps a doctor assess your face and determine which approach, if any, may be appropriate.",
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
      "Non-surgical lifting and firmness concerns are assessed to guide a suitable plan.",
    leadAnswer:
      "Face-lifting concerns relate to firmness and laxity as skin changes over time. Non-surgical, energy-based treatments may be considered depending on your assessment. A consultation helps determine which approach, if any, may be appropriate for you.",
    treatments: ["hifu", "ultherapy", "fotona-4d", "onda"],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-06-12",
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
          "It is reasonable to seek advice if changes in firmness are affecting how you feel, or if you are unsure which options are worth considering. A doctor can assess your skin, explain the available approaches and their risks, and help you decide on a sensible plan — including whether treatment is needed at all.",
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
      "Skin ageing involves firmness, texture and volume — approached with an individual plan.",
    leadAnswer:
      "Skin ageing involves gradual changes in firmness, texture, hydration and volume. Because several factors are usually involved, a plan is individual. A consultation helps determine which approaches, if any, may be appropriate for your skin and goals.",
    treatments: ["hifu", "ultherapy", "skin-booster", "bio-stimulator"],
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-06-10",
    sections: [
      {
        heading: "What is skin ageing?",
        body: [
          "Skin ageing is the natural process by which skin gradually loses collagen and elasticity, becoming thinner and drier and showing lines over time. Part of this is intrinsic ageing — changes driven largely by your genes and the passage of time — which affects everyone and cannot be halted.",
          "Alongside this, skin is shaped by extrinsic ageing: changes linked to sun exposure and everyday habits rather than age alone. Understanding how firmness, texture, hydration and volume are changing is the first step in deciding whether any care or treatment may help.",
        ],
      },
      {
        heading: "What causes it",
        body: [
          "Ageing skin usually reflects several factors working together rather than a single cause. The gradual decline of collagen and elastin reduces firmness and support, while external influences — particularly sun exposure — can accelerate visible change.",
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
        a: "Ageing is a natural process that cannot be stopped, but some everyday habits — such as daily sun protection, not smoking and a balanced diet — may help support skin health over time. A consultation helps determine which approach, if any, is appropriate for your skin.",
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
    name: "Body Slimming",
    group: "Hair & Body",
    image: "/images/concerns/body-slimming.jpg",
    summary: "Localised fat concerns are assessed individually; these are not weight-loss treatments.",
    leadAnswer:
      "Body-contouring concerns relate to pockets of localised fat in specific areas, rather than overall weight. In-clinic treatments are not a substitute for weight loss. A consultation helps determine which approach, if any, may be appropriate for you.",
    treatments: ["coolsculpting", "fat-freezing", "onda"],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-06-08",
    sections: [
      {
        heading: "What is body slimming / contouring?",
        body: [
          "Body slimming, more accurately called body contouring, describes in-clinic approaches aimed at the shape and definition of a specific area — such as pockets of stubborn fat, muscle tone or skin firmness — rather than reducing overall body weight.",
          "It is not a weight-loss treatment. Contouring is concerned with how a particular area looks, not the number on the scales, so it is considered alongside — never in place of — a healthy diet and regular exercise.",
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
          "It is reasonable to seek advice if a localised area is not responding to diet and exercise and it affects how you feel. A doctor can assess the area, explain the options and their risks, and help you decide on a sensible plan — or advise that no treatment is needed.",
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
    name: "Hair Loss",
    group: "Hair & Body",
    image: "/images/concerns/hair-loss.jpg",
    summary: "Hair-loss patterns have different causes — assessment guides whether treatment may help.",
    leadAnswer:
      "Hair loss has several patterns and causes, and some shedding is normal. Identifying the likely cause is important before considering treatment. A consultation helps determine which approach, if any, may be appropriate for you.",
    treatments: ["exosome-therapy"],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-06-06",
    sections: [
      {
        heading: "Understanding hair loss",
        body: [
          "Hair loss and hair thinning are common and affect both men and women. As we age, hair follicles can change over time, much like other parts of the body, and a degree of daily shedding is a normal part of the hair's natural cycle.",
          "Because hair loss can have many different causes — and can look different from one person to the next — understanding the likely reason behind it matters before considering whether any treatment may help.",
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
          "Research into hair loss is ongoing, and there are several recognised contributors — often in combination. A doctor considers these when assessing the likely cause for you.",
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
    name: "Tattoo Removal",
    group: "Skin",
    image: "/images/concerns/tattoo-removal.jpg",
    summary:
      "Fading or removing unwanted tattoo ink, assessed by a doctor before any treatment.",
    leadAnswer:
      "Tattoo removal is the gradual fading of tattoo ink using laser energy that breaks pigment into smaller particles the body may clear over time. Ink type, colour, depth and skin type all affect suitability and the number of sessions, which a doctor assesses at consultation.",
    treatments: ["pico-laser"],
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-13",
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
          "Ink colour — different colours absorb laser energy differently",
          "Depth of the ink in the skin",
          "Size of the tattoo",
          "Location on the body",
          "Age of the tattoo",
        ],
      },
      {
        heading: "Types of ink & response",
        body: [
          "Darker inks such as black and dark blue tend to respond more predictably to laser treatment, while certain colours — particularly light colours, white, and some cosmetic or permanent-makeup pigments — can be more resistant or behave less predictably. Amateur tattoos with less densely packed ink often fade differently to professional tattoos.",
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
    name: "Birthmark",
    group: "Skin",
    image: "/images/concerns/birthmark.jpg",
    summary:
      "Birthmarks vary widely in type and cause — a doctor assesses which, if any, treatment may be appropriate.",
    leadAnswer:
      "Birthmarks are marks present at or shortly after birth, caused by clusters of pigment cells or blood vessels in the skin. They vary in colour, size and type, and most are harmless. A consultation helps determine whether any treatment is appropriate, and which approach may suit your skin.",
    treatments: ["pico-laser", "vascular-pigment-laser"],
    reviewedBy: "dr-chew-yuhhui",
    lastReviewed: "2026-07-13",
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
          "Birthmarks broadly fall into two groups. Pigmented birthmarks — such as café-au-lait patches, Mongolian spots and moles — arise from clusters of pigment-producing cells. Vascular birthmarks — such as salmon patches, port-wine stains and some haemangiomas — arise from blood vessels in the skin and can appear pink, red or purplish.",
        ],
        list: [
          "Pigmented — café-au-lait patches, Mongolian spots, congenital moles",
          "Vascular — salmon patches, port-wine stains, haemangiomas",
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
        a: "It depends on the type of birthmark, and outcomes vary between individuals. Some pigmented or vascular birthmarks may be considered for laser treatment, while others are best left alone or monitored. A doctor assesses the mark and explains what is realistic before recommending anything.",
      },
      {
        q: "Are birthmarks dangerous?",
        a: "Most birthmarks are harmless, but any mark that changes over time, becomes raised, bleeds or looks unusual should be examined by a doctor. This is a general precaution and does not mean a birthmark is a concern in itself.",
      },
      {
        q: "Why do different birthmarks need different treatments?",
        a: "Pigmented and vascular birthmarks arise from different structures in the skin — pigment cells versus blood vessels — so they respond to different types of laser energy. A doctor identifies the type first before discussing which approach, if any, may be appropriate.",
      },
    ],
  },
  {
    slug: "vascular-lesions",
    name: "Vascular Lesions",
    group: "Skin",
    image: "/images/concerns/vascular-lesions.jpg",
    summary:
      "Visible blood vessels and redness have several causes — assessment guides whether treatment may help.",
    leadAnswer:
      "Vascular lesions are visible blood vessels or areas of redness in the skin, such as facial thread veins, spider veins or persistent flushing. They have several possible causes, so a doctor assesses the type before discussing whether any treatment may be appropriate for you.",
    treatments: ["vascular-pigment-laser", "dermav"],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-07-13",
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
          "Facial thread veins (telangiectasia) — fine visible vessels, often on the cheeks and nose",
          "Spider veins — small clusters of vessels radiating from a central point",
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
    name: "Excessive Sweating",
    group: "Skin",
    image: "/images/concerns/excessive-sweating.jpg",
    summary:
      "Excessive sweating has several possible causes — a doctor assesses your situation at consultation.",
    leadAnswer:
      "Excessive sweating (hyperhidrosis) is sweating beyond what is needed to regulate body temperature, most often affecting the underarms, palms, soles or face. It can have several causes. A consultation helps assess your situation and discuss whether any approach may be appropriate for you.",
    treatments: [],
    reviewedBy: "dr-yeong-bin",
    lastReviewed: "2026-07-13",
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
          "It is reasonable to seek advice if sweating is persistent, affects daily life or confidence, or occurs alongside other symptoms. A doctor can assess your situation, consider possible underlying causes, and explain the options and their risks so you can decide on a sensible plan — including whether treatment is needed at all.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is excessive sweating a medical condition?",
        a: "Yes — when sweating is noticeably beyond what is needed to regulate temperature, it is recognised as a condition called hyperhidrosis. A doctor can assess whether this applies to you and discuss it accordingly.",
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

export const concernGroups: Concern["group"][] = ["Skin", "Face", "Eyes", "Hair & Body"];

export function concernBySlug(slug: string) {
  return concerns.find((c) => c.slug === slug);
}

export function concernsByGroup(group: Concern["group"]) {
  return concerns.filter((c) => c.group === group);
}
