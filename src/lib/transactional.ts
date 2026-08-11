/**
 * Transactional entry routes — /book, /reserve, /host.
 * Multi-step journeys live in `components/booking/*`.
 * Payment providers plug in at `lib/payments/boundary` only.
 */

export type TransactionalFlowId = "book" | "reserve" | "host";

export const transactionalFlows: Record<
  TransactionalFlowId,
  {
    path: string;
    eyebrow: string;
    headline: string;
    supporting: string;
    note: string;
  }
> = {
  book: {
    path: "/book",
    eyebrow: "Book a Space",
    headline: "Find your space.",
    supporting:
      "Choose the setting, date and time that work for you. We'll take it from there.",
    note: "Availability, pricing and confirmation will join this journey soon.",
  },
  reserve: {
    path: "/reserve",
    eyebrow: "Reserve a Table",
    headline: "Save your table.",
    supporting:
      "Choose when you'd like to join us, and we'll take care of the rest.",
    note: "Table availability and confirmation will join this journey soon.",
  },
  host: {
    path: "/host",
    eyebrow: "Host an Event",
    headline: "Make it a gathering.",
    supporting:
      "Tell us what you're planning and we'll help you find the right setting for it.",
    note: "Event planning, quotation and confirmation will join this journey soon.",
  },
} as const;
