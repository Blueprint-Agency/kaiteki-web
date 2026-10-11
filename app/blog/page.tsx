import { BlogHubPage, hubMetadata } from "@/components/blog/BlogPages";

// Page 1 of the hub. Pages 2+ are app/blog/page/[page]; both render BlogHubPage.
export const metadata = hubMetadata(1);

export default function BlogHub() {
  return <BlogHubPage page={1} />;
}
