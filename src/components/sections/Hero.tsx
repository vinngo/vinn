import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="flex items-center justify-left bg-background">
      <div className="container mx-auto pt-50 px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-4xl mx-auto">
          {/* Main content */}
          <div className="mb-8 mx-auto">
            <h1
              className="text-7xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-6"
              style={{ fontFamily: "Lora, serif" }}
            >
              Vincent Ngo
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 font-light">
              CS @ UCSC & Full-Stack Developer
            </p>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2x font-extralight bb-12 leading-relaxed">
              Meticulous full-stack builder, combining design and functionality
              to inspire users.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-left space-x-6 mb-12">
            <a
              href="https://github.com/vinngo/"
              className="p-3 text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/vinngo/"
              className="p-3 text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
