import { motion } from "framer-motion";

interface TechnologyCarouselProps {
  technologies: string[];
  isHovered: boolean;
  pixelsPerSecond?: number;
  gap?: number;
}

export default function TechnologyCarousel({
  technologies,
  isHovered,
  pixelsPerSecond = 30,
  gap = 2,
}: TechnologyCarouselProps) {
  // Constants for width calculation
  const estimatedBadgeWidth = 80;
  const gapInPixels = gap * 4; // Tailwind: gap-2 = 8px

  // Calculate total width for animation (no separator gap)
  const singleSetWidth =
    technologies.length * (estimatedBadgeWidth + gapInPixels);
  const totalWidth = singleSetWidth;

  // Calculate duration based on constant speed
  const duration = totalWidth / pixelsPerSecond;

  return (
    <div className="relative overflow-hidden">
      {/* Left fade overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />

      {/* Right fade overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-2 items-center"
        animate={{
          x: isHovered ? 0 : -totalWidth,
        }}
        transition={{
          duration: isHovered ? 0 : duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0,
        }}
      >
        {/* First set of technologies */}
        {technologies.map((tech, index) => (
          <span
            key={`tech-${index}`}
            className="px-2 py-1 bg-muted text-muted-foreground font-extralight text-xs rounded whitespace-nowrap"
            style={{
              fontFamily: "monospace",
            }}
          >
            {tech}
          </span>
        ))}

        {/* Duplicated set for seamless loop */}
        {technologies.map((tech, index) => (
          <span
            key={`tech-dup-${index}`}
            className="px-2 py-1 bg-muted text-muted-foreground font-extralight text-xs rounded whitespace-nowrap"
            style={{
              fontFamily: "monospace",
            }}
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
