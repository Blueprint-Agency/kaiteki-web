import Link from "next/link";
import { Container } from "@/components/Container";

const links = [
  { href: "/treatments", label: "Treatments" },
  { href: "/concerns", label: "Concerns" },
  { href: "/technology", label: "Technology" },
  { href: "/doctors", label: "Doctors" },
  { href: "/locations", label: "Locations" },
];

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
        Page not found
      </p>
      <p className="mt-6 text-7xl font-bold text-sand sm:text-8xl" aria-hidden>
        404
      </p>
      <h1 className="mt-4 max-w-xl text-3xl font-bold text-espresso sm:text-4xl">
        We couldn&rsquo;t find that page
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
