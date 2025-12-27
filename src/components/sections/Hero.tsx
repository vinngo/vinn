import { Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="hero" className="flex items-center justify-left bg-background">
      <div className="container mx-auto pt-50 px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-4xl mx-auto">
          {/* Main content */}
          <div className="mb-8 mx-auto">
            <div className="relative">
              <motion.h1
                className="text-7xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-7"
                style={{ fontFamily: "Lora, serif" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                Vincent Ngo
              </motion.h1>
            </div>
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 font-light"
              style={{ fontFamily: "Lora, serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              CS @ UCSC & Full-Stack Developer
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground max-w-2x font-extralight bb-12 leading-relaxed"
              style={{ fontFamily: "Lora, serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            >
              Meticulous full-stack builder, combining form and function to
              inspire users.
            </motion.p>
          </div>

          {/* Social Links */}
          <motion.div
            className="flex justify-left space-x-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
