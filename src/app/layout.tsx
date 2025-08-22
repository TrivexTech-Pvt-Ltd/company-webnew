import type { Metadata } from "next";

import "./globals.css";

import { Montserrat, Roboto } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-montserrat flex flex-col min-h-screen bg-white w-full relative`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
