/**
 * Transactional architecture notes for Le CollectiF.
 *
 * Booking UI and payment providers are intentionally decoupled:
 * - UI (future `components/booking/*`) speaks in domain types from `lib/booking`
 * - Persistence / availability via `BookingService` (server-only consumers)
 * - Money movement via `PaymentProvider` → `PaymentService` (server-only)
 *
 * Confirmation rule: booking becomes `confirmed` only after payment success
 * (or an approved enquiry workflow) — never because checkout was opened.
 */
export const transactionalArchitecture = {
  flows: ["direct_booking", "enquiry"] as const,
  bookingApi: "/api/bookings",
  paymentsApi: "/api/payments",
  paymentsWebhook: "/api/payments/webhook",
  bookPath: "/book",
  reservePath: "/reserve",
  hostPath: "/host",
  enquirePath: "/enquire",
} as const;
