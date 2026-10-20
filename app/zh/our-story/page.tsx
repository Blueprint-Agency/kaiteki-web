import { notFound } from "next/navigation";
import { OurStory, ourStoryMeta } from "@/components/OurStory";
import { isLive } from "@/lib/locale-pages";

export const metadata = ourStoryMeta("zh");

// No URL until signed (content/i18n/pages.ts).
export default function AboutPage() {
  if (!isLive("zh", "/our-story")) notFound();
  return <OurStory locale="zh" />;
}
