/**
 * Verified site constants only.
 * Do not invent prices, hours, amenities counts, or unverified claims here.
 */
/**
 * Canonical brand name — preserve exact casing: Le CollectiF
 * (final F is intentional; matches the official wordmark / LF monogram.)
 */
export const siteConfig = {
  name: "Le CollectiF",
  shortName: "Le CollectiF",
  location: "Abuja, Nigeria",
  description:
    "A premium hospitality-driven workspace and social destination in Abuja — a place to work, meet, gather and unwind.",
  tagline: "Work, meet, gather and unwind.",
} as const;

/**
 * Official brand mark — stacked LF monogram + wordmark + tagline.
 * Asset: public/brand/le-collectif-logo.png (transparent; gold mark).
 * Do not recreate, recolour, or distort the official logo.
 */
export const brandMark = {
  src: "/brand/le-collectif-logo.png" as string | null,
  alt: "Le CollectiF",
  /** Intrinsic asset dimensions — preserve aspect ratio in display */
  width: 256,
  height: 156,
} as const;

export type NavItem = {
  href: string;
  label: string;
};

/** Primary navigation — experiences at Le CollectiF */
export const mainNav: NavItem[] = [
  { href: "/spaces", label: "Spaces" },
  { href: "/events", label: "Events" },
  { href: "/cafe", label: "Café" },
  { href: "/visit", label: "Visit" },
];

/** Primary header action — enquiry remains available for human-led requests */
export const ctaNav: NavItem = {
  href: "/enquire",
  label: "Enquire",
};

/**
 * Conversion actions for future transactional UX.
 * Primary nav is unchanged until booking requirements are finalized.
 * - Book / Reserve / Host → dedicated transactional entry routes
 * - Enquire → human-assisted requests
 */
export const conversionActions = {
  book: {
    href: "/book",
    label: "Book",
  },
  reserve: {
    href: "/reserve",
    label: "Reserve",
  },
  host: {
    href: "/host",
    label: "Host",
  },
  enquire: {
    href: "/enquire",
    label: "Enquire",
  },
} as const;

/**
 * Footer navigation.
 * `href` omitted = intentional placeholder (no fake / broken routes).
 * Prefer existing destinations until dedicated pages ship.
 */
export type FooterNavLink = {
  label: string;
  href?: string;
};

export type FooterNavColumn = {
  id: string;
  label: string;
  links: FooterNavLink[];
  note?: string;
};

export const footerNavColumns: FooterNavColumn[] = [
  {
    id: "explore",
    label: "Explore",
    links: [
      { label: "Spaces", href: "/spaces" },
      { label: "Events", href: "/events" },
      { label: "Café", href: "/cafe" },
      { label: "Visit", href: "/visit" },
    ],
  },
  {
    id: "book",
    label: "Book",
    links: [
      { label: "Book a Space", href: "/book" },
      { label: "Reserve a Table", href: "/reserve" },
      { label: "Host an Event", href: "/host" },
      { label: "Enquire", href: "/enquire" },
    ],
  },
  {
    id: "collectif",
    label: "Le CollectiF",
    links: [
      { label: "About", href: "/about" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    id: "connect",
    label: "Connect",
    note: "Stay close to what's happening.",
    links: [
      { label: "Instagram" },
      { label: "WhatsApp" },
      { label: "Email" },
    ],
  },
];

export const footerLegalLinks: FooterNavLink[] = [
  { label: "Privacy" },
  { label: "Terms" },
];

export const footerBrandLine = "Come as you are." as const;

