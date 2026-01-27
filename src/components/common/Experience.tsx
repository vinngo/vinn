import type { Experience } from "../sections/Experience";
import { Expandable, ExpandableContent } from "../ui/fabula/expandable";
import { useExpandable } from "../ui/fabula/expandable-context";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Emphasis from "./Emphasis";
import { motion } from "framer-motion";

type ExperienceProps = {
  experience: Experience;
};

function ExperienceTrigger({ experience }: ExperienceProps) {
  const { isOpen } = useExpandable();

  return (
    <div className="flex w-full gap-2 mb-5 font-light justify-between items-start">
      <div
        className="text-2xl"
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
      <div className="flex items-center gap-2 ml-auto text-right">
        <motion.div
          className="pl-3 flex-col flex text-lg text-muted-foreground font-light whitespace-nowrap text-right"
          style={{ fontFamily: "Lora" }}
          animate={{ opacity: isOpen ? 1 : 0.2 }}
        >
          {experience.period}
          <br />
          {experience.location}
        </motion.div>
      </div>
    </div>
  );
}

function MobileExperience({ experience }: ExperienceProps) {
  return (
    <div className="font-light">
      <div style={{ fontFamily: "Lora" }}>
        <div className="text-xl mb-1">{experience.organization}</div>
        <div className="font-mono text-sm text-muted-foreground mb-1">
          {experience.title}
        </div>
        <div
          className="text-sm text-muted-foreground mb-3"
          style={{ fontFamily: "Lora" }}
        >
          {experience.period} &middot; {experience.location}
        </div>
      </div>
      <div className="font-extralight text-sm font-sans">
        <div className="text-foreground">{experience.description}</div>
      </div>
    </div>
  );
}

export default function ExperienceComponent({ experience }: ExperienceProps) {
  const isMobile = useMediaQuery("(max-width: 640px)");

  if (isMobile) {
    return <MobileExperience experience={experience} />;
  }

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
