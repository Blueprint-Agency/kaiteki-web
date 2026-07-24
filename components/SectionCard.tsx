import type { ReactNode } from "react";

/** Card wrapper for stacked page sections — replaces long unbroken blog-style
 *  columns with discrete, scannable blocks (docs/06). Used on every
 *  treatment/concern/technology detail page. */
export function SectionCard({
  title,
  eyebrow,
  titleClassName = "text-espresso",
  children,
  className = "",
}: {
  title?: string;
  eyebrow?: string;
  titleClassName?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`rounded-2xl border border-hairline bg-surface p-6 sm:p-8 ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-mocha">{eyebrow}</p>
      )}
      {title && (
        <h2 className={`text-xl font-bold sm:text-2xl ${titleClassName} ${eyebrow ? "mt-1" : ""}`}>
          {title}
        </h2>
      )}
      <div className={title || eyebrow ? "mt-4" : ""}>{children}</div>
    </section>
  );
}
