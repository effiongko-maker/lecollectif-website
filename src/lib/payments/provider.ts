import type {
  CreatePaymentInput,
  PaymentSession,
  PaymentVerification,
  PaymentWebhookResult,
} from "@/lib/payments/types";

/**
 * Provider-agnostic payment adapter.
 * Implement for Paystack, Flutterwave, Stripe, etc. without changing booking UI.
 *
 * Instantiation and secret loading must happen only on the server.
 */
export type PaymentProvider = {
  readonly id: string;
  createPayment(input: CreatePaymentInput): Promise<PaymentSession>;
  verifyPayment(paymentReference: string): Promise<PaymentVerification>;
  /**
   * Optional webhook normalisation.
   * Verify signatures inside the provider implementation — never in the client.
   */
  handleWebhook?(
    request: Request,
  ): Promise<PaymentWebhookResult>;
};

export class PaymentProviderNotConfiguredError extends Error {
  constructor(detail = "No payment provider is configured.") {
    super(detail);
    this.name = "PaymentProviderNotConfiguredError";
  }
}
