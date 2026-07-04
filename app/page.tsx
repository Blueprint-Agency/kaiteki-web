import Image from "next/image";

const WHATSAPP_HREF =
  "https://wa.me/60103818170?text=" +
  encodeURIComponent("Hi Kaiteki, I'd like to book a free consultation.");

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-page">
      <section className="flex flex-1 flex-col items-center justify-center gap-9 px-6 py-24 text-center">
        <Image
          src="/brand/kaiteki-logo.png"
          alt="Kaiteki Skin Aesthetic Clinic"
          width={400}
          height={139}
          priority
          className="h-auto w-[240px]"
        />

        <h1
          className="max-w-2xl text-balance text-4xl font-semibold leading-[1.15] text-espresso sm:text-5xl"
          style={{ letterSpacing: "-0.02em" }}
        >
          Considered skin &amp; aesthetic care, across Malaysia.
        </h1>

        <p className="prose max-w-lg text-pretty text-lg leading-relaxed text-ink-700">
          A calmer, clearer Kaiteki is being rebuilt — a home for every
          treatment, concern, doctor and branch. Until then, our team is one
          message away.
        </p>

        <a
          href={WHATSAPP_HREF}
          className="inline-flex items-center gap-2 rounded-full bg-cta px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-cta-hover"
        >
          Book a free consultation on WhatsApp
        </a>
      </section>

      <footer className="bg-espresso px-6 py-6 text-center">
        <p className="ledger !text-ink-on-dark/85">
          MOH-licensed skin &amp; aesthetic clinic · 9 branches: KL · Selangor ·
          Johor · Sabah
        </p>
      </footer>
    </main>
  );
}
