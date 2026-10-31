// Homepage copy per locale.
//
// English is the original copy, moved here verbatim. Chinese and Malay are
// written per locale around the queries in docs/18 §1 (the homepage keyword
// map), not translated sentence by sentence. All three go through the same
// MAB rules (docs/02 §8): no superlatives beyond the device-fleet counts the
// English already carries, no outcome promises, no testimonials as claims.
//
// Placeholders in braces are filled by fmt() from content/i18n/chrome.ts.

import type { Locale } from "@/lib/i18n";
import type { Faq } from "@/lib/types";
import { homeZh } from "./home.zh";
import { homeMs } from "./home.ms";

export type HomeCopy = {
  meta: { title: string; description: string };
  hero: {
    kicker: string;
    h1: { pre: string; em: string; post: string };
    sub: string;
    cta: string;
    explore: string;
    branchesLine: string;
    findNearest: string;
    imageAlt: string;
    spotCta: string;
    spotAria: string; // "{name}"
    /** Hotspot notes by concern slug; names come from the terms map. */
    spots: Record<string, string>;
  };
  /** Omitted where the claim can't be carried over: "the most … in Malaysia"
   *  is a superlative, so zh/ms skip the seals until a verified count exists
   *  (docs/18 §8.1). */
  badges?: {
    aria: string;
    /** Seal text, top to bottom. `most` and `where` wrap the subject. */
    most: string;
    where: string;
    seals: [subject: string, noun: string][];
  };
  concerns: {
    h2: string;
    sub: string;
    viewAll: string;
    explore: string;
    cardAria: string; // "{name}"
    imageAlt: string; // "{name}"
    /** Flip-card summaries by slug. Omitted for English (the data's own summary). */
    summaries?: Record<string, string>;
  };
  treatments: {
    h2: string;
    sub: string;
    viewAll: string;
    learnMore: string;
    cardAria: string; // "{name}"
    imageAlt: string; // "{name}"
    summaries?: Record<string, string>;
  };
  how: {
    kicker: string;
    h2: string;
    sub: string;
    steps: { title: string; kicker: string; body: string }[];
  };
  doctors: {
    h2: string;
    body: string; // "{n}" optional
    teamLabel: string;
    teamValue: string; // "{n}"
    credLabel: string;
    credValue: string;
    meetAll: string;
    imageAlt: string;
    /** Role under each founder's name, by doctor slug. */
    roles: Record<string, string>;
    profileAria: string; // "{name}, {role}"
  };
  why: {
    h2: string;
    sub: string;
    reasons: { title: string; body: string }[];
  };
  recognition: {
    h2: string;
    body: string;
    partnersLabel: string;
    onRecordLabel: string;
    onRecordValue: string; // "{n}"
    yearsLabel: string;
    link: string;
    alsoOnRecord: string;
  };
  reviews: {
    heading: string;
    count: string; // "{n}" — one branch
    countAll: string; // "{n}" — chain-wide
    byBranch: string;
    note: string; // "{date}"
    viewOnGoogle: string;
    /** Intl locale for the review date and counts. */
    intl: string;
  };
  branches: {
    h2: string;
    sub: string;
    all: string;
    allTab: string;
  };
  closing: {
    kicker: string;
    h2: { pre: string; em: string };
    body: string;
    branchesLine: string;
  };
  faq: { h2: string; items: Faq[] };
  promo: {
    dialogLabel: string;
    close: string;
    imageAlt: string;
    enquire: string;
    viewProducts: string;
    waMessage: string;
  };
  /** Hero campaign banners, in carousel order. Labels must be unique (they key
   *  the slides). Clear the slides in HomePage when the campaign ends. */
  campaign: {
    slides: { label: string; alt: string }[];
    waMessage: string;
    next: string;
    prev: string;
  };
};

