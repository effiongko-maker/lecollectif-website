import { conversionActions, siteConfig } from "@/lib/site";

/**
 * Visit page — practical invitation to arrive at Le CollectiF.
 * Hours and address as provided; do not invent further operational details.
 */

export const visitAddress = {
  line1: "No. 2 River Benue Street",
  line2: "Maitama, Abuja",
  line3: "Nigeria",
  full: "No. 2 River Benue Street, Maitama, Abuja, Nigeria",
} as const;

const mapsQuery = encodeURIComponent(visitAddress.full);

export const visitMaps = {
  directionsHref: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  /** Search-based embed — no Maps API key required */
  embedSrc: `https://maps.google.com/maps?q=${mapsQuery}&z=15&output=embed`,
} as const;

export const visitPageContent = {
  hero: {
    eyebrow: "Visit",
    headline: "Come as you are.",
    supporting:
      "Le CollectiF is a place to work, meet, gather and unwind — designed to accommodate the different rhythms of the day.",
  },
  location: {
    id: "location",
    eyebrow: "Find us",
    headline: "A place worth arriving at.",
    supporting: `You'll find ${siteConfig.name} at ${visitAddress.full} — a place in the heart of the city for work, conversation, gathering and time well spent.`,
    cta: {
      label: "Get directions",
      href: visitMaps.directionsHref,
    },
  },
  hours: {
    id: "when-to-visit",
    eyebrow: "When to visit",
    headline: "Different hours, same setting.",
    supporting:
      "Come in during the workday for focused time, conversation and meetings, or return in the evening when the pace becomes a little more relaxed.",
    periods: [
      {
        id: "workday",
        label: "Workday",
        time: "8:00 AM — 5:00 PM",
        description:
          "For focused work, meetings and the rhythm of the working day.",
      },
      {
        id: "evening",
        label: "Evening",
        time: "6:00 PM — 10:00 PM",
        description:
          "For coffee, conversation, gatherings and a slower end to the day.",
      },
    ],
  },
  expect: {
    id: "experience",
    eyebrow: "The Experience",
    headline: "More than a place to arrive.",
    supporting:
      "Le CollectiF brings together spaces designed for different ways of being — from focused individual work to private conversations, shared gatherings and quieter moments in between.",
    points: [
      {
        id: "work",
        label: "Work",
        description:
          "Thoughtfully considered spaces for focused time and getting things done.",
      },
      {
        id: "meet",
        label: "Meet",
        description:
          "Comfortable settings for conversations, collaboration and decision-making.",
      },
      {
        id: "gather",
        label: "Gather",
        description: "Flexible environments for bringing people together.",
      },
    ],
  },
  closing: {
    eyebrow: "Plan your visit",
    headline: "We'll leave the light on.",
    supporting:
      "Whether you're coming to work, meet, gather or simply spend a little time here, we'd be glad to have you.",
    cta: {
      label: conversionActions.enquire.label,
      href: `${conversionActions.enquire.href}?intent=visit`,
    },
  },
} as const;
