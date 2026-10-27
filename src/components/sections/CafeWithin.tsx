import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/Link";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { cafePageContent } from "@/lib/cafe";
import { cn } from "@/lib/utils";

type CafeWithinProps = {
  className?: string;
};

/**
 * Quiet editorial bridge from the Glass Café to the wider destination.
 */
export function CafeWithin({ className }: CafeWithinProps) {
  const { id, eyebrow, headline, supporting, links } = cafePageContent.within;

  return (
    <section
      id={id}
      aria-labelledby="cafe-within-heading"
      className={cn("bg-[#f3eee6] scroll-mt-24", className)}
    >
      <div className="py-12 md:py-14 lg:py-16">
        <Container width="wide">
          <div className="border-y border-border py-10 md:py-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-start lg:gap-14 xl:gap-20">
              <Reveal>
                <div className="max-w-md">
                  <p className="text-eyebrow text-ink-subtle">{eyebrow}</p>
                  <Rule short className="mt-4" />
                  <h2
                    id="cafe-within-heading"
                    className="mt-6 text-h1 text-foreground"
                  >
                    {headline}
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="max-w-md lg:pt-1">
                  <p className="text-body-lg text-foreground-muted">
                    {supporting}
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
                    {links.map((link) => (
                      <TextLink
                        key={link.href}
                        href={link.href}
                        withArrow
                        className="text-button"
                      >
                        {link.label}
                      </TextLink>
                    ))}
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
