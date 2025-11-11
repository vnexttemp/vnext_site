import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Cpu, MapPin, HeadphonesIcon, TrendingUp, Award } from "lucide-react";

const reasons = [
  {
    id: "expertise",
    title: "Strong Expertise",
    description: "Deep knowledge in audits & compliance with proven track record across industries.",
    icon: Shield,
    color: "bg-primary"
  },
  {
    id: "technology",
    title: "Technology-Driven",
    description: "Advanced ERP, RFID, and barcode solutions for maximum efficiency and accuracy.",
    icon: Cpu,
    color: "bg-chart-2"
  },
  {
    id: "reach",
    title: "Pan-South India Reach",
    description: "Extensive network coverage across South India with local expertise.",
    icon: MapPin,
    color: "bg-chart-3"
  },
  {
    id: "support",
    title: "Dedicated Support",
    description: "Customer-focused approach with dedicated support teams for each client.",
    icon: HeadphonesIcon,
    color: "bg-chart-4"
  },
  {
    id: "results",
    title: "Proven Results",
    description: "Reduced discrepancies by 40% and improved compliance ratings for clients.",
    icon: TrendingUp,
    color: "bg-chart-5"
  },
  {
    id: "quality",
    title: "Quality Assurance",
    description: "ISO certified processes ensuring highest standards of service delivery.",
    icon: Award,
    color: "bg-destructive"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-muted/30" id="why-choose-us">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-why-choose">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-why-choose-title">
            Your Trusted Business Partner
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-why-choose-description">
            Position V NEXT as your multi-service business partner beyond inventory management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <Card 
              key={reason.id}
              className="group hover-elevate cursor-pointer border-0 shadow-lg"
              data-testid={`card-reason-${reason.id}`}
              onClick={() => console.log(`${reason.title} reason clicked`)}
            >
              <CardHeader className="pb-4">
                <div className="mb-4">
                  <div className={`${reason.color} p-3 rounded-lg w-fit`}>
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl" data-testid={`text-reason-title-${reason.id}`}>
                  {reason.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground" data-testid={`text-reason-description-${reason.id}`}>
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

{/*  
        <div className="mt-16">
          <Card className="bg-primary text-primary-foreground border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4" data-testid="text-case-study-title">
                  Proven Track Record
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div data-testid="stat-discrepancy-reduction">
                    <div className="text-4xl font-bold mb-2">40%</div>
                    <p className="text-primary-foreground/80">Reduction in Discrepancies</p>
                  </div>
                  <div data-testid="stat-compliance-improvement">
                    <div className="text-4xl font-bold mb-2">95%</div>
                    <p className="text-primary-foreground/80">Compliance Rating Improvement</p>
                  </div>
                  <div data-testid="stat-cost-savings">
                    <div className="text-4xl font-bold mb-2">30%</div>
                    <p className="text-primary-foreground/80">Average Cost Savings</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>  
    </section>
  );
}