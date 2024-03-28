'use client'
import {useEffect} from 'react';
import Banner from "@/components/Banner";
export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(()=>{
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

  })
  return (
    <>
      <Banner />
      {children}
    </>
  );
}
