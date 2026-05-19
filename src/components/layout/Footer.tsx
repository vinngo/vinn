export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm font-light font-mono text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Vincent Ngo.
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="text-muted-foreground text-xs hover:text-primary transition-colors font-mono"
              aria-label="GitHub"
            >
              gh
            </a>
            <a
              href="#"
              className="text-muted-foreground text-xs hover:text-primary transition-colors font-mono"
              aria-label="LinkedIn"
            >
              li
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
