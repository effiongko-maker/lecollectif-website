import { Container } from "@/components/layout/Container";
import { EventEntry } from "@/components/sections/EventEntry";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import {
  eventsPageContent,
  getUpcomingEvents,
} from "@/lib/events";
import { cn } from "@/lib/utils";

type EventsUpcomingProps = {
  className?: string;
};

/**
 * Main upcoming programme — editorial list, not a booking grid.
 */
export function EventsUpcoming({ className }: EventsUpcomingProps) {
  const { id, eyebrow, headline } = eventsPageContent.upcoming;
  const events = getUpcomingEvents();

  return (
    <section
      id={id}
      aria-labelledby="events-upcoming-heading"
      className={cn("scroll-mt-24 bg-background", className)}
    >
      <div className="section-space-lg">
        <Container width="wide">
          <Reveal>
            <div className="max-w-xl">
              <p className="text-eyebrow text-ink-subtle">{eyebrow}</p>
              <Rule short className="mt-5" />
              <h2
                id="events-upcoming-heading"
                className="mt-7 text-display-lg text-foreground"
              >
                {headline}
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 md:mt-16">
            {events.map((event, index) => (
              <Reveal key={event.id} delay={Math.min(index * 60, 240)}>
                <EventEntry event={event} />
              </Reveal>
            ))}
            <div className="border-t border-border" aria-hidden />
          </div>
        </Container>
      </div>
    </section>
  );
}
