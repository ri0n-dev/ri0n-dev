import { GeistSans, GeistMono } from "next/font/geist";
import "@/styles/tailwind.css";

const geistSans = GeistSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = GeistMono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export { metadata as metadata } from "@/consts/metadata";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
