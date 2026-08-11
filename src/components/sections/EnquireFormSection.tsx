import { Container } from "@/components/layout/Container";
import { EnquireForm } from "@/components/enquire/EnquireForm";
import { cn } from "@/lib/utils";

type EnquireFormSectionProps = {
  className?: string;
};

/**
 * Form band — editorial container for the enquiry form.
 */
export function EnquireFormSection({ className }: EnquireFormSectionProps) {
  return (
    <section
      aria-label="Enquiry form"
      className={cn("bg-background pb-16 md:pb-20 lg:pb-24", className)}
    >
      <Container width="wide">
        <div className="mx-auto max-w-2xl border-t border-border pt-10 md:pt-12">
          <EnquireForm />
        </div>
      </Container>
    </section>
  );
}
