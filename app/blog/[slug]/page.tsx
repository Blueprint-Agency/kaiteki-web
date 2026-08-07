import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Ledger, ReviewByline } from "@/components/Ledger";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ArrowRight } from "@/components/icons";
import { ArticleToc } from "@/components/blog/ArticleToc";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { BlogCard, BlogMotif, PostMeta } from "@/components/blog/BlogCard";
import { posts, postBySlug, relatedPosts, categorySlug } from "@/content/data/blog";
import { doctorBySlug, reviewerByline } from "@/content/data/doctors";
import { concernBySlug } from "@/content/data/concerns";
import { treatmentBySlug, treatmentHref } from "@/content/data/treatments";
import { technologyBySlug } from "@/content/data/technology";
import { formatPostDate, postHeadings } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";
import { blogPostingGraph } from "@/lib/schema";
import { waLink } from "@/lib/wa";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};
  return pageMeta({
    title: post.seoTitle ?? post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.image,
  });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const author = doctorBySlug(post.author);
  const reviewer = doctorBySlug(post.reviewedBy ?? post.author);
  const headings = await postHeadings(post.slug);
  const related = relatedPosts(post);
  const reviewedIso = post.updatedAt ?? post.publishedAt;

  // The MDX body. Static params + dynamicParams:false mean every one of these
  // resolves at build time, so nothing is imported per-request.
  const { default: Body } = await import(`@/content/blog/${post.slug}.mdx`);

  // Cross-links out of the article into the money pages — the internal-linking
  // role /blog exists to play (docs/02 §4). Unknown slugs are dropped rather
  // than rendered as dead links.
  const linkedConcerns = (post.concerns ?? [])
    .map(concernBySlug)
    .filter((c) => c !== undefined)
    .map((c) => ({ label: c.name, href: `/concerns/${c.slug}` }));
  const linkedTreatments = (post.treatments ?? [])
    .map(treatmentBySlug)
    .filter((t) => t !== undefined)
    .map((t) => ({ label: t.name, href: treatmentHref(t) }));
  const linkedTech = (post.technology ?? [])
    .map(technologyBySlug)
    .filter((x) => x !== undefined)
    .map((x) => ({ label: x.name, href: `/technology/${x.slug}` }));
  const nextSteps = [...linkedConcerns, ...linkedTreatments, ...linkedTech];

  return (
    <>
      <JsonLd
        data={blogPostingGraph({
          path: `/blog/${post.slug}`,
          headline: post.title,
          description: post.description,
          image: post.image,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          section: post.category,
          author: author!,
          reviewer: reviewer,
        })}
      />

      <Container className="py-10 sm:py-12">
        <article className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.category, href: `/blog/category/${categorySlug(post.category)}` },
              { label: post.title },
            ]}
          />

          <header className="mt-7">
            <PostMeta post={post} />
            <h1 className="mt-4 font-display text-[2.1rem] font-medium leading-[1.12] tracking-tight text-espresso sm:text-[2.75rem]">
              {post.title}
            </h1>
            {reviewer && (
              <div className="mt-6 max-w-md">
                <ReviewByline
                  doctorName={reviewer.fullName}
                  mmc={reviewer.mmc}
                  date={formatPostDate(reviewedIso)}
                  photo={reviewer.photo}
                  href={`/doctors/${reviewer.slug}`}
                />
              </div>
            )}
          </header>

          {post.image ? (
            /* Covers are authored 4:3 (1440x1080) with the headline set into
               the artwork, so the hero matches that ratio — a wider crop cuts
               the top and bottom off the image the client supplied. Keep new
               covers 4:3 or this starts cropping again. */
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl bg-tint">
              <Image
                src={post.image}
                alt={post.imageAlt ?? post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          ) : (
            <BlogMotif
              slug={post.slug}
              className="mt-8 aspect-[16/10] rounded-2xl sm:aspect-[21/9]"
            />
          )}

          {/* Answer-first capsule: the 40–60 word direct answer, above the fold,
              so a reader (or an AI answer engine) gets the conclusion before the
              article earns it (docs/05 §1.3). */}
          <p className="prose mt-8 border-l-2 border-sand bg-tint/60 py-4 pl-6 pr-5 text-lg leading-relaxed text-ink-700">
            {post.leadAnswer}
          </p>

          <div className="mt-8">
            <ArticleToc headings={headings} />
          </div>

          <div className="prose mt-10 text-[1.0625rem]">
            <Body />
          </div>

          <div className="mt-12 space-y-6">
            <section className="rounded-2xl border border-hairline bg-tint p-6 sm:p-8">
              <h2 className="font-display text-xl font-medium text-espresso">
                Book a free consultation
              </h2>
              <p className="mt-2 leading-relaxed text-ink-700">
                A doctor will assess your skin and tell you honestly whether this is the right
                option for you, including when it is not.
              </p>
              <div className="mt-5">
                <WhatsAppButton
                  href={waLink(
                    `Hi Kaiteki, I read your article "${post.title}" and I'd like a free consultation.`,
                  )}
                  label="Ask about this on WhatsApp"
                  position="bottom"
                />
              </div>
            </section>

            {nextSteps.length > 0 && (
              <section className="rounded-2xl border border-hairline bg-surface p-6 sm:p-8">
                <h2 className="font-display text-xl font-medium text-espresso">
                  Related pages on our site
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {nextSteps.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-tint px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-mocha"
                      >
                        {l.label} <ArrowRight size={14} className="text-accent" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {author && <AuthorCard doctor={author} />}

            <div className="space-y-6 px-2">
              <Ledger
                rows={[
                  ...(author ? [{ label: "Written by", value: reviewerByline(author) }] : []),
                  ...(reviewer && reviewer.slug !== author?.slug
                    ? [{ label: "Reviewed by", value: reviewerByline(reviewer) }]
                    : []),
                  { label: "Published", value: formatPostDate(post.publishedAt) },
                  ...(post.updatedAt
                    ? [{ label: "Last reviewed", value: formatPostDate(post.updatedAt) }]
                    : []),
                ]}
              />
              <Disclaimer />
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="mt-16 border-t border-hairline pt-10">
            <h2 className="h-section !text-[1.75rem] sm:!text-[2rem]">Keep reading</h2>
            <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </>
  );
}
