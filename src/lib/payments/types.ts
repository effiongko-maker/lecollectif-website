/**
 * Payment domain types — provider-agnostic.
 * Secrets and provider SDKs must never enter client bundles.
 */

export type PaymentIntentStatus =
  | "created"
  | "pending"
  | "successful"
  | "failed"
  | "cancelled";

export type CreatePaymentInput = {
  bookingId: string;
  amount: number;
  currency: string;
  customerEmail: string;
  customerName?: string;
  /** Provider-safe metadata only — no secrets */
  metadata?: Record<string, string>;
  successUrl: string;
  cancelUrl: string;
};

/** Client-safe session returned to continue checkout in the UI */
export type PaymentSession = {
  provider: string;
  paymentReference: string;
  /** Redirect URL, client token, or similar — never a secret key */
  clientAction: {
    type: "redirect" | "client_token";
    value: string;
  };
  status: PaymentIntentStatus;
};

export type PaymentVerification = {
  paymentReference: string;
  status: PaymentIntentStatus;
  bookingId?: string;
  amount?: number;
  currency?: string;
  raw?: unknown;
};

export type PaymentWebhookResult = {
  handled: boolean;
  paymentReference?: string;
  status?: PaymentIntentStatus;
  bookingId?: string;
};
