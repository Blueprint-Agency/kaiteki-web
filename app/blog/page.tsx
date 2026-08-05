import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { BlogCard, FeaturedPostCard } from "@/components/blog/BlogCard";
import { BlogCategoryNav } from "@/components/blog/BlogCategoryNav";
import { featuredPost, postsNewestFirst } from "@/content/data/blog";
import { pageMeta } from "@/lib/seo";
import { blogNode } from "@/lib/schema";

const TITLE = "Skin & Aesthetic Journal | Kaiteki Malaysia";
// MAB rules bar efficacy and outcome claims in advertising copy, and a meta
// description is advertising copy (docs/02 §8) — so this describes the writing,
// not the results.
const DESCRIPTION =
  "Treatments, devices and skin concerns explained by the MMC-registered doctors at Kaiteki. Plain-English guides written to help you ask better questions at consultation.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: "/blog",
});

export default function BlogHub() {
  const featured = featuredPost();
  const rest = postsNewestFirst().filter((p) => p.slug !== featured.slug);

  return (
    <Container className="py-10 sm:py-12">
      <JsonLd
        data={blogNode({
          description: DESCRIPTION,
          items: postsNewestFirst().map((p) => ({
            name: p.title,
            path: `/blog/${p.slug}`,
            image: p.image,
            datePublished: p.publishedAt,
          })),
        })}
      />

      <PageHeader
        crumbs={[{ label: "Journal" }]}
        eyebrow="Written by our doctors"
        title="Skin &amp; Aesthetic Journal"
        description="What a treatment actually does, who it suits, and what it cannot do. Every article is written and reviewed by an MMC-registered doctor at Kaiteki, including the parts most clinic pages leave out."
      />

      <div className="mt-8">
        <BlogCategoryNav />
      </div>

      <div className="mt-8">
        <FeaturedPostCard post={featured} />
      </div>

      {rest.length > 0 && (
        <section className="mt-14">
          <h2 className="h-section !text-[1.75rem] sm:!text-[2rem]">More reading</h2>
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}

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
