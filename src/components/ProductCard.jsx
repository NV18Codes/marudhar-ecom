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
      <Card className="card-hover overflow-hidden border-border shadow-lg hover:shadow-2xl cursor-pointer group h-full flex flex-col" onClick={() => setIsDialogOpen(true)}>
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-white to-gray-50 p-3 sm:p-4 flex items-center justify-center relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
        <div className="inline-block px-2 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-2 sm:mb-3 w-fit">{category.replace(" Range", "")}</div>
        <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">{name}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2 leading-relaxed flex-1">{description}</p>
        <div className="flex items-baseline justify-between mt-auto">
          <div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">₹{price}</span>
            <span className="text-xs sm:text-sm text-muted-foreground ml-1 sm:ml-2">{weight}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 sm:p-6 pt-0">
        <Button 
          className="w-full btn-hero group-hover:shadow-xl text-sm sm:text-base" 
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart();
          }}
        >
          <ShoppingCart className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>

    {/* Product Detail Dialog */}
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto mx-4 sm:mx-0">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-gradient">{name}</DialogTitle>
          <DialogDescription className="inline-block px-2 py-1 text-xs sm:text-sm font-semibold text-primary bg-primary/10 rounded-full w-fit">
            {category}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-6">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 lg:p-8 flex items-center justify-center shadow-inner border border-gray-100">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain animate-scale-in"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-bold mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-1 h-4 sm:h-6 bg-primary rounded-full"></span>
                Description
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4 sm:mb-6 lg:mb-8">
                {description}
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between p-3 sm:p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary">
                  <span className="text-xs sm:text-sm font-semibold">Price</span>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">₹{price}</span>
                </div>
                <div className="flex items-center justify-between p-3 sm:p-4 rounded-lg bg-gradient-to-r from-secondary/5 to-transparent border-l-4 border-secondary">
                  <span className="text-xs sm:text-sm font-semibold">Weight</span>
                  <span className="text-lg sm:text-xl font-bold text-secondary">{weight}</span>
                </div>
                <div className="flex items-center justify-between p-3 sm:p-4 rounded-lg bg-gradient-to-r from-accent/5 to-transparent border-l-4 border-accent">
                  <span className="text-xs sm:text-sm font-semibold">Category</span>
                  <span className="text-xs sm:text-sm font-medium">{category}</span>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button 
              className="w-full btn-hero shadow-xl text-sm sm:text-base" 
              size="sm"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
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

