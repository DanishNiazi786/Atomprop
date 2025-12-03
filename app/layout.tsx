import type { Metadata } from "next";
import { Space_Grotesk, Sora, Outfit } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Atomprop | Tokenized Real Estate Investment Platform",
  description: "Invest in real estate, one digital share at a time. Atomprop lets you invest, earn, and trade property-backed digital assets with complete transparency and security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${sora.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
