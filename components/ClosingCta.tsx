import { Container } from "./Container";
import { Dandelion } from "./Dandelion";
import { WhatsAppButton } from "./WhatsAppCTA";
import { MapPin } from "./icons";

/** The closing invitation — a warm doorway of light toward WhatsApp. */
export function ClosingCta() {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-b from-tint to-porcelain">
      {/* Warm bloom — the empty space reads as a lit doorway, not a void */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[min(760px,92%)] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgb(255_255_255/0.85),rgb(255_255_255/0)_70%)]"
      />
      <Dandelion className="opacity-90" />
      <Container className="reveal relative flex flex-col items-center gap-5 py-20 text-center sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Free consultation · No obligation
        </p>
        <h2 className="text-balance text-3xl font-bold leading-tight text-espresso sm:text-4xl lg:text-[2.75rem]">
          Not sure{" "}
          <span className="font-serif font-normal italic text-mocha">where to start?</span>
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-ink-700">
          Talk to a doctor first. Message us on WhatsApp for a free consultation.
          We&rsquo;ll help you find the right branch and the right plan, no obligation.
        </p>
        <div className="mt-2">
          <WhatsAppButton size="lg" />
        </div>
        <p className="mt-1 flex items-center gap-2 text-sm text-ink-500">
          <MapPin size={16} className="shrink-0 text-accent" />
          9 branches across KL, Selangor, Johor &amp; Sabah
        </p>
      </Container>
    </section>
  );
}
