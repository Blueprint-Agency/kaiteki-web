import { notFound } from "next/navigation";
import { BlogLocalePost, blogLocaleParams, blogLocalePostMeta } from "@/components/blog/BlogLocale";

// /ms/blog/<slug>: a post in this language. A URL exists only for posts in
// content/data/blog-locale.ts with a live ledger entry (content/i18n/pages.ts).
export const dynamicParams = false;
export const generateStaticParams = () => blogLocaleParams("ms");

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  return blogLocalePostMeta("ms", (await params).slug);
}

export default async function Page({ params }: Props) {
  const page = await BlogLocalePost({ locale: "ms", slug: (await params).slug });
  return page ?? notFound();
}
