import { Container } from "@/components/layout/Container";
import { SpaceRailPanel } from "@/components/sections/SpaceRailPanel";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { TextLink } from "@/components/ui/Link";
import { homeSpacesContent, spaceOfferings } from "@/lib/spaces";
import { cn } from "@/lib/utils";

type HomeSpacesProps = {
  className?: string;
};

/**
 * Homepage Spaces — concise editorial visual rail.
 * Detailed SpaceOfferingBlock presentation remains available for /spaces.
 */
export function HomeSpaces({ className }: HomeSpacesProps) {
  const { id, eyebrow, headline, supporting, cta } = homeSpacesContent;

  return (
    <section
      id={id}
      aria-labelledby="home-spaces-heading"
      className={cn(
        // Halve arrival after Day/Evening; preserve full bottom rhythm into Café
        "bg-background scroll-mt-24 pt-[calc(var(--section-space-lg)/2)] pb-[var(--section-space-lg)]",
        className,
      )}
    >
      <Container width="wide">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] lg:items-end lg:gap-16">
          <Reveal>
            <div className="flex flex-col gap-4">
              <p className="text-eyebrow text-ink-subtle">{eyebrow}</p>
              <Rule short className="bg-foreground/20" />
            </div>
          </Reveal>

          <div className="min-w-0">
            <Reveal delay={80}>
              <h2
                id="home-spaces-heading"
                className="max-w-xl font-display text-display-lg font-normal text-foreground"
              >
                {headline}
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 max-w-md text-body text-foreground-muted">
                {supporting}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>

      <Reveal delay={160}>
        <div className="mt-10 md:mt-14 lg:mt-16">
          <Container width="wide" className="lg:px-[var(--gutter)]">
            <ul
              className={cn(
                "grid list-none grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-7 xl:gap-8",
              )}
              aria-label="Le CollectiF spaces"
            >
              {spaceOfferings.map((offering) => (
                <li key={offering.id} className="min-w-0">
                  <SpaceRailPanel offering={offering} />
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </Reveal>

      <Container width="wide">
        <Reveal delay={220}>
          <div className="mt-8 md:mt-10 lg:mt-12">
            <TextLink
              href={cta.href}
              withArrow
              className="text-button tracking-[0.1em]"
            >
              {cta.label}
            </TextLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
