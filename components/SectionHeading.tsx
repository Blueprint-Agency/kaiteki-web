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
      {eyebrow && <p className="kicker mb-3">{eyebrow}</p>}
      <As className="h-section">{title}</As>
      {intro && <p className="mt-3 text-lg leading-relaxed text-ink-700">{intro}</p>}
    </div>
  );
}
