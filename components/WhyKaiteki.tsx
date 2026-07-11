import { Container } from "./Container";
import { Dandelion } from "./Dandelion";
import { ShieldCheck, MapPin, BadgeCheck } from "./icons";

// The three reasons that matter before anyone taps WhatsApp — presented as
// divided columns, not boxed cards (docs/06 §5; the box-per-item treatment
// reads as generic). Icons stay understated; the seed-drift motif and the
// serif-italic accent carry the "Warm Sanctuary" register.
const reasons = [
  {
    Icon: ShieldCheck,
    title: "Doctor-led, always",
    body: "Every plan is assessed and carried out by an MMC-registered doctor — never handed to a salesperson.",
  },
  {
    Icon: MapPin,
    title: "Nine branches, one standard",
    body: "Across KL, Selangor, Johor and Sabah — the same doctors and the same protocols at each.",
  },
  {
    Icon: BadgeCheck,
    title: "Recognised by the field",
    body: "Performance awards from the device and product brands behind the treatments we offer.",
  },
];

export function WhyKaiteki() {
  return (
    <section id="why" className="relative overflow-hidden bg-gradient-to-b from-tint to-page">
      <Dandelion className="opacity-70" />
      <Container className="reveal relative py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-pretty text-2xl font-bold leading-tight text-espresso sm:text-[2rem]">
            Considered care,{" "}
            <span className="font-serif font-normal italic text-mocha">not a hard sell</span>
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-ink-700">
            A calm, medical approach to skin and aesthetics — the reasons people travel
            across the city to see the same doctors.
          </p>
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
              <h3 className="mt-4 text-lg font-semibold text-espresso">{title}</h3>
              <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-ink-700">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
