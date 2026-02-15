import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Split text for animation
  const headingLines = ["Bold ideas,", "disruptive", "execution"];

  return (
    <section id="about" className="py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div className="relative">
            {/* Section label with animated line */}
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 40 } : {}}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="h-[2px] bg-accent"
              />
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm font-medium tracking-[0.3em] uppercase text-accent"
              >
                Who We Are
              </motion.p>
            </div>
            
            {/* Animated heading with line-by-line reveal */}
            <div className="mb-8">
              {headingLines.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h2
                    initial={{ y: "100%" }}
                    animate={isInView ? { y: 0 } : {}}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.1 + i * 0.1, 
                      ease: [0.25, 0.1, 0.25, 1] 
                    }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-[-0.02em]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {line === "execution" ? (
                      <>execution<span className="text-accent">.</span></>
                    ) : (
                      <span className={i === 1 ? "text-accent italic font-normal" : ""}>
                        {line}
                      </span>
                    )}
                  </motion.h2>
                </div>
              ))}
            </div>
            
            {/* Decorative elements */}
            <motion.div
              className="absolute -left-20 top-1/2 w-40 h-40 rounded-full border border-accent/20"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div
              className="absolute -left-10 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-accent/10"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                At Fokel, our mission is to bring your business into the market focus 
                with a bold, disruptive edge. We combine strategic thinking with creative 
                excellence to craft digital experiences that captivate audiences and drive 
                measurable results.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Our vision is to redefine the digital landscape by setting a new gold standard 
                for B2B growth, where every brand we touch becomes the undisputed authority 
                in its niche.
              </p>
            </motion.div>
            
            {/* Animated accent line */}
            <motion.div
              className="mt-12 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="h-[1px] bg-gradient-to-r from-accent to-transparent flex-1"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.7 }}
                style={{ transformOrigin: "left" }}
              />
              <span className="text-xs text-accent uppercase tracking-wider">Since 2020</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
