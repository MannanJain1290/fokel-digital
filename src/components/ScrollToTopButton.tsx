import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

/* ── WhatsApp SVG logo (official green brand icon) ──────────────────────────── */
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WHATSAPP_NUMBER = "+918950483522";
const WHATSAPP_MSG = encodeURIComponent("Hi, I'd like to start a project with Fokel.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const BUTTON_SIZE = 48; // slightly smaller than scroll-to-top

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [waHovered, setWaHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
      setVisible(scrollTop > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  /* Scroll-to-top ring */
  const size = 52;
  const strokeWidth = 2.5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - progress * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="floating-buttons"
          className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 24, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.8 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* ── WhatsApp button ──────────────────────────────────────────────── */}
          <div className="relative flex items-center justify-center">
            {/* Tooltip */}
            <AnimatePresence>
              {waHovered && (
                <motion.span
                  key="wa-tooltip"
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute right-full mr-3 px-3 py-1.5 rounded-full text-xs font-medium text-white whitespace-nowrap pointer-events-none"
                  style={{
                    background: "rgba(15,15,15,0.82)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                  }}
                >
                  Chat on WhatsApp
                </motion.span>
              )}
            </AnimatePresence>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              onMouseEnter={() => setWaHovered(true)}
              onMouseLeave={() => setWaHovered(false)}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
              className="flex items-center justify-center rounded-full text-white cursor-pointer"
              style={{
                width: BUTTON_SIZE,
                height: BUTTON_SIZE,
                background: "#25D366",
                boxShadow: "0 4px 20px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.25)",
              }}
            >
              <WhatsAppIcon />
            </motion.a>
          </div>

          {/* ── Scroll to top button ─────────────────────────────────────────── */}
          <div className="relative flex items-center justify-center">
            {/* Tooltip */}
            <AnimatePresence>
              {hovered && (
                <motion.span
                  key="stt-tooltip"
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute right-full mr-3 px-3 py-1.5 rounded-full text-xs font-medium text-white whitespace-nowrap pointer-events-none"
                  style={{
                    background: "rgba(15,15,15,0.82)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                  }}
                >
                  Scroll to top
                </motion.span>
              )}
            </AnimatePresence>

            <motion.button
              onClick={scrollToTop}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              aria-label="Scroll to top"
              id="scroll-to-top-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              className="relative flex items-center justify-center cursor-pointer"
              style={{ width: size, height: size }}
            >
              {/* Glassmorphism background */}
              <span
                className="absolute inset-0 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.30)",
                }}
              />

              {/* Circular progress ring */}
              <svg
                className="absolute inset-0"
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                style={{ transform: "rotate(-90deg)" }}
              >
                <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={strokeWidth} />
                <circle
                  cx={size / 2} cy={size / 2} r={radius}
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  style={{ transition: "stroke-dashoffset 0.1s linear" }}
                />
              </svg>

              {/* Bouncing arrow */}
              <motion.span
                className="relative z-10 flex items-center justify-center text-white"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
