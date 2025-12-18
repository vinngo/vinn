import { useState } from "react";
import type { Experience } from "../sections/Experience";
import { motion, AnimatePresence } from "framer-motion";
import Emphasis from "./Emphasis";

type ExperienceProps = {
  experience: Experience;
};

export default function ExperienceComponent({ experience }: ExperienceProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex w-full items-center gap-2 mb-5 font-light ">
        <motion.div
          className="text-2xl"
          style={{
            fontFamily: "Lora",
          }}
        >
          <div className="inline-block mb-2">
            <div>{experience.organization}</div>
            {hovered && <Emphasis className="relative" />}
          </div>
          <div className="font-mono text-sm text-muted-foreground">
            <div className="relative mb-2">{experience.title}</div>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center gap-2"
          initial={{ flex: "0 1 0%" }}
          animate={{ flex: hovered ? "1 1 0%" : "0 1 0%" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            className="h-px w-full bg-muted-foreground"
          />
          <div
            className="pl-3 flex-col flex text-lg text-muted-foreground font-light whitespace-nowrap"
            style={{ fontFamily: "Lora" }}
          >
            {experience.period}
            <br />
            {experience.location}
          </div>
        </motion.div>
      </div>
      <div className="overflow-hidden">
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="bg-card rounded-sm shadow-2xl transition-shadow"
              style={{ transformOrigin: "top" }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2 font-extralight text-sm font-sans">
                <div className="text-foreground">{experience.description}</div>
                <br />
                <div className="text-foreground">
                  {experience.highlights.map((highlight, index) => (
                    <div key={index}>{highlight}</div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
