import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface DepthTextProps {
  text: string;
  className?: string;
  glowColor?: string; // e.g. "rgba(255, 107, 20, 0.4)"
  strength?: number;   // Parallax shifting scale
}

export const DepthText: React.FC<DepthTextProps> = ({
  text,
  className = "",
  glowColor = "rgba(255, 107, 20, 0.4)",
  strength = 0.08,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInside, setIsInside] = useState(false);

  // Normalized mouse coords (-1 to 1) relative to viewport center or element center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 140, mass: 0.5 };
  
  // Springs for smooth movement
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Foreground layers move in-direction, background glow layers move opposite
  const frontX = useTransform(smoothX, (val) => val * strength * 45);
  const frontY = useTransform(smoothY, (val) => val * strength * 45);
  const backX = useTransform(smoothX, (val) => -val * strength * 60);
  const backY = useTransform(smoothY, (val) => -val * strength * 60);
  
  // Shadow blur changes on proximity
  const blurVal = useTransform(
    smoothX, 
    (val) => {
      const dist = Math.sqrt(val * val + y.get() * y.get());
      return 6 + dist * 10; // Blur increases when mouse moves away
    }
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Mouse distance from element center
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      
      const distance = Math.sqrt(dx * dx + dy * dy);
      const activeRadius = 450; // Text depth starts reacting within 450px

      if (distance < activeRadius) {
        setIsInside(true);
        // Normalize coordinates to [-1, 1] range inside the active boundary
        x.set(dx / activeRadius);
        y.set(dy / activeRadius);
      } else {
        setIsInside(false);
        x.set(0);
        y.set(0);
      }
    };

    const handleMouseLeave = () => {
      setIsInside(false);
      x.set(0);
      y.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y]);

  return (
    <div
      ref={ref}
      className={`relative inline-block ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Blurred background glow layer moving opposite to cursor */}
      <motion.span
        className="absolute inset-0 select-none pointer-events-none"
        style={{
          x: backX,
          y: backY,
          color: glowColor,
          filter: `blur(8px)`,
          opacity: isInside ? 0.75 : 0.0,
          zIndex: 1,
          transition: "opacity 0.5s ease-out",
        }}
      >
        {text}
      </motion.span>

      {/* Crisp foreground layer moving towards cursor */}
      <motion.span
        className="relative inline-block z-10"
        style={{
          x: frontX,
          y: frontY,
        }}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default DepthText;
