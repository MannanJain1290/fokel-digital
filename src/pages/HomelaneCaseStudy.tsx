import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, Search, TrendingUp, Video, FileText, BarChart3, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import homelaneHero from "@/assets/work-homelane.png";
import SEO from "@/components/SEO";
import NeuralNetworkCanvas from "@/components/ui/NeuralNetworkCanvas";
import GlassLensCursor from "@/components/ui/GlassLensCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const AnimatedCounter = ({
  value,
  suffix = "",
  duration = 2




}: {value: number;suffix?: string;duration?: number;}) => {
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

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>);

};

const parseStatValue = (value: string): {num: number;suffix: string;prefix: string;} => {
  const match = value.match(/^([^\d]*)(\d+\.?\d*)(.*)$/);
  if (match) {
    return { prefix: match[1], num: parseFloat(match[2]), suffix: match[3] };
  }
  return { prefix: "", num: 0, suffix: value };
};

const HomelaneCaseStudy = () => {
  return (
    <>
      <SEO
        title="HomeLane SEO Case Study | Fokel"
        description="Discover how Fokel helped HomeLane achieve 98% organic traffic growth and 85 keywords on Google Page 1 through strategic SEO and content marketing."
        keywords="HomeLane SEO case study, SEO success story, digital marketing case study, organic traffic growth, Google ranking"
        url="https://www.fokelworks.com/work/homelane"
        type="article"
      />
      <div className="bg-background min-h-screen overflow-hidden text-foreground">
        <NeuralNetworkCanvas />
        <GlassLensCursor />
        <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-[2px] bg-accent" />

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-sm font-medium tracking-[0.3em] uppercase text-accent">

              Case Study
            </motion.p>
          </div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] text-foreground leading-[1.05]"
              style={{ fontFamily: "var(--font-heading)" }}>

              HomeLane<span className="text-accent">.</span>com
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg md:text-xl text-foreground/60 max-w-2xl leading-relaxed">

            SEO-driven content strategy to dominate Google rankings for India's leading home interiors platform
          </motion.p>
        </div>
      </section>

      {/* Hero Image */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">

        <motion.div
          className="aspect-[16/9] overflow-hidden bg-secondary rounded-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6 }}>

          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.65, 0, 0.35, 1] }}
            className="w-full h-full">

            <motion.img
              src={homelaneHero}
              alt="HomeLane SEO case study - Google ranking strategy"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }} />

          </motion.div>
        </motion.div>
      </motion.section>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Client</p>
            <p className="text-foreground font-medium">HomeLane.com</p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Services</p>
            <p className="text-foreground font-medium">Website Creation, Google SEO, Keyword Optimisation, Content Strategy, maintainance

            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Timeline</p>
            <p className="text-foreground font-medium">2-Month Engagement</p>
          </motion.div>
        </div>
      </section>

      {/* Results Stats */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-[2px] bg-accent" />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-sm font-semibold uppercase tracking-wider text-accent">

            The Results
          </motion.p>
        </div>
        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl md:text-4xl font-bold text-foreground tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}>

            Measurable growth across every channel<span className="text-accent">.</span>
          </motion.h2>
        </div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>

          {[
          { number: "98%", label: "Organic Traffic Growth" },
          { number: "85", label: "Keywords on Page 1" },
          { number: "12x", label: "Vlog View Increase" },
          { number: "58%", label: "Bounce Rate Reduction" }].
          map((stat, i) => {
            const parsed = parseStatValue(stat.number);
            return (
              <motion.div key={stat.label} variants={fadeUp} custom={i} className="text-center group">
                <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <p
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}>

                    {parsed.prefix}
                    <AnimatedCounter value={parsed.num} />
                    {parsed.suffix}
                  </p>
                  <motion.div
                    className="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-accent/50"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }} />

                </motion.div>
                <p className="text-sm text-foreground/60 uppercase tracking-wider">{stat.label}</p>
              </motion.div>);

          })}
        </motion.div>
      </section>

      {/* About HomeLane */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-6">About HomeLane</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
              India's leading tech-enabled home interiors brand<span className="text-accent">.</span>
            </h2>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="flex items-end">

            <p className="text-foreground/60 leading-relaxed text-lg">
              HomeLane has grown into India's leading tech-enabled home interiors brand with a simple promise: to make
              designing a home easy, personalised, and dependable. Over the years, they've had the privilege of helping
              55,000+ customers shape homes they love, across 42+ cities. With 600+ expert designers and 74+ Experience
              Centres, HomeLane takes pride in delivering beautiful spaces that their customers are proud to call home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEO Strategy - Our Approach */}
      <section className="bg-secondary py-24 mb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-[2px] bg-accent" />

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="text-sm font-semibold uppercase tracking-wider text-accent">

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
              style={{ fontFamily: "var(--font-heading)" }}>

              A multi-pronged SEO & content strategy<span className="text-accent">.</span>
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
            {
              title: "Keyword Research & Mapping",
              desc: "Conducted deep keyword research across 500+ search terms, mapping high-intent and long-tail keywords to specific landing pages. Built topic clusters around 'modular kitchen,' 'home interiors,' and 'renovation costs' to capture every stage of the buyer's journey.",
              num: "01",
              icon: Search
            },
            {
              title: "Vlog & Video Content Strategy",
              desc: "Produced a series of SEO-optimised vlogs featuring real home transformations, designer walkthroughs, and before-after reveals. Each video was transcribed, keyword-tagged, and embedded on corresponding landing pages to boost dwell time and engagement signals.",
              num: "02",
              icon: Video
            },
            {
              title: "On-Page & Technical SEO",
              desc: "Overhauled meta titles, descriptions, header hierarchy, internal linking structure, and schema markup across 200+ pages. Resolved crawl errors, improved Core Web Vitals scores, and implemented structured data for FAQ and product rich snippets.",
              num: "03",
              icon: FileText
            },
            {
              title: "Content Hub & Blog Strategy",
              desc: "Created a comprehensive content hub with 80+ long-form articles covering design inspiration, cost guides, material comparisons, and city-specific interior trends. Each piece was crafted for featured snippet potential and supported by strategic backlinking.",
              num: "04",
              icon: BarChart3
            }].
            map((item, i) =>
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group relative p-6 rounded-xl bg-background/50 hover:bg-background transition-colors duration-300"
              whileHover={{ y: -5 }}>

                <motion.span
                className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent text-background text-sm font-bold flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}>

                  {item.num}
                </motion.span>
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className="w-5 h-5 text-accent" />
                  <h3
                  className="text-xl font-bold text-foreground group-hover:text-accent transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}>

                    {item.title}
                  </h3>
                </div>
                <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
                <motion.div
                className="absolute bottom-0 left-6 right-6 h-[2px] bg-accent origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }} />

              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* SEO Funnel Breakdown */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-[2px] bg-accent" />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-sm font-semibold uppercase tracking-wider text-accent">

            Content Funnel
          </motion.p>
        </div>
        <div className="overflow-hidden mb-12">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl md:text-4xl font-bold text-foreground tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}>

            Keyword-to-conversion pipeline<span className="text-accent">.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
          {
            stage: "Top of Funnel",
            icon: Search,
            keywords: ["home interior ideas", "kitchen design trends 2026", "best modular kitchen brands"],
            content: "Inspirational blog posts, design trend vlogs, Pinterest-optimised galleries",
            result: "2.1M impressions/month"
          },
          {
            stage: "Mid Funnel",
            icon: Target,
            keywords: ["modular kitchen cost calculator", "2BHK interior design price", "HomeLane vs competitors"],
            content: "Comparison guides, cost calculators, customer testimonial vlogs",
            result: "98% traffic increase"
          },
          {
            stage: "Bottom of Funnel",
            icon: TrendingUp,
            keywords: ["book HomeLane consultation", "HomeLane reviews", "HomeLane near me"],
            content: "City-specific landing pages, review aggregation, consultation CTAs",
            result: "62% lead increase"
          }].
          map((item, i) =>
          <motion.div
            key={item.stage}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="relative p-8 rounded-2xl border border-border hover:border-accent/30 transition-colors duration-300 group"
            whileHover={{ y: -5 }}>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                  {item.stage}
                </h3>
              </div>

              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Target Keywords</p>
                <div className="flex flex-wrap gap-2">
                  {item.keywords.map((kw) =>
                <span key={kw} className="text-xs bg-secondary text-foreground/60 px-2.5 py-1 rounded-full">
                      {kw}
                    </span>
                )}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Content Type</p>
                <p className="text-sm text-foreground/60 leading-relaxed">{item.content}</p>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-2xl font-bold text-accent" style={{ fontFamily: "var(--font-heading)" }}>
                  {item.result}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>


      {/* Keyword Rankings Table */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-[2px] bg-accent" />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-sm font-semibold uppercase tracking-wider text-accent">

            Ranking Improvements
          </motion.p>
        </div>
        <div className="overflow-hidden mb-12">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl md:text-4xl font-bold text-foreground tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}>

            Keyword position gains<span className="text-accent">.</span>
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4">

          {[
          { keyword: "modular kitchen designs", before: "32", after: "3", volume: "74,000" },
          { keyword: "home interior cost", before: "28", after: "5", volume: "49,500" },
          { keyword: "2BHK interior design", before: "41", after: "7", volume: "33,100" },
          { keyword: "kitchen renovation ideas", before: "35", after: "4", volume: "27,800" },
          { keyword: "best home interiors India", before: "22", after: "2", volume: "22,400" },
          { keyword: "wardrobe design ideas", before: "38", after: "6", volume: "18,600" }].
          map((item, i) =>
          <motion.div
            key={item.keyword}
            variants={fadeUp}
            custom={i}
            className="grid grid-cols-4 gap-4 items-center p-4 rounded-xl border border-border hover:border-accent/30 transition-colors group"
            whileHover={{ x: 5 }}>

              <div className="col-span-2 md:col-span-1">
                <p className="font-medium text-foreground text-sm md:text-base">{item.keyword}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-foreground/60 uppercase tracking-wider mb-1">Before</p>
                <p className="text-lg font-bold text-foreground/60">#{item.before}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-foreground/60 uppercase tracking-wider mb-1">After</p>
                <p className="text-lg font-bold text-accent">#{item.after}</p>
              </div>
              <div className="text-center hidden md:block">
                <p className="text-xs text-foreground/60 uppercase tracking-wider mb-1">Monthly Volume</p>
                <p className="text-sm font-medium text-foreground">{item.volume}</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative border border-border p-12 md:p-16 text-center rounded-2xl overflow-hidden group"
          whileHover={{ scale: 1.01 }}>

          <motion.div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-3xl md:text-4xl font-bold text-foreground tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-heading)" }}>

                Ready to dominate Google<span className="text-accent">?</span>
              </motion.h2>
            </div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="text-foreground/60 mb-8 max-w-lg mx-auto">

              Let's build an SEO strategy that puts your brand at the top of search results.
            </motion.p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 bg-accent text-background px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors">

                Start your SEO journey
                <TrendingUp className="w-4 h-4" />
              </Link>
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

export default HomelaneCaseStudy;