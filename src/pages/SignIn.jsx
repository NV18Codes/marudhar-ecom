import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await signIn(email, password);
    
    if (result.success) {
      toast.success("Welcome back!");
      navigate("/");
    } else {
      toast.error(result.error || "Failed to sign in");
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4 relative">
      {/* Back to Home Button */}
      <Button
        variant="ghost"
        className="absolute top-6 left-6 flex items-center gap-2 hover:gap-3 transition-all"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Button>

      <Card className="w-full max-w-md shadow-2xl animate-fade-in">
        <CardHeader className="space-y-3 text-center">
          <div className="flex justify-center mb-2">
            <img 
              src="/logo.png" 
              alt="Marudhar" 
              className="h-16 w-auto object-contain"
            />
          </div>
          <CardTitle className="text-3xl font-heading">
            <span className="text-blue-600">Welcome Back</span>
          </CardTitle>
          <CardDescription className="text-base">
            Sign in to continue shopping
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full btn-hero" size="lg" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          
          <div className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:underline font-semibold">
              Sign up
            </Link>
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg text-sm border border-primary/10">
            <p className="font-semibold mb-2 text-center">Demo Credentials:</p>
            <div className="space-y-1">
              <p><span className="font-medium">Admin:</span> admin@marudhar.com / admin123</p>
              <p><span className="font-medium">Customer:</span> customer@test.com / customer123</p>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full mt-3"
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              Reset Demo Data
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
