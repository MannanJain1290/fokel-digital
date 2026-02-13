import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import genesHero from "@/assets/work-1.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const GenesLecoanetCaseStudy = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Back nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-sm font-medium tracking-[0.3em] uppercase text-accent mb-6"
          >
            Case Study
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-6"
          >
            Genes Lecoanet Hemant<span className="text-accent">.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            End-of-Season Social Media Marketing Campaign for a Premium Luxury Fashion Label
          </motion.p>
        </div>
      </section>

      {/* Hero Image */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-7xl mx-auto px-6 lg:px-12 mb-24"
      >
        <div className="aspect-[16/9] overflow-hidden bg-secondary">
          <img
            src={genesHero}
            alt="Genes Lecoanet Hemant case study"
            className="w-full h-full object-cover"
          />
        </div>
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

      {/* Campaign Highlights */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-sm font-semibold uppercase tracking-wider text-accent mb-6"
        >
          Campaign Highlights
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-16"
        >
          Measurable growth across all metrics
          <span className="text-accent">.</span>
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "180", label: "Ad Creatives Deployed" },
            { number: "2.3L", label: "Total Impressions" },
            { number: "23%", label: "Organic Follower Growth" },
            { number: "0.6%", label: "Average CTR" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.number}
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
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
      <section className="bg-secondary py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-sm font-semibold uppercase tracking-wider text-accent mb-6"
          >
            Our Approach
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-12"
          >
            Structured strategy with performance-driven execution
            <span className="text-accent">.</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Strategic Roadmap",
                desc: "Developed a structured 3-month roadmap covering strategy, content planning, and end-to-end execution with Instagram as the primary platform.",
              },
              {
                title: "Creative Production",
                desc: "Deployed 232 high-quality ad creatives, combining both static and video content to maintain consistent engagement throughout the campaign.",
              },
              {
                title: "Performance Marketing",
                desc: "Executed continuous performance marketing supported by data-driven insights to optimize reach, engagement, and conversion rates.",
              },
              {
                title: "Brand Storytelling",
                desc: "Integrated brand narratives within performance marketing to strengthen visibility and create meaningful connections with the target audience.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
              >
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-border p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6">
            Ready to elevate your brand<span className="text-accent">?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Let's discuss how we can create a powerful social media strategy tailored to your luxury brand.
          </p>
          <Link
            to="/#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Let's Talk
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default GenesLecoanetCaseStudy;
