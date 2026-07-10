"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Group = { category: string; images: string[] };

export default function PortfolioGallery({ groups }: { groups: Group[] }) {
  // Flatten every image into one list so the arrows can move across the whole gallery.
  const items = groups.flatMap((g) =>
    g.images.map((src) => ({ src, category: g.category }))
  );

  const [active, setActive] = useState<number | null>(null);
  const isOpen = active !== null;

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length]
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length]
  );

  // Keyboard controls + lock background scroll while open.
  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, next, prev]);

  // Global index lookup so grid clicks open the right slide.
  let counter = -1;

  return (
    <>
      {groups.map((group) => (
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
            {group.images.map((src, i) => {
              counter += 1;
              const index = counter;
              return (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`View ${group.category} project ${i + 1} larger`}
                  className="group relative aspect-square overflow-hidden rounded-lg shadow-sm ring-1 ring-sage/40 focus:outline-none focus:ring-2 focus:ring-forest"
                >
                  <Image
                    src={src}
                    alt={`${group.category} project ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-forest-deep/0 text-white opacity-0 transition-all duration-300 group-hover:bg-forest-deep/30 group-hover:opacity-100">
                    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="7" />
                      <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {isOpen && active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio image viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          {/* Close */}
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
            className="absolute left-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative h-[78vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={items[active].src}
              alt={`${items[active].category} project`}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
            className="absolute right-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Caption / counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur">
            <span className="font-semibold">{items[active].category}</span>
            <span className="mx-2 text-white/50">|</span>
            {active + 1} of {items.length}
          </div>
        </div>
      )}
    </>
  );
}
