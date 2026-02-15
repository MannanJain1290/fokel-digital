import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const duration = prefersReducedMotion ? 0 : 0.8;
  const delay = (d: number) => (prefersReducedMotion ? 0 : d);

  return (
    <footer
      className="relative bg-foreground text-background py-16 overflow-hidden"
      ref={ref}
    >
      {/* Ambient glow like other sections */}
      <motion.div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl pointer-events-none"
        animate={
          prefersReducedMotion
            ? {}
            : {
                scale: [1, 1.05, 1],
                y: [0, -12, 0],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* MAIN GRID */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration }}
          className="grid md:grid-cols-3 gap-12"
        >
          {/* BRAND */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration, delay: delay(0.05) }}
            >
              <img src={logoWhite} alt="Fokel" className="h-8 w-auto" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration, delay: delay(0.15) }}
              className="mt-4 text-background/60 leading-relaxed text-sm"
            >
              A digital studio specializing in digital marketing, web design, and
              digital strategy for ambitious businesses.
            </motion.p>
          </div>

          {/* NAVIGATION */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-4">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {["About", "Services", "Work", "Contact"].map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration, delay: delay(0.2 + i * 0.08) }}
                  whileHover={
                    prefersReducedMotion
                      ? {}
                      : { x: 6, color: "hsl(var(--background))" }
                  }
                  className="relative text-sm text-background/60 transition-all duration-300"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* CONNECT */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: "info@fokelworks.com", href: "mailto:info@fokelworks.com" },
                { label: "LinkedIn", href: "#" },
                { label: "Instagram", href: "#" },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration, delay: delay(0.25 + i * 0.08) }}
                  whileHover={
                    prefersReducedMotion
                      ? {}
                      : { x: 6, color: "hsl(var(--background))" }
                  }
                  className="text-sm text-background/60 transition-all duration-300"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration, delay: delay(0.5) }}
          className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-background/40">
            © 2026 Fokel. All rights reserved.
          </p>
          <p className="text-xs text-background/40">
            Bringing brands into focus.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
