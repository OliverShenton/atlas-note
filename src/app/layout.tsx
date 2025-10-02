import type { Metadata } from "next";
import { Inter, Quintessential } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const quintessential = Quintessential({
  variable: "--font-quintessential",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "AtlasNote",
  description:
    "AtlasNote lets teams capture knowledge as living documents. It combines a Notion-style editor (blocks, slash commands, rich embeds) with AI retrieval-augmented search, offline-first UX, and real-time collaboration. Think “docs that answer back.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${quintessential.variable} antialiased flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
