import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Megaphone, 
  Globe,
  Target,
  Palette
} from "lucide-react";
import { Tilt } from "@/components/ui/Tilt";
import { DepthText } from "@/components/ui/DepthText";

const services = [
  {
    title: "Digital Marketing",
    subtitle: "Drive Growth",
    description:
      "Performance-driven campaigns that deliver measurable ROI. From SEO to social media, we engineer digital experiences that convert browsers into loyal customers.",
    icon: Megaphone,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Web Design & Development",
    subtitle: "Build Experiences",
    description:
      "Pixel-perfect websites that marry aesthetic excellence with functional brilliance. Every interaction crafted to engage, every page designed to convert.",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Digital Strategy",
    subtitle: "Define Direction",
    description:
      "Data-informed roadmaps that align your digital presence with business objectives. We transform market insights into actionable growth strategies.",
    icon: Target,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Brand Identity",
    subtitle: "Tell Your Story",
    description:
      "Comprehensive brand systems that capture essence and inspire connection. From visual identity to messaging frameworks, we build brands that resonate.",
    icon: Palette,
    color: "from-emerald-500 to-teal-500",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1 + i * 0.1,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/50 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="h-[2px] bg-accent"
          />
          <p className="section-label">
            What We Do
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <h2 className="heading-section text-foreground max-w-xl">
            Crafting digital experiences that <DepthText text="transform" className="text-accent inline-block font-semibold" glowColor="rgba(255, 107, 20, 0.45)" /> brands
          </h2>
          <p className="text-muted-foreground max-w-md lg:text-right">
            We combine strategic thinking with creative excellence to deliver results that exceed expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === i;

            return (
              <Tilt key={service.title} max={8} className="h-full">
                <motion.div
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative bg-background border border-border/50 rounded-2xl p-8 transition-all duration-500 cursor-pointer overflow-hidden h-full"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0`}
                    animate={{ opacity: isHovered ? 0.05 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-8 transition-all duration-300"
                      animate={{
                        scale: isHovered ? 1.1 : 1,
                      }}
                    >
                      <Icon className="w-6 h-6 text-foreground" />
                    </motion.div>

                    <p className="text-xs font-medium tracking-wider uppercase text-accent mb-2">
                      {service.subtitle}
                    </p>
                    
                    <h3 className="heading-card text-foreground mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="body-regular text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  />
                </motion.div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
