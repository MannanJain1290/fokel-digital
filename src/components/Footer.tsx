import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Linkedin, Instagram, MapPin, Phone } from "lucide-react";
import logo from "@/assets/fokel-logo-black.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (href: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = "/" + href;
      return;
    }
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer
      className="relative bg-foreground text-background overflow-hidden border-t border-accent"
      ref={ref}
    >
      {/* Subtle background glows */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <img src={logo} alt="Fokel" className="h-10 w-auto mb-3" />
              <p className="text-xs text-background/50 mb-6 font-medium tracking-wide">
                Strategic Design. Digital Growth.
              </p>
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-background leading-tight mb-4 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Ready to bring your brand into <br className="hidden sm:inline" />
                <span className="text-accent">focus?</span>
              </h3>
              <p className="text-background/60 leading-relaxed max-w-xl mb-8">
                Let's discuss how we can transform your digital presence and make your brand the undisputed authority in your niche.
              </p>
              <div className="flex flex-col items-start">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="btn-primary"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-background/40 mt-3 font-medium">
                  No commitment. Just a conversation.
                </p>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm font-semibold uppercase tracking-wider text-background/40 mb-6 border-l-2 border-accent pl-3"
            >
              Navigation
            </motion.p>
            <div className="flex flex-col gap-4">
              {["About", "Services", "Work", "Contact"].map((link, i) => (
                <motion.button
                  key={link}
                  onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.05 }}
                  className="text-left text-background/70 hover:text-accent transition-all duration-300 hover:translate-x-1"
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm font-semibold uppercase tracking-wider text-background/40 mb-6 border-l-2 border-accent pl-3"
            >
              Connect
            </motion.p>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-5">
                <motion.a
                  href="mailto:info@fokelworks.com"
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="inline-flex items-center gap-3 text-background/70 hover:text-accent transition-all duration-300 hover:translate-x-1"
                >
                  <Mail className="w-5 h-5 shrink-0" />
                  info@fokelworks.com
                </motion.a>
                <motion.a
                  href="tel:+918950483522"
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.17 }}
                  className="inline-flex items-center gap-3 text-background/70 hover:text-accent transition-all duration-300 hover:translate-x-1"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  +91 89504 83522
                </motion.a>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.19 }}
                  className="inline-flex items-start gap-3 text-background/70 transition-all duration-300 hover:translate-x-1"
                >
                  <MapPin className="w-5 h-5 shrink-0 mt-1" />
                  <span className="text-sm leading-relaxed">A77, Basement, A Block,<br />East of Kailash, New Delhi 110065</span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.19 }}
                className="h-[1px] bg-background/10 w-full"
              />

              <div className="flex flex-col gap-4">
                <p className="text-xs font-bold uppercase tracking-widest text-background/30 mb-1">
                  Socials
                </p>
                <motion.a
                  href="https://www.linkedin.com/company/fokelworks/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-3 text-background/70 hover:text-accent transition-all duration-300 hover:translate-x-1"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/fokelworks"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="inline-flex items-center gap-3 text-background/70 hover:text-accent transition-all duration-300 hover:translate-x-1"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width divider with subtle fade on both ends */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-background/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-background/40">
            © 2026 Fokel. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="text-sm text-background/40 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <p className="text-sm text-background/30 italic">
              Crafted with precision in India
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
