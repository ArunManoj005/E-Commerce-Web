import { ShoppingCart, Leaf, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
  <img src="/fairtrade.png" alt="Logo" className="w-10 h-10 object-contain rounded-full bg-white p-1" />
  <span className="rosarivo-regular text-white text-3xl tracking-wide">
    Fair Trade
  </span>
</div>


        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-white hover:text-accent transition-colors">
            Home
          </a>
          <a href="/shop" className="text-white hover:text-accent transition-colors">
            Shop
          </a>
          <a href="/about" className="text-white hover:text-accent transition-colors">
            About
          </a>
          <a href="/contact" className="text-white hover:text-accent transition-colors">
            Contact
          </a>
        </nav>

        {/* Social & Cart */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <Instagram className="w-4 h-4 text-white hover:text-accent cursor-pointer transition-colors" />
          </div>
          <div className="relative">
            <ShoppingCart className="w-5 h-5 text-white" />
            <span className="absolute -top-2 -right-2 bg-accent text-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;