const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="text-2xl font-bold tracking-tight uppercase">
              Fokel<span className="text-accent">.</span>
            </p>
            <p className="mt-4 text-background/60 leading-relaxed text-sm">
              A digital studio specializing in digital marketing, web design, and
              digital strategy for ambitious businesses.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-4">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {["About", "Services", "Work", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@fokel.com" className="text-sm text-background/60 hover:text-background transition-colors">
                hello@fokel.com
              </a>
              <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            © 2026 Fokel. All rights reserved.
          </p>
          <p className="text-xs text-background/40">
            Bringing brands into focus.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
