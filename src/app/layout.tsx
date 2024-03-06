import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ShoppinCartProvider } from "@/context/utils-context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShoppingCart from "@/components/ShoppinCart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VANPICK",
  description: "A eCommerce demo website made by <@VitorAlecrim>",
  icons: "vanpicklogo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ShoppinCartProvider>
          <main className="relative">
            <ShoppingCart />
            <header className="w-full h-fit">
              <Navbar />
            </header>
            {children}
            <Footer />
          </main>
        </ShoppinCartProvider>
      </body>
    </html>
  );
}
