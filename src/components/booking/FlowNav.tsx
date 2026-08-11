import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FlowNavProps = {
  onBack?: () => void;
  onContinue?: () => void;
  continueLabel?: string;
  continueType?: "button" | "submit";
  continueDisabled?: boolean;
  hideContinue?: boolean;
  className?: string;
};

/** Back / continue controls for transactional steps */
export function FlowNav({
  onBack,
  onContinue,
  continueLabel = "Continue",
  continueType = "button",
  continueDisabled = false,
  hideContinue = false,
  className,
}: FlowNavProps) {
  return (
    <div
      className={cn(
        "mt-10 flex flex-col-reverse gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
    >
      {onBack ? (
        <Button type="button" variant="text" onClick={onBack}>
          Back
        </Button>
      ) : (
        <span />
      )}

      {!hideContinue ? (
        <Button
          type={continueType}
          variant="primary"
          size="md"
          disabled={continueDisabled}
          onClick={continueType === "button" ? onContinue : undefined}
          className="tracking-[0.1em]"
        >
          {continueLabel}
          <span aria-hidden>→</span>
        </Button>
      ) : null}
    </div>
  );
}
