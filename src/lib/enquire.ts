/**
 * Enquire page — primary conversion content.
 * Form is visual/interactive only until a submission path is connected.
 */

export const enquireTopics = [
  { value: "work-private", label: "Work / Private Space" },
  { value: "meeting", label: "Meeting" },
  { value: "gathering-event", label: "Gathering / Event" },
  { value: "cafe", label: "Café" },
  { value: "general", label: "General Enquiry" },
] as const;

export const enquirePageContent = {
  intro: {
    eyebrow: "Enquire",
    headline: "Let's make room for it.",
    supporting:
      "Tell us what you're planning, when you're planning it, and a little about what you need. We'll help you find the right space at Le CollectiF.",
  },
  form: {
    fields: {
      topic: {
        id: "enquiry-topic",
        label: "What are you enquiring about?",
      },
      date: {
        id: "enquiry-date",
        label: "Preferred date",
      },
      time: {
        id: "enquiry-time",
        label: "Preferred time",
      },
      people: {
        id: "enquiry-people",
        label: "Number of people",
      },
      name: {
        id: "enquiry-name",
        label: "Full name",
      },
      email: {
        id: "enquiry-email",
        label: "Email address",
      },
      phone: {
        id: "enquiry-phone",
        label: "Phone number",
      },
      message: {
        id: "enquiry-message",
        label: "How can we help?",
        placeholder: "Your question or plans",
      },
    },
    submitLabel: "Send enquiry",
    reassurance: "Online submission is not yet connected. Please contact the venue directly.",
    received:
      "Thank you. Your enquiry has been noted — we'll be in touch with the best way forward.",
  },
} as const;
