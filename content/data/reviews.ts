import type { GoogleReview } from "@/lib/types";
import { branches } from "./branches";

/**
 * Google reviews, read off each branch's Google Business Profile on
 * GOOGLE_REVIEWS_READ_ON (see branches.ts) and stored here as a static snapshot.
 *
 * ⚠️ COMPLIANCE — READ BEFORE LAUNCH. Patient testimonials on a medical site are
 * restricted in Malaysia (MAB 1/2023 & 3/2023; docs/02 §7 says avoid them). Some
 * reviews below carry outcome/efficacy statements ("my skin improved
 * tremendously", "significant improvement with my acne and scars") which are the
 * specific thing those rules target. This block ships because the client asked
 * for it — it needs MAB sign-off, and `<GoogleReviews />` can be removed from
 * app/page.tsx and app/locations/[slug]/page.tsx in one line if the answer is no.
 *
 * Editorial rules for this file:
 * - Text is VERBATIM. Reviews are other people's words; never reword, fix or
 *   soften them. Long ones are cut at a sentence boundary and end in "…".
 * - Dates are absolute months, not "3 weeks ago" — a static build can't keep a
 *   relative date true.
 * - No reviewer photos: Google's avatar URLs are hotlinks that leak every
 *   visitor's IP to Google and rot when a user changes their picture. The card
 *   draws an initial instead.
 * - These are the 5-star reviews. That is a selection, so every surface that
 *   shows them also shows the unfiltered rating and links to the full profile —
 *   e.g. Petaling Jaya has a 1-star review from May 2026 that is not shown here.
 *
 * ponytail: static snapshot, no Places API key and no widget script. Refresh by
 * re-reading each branch's mapUrl.
 */
