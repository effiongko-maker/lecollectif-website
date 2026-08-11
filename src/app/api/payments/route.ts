import { NextResponse } from "next/server";

/**
 * Payments API surface — not implemented yet.
 * Payment secrets must be read only here (or in Server Actions), never in client components.
 *
 * Expected eventual operations:
 * - POST initiate payment for a booking
 * - GET/POST verify payment reference
 */
export async function GET() {
  return NextResponse.json(
    {
      status: "not_configured",
      message:
        "Payments API is reserved for future implementation. Use the PaymentService / PaymentProvider abstractions.",
    },
    { status: 501 },
  );
}

export async function POST() {
  return NextResponse.json(
    {
      status: "not_configured",
      message:
        "Payments API is reserved for future implementation. Use the PaymentService / PaymentProvider abstractions.",
    },
    { status: 501 },
  );
}
