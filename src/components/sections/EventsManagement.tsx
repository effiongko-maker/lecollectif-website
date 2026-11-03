import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/Link";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { eventsPageContent } from "@/lib/events";
import { cn } from "@/lib/utils";

type EventsManagementProps = {
  className?: string;
};

/**
 * Event management offering overview — a service-led editorial section
 * positioned directly beneath the hero on the Events page.
 */
export function EventsManagement({ className }: EventsManagementProps) {
  const { id, eyebrow, headline, supporting, offerings, closingHeading, closingCopy, cta } =
    eventsPageContent.services;

  return (
    <section
      id={id}
      aria-labelledby="events-management-heading"
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
                  id="events-management-heading"
                  className="mt-7 text-display-lg text-foreground"
                >
                  {headline}
                </h2>
                <p className="mt-5 text-body-lg text-foreground-muted">
                  {supporting}
                </p>
              </div>
            </Reveal>

            <div className="flex flex-col">
              <ul className="flex flex-col">
                {offerings.map((offering, index) => (
                  <Reveal
                    as="li"
                    key={offering.title}
                    delay={Math.min(index * 50, 200)}
                    className={cn(
                      "border-y border-border py-7",
                      "grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:gap-8",
                    )}
                  >
                    <h3 className="text-card text-foreground">{offering.title}</h3>
                    <p className="max-w-md text-body text-foreground-muted">
                      {offering.description}
                    </p>
                  </Reveal>
                ))}
              </ul>

              <Reveal className="mt-10 border-t border-border pt-7 md:mt-12">
                <div className="max-w-xl">
                  <h3 className="text-display-sm text-foreground">
                    {closingHeading}
                  </h3>
                  <p className="mt-4 text-body-lg text-foreground-muted">
                    {closingCopy}
                  </p>
                  <div className="mt-6">
                    <TextLink href={cta.href} withArrow className="text-button">
                      {cta.label}
                    </TextLink>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
