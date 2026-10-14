import Link from "next/link";
import { Container } from "@/components/Container";
import { chrome } from "@/content/i18n/chrome";
import { lhref } from "@/lib/locale-pages";
import type { Locale } from "@/lib/i18n";

const paths = ["/treatments", "/concerns", "/technology", "/doctors", "/locations"] as const;

// English keeps its original wording; the other locales reuse their nav labels.
const enLabels = ["Treatments", "Concerns", "Technology", "Doctors", "Locations"];

/** The 404 body, shared by every root layout's not-found and by global-not-found. */
export function NotFoundView({ locale = "en" }: { locale?: Locale }) {
  const c = chrome[locale];
  const n = c.nav;
  const labels = locale === "en" ? enLabels : [n.treatments, n.concerns, n.technology, n.ourDoctors, n.locations];
  const links = paths.map((p, i) => ({ href: lhref(locale, p), label: labels[i] }));
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
        {c.notFound.kicker}
      </p>
      <p className="mt-6 text-7xl font-bold text-sand sm:text-8xl" aria-hidden>
        404
      </p>
      <h1 className="mt-4 max-w-xl text-3xl font-bold text-espresso sm:text-4xl">
        {c.notFound.title}
      </h1>

      <nav className="mt-12 border-t border-hairline pt-6" aria-label="Popular pages">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-mocha transition-colors hover:text-espresso"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
