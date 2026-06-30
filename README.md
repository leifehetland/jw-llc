# James Williams, LLC — Website

A modern Next.js rebuild of [jameswilliamsllc.com](https://jameswilliamsllc.com), reusing
all of Jim's content, copy, images, and brand colors, with a layout modeled on the
[Peavey (pvhvac.com)](https://www.pvhvac.com/) site structure.

## Stack

- **Next.js 14** (App Router) + **React 18**
- **TypeScript**
- **Tailwind CSS** for styling
- Google Fonts (Inter + Oswald) via `next/font`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Structure

```
app/
  layout.tsx         Global header + footer, fonts, metadata
  page.tsx           Home (full Peavey-style section layout)
  about/             About James
  services/          Services
  portfolio/         Project gallery (32 photos, grouped)
  contact/           Contact form + details
components/           Header, Footer, Logo, PageHero, ContactForm
lib/site.ts          All site content/copy in one place
public/images/       Jim's project photos
```

## Content notes / things to replace

All copy comes from Jim's current site. A few placeholders are clearly marked and ready
to swap in real content:

- **Testimonials** (`lib/site.ts` → `testimonials`) — currently placeholder reviews.
- **Email address** (`lib/site.ts` → `site.email`) — set the real address so the contact
  form's mailto link works. (For real form delivery, connect a backend or a service like
  Formspree / Resend.)
- **Social links** (`lib/site.ts` → `social`) — point to Jim's actual profiles.

## Performance notes

- Photos are capped at 1600px and re-encoded; `next/image` further downscales per slot
  and serves AVIF/WebP (`next.config.mjs` → `images.formats`).
- Every `<Image>` has an accurate `sizes` prop so the browser fetches a right-sized file
  (important on the portfolio grid).
- Fonts are self-hosted via `next/font` (no render-blocking request, no layout shift).
- SEO: `metadataBase` + Open Graph/Twitter tags, plus `app/sitemap.ts` and
  `app/robots.ts`. Update the `siteUrl` constant in those three files if the domain changes.

To edit text, prices, services, or service areas, update `lib/site.ts` — the pages read
from it.
