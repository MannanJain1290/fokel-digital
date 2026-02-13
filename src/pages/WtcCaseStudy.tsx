import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import wtcHero from "@/assets/work-2.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const WtcCaseStudy = () => {
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
            ITA-AITES WTC 2026<span className="text-accent">.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Event Marketing & Branding for the World Tunnel Congress 2026
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
            src={wtcHero}
            alt="ITA-AITES WTC 2026 project"
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
              ITA-AITES / World Tunnel Congress
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
              Event Marketing, Branding, Digital Strategy, Social Media
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
              Timeline
            </p>
            <p className="text-foreground font-medium">2024 — Ongoing</p>
          </motion.div>
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
              Building global awareness for a landmark engineering congress
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
              The World Tunnel Congress needed a comprehensive digital marketing
              strategy to attract international delegates, sponsors, and media
              attention. The challenge was positioning the 2026 edition as a
              must-attend event in the tunnelling and underground infrastructure
              industry while reaching a diverse, global audience.
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
            A multi-channel strategy built for impact
            <span className="text-accent">.</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Brand Positioning",
                desc: "Developed a cohesive visual identity and messaging framework that positioned WTC 2026 as the premier global tunnelling event.",
              },
              {
                title: "Digital Campaigns",
                desc: "Launched targeted social media and email campaigns across LinkedIn, Instagram, and industry platforms to drive registrations and engagement.",
              },
              {
                title: "Content Strategy",
                desc: "Created compelling content including speaker spotlights, industry insights, and event teasers to maintain momentum leading up to the congress.",
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

      {/* Results */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-sm font-semibold uppercase tracking-wider text-accent mb-6"
        >
          The Results
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-16"
        >
          Measurable growth across every channel
          <span className="text-accent">.</span>
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "150%", label: "Social Media Growth" },
            { number: "50K+", label: "Campaign Reach" },
            { number: "3x", label: "Engagement Rate" },
            { number: "20+", label: "Countries Reached" },
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
            Want similar results<span className="text-accent">?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Let's discuss how we can elevate your brand with a tailored digital
            strategy.
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

export default WtcCaseStudy;
