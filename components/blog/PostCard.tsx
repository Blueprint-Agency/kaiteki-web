import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { formatPostDateShort } from "@/lib/post-date";
import type { Post } from "@/lib/types";

/*
 * The blog card's markup, with no data imports. The server's BlogCard resolves
 * the author from content/data/doctors and renders this; the hub search
 * (BlogExplorer, a client component) renders it from the search index. Keeping
 * doctors.ts out of here is what keeps it out of the browser bundle.
 */

/** The fields a card shows. A Post satisfies it, and so does a search-index entry. */
export type CardPost = Pick<
  Post,
  "slug" | "title" | "description" | "category" | "image" | "imageAlt" | "publishedAt" | "readingMinutes"
>;

/** Byline as the card shows it: a doctor (name + photo) or a legacy name-only author. */
export interface CardAuthor {
  name: string;
  photo?: string;
}

/** One row of /blog/search-index.json: a card plus the fields search and the
 *  filters match on. `authorKey` is the doctor slug, or the name for a legacy
 *  author with no profile, so two authors can never collide. */
export interface IndexedPost extends CardPost {
  author?: CardAuthor;
  authorKey?: string;
  tags: string[];
}

// Same restraint as components/cards.tsx: the photograph is the object, the card
// doesn't levitate. Hover zooms the image and underlines the title.
export const cardShell =
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
export function PostMeta({ post, className = "" }: { post: CardPost; className?: string }) {
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

export function PostCard({
  post,
  author,
  priority = false,
  className = "",
}: {
  post: CardPost;
  author?: CardAuthor;
  priority?: boolean;
  className?: string;
}) {
  return (
    <article className={`${cardShell} ${className}`}>
      <Link href={`/blog/${post.slug}`} className="flex flex-1 flex-col">
        {post.image ? (
          <div className="relative aspect-[4/3] overflow-hidden bg-tint">
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
          <BlogMotif slug={post.slug} className="aspect-[4/3]" />
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
                {author.photo && (
                  <span className="relative size-7 shrink-0 overflow-hidden rounded-full bg-tint">
                    <Image
                      src={author.photo}
                      alt=""
                      fill
                      sizes="28px"
                      className="object-cover object-top"
                    />
                  </span>
                )}
                <span className="ledger">{author.name}</span>
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
