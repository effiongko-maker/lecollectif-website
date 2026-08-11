import { NextResponse } from "next/server";

/**
 * Bookings API surface — not implemented yet.
 * Future handlers should call getBookingService() on the server only.
 *
 * Expected eventual operations:
 * - POST create booking / enquiry
 * - GET booking by id
 * - POST availability check
 */
export async function GET() {
  return NextResponse.json(
    {
      status: "not_configured",
      message:
        "Booking API is reserved for future implementation. Use the BookingService abstraction.",
    },
    { status: 501 },
  );
}

export async function POST() {
  return NextResponse.json(
    {
      status: "not_configured",
      message:
        "Booking API is reserved for future implementation. Use the BookingService abstraction.",
    },
    { status: 501 },
  );
}
