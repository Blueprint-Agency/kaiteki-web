import { notFound } from "next/navigation";
import { LocationsHub, locationsHubMeta } from "@/components/LocationsHub";
import { isLive } from "@/lib/locale-pages";

export const metadata = locationsHubMeta("ms");

// No URL until signed (content/i18n/pages.ts).
export default function LocationsHubPage() {
  if (!isLive("ms", "/locations")) notFound();
  return <LocationsHub locale="ms" />;
}
