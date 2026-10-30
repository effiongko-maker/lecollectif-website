import type { OfferingAccessMode } from "@/lib/booking/types";
import { conversionActions } from "@/lib/site";

/**
 * Glass Café — destination content.
 * No menu, hours, prices, or invented amenity details.
 */

/** Café page content — expand section-by-section as the page is built */
export const cafePageContent = {
  hero: {
    eyebrow: "The Glass Café",
    headline: "Where the day slows down.",
    supporting:
      "The Glass Café will be a place for coffee, conversation and a little time away from your desk.",
    cta: {
      label: conversionActions.enquire.label,
      href: `${conversionActions.enquire.href}?offering=glass-cafe`,
    },
    media: {
      src: "/media/cafe/glass-cafe-concept.png" as string | null,
      alt: "Conceptual architectural visual of the Glass Café at Le CollectiF",
      objectPosition: "center 42%",
    },
  },
  philosophy: {
    id: "philosophy",
    eyebrow: "The Café",
    headline: "A place to pause.",
    supporting:
      "Not every conversation needs a meeting room. Some are better over coffee, with time to see where they lead.",
  },
  experience: {
    id: "experience",
    eyebrow: "The Experience",
    headline: "Made for lingering.",
    supporting:
      "A first cup, a catch-up, a break between meetings. Room for the smaller moments in your day.",
    items: [
      {
        id: "coffee",
        label: "Coffee",
        description: "A good cup of coffee is always a good place to start.",
      },
      {
        id: "conversation",
        label: "Conversation",
        description: "Informal meetings without the meeting room.",
      },
      {
        id: "lingering",
        label: "Lingering",
        description: "Time that doesn't need an agenda.",
      },
      {
        id: "arrival-departure",
        label: "Arrival & Departure",
        description: "Coffee before a meeting or on your way out.",
      },
    ],
  },
  atmosphere: {
    id: "atmosphere",
    eyebrow: "Atmosphere",
    headline: "Light, glass and quiet company.",
    supporting:
      "A quieter setting for an unhurried conversation or a little time on your own.",
    media: {
      src: "/media/cafe/glass-cafe-concept.png" as string | null,
      alt: "Conceptual architectural visual of the Glass Café at Le CollectiF",
      objectPosition: "center 38%",
    },
  },
  within: {
    id: "within",
    eyebrow: "Within Le CollectiF",
    headline: "Part of the day's rhythm.",
    supporting:
      "Alongside the workspaces and event spaces, the Glass Café will make room for the moments between work and gathering.",
    links: [
      { label: "Explore Spaces", href: "/spaces" },
      { label: "Explore Events", href: "/events" },
    ],
  },
  closing: {
    eyebrow: "The Glass Café",
    headline: "Coffee, in good company.",
    supporting:
      "Explore how the Glass Café fits into a day at Le CollectiF.",
    cta: {
      label: conversionActions.enquire.label,
      href: `${conversionActions.enquire.href}?offering=glass-cafe`,
    },
  },
} as const;

export const homeCafeContent = {
  id: "cafe",
  eyebrow: "The Glass Café",
  headline: "Where the day slows down.",
  supporting:
    "Coffee before a meeting, a conversation over another cup, or a little time to yourself: a taste of what the Glass Café will bring to Le CollectiF.",
  cta: {
    label: "Discover the Café",
    href: "/cafe",
  },
  media: {
    /**
     * Conceptual Glass Café visual — not finished-venue photography.
     * Replace with official photography when available.
     */
    src: "/media/cafe/glass-cafe-concept.png" as string | null,
    alt: "Conceptual architectural visual of the Glass Café at Le CollectiF",
    /** Crop focus for object-cover within the editorial media frame */
    objectPosition: "center 42%",
  },
} as const;

/**
 * Café offering shape — ready to connect to booking/enquiry later.
 * Do not implement café reservations yet.
 */
export const cafeOffering = {
  id: "glass-cafe",
  name: "The Glass Café",
  slug: "glass-cafe",
  type: "cafe" as const,
  href: "/cafe",
  accessMode: "enquiry" as OfferingAccessMode,
  /** Swap to direct_booking when café reservations become available */
  ctaMode: "enquire" as const,
} as const;
