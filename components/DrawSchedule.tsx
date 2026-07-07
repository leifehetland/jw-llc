import Image from "next/image";
import { drawSchedule as d } from "@/lib/site";

export default function DrawSchedule() {
  return (
    <section className="bg-sage-lighter">
      <div className="container-x py-20">
        {/* Intro / benefits */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{d.eyebrow}</p>
          <h2 className="section-title mt-3">{d.benefitsHeading}</h2>
          <div className="mt-6 space-y-4 text-left text-base leading-relaxed text-charcoal/80 sm:text-center">
            {d.benefits.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <div className="relative order-2 h-80 overflow-hidden rounded-xl shadow-lg ring-1 ring-sage/40 lg:order-1 lg:h-full lg:min-h-[420px]">
            <Image
              src="/images/new-construction2.jpeg"
              alt="Construction project in progress"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-forest-dark">
              {d.howHeading}
            </h3>
            {d.how.map((p, i) => (
              <p key={i} className="mt-4 text-base leading-relaxed text-charcoal/80">
                {p}
              </p>
            ))}
            <p className="mt-6 font-semibold text-forest-dark">{d.milestonesIntro}</p>
            <ol className="mt-4 space-y-3">
              {d.milestones.map((m, i) => (
                <li key={m} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest font-display text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-charcoal/90">{m}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
