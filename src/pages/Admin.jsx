import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { 
  Package, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp,
  Calendar,
  Eye,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Admin = () => {
  const { user, isAdmin, signOut } = useAuth();
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    totalCustomers: 0,
    totalProducts: 35
  });
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = () => {
    // Load orders from localStorage
    const storedOrders = JSON.parse(localStorage.getItem("marudhar_orders") || "[]");
    setOrders(storedOrders);

    // Calculate stats
    const totalRevenue = storedOrders.reduce((sum, order) => sum + order.total, 0);
    const totalOrders = storedOrders.length;

    // Load users
    const users = JSON.parse(localStorage.getItem("marudhar_users") || "[]");
    const customers = users.filter(u => u.role !== "admin");

    setStats({
      totalRevenue,
      totalOrders,
      totalCustomers: customers.length,
      totalProducts: 35
    });
  };

  const viewOrderDetails = (order) => {
    setSelectedOrder(order);
    setIsOrderDialogOpen(true);
  };

  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem("marudhar_orders", JSON.stringify(updatedOrders));
    toast.success(`Order status updated to ${newStatus}`);
    loadDashboardData();
  };

  const handleLogout = () => {
    signOut();
    toast.success("Logged out successfully");
  };

  if (!user) {
    return <Navigate to="/signin" />;
  }

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  const getStatusColor = (status) => {
    switch(status) {
      case "Pending": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Processing": return "bg-blue-100 text-blue-800 border-blue-300";
      case "Shipped": return "bg-purple-100 text-purple-800 border-purple-300";
      case "Delivered": return "bg-green-100 text-green-800 border-green-300";
      case "Cancelled": return "bg-red-100 text-red-800 border-red-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Marudhar"
              className="h-10 w-auto object-contain"
            />
            <div>
              <h1 className="text-2xl font-heading font-bold text-blue-600">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">Welcome back, {user.name}</p>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-3xl font-heading font-bold mb-2 text-gradient">Store Overview</h2>
          <p className="text-muted-foreground">Monitor your business performance and manage orders</p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow animate-slide-up">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
              <DollarSign className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">₹{stats.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                All time earnings
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Orders</CardTitle>
              <ShoppingCart className="h-5 w-5 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">{stats.totalOrders}</div>
              <p className="text-xs text-muted-foreground mt-1">Orders placed</p>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Customers</CardTitle>
              <Users className="h-5 w-5 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">{stats.totalCustomers}</div>
              <p className="text-xs text-muted-foreground mt-1">Registered users</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Products</CardTitle>
              <Package className="h-5 w-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{stats.totalProducts}</div>
              <p className="text-xs text-muted-foreground mt-1">In catalogue</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Orders */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl font-heading flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary" />
              Recent Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            {orders.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-20" />
                <p className="text-muted-foreground">No orders yet</p>
                <p className="text-sm text-muted-foreground mt-2">Orders will appear here when customers make purchases</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.slice().reverse().map((order) => (
                      <TableRow key={order.id} className="hover:bg-muted/50">
                        <TableCell className="font-mono text-sm">#{order.id.slice(0, 8)}</TableCell>
                        <TableCell className="font-medium">{order.customerName}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{order.items.length} items</TableCell>
                        <TableCell className="font-bold text-primary">₹{order.total.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => viewOrderDetails(order)}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      {/* Order Details Dialog */}
      {selectedOrder && (
        <Dialog open={isOrderDialogOpen} onOpenChange={setIsOrderDialogOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-heading">Order Details</DialogTitle>
              <DialogDescription>
                Order #{selectedOrder.id.slice(0, 8)} - {new Date(selectedOrder.createdAt).toLocaleString()}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 mt-4">
              {/* Customer Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2 p-4 bg-muted/30 rounded-lg">
                  <h3 className="font-semibold text-sm text-muted-foreground">Customer Information</h3>
                  <p className="font-medium">{selectedOrder.customerName}</p>
                  <p className="text-sm text-muted-foreground">{selectedOrder.customerEmail}</p>
                  <p className="text-sm text-muted-foreground">{selectedOrder.customerPhone}</p>
                </div>

                <div className="space-y-2 p-4 bg-muted/30 rounded-lg">
                  <h3 className="font-semibold text-sm text-muted-foreground">Delivery Address</h3>
                  <p className="text-sm">{selectedOrder.address}</p>
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h3 className="font-semibold mb-3">Order Items</h3>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <img src={item.image} alt={item.name} className="w-12 h-12 object-contain bg-white rounded p-1" />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity} × ₹{item.price}</p>
                        </div>
                      </div>
                      <p className="font-bold text-primary">₹{(item.quantity * item.price).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">Total Amount</span>
                  <span className="text-2xl font-bold text-primary">₹{selectedOrder.total.toLocaleString()}</span>
                </div>

                {/* Status Update */}
                <div className="flex flex-wrap gap-2">
                  <p className="text-sm font-medium w-full mb-2">Update Order Status:</p>
                  {["Pending", "Processing", "Shipped", "Delivered", "Cancelled"].map((status) => (
                    <Button
                      key={status}
                      variant={selectedOrder.status === status ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        updateOrderStatus(selectedOrder.id, status);
                        setSelectedOrder({ ...selectedOrder, status });
                      }}
                    >
                      {status}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

    </div>
  );
};

export default Admin;
