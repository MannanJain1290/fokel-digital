import genesLogo from "@/assets/clients/genes-lecoanet.png";
import wtcLogo from "@/assets/clients/wtc-2026.webp";
import hmoLogo from "@/assets/clients/hmo-architects.png";

const clients = [
  { name: "Genes Lecoanet Hemant", logo: genesLogo },
  { name: "ITA-AITES WTC 2026", logo: wtcLogo },
  { name: "HMO Architects", logo: hmoLogo },
];

const TrustedBy = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground mb-10">
          Our Clients
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {clients.map((client) => (
            <div
              key={client.name}
              className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
