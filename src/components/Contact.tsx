import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, MessageCircle, Mail, X } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");

  const duration = prefersReducedMotion ? 0 : 0.8;
  const delay = (d: number) => (prefersReducedMotion ? 0 : d);

  const whatsappNumber = "+918950483522";
  const whatsappMessage = encodeURIComponent(`Hi, I'm ${name || "interested"}. I'd like to start a project.`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const emailLink = `https://mail.google.com/mail/?view=cm&to=info@fokelworks.com&su=${encodeURIComponent("New Project Inquiry")}&body=${encodeURIComponent("Hi, I'd like to discuss a project.")}`;

  return (
    <section id="contact" className="relative py-32 bg-primary overflow-hidden" ref={ref}>
      {/* Ambient animated gradient background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: prefersReducedMotion ? 0 : 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, hsl(var(--accent) / 0.1) 0%, transparent 60%)",
        }}
      />

      {/* subtle floating accent glow */}
      <motion.div
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl pointer-events-none"
        animate={prefersReducedMotion ? {} : { scale: [1, 1.05, 1], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Section label */}
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

        {/* Heading */}
        <div className="overflow-hidden mb-6">
          <motion.h2
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: delay(0.1),
              ease: [0.25, 0.1, 0.25, 1],
            }}
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

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration, delay: delay(0.25) }}
          className="mt-6 text-lg text-primary-foreground/70 max-w-lg mx-auto leading-relaxed"
        >
          Let's discuss how we can transform your digital presence and make your brand the undisputed authority in your
          niche.
        </motion.p>

        {/* CTA Button / Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration, delay: delay(0.4) }}
          className="mt-12 flex justify-center"
        >
          <AnimatePresence mode="wait">
            {!showForm ? (
              <motion.button
                key="cta"
                onClick={() => setShowForm(true)}
                className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-5 text-sm font-semibold uppercase tracking-wider transition-all duration-300 rounded-full cursor-pointer"
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : {
                        scale: 1.08,
                        y: -4,
                        boxShadow: "0 16px 48px -12px hsl(var(--accent) / 0.5)",
                        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                      }
                }
                whileTap={prefersReducedMotion ? {} : { scale: 0.96, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.button>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full max-w-md bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 relative"
              >
                {/* Close button */}
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute top-4 right-4 text-primary-foreground/50 hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <h3
                  className="text-xl font-bold text-primary-foreground mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Reach out to us
                </h3>

                {/* Action buttons */}
                <div className="flex flex-col gap-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-[hsl(142,70%,45%)] text-white px-6 py-3.5 text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Send Message on WhatsApp
                  </a>
                  <a
                    href={emailLink}
                    className="inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-6 py-3.5 text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
