import { Heart, Award, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every product is crafted with care using traditional recipes passed down through generations."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We use only the finest ingredients to ensure unmatched taste and quality in every bite."
    },
    {
      icon: Sparkles,
      title: "Authentic Flavors",
      description: "Experience the true essence of Indian sweets and mouth fresheners in their most authentic form."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient">
              Our Story
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              "A tree with colorful dreams which has to come true with your support and love."
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Marudhar is more than just a brand — it's a celebration of India's rich culinary heritage. 
              We bring you the finest selection of traditional sweets, mouth fresheners, and delicacies that 
              have been perfected over generations. Each product is a testament to our commitment to quality, 
              authenticity, and the joy of sharing unforgettable flavors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

