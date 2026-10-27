import Image from "next/image";
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
        // Pair the destination story with a visual; keep the Day/Evening copy compact.
        "border-t border-border bg-background scroll-mt-24 py-10 md:py-12 lg:py-14",
        className,
      )}
    >
      <Container width="wide">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <Reveal>
              <div className="flex flex-col gap-4">
                <p className="text-eyebrow text-ink-subtle">{eyebrow}</p>
                <Rule short accent className="opacity-60" />
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2
                id="home-intro-heading"
                className="mt-6 max-w-3xl font-display text-display-lg font-normal text-foreground"
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
          <Reveal delay={120}>
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden bg-background-secondary">
                <Image
                  src="/media/cafe/glass-cafe-concept.png"
                  alt="Conceptual glass café interior with lounge seating and shared tables"
                  fill
                  quality={95}
                  sizes="(min-width: 1472px) 664px, (min-width: 1024px) 46vw, (min-width: 768px) calc(100vw - 96px), 91vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-small text-foreground-muted">Conceptual interior imagery.</figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal delay={280}>
          <div className="mt-8 border-t border-border pt-6 md:mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-0">
              {rhythms.map((rhythm, index) => (
                <div
                  key={rhythm.label}
                  className={cn(
                    "md:py-2",
                    index === 0 && "md:pr-10 md:pl-0 lg:pr-14",
                    index === 1 &&
                      "border-t border-border pt-6 md:border-l md:border-t-0 md:bg-background-secondary/60 md:pt-2 md:pl-10 md:pr-0 lg:pl-14",
                  )}
                >
                  <p className="text-eyebrow text-ink-subtle">{rhythm.label}</p>
                  <p className="mt-2 font-display text-h3 font-normal tracking-[-0.02em] text-foreground">
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
