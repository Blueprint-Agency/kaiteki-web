import { LocationsHub, locationsHubMeta } from "@/components/LocationsHub";

export const metadata = locationsHubMeta("en");

export default function LocationsHubPage() {
  return <LocationsHub locale="en" />;
}
