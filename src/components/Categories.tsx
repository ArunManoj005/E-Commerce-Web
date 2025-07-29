import { Card } from "@/components/ui/card";

const Categories = () => {
 const categories = [
  {
    id: 1,
    name: "Floor",
    description: "Perfect for your home",
    image: "/images/floor.jpeg", 
  },
  {
    id: 2, 
    name: "Windows",
    description: "Garden beauties",
    image: "/images/window.jpg",
  },
  {
    id: 3,
    name: "Sofa",
    description: "Low maintenance plants",
    image: "/images/sofa.jpg",
  },
  {
    id: 4,
    name: "Table",
    description: "Unique and modern",
    image: "/images/table.jpeg",
  },
  {
    id: 5,
    name: "Bedding",
    description: "Cozy and comfortable designs",
    image: "/images/bedding.jpg", // Make sure this image exists in your public/images folder
  },
];


  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Our Categories
        </h2>

        {/* ✅ Grid layout responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {categories.map((category, index) => {
    const isLastItem = index === categories.length - 1;
    const isOdd = categories.length % 4 === 1; // i.e. 5 cards in a 4-column grid

    return (
      <div
        key={category.id}
        className={`w-full ${isLastItem && isOdd ? "lg:col-span-4 flex justify-center" : ""}`}
      >
        <Card className="w-full h-56 max-w-sm overflow-hidden rounded-lg shadow hover:shadow-lg transition-all">
          <div className="relative w-full h-3/4">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-1/4 bg-white flex flex-col items-center justify-center px-2 text-center">
            <h3 className="text-base font-semibold">{category.name}</h3>
            <p className="text-sm text-muted-foreground">{category.description}</p>
          </div>
        </Card>
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
};

export default Categories;
