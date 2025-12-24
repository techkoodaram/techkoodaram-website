import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-cream border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">t</span>
            </div>
            <span className="font-medium text-lg text-foreground">
              tech<span className="text-accent">Koodaram</span>
            </span>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              About
            </a>
            <a href="/#community" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Community
            </a>
            <a href="/#gatherings" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Gatherings
            </a>
            <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Products
            </Link>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Code of Conduct
            </a>
          </nav>

          {/* Copyright */}
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart size={14} className="text-accent fill-accent" />
            <span>in South Tamil Nadu</span>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-8 pt-8 border-t border-border/30">
          <p className="text-xs text-muted-foreground/70">
            © {currentYear} techKoodaram. A grassroots tech community from Sivakasi to Tenkasi. Open, inclusive, and always learning.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
