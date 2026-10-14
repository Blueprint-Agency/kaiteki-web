import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/lib/site";
import { categoryTreatments, treatmentHref } from "@/content/data/treatments";
import { concerns } from "@/content/data/concerns";
import { branches } from "@/content/data/branches";
import { chrome } from "@/content/i18n/chrome";
import { term } from "@/content/i18n/terms";
import { lhref } from "@/lib/locale-pages";
import type { Locale } from "@/lib/i18n";

function Col({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string; external?: boolean }[];
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
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const f = chrome[locale].footer;
  const href = (path: string) => lhref(locale, path);
  const topTreatments = categoryTreatments().slice(0, 8).map((t) => ({
    href: href(treatmentHref(t)),
    label: term(locale, "treatment", t.slug, t.name),
  }));
  const topConcerns = concerns.slice(0, 8).map((c) => ({
    href: href(`/concerns/${c.slug}`),
    label: term(locale, "concern", c.slug, c.name),
  }));

  return (
    <footer className="bg-espresso text-ink-on-dark">
      <Container>
        <div className="grid grid-cols-2 gap-8 py-14 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="font-semibold uppercase tracking-[0.3em] text-ink-on-dark">
              Kaiteki
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ink-on-dark/70">
              {f.tagline}
            </p>
            <p className="mt-4 max-w-[24ch] text-sm leading-relaxed text-ink-on-dark/70">
              {f.positioning}
            </p>
          </div>

          <Col title={f.treatments} links={[...topTreatments, { href: href("/treatments"), label: f.allTreatments }]} />
          <Col title={f.concerns} links={[...topConcerns, { href: href("/concerns"), label: f.allConcerns }]} />
          <Col
            title={f.locations}
            links={[
              ...branches.map((b) => ({
                href: href(`/locations/${b.slug}`),
                label: term(locale, "branch", b.slug, b.name),
              })),
              { href: href("/locations"), label: f.allLocations },
            ]}
          />
          <Col
            title={f.company}
            links={[
              { href: href("/our-story"), label: f.aboutUs },
              { href: href("/doctors"), label: f.doctors },
              { href: href("/technology"), label: f.technology },
              { href: href("/products"), label: f.products },
              { href: href("/blog"), label: f.blog },
              { href: href("/privacy"), label: f.privacy },
            ]}
          />
        </div>

        {/* Compliance band — the ledger, as brand furniture (docs/04 §4.2) */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs leading-relaxed text-ink-on-dark/70 md:flex-row md:items-center md:justify-between">
          <p className="ledger !text-ink-on-dark/70">
            {site.entity} · {f.mmcNote}
          </p>
          <div className="flex items-center gap-4">
            <a href={site.instagram} className="hover:text-ink-on-dark">Instagram</a>
            <a href={site.facebook} className="hover:text-ink-on-dark">Facebook</a>
            <Link href={href("/privacy")} className="hover:text-ink-on-dark">{f.privacyPdpa}</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
