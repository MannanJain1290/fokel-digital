import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "20+", label: "Projects Delivered" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "5+", label: "Sectors Catered" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium tracking-[0.3em] uppercase text-accent mb-6"
            >
              Who We Are
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-foreground"
            >
              Bold ideas,
              <br />
              disruptive
              <br />
              execution<span className="text-accent">.</span>
            </motion.h2>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              At Fokel, our mission is to bring your business into the market focus 
              with a bold, disruptive edge. We combine strategic thinking with creative 
              excellence to craft digital experiences that captivate audiences and drive 
              measurable results.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Our vision is to redefine the digital landscape by setting a new gold standard 
              for B2B growth, where every brand we touch becomes the undisputed authority 
              in its niche.
            </motion.p>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-24 grid grid-cols-3 gap-8 border-t border-border pt-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                {stat.number}
              </p>
              <p className="mt-2 text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
