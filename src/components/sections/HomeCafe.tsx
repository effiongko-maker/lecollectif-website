import { Container } from "@/components/layout/Container";
import { CafeMedia } from "@/components/sections/CafeMedia";
import { TextLink } from "@/components/ui/Link";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { cafeOffering, homeCafeContent } from "@/lib/cafe";
import { cn } from "@/lib/utils";

type HomeCafeProps = {
  className?: string;
};

/**
 * Glass Café destination section — warmer hospitality register within the brand system.
 */
export function HomeCafe({ className }: HomeCafeProps) {
  const { id, eyebrow, headline, supporting, cta, media } = homeCafeContent;

  return (
    <section
      id={id}
      aria-labelledby="home-cafe-heading"
      data-offering-id={cafeOffering.id}
      data-access-mode={cafeOffering.accessMode}
      className={cn(
        "relative overflow-hidden bg-[#f3eee6] section-space-feature scroll-mt-24",
        className,
      )}
    >
      <Container width="wide" className="relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 xl:gap-14">
          <div className="flex flex-col justify-center self-center lg:max-w-lg lg:pr-4">
            <Reveal>
              <div className="flex flex-col gap-4">
                <p className="text-eyebrow text-ink-subtle">{eyebrow}</p>
                <Rule short accent className="opacity-55" />
              </div>
            </Reveal>

            <Reveal delay={90}>
              <h2
                id="home-cafe-heading"
                className="mt-7 max-w-md text-display-lg text-foreground"
              >
                {headline}
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-body-lg text-foreground-muted">
                {supporting}
              </p>
            </Reveal>

            <Reveal delay={230}>
              <div className="mt-8">
                <TextLink
                  href={cta.href}
                  withArrow
                  className="text-button"
                >
                  {cta.label}
                </TextLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:-mr-[var(--gutter)]">
            <CafeMedia
              alt={media.alt}
              src={media.src}
              objectPosition={media.objectPosition}
              sizes="(min-width: 1280px) 48vw, (min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
