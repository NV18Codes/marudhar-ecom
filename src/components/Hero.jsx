import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-background mb-6 animate-fade-in drop-shadow-lg">
            Exquisite Flavors,<br />
            Unmatched Quality
          </h1>
          <p className="text-xl sm:text-2xl text-background/95 mb-10 animate-fade-in leading-relaxed drop-shadow" style={{ animationDelay: "0.1s" }}>
            A Taste of Perfection – Experience the finest selection of Khatta Meetha, Mouth Fresheners, Mukhwas, and traditional Indian delicacies.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              className="btn-hero text-lg px-10 py-6 shadow-2xl"
              onClick={() => window.location.href = '/products'}
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 bg-background/20 backdrop-blur-md border-2 border-background/40 text-background hover:bg-background hover:text-foreground shadow-xl"
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

