import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Schibsted_Grotesk, Source_Serif_4, Fraunces } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageStickyWhatsApp } from "@/components/PageStickyWhatsApp";
import { ScrollReveal } from "@/components/ScrollReveal";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@/components/Analytics";
import { siteGraph } from "@/lib/schema";
import { headerModel } from "@/lib/site";
import { chrome } from "@/content/i18n/chrome";
import { localeMeta, type Locale } from "@/lib/i18n";
import { liveLocalePaths } from "@/lib/locale-pages";
import { waLink } from "@/lib/wa";

// The <html> shell shared by the three root layouts — app/(en), app/zh, app/ms.
// Each language needs its own root layout because <html lang> lives here, and
// Next only lets a root layout set it (docs/07 §11). Everything else is shared.

// UI, nav, labels, tables, the "ledger" — a clean grotesk (docs/06 §2.2).
// No longer carries display headings: those moved to Fraunces (2026-07 redesign).
const sans = Schibsted_Grotesk({
  variable: "--font-sans-face",
  subsets: ["latin"],
  display: "swap",
});

// Display headings — Fraunces, a warm high-contrast editorial serif with optical
// sizing. Chosen (2026-07) to retire the generic grotesk-heading + italic-accent
// formula that read as templated; carries the boutique-medical register the
// references pointed to. Italic is loaded for the occasional deliberate flourish
// (one word), not a mandatory accent on every section.
const display = Fraunces({
  variable: "--font-display-face",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

// Long-form article/treatment/concern body prose only (.prose) — journal-like
// serif for YMYL reading (docs/06 §2.2).
const serif = Source_Serif_4({
  variable: "--font-serif-face",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});
// Chinese glyphs come from the visitor's system CJK fonts (globals.css, :lang(zh)),
// not a web font: a CJK face is megabytes, and docs/02 §2 keeps English pages
// from ever shipping CJK glyphs.

/** Root-layout metadata for a locale. Per-page pageMeta() overrides most of it. */
export function rootMetadata(locale: Locale, description: string): Metadata {
  return {
    metadataBase: new URL("https://kaiteki.my"),
    title: {
      default: "Kaiteki Skin Aesthetic Clinic",
      template: "%s | Kaiteki Skin Aesthetic Clinic",
    },
    description,
    // Site-wide social-share defaults; per-page pageMeta() overrides title/description/image.
    openGraph: {
      type: "website",
      siteName: "Kaiteki Skin Aesthetic Clinic",
      locale: localeMeta[locale].og,
      images: [{ url: "/images/hero/hero-subject.png", alt: "Kaiteki Skin Aesthetic Clinic" }],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const c = chrome[locale];
  const wa = waLink(c.wa.generic);
  return (
    <html
      lang={localeMeta[locale].htmlLang}
      // the reveal-ready class is added by an inline script before hydration
      // (motion gating); scope-suppress the resulting html attribute mismatch.
      suppressHydrationWarning
      className={`${sans.variable} ${display.variable} ${serif.variable} h-full antialiased`}
    >
      {/* GTM is the heaviest third party on the page; warm the connection early. */}
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      {/* Google Tag Manager — same container as the legacy site. GA4/Meta/etc.
          live inside the container, never inline here. */}
      <GoogleTagManager gtmId="GTM-M42CTGL" />
      <body className="min-h-full flex flex-col">
        {/* GTM noscript fallback — the component ships the script only */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M42CTGL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Site-wide identity graph: Organization (MedicalBusiness) + WebSite */}
        <JsonLd data={siteGraph()} />
        {/* The five template events (rule R-14), pushed to the GTM dataLayer */}
        <Analytics />
        {/* Enable motion only when JS runs — content is visible without it (globals.css) */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('reveal-ready')",
          }}
        />
        <SiteHeader
          locale={locale}
          chrome={c}
          model={headerModel(locale)}
          live={liveLocalePaths()}
          waHref={wa}
        />
        <div className="flex-1">{children}</div>
        <SiteFooter locale={locale} />
        {/* spacer so the mobile sticky CTA never covers footer content */}
        <div className="h-16 md:hidden" aria-hidden />
        <PageStickyWhatsApp href={wa}label={c.cta.bookShort} hoverLabel={c.cta.sticky} ariaLabel={c.cta.book} />
        <ScrollReveal />
      </body>
    </html>
  );
}
