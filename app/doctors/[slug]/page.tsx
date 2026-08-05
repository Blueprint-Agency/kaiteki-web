import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Ledger } from "@/components/Ledger";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ArrowRight } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { doctors, doctorBySlug } from "@/content/data/doctors";
import { branchBySlug } from "@/content/data/branches";
import { pagesReviewedBy } from "@/content/data/relations";
import { site } from "@/lib/site";
import { waForDoctor } from "@/lib/wa";
import { pageMeta } from "@/lib/seo";
import { profilePageGraph } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = doctorBySlug(slug);
  if (!d) return {};
  const role = d.role ?? "Aesthetic Physician";
  return pageMeta({
    title: d.seoTitle ?? d.fullName,
    description:
      d.seoDescription ??
      `${d.fullName}, ${role} at Kaiteki Skin Aesthetic Clinic. Credentials: ${d.credentials}. Book a free consultation on WhatsApp.`,
    path: `/doctors/${d.slug}`,
    image: d.photo,
  });
}

export default async function DoctorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = doctorBySlug(slug);
  if (!d) notFound();

  const role = d.role ?? "Aesthetic Physician";
  // "Dr Jessie Lim Jia Min" → "Dr Jessie" for in-prose references.
  const shortName = d.fullName.split(" ").slice(0, 2).join(" ");
  const branchNames = d.branches
    .map((b) => branchBySlug(b)?.name)
    .filter((name): name is string => Boolean(name));
  const reviewed = pagesReviewedBy(d.slug);

  return (
    <Container className="py-10 sm:py-12">
      <JsonLd data={profilePageGraph(d, branchNames)} />
      <Breadcrumbs items={[{ label: "Doctors", href: "/doctors" }, { label: d.fullName }]} />

      {/* Header — name reads as the page title, full width */}
      <header className="mt-8 border-b border-hairline pb-8">
        <p className="ledger text-[0.6875rem] uppercase tracking-[0.12em] text-accent">{role}</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-espresso sm:text-5xl">
          {d.fullName}
        </h1>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[22rem_1fr] lg:gap-16">
        {/* Left rail — portrait + verifiable facts + CTA, sticky on desktop */}
        <aside className="mx-auto w-full max-w-sm lg:mx-0 lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:self-start lg:overflow-y-auto">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-hairline bg-tint">
            <Image
              src={d.photo}
              alt={`${d.fullName}, ${d.credentials} — aesthetic doctor at Kaiteki Skin Aesthetic Clinic Malaysia`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 22rem"
              className="object-cover object-top"
            />
          </div>

          <Ledger
            className="mt-6 [&>div]:sm:flex-col [&>div]:sm:gap-0.5 [&_dt]:sm:w-auto"
            rows={[
              { label: "Credentials", value: d.credentials },
              { label: "MMC registration", value: d.mmc ?? "To be confirmed" },
              ...(branchNames.length > 0
                ? [{ label: "Practises at", value: branchNames.join(", ") }]
                : []),
            ]}
          />

          <div className="mt-6">
            <WhatsAppButton href={waForDoctor(d.fullName)} label={`Consult ${shortName}`} />
          </div>
        </aside>

        {/* Bio */}
        {d.bio ? (
          <div className="prose max-w-[64ch] space-y-5 text-lg leading-relaxed text-ink-700">
            {d.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ) : (
          <p className="prose max-w-[64ch] text-lg leading-relaxed text-ink-700">
            {d.fullName} is a {role.toLowerCase()} at {site.name}. Every treatment at Kaiteki is
            assessed and carried out by an MMC-registered doctor.
          </p>
        )}
      </div>

      {reviewed.length > 0 && (
        <section className="mt-14 border-t border-hairline pt-8">
          <h2 className="font-serif text-2xl font-semibold text-espresso">
            Guides reviewed by {shortName}
          </h2>
          <p className="mt-3 max-w-[64ch] text-lg leading-relaxed text-ink-700">
            {shortName} is the named medical reviewer for the treatment and concern guides
            below. Every clinical page on this site carries the name of the MMC-registered
            doctor who checked it, so you can see who stands behind what you are reading.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {reviewed.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="inline-block rounded-full border border-hairline px-4 py-1.5 text-sm text-ink-700 transition-colors hover:border-accent hover:text-accent"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-14 border-t border-hairline pt-6">
        <Link
          href="/doctors"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-espresso"
        >
          <ArrowRight size={16} className="rotate-180" /> All doctors
        </Link>
      </div>
    </Container>
  );
}
