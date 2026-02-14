const phrases = [
  "Digital Marketing",
  "Web Design",
  "Brand Strategy",
  "SEO & Performance",
  "Creative Design",
  "Digital Strategy",
];

const Marquee = () => {
  return (
    <section className="py-6 bg-foreground overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...phrases, ...phrases, ...phrases, ...phrases].map((phrase, i) => (
          <span
            key={i}
            className="text-background text-sm md:text-base font-heading font-medium uppercase tracking-[0.25em] mx-8 flex items-center gap-8"
          >
            {phrase}
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
