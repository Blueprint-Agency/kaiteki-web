import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { BranchCard } from "@/components/cards";
import { CardRow } from "@/components/CardRow";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { branches, regionOrder } from "@/content/data/branches";
import { pageMeta } from "@/lib/seo";
import type { Branch } from "@/lib/types";

export const metadata = pageMeta({
  title: "Find a Branch | Kaiteki Skin Aesthetic Clinic",
  description:
    "Doctor-led aesthetic care at 9 locations across Malaysia. Find your nearest branch with full address, hours and directions. Book a free consultation.",
  path: "/locations",
});

// One map per region, not one national map: Kota Kinabalu is ~1,600km from the
// Klang Valley, so a frame that fits Sabah collapses the six KL/Selangor pins
// into a single dot and a frame that reads in KL cuts Johor and Sabah off
// entirely (the old `z=6` embed did exactly that). Region-scoped brand queries
// keep every branch on screen with no Maps API key.
// ponytail: region-query embeds; swap for one plotted map once the clinic
// supplies verified lat/lng for all nine branches.
const REGION_ZOOM: Record<Branch["region"], number> = {
  "Kuala Lumpur": 11,
  Selangor: 10,
  Johor: 12,
  Sabah: 13,
};

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

      <div className="mt-12 space-y-16">
        {regionOrder.map((region) => {
          const inRegion = branches.filter((b) => b.region === region);
          return (
            <section key={region}>
              <div className="mb-5 flex items-baseline justify-between gap-4">
                <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-mocha">
                  {region}
                </h2>
                <p className="text-sm text-ink-500">
                  {inRegion.length} {inRegion.length === 1 ? "branch" : "branches"}
                </p>
              </div>
              <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-hairline bg-tint">
                <iframe
                  title={`Map of Kaiteki Skin Aesthetic Clinic branches in ${region}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    `Kaiteki Skin Aesthetic Clinic, ${region}, Malaysia`,
                  )}&z=${REGION_ZOOM[region]}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 size-full border-0"
                />
              </div>
              <CardRow className="mt-6">
                {inRegion.map((b) => (
                  <BranchCard key={b.slug} b={b} />
                ))}
              </CardRow>
            </section>
          );
        })}
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
