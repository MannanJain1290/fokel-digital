import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltProps {
  children: React.ReactNode;
  max?: number;        // Maximum rotation angle in degrees
  scale?: number;      // Hover scale factor
  className?: string;
}

export const Tilt: React.FC<TiltProps> = ({
  children,
  max = 10,
  scale = 1.03,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse positions normalized from 0 (top/left) to 1 (bottom/right)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Spring configuration for smooth movement
  const springConfig = { damping: 22, stiffness: 180, mass: 0.8 };

  // Map normalized coordinates [0, 1] to tilt rotation angles [-max, max]
  const rotateXVal = useTransform(y, [0, 1], [max, -max]);
  const rotateYVal = useTransform(x, [0, 1], [-max, max]);

  const rotateX = useSpring(rotateXVal, springConfig);
  const rotateY = useSpring(rotateYVal, springConfig);
  const scaleSpring = useSpring(1, springConfig);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Relative coordinates of mouse within the element
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize coordinates between 0 and 1
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseEnter = () => {
    scaleSpring.set(scale);
  };

  const handleMouseLeave = () => {
    // Reset positions to center
    x.set(0.5);
    y.set(0.5);
    scaleSpring.set(1.0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale: scaleSpring,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {/* Container wrapper for child to allow 3D nesting if needed */}
      <div style={{ transform: "translateZ(0px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
};

export default Tilt;
