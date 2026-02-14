import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import cursor3d from "@/assets/cursor-3d.png";

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

const marqueeItems = [
  "Digital Marketing",
  "Web Design",
  "Development",
  "Digital Strategy",
  "Brand Identity",
  "SEO",
  "Content Strategy",
  "Social Media",
  "Performance Marketing",
  "UI/UX Design",
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-16 bg-secondary overflow-hidden" ref={ref}>
      {/* Services Marquee */}
      <div className="border-y border-border py-5 mb-16 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap items-center">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex-shrink-0 mx-6 md:mx-10 text-lg md:text-2xl font-bold tracking-tight text-muted-foreground/40 uppercase"
            >
              {item}
              <span className="ml-6 md:ml-10 text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header with floating cursor */}
        <div className="relative mb-20">
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
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground"
          >
            We make <span className="text-accent">Brand</span>,
            <br />
            Product & Tech
            <br />
            Intersect<span className="text-accent">.</span>
          </motion.h2>

          {/* Floating 3D Cursor */}
          <motion.img
            src={cursor3d}
            alt=""
            className="absolute right-0 top-0 w-28 md:w-40 lg:w-52 pointer-events-none select-none"
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    y: [0, -12, 0],
                  }
                : {}
            }
            transition={{
              opacity: { duration: 0.8, delay: 0.3 },
              scale: { duration: 0.8, delay: 0.3 },
              rotate: { duration: 0.8, delay: 0.3 },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              },
            }}
          />
        </div>

        {/* Service Items */}
        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group border-t border-border cursor-pointer hover:bg-background/50 transition-all px-4 -mx-4"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="py-6 lg:py-10 flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-16">
                <span className="text-sm text-muted-foreground font-medium tracking-wider">
                  {service.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight flex items-center gap-4">
                    {service.title}
                    <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 text-accent" />
                  </h3>
                </div>
                <motion.p
                  initial={false}
                  animate={{
                    opacity: hoveredIndex === i ? 1 : 0.7,
                  }}
                  className="lg:max-w-sm text-muted-foreground leading-relaxed"
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default Services;
