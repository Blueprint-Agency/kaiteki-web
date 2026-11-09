import { notFound } from "next/navigation";
import { BlogLocaleHub, blogLocaleHubMeta } from "@/components/blog/BlogLocale";

// /ms/blog: the hub. Resolves only once content/i18n/pages.ts has a live "/blog" entry.
export const metadata = blogLocaleHubMeta("ms");

export default function Page() {
  return BlogLocaleHub({ locale: "ms" }) ?? notFound();
}
