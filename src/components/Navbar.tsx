import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "@/assets/fokel-logo.png";
import logoBlack from "@/assets/fokel-logo-black.png";

/* ─── Navbar ─────────────────────────────────────────────────────────────────── */
const navLinks = [
  { label: "About",    href: "#about"    },
  { label: "Services", href: "#services" },
  { label: "Work",     href: "#work"     },
  { label: "Contact",  href: "#contact"  },
  { label: "Blog",     href: "#blog"     },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      setIsOverHero(scrollY < window.innerHeight * 0.85);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = isScrolled ? 64 : 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - navbarHeight, behavior: "smooth" });
    }
    if (isOpen) setIsOpen(false);
  };

  const navBg = isOverHero
    ? "bg-transparent"
    : isScrolled
      ? "bg-background/95 backdrop-blur-lg shadow-sm shadow-foreground/5"
      : "bg-background/95 backdrop-blur-lg";

  const linkColor = isOverHero
    ? "text-white/80 hover:text-white"
    : "text-foreground/70 hover:text-foreground";

  const hoverBg = isOverHero ? "bg-white/10" : "bg-secondary";

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Hero gradient scrim */}
      <AnimatePresence>
        {isOverHero && (
          <motion.div
            key="hero-scrim"
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 100%)" }}
          />
        )}
      </AnimatePresence>

      <div className={`relative max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between transition-all duration-300 ${
        isScrolled && !isOverHero ? "h-16" : "h-20 lg:h-24"
      }`}>

        {/* Logo */}
        <motion.a href="#" className="relative group" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <div className="relative h-8 md:h-9 w-auto">
            <motion.img
              src={logoBlack}
              alt="Fokel"
              className="h-8 md:h-9 w-auto absolute top-0 left-0"
              animate={{ opacity: isOverHero ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
            <motion.img
              src={logo}
              alt="Fokel"
              className="h-8 md:h-9 w-auto"
              animate={{ opacity: isOverHero ? 0 : 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>
        </motion.a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`relative px-5 py-2.5 text-sm font-medium transition-colors duration-300 cursor-pointer rounded-full ${linkColor}`}
              onMouseEnter={() => setHoveredLink(link.label)}
              onMouseLeave={() => setHoveredLink(null)}
              whileHover={{ y: -1 }}
            >
              {hoveredLink === link.label && (
                <motion.div
                  className={`absolute inset-0 rounded-full ${hoverBg}`}
                  layoutId="navbar-hover"
                  transition={{ duration: 0.2 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </motion.a>
          ))}

          {/* Get in Touch CTA */}
          <motion.a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="relative ml-4 bg-foreground text-background px-6 py-2.5 text-sm font-semibold rounded-full overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              Get in Touch
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </span>
          </motion.a>

          {/* Get in Touch CTA */}
        </div>

        {/* Mobile — hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-11 h-11 flex items-center justify-center rounded-full transition-colors ${
              isOverHero
                ? "bg-white/15 hover:bg-white/25 text-white"
                : "bg-secondary hover:bg-secondary/80 text-foreground"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-2xl font-semibold text-foreground py-3 cursor-pointer"
                  style={{ fontFamily: "var(--font-heading)" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="mt-6 btn-primary w-full justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.div
                className="mt-8 pt-6 border-t border-border/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-sm text-muted-foreground text-center">
                  Let's create something remarkable together
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
