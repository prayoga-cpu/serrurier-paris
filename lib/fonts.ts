import localFont from "next/font/local";
import { Inter } from "next/font/google";

// Display: Montserrat, self-hosted from the variable font files in
// lib/fonts/montserrat/ (client-provided, see lib/fonts/montserrat/OFL.txt for
// license). NOTE: this overrides CLAUDE.md §9's hard rule against
// Montserrat/Poppins as "template default" — that call was made explicitly by
// providing these font files directly. If this is the final decision, update
// §9 so the rule doesn't contradict the shipped code.
// Body: Inter — still matches §9's suggested "Inter/Public Sans body".
// Both subset latin + latin-ext so French accents render cleanly (§7, §9).
export const headlineFont = localFont({
  src: [
    {
      path: "./fonts/montserrat/Montserrat-VariableFont_wght.ttf",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "./fonts/montserrat/Montserrat-Italic-VariableFont_wght.ttf",
      style: "italic",
      weight: "100 900",
    },
  ],
  variable: "--font-headline",
  display: "swap",
});

export const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
});

export const fontVariables = `${bodyFont.variable} ${headlineFont.variable}`;
