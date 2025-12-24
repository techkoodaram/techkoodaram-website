import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Mail, Github } from "lucide-react";

const JoinCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Warm glow background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[400px] bg-warmGlow/15 rounded-full blur-3xl animate-warm-pulse" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main CTA */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to enter the <span className="text-accent">koodaram</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join a community of over 500 curious minds from across Kerala and beyond. 
            No fees, no barriers — just good people sharing good knowledge.
          </p>

          {/* Primary CTA */}
          <Button variant="hero" size="xl" className="mb-12">
            Join the Community
            <ArrowRight size={20} />
          </Button>

          {/* Social/Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="#" 
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-accent/30 transition-all duration-200"
            >
              <MessageCircle size={18} />
              <span className="text-sm font-medium">Discord</span>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-accent/30 transition-all duration-200"
            >
              <Github size={18} />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-accent/30 transition-all duration-200"
            >
              <Mail size={18} />
              <span className="text-sm font-medium">Newsletter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCTA;
