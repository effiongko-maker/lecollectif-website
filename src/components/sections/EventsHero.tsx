import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/Link";
import { Rule } from "@/components/ui/Rule";
import { eventsPageContent, getEventsHeroCta } from "@/lib/events";
import { cn } from "@/lib/utils";

type EventsHeroProps = {
  className?: string;
};

/** Editorial, typography-led hero for the event management offering. */
export function EventsHero({ className }: EventsHeroProps) {
  const { eyebrow, headline, supporting } = eventsPageContent.hero;
  const cta = getEventsHeroCta();

  return (
    <section
      aria-labelledby="events-hero-heading"
      className={cn("relative overflow-hidden bg-background", className)}
    >
      <Container width="wide" className="py-16 md:py-24 lg:py-28 xl:py-32">
        <div className="max-w-4xl">
          <p className="text-eyebrow text-ink-subtle hero-reveal hero-delay-1">
            {eyebrow}
          </p>
          <Rule short className="mt-5 hero-reveal hero-delay-1" />
          <h1
            id="events-hero-heading"
            className="mt-7 text-foreground text-display-xl hero-reveal hero-delay-2"
          >
            {headline}
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-body-lg text-foreground-muted hero-reveal hero-delay-3">
            {(Array.isArray(supporting) ? supporting : [supporting]).map((paragraph, index) => (
              <p key={`${paragraph}-${index}`}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 hero-reveal hero-delay-4">
            <TextLink href={cta.href} withArrow className="text-button">
              {cta.label}
            </TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
