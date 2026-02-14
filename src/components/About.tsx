import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-primary text-primary-foreground" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-10"
        >
          Bold ideas,
          <br />
          disruptive execution<span className="text-accent">.</span>
        </motion.h2>
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed"
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
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 leading-relaxed"
          >
            Our vision is to redefine the digital landscape by setting a new gold standard 
            for B2B growth, where every brand we touch becomes the undisputed authority 
            in its niche.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
