import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { doctorBySlug } from "@/content/data/doctors";
import { formatPostDateShort } from "@/lib/blog";
import type { Post } from "@/lib/types";

// Same restraint as components/cards.tsx: the photograph is the object, the card
// doesn't levitate. Hover zooms the image and underlines the title.
const shell =
  "group flex flex-col overflow-hidden rounded-2xl bg-surface ring-1 ring-hairline transition-[box-shadow,transform,--tw-ring-color] duration-300 ease-out hover:z-10 hover:scale-[1.02] hover:ring-mocha/70 hover:shadow-[0_18px_44px_rgb(73_54_40/0.09)] focus-within:z-10 focus-within:scale-[1.02] focus-within:ring-mocha";

// Warm stand-in for posts with no commissioned photography — the same tactic
// components/cards.tsx uses for treatments. Deterministic per slug so a grid of
// image-less posts doesn't read as one repeated tile, and so a given post keeps
// the same art between renders.
const MOTIF_FIELDS = [
  "linear-gradient(135deg, #efe7df 0%, #e0d1c3 100%)",
  "linear-gradient(140deg, #f1eae4 0%, #ddc9ba 100%)",
  "linear-gradient(120deg, #ece4db 0%, #e4d4c6 100%)",
  "linear-gradient(150deg, #f0e9e3 0%, #dbc8b9 100%)",
];

function motifHash(slug: string) {
  let h = 0;
  for (let i = 0; i < slug.length; i += 1) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}

/** Editorial motif: a warm field with soft rule-lines suggesting a page of text.
 *  Deliberately abstract — no device, no skin, nothing that could read as an
 *  implied clinical result (docs/02 §8). */
export function BlogMotif({ slug, className = "" }: { slug: string; className?: string }) {
  const h = motifHash(slug);
  const field = MOTIF_FIELDS[h % MOTIF_FIELDS.length];
  const lines = 5 + (h % 3);
  const offset = h % 5;
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: field }} aria-hidden>
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
        <circle cx={252} cy={44} r={26} fill="none" stroke="#493628" strokeOpacity={0.1} strokeWidth={1.5} />
        {Array.from({ length: lines }).map((_, i) => (
          <line
            key={i}
            x1={44}
            y1={78 + i * 16}
            x2={i % 3 === offset % 3 ? 188 : 258}
            y2={78 + i * 16}
            stroke="#493628"
            strokeOpacity={0.13 - i * 0.011}
            strokeWidth={2}
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  );
}

/** Category + date + read time — the one meta line every blog surface shares. */
export function PostMeta({ post, className = "" }: { post: Post; className?: string }) {
  return (
    <p className={`ledger flex flex-wrap items-center gap-x-2 gap-y-1 ${className}`}>
      <span className="font-semibold uppercase tracking-[0.12em] text-accent">
        {post.category}
      </span>
      <span aria-hidden className="text-hairline">
        ·
      </span>
      <time dateTime={post.publishedAt}>{formatPostDateShort(post.publishedAt)}</time>
      <span aria-hidden className="text-hairline">
        ·
      </span>
      <span>{post.readingMinutes} min read</span>
    </p>
  );
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
  const author = doctorBySlug(post.author);
  return (
    <article className={`${shell} ${className}`}>
      <Link href={`/blog/${post.slug}`} className="flex flex-1 flex-col">
        {post.image ? (
          <div className="relative aspect-[16/10] overflow-hidden bg-tint">
            <Image
              src={post.image}
              alt={post.imageAlt ?? post.title}
              fill
              priority={priority}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        ) : (
          <BlogMotif slug={post.slug} className="aspect-[16/10]" />
        )}
        <div className="flex flex-1 flex-col p-5">
          <PostMeta post={post} />
          <h3 className="mt-3 font-display text-xl font-medium leading-snug text-espresso decoration-mocha/50 underline-offset-[5px] group-hover:underline">
            {post.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">{post.description}</p>
          <div className="mt-4 flex items-center justify-between gap-3 border-t border-hairline pt-4">
            {author && (
              <span className="flex items-center gap-2">
                <span className="relative size-7 shrink-0 overflow-hidden rounded-full bg-tint">
                  <Image
                    src={author.photo}
                    alt=""
                    fill
                    sizes="28px"
                    className="object-cover object-top"
                  />
                </span>
                <span className="ledger">{author.fullName}</span>
              </span>
            )}
            <ArrowRight
              size={16}
              className="shrink-0 text-accent transition-transform group-hover:translate-x-0.5"
            />
          </div>
        </div>
      </Link>
    </article>
  );
}

/** The one large post at the top of the hub. Horizontal on desktop so it reads
 *  as the lead story rather than an oversized grid tile. */
export function FeaturedPostCard({ post }: { post: Post }) {
  const author = doctorBySlug(post.author);
  return (
    <article className={`${shell} lg:grid lg:grid-cols-2 lg:items-stretch`}>
      <Link href={`/blog/${post.slug}`} className="contents">
        {post.image ? (
          <div className="relative aspect-[16/10] overflow-hidden bg-tint lg:aspect-auto lg:h-full lg:min-h-[22rem]">
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
          <BlogMotif
            slug={post.slug}
            className="aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[22rem]"
          />
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
