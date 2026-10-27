import { Container } from "@/components/layout/Container";
import { CafeMedia } from "@/components/sections/CafeMedia";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { cafePageContent } from "@/lib/cafe";
import { cn } from "@/lib/utils";

type CafeAtmosphereProps = {
  className?: string;
};

/**
 * Atmosphere — one editorial photograph with room to breathe.
 * Not a gallery; not a repeat of the hero composition.
 */
export function CafeAtmosphere({ className }: CafeAtmosphereProps) {
  const { id, eyebrow, headline, supporting, media } =
    cafePageContent.atmosphere;

  return (
    <section
      id={id}
      aria-labelledby="cafe-atmosphere-heading"
      className={cn("bg-[#f3eee6] scroll-mt-24", className)}
    >
      <div className="py-14 md:py-16 lg:py-20">
        <Container width="wide">
          <Reveal>
            <div className="max-w-xl">
              <p className="text-eyebrow text-ink-subtle">{eyebrow}</p>
              <Rule short className="mt-4" />
              <h2
                id="cafe-atmosphere-heading"
                className="mt-6 text-h1 text-foreground"
              >
                {headline}
              </h2>
              <p className="mt-4 max-w-md text-body text-foreground-muted">
                {supporting}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 md:mt-10 lg:mt-12">
              <CafeMedia
                alt={media.alt}
                src={media.src}
                objectPosition={media.objectPosition}
                sizes="(min-width: 1280px) 92vw, 100vw"
                className={cn(
                  // Wide editorial plane — distinct from the portrait hero frame
                  "aspect-[16/10] max-h-[min(42svh,22rem)]",
                  "sm:aspect-[2/1] sm:max-h-[min(46svh,26rem)]",
                  "lg:aspect-[21/9] lg:h-auto lg:max-h-[min(48svh,28rem)]",
                )}
              />
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
