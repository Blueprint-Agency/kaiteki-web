import { Container } from "./Container";
import { Faq } from "./Faq";
import type { Faq as FaqItem } from "@/lib/types";

// Homepage FAQ — visible accordion only, no FAQPage JSON-LD (lib/schema.ts:
// never emit FAQPage/HowTo — self-serving + deprecated rich results).
const faqs: FaqItem[] = [
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
];

export function HomeFaq() {
  return (
    <section id="faq" className="relative overflow-hidden bg-page">
      <Container className="reveal py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-2xl font-bold leading-tight text-espresso sm:text-3xl">
            Frequently asked{" "}
            <span className="font-serif font-normal italic text-mocha">questions</span>
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-[68ch]">
          <Faq items={faqs} />
        </div>
      </Container>
    </section>
  );
}
