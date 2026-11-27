import { notFound } from "next/navigation";
import { BlogLocalePost, blogLocaleParams, blogLocalePostMeta } from "@/components/blog/BlogLocale";

// /zh/blog/<slug>: a post in this language. A URL exists only for posts in
// content/data/blog-locale.ts with a live ledger entry (content/i18n/pages.ts).
export const dynamicParams = false;
export const generateStaticParams = () => blogLocaleParams("zh");

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  return blogLocalePostMeta("zh", (await params).slug);
}

export default async function Page({ params }: Props) {
  const page = await BlogLocalePost({ locale: "zh", slug: (await params).slug });
  return page ?? notFound();
}
