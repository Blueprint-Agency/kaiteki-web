import { OurStory, ourStoryMeta } from "@/components/OurStory";

export const metadata = ourStoryMeta("en");

export default function AboutPage() {
  return <OurStory locale="en" />;
}
