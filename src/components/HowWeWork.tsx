import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const SPRING = "cubic-bezier(0.16,1,0.3,1)";
const DUR = "0.42s";
const ORANGE = "#E05A28";

const rows = [
  {
    step: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: "Mission-Driven",
    description:
      "Every project starts with a deep understanding of your purpose. We align strategies with your core mission to create authentic, impactful digital experiences.",
    linkLabel: "↗ Our process",
    linkHref: "/about#process",
  },
  {
    step: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Fast Execution",
    description:
      "Speed without compromise. Our agile workflows and streamlined processes ensure rapid delivery while maintaining the highest standards of quality.",
    linkLabel: "↗ See our workflow",
    linkHref: "/services#workflow",
  },
  {
    step: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <circle cx="12" cy="8" r="6" />
        <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
      </svg>
    ),
    title: "Award-Winning Quality",
    description:
      "Excellence is non-negotiable. Our work consistently earns recognition for its creativity, innovation, and measurable impact on business growth.",
    linkLabel: "↗ View our work",
    linkHref: "/work",
  },
];

export default function HowWeWork() {
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#141414",
        padding: "48px 0 80px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 28 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ height: 2, background: ORANGE, borderRadius: 2, flexShrink: 0 }}
          />
          <span className="section-label">
            Our Approach
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="heading-section text-primary-foreground"
          style={{ marginBottom: 72 }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          How we work
          <span style={{ color: ORANGE }}>.</span>
        </motion.h2>

        {/* Top border */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{ width: "100%", height: "0.5px", background: "rgba(255,255,255,0.12)" }}
        />

        {/* Rows */}
        {rows.map((row, i) => {
          const isHovered = hovered === i;
          const isDimmed = hovered !== null && !isHovered;

          return (
            <div key={row.step}>
              <motion.div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: isDimmed ? 0.3 : 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.08,
                  // For the hover dim/undim, we override via style transition below
                }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "64px 1fr 1fr",
                  alignItems: "center",
                  gap: "0 40px",
                  padding: "40px 0",
                  cursor: "default",
                  transform: isHovered
                    ? "translateX(6px) scaleY(1)"
                    : isDimmed
                      ? "translateX(0px) scaleY(0.97)"
                      : "translateX(0px) scaleY(1)",
                  transition: `transform ${DUR} ${SPRING}, opacity ${DUR} ${SPRING}`,
                  transformOrigin: "center",
                }}
              >
                {/* Col 1 — Step number */}
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: isHovered ? ORANGE : "rgba(255,255,255,0.22)",
                    transition: `color ${DUR} ${SPRING}`,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {row.step}
                </div>

                {/* Col 2 — Icon + underline + title */}
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {/* Icon */}
                  <div
                    style={{
                      color: isHovered ? ORANGE : "rgba(255,255,255,0.55)",
                      transform: isHovered ? "rotate(12deg) scale(1.18)" : "rotate(0deg) scale(1)",
                      transition: `color ${DUR} ${SPRING}, transform ${DUR} ${SPRING}`,
                      display: "inline-flex",
                      width: "fit-content",
                    }}
                  >
                    {row.icon}
                  </div>

                  {/* Animated orange underline bar */}
                  <div
                    style={{
                      height: 2,
                      background: ORANGE,
                      borderRadius: 2,
                      width: isHovered ? "100%" : 24,
                      transition: `width ${DUR} ${SPRING}`,
                    }}
                  />

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "clamp(1.25rem, 2.2vw, 1.6rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: isHovered ? ORANGE : "#ffffff",
                      transition: `color ${DUR} ${SPRING}`,
                      margin: 0,
                      fontFamily: "var(--font-heading, inherit)",
                      lineHeight: 1.2,
                    }}
                  >
                    {row.title}
                  </h3>
                </div>

                {/* Col 3 — Description + link */}
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: isHovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.45)",
                      transition: `color ${DUR} ${SPRING}`,
                      margin: 0,
                      maxWidth: 440,
                    }}
                  >
                    {row.description}
                  </p>

                  {/* Link tag */}
                  <a
                    href={row.linkHref}
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: ORANGE,
                      textDecoration: "none",
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? "translateY(0px)" : "translateY(4px)",
                      transition: `opacity ${DUR} ${SPRING}, transform ${DUR} ${SPRING}`,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      width: "fit-content",
                      pointerEvents: isHovered ? "auto" : "none",
                    }}
                  >
                    {row.linkLabel}
                  </a>
                </div>
              </motion.div>

              {/* Hairline border */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                style={{ width: "100%", height: "0.5px", background: "rgba(255,255,255,0.12)" }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
