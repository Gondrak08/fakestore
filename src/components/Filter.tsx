"use client";
import { useState } from "react";
import { IoOptions } from "react-icons/io5";
import Api from "@/api/api.json";
import { Product } from "@/interfaces";

export default function ProductsFilter({
  setFilterType,
}: {
  setFilterType: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>();
  const products: Product[] = Api;
  const categories: string[] = Object.values(products).map(
    (product: Product, index: number) => product.category,
  );
  const uniqueCategories: string[] = categories.filter(
    (category, index, array) => {
      return array.indexOf(category) === index;
    },
  );
  return (
    <aside className="hidden lg:flex flex-col w-[20em] border-[1px] rounded-lg p-3">
      <div className="flex flex-col  gap-2">
        <div className="w-full flex items-center gap-2">
          <IoOptions />
          <span>Filtro</span>
        </div>
        <span className="w-full border-[1px] border-gray-lightGrayStore " />
        <ul className="flex flex-col h-fit gap-1">
          <li className="text-[16px] text-black font-light my-2">Categoria</li>
          {uniqueCategories.map((category: string, index: number) => (
            <li
              key={index}
              className="flex items-center gap-2 text-[14px] text-blackStore "
            >
              <input
                type="radio"
                id="category-btn"
                name={category}
                className="h-3 w-3"
                checked={selectedCategory === category}
                onClick={() => {
                  if (selectedCategory === category) {
                    setSelectedCategory(null);
                    setFilterType(null);
                  } else {
                    setSelectedCategory(category);
                    setFilterType(category);
                  }
                }}
              />{" "}
              {
                category.charAt(0).toUpperCase() + category.slice(1) // to Uppercase the first letter of the frase
              }
            </li>
          ))}
        </ul>
        <span className="w-full border-[1px] border-gray-lightGrayStore " />
      </div>
    </aside>
  );
}
