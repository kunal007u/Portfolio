
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "600", "700"],
});

// Replace with your new portfolio URL after deployment.
const SITE_URL = "https://portfolio-rho-five-98iujy9y0y.vercel.app";

const SITE_TITLE = "Krunal Kathiriya | Full-Stack Software Engineer";

const SITE_DESCRIPTION =
  "Portfolio of Krunal Kathiriya, a Full-Stack Software Engineer based in Chicago, specializing in React, TypeScript, Next.js, Node.js, and PostgreSQL. MS in Computer Science at DePaul University.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: `%s | Krunal Kathiriya`,
  },

  description: SITE_DESCRIPTION,

  applicationName: "Krunal Kathiriya Portfolio",

  keywords: [
    "Krunal Kathiriya",
    "Krunal Kathiriya Portfolio",
    "Krunal Kathiriya Software Engineer",
    "Full-Stack Software Engineer",
    "Full Stack Developer",
    "Software Development Engineer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "JavaScript",
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "REST API Development",
    "Redux Toolkit",
    "React Query",
    "Web Application Development",
    "Chicago Software Engineer",
    "DePaul University",
  ],

  authors: [
    {
      name: "Krunal Kathiriya",
      url: SITE_URL,
    },
  ],

  creator: "Krunal Kathiriya",
  publisher: "Krunal Kathiriya",

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Krunal Kathiriya Portfolio",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Krunal Kathiriya - Full-Stack Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
              {children}
            </div>

            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
