import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.png";
import work4 from "@/assets/work-4.png";

const projects = [
  {
    image: work1,
    title: "Genes Lecoanet Hemant",
    description:
      "Social media marketing and brand storytelling for India's premier luxury fashion house.",
    tags: ["Social Media", "Marketing"],
    link: "/work/genes-lecoanet-hemant",
  },
  {
    image: work2,
    title: "ITA-AITES WTC 2026",
    description:
      "Event marketing, branding and digital strategy for the World Tunnel Congress 2026.",
    tags: ["Event Marketing", "Branding"],
    link: "/work/wtc-2026",
  },
  {
    image: work3,
    title: "HMO Architects",
    description:
      "Digital strategy and content creation for a leading architecture firm.",
    tags: ["Digital Strategy", "Content"],
  },
  {
    image: work4,
    title: "Blue Leopard Media",
    description:
      "Complete brand identity and web design for an emerging media company.",
    tags: ["Branding", "Website"],
  },
];

const FeaturedWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 bg-background" ref={ref}>
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
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-foreground mb-16"
        >
          Featured Work<span className="text-accent">.</span>
        </motion.h2>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) => {
  const Wrapper = project.link ? Link : "div";
  const wrapperProps = project.link ? { to: project.link } : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group cursor-pointer"
    >
      <Wrapper {...(wrapperProps as any)} className="block">
        <div className="relative overflow-hidden aspect-[16/10] bg-secondary">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
          <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-accent-foreground" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium tracking-wider uppercase text-muted-foreground border border-border px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
};

export default FeaturedWork;
