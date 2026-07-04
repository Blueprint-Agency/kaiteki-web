import type { Metadata } from "next";
import { Schibsted_Grotesk, Source_Serif_4 } from "next/font/google";
import "./globals.css";

// Display & UI — a characterful grotesk (docs/06 §2.2)
const display = Schibsted_Grotesk({
  variable: "--font-display-face",
  subsets: ["latin"],
  display: "swap",
});

// Long-form body prose — journal-like serif (docs/06 §2.2)
const serif = Source_Serif_4({
  variable: "--font-serif-face",
  subsets: ["latin"],
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
      className={`${display.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
