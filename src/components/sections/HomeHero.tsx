import { Container } from "@/components/layout/Container";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Link";
import { homeHeroContent } from "@/lib/home";
import { cn } from "@/lib/utils";

type HomeHeroProps = {
  className?: string;
};

/**
 * Homepage hero — editorial destination introduction.
 * Conceptual editorial photography, explicitly distinguished from the premises.
 */
export function HomeHero({ className }: HomeHeroProps) {
  const { eyebrow, headline, supporting, primaryCta, secondaryCta } =
    homeHeroContent;

  return (
    <section
      aria-labelledby="home-hero-heading"
      className={cn(
        "relative overflow-hidden bg-background",
        className,
      )}
    >
      <Container
        width="wide"
        className="grid grid-cols-1 items-center gap-8 py-8 md:gap-10 md:py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 xl:gap-12"
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
              "mt-6 font-display font-normal text-foreground text-display-xl hero-reveal hero-delay-2",
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

        <figure className="min-w-0 hero-reveal-composition hero-delay-5">
          <div className="relative aspect-[3/2] w-full overflow-hidden bg-background-secondary">
            <Image
              src="/media/home/editorial-work-and-coffee.webp"
              alt="Laptop, leather notebook and cappuccino in warm natural light"
              fill
              preload
              quality={95}
              sizes="(min-width: 1472px) 730px, (min-width: 1024px) 52vw, (min-width: 768px) calc(100vw - 96px), 91vw"
              className="object-cover object-center"
            />
          </div>
          <figcaption className="mt-2 text-small text-foreground-muted">
            Conceptual editorial imagery — not the Le CollectiF premises.
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
