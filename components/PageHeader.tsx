import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

/**
 * Standard page masthead: breadcrumb → kicker → serif title → description.
 * Serif title (Source Serif 4) + sand tick-rule kicker + closing hairline give
 * every hub/list page one editorial identity (docs/06 "Warm Sanctuary").
 * Bespoke detail heroes (our-story, *[slug]) stay custom.
 */
export function PageHeader({
  crumbs,
  eyebrow,
  title,
  description,
  children,
}: {
  crumbs: Crumb[];
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-hairline pb-8 sm:pb-10">
      <Breadcrumbs items={crumbs} />
      <div className="mt-7 max-w-2xl">
        {eyebrow && (
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-mocha">
            <span aria-hidden className="h-px w-7 flex-none bg-sand" />
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-espresso sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-lg leading-relaxed text-ink-700">{description}</p>
        )}
        {children}
      </div>
    </header>
  );
}
