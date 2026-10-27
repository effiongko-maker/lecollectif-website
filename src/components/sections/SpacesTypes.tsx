import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/Link";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { spacesPageContent } from "@/lib/spaces";
import { cn } from "@/lib/utils";

type SpacesTypesProps = {
  className?: string;
};

/**
 * Space programme types — editorial list, not commercial cards.
 */
export function SpacesTypes({ className }: SpacesTypesProps) {
  const { id, eyebrow, headline, supporting, items } = spacesPageContent.types;

  return (
    <section
      id={id}
      aria-labelledby="spaces-types-heading"
      className={cn(
        // Tighter arrival after Intro; preserve bottom rhythm into Closing
        "bg-background-secondary scroll-mt-24 pt-10 md:pt-12 pb-[clamp(3rem,4.75vw,4.75rem)]",
        className,
      )}
    >
      <Container width="wide">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-14 xl:gap-20">
          <Reveal>
            <div className="max-w-md lg:sticky lg:top-28">
              <p className="text-eyebrow text-ink-subtle">{eyebrow}</p>
              <Rule short className="mt-4" />
              <h2
                id="spaces-types-heading"
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
            {items.map((item, index) => (
              <Reveal key={item.id} delay={Math.min(index * 50, 200)}>
                <li
                  id={item.id}
                  className={cn(
                    "border-t border-border py-6 last:border-b sm:py-7",
                    "grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)_auto] sm:items-start sm:gap-8",
                  )}
                >
                  <p className="text-card text-foreground">
                    {item.label}
                  </p>
                  <p className="max-w-md text-body text-foreground-muted">
                    {item.description}
                  </p>
                  <div className="sm:pt-1 sm:justify-self-end">
                    <TextLink
                      href={item.href}
                      withArrow
                      className="text-button"
                    >
                      Explore
                    </TextLink>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
