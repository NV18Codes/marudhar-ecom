import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Package, Users, ShoppingCart } from "lucide-react";

const Admin = () => {
  const { user, isAdmin } = useAuth();
  const [stats, setStats] = useState({
    products: 6,
    users: 0,
    orders: 0
  });

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "Khatta Meetha Range",
    description: "",
    price: "",
    weight: ""
  });

  useEffect(() => {
    // Load user count from localStorage
    const users = JSON.parse(localStorage.getItem("marudhar_users") || "[]");
    setStats(prev => ({ ...prev, users: users.length }));
  }, []);

  if (!user) {
    return <Navigate to="/signin" />;
  }

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  const handleAddProduct = (e) => {
    e.preventDefault();
    toast.success("Product added successfully! (Demo mode)");
    setNewProduct({
      name: "",
      category: "Khatta Meetha Range",
      description: "",
      price: "",
      weight: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-heading font-bold mb-8">Admin Dashboard</h1>
        
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.products}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.users}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.orders}</div>
            </CardContent>
          </Card>
        </div>

        {/* Add Product Form */}
        <Card>
          <CardHeader>
            <CardTitle>Add New Product</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name *</Label>
                  <Input
                    id="name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <select
                    id="category"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    required
                  >
                    <option>Khatta Meetha Range</option>
                    <option>Mouth Freshener Range</option>
                    <option>Mukhwas Range</option>
                    <option>Candy Range</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price (₹) *</Label>
                  <Input
                    id="price"
                    type="number"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight *</Label>
                  <Input
                    id="weight"
                    placeholder="e.g., 200g"
                    value={newProduct.weight}
                    onChange={(e) => setNewProduct({ ...newProduct, weight: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <Button type="submit" className="w-full">
                Add Product
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
