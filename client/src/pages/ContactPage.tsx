import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Badge } from "@/components/ui/badge";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4 bg-primary-foreground text-primary" data-testid="badge-contact-page">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-contact-page-title">
              Get In Touch
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto" data-testid="text-contact-page-intro">
              Ready to optimize your business operations? Contact V NEXT today for a consultation.
            </p>
          </div>
        </section>

        {/* Contact Component */}
        <Contact showHeader={false} />
      </main>
      <Footer />
    </div>
  );
}