import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { ArrowLeft, Shield, Lock } from "lucide-react";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Demo admin credentials
    if (credentials.username === "admin" && credentials.password === "admin123") {
      // Create admin session
      const adminUser = {
        id: "admin",
        name: "Admin User",
        email: "admin@marudhar.com",
        role: "admin",
        isAdmin: true
      };
      
      localStorage.setItem("marudhar_admin", JSON.stringify(adminUser));
      localStorage.setItem("marudhar_user", JSON.stringify(adminUser));
      
      toast.success("Welcome back, Admin!");
      navigate("/admin");
    } else {
      toast.error("Invalid admin credentials");
    }
    
    setIsLoading(false);
  };

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <Card className="w-full max-w-md mx-4 shadow-2xl border-0 bg-white/80 backdrop-blur-sm animate-scale-in">
        <CardHeader className="space-y-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <img
                src="/logo.png"
                alt="Marudhar"
                className="h-16 w-auto object-contain"
              />
              <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full p-1">
                <Shield className="h-4 w-4" />
              </div>
            </div>
          </div>
          <CardTitle className="text-2xl font-heading font-bold text-blue-600">
            Admin Portal
          </CardTitle>
          <p className="text-muted-foreground">
            Sign in to access the admin dashboard
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Admin Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Enter admin username"
                value={credentials.username}
                onChange={handleInputChange}
                required
                className="h-12"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                value={credentials.password}
                onChange={handleInputChange}
                required
                className="h-12"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing In...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Sign In as Admin
                </div>
              )}
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Demo Admin Credentials
            </h4>
            <div className="space-y-1 text-sm text-blue-800">
              <p><strong>Username:</strong> admin</p>
              <p><strong>Password:</strong> admin123</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Button
            variant="ghost"
            className="w-full flex items-center gap-2 hover:gap-3 transition-all"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
