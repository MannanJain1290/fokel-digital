import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const duration = prefersReducedMotion ? 0 : 0.8;
  const delay = (d: number) => (prefersReducedMotion ? 0 : d);

  const emailLink = `https://mail.google.com/mail/?view=cm&to=info@fokelworks.com&su=${encodeURIComponent("New Project Inquiry")}&body=${encodeURIComponent("Hi, I'd like to discuss a project.")}`;

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
          className="mt-12 flex justify-center"
        >
          <motion.a
            href={emailLink}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1], delay: delay(0.5) }}
            className="inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
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
