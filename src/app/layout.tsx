import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Headers from "../components/common/Headers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Cryptocurrency Tracker',
  description: 'Track your favorite cryptocurrencies',

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Headers />
        {children}</body>
    </html>
  );
}
