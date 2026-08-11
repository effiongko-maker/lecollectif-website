import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/Link";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { homeIntroContent } from "@/lib/home";
import { cn } from "@/lib/utils";

type HomeIntroProps = {
  className?: string;
};

/**
 * Introduction / concept section — establishes Le CollectiF as a day→evening destination.
 */
export function HomeIntro({ className }: HomeIntroProps) {
  const { id, eyebrow, headline, supporting, cta, rhythms } = homeIntroContent;

  return (
    <section
      id={id}
      aria-labelledby="home-intro-heading"
      className={cn(
        // Keep full top rhythm after the hero; halve only the handoff into Spaces
        "bg-background scroll-mt-24 pt-[var(--section-space-lg)] pb-[calc(var(--section-space-lg)/2)]",
        className,
      )}
    >
      <Container width="wide">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] lg:gap-16 xl:gap-24">
          <Reveal>
            <div className="flex flex-col gap-4 lg:pt-2">
              <p className="text-eyebrow text-ink-subtle">{eyebrow}</p>
              <Rule short accent className="opacity-60" />
            </div>
          </Reveal>

          <div className="min-w-0">
            <Reveal delay={80}>
              <h2
                id="home-intro-heading"
                className="max-w-3xl font-display text-display-lg font-normal text-foreground"
              >
                {headline}
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-body-lg text-foreground-muted">
                {supporting}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-7">
                <TextLink
                  href={cta.href}
                  withArrow
                  className="text-button tracking-[0.1em]"
                >
                  {cta.label}
                </TextLink>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={280}>
          <div className="mt-14 border-t border-border pt-8 md:mt-16 md:pt-10 lg:mt-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-0">
              {rhythms.map((rhythm, index) => (
                <div
                  key={rhythm.label}
                  className={cn(
                    "md:py-8",
                    index === 0 && "md:pr-10 md:pl-0 lg:pr-14",
                    index === 1 &&
                      "border-t border-border pt-8 md:border-l md:border-t-0 md:bg-background-secondary/60 md:pt-8 md:pl-10 md:pr-0 lg:pl-14",
                  )}
                >
                  <p className="text-eyebrow text-ink-subtle">{rhythm.label}</p>
                  <p className="mt-4 font-display text-h3 font-normal tracking-[-0.02em] text-foreground">
                    {rhythm.line}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
