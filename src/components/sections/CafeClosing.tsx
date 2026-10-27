import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/Link";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { cafePageContent } from "@/lib/cafe";
import { cn } from "@/lib/utils";

type CafeClosingProps = {
  className?: string;
};

/**
 * Closing enquiry — warm, understated invitation before the footer.
 */
export function CafeClosing({ className }: CafeClosingProps) {
  const { eyebrow, headline, supporting, cta } = cafePageContent.closing;

  return (
    <section
      aria-labelledby="cafe-closing-heading"
      className={cn("bg-[#f3eee6]", className)}
    >
      <div className="py-12 md:py-14">
        <Container width="wide">
          <Reveal>
            <div className="mx-auto flex max-w-2xl flex-col items-start border-y border-border py-8 md:items-center md:py-10 md:text-center">
              <p className="text-eyebrow text-ink-subtle">{eyebrow}</p>
              <Rule short className="mt-3 md:mx-auto" />
              <h2
                id="cafe-closing-heading"
                className="mt-5 max-w-xl text-h1 text-foreground"
              >
                {headline}
              </h2>
              <p className="mt-4 max-w-md text-body text-foreground-muted">
                {supporting}
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
