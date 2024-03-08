export default function Offerings() {
  return (
    <section className="w-full h-full flex flex-col items-center gap-5 my-3 py-12">
      <div className="lg:w-[36em] flex flex-col items-center justify-center mx-auto">
        <h4 className="text-blackStore text-[18px] font-bold uppercase">
          só a <span className="text-pinkStore">vanpick</span> tem
        </h4>
        <p className="text-[14px] text-center text-blackStore font-light">
          As melhores tecnologias exclusivas, para criam soluções que unem
          conforto, beleza e segurança
        </p>
      </div>
      <div className="container grid  grid-cols-1 lg:grid-cols-3 gap-2 text-white h-full mx-auto p-4 lg:p-0">
        <div className=" flex justify-center items-center  text-start rounded-lg bg-[url('/news.webp')] bg-center ">
          <div className="flex justify-center items-center text-start py-2 z-30  bg-gray-700 bg-opacity-50 h-full w-full rounded-lg">
            <div className="z-30">
              <h5 className="text-[18px] drop-shadow-xl uppercase font-bold ">
                Novidades
              </h5>
              <span className=" font-semibold drop-shadow-xl underline cursor-pointer underline-offset-2">
                saiba mais
              </span>
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center  text-start rounded-lg bg-[url('/tec.webp')]">
          <div className="flex justify-center items-center text-start py-2 z-30  bg-gray-700 bg-opacity-50 h-full w-full rounded-lg">
            <div className="z-30">
              <h5 className="text-[18px]  uppercase font-bold drop-shadow-xl">
                Eletrônicos & <br /> Tecnologia{" "}
              </h5>
              <span className="font-semibold drop-shadow-xl underline cursor-pointer underline-offset-2">
                saiba mais
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center  items-center   text-start rounded-lg bg-[url('/roup.jpg')]">
          <div className="flex justify-center items-center text-start py-2 z-30  bg-gray-800 bg-opacity-50 h-full w-full rounded-lg">
            <div>
              <h5 className="text-[18px]  uppercase font-bold drop-shadow-xl">
                Roupas & <br /> Acessórios
              </h5>
              <span className="font-semibold drop-shadow-xl underline cursor-pointer underline-offset-2">
                saiba mais
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
