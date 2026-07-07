// design-sync shim for `next/image`.
// The DS bundle has no Next image optimizer, so the real next/image would emit
// broken `/_next/image?url=…` URLs. This renders a plain <img> with the raw
// src and honours the `fill` layout so cards keep their aspect boxes.
//
// Graceful fallback: repo images use `/images/…` public paths that don't resolve
// outside the Next server (and won't in the design tool). On load error we swap
// to an on-brand warm-neutral placeholder so cards read as intentional rather
// than shipping broken-image glyphs. Real reachable URLs render normally.
import * as React from "react";

type StaticImport = { src: string; height?: number; width?: number };

type NextImageProps = {
  src: string | StaticImport;
  alt?: string;
  width?: number | string;
  height?: number | string;
  fill?: boolean;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  // Next-only knobs — accepted and dropped.
  priority?: boolean;
  quality?: number;
  placeholder?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  unoptimized?: boolean;
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
  onError?: React.ReactEventHandler<HTMLImageElement>;
  [key: string]: unknown;
};

// Warm-neutral placeholder (porcelain → sand), matching the brand palette.
const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='300'%3E%3Cdefs%3E%3ClinearGradient%20id='g'%20x1='0'%20y1='0'%20x2='1'%20y2='1'%3E%3Cstop%20offset='0'%20stop-color='%23ece7e3'/%3E%3Cstop%20offset='1'%20stop-color='%23d9cabd'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width='400'%20height='300'%20fill='url(%23g)'/%3E%3C/svg%3E";

function srcToString(src: NextImageProps["src"]): string {
  return typeof src === "string" ? src : src?.src ?? "";
}

const Image = React.forwardRef<HTMLImageElement, NextImageProps>(function Image(
  { src, alt = "", fill, width, height, sizes, priority, quality, placeholder, unoptimized, style, onError, ...rest },
  ref,
) {
  const fillStyle: React.CSSProperties = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }
    : {};
  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    const img = e.currentTarget;
    // NB: guard flag is `dsImgFallback` (data-ds-img-fallback), NOT `dsFallback`
    // — the validator counts `[data-ds-fallback]` to detect typographic floor
    // cards, so a placeholder swap must not set that exact attribute.
    if (!img.dataset.dsImgFallback) {
      img.dataset.dsImgFallback = "1";
      img.src = PLACEHOLDER;
    }
    onError?.(e);
  };
  return (
    <img
      ref={ref}
      src={srcToString(src) || PLACEHOLDER}
      alt={alt}
      width={fill ? undefined : (width as number | undefined)}
      height={fill ? undefined : (height as number | undefined)}
      onError={handleError}
      style={{ backgroundColor: "#ece7e3", ...fillStyle, ...style }}
      {...rest}
    />
  );
});

export default Image;
