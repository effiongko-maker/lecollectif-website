import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { cafePageContent } from "@/lib/cafe";
import { cn } from "@/lib/utils";

type CafePhilosophyProps = {
  className?: string;
};

/**
 * Café philosophy — typographic pause between hero and programme.
 * No imagery by design.
 */
export function CafePhilosophy({ className }: CafePhilosophyProps) {
  const { id, eyebrow, headline, supporting } = cafePageContent.philosophy;

  return (
    <section
      id={id}
      aria-labelledby="cafe-philosophy-heading"
      className={cn("bg-[#f3eee6] scroll-mt-24", className)}
    >
      <div className="py-16 md:py-20 lg:py-24">
        <Container width="wide">
          <Reveal>
            <div className="mx-auto max-w-xl text-left md:max-w-2xl md:text-center">
              <p className="text-eyebrow text-ink-subtle">{eyebrow}</p>
              <Rule short className="mt-4 md:mx-auto" />
              <h2
                id="cafe-philosophy-heading"
                className="mt-7 text-display-lg text-foreground"
              >
                {headline}
              </h2>
              <p className="mt-6 max-w-lg text-body-lg text-foreground-muted md:mx-auto">
                {supporting}
              </p>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
