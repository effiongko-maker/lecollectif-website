import type { BookingStatus, PaymentStatus } from "@/lib/booking/types";

/**
 * Conceptual transitions — refine when business workflow is finalized.
 * Confirmation requires successful payment (or an approved enquiry path),
 * never merely reaching checkout.
 */
export const BOOKING_STATUSES = [
  "available",
  "pending",
  "payment_pending",
  "confirmed",
  "cancelled",
  "expired",
] as const satisfies readonly BookingStatus[];

export const PAYMENT_STATUSES = [
  "not_started",
  "pending",
  "successful",
  "failed",
  "cancelled",
] as const satisfies readonly PaymentStatus[];

/** Statuses that represent an open / unfinished booking */
export function isOpenBookingStatus(status: BookingStatus): boolean {
  return (
    status === "pending" ||
    status === "payment_pending" ||
    status === "available"
  );
}

/** A booking may only be treated as confirmed after payment success (or approved enquiry) */
export function isConfirmedBooking(status: BookingStatus): boolean {
  return status === "confirmed";
}

/**
 * Derive booking status from payment outcome.
 * Does not invent edge-case business rules — keep conservative.
 */
export function bookingStatusFromPayment(
  paymentStatus: PaymentStatus,
): BookingStatus {
  switch (paymentStatus) {
    case "successful":
      return "confirmed";
    case "pending":
      return "payment_pending";
    case "failed":
    case "cancelled":
      return "pending";
    case "not_started":
    default:
      return "payment_pending";
  }
}
