import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ClosingCta } from "@/components/ClosingCta";
import { RecognitionCabinet } from "@/components/RecognitionCabinet";
import { doctors } from "@/content/data/doctors";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Kaiteki — A Doctor-Led Skin Clinic in Malaysia",
  description:
    "Kaiteki is a doctor-led, Japanese-inspired skin and aesthetic clinic, grown from one PJ clinic to nine across Malaysia. Book a free consultation on WhatsApp.",
  path: "/our-story",
});

const founders = ["dr-jessie-lim", "dr-chew-yuhhui"]
  .map((slug) => doctors.find((d) => d.slug === slug))
  .filter((d): d is (typeof doctors)[number] => Boolean(d));

const stats = [
  { value: "2020", label: "Founded in PJ" },
  { value: "9", label: "Clinics today" },
  { value: "4", label: "States" },
  { value: `${doctors.length}`, label: "Doctors" },
];

const timeline = [
  {
    year: "2020",
    place: "Petaling Jaya",
    title: "It began with one room, and one idea",
    body:
      "Dr Jessie Lim opened Kaiteki as a single medical-aesthetic clinic at The Hub SS2, Petaling Jaya — a treatment room run like a Japanese sanctuary rather than a salon. The name says the whole intention: kaiteki, comfortable.",
    image: "/images/branches/petaling-jaya.jpg",
  },
  {
    year: "2021",
    place: "A clinic, formalised",
    title: "Kaiteki Skin Sdn Bhd",
    body:
      "The practice was incorporated and the team grew — more registered doctors, more of the Klang Valley. The promise stayed fixed: care designed and delivered by doctors, with honest advice first and treatment second.",
    image: "/images/branches/bukit-jalil.jpg",
  },
  {
    year: "Growth",
    place: "Across the Klang Valley",
    title: "The same clinic, in more neighbourhoods",
    body:
      "Mont Kiara, Cheras, Four Seasons, Kota Kemuning — each new clinic kept the same warm, unhurried room and the same doctor-led standard, so the experience travelled with the name.",
    image: "/images/clinics/clinic-mont-kiara.jpg",
  },
  {
    year: "Today",
    place: "KL · Selangor · Johor · Sabah",
    title: "Nine clinics, one standard of comfort",
    body:
      "Kaiteki now spans nine clinics and a team of registered doctors across four states — from the Klang Valley down to Johor and across to Kota Kinabalu. Still Japanese in spirit, still comfortable by design.",
    image: "/images/branches/four-seasons-kl.jpg",
  },
];

const values = [
  {
    kanji: "快適",
    title: "Comfort first",
    body: "Kaiteki means comfortable. Calm rooms, unhurried consults, and time to ask anything — the feeling is part of the treatment.",
  },
  {
    kanji: "医",
    title: "Doctor-led medicine",
    body: "Every treatment is assessed and carried out by registered doctors who hold to primum non nocere — first, do no harm.",
  },
  {
    kanji: "誠",
    title: "Honest guidance",
    body: "We give you a trustworthy, honest opinion — including when the answer is to do less, or nothing at all.",
  },
];

// Balanced founder blurbs for the About cards. Dr Chew's is expanded from
// research (MMC/LCP/MAC/MSAM, career path, Yum List 2025 interview) so both
// founders read at equal length. Factual and MAB-safe — no outcome claims.
const founderBlurbs: Record<string, string> = {
  "dr-jessie-lim":
    "Dr Jessie Lim is Kaiteki's founder and CEO — an LCP-certified aesthetic physician specialising in injectables and lasers. Trained at Universiti Putra Malaysia and the American Academy of Aesthetic Medicine, she focuses on healthy, natural ageing.",
  "dr-chew-yuhhui":
    "Dr Chew Yuhhui is Kaiteki's co-founder and senior medical director — an LCP-certified aesthetic physician who trained at Melaka-Manipal Medical College. Guided by primum non nocere — first, do no harm — she practises ethical, evidence-based care.",
};

// Founder interviews in the Malaysian lifestyle press (verified URLs).
const interviews: Record<string, string> = {
  "dr-jessie-lim": "https://www.theyumlist.net/2020/07/dr-jessie-lim-aesthetic-physician-pj.html",
  "dr-chew-yuhhui": "https://www.theyumlist.net/2025/12/dr-chew-yuhhui-medical-director-of-kaiteki-clinic.html",
};

