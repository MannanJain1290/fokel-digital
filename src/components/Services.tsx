import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Digital Marketing",
    description:
      "Performance marketing, SEO, social media, and content strategies that drive measurable growth and engagement for your brand.",
  },
  {
    title: "Web Design & Development",
    description:
      "Beautiful, conversion-focused websites and digital experiences built with modern technology and meticulous attention to detail.",
  },
  {
    title: "Digital Strategy",
    description:
      "Data-driven digital roadmaps that align business goals with market opportunities, positioning your brand as the undisputed authority.",
  },
  {
    title: "Brand Identity",
    description:
      "Comprehensive brand development — from naming and visual identity to messaging frameworks that resonate with your target audience.",
  },
];

const marqueeServices = [
  "Digital Marketing",
  "Web Design",
  "Branding",
  "Strategy",
  "Development",
  "UI/UX Design",
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="bg-primary text-primary-foreground" ref={ref}>
      {/* Large outlined text marquee */}
      <div className="py-8 overflow-hidden border-b border-primary-foreground/10">
        <div className="animate-marquee flex whitespace-nowrap items-center">
          {[...marqueeServices, ...marqueeServices, ...marqueeServices, ...marqueeServices].map((item, i) => (
            <span
              key={i}
              className="flex-shrink-0 mx-4 text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight"
              style={{
                WebkitTextStroke: "1.5px hsl(var(--primary-foreground) / 0.3)",
                WebkitTextFillColor: "transparent",
              }}
            >
              {item}
              <span className="mx-4 text-accent" style={{ WebkitTextFillColor: "hsl(var(--accent))" }}>•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-[0.3em] uppercase text-accent mb-6"
        >
          What We Do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-16"
        >
          Services<span className="text-accent">.</span>
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group bg-primary-foreground/5 border border-primary-foreground/10 p-6 lg:p-8 flex flex-col justify-start min-h-[280px] hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-4">
                  {service.title}
                </h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
