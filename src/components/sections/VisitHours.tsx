import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { visitPageContent } from "@/lib/visit";
import { cn } from "@/lib/utils";

type VisitHoursProps = {
  className?: string;
};

/**
 * When to visit — workday and evening as editorial rows, not cards.
 */
export function VisitHours({ className }: VisitHoursProps) {
  const { id, eyebrow, headline, supporting, periods } = visitPageContent.hours;

  return (
    <section
      id={id}
      aria-labelledby="visit-hours-heading"
      className={cn("bg-background scroll-mt-24", className)}
    >
      <div className="section-space-feature">
        <Container width="wide">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-eyebrow text-ink-subtle">{eyebrow}</p>
              <Rule short className="mt-4" />
              <h2
                id="visit-hours-heading"
                className="mt-6 font-display text-display-lg font-normal text-foreground"
              >
                {headline}
              </h2>
              <p className="mt-4 max-w-xl text-body-lg text-foreground-muted">
                {supporting}
              </p>
            </div>
          </Reveal>

          <ul className="mt-10 flex flex-col md:mt-12">
            {periods.map((period, index) => (
              <Reveal key={period.id} delay={Math.min(index * 60, 160)}>
                <li
                  className={cn(
                    "border-t border-border py-7 last:border-b sm:py-8",
                    "grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,9rem)_minmax(0,12rem)_minmax(0,1fr)] sm:items-baseline sm:gap-8 lg:gap-12",
                  )}
                >
                  <p className="text-eyebrow text-ink-subtle">{period.label}</p>
                  <p className="text-card text-foreground">
                    {period.time}
                  </p>
                  <p className="max-w-md text-body text-foreground-muted">
                    {period.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
