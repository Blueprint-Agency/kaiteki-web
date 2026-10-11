import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { doctorBySlug } from "@/content/data/doctors";
import type { Post } from "@/lib/types";
import { BlogMotif, PostCard, PostMeta, cardShell, type CardAuthor } from "./PostCard";

export { BlogMotif, PostMeta };

/** The card's byline: the doctor's name and photo, or a legacy name-only author. */
export function cardAuthor(post: Post): CardAuthor | undefined {
  const doctor = doctorBySlug(post.author);
  if (doctor) return { name: doctor.fullName, photo: doctor.photo };
  return post.authorName ? { name: post.authorName } : undefined;
}

export function BlogCard({
  post,
  priority = false,
  className = "",
}: {
  post: Post;
  priority?: boolean;
  className?: string;
}) {
  return <PostCard post={post} author={cardAuthor(post)} priority={priority} className={className} />;
}

/** The one large post at the top of the hub. Horizontal on desktop so it reads
 *  as the lead story rather than an oversized grid tile. */
export function FeaturedPostCard({ post }: { post: Post }) {
  const author = doctorBySlug(post.author);
  return (
    <article className={`${cardShell} lg:grid lg:grid-cols-2 lg:items-stretch`}>
      <Link href={`/blog/${post.slug}`} className="contents">
        {post.image ? (
          /* self-start, not the row's stretch: a stretched grid item takes the
             row height and aspect-ratio stops applying, which is what used to
             crop the cover. The image is the taller column, so it sets the row
             height and the copy centres against it — no gap in the card. */
          <div className="relative aspect-[4/3] overflow-hidden bg-tint lg:self-start">
            <Image
              src={post.image}
              alt={post.imageAlt ?? post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        ) : (
          <BlogMotif slug={post.slug} className="aspect-[4/3] lg:self-start" />
        )}
        <div className="flex flex-col justify-center p-6 sm:p-9">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-mocha">
            <span aria-hidden className="h-px w-7 flex-none bg-sand" />
            Latest
          </p>
          <h2 className="mt-4 font-display text-2xl font-medium leading-tight text-espresso decoration-mocha/50 underline-offset-[6px] group-hover:underline sm:text-[2rem]">
            {post.title}
          </h2>
          <p className="mt-4 leading-relaxed text-ink-700">{post.description}</p>
          <PostMeta post={post} className="mt-5" />
          {author && (
            <p className="ledger mt-4 flex items-center gap-2 border-t border-hairline pt-4">
              <span className="relative size-8 shrink-0 overflow-hidden rounded-full bg-tint">
                <Image
                  src={author.photo}
                  alt=""
                  fill
                  sizes="32px"
                  className="object-cover object-top"
                />
              </span>
              <span>
                {author.fullName}
                {author.mmc ? ` · ${author.mmc}` : ""}
              </span>
            </p>
          )}
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
            Read the article{" "}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </article>
  );
}
