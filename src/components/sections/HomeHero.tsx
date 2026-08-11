import { Container } from "@/components/layout/Container";
import { HeroComposition } from "@/components/sections/HeroComposition";
import { ButtonLink } from "@/components/ui/Link";
import { homeHeroContent } from "@/lib/home";
import { cn } from "@/lib/utils";

type HomeHeroProps = {
  className?: string;
};

/**
 * Homepage hero — editorial destination introduction.
 * Communicates place and day→evening character without venue photography.
 */
export function HomeHero({ className }: HomeHeroProps) {
  const { eyebrow, headline, supporting, primaryCta, secondaryCta } =
    homeHeroContent;

  return (
    <section
      aria-labelledby="home-hero-heading"
      className={cn(
        "relative overflow-hidden bg-background",
        "min-h-[calc(100svh-4.75rem)] md:min-h-[calc(100svh-6rem)]",
        className,
      )}
    >
      <Container
        width="wide"
        className="flex min-h-[inherit] flex-col gap-8 py-8 md:gap-10 md:py-12 lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16 lg:py-8 xl:gap-20"
      >
        <div className="flex max-w-xl flex-col justify-center lg:max-w-none lg:pr-4">
          <p
            className={cn(
              "text-eyebrow text-ink-subtle hero-reveal hero-delay-1",
            )}
          >
            {eyebrow}
          </p>

          <h1
            id="home-hero-heading"
            className={cn(
              "mt-6 font-display font-normal uppercase text-foreground text-display-xl hero-reveal hero-delay-2",
              "tracking-[-0.03em]",
            )}
          >
            {headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p
            className={cn(
              "mt-6 max-w-md text-body-lg text-foreground-muted hero-reveal hero-delay-3",
            )}
          >
            {supporting}
          </p>

          <div
            className={cn(
              "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 hero-reveal hero-delay-4",
            )}
          >
            <ButtonLink href={primaryCta.href} variant="primary" size="md">
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href={secondaryCta.href} variant="secondary" size="md">
              {secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <div
          className={cn(
            "relative w-full hero-reveal-composition hero-delay-5",
            "aspect-[4/5] max-h-[42vh] sm:max-h-[46vh] md:aspect-[5/6] md:max-h-[52vh]",
            "lg:aspect-auto lg:h-[min(68vh,36rem)] lg:max-h-none xl:h-[min(72vh,40rem)]",
          )}
        >
          <HeroComposition className="absolute inset-0" />
        </div>
      </Container>
    </section>
  );
}
