import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { cafePageContent } from "@/lib/cafe";
import { cn } from "@/lib/utils";

type CafeExperienceProps = {
  className?: string;
};

/**
 * Ways to be here — editorial experience list, not a menu or service grid.
 */
export function CafeExperience({ className }: CafeExperienceProps) {
  const { id, eyebrow, headline, supporting, items } =
    cafePageContent.experience;

  return (
    <section
      id={id}
      aria-labelledby="cafe-experience-heading"
      className={cn("bg-[#f3eee6] scroll-mt-24", className)}
    >
      <div className="section-space-feature">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-14 xl:gap-20">
            <Reveal>
              <div className="max-w-md lg:sticky lg:top-28">
                <p className="text-eyebrow text-ink-subtle">{eyebrow}</p>
                <Rule short className="mt-4" />
                <h2
                  id="cafe-experience-heading"
                  className="mt-6 text-display-lg text-foreground"
                >
                  {headline}
                </h2>
                <p className="mt-4 text-body-lg text-foreground-muted">
                  {supporting}
                </p>
              </div>
            </Reveal>

            <ul className="flex flex-col">
              {items.map((item, index) => (
                <Reveal key={item.id} delay={Math.min(index * 50, 200)}>
                  <li
                    className={cn(
                      "border-t border-border py-6 last:border-b sm:py-7",
                      "grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:items-start sm:gap-8",
                    )}
                  >
                    <p className="text-card text-foreground">
                      {item.label}
                    </p>
                    <p className="max-w-md text-body text-foreground-muted">
                      {item.description}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
}
