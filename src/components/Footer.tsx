import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cream py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            
            <span className="text-xl font-bold text-foreground">Fair Trade</span>
          </div>
                    <nav className="flex gap-8 mb-6 md:mb-0">
            <a href="/" className="text-foreground hover:text-jungle-green transition-colors">
              Home
            </a>
            <a href="/shop" className="text-foreground hover:text-jungle-green transition-colors">
              Shop
            </a>
            <a href="/about" className="text-foreground hover:text-jungle-green transition-colors">
              About
            </a>
            <a href="/contact" className="text-foreground hover:text-jungle-green transition-colors">
              Contact
            </a>
          </nav>
          
          {/* Social Media Icons */}
          <div className="flex gap-4">
         
            <a href="#" className="w-10 h-10 bg-jungle-green/10 rounded-full flex items-center justify-center hover:bg-jungle-green/20 transition-colors">
              <Instagram className="w-5 h-5 text-jungle-green" />
            </a>
      
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground">
            Copyright © 2025 Generic eCommerce
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;