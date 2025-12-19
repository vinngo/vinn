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
      <div className="flex w-full gap-2 mb-5 font-light justify-between items-start">
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
        <div className="flex items-center gap-2 ml-auto text-right">
          <div
            className="pl-3 flex-col flex text-lg text-muted-foreground font-light whitespace-nowrap text-right"
            style={{ fontFamily: "Lora" }}
          >
            {experience.period}
            <br />
            {experience.location}
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="border-l shadow-2xl transition-shadow"
              style={{ transformOrigin: "top" }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-3 font-extralight text-sm font-sans">
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
