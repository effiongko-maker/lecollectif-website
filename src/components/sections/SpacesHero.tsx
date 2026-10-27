import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/Link";
import { Rule } from "@/components/ui/Rule";
import { spacesPageContent } from "@/lib/spaces";
import { cn } from "@/lib/utils";

type SpacesHeroProps = {
  className?: string;
};

/**
 * Spaces page hero — editorial split introducing the workspace experience.
 */
export function SpacesHero({ className }: SpacesHeroProps) {
  const { eyebrow, headline, supporting, cta, media } = spacesPageContent.hero;

  return (
    <section
      aria-labelledby="spaces-hero-heading"
      className={cn("relative overflow-hidden bg-background", className)}
    >
      <Container
        width="wide"
        className="grid grid-cols-1 items-end gap-8 py-9 md:gap-10 md:py-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14 lg:py-14 xl:gap-16"
      >
        <div className="flex max-w-xl flex-col justify-center lg:max-w-none lg:pr-4">
          <p className="text-eyebrow text-ink-subtle hero-reveal hero-delay-1">
            {eyebrow}
          </p>

          <Rule short className="mt-4 hero-reveal hero-delay-1" />

          <h1
            id="spaces-hero-heading"
            className={cn(
              "mt-6 font-display font-normal text-foreground text-display-xl hero-reveal hero-delay-2",
            )}
          >
            {headline}
          </h1>

          <p className="mt-5 max-w-md text-body-lg text-foreground-muted hero-reveal hero-delay-3">
            {supporting}
          </p>

          <div className="mt-7 hero-reveal hero-delay-4">
            <TextLink
              href={cta.href}
              withArrow
              className="text-button"
            >
              {cta.label}
            </TextLink>
          </div>
        </div>

        <div
          className={cn(
            "relative w-full hero-reveal-composition hero-delay-5",
            "aspect-[4/5] max-h-[44vh] sm:max-h-[48vh]",
            "lg:aspect-auto lg:h-[min(58svh,32rem)] xl:h-[min(60svh,34rem)]",
          )}
        >
          <figure className="group/spaces-hero relative h-full w-full overflow-hidden bg-background-secondary">
            {media.src ? (
              <Image
                src={media.src}
                alt={media.alt}
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                style={{ objectPosition: media.objectPosition }}
                className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/spaces-hero:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover/spaces-hero:scale-100"
              />
            ) : null}
          </figure>
        </div>
      </Container>
    </section>
  );
}
