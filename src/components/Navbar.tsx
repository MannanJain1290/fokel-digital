import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/fokel-logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  },
};

const linkVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }
  },
};

const mobileMenuVariants = {
  closed: { 
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
  },
  open: { 
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  },
};

const mobileLinkVariants = {
  closed: { x: -20, opacity: 0 },
  open: { x: 0, opacity: 1 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const navbarHeight = isScrolled ? 64 : 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    if (isOpen) setIsOpen(false);
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-lg shadow-lg shadow-black/5" 
          : "bg-background/80 backdrop-blur-md"
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-accent"
        style={{ 
          scaleX: isScrolled ? 1 : 0,
          transformOrigin: "left",
        }}
        animate={{ scaleX: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className={`max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? "h-16" : "h-20"
      }`}>
        <motion.a 
          href="#" 
          className="relative group"
          variants={linkVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <img src={logo} alt="Fokel" className="h-8 md:h-10 w-auto" />
        </motion.a>

        <motion.div 
          className="hidden md:flex items-center gap-1"
          variants={navVariants}
        >
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              variants={linkVariants}
              onMouseEnter={() => setHoveredLink(link.label)}
              onMouseLeave={() => setHoveredLink(null)}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {link.label}
              <motion.span
                className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredLink === link.label ? 1 : 0 }}
                transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              />
              <motion.span
                className="absolute inset-0 bg-accent/10 rounded-lg -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: hoveredLink === link.label ? 1 : 0,
                  scale: hoveredLink === link.label ? 1 : 0.8,
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
          
          <motion.a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="relative ml-4 bg-accent text-accent-foreground px-6 py-2.5 text-sm font-semibold rounded-full overflow-hidden group cursor-pointer"
            variants={linkVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
            <span className="relative inline-flex items-center gap-2">
              Get in Touch
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </span>
          </motion.a>
        </motion.div>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <div className="relative w-6 h-5">
            <motion.span
              animate={isOpen ? { top: "50%", rotate: 45, backgroundColor: "#f97316" } : { top: "0%", rotate: 0, backgroundColor: "hsl(var(--foreground))" }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 w-full h-0.5 rounded-full"
              style={{ transformOrigin: "center" }}
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 top-1/2 w-full h-0.5 -translate-y-1/2 rounded-full"
              style={{ backgroundColor: isOpen ? "#f97316" : "hsl(var(--foreground))" }}
            />
            <motion.span
              animate={isOpen ? { top: "50%", rotate: -45, backgroundColor: "#f97316" } : { top: "100%", rotate: 0, backgroundColor: "hsl(var(--foreground))" }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 w-full h-0.5 rounded-full"
              style={{ transformOrigin: "center" }}
            />
          </div>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-background/98 backdrop-blur-lg border-b border-border overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="relative text-2xl font-bold text-foreground py-3 group cursor-pointer"
                  style={{ fontFamily: "var(--font-heading)" }}
                  variants={mobileLinkVariants}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-4">
                    <span className="text-sm font-normal text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {link.label}
                  </span>
                  <motion.span
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-accent rounded-full"
                    whileHover={{ height: "60%" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
              
              <motion.a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="mt-4 bg-accent text-accent-foreground px-6 py-4 text-sm font-semibold rounded-full text-center inline-flex items-center justify-center gap-2 cursor-pointer"
                variants={mobileLinkVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              
              <motion.div
                className="mt-6 pt-6 border-t border-border/50"
                variants={mobileLinkVariants}
              >
                <p className="text-xs text-muted-foreground text-center">
                  Let's create something amazing together
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
