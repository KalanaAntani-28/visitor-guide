import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { attractions } from "@/data/attractions";
import tanahLot from "@/assets/tanah-lot.jpg";
import riceTerraces from "@/assets/rice-terraces.jpg";
import monkeyForest from "@/assets/monkey-forest.jpg";
import mountBatur from "@/assets/mount-batur.jpg";

const AttractionDetail = () => {
  const { id } = useParams();
  const attraction = attractions.find((a) => a.id === id);

  const imageMap: { [key: string]: string } = {
    "tanah-lot.jpg": tanahLot,
    "rice-terraces.jpg": riceTerraces,
    "monkey-forest.jpg": monkeyForest,
    "mount-batur.jpg": mountBatur,
  };

  if (!attraction) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Attraction Not Found</h1>
          <Button asChild>
            <Link to="/attractions">Back to Attractions</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Image */}
      <section className="relative h-[60vh] min-h-[500px]">
        <img 
          src={imageMap[attraction.image]} 
          alt={attraction.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 pb-8">
          <div className="container mx-auto px-4">
            <Button variant="outline" className="mb-4 bg-background/80 backdrop-blur-sm" asChild>
              <Link to="/attractions">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Attractions
              </Link>
            </Button>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground drop-shadow-lg">
              {attraction.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-none shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">
                      <Tag className="h-4 w-4" />
                      {attraction.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4">About This Place</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                    {attraction.fullDescription}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {attraction.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-accent/50">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-none shadow-md sticky top-20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Location</h3>
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{attraction.location.address}</p>
                  </div>
                  
                  {/* Map Placeholder */}
                  <div className="w-full h-64 rounded-lg bg-accent/30 flex items-center justify-center mb-4 overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      style={{ border: 0 }}
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${attraction.location.lat},${attraction.location.lng}&zoom=14`}
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    asChild
                  >
                    <a 
                      href={`https://www.google.com/maps/dir/?api=1&destination=${attraction.location.lat},${attraction.location.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Plan Your Visit</h3>
                  <p className="text-muted-foreground mb-4">
                    Need help organizing your trip? We're here to assist you with personalized recommendations.
                  </p>
                  <Button className="w-full" variant="default" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AttractionDetail;
