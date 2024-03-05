"use client";
import { useContext, useState, useEffect } from "react";
import Image from "next/image";
import ShoppinCartContext, { ShopCartProduct } from "@/context/utils-context";
import {
  IoCloseSharp,
  IoCloseCircleOutline,
  IoAddCircle,
} from "react-icons/io5";
import { HiMinusCircle } from "react-icons/hi2";
import { Product } from "@/interfaces";

export default function ShoppingCart() {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const context = useContext(ShoppinCartContext);
  const { isOpen, setIsOpen, products, setProducts } = context;

  const removeProductFromcart = (product: Product) => {
    if(products!=null){
    const filteredProduct = Object.values(products).filter(
      (prevProduct: ShopCartProduct, index: number) =>
        prevProduct.product.id !== product.id,
    );
    setProducts([...filteredProduct]);
    }
  };

  const increaseProduct=(product:Product)=>{
    if(products!=null){
       const productExists = products.some(
        (prevProduct: ShopCartProduct) => prevProduct.product.id === product.id,
      );
      if (productExists) {
        const updatedProducts = products.map((prevProduct: ShopCartProduct) => {
          if (prevProduct.product.id === product.id) {
            return { ...prevProduct, count: prevProduct.count + 1 };
          }
          return prevProduct;
        });
        setProducts(updatedProducts);
      }
    }
  };

  const decreaseProduct=(product:Product)=>{
    if(products!=null){
       const productExists = products.some(
        (prevProduct: ShopCartProduct) => prevProduct.product.id === product.id,
      );
      if (productExists) {
        const updatedProducts = products.map((prevProduct: ShopCartProduct) => {
          if (prevProduct.product.id === product.id && prevProduct.count  > 1 ) {
            return { ...prevProduct, count: prevProduct.count - 1 };
          }
          return prevProduct;
        });
        setProducts(updatedProducts);
      }
    }
  };

  const getAllPrice = (products:ShopCartProduct[] | null)=>{
    if(products != null){ 
      const allPrice:number[] = [];     
      for(let i =0; i < products.length; i++){
        const totalPrice:number = products[i].product.price * products[i].count;
      allPrice.push(totalPrice)
    }
    const total:number = parseFloat(allPrice.reduce((a,b)=> a + b).toFixed(2)) // to make a round number.
    setTotalPrice(total)
    }
  }

  useEffect(()=> getAllPrice(products),[products]);

  return (
    <section
      className={`${
        isOpen ? "visible" : "hidden"
      } absolute top-0 left-0  w-full h-screen  z-50`}
    >
      <div
        className="hidden md:flex absolute left-0 top-0 w-full h-full"
        onClick={() => setIsOpen(false)}
      />
      <aside className="absolute right-0 top-0 h-screen w-[25em] z-50 bg-white flex flex-col ">
        <div className="w-full flex justify-between items-center px-5 py-3">
          <IoCloseSharp
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
          <h1 className="w-fit text-md text-black font-bold">Carrinho</h1>
        </div>
        <div className="w-full p-2 flex items-center justify-center bg-greenStore">
          <span className="text-sm font-bold">você ganhou frete grátis!</span>
        </div>
        {products != null && (
          <div className="p-5 flex flex-col gap-5 overflow-y-auto ">
            {Object.values(products).map(
              (cartProduct: ShopCartProduct, index: number) => {
                const { product, count } = cartProduct;
                return (
                  <div
                    key={index}
                    className="w-full h-fit p-3 flex flex-col gap-3 bg-white rounded-xl drop-shadow-lg"
                  >
                    <div className="relative flex items-start gap-2">
                      <div className="relative w-[7em] h-[5em]">
                        <Image
                          alt="product image"
                          src={product.image}
                          width={"500"}
                          height={"500"}
                          className="absolute object-contain top-0 right-0 left-0 bottom-0 w-full h-full"
                        />
                      </div>
                      <div>
                        <h2 className="text-md text-blackStore font-bold">
                          {product.title}
                        </h2>
                      </div>
                      <IoCloseCircleOutline
                        className="text-red-500 text-lg absolute right-1 top-0"
                        onClick={() => removeProductFromcart(product)}
                      />
                    </div>

                    <div className="w-full flex gap-3 px-2">
                      <div className="flex gap-2 items-center ">
                        <HiMinusCircle className="text-2xl cursor-pointer" onClick={()=>{decreaseProduct(product)}} />
                        <span>{count}</span>
                        <IoAddCircle className="text-2xl cursor-pointer" onClick={()=>{increaseProduct(product)}} />
                      </div>
                      <div>
                        <span>R${product.price * count}</span>
                      </div>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        )}
        <div className="mt-auto py-5">
          <div className="w-full bg-slate-100  px-5 py-3 flex flex-col gap-3">
            <span className="text-sm text-blackStore font-bold">
              Cupom de desconto
            </span>
            <div className="w-full flex items-center gap-12 pr-3">
              <input
                type="text"
                name="cupom"
                placeholder="Código"
                className="border rounded-lg px-2 py-1 w-full"
              />
              <button className="text-center py-2 px-4 bg-blackStore text-white text-sm font-bold rounded-xl">
                Adicionar
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5 px-5 py-3">
            <div className="w-full flex flex-col gap-3 bg-slate-100 rounded-xl p-5">
              <div className="w-full flex justify-between">
                <span>Subtotal</span>
                <span>R$ {totalPrice}</span>
              </div>

              <div className="border border-dashed border-black " />

              <div className="w-full flex justify-between">
                <span className="font-bold text-md text-blackStore">Total</span>
                <span>R$ {totalPrice}</span>
              </div>
            </div>
            <button className="w-full bg-greenStore flex items-center justify-center py-2 rounded-xl text-white text-lg uppercase font-bold">
              finalizar compra
            </button>
          </div>
        </div>
      </aside>
    </section>
  );
}
