import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, CreditCard } from "lucide-react";

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    pincode: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    
    const res = await loadRazorpay();
    
    if (!res) {
      toast.error("Failed to load payment gateway");
      return;
    }

    const options = {
      key: "rzp_test_demo_key", // Demo key
      amount: getCartTotal() * 100, // Amount in paise
      currency: "INR",
      name: "Marudhar",
      description: "Order Payment",
      image: "/favicon.ico",
      handler: function (response) {
        // Create order object
        const order = {
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          customerName: formData.name,
          customerEmail: formData.email,
          customerPhone: formData.phone,
          address: `${formData.address}, ${formData.city}, ${formData.pincode}`,
          items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image
          })),
          total: getCartTotal(),
          status: "Pending",
          paymentId: response.razorpay_payment_id,
          createdAt: new Date().toISOString()
        };

        // Save order to localStorage
        const existingOrders = JSON.parse(localStorage.getItem("marudhar_orders") || "[]");
        existingOrders.push(order);
        localStorage.setItem("marudhar_orders", JSON.stringify(existingOrders));

        toast.success("Order placed successfully! Order ID: #" + order.id.slice(0, 8));
        clearCart();
        navigate("/");
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone
      },
      theme: {
        color: "#B22402"
      },
      modal: {
        ondismiss: function() {
          toast.error("Payment cancelled");
        }
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  if (cart.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-4 flex items-center gap-2 hover:gap-3 transition-all"
          onClick={() => navigate("/cart")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Cart
        </Button>

        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-heading font-bold mb-2 text-gradient">Checkout</h1>
          <p className="text-muted-foreground">Complete your order and choose payment method</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="shadow-lg animate-slide-up">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <CardTitle className="text-2xl font-heading">Shipping Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePayment} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pincode">Pincode *</Label>
                    <Input
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full btn-hero" size="lg">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Proceed to Payment
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <Card className="shadow-lg sticky top-24">
              <CardHeader className="bg-gradient-to-r from-secondary/5 to-transparent">
                <CardTitle className="text-2xl font-heading">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-3 rounded-lg hover:bg-muted/30 transition-colors">
                    <div className="flex gap-3 items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-contain bg-white rounded p-1"
                      />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity} × ₹{item.price}</p>
                      </div>
                    </div>
                    <p className="font-bold text-primary">₹{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
                
                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between text-base">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">₹{getCartTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between">
                    <span className="text-xl font-bold">Total</span>
                    <span className="text-2xl font-bold text-primary">₹{getCartTotal().toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg text-sm">
              <p className="font-semibold mb-2 text-blue-900">🔒 Secure Payment</p>
              <p className="text-blue-800">This is using Razorpay test mode. No real payment will be processed.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
