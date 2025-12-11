import { motion } from "motion/react";

export default function Emphasis() {
  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
      style={{ transformOrigin: "left" }}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  );
}
