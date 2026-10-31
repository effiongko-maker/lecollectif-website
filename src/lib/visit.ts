import { conversionActions } from "@/lib/site";

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
      "Le CollectiF has not opened yet. Here’s where you’ll find us and what to know before your first visit.",
  },
  location: {
    id: "location",
    eyebrow: "Find us",
    headline: "A place worth arriving at.",
    supporting: "Find us at No. 2 River Benue Street, Maitama, Abuja.",
    cta: {
      label: "Get directions",
      href: visitMaps.directionsHref,
    },
  },
  openingInformation: {
    eyebrow: "Opening information",
    headline: "Before your first visit.",
    supporting:
      "We’re getting ready to welcome you. Our opening date and visiting hours will be announced once confirmed.",
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
      "Explore the spaces planned for work, meetings and future gatherings.",
    points: [
      {
        id: "work",
        label: "Work",
        description:
          "A place to get some work done or meet with your team.",
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
    eyebrow: "Your first visit",
    headline: "We look forward to welcoming you.",
    supporting:
      "Until then, take a look at the workspaces, the Glass Café and spaces for gathering.",
    cta: {
      label: conversionActions.enquire.label,
      href: `${conversionActions.enquire.href}?intent=visit`,
    },
  },
} as const;
