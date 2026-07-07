// design-sync shim for `next/link`.
// The DS bundle renders outside the Next.js runtime (no AppRouterContext), so
// the real next/link would throw / no-op. This renders a plain anchor with the
// same public prop surface, which is exactly what a link is in the design tool.
import * as React from "react";

type NextLinkProps = {
  href: string | { pathname?: string; query?: Record<string, string> };
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  // next/link extras that have no meaning outside the Next runtime — accepted
  // and dropped so the component's call sites type-check and render.
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  legacyBehavior?: boolean;
  locale?: string | false;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  "aria-label"?: string;
  [key: string]: unknown;
};

function hrefToString(href: NextLinkProps["href"]): string {
  if (typeof href === "string") return href;
  if (href && typeof href === "object") return href.pathname ?? "#";
  return "#";
}

const Link = React.forwardRef<HTMLAnchorElement, NextLinkProps>(function Link(
  { href, children, prefetch, replace, scroll, shallow, passHref, legacyBehavior, locale, ...rest },
  ref,
) {
  return (
    <a ref={ref} href={hrefToString(href)} {...rest}>
      {children}
    </a>
  );
});

export default Link;
