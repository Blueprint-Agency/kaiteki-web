import Link from "next/link";
import { site } from "@/lib/site";

export interface Crumb {
  label: string;
  href?: string; // last crumb has no href (plain text)
}

/** Visible breadcrumbs + matching BreadcrumbList JSON-LD (docs/04 §5). */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${site.url}${c.href === "/" ? "" : c.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-ink-500">
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={c.label} className="flex items-center gap-2">
              {c.href && !last ? (
                <Link href={c.href} className="transition-colors hover:text-espresso">
                  {c.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className="text-ink-700">
                  {c.label}
                </span>
              )}
              {!last && <span aria-hidden className="text-hairline">›</span>}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
