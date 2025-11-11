import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Users, TrendingUp, ArrowRight } from "lucide-react";
import inventoryImage from "@/assets/generated_images/Inventory_solutions_workspace_7c67174e.png";
import manpowerImage from "@/assets/generated_images/Manpower_solutions_team_e8f215f8.png";
import franchiseImage from "@/assets/generated_images/Franchise_distribution_support_1298d33b.png";

const services = [
  {
    id: "inventory-solutions",
    title: "Inventory Solutions",
    description: "Comprehensive inventory management & verification services to ensure accuracy, compliance, and efficiency.",
    icon: Package,
    image: inventoryImage,
    link: "/services/inventory-solutions"
  },
  {
    id: "manpower-solutions", 
    title: "Manpower Solutions",
    description: "Strategic workforce solutions that deliver the right talent at the right time, reducing hiring stress and improving productivity.",
    icon: Users,
    image: manpowerImage,
    link: "/services/manpower-solutions"
  },
  {
    id: "franchise-distribution",
    title: "Franchise / Distribution Support", 
    description: "Helping businesses expand smarter with franchise setup, distribution network growth, and supply chain support.",
    icon: TrendingUp,
    image: franchiseImage,
    link: "/services/franchise-distribution"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4 bg-primary-foreground text-primary" data-testid="badge-services">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-services-title">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-4xl mx-auto" data-testid="text-services-intro">
              At V NEXT, we specialize in three core areas to help businesses achieve accuracy, efficiency, and growth.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card 
                  key={service.id}
                  className="group hover-elevate cursor-pointer border-0 shadow-lg overflow-hidden h-full"
                  data-testid={`card-service-${service.id}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-primary p-3 rounded-lg">
                        <service.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl mb-2" data-testid={`text-service-title-${service.id}`}>
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground" data-testid={`text-service-description-${service.id}`}>
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0 mt-auto">
                    <Link href={service.link}>
                      <Button 
                        className="w-full group"
                        data-testid={`button-learn-more-${service.id}`}
                      >
                        Learn More 
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}