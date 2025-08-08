import { Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  name: string;
  category: string;
  price: string;
  rating?: number;
}

const ProductCard = ({ image, name, category, price, rating = 0 }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative bg-gray-100 aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          size="icon"
          className="absolute top-4 right-4 bg-white/90 hover:bg-white text-foreground shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ShoppingBag className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="p-6">
       
        
        <h3 className="font-semibold text-lg mb-1 text-foreground">
          {name}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-3">
          {category}
        </p>
        
        <p className="font-bold text-lg text-jungle-green">
          {price}
        </p>
      </div>
    </Card>
  );
};

export default ProductCard;