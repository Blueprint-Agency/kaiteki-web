import { Container } from "./Container";
import { Dandelion } from "./Dandelion";
import { ShieldCheck, MapPin, BadgeCheck } from "./icons";
import { homeCopy } from "@/content/i18n/home";
import type { Locale } from "@/lib/i18n";

// The three reasons that matter before anyone taps WhatsApp — presented as
// divided columns, not boxed cards (docs/06 §5; the box-per-item treatment
// reads as generic). Icons stay understated; the seed-drift motif and the
// serif-italic accent carry the "Warm Sanctuary" register.
const icons = [ShieldCheck, MapPin, BadgeCheck];

export function WhyKaiteki({ locale = "en" }: { locale?: Locale }) {
  const k = homeCopy[locale].why;
  const reasons = k.reasons.map((r, i) => ({ ...r, Icon: icons[i] }));
  return (
    <section id="why" className="relative overflow-hidden bg-tint">
      <Dandelion className="opacity-70" />
      <Container className="reveal relative py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="h-section">{k.h2}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">{k.sub}</p>
        </div>

        <div className="mt-12 grid gap-y-10 sm:mt-14 sm:grid-cols-3">
          {reasons.map(({ Icon, title, body }, i) => (
            <div
              key={title}
              className={`flex flex-col items-center px-6 text-center sm:px-8 ${
                i > 0 ? "sm:border-l sm:border-hairline" : ""
              }`}
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-surface ring-1 ring-hairline">
                <Icon size={22} className="text-mocha" />
              </span>
              <h3 className="mt-4 h-sub text-espresso">{title}</h3>
              <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-ink-700">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
