import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function GetQuoteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: ""
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:3000/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        toast({
          title: "Quote Sent!",
          description: "Thank you for your interest. We’ll get back to you soon.",
        });
        setFormData({ name: "", email: "", service: "", phone: "" });
        onClose();
      } else {
        toast({ title: "Error", description: "Something went wrong. Try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Failed to send request.", variant: "destructive" });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Request a Quote</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <Input name="phone" type="tel" placeholder="Phone Number" value={formData.phone || ""} onChange={handleChange} required/>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
            required
          >
            <option value="">Select Service</option>
            <option value="inventory">Inventory Solutions</option>
            <option value="manpower">Manpower Solutions</option>
            <option value="franchise">Franchise/Distribution Support</option>
            <option value="consultation">General Consultation</option>
          </select>
          {/* <Textarea
            name="message"
            placeholder="Briefly describe your requirements..."
            rows={4}
            value={formData.message}
            onChange={handleChange}
          /> */}
          <Button type="submit" className="w-full">Submit Quote</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
