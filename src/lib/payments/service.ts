import { bookingStatusFromPayment } from "@/lib/booking/status";
import type { BookingStatus, PaymentStatus } from "@/lib/booking/types";
import type { PaymentProvider } from "@/lib/payments/provider";
import { PaymentProviderNotConfiguredError } from "@/lib/payments/provider";
import type {
  CreatePaymentInput,
  PaymentIntentStatus,
  PaymentSession,
  PaymentVerification,
  PaymentWebhookResult,
} from "@/lib/payments/types";

/**
 * Maps provider payment intent status → booking payment status.
 */
export function toPaymentStatus(
  status: PaymentIntentStatus,
): PaymentStatus {
  switch (status) {
    case "successful":
      return "successful";
    case "pending":
    case "created":
      return "pending";
    case "failed":
      return "failed";
    case "cancelled":
      return "cancelled";
    default:
      return "pending";
  }
}

export type PaymentOutcome = {
  payment: PaymentVerification;
  paymentStatus: PaymentStatus;
  /** Suggested booking status after this payment event */
  bookingStatus: BookingStatus;
};

/**
 * Server-side payment orchestration.
 * Keeps provider details behind this boundary so booking UI stays stable.
 */
export type PaymentService = {
  initiatePayment(input: CreatePaymentInput): Promise<PaymentSession>;
  verifyPayment(paymentReference: string): Promise<PaymentOutcome>;
  handleWebhook?(request: Request): Promise<PaymentWebhookResult>;
};

export function createPaymentService(
  provider: PaymentProvider | null,
): PaymentService {
  if (!provider) {
    return {
      async initiatePayment() {
        throw new PaymentProviderNotConfiguredError();
      },
      async verifyPayment() {
        throw new PaymentProviderNotConfiguredError();
      },
    };
  }

  return {
    async initiatePayment(input) {
      return provider.createPayment(input);
    },
    async verifyPayment(paymentReference) {
      const payment = await provider.verifyPayment(paymentReference);
      const paymentStatus = toPaymentStatus(payment.status);
      return {
        payment,
        paymentStatus,
        bookingStatus: bookingStatusFromPayment(paymentStatus),
      };
    },
    handleWebhook: provider.handleWebhook
      ? (request) => provider.handleWebhook!(request)
      : undefined,
  };
}

let activePaymentService: PaymentService = createPaymentService(null);

/** Register a concrete provider from server bootstrap / env configuration */
export function setPaymentService(service: PaymentService): void {
  activePaymentService = service;
}

export function getPaymentService(): PaymentService {
  return activePaymentService;
}

/**
 * Intended confirmation sequence (server-side):
 * 1. createBooking → bookingStatus: payment_pending
 * 2. initiatePayment → return clientAction to UI
 * 3. verifyPayment / webhook → only then set bookingStatus: confirmed
 *
 * Never confirm a booking because the customer opened checkout.
 */
export const paymentLifecycle = [
  "booking_created_pending",
  "payment_initiated",
  "payment_successful_booking_confirmed",
  "payment_failed",
  "payment_cancelled",
  "payment_pending",
  "booking_expired_unpaid",
] as const;
