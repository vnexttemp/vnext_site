import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, ShoppingCart, Factory, Truck } from "lucide-react";

const industries = [
  {
    id: "automobile",
    title: "Automobile",
    description: "Comprehensive quality control and inventory management for automotive manufacturers and suppliers.",
    icon: Car,
    color: "bg-primary",
    services: ["Quality Assurance", "Supply Chain Management", "Compliance Audits"]
  },
  {
    id: "retail",
    title: "Retail",
    description: "End-to-end retail solutions from inventory optimization to workforce management.",
    icon: ShoppingCart,
    color: "bg-chart-2",
    services: ["Inventory Management", "Staff Training", "Loss Prevention"]
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Process optimization and quality control for manufacturing operations.",
    icon: Factory,
    color: "bg-chart-3",
    services: ["Process Audits", "Quality Control", "Operational Excellence"]
  },
  {
    id: "logistics",
    title: "Logistics",
    description: "Streamlined logistics and distribution network management solutions.",
    icon: Truck,
    color: "bg-chart-4",
    services: ["Distribution Management", "Warehouse Optimization", "Supply Chain Audits"]
  }
];

export default function Industries() {
  return (
    <section className="py-24 bg-background" id="industries">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-industries">
            Industries We Serve
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-industries-title">
            Trusted Across Industries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-industries-description">
            Our expertise spans multiple industries, providing tailored solutions that address specific sector challenges and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <Card 
              key={industry.id}
              className="group hover-elevate cursor-pointer border-0 shadow-lg text-center"
              data-testid={`card-industry-${industry.id}`}
              onClick={() => console.log(`${industry.title} industry clicked`)}
            >
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4">
                  <div className={`${industry.color} p-4 rounded-full w-16 h-16 flex items-center justify-center`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl" data-testid={`text-industry-title-${industry.id}`}>
                  {industry.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm" data-testid={`text-industry-description-${industry.id}`}>
                  {industry.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Key Services
                  </h4>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {industry.services.map((service, index) => (
                      <Badge 
                        key={index}
                        variant="outline" 
                        className="text-xs"
                        data-testid={`badge-service-${industry.id}-${index}`}
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Don't see your industry? We're expanding our reach across South India.
          </p>
          <p className="text-lg font-semibold" data-testid="text-contact-info">
            Contact us to discuss your specific requirements
          </p>
        </div>
      </div>
    </section>
  );
}