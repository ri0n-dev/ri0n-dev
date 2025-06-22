import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Background from "@/components/layout/background";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer"
import "@/styles/globals.css";

export { metadata as metadata } from "@/consts/metadata";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ppEditorialNew = localFont({
  src: '../../public/assets/fonts/PPEditorialNew-Ultralight-BF644b21500d0c0.otf',
  variable: '--font-pp',
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`bg-neutral-950 ${inter.variable} ${ppEditorialNew.variable} antialiased`}>
        <Background>
          <Header />
          {children}
          <Footer />
        </Background>
      </body>
    </html>
  )
}
