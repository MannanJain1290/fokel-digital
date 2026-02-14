import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div className="flex flex-col gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[1] tracking-[-0.03em] text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              We Bring
              <br />
              Your Brand
              <br />
              Into <span className="italic font-normal text-accent">Focus</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed"
            >
              Helping brands and businesses drive value through creatively functional digital strategy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                to="/#contact"
                className="inline-block bg-foreground text-background px-8 py-4 text-sm font-semibold uppercase tracking-wider rounded-full hover:opacity-90 transition-opacity"
              >
                Get in touch
              </Link>
            </motion.div>
          </div>

          {/* Right — Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative aspect-[9/16] max-h-[75vh] w-full max-w-sm lg:max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl"
          >
            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
