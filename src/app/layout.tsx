import "~/styles/globals.css";

import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hayagrivayoga.com"),

  title: {
    default: "Hayagriva Yoga | Clinical Yoga Therapy",
    template: "%s | Hayagriva Yoga",
  },

  description:
    "Premium clinical yoga therapy combining traditional yoga wisdom with modern wellness science. Personalized therapy programs for stress, pain, sleep, lifestyle disorders and holistic wellbeing.",

  keywords: [
    "Hayagriva Yoga",
    "Clinical Yoga Therapy",
    "Yoga Therapy",
    "Online Yoga Therapy",
    "Yoga Therapist",
    "Yoga Therapy India",
    "Pranayama",
    "Meditation",
    "Yoga Nidra",
    "Stress Management",
    "Anxiety Management",
    "Back Pain Yoga",
    "PCOS Yoga",
    "Sleep Disorders",
    "Lifestyle Disorders",
    "Wellness Programs",
  ],

  authors: [
    {
      name: "Hayagriva Yoga",
      url: "https://hayagrivayoga.com",
    },
  ],

  creator: "Hayagriva Yoga",
  publisher: "Hayagriva Yoga",

  alternates: {
    canonical: "https://hayagrivayoga.com",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hayagrivayoga.com",
    siteName: "Hayagriva Yoga",
    title: "Hayagriva Yoga | Clinical Yoga Therapy",
    description:
      "Personalized clinical yoga therapy combining traditional yoga wisdom with modern wellness science.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hayagriva Yoga Clinical Yoga Therapy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hayagriva Yoga | Clinical Yoga Therapy",
    description:
      "Evidence-informed yoga therapy for stress, pain, sleep, lifestyle disorders and holistic wellbeing.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen overflow-x-hidden bg-[#FFFFFF] font-sans text-[#000000] antialiased">
        <TRPCReactProvider>
          <Navbar />
          <main className="w-full">{children}</main>
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}