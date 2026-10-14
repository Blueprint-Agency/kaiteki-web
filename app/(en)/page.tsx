import { HomePage, homeMeta } from "@/components/HomePage";

export const metadata = homeMeta("en");

export default function Home() {
  return <HomePage locale="en" />;
}
