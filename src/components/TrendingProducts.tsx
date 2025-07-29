import ProductCard from "./ProductCard";
import succulent from "@/assets/succulent-starlight.jpg";
import silverMist from "@/assets/silver-mist.jpg";
import goldenGlow from "@/assets/golden-glow.jpg";

const TrendingProducts = () => {
  const products = [
    {
      image: succulent,
      name: "Starlight Succulent",
      category: "Indoor Plants",
      price: "$89.00",
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
      image: goldenGlow,
      name: "Golden Glow",
      category: "Indoor Plants",
      price: "$85.00", 
      rating: 4
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Trending Products
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;