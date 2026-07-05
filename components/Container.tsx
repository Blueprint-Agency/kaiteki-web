import type { ReactNode } from "react";

/** Centered 1200px content column with consistent gutters (docs/06 §5). */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
