import Image from "next/image";

export default function PageHero({
  title,
  subtitle,
  image = "/images/new-construction2.jpeg",
}: {
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-deep text-white">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-deep/95 to-forest-deep/60" />
      <div className="container-x relative py-20 md:py-24">
        <h1 className="font-display text-4xl font-bold uppercase tracking-wide sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-sage-light">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
