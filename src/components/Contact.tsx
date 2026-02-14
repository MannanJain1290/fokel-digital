import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 lg:py-40 bg-foreground" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-heading font-medium tracking-[0.4em] uppercase text-accent mb-8"
        >
          Get In Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-[5.5rem] font-heading font-bold leading-[0.95] tracking-[-0.03em] text-background"
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
          className="mt-10 text-base text-background/50 max-w-md mx-auto leading-relaxed font-body"
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
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-5 text-xs font-heading font-semibold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity"
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
