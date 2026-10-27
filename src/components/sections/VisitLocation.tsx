import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/Link";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { siteConfig } from "@/lib/site";
import { visitAddress, visitMaps, visitPageContent } from "@/lib/visit";
import { cn } from "@/lib/utils";

type VisitLocationProps = {
  className?: string;
};

/**
 * Location — address, directions and an integrated search-based map embed.
 */
export function VisitLocation({ className }: VisitLocationProps) {
  const { id, eyebrow, headline, supporting, cta } = visitPageContent.location;

  return (
    <section
      id={id}
      aria-labelledby="visit-location-heading"
      className={cn("bg-background-secondary scroll-mt-24", className)}
    >
      <div className="section-space-feature">
        <Container width="wide">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-12 xl:gap-16">
            <Reveal>
              <div className="flex h-full max-w-md flex-col lg:py-2">
                <p className="text-eyebrow text-ink-subtle">{eyebrow}</p>
                <Rule short className="mt-4" />
                <h2
                  id="visit-location-heading"
                  className="mt-6 text-display-lg text-foreground"
                >
                  {headline}
                </h2>
                <p className="mt-4 text-body-lg text-foreground-muted">
                  {supporting}
                </p>

                <address className="mt-8 not-italic">
                  <p className="text-body-lg text-foreground">
                    {visitAddress.line1}
                  </p>
                  <p className="mt-2 text-body text-foreground-muted">
                    {visitAddress.line2}
                  </p>
                  <p className="text-body text-foreground-muted">
                    {visitAddress.line3}
                  </p>
                </address>

                <div className="mt-8">
                  <TextLink
                    href={cta.href}
                    withArrow
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-button"
                  >
                    {cta.label}
                  </TextLink>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <figure
                className={cn(
                  "relative overflow-hidden border border-border bg-background",
                  "aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[22rem]",
                )}
              >
                <iframe
                  title={`Map showing ${siteConfig.name} at ${visitAddress.full}`}
                  src={visitMaps.embedSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-[0.95]"
                  allowFullScreen
                />
              </figure>
            </Reveal>
          </div>
        </Container>
      </div>
    </section>
  );
}
