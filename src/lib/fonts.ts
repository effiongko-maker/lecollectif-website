import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";

/**
 * Display — refined serif for large editorial / hospitality moments.
 * Sans — quiet humanist face for body and navigation (not product-UI geometric).
 */
export const fontDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
  display: "swap",
});

export const fontSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500"],
  display: "swap",
});
