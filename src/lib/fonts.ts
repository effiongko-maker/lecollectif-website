import { Source_Sans_3 } from "next/font/google";

/** One self-hosted variable family for editorial text and interface roles. */
export const fontSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "variable",
  display: "swap",
});
