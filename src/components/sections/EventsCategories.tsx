import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { eventCategories, eventsPageContent } from "@/lib/events";
import { cn } from "@/lib/utils";

type EventsCategoriesProps = {
  className?: string;
};

/**
 * Programme categories — restrained editorial list, not colourful cards.
 */
export function EventsCategories({ className }: EventsCategoriesProps) {
  const { id, eyebrow, headline, supporting } = eventsPageContent.categories;

  return (
    <section
      id={id}
      aria-labelledby="events-categories-heading"
      className={cn("bg-background-secondary scroll-mt-24", className)}
    >
      <div className="section-space-md">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-16 xl:gap-24">
            <Reveal>
              <div className="max-w-md lg:sticky lg:top-28">
                <p className="text-eyebrow text-foreground-muted">{eyebrow}</p>
                <Rule short className="mt-5" />
                <h2
                  id="events-categories-heading"
                  className="mt-7 text-display-lg text-foreground"
                >
                  {headline}
                </h2>
                <p className="mt-5 text-body-lg text-foreground-muted">
                  {supporting}
                </p>
              </div>
            </Reveal>

            <ul className="flex flex-col">
              {eventCategories.map((category, index) => (
                <Reveal
                  as="li"
                  key={category.id}
                  delay={Math.min(index * 50, 200)}
                  className={cn(
                    "border-y border-border py-7",
                    "grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:gap-8",
                  )}
                >
                  <p className="text-card text-foreground">
                    {category.label}
                  </p>
                  <p className="max-w-md text-body text-foreground-muted">
                    {category.description}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
}
