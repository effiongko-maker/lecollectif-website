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
      "A considered space for coffee, conversation, informal meetings and time to linger — within the rhythm of Le CollectiF.",
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
      "Coffee, conversation and a little more time. The Glass Café offers a softer rhythm within Le CollectiF — a place to meet informally, take a break from focused work or simply stay a little longer.",
  },
  experience: {
    id: "experience",
    eyebrow: "The Experience",
    headline: "Made for lingering.",
    supporting:
      "Different ways of being here — none of them rushed.",
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
      "A considered setting shaped by natural light, architectural calm and the simple pleasure of staying awhile.",
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
      "The Café sits between focused work and evening gathering — a place where the pace shifts, but the destination stays the same.",
    links: [
      { label: "Explore Spaces", href: "/spaces" },
      { label: "Explore Events", href: "/events" },
    ],
  },
  closing: {
    eyebrow: "Visit the Café",
    headline: "Come for coffee. Stay a little longer.",
    supporting:
      "For tables, hosting or simply finding out more about the Café, get in touch with us.",
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
    "A distinctive setting for coffee, conversation, informal meetings and lingering — a place to pause within the rhythm of Le CollectiF.",
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
