import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Premium Indian Sweets and Snacks"
          className="w-full h-full object-cover animate-scale-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
        <div className="max-w-4xl text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-background mb-4 sm:mb-6 animate-fade-in drop-shadow-lg leading-tight">
            Exquisite Flavors,<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Unmatched Quality
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-background/95 mb-6 sm:mb-8 lg:mb-10 animate-fade-in leading-relaxed drop-shadow max-w-2xl mx-auto lg:mx-0" style={{ animationDelay: "0.1s" }}>
            A Taste of Perfection – Experience the finest selection of Khatta Meetha, Mouth Fresheners, Mukhwas, and traditional Indian delicacies.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 animate-slide-up justify-center lg:justify-start" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              className="btn-hero text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 shadow-2xl w-full sm:w-auto"
              onClick={() => window.location.href = '/products'}
            >
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 bg-background/20 backdrop-blur-md border-2 border-background/40 text-background hover:bg-background hover:text-foreground shadow-xl w-full sm:w-auto"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

