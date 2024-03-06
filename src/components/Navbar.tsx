"use client";
import { useState, useContext } from "react";
import Link from 'next/link'
import ShoppinCartContext from '@/context/utils-context'
import Image from "next/image";
import {
  IoSearch,
  IoPersonOutline,
  IoHeartOutline,
  IoBagOutline,
  IoReorderThreeOutline,
  IoCloseOutline,
} from "react-icons/io5";

export default function Navbar() {
  const context = useContext(ShoppinCartContext)
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openShoppinCart=()=>{
    context.setIsOpen(!context.isOpen);
  }
  return (
    <>
      {isOpen && <MobileNavbar setIsOpen={setIsOpen} />}
      <Navalert />
      <section className=" h-fit w-full flex items-center justify-center border-b-[1px] border-slate-100 p-4">
        <nav className="container flex flex-col md:flex-row   lg:justify-between lg:items-center gap-2 lg:gap-0">
          <div className="responsive flex items-center gap-12">
            <div className="w-full h-fit flex justify-between items-center gap-6 pr-2">
              <IoReorderThreeOutline
                className="w-8 h-full visible lg:hidden"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              />
              <Link href="/" className="w-[15em] h-full pl-9">
                <Image
                  alt="logo"
                  src="/vanpicklogo.svg"
                  width={"100"}
                  height={"100"}
                  className="w-full h-full  object-fit"
                />
              </Link>
              <div className="flex gap-2  ">
                <IoPersonOutline className="lg:hidden visible cursor-pointer w-6 h-full" />
                <div className="w-fit relative">
                <IoBagOutline className="lg:hidden visible cursor-pointer w-6 h-full" onClick={()=>{openShoppinCart()}}/>
                  <span className="lg:hidden flex justify-center items-center absolute bottom-2 left-4 w-[1.5em] h-[1.5em] p-[.7em] rounded-full  bg-pinkStore text-white font-bold text-[11px]">{context.products?.length ?? 0}</span>
                </div>
              </div>
            </div>

            <ul className="hidden md:flex items-center gap-2">
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

          <div className="flex items-center justify-start  gap-2 ">
            <div className="relative lg:w-fit flex items-center border-[1px] border-black rounded-md px-5 py-2">
              <input
                className="md:w-full lg:w-[20em] h-full  bg-transparent rounded-md placeholder:text-black text-black"
                placeholder="O que você está procurando ? "
              />
              <IoSearch className="absolute right-2" />
            </div>
            <IoPersonOutline className="hidden lg:flex text-black cursor-pointer w-5 h-5" />
            <IoHeartOutline className="hidden lg:flex cursor-pointer w-5 h-5" />
            <div className="w-fit relative">
              <IoBagOutline className="hidden lg:flex cursor-pointer w-5 h-5" 
              onClick={()=>{openShoppinCart()}}/>
              <span className="hidden lg:flex justify-center items-center absolute bottom-2 left-4 w-[1.5em] h-[1.5em] p-[.7em] rounded-full  bg-pinkStore text-white font-bold text-[11px]">{context.products?.length ?? 0}</span>
            </div>
           </div>
        </nav>
      </section>
    </>
  );
}

const Navalert = () => {
  return (
    <section className="w-full flex items-center justify-center py-2 bg-pinkStore">
      <div className="text-[12px] container flex items-center justify-center gap-2">
        <span>DEMO WEBSITE* </span>
        <a href="https://flat-co.netlify.app/" className=" text-blue-900 underline underline-offset-2 text-md font-light" >Confira mais</a>
      </div>
    </section>
  );
};

const MobileNavbar = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <section id="mobileNavbar" className="w-full h-screen absolute flex top-0 left-0 bottom-0  z-30 ">
      <aside className="h-full w-full flex flex-col gap-6 bg-white z-50  p-3">
        <div className="flex items-center gap-16">
          <IoCloseOutline
            className="w-8 h-full"
            onClick={() => setIsOpen(false)}
          />
          <div className="">
            <Image
              alt="logo"
              src="/vanpicklogo.svg"
              width={"100"}
              height={"100"}
              className="w-full h-full  object-fit"
            />
          </div>
        </div>

        <ul className="flex flex-col gap-2 px-2 text-[18px]">
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

        <ul className="flex flex-col gap-2 px-2 text-[18px]">
          <li className="flex items-center gap-2 py-2 border-t-[1px]">
            <IoHeartOutline className="cursor-pointer w-5 h-5" />
            <span>Favoritos</span>
          </li>
          <li className="flex items-center gap-2 border-t-[1px] py-2">
            <IoPersonOutline className="cursor-pointer w-5 h-5" />
            <span>Minha Conta</span>
          </li>
        </ul>
      </aside>
      <div className="w-[5em]" onClick={()=>{setIsOpen(false)}} />
      
    </section>
  );
};
