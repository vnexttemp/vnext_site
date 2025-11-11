import { Link } from "wouter";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-foreground rounded-md flex items-center justify-center">
                <span className="text-primary font-bold">V</span>
              </div>
              <div>
                <h3 className="text-lg font-bold" data-testid="text-footer-company">
                  V NEXT
                </h3>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm" data-testid="text-footer-tagline">
              Optimizing Accuracy | Empowering People | Driving Growth
            </p>
            <p className="text-primary-foreground/70 text-sm" data-testid="text-footer-description">
              Your trusted partner for People, Product, and Process Assurance Services across South India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" data-testid="text-footer-quick-links">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm" data-testid="footer-link-home">
                Home
              </Link>
              <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm" data-testid="footer-link-about">
                About Us
              </Link>
              <Link href="/industries" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm" data-testid="footer-link-industries">
                Industries
              </Link>
              <Link href="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm" data-testid="footer-link-services">
                Services
              </Link>
              <Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm" data-testid="footer-link-contact">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" data-testid="text-footer-services">
              Our Services
            </h4>
            <div className="flex flex-col space-y-2">
              <span className="text-primary-foreground/80 text-sm" data-testid="text-footer-service-inventory">
                Inventory Solutions
              </span>
              <span className="text-primary-foreground/80 text-sm" data-testid="text-footer-service-manpower">
                Manpower Solutions
              </span>
              <span className="text-primary-foreground/80 text-sm" data-testid="text-footer-service-franchise">
                Franchise Support
              </span>
              <span className="text-primary-foreground/80 text-sm" data-testid="text-footer-service-audits">
                Internal Audits
              </span>
              <span className="text-primary-foreground/80 text-sm" data-testid="text-footer-service-compliance">
                Compliance Management
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" data-testid="text-footer-contact">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 text-sm" data-testid="text-footer-phone-1">8074010081</p>
                  <p className="text-primary-foreground/80 text-sm" data-testid="text-footer-phone-2">040-35100665</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm" data-testid="text-footer-email">
                  vnextassociates@gmail.com
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <p data-testid="text-footer-address-1">#820, 8th Floor</p>
                  <p data-testid="text-footer-address-2">Manjeera Majestic Commercial</p>
                  <p data-testid="text-footer-address-3">JNTU-Hitech City Road</p>
                  <p data-testid="text-footer-address-4">Kukatpally, Hyderabad - 500015</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm" data-testid="text-footer-website">
                  www.vnextassociates.in
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/70 text-sm" data-testid="text-footer-copyright">
              © {currentYear} V NEXT. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm" data-testid="footer-link-privacy">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm" data-testid="footer-link-terms">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}