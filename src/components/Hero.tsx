import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-gathering.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Community gathering under a warm tent"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Warm glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-warmGlow/20 rounded-full blur-3xl animate-warm-pulse" />

      <div className="container relative z-10 mx-auto py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-sm text-muted-foreground">Coming Soon</span>
          </div>

          {/* Logo */}
          <div 
             className="mb-8 opacity-0 animate-fade-up flex justify-center"
             style={{ animationDelay: "0.15s" }}
          >
            <img src="/logo.png" alt="techKoodaram Logo" className="h-24 md:h-auto w-auto" />
          </div>

          {/* Main Heading */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
           is <span className="text-accent">coming soon.</span>
          </h1>

          {/* Subheading */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Join us in our community via Whatsapp for now.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button 
                variant="hero" 
                size="xl"
                onClick={() => window.open("https://chat.whatsapp.com/JnWLnxuQAZm9pIZNUWk9Nk", "_blank")}
            >
              Join via WhatsApp
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator 
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-gentle-float" />
        </div>
      </div>*/}
    </section>
  );
};

export default Hero;
