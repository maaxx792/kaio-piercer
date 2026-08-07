export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  priceLabel: string;
  icon: "sparkle" | "target" | "gem" | "layers" | "shield" | "refresh";
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: "shield" | "hand" | "clock" | "award";
}

export interface PortfolioItem {
  id: string;
  imageUrl: string;
  title: string;
  tag: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  stars: number;
  text: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ScheduleItem {
  day: string;
  hours: string;
}

export interface LocationItem {
  id: string;
  label: string;
  addressLine: string;
  description: string;
  googleMapsUrl: string;
  appleMapsUrl: string;
}

export interface SiteData {
  companyName: string;
  ownerName: string;
  titlePrimary: string;
  titleSecondary: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBackground: string;
  stats: { value: string; label: string }[];
  nav: NavLink[];
  about: {
    eyebrow: string;
    title: string;
    highlight: string;
    paragraphs: string[];
  };
  benefits: BenefitItem[];
  services: ServiceItem[];
  servicesNote: string;
  portfolio: PortfolioItem[];
  testimonials: TestimonialItem[];
  faq: FaqItem[];
  schedule: ScheduleItem[];
  locations: LocationItem[];
  contact: {
    phoneFormatted: string;
    phoneRaw: string;
    whatsappCta: string;
    rideAppSearchTerm: string;
  };
  socials: {
    instagramHandle: string;
    instagramUrl: string;
  };
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
}
