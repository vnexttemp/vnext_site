import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/vnext_logo.png";
import GetQuoteModal from "@/components/GetQuoteModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false); // NEW: Controls Get Quote modal

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src={logo}
                alt="VNext Synergy Solutions"
                className="h-14 w-auto object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-foreground">V NEXT</h1>
                <p className="text-sm text-muted-foreground">
                  Optimizing Accuracy | Empowering People | Driving Growth
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors" data-testid="link-home">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors" data-testid="link-about">
              About
            </Link>
            <Link href="/industries" className="text-foreground hover:text-primary transition-colors" data-testid="link-industries">
              Industries
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors" data-testid="link-services">
              Services
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors" data-testid="link-contact">
              Contact
            </Link>
          </nav>

          {/* Contact Info + Get Quote (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span data-testid="text-phone">8074010081</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span data-testid="text-email">vnextassociates@gmail.com</span>
            </div>
            <Button
              data-testid="button-get-quote"
              onClick={() => setIsQuoteOpen(true)} // open modal
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-foreground hover:text-primary transition-colors" data-testid="mobile-link-home">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors" data-testid="mobile-link-about">
                About
              </Link>
              <Link href="/industries" className="text-foreground hover:text-primary transition-colors" data-testid="mobile-link-industries">
                Industries
              </Link>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors" data-testid="mobile-link-services">
                Services
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors" data-testid="mobile-link-contact">
                Contact
              </Link>

              {/* Mobile Contact + Get Quote */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-2">
                  <Phone className="w-4 h-4" />
                  <span>8074010081</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-4">
                  <Mail className="w-4 h-4" />
                  <span>vnextassociates@gmail.com</span>
                </div>
                <Button
                  className="w-full"
                  data-testid="mobile-button-get-quote"
                  onClick={() => {
                    setIsMenuOpen(false); // close mobile menu
                    setIsQuoteOpen(true);  // open modal
                  }}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>

      {/* Quote Form Modal */}
      <GetQuoteModal open={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </header>
  );
}
