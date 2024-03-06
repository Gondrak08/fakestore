"use client";
import { useState, useEffect } from "react";
import Link from 'next/link'
import Image from "next/image";
import Api from "@/api/api.json";
import { Product, Rating } from "@/interfaces";
import RateProduct from "@/components/ReateProduct";
import ProductsFilter from "@/components/Filter";
import { FaArrowUpShortWide } from "react-icons/fa6";

export default function ProductsDisplay() {
  const products: Product[] = Api;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filteredList, setFilteredList] = useState<Product[] | null>(null);
  const [filterType, setFilterType] = useState<string | null>(null)

   const getSortedList=(filterType:string | null)=>{
    switch(filterType){
      case'rate':
        const sortByRate =  [...products].sort((a,b)=> b.rating.rate - a.rating.rate)
        setFilteredList(sortByRate)
        return null
      case'byDate':
        const sortByDate = [...products].sort(
            (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt),
          );
        setFilteredList(sortByDate)
        return null
      case'higherPrice':
        const sortByHighPrice =  [...products].sort((a,b)=> b.price - a.price)
        setFilteredList(sortByHighPrice)
        return null
      case'lowerPrice':
        const sortByLowPrice =  [...products].sort((a,b)=> a.price - b.price)
        setFilteredList(sortByLowPrice)
        return null
      case'AtoZ':
        const sortedByAtoZ = [...products].sort((a, b)=>{
          const firstWordA = a.title.split(' ')[0].toLowerCase();
          const firstWordB = b.title.split(' ')[0].toLowerCase();
          return firstWordA.localeCompare(firstWordB)
        })
        setFilteredList(sortedByAtoZ)
        return null
      case'ZtoA':
        const sortedByZtoA = [...products].sort((a, b)=>{
          const firstWordA = a.title.split(' ')[0].toLowerCase();
          const firstWordB = b.title.split(' ')[0].toLowerCase();
          return firstWordB.localeCompare(firstWordA)
        })
        setFilteredList(sortedByZtoA)
        return null
      case "men's clothing" :
        const categoryMen = [...products].filter((product:Product, index:number)=> product.category === filterType);
        setFilteredList(categoryMen)
        return null
      case "jewelery" :
        const categoryJewlery = [...products].filter((product:Product, index:number)=> product.category === filterType);
        setFilteredList(categoryJewlery)
      return null
      case "electronics" :
        const categoryEletronics = [...products].filter((product:Product, index:number)=> product.category === filterType);
        setFilteredList(categoryEletronics)
      return null
      case "women's clothing" :
        const categoryWomen = [...products].filter((product:Product, index:number)=> product.category === filterType);
        setFilteredList(categoryWomen)
      return null
      case null:
        setFilteredList(products);
        return null
    }
  }

  useEffect(()=>{getSortedList(filterType)},[filterType]);
  useEffect(()=>{if(filteredList == null) setFilteredList(products)},[filteredList, products]);


  return (
    <section className="container flex gap-3 mx-auto w-full">

      <ProductsFilter setFilterType={setFilterType} />

      <div id="content" className="flex flex-col gap-2 w-full mx-auto">
        <div className="relative w-[16em] px-2 ">
          <button
            id="btn-ordener"
            className="w-full flex gap-2 items-center text-blackStore px-5 py-2 border-[1px] rounded-lg "
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaArrowUpShortWide className="text-[18px]" />
            <span className="text-[16px]  font-light">Ordernar</span>
          </button>
          {isOpen ? <OrderDisplay setFilterType={setFilterType} /> : null}
        </div>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2  w-full mx-auto">
          { filteredList && Object.values(filteredList ).map((product: Product, index: number) => {
            // console.log("product,",product.id)
            return (
              <Link href={`product/${product.id}`}
                onClick={()=>{console.log("link was clicked", product.id)}}
                key={product.id}
                id="card"
                className=" relative flex flex-col gap-3 h-full border-[1px]  p-3 cursor-pointer"
              >
                <div
                  id="card-image"
                  className=" h-[15em] w-full relative overflow-hidden "
                >
                  <Image
                    alt="product image"
                    src={product.image}
                    width={"500"}
                    height={"500"}
                    className="bg-cover bg-center w-full h-full overflow-hidden"
                  />

                  <RateProduct rate={product.rating} />
                </div>
                <div className="flex flex-col gap-2 h-[30%] ">
                  <h4 className="font-bold text-[14px] text-[#353a42] ">
                    {product.title}
                  </h4>
                  <span className="text-[13px] font-bold ">
                    R$ {""} {product.price}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const OrderDisplay = ({setFilterType}:{setFilterType: React.Dispatch<React.SetStateAction<string | null>>}) => {
  const [selectedType, setSelectedType] = useState<string>('');
  const orders = [
    {type:'rate', text:'Relevância'},
    {type:'byDate', text:'Mais recentes'},
    {type:'higherPrice', text:'Maio preço'},
    {type:'lowerPrice', text:'Menor preço'},
    {type:'AtoZ', text:'De A a Z'},
    {type:'ZtoA', text:'De Z a A'},
  ];

  const getOrder=({e,type, text}:any)=>{
    e.preventDefault();
    setFilterType(type )
    setSelectedType(type);
  };

  return (
    <div className="w-[15em] absolute top-12 z-30 bg-white border drop-shadow-2xl ">
      <ul className="flex flex-col   ">
        {Object.values(orders).map((order:{ type: string, text: string }, index: number) => (
          <li
            key={index}
            className={`py-2 px-4 cursor-pointer font-light text-blackStore text-[14px] hover:bg-gray-200 ${selectedType  === order.type ? 'bg-pinkStore':''}`}
            onClick={(e:any)=> getOrder({e,...order})}
          >
            {order.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
