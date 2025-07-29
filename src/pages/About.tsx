import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Leaf, Heart, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We're committed to sustainable practices and eco-friendly growing methods."
    },
    {
      icon: Heart,
      title: "Quality Care",
      description: "Every plant receives individual attention and care from our expert team."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a community of plant lovers who share our passion for green living."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from plant care to customer service."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-cover bg-center bg-no-repeat text-white"
               style={{ 
                 backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
                                  url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400" fill="none"><rect width="1200" height="400" fill="%23065f46"/><path d="M0,200 Q300,150 600,200 T1200,180 L1200,400 L0,400 Z" fill="%2310b981" opacity="0.4"/></svg>')` 
               }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Bringing the beauty of nature into your everyday life through carefully curated plants and expert guidance.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Urban Jungle Co. was born from a simple belief: everyone deserves to experience the joy and tranquility that plants bring to our lives. Founded in 2020, we started as a small local nursery with a big dream - to make high-quality plants accessible to urban dwellers everywhere.
            </p>
          </div>
          
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="mb-6">
              What began as a passion project quickly grew into something much larger. We realized that people weren't just looking for plants - they were looking for a connection to nature in their increasingly digital world. They wanted guidance, community, and most importantly, plants that would thrive in their unique spaces.
            </p>
            
            <p>
              Today, Urban Jungle Co. is more than just a plant store. We're a community of plant enthusiasts, sustainability advocates, and urban gardeners who believe that bringing nature indoors isn't just beautiful - it's essential for our wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do, from how we care for our plants to how we serve our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-jungle-green/10 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-jungle-green" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;