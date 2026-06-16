import React, { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   FOKEL CURSOR — "Signal Dot"

   Three-layer system:
   1. DOT       — 6 px solid orange circle. Follows mouse exactly. No lag.
   2. RING      — 36 px thin ring. Springs behind the dot with medium lag.
                  On hover: fills with soft orange bloom + expands.
   3. AURA      — 90 px blurred soft circle. Springs behind with heavy lag.
                  Creates a trailing luminous halo.

   Context label fades in beside the ring when hovering interactive elements.
───────────────────────────────────────────────────────────────────────────── */

type HoverCtx = "default" | "link" | "button" | "image" | "input";

const CTX_LABELS: Record<HoverCtx, string> = {
  default: "",
  link:    "Open",
  button:  "Click",
  image:   "View",
  input:   "Type",
};

function getCtx(el: HTMLElement | null): HoverCtx {
  if (!el) return "default";
  if (el.closest("input, textarea, select"))    return "input";
  if (el.closest("button, [role='button']"))     return "button";
  if (el.closest("a"))                           return "link";
  if (el.closest("img, video, figure"))          return "image";
  return "default";
}

interface Spring { x: number; y: number; vx: number; vy: number }

function stepSpring(s: Spring, tx: number, ty: number, k: number, d: number) {
  s.vx = (s.vx + (tx - s.x) * k) * d;
  s.vy = (s.vy + (ty - s.y) * k) * d;
  s.x += s.vx;
  s.y += s.vy;
}

/* ─── Component ─────────────────────────────────────────────────────────────── */
export const GlassLensCursor: React.FC = () => {
  const [ready,   setReady]   = useState(false);
  const [visible, setVisible] = useState(false);
  const [ctx,     setCtx]     = useState<HoverCtx>("default");
  const [clicked, setClicked] = useState(false);

  /* refs mutated in rAF — never trigger re-renders */
  const mouse  = useRef({ x: -300, y: -300 });
  const ring   = useRef<Spring>({ x: -300, y: -300, vx: 0, vy: 0 });
  const aura   = useRef<Spring>({ x: -300, y: -300, vx: 0, vy: 0 });

  const dotEl   = useRef<HTMLDivElement>(null);
  const ringEl  = useRef<HTMLDivElement>(null);
  const auraEl  = useRef<HTMLDivElement>(null);
  const labelEl = useRef<HTMLDivElement>(null);

  /* live refs so rAF reads current values without stale closure */
  const ctxRef     = useRef<HoverCtx>("default");
  const clickedRef = useRef(false);
  const visRef     = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    document.documentElement.classList.add("custom-cursor-active");

    /* ── event handlers ─────────────────────────────────────────────────────── */
    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      /* bootstrap springs on first move so they don't fly from corner */
      if (!visRef.current) {
        ring.current.x  = e.clientX;  ring.current.y  = e.clientY;
        aura.current.x  = e.clientX;  aura.current.y  = e.clientY;
        visRef.current  = true;
        setVisible(true);
      }

      const newCtx = getCtx(e.target as HTMLElement);
      if (newCtx !== ctxRef.current) { ctxRef.current = newCtx; setCtx(newCtx); }
    };

    const onDown  = () => { clickedRef.current = true;  setClicked(true);  };
    const onUp    = () => { clickedRef.current = false; setClicked(false); };
    const onLeave = () => { visRef.current = false; setVisible(false); };
    const onEnter = () => { /* visibility restored on next mousemove */ };

    window.addEventListener("mousemove",    onMove,  { passive: true });
    window.addEventListener("mousedown",    onDown,  { passive: true });
    window.addEventListener("mouseup",      onUp,    { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    /* ── rAF loop ───────────────────────────────────────────────────────────── */
    let raf: number;

    const loop = () => {
      const tx = mouse.current.x;
      const ty = mouse.current.y;

      /* spring step */
      stepSpring(ring.current, tx, ty, 0.15, 0.75);  /* medium lag   */
      stepSpring(aura.current, tx, ty, 0.055, 0.78); /* heavy lag    */

      const active  = ctxRef.current !== "default";
      const down    = clickedRef.current;

      /* velocity magnitude for the ring — used to slightly squash/stretch */
      const rvx = ring.current.vx;
      const rvy = ring.current.vy;
      const spd = Math.hypot(rvx, rvy);
      const angle = Math.atan2(rvy, rvx) * (180 / Math.PI);

      /* ── DOT (exact position) ─────────────────────────────────────────────── */
      if (dotEl.current) {
        const ds = down ? 0.7 : active ? 1.35 : 1;
        dotEl.current.style.transform =
          `translate3d(${tx}px,${ty}px,0) translate(-50%,-50%) scale(${ds})`;
      }

      /* ── RING (spring-lagged) ─────────────────────────────────────────────── */
      if (ringEl.current) {
        /* subtle squash in direction of travel — max 15% */
        const squash = Math.min(spd * 0.022, 0.18);
        const sx = 1 + squash;
        const sy = 1 - squash * 0.6;
        const rs = down ? 0.72 : active ? 1.55 : 1;

        ringEl.current.style.transform =
          `translate3d(${ring.current.x}px,${ring.current.y}px,0) ` +
          `translate(-50%,-50%) ` +
          `rotate(${angle}deg) ` +
          `scale(${rs * sx},${rs * sy})`;

        /* border & fill transition handled via CSS vars set here */
        ringEl.current.style.setProperty("--ring-opacity", active ? "1" : "0.55");
        ringEl.current.style.setProperty("--bloom-opacity", active ? (down ? "0.35" : "0.18") : "0");
        ringEl.current.style.borderColor = active
          ? `rgba(255,107,20,${down ? 0.95 : 0.75})`
          : "rgba(255,255,255,0.45)";
      }

      /* ── AURA (heavy-lagged bloom halo) ──────────────────────────────────── */
      if (auraEl.current) {
        const as = down ? 0.6 : active ? 1.4 : 1;
        auraEl.current.style.transform =
          `translate3d(${aura.current.x}px,${aura.current.y}px,0) ` +
          `translate(-50%,-50%) scale(${as})`;
        auraEl.current.style.opacity = active ? "0.5" : "0.2";
      }

      /* ── LABEL ───────────────────────────────────────────────────────────── */
      if (labelEl.current) {
        const label = CTX_LABELS[ctxRef.current];
        labelEl.current.textContent = label;
        labelEl.current.style.opacity = label ? "1" : "0";
        labelEl.current.style.transform =
          `translate3d(${ring.current.x + 24}px,${ring.current.y + 18}px,0)`;
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove",    onMove);
      window.removeEventListener("mousedown",    onDown);
      window.removeEventListener("mouseup",      onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("custom-cursor-active");
      cancelAnimationFrame(raf);
    };
  }, [ready]);

  if (!ready) return null;

  const vis = visible ? 1 : 0;

  return (
    <>
      <style>{`
        .custom-cursor-active,
        .custom-cursor-active * { cursor: none !important; }
      `}</style>

      {/* ── AURA — large, blurry, slow ───────────────────────────────────────── */}
      <div
        ref={auraEl}
        className="fixed top-0 left-0 pointer-events-none z-[9996]"
        style={{
          width: 90, height: 90,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,107,20,0.28) 0%, rgba(255,107,20,0) 70%)",
          opacity: vis * 0.2,
          transition: "opacity 0.4s ease",
          willChange: "transform, opacity",
          filter: "blur(8px)",
        }}
      />

      {/* ── RING — medium lag, squashes in travel direction ───────────────────── */}
      <div
        ref={ringEl}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          width: 36, height: 36,
          borderRadius: "50%",
          border: "1.5px solid rgba(255,255,255,0.45)",
          /* inner bloom fill */
          background: "radial-gradient(circle, rgba(255,107,20,var(--bloom-opacity,0)) 0%, transparent 70%)",
          boxShadow: `
            0 0 0 0 transparent,
            inset 0 0 8px rgba(255,107,20,0.0)
          `,
          opacity: vis,
          transition: "opacity 0.35s ease, border-color 0.25s ease",
          willChange: "transform",
          /* CSS vars default */
          ["--ring-opacity" as string]: "0.55",
          ["--bloom-opacity" as string]: "0",
        }}
      />

      {/* ── DOT — exact mouse position, orange, sharp ────────────────────────── */}
      <div
        ref={dotEl}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 6, height: 6,
          borderRadius: "50%",
          backgroundColor: "#FF6B14",
          boxShadow: "0 0 0 2px rgba(255,107,20,0.25), 0 0 12px rgba(255,107,20,0.6)",
          opacity: vis,
          transition: "opacity 0.35s ease",
          willChange: "transform",
        }}
      />

      {/* ── LABEL ─────────────────────────────────────────────────────────────── */}
      <div
        ref={labelEl}
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
        style={{
          opacity: 0,
          transition: "opacity 0.2s ease",
          willChange: "transform, opacity",
          fontFamily: "var(--font-body, sans-serif)",
          fontSize: "9px",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#FF6B14",
          whiteSpace: "nowrap",
          textShadow: "0 0 16px rgba(255,107,20,0.45)",
        }}
      />
    </>
  );
};

export default GlassLensCursor;
