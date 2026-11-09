import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Ledger, ReviewByline } from "@/components/Ledger";
import { Disclaimer } from "@/components/Disclaimer";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ArrowRight } from "@/components/icons";
import { ArticleToc } from "@/components/blog/ArticleToc";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { BlogMotif } from "@/components/blog/PostCard";
import { localePostBySlug, localePosts } from "@/content/data/blog-locale";
import { postBySlug } from "@/content/data/blog";
import { concernBySlug } from "@/content/data/concerns";
import { doctorBySlug, reviewerByline } from "@/content/data/doctors";
import { technologyBySlug } from "@/content/data/technology";
import { treatmentBySlug, treatmentHref } from "@/content/data/treatments";
import { blogUi } from "@/content/i18n/blog-ui";
import { fmt } from "@/content/i18n/chrome";
import { localizedConcern } from "@/content/i18n/concern-locale";
import { localizedTechnology } from "@/content/i18n/technology-locale";
import { localizedTreatment } from "@/content/i18n/treatment-locale";
import { postHeadings } from "@/lib/blog";
import { localeMeta, localePath, type NonDefaultLocale } from "@/lib/i18n";
import { isLive, lhref, localeReviewer } from "@/lib/locale-pages";
import { blogNode, blogPostingGraph } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import type { Post } from "@/lib/types";
import { waLink } from "@/lib/wa";

// The Chinese and Malay blog: /zh/blog, /ms/blog and their posts. Same layout
// as the English article (app/(en)/blog/[slug]), with every string from
// content/i18n/blog-ui.ts. A post or hub exists only while its ledger entry in
// content/i18n/pages.ts is live (lib/locale-pages.ts), so nothing here can
// publish a page a doctor has not signed.

const postPath = (slug: string) => `/blog/${slug}`;

