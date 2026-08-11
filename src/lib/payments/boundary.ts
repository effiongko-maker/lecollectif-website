/**
 * Payment boundary — replaceable layer between order summary and confirmation.
 * No provider (Paystack, Flutterwave, Stripe, etc.) is wired here.
 */

export type PaymentBoundaryStatus =
  | "not_ready"
  | "awaiting_provider"
  | "ready_for_provider";

export type PaymentBoundaryPayload = {
  /** Which transactional journey created this boundary */
  flow: "book" | "reserve" | "host";
  /** Opaque reference for a future payment intent */
  reference?: string;
  status: PaymentBoundaryStatus;
  /** Human-readable guidance shown at the payment step */
  message: string;
};

export const DEFAULT_PAYMENT_BOUNDARY_MESSAGE =
  "Payment will be completed securely at the next step." as const;

/** Create a provider-agnostic payment boundary for a completed review step */
export function createPaymentBoundary(
  flow: PaymentBoundaryPayload["flow"],
  reference?: string,
): PaymentBoundaryPayload {
  return {
    flow,
    reference,
    status: "awaiting_provider",
    message: DEFAULT_PAYMENT_BOUNDARY_MESSAGE,
  };
}
