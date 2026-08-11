import { Container } from "@/components/layout/Container";
import { Rule } from "@/components/ui/Rule";
import { enquirePageContent } from "@/lib/enquire";
import { cn } from "@/lib/utils";

type EnquireIntroProps = {
  className?: string;
};

/**
 * Enquire opening — conversion invitation before the form.
 */
export function EnquireIntro({ className }: EnquireIntroProps) {
  const { eyebrow, headline, supporting } = enquirePageContent.intro;

  return (
    <section
      aria-labelledby="enquire-heading"
      className={cn("bg-background", className)}
    >
      <Container width="wide" className="pb-4 pt-14 md:pb-6 md:pt-16 lg:pt-20">
        <div className="mx-auto max-w-2xl text-left md:text-center">
          <p className="text-eyebrow text-ink-subtle hero-reveal hero-delay-1">
            {eyebrow}
          </p>
          <Rule short className="mt-4 hero-reveal hero-delay-1 md:mx-auto" />
          <h1
            id="enquire-heading"
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
