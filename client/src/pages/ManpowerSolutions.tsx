import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, ArrowLeft, Phone } from "lucide-react";
import manpowerImage from "@/assets/generated_images/Manpower_solutions_team_e8f215f8.png";
import { useState } from "react";
import DiscussRequirementsModal from "@/components/DiscussRequirementsModal";

const features = [
  "Staffing support (skilled, semi-skilled, unskilled)",
  "Temporary & permanent workforce supply",
  "Compliance management", 
  "Workforce productivity training"
];

const benefits = [
  "Right talent at the right time",
  "Reduced hiring stress",
  "Flexible staffing models",
  "Improved compliance & productivity"
];

export default function ManpowerSolutions() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Breadcrumb */}
        <section className="py-6 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors" data-testid="breadcrumb-home">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-foreground transition-colors" data-testid="breadcrumb-services">
                Services
              </Link>
              <span>/</span>
              <span className="text-foreground" data-testid="breadcrumb-current">Manpower Solutions</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-24 bg-chart-2 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors" data-testid="link-back-services">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Services
                </Link>
                {/* <Badge variant="secondary" className="mb-4 bg-white text-chart-2" data-testid="badge-manpower">
                  Manpower Solutions
                </Badge> */}
                <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-page-title">
                  Manpower Solutions
                </h1>
                <p className="text-xl text-white/80 mb-8" data-testid="text-page-subtitle">
                  Building Teams, Powering Growth
                </p>
                <p className="text-lg text-white/70 mb-8" data-testid="text-page-overview">
                  Strategic workforce solutions designed to match the right people to the right roles, ensuring flexible, compliant, and productive staffing.
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => setModalOpen(true)}
                >
                  Get Workforce Support
                  <Users className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={manpowerImage} 
                  alt="Manpower Solutions Team"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Key Features */}
              <div>
                <h2 className="text-3xl font-bold mb-8" data-testid="text-features-title">
                  Key Features
                </h2>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-chart-2 mt-1 flex-shrink-0" />
                      <span className="text-lg" data-testid={`text-feature-${index}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold mb-8" data-testid="text-benefits-title">
                  Benefits
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-6 h-6 text-chart-2 mt-1 flex-shrink-0" />
                          <span className="text-lg" data-testid={`text-benefit-${index}`}>
                            {benefit}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-title">
              Ready to Build Your Perfect Team?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-cta-description">
              Let us help you find the right talent, reduce hiring stress, and build a flexible, productive workforce that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setModalOpen(true)}
              >
                Get Started Today
                <Users className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.location.href = "tel:8074010081"}
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now: 8074010081
              </Button>
            </div>
          </div>
          <DiscussRequirementsModal
                    open={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    service="Manpower Solutions" // 👈 pass context dynamically
           />
        </section>
      </main>
      <Footer />
    </div>
  );
}