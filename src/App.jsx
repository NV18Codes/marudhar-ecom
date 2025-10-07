import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import Products from "./pages/Products";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize demo admin account
    let users = JSON.parse(localStorage.getItem("marudhar_users") || "[]");
    
    // Always ensure admin user exists with correct credentials
    const adminUser = {
      id: "admin-1",
      email: "admin@marudhar.com",
      password: "admin123",
      name: "Admin User",
      role: "admin",
      createdAt: new Date().toISOString()
    };
    
    const customerUser = {
      id: "customer-1",
      email: "customer@test.com",
      password: "customer123",
      name: "Test Customer",
      role: "customer",
      createdAt: new Date().toISOString()
    };
    
    // Remove existing admin and customer if they exist, then add fresh ones
    users = users.filter(u => u.email !== "admin@marudhar.com" && u.email !== "customer@test.com");
    users.push(adminUser, customerUser);
    
    localStorage.setItem("marudhar_users", JSON.stringify(users));
    console.log("Demo users initialized:", users);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <CartProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/product-page" element={<Products />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/admin" element={<Admin />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

