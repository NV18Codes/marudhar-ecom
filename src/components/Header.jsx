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
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center min-w-0 flex-1">
            <button 
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 sm:gap-3 min-w-0"
            >
              <img 
                src="/logo.png" 
                alt="Marudhar" 
                className="h-8 w-auto object-contain sm:h-10 lg:h-12"
              />
              <span className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-blue-600 truncate">
                Marudhar
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            <button 
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              Home
            </button>
            <button 
              onClick={() => {
                navigate("/products");
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              Products
            </button>
            <button 
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    // If about section not found, scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              About
            </button>
            <button 
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    // If contact section not found, scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              Contact
            </button>
            {isAdmin && (
              <button 
                onClick={() => {
                  navigate("/admin");
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-sm font-medium text-accent hover:text-primary transition-colors whitespace-nowrap"
              >
                Admin
              </button>
            )}
          </nav>

          {/* Cart and Auth Buttons */}
          <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6 lg:ml-8">
            <Button 
              variant="outline" 
              size="icon" 
              className="relative h-9 w-9 sm:h-10 sm:w-10"
              onClick={() => {
                navigate("/cart");
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Button>

            {user ? (
              <div className="hidden lg:flex items-center space-x-3">
                <span className="text-sm text-muted-foreground truncate max-w-24">Hi, {user.name}</span>
                <Button variant="outline" size="icon" onClick={signOut} className="h-9 w-9 sm:h-10 sm:w-10">
                  <LogOut className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            ) : (
              <Button variant="outline" className="hidden lg:flex text-xs sm:text-sm px-3 sm:px-4" onClick={() => {
                navigate("/signin");
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>
                <User className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                <span className="hidden sm:inline">Sign In</span>
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-9 w-9 sm:h-10 sm:w-10 ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 space-y-3 border-t border-border animate-fade-in">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  navigate("/");
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors text-left py-2 px-3 rounded-md hover:bg-muted/50"
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigate("/products");
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors text-left py-2 px-3 rounded-md hover:bg-muted/50"
              >
                Products
              </button>
              <button
                onClick={() => {
                  navigate("/");
                  setIsMenuOpen(false);
                  setTimeout(() => {
                    const aboutSection = document.getElementById('about');
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors text-left py-2 px-3 rounded-md hover:bg-muted/50"
              >
                About
              </button>
              <button
                onClick={() => {
                  navigate("/");
                  setIsMenuOpen(false);
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors text-left py-2 px-3 rounded-md hover:bg-muted/50"
              >
                Contact
              </button>
            </div>
            {isAdmin && (
              <button
                onClick={() => {
                  navigate("/admin");
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="block w-full text-sm font-medium text-accent hover:text-primary transition-colors text-left py-2 px-3 rounded-md hover:bg-muted/50"
              >
                Admin Dashboard
              </button>
            )}
            <div className="pt-2 border-t border-border">
              {user ? (
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground px-3 py-1">
                    Welcome, {user.name}
                  </div>
                  <Button variant="outline" className="w-full" onClick={signOut}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button variant="outline" className="w-full" onClick={() => {
                navigate("/signin");
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

