import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const letterVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.3 + i * 0.04,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const AnimatedWord = ({ word, startIndex }: { word: string; startIndex: number }) => (
  <span className="inline-flex overflow-hidden">
    {word.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={startIndex + i}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        className="inline-block"
      >
        {char}
      </motion.span>
    ))}
  </span>
);

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-background overflow-hidden">
      {/* Centered content */}
      <div className="text-center px-6 w-full max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs md:text-sm font-body font-medium tracking-[0.4em] uppercase text-muted-foreground mb-10"
        >
          Digital Studio
        </motion.p>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-heading font-bold leading-[0.9] tracking-[-0.03em] text-foreground">
          <div className="overflow-hidden mb-2">
            <AnimatedWord word="We" startIndex={0} />
            <span className="inline-block w-[0.3em]" />
            <AnimatedWord word="bring" startIndex={2} />
          </div>
          <div className="overflow-hidden mb-2">
            <AnimatedWord word="your" startIndex={7} />
            <span className="inline-block w-[0.3em]" />
            <AnimatedWord word="brand" startIndex={11} />
          </div>
          <div className="overflow-hidden">
            <AnimatedWord word="into" startIndex={16} />
            <span className="inline-block w-[0.3em]" />
            <span className="text-accent">
              <AnimatedWord word="focus" startIndex={20} />
            </span>
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="mt-12 text-base md:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed font-body"
        >
          A digital studio specializing in marketing, design, and strategy for ambitious businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#work"
            className="bg-accent text-accent-foreground px-8 py-4 text-xs font-heading font-semibold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity inline-flex items-center gap-3"
          >
            View Our Work
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
          <a
            href="#about"
            className="border border-foreground/20 text-foreground px-8 py-4 text-xs font-heading font-semibold uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-body uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-accent"
        />
      </motion.div>

      {/* Bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.8, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 right-0 h-px bg-border origin-left"
      />
    </section>
  );
};

export default Hero;
