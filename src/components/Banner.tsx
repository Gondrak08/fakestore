import Image from "next/image";

export default function Banner() {
  return (
    <section className="container mx-auto  h-full flex flex-col gap-2 py-5 p-4">
      <div className="w-full flex gap-2 items-center text-[14px]">
        <span className="flex">Principal </span>
        <h2 className="font-bold">° PRIMAVERA VERÃO 23/24</h2>
      </div>
      <div className="relative w-full h-[17em]">
        <Image
          alt="banner"
          src="/banner.png"
          width={"1000"}
          height={"1000"}
          className="absolute top-0 right-0 left-0 bottom-0 w-full h-full  aspect-auto object-contain md:object-fill "
        />
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-2xl text-gray-800">
          PRIMAVERA VERÃO 23/24
        </h1>
        <span>
          A Coleção Primavera Verão 23/24 está pronta para te acompanhar em
          todos os momentos. São calçados com tendências nostálgicas e cores
          mais intensas que vão iluminar seus looks e deixar cada passo
          autêntico e charmoso.
        </span>
      </div>
    </section>
  );
}
