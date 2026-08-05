import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogCategoryNav } from "@/components/blog/BlogCategoryNav";
import {
  activeCategories,
  categoryBySlug,
  categorySlug,
  postsInCategory,
} from "@/content/data/blog";
import { pageMeta } from "@/lib/seo";
import { collectionPageNode } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return activeCategories().map((c) => ({ slug: categorySlug(c) }));
}

/** One place for the archive's title/description so metadata and the visible
 *  page can never say different things. */
function copy(category: string, count: number) {
  return {
    title: `${category} Articles | Kaiteki Journal`,
    description: `${count} article${count === 1 ? "" : "s"} on ${category.toLowerCase()}, written and medically reviewed by the MMC-registered doctors at Kaiteki Skin Aesthetic Clinic.`,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) return {};
  const { title, description } = copy(category, postsInCategory(category).length);
  return pageMeta({ title, description, path: `/blog/category/${slug}` });
}

export default async function BlogCategoryArchive({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) notFound();

  const list = postsInCategory(category);
  const { title, description } = copy(category, list.length);

  return (
    <Container className="py-10 sm:py-12">
      <JsonLd
        data={collectionPageNode({
          path: `/blog/category/${slug}`,
          name: title,
          description,
          items: list.map((p) => ({
            name: p.title,
            path: `/blog/${p.slug}`,
            type: "BlogPosting",
            image: p.image,
          })),
        })}
      />

      <PageHeader
        crumbs={[{ label: "Journal", href: "/blog" }, { label: category }]}
        eyebrow="Journal"
        title={category}
        description={description}
      />

      <div className="mt-8">
        <BlogCategoryNav active={category} />
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <BlogCard key={p.slug} post={p} priority={i === 0} />
        ))}
      </div>

      <section className="mt-16 max-w-3xl border-t border-hairline pt-10">
        <h2 className="text-xl font-bold text-espresso sm:text-2xl">
          Want this discussed for your own skin?
        </h2>
        <p className="mt-3 leading-relaxed text-ink-700">
          Articles can only ever be general information. A free consultation is where a doctor looks
          at your skin and tells you what is actually appropriate for you.
        </p>
        <div className="mt-5">
          <WhatsAppButton />
        </div>
      </section>
    </Container>
  );
}
