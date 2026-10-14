import { Container } from "./Container";
import { Faq } from "./Faq";
import { homeCopy } from "@/content/i18n/home";
import type { Locale } from "@/lib/i18n";

// Homepage FAQ — visible accordion only, no FAQPage JSON-LD (lib/schema.ts:
// never emit FAQPage/HowTo — self-serving + deprecated rich results).
// Questions per locale are phrased the way people ask them (content/i18n/home.ts).

export function HomeFaq({ locale = "en" }: { locale?: Locale }) {
  const k = homeCopy[locale].faq;
  return (
    <section id="faq" className="relative overflow-hidden bg-page">
      <Container className="reveal py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="h-section">{k.h2}</h2>
        </div>
        <div className="mx-auto mt-10 max-w-[68ch]">
          <Faq items={k.items} anchorFrom={homeCopy.en.faq.items} />
        </div>
      </Container>
    </section>
  );
}
