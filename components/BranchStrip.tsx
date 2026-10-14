import Link from "next/link";
import { Container } from "./Container";
import { BranchesExplorer } from "./BranchesExplorer";
import { ArrowRight } from "./icons";
import { homeCopy } from "@/content/i18n/home";
import { term } from "@/content/i18n/terms";
import { branches, regionOrder } from "@/content/data/branches";
import { lhref } from "@/lib/locale-pages";
import type { Locale } from "@/lib/i18n";

/** Nine-branch locator section. */
export function BranchStrip({ locale = "en" }: { locale?: Locale }) {
  const k = homeCopy[locale].branches;
  return (
    <section id="branches" className="relative overflow-hidden bg-tint">
      <Container className="reveal py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="h-section">{k.h2}</h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-700">{k.sub}</p>
          </div>
          <Link
            href={lhref(locale, "/locations")}
            className="group inline-flex items-center gap-1.5 py-1.5 text-sm font-medium text-accent hover:text-espresso"
          >
            {k.all}{" "}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="mt-10">
          <BranchesExplorer
            allLabel={k.allTab}
            regionLabels={Object.fromEntries(regionOrder.map((r) => [r, term(locale, "region", r, r)]))}
            cards={Object.fromEntries(
              branches.map((b) => [
                b.slug,
                { href: lhref(locale, `/locations/${b.slug}`), name: term(locale, "branch", b.slug, b.name) },
              ]),
            )}
          />
        </div>
      </Container>
    </section>
  );
}
