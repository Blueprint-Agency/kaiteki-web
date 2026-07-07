"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Product-card description with in-place "Read more". Shows the copy clamped to
 *  two lines by default; the toggle expands the full text (and any `extra` block,
 *  e.g. factual highlights) within the same card. The toggle only appears when
 *  there's actually more to reveal — a short summary with no extra shows nothing.
 *  Client component (needs state); rendered inside the server-rendered card. */
export function ExpandableText({ text, extra }: { text: string; extra?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) setOverflows(el.scrollHeight > el.clientHeight + 1);
  }, [text]);

  const canExpand = overflows || Boolean(extra);

  return (
    <div className="text-sm leading-relaxed text-ink-700">
      <p ref={ref} className={open ? "" : "line-clamp-2"}>
        {text}
      </p>
      {open && extra ? <div className="mt-2">{extra}</div> : null}
      {canExpand && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-1.5 font-medium text-accent transition-colors hover:text-espresso"
        >
          {open ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}
