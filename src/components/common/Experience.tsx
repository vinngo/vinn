import type { Experience } from "../sections/Experience";
import { Expandable, ExpandableContent } from "../ui/fabula/expandable";
import { useExpandable } from "../ui/fabula/expandable-context";
import Emphasis from "./Emphasis";

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
  );
}

export default function ExperienceComponent({ experience }: ExperienceProps) {
  return (
    <Expandable trigger={<ExperienceTrigger experience={experience} />}>
      <ExpandableContent className="font-extralight text-sm font-sans">
        <div className="p-3">
          <div className="text-foreground">{experience.description}</div>
          <br />
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
