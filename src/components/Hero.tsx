import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";
import bgVideo from "@/assets/bg-video.mp4";
import { Magnetic } from "@/components/ui/Magnetic";
import { Tilt } from "@/components/ui/Tilt";

const AnimatedWord = ({
  children,
  delay
}: {
  children: string;
  delay: number;
}) => {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [showPageReveal, setShowPageReveal] = useState(false);

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem('hasSeenPageReveal');
    if (!hasSeenAnimation) {
      setShowPageReveal(true);
      sessionStorage.setItem('hasSeenPageReveal', 'true');
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const videoScale = useTransform(smoothProgress, [0, 0.5], [1, 0.8]);
  const videoY = useTransform(smoothProgress, [0, 0.5], [0, 80]);
  const videoOpacity = useTransform(smoothProgress, [0, 0.6, 0.8], [1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Full-screen background video */}
      <video
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />
      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.75) 100%)",
          zIndex: 1,
        }}
      />

      {showPageReveal && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-foreground origin-top"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
          />
          <motion.div
            className="fixed inset-0 z-40 bg-accent origin-top"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
          />
        </>
      )}

      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-12 pt-32 lg:pt-40 pb-20 min-h-screen flex items-center" style={{ zIndex: 2 }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 w-fit backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium tracking-wide text-accent">Creative Digital Agency</span>
            </motion.div>

            <h1
              className="text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.95] tracking-[-0.03em] text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <AnimatedWord delay={0.6}>We</AnimatedWord>{" "}
              <AnimatedWord delay={0.7}>Bring</AnimatedWord>
              <br />
              <AnimatedWord delay={0.8}>Your</AnimatedWord>{" "}
              <AnimatedWord delay={0.9}>Brand</AnimatedWord>
              <br />
              <AnimatedWord delay={1.0}>Into</AnimatedWord>{" "}
              <span className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block text-accent"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 1.1,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                >
                  Focus
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg md:text-xl text-white/80 max-w-lg leading-relaxed"
            >
              A creative digital studio that transforms ambitious brands through strategic design, compelling storytelling, and measurable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <Magnetic strength={0.22} range={70}>
                <Link
                  to="/#contact"
                  className="btn-primary group"
                >
                  Start a Project
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </Magnetic>
              <Magnetic strength={0.18} range={60}>
                <Link
                  to="/#work"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white px-6 py-3 text-sm font-medium transition-all duration-300 group relative"
                >
                  View our work
                  <span className="absolute bottom-2 left-6 right-6 h-px bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </Magnetic>
            </motion.div>
          </div>

          <motion.div
            ref={videoContainerRef}
            initial={{ opacity: 0, scale: 0.9, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.8,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="relative"
            style={{
              scale: videoScale,
              y: videoY,
              opacity: videoOpacity,
            }}
          >
            <div className="relative aspect-[4/5] max-h-[85vh] mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-b from-accent/20 via-transparent to-transparent rounded-[3rem] blur-2xl opacity-60" />

              <motion.div
                className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-accent/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                />

                <video
                  src={heroVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  title="Fokel Digital Studio - Creative Branding and SEO Process"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </motion.div>

              <Tilt className="absolute -bottom-6 -right-6 z-20" max={15}>
                <motion.div
                  className="bg-card rounded-2xl p-6 shadow-xl border border-border/50 cursor-pointer"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  <p className="text-sm font-medium text-foreground mb-1">Latest Project</p>
                  <p className="text-xs text-muted-foreground">HomeLane SEO Strategy</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs text-muted-foreground">+98% Traffic</span>
                  </div>
                </motion.div>
              </Tilt>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      />
    </section>
  );
};

export default Hero;
