import { useState } from "react";
import { Link, useLocation } from "wouter"; // if not already used
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Target, Users, Award, CheckCircle, ArrowRight } from "lucide-react";
import DiscussRequirementsModal from "@/components/DiscussRequirementsModal";

const values = [
  {
    icon: Target,
    title: "Accuracy",
    description: "We deliver 99%+ accuracy in all our services, ensuring reliable results you can trust."
  },
  {
    icon: Users,
    title: "People-Centric",
    description: "Empowering businesses by connecting them with the right talent and expertise."
  },
  {
    icon: Award,
    title: "Growth-Focused",
    description: "Driving sustainable business growth through strategic solutions and process optimization."
  }
];

// const milestones = [
//   {
//     year: "2008",
//     title: "Company Founded",
//     description: "Started as V Next Associates with a focus on inventory solutions in Hyderabad."
//   },
//   {
//     year: "2015",
//     title: "Service Expansion",
//     description: "Expanded into manpower solutions and franchise support services."
//   },
//   {
//     year: "2020",
//     title: "Technology Integration",
//     description: "Implemented advanced ERP, RFID, and barcode technologies for enhanced accuracy."
//   },
//   {
//     year: "2023",
//     title: "Rebranding",
//     description: "Evolved to V NEXT Synergy Solutions, reflecting our comprehensive service portfolio."
//   }
// ];

export default function About() {
  const [isDiscussModalOpen, setDiscussModalOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4 bg-primary-foreground text-primary" data-testid="badge-about">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-about-title">
              About V NEXT
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-4xl mx-auto" data-testid="text-about-intro">
              At V NEXT, we help businesses build efficiency, accuracy, and growth. We are a passionate team of professionals providing People, Product, and Process Assurance Services for enterprises across industries.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4">
                    <div className="bg-primary p-4 rounded-full w-16 h-16 flex items-center justify-center">
                      <Target className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl" data-testid="text-mission-title">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg text-muted-foreground" data-testid="text-mission-content">
                    To deliver smart, reliable, and technology-driven solutions that create measurable impact for businesses across industries.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4">
                    <div className="bg-chart-2 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl" data-testid="text-vision-title">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg text-muted-foreground" data-testid="text-vision-content">
                    To empower businesses with accuracy, transparency, and operational excellence, becoming the trusted partner for sustainable growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4" data-testid="badge-values">
                Core Values
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-values-title">
                What Drives Us
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-values-description">
                Our core values shape everything we do and guide us in delivering exceptional service to our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="group hover-elevate border-0 shadow-lg text-center"
                  data-testid={`card-value-${index}`}
                >
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4">
                      <div className="bg-primary p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <value.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    <CardTitle className="text-xl" data-testid={`text-value-title-${index}`}>
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground" data-testid={`text-value-description-${index}`}>
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Journey */}
        {/* <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4" data-testid="badge-journey">
                Our Journey
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-journey-title">
                15+ Years of Excellence
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-journey-description">
                From V Next Associates to V NEXT Synergy Solutions, our journey reflects continuous growth and evolution.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className="flex flex-col md:flex-row items-start md:items-center gap-6 group"
                    data-testid={`milestone-${index}`}
                  >
                    <div className="flex-shrink-0">
                      <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-lg">
                        {milestone.year}
                      </div>
                    </div>
                    <Card className="flex-1 border-0 shadow-lg group-hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3" data-testid={`text-milestone-title-${index}`}>
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground" data-testid={`text-milestone-description-${index}`}>
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* Why Choose Us */}
        {/* <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 bg-primary-foreground text-primary" data-testid="badge-expertise">
                Our Expertise
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-expertise-title">
                Why Businesses Trust Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center" data-testid="stat-experience">
                <div className="text-4xl font-bold mb-2">15+</div>
                <p className="text-primary-foreground/80">Years of Experience</p>
              </div>
              <div className="text-center" data-testid="stat-clients">
                <div className="text-4xl font-bold mb-2">500+</div>
                <p className="text-primary-foreground/80">Happy Clients</p>
              </div>
              <div className="text-center" data-testid="stat-accuracy">
                <div className="text-4xl font-bold mb-2">99%+</div>
                <p className="text-primary-foreground/80">Accuracy Rate</p>
              </div>
              <div className="text-center" data-testid="stat-industries">
                <div className="text-4xl font-bold mb-2">10+</div>
                <p className="text-primary-foreground/80">Industries Served</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-title">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-cta-description">
              Let's discuss how V NEXT can help optimize your business operations and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                data-testid="button-get-started"
                onClick={() => setDiscussModalOpen(true)}
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/services">
                <Button 
                  size="lg" 
                  variant="outline"
                  data-testid="button-learn-services"
                >
                  Learn About Our Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Discuss Requirements Modal */}
          <DiscussRequirementsModal 
            open={isDiscussModalOpen}
            onClose={() => setDiscussModalOpen(false)}
            service="General Inquiry"
          />
        </section>

      </main>
      <Footer />
    </div>
  );
}