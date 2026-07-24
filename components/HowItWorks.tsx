import { Container } from "./Container";

// "What to expect" — the four-step visit flow, in the same numbered-ledger
// register as the doctor/recognition record (docs/06 §4.6). No stock photos:
// real step photography to be dropped in per step once shot.
const steps = [
  {
    n: "01",
    title: "Free Consultation",
    kicker: "A conversation, not a sales pitch",
    body: "Message us on WhatsApp to book a free consultation at your nearest branch. A doctor will review your concern, skin history and goals. You'll leave with a clear understanding of what's possible, what it involves, and whether treatment is right for you. No packages pushed, no obligation.",
  },
  {
    n: "02",
    title: "Your Treatment Plan",
    kicker: "Assessed by a doctor, explained in full",
    body: "If treatment is appropriate, your doctor builds a plan around your specific concern. This covers which treatment, how many sessions, expected timeline and realistic outcomes. Everything is explained before you commit to anything.",
  },
  {
    n: "03",
    title: "Treatment Day",
    kicker: "Doctor-led from start to finish",
    body: "Your treatment is carried out by the same registered doctor who assessed you. Sessions typically range from 15 to 90 minutes depending on the treatment. Your doctor will walk you through each step and check comfort throughout.",
  },
  {
    n: "04",
    title: "Aftercare and Follow-Up",
    kicker: "The plan doesn't end at the door",
    body: "You'll receive clear aftercare instructions specific to your treatment. Your doctor's team follows up to check on your recovery and progress. If your plan involves multiple sessions, each one is reassessed before proceeding.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-page">
      <Container className="reveal py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            What to expect
          </p>
          <h2 className="mt-2 text-balance text-2xl font-bold leading-tight text-espresso sm:text-3xl">
            Your first visit,{" "}
            <span className="font-serif font-normal italic text-mocha">step by step</span>
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-ink-700">
            Every treatment at Kaiteki begins the same way, with a conversation. Here&rsquo;s
            what the process looks like from start to finish.
          </p>
        </div>

        <ol className="mt-14 divide-y divide-hairline border-y border-hairline">
          {steps.map((s) => (
            <li
              key={s.n}
              className="grid gap-x-8 gap-y-3 py-8 sm:grid-cols-[3rem_1fr] sm:items-baseline lg:grid-cols-[4rem_1fr]"
            >
              <span className="ledger text-3xl !text-mocha/40 sm:text-4xl">{s.n}</span>
              <div>
                <h3 className="text-lg font-semibold text-espresso sm:text-xl">{s.title}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{s.kicker}</p>
                <p className="mt-2 max-w-[62ch] leading-relaxed text-ink-700">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
