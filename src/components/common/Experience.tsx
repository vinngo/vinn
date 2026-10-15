import type { Experience } from "@/data/experience";

import { Expandable, ExpandableContent } from "../ui/fabula/expandable";
import { useExpandable } from "../ui/fabula/expandable-context";
import Emphasis from "./Emphasis";
import { motion } from "framer-motion";

type ExperienceProps = {
  experience: Experience;
};

function ExperienceTrigger({ experience }: ExperienceProps) {
  const { isOpen } = useExpandable();

  return (
    <div className="flex flex-col sm:flex-row w-full gap-1 sm:gap-2 mb-5 font-light justify-between items-start">
      <div
        className="text-xl sm:text-2xl"
        style={{
          fontFamily: "Lora",
        }}
      >
        <div className="inline-block mb-2">
          <div>{experience.organization}</div>
          {isOpen && <Emphasis className="relative" />}
        </div>
        <div className="font-mono text-sm text-muted-foreground">
          <div className="relative mb-2">{experience.title}</div>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:ml-auto sm:text-right">
        <motion.div
          className="flex flex-row flex-wrap gap-x-2 text-sm text-muted-foreground font-light sm:pl-3 sm:flex-col sm:text-lg sm:whitespace-nowrap sm:text-right"
          style={{ fontFamily: "Lora" }}
          animate={{ opacity: isOpen ? 1 : 0.2 }}
        >
          <span>{experience.period}</span>
          <span className="sm:hidden">&middot;</span>
          <span>{experience.location}</span>
        </motion.div>
      </div>
    </div>
  );
}

export default function ExperienceComponent({ experience }: ExperienceProps) {
  return (
    <Expandable trigger={<ExperienceTrigger experience={experience} />}>
      <ExpandableContent className="font-extralight text-sm font-sans">
        <div className="p-3">
          <div className="text-muted-foreground font-mono mb-px">summary:</div>
          <div className="text-foreground">{experience.description}</div>
          <br />
          <div className="text-muted-foreground font-mono mb-px">
            highlights:{" "}
          </div>
          <div className="text-foreground">
            {experience.highlights.map((highlight, index) => (
              <div key={index}>{highlight}</div>
            ))}
          </div>
        </div>
      </ExpandableContent>
    </Expandable>
  );
}
