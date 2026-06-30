import Link from "next/link";
import Logo from "./Logo";
import { nav, services, site, social } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      {/* CTA banner */}
      <section className="bg-forest">
        <div className="container-x flex flex-col items-center gap-6 py-14 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
              Ready to start your project?
            </h2>
            <p className="mt-2 max-w-xl text-sage-light">
              Tell James what you have in mind and get an honest, straightforward estimate.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={site.phoneHref} className="btn-outline">
              Call {site.phone}
            </a>
            <Link href="/contact" className="btn-primary border-2 border-white bg-white !text-forest hover:bg-transparent hover:!text-white">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <div className="bg-forest-deep text-sage-light">
        <div className="container-x grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed">
              General contracting and home remodeling, built on 30+ years of hands-on
              experience serving {site.area}.
            </p>
            <div className="mt-5 flex gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-sage/40 text-xs font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-forest"
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={site.phoneHref} className="font-semibold text-white hover:text-sage">
                  {site.phone}
                </a>
              </li>
              <li>{site.area}, Georgia</li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Send us a message →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-sage-light/70 sm:flex-row">
            <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
            <span>Licensed General Contractor · {site.area}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
