import ProductsDisplay from "@/components/ProductsDisplay";
import Contact from "@/components/Contact";
import Offerings from "@/components/Offerings";

export default function Home() {
  return (
    <section className="flex min-h-screen w-full flex-col gap-12">
      <ProductsDisplay />
      <Contact />
      <Offerings />
    </section>
  );
}
