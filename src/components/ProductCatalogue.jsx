import { useState } from "react";
import ProductCard from "./ProductCard";
import { products, categories } from "@/data/products";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductCatalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState("Khatta Meetha Range");

  const filteredProducts = products.filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
            Our Premium Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our exquisite range of traditional Indian sweets, mouth fresheners, and delicacies crafted with love and the finest ingredients.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 animate-slide-up">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full max-w-6xl">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.replace(" Range", "")}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalogue;