/** Live posts in `locale`, newest first. */
export function liveLocalePosts(locale: NonDefaultLocale): Post[] {
  return localePosts[locale]
    .filter((p) => postBySlug(p.slug) && isLive(locale, postPath(p.slug)))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export const blogLocaleParams = (locale: NonDefaultLocale) =>
  liveLocalePosts(locale).map((p) => ({ slug: p.slug }));

const date = (locale: NonDefaultLocale, iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString(blogUi[locale].intl, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

function MetaLine({ locale, post }: { locale: NonDefaultLocale; post: Post }) {
  const ui = blogUi[locale];
  return (
    <p className="ledger flex flex-wrap items-center gap-x-2 gap-y-1">
      <span className="font-semibold uppercase tracking-[0.12em] text-accent">
        {ui.categories[post.category]}
      </span>
      <span aria-hidden className="text-hairline">·</span>
      <time dateTime={post.publishedAt}>{date(locale, post.publishedAt)}</time>
      <span aria-hidden className="text-hairline">·</span>
      <span>{fmt(ui.minRead, { n: String(post.readingMinutes) })}</span>
    </p>
  );
}

function LocaleCard({ locale, post }: { locale: NonDefaultLocale; post: Post }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-surface ring-1 ring-hairline transition-shadow hover:ring-mocha/70">
      <Link href={localePath(locale, postPath(post.slug))} className="flex flex-1 flex-col">
        {post.image ? (
          <div className="relative aspect-[4/3] overflow-hidden bg-tint">
            <Image
              src={post.image}
              alt={post.imageAlt ?? post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        ) : (
          <BlogMotif slug={post.slug} className="aspect-[4/3]" />
        )}
        <div className="flex flex-1 flex-col p-5">
          <MetaLine locale={locale} post={post} />
          <h3 className="mt-3 font-display text-xl font-medium leading-snug text-espresso group-hover:underline">
            {post.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">{post.description}</p>
        </div>
      </Link>
    </article>
  );
}

// ── Hub ────────────────────────────────────────────────────────────────────

export function blogLocaleHubMeta(locale: NonDefaultLocale): Metadata {
  const ui = blogUi[locale];
  return pageMeta({ title: ui.indexTitle, description: ui.indexDescription, path: "/blog", locale });
}

export function BlogLocaleHub({ locale }: { locale: NonDefaultLocale }) {
  if (!isLive(locale, "/blog")) return null;
  const ui = blogUi[locale];
  const list = liveLocalePosts(locale);
  return (
    <>
      <JsonLd
        data={blogNode({
          path: localePath(locale, "/blog"),
          name: `Kaiteki: ${ui.blog}`,
          description: ui.indexDescription,
          inLanguage: localeMeta[locale].bcp47,
          items: list.map((p) => ({
            name: p.title,
            path: localePath(locale, postPath(p.slug)),
            image: p.image,
            datePublished: p.publishedAt,
          })),
        })}
      />
      <Container className="py-10 sm:py-12">
        <Breadcrumbs home={{ label: ui.home, href: localePath(locale, "/") }} items={[{ label: ui.blog }]} />
        <h1 className="mt-7 font-display text-[2.1rem] font-medium leading-[1.12] tracking-tight text-espresso sm:text-[2.75rem]">
          {ui.blog}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-700">{ui.indexIntro}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <LocaleCard key={p.slug} locale={locale} post={p} />
          ))}
        </div>
      </Container>
    </>
  );
}

// ── Post ───────────────────────────────────────────────────────────────────

export function blogLocalePostMeta(locale: NonDefaultLocale, slug: string): Metadata {
  const post = localePostBySlug(locale, slug);
  if (!post) return {};
  return pageMeta({
    title: post.seoTitle ?? post.title,
    description: post.description,
    path: postPath(slug),
    image: post.image,
    ogType: "article",
    locale,
  });
}

export async function BlogLocalePost({ locale, slug }: { locale: NonDefaultLocale; slug: string }) {
  const post = localePostBySlug(locale, slug);
  if (!post || !postBySlug(slug) || !isLive(locale, postPath(slug))) return null;

  const ui = blogUi[locale];
  const author = doctorBySlug(post.author);
  // The signer from the ledger, never the data file's intention.
  const review = localeReviewer(locale, postPath(slug));
  const headings = await postHeadings(slug, locale);
  const { default: Body } = await import(`@/content/blog/${locale}/${slug}.mdx`);

  const nextSteps = [
    ...(post.concerns ?? []).flatMap((s) => {
      const en = concernBySlug(s);
      if (!en) return [];
      const name = localizedConcern(locale, s)?.c.name ?? en.name;
      return [{ label: name, href: lhref(locale, `/concerns/${s}`) }];
    }),
    ...(post.treatments ?? []).flatMap((s) => {
      const en = treatmentBySlug(s);
      if (!en) return [];
      const name = localizedTreatment(locale, s)?.t.name ?? en.name;
      return [{ label: name, href: lhref(locale, treatmentHref(en)) }];
    }),
    ...(post.technology ?? []).flatMap((s) => {
      const en = technologyBySlug(s);
      if (!en) return [];
      const name = localizedTechnology(locale, s)?.x.name ?? en.name;
      return [{ label: name, href: lhref(locale, `/technology/${s}`) }];
    }),
  ];

  const related = liveLocalePosts(locale)
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={blogPostingGraph({
          path: localePath(locale, postPath(slug)),
          headline: post.title,
          description: post.description,
          image: post.image,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          section: ui.categories[post.category],
          author: author ?? { fullName: post.authorName ?? "Kaiteki" },
          reviewer: review?.doctor,
          inLanguage: localeMeta[locale].bcp47,
          blogPath: localePath(locale, "/blog"),
        })}
      />

      <Container className="py-10 sm:py-12">
        <div className="lg:flex lg:gap-10">
          <aside className="hidden shrink-0 lg:block lg:w-56 xl:w-64">
            <div className="sticky top-28 max-h-[calc(100vh-9rem)] overflow-y-auto pb-6">
              <ArticleToc headings={headings} variant="sidebar" label={ui.onThisPage} />
            </div>
          </aside>

          <article className="mx-auto max-w-3xl">
            <Breadcrumbs
              home={{ label: ui.home, href: localePath(locale, "/") }}
              items={[{ label: ui.blog, href: lhref(locale, "/blog") }, { label: post.title }]}
            />

            <header className="mt-7">
              <MetaLine locale={locale} post={post} />
              <h1 className="mt-4 font-display text-[2.1rem] font-medium leading-[1.2] tracking-tight text-espresso sm:text-[2.75rem]">
                {post.title}
              </h1>
              {review && (
                <div className="mt-6 max-w-md">
                  <ReviewByline
                    doctorName={review.doctor.fullName}
                    mmc={review.doctor.mmc}
                    date={date(locale, review.date)}
                    photo={review.doctor.photo}
                    href={lhref(locale, `/doctors/${review.doctor.slug}`)}
                    label={ui.bylineLabel}
                  />
                </div>
              )}
            </header>

            {post.image ? (
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
              <BlogMotif slug={post.slug} className="mt-8 aspect-[16/10] rounded-2xl sm:aspect-[21/9]" />
            )}

            {post.leadAnswer && (
              <p className="prose mt-8 border-l-2 border-sand bg-tint/60 py-4 pl-6 pr-5 text-lg leading-relaxed text-ink-700">
                {post.leadAnswer}
              </p>
            )}

            <div className="mt-8 lg:hidden">
              <ArticleToc headings={headings} label={ui.onThisPage} />
            </div>

            <div className="prose mt-10 text-[1.0625rem]">
              <Body />
            </div>

            <div className="mt-12 space-y-6">
              {post.faqs && post.faqs.length > 0 && (
                <section className="rounded-2xl border border-hairline bg-surface p-6 sm:p-8">
                  <h2 className="font-display text-xl font-medium text-espresso">{ui.commonQuestions}</h2>
                  <div className="mt-4">
                    <Faq items={post.faqs} />
                  </div>
                </section>
              )}

              <section className="rounded-2xl border border-hairline bg-tint p-6 sm:p-8">
                <h2 className="font-display text-xl font-medium text-espresso">{ui.bookHeading}</h2>
                <p className="mt-2 leading-relaxed text-ink-700">{ui.bookBody}</p>
                <div className="mt-5">
                  <WhatsAppButton
                    href={waLink(fmt(ui.waMessage, { title: post.title }))}
                    label={ui.waLabel}
                    position="bottom"
                  />
                </div>
              </section>

              {nextSteps.length > 0 && (
                <section className="rounded-2xl border border-hairline bg-surface p-6 sm:p-8">
                  <h2 className="font-display text-xl font-medium text-espresso">{ui.relatedPages}</h2>
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

              {author && (
                <AuthorCard doctor={author} label={ui.aboutAuthor} viewProfile={ui.viewProfile} compact />
              )}

              <div className="space-y-6 px-2">
                <Ledger
                  rows={[
                    ...(author ? [{ label: ui.writtenBy, value: reviewerByline(author) }] : []),
                    ...(review && review.doctor.slug !== author?.slug
                      ? [{ label: ui.reviewedBy, value: reviewerByline(review.doctor) }]
                      : []),
                    { label: ui.published, value: date(locale, post.publishedAt) },
                    ...(review ? [{ label: ui.lastReviewed, value: date(locale, review.date) }] : []),
                  ]}
                />
                <Disclaimer locale={locale} />
              </div>
            </div>
          </article>
        </div>

        {related.length > 0 && (
          <section className="mt-16 border-t border-hairline pt-10">
            <h2 className="h-section !text-[1.75rem] sm:!text-[2rem]">{ui.keepReading}</h2>
            <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <LocaleCard key={p.slug} locale={locale} post={p} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </>
  );
}
