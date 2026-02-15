import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import inventeron from "@/assets/clients/inventeron.jpg";
import onsurity from "@/assets/clients/onsurity.jpg";
import homelane from "@/assets/clients/homelane.webp";
import hmo from "@/assets/clients/hmo.png";
import genes from "@/assets/clients/genes.png";
import wtc from "@/assets/clients/wtc.webp";

const clients = [
  { src: inventeron, alt: "Inventeron Technologies" },
  { src: onsurity, alt: "Onsurity" },
  { src: homelane, alt: "HomeLane" },
  { src: hmo, alt: "HMO Architects" },
  { src: genes, alt: "Genes Lecoanet Hemant" },
  { src: wtc, alt: "WTC 2026" },
];

const Marquee = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      className="bg-background overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-4">
        {/* Section label with animated line */}
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 40 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            className="h-[2px] bg-accent"
          />
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-medium tracking-[0.3em] uppercase text-accent"
          >
            Trusted By
          </motion.p>
        </div>
      </div>

      {/* Marquee container */}
      <motion.div
        className="relative py-8 overflow-hidden marquee-hover-pause"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background) / 0) 100%)",
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, hsl(var(--background)) 0%, hsl(var(--background) / 0) 100%)",
          }}
        />

        {/* Infinite smooth scroll */}
        <div className="animate-marquee py-2 will-change-transform flex min-w-max">
          <div className="flex gap-16 md:gap-24 items-center pr-16 md:pr-24">
            {clients.map((client, i) => (
              <div
                key={`${client.alt}-${i}`}
                className="flex-shrink-0 flex items-center justify-center px-2"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 ease-out opacity-60 hover:opacity-100"
                />
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex gap-16 md:gap-24 items-center pl-16 md:pl-24" aria-hidden>
            {clients.map((client, i) => (
              <div
                key={`dup-${client.alt}-${i}`}
                className="flex-shrink-0 flex items-center justify-center px-2"
              >
                <img
                  src={client.src}
                  alt=""
                  className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 ease-out opacity-60 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Marquee;
