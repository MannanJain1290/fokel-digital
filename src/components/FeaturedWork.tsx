import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.png";
import work4 from "@/assets/work-4.png";

const projects = [
  {
    image: work1,
    title: "Genes Lecoanet Hemant",
    category: "Social Media & Creative Design",
  },
  {
    image: work2,
    title: "ITA-AITES WTC 2026",
    category: "Event Marketing & Branding",
  },
  {
    image: work3,
    title: "HMO Architects",
    category: "Digital Strategy & Content",
  },
  {
    image: work4,
    title: "Blue Leopard Media",
    category: "Brand Identity & Web Design",
  },
];

const FeaturedWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-[0.3em] uppercase text-accent mb-6"
        >
          Selected Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-foreground mb-20"
        >
          Featured Work<span className="text-accent">.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden bg-secondary aspect-[4/3]">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
            <ArrowUpRight className="w-5 h-5 text-accent-foreground" />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">
          {project.category}
        </p>
      </div>
    </motion.div>
  );
};

export default FeaturedWork;
