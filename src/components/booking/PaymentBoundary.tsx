import { OrderSummary, type SummaryRow } from "@/components/booking/OrderSummary";
import { FlowNav } from "@/components/booking/FlowNav";
import {
  DEFAULT_PAYMENT_BOUNDARY_MESSAGE,
  type PaymentBoundaryPayload,
} from "@/lib/payments/boundary";
import { cn } from "@/lib/utils";

type PaymentBoundaryProps = {
  boundary?: PaymentBoundaryPayload;
  summaryRows: SummaryRow[];
  onBack: () => void;
  onContinue: () => void;
  className?: string;
};

/**
 * Provider-agnostic payment step.
 * Insert a real gateway here later without changing upstream journey steps.
 */
export function PaymentBoundaryStep({
  boundary,
  summaryRows,
  onBack,
  onContinue,
  className,
}: PaymentBoundaryProps) {
  const message = boundary?.message ?? DEFAULT_PAYMENT_BOUNDARY_MESSAGE;

  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <div>
        <h2 className="font-display text-h3 font-normal tracking-[-0.02em] text-foreground">
          Payment
        </h2>
        <p className="mt-3 max-w-md text-body text-foreground-muted">
          {message}
        </p>
      </div>

      <OrderSummary title="Order summary" rows={summaryRows} />

      <div className="border border-border px-5 py-6 md:px-6">
        <p className="text-eyebrow text-ink-subtle">Secure payment</p>
        <p className="mt-4 text-body text-foreground-muted">
          A payment provider will be connected here. Your booking details are
          ready; no charge will be taken on this step yet.
        </p>
      </div>

      <FlowNav
        onBack={onBack}
        onContinue={onContinue}
        continueLabel="Continue"
      />
    </div>
  );
}
