import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-20 lg:py-0">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-muted-foreground mb-8"
          >
            Digital Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-bold leading-[0.95] tracking-tight text-foreground"
          >
            We bring
            <br />
            your brand
            <br />
            into <span className="text-accent">focus</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Fokel is a digital studio specializing in digital marketing, web design,
            and digital strategy for ambitious businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-3"
            >
              View Our Work
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="border border-foreground text-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 h-px bg-border"
      />
    </section>
  );
};

export default Hero;
