import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";

const ProductCard = ({ id, name, category, description, price, weight, image }) => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddToCart = () => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please sign in to add items to your cart.",
        variant: "destructive",
      });
      navigate("/signin");
      return;
    }
    addToCart({ id, name, category, description, price, weight, image });
    toast({
      title: "Added to Cart!",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <>
      <Card className="card-hover overflow-hidden border-border shadow-lg hover:shadow-2xl cursor-pointer group" onClick={() => setIsDialogOpen(true)}>
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-white to-gray-50 p-4 flex items-center justify-center relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardContent className="p-6">
        <div className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">{category.replace(" Range", "")}</div>
        <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{description}</p>
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-2xl font-bold text-primary">₹{price}</span>
            <span className="text-sm text-muted-foreground ml-2">{weight}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full btn-hero group-hover:shadow-xl" 
          size="lg"
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart();
          }}
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>

    {/* Product Detail Dialog */}
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-3xl font-heading font-bold text-gradient">{name}</DialogTitle>
          <DialogDescription className="inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full w-fit">
            {category}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-50 p-8 flex items-center justify-center shadow-inner border border-gray-100">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain animate-scale-in"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full"></span>
                Description
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base mb-8">
                {description}
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary">
                  <span className="text-sm font-semibold">Price</span>
                  <span className="text-3xl font-bold text-primary">₹{price}</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-secondary/5 to-transparent border-l-4 border-secondary">
                  <span className="text-sm font-semibold">Weight</span>
                  <span className="text-xl font-bold text-secondary">{weight}</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-accent/5 to-transparent border-l-4 border-accent">
                  <span className="text-sm font-semibold">Category</span>
                  <span className="text-sm font-medium">{category}</span>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button 
              className="w-full btn-hero shadow-xl" 
              size="lg"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default ProductCard;

