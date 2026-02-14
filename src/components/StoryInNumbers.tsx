import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { number: 20, suffix: "+", label: "Projects Delivered" },
  { number: 100, suffix: "%", label: "Client Satisfaction" },
  { number: 5, suffix: "+", label: "Sectors Catered" },
];

const DIGIT_HEIGHT = 90;

const RollingDigit = ({ digit, delay }: { digit: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const springValue = useSpring(0, {
    stiffness: 40,
    damping: 18,
    mass: 1.2,
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
      style={{ height: DIGIT_HEIGHT, width: "0.6em" }}
    >
      <motion.div style={{ y }} className="flex flex-col">
        {Array.from({ length: 10 }, (_, i) => (
          <span
            key={i}
            className="block text-center font-heading font-bold leading-none text-foreground"
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
  const digits = String(number).split("").map(Number);

  return (
    <div className="flex items-center text-6xl md:text-7xl lg:text-[5.5rem]">
      {digits.map((digit, i) => (
        <RollingDigit key={i} digit={digit} delay={baseDelay + i * 150} />
      ))}
      <span
        className="font-heading font-bold text-accent leading-none"
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
    <section className="py-28 lg:py-36 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-heading font-medium tracking-[0.4em] uppercase text-accent mb-4"
        >
          Our Story
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1] tracking-[-0.02em] text-foreground mb-20"
        >
          In Numbers<span className="text-accent">.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="flex flex-col"
            >
              <AnimatedNumber
                number={stat.number}
                suffix={stat.suffix}
                delay={i * 250}
              />
              <div className="mt-6 h-px w-full bg-border" />
              <p className="mt-4 text-xs font-heading text-muted-foreground uppercase tracking-[0.25em]">
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
