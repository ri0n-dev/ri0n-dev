// -------------------------------------------------------------------------- //
// 2025/08/01 ~ Now                                                           //
// Developer: Rion | Version: 0.2.0                                           //
// -------------------------------------------------------------------------- //

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/provider/theme";
import { Header } from "@/components/layout/header";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ppEditorialNew = localFont({
  src: '../../public/assets/fonts/PPEditorialNew-Ultralight-BF644b21500d0c0.otf',
  variable: '--font-pp',
})

const url = "https://ri0n.dev";
const icon = "/favicon.png";
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
      <body className={`bg-neutral-50 dark:bg-neutral-950 ${geistSans.variable} ${geistMono.variable} ${ppEditorialNew.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange storageKey="acme-theme">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
