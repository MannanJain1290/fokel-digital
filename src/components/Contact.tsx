import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 bg-primary" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-[0.3em] uppercase text-accent mb-6"
        >
          Get In Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-primary-foreground"
        >
          Ready to bring
          <br />
          your brand into
          <br />
          <span className="text-accent">focus</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-lg text-primary-foreground/70 max-w-lg mx-auto leading-relaxed"
        >
          Let's discuss how we can transform your digital presence and
          make your brand the undisputed authority in your niche.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <a
            href="mailto:hello@fokel.com"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-5 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
