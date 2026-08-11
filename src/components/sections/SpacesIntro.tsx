import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { spacesPageContent } from "@/lib/spaces";
import { cn } from "@/lib/utils";

type SpacesIntroProps = {
  className?: string;
};

/**
 * Quiet philosophy — spaces made for work, designed for people.
 */
export function SpacesIntro({ className }: SpacesIntroProps) {
  const { id, eyebrow, headline, supporting } = spacesPageContent.intro;

  return (
    <section
      id={id}
      aria-labelledby="spaces-intro-heading"
      className={cn(
        // Full top rhythm after hero; tighter handoff into Types
        "bg-background scroll-mt-24 pt-[clamp(3rem,4.75vw,4.75rem)] pb-10 md:pb-12",
        className,
      )}
    >
      <Container width="wide">
        <Reveal>
          <div className="mx-auto max-w-2xl text-left md:text-center">
            <p className="text-eyebrow text-ink-subtle md:mx-auto">
              {eyebrow}
            </p>
            <Rule short className="mt-4 md:mx-auto" />
            <h2
              id="spaces-intro-heading"
              className="mt-6 font-display text-display-lg font-normal tracking-[-0.02em] text-foreground"
            >
              {headline}
            </h2>
            <p className="mt-5 text-body-lg text-foreground-muted">
              {supporting}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
