const Footer = () => {
  return (
    <footer className="bg-foreground border-t border-background/10 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="text-xl font-heading font-bold tracking-tight uppercase text-background">
              Fokel<span className="text-accent">.</span>
            </p>
            <p className="mt-4 text-background/40 leading-relaxed text-sm font-body">
              A digital studio specializing in digital marketing, web design, and
              digital strategy for ambitious businesses.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-heading font-semibold uppercase tracking-[0.25em] mb-5 text-background/60">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {["About", "Services", "Work", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-background/40 hover:text-background transition-colors duration-300 font-body"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-heading font-semibold uppercase tracking-[0.25em] mb-5 text-background/60">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@fokel.com" className="text-sm text-background/40 hover:text-background transition-colors duration-300 font-body">
                hello@fokel.com
              </a>
              <a href="#" className="text-sm text-background/40 hover:text-background transition-colors duration-300 font-body">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-background/40 hover:text-background transition-colors duration-300 font-body">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-background/30 font-body">
            © 2026 Fokel. All rights reserved.
          </p>
          <p className="text-[11px] text-background/30 font-body">
            Bringing brands into focus.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
