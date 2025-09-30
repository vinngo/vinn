import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-background pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main content */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text">
                Vincent
              </span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 font-medium">
              CS @ UCSC & Full-Stack Developer
            </p>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Meticulous full-stack builder, obsessed with creating meaningful
              web applications.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-primary text-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg min-w-[200px]"
            >
              View My Work
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-medium text-lg min-w-[200px]"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
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
            <a
              href="#"
              className="p-3 text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
