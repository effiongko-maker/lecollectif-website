import { Container } from "@/components/layout/Container";
import { CafeMedia } from "@/components/sections/CafeMedia";
import { TextLink } from "@/components/ui/Link";
import { Rule } from "@/components/ui/Rule";
import { cafeOffering, cafePageContent } from "@/lib/cafe";
import { cn } from "@/lib/utils";

type CafeHeroProps = {
  className?: string;
};

/**
 * Café page hero — editorial destination introduction for the Glass Café.
 */
export function CafeHero({ className }: CafeHeroProps) {
  const { eyebrow, headline, supporting, cta, media } = cafePageContent.hero;

  return (
    <section
      aria-labelledby="cafe-hero-heading"
      data-offering-id={cafeOffering.id}
      data-access-mode={cafeOffering.accessMode}
      className={cn(
        "relative overflow-hidden bg-[#f3eee6]",
        className,
      )}
    >
      <Container
        width="wide"
        className="grid grid-cols-1 items-end gap-8 py-9 md:gap-10 md:py-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14 lg:py-14 xl:gap-16"
      >
        <div className="flex max-w-xl flex-col justify-center lg:max-w-none lg:pr-4">
          <p className="text-eyebrow text-ink-subtle hero-reveal hero-delay-1">
            {eyebrow}
          </p>

          <Rule short accent className="mt-4 opacity-55 hero-reveal hero-delay-1" />

          <h1
            id="cafe-hero-heading"
            className={cn(
              "mt-6 text-foreground text-display-xl hero-reveal hero-delay-2",
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

        <div className="relative w-full hero-reveal-composition hero-delay-5 lg:-mr-[var(--gutter)]">
          <CafeMedia
            alt={media.alt}
            src={media.src}
            objectPosition={media.objectPosition}
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="max-h-[44vh] sm:max-h-[48vh] lg:max-h-none"
          />
        </div>
      </Container>
    </section>
  );
}
