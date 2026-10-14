import { notFound } from "next/navigation";
import { TechnologyHub, technologyHubMeta } from "@/components/TechnologyHub";
import { isLive } from "@/lib/locale-pages";

export const metadata = technologyHubMeta("ms");

// No URL until signed (content/i18n/pages.ts).
export default function TechnologyHubPage() {
  if (!isLive("ms", "/technology")) notFound();
  return <TechnologyHub locale="ms" />;
}
