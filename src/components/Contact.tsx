export default function Contact() {
  return (
    <section className="bg-[url('/background.svg')] bg-contain  h-fit w-full flex flex-wrap items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5  lg:w-[50%]  py-5 md:py-7">
        <div
          id="contact-box"
          className="flex flex-col items-center gap-3 w-full md:w-[25em] px-5"
        >
          <h3 className="uppercase text-[14px] md:text-[18px] text-blackStore font-bold">
            receba nossas notícias
          </h3>
          <span className="text-[14px] text-blackStore mb-2 font-light">
            fique por dentro de todas as ofertas e novidades exclusivas!
          </span>
          <form className="flex flex-col items-center gap-3 w-full">
            <input
              type="tel"
              name="telefone"
              placeholder="Digite seu telefone"
              className="text-blackStore w-full border-[1px]  border-black rounded-lg py-1 px-2 placeholder:px-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Digite o seu email"
              className="text-blackStore w-full border-[1px]  border-black rounded-lg py-1 px-2 placeholder:px-2"
            />
            <input
              type="date"
              name="date"
              className="text-blackStore w-full border-[1px]  border-black rounded-lg py-1 px-2 placeholder:px-2 "
            />
            <button className="rounded-lg text-center text-white uppercase w-full py-2 bg-pinkStore">
              quero receber
            </button>
          </form>
        </div>
        <div className="hidden  h-full text-center lg:flex items-center justify-center">
          <h3 className="text-blackStore text-[18px] font-bold">
            REDES SOCIAIS
          </h3>
        </div>
      </div>
    </section>
  );
}
