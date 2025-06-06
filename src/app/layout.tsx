import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ui/ThemeContext";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GANNET - AI-Powered Humanitarian Tools",
  description: "AI-powered humanitarian tools for effective crisis response. Transform complex data into actionable insights and enhance your organization's impact.",
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
