import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { about, qualifications, site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "James Williams has been working in construction for over 30 years, helping homeowners around Metro Atlanta get the job done right.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About James Williams"
        subtitle="Three decades of hands-on craftsmanship, serving Metro Atlanta homeowners."
      />

      <section className="bg-cream">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-sage shadow-lg ring-1 ring-sage/50">
                <Image
                  src={about.photo}
                  alt="James Williams, owner of James Williams, LLC"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-lg border border-sage/50 bg-white p-3 text-center">
                    <div className="font-display text-2xl font-bold text-forest">{s.value}</div>
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-charcoal/70">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow">Our Story</p>
            <h2 className="section-title mt-3">{about.heading}</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-charcoal/85">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-6 font-semibold text-forest-dark">{about.closing}</p>

            <h3 className="mt-12 font-display text-xl font-bold uppercase tracking-wide text-forest-dark">
              What James brings to every job
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {qualifications.map((q) => (
                <div key={q} className="flex items-center gap-3 rounded-lg border border-sage/50 bg-white p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                    ✓
                  </span>
                  <span className="text-sm font-semibold text-forest-dark">{q}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Get a Free Estimate
              </Link>
              <a href={site.phoneHref} className="btn-ghost">
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
