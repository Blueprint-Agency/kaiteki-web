import type { Doctor } from "@/lib/types";

// Real names, credentials, roles and photos — sourced from the clinic's own
// published team page (legacy well-known/aboutus.html "Meet the Experts").
// MMC registration numbers are NOT shown on that page and are a client data
// dependency (docs/05 §9) still pending; branch assignment isn't published
// either, so `branches` is left empty rather than guessed.
export const doctors: Doctor[] = [
  {
    slug: "dr-jessie-lim",
    fullName: "Dr Jessie Lim Jia Min",
    credentials: "MD, LCP Board Certified, MAC, AAAM",
    role: "Founder & CEO, Aesthetic Physician",
    photo: "/images/doctors/dr-jessie-lim.jpg",
    branches: [],
    bio: [
      "Dr Jessie Lim is a LCP certified aesthetic doctor. She obtained her medical degree from University Putra Malaysia with honours. She then went on to pursue her post-graduate certification in Aesthetics in Medical Aesthetic Certification Programme and American Academy of Aesthetic Medicine (AAAM).",
      "She is a member of American Academy of Aesthetic Medicine (AAAM) and Malaysia Society of Aesthetic Medicine (MSAM).",
      "Dr Jessie is very passionate about combining science and art in human aesthetics. To her, the most fulfilling and satisfying part of her day is seeing the joyful smiles on her patients' faces that radiates confidence.",
      "She also emphasizes on healthy aging and believes that everyone at every stage of life deserves to be confident thus improving quality in all aspects. Being a committed doctor, she always devotes time in managing patient's concern and expectations in order to produce safe and effective results.",
    ],
    instagram: "https://www.instagram.com/kaiteki.my",
    seoTitle: "Dr Jessie Lim — Founder & CEO, Aesthetic Physician | Kaiteki",
    seoDescription:
      "Dr Jessie Lim (LCP), Kaiteki aesthetic physician. Review credentials, then book a free WhatsApp consultation.",
  },
  {
    slug: "dr-chew-yuhhui",
    fullName: "Dr Chew Yuhhui",
    credentials: "MBBS, LCP Board Certified, MAC, MSAM",
    role: "Co-Founder & Senior Medical Director",
    photo: "/images/doctors/dr-chew-yuhhui.jpg",
    branches: [],
    bio: [
      "Allow your passion to become your purpose and it will one day become your profession.",
      "To practice with passion is utmost importance for Dr Chew. It was a circumspect decision to embark on this arduous journey of medicine but she pursued relentlessly and graduated from Melaka Manipal Medical College with a degree of Bachelor in Medicine, Bachelor in Surgery ( MBBS).",
      "Her love for discovering new knowledge and keen eye on beauty motivated her to pursue aesthetic medicine where she practices with delectation. Often placing herself in her patient's shoes, she listens with empathy and goes the extra mile to ensure satisfaction from them. She also holds on to the Hippocratic Oath of ‘Primum non nocere' (first, do no harm) and emphasizes on safe medicine.",
      "For her, job satisfaction and patient's satisfaction gives her insurmountable joy. She is an accomplished Aesthetic Physician with MBBS, MAC certification. She is bubbly, approachable and you will definitely feel comfortable sharing your stories or your problems with her!",
      "On the days she is not seeing patients , she enjoys blogging and dabbling in video making.",
    ],
    instagram: "https://www.instagram.com/kaiteki.my",
    seoTitle: "Dr Chew Yuhhui — Senior Medical Director | Kaiteki",
    seoDescription:
      "Dr Chew Yuhhui (MBBS, LCP), Kaiteki aesthetic physician. Review credentials, then book a free WhatsApp consultation.",
  },
  {
    slug: "dr-yeong-bin",
    fullName: "Dr Yeong Bin",
    credentials: "MBBS, LCP Board Certified, MAC, MSAM",
    role: "Co-Founder & Senior Medical Director",
    photo: "/images/doctors/dr-yeong-bin.jpg",
    branches: [],
    bio: [
      "Dr Yeong Bin earned his Bachelor of Medicine & Surgery (MBBS) from Monash University. He began his career as a doctor and completed his 2 years compulsory service in government hospitals, obtaining and sharpening his skills along the way as a medical officer in various departments.",
      "Since his early days as a doctor, Dr Yeong Bin has always nurtured a keen interest in the field of cosmetology and aesthetic medicine. He is particularly drawn to minimally invasive aesthetic treatments which can significantly enhance the quality of life and allow one to age gracefully. He pursued this interest by participating in various aesthetic courses and workshops including the Malaysian Aesthetic Certification (MAC).",
      "Dr Yeong Bin firmly believes that every individual is unique, hence he constantly seeks to engage with his clients and attain a clear understanding before drafting customised treatment plans for them.",
    ],
    instagram: "https://www.instagram.com/kaiteki.my",
    seoTitle: "Dr Yeong Bin, Senior Medical Director — Kaiteki Clinic",
    seoDescription:
      "Dr Yeong Bin (MBBS, MAC), Kaiteki aesthetic physician. Review credentials, then book a free WhatsApp consultation.",
  },
  {
    slug: "dr-william-yap",
    fullName: "Dr William Yap",
    credentials: "MD, LCP Board Certified, MAC",
    role: "Partner, Aesthetic Physician",
    photo: "/images/doctors/dr-william-yap.jpg",
    branches: [],
    bio: [
      "Dr William Yap obtained his Medical Degree (MD) from University of Gahjah Mada. After completing his compulsory house officer training, he continued his 6 years journey in government hospital as medical officer. He has been rotating in different subdepartment including dermatology, infectious disease, cardiology, etc to enhance his skills and knowledge.",
      "Besides that, he has been regularly upgrading his skill and knowledge by attending courses and conferences such as MAC ( Malaysia Aesthetic Certification) and he is a certified Rejuran Authorised Injector.",
      "Dr William believes that aging is inevitable, but to age gracefully is the key. He is very passionate in helping his patients improve their outer appearance and build their confidence.",
    ],
    instagram: "https://www.instagram.com/kaiteki.my",
    seoTitle: "Dr William Yap — Partner, Aesthetic Physician | Kaiteki",
    seoDescription:
      "Dr William Yap (MD, LCP), Kaiteki aesthetic physician. Review credentials, then book a free WhatsApp consultation.",
  },
  {
    slug: "dr-lim-xiao-chien",
    fullName: "Dr Lim Xiao Chien",
    credentials: "MBBS, LCP Board Certified, GCFM, MAC",
    role: "Partner, Aesthetic Physician",
    photo: "/images/doctors/dr-lim-xiao-chien.jpg",
    branches: [],
    bio: [
      "Dr Lim Xiao Chien graduated from Jawaharlal Nehru Medical College, KLE University in India with a degree in Bachelor of Medicine and Bachelor of Surgery (MBBS).",
      "During her many years as a doctor, she was mostly involved in Family Medicine, where she strived to provide the best care to her patients and improved herself by obtaining her Graduate Certificate In Family Medicine (GCFM).",
      "As an aesthetic practitioner, she consistently tries to upgrade her skills and knowledge thus has attended regular workshops and conferences, including the Medical Aesthetic Certification (MAC). Dr Xiao Chien holds by the belief that less is sometimes more; choosing the right treatments, even just minimally invasive ones, can make a big difference over time. She is friendly and engaging during discussions with patients to achieve a good understanding before proceeding with any treatments.",
      "Ageing is inevitable so why not practice self-love? Self-love doesn't necessarily mean just a healthy lifestyle, it can also include getting better skin or features.",
    ],
    instagram: "https://www.instagram.com/kaiteki.my",
    seoTitle: "Dr Lim Xiao Chien — Partner, Aesthetic Physician | Kaiteki",
    seoDescription:
      "Dr Lim Xiao Chien (MBBS, MAC), Kaiteki aesthetic physician. Review credentials and branch info, then book a free WhatsApp consultation.",
  },
  {
    slug: "dr-jeremy-low",
    fullName: "Dr Jeremy Low Jia Wei",
    credentials: "MBBS, MAC, LCP Board Certified",
    role: "Partner, Aesthetic Physician",
    photo: "/images/doctors/dr-jeremy-low.jpg",
    branches: [],
    bio: [
      "Dr Jeremy graduated with a Bachelor of Medicine & Surgery (MBBS) from Newcastle University Medicine Malaysia. After completing his compulsory housemanship, he served as a medical officer in the Dermatology department and undergone training under a renowned dermatologist. He has vast knowledge and experience in dealing with a broad spectrum of skin conditions such as acne, rosacea and pigmentation. Dr Jeremy is also a distinguished speaker for several dermatology workshops associated with acne. With his years of experience in the hospital treating patients, improving their well-being and appearances, Dr Jeremy decided to venture into aesthetic medicine, aiming to broaden his horizons and achieve new heights in this field.",
      "Dr Jeremy has helped many patients bring out their inner beauty and confidence by enhancing their outer appearances. His warm-hearted personality has given many patients comfort and assurance during consultations and treatments. He was awarded Excellence Service Award (APC) by the State Ministry of Health in recognition of his excellence service. Dr Jeremy loves sharing his knowledge with his patients, providing them with an in-depth understanding of the treatment options and process, tailored to each individual needs and desired outcome. Patient's well-being and satisfaction are his utmost priorities!",
    ],
    instagram: "https://www.instagram.com/kaiteki.my",
    seoTitle: "Dr Jeremy Low — Partner, Aesthetic Physician | Kaiteki",
    seoDescription:
      "Dr Jeremy Low (MBBS, MAC), Kaiteki aesthetic physician. Review credentials, then book a free WhatsApp consultation.",
  },
  {
    slug: "dr-chang-chee-seong",
    fullName: "Dr Chang Chee Seong",
    credentials: "MD, OHD (NIOSH), MAC",
    role: "Wellness Physician",
    photo: "/images/doctors/dr-chang-chee-seong.jpg",
    branches: [],
    bio: [
      "Dr Chang Chee Seong graduated from Kursk State Medical University with an M.D. and after serving the public sector, pursued his post graduate diploma in Occupational Health with NIOSH.",
      "Having passion and interest in Family Medicine and Occupational Health, he founded Medipulse Group of Clinics in 2016. Being a family physician for more than 10 years, Dr Chang encountered large number of patients suffering from hair loss, affecting their self-esteem and overall quality of life. Recognizing the profound impact hair loss have on one-self, Dr Chang strives to provide effective solutions to help his patients restore hair and confidence.",
      "Through continuous learning and dedication, Dr Chang has become proficient in the latest techniques and advancement in hair restoration procedures. His comprehensive approach to treatment encompasses both surgical and non-surgical options, tailored to meet the unique needs and preference of each patient.",
    ],
    instagram: "https://www.instagram.com/kaiteki.my",
    seoTitle: "Dr Chang Chee Seong — Wellness Physician | Kaiteki",
    seoDescription:
      "Dr Chang Chee Seong (MD, MAC), Kaiteki aesthetic physician. Review credentials, then book a free WhatsApp consultation.",
  },
  {
    slug: "dr-jacqueline-tan",
    fullName: "Dr Jacqueline Tan",
    credentials: "MBBS, LCP Board Certified, MSc (UCSI)",
    role: "Aesthetic Physician",
    photo: "/images/doctors/dr-jacqueline-tan.jpg",
    branches: [],
    bio: [
      "Dr. Jacqueline Tan graduated from IMU with a Bachelor of Medicine & Surgery (MBBS). She started her career as a doctor and has completed her 2 years compulsory service as a house officer in government hospital. She continued her medical journey as a medical officer in the Emergency Department to enhance her skill and experience in resuscitation. Being involved in emergency cases, her nature is being calm, empathic and determined.",
      "Furthermore, she attended courses and trainings such as Master of Science (Healthy Aging, Medical Aesthetic and Regenerative Medicine) from UCSI to further improve her skills and knowledge in Aesthetic Medicine.",
      "Dr. Jac believes that everyone is beautiful in their own way. She will helps you achieve a more youthful appearance in order to boost your confidence, mindset, and overall enjoyment of everyday life.",
    ],
    instagram: "https://www.instagram.com/kaiteki.my",
    seoTitle: "Dr Jacqueline Tan, Aesthetic Physician — Kaiteki Clinic",
    seoDescription:
      "Dr Jacqueline Tan (MBBS, MSc), Kaiteki aesthetic physician. Review credentials, then book a free WhatsApp consultation.",
  },
  {
    slug: "dr-joaan-kong",
    fullName: "Dr Joaan Kong",
    credentials: "MBBS, AAAM, LCP Board Certified",
    role: "Aesthetic Physician",
    photo: "/images/doctors/dr-joaan-kong.jpg",
    branches: [],
    bio: [
      "Dr Joaan Kong obtained her Bachelor of Medicine and Surgery (MBBS) from International Medical University (IMU). She then trained as a Paediatric doctor before embarking her journey in aesthetic medicine. Her training in the paediatric department has refined her skills in needle handling and detailed meticulous work.",
      "Being a beauty enthusiast, Dr Joaan has a keen eye on different standards of beauty and holds great satisfaction in helping patients to achieve their beauty goals. She believes that listening to patient's need and meeting patient's expectation are the outmost important forms of professionalism.",
      "She is a also a gym enthusiast and enjoy the adrenaline rush of adventurous activities. She believes that fitness and positive mindset enhance beauty and make you glow from within.",
    ],
    instagram: "https://www.instagram.com/kaiteki.my",
    seoTitle: "Dr Joaan Kong, Aesthetic Physician — Kaiteki Clinic",
    seoDescription:
      "Dr Joaan Kong (MBBS, LCP), Kaiteki aesthetic physician. Review credentials, then book a free WhatsApp consultation.",
  },
  {
    slug: "dr-tim-chua",
    fullName: "Dr Tim Chua",
    credentials: "MBBS, MAC, LCP Certified",
    role: "Aesthetic Physician",
    photo: "/images/doctors/dr-tim-chua.jpg",
    branches: [],
    bio: [
      "Dr Tim Chua graduated from Taylor's University with an MBBS. Years of working experience as a medical officer in otorhinolaryngology has equipped him with the relevant skills to deal with both medical and surgical cases.",
      "He has a passion for enhancing natural beauty and boosting self-confidence through personalized treatments that deliver natural looking results. Through continuous education and staying up-to-date with the latest advancements, Dr Tim's warm approach and artistic eye makes a competent practitioner in the industry and is committed to empowering individuals to embrace their unique beauty and feel confident in their own skin.",
    ],
    instagram: "https://www.instagram.com/kaiteki.my",
    seoTitle: "Dr Tim Chua — Aesthetic Physician | Kaiteki Clinic",
    seoDescription:
      "Dr Tim Chua (MBBS, MAC), Kaiteki aesthetic physician. Review credentials, then book a free WhatsApp consultation.",
  },
  {
    slug: "dr-calvin-tan",
    fullName: "Dr Calvin Tan",
    credentials: "MD, MAC",
    role: "Aesthetic Physician",
    photo: "/images/doctors/dr-calvin-tan.jpg",
    branches: [],
    bio: [
      "Dr Calvin is a passionate medical doctor with a Medical Degree from Universiti Sains Malaysia (USM). He has over 9 years of experience in the medical industry where he worked in Orthopaedic Surgery as a medical officer then he pursued his interest into medical aesthetics. With a strong foundation in surgical training, he has acquired the hands on dexterity and precision that he can bring that experience into the field of medical aesthetics.",
      "He also constantly improves his skills by attending various workshops and has completed MAC certification.",
      "In medical aesthetics, he has passion for facial contouring and anti-aging treatments that emphasize natural yet harmonious results. He is driven by a commitment to his patients' satisfaction hence he strives to ensure that every patient leaves not only looking at their best outcome but also feeling confident and happy.",
    ],
    instagram: "https://www.instagram.com/kaiteki.my",
    seoTitle: "Dr Calvin Tan, Aesthetic Physician — Kaiteki Clinic",
    seoDescription:
      "Dr Calvin Tan (MD, MAC), Kaiteki aesthetic physician. Review credentials, then book a free WhatsApp consultation.",
  },
  {
    slug: "dr-lucas-chew",
    fullName: "Dr Lucas Chew",
    credentials: "MBBS",
    role: "Aesthetic Physician",
    photo: "/images/doctors/dr-lucas-chew.jpg",
    branches: [],
    bio: [
      "Dr. Lucas Chew is a committed aesthetic physician holding a Bachelor of Medicine and Bachelor of Surgery (MBBS) from Taylor's University. He is dedicated to delivering personalized, evidence-based treatments aimed at enhancing skin health and natural beauty. Dr. Lucas is passionate about maintaining a leading role in advancements in aesthetic medicine to provide safe, high-quality healthcare solutions.",
      "Before joining Kaiteki, Dr. Lucas served at Hospital Seberang Jaya and Hospital Kuala Lumpur (HKL), Malaysia's largest hospital. At HKL, he collaborated with esteemed specialists, managing a wide range of complex cases, which deepened his enthusiasm for patient care. This experience spurred his interest in the aesthetics field, where he now integrates his extensive medical expertise with a deep understanding of cutting-edge technologies and treatment modalities in skincare.",
      "His patient-centered philosophy not only seeks to enhance appearance but also aims to boost confidence and promote overall well-being, ensuring every individual receives effective and innovative aesthetic care.",
    ],
    instagram: "https://www.instagram.com/kaiteki.my",
    seoTitle: "Dr Lucas Chew, Aesthetic Physician — Kaiteki Clinic",
    seoDescription:
      "Dr Lucas Chew (MBBS), Kaiteki aesthetic physician. Review credentials, then book a free WhatsApp consultation.",
  },
  {
    slug: "dr-jade",
    fullName: "Dr Jade",
    credentials: "MBBS, LCP Board Certified",
    role: "Aesthetic Physician",
    photo: "/images/doctors/dr-jade.jpg",
    branches: [],
    bio: [
      "Dr Jade obtained her Medical Degree from Russian State Medical University (Moscow). After serving her compulsory service with the government, she moved on to continue her services in the Emergency Department before subsequently moving on to serve in the interior towns of Sarawak.",
      "Dr Jade developed a deep passion for the aesthetic and anti-aging field when she recognized that its impact goes far beyond just skin deep. For her, it is about offering and restoring confidence, self-esteem, and empowerment in her patients so that they are able to lead a better quality life.",
      "Drawing from her experience in Sarawak family practice, what comes naturally to her is fostering meaningful and trusting relationships with her patients. She believes that it is with this rapport that she is able to truly see her patients more holistically , better understand their individual needs and expectations, and thus create a more a personalized and effective treatment plan for them.",
    ],
    instagram: "https://www.instagram.com/kaiteki.my",
    seoTitle: "Dr Jade, MBBS, LCP — Aesthetic Physician | Kaiteki",
    seoDescription:
      "Dr Jade (MBBS, LCP), Kaiteki aesthetic physician. Review credentials, then book a free WhatsApp consultation.",
  },
  {
    slug: "dr-teresa-tan",
    fullName: "Dr Teresa Tan",
    credentials: "MD, MAC",
    role: "Aesthetic Physician",
    photo: "/images/doctors/dr-teresa-tan.jpg",
    branches: [],
    bio: [
      "Dr. Teresa Tan earned her Medical Degree (MD) from Lincoln University College and initially pursued a career in Obstetrics and Gynecology (O&G). This valuable experience honed her precision and meticulousness in needle handling, skills that translate seamlessly to aesthetic medicine.",
      "A lifelong beauty enthusiast, Dr. Teresa possesses a keen eye for aesthetics and a deep understanding of diverse beauty standards. She finds immense satisfaction in helping patients achieve their desired appearance and optimal skin health. Dr. Teresa prioritizes active listening and open communication, believing that understanding and meeting each patient's expectations are paramount to delivering exceptional care.",
      "Beyond her medical expertise, Dr. Teresa is an adventurous spirit who thrives on the excitement of travel and adrenaline-fueled activities. She views beauty as a catalyst for confidence and personal growth, empowering individuals to reach their full potential.",
    ],
    instagram: "https://www.instagram.com/kaiteki.my",
    seoTitle: "Dr Teresa Tan, Aesthetic Physician — Kaiteki Clinic",
    seoDescription:
      "Dr Teresa Tan (MD, MAC), Kaiteki aesthetic physician. Review credentials, then book a free WhatsApp consultation.",
  },
  {
    slug: "dr-chin-wei-horng",
    fullName: "Dr Chin Wei Horng",
    credentials: "MD, GCFM, OHD, MAC, LCP Certified",
    role: "Aesthetic Physician",
    photo: "/images/doctors/dr-chin-wei-horng.jpg",
    branches: [],
    bio: [
      "Dr. Chin is a medical doctor with over 10 years experience in clinical practice, dedicated to helping patients look and feel their best through safe, effective, and personalised treatments. He graduated from Crimea State Medical University and gained valuable clinical experience in emergency medicine and psychiatry during his compulsory service, forming a strong foundation in patient care.",
      "As a qualified General Practitioner, Dr. Chin continually enhances his expertise through advanced professional training. His credentials include the Graduate Certificate in Family Medicine (GCFM, AFPM), Occupational Health Doctor (OHD, NIOSH), postgraduate Medical Aesthetic Certification (MAC), and accreditation as a Basic Life Support (BLS) Instructor under the American Heart Association. He is also a board-certified LCP aesthetic practitioner, reflecting his commitment to high standards and clinical excellence in aesthetic medicine.",
    ],
    instagram: "https://www.instagram.com/kaiteki.my",
    seoTitle: "Dr Chin Wei Horng, Aesthetic Physician — Kaiteki Clinic",
    seoDescription:
      "Dr Chin Wei Horng (MD, GCFM, MAC), Kaiteki aesthetic physician. Review credentials and branch info, then book a free WhatsApp consultation.",
  },
  {
    slug: "dr-yvonne-chuah",
    fullName: "Dr Yvonne Chuah",
    credentials: "MD, MAC, LCP Certified",
    role: "Aesthetic Physician",
    photo: "/images/doctors/dr-yvonne-chuah.jpg",
    branches: [],
    bio: [
      "Dr. Yvonne Chuah graduated from Nizhny Novgorod State Medical Academy (NNSMA). She began her medical career serving as a Medical Officer at Hospital Pulau Pinang, followed by further service at Hospital Sungai Bakap.",
      "During her years in government service, Dr. Yvonne gained broad experience managing various medical and emergency conditions, including active service during the COVID-19 pandemic, where she supported the community through a challenging period.",
      "She developed a strong interest in aesthetic medicine and skin health, believing that healthy skin plays an important role in confidence and overall well-being. With her warm and approachable personality, Dr. Yvonne values open communication and strives to ensure her patients feel comfortable and well cared for. Her aesthetic practice focuses on safety, natural-looking results, and personalized treatment plans.",
      "Committed to continuous learning, Dr. Yvonne has completed the Medical Aesthetic Certification (MAC) Programme, upholding high standards of ethical and clinical practice.",
      "Her favourite quote and personal belief is to always strive to be the best version of yourself.",
    ],
    instagram: "https://www.instagram.com/kaiteki.my",
    seoTitle: "Dr Yvonne Chuah, Aesthetic Physician — Kaiteki Clinic",
    seoDescription:
      "Dr Yvonne Chuah (MD, MAC), Kaiteki aesthetic physician. Review credentials, then book a free WhatsApp consultation.",
  },
  {
    slug: "dr-jamie-gan",
    fullName: "Dr Jamie Gan Ee Vienn",
    credentials: "MD, PDAM (EIU)",
    role: "Aesthetic Physician",
    photo: "/images/doctors/dr-jamie-gan.jpg",
    branches: [],
    bio: [
      "Dr. Jamie obtained her medical degree from Kursk State Medical University, Russia. She subsequently completed her housemanship and served in the Emergency Department at Hospital Tuanku Jaafar, Seremban, where she developed strong clinical judgement, precision, and the ability to perform under pressure.",
      "Driven by a growing interest in aesthetic medicine, Dr. Jamie pursued further training and obtained her Professional Diploma in Aesthetic Medicine from IIWAM, equipping her with a solid foundation in evidence-based aesthetic treatments.",
      "Her approach is holistic and comprehensive, guided by the philosophy of natural, soft, and timeless enhancement. She focuses on preserving individuality while refining facial harmony through personalised treatment plans. Her goal is to deliver results that are refined, elegant, and enduring — allowing clients to look effortlessly refreshed and confident at every stage.",
    ],
    instagram: "https://www.instagram.com/kaiteki.my",
    seoTitle: "Dr Jamie Gan, Aesthetic Physician — Kaiteki Clinic",
    seoDescription:
      "Dr Jamie Gan (MD, PDAM), Kaiteki aesthetic physician. Review credentials, then book a free WhatsApp consultation.",
  },
  {
    slug: "dr-jen-meng",
    fullName: "Dr Jen Meng",
    credentials: "MBBS, MAC",
    role: "Aesthetic Physician",
    photo: "/images/doctors/dr-jen-meng.jpg",
    branches: [],
    bio: [
      "Dr Jen Meng is an aesthetic medical doctor who graduated with Bachelor of Medicine, Bachelor of Surgery (MBBS) from Manipal Academy of Higher Education. With training in Plastic and Reconstructive Surgery, he has strong expertise in facial anatomy, skin health, and procedural safety.",
      "Dr Jen Meng is dedicated to delivering natural, balanced, and refined results. Currently pursuing Medical Aesthetic Certification (MAC), he carefully evaluates patient concerns and creates personalised, safe, and effective treatment plans at Kaiteki Clinic",
    ],
    instagram: "https://www.instagram.com/kaiteki.my",
    seoTitle: "Dr Jen Meng — Aesthetic Physician | Kaiteki Clinic",
    seoDescription:
      "Dr Jen Meng (MBBS, MAC), Kaiteki aesthetic physician. Review credentials, then book a free WhatsApp consultation.",
  },
  {
    slug: "dr-chloe-wan",
    fullName: "Dr Chloe Wan Poh Yee",
    credentials: "MBBS, MAC",
    role: "Aesthetic Physician",
    photo: "/images/doctors/dr-chloe-wan.jpg",
    branches: [],
    bio: [
      "Dr Chloe graduated from Newcastle University Medicine Malaysia with a Bachelor of Medicine & Bachelor of Surgery (MBBS). She has a strong passion for aesthetic medicine and is dedicated to help patients achieve healthier, more confident skin through personalized and evidence-based treatments.",
      "Believing that aesthetic enhancements should highlight and preserve natural beauty, Dr Chloe focuses on creating subtle, balanced and natural-looking results tailored to each patient's unique features and concerns. She provides individualized treatment plans ranging from skin rejuvenation and laser treatments to injectables and acne management.",
      "Known for her gentle approach and attentive consultations, Dr Chloe prioritizes patients' safety, comfort and satisfaction. She is committed to continuously updating her knowledge and skills to stay aligned with the latest advancements in aesthetic medicine, ensuring that patients receive safe and effective care.",
    ],
    instagram: "https://www.instagram.com/kaiteki.my",
    seoTitle: "Dr Chloe Wan, Aesthetic Physician — Kaiteki Clinic",
    seoDescription:
      "Dr Chloe Wan (MBBS, MAC), Kaiteki aesthetic physician. Review credentials, then book a free WhatsApp consultation.",
  },
  {
    slug: "dr-say-wei-xian",
    fullName: "Dr Say Wei Xian",
    credentials: "MBBS, MAC",
    role: "Aesthetic Physician",
    photo: "/images/doctors/dr-say-wei-xian.jpg",
    branches: [],
    bio: [
      "Dr Say Wei Xian is a medical doctor, graduating from International Medical University (IMU). She spent her medical officer years in ophthalmology, where she developed strong precision through microsurgical and laser-based procedures.",
      "In aesthetic medicine, she focuses on subtle, well-balanced results that enhance rather than change. She believes patients should look like themselves, just better, and approaches each treatment with careful consideration of what is truly suitable for the individual.",
      "She is known for her detailed and clear consultations, taking time to guide patients through their options so they feel comfortable and confident in their decisions. Her approach is thoughtful and measured, with a strong emphasis on precision and communication.",
      "Dr Say values building genuine connections with her patients, creating a space where they feel heard, understood, and at ease. For her, it is not about doing more, but about doing what is right for each patient.",
    ],
    instagram: "https://www.instagram.com/kaiteki.my",
    seoTitle: "Dr Say Wei Xian, Aesthetic Physician — Kaiteki Clinic",
    seoDescription:
      "Dr Say Wei Xian (MBBS, MAC), Kaiteki aesthetic physician. Review credentials and branch info, then book a free WhatsApp consultation.",
  },
];

export function doctorBySlug(slug: string) {
  return doctors.find((d) => d.slug === slug);
}
