/**
 * Breinsport site content.
 * Sourced from the official "Breinsport — MNK Izola Overview" brand document (v1.0, Dec 2025).
 */

export const nav = [
  { label: "Concept", href: "#concept" },
  { label: "Plan", href: "#plan" },
  { label: "Segments", href: "#segments" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Projects", href: "#projects" },
  { label: "Network", href: "#network" },
] as const;

export const markets = ["EU", "UK", "US", "Canada", "UAE"] as const;

export const heroStats = [
  { value: "5", label: "Global offices" },
  { value: "3", label: "Flagship clubs" },
  { value: "24/7", label: "Athlete development" },
] as const;

export const ventures = [
  {
    id: "breinrock",
    name: "Breinrock",
    role: "The capital",
    tag: "Digital neo-bank",
    description:
      "A digital neo-bank serving the EU, UK, US, Canada and UAE — a payment platform built on the latest AI technology in data encryption, channelling capital with security and precision.",
    points: [
      "AI-secured digital payment platform",
      "Cross-border across five markets",
      "Institutional-grade data encryption",
    ],
  },
  {
    id: "ultimate-sports",
    name: "Ultimate Sports",
    role: "The talent",
    tag: "Football fund",
    description:
      "A football fund specialised in the education of youth through sport — pairing a traditional education system with modern AI that measures the performance and potential of every young athlete.",
    points: [
      "Youth education through sport",
      "AI performance & potential analytics",
      "Traditional schooling integrated",
    ],
  },
] as const;

export const plan = [
  {
    no: "01",
    title: "Infrastructure",
    summary:
      "Full investment into sports fields and the modernisation of existing infrastructure.",
    icon: "infrastructure" as const,
  },
  {
    no: "02",
    title: "Youth & Academies",
    summary:
      "Development of dedicated sport centres that nurture talent from the ground up.",
    icon: "academy" as const,
  },
  {
    no: "03",
    title: "First Team",
    summary:
      "Competition achievements across both men's and women's professional squads.",
    icon: "trophy" as const,
  },
] as const;

export const segments = [
  {
    id: "investment",
    title: "Investment",
    icon: "bank" as const,
    blurb:
      "Capital deployed into infrastructure, clubs and long-term sporting value.",
    items: [
      "Infrastructure & sports fields",
      "Club acquisition & expansion",
      "Long-term value creation",
    ],
  },
  {
    id: "education",
    title: "Education",
    icon: "academy" as const,
    blurb: "A complete development pathway for every young athlete in our care.",
    items: [
      "Paid scholarships",
      "Paid accommodation",
      "24/7 personal development",
    ],
  },
  {
    id: "sports",
    title: "Sports",
    icon: "whistle" as const,
    blurb: "A full competitive calendar that keeps athletes match-sharp.",
    items: [
      "Competition & tournaments",
      "Mid-season & schools championship",
      "Club expansion & events",
    ],
  },
] as const;

export const projects = [
  {
    name: "FC AEL Limassol",
    discipline: "Football",
    tier: "1st Division Club",
    country: "Cyprus",
    icon: "football" as const,
  },
  {
    name: "BC AEL Limassol",
    discipline: "Basketball",
    tier: "1st League",
    country: "Cyprus",
    icon: "basketball" as const,
  },
  {
    name: "Dubai Basket",
    discipline: "Basketball",
    tier: "ABA League / EuroLeague",
    country: "UAE",
    icon: "basketball" as const,
  },
] as const;

export const offices = [
  {
    city: "Limassol",
    country: "Cyprus",
    address: "Harmony House, Office 11, 1st Floor, 4 Thekla Lysioti, 3030 Limassol",
    phone: "+357 25 025025",
    hq: true,
    lat: 34.68,
    lng: 33.04,
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "73 Mornington Street, London, NW1 7QE",
    phone: "+357 25 025025",
    hq: false,
    lat: 51.53,
    lng: -0.12,
  },
  {
    city: "Toronto",
    country: "Canada",
    address: "100 King Street West, Suite 5700, Toronto M5X 1C7 ON",
    phone: "+357 25 025025",
    hq: false,
    lat: 43.65,
    lng: -79.38,
  },
  {
    city: "Dubai",
    country: "UAE",
    address: "Emirates Financial Tower, S2109, DIFC, Dubai",
    phone: "+357 25 025025",
    hq: false,
    lat: 25.2,
    lng: 55.27,
  },
  {
    city: "Prague",
    country: "Czech Republic",
    address: "Evropská 2758/11, Dejvice, 160 00 Prague 6",
    phone: "+357 25 025025",
    hq: false,
    lat: 50.1,
    lng: 14.39,
  },
] as const;

export const contact = {
  email: "welcome@breinrock.com",
  website: "www.breinrock.com",
  websiteUrl: "https://www.breinrock.com",
} as const;
