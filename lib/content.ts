export type WorkCategory = "artwork" | "client";

export interface WorkItem {
  slug: string;
  title: string;
  context: string;
  category: WorkCategory;
  src: string;
  width: number;
  height: number;
}

export const works: WorkItem[] = [
  {
    slug: "new-music-friday",
    title: "New Music Friday",
    context: "Max FM 102.3 — social series",
    category: "client",
    src: "/work/work-new-music-friday.webp",
    width: 800,
    height: 800,
  },
  {
    slug: "crown-sketch",
    title: "Crown Study",
    context: "Chalk line work on black",
    category: "artwork",
    src: "/work/art-crown-sketch.webp",
    width: 778,
    height: 1000,
  },
  {
    slug: "sosa",
    title: "Sosa Fruit Drink",
    context: "Product campaign visual",
    category: "client",
    src: "/work/work-sosa.webp",
    width: 640,
    height: 800,
  },
  {
    slug: "match-day",
    title: "Match Day",
    context: "Caleb University — sports poster",
    category: "client",
    src: "/work/work-match-day.webp",
    width: 1080,
    height: 1080,
  },
  {
    slug: "spectrum-gaze",
    title: "Spectrum Gaze",
    context: "Digital abstract portrait",
    category: "artwork",
    src: "/work/art-spectrum-gaze.webp",
    width: 1024,
    height: 1536,
  },
  {
    slug: "tide-figure",
    title: "Tide Figure",
    context: "Acrylic abstract portrait",
    category: "artwork",
    src: "/work/art-tide-figure.webp",
    width: 810,
    height: 1080,
  },
  {
    slug: "sterling",
    title: "Bank With Confidence",
    context: "Sterling Bank — concept ad",
    category: "client",
    src: "/work/work-sterling.webp",
    width: 640,
    height: 800,
  },
  {
    slug: "battle-brands",
    title: "Battle of the Brands",
    context: "Campus tournament identity",
    category: "client",
    src: "/work/work-battle-brands.webp",
    width: 565,
    height: 799,
  },
  {
    slug: "city-mosaic",
    title: "City Mosaic",
    context: "Digital abstract composition",
    category: "artwork",
    src: "/work/art-city-mosaic.webp",
    width: 715,
    height: 1200,
  },
  {
    slug: "bellas",
    title: "Bella's Lifestyle",
    context: "Launch collage — coming soon",
    category: "client",
    src: "/work/work-bellas.webp",
    width: 794,
    height: 1123,
  },
  {
    slug: "minotech",
    title: "It's Weekend",
    context: "Minotech — social campaign",
    category: "client",
    src: "/work/work-minotech.webp",
    width: 800,
    height: 800,
  },
  {
    slug: "chroma-field",
    title: "Chroma Field",
    context: "Mixed-media abstract",
    category: "artwork",
    src: "/work/art-chroma-field.webp",
    width: 703,
    height: 774,
  },
  {
    slug: "ioni-cakes",
    title: "Ioni Cakes",
    context: "Bakery brand collage",
    category: "client",
    src: "/work/work-ioni-cakes.webp",
    width: 800,
    height: 640,
  },
  {
    slug: "period-care",
    title: "Best Period Protection",
    context: "Product flyer design",
    category: "client",
    src: "/work/work-period-care.webp",
    width: 864,
    height: 1080,
  },
  {
    slug: "upstander",
    title: "#BeAnUpstander",
    context: "Digital safety campaign",
    category: "client",
    src: "/work/work-upstander.webp",
    width: 715,
    height: 714,
  },
  {
    slug: "elderly-fitness",
    title: "Exercise for the Elderly",
    context: "Health awareness flyer",
    category: "client",
    src: "/work/work-elderly-fitness.webp",
    width: 1080,
    height: 1080,
  },
];

export const disciplines = [
  "Graphic Design",
  "Abstract Art",
  "Digital Art",
  "Branding & Logo",
  "Concept Development",
  "Motion Design",
  "Video Editing",
];

export const experience = [
  {
    org: "TVC Communications",
    role: "Graphic Design Intern",
    period: "2025",
    notes: "Created broadcast-ready visual designs and collaborated with cross-functional production teams.",
  },
  {
    org: "Max FM 102.3",
    role: "Junior Graphic Designer / PR Intern",
    period: "2025",
    notes: "Designed social media templates and event branding for on-air campaigns like New Music Friday.",
  },
  {
    org: "LinkedIn Local — Caleb University",
    role: "Design Lead",
    period: "2024 — Present",
    notes: "Leads design projects end-to-end and mentors junior designers in the campus creative community.",
  },
  {
    org: "Caleb University — College of Communication & Media Studies",
    role: "Graphics Designer & Video Editor",
    period: "2023 — Present",
    notes: "Graphics for the sports team and creative department; video editing for the creative department since 2025.",
  },
];

export const education = {
  school: "Caleb University, Lagos",
  degree: "B.Sc. Mass Communication",
  period: "2023 — 2026 (in view)",
};

export const contact = {
  email: "ocenstarartworks@gmail.com",
  phone: "+234 810 919 0621",
  phoneHref: "tel:+2348109190621",
  location: "Lagos, Nigeria",
};
