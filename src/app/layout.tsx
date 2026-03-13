import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Roobert - Headlines/Logo (only weights used in production)
const roobert = localFont({
  src: [
    { path: "../../public/fonts/roobert/Roobert-TRIAL-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/roobert/Roobert-TRIAL-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-roobert",
  display: "swap",
});

// Geist - Body copy
const geist = localFont({
  src: "../../public/fonts/geist/Geist[wght].woff2",
  variable: "--font-geist",
  display: "swap",
});

// Geist Mono - Code
const geistMono = localFont({
  src: "../../public/fonts/geist-mono/GeistMono[wght].woff2",
  variable: "--font-geist-mono",
  display: "swap",
});

// MagdaClean - Eyebrow headings, tags, pills
const magdaClean = localFont({
  src: "../../public/fonts/magdaclean/MagdaClean.woff2",
  variable: "--font-magda",
  display: "swap",
});

// PP NeueBit - Pixel headings (rare/occasional use)
const ppNeueBit = localFont({
  src: "../../public/fonts/ppneuebit/PPNeueBit-Bold.woff2",
  variable: "--font-pixel",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brite Labs",
  description: "Component playground for Brite Labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${roobert.variable} ${geist.variable} ${geistMono.variable} ${magdaClean.variable} ${ppNeueBit.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
