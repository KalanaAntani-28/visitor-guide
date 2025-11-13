import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { attractions } from "@/data/attractions";
import tanahLot from "@/assets/tanah-lot.jpg";
import riceTerraces from "@/assets/rice-terraces.jpg";
import monkeyForest from "@/assets/monkey-forest.jpg";
import mountBatur from "@/assets/mount-batur.jpg";

const Attractions = () => {
  const imageMap: { [key: string]: string } = {
    "tanah-lot.jpg": tanahLot,
    "rice-terraces.jpg": riceTerraces,
    "monkey-forest.jpg": monkeyForest,
    "mount-batur.jpg": mountBatur,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Bali's Top Attractions
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
            Discover the most beautiful and culturally significant places across the Island of Gods
          </p>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {attractions.map((attraction, index) => (
              <Card 
                key={attraction.id} 
                className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={imageMap[attraction.image]} 
                    alt={attraction.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-background/90 backdrop-blur-sm text-foreground shadow-md">
                      {attraction.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60"></div>
                </div>
                
                <CardContent className="p-6 relative -mt-20">
                  <div className="bg-card rounded-lg p-6 shadow-lg">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {attraction.title}
                    </h3>
                    
                    <div className="flex items-start gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                      <span>{attraction.location.address}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {attraction.shortDescription}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {attraction.highlights.slice(0, 3).map((highlight) => (
                        <span 
                          key={highlight}
                          className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                    
                    <Button variant="default" className="w-full group/btn" asChild>
                      <Link to={`/attraction/${attraction.id}`}>
                        View Details 
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Planning Your Trip?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            Contact us for personalized recommendations and travel assistance
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Attractions;
