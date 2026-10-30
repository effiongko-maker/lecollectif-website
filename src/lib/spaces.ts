import type { OfferingAccessMode } from "@/lib/booking/types";
import type { MediaAspect } from "@/components/ui/Media";
import { conversionActions } from "@/lib/site";

export type SpaceOfferingType =
  | "coworking"
  | "private_office"
  | "meeting_room";

export type SpaceCtaMode = keyof typeof conversionActions;

export type SpaceOffering = {
  id: string;
  name: string;
  slug: string;
  type: SpaceOfferingType;
  /** Full description — for dedicated /spaces experiences */
  description: string;
  /** Homepage rail teaser — keep minimal */
  teaser: string;
  /** Display index for editorial rails, e.g. "01" */
  index: string;
  /** Future booking vs enquiry mode — swap freely when commercial rules change */
  accessMode: OfferingAccessMode;
  /** Provisional CTA — keep aligned with accessMode */
  ctaMode: SpaceCtaMode;
  /** Canonical space route (detail pages later) */
  href: string;
  featured?: boolean;
  media: {
    alt: string;
    src?: string;
    aspect: MediaAspect;
    placeholderLabel: string;
    objectPosition?: string;
  };
};

/**
 * Primary workspace offerings.
 * Full descriptions remain available for the future /spaces page.
 * Homepage uses index + teaser only.
 */
export const spaceOfferings: SpaceOffering[] = [
  {
    id: "coworking",
    name: "Coworking",
    slug: "coworking",
    type: "coworking",
    index: "01",
    teaser: "Flexible work",
    featured: true,
    description:
      "Flexible workspace for focused work, independent professionals and people who need a productive place to work for the day.",
    accessMode: "direct_booking",
    ctaMode: "book",
    href: "/book?space=coworking",
    media: {
      /**
       * Conceptual visual — replace one-for-one with official photography later.
       * Source asset: LeCollectiF_Coworking_Concept.png
       */
      src: "/media/spaces/coworking-concept.png",
      alt: "Conceptual coworking interior for Le CollectiF",
      aspect: "portrait",
      placeholderLabel: "Coworking",
      objectPosition: "center center",
    },
  },
  {
    id: "private-offices",
    name: "Private Offices",
    slug: "private-offices",
    type: "private_office",
    index: "02",
    teaser: "Dedicated space",
    description:
      "Dedicated workspace for individuals or teams who need privacy, focus and a professional environment.",
    accessMode: "enquiry",
    ctaMode: "enquire",
    href: "/book?space=private-offices",
    media: {
      /**
       * Conceptual visual — replace one-for-one with official photography later.
       * Source asset: LeCollectiF_Private_Office_Concept.png
       */
      src: "/media/spaces/private-offices-concept.png",
      alt: "Conceptual private office interior for Le CollectiF",
      aspect: "portrait",
      placeholderLabel: "Private Offices",
      objectPosition: "center center",
    },
  },
  {
    id: "meeting-rooms",
    name: "Meeting Rooms",
    slug: "meeting-rooms",
    type: "meeting_room",
    index: "03",
    teaser: "Meet & gather",
    description:
      "Thoughtfully designed rooms for meetings, presentations, workshops and professional gatherings.",
    accessMode: "direct_booking",
    ctaMode: "book",
    href: "/book?space=meeting-rooms",
    media: {
      /**
       * Conceptual visual — replace one-for-one with official photography later.
       * Source asset: LeCollectiF_Meeting_Room_Concept.png
       */
      src: "/media/spaces/meeting-rooms-concept.png",
      alt: "Conceptual meeting room interior for Le CollectiF",
      aspect: "portrait",
      placeholderLabel: "Meeting Rooms",
      objectPosition: "center center",
    },
  },
];

export const homeSpacesContent = {
  id: "spaces",
  eyebrow: "The Spaces",
  headline: "Space for the way you work.",
  supporting:
    "Coworking, private offices and meeting rooms for your working day.",
  cta: {
    label: "Explore all spaces",
    href: "/spaces",
  },
} as const;

/**
 * Spaces page programme — experience-led, no invented capacities or prices.
 */
export const spacesPageContent = {
  hero: {
    eyebrow: "Spaces",
    headline: "Space for the way you work.",
    supporting:
      "Coworking, private offices and meeting rooms for your working day.",
    cta: {
      label: "Enquire about a space",
      href: conversionActions.enquire.href,
    },
    media: {
      src: "/media/spaces/private-offices-concept.png" as string | null,
      alt: "Conceptual private workspace at Le CollectiF",
      objectPosition: "center center",
    },
  },
  intro: {
    id: "philosophy",
    eyebrow: "The Spaces",
    headline: "Made for work. Designed for people.",
    supporting:
      "Le CollectiF brings together spaces for focused individual work, meetings, collaboration and larger gatherings — all within one considered environment.",
  },
  types: {
    id: "types",
    eyebrow: "The programme",
    headline: "Spaces for how you gather.",
    supporting:
      "Find a place to work, meet with your team or bring people together.",
    items: [
      {
        id: "private-spaces",
        label: "Private Offices",
        description:
          "For focused work, quiet meetings and time that needs your full attention.",
        href: `${conversionActions.book.href}?space=private-offices`,
      },
      {
        id: "meeting-spaces",
        label: "Meeting Rooms",
        description:
          "Rooms for meetings, presentations and collaborative work.",
        href: `${conversionActions.book.href}?space=meeting-rooms`,
      },
      {
        id: "gathering-spaces",
        label: "Gathering Spaces",
        description:
          "Spaces for gatherings, workshops and launches.",
        href: `${conversionActions.host.href}?space=gathering`,
      },
      {
        id: "the-cafe",
        label: "The Café",
        description:
          "A more relaxed setting for informal meetings, coffee and lingering.",
        href: "/cafe",
      },
    ],
  },
  closing: {
    eyebrow: "Find your space",
    headline: "Let's find the right space for you.",
    supporting:
      "Tell us what you're planning and we'll help you find the setting that fits.",
    cta: {
      label: "Enquire",
      href: conversionActions.enquire.href,
    },
  },
} as const;

/** Resolve Book / Enquire via the shared conversionActions system */
export function getSpaceConversionAction(offering: SpaceOffering) {
  const action = conversionActions[offering.ctaMode];
  const params = new URLSearchParams({
    offering: offering.id,
  });

  return {
    label: action.label,
    href: `${action.href}?${params.toString()}`,
  };
}

/** Map space offerings into the booking domain shape for future services */
export function toBookableOffering(offering: SpaceOffering) {
  return {
    id: offering.id,
    name: offering.name,
    accessMode: offering.accessMode,
    slug: offering.slug,
  };
}
