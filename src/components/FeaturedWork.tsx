import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { DepthText } from "@/components/ui/DepthText";
import { Magnetic } from "@/components/ui/Magnetic";

import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-homelane.png";
import workSab from "@/assets/work-sab.png";

const projects = [
  {
    image: work3,
    title: "HomeLane.com",
    description:
      "Strategic SEO & Content Marketing strategy that delivered 98% organic growth and dominated competitive keywords for India's interior design leader.",
    tags: ["B2B SEO", "Content Marketing", "Growth Strategy"],
    link: "/work/homelane",
    color: "from-emerald-500/80",
    bgColor: "#ecfdf5",
  },
  {
    image: work2,
    title: "ITA-AITES WTC 2026",
    description:
      "Global digital strategy and event branding for the World Tunnel Congress, driving international visibility and attendee engagement.",
    tags: ["Event Marketing", "Digital Strategy", "Branding"],
    link: "/work/wtc-2026",
    color: "from-blue-500/80",
    bgColor: "#eff6ff",
  },
  {
    image: work1,
    title: "Genes Lecoanet Hemant",
    description:
      "Premium social media storytelling and brand performance marketing for one of India's most iconic luxury fashion houses.",
    tags: ["Luxury Marketing", "Social Media", "Performance"],
    link: "/work/genes-lecoanet-hemant",
    color: "from-purple-500/80",
    bgColor: "#faf5ff",
  },
  {
    image: workSab,
    title: "SAB Properties",
    description:
      "Direct-to-client commercial property directory and automated B2B leasing pipeline for one of Delhi's premier estate agencies.",
    tags: ["Commercial Real Estate", "B2B Lead Gen", "Web Directory"],
    link: "/work/sab-properties",
    color: "from-cyan-500/80",
    bgColor: "#ecfeff",
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
      className="relative py-16 md:py-24 overflow-hidden"
      ref={ref}
      animate={{ backgroundColor: getBgColor() }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-[2px] bg-accent"
          />
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-accent">
            Selected Projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="overflow-hidden mb-10 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-[-0.03em] text-foreground">
            Featured <DepthText text="Work" className="text-foreground inline-block font-semibold" glowColor="rgba(255, 107, 20, 0.45)" /><span className="text-accent">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), {
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="group cursor-pointer"
      style={{ perspective: 1000 }}
    >
      {project.link ? (
        <Link to={project.link} className="block">
          <ProjectCardContent 
            project={project} 
            isHovered={isHovered} 
            rotateX={rotateX} 
            rotateY={rotateY}
            projectNumber={projectNumber}
          />
        </Link>
      ) : (
        <div className="block">
          <ProjectCardContent 
            project={project} 
            isHovered={isHovered} 
            rotateX={rotateX} 
            rotateY={rotateY}
            projectNumber={projectNumber}
          />
        </div>
      )}
    </motion.div>
  );
};

const ProjectCardContent = ({ 
  project, 
  isHovered, 
  rotateX, 
  rotateY,
  projectNumber 
}: {
  project: (typeof projects)[0];
  isHovered: boolean;
  rotateX: any;
  rotateY: any;
  projectNumber: string;
}) => (
  <>
    <motion.div
      className="relative overflow-hidden rounded-xl md:rounded-2xl aspect-[4/3] bg-secondary"
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      animate={{
        boxShadow: isHovered
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 30px rgba(var(--accent-rgb, 139, 92, 246), 0.15)"
          : "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
      }}
      transition={{ duration: 0.4 }}
    >
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      />

      <motion.div
        className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-4 md:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.p
          className="text-white/90 text-sm leading-relaxed line-clamp-2"
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
        className="absolute top-3 md:top-5 right-3 md:right-5 z-20 pointer-events-auto"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      >
        <Magnetic strength={0.4} range={45}>
          <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
            <ArrowUpRight className="w-4 md:w-5 h-4 md:h-5 text-foreground" />
          </div>
        </Magnetic>
      </motion.div>

      <motion.div
        className="absolute top-3 md:top-5 left-3 md:left-5 flex flex-wrap gap-1.5 md:gap-2 max-w-[70%]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] md:text-xs font-medium tracking-wider uppercase text-white bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-accent origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>

    <div className="mt-4 md:mt-6 flex items-start justify-between">
      <div className="flex-1 pr-4">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-[-0.02em]">
          {project.title}
        </h3>
        <motion.div
          className="h-[2px] bg-accent mt-2 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ width: "50%" }}
        />
      </div>

      <span className="text-sm font-medium text-muted-foreground">
        <span className="text-accent font-bold">{projectNumber}</span>
      </span>
    </div>

    <p className="mt-2 md:hidden text-sm text-muted-foreground line-clamp-2">
      {project.description}
    </p>
  </>
);

export default FeaturedWork;
