import { Heart, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-cream border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="techKoodaram Logo" className="h-8 w-auto" />
          </Link>

          {/* Links */}
          

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
