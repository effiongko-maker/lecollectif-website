import type { Metadata } from "next";
import { EventsCategories } from "@/components/sections/EventsCategories";
import { EventsHero } from "@/components/sections/EventsHero";
import { EventsManagement } from "@/components/sections/EventsManagement";
import { EventsStatus } from "@/components/sections/EventsStatus";
import { EventsUpcoming } from "@/components/sections/EventsUpcoming";
import { hasScheduledEvents } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Event management and the cultural programme at Le CollectiF in Maitama, Abuja.",
};

export default function EventsPage() {
  const scheduled = hasScheduledEvents();

  return (
    <>
      <EventsHero />
      <EventsManagement />
      <EventsCategories />
      {scheduled ? <EventsUpcoming /> : <EventsStatus />}
    </>
  );
}
