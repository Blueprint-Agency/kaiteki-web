import type { ReactNode } from "react";

/**
 * Section heading. `eyebrow` is optional and used sparingly — a kicker on every
 * section is an AI tell (impeccable), so most sections use just the title.
 */
export function SectionHeading({
  title,
  eyebrow,
  intro,
  align = "left",
  as: As = "h2",
}: {
  title: ReactNode;
  eyebrow?: string;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h2" | "h3";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent">
          {eyebrow}
        </p>
      )}
      <As className="text-pretty text-2xl font-bold leading-tight text-espresso sm:text-3xl">
        {title}
      </As>
      {intro && <p className="mt-3 text-lg leading-relaxed text-ink-700">{intro}</p>}
    </div>
  );
}
