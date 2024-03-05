"use client";
import { useContext } from "react";
import ShoppinCartContext, { ShopCartProduct } from "@/context/utils-context";
import { Product } from "@/interfaces";
export default function AddProductBTN({ product }: { product: Product }) {
  const context = useContext(ShoppinCartContext);
  const addProducts = (e: any) => {
    e.preventDefault();
    const { products, setProducts } = context;

    if (products === null) {
      setProducts([{ product, count: 1 }]);
    } else {
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
      } else {
        setProducts([...products, { product, count: 1 }]);
      }
    }
  };
  return (
    <div className="w-full">
      <button
        className="w-full bg-greenStore border-greenStore rounded-md py-[0.25em] px-[0.32em] text-white uppercase font-light"
        onClick={(e: any) => {
          addProducts(e);
        }}
      >
        Adicionar
      </button>
    </div>
  );
}
