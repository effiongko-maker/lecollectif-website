import { Container } from "@/components/layout/Container";
import { EventsMedia } from "@/components/sections/EventsMedia";
import { TextLink } from "@/components/ui/Link";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { homeEventsContent } from "@/lib/events";
import { cn } from "@/lib/utils";

type HomeEventsProps = {
  className?: string;
};

/**
 * After Hours / Events — evening personality of Le CollectiF.
 * Image-led destination moment; no invented event listings.
 */
export function HomeEvents({ className }: HomeEventsProps) {
  const { id, eyebrow, headline, supporting, cta, media } = homeEventsContent;

  return (
    <section
      id={id}
      aria-labelledby="home-events-heading"
      className={cn(
        // Warm espresso — distinct from footer near-black (#161513)
        "relative overflow-hidden bg-[#2a211b] text-[#f4efe8] scroll-mt-24",
        className,
      )}
    >
      {/* Clean dusk threshold from the warm café section */}
      <div aria-hidden className="h-px w-full bg-[#cbb892]/40" />

      <div className="section-space-feature">
        <Container width="wide">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-14 xl:gap-20">
            <div className="relative z-10 flex flex-col justify-center self-center lg:max-w-md">
              <Reveal>
                <div className="flex flex-col gap-4">
                  <p className="text-eyebrow text-[#f4efe8]/50">{eyebrow}</p>
                  <Rule short accent className="opacity-50" />
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h2
                  id="home-events-heading"
                  className="mt-7 font-display text-display-lg font-normal text-[#f4efe8]"
                >
                  {headline.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h2>
              </Reveal>

              <Reveal delay={180}>
                <p className="mt-6 max-w-sm text-body-lg text-[#f4efe8]/62">
                  {supporting}
                </p>
              </Reveal>

              <Reveal delay={250}>
                <div className="mt-8">
                  <TextLink
                    href={cta.href}
                    withArrow
                    className="text-button !text-[#f4efe8]/90 hover:!text-[#faf7f2] transition-editorial"
                  >
                    {cta.label}
                  </TextLink>
                </div>
              </Reveal>
            </div>

            <Reveal delay={140} className="lg:-mr-[var(--gutter)]">
              <EventsMedia
                alt={media.alt}
                src={media.src}
                objectPosition={media.objectPosition}
                sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 60vw, 100vw"
              />
            </Reveal>
          </div>
        </Container>
      </div>
    </section>
  );
}
