import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { TechnologyExplorer } from "@/components/TechnologyExplorer";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { collectionPageNode } from "@/lib/schema";
import { technology } from "@/content/data/technology";

const TITLE = "Technology Behind Our Treatments | Kaiteki Malaysia";
// "clinically proven" / "efficacy" removed — MAB rules bar efficacy claims in
// advertising copy, and meta descriptions are advertising copy (docs/02 §8).
const DESCRIPTION =
  "The devices and injectables in active clinical use at Kaiteki, across lasers, lifting, body, injectables and facials. Selected by our doctors and matched to you.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: "/technology",
});

export default function TechnologyHub() {
  return (
    <Container className="py-10 sm:py-12">
      <JsonLd
        data={collectionPageNode({
          path: "/technology",
          name: TITLE,
          description: DESCRIPTION,
          items: technology.map((x) => ({
            name: x.name,
            path: `/technology/${x.slug}`,
            type: x.type === "device" ? "MedicalDevice" : "MedicalProcedure",
            image: x.image,
          })),
        })}
      />
      <PageHeader
        crumbs={[{ label: "Products & Technology" }]}
        eyebrow="In active use"
        title="Products & Technology"
        description="Every device and injectable below is in active clinical use at Kaiteki, chosen for clinical evidence and matched to each patient rather than one default machine."
      />

      <div className="mt-10">
        <TechnologyExplorer />
      </div>

      <section className="mt-16 max-w-3xl border-t border-hairline pt-10">
        <h2 className="text-xl font-bold text-espresso sm:text-2xl">
          Why multiple devices for the same treatment?
        </h2>
        <p className="mt-3 leading-relaxed text-ink-700">
          Different skin types, concerns and treatment depths respond better to different
          platforms. Having more than one device in a category gives our doctors the flexibility
          to match the technology to your specific needs rather than fitting every patient to a
          single machine.
        </p>
      </section>

      <section className="mt-12 max-w-3xl border-t border-hairline pt-10">
        <h2 className="text-xl font-bold text-espresso sm:text-2xl">
          Not sure which device or product applies to your concern?
        </h2>
        <p className="mt-3 leading-relaxed text-ink-700">
          You don&rsquo;t need to choose the technology. Tell us the concern, and a doctor will
          recommend the right device or product during consultation.
        </p>
        <div className="mt-5">
          <WhatsAppButton />
        </div>
      </section>
    </Container>
  );
}
