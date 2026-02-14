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

const OurClients = () => {
  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-16">
          Trusted by
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-4 opacity-0 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img
                src={client.src}
                alt={client.alt}
                className="max-h-40 w-auto object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
