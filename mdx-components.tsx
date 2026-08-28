import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { AskCta, Figure } from "@/components/blog/blocks";

/**
 * Brand styling for MDX bodies (currently /blog only). @next/mdx looks this file
 * up by name at the project root — renaming or moving it silently drops the
 * styling and you get unstyled browser defaults.
 *
 * Design note: the article column opts into the serif via `.prose` on the
 * wrapper (see BlogArticle), so body copy inherits it here. Headings deliberately
 * stay on the display face — one editorial voice across the site (docs/06 §2.2).
 *
 * `scroll-mt-28` on the headings clears the sticky header when the table of
 * contents jumps to an anchor. Anchor ids come from rehype-slug (next.config.ts);
 * `headingId()` in lib/blog.ts reproduces the same algorithm for the ToC.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => (
      <h2
        {...props}
        className="h-section mt-14 scroll-mt-28 border-t border-hairline pt-10 !text-[1.75rem] first:mt-0 first:border-t-0 first:pt-0 sm:!text-[2rem]"
      />
    ),
    h3: (props) => (
      <h3 {...props} className="h-sub mt-9 scroll-mt-28 !text-xl" />
    ),
    h4: (props) => (
      <h4
        {...props}
        className="mt-7 scroll-mt-28 font-sans text-base font-semibold text-espresso"
      />
    ),
    p: (props) => <p {...props} className="mt-5 leading-[1.75] text-ink-700" />,
    strong: (props) => <strong {...props} className="font-semibold text-espresso" />,
    // Internal links route through next/link so they prefetch and keep the
    // internal-linking equity the SEO plan depends on; anything else opens away.
    a: ({ href = "", children, ...rest }) => {
      const cls =
        "font-medium text-accent underline decoration-mocha/40 underline-offset-[3px] transition-colors hover:text-espresso hover:decoration-mocha";
      return href.startsWith("/") ? (
        <Link href={href} className={cls} {...rest}>
          {children}
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
          {children}
        </a>
      );
    },
    ul: (props) => <ul {...props} className="mt-5 space-y-2.5" />,
    ol: (props) => (
      <ol {...props} className="mt-5 list-decimal space-y-2.5 pl-5 marker:text-mocha" />
    ),
    li: (props) => (
      <li
        {...props}
        className="leading-relaxed text-ink-700 [ul>&]:relative [ul>&]:pl-6 [ul>&]:before:absolute [ul>&]:before:left-1 [ul>&]:before:top-[0.6em] [ul>&]:before:size-1.5 [ul>&]:before:rounded-full [ul>&]:before:bg-mocha"
      />
    ),
    blockquote: (props) => (
      <blockquote
        {...props}
        className="mt-7 border-l-2 border-sand bg-tint/60 py-1 pl-6 pr-4 text-ink-700 [&>p]:mt-0 [&>p+p]:mt-4"
      />
    ),
    hr: () => <hr className="mt-12 border-hairline" />,
    // Comparison tables are the reason /blog runs on MDX. The wrapper scrolls on
    // its own so a wide table never makes the page scroll sideways on mobile.
    table: (props) => (
      <div className="mt-7 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <table
          {...props}
          className="w-full min-w-[34rem] border-collapse overflow-hidden rounded-xl text-left text-[0.9375rem]"
        />
      </div>
    ),
    thead: (props) => <thead {...props} className="bg-tint" />,
    th: (props) => (
      <th
        {...props}
        className="border border-hairline px-4 py-3 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-mocha"
      />
    ),
    td: (props) => (
      <td {...props} className="border border-hairline px-4 py-3 align-top text-ink-700" />
    ),
    code: (props) => (
      <code
        {...props}
        className="rounded bg-tint px-1.5 py-0.5 font-mono text-[0.875em] text-espresso"
      />
    ),
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    img: (props) => <img {...props} className="mt-7 w-full rounded-2xl" />,
    // Authoring blocks (components/blog/blocks.tsx): usable in any .mdx body
    // with no import line. See content/blog/AUTHORING.md.
    Figure,
    AskCta,
    ...components,
  };
}
