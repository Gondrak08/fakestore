"use client";
import { useContext, useState, useEffect } from "react";
import ShoppinCartContext, { ShopCartProduct } from "@/context/utils-context";
import { Product } from "@/interfaces";
import ClipLoader from "react-spinners/ClipLoader";

export default function AddProductBTN({ product }: { product: Product }) {
  const context = useContext(ShoppinCartContext);
  const [isProductAdded, setIsProductAdded] = useState<boolean>(false);

  const addProducts = () => {
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
    setIsProductAdded(false);
  };

  if (isProductAdded) {
    setTimeout(() => {
      addProducts();
    }, 2000);
  }

  return (
    <div className="w-full">
      <button
        className="w-full bg-greenStore border-greenStore rounded-md py-[0.25em] px-[0.32em] text-white uppercase font-light"
        onClick={() => {
          setIsProductAdded(true);
        }}
      >
        {isProductAdded ? (
          <ClipLoader
            color="greenStore"
            aria-label="Loading Spinner"
            data-testid="loader"
            size={15}
          />
        ) : (
          "Adicionar"
        )}
      </button>
    </div>
  );
}
