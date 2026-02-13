const clients = [
  { name: "Acme Corp", initials: "AC" },
  { name: "Nova Studios", initials: "NS" },
  { name: "Vertex Labs", initials: "VL" },
  { name: "Zenith Co", initials: "ZC" },
  { name: "Pulse Media", initials: "PM" },
];

const TrustedBy = () => {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Trusted By
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center gap-2 text-muted-foreground/60 hover:text-foreground transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-xs font-bold tracking-wide">
                {client.initials}
              </div>
              <span className="text-sm font-semibold tracking-wide">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
