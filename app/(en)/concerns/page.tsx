import { ConcernsHub, concernsHubMeta } from "@/components/ConcernsHub";

export const metadata = concernsHubMeta("en");

export default function ConcernsHubPage() {
  return <ConcernsHub locale="en" />;
}
