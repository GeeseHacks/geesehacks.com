import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import MLHBadge from "../components/home/utils/mlhBadge";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GeeseHacks",
  description: "GeeseHacks, a hybrid hackathon and case competition, will be held from January 10-12, 2025. Participants are invited to create innovative projects or craft unique solutions for real-world challenges. Join us for a weekend of creativity, collaboration, and problem-solving!",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full`}>
        {/* Remove if not sponsored by MLH */}
        {/* <MLHBadge /> */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
