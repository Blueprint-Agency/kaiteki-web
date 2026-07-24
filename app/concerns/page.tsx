import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ConcernsExplorer } from "@/components/ConcernsExplorer";
import { ConcernPicker } from "@/components/ConcernPicker";
import { ClosingCta } from "@/components/ClosingCta";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Skin Concerns We Treat | Kaiteki Aesthetic Clinic",
  description:
    "Acne, pigmentation, fine lines, dark eye circles, enlarged pores and more. Start with what concerns you. A doctor will assess and guide the right plan.",
  path: "/concerns",
});

export default function ConcernsHub() {
  return (
    <>
      <Container className="py-10 sm:py-12">
        <PageHeader
          crumbs={[{ label: "Concerns" }]}
          eyebrow="Start here"
          title="What brings you in?"
          description="Tell us the concern. Each guide below is reviewed by a doctor and explains what they look for, what options exist, and what to realistically expect."
        />

        <div className="mt-12">
          <ConcernsExplorer />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-tint px-6 py-5 sm:px-8">
          <p className="max-w-xl text-sm leading-relaxed text-ink-700 sm:text-base">
            Not sure which concern fits? That&rsquo;s normal. Book a free consultation and a
            doctor will help you figure out the right starting point.
          </p>
          <WhatsAppButton />
        </div>

        <div className="mt-16">
          <ConcernPicker />
        </div>

        <section className="mt-16 max-w-2xl">
          <h2 className="font-serif text-2xl font-semibold text-espresso sm:text-3xl">
            How we approach your concern
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            Every concern is different, and so is every person&rsquo;s skin. At Kaiteki, treatment
            always starts with a doctor&rsquo;s assessment. We look at your skin type, history and
            goals before recommending any option. This applies at all nine branches, with the same
            standard of care.
          </p>
        </section>
      </Container>

      <ClosingCta />
    </>
  );
}
