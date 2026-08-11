import type { Metadata } from "next";
import { HostFlow } from "@/components/booking/HostFlow";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Host an Event",
  description: `Make it a gathering at ${siteConfig.name} — tell us what you're planning.`,
};

export default function HostPage() {
  return <HostFlow />;
}
