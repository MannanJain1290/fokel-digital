import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
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
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-foreground"
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
                href="#contact"
                className="bg-accent text-accent-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-3"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="border border-foreground text-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors"
              >
                Our Services
              </a>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-16 flex gap-12"
            >
              {[
                { value: "150+", label: "Projects" },
                { value: "98%", label: "Retention" },
                { value: "3.5x", label: "Avg. ROI" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square">
              <img
                src={heroVisual}
                alt="Abstract digital growth visualization"
                className="w-full h-full object-cover"
              />
              {/* Accent border frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-accent/30 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>

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
