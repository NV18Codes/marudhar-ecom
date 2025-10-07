import { Phone, MapPin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-b from-card to-muted/20 border-t border-border mt-12 sm:mt-16 lg:mt-20">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <img 
                src="/logo.png" 
                alt="Marudhar" 
                className="h-12 w-auto object-contain sm:h-14 lg:h-16"
              />
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-blue-600">
                Marudhar
              </h3>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-sm">
              Exquisite Flavors, Unmatched Quality – A Taste of Perfection. Experience the finest Indian sweets and snacks.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-heading font-semibold mb-3 sm:mb-4">Contact Us</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-xs sm:text-sm text-muted-foreground">
                  <p>+91 63668 70120</p>
                  <p>080 4211 6069</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-muted-foreground">
                  #20, Sirsi Road, 1st Main, 5th Cross,<br />
                  Chamrajpet, Bangalore – 560016
                </p>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-muted-foreground">
                  info@marudhar.com
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-heading font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button 
                  onClick={() => {
                    navigate("/products");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block text-left"
                >
                  → Our Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      const aboutSection = document.getElementById('about');
                      if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block text-left"
                >
                  → About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block text-left"
                >
                  → Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © 2025 Marudhar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

