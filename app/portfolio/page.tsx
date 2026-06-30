import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { portfolio, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A look at recent kitchens, bathrooms, cabinetry, and new construction by James Williams, LLC across Metro Atlanta.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Portfolio"
        subtitle="A look at recent projects across Metro Atlanta — kitchens, bathrooms, cabinetry, and new construction."
        image="/images/kitchen8.jpeg"
      />

      <section className="bg-cream">
        <div className="container-x py-20">
          {portfolio.map((group) => (
            <div key={group.category} className="mb-16 last:mb-0">
              <div className="mb-6 flex items-end justify-between border-b border-sage/50 pb-3">
                <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-forest-dark">
                  {group.category}
                </h2>
                <span className="text-sm font-semibold text-olive">
                  {group.images.length} projects
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {group.images.map((src, i) => (
                  <div
                    key={src}
                    className="group relative aspect-square overflow-hidden rounded-lg shadow-sm ring-1 ring-sage/40"
                  >
                    <Image
                      src={src}
                      alt={`${group.category} project ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-4 flex flex-col items-center justify-center gap-3 rounded-2xl bg-sage-lighter p-10 text-center sm:flex-row">
            <p className="text-base font-semibold text-forest-dark">
              Like what you see? Let's talk about your project.
            </p>
            <div className="flex gap-3">
              <Link href="/contact" className="btn-primary">
                Get a Quote
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
