import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mangystau Future Geopark",
  description: "Mangystau Future Geopark - Unique natural landscapes in 360° format",
};

import AIGuide from "@/components/AIGuide";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen font-sans antialiased text-gray-900 bg-white"
      >
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <AIGuide />
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
