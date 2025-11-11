import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function DiscussRequirementsModal({
  open,
  onClose,
  service = "", // 👈 optional service name
}: {
  open: boolean;
  onClose: () => void;
  service?: string;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  // auto-reset when modal closes
  useEffect(() => {
    if (!open) {
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Trim and validate locally before sending
  const payload = {
    name: formData.name.trim(),
    email: formData.email.trim(),
    phone: formData.phone.trim(),
    message: formData.message.trim(),
    service,
  };

  if (!payload.name || !payload.email || !payload.phone) {
    toast({
      title: "Missing details",
      description: "Please fill in your name, email, and phone number.",
      variant: "destructive",
    });
    return;
  }

  try {
    const res = await fetch('/api/send-requirements', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.success) {
      toast({
        title: "Submitted!",
        description: "Thank you! We’ll get in touch with you soon.",
      });
      onClose();
    } else {
      toast({
        title: "Error",
        description: data.error || "Failed to send. Try again.",
        variant: "destructive",
      });
    }
  } catch (err) {
    toast({
      title: "Network Error",
      description: "Could not reach the server. Please try again later.",
      variant: "destructive",
    });
  }
};


  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>
            {service ? (
              <>
                {service} <span className="text-muted-foreground">— Discuss Your Requirements</span>
              </>
            ) : (
              "Discuss Your Requirements"
            )}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Describe your requirements (optional)..."
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
