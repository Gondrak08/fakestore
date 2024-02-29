import Image from "next/image";
import {
  IoSearch,
  IoPersonOutline,
  IoHeartOutline,
  IoBagOutline,
} from "react-icons/io5";

export default function Navbar() {
  return (
    <>
      <Navalert />
      <section className=" h-fit w-full flex items-center justify-center border-b-[1px] border-slate-100 p-4">
        <nav className="container flex justify-between items-center  ">
          <div className="responsive flex items-center gap-12">
            <Image
              alt="logo"
              src="/logo.svg"
              width={"100"}
              height={"100"}
              className=" object-fit"
            />
            <ul className="flex items-center gap-2">
              <li className="hover:underline underline-offset-2  cursor-pointer">
                Lançamentos
              </li>
              <li className="hover:underline underline-offset-2  cursor-pointer">
                Exclusivos
              </li>
              <li className="hover:underline underline-offset-2  cursor-pointer">
                Collabs
              </li>
              <li className="hover:underline underline-offset-2  cursor-pointer">
                Calçados
              </li>
              <li className="hover:underline underline-offset-2  cursor-pointer">
                Acessórios
              </li>
              <li className="hover:underline underline-offset-2  cursor-pointer font-bold">
                Outlet
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative w-fit flex items-center border-[1px] border-black rounded-md px-5 py-2">
              <input
                className="w-fit h-full  bg-transparent rounded-md placeholder:text-black text-black"
                placeholder="O que você está procurando ? "
              />
              <IoSearch className="absolute right-2" />
            </div>
            <IoPersonOutline className="cursor-pointer w-5 h-5" />
            <IoHeartOutline className="cursor-pointer w-5 h-5" />
            <IoBagOutline className="cursor-pointer w-5 h-5" />
          </div>
        </nav>
      </section>
    </>
  );
}

const Navalert = () => {
  return (
    <section className="w-full flex items-center justify-center py-2 bg-pinkStore">
      <div className="container flex items-center justify-center gap-2">
        <span>DEMO WEBSITE* powerd by @vitorAlecrim</span>
        <a href="https://flat-co.netlify.app/">Confira mais</a>
      </div>
    </section>
  );
};
