// -------------------------------------------------------------------------- //
// 2025/10/15 ~ Now                                                           //
// Developer: Rion                                                            //
// -------------------------------------------------------------------------- //

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/provider/theme";
import { Header } from "@/components/layout/header";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { BlurFade } from "@/components/magicui/blur-fade";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const url = "https://ri0n.dev";
const icon = "/favicon.ico";
const ogpIcon = "/ogp.webp";
const siteName = "Rion";
const description = "I am a student working as an engineer, doing web development and app development.";
export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: `${siteName}`,
    template: `%s / ${siteName}`
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja-JP",
    type: "website",
    images: ogpIcon
  },
  icons: icon,
  verification: {
    google: ""
  },
  publisher: `@ri0n_dev`,
  robots: "index, follow",
  creator: `@ri0n_dev`,
  keywords: ["Rion", "Ri0n", "PIENNU"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-neutral-50 dark:bg-neutral-950 ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col max-w-[720px] mx-auto px-4 pb-10">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange storageKey="acme-theme">
            <BlurFade delay={0.4}>
              <Header />
            </BlurFade>
            {children}
          </ThemeProvider>
          <Analytics mode="production" />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
