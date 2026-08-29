/**
 * Below this many headings a contents list is furniture, so `ArticleToc`
 * renders nothing — and a caller must not reserve a rail column for it.
 *
 * It lives here rather than in `ArticleToc` because that component is
 * `"use client"`: every export of a client module reaches a server component as
 * an opaque client reference, so a constant imported across that boundary
 * silently stops being a number.
 */
export const TOC_MIN_HEADINGS = 3;
