import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/Link";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { businessInNigeriaContent } from "@/lib/business-in-nigeria";

export function SpacesBusinessSupport() {
  const { eyebrow, headline, supporting, link } = businessInNigeriaContent.spaces;

  return (
    <section aria-labelledby="spaces-business-heading" className="bg-background">
      <Container width="wide" className="section-space-feature">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-14 xl:gap-20">
            <div>
              <p className="text-eyebrow text-ink-subtle">{eyebrow}</p>
              <Rule short className="mt-4" />
              <h2 id="spaces-business-heading" className="mt-6 text-display-lg text-foreground">
                {headline}
              </h2>
            </div>
            <div className="max-w-xl lg:pt-10">
              <p className="text-body-lg text-foreground-muted">{supporting}</p>
              <div className="mt-7">
                <TextLink href={link.href} withArrow className="text-button">
                  {link.label}
                </TextLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
