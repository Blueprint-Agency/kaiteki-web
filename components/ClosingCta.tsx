import { Container } from "./Container";
import { Dandelion } from "./Dandelion";
import { WhatsAppButton } from "./WhatsAppCTA";

/** A calm, warm final invitation to WhatsApp — light, tight, no dark band. */
export function ClosingCta() {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-b from-tint to-porcelain">
      <Dandelion className="opacity-70" />
      <Container className="relative flex flex-col items-center gap-6 py-16 text-center sm:py-20">
        <h2 className="text-balance text-3xl font-bold text-espresso sm:text-4xl">
          Talk to a doctor{" "}
          <span className="font-serif font-normal italic text-mocha">before you decide.</span>
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-ink-700">
          Consultations are free and there is no obligation. Message us on WhatsApp and
          we&rsquo;ll help you find the right branch and the right starting point.
        </p>
        <WhatsAppButton size="lg" />
      </Container>
    </section>
  );
}
