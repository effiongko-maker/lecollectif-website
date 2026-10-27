import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/Link";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { spacesPageContent } from "@/lib/spaces";
import { cn } from "@/lib/utils";

type SpacesClosingProps = {
  className?: string;
};

/**
 * Enquiry close — restrained conversion moment.
 */
export function SpacesClosing({ className }: SpacesClosingProps) {
  const { eyebrow, headline, supporting, cta } = spacesPageContent.closing;

  return (
    <section
      aria-labelledby="spaces-closing-heading"
      className={cn("bg-background", className)}
    >
      <div className="section-space-feature">
        <Container width="wide">
          <Reveal>
            <div className="mx-auto flex max-w-2xl flex-col items-start border-y border-border py-9 md:items-center md:py-11 md:text-center">
              <p className="text-eyebrow text-ink-subtle">{eyebrow}</p>
              <Rule short className="mt-3 md:mx-auto" />
              <h2
                id="spaces-closing-heading"
                className="mt-5 font-display text-display-lg font-normal text-foreground"
              >
                {headline}
              </h2>
              <p className="mt-4 max-w-md text-body-lg text-foreground-muted">
                {supporting}
              </p>
              <div className="mt-7">
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
