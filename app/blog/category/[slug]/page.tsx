import type { Metadata } from "next";
import {
  BlogCategoryPage,
  categoryMetadata,
  categoryOrNotFound,
} from "@/components/blog/BlogPages";
import { activeCategories, categoryBySlug, categorySlug } from "@/content/data/blog";

// Page 1 of a category archive. Pages 2+ are ./page/[page]; both render BlogCategoryPage.
export const dynamicParams = false;

export function generateStaticParams() {
  return activeCategories().map((c) => ({ slug: categorySlug(c) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryBySlug(slug);
  return category ? categoryMetadata(slug, category, 1) : {};
}

export default async function BlogCategoryArchive({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogCategoryPage slug={slug} category={categoryOrNotFound(slug)} page={1} />;
}
