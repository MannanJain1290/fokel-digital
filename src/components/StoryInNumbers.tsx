import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { number: 20, suffix: "+", label: "Projects" },
  { number: 100, suffix: "%", label: "Client Satisfaction" },
  { number: 5, suffix: "+", label: "Sectors" },
  { number: 2.5, suffix: "x", label: "ROI" },
];

const DIGIT_HEIGHT = 80; // px per digit

const RollingDigit = ({ digit, delay }: { digit: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        springValue.set(digit);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [isInView, digit, delay, springValue]);

  const y = useTransform(springValue, (v) => -v * DIGIT_HEIGHT);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden"
      style={{ height: DIGIT_HEIGHT, width: "0.65em" }}
    >
      <motion.div style={{ y }} className="flex flex-col">
        {Array.from({ length: 10 }, (_, i) => (
          <span
            key={i}
            className="block text-center font-bold leading-none text-foreground"
            style={{ height: DIGIT_HEIGHT, lineHeight: `${DIGIT_HEIGHT}px` }}
          >
            {i}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const AnimatedNumber = ({
  number,
  suffix,
  delay: baseDelay,
}: {
  number: number;
  suffix: string;
  delay: number;
}) => {
  const parts = String(number).split("");

  return (
    <div className="flex items-center text-5xl md:text-7xl lg:text-8xl">
      {parts.map((part, i) =>
        part === "." ? (
          <span
            key={i}
            className="font-bold text-foreground leading-none"
            style={{ lineHeight: `${DIGIT_HEIGHT}px` }}
          >
            .
          </span>
        ) : (
          <RollingDigit
            key={i}
            digit={Number(part)}
            delay={baseDelay + i * 150}
          />
        )
      )}
      <span
        className="font-bold text-accent leading-none"
        style={{ lineHeight: `${DIGIT_HEIGHT}px` }}
      >
        {suffix}
      </span>
    </div>
  );
};

const StoryInNumbers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-10 md:py-16 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-[0.3em] uppercase text-accent mb-4"
        >
          Our Story
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-foreground mb-20"
        >
          In Numbers<span className="text-accent">.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="flex flex-col"
            >
              <AnimatedNumber
                number={stat.number}
                suffix={stat.suffix}
                delay={i * 200}
              />
              <div className="mt-4 h-px w-full bg-border" />
              <p className="mt-4 text-sm md:text-base text-muted-foreground uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryInNumbers;
