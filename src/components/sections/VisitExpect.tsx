import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { visitPageContent } from "@/lib/visit";
import { cn } from "@/lib/utils";

type VisitExpectProps = {
  className?: string;
};

/**
 * What to expect — light editorial points for work, meet and gather.
 */
export function VisitExpect({ className }: VisitExpectProps) {
  const { id, eyebrow, headline, supporting, points } = visitPageContent.expect;

  return (
    <section
      id={id}
      aria-labelledby="visit-expect-heading"
      className={cn("bg-background-secondary scroll-mt-24", className)}
    >
      <div className="section-space-feature">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-14 xl:gap-20">
            <Reveal>
              <div className="max-w-md">
                <p className="text-eyebrow text-ink-subtle">{eyebrow}</p>
                <Rule short className="mt-4" />
                <h2
                  id="visit-expect-heading"
                  className="mt-6 font-display text-display-lg font-normal text-foreground"
                >
                  {headline}
                </h2>
                <p className="mt-4 text-body-lg text-foreground-muted">
                  {supporting}
                </p>
              </div>
            </Reveal>

            <ul className="flex flex-col">
              {points.map((point, index) => (
                <Reveal key={point.id} delay={Math.min(index * 50, 150)}>
                  <li
                    className={cn(
                      "border-t border-border py-6 last:border-b sm:py-7",
                      "grid grid-cols-1 gap-2 sm:grid-cols-[minmax(0,8rem)_minmax(0,1fr)] sm:gap-8",
                    )}
                  >
                    <p className="text-card text-foreground">
                      {point.label}
                    </p>
                    <p className="max-w-md text-body text-foreground-muted">
                      {point.description}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
}
