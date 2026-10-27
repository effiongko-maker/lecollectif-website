import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/Link";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { eventsPageContent } from "@/lib/events";
import { cn } from "@/lib/utils";

type EventsStatusProps = {
  className?: string;
};

/**
 * Current programme status when no public events are scheduled.
 * Compact editorial panel — readable in one desktop viewport glance.
 */
export function EventsStatus({ className }: EventsStatusProps) {
  const { id, eyebrow, headline, supporting, preview, cta } =
    eventsPageContent.status;

  return (
    <section
      id={id}
      aria-labelledby="events-status-heading"
      className={cn("bg-background scroll-mt-24", className)}
    >
      <div className="section-space-feature">
        <Container width="wide">
          <Reveal>
            <div className="mx-auto flex max-w-2xl flex-col items-start border-y border-border py-8 md:items-center md:py-10 md:text-center lg:py-11">
              <p className="text-eyebrow text-ink-subtle">{eyebrow}</p>
              <Rule short className="mt-3 md:mx-auto" />

              <h2
                id="events-status-heading"
                className="mt-5 text-display-lg text-foreground"
              >
                {headline}
              </h2>

              <p className="mt-4 max-w-md text-body-lg text-foreground-muted">
                {supporting}
              </p>

              <p className="mt-3 max-w-lg text-body text-foreground-muted">
                {preview}
              </p>

              <div className="mt-6">
                <TextLink
                  href={cta.href}
                  withArrow
                  className="text-button"
                >
                  {cta.label}
                </TextLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
