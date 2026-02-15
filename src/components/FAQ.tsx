import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What services does Fokel offer?",
    answer:
      "Fokel offers a comprehensive suite of digital services including digital marketing, web design & development, digital strategy, and brand identity development. We craft tailored solutions that drive measurable growth for your business.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A brand identity project typically takes 4-6 weeks, while a full website design and development project ranges from 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work across diverse industries including technology, healthcare, real estate, fashion, and more. Our versatile team adapts to each industry's unique challenges, delivering solutions that resonate with your specific target audience.",
  },
  {
    question: "How do you measure the success of your campaigns?",
    answer:
      "We establish clear KPIs at the start of every engagement — from traffic and engagement metrics to conversion rates and ROI. You'll receive regular reports with actionable insights, ensuring full transparency on campaign performance.",
  },
  {
    question: "What makes Fokel different from other agencies?",
    answer:
      "We combine data-driven strategy with bold creative execution. Our lean, senior-led team means you work directly with experts — no junior handoffs. We focus on making your brand the undisputed authority in your niche.",
  },
];

// Animation variants for accordion content
const contentVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
      opacity: { duration: 0.2 },
    },
  },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
      opacity: { duration: 0.3, delay: 0.1 },
    },
  },
};

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 md:py-32 bg-background overflow-hidden" ref={ref}>
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
            FAQ
          </motion.p>
        </div>

        {/* Animated heading */}
        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.02em] text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Any more <span className="text-accent italic font-normal">questions</span>?
          </motion.h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const isHovered = hoveredIndex === i;
            const number = String(i + 1).padStart(2, '0');

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
                className="relative"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Animated background on hover/open */}
                <motion.div
                  className="absolute inset-0 bg-accent/5 rounded-xl -mx-4 px-4"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ 
                    opacity: isOpen || isHovered ? 1 : 0,
                    scale: isOpen || isHovered ? 1 : 0.98,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Border line */}
                <div className="relative border-b border-border">
                  {/* Animated accent border */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: isOpen ? "100%" : "0%" }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  />

                  <button
                    onClick={() => toggle(i)}
                    className="relative w-full flex items-center gap-4 md:gap-6 py-6 md:py-8 text-left group"
                  >
                    {/* Number indicator */}
                    <motion.span
                      className="hidden md:flex items-center justify-center text-sm font-medium text-muted-foreground w-8"
                      animate={{ 
                        color: isOpen ? "hsl(var(--accent))" : isHovered ? "hsl(var(--accent))" : "hsl(var(--muted-foreground))",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {number}
                    </motion.span>

                    {/* Question text */}
                    <motion.span 
                      className="flex-1 text-lg md:text-xl font-semibold text-foreground pr-4"
                      style={{ fontFamily: "var(--font-heading)" }}
                      animate={{ 
                        color: isOpen ? "hsl(var(--accent))" : "hsl(var(--foreground))",
                        x: isHovered && !isOpen ? 4 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.question}
                    </motion.span>

                    {/* Toggle icon with rotation */}
                    <motion.span 
                      className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center transition-colors duration-300"
                      animate={{
                        borderColor: isOpen ? "hsl(var(--accent))" : isHovered ? "hsl(var(--accent))" : "hsl(var(--border))",
                        backgroundColor: isOpen ? "hsl(var(--accent))" : "transparent",
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <Plus 
                          className="w-5 h-5 transition-colors duration-300" 
                          style={{ 
                            color: isOpen ? "hsl(var(--background))" : isHovered ? "hsl(var(--accent))" : "currentColor" 
                          }}
                        />
                      </motion.div>
                    </motion.span>
                  </button>

                  {/* Expandable content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        variants={contentVariants}
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="pb-8 md:pl-14"
                        >
                          <p className="text-muted-foreground leading-relaxed max-w-3xl text-base md:text-lg">
                            {faq.answer}
                          </p>
                          
                          {/* Decorative element */}
                          <motion.div
                            className="flex items-center gap-2 mt-4"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <div className="w-6 h-[2px] bg-accent/50" />
                            <span className="text-xs text-accent/70 uppercase tracking-wider">Fokel</span>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm">
            Still have questions?{" "}
            <a href="#contact" className="text-accent hover:underline font-medium">
              Get in touch
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
