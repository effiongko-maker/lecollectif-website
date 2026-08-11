import type { Metadata } from "next";
import { EventsCategories } from "@/components/sections/EventsCategories";
import { EventsHero } from "@/components/sections/EventsHero";
import { EventsStatus } from "@/components/sections/EventsStatus";
import { EventsUpcoming } from "@/components/sections/EventsUpcoming";
import { hasScheduledEvents } from "@/lib/events";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description: `Experiences, conversations and gatherings at ${siteConfig.name} — a changing programme shaped around connection, culture and community.`,
};

export default function EventsPage() {
  const scheduled = hasScheduledEvents();

  return (
    <>
      <EventsHero />
      {scheduled ? (
        <>
          <EventsUpcoming />
          <EventsCategories />
        </>
      ) : (
        <>
          <EventsCategories />
          <EventsStatus />
        </>
      )}
    </>
  );
}
