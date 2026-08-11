/**
 * Booking domain types — conceptual model for future backend integration.
 * Business rules (pricing, hours, capacity, etc.) are intentionally unset.
 */

/** How a visitor may engage with an offering */
export type OfferingAccessMode = "direct_booking" | "enquiry";

/**
 * Lifecycle statuses for bookings / bookable inventory.
 * `available` typically describes inventory or draft eligibility;
 * persisted bookings usually begin at `pending` or `payment_pending`.
 */
export type BookingStatus =
  | "available"
  | "pending"
  | "payment_pending"
  | "confirmed"
  | "cancelled"
  | "expired";

export type PaymentStatus =
  | "not_started"
  | "pending"
  | "successful"
  | "failed"
  | "cancelled";

/** Bookable space or experience — details filled when offerings are defined */
export type BookableOffering = {
  id: string;
  name: string;
  accessMode: OfferingAccessMode;
  /** Optional slug for routing, e.g. /book/[slug] */
  slug?: string;
};

export type BookingCustomer = {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  notes?: string;
};

export type BookingMoney = {
  amount: number;
  currency: string;
};

/**
 * Canonical booking record shape for API / persistence integration.
 * Do not invent pricing or availability rules in consumers of this type.
 */
export type Booking = {
  id: string;
  offeringId: string;
  offeringName?: string;
  date: string;
  startTime: string;
  endTime?: string;
  durationMinutes?: number;
  guestCount?: number;
  customer: BookingCustomer;
  amount?: number;
  currency?: string;
  bookingStatus: BookingStatus;
  paymentStatus: PaymentStatus;
  paymentReference?: string;
  createdAt: string;
  updatedAt: string;
};

/** In-progress selection before a booking record exists */
export type BookingSelection = {
  offeringId?: string;
  date?: string;
  startTime?: string;
  durationMinutes?: number;
  guestCount?: number;
};

/** Steps in the eventual transactional booking experience */
export type BookingFlowStep =
  | "select_offering"
  | "select_date"
  | "select_time"
  | "select_duration"
  | "select_guests"
  | "check_availability"
  | "review_pricing"
  | "customer_details"
  | "review_booking"
  | "payment"
  | "confirmation";

export type AvailabilityQuery = {
  offeringId: string;
  date: string;
  startTime?: string;
  durationMinutes?: number;
  guestCount?: number;
};

export type AvailabilityResult = {
  status: Extract<BookingStatus, "available"> | "unavailable";
  /** Opaque payload from future availability engine — shape TBD */
  slots?: unknown;
  message?: string;
};

export type CreateBookingInput = {
  offeringId: string;
  date: string;
  startTime: string;
  endTime?: string;
  durationMinutes?: number;
  guestCount?: number;
  customer: BookingCustomer;
};

export type CreateEnquiryInput = {
  offeringId?: string;
  preferredDate?: string;
  preferredStartTime?: string;
  guestCount?: number;
  customer: BookingCustomer;
  message?: string;
};
