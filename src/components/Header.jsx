import { ShoppingCart, Menu, X, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut, isAdmin } = useAuth();
  const { getCartCount } = useCart();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => navigate("/")} 
              className="flex items-center gap-3"
            >
              <img 
                src="/logo.png" 
                alt="Marudhar" 
                className="h-12 w-auto object-contain"
              />
              <span className="text-2xl font-heading font-bold text-blue-600">
                Marudhar
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigate("/")} 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => navigate("/shop")} 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Products
            </button>
            <a href="/#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="/#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            {isAdmin && (
              <button 
                onClick={() => navigate("/admin")} 
                className="text-sm font-medium text-accent hover:text-primary transition-colors"
              >
                Admin
              </button>
            )}
          </nav>

          {/* Cart and Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="relative"
              onClick={() => navigate("/cart")}
            >
              <ShoppingCart className="h-5 w-5" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Button>

            {user ? (
              <div className="hidden md:flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Hi, {user.name}</span>
                <Button variant="outline" size="icon" onClick={signOut}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <Button variant="outline" className="hidden md:flex" onClick={() => navigate("/signin")}>
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-border animate-fade-in">
            <button
              onClick={() => {
                navigate("/");
                setIsMenuOpen(false);
              }}
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => {
                navigate("/shop");
                setIsMenuOpen(false);
              }}
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Products
            </button>
            <a
              href="/#about"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/#contact"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            {isAdmin && (
              <button
                onClick={() => {
                  navigate("/admin");
                  setIsMenuOpen(false);
                }}
                className="block text-sm font-medium text-accent hover:text-primary transition-colors"
              >
                Admin
              </button>
            )}
            {user ? (
              <Button variant="outline" className="w-full" onClick={signOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            ) : (
              <Button variant="outline" className="w-full" onClick={() => navigate("/signin")}>
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

