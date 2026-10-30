import { spaceOfferings } from "@/lib/spaces";
import { transactionalFlows } from "@/lib/transactional";

/** Shared step labels for editorial progress indicators */
export type FlowStepMeta = {
  id: string;
  label: string;
};

export const bookSpaceOptions = spaceOfferings.map((space) => ({
  id: space.id,
  name: space.name,
  description: space.teaser,
}));

export const bookDurationOptions = [
  { value: "2", label: "2 hours" },
  { value: "4", label: "Half day (4 hours)" },
  { value: "8", label: "Full day" },
] as const;

export const bookFlowSteps: FlowStepMeta[] = [
  { id: "space", label: "Space" },
  { id: "date", label: "Date" },
  { id: "time", label: "Time" },
  { id: "details", label: "Details" },
  { id: "review", label: "Review" },
  { id: "payment", label: "Payment" },
  { id: "confirmation", label: "Confirmation" },
];

export const reserveFlowSteps: FlowStepMeta[] = [
  { id: "date", label: "Date" },
  { id: "time", label: "Time" },
  { id: "guests", label: "Guests" },
  { id: "details", label: "Details" },
  { id: "review", label: "Review" },
  { id: "payment", label: "Payment" },
  { id: "confirmation", label: "Confirmation" },
];

export const hostEventTypes = [
  { value: "conversation", label: "Conversation" },
  { value: "workshop", label: "Workshop" },
  { value: "gathering", label: "Gathering" },
  { value: "private", label: "Private event" },
  { value: "other", label: "Other" },
] as const;

export const hostFlowSteps: FlowStepMeta[] = [
  { id: "event", label: "Event" },
  { id: "schedule", label: "Schedule" },
  { id: "guests", label: "Guests" },
  { id: "requirements", label: "Requirements" },
  { id: "details", label: "Details" },
  { id: "review", label: "Review" },
  { id: "submitted", label: "Submitted" },
];

export const flowIntros = transactionalFlows;
