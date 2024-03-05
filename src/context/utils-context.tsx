"use client";
import React, { createContext, useState } from "react";
import { Product } from "@/interfaces";
interface defaultValue {
  products: ShopCartProduct[] | null;
  setProducts: React.Dispatch<React.SetStateAction<ShopCartProduct[] | null>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ShopCartProduct {
  product: Product;
  count: number;
}
const defaultValue: defaultValue = {
  products: null,
  setProducts: () => [{}],
  isOpen: false,
  setIsOpen: () => {},
};

const ShoppinCartContext = createContext(defaultValue);

export function ShoppinCartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] = useState<ShopCartProduct[] | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <ShoppinCartContext.Provider
      value={{ products, setProducts, isOpen, setIsOpen }}
    >
      {children}
    </ShoppinCartContext.Provider>
  );
}

export default ShoppinCartContext;
