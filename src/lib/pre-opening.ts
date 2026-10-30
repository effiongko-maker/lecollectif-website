/** Public journeys stay informational until a separately reviewed activation. */
export const isPreOpening = true;

export const preOpeningNotices = {
  enquire:
    "We’re preparing to open. Online enquiries will be available soon. In the meantime, you’re welcome to explore Le CollectiF and what we have planned.",
  book:
    "Our workspaces are getting ready to welcome you. Online booking will become available closer to opening.",
  reserve:
    "We’re not taking table reservations just yet. We’ll let you know when reservations open.",
  host:
    "We’re preparing our spaces for future gatherings. Event enquiries will open as we get closer to launch.",
} as const;