export const reviewsByBranch: Record<string, GoogleReview[]> = {
  "mont-kiara": [
    {
      author: "Adin B",
      rating: 5,
      posted: "Jul 2026",
      text: "I had a wonderful experience at this aesthetic clinic. The staff were very friendly, professional and attentive. The therapist had excellent extraction skill and was very gentle. And dr was knowledgeable, experienced and gave great advice. Clinic also clean and comfortable and welcoming.",
    },
    {
      author: "Princess Traveller",
      rating: 5,
      posted: "Jun 2026",
      text: "I found this clinic purely by happenstance. I met Yvonne and her assistants; scheduled an appointment for pico and CO2 skin treatment. The clinic environment was notably clean and zen like quiet. A return visit is definitely in the books.",
    },
    {
      author: "Stephanie Ting",
      rating: 5,
      posted: "2025",
      text: "My beautician Ariel did a wonderful job during every facial, especially her extraction is very thorough and her massage is super relaxing!! Please look for her and make sure to book early as her slot is usually very fast booked out!",
    },
    {
      author: "Brandon Leong",
      rating: 5,
      posted: "2025",
      text: "Have a quite good experience with Kaiteki Mont Kiara! Especially the whole vibe, all the therapists and doctors were so friendly and helpful. Dr Tim was professional in analysing my skin and he was very gentle and careful during the whole treatment.…",
    },
    {
      author: "Gabriela Davis",
      rating: 5,
      posted: "2025",
      text: "Kaiteki Mont Kiara is an excellent skin care clinic! I had a great experience with Dr. Joann Kong and her team. It was my first time getting laser treatments, and I felt very confident by their skills and knowledge. I appreciated how they followed up with me while I was in recovery.…",
    },
    {
      author: "Evelyn Loh",
      rating: 5,
      posted: "2025",
      text: "My favourite place for all my skincare and beauty concerns. Just had my facial with Ariel and she was so gentle with my skin and the shoulder massage was great.",
    },
  ],

  cheras: [
    {
      author: "Rini Sudirman",
      rating: 5,
      posted: "Apr 2026",
      text: "So happy I made the decision to visit this clinic and had a couple of treatments done by Dr William. He is a wonderful doctor - very patient and clearly explains everything. Staff are all welcoming and genuinely friendly. Best part is: completely no hard-selling by anyone, non-pushy at all. Refreshing, indeed. Thank you all!",
    },
    {
      author: "Natalie",
      rating: 5,
      posted: "Jul 2026",
      text: "Dr. William is meticulous and takes the time to tailor treatments to your specific skin concerns, even when they're complex. The facialists here are also skilled. Overall, I'm very satisfied with the service, and this branch has a warm, friendly, and welcoming atmosphere too.",
    },
    {
      author: "Yi Jie",
      rating: 5,
      posted: "Jul 2026",
      text: "Had a great experience at Kaiteki Cheras. The staff were friendly and professional, and the whole process was smooth and pleasant. The environment is clean, comfortable, and well-maintained. I truly enjoyed my experience here.",
    },
    {
      author: "Jing wen",
      rating: 5,
      posted: "2025",
      text: "I had a great experience at Kaiteki Cheras. Dr. William is a really nice doctor who explains everything clearly and patiently. The environment is super comfortable. It feels just like a second home. Plus, they even have a Dyson hair dryer for you to use after treatments, which is such a thoughtful touch.",
    },
    {
      author: "LChoon Tan",
      rating: 5,
      posted: "Jul 2026",
      text: "Doctor William is very caring on my skin and gave right suggestions everytime. The beauticians and staffs here are all very friendly and caring toooo!",
    },
    {
      author: "Fran. chan",
      rating: 5,
      posted: "May 2026",
      text: "I had my pigment laser treatment at Kaiteki and had a very good experience. Dr. William is very patient and explains everything clearly. The environment is clean and comfortable. Overall, I'm satisfied with the service.",
    },
  ],

  "bukit-jalil": [
    {
      author: "Sonia Simon",
      rating: 5,
      posted: "Mar 2026",
      text: "Lovely place for facials and skin treatments. The doctor truly takes the time to understand my skin concerns and thoughtfully adjusts treatments as my skin changes, which I really appreciate. The space is always clean, calming, and well maintained, making every visit a relaxing experience.",
    },
    {
      author: "Mei Jin Looi",
      rating: 5,
      posted: "May 2026",
      text: "Overall amazing experience! Did my facial and pico laser with Amy and Dr Chin, they were super gentle and keep me well explained of the treatment procedures. And most importantly no hard selling!",
    },
    {
      author: "Jessica Choo",
      rating: 5,
      posted: "May 2026",
      text: "I have been here for a few times doing facial and laser treatments. So far all my experiences have been very pleasant. Nurses and doctors are friendly and all the doctors who attended to me really take the time to explain my concerns and not hard selling.…",
    },
    {
      author: "Chen Yen Lim",
      rating: 5,
      posted: "May 2026",
      text: "I came here twice and i had a great experience. The service was good and the staff are very polite & always happy to answer our queries. besides the doctor was very professional and friendly to answer any question regarding my skin too.",
    },
    {
      author: "Freda Lee",
      rating: 5,
      posted: "Feb 2026",
      text: "I had a great facial experience with Cheryl. She was professional, gentle, and very attentive throughout the session. Cheryl explained each step clearly and made the whole experience comfortable.",
    },
    {
      author: "Joeanne T",
      rating: 5,
      posted: "Nov 2025",
      text: "Have been here for almost a year. The doctors and nurses are professional, and the experiences have been good. The best part is there is no hard/up selling!",
    },
  ],

  "four-seasons-kl": [
    {
      author: "P S Lw",
      rating: 5,
      posted: "2025",
      text: "My second time visiting this clinic, great experience consistently. Dr Lee Jin is easy to talk to and is not pushy at all. She is also very gentle. The supporting staffs were all very friendly and helpful, overall I highly recommend this clinic.",
    },
    {
      author: "Yukis",
      rating: 5,
      posted: "2025",
      text: "I recently visited Kaiteki for Ellanse and facial. The clinic's modern atmosphere and friendly staff made me feel comfortable right away. Dr. Calvin was very knowledgeable and explained everything clearly.",
    },
    {
      author: "Jasmine",
      rating: 5,
      posted: "2025",
      text: "Highly recommended to come this clinic for aesthetic consultation. Dr Lee Jin is professional & patiently explaining thorough treatment plan for me to treat my skin. All the staff are very welcoming and friendly here with good ambience.",
    },
    {
      author: "Lawrence Silva",
      rating: 5,
      posted: "2025",
      text: "La Jung Clinic by Kaiteki, was a very first experience for me. Everything about this place was great! From the first time I entered I was pleasantly greeted and guided to the lounge area, which by the way is very clean, smells good and most importantly comfortable.…",
    },
    {
      author: "Wan Li Tang",
      rating: 5,
      posted: "2021",
      text: "Absolutely love the treatment here! Everyone is so friendly, and the doctor is super patient as he explaining my facial conditions and what treatments would be best for me. If you're looking for quality service and treatment, La Jung is the place to be!",
    },
    {
      author: "De Jing Loo",
      rating: 5,
      posted: "2021",
      text: "The whole clinic was really classy and made me feel welcomed with impeccable service upon entering the front door.",
    },
  ],

  "petaling-jaya": [
    {
      author: "Evenne Ho",
      rating: 5,
      posted: "Jul 2026",
      text: "Had a pleasant experience at the clinic. The staff were friendly and professional, and the whole process was smooth. Special thanks to Jolene Law for being so helpful and making me feel comfortable. Highly recommended!",
    },
    {
      author: "Erika Fan",
      rating: 5,
      posted: "Jul 2026",
      text: "Done my facial and Pico Laser here. Dr Say is very patience and caring, Jessie also very attentive. Had a very good experience.",
    },
    {
      author: "Alyani F",
      rating: 5,
      posted: "Sep 2025",
      text: "My first visit to Kaiteki was a really pleasant experience. Jolene was warm, welcoming and you could tell she genuinely cared. Doctor Lucas was calm and clear in his explanations, patiently answering all my questions. Shane treated me to a relaxing rose mask and K Bright ampoule. She was gentle, attentive and efficient throughout.",
    },
    {
      author: "Michelle lim",
      rating: 5,
      posted: "Jun 2026",
      text: "Did my first ever juvelook and sylfirm x treatment last week. Dr Jessie is very experienced and gentle with her hands.",
    },
    {
      author: "Aegypti Goh",
      rating: 5,
      posted: "Jun 2026",
      text: "Very reliable clinic. Did laser and deusaderm with Dr Jessie. Reasonable price and no hard selling.",
    },
    {
      author: "Berney Sho",
      rating: 5,
      posted: "Jul 2026",
      text: "Love this clinic. Staff explain everything clearly with nice service. Jolene Law is very attentive and careful. I highly recommend her.…",
    },
  ],

  "kota-kemuning": [
    {
      author: "Jennifer Thew",
      rating: 5,
      posted: "Jul 2026",
      text: "Visited Kaiteki Facial recently and Dr. Jamie took great care of me. She made me feel comfortable throughout the session and gave helpful advice for my skin. Jun was also very attentive. Highly recommend!",
    },
    {
      author: "Patricia Lim",
      rating: 5,
      posted: "Jul 2026",
      text: "Kaiteki Skin Aesthetic Clinic Kota Kemuning is excellent. Place is clean, staff are lovely, and Dr Yong Bin was fantastic. He's both friendly and professional, explained everything clearly, and tailored the facial treatment to what my face skin needed.…",
    },
    {
      author: "Meiyee Ng",
      rating: 5,
      posted: "Jun 2026",
      text: "I have always been afraid of going for facials because of the pain involved, until I visited Kaiteki Clinic at Kota Kemuning. I was fortunate to be treated by therapist Jun, and the experience completely changed my perception of facials. I shared my fears with her, and she immediately reassured me that she would be gentle and that there was nothing to worry about.…",
    },
    {
      author: "Peggy Chieng",
      rating: 5,
      posted: "May 2026",
      text: "Great experience at Kaiteki Clinic with Dr. Jac, who is incredibly skilled and professional. Her advice was honest, clear, and tailored to what I actually needed, which I really appreciated. Also, a big thank you to Jessie for the facial treatment. She made the whole experience so comfortable and relaxing.…",
    },
    {
      author: "Carmen Chan",
      rating: 5,
      posted: "Jul 2026",
      text: "I like the service of Jun! She is super patient, sweet, lovely and experienced in what she do. She's also very detail oriented and meticulous in her beauty service.",
    },
    {
      author: "ChrisM",
      rating: 5,
      posted: "Dec 2025",
      text: "Totally recommend Dr. Jac! I've had around 6 sessions with her, I love that she's not pushy about the treatments, gave great suggestions & asked if i'm okay with it. Overall, I like the cozy clinic vibe also.…",
    },
  ],

  "southkey-johor-bahru": [
    {
      author: "Shiya Tey",
      rating: 5,
      posted: "May 2026",
      text: "Awesome service! Dr Teresa and the team are very professional, patient and details. They will suggest based on what you really need. Recommended!!",
    },
    {
      author: "SRW",
      rating: 5,
      posted: "Jul 2026",
      text: "I had such a wonderful experience at this aesthetic clinic! The service was excellent from start to finish, and everyone made me feel comfortable and well taken care of. Doctor Theresa was incredibly honest, patient, and thorough in explaining everything, which made me feel confident in the treatment.…",
    },
    {
      author: "Liz Fon",
      rating: 5,
      posted: "Oct 2025",
      text: "Really glad I met Dr Andrea and Dr Teresa at Kaiteki! Both are super friendly, patient and professional. They explained everything clearly and made me feel very comfortable throughout my visit. What I appreciate most is that they give honest advice and recommend only what's suitable, no unnecessary upselling.…",
    },
    {
      author: "Ericka Gwenn Olaguera",
      rating: 5,
      posted: "Dec 2025",
      text: "My first consultation and treatment went so smooth and so well. Dr Teresa addressed all my concerns and advised what is just needed. All staffs were so friendly and warm. This Aesthetic clinic is highly recommendable! Will definitely come here again.",
    },
    {
      author: "afreen kaur",
      rating: 5,
      posted: "Mar 2026",
      text: "Lovely service from Rachelle! She carefully explained the different promotions available and advised me on which option would suit me best. Dr JM was also great at explaining why acne starts, how to prevent it, and what I should focus on for my skin.",
    },
    {
      author: "Pierce Ang",
      rating: 5,
      posted: "2025",
      text: "Very professional and the clinic to go for best results. Dr. Andrea was my doctor to go to. Very patient, gentle, and able to give good advice on the appropriate solutions.…",
    },
  ],

  "pelangi-johor-bahru": [
    {
      author: "Fawnia Sabai",
      rating: 5,
      posted: "Jun 2026",
      text: "A friend of mine introduced me to this clinic. Very pleased with the service here. Dr Jeremy is very professional and gives great advice. Joy did the facial for me. She's efficient and was very gentle. Highly recommend. Thank you!",
    },
    {
      author: "Tan Ling yan",
      rating: 5,
      posted: "Jul 2026",
      text: "Had a very pleasant experience here. Dr. Chloe is very skilled and gentle. The staff were also very caring and professional. Felt very comfortable throughout the whole session.",
    },
    {
      author: "Joe Nah",
      rating: 5,
      posted: "Jun 2026",
      text: "Had a really pleasant experience at Kaiteki Skin Aesthetic Clinic with Dr Jeremy. He was very meticulous and detailed in explaining every procedure, making sure I fully understood what was suitable for my skin concerns. What I appreciated most was that he only recommended treatments that were genuinely relevant and necessary, without any hard selling.…",
    },
    {
      author: "MIN",
      rating: 5,
      posted: "Mar 2026",
      text: "Appointments always start on time, and the service is attentive. The staffs remember your conditions and make an effort to keep you comfortable. Although I couldn't do treatments due to pregnancy, the consultation was clear with no hard selling.…",
    },
    {
      author: "Cheryl Tan",
      rating: 5,
      posted: "Jun 2026",
      text: "So glad I did my research and found a 5 star clinic in Johor. Dr Chloe was thorough in her explanation and meticulous in the procedures. I'm not a stranger to some aesthetic treatments but I learnt quite a bit from speaking with her. The clinic is clean and well-run so everything was seamless from booking appointment to…",
    },
    {
      author: "BlackBlack Sheeps",
      rating: 5,
      posted: "Jul 2026",
      text: "I had an excellent experience at Kaiteki with Dr Jeremy for my HIFU treatment and Onda Pro session. Dr Jeremy was exceptionally meticulous, patient, and professional throughout the entire process. He took the time to thoroughly assess my concerns, explain each treatment in detail, and ensure I was comfortable every step of the way.…",
    },
  ],

  "kota-kinabalu": [
    {
      author: "Carmen Pang",
      rating: 5,
      posted: "Jul 2026",
      text: "Kaiteki is one of my favourite beauty clinics! I've been here countless times, and each visit feels like a whole new experience. They offer so many different services. The staff are always so welcoming, it makes you feel right at home and genuinely well taken care of.",
    },
    {
      author: "Dennis Lim",
      rating: 5,
      posted: "Jun 2026",
      text: "Thank you, Dr. Xiao Chien and team! With their professional and excellent service, they are definitely my choice as a repeat customer. It's always exciting to visit them.",
    },
    {
      author: "Yati yahya",
      rating: 5,
      posted: "Apr 2026",
      text: "This was my first time visiting an aesthetic clinic and I chose Kaiteki Clinic KK. At first I felt a little nervous, but the staff were very friendly and made me feel comfortable. The doctor explained everything clearly and the whole experience was very pleasant. The clinic is also clean and comfortable.",
    },
    {
      author: "Adra Qaisara",
      rating: 5,
      posted: "Apr 2026",
      text: "First of all, shoutout to all the Kaiteki staff for the warm welcome as they help me throughout the registration process as this is my first time doing aesthetic treatment. Big shoutout to Dr Xiao, her injection technique. Will comeback here again.",
    },
    {
      author: "Xiao Ming Lim",
      rating: 5,
      posted: "May 2026",
      text: "Friendly, informative and effective treatments by Dr Xiao Chien! She suggested a few procedures customized to my skin condition and any concerns were addressed before starting the treatments. Ms Wenn did my facial and explained each step. It was so comfortable until I fell asleep.…",
    },
    {
      author: "Jessie",
      rating: 5,
      posted: "May 2026",
      text: "Dr Xiao Chien was so gentle and I don't feel any pain at all!",
    },
  ],
};

/** Reviews for one branch, or [] if that branch has no snapshot yet. */
export function reviewsFor(slug: string): GoogleReview[] {
  return reviewsByBranch[slug] ?? [];
}

/**
 * Chain-wide shelf for the homepage: one review per branch, taken round-robin so
 * every branch is represented before any branch repeats — a plain flat-map would
 * front-load Mont Kiara and bury Kota Kinabalu.
 */
export function reviewsAcrossBranches(limit = 9): GoogleReview[] {
  const out: GoogleReview[] = [];
  for (let i = 0; out.length < limit; i++) {
    const before = out.length;
    for (const b of branches) {
      const r = reviewsByBranch[b.slug]?.[i];
      if (r && out.length < limit) out.push(r);
    }
    if (out.length === before) break; // every branch exhausted
  }
  return out;
}
