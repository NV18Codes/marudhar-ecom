import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  description: string;
  price: number;
  weight: string;
  image: string;
}

const ProductCard = ({ name, category, description, price, weight, image }: ProductCardProps) => {
  return (
    <Card className="card-hover overflow-hidden border-border shadow-[var(--shadow-card)]">
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-background to-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <div className="text-xs font-medium text-primary mb-2">{category}</div>
        <h3 className="text-xl font-heading font-semibold mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-2xl font-bold text-primary">₹{price}</span>
            <span className="text-sm text-muted-foreground ml-2">{weight}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full btn-hero">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
