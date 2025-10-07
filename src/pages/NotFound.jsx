import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="text-center z-10 max-w-md mx-4">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/logo.png"
            alt="Marudhar"
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* 404 Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-8xl font-bold text-blue-600 animate-bounce">404</h1>
            <h2 className="text-3xl font-heading font-bold text-gray-800">Page Not Found</h2>
            <p className="text-lg text-gray-600">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              <Home className="h-4 w-4" />
              Go Home
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
          </div>

          {/* Additional Help */}
          <div className="mt-8 p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-white/20">
            <p className="text-sm text-gray-600 mb-2">Looking for something specific?</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/products")}
                className="text-blue-600 hover:text-blue-700"
              >
                Browse Products
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/#about")}
                className="text-blue-600 hover:text-blue-700"
              >
                About Us
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/#contact")}
                className="text-blue-600 hover:text-blue-700"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

