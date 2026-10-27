import type { Metadata } from "next";
import { BookFlow } from "@/components/booking/BookFlow";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Space",
  description: `Find your space at ${siteConfig.name} — choose the setting, date and time that work for you.`,
};

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ space?: string | string[] }>;
}) {
  const { space } = await searchParams;
  const presetSpace = typeof space === "string" ? space : "";

  // Render the correct first step on the server, rather than a short client-only fallback.
  return <BookFlow key={presetSpace} presetSpace={presetSpace} />;
}
