import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_corporate_office_hero_edcad770.png";
import { useState } from "react";
import GetQuoteModal from "@/components/GetQuoteModal";

export default function Hero() {
  const [isQuoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional corporate office environment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" data-testid="text-hero-title">
            Optimizing Accuracy<br />
            <span className="text-primary">Empowering People</span><br />
            Driving Growth
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto" data-testid="text-hero-description">
            At V NEXT, we help businesses build efficiency, accuracy, and growth through our comprehensive People, Product, and Process Assurance Services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => setQuoteModalOpen(true)}
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
              data-testid="button-learn-more"
              onClick={() => console.log('Learn More clicked')}
            >
              Learn More
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center" data-testid="stat-accuracy">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="w-6 h-6 text-chart-2 mr-2" />
                <span className="text-3xl font-bold">99%+</span>
              </div>
              <p className="text-gray-300">Accuracy Rate</p>
            </div>
            <div className="text-center" data-testid="stat-clients">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="w-6 h-6 text-chart-2 mr-2" />
                <span className="text-3xl font-bold">500+</span>
              </div>
              <p className="text-gray-300">Satisfied Clients</p>
            </div>
            <div className="text-center" data-testid="stat-experience">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="w-6 h-6 text-chart-2 mr-2" />
                <span className="text-3xl font-bold">15+</span>
              </div>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
      <GetQuoteModal
        open={isQuoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </section>
  );
}