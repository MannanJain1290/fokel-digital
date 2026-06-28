import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import genesHero from "@/assets/work-1.jpg";
import SEO from "@/components/SEO";
import NeuralNetworkCanvas from "@/components/ui/NeuralNetworkCanvas";
import GlassLensCursor from "@/components/ui/GlassLensCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

// Enhanced fade up animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

// Stagger children animation
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

// Animated counter component
const AnimatedCounter = ({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const springValue = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const displayValue = useTransform(springValue, (v) => Math.floor(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    }
  }, [isInView, value, springValue, hasAnimated]);

  useEffect(() => {
    const unsubscribe = displayValue.on("change", (v) => setDisplay(v));
    return () => unsubscribe();
  }, [displayValue]);

  return <span ref={ref}>{display}{suffix}</span>;
};

// Parse stat value to extract number and suffix
const parseStatValue = (value: string): { num: number; suffix: string; prefix: string } => {
  const match = value.match(/^([^\d]*)(\d+\.?\d*)(.*)$/);
  if (match) {
    return { prefix: match[1], num: parseFloat(match[2]), suffix: match[3] };
  }
  return { prefix: "", num: 0, suffix: value };
};

const GenesLecoanetCaseStudy = () => {
  return (
    <>
      <SEO
        title="Genes Lecoanet Hemant Case Study | Fokel"
        description="Discover how Fokel created a powerful digital presence for Genes Lecoanet Hemant with stunning web design and effective brand positioning strategy."
        keywords="Genes Lecoanet case study, brand design, web development case study, luxury brand digital marketing"
        url="https://www.fokelworks.com/work/genes-lecoanet-hemant"
        type="article"
      />
      <div className="dark bg-background min-h-screen overflow-hidden text-foreground">
        <NeuralNetworkCanvas />
        <GlassLensCursor />
        <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Animated label with line */}
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-[2px] bg-accent"
            />
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-sm font-medium tracking-[0.3em] uppercase text-accent"
            >
              Case Study
            </motion.p>
          </div>
          
          {/* Animated heading with reveal */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] text-foreground leading-[1.05]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Genes Lecoanet Hemant<span className="text-accent">.</span>
            </motion.h1>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            End-of-Season Social Media Marketing Campaign for a Premium Luxury Fashion Label
          </motion.p>
        </div>
      </section>

      {/* Hero Image with reveal animation */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-7xl mx-auto px-6 lg:px-12 mb-24"
      >
        <motion.div 
          className="aspect-[16/9] overflow-hidden bg-secondary rounded-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.65, 0, 0.35, 1] }}
            className="w-full h-full"
          >
            <motion.img
              src={genesHero}
              alt="Genes Lecoanet Hemant case study"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Client
            </p>
            <p className="text-foreground font-medium">
              Genes Lecoanet Hemant
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Services
            </p>
            <p className="text-foreground font-medium">
              Social Media Marketing, Content Planning, Performance Marketing, Creative Production
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Duration
            </p>
            <p className="text-foreground font-medium">3-Month Campaign</p>
          </motion.div>
        </div>
      </section>

      {/* Campaign Highlights with counting animation */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-[2px] bg-accent"
          />
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-sm font-semibold uppercase tracking-wider text-accent"
          >
            Campaign Highlights
          </motion.p>
        </div>
        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl md:text-4xl font-bold text-foreground tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Measurable growth across all metrics
            <span className="text-accent">.</span>
          </motion.h2>
        </div>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { number: "232", label: "Ad Creatives Deployed" },
            { number: "4.8L", label: "Total Impressions" },
            { number: "18%", label: "Organic Follower Growth" },
            { number: "0.6%", label: "Average CTR" },
          ].map((stat, i) => {
            const parsed = parseStatValue(stat.number);
            return (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                custom={i}
                className="text-center group"
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                    {parsed.prefix}<AnimatedCounter value={parsed.num} />{parsed.suffix}
                  </p>
                  {/* Decorative dot */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-accent/50"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  />
                </motion.div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Challenge */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-6">
              The Challenge
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
              Maximize visibility and conversions during peak season
              <span className="text-accent">.</span>
            </h2>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="flex items-end"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              Genes Lecoanet Hemant, a premium luxury fashion label, approached us to lead their End-of-Season social media marketing campaign. The objective was to drive engagement, increase brand visibility, and maximize conversions during this critical sales period. We needed to create a compelling, data-driven strategy that combined brand storytelling with high-performing creative assets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-secondary py-24 mb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-[2px] bg-accent"
            />
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="text-sm font-semibold uppercase tracking-wider text-accent"
            >
              Our Approach
            </motion.p>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl md:text-4xl font-bold text-foreground tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Structured strategy with performance-driven execution
              <span className="text-accent">.</span>
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Strategic Roadmap",
                desc: "Developed a structured 3-month roadmap covering strategy, content planning, and end-to-end execution with Instagram as the primary platform.",
                num: "01"
              },
              {
                title: "Creative Production",
                desc: "Deployed 232 high-quality ad creatives, combining both static and video content to maintain consistent engagement throughout the campaign.",
                num: "02"
              },
              {
                title: "Performance Marketing",
                desc: "Executed continuous performance marketing supported by data-driven insights to optimize reach, engagement, and conversion rates.",
                num: "03"
              },
              {
                title: "Brand Storytelling",
                desc: "Integrated brand narratives within performance marketing to strengthen visibility and create meaningful connections with the target audience.",
                num: "04"
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group relative p-6 rounded-xl bg-background/50 hover:bg-background transition-colors duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Number badge */}
                <motion.span
                  className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent text-background text-sm font-bold flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                >
                  {item.num}
                </motion.span>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
                {/* Animated underline on hover */}
                <motion.div
                  className="absolute bottom-0 left-6 right-6 h-[2px] bg-accent origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative border border-border p-12 md:p-16 text-center rounded-2xl overflow-hidden group"
          whileHover={{ scale: 1.01 }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          
          <div className="relative z-10">
            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-3xl md:text-4xl font-bold text-foreground tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ready to elevate your brand<span className="text-accent">?</span>
              </motion.h2>
            </div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="text-muted-foreground mb-8 max-w-lg mx-auto"
            >
              Let's discuss how we can create a powerful social media strategy tailored to your luxury brand.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/#contact"
                  className="inline-block bg-foreground text-background px-8 py-4 text-sm font-semibold uppercase tracking-wider rounded-full hover:bg-accent transition-colors duration-300"
                >
                  Let's Talk
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <Footer />
      <ScrollToTopButton />
    </div>
    </>
  );
};

export default GenesLecoanetCaseStudy;
