import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Digital Marketing",
    description:
      "Performance marketing, SEO, social media, and content strategies that drive measurable growth and engagement for your brand.",
  },
  {
    number: "02",
    title: "Web Design & Development",
    description:
      "Beautiful, conversion-focused websites and digital experiences built with modern technology and meticulous attention to detail.",
  },
  {
    number: "03",
    title: "Digital Strategy",
    description:
      "Data-driven digital roadmaps that align business goals with market opportunities, positioning your brand as the undisputed authority.",
  },
  {
    number: "04",
    title: "Brand Identity",
    description:
      "Comprehensive brand development — from naming and visual identity to messaging frameworks that resonate with your target audience.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-28 lg:py-36 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-heading font-medium tracking-[0.4em] uppercase text-accent mb-4"
        >
          What We Do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1] tracking-[-0.02em] text-foreground mb-20"
        >
          Services<span className="text-accent">.</span>
        </motion.h2>

        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group border-t border-border py-8 lg:py-12 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-16 cursor-pointer hover:bg-secondary/50 transition-all duration-500 px-6 -mx-6"
            >
              <span className="text-xs font-heading text-muted-foreground font-medium tracking-[0.2em]">
                {service.number}
              </span>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground tracking-[-0.01em] flex items-center gap-4">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 text-accent" />
                </h3>
              </div>
              <p className="lg:max-w-sm text-sm text-muted-foreground leading-relaxed font-body">
                {service.description}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default Services;
