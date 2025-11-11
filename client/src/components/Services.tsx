import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import inventoryImage from "@/assets/generated_images/Inventory_solutions_workspace_7c67174e.png";
import manpowerImage from "@/assets/generated_images/Manpower_solutions_team_e8f215f8.png";
import franchiseImage from "@/assets/generated_images/Franchise_distribution_support_1298d33b.png";

const services = [
  {
    id: "inventory",
    title: "Inventory Solutions",
    description: "Comprehensive inventory management and verification services with cutting-edge technology integration.",
    icon: Package,
    image: inventoryImage,
    link: "/services/inventory-solutions",
    features: [
      "Inventory Analysis & Verification",
      "Physical Stock Counts & Surprise Checks",
      "System Reports & Reconciliation",
      "Inventory Audits & Compliance Checks",
      "Internal Audits",
      "Data Analytics & Reporting"
    ],
    benefits: [
      "99%+ accuracy",
      "Reduced discrepancies",
      "Fraud prevention",
      "Cost savings",
      "Audit readiness"
    ],
    color: "bg-primary"
  },
  {
    id: "manpower",
    title: "Manpower Solutions",
    description: "Strategic workforce solutions providing the right talent at the right time for your business needs.",
    icon: Users,
    image: manpowerImage,
    link: "/services/manpower-solutions",
    features: [
      "Staffing support (skilled, semi-skilled, and unskilled)",
      "Temporary & permanent workforce supply",
      "Compliance management",
      "Workforce productivity training"
    ],
    benefits: [
      "Right talent at the right time",
      "Reduced hiring stress",
      "Flexible workforce",
      "Compliance assurance"
    ],
    color: "bg-chart-2"
  },
  {
    id: "franchise",
    title: "Franchise / Distribution Support",
    description: "End-to-end franchise and distribution network development to accelerate your business expansion.",
    icon: TrendingUp,
    image: franchiseImage,
    link: "/services/franchise-distribution",
    features: [
      "Franchise setup guidance",
      "Distribution network expansion",
      "Supply chain management support",
      "Growth strategy consulting"
    ],
    benefits: [
      "Faster expansion",
      "Structured operations",
      "Increased revenue",
      "Strategic growth"
    ],
    color: "bg-chart-3"
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-muted/30" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-services">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-services-title">
            Comprehensive Business Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-description">
            We provide specialized People, Product, and Process Assurance Services designed to optimize your operations and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="group hover-elevate cursor-pointer border-0 shadow-lg overflow-hidden"
              data-testid={`card-service-${service.id}`}
              onClick={() => console.log(`${service.title} service clicked`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className={`${service.color} p-3 rounded-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
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

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span data-testid={`text-feature-${service.id}-${featureIndex}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                    Benefits
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <Badge 
                        key={benefitIndex} 
                        variant="secondary" 
                        className="text-xs"
                        data-testid={`badge-benefit-${service.id}-${benefitIndex}`}
                      >
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Link href={service.link}>
                  <Button 
                    className="w-full group"
                    data-testid={`button-learn-more-${service.id}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/services">
            <Button 
              size="lg" 
              variant="outline"
              data-testid="button-view-all-services"
            >
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}