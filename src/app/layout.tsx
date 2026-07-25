import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});


const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://hayagrivayoga.com"),

  title: {
    default: "Hayagriva Yoga | Clinical Yoga Therapy",
    template: "%s | Hayagriva Yoga",
  },

  description:
    "Premium clinical yoga therapy combining traditional yoga wisdom with modern wellness science. Online therapy for stress, pain, sleep, lifestyle disorders and holistic wellbeing.",

  keywords: [
    "Clinical Yoga Therapy",
    "Online Yoga Therapy",
    "Yoga Therapist",
    "Pranayama",
    "Meditation",
    "Yoga Nidra",
    "Stress Management",
    "Back Pain Yoga",
    "PCOS Yoga",
    "Lifestyle Disorder Management",
    "Hayagriva Yoga",
  ],

  authors: [
    {
      name: "Hayagriva Yoga",
    },
  ],

  creator: "Hayagriva Yoga",

  openGraph: {
    type: "website",
    title: "Hayagriva Yoga | Clinical Yoga Therapy",
    description:
      "Personalized yoga therapy programs for body, breath and mind regulation.",
    siteName: "Hayagriva Yoga",
    url: "https://hayagrivayoga.com",
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
    title: "Hayagriva Yoga",
    description:
      "Evidence-based yoga therapy for holistic healing.",
    images: [
      "/og-image.jpg",
    ],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={`${geist.variable} ${cormorant.variable}`}
    >

      <body
        className="
        min-h-screen
        overflow-x-hidden
        bg-[#050706]
        text-[#f7efe0]
        antialiased
        selection:bg-[#d6b36a]
        selection:text-[#050706]
        "
      >

        <TRPCReactProvider>

          {children}

        </TRPCReactProvider>

      </body>

    </html>
  );
}