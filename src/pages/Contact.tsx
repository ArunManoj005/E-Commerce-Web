import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-cover bg-center bg-no-repeat text-white"
               style={{ 
                 backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
                                  url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400" fill="none"><rect width="1200" height="400" fill="%23065f46"/><circle cx="200" cy="150" r="80" fill="%2310b981" opacity="0.3"/><circle cx="800" cy="200" r="100" fill="%2310b981" opacity="0.2"/></svg>')` 
               }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest mb-4 text-jungle-light">
            CONTACT US
          </p>
          <h1 className="text-5xl md:text-6xl font-bold">Let's Connect</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">
                Send us Message
              </h2>
              
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input 
                    id="name" 
                    type="text" 
                    className="mt-2"
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    className="mt-2"
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-foreground">
                    Phone <span className="text-destructive">*</span>
                  </Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    className="mt-2"
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground">
                    Message
                  </Label>
                  <Textarea 
                    id="message" 
                    rows={5}
                    className="mt-2"
                    placeholder="Your message here..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-jungle-green hover:bg-jungle-dark text-white px-8 py-3"
                >
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-jungle-light/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-jungle-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-foreground">Phone</h3>
                  <p className="text-muted-foreground">555-1234-678</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-jungle-light/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-jungle-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-foreground">Email</h3>
                  <p className="text-muted-foreground">mail@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;