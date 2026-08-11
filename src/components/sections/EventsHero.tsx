import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/Link";
import { Rule } from "@/components/ui/Rule";
import { eventsPageContent, getEventsHeroCta } from "@/lib/events";
import { cn } from "@/lib/utils";

type EventsHeroProps = {
  className?: string;
};

/**
 * Events page hero — editorial destination moment for the programme.
 */
export function EventsHero({ className }: EventsHeroProps) {
  const { eyebrow, headline, supporting, media } = eventsPageContent.hero;
  const cta = getEventsHeroCta();

  return (
    <section
      aria-labelledby="events-hero-heading"
      className={cn(
        "relative overflow-hidden bg-background",
        className,
      )}
    >
      <Container
        width="wide"
        className="grid grid-cols-1 items-end gap-10 py-10 md:gap-12 md:py-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16 lg:py-16 xl:gap-20"
      >
        <div className="flex max-w-xl flex-col justify-center lg:max-w-none lg:pr-4">
          <p className="text-eyebrow text-ink-subtle hero-reveal hero-delay-1">
            {eyebrow}
          </p>

          <Rule short className="mt-5 hero-reveal hero-delay-1" />

          <h1
            id="events-hero-heading"
            className={cn(
              "mt-7 font-display font-normal text-foreground text-display-xl hero-reveal hero-delay-2",
              "tracking-[-0.03em]",
            )}
          >
            {headline}
          </h1>

          <p className="mt-6 max-w-md text-body-lg text-foreground-muted hero-reveal hero-delay-3">
            {supporting}
          </p>

          <div className="mt-8 hero-reveal hero-delay-4">
            <TextLink
              href={cta.href}
              withArrow
              className="text-button tracking-[0.1em]"
            >
              {cta.label}
            </TextLink>
          </div>
        </div>

        <div
          className={cn(
            "relative w-full hero-reveal-composition hero-delay-5",
            "aspect-[4/5] max-h-[48vh] sm:max-h-[52vh]",
            "lg:aspect-auto lg:h-[min(68vh,36rem)] lg:max-h-none xl:h-[min(72vh,40rem)]",
          )}
        >
          <figure className="group/events-hero relative h-full w-full overflow-hidden bg-background-secondary">
            {media.src ? (
              <Image
                src={media.src}
                alt={media.alt}
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                style={{ objectPosition: media.objectPosition }}
                className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/events-hero:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover/events-hero:scale-100"
              />
            ) : null}
          </figure>
        </div>
      </Container>
    </section>
  );
}
