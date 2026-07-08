"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, WhatsApp } from "./icons";
import { Container } from "./Container";
import { primaryNav } from "@/lib/site";
import { waGeneric } from "@/lib/wa";
import {
  treatmentCategories,
  treatmentsByCategory,
} from "@/content/data/treatments";
import { concernGroups, concernsByGroup } from "@/content/data/concerns";

type Mega = "treatments" | "concerns" | null;

const groupHref: Record<string, string> = {
  Skin: "/concerns/skin",
  "Face & Body": "/concerns/face",
};

export function SiteHeader() {
  const [mega, setMega] = useState<Mega>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMega(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Transparent over the top of the page (the homepage hero runs underneath);
  // solid as soon as the user scrolls or any panel needs a surface behind it.
  const solid = scrolled || mega !== null || mobileOpen;

  return (
    <>
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-200 ${
        solid
          ? "border-hairline bg-page/95 shadow-sm backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
      onMouseLeave={() => setMega(null)}
    >
      <Container>
        <div className="flex h-[68px] items-center justify-between gap-6">
          <Link href="/" className="shrink-0" aria-label="Kaiteki — home">
            <Image
              src="/brand/kaiteki-logo.png"
              alt="Kaiteki Skin Aesthetic Clinic"
              width={400}
              height={139}
              priority
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {primaryNav.map((item) =>
              item.mega ? (
                // Split control: the label is a real link to the hub page
                // (clickable + keyboard-focusable), while the chevron toggles the
                // mega panel. Hovering the group also opens it.
                <div
                  key={item.label}
                  className="static flex items-center"
                  onMouseEnter={() => setMega(item.mega as Mega)}
                >
                  <Link
                    href={item.href}
                    className={`rounded-md py-2 pl-3 pr-1 text-sm font-medium transition-colors ${
                      mega === item.mega ? "text-espresso" : "text-ink-700 hover:text-espresso"
                    }`}
                    onFocus={() => setMega(item.mega as Mega)}
                    onClick={() => setMega(null)}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    className={`rounded-md py-2 pl-1 pr-3 transition-colors ${
                      mega === item.mega ? "text-espresso" : "text-ink-700 hover:text-espresso"
                    }`}
                    aria-label={`${item.label} menu`}
                    aria-expanded={mega === item.mega}
                    onClick={() =>
                      setMega((m) => (m === item.mega ? null : (item.mega as Mega)))
                    }
                  >
                    <ChevronDown
                      size={16}
                      className={`text-accent transition-transform ${
                        mega === item.mega ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:text-espresso"
                  onMouseEnter={() => setMega(null)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={waGeneric}
              className="hidden items-center gap-2 rounded-full bg-cta px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-cta-hover sm:inline-flex"
            >
              <WhatsApp size={16} /> WhatsApp
            </a>
            {/* Mobile hamburger */}
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-md text-espresso lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
            >
              <span className="relative flex h-4 w-6 flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-current transition-transform ${
                    mobileOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-current transition-opacity ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-current transition-transform ${
                    mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </Container>

      {/* Mega panels (desktop) — links are in the server HTML, crawlable */}
      {mega && (
        <div className="absolute inset-x-0 top-full hidden border-b border-hairline bg-surface shadow-lg lg:block">
          <Container>
            <div className="py-8">
              {mega === "treatments" ? (
                <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3 lg:grid-cols-5">
                  {treatmentCategories.map((cat) => (
                    <div key={cat}>
                      <p className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-accent">
                        {cat}
                      </p>
                      <ul className="space-y-2">
                        {treatmentsByCategory(cat).map((t) => (
                          <li key={t.slug}>
                            <Link
                              href={`/treatments/${t.slug}`}
                              className="text-sm text-ink-700 transition-colors hover:text-espresso"
                            >
                              {t.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  {concernGroups.map((g) => (
                    <div key={g}>
                      <Link
                        href={groupHref[g]}
                        className="mb-3 inline-block text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-accent hover:text-espresso"
                      >
                        {g}
                      </Link>
                      <ul className="space-y-2">
                        {concernsByGroup(g).map((c) => (
                          <li key={c.slug}>
                            <Link
                              href={`/concerns/${c.slug}`}
                              className="text-sm text-ink-700 transition-colors hover:text-espresso"
                            >
                              {c.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-6 border-t border-hairline pt-4">
                <Link
                  href={mega === "treatments" ? "/treatments" : "/concerns"}
                  className="text-sm font-medium text-accent hover:text-espresso"
                >
                  View all {mega} →
                </Link>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>

      {/* Mobile drawer — rendered OUTSIDE the backdrop-blur <header> so its
          position:fixed resolves against the viewport. A header with
          backdrop-filter becomes the containing block for its fixed descendants,
          which collapsed this drawer to 0px (inset-0/top-[68px] resolved against
          the 68px header box, not the screen). As a sibling it fills the
          viewport below the header. */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[68px] z-40 overflow-y-auto bg-page lg:hidden">
          <Container>
            <nav className="flex flex-col py-4" aria-label="Mobile">
              <MobileGroup title="Treatments" seeAll="/treatments" onNavigate={() => setMobileOpen(false)}>
                {treatmentCategories.flatMap((cat) =>
                  treatmentsByCategory(cat).map((t) => ({
                    href: `/treatments/${t.slug}`,
                    label: t.name,
                  }))
                )}
              </MobileGroup>
              <MobileGroup title="Concerns" seeAll="/concerns" onNavigate={() => setMobileOpen(false)}>
                {concernGroups.flatMap((g) =>
                  concernsByGroup(g).map((c) => ({
                    href: `/concerns/${c.slug}`,
                    label: c.name,
                  }))
                )}
              </MobileGroup>
              {primaryNav
                .filter((i) => !i.mega)
                .map((i) => (
                  <Link
                    key={i.label}
                    href={i.href}
                    onClick={() => setMobileOpen(false)}
                    className="border-b border-hairline py-4 text-base font-medium text-espresso"
                  >
                    {i.label}
                  </Link>
                ))}
              <a
                href={waGeneric}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-cta px-5 py-3.5 text-sm font-semibold text-white"
              >
                <WhatsApp size={18} /> Book a free consultation
              </a>
            </nav>
          </Container>
        </div>
      )}
    </>
  );
}

function MobileGroup({
  title,
  seeAll,
  children,
  onNavigate,
}: {
  title: string;
  seeAll: string;
  children: { href: string; label: string }[];
  onNavigate: () => void;
}) {
  return (
    <details className="group border-b border-hairline">
      <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-base font-medium text-espresso [&::-webkit-details-marker]:hidden">
        {title}
        <ChevronDown size={20} className="text-accent transition-transform group-open:rotate-180" />
      </summary>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-3 pb-4">
        {children.map((l) => (
          <li key={l.href}>
            <Link href={l.href} onClick={onNavigate} className="text-sm text-ink-700">
              {l.label}
            </Link>
          </li>
        ))}
        <li className="col-span-2">
          <Link href={seeAll} onClick={onNavigate} className="text-sm font-medium text-accent">
            View all {title.toLowerCase()} →
          </Link>
        </li>
      </ul>
    </details>
  );
}
