// Centralized site content for James Williams, LLC.
// All copy here is sourced from jameswilliamsllc.com.

export const site = {
  name: "James Williams, LLC",
  tagline: "General Contracting",
  phone: "404-317-6478",
  phoneHref: "tel:404-317-6478",
  email: "jameswilliamsllc@email.com", // placeholder — update with real address
  area: "Metro Atlanta",
  hero: "Built on 30+ Years of Experience Serving Metro Atlanta",
  heroSub:
    "From small repairs to full renovations, James Williams brings three decades of hands-on craftsmanship to every home he touches. Solid, dependable work, done right the first time.",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "30+", label: "Years of Experience" },
  { value: "100%", label: "Family-Owned & Operated" },
  { value: "Metro", label: "Atlanta Service Area" },
];

// Three headline service cards for the "Home Transformation Made Simple" row.
export const serviceCards = [
  {
    title: "Kitchen Remodeling",
    image: "/images/kitchen3.jpeg",
    text: "Custom cabinetry, countertops, tiling, and open-concept reconfigurations that make the heart of your home work harder.",
  },
  {
    title: "Bathroom Remodeling",
    image: "/images/bathroom1.jpeg",
    text: "Walk-in showers, tile work, vanities, and full master-bath renovations finished with clean, careful detail.",
  },
  {
    title: "Whole-Home Renovations",
    image: "/images/new-construction1.jpeg",
    text: "Room additions, basement finishing, and full home transformations, from the first wall to the final coat.",
  },
];

// Full service list (from the Services page).
export const services = [
  {
    title: "Interior Remodeling",
    text: "Kitchens, bathrooms, basements, and attic conversions, including custom cabinetry, countertops, and tiling.",
  },
  {
    title: "Structural & Layout",
    text: "Whole-home renovations, room additions, and open-concept reconfigurations like wall removals.",
  },
  {
    title: "Exterior Improvements",
    text: "Roofing, siding, decks, window/door replacement, and custom patio construction.",
  },
  {
    title: "Essential Trade Work",
    text: "Plumbing, electrical, flooring, drywall, and HVAC system upgrades.",
  },
  {
    title: "ADA Compliant Fit-outs",
    text: "Door widening, floor modifications, and entry ramps.",
  },
];

export const qualifications = [
  "Licensed General Contractor",
  "Over 30 Years of Experience",
  "Family-Owned Business",
  "Quality Craftsmanship",
  "Reliable & Straightforward",
  "Trusted Local Contractor",
];

export const serviceAreas = [
  "Atlanta",
  "Decatur",
  "DeKalb County",
  "Greater Metro Atlanta",
];

export const about = {
  heading: "About James Williams",
  photo: "/images/james-williams.jpeg",
  paragraphs: [
    "James Williams has been working in construction for over 30 years, helping homeowners around Metro Atlanta get the job done right.",
    "He grew up around it. Coming from a family of general contractors, he was on job sites from a young age, learning the trade hands-on. That's where he picked up his work ethic and attention to detail, and it's something he still brings to every project today.",
    "Whether it's a small repair or a bigger renovation, James takes pride in doing solid, dependable work. He believes in being straightforward, showing up when he says he will, and making sure you're happy with the final result.",
    "At the end of the day, it's simple, he just wants to do good work for good people.",
  ],
  closing: "Serving Metro Atlanta homeowners for over 30 years.",
};

// Placeholder testimonials — replace with real customer reviews.
export const testimonials = [
  {
    quote:
      "Add a real customer review here. James kept us informed at every step and the finished kitchen exceeded what we pictured.",
    name: "Customer Name",
    detail: "Kitchen Remodel · Atlanta",
  },
  {
    quote:
      "Placeholder review. He showed up when he said he would and the craftsmanship speaks for itself.",
    name: "Customer Name",
    detail: "Bathroom Renovation · Decatur",
  },
  {
    quote:
      "Placeholder review. Straightforward, honest, and dependable from estimate to final walkthrough.",
    name: "Customer Name",
    detail: "Whole-Home Renovation · DeKalb County",
  },
];

// Portfolio gallery, grouped by category.
export const portfolio = [
  {
    category: "Kitchens",
    images: Array.from({ length: 16 }, (_, i) => `/images/kitchen${i + 1}.jpeg`),
  },
  {
    category: "Bathrooms",
    images: Array.from({ length: 5 }, (_, i) => `/images/bathroom${i + 1}.jpeg`),
  },
  {
    category: "Cabinetry",
    images: Array.from({ length: 4 }, (_, i) => `/images/cabinetry${i + 1}.jpeg`),
  },
  {
    category: "New Construction & Additions",
    images: [
      ...Array.from({ length: 4 }, (_, i) => `/images/new-construction${i + 1}.jpeg`),
      ...Array.from({ length: 3 }, (_, i) => `/images/new-build${i + 1}.jpeg`),
    ],
  },
];

export const social = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Google", href: "#" },
];
