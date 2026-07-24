import Link from "next/link";
import { Container } from "./Container";
import { BranchesExplorer } from "./BranchesExplorer";
import { ArrowRight } from "./icons";

/** Nine-branch locator section. */
export function BranchStrip() {
  return (
    <section id="branches" className="relative overflow-hidden bg-tint">
      <Container className="reveal py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-balance text-2xl font-bold leading-tight text-espresso sm:text-3xl">
              Find your{" "}
              <span className="font-serif font-normal italic text-mocha">nearest branch</span>
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-ink-700">
              Nine locations across KL, Selangor, Johor and Sabah. Same doctors, same
              protocols at every one.
            </p>
          </div>
          <Link
            href="/locations"
            className="group inline-flex items-center gap-1.5 py-1.5 text-sm font-medium text-accent hover:text-espresso"
          >
            All locations{" "}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="mt-10">
          <BranchesExplorer />
        </div>
      </Container>
    </section>
  );
}
