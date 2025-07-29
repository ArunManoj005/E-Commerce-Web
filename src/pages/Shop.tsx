import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import succulent from "@/assets/succulent-starlight.jpg";
import silverMist from "@/assets/silver-mist.jpg";
import goldenGlow from "@/assets/golden-glow.jpg";

const Shop = () => {
  const [sortBy, setSortBy] = useState("default");

  const products = [
    {
      image: succulent,
      name: "Desert Bloom",
      category: "Indoor Plants",
      price: "$70.00",
      rating: 4
    },
    {
      image: goldenGlow,
      name: "Golden Glow", 
      category: "Indoor Plants",
      price: "$85.00",
      rating: 4
    },
    {
      image: silverMist,
      name: "Silver Mist",
      category: "Indoor Plants", 
      price: "$92.00",
      rating: 5
    },
    {
      image: succulent,
      name: "Rubber Plant",
      category: "Indoor Plants",
      price: "$65.00",
      rating: 4
    },
    {
      image: silverMist,
      name: "Peace Lily",
      category: "Indoor Plants",
      price: "$75.00", 
      rating: 5
    },
    {
      image: goldenGlow,
      name: "Monstera Deliciosa",
      category: "Indoor Plants",
      price: "$120.00",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-cover bg-center bg-no-repeat text-white"
               style={{ 
                 backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
                                  url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400" fill="none"><rect width="1200" height="400" fill="%23065f46"/><path d="M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z" fill="%2310b981" opacity="0.3"/></svg>')` 
               }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">Shop</h1>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Bar */}
          <div className="flex justify-between items-center mb-8">
            <p className="text-muted-foreground">
              Showing all {products.length} results
            </p>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Default sorting" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default sorting</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Customer Rating</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;