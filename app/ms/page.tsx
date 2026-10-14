import { notFound } from "next/navigation";
import { HomePage, homeMeta } from "@/components/HomePage";
import { isLive } from "@/lib/locale-pages";

export const metadata = homeMeta("ms");

// No URL until a doctor who reads the language has signed it (content/i18n/pages.ts).
export default function Home() {
  if (!isLive("ms", "/")) notFound();
  return <HomePage locale="ms" />;
}
