import { motion } from "motion/react";

type SectionTitleProps = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <h2
          className="text-3xl sm:text-4xl text-foreground mb-4"
          style={{ fontFamily: "Lora" }}
        >
          {title}
        </h2>
      </motion.div>
      <motion.p
        className="text-xl text-muted-foreground font-light max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
