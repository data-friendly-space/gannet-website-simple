import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ui/ThemeContext";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GANNET - AI-Powered Tools for Social Impact",
  description: "AI-powered tools for social impact organizations. Transform complex data into actionable insights and enhance your organization's impact in crisis response and beyond.",
  keywords: ["AI", "social impact", "humanitarian", "crisis response", "data analysis", "NGO", "non-profit"],
  authors: [{ name: "GANNET Team" }],
  creator: "GANNET by Data Friendly Space",
  publisher: "Data Friendly Space",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "GANNET - AI-Powered Tools for Social Impact",
    description: "AI-powered tools for social impact organizations. Transform complex data into actionable insights and enhance your organization's impact.",
    url: "https://gannet.ai",
    siteName: "GANNET",
    images: [
      {
        url: "/images/GANNET_Logo_Green.png",
        width: 1200,
        height: 630,
        alt: "GANNET Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GANNET - AI-Powered Tools for Social Impact",
    description: "AI-powered tools for social impact organizations. Transform complex data into actionable insights.",
    images: ["/images/GANNET_Logo_Green.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/images/GANNET icon.png', type: 'image/png' },
      { url: '/favicon.ico' }
    ],
    apple: { url: '/images/GANNET icon.png', type: 'image/png' }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <GoogleAnalytics />
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
