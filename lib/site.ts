// Centralized site content for James Williams, LLC.
// All copy here is sourced from jameswilliamsllc.com.

export const site = {
  name: "James Williams, LLC",
  tagline: "General Contracting",
  phone: "404-317-6478",
  phoneHref: "tel:404-317-6478",
  email: "jameswilliamsllc@email.com", // placeholder: update with real address
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

// Real customer testimonials. (2 more are on the way from James.)
export const testimonials = [
  {
    quote:
      "James has been our go-to contractor since buying our home in 2021, and we wouldn't trust our property to anyone else. Most recently, he completely renovated our primary bathroom, and the results exceeded our expectations. He's also completed major plumbing, exterior maintenance and a porch renovation for us. What sets James and the team apart is that he does what he says he's going to do, a quality that's harder and harder to find these days. He's honest, fair, dependable, and takes real pride in his work.",
    name: "Emily",
    detail: "Homeowner since 2021",
  },
  {
    quote:
      "We really enjoyed working with James. We designed a \"ship-in-a-bottle\" en-suite bathroom within our 1901 bungalow, converting what had previously been a bedroom closet. The project involved relocating an electrical panel, installing a new window, and carefully removing and reinstalling salvaged heart pine flooring. James's attention to detail was exceptional. He even took several damaged pieces of our historic base blocks, the decorative blocks beneath the door casing, back to his shop and fabricated matching replacements so the new doorway would maintain the home's original character and detailing. His mechanical, electrical, and plumbing subcontractors were excellent, as were the tile and flooring crews. My wife and I are both architects, so our standards tend to be higher than average. James worked in tandem with Paul Terry of Bye Eye, LLC on this project. The team that did our project exceeded our expectations in both craftsmanship and professionalism. We would not hesitate to recommend James and his team for future projects.",
    name: "Alex & Racheal",
    detail: "Candler Park",
  },
  {
    quote:
      "I have had the pleasure of working with Jim Williams on projects at my own home and have confidently referred him to many of my real estate clients over the years. Jim is far more than your average contractor. His craftsmanship, precision, and exceptional attention to detail consistently set him apart. His cabinetry skills are outstanding, and his deep knowledge of building and construction allows him to tackle projects of every size and complexity. Whether it's building a custom home from an empty lot, completing a major renovation, or transforming an older property through a full remodel, Jim brings the same level of professionalism, expertise, and commitment to excellence. As a Realtor, having a contractor I can trust is invaluable, and Jim has become an indispensable resource for both me and my clients. His extensive experience, problem-solving abilities, and dedication to delivering quality work make him a unique and valuable partner on any project. I highly recommend Jim Williams to anyone looking for a contractor who truly takes pride in his work and consistently exceeds expectations.",
    name: "Jeff & Shane",
    detail: "White Oak Hills",
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

export const drawSchedule = {
  eyebrow: "How We Handle Payments",
  benefitsHeading: "The Benefits of a Draw Schedule",
  benefits: [
    "On larger jobs James utilizes a structured payment format known as a draw schedule. Designed to give homeowners peace of mind, this method ensures that payments are directly tied to clear, measurable project milestones. By paying only as specific phases of the job are completed, the homeowner always knows exactly what they are paying for.",
    "In contrast, traditional weekly or bi-weekly payment models often leave homeowners guessing about what actual progress has been made and whether their funds match the work completed.",
  ],
  howHeading: "How a Draw Schedule Works",
  how: [
    "A draw schedule is a phased payment plan that outlines exactly when and how funds are released throughout a construction or renovation project. Instead of requiring a massive upfront payment or a single lump sum at the end, project funds are disbursed in installments (called \"draws\") only after pre-determined milestones are successfully achieved.",
  ],
  milestonesIntro: "Examples of standard draw milestones include:",
  milestones: [
    "Completion of the foundation",
    "Framing inspection approval",
    "Rough-in plumbing and electrical",
    "Drywall installation and finishing",
  ],
};
