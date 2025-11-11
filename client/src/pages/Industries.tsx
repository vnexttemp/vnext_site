import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, ShoppingCart, Factory, Truck, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { useState } from "react";
import DiscussRequirementsModal from "@/components/DiscussRequirementsModal";


const industries = [
  {
    id: "automobile",
    title: "Automobile",
    description: "Comprehensive quality control and inventory management for automotive manufacturers and suppliers across the value chain.",
    icon: Car,
    color: "bg-primary",
    services: [
      "Quality Assurance & Control",
      "Supply Chain Management", 
      "Compliance Audits",
      "Inventory Optimization",
      "Vendor Management",
      "Process Documentation"
    ],
    benefits: [
      "Reduced manufacturing defects",
      "Improved supply chain efficiency",
      "Enhanced compliance standards",
      "Cost optimization",
      "Quality certifications"
    ],
    caseStudy: "Helped a leading automotive parts manufacturer reduce inventory discrepancies by 45% and achieve ISO certification."
  },
  {
    id: "retail",
    title: "Retail",
    description: "End-to-end retail solutions from inventory optimization to workforce management for enhanced customer experience.",
    icon: ShoppingCart,
    color: "bg-chart-2",
    services: [
      "Inventory Management",
      "Staff Training & Development",
      "Loss Prevention",
      "Customer Service Training",
      "Store Operations Audit",
      "Franchise Support"
    ],
    benefits: [
      "Reduced inventory shrinkage",
      "Improved customer satisfaction",
      "Enhanced staff productivity",
      "Streamlined operations",
      "Better profit margins"
    ],
    caseStudy: "Enabled a retail chain to reduce inventory shrinkage by 35% and improve customer satisfaction scores by 25%."
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Process optimization and quality control for manufacturing operations to achieve operational excellence.",
    icon: Factory,
    color: "bg-chart-3",
    services: [
      "Process Audits",
      "Quality Control Systems",
      "Operational Excellence",
      "Lean Manufacturing",
      "Safety Compliance",
      "Equipment Optimization"
    ],
    benefits: [
      "Increased production efficiency",
      "Reduced waste and defects",
      "Improved safety standards",
      "Cost reduction",
      "Enhanced quality metrics"
    ],
    caseStudy: "Assisted a manufacturing unit to achieve 20% increase in production efficiency and 30% reduction in waste."
  },
  {
    id: "logistics",
    title: "Logistics",
    description: "Streamlined logistics and distribution network management solutions for optimized supply chain operations.",
    icon: Truck,
    color: "bg-chart-4",
    services: [
      "Distribution Management",
      "Warehouse Optimization",
      "Supply Chain Audits",
      "Transportation Management",
      "Last-mile Solutions",
      "Technology Integration"
    ],
    benefits: [
      "Faster delivery times",
      "Reduced operational costs",
      "Improved accuracy",
      "Enhanced tracking",
      "Better customer service"
    ],
    caseStudy: "Optimized distribution network for a logistics company, reducing delivery times by 40% and costs by 25%."
  }
];

export default function Industries() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4 bg-primary-foreground text-primary" data-testid="badge-industries">
              Industries We Serve
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-industries-title">
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-4xl mx-auto" data-testid="text-industries-intro">
              Our expertise spans multiple industries, providing tailored solutions that address specific sector challenges and drive measurable results.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {industries.map((industry, index) => (
                <div 
                  key={industry.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="mb-6">
                      <div className={`${industry.color} p-4 rounded-lg w-fit mb-4`}>
                        <industry.icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid={`text-industry-title-${industry.id}`}>
                        {industry.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6" data-testid={`text-industry-description-${industry.id}`}>
                        {industry.description}
                      </p>
                    </div>

                    {/* Services */}
                    <div className="mb-8">
                      <h3 className="font-semibold mb-4 text-lg">Key Services</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {industry.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-chart-2 flex-shrink-0" />
                            <span className="text-sm" data-testid={`text-service-${industry.id}-${serviceIndex}`}>
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-8">
                      <h3 className="font-semibold mb-4 text-lg">Benefits</h3>
                      <div className="flex flex-wrap gap-2">
                        {industry.benefits.map((benefit, benefitIndex) => (
                          <Badge 
                            key={benefitIndex}
                            variant="secondary" 
                            className="text-xs"
                            data-testid={`badge-benefit-${industry.id}-${benefitIndex}`}
                          >
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Case Study */}
                    <Card className="border-0 shadow-lg bg-muted/50 mb-6">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">
                          Success Story
                        </h4>
                        <p className="text-sm" data-testid={`text-case-study-${industry.id}`}>
                          {industry.caseStudy}
                        </p>
                      </CardContent>
                    </Card>

                    <Button 
                      data-testid={`button-learn-more-${industry.id}`}
                      onClick={() => console.log(`Learn more about ${industry.title} solutions clicked`)}
                    >
                      Learn More About {industry.title} Solutions
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>

                  {/* Image/Icon */}
                  <div className={`text-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className={`${industry.color} p-16 rounded-3xl mx-auto w-fit shadow-xl`}>
                      <industry.icon className="w-24 h-24 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expanding Industries */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-expanding-title">
              Expanding Our Reach
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-expanding-description">
              We're continuously expanding our expertise to serve more industries across South India. Don't see your industry listed? We're here to help.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Healthcare</div>
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">FMCG</div>
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Textiles</div>
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Agriculture</div>
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setOpenModal(true)}
              >
                Discuss Your Requirements
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.location.href = "tel:8074010081"}
              >
                <Phone className="mr-2 w-5 h-5" />
                Call: 8074010081
              </Button>
            </div>
          </div>
        </section>
      </main>
      <DiscussRequirementsModal open={openModal} onClose={() => setOpenModal(false)} />
      <Footer />
    </div>
  );
}