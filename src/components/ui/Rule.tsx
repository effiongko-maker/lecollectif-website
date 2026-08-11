import { cn } from "@/lib/utils";

type RuleProps = {
  className?: string;
  /** Extremely rare gold accent */
  accent?: boolean;
  short?: boolean;
};

/** Fine warm-toned editorial divider. */
export function Rule({ className, accent = false, short = false }: RuleProps) {
  return (
    <hr
      className={cn(
        "rule border-0",
        accent && "rule-accent",
        short && "rule-short",
        className,
      )}
    />
  );
}
