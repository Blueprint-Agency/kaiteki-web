import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { LocationsExplorer } from "@/components/LocationsExplorer";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Find a Branch | Kaiteki Skin Aesthetic Clinic",
  description:
    "Doctor-led aesthetic care at 9 locations across Malaysia. Find your nearest branch with full address, hours and directions. Book a free consultation.",
  path: "/locations",
});

export default function LocationsHub() {
  return (
    <Container className="py-10 sm:py-12">
      <PageHeader
        crumbs={[{ label: "Locations" }]}
        eyebrow="Nine branches"
        title="Find your nearest branch"
        description="Nine locations across KL, Selangor, Johor and Sabah. Same doctors, same protocols, same standard of care at every one."
      />
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
        Every Kaiteki branch offers the same treatments, the same doctor-led process and
        the same standard of care. Choose the location closest to you — each branch page
        has directions, opening hours and contact details.
      </p>

      <div className="mt-12">
        <LocationsExplorer />
      </div>

      <section className="mt-16 flex flex-col items-center gap-5 rounded-2xl border border-hairline bg-surface px-6 py-14 text-center">
        <h2 className="text-balance text-2xl font-bold leading-tight text-espresso sm:text-3xl">
          Not sure which branch to visit?
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-ink-700">
          Message us on WhatsApp with your location and we&rsquo;ll suggest the nearest
          branch with the earliest availability.
        </p>
        <WhatsAppButton size="lg" />
      </section>
    </Container>
  );
}
