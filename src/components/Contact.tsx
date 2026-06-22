import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, User, Loader2, FileText } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const duration = prefersReducedMotion ? 0 : 0.8;
  const delay = (d: number) => (prefersReducedMotion ? 0 : d);

  const emailLink = `https://mail.google.com/mail/?view=cm&to=info@fokelworks.com&su=${encodeURIComponent("New Project Inquiry")}&body=${encodeURIComponent("Hi, I'd like to discuss a project.")}`;

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill all fields");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      toast.success("Thank you! We'll be in touch soon.");
      setIsOpen(false);
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit the form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-primary overflow-hidden" ref={ref}>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: prefersReducedMotion ? 0 : 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, hsl(var(--accent) / 0.1) 0%, transparent 60%)",
        }}
      />

      <motion.div
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl pointer-events-none"
        animate={prefersReducedMotion ? {} : { scale: [1, 1.05, 1], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 40 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-[2px] bg-accent"
          />
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: delay(0.2) }}
            className="text-sm font-medium tracking-[0.3em] uppercase text-accent"
          >
            Get In Touch
          </motion.p>
        </div>

        <div className="overflow-hidden mb-6">
          <motion.h2
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.8, delay: delay(0.1), ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-primary-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to bring
            <br />
            your brand into
            <br />
            <span className="text-accent italic font-normal">focus</span>?
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration, delay: delay(0.25) }}
          className="mt-6 text-lg text-primary-foreground/70 max-w-lg mx-auto leading-relaxed"
        >
          Let's discuss how we can transform your digital presence and make your brand the undisputed authority in your niche.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration, delay: delay(0.4) }}
          className="mt-12 flex flex-col justify-center items-center gap-4"
        >
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-64 h-14 inline-flex items-center justify-center gap-3 bg-transparent text-accent border-accent hover:bg-accent/10 text-sm font-semibold rounded-full transition-all"
              >
                <FileText className="w-4 h-4" />
                Request a Callback
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-foreground text-background border-accent/20">
              <DialogHeader>
                <DialogTitle className="text-xl">Request a Callback</DialogTitle>
                <DialogDescription className="text-background/60">
                  Fill out the form below and we'll get back to you shortly.
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-background/80 flex items-center gap-2">
                    <User className="w-4 h-4" /> Your Name
                  </Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/30 focus-visible:ring-accent"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-background/80 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email
                  </Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/30 focus-visible:ring-accent"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-background/80 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Phone Number
                  </Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/30 focus-visible:ring-accent"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...
                    </>
                  ) : (
                    "Send Request"
                  )}
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          <motion.a
            href={emailLink}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1], delay: delay(0.5) }}
            className="w-64 h-14 inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            Email Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