const en: HomeCopy = {
  meta: {
    title: "Kaiteki: Japanese-Inspired Aesthetic Clinic in Malaysia",
    description:
      "9 branches, {n} doctors, one standard of aesthetic care across KL, Selangor, Johor and Sabah. Your concern is assessed first, then the right treatment follows.",
  },
  hero: {
    kicker: "Skin · Aesthetic · Laser",
    h1: { pre: "Japanese-inspired skin & ", em: "aesthetic care", post: "." },
    sub: "A calm, considered approach to your skin. Nine branches across Malaysia, {n} doctors, and every treatment starts with an assessment.",
    cta: "Book a Free Consultation",
    explore: "Explore treatments",
    branchesLine: "9 branches across KL, Selangor, Johor & Sabah:",
    findNearest: "find your nearest",
    imageAlt: "A smiling woman with calm, healthy-looking skin, resting her hands beneath her chin",
    spotCta: "Doctor-assessed options",
    spotAria: "{name}, read the concern guide",
    spots: {
      "fine-lines-wrinkles": "Forehead and expression lines, assessed before anything is recommended.",
      "dark-eye-circles": "Under-eye darkness and eye bags: options depend on the cause.",
      pigmentation: "Sun spots, melasma and uneven tone, mapped to the right laser.",
      "enlarged-pores": "Texture and visible pores: often paired with hydration care.",
      "face-contouring": "Jawline and facial definition, planned with a doctor.",
    },
  },
  badges: {
    aria: "Device fleet records",
    most: "The most",
    where: "in Malaysia",
    seals: [
      ["Onda", "machines"],
      ["Oligio X", "machines"],
      ["lifting", "devices"],
    ],
  },
  concerns: {
    h2: "What brings you in?",
    sub: "Tell us the concern. A doctor will assess it before recommending any treatment.",
    viewAll: "View all concerns",
    explore: "Explore options",
    cardAria: "{name}, read the concern guide",
    imageAlt: "{name}, skin concern treated at Kaiteki Skin Aesthetic Clinic",
  },
  treatments: {
    h2: "What we treat, and how",
    sub: "Lasers, lifting, skin boosters and body treatments. Every option is doctor-assessed and non-surgical.",
    viewAll: "View all treatments",
    learnMore: "Learn more",
    cardAria: "{name}, read the treatment guide",
    imageAlt: "{name} treatment at Kaiteki Skin Aesthetic Clinic",
  },
  how: {
    kicker: "What to expect",
    h2: "Your first visit, step by step",
    sub: "Every treatment at Kaiteki begins the same way, with a conversation. Here’s what the process looks like from start to finish.",
    steps: [
      {
        title: "Free Consultation",
        kicker: "A conversation, not a sales pitch",
        body: "Message us on WhatsApp to book a free consultation at your nearest branch. A doctor will review your concern, skin history and goals. You'll leave with a clear understanding of what's possible, what it involves, and whether treatment is right for you. No packages pushed, no obligation.",
      },
      {
        title: "Your Treatment Plan",
        kicker: "Assessed by a doctor, explained in full",
        body: "If treatment is appropriate, your doctor builds a plan around your specific concern. This covers which treatment, how many sessions, expected timeline and realistic outcomes. Everything is explained before you commit to anything.",
      },
      {
        title: "Treatment Day",
        kicker: "Doctor-led from start to finish",
        body: "Your treatment is carried out by the same registered doctor who assessed you. Sessions typically range from 15 to 90 minutes depending on the treatment. Your doctor will walk you through each step and check comfort throughout.",
      },
      {
        title: "Aftercare and Follow-Up",
        kicker: "The plan doesn't end at the door",
        body: "You'll receive clear aftercare instructions specific to your treatment. Your doctor's team follows up to check on your recovery and progress. If your plan involves multiple sessions, each one is reassessed before proceeding.",
      },
    ],
  },
  doctors: {
    h2: "Meet the doctors behind your care",
    body: "20 LCP-certified, MMC-registered physicians across nine branches. We name the doctor on every treatment page because we’d rather you trust credentials than testimonials.",
    teamLabel: "Medical team",
    teamValue: "{n} aesthetic physicians",
    credLabel: "Credentials",
    credValue: "LCP board-certified · MMC-registered",
    meetAll: "Meet the full medical team",
    imageAlt: "Three Kaiteki doctors, Dr Chew, Dr Jessie and Dr Yeong Bin, in black clinic scrubs",
    roles: {
      "dr-chew-yuhhui": "Co-Founder",
      "dr-jessie-lim": "Founder & CEO",
      "dr-yeong-bin": "Co-Founder",
    },
    profileAria: "{name}, {role}, view profile",
  },
  why: {
    h2: "A different kind of aesthetic clinic",
    sub: "A calm, medical approach to skin and aesthetics. Just a doctor who assesses your concern and recommends what fits. That’s the standard at every branch.",
    reasons: [
      {
        title: "Doctor-led, always",
        body: "Every plan is assessed and carried out by an MMC-registered doctor, never handed to a salesperson.",
      },
      {
        title: "Nine branches, one standard",
        body: "Across KL, Selangor, Johor and Sabah: the same doctors and the same protocols at each.",
      },
      {
        title: "Recognised by the field",
        body: "Performance awards from the device and product brands behind the treatments we offer.",
      },
    ],
  },
  recognition: {
    h2: "Recognised by the brands behind your care",
    body: "The manufacturers behind our devices and injectables audit the clinics that use them — on training, on volume, and on sourcing every product through authorised supply. These are the awards that audit produces: a record of how we practise, kept here in full.",
    partnersLabel: "Partners",
    onRecordLabel: "On record",
    onRecordValue: "{n} partner awards",
    yearsLabel: "Years",
    link: "Meet the doctors who earned them",
    alsoOnRecord: "Also on record",
  },
  reviews: {
    heading: "What our patients say",
    count: "{n} Google reviews",
    countAll: "{n} Google reviews across 9 branches",
    byBranch: "Reviews by branch",
    note: "Reviews are shown as written, as of {date}. Open the Google profile for the full, unfiltered list.",
    viewOnGoogle: "View on Google",
    intl: "en-GB",
  },
  branches: {
    h2: "Find your nearest branch",
    sub: "Nine locations across KL, Selangor, Johor and Sabah. Same doctors, same protocols at every one.",
    all: "All locations",
    allTab: "All branches",
  },
  closing: {
    kicker: "Free consultation · No obligation",
    h2: { pre: "Not sure ", em: "where to start?" },
    body: "Talk to a doctor first. Message us on WhatsApp for a free consultation. We’ll help you find the right branch and the right plan, no obligation.",
    branchesLine: "9 branches across KL, Selangor, Johor & Sabah",
  },
  faq: {
    h2: "Frequently asked questions",
    items: [
      {
        q: "Is the consultation really free?",
        a: "Yes. Your first consultation is free and comes with no obligation. A doctor will assess your concern, explain what options exist, and give you an honest recommendation. You're welcome to take time to decide before committing to anything.",
      },
      {
        q: "Do I need to know which treatment I want before booking?",
        a: "No. Most patients start with a concern, not a treatment name. During your consultation, a doctor will assess your skin and recommend the most suitable option. You don't need to research treatments in advance.",
      },
      {
        q: "Who performs the treatments at Kaiteki?",
        a: "Every treatment is assessed and carried out by a registered doctor. Our doctors are LCP board-certified and MMC-registered. We do not delegate treatments to therapists or non-medical staff.",
      },
      {
        q: "Are your treatments safe for darker skin tones?",
        a: "Many of our treatments, including pico laser, are suitable for a range of Asian skin tones. However, suitability depends on your specific skin type and concern. Your doctor will assess this during consultation and advise which treatments are appropriate for you.",
      },
      {
        q: "How do I know which branch to visit?",
        a: "You can visit any of our nine branches across KL, Selangor, Johor and Sabah. All branches offer the same treatments, follow the same protocols, and are staffed by registered doctors. Choose the one closest to you, or message us on WhatsApp and we'll suggest the nearest branch with the earliest availability.",
      },
      {
        q: "How much do treatments cost?",
        a: "Treatment costs vary depending on the type, area treated, and number of sessions recommended. Your doctor will provide a clear breakdown of costs during consultation, before any treatment begins. We don't use package-based selling.",
      },
      {
        q: "Is there any downtime after treatment?",
        a: "It depends on the treatment. Most non-invasive options like HIFU, Ultherapy, radiofrequency and skin boosters have minimal to no downtime. Treatments like fractional CO₂ laser or RF microneedling may involve a few days of recovery. Your doctor will explain what to expect before you proceed.",
      },
      {
        q: "How many sessions will I need?",
        a: "This depends on your concern, skin condition and the treatment recommended. Some patients see results after a single session, while others benefit from a course of treatments over several weeks or months. Your doctor will outline the expected number of sessions during consultation, with no pressure to commit upfront.",
      },
      {
        q: "Can I combine different treatments?",
        a: "Yes, in many cases treatments can be combined or sequenced as part of a broader plan. For example, a doctor might recommend laser treatment alongside skin boosters, or lifting alongside injectables. Your doctor will assess which combinations are suitable and safe for your skin.",
      },
      {
        q: "What if a doctor recommends I don't need treatment?",
        a: "Then that's the recommendation. Our doctors will tell you honestly if treatment isn't necessary, if your concern is better managed with skincare, or if the expected results wouldn't justify the cost. We'd rather give you an honest answer than an unnecessary treatment.",
      },
    ],
  },
  promo: {
    dialogLabel: "Skincare Mix & Match promotion",
    close: "Close promotion",
    imageAlt: "Kaiteki Skincare Mix & Match promotion: RM699",
    enquire: "Enquire on WhatsApp",
    viewProducts: "View products",
    waMessage: "I'd like to know more about the Skincare Mix & Match RM699 promotion.",
  },
  campaign: {
    slides: [
      {
        label: "7th Anniversary promotion, part 1",
        alt: "Kaiteki 7th Anniversary Sale, Positive Face Project, 1 to 30 November. Treatment bundles: Happy Face Reset (39% off), Bye Bye Angry Face, Dull Out Glow On (48% off), BB Face Lift (save RM2,500) and Tired Face Quickfix. Plus a free limited-edition travel perfume, complimentary consultation, free goodie bag and up to RM5,000 in cash credits. Terms and conditions apply.",
      },
      {
        label: "7th Anniversary promotion, part 2",
        alt: "Kaiteki 7th Anniversary Sale, Positive Face Project, 1 to 30 November. Treatment bundles: Face Sculpt & Slim, Clear Skin Glow (49% off), Sick/Fatigue No More, Blooming Scalp (save RM1,600) and purchase-with-purchase deals at 50% off. Plus a free limited-edition travel perfume, complimentary consultation, free goodie bag and up to RM5,000 in cash credits. Terms and conditions apply.",
      },
    ],
    waMessage: "Hi Kaiteki, I'd like to know more about the 7th Anniversary Positive Face Project promotion.",
    next: "Next promotion",
    prev: "Previous promotion",
  },
};

export const homeCopy: Record<Locale, HomeCopy> = { en, zh: homeZh, ms: homeMs };
