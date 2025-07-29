import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative text-center text-white px-6 max-w-4xl mx-auto">
       
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Transform Your Space
          <br />
<p className="petit-formal-script text-white text-2xl">
  One fabric at a time
</p>
        </h1>
        <Button 
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-foreground font-semibold px-8 py-6 text-lg rounded-full"
        >
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default Hero;