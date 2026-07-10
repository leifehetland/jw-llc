import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PortfolioGallery from "@/components/PortfolioGallery";
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
        subtitle="A look at recent projects across Metro Atlanta: kitchens, bathrooms, cabinetry, and new construction."
        image="/images/kitchen8.jpeg"
      />

      <section className="bg-cream">
        <div className="container-x py-20">
          <PortfolioGallery groups={portfolio} />

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
