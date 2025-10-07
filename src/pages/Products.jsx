import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCatalogue from "@/components/ProductCatalogue";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProductCatalogue />
      </main>
      <Footer />
    </div>
  );
};

export default Products;

