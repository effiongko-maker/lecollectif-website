import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/Link";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { businessInNigeriaContent as content } from "@/lib/business-in-nigeria";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Business in Nigeria",
  description: content.description,
  openGraph: {
    title: `Business in Nigeria · ${siteConfig.name}`,
    description: content.description,
    siteName: siteConfig.name,
    locale: "en_NG",
    type: "website",
  },
};

export default function BusinessInNigeriaPage() {
  return (
    <>
      <section aria-labelledby="business-hero-heading" className="bg-background">
        <Container width="wide" className="section-space-feature">
          <Reveal>
            <div className="mx-auto max-w-3xl text-left md:text-center">
              <p className="text-eyebrow text-ink-subtle">{content.hero.eyebrow}</p>
              <Rule short className="mt-4 md:mx-auto" />
              <h1 id="business-hero-heading" className="mt-6 text-display-xl text-foreground">
                {content.hero.headline}
              </h1>
              <p className="mt-5 text-body-lg text-foreground-muted">{content.hero.supporting}</p>
              <p className="mt-4 text-body text-foreground-muted">{content.hero.status}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="business-intro-heading" className="bg-background-secondary">
        <Container width="wide" className="section-space-feature">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-14 xl:gap-20">
            <Reveal>
              <p className="text-eyebrow text-foreground-muted">{content.introduction.eyebrow}</p>
              <Rule short className="mt-4" />
              <h2 id="business-intro-heading" className="mt-6 max-w-md text-display-lg text-foreground">
                {content.introduction.headline}
              </h2>
            </Reveal>
            <Reveal>
              <div className="max-w-xl space-y-5 lg:pt-10">
                {content.introduction.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-body-lg text-foreground-muted">{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="business-pillars-heading" className="bg-background">
        <Container width="wide" className="section-space-feature">
          <Reveal>
            <p className="text-eyebrow text-ink-subtle">{content.pillars.eyebrow}</p>
            <Rule short className="mt-4" />
            <h2 id="business-pillars-heading" className="mt-6 text-display-lg text-foreground">
              {content.pillars.headline}
            </h2>
          </Reveal>
          <ul className="mt-10 flex flex-col md:mt-12">
            {content.pillars.items.map((pillar, index) => (
              <Reveal as="li" key={pillar.id} delay={Math.min(index * 50, 150)} className="grid grid-cols-1 gap-4 border-y border-border py-7 sm:py-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-14 xl:gap-20">
                <h3 id={pillar.id} className="text-card text-foreground">{pillar.headline}</h3>
                <p className="max-w-xl text-body-lg text-foreground-muted">{pillar.supporting}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal>
            <p className="mt-7 max-w-3xl text-body text-foreground-muted">{content.pillars.scope}</p>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="business-spaces-heading" className="bg-background-secondary">
        <Container width="wide" className="section-space-feature">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-eyebrow text-foreground-muted">{content.spacesConnection.eyebrow}</p>
              <Rule short className="mt-4" />
              <h2 id="business-spaces-heading" className="mt-6 text-display-lg text-foreground">
                {content.spacesConnection.headline}
              </h2>
              <p className="mt-5 text-body-lg text-foreground-muted">{content.spacesConnection.supporting}</p>
              <div className="mt-7">
                <TextLink href={content.spacesConnection.link.href} withArrow className="text-button">
                  {content.spacesConnection.link.label}
                </TextLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="business-closing-heading" className="bg-background">
        <Container width="wide" className="section-space-feature">
          <Reveal>
            <div className="mx-auto flex max-w-2xl flex-col items-start border-y border-border py-9 md:items-center md:py-11 md:text-center">
              <p className="text-eyebrow text-ink-subtle">{content.closing.eyebrow}</p>
              <Rule short className="mt-3 md:mx-auto" />
              <h2 id="business-closing-heading" className="mt-5 text-display-lg text-foreground">
                {content.closing.headline}
              </h2>
              <p className="mt-4 max-w-lg text-body-lg text-foreground-muted">{content.closing.supporting}</p>
              <div className="mt-7">
                <TextLink href={content.closing.link.href} withArrow className="text-button">
                  {content.closing.link.label}
                </TextLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
