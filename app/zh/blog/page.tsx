import { notFound } from "next/navigation";
import { BlogLocaleHub, blogLocaleHubMeta } from "@/components/blog/BlogLocale";

// /zh/blog: the hub. Resolves only once content/i18n/pages.ts has a live "/blog" entry.
export const metadata = blogLocaleHubMeta("zh");

export default function Page() {
  return BlogLocaleHub({ locale: "zh" }) ?? notFound();
}
