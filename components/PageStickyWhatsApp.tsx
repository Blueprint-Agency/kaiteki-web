"use client";

import { usePathname } from "next/navigation";
import { StickyWhatsApp } from "./WhatsAppCTA";
import { waForPage } from "@/lib/wa";

/** The sticky WhatsApp CTA, swapping in a campaign page's own link (lib/wa.ts
 *  PAGE_WA). usePathname resolves during SSR, so the <a href> is still in the
 *  server HTML. */
export function PageStickyWhatsApp(props: Parameters<typeof StickyWhatsApp>[0] & { href: string }) {
  return <StickyWhatsApp {...props} href={waForPage(usePathname(), props.href)} />;
}
