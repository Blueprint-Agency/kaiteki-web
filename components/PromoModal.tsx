"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "./WhatsAppCTA";
import { waLink } from "@/lib/wa";

/** Promo banner in a native <dialog>. Auto-opens on every page load (homepage);
 *  pass `trigger` to render a button that opens it on demand instead. */
export function PromoModal({ trigger }: { trigger?: string }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (trigger) return;
    ref.current?.showModal();
  }, [trigger]);

  return (
    <>
      {trigger && (
        <button
          type="button"
          onClick={() => ref.current?.showModal()}
          style={{ "--glow-rgb": "124 95 71" } as CSSProperties}
          className="cta-glow inline-flex shrink-0 items-center justify-center rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white transition-[transform,background-color] duration-150 hover:bg-espresso active:scale-[0.98]"
        >
          {trigger}
        </button>
      )}
      <dialog
      ref={ref}
      aria-label="Skincare Mix & Match promotion"
      className="m-auto w-fit max-w-[94vw] rounded-2xl bg-transparent p-0 backdrop:bg-black/60"
      onClick={(e) => {
        if (e.target === ref.current) ref.current?.close();
      }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={() => ref.current?.close()}
          aria-label="Close promotion"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-lg leading-none text-white transition-colors hover:bg-black/70"
        >
          ×
        </button>
        <Image
          src="/images/promos/skincare-mix-match-699.jpg"
          alt="Kaiteki Skincare Mix & Match promotion — RM699"
          width={1241}
          height={1755}
          priority={!trigger}
          className="h-[78vh] max-w-[94vw] w-auto object-contain"
        />
        <div className="flex flex-col-reverse gap-2 p-4">
          <WhatsAppButton
            href={waLink("I'd like to know more about the Skincare Mix & Match RM699 promotion.")}
            label="Enquire on WhatsApp"
            className="flex-1"
          />
          {!trigger && (
            <Link
              href="/products"
              onClick={() => ref.current?.close()}
              className="inline-flex flex-1 items-center justify-center rounded-full border border-ink-900/15 px-5 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-tint"
            >
              View products
            </Link>
          )}
        </div>
      </div>
      </dialog>
    </>
  );
}
