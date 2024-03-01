import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" w-full h-full bg-[#f7f7f7] ">
      <section className="container mx-auto grid gird-cols-1 lg:grid-cols-5 py-12">
        <div className="hidden lg:flex flex-col gap-2">
          <span className="text-[18px] text-blackStore font-bold">
            Minha Conta
          </span>
          <ul className="text-[14px] font-light">
            {["Entrar", "Meus Pedidos", "Favoritos"].map(
              (text: string, index: number) => (
                <li
                  className="cursor-pointer w-fit text-[14px] text-blackStore font-light"
                  key={index}
                >
                  {text}
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="hidden lg:flex flex-col gap-2">
          <span className="text-[18px] text-blackStore font-bold">
            Institucional
          </span>
          <ul>
            {[
              "Conforto Encoraja",
              "Company",
              "Sustentabilidade",
              "Blog",
              "Trabalhe Conosco",
              "Seja um Franqueado",
              "Seja um Fornecedor",
              "Revista",
              "Canal de Ética",
            ].map((text: string, index: number) => (
              <li
                className="cursor-pointer w-fit text-[14px] text-blackStore font-light"
                key={index}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex flex-col gap-2">
          <span className="text-[18px] text-blackStore font-bold">
            Ajuda e suporte
          </span>
          <ul>
            {[
              "Como comprar",
              "Fale conosco",
              "Troca e develução",
              "Entrega e Pagamentos",
              "Perguntas Frequentes",
              "Onde Encontrar",
              "Política de Trocas e Devoluções",
            ].map((text: string, index: number) => (
              <li
                className="cursor-pointer w-fit text-[14px] text-blackStore font-light"
                key={index}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex flex-col gap-2">
          <span className="text-[18px] text-blackStore font-bold">
            Políticas e termos
          </span>
          <ul>
            {[
              "CASHBACK",
              "Black Friday",
              "Termos de uso",
              "Política de Privacidade",
            ].map((text: string, index: number) => (
              <li
                className="cursor-pointer w-fit text-[14px] text-blackStore font-light"
                key={index}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex flex-col gap-5 items-center">
          <span className="cursor-pointer text-[18px] text-blackStore font-bold">
            Certificados & Selos
          </span>
          <div className="flex gap-3  items-end ">
            {["/vtex.png", "/Footer.png", "/logo2.png"].map(
              (image: string, index: number) => (
                <div
                  key={index}
                  className="relative flex lg:flex-col lg:justify-center w-12 h-12"
                >
                  <Image
                    alt="logo"
                    src={image}
                    width={"100"}
                    height={"100"}
                    className=" bg-center  bg-contain lg:bg-cover "
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </section>
      <section className="w-full bg-[#353a42] text-center py-1">
          <span className="text-[14px] font-light text-white">Demo Website 2024 powered by @VitorAlecrim</span>
      </section>
    </footer>
  );
}