// Third-party editorial coverage. Neutral, MAB-safe descriptions (no outcome
// claims or superlatives); links out to the original articles.
// Chronological — oldest first.
const press = [
  {
    pub: "The Yum List",
    title: "Meet the founder — Dr Jessie Lim",
    year: "2020",
    href: "https://www.theyumlist.net/2020/07/dr-jessie-lim-aesthetic-physician-pj.html",
  },
  {
    pub: "Kelly Siew Cooks",
    title: "A visit to Kaiteki, The Hub SS2",
    year: "2020",
    href: "https://kellysiewcooks.com/2020/09/15/kaiteki-medical-spa-the-hub-ss2/",
  },
  {
    pub: "Emily Quak",
    title: "A patient's acne-treatment experience",
    year: "2021",
    href: "https://www.emilyquak.com/post/fixing-my-acne-skin-with-kaiteki-skin-aesthetic-laser",
  },
  {
    pub: "The Yum List",
    title: "Kaiteki opens in Mont Kiara",
    year: "2023",
    href: "https://www.theyumlist.net/2023/02/kaiteki-clinic-mont-kiara-lip-filler-facials-more.html",
  },
  {
    pub: "TallPiscesGirl",
    title: "An independent clinic review",
    year: "2024",
    href: "https://www.tallpiscesgirl.com/2024/10/kaiteki-clinic-review.html",
  },
  {
    pub: "The Yum List",
    title: "Dr Chew Yuhhui, Medical Director",
    year: "2025",
    href: "https://www.theyumlist.net/2025/12/dr-chew-yuhhui-medical-director-of-kaiteki-clinic.html",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero: the word itself is the thesis ── */}
      <section className="relative overflow-hidden bg-page">
        <span
          aria-hidden
          className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none text-[13rem] font-semibold leading-none text-mocha/10 sm:text-[20rem] lg:text-[26rem]"
        >
          快適
        </span>
        <Container className="relative py-16 sm:py-24">
          <Breadcrumbs items={[{ label: "About" }]} />
          <div className="mt-8 max-w-2xl">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent">
              About Kaiteki
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-[1.05] text-espresso sm:text-5xl lg:text-6xl">
              Kaiteki means{" "}
              <span className="font-serif font-normal italic text-mocha">comfortable.</span>
            </h1>
            <p className="prose mt-6 text-lg leading-relaxed text-ink-700">
              It&rsquo;s a Japanese word — 快適 — for being at ease, physically and mentally.
              It is also the single promise behind every Kaiteki clinic: medical-grade skin
              and aesthetic care that feels calm, unhurried and genuinely on your side.
            </p>
            <div className="mt-8">
              <WhatsAppButton label="Book a free consultation" />
            </div>
          </div>

          {/* Ledger of verified facts */}
          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-page px-5 py-6">
                <dt className="text-3xl font-bold text-espresso sm:text-4xl">{s.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.12em] text-ink-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── Philosophy: omotenashi ── */}
      <section className="border-t border-hairline bg-tint">
        <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <SectionHeading
              eyebrow="Omotenashi"
              title={
                <>
                  Care, <span className="font-serif font-normal italic text-mocha">before anything is sold</span>
                </>
              }
            />
            <div className="prose mt-4 space-y-4 text-lg leading-relaxed text-ink-700">
              <p>
                Kaiteki practises <em>omotenashi</em> — detail-oriented Japanese hospitality
                and whole-hearted service. We offer the space and the quality, and the medical
                expertise to use them well.
              </p>
              <p>
                Because every plan is designed and carried out by registered doctors, the advice
                you receive is clinical first and commercial never. The aim is simple: restore a
                sense of harmony to your skin, and let you feel like yourself again.
              </p>
            </div>
          </div>
          <div className="reveal relative aspect-[4/3] overflow-hidden rounded-3xl border border-hairline">
            <Image
              src="/images/clinics/clinic-mont-kiara.jpg"
              alt="Inside a Kaiteki clinic"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* ── Timeline: the signature ── */}
      <section id="journey" className="scroll-mt-24 bg-page">
        <Container className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Our journey"
            title={
              <>
                From one room in Petaling Jaya{" "}
                <span className="font-serif font-normal italic text-mocha">to nine clinics</span>
              </>
            }
            intro="Kaiteki grew the slow way — one clinic at a time, each holding the same standard as the first."
          />

          <ol className="mt-14 space-y-14 border-l border-hairline pl-6 sm:space-y-20 sm:pl-10">
            {timeline.map((m, i) => (
              <li key={i} className="reveal relative">
                {/* node on the spine */}
                <span
                  aria-hidden
                  className="absolute -left-[calc(1.5rem+5px)] top-2 h-2.5 w-2.5 rounded-full bg-mocha ring-4 ring-page sm:-left-[calc(2.5rem+5px)]"
                />
                <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12">
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-bold leading-none text-espresso sm:text-5xl">
                        {m.year}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                        {m.place}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-espresso sm:text-2xl">{m.title}</h3>
                    <p className="mt-3 text-lg leading-relaxed text-ink-700">{m.body}</p>
                  </div>
                  <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-hairline">
                    <Image
                      src={m.image}
                      alt={`Kaiteki — ${m.place}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── Founders ── */}
      <section className="border-t border-hairline bg-tint">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="The founders"
            title="The doctors who started it"
            intro="Kaiteki was founded by two aesthetic physicians who wanted a clinic that felt different from the inside out."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {founders.map((d) => (
              <div
                key={d.slug}
                className="reveal flex flex-col gap-5 rounded-3xl border border-hairline bg-page p-6 sm:flex-row sm:items-start sm:p-7"
              >
                <div className="relative aspect-[3/4] w-32 shrink-0 self-center overflow-hidden rounded-2xl border border-hairline bg-tint sm:w-40 sm:self-start">
                  <Image
                    src={d.photo}
                    alt={d.fullName}
                    fill
                    sizes="(max-width: 640px) 128px, 160px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-espresso">{d.fullName}</h3>
                  <p className="mt-0.5 text-sm font-medium text-mocha">{d.role}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.1em] text-ink-500">
                    {d.credentials}
                  </p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-700">
                    {founderBlurbs[d.slug] ?? d.bio?.[0]}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                    <Link
                      href={`/doctors/${d.slug}`}
                      className="text-sm font-medium text-accent hover:text-espresso"
                    >
                      Read full profile →
                    </Link>
                    {interviews[d.slug] && (
                      <a
                        href={interviews[d.slug]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-accent hover:text-espresso"
                      >
                        Read her interview ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-base text-ink-700">
            They&rsquo;re now part of a team of {doctors.length} registered doctors.{" "}
            <Link href="/doctors" className="font-medium text-accent hover:text-espresso">
              Meet every doctor →
            </Link>
          </p>
        </Container>
      </section>

      {/* ── Recognition: device/treatment-partner awards (MAB-safe) ── */}
      <RecognitionCabinet />

      {/* ── In the press ── */}
      <section className="border-t border-hairline bg-tint">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Featured in"
            title={
              <>
                In the <span className="font-serif font-normal italic text-mocha">press</span>
              </>
            }
            intro="Kaiteki has been covered by Malaysian lifestyle and beauty publications since 2020."
          />
          <ul className="mt-8 max-w-3xl divide-y divide-hairline border-y border-hairline">
            {press.map((p) => (
              <li key={p.href} className="reveal">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-4 py-4"
                >
                  <span className="min-w-0">
                    <span className="font-semibold text-espresso">{p.pub}</span>
                    <span className="text-ink-700"> — {p.title}</span>
                  </span>
                  <span className="flex shrink-0 items-center gap-2 text-sm text-ink-500 transition-colors group-hover:text-espresso">
                    {p.year} <span aria-hidden>↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Values ── */}
      <section className="bg-page">
        <Container className="py-16 sm:py-20">
          <SectionHeading title="What we hold to" align="center" />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="reveal rounded-3xl border border-hairline bg-tint p-7">
                <span aria-hidden className="text-4xl font-semibold text-mocha/40">
                  {v.kanji}
                </span>
                <h3 className="mt-4 text-lg font-bold text-espresso">{v.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-700">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}
