import Image from "next/image";
import Contact from "@/components/Contact";
import { Product } from "@/interfaces";
import api from "@/api/api.json";
import StarRating from "@/components/StarRating";
import AddProductBTN from "@/components/AddProduct";
type Params = { id: number };

export default function ProductPage({ params }: { params: Params }) {
  const products: Product[] = api;
  const product: Product[] = Object.values(products).filter(
    (product: Product) => product.id == params.id,
  );

  return (
    <section className="w-full flex flex-col gap-12 py-4">
      <div className="container mx-auto flex flex-col gap-5 px-2 lg:px-0 ">
        <h3 className="font-bold text-sm text-blackStore ">
          * {product[0]?.title}
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full h-full md:h-[30em]">
          <div className="w-full h-[10em] md:h-full relative">
            <Image
              alt="product image"
              src={product[0]?.image}
              width={500}
              height={500}
              className="w-full h-full absolute  bg-center bg-no-repeat object-contain"
            />
          </div>
          <div className="w-full h-full flex flex-col gap-5 px-3">
            <div className="w-full flex-col">
              <h1 className=" text-md md:text-lg lg:text-2xl text-blackStore font-bold">
                {product[0]?.title}
              </h1>
              <div className="flex items-center">
                <StarRating rating={product[0]?.rating} />
                <span className="text-sm text-pinkStore">
                  {" "}
                  / {product[0]?.rating.count}+
                </span>
              </div>
              <span className="text-md font-bold text-blackStore">
                R$ {product[0]?.price}
              </span>
            </div>
            <AddProductBTN product={product[0]} />
            <div>
              <h2 className="text-md lg:text-xl text-blackStore font-bold">
                Descrição
              </h2>
              <p className="text-sm md:text-md">{product[0]?.description}</p>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  );
}
