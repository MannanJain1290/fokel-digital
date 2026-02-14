import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 lg:py-40 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Left - takes 5 cols */}
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[11px] font-heading font-medium tracking-[0.4em] uppercase text-accent mb-8"
            >
              Who We Are
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1] tracking-[-0.02em] text-foreground"
            >
              Bold ideas,
              <br />
              disruptive
              <br />
              execution<span className="text-accent">.</span>
            </motion.h2>
          </div>

          {/* Right - takes 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <p className="text-base md:text-lg text-muted-foreground leading-[1.8] font-body">
                At Fokel, our mission is to bring your business into the market focus 
                with a bold, disruptive edge. We combine strategic thinking with creative 
                excellence to craft digital experiences that captivate audiences and drive 
                measurable results.
              </p>
              <div className="mt-8 h-px w-full bg-border" />
              <p className="mt-8 text-base md:text-lg text-muted-foreground leading-[1.8] font-body">
                Our vision is to redefine the digital landscape by setting a new gold standard 
                for B2B growth, where every brand we touch becomes the undisputed authority 
                in its niche.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
