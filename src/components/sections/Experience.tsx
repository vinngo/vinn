import SectionTitle from "../common/SectionTitle";
import ExperienceComponent from "../common/Experience";
import { motion } from "motion/react";

export type Experience = {
  type: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  current: boolean;
};

const experiences: Experience[] = [
  {
    type: "work",
    title: "Software Engineering Intern",
    organization: "Intuit",
    location: "Mountain View, CA",
    period: "Summer 2022",
    description:
      "Built resuable UI components in React Native with complex state management using React Query and Redux",
    highlights: [
      "Improved development speed for future features",
      "Reduced duplicate code by 30%",
      "Collaborated with UX/UI designers to implement pixel-perfect designs",
      "Contributed to features used by 2000+ users, gained exposure to product lifecycle in agile, crossfunctional teams",
    ],
    current: false,
  },
  {
    type: "work",
    title: "Software Engineering Intern",
    organization: "Hammerspace",
    location: "Redwood City, CA",
    period: "Summer 2023",
    description:
      "Developed a Chrome extension with a lightweight frontend using HTMl, CSS, and Chromium APIs, enabling internal testing",
    highlights: [
      "Faster internal testing achieved by a metric of 20%",
      "Implemented Github workflow for source control, reducing code integration conflicts by 10%",
      "Improved collaboration between a team of 5 developers",
    ],
    current: false,
  },
  {
    type: "education",
    title: "Computer Science B.S.",
    organization: "UC Santa Cruz",
    location: "Santa Cruz, CA",
    period: "2023 - 2027 (Expected)",
    description:
      "Pursuing CS with minor in Statistics. Comprehensive understanding of DSA, Computer Architecture, Systems, and AI/ML",
    highlights: [
      `Relevant Coursework: Data Structures & Algorithms, Computer Architecture, Computer Systems, Software Engineering, Machine Learning, Statistics and Probability Theory, Linear Algebra`,
    ],
    current: true,
  },
  {
    type: "work",
    title: "Software Development Engineer Intern",
    organization: "Amazon Web Services (AWS)",
    location: "Seattle, WA",
    period: "Summer 2026",
    description: "Incoming",
    highlights: [`Coming Soon!`],
    current: true,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <SectionTitle title="Previously..." subtitle="positions I've held." />
          {/* Timeline */}
          <div className="relative">
            {/* Experience Items */}
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {experiences.map((experience, index) => (
                <div key={index} className="relative items-start pb-5 border-b">
                  <ExperienceComponent experience={experience} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
