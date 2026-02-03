import { motion } from "framer-motion";

interface TechnologyCarouselProps {
  technologies: string[];
  isHovered?: boolean;
  pixelsPerSecond?: number;
  gap?: number;
}

export function TechCarousel({ technologies }: TechnologyCarouselProps) {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative flex">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex gap-5 pr-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {/* First set */}
          {technologies.map((tech, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center gap-3 whitespace-nowrap"
            >
              <span className="px-2 py-1 bg-muted text-muted-foreground font-mono text-xs rounded whitespace-nowrap">
                {tech}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {technologies.map((tech, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center gap-3 whitespace-nowrap"
            >
              <span className="px-2 py-1 bg-muted text-muted-foreground font-mono text-xs rounded whitespace-nowrap">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
