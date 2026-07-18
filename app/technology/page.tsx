import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TechnologyExplorer } from "@/components/TechnologyExplorer";

export const metadata: Metadata = {
  title: "Products & Technology",
  description:
    "The devices and injectables behind Kaiteki's doctor-led treatments — search and filter every platform by category and type.",
  alternates: { canonical: "/technology" },
};

export default function TechnologyHub() {
  return (
    <Container className="py-10 sm:py-12">
      <Breadcrumbs items={[{ label: "Products & Technology" }]} />
      <div className="mt-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-espresso sm:text-4xl">Products &amp; Technology</h1>
        <p className="prose mt-4 text-lg leading-relaxed text-ink-700">
          The devices and injectables our doctors use to carry out treatments. Search by
          name, or filter by category and type.
        </p>
      </div>
      <div className="mt-12">
        <TechnologyExplorer />
      </div>
    </Container>
  );
}
