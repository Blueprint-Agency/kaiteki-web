import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Ledger } from "@/components/Ledger";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ArrowRight, Instagram, LinkedIn } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { doctors, doctorBySlug } from "@/content/data/doctors";
import { treatments, treatmentHref } from "@/content/data/treatments";
import { branchBySlug } from "@/content/data/branches";
import { site } from "@/lib/site";
import { waForDoctor } from "@/lib/wa";
import { pageMeta } from "@/lib/seo";
import { physicianNode } from "@/lib/schema";

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
  const reviewed = treatments.filter((t) => t.reviewedBy === d.slug);
  const branchNames = d.branches
    .map((b) => branchBySlug(b)?.name)
    .filter((name): name is string => Boolean(name));

  return (
    <Container className="py-10 sm:py-12">
      <JsonLd data={physicianNode(d, branchNames)} />
      <Breadcrumbs items={[{ label: "Doctors", href: "/doctors" }, { label: d.fullName }]} />

      <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        {/* Portrait */}
        <div className="relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden rounded-2xl border border-hairline bg-tint lg:mx-0">
          <Image
            src={d.photo}
            alt={d.fullName}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>

        {/* Intro */}
        <div>
          <p className="text-sm font-medium text-accent">{role}</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-espresso sm:text-4xl">
            {d.fullName}
          </h1>

          {(d.instagram || d.linkedin) && (
            <ul className="mt-4 flex items-center gap-2.5">
              {d.instagram && (
                <li>
                  <a
                    href={d.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${shortName} on Instagram`}
                    className="flex size-10 items-center justify-center rounded-full border border-hairline text-mocha transition-colors hover:border-mocha hover:bg-mocha hover:text-white"
                  >
                    <Instagram size={18} />
                  </a>
                </li>
              )}
              {d.linkedin && (
                <li>
                  <a
                    href={d.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${shortName} on LinkedIn`}
                    className="flex size-10 items-center justify-center rounded-full border border-hairline text-mocha transition-colors hover:border-mocha hover:bg-mocha hover:text-white"
                  >
                    <LinkedIn size={18} />
                  </a>
                </li>
              )}
            </ul>
          )}

          {d.bio ? (
            <div className="prose mt-5 max-w-[60ch] space-y-4 text-lg leading-relaxed text-ink-700">
              {d.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ) : (
            <p className="prose mt-5 max-w-[60ch] text-lg leading-relaxed text-ink-700">
              {d.fullName} is a {role.toLowerCase()} at {site.name}. Every treatment at Kaiteki
              is assessed and carried out by an MMC-registered doctor.
              {d.interests.length > 0 &&
                ` ${shortName}’s clinical focus includes ${d.interests.join(", ")}.`}
            </p>
          )}

          <div className="mt-8 max-w-md rounded-xl border border-hairline bg-surface p-5">
            <Ledger
              rows={[
                { label: "Role", value: role },
                { label: "Credentials", value: d.credentials },
                { label: "MMC registration", value: d.mmc ?? "To be confirmed" },
                ...(branchNames.length > 0
                  ? [{ label: "Practises at", value: branchNames.join(", ") }]
                  : []),
              ]}
            />
            <div className="mt-5">
              <WhatsAppButton
                href={waForDoctor(d.fullName)}
                label={`Consult ${shortName}`}
              />
            </div>
          </div>
        </div>
      </div>

      {d.interests.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-mocha">
            Special interests
          </h2>
          <ul className="flex flex-wrap gap-2">
            {d.interests.map((i) => (
              <li
                key={i}
                className="rounded-full border border-hairline bg-surface px-4 py-2 text-sm text-ink-700"
              >
                {i}
              </li>
            ))}
          </ul>
        </section>
      )}

      {reviewed.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-mocha">
            Treatment guides reviewed by {shortName}
          </h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {reviewed.map((t) => (
              <li key={t.slug}>
                <Link
                  href={treatmentHref(t)}
                  className="group inline-flex items-center gap-1.5 text-ink-700 transition-colors hover:text-espresso"
                >
                  {t.name}
                  <ArrowRight
                    size={14}
                    className="text-accent transition-transform group-hover:translate-x-0.5"
                  />
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

      <p className="mt-8 text-sm text-ink-500">
        MMC registration numbers are pending confirmation and will be added to each profile
        before launch.
      </p>
    </Container>
  );
}
