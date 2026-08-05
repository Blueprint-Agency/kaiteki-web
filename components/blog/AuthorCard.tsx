import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import type { Doctor } from "@/lib/types";

/**
 * "About the author" block at the foot of an article. This is the post's main
 * E-E-A-T payload: a named, MMC-registered doctor with credentials and a link to
 * a full profile page (docs/02 §5) — not a generic "Kaiteki team" byline.
 */
export function AuthorCard({ doctor }: { doctor: Doctor }) {
  return (
    <section className="rounded-2xl border border-hairline bg-surface p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mocha">
        About the author
      </p>
      <div className="mt-5 flex flex-col gap-5 sm:flex-row">
        <Link
          href={`/doctors/${doctor.slug}`}
          className="relative size-24 shrink-0 overflow-hidden rounded-2xl bg-tint"
        >
          <Image
            src={doctor.photo}
            alt={`${doctor.fullName}, ${doctor.credentials}, aesthetic doctor at Kaiteki Skin Aesthetic Clinic`}
            fill
            sizes="96px"
            className="object-cover object-top"
          />
        </Link>
        <div className="min-w-0">
          <h2 className="font-display text-xl font-medium text-espresso">
            <Link
              href={`/doctors/${doctor.slug}`}
              className="decoration-mocha/50 underline-offset-[5px] hover:underline"
            >
              {doctor.fullName}
            </Link>
          </h2>
          {doctor.role && <p className="mt-1 text-sm font-medium text-accent">{doctor.role}</p>}
          <p className="ledger mt-2">
            {doctor.credentials}
            {doctor.mmc ? ` · ${doctor.mmc}` : ""}
          </p>
          {doctor.bio?.[0] && (
            <p className="mt-3 text-sm leading-relaxed text-ink-700">{doctor.bio[0]}</p>
          )}
          <Link
            href={`/doctors/${doctor.slug}`}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-espresso"
          >
            View full profile <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
