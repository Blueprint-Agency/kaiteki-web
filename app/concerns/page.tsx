import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ConcernsExplorer } from "@/components/ConcernsExplorer";
import { ConcernPicker } from "@/components/ConcernPicker";
import { ClosingCta } from "@/components/ClosingCta";
import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { collectionPageNode } from "@/lib/schema";
import { concerns } from "@/content/data/concerns";

const TITLE = "Skin Concerns We Treat | Kaiteki Aesthetic Clinic";
const DESCRIPTION =
  "Acne, pigmentation, fine lines, dark eye circles, enlarged pores and more. Start with what concerns you. A doctor will assess and guide the right plan.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: "/concerns",
});

export default function ConcernsHub() {
  return (
    <>
      <JsonLd
        data={collectionPageNode({
          path: "/concerns",
          name: TITLE,
          description: DESCRIPTION,
          items: concerns.map((c) => ({
            name: c.name,
            path: `/concerns/${c.slug}`,
            type: "MedicalCondition",
            image: c.image,
          })),
        })}
      />
      <Container className="py-10 sm:py-12">
        <PageHeader
          crumbs={[{ label: "Concerns" }]}
          eyebrow="Start here"
          title="What brings you in?"
          description="Tell us the concern. Each guide below is reviewed by a doctor and explains what they look for, what options exist, and what to realistically expect."
        />

        {/* The picker answers the H1 directly, so it leads — browsing the full
            set is the fallback for anyone who doesn't see their concern in it. */}
        <div className="mt-10">
          <ConcernPicker />
        </div>

        <div className="mt-16">
          <ConcernsExplorer />
        </div>

        <section className="mx-auto mt-16 max-w-2xl">
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
