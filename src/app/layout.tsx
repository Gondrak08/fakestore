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
// Verificando se o usuário está acessando a página a partir do aplicativo do Instagram
        if (window.navigator.userAgent.includes("Instagram")) {
            // Redirecionando para o navegador nativo do Android (Google Chrome)
            window.location.href = "intent://seusite.com#Intent;scheme=http;package=com.android.chrome;end";
        }
        // Verificando se o usuário está acessando a página a partir do aplicativo do WhatsApp
        else if (window.navigator.userAgent.includes("WhatsApp")) {
            // Redirecionando para o aplicativo do WhatsApp
            window.location.href = "intent://seusite.com#Intent;scheme=http;package=com.android.chrome;end";
        }
        // Verificando se o usuário está acessando a página a partir do aplicativo do Facebook
        else if (window.navigator.userAgent.includes("FBAV")) {
            // Redirecionando para o aplicativo do Facebook
            window.location.href = "intent://seusite.com#Intent;scheme=http;package=com.android.chrome;end";
        }
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
