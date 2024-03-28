"use client";
import { useEffect } from "react";
import Banner from "@/components/Banner";
export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
  const userAgent = window.navigator.userAgent;

    // Verificando se o usuário está acessando a página a partir do aplicativo do Instagram, WhatsApp ou Facebook
    if (userAgent.includes("Instagram") || userAgent.includes("WhatsApp") || userAgent.includes("FBAV")) {
        // Perguntar ao usuário se deseja abrir no navegador Chrome nativo
        const confirmRedirect = confirm("Deseja abrir esta página no navegador Chrome nativo do Android?");
        if (confirmRedirect) {
            // Redirecionar para o navegador nativo do Android (Google Chrome)
            window.location.href = "intent://amazing-duckanoo-88250c.netlify.app/#Intent;scheme=http;package=com.android.chrome;end";
        }
      console.log("quack", userAgent)
    }
    if (document.referrer.includes("whatsapp.com")) {
        // Perguntar ao usuário se deseja abrir no navegador Chrome nativo
        const confirmRedirect = confirm("Deseja abrir esta página no navegador Chrome nativo do Android?");
        if (confirmRedirect) {
            // Redirecionar para o navegador nativo do Android (Google Chrome)
            window.location.href = "intent://amazing-duckanoo-88250c.netlify.app#Intent;scheme=http;package=com.android.chrome;end";
        }
    }
  });

  return (
    <>
      <Banner />
      {children}
    </>
  );
}
