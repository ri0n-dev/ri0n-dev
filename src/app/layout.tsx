import { Geist } from 'next/font/google'
import "@/styles/tailwind.css";

const geist = Geist({
  subsets: ['latin'],
})
export { metadata as metadata } from "@/consts/metadata";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={geist.className}>
      <body className="antialiased font-geist">
        {children}
      </body>
    </html>
  );
}
