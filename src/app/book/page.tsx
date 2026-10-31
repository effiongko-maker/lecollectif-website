import type { Metadata } from "next";
import { PreOpeningNotice } from "@/components/booking/PreOpeningNotice";
import { isPreOpening, preOpeningNotices } from "@/lib/pre-opening";
import { BookFlow } from "@/components/booking/BookFlow";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Space",
  description: preOpeningNotices.book,
  openGraph: {
    title: `Book a Space · ${siteConfig.name}`,
    description: preOpeningNotices.book,
    siteName: siteConfig.name,
    locale: "en_NG",
    type: "website",
  },
};

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ space?: string | string[] }>;
}) {
  if (isPreOpening) return <PreOpeningNotice journey="book" />;

  const { space } = await searchParams;
  const presetSpace = typeof space === "string" ? space : "";

  // Render the correct first step on the server, rather than a short client-only fallback.
  return <BookFlow key={presetSpace} presetSpace={presetSpace} />;
}
