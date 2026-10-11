import type { Metadata } from "next";
import {
  BlogCategoryPage,
  categoryMetadata,
  categoryOrNotFound,
  categoryPage,
} from "@/components/blog/BlogPages";
import {
  activeCategories,
  categoryBySlug,
  categorySlug,
  laterPages,
  postsInCategory,
} from "@/content/data/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return activeCategories().flatMap((c) =>
    laterPages(postsInCategory(c).length).map(({ page }) => ({ slug: categorySlug(c), page })),
  );
}

type Params = Promise<{ slug: string; page: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug, page } = await params;
  const category = categoryBySlug(slug);
  return category ? categoryMetadata(slug, category, categoryPage(category, page)) : {};
}

export default async function BlogCategoryArchivePaged({ params }: { params: Params }) {
  const { slug, page } = await params;
  const category = categoryOrNotFound(slug);
  return <BlogCategoryPage slug={slug} category={category} page={categoryPage(category, page)} />;
}
