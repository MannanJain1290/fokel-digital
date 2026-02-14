import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import digitalMarketing from "@/assets/services/digital-marketing.png";
import webDesign from "@/assets/services/web-design.png";
import digitalStrategy from "@/assets/services/digital-strategy.png";
import brandIdentity from "@/assets/services/brand-identity.png";

const services = [
  {
    title: "Digital Marketing",
    description:
      "Performance marketing, SEO, social media, and content strategies that drive measurable growth and engagement for your brand.",
    image: digitalMarketing,
  },
  {
    title: "Web Design & Development",
    description:
      "Beautiful, conversion-focused websites and digital experiences built with modern technology and meticulous attention to detail.",
    image: webDesign,
  },
  {
    title: "Digital Strategy",
    description:
      "Data-driven digital roadmaps that align business goals with market opportunities, positioning your brand as the undisputed authority.",
    image: digitalStrategy,
  },
  {
    title: "Brand Identity",
    description:
      "Comprehensive brand development — from naming and visual identity to messaging frameworks that resonate with your target audience.",
    image: brandIdentity,
  },
];

const marqueeItems = [
  "Digital Marketing",
  "Web Design",
  "SEO",
  "Branding",
  "Strategy",
  "Development",
  "UI/UX",
  "Content",
  "Analytics",
  "Growth",
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="bg-primary text-primary-foreground" ref={ref}>
      {/* Marquee */}
      <div className="py-5 border-y border-primary-foreground/10 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap items-center">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex-shrink-0 mx-8 text-sm font-medium tracking-[0.2em] uppercase text-primary-foreground/40"
            >
              {item}
              <span className="ml-8 text-accent">✦</span>
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
              className="group bg-primary-foreground/5 border border-primary-foreground/10 p-6 lg:p-8 flex flex-col justify-between min-h-[400px] hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-4">
                  {service.title}
                </h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center justify-center pt-8">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-40 h-40 object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
