"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const first = form.get("firstName");
    const last = form.get("lastName");
    const email = form.get("email");
    const phone = form.get("phone");
    const message = form.get("message");

    // No backend yet — open the visitor's email client as a fallback.
    const subject = encodeURIComponent(`Project inquiry from ${first} ${last}`);
    const body = encodeURIComponent(
      `Name: ${first} ${last}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const field =
    "w-full rounded-md border border-sage/60 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-forest focus:ring-2 focus:ring-forest/20";
  const label = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal/70";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="firstName">First Name *</label>
          <input id="firstName" name="firstName" required className={field} />
        </div>
        <div>
          <label className={label} htmlFor="lastName">Last Name *</label>
          <input id="lastName" name="lastName" required className={field} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="email">Email Address *</label>
          <input id="email" name="email" type="email" required className={field} />
        </div>
        <div>
          <label className={label} htmlFor="phone">Phone Number *</label>
          <input id="phone" name="phone" type="tel" required className={field} />
        </div>
      </div>
      <div>
        <label className={label} htmlFor="message">Message *</label>
        <textarea id="message" name="message" required rows={5} className={field} />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send Message
      </button>
      {sent && (
        <p className="text-sm font-medium text-forest">
          Thanks! Your email app should open to send the message. Prefer to call?{" "}
          <a href={site.phoneHref} className="underline">{site.phone}</a>
        </p>
      )}
    </form>
  );
}
