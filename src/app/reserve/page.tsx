import type { Metadata } from "next";
import { ReserveFlow } from "@/components/booking/ReserveFlow";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reserve a Table",
  description: `Save your table at ${siteConfig.name} — choose when you'd like to join us.`,
};

export default function ReservePage() {
  return <ReserveFlow />;
}
