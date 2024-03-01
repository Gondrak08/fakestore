export default function Offerings() {
  return (
    <section className="w-full h-full flex flex-col items-center gap-5 my-3">
      <div className="lg:w-[36em] flex flex-col items-center justify-center mx-auto">
        <h4 className="text-blackStore text-[18px] font-bold uppercase">
          só a piccadilly tem
        </h4>
        <p className="text-[14px] text-center text-blackStore font-light">
          Com tecnologias exclusivas, produzimos calçados que criam soluções que
          unem conforto, beleza e segurança
        </p>
      </div>
      <div className="container grid  grid-cols-1 lg:grid-cols-3 gap-2 text-white h-full mx-auto p-4 lg:p-0">
        <div className="bg-pinkStore flex justify-center items-center py-2 text-start rounded-lg bg-[url('/background.svg')] ">
          <div>
            <h5 className="text-[18px]  uppercase font-bold">
              calce <br /> perfeito
            </h5>
            <span className="underline cursor-pointer underline-offset-2">
              saiba mais
            </span>
          </div>
        </div>
        <div className="bg-pinkStore flex justify-center items-center py-2 text-start rounded-lg">
          <div>
            <h5 className="text-[18px]  uppercase font-bold">tecnologias </h5>
            <span className="underline cursor-pointer underline-offset-2">
              saiba mais
            </span>
          </div>
        </div>
        <div className="bg-pinkStore flex justify-center  items-center  py-2 text-start rounded-lg">
          <div>
            <h5 className="text-[18px]  uppercase font-bold">
              características <br /> especiais
            </h5>
            <span className=" underline cursor-pointer underline-offset-2">
              saiba mais
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
