import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krunal Kathiriya — Full-Stack Software Engineer",
  description:
    "Full-stack engineer with 2+ years building production web systems. Specializing in React, Next.js, Node.js, and TypeScript.",
  keywords: ["Krunal Kathiriya", "Full-Stack Engineer", "React", "Next.js", "Node.js", "TypeScript", "Portfolio"],
  openGraph: {
    title: "Krunal Kathiriya — Full-Stack Software Engineer",
    description: "I build fast, scalable web systems — from pixel-perfect UIs to production-grade APIs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krunal Kathiriya — Full-Stack Software Engineer",
    description: "I build fast, scalable web systems — from pixel-perfect UIs to production-grade APIs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <body className="min-h-screen bg-[#09090b] text-white antialiased">{children}</body>
    </html>
  );
}
