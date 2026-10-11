import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { BlogListing, pageParam, pageSuffix } from "@/components/blog/BlogListing";
import {
  categoryBySlug,
  featuredPost,
  hubPosts,
  pageOf,
  postsInCategory,
} from "@/content/data/blog";
import { pageMeta } from "@/lib/seo";
import { blogNode, collectionPageNode } from "@/lib/schema";
import type { PostCategory } from "@/lib/types";

/*
 * /blog and /blog/category/<slug>, page 1 and /page/<n> alike. The route files
 * are one-liners over these, so a listing's page 1 and page 7 can never drift.
 *
 * Paginated pages are indexable and canonical to themselves (Google's guidance:
 * page 2 is not a duplicate of page 1, and canonicalising it there hides every
 * post linked only from it). Each carries its page number in the title and
 * description so they are not duplicates in Search Console either.
 */

// ── Hub ──────────────────────────────────────────────────────────────────────

const HUB_TITLE = "Skin & Aesthetic Blog | Kaiteki Malaysia";
// MAB rules bar efficacy and outcome claims in advertising copy, and a meta
// description is advertising copy (docs/02 §8) — so this describes the writing,
// not the results.
const HUB_DESCRIPTION =
  "Treatments, devices and skin concerns explained by the MMC-registered doctors at Kaiteki. Plain-English guides written to help you ask better questions at consultation.";

export function hubPage(raw?: string): number {
  return raw === undefined ? 1 : pageParam(raw, hubPosts().length);
}

export function hubMetadata(page: number): Metadata {
  const suffix = pageSuffix(page, hubPosts().length);
  return pageMeta({
    title: page > 1 ? `Skin & Aesthetic Blog${suffix} | Kaiteki Malaysia` : HUB_TITLE,
    description:
      page > 1
        ? `More doctor-written guides to treatments, devices and skin concerns from Kaiteki${suffix}.`
        : HUB_DESCRIPTION,
    path: page > 1 ? `/blog/page/${page}` : "/blog",
  });
}

export function BlogHubPage({ page }: { page: number }) {
  const featured = featuredPost();
  const all = hubPosts();
  const shown = [...(page === 1 ? [featured] : []), ...pageOf(all, page)];

  return (
    <Container className="py-10 sm:py-12">
      <JsonLd
        data={blogNode({
          description: HUB_DESCRIPTION,
          items: shown.map((p) => ({
            name: p.title,
            path: `/blog/${p.slug}`,
            image: p.image,
            datePublished: p.publishedAt,
          })),
        })}
      />

      <PageHeader
        crumbs={page > 1 ? [{ label: "Blog", href: "/blog" }, { label: `Page ${page}` }] : [{ label: "Blog" }]}
        eyebrow={page > 1 ? `Page ${page}` : "Written by our doctors"}
        title="Skin &amp; Aesthetic Blog"
        description="What a treatment actually does, who it suits, and what it cannot do. Every article is written and reviewed by an MMC-registered doctor at Kaiteki, including the parts most clinic pages leave out."
      />

      <BlogListing all={all} page={page} basePath="/blog" featured={featured} />

      <section className="mt-16 grid gap-8 border-t border-hairline pt-10 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-espresso sm:text-2xl">Why we write this way</h2>
          <p className="mt-3 leading-relaxed text-ink-700">
            Aesthetic content online tends to oversell. We would rather tell you what a treatment
            realistically does, how many sessions it usually takes, who it is not appropriate for,
            and where a different option would serve you better. Every article carries the name and
            MMC registration of the doctor who wrote it, so you know exactly whose judgement you are
            reading.
          </p>
          <p className="mt-3 leading-relaxed text-ink-700">
            Articles are general information, not medical advice. Nothing here replaces an
            assessment. A doctor decides what is suitable for you in person.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-espresso sm:text-2xl">
            Read something you want to ask about?
          </h2>
          <p className="mt-3 leading-relaxed text-ink-700">
            Consultation is free, and it is a conversation rather than a sales pitch. Message us
            with the article you were reading and we will pick it up from there.
          </p>
          <div className="mt-5">
            <WhatsAppButton />
          </div>
          <p className="mt-6 text-sm leading-relaxed text-ink-500">
            Looking for a specific concern instead?{" "}
            <Link
              href="/concerns"
              className="font-medium text-accent underline decoration-mocha/40 underline-offset-[3px] hover:text-espresso"
            >
              Browse skin concerns
            </Link>{" "}
            or{" "}
            <Link
              href="/treatments"
              className="font-medium text-accent underline decoration-mocha/40 underline-offset-[3px] hover:text-espresso"
            >
              see every treatment
            </Link>
            .
          </p>
        </div>
      </section>
    </Container>
  );
}

// ── Category archives ────────────────────────────────────────────────────────

export function categoryOrNotFound(slug: string): PostCategory {
  const category = categoryBySlug(slug);
  if (!category) notFound();
  return category;
}

export function categoryPage(category: PostCategory, raw?: string): number {
  return raw === undefined ? 1 : pageParam(raw, postsInCategory(category).length);
}

/** One place for the archive's title/description so metadata and the visible
 *  page can never say different things. */
function categoryCopy(category: string, count: number, page: number) {
  const suffix = pageSuffix(page, count);
  return {
    title: `${category} Articles${suffix} | Kaiteki Blog`,
    description: `${count} article${count === 1 ? "" : "s"} on ${category.toLowerCase()}, written and medically reviewed by the MMC-registered doctors at Kaiteki Skin Aesthetic Clinic${suffix ? `.${suffix}` : "."}`,
  };
}

export function categoryMetadata(slug: string, category: PostCategory, page: number): Metadata {
  const { title, description } = categoryCopy(category, postsInCategory(category).length, page);
  const base = `/blog/category/${slug}`;
  return pageMeta({ title, description, path: page > 1 ? `${base}/page/${page}` : base });
}

export function BlogCategoryPage({
  slug,
  category,
  page,
}: {
  slug: string;
  category: PostCategory;
  page: number;
}) {
  const all = postsInCategory(category);
  const base = `/blog/category/${slug}`;
  const { title, description } = categoryCopy(category, all.length, page);

  return (
    <Container className="py-10 sm:py-12">
      <JsonLd
        data={collectionPageNode({
          path: page > 1 ? `${base}/page/${page}` : base,
          name: title,
          description,
          items: pageOf(all, page).map((p) => ({
            name: p.title,
            path: `/blog/${p.slug}`,
            type: "BlogPosting",
            image: p.image,
          })),
        })}
      />

      <PageHeader
        crumbs={[
          { label: "Blog", href: "/blog" },
          ...(page > 1
            ? [{ label: category, href: base }, { label: `Page ${page}` }]
            : [{ label: category }]),
        ]}
        eyebrow={page > 1 ? `Blog · Page ${page}` : "Blog"}
        title={category}
        description={categoryCopy(category, all.length, 1).description}
      />

      <BlogListing all={all} page={page} basePath={base} scope={category} />

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
