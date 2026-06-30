import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with James Williams, LLC for general contracting and home remodeling in Metro Atlanta. Call 404-317-6478 or send a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Tell James what you have in mind and get an honest, straightforward estimate."
        image="/images/bathroom3.jpeg"
      />

      <section className="bg-cream">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-forest-dark">
              Send a message
            </h2>
            <p className="mt-2 text-sm text-charcoal/70">
              Fill out the form and James will get back to you. Required fields are marked
              with an asterisk.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-2xl bg-forest p-8 text-white">
              <h3 className="font-display text-xl font-bold uppercase tracking-wide">
                Get in touch
              </h3>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-sage">Call</dt>
                  <dd className="mt-1">
                    <a href={site.phoneHref} className="font-display text-2xl font-bold hover:text-sage">
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-sage">Service Area</dt>
                  <dd className="mt-1 text-sage-light">
                    {serviceAreas.join(" · ")}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-sage">Hours</dt>
                  <dd className="mt-1 text-sage-light">
                    Mon–Sat, by appointment
                  </dd>
                </div>
              </dl>
              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="text-sm text-sage-light">
                  Prefer to talk it through? Give James a call directly. He's happy to
                  walk through your project and what it'll take.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
