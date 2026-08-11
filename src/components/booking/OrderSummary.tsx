import { cn } from "@/lib/utils";

export type SummaryRow = {
  label: string;
  value: string;
};

type OrderSummaryProps = {
  title?: string;
  rows: SummaryRow[];
  className?: string;
};

/**
 * Order / request summary — separated from payment provider concerns.
 */
export function OrderSummary({
  title = "Summary",
  rows,
  className,
}: OrderSummaryProps) {
  return (
    <div className={cn("border border-border px-5 py-6 md:px-6", className)}>
      <p className="text-eyebrow text-ink-subtle">{title}</p>
      <dl className="mt-5 flex flex-col gap-4">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-1 gap-1 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6"
          >
            <dt className="text-small text-ink-subtle">{row.label}</dt>
            <dd className="text-body text-foreground">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
