import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
  baseVx: number;
  baseVy: number;
  isEmber: boolean; // Spawned from cursor movement
  life?: number;    // Remaining lifespan of ember
  maxLife?: number;
}

export const NeuralNetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, vx: 0, vy: 0 });
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    if (isMobile) return; // Disable completely on mobile for performance

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    const maxParticles = 85;
    const connectionRadius = 110;
    const attractionRadius = 220;

    // Resize handler
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Initialize background particles
    const initParticles = () => {
      particles = [];
      const w = canvas.width;
      const h = canvas.height;
      
      // Prevent overpopulating small viewports
      const count = Math.min(maxParticles, Math.floor((w * h) / 18000));

      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 1.5 + 0.5;
        const vx = (Math.random() - 0.5) * 0.45;
        const vy = (Math.random() - 0.5) * 0.45;
        const alpha = Math.random() * 0.5 + 0.2;

        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx,
          vy,
          baseVx: vx,
          baseVy: vy,
          radius,
          alpha,
          baseAlpha: alpha,
          isEmber: false,
        });
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Mouse listeners
    const handleMouseMove = (e: MouseEvent) => {
      const mouse = mouseRef.current;
      const x = e.clientX;
      const y = e.clientY;

      // Calculate velocity
      mouse.vx = x - lastMouseRef.current.x;
      mouse.vy = y - lastMouseRef.current.y;
      mouse.x = x;
      mouse.y = y;

      lastMouseRef.current = { x, y };

      // Check if mouse is hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        isHoveredRef.current = !!target.closest(
          "a, button, [role='button'], input, textarea, select, [data-interactive]"
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Core Draw Loop
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const isHovered = isHoveredRef.current;
      const speed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);

      // 1. Spawning glowing embers from cursor movement
      if (speed > 4 && particles.length < maxParticles + 40) {
        // Spawn 1-2 embers per frame when moving fast
        const numEmbers = Math.min(2, Math.floor(speed / 4));
        for (let i = 0; i < numEmbers; i++) {
          const angle = Math.random() * Math.PI * 2;
          const spread = Math.random() * 12;
          // Spawn slightly offset from cursor
          const x = mouse.x + Math.cos(angle) * spread;
          const y = mouse.y + Math.sin(angle) * spread;

          // Motion away from cursor velocity plus noise
          const vx = -mouse.vx * 0.15 + (Math.random() - 0.5) * 0.8;
          const vy = -mouse.vy * 0.15 + (Math.random() - 0.5) * 0.8;
          const maxLife = Math.floor(Math.random() * 25) + 20;

          particles.push({
            x,
            y,
            vx,
            vy,
            baseVx: vx,
            baseVy: vy,
            radius: Math.random() * 2.0 + 1.0,
            alpha: 1.0,
            baseAlpha: 1.0,
            isEmber: true,
            life: maxLife,
            maxLife,
          });
        }
      }

      // Decay mouse velocity slowly
      mouse.vx *= 0.85;
      mouse.vy *= 0.85;

      // 2. Physics & Draw Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        if (p.isEmber) {
          // Ember particle lifespan decay
          if (p.life !== undefined && p.maxLife !== undefined) {
            p.life--;
            p.alpha = p.life / p.maxLife;
            if (p.life <= 0) {
              particles.splice(i, 1);
              continue;
            }
          }
          // Drift and slow down
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.96;
          p.vy *= 0.96;
        } else {
          // Regular particle logic
          // Drift
          const driftSpeed = isHovered ? 1.5 : 1.0;
          p.x += p.vx * driftSpeed;
          p.y += p.vy * driftSpeed;

          // Wrap edges
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;

          // Cursor Attraction
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < attractionRadius) {
            const pullStrength = isHovered ? 0.35 : 0.15;
            // Linear falloff force
            const force = (attractionRadius - dist) / attractionRadius;
            p.x += (dx / dist) * force * pullStrength;
            p.y += (dy / dist) * force * pullStrength;
            // Particles get more excited/brighter near the cursor
            p.alpha = Math.min(p.baseAlpha * (1 + force * 1.5), 0.95);
          } else {
            // Restore normal alpha
            p.alpha += (p.baseAlpha - p.alpha) * 0.1;
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        // Color: Glowing orange for embers and particles near the cursor, soft white for background
        if (p.isEmber) {
          ctx.fillStyle = `rgba(255, 107, 20, ${p.alpha * 0.85})`;
        } else {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < attractionRadius) {
            const mix = (attractionRadius - dist) / attractionRadius;
            // Lerp between white and orange
            const r = Math.round(255 - (255 - 255) * mix);
            const g = Math.round(255 - (255 - 107) * mix);
            const b = Math.round(255 - (255 - 20) * mix);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.alpha})`;
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
          }
        }
        ctx.fill();
      }

      // 3. Draw neural network connections
      const localConnectionRadius = isHovered ? connectionRadius * 1.35 : connectionRadius;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Line to cursor
        const dxMouse = mouse.x - p1.x;
        const dyMouse = mouse.y - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        // If particle is near cursor, connect it with a bright, glowing orange line
        if (distMouse < attractionRadius - 40) {
          const alphaMouse = (1 - distMouse / (attractionRadius - 40)) * (isHovered ? 0.6 : 0.35);
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(255, 107, 20, ${alphaMouse})`;
          ctx.lineWidth = alphaMouse * 1.5;
          ctx.stroke();
        }

        // Standard Particle-to-Particle connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < localConnectionRadius) {
            const alpha = (1 - dist / localConnectionRadius) * 0.15;
            
            // Check if connection is near cursor to tint it orange, otherwise white
            const dist1ToMouse = Math.sqrt((mouse.x - p1.x) ** 2 + (mouse.y - p1.y) ** 2);
            const dist2ToMouse = Math.sqrt((mouse.x - p2.x) ** 2 + (mouse.y - p2.y) ** 2);

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            if (dist1ToMouse < attractionRadius || dist2ToMouse < attractionRadius) {
              const orangeAlpha = alpha * (isHovered ? 2.5 : 1.8);
              ctx.strokeStyle = `rgba(255, 107, 20, ${orangeAlpha})`;
              ctx.lineWidth = orangeAlpha * 1.2;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
              ctx.lineWidth = alpha * 0.8;
            }
            
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[9998] hidden md:block"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default NeuralNetworkCanvas;
