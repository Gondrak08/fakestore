import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import ProductsDisplay from "@/components/ProductsDisplay";
import Contact from "@/components/Contact";
import Offerings from "@/components/Offerings";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col gap-12   ">
      <header className="w-full h-fit">
        <Navbar />
        <Banner />
      </header>
      <ProductsDisplay />
      <Contact />
      <Offerings />
      <Footer />
    </main>
  );
}
