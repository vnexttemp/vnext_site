import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Package, ArrowLeft, Phone } from "lucide-react";
import inventoryImage from "@/assets/generated_images/Inventory_solutions_workspace_7c67174e.png";
import { useState } from "react";
import DiscussRequirementsModal from "@/components/DiscussRequirementsModal";

const features = [
  "Inventory Analysis & Verification",
  "Physical Stock Counts & Surprise Checks", 
  "System Reports & Reconciliation",
  "Inventory Audits & Compliance",
  "Internal Audits",
  "Data Analytics & Reporting"
];

const benefits = [
  "99%+ accuracy and reduced discrepancies",
  "Fraud prevention & compliance readiness", 
  "Cost savings & efficiency gains",
  "Reliable data for decision-making"
];

export default function InventorySolutions() {
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
              <span className="text-foreground" data-testid="breadcrumb-current">Inventory Solutions</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link href="/services" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors" data-testid="link-back-services">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Services
                </Link>
                {/* <Badge variant="secondary" className="mb-4 bg-primary-foreground text-primary" data-testid="badge-inventory">
                  Inventory Solutions
                </Badge> */}
                <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-page-title">
                  Inventory Solutions
                </h1>
                <p className="text-xl text-primary-foreground/80 mb-8" data-testid="text-page-subtitle">
                  Accurate, Compliant, Efficient
                </p>
                <p className="text-lg text-primary-foreground/70 mb-8" data-testid="text-page-overview">
                  Comprehensive inventory management and verification services tailored to ensure accuracy, compliance, and operational efficiency.
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => setModalOpen(true)}
                >
                  Optimize Your Inventory Today
                  <Package className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={inventoryImage} 
                  alt="Inventory Solutions Workspace"
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
              Ready to Optimize Your Inventory?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-cta-description">
              Let our experts help you achieve 99%+ accuracy, reduce discrepancies, and build a robust inventory management system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setModalOpen(true)}
              >
                Get Started Today
                <Package className="ml-2 w-5 h-5" />
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
        </section>
        <DiscussRequirementsModal
          open={isModalOpen}
          onClose={() => setModalOpen(false)}
          service="Inventory Solutions" // 👈 pass context dynamically
        />
      </main>
      <Footer />
    </div>
  );
}