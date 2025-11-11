import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Contact({ showHeader = true }: { showHeader?: boolean }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch(`${API_BASE_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
      return await response.json();
    },
    onSuccess: (response: any) => {
      toast({
        title: "Message Sent!",
        description: response.message || "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });
    },
    onError: (error: any) => {
      const errorMessage = error?.message || "Something went wrong. Please try again or call us directly.";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["8074010081", "040-35100665"],
      color: "bg-primary"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["vnextassociates@gmail.com"],
      color: "bg-chart-2"
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        "#820, 8th Floor",
        "Manjeera Majestic Commercial",
        "JNTU-Hitech City Road",
        "Kukatpally, Hyderabad - 500015"
      ],
      color: "bg-chart-3"
    }
  ];

  return (
    <section className="py-24 bg-background" id="contact">
      <div className="container mx-auto px-4">
        {showHeader && (
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4" data-testid="badge-contact">
              Contact Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-contact-title">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-description">
              Ready to optimize your business operations? Contact us today for a consultation and discover how we can help drive your growth.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="hover-elevate border-0 shadow-lg text-center"
              data-testid={`card-contact-info-${index}`}
            >
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4">
                  <div className={`${info.color} p-3 rounded-lg w-fit mx-auto`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-lg" data-testid={`text-contact-info-title-${index}`}>
                  {info.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {info.details.map((detail, detailIndex) => (
                  <p 
                    key={detailIndex} 
                    className="text-muted-foreground text-sm mb-1"
                    data-testid={`text-contact-detail-${index}-${detailIndex}`}
                  >
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl" data-testid="text-form-title">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      data-testid="input-phone"
                    />
                  </div>
                  <div>
                    <Input
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      data-testid="input-company"
                    />
                  </div>
                </div>

                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-input rounded-md bg-background text-foreground"
                    required
                    data-testid="select-service"
                  >
                    <option value="">Select Service Interest</option>
                    <option value="inventory">Inventory Solutions</option>
                    <option value="manpower">Manpower Solutions</option>
                    <option value="franchise">Franchise/Distribution Support</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    data-testid="textarea-message"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit-form"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"} 
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle data-testid="text-location-title">Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-xl overflow-hidden shadow-lg border border-muted">
                  {/* Google Map Embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3805.329344114383!2d78.39108657516734!3d17.49178498341331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI5JzMwLjQiTiA3OMKwMjMnMzcuMiJF!5e0!3m2!1sen!2sin!4v1762849321027!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                  {/* Label below map */}
                  <div className="p-4 bg-muted/40 text-center">
                    <h4 className="font-semibold text-lg">V NEXT</h4>
                    <p className="text-sm text-muted-foreground">
                      8th Floor, Manjeera Majestic Commercial,<br />
                      JNTU-Hitech City Road, Kukatpally, Hyderabad - 500015
                    </p>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=V+NEXT+Synergy+Solutions,+Manjeera+Majestic+Commercial,+Kukatpally"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline mt-2 inline-block"
                    >
                      📍 Get Directions
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4" data-testid="text-cta-title">
                  Ready to Get Started?
                </h3>
                <p className="mb-6 text-primary-foreground/80">
                  Schedule a free consultation to discuss your specific business needs and learn how our solutions can drive your growth.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  data-testid="button-schedule-consultation"
                  onClick={() => window.location.href = "tel:8074010081"}
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Schedule Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
