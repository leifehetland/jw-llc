import Image from "next/image";
import Link from "next/link";
import DrawSchedule from "@/components/DrawSchedule";
import {
  about,
  portfolio,
  qualifications,
  serviceAreas,
  serviceCards,
  services,
  site,
  stats,
  testimonials,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative isolate overflow-hidden bg-forest-deep text-white">
        <Image
          src="/images/new-build1.jpeg"
          alt="Home built by James Williams, LLC"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-deep/95 via-forest-deep/80 to-forest-deep/40" />
        <div className="container-x relative grid items-center gap-10 py-24 md:grid-cols-2 md:py-32">
          <div className="mx-auto max-w-xl text-center md:mx-0 md:text-left">
            <p className="eyebrow !text-sage">Serving Metro Atlanta</p>
            <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] tracking-wide sm:text-5xl lg:text-6xl">
              {site.hero}
            </h1>
            <p className="mt-6 text-left text-lg leading-relaxed text-sage-light">
              {site.heroSub}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary w-full border-2 border-white bg-white !text-forest hover:bg-transparent hover:!text-white sm:w-auto">
                Get a Free Estimate
              </Link>
              <a href={site.phoneHref} className="btn-outline w-full sm:w-auto">
                Call {site.phone}
              </a>
            </div>
          </div>
          <div className="order-first flex justify-center md:order-none md:justify-end">
            <Image
              src="/logo/jw-lockup-white.png"
              alt="James Williams, LLC, General Contracting"
              width={1056}
              height={678}
              priority
              className="h-auto w-full max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* ============ DETAILS MATTER / STATS ============ */}
      <section className="bg-cream">
        <div className="container-x grid gap-12 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Because the Details Matter</p>
            <h2 className="section-title mt-3">
              Quality craftsmanship you can count on
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal/80">
              James Williams comes from a family of general contractors and has spent
              three decades on job sites across {site.area}. That experience shows up in
              the details: careful work, honest communication, and a finish you'll be
              happy with.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-sage/50 bg-white p-5 text-center shadow-sm"
              >
                <div className="font-display text-3xl font-bold text-forest sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-charcoal/70">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICE CARDS ============ */}
      <section className="bg-sage-lighter">
        <div className="container-x py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Home Transformation Made Simple</p>
            <h2 className="section-title mt-3">What we build</h2>
            <p className="mt-4 text-base text-charcoal/80">
              From a single room to a full renovation, James handles the whole job with
              the same attention to detail.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {serviceCards.map((c) => (
              <div
                key={c.title}
                className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-sage/40 transition-shadow hover:shadow-lg"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-forest-dark">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/80">{c.text}</p>
                  <Link
                    href="/services"
                    className="mt-4 inline-block text-sm font-semibold uppercase tracking-wide text-olive hover:text-forest"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURE SPLIT ============ */}
      <section className="bg-cream">
        <div className="container-x grid items-center gap-12 py-20 lg:grid-cols-2">
          <div className="relative order-2 h-[420px] overflow-hidden rounded-xl shadow-lg lg:order-1">
            <Image src="/images/kitchen1.jpeg" alt="Remodeled kitchen" fill sizes="(max-width: 1024px) 100vw, 600px" className="object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow">Remodeling Done Right, Every Time</p>
            <h2 className="section-title mt-3">
              Comprehensive home transformation services
            </h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal/80">
              We offer comprehensive home transformation services, from repairs to full
              expansions. Our core offerings include:
            </p>
            <ul className="mt-6 space-y-4">
              {services.map((s) => (
                <li key={s.title} className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest text-[10px] font-bold text-white">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed text-charcoal/85">
                    <span className="font-semibold text-forest-dark">{s.title}:</span>{" "}
                    {s.text}
                  </span>
                </li>
              ))}
            </ul>
            <Link href="/services" className="btn-ghost mt-8">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ============ DRAW SCHEDULE ============ */}
      <DrawSchedule />

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-forest-deep text-white">
        <div className="container-x py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow !text-sage">What Our Customers Say</p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl">
              Trusted by Metro Atlanta homeowners
            </h2>
            <p className="mt-3 text-sm text-sage-light/80">
              Real feedback from homeowners across Metro Atlanta.
            </p>
          </div>
          {/* Masonry columns so variable-length quotes pack cleanly. */}
          <div className="mx-auto mt-12 max-w-5xl columns-1 gap-6 md:columns-2 [&>figure]:mb-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="break-inside-avoid rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex gap-1 text-sage">
                  {"★★★★★".split("").map((s, j) => (
                    <span key={j}>{s}</span>
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-sage-light">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-white/10 pt-4">
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-sage-light/70">{t.detail}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT / FOUNDER STORY ============ */}
      <section className="bg-sage-lighter">
        <div className="container-x grid items-center gap-12 py-20 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl bg-sage shadow-lg ring-1 ring-sage/50">
              <Image
                src={about.photo}
                alt="James Williams, owner of James Williams, LLC"
                fill
                sizes="(max-width: 1024px) 384px, 480px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="eyebrow">Founded on Three Decades of Trade</p>
            <h2 className="section-title mt-3">{about.heading}</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-charcoal/80">
              {about.paragraphs.slice(0, 3).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-5 font-semibold text-forest-dark">{about.closing}</p>
            <Link href="/about" className="btn-ghost mt-8">
              Read His Story
            </Link>
          </div>
        </div>
      </section>

      {/* ============ QUALIFICATIONS ============ */}
      <section className="bg-cream">
        <div className="container-x py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Our Qualifications</p>
            <h2 className="section-title mt-3">Why homeowners choose James</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {qualifications.map((q) => (
              <div
                key={q}
                className="flex items-center gap-3 rounded-lg border border-sage/50 bg-white p-4 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                  ✓
                </span>
                <span className="text-sm font-semibold text-forest-dark">{q}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICE AREA ============ */}
      <section className="bg-forest text-white">
        <div className="container-x grid items-center gap-10 py-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow !text-sage">Serving the Local Community</p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl">
              Proudly serving {site.area}
            </h2>
            <p className="mt-4 max-w-lg text-sage-light">
              Based in Georgia and working with homeowners throughout the metro area.
              Not sure if you're in range? Give James a call.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {serviceAreas.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-white/30 px-4 py-2 text-sm font-medium"
                >
                  {a}
                </span>
              ))}
            </div>
            <a href={site.phoneHref} className="btn-outline mt-8">
              Call {site.phone}
            </a>
          </div>
          <div className="relative h-72 overflow-hidden rounded-xl ring-1 ring-white/20">
            <Image src="/images/new-construction1.jpeg" alt="Project in Metro Atlanta" fill sizes="(max-width: 1024px) 100vw, 600px" className="object-cover" />
          </div>
        </div>
      </section>

      {/* ============ PORTFOLIO PREVIEW ============ */}
      <section className="bg-sage-lighter">
        <div className="container-x py-20">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="eyebrow">Recent Work</p>
              <h2 className="section-title mt-3">Portfolio</h2>
            </div>
            <Link href="/portfolio" className="btn-ghost">
              View Full Portfolio
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              "/images/kitchen2.jpeg",
              "/images/bathroom2.jpeg",
              "/images/cabinetry1.jpeg",
              "/images/new-build2.jpeg",
              "/images/kitchen7.jpeg",
              "/images/bathroom4.jpeg",
              "/images/kitchen11.jpeg",
              "/images/new-construction3.jpeg",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg shadow-sm ring-1 ring-sage/40">
                <Image src={src} alt={`Project ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 300px" className="object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
