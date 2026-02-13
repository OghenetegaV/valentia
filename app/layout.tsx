import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Cursor from "@/components/Cursor";
import PageTransition from "@/components/PageTransition";
import SoundManager from "@/components/SoundManager";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valentia | Medieval Experience",
  description: "A grand cinematic journey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="overflow-hidden bg-[#0a0505]">
        <SoundManager />
        {/* <Cursor /> */}
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}