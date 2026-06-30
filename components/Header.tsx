"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="hidden bg-forest-deep text-white md:block">
        <div className="container-x flex h-10 items-center justify-between text-xs">
          <span className="tracking-wide">Serving {site.area} for over 30 years</span>
          <div className="flex items-center gap-6">
            <span>Licensed · Family-Owned · Trusted</span>
            <a href={site.phoneHref} className="font-semibold tracking-wide hover:text-sage">
              {site.phone}
            </a>
            <SocialLinks variant="bar" />
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-sage/40 bg-white/95 backdrop-blur">
        <div className="container-x flex h-20 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors hover:text-forest"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a href={site.phoneHref} className="text-right leading-tight">
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-olive">
                Call Today
              </span>
              <span className="block font-display text-lg font-bold text-forest">
                {site.phone}
              </span>
            </a>
            <Link href="/contact" className="btn-primary">
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-sage text-forest lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-sage/40 bg-white lg:hidden">
            <nav className="container-x flex flex-col py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-semibold uppercase tracking-wide text-charcoal hover:text-forest"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3">
                Get a Quote
              </Link>
              <a
                href={site.phoneHref}
                className="mt-4 font-display text-lg font-bold text-forest"
              >
                {site.phone}
              </a>
              <div className="mt-4 border-t border-sage/40 pt-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-olive">
                  Follow Us
                </span>
                <SocialLinks variant="menu" className="mt-2" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
