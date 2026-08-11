import type {
  AvailabilityQuery,
  AvailabilityResult,
  Booking,
  CreateBookingInput,
  CreateEnquiryInput,
} from "@/lib/booking/types";

/**
 * Booking service contract — implement against a real backend later.
 * Call only from server-side code (Route Handlers / Server Actions).
 *
 * Supports both direct booking and enquiry-based requests.
 */
export type BookingService = {
  checkAvailability(query: AvailabilityQuery): Promise<AvailabilityResult>;
  createBooking(input: CreateBookingInput): Promise<Booking>;
  getBooking(id: string): Promise<Booking | null>;
  createEnquiry(input: CreateEnquiryInput): Promise<{ enquiryId: string }>;
};

export class BookingServiceNotConfiguredError extends Error {
  constructor(method: string) {
    super(
      `BookingService.${method} is not configured. Wire a backend implementation before use.`,
    );
    this.name = "BookingServiceNotConfiguredError";
  }
}

/** Placeholder service — fails clearly until a real implementation is provided */
export const unimplementedBookingService: BookingService = {
  async checkAvailability() {
    throw new BookingServiceNotConfiguredError("checkAvailability");
  },
  async createBooking() {
    throw new BookingServiceNotConfiguredError("createBooking");
  },
  async getBooking() {
    throw new BookingServiceNotConfiguredError("getBooking");
  },
  async createEnquiry() {
    throw new BookingServiceNotConfiguredError("createEnquiry");
  },
};

let activeBookingService: BookingService = unimplementedBookingService;

/** Register the production booking backend when available */
export function setBookingService(service: BookingService): void {
  activeBookingService = service;
}

export function getBookingService(): BookingService {
  return activeBookingService;
}
