import type { OfferingAccessMode } from "@/lib/booking/types";
import { conversionActions } from "@/lib/site";

/**
 * Events programme data for Le CollectiF.
 *
 * Public calendar is empty until real events are confirmed.
 * Do not invent dates, performers, ticket prices, or sample listings.
 */

export type EventCategoryId =
  | "conversations"
  | "culture"
  | "community"
  | "workshops"
  | "after-hours";

export type EventCtaMode = "view" | "book" | "enquire";

export type CollectifEvent = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: EventCategoryId;
  categoryLabel: string;
  dateLabel: string;
  timeLabel?: string;
  location: string;
  /** How the visitor engages — maps to conversion architecture */
  accessMode: OfferingAccessMode | "view";
  ctaMode: EventCtaMode;
  featured?: boolean;
  past?: boolean;
  media?: {
    src?: string | null;
    alt: string;
    objectPosition?: string;
  };
};

export const eventCategories: {
  id: EventCategoryId;
  label: string;
  description: string;
}[] = [
  {
    id: "conversations",
    label: "Conversations",
    description: "Conversations worth having, with people worth listening to.",
  },
  {
    id: "culture",
    label: "Culture",
    description: "Events centred on art and ideas.",
  },
  {
    id: "community",
    label: "Community",
    description: "Meet-ups and shared activities.",
  },
  {
    id: "workshops",
    label: "Workshops",
    description: "Focused sessions for learning, making and collaboration.",
  },
  {
    id: "after-hours",
    label: "After Hours",
    description: "Evenings for good company and the occasional reason to stay a little longer.",
  },
];

/**
 * Live event listings — empty until real programme entries are supplied.
 * Helpers below stay ready for the future calendar.
 */
export const collectifEvents: CollectifEvent[] = [];

export const homeEventsContent = {
  id: "events",
  eyebrow: "After Hours",
  headline: ["Then the day", "gives way to", "something else."],
  supporting:
    "From private celebrations and corporate functions to cultural gatherings and conversations, Le CollectiF brings people together through thoughtfully planned experiences. Explore our event management services and the experiences we're creating.",
  cta: {
    label: "Explore Events & Event Management",
    href: "/events",
  },
  media: {
    src: "/media/events/after-hours-lounge.png" as string | null,
    alt: "Conceptual evening lounge atmosphere at Le CollectiF",
    objectPosition: "center 45%",
  },
} as const;

export const eventsPageContent = {
  hero: {
    eyebrow: "Event Management",
    headline: "Your occasion. Thoughtfully brought together.",
    supporting: [
      "A memorable event is rarely accidental. It takes careful planning, attention to detail and an understanding of what makes an occasion special.",
      "At Le CollectiF, we bring these elements together through a considered approach to event planning and management. From private celebrations and intimate gatherings to corporate functions and larger events, we work with clients to create experiences that reflect their vision and purpose.",
    ],
    media: {
      src: "/media/events/after-hours-lounge.png" as string | null,
      alt: "Atmospheric gathering space at Le CollectiF",
      objectPosition: "center 40%",
    },
  },
  services: {
    id: "event-management-services",
    eyebrow: "Event Management",
    headline: "What we offer",
    supporting:
      "Our services cover event conceptualisation, planning, vendor coordination, logistics and on-site management. Whether the occasion takes place within our spaces or at an external venue, our role is to manage the details so that hosts can focus on their guests and the experience itself.",
    offerings: [
      {
        title: "Event Conceptualisation & Planning",
        description:
          "Developing the event concept, programme and overall experience.",
      },
      {
        title: "Vendor & Supplier Coordination",
        description:
          "Identifying and coordinating the service providers required for each occasion.",
      },
      {
        title: "Logistics & Production",
        description:
          "Managing schedules, setup, equipment and operational requirements.",
      },
      {
        title: "On-site Event Management",
        description:
          "Overseeing activities and coordinating teams to ensure the event runs smoothly.",
      },
    ],
    closingHeading: "Have an occasion in mind?",
    closingCopy:
      "Tell us what you're planning. We'd love to explore how Le CollectiF can help bring it together.",
    cta: {
      label: "Enquire About an Event",
      href: conversionActions.enquire.href,
    },
  },
  categories: {
    id: "programme",
    eyebrow: "The programme",
    headline: "Ways we gather.",
    supporting:
      "Explore the kinds of events planned for Le CollectiF.",
  },
  status: {
    id: "whats-happening",
    eyebrow: "What's happening",
    headline: "Nothing scheduled just yet.",
    supporting:
      "Our programme is taking shape. Events, conversations and gatherings will appear here as they are confirmed.",
    preview:
      "From intimate conversations and cultural evenings to workshops, community gatherings and after-hours experiences.",
    cta: {
      label: "Enquire about hosting",
      href: conversionActions.enquire.href,
    },
  },
  upcoming: {
    id: "upcoming",
    eyebrow: "Programme",
    headline: "What's happening.",
  },
} as const;

export function getUpcomingEvents(): CollectifEvent[] {
  return collectifEvents.filter((event) => !event.past);
}

export function getPastEvents(): CollectifEvent[] {
  return collectifEvents.filter((event) => event.past);
}

export function getFeaturedEvent(): CollectifEvent | undefined {
  return collectifEvents.find((event) => event.featured && !event.past);
}

export function getEventBySlug(slug: string): CollectifEvent | undefined {
  return collectifEvents.find((event) => event.slug === slug);
}

export function hasScheduledEvents(): boolean {
  return getUpcomingEvents().length > 0;
}

/** Hero CTA — direct to the event management services section. */
export function getEventsHeroCta() {
  return {
    label: "Explore our services",
    href: `#${eventsPageContent.services.id}`,
  };
}

/** Resolve View / Book / Enquire through shared conversion architecture */
export function getEventConversionAction(event: CollectifEvent) {
  if (event.ctaMode === "book") {
    const params = new URLSearchParams({ event: event.id });
    return {
      label: "Book",
      href: `${conversionActions.book.href}?${params.toString()}`,
    };
  }

  if (event.ctaMode === "enquire") {
    const params = new URLSearchParams({ event: event.id });
    return {
      label: "Enquire",
      href: `${conversionActions.enquire.href}?${params.toString()}`,
    };
  }

  return {
    label: "View event",
    href: `/events/${event.slug}`,
  };
}
