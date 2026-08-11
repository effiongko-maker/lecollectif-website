import { Container } from "@/components/layout/Container";
import { Rule } from "@/components/ui/Rule";
import { visitPageContent } from "@/lib/visit";
import { cn } from "@/lib/utils";

type VisitHeroProps = {
  className?: string;
};

/**
 * Visit hero — invitation to arrive; text-led, practical and editorial.
 */
export function VisitHero({ className }: VisitHeroProps) {
  const { eyebrow, headline, supporting } = visitPageContent.hero;

  return (
    <section
      aria-labelledby="visit-hero-heading"
      className={cn("bg-background", className)}
    >
      <Container width="wide" className="py-14 md:py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-left md:text-center">
          <p className="text-eyebrow text-ink-subtle hero-reveal hero-delay-1">
            {eyebrow}
          </p>
          <Rule short className="mt-4 hero-reveal hero-delay-1 md:mx-auto" />
          <h1
            id="visit-hero-heading"
            className={cn(
              "mt-6 font-display font-normal text-foreground text-display-xl hero-reveal hero-delay-2",
              "tracking-[-0.03em]",
            )}
          >
            {headline}
          </h1>
          <p className="mt-5 max-w-lg text-body-lg text-foreground-muted hero-reveal hero-delay-3 md:mx-auto">
            {supporting}
          </p>
        </div>
      </Container>
    </section>
  );
}
