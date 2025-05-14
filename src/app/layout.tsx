import { GeistSans } from 'geist/font/sans'
import "@/styles/tailwind.css";

export { metadata as metadata } from "@/consts/metadata";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="font-geist antialiased">
        {children}
      </body>
    </html>
  );
}