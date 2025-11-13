import { Link } from "react-router-dom";
import { ArrowRight, Map, Compass, Palmtree } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { attractions } from "@/data/attractions";
import heroImage from "@/assets/hero-bali.jpg";
import tanahLot from "@/assets/tanah-lot.jpg";
import riceTerraces from "@/assets/rice-terraces.jpg";
import monkeyForest from "@/assets/monkey-forest.jpg";

const Index = () => {
  const featuredAttractions = attractions.slice(0, 3);
  
  const imageMap: { [key: string]: string } = {
    "tanah-lot.jpg": tanahLot,
    "rice-terraces.jpg": riceTerraces,
    "monkey-forest.jpg": monkeyForest,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground drop-shadow-lg">
              Discover the Magic of{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                Bali
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-foreground/90 max-w-2xl mx-auto drop-shadow">
              Explore ancient temples, pristine beaches, lush rice terraces, and vibrant culture
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-all">
                <Link to="/attractions">
                  Explore Attractions <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-background/80 backdrop-blur-sm shadow-lg">
                <Link to="/contact">
                  Plan Your Trip
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-4">
                  <Map className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Interactive Maps</h3>
                <p className="text-muted-foreground">
                  Find every attraction with detailed location information and easy navigation
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center mb-4">
                  <Compass className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
                <p className="text-muted-foreground">
                  Comprehensive information about each location, history, and cultural significance
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-4">
                  <Palmtree className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Hidden Gems</h3>
                <p className="text-muted-foreground">
                  Discover both popular landmarks and secret spots known only to locals
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Attractions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Attractions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start your journey with these must-visit destinations in Bali
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAttractions.map((attraction, index) => (
              <Card 
                key={attraction.id} 
                className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={imageMap[attraction.image]} 
                    alt={attraction.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                      {attraction.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {attraction.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {attraction.shortDescription}
                  </p>
                  <Button variant="link" className="p-0 h-auto font-semibold" asChild>
                    <Link to={`/attraction/${attraction.id}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/attractions">
                View All Attractions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/30 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore Bali?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with us to plan your perfect Bali adventure. We'll help you create unforgettable memories.
          </p>
          <Button size="lg" asChild className="shadow-lg">
            <Link to="/contact">
              Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
