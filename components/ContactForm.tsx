"use client";

import { useState } from "react";
import { site } from "@/lib/site";

// Web3Forms access key. Safe to expose client-side (that's how Web3Forms works).
// Optionally override in production via NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "41254d33-ea02-476a-ab54-e95360690c8b";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setError("");

    const data = new FormData(form);
    const first = data.get("firstName");
    const last = data.get("lastName");
    data.append("access_key", ACCESS_KEY);
    data.append("name", `${first ?? ""} ${last ?? ""}`.trim());
    data.append("from_name", "James Williams, LLC Website");
    data.append("subject", `New website inquiry from ${first ?? ""} ${last ?? ""}`.trim());

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json.message || "Something went wrong. Please try again or call us.");
      }
    } catch {
      setStatus("error");
      setError("Couldn't send your message. Please try again or call us.");
    }
  }

  const field =
    "w-full rounded-md border border-sage/60 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-forest focus:ring-2 focus:ring-forest/20";
  const label = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal/70";

  if (status === "success") {
    return (
      <div className="rounded-xl border border-forest/20 bg-sage-lighter p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest text-2xl text-white">
          ✓
        </div>
        <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-wide text-forest-dark">
          Message sent
        </h3>
        <p className="mt-2 text-sm text-charcoal/80">
          Thanks for reaching out. James will get back to you soon. Need a faster
          response? Call{" "}
          <a href={site.phoneHref} className="font-semibold text-forest underline">
            {site.phone}
          </a>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold uppercase tracking-wide text-olive hover:text-forest"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot spam trap (hidden from real users). */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

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

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-sm font-medium text-red-700">
          {error}{" "}
          <a href={site.phoneHref} className="underline">
            {site.phone}
          </a>
        </p>
      )}
    </form>
  );
}
