import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipToContent from "@/components/accessibility/SkipToContent";
import { buildSiteMetadata } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const viewport: Viewport = {
  themeColor: "#2563EB",
};

export const metadata: Metadata = buildSiteMetadata({
  title: {
    default: "XperThrivr • Ocean Professional",
    template: "%s • XperThrivr",
  },
  description:
    "Modern, ocean-inspired professional website. We craft digital experiences with clarity, performance, and accessibility.",
  openGraph: {
    siteName: "XperThrivr",
  },
  twitter: {
    site: "@xperthrivr",
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <SkipToContent />
        <Header />
        <main id="main-content" className="app-main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
