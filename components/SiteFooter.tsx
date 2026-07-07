import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/lib/site";
import { treatments } from "@/content/data/treatments";
import { concerns } from "@/content/data/concerns";
import { branches } from "@/content/data/branches";

function Col({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h2 className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-on-dark/70">
        {title}
      </h2>
      <ul className="space-y-0.5">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link
              href={l.href}
              className="block py-1 text-sm text-ink-on-dark/80 transition-colors hover:text-ink-on-dark"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const topTreatments = treatments.slice(0, 8).map((t) => ({
    href: `/treatments/${t.slug}`,
    label: t.name,
  }));
  const topConcerns = concerns.slice(0, 8).map((c) => ({
    href: `/concerns/${c.slug}`,
    label: c.name,
  }));

  return (
    <footer className="mt-20 bg-espresso text-ink-on-dark">
      <Container>
        <div className="grid grid-cols-2 gap-8 py-14 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="font-semibold uppercase tracking-[0.3em] text-ink-on-dark">
              Kaiteki
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ink-on-dark/70">
              Skin · Aesthetic · Laser
            </p>
            <p className="mt-4 max-w-[24ch] text-sm leading-relaxed text-ink-on-dark/70">
              {site.positioning}
            </p>
          </div>

          <Col title="Treatments" links={[...topTreatments, { href: "/treatments", label: "All treatments" }]} />
          <Col title="Concerns" links={[...topConcerns, { href: "/concerns", label: "All concerns" }]} />
          <Col
            title="Locations"
            links={[
              ...branches.map((b) => ({ href: `/locations/${b.slug}`, label: b.name })),
              { href: "/locations", label: "All locations" },
            ]}
          />
          <Col
            title="Company"
            links={[
              { href: "/about", label: "About" },
              { href: "/doctors", label: "Doctors" },
              { href: "/blog", label: "Blog" },
              { href: "/promotions", label: "Promotions" },
              { href: "/contact", label: "Contact" },
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms" },
            ]}
          />
        </div>

        {/* Compliance band — the ledger, as brand furniture (docs/04 §4.2) */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs leading-relaxed text-ink-on-dark/70 md:flex-row md:items-center md:justify-between">
          <p className="ledger !text-ink-on-dark/70">
            {site.entity} · {site.kkliu} · {site.mmcNote}
          </p>
          <div className="flex items-center gap-4">
            <a href={site.instagram} className="hover:text-ink-on-dark">Instagram</a>
            <a href={site.facebook} className="hover:text-ink-on-dark">Facebook</a>
            <Link href="/privacy" className="hover:text-ink-on-dark">Privacy (PDPA)</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
