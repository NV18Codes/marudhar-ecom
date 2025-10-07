import { Phone, MapPin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-b from-card to-muted/20 border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Marudhar" 
                className="h-16 w-auto object-contain"
              />
              <h3 className="text-2xl font-heading font-bold text-blue-600">
                Marudhar
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Exquisite Flavors, Unmatched Quality – A Taste of Perfection. Experience the finest Indian sweets and snacks.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>+91 63668 70120</p>
                  <p>080 4211 6069</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  #20, Sirsi Road, 1st Main, 5th Cross,<br />
                  Chamrajpet, Bangalore – 560016
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  info@marudhar.com
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => navigate("/products")} 
                  className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block text-left"
                >
                  → Our Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate("/#about")} 
                  className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block text-left"
                >
                  → About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate("/#contact")} 
                  className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block text-left"
                >
                  → Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Marudhar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

