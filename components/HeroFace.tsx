import { Fragment } from "react";
import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Contour, Droplet, Eye, Sparkle, Sun } from "./icons";

/* Face hotspots — anchored as % of the subject image (1122×1402). Each spot is
   a server-rendered <a> to a concern page (crawlable); its result card is the
   adjacent sibling, revealed purely in CSS (:hover / :focus-visible — see
   .hero-spot in globals.css). Copy stays MAB-safe: concerns + doctor
   assessment, never outcome promises. */
type Spot = {
  slug: string;
  name: string;
  note: string;
  icon: ReactNode;
  x: number; // % from left of the figure
  y: number; // % from top of the figure
  side: "left" | "right"; // which way the desktop callout opens
  /** Card position: below-the-dot on mobile, beside the face on sm+. */
  cardClass: string;
};

const spots: Spot[] = [
  {
    slug: "fine-lines-wrinkles",
    name: "Fine lines & wrinkles",
    note: "Forehead and expression lines, assessed before anything is recommended.",
    icon: <Sparkle size={18} />,
    x: 54.5,
    y: 17.5,
    side: "left",
    cardClass:
      "left-[54.5%] top-[calc(17.5%+16px)] -translate-x-1/2 w-56 sm:translate-x-0 sm:-translate-y-1/2 sm:left-auto sm:right-[calc(45.5%+44px)] sm:top-[17.5%] sm:w-64",
  },
  {
    slug: "dark-eye-circles",
    name: "Dark eye circles",
    note: "Under-eye darkness and eye bags — options depend on the cause.",
    icon: <Eye size={18} />,
    x: 50,
    y: 28.5,
    side: "left",
    cardClass:
      "left-[50%] top-[calc(28.5%+16px)] -translate-x-1/2 w-56 sm:translate-x-0 sm:-translate-y-1/2 sm:left-auto sm:right-[calc(50%+44px)] sm:top-[28.5%] sm:w-64",
  },
  {
    slug: "pigmentation",
    name: "Pigmentation",
    note: "Sun spots, melasma and uneven tone, mapped to the right laser.",
    icon: <Sun size={18} />,
    x: 66,
    y: 32,
    side: "right",
    cardClass:
      "left-[66%] top-[calc(32%+16px)] -translate-x-1/2 w-56 sm:translate-x-0 sm:-translate-y-1/2 sm:left-[calc(66%+36px)] sm:top-[32%] sm:w-48 lg:left-auto lg:right-[-4%] xl:left-[calc(66%+36px)] xl:right-auto",
  },
  {
    slug: "enlarged-pores",
    name: "Enlarged pores",
    note: "Texture and visible pores — often paired with hydration care.",
    icon: <Droplet size={18} />,
    x: 45,
    y: 34.5,
    side: "left",
    cardClass:
      "left-[45%] top-[calc(34.5%+16px)] -translate-x-1/2 w-56 sm:translate-x-0 sm:-translate-y-1/2 sm:left-auto sm:right-[calc(55%+44px)] sm:top-[34.5%] sm:w-64",
  },
  {
    slug: "face-contouring",
    name: "Face contouring",
    note: "Jawline and facial definition, planned with a doctor.",
    icon: <Contour size={18} />,
    x: 66,
    y: 42,
    side: "right",
    cardClass:
      "left-[66%] top-[calc(42%+16px)] -translate-x-1/2 w-56 sm:translate-x-0 sm:-translate-y-1/2 sm:left-[calc(66%+36px)] sm:top-[46%] sm:w-48 lg:left-auto lg:right-[-4%] xl:left-[calc(66%+36px)] xl:right-auto",
  },
];

const spotStyle = (s: Spot, i: number): CSSProperties =>
  ({ left: `${s.x}%`, top: `${s.y}%`, "--i": i } as CSSProperties);

export function HeroFace() {
  return (
    <div className="hero-figure relative mx-auto w-[min(100%,400px)] self-end sm:w-[min(100%,460px)] lg:w-full lg:max-w-[560px]">
      {/* Warm arch behind the subject — the reference's silhouette shape */}
      <span
        aria-hidden
        className="hero-arch absolute inset-x-[-5%] bottom-0 top-[13%] rounded-t-full bg-gradient-to-b from-sand via-sand/75 to-porcelain/30"
      />
      <span
        aria-hidden
        className="hero-arch absolute inset-x-[-11%] bottom-0 top-[8%] rounded-t-full border border-mocha/25"
      />

      <Image
        src="/images/hero/hero-subject.png"
        alt="A smiling woman with calm, healthy-looking skin, resting her hands beneath her chin"
        width={1122}
        height={1402}
        priority
        sizes="(min-width: 1024px) 560px, (min-width: 640px) 460px, 92vw"
        className="hero-figure-img relative z-10 h-auto w-full"
      />

      {spots.map((s, i) => (
        <Fragment key={s.slug}>
          <Link
            href={`/concerns/${s.slug}`}
            aria-label={`${s.name} — read the concern guide`}
            style={spotStyle(s, i)}
            className="hero-spot group absolute z-20 -ml-3 -mt-3 flex size-6 items-center justify-center rounded-full"
          >
            {/* Dot — small so it annotates the face instead of covering it */}
            <span className="hero-spot-dot flex size-3 items-center justify-center rounded-full bg-white/95 shadow-sm transition-transform duration-200 group-hover:scale-125">
              <span className="size-1.5 rounded-full bg-espresso" />
            </span>

            {/* Leader lines — drawn dot → card on hover (medical-diagram callout) */}
            <span
              aria-hidden
              className={`${
                s.side === "left"
                  ? "hero-line-h right-[calc(100%-4px)] w-12"
                  : "hero-line-r left-[calc(100%-4px)] w-10"
              } absolute top-[calc(50%-0.5px)] hidden h-px bg-mocha sm:block`}
            />
            <span
              aria-hidden
              className="hero-line-v absolute left-[calc(50%-0.5px)] top-[calc(100%-4px)] h-3.5 w-px bg-mocha sm:hidden"
            />
          </Link>

          {/* Result card — sibling of the dot so it can sit anywhere over the
              figure (right-side callouts included) without clipping. Duplicate
              link for pointer users; hidden from AT/tab order (the dot is the
              accessible link). */}
          <Link
            href={`/concerns/${s.slug}`}
            tabIndex={-1}
            aria-hidden="true"
            className={`hero-card-pos absolute z-30 ${s.cardClass}`}
          >
            <span className="hero-card block rounded-[10px] bg-surface p-4 shadow-xl ring-1 ring-espresso/10">
              <span className="flex size-9 items-center justify-center rounded-full bg-tint text-accent">
                {s.icon}
              </span>
              <span className="mt-2.5 block text-sm font-semibold text-espresso">{s.name}</span>
              <span className="mt-1 block text-xs leading-relaxed text-ink-500">{s.note}</span>
              <span className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                Doctor-assessed options <ArrowRight size={12} />
              </span>
            </span>
          </Link>
        </Fragment>
      ))}
    </div>
  );
}
