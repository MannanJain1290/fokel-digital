import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Target, Zap, Award, ArrowUpRight } from "lucide-react";

const approaches = [
  {
    title: "Mission-Driven",
    description:
      "Every project starts with a deep understanding of your purpose. We align our strategies with your core mission to create authentic, impactful digital experiences.",
    icon: Target,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Fast Execution",
    description:
      "Speed without compromise. Our agile workflows and streamlined processes ensure rapid delivery while maintaining the highest standards of quality.",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Award-Winning Quality",
    description:
      "Excellence is non-negotiable. Our work consistently earns recognition for its creativity, innovation, and measurable impact on business growth.",
    icon: Award,
    color: "from-purple-500 to-pink-500",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.1 + i * 0.15,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

const OurApproach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-primary text-primary-foreground overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-4 pb-16 md:pt-6 md:pb-24">
        {/* Section label with animated line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex items-center gap-4 mb-6"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 40 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-[2px] bg-accent"
          />
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm font-medium tracking-[0.3em] uppercase text-accent"
          >
            Our Approach
          </motion.p>
        </motion.div>

        {/* Animated heading */}
        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How we work
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {approaches.map((approach, i) => {
            const Icon = approach.icon;
            const isHovered = hoveredIndex === i;
            const number = String(i + 1).padStart(2, "0");

            return (
              <motion.div
                key={approach.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 lg:p-8 flex flex-col justify-between min-h-[320px] overflow-hidden cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${approach.color} opacity-0 rounded-2xl`}
                  animate={{ opacity: isHovered ? 0.1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-accent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center"
                      animate={{
                        scale: isHovered ? 1.1 : 1,
                        backgroundColor: isHovered
                          ? "hsl(var(--accent))"
                          : "hsl(var(--accent) / 0.2)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon
                        className="w-5 h-5 transition-colors duration-300"
                        style={{
                          color: isHovered
                            ? "hsl(var(--primary))"
                            : "hsl(var(--accent))",
                        }}
                      />
                    </motion.div>
                    <motion.span
                      className="text-sm font-medium text-primary-foreground/30"
                      animate={{
                        color: isHovered
                          ? "hsl(var(--accent))"
                          : "hsl(var(--primary-foreground) / 0.3)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {number}
                    </motion.span>
                  </div>

                  <motion.h3
                    className="text-xl lg:text-2xl font-bold tracking-tight mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                    animate={{
                      color: isHovered
                        ? "hsl(var(--accent))"
                        : "hsl(var(--primary-foreground))",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {approach.title}
                  </motion.h3>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed">
                    {approach.description}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <motion.div
                  className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-accent/10"
                  animate={{
                    scale: isHovered ? 1.5 : 1,
                    opacity: isHovered ? 0.2 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
