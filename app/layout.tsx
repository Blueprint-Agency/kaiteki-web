import type { Metadata } from "next";
import { Schibsted_Grotesk, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyWhatsApp } from "@/components/WhatsAppCTA";

// Display & UI — a characterful grotesk (docs/06 §2.2)
const display = Schibsted_Grotesk({
  variable: "--font-display-face",
  subsets: ["latin"],
  display: "swap",
});

// Long-form body prose + editorial heading accents — journal-like serif
// (docs/06 §2.2). Italic is loaded explicitly: a few serif-italic accent words
// in section headings carry the boutique-editorial warmth of the "Warm
// Sanctuary" register without adding a third typeface.
const serif = Source_Serif_4({
  variable: "--font-serif-face",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kaiteki.my"),
  title: {
    default: "Kaiteki Skin Aesthetic Clinic",
    template: "%s | Kaiteki Skin Aesthetic Clinic",
  },
  description:
    "MOH-licensed skin & aesthetic clinic with 9 branches across Malaysia. Book a free consultation on WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-MY"
      // the reveal-ready class is added by an inline script before hydration
      // (motion gating); scope-suppress the resulting html attribute mismatch.
      suppressHydrationWarning
      className={`${display.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Enable motion only when JS runs — content is visible without it (globals.css) */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('reveal-ready')",
          }}
        />
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        {/* spacer so the mobile sticky CTA never covers footer content */}
        <div className="h-16 md:hidden" aria-hidden />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
