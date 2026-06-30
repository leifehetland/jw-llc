import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { serviceCards, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive home transformation services: interior remodeling, structural & layout, exterior improvements, essential trade work, and ADA-compliant fit-outs.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="We offer comprehensive home transformation services, from repairs to full expansions."
        image="/images/kitchen5.jpeg"
      />

      {/* Featured service cards */}
      <section className="bg-cream">
        <div className="container-x py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Home Transformation Made Simple</p>
            <h2 className="section-title mt-3">Where we make the biggest difference</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {serviceCards.map((c) => (
              <div key={c.title} className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-sage/40">
                <div className="relative h-56 overflow-hidden">
                  <Image src={c.image} alt={c.title} fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-forest-dark">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/80">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full service list */}
      <section className="bg-sage-lighter">
        <div className="container-x py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Our Core Offerings</p>
            <h2 className="section-title mt-3">Everything under one contractor</h2>
            <p className="mt-4 text-base text-charcoal/80">
              From the first wall to the final coat, James handles the whole project so
              you only have one person to call.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="flex flex-col gap-2 rounded-xl border border-sage/50 bg-white p-6 shadow-sm sm:flex-row sm:items-start sm:gap-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-forest font-display text-xl font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-forest-dark">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal/80">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
            <a href={site.phoneHref} className="btn-ghost">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
