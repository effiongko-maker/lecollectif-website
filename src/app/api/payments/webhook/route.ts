import { NextResponse } from "next/server";

/**
 * Payment provider webhooks — not implemented yet.
 * Verify signatures server-side via PaymentProvider.handleWebhook.
 */
export async function POST() {
  return NextResponse.json(
    {
      status: "not_configured",
      message: "Payment webhook endpoint is reserved for future provider integration.",
    },
    { status: 501 },
  );
}
