import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import homelane from "@/assets/clients/homelane.png";
import wtc from "@/assets/clients/wtc.png";
import genes from "@/assets/clients/genes.png";
import onsurity from "@/assets/clients/onsurity.png";
import inventeron from "@/assets/clients/inventeron.png";
import hmo from "@/assets/clients/hmo.png";
import sabProperties from "@/assets/clients/sab-properties.png";

const clients = [
  { src: homelane, alt: "HomeLane", height: "h-14 md:h-20" },
  { src: wtc, alt: "WTC", height: "h-14 md:h-20" },
  { src: genes, alt: "Genes", height: "h-14 md:h-20" },
  { src: onsurity, alt: "Onsurity", height: "h-14 md:h-20" },
  { src: inventeron, alt: "Inventeron", height: "h-14 md:h-20" },
  { src: hmo, alt: "HMO Architects", height: "h-14 md:h-20" },
  { src: sabProperties, alt: "SAB Properties", height: "h-14 md:h-20" },
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 40 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
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
        </motion.div>
      </div>

      <motion.div
        className="relative py-8 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background) / 0) 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, hsl(var(--background)) 0%, hsl(var(--background) / 0) 100%)",
          }}
        />

        <div className="animate-marquee py-2 will-change-transform flex min-w-max">
          <div className="flex gap-20 md:gap-32 items-center pr-20 md:pr-32">
            {clients.map((client, i) => (
              <motion.div
                key={`${client.alt}-${i}`}
                className="flex-shrink-0 flex items-center justify-center px-4 h-32 md:h-40 cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className={`${client.height} max-w-40 md:max-w-48 w-auto object-contain mix-blend-darken grayscale hover:grayscale-0 transition-all duration-500 ease-out opacity-80 hover:opacity-100`}
                />
              </motion.div>
            ))}
          </div>
          <div className="flex gap-20 md:gap-32 items-center pl-20 md:pl-32" aria-hidden>
            {clients.map((client, i) => (
              <motion.div
                key={`dup-${client.alt}-${i}`}
                className="flex-shrink-0 flex items-center justify-center px-4 h-32 md:h-40 cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={client.src}
                  alt=""
                  className={`${client.height} max-w-40 md:max-w-48 w-auto object-contain mix-blend-darken grayscale hover:grayscale-0 transition-all duration-500 ease-out opacity-80 hover:opacity-100`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Marquee;
