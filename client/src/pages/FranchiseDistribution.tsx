import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TrendingUp, ArrowLeft, Phone } from "lucide-react";
import franchiseImage from "@/assets/generated_images/Franchise_distribution_support_1298d33b.png";
import { useState } from "react";
import DiscussRequirementsModal from "@/components/DiscussRequirementsModal";

const features = [
  "Franchise setup guidance",
  "Distribution network expansion",
  "Supply chain management support",
  "Growth strategy consulting"
];

const benefits = [
  "Faster expansion into new markets",
  "Structured & efficient operations", 
  "Lower risks with expert guidance",
  "Increased revenue potential"
];

export default function FranchiseDistribution() {
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
              <span className="text-foreground" data-testid="breadcrumb-current">Franchise & Distribution Support</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-24 bg-chart-3 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors" data-testid="link-back-services">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Services
                </Link>
                {/* <Badge variant="secondary" className="mb-4 bg-white text-chart-3" data-testid="badge-franchise">
                  Franchise & Distribution Support
                </Badge> */}
                <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-page-title">
                  Franchise & Distribution Support
                </h1>
                <p className="text-xl text-white/80 mb-8" data-testid="text-page-subtitle">
                  Expand Smarter, Grow Faster
                </p>
                <p className="text-lg text-white/70 mb-8" data-testid="text-page-overview">
                  We guide businesses in building and expanding franchise networks, optimizing supply chains, and strengthening distribution models for sustainable growth.
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => setModalOpen(true)}
                >
                  Start Your Expansion Journey
                  <TrendingUp className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={franchiseImage} 
                  alt="Franchise Distribution Support"
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
              Ready to Expand Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-cta-description">
              Let our experts guide you through franchise setup, distribution expansion, and strategic growth planning for sustainable business development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setModalOpen(true)}
              >
                Get Started Today
                <TrendingUp className="ml-2 w-5 h-5" />
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
                              service="Franchise Distribution Support" // 👈 pass context dynamically
                     />
        </section>
      </main>
      <Footer />
    </div>
  );
}