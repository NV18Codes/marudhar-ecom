import { useState } from "react";
import ProductCard from "./ProductCard";
import { products, categories } from "@/data/products";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductCatalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState("Khatta Meetha Range");

  const filteredProducts = products.filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4 text-gradient">
            Our Premium Collection
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Discover our exquisite range of traditional Indian sweets, mouth fresheners, and delicacies crafted with love and the finest ingredients.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8 sm:mb-10 lg:mb-12 animate-slide-up">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full max-w-7xl">
            <TabsList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 w-full h-auto p-1">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2 px-3 sm:py-3 sm:px-4 whitespace-nowrap"
                >
                  <span className="hidden sm:inline">{category.replace(" Range", "")}</span>
                  <span className="sm:hidden">{category.split(" ")[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-muted-foreground text-base sm:text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalogue;

