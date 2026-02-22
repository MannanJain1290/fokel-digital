import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Fokel transformed our digital presence completely. Their strategic approach to branding and marketing delivered results that exceeded our expectations.",
    name: "Rahul Sharma",
    role: "CEO, Inventeron Technologies",
    initials: "RS",
  },
  {
    quote:
      "Working with Fokel was a game-changer. They understood our vision and translated it into a digital experience that truly resonates with our audience.",
    name: "Priya Menon",
    role: "Marketing Head, Onsurity",
    initials: "PM",
  },
  {
    quote:
      "The team at Fokel brought fresh perspective and meticulous attention to detail. Our brand has never looked better or performed stronger online.",
    name: "Ankit Verma",
    role: "Founder, HMO Architects",
    initials: "AV",
  },
  {
    quote:
      "Fokel's data-driven approach combined with creative excellence helped us achieve a 3x increase in digital engagement within just six months.",
    name: "Sneha Kapoor",
    role: "Director of Growth, HomeLane",
    initials: "SK",
  },
];

// Slide animation variants
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95,
  }),
};

// Auto-play duration in ms
const AUTO_PLAY_INTERVAL = 3000;

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    const newIndex = current + newDirection;
    if (newIndex < 0) {
      setCurrent(testimonials.length - 1);
      setPage([testimonials.length - 1, newDirection]);
    } else if (newIndex >= testimonials.length) {
      setCurrent(0);
      setPage([0, newDirection]);
    } else {
      setCurrent(newIndex);
      setPage([newIndex, newDirection]);
    }
    setProgress(0);
  }, [current]);

  const goToSlide = (index: number) => {
    const newDirection = index > current ? 1 : -1;
    setCurrent(index);
    setPage([index, newDirection]);
    setProgress(0);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (AUTO_PLAY_INTERVAL / 50));
      });
    }, 50);

    const slideInterval = setInterval(() => {
      paginate(1);
    }, AUTO_PLAY_INTERVAL);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [isAutoPlaying, paginate]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
    setProgress(0);
  };

  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label with animated line */}
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 40 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-[2px] bg-accent"
          />
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-medium tracking-[0.3em] uppercase text-accent"
          >
            Testimonials
          </motion.p>
        </div>
        
        {/* Animated heading */}
        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.02em] text-primary-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What our clients
            <br />
            are <span className="text-accent italic font-normal">saying</span>...
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main testimonial card */}
          <div className="relative border border-primary-foreground/10 bg-primary-foreground/5 rounded-2xl p-8 md:p-14 lg:p-20 min-h-[400px] md:min-h-[350px] overflow-hidden">
            {/* Large decorative quote in background */}
            <motion.div
              className="absolute top-4 right-4 md:top-8 md:right-8 text-primary-foreground/5 pointer-events-none"
              animate={{ 
                rotate: [0, 5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Quote className="w-32 h-32 md:w-48 md:h-48" />
            </motion.div>

            {/* Animated quote icon */}
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
              className="relative z-10 mb-8"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                <Quote className="w-6 h-6 text-accent" />
              </div>
            </motion.div>

            {/* Testimonial content with AnimatePresence */}
            <div className="relative z-10 min-h-[200px] md:min-h-[180px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                  }}
                  className="absolute inset-0"
                >
                  <motion.p 
                    className="text-base md:text-lg lg:text-xl font-medium leading-relaxed text-primary-foreground/90 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    "{testimonials[current].quote}"
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4"
                  >
                    {/* Avatar placeholder with initials */}
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent font-bold text-sm">
                        {testimonials[current].initials}
                      </span>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-primary-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                        {testimonials[current].name}
                      </p>
                      <p className="text-sm text-primary-foreground/60">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-8">
            {/* Navigation buttons */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
                aria-label="Previous testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
                aria-label="Next testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
              
              {/* Slide counter */}
              <span className="ml-2 text-sm text-primary-foreground/60 font-medium">
                <span className="text-accent font-bold">{String(current + 1).padStart(2, "0")}</span>
                <span className="mx-1">/</span>
                <span>{String(testimonials.length).padStart(2, "0")}</span>
              </span>
            </div>

            {/* Progress dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="relative group"
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <div className="w-10 h-1 rounded-full bg-primary-foreground/20 overflow-hidden">
                    {index === current ? (
                      <motion.div
                        className="h-full bg-accent rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.05, ease: "linear" }}
                      />
                    ) : index < current ? (
                      <div className="h-full w-full bg-accent/50 rounded-full" />
                    ) : null}
                  </div>
                  {/* Hover indicator */}
                  <motion.div
                    className="absolute -bottom-1 left-1/2 w-1 h-1 rounded-full bg-accent"
                    initial={{ scale: 0, x: "-50%" }}
                    whileHover={{ scale: 1 }}
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
