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
    <section className="py-12 bg-primary overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...phrases, ...phrases, ...phrases, ...phrases].map((phrase, i) => (
          <span
            key={i}
            className="text-primary-foreground text-lg md:text-xl font-semibold uppercase tracking-[0.2em] mx-8 flex items-center gap-8"
          >
            {phrase}
            <span className="w-2 h-2 rounded-full bg-accent inline-block" />
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
