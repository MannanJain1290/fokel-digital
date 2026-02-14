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
  return (
    <section className="py-10 bg-background border-y border-border overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap items-center">
        {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-10 md:mx-16 flex items-center justify-center"
          >
            <img
              src={client.src}
              alt={client.alt}
              className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
