import type { Metadata } from "next";
import { EventsCategories } from "@/components/sections/EventsCategories";
import { EventsHero } from "@/components/sections/EventsHero";
import { EventsStatus } from "@/components/sections/EventsStatus";
import { EventsUpcoming } from "@/components/sections/EventsUpcoming";
import { hasScheduledEvents } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events",
  description: "Explore the planned event programme at Le CollectiF in Maitama, Abuja. Confirmed dates will be listed here.",
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
