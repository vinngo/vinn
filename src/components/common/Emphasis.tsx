import { motion } from "motion/react";
import type { MotionProps } from "motion/react";

interface EmphasisProps {
  className?: string;
  transition?: MotionProps["transition"];
}

export default function Emphasis({
  className = "",
  transition,
}: EmphasisProps) {
  const defaultClasses = "absolute bottom-0 left-0 right-0 h-0.5 bg-primary";
  const combinedClasses = className
    ? `${defaultClasses} ${className}`
    : defaultClasses;

  return (
    <motion.div
      className={combinedClasses}
      style={{ transformOrigin: "left" }}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={transition || { duration: 0.6, ease: "easeOut" }}
    />
  );
}
