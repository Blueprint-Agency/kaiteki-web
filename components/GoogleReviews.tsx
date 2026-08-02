import Image from "next/image";
import { Container } from "./Container";
import { ExpandableText } from "./ExpandableText";
import { GoogleG, Star } from "./icons";
import { branches, GOOGLE_REVIEWS_READ_ON } from "@/content/data/branches";
import { reviewsFor, reviewsAcrossBranches } from "@/content/data/reviews";
import type { Branch, GoogleReview } from "@/lib/types";

// Formatted once — every page using this block is statically rendered.
const readOn = new Date(GOOGLE_REVIEWS_READ_ON).toLocaleDateString("en-GB", {
  month: "short",
  year: "numeric",
});

/** Five stars, filled to `rating`. The row is decorative — the adjacent number
 *  is the accessible value — so it carries no label of its own. */
function Stars({ rating, size = 15 }: { rating: number; size?: number }) {
  return (
    <span aria-hidden className="inline-flex gap-0.5 text-[#f5b301]">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} size={size} filled={n <= Math.round(rating)} />
      ))}
    </span>
  );
}

function ReviewCard({ review, profileUrl }: { review: GoogleReview; profileUrl: string }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-hairline bg-surface p-5">
      <figcaption className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Initial rather than the reviewer's Google avatar: those URLs are
              hotlinks that would leak every visitor's IP to Google and break
              whenever someone changes their picture. */}
          <span
            aria-hidden
            className="grid size-10 shrink-0 place-items-center rounded-full bg-tint text-sm font-medium text-espresso"
          >
            {review.author.trim().charAt(0).toUpperCase()}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-ink-900">{review.author}</p>
            <p className="text-xs text-ink-500">{review.posted}</p>
          </div>
        </div>
        <GoogleG size={18} className="mt-0.5 shrink-0" />
      </figcaption>

      <div className="mt-3">
        <Stars rating={review.rating} />
        <span className="sr-only">{review.rating} out of 5</span>
      </div>

      <blockquote className="mt-2.5">
        <ExpandableText text={review.text} lines={4} />
      </blockquote>

      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto pt-4 text-xs text-ink-500 underline-offset-4 hover:text-espresso hover:underline"
      >
        View on Google
      </a>
    </figure>
  );
}

/**
 * Google reviews shelf. Pass a `branch` for that branch's own profile and
 * reviews; omit it for the chain-wide homepage version, which mixes one review
 * per branch and shows the weighted rating across all nine profiles.
 *
 * ⚠️ Patient testimonials are restricted under Malaysian medical-advertising
 * rules (MAB 1/2023 & 3/2023; docs/02 §7). This block needs compliance sign-off
 * before launch — see the header of content/data/reviews.ts. Deleting the one
 * `<GoogleReviews />` line from a page removes it entirely.
 *
 * No AggregateRating/Review JSON-LD is emitted: docs/02 §5 keeps ratings on the
 * Google profile, and self-serving review markup earns no rich result anyway.
 *
 * ponytail: static data + CSS scroll-snap. No Places API key, no widget script,
 * no iframe — so it renders server-side, costs nothing at runtime and can't
 * shift layout the way an embedded widget does.
 */
export function GoogleReviews({
  branch,
  className = "",
}: {
  branch?: Branch;
  className?: string;
}) {
  const reviews = branch ? reviewsFor(branch.slug) : reviewsAcrossBranches();
  if (reviews.length === 0) return null;

  const rated = branches.filter(
    (b) => b.googleRating != null && b.googleReviewCount != null,
  );
  const totalCount = branch
    ? (branch.googleReviewCount ?? 0)
    : rated.reduce((n, b) => n + b.googleReviewCount!, 0);
  // Weighted by review count, so a 25-review branch can't drag the chain average
  // as hard as a 548-review one.
  const rating = branch
    ? (branch.googleRating ?? 0)
    : rated.reduce((n, b) => n + b.googleRating! * b.googleReviewCount!, 0) / totalCount;

  const profileUrl = branch?.mapUrl ?? "/locations";
  const heading = branch ? `What patients say about ${branch.name}` : "What our patients say";

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <Container className="reveal py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,17rem)_1fr] lg:items-center lg:gap-12">
          {/* Summary rail — the unfiltered rating and a route to every review,
              which is what makes showing a selection of them honest. */}
          <div>
            <h2 className="h-section">{heading}</h2>
            <div className="mt-5 flex items-center gap-3">
              {branch && (
                <div className="relative size-14 shrink-0 overflow-hidden rounded-xl border border-hairline bg-tint">
                  <Image
                    src={branch.photo}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-medium text-ink-900">{rating.toFixed(1)}</span>
                  <Stars rating={rating} size={16} />
                </div>
                <p className="mt-0.5 text-sm text-ink-500">
                  {totalCount.toLocaleString("en-GB")} Google reviews
                  {branch ? "" : " across 9 branches"}
                </p>
              </div>
            </div>

            <a
              href={branch ? branch.mapUrl : "/locations"}
              {...(branch ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-mocha hover:text-espresso"
            >
              <GoogleG size={16} />
              {branch ? "Read all reviews on Google" : "Reviews by branch"}
            </a>

            <p className="mt-4 max-w-[34ch] text-xs leading-relaxed text-ink-500">
              Reviews are shown as written, as of {readOn}. Open the Google profile for
              the full, unfiltered list.
            </p>
          </div>

          {/* One row that scroll-snaps at every breakpoint, rather than the
              site's usual CardRow grid: nine reviews as a 3-up grid is three
              rows of vertical space for something people skim. Native CSS
              scroll-snap — no carousel library, no JS, and the clipped card at
              the right edge is the affordance that there's more.
              overflow-y-hidden is load-bearing (see CardRow). */}
          <div className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden px-5 pb-2 sm:mx-0 sm:px-0">
            {reviews.map((r) => (
              <div
                key={`${r.author}-${r.posted}`}
                className="w-[80%] shrink-0 snap-start sm:w-[18rem] [&>*]:h-full"
              >
                <ReviewCard review={r} profileUrl={profileUrl} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
