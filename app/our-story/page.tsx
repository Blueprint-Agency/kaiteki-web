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
  title: "Our Story | Kaiteki Skin Aesthetic Clinic",
  description:
    "The story behind Kaiteki. A Japanese-inspired aesthetic clinic founded by doctors, built on calm and considered care, now across 9 Malaysian branches.",
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

const values = [
  {
    kanji: "快適",
    title: "Comfort first",
    body: "The name says it. Calm rooms, unhurried consultations, and the space to ask anything before you decide.",
  },
  {
    kanji: "医",
    title: "Assessment before treatment",
    body: "Every treatment plan is assessed by a registered doctor. The plan comes from your concern, not from a treatment menu or a sales conversation.",
  },
  {
    kanji: "誠",
    title: "The honest answer",
    body: "Sometimes the right recommendation is to do less, wait, or try something different. We give you that answer even when it's not the profitable one.",
  },
];

// Balanced founder blurbs for the About cards. Dr Chew's is expanded from
// research (MMC/LCP/MAC/MSAM, career path, Yum List 2025 interview) so both
// founders read at equal length. Factual and MAB-safe — no outcome claims.
const founderBlurbs: Record<string, string> = {
  "dr-jessie-lim":
    "Dr Jessie Lim is an LCP-certified aesthetic physician specialising in injectables and laser treatments. She trained at Universiti Putra Malaysia and the American Academy of Aesthetic Medicine. She founded Kaiteki around one principle: that aesthetic care should start with an honest assessment, not a sales target.",
  "dr-chew-yuhhui":
    "Dr Chew Yuhhui is an LCP-certified aesthetic physician who trained at Melaka-Manipal Medical College. Guided by primum non nocere, first do no harm, she oversees clinical protocols and training across all nine branches, ensuring every doctor follows the same standard of care.",
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
              Not just relaxed, but genuinely settled. That feeling is the single promise
              behind every Kaiteki clinic: medical-grade skin and aesthetic care where
              nothing is sold, rushed, or justified.
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
                Kaiteki practises <em>omotenashi</em>, the Japanese principle of whole-hearted,
                detail-oriented hospitality. It shapes everything from the way a consultation
                is structured to the way a treatment is carried out.
              </p>
              <p>
                Every treatment plan at Kaiteki is designed and carried out by a registered
                doctor. The advice is clinical first and commercial never. If the right
                recommendation is to do less, or nothing at all, that&rsquo;s what you&rsquo;ll
                hear. That standard applies equally at every branch, with every doctor.
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

      {/* ── Founders ── */}
      <section className="border-t border-hairline bg-tint">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="The founders"
            title="Founded by doctors, run by doctors"
            intro={`Kaiteki was started by two aesthetic physicians who believed the consultation should feel as considered as the treatment itself. That philosophy now guides a team of ${doctors.length} registered doctors across nine branches.`}
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
