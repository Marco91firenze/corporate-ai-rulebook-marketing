import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Corporate AI Rulebook — Grounded internal knowledge for teams",
    template: "%s · Corporate AI Rulebook",
  },
  description:
    "B2B SaaS platform that lets companies upload internal documents and provides employees with an AI chatbot that answers questions strictly from those documents.",
  openGraph: {
    title: "Corporate AI Rulebook",
    description:
      "Upload internal documents and give employees an AI chatbot that answers questions strictly from those documents—with citations and company isolation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
