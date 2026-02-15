import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-homelane.png";
import work4 from "@/assets/work-4.png";

const projects = [
  {
    image: work3,
    title: "HomeLane.com",
    description:
      "Digital strategy and content creation for India's leading home interiors platform.",
    tags: ["Digital Strategy", "Content"],
    color: "from-emerald-500/80",
    bgColor: "#ecfdf5",
  },
  {
    image: work2,
    title: "ITA-AITES WTC 2026",
    description:
      "Event marketing, branding and digital strategy for the World Tunnel Congress 2026.",
    tags: ["Event Marketing", "Branding"],
    link: "/work/wtc-2026",
    color: "from-blue-500/80",
    bgColor: "#eff6ff",
  },
  {
    image: work1,
    title: "Genes Lecoanet Hemant",
    description:
      "Social media marketing and brand storytelling for India's premier luxury fashion house.",
    tags: ["Social Media", "Marketing"],
    link: "/work/genes-lecoanet-hemant",
    color: "from-purple-500/80",
    bgColor: "#faf5ff",
  },
  {
    image: work4,
    title: "Blue Leopard Media",
    description:
      "Complete brand identity and web design for an emerging media company.",
    tags: ["Branding", "Website"],
    link: "/work/blue-leopard-media",
    color: "from-orange-500/80",
    bgColor: "#fff7ed",
  },
];

const FeaturedWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getBgColor = () => {
    if (hoveredIndex === null) return "hsl(var(--background))";
    return projects[hoveredIndex].bgColor;
  };

  return (
    <motion.section
      id="work"
      className="relative py-24 overflow-hidden"
      ref={ref}
      animate={{ backgroundColor: getBgColor() }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
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
            Selected Projects
          </motion.p>
        </div>

        {/* Main heading with split animation */}
        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-[-0.03em] text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Featured Work<span className="text-accent">.</span>
          </motion.h2>

        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              isInView={isInView}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const ProjectCard = ({
  project,
  index,
  isInView,
  onHoverStart,
  onHoverEnd,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Wrapper = project.link ? Link : "div";
  const wrapperProps = project.link ? { to: project.link } : {};

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverStart();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverEnd();
    x.set(0);
    y.set(0);
  };

  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="group cursor-pointer"
      style={{ perspective: 1000 }}
    >
      <Wrapper {...(wrapperProps as any)} className="block">
        <motion.div
          className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-secondary"
          style={{
            rotateX: isHovered ? rotateX : 0,
            rotateY: isHovered ? rotateY : 0,
            transformStyle: "preserve-3d",
          }}
          animate={{
            boxShadow: isHovered
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 30px rgba(var(--accent-rgb, 139, 92, 246), 0.1)"
              : "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ duration: 0.4 }}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.15 : 1,
              x: isHovered ? x.get() * 10 : 0,
              y: isHovered ? y.get() * 10 : 0,
            }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          />

          <motion.div
            className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />

          <motion.div
            className="absolute inset-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />

          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              className="text-white/90 text-sm md:text-base leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHovered ? 0 : 20,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {project.description}
            </motion.p>
          </motion.div>

          <motion.div
            className="absolute top-5 right-5"
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.5,
              rotate: isHovered ? 0 : -45,
            }}
            transition={{ duration: 0.4, ease: "backOut" }}
          >
            <motion.div
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
              animate={{
                boxShadow: isHovered
                  ? "0 10px 30px rgba(0,0,0,0.2), 0 0 20px rgba(255,255,255,0.3)"
                  : "0 4px 15px rgba(0,0,0,0.1)",
              }}
            >
              <ArrowUpRight className="w-5 h-5 text-foreground" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-5 left-5 flex flex-wrap gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
            transition={{ duration: 0.4 }}
          >
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : -10,
                }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="text-xs font-medium tracking-wider uppercase text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <div className="mt-6 flex items-start justify-between">
          <motion.div
            className="overflow-hidden flex-1"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-semibold text-foreground tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-heading)" }}
              animate={{ y: isHovered ? -2 : 0 }}
              transition={{ duration: 0.3 }}
            >

              <span className="inline-flex items-center gap-3">
                {project.title}
                <motion.span
                  className="inline-block text-accent text-lg"
                  animate={{
                    x: isHovered ? 8 : 0,
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </span>
            </motion.h3>

            <motion.div
              className="h-[2px] bg-accent mt-2 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              style={{ width: "60%" }}
            />
          </motion.div>

          <motion.span
            className="text-sm font-medium text-muted-foreground tracking-wider"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.15 + 0.4 }}
          >
            <motion.span
              animate={{
                color: isHovered
                  ? "hsl(var(--accent))"
                  : "hsl(var(--muted-foreground))",
              }}
              transition={{ duration: 0.3 }}
            >
              {projectNumber}
            </motion.span>
          </motion.span>
        </div>
      </Wrapper>
    </motion.div>
  );
};

export default FeaturedWork;
