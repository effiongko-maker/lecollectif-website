/**
 * Homepage section copy — keep concise and easy to revise.
 */

export const homeHeroContent = {
  eyebrow: "ABUJA, NIGERIA · PREPARING TO WELCOME YOU",
  headline: ["Work. Meet.", "Gather. Unwind."] as const,
  supporting:
    "A place to work, meet, enjoy good coffee and spend time well.",
  primaryCta: {
    label: "Enquire",
    href: "/enquire",
  },
  secondaryCta: {
    label: "Explore the spaces",
    href: "/spaces",
  },
} as const;

export const homeIntroContent = {
  id: "explore",
  eyebrow: "The destination",
  headline: "A place with room for whatever brings you here.",
  supporting:
    "Le CollectiF is bringing together workspaces, the Glass Café, spaces for events and poolside leisure in one destination in Abuja.",
  cta: {
    label: "Explore the spaces",
    href: "/spaces",
  },
  rhythms: [
    {
      label: "Day",
      line: "Work. Meet. Create.",
    },
    {
      label: "Evening",
      line: "Gather. Connect. Unwind.",
    },
  ] as const,
} as const;
