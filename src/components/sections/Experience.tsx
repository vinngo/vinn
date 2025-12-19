import SectionTitle from "../common/SectionTitle";
import ExperienceComponent from "../common/Experience";
import { motion } from "motion/react";
import { useState } from "react";
import Emphasis from "../common/Emphasis";

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
];

export default function Experience() {
  const [scheduleHover, setScheduleHover] = useState(false);
  const [linkedinHover, setLinkedinHover] = useState(false);

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <SectionTitle title="Previously..." subtitle="in academia and tech" />
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
          {/* Certifications */}
          <div className="mt-20">
            {/*
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Certifications & Achievements
              </h3>
              <p className="text-muted-foreground">
                Professional certifications that validate my technical expertise
              </p>
            </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-accent/10 text-accent rounded-full">
                        <Award className="h-6 w-6" />
                      </div>
                    </div>

                    <h4 className="font-semibold text-foreground mb-2">
                      {cert.title}
                    </h4>

                    <p className="text-muted-foreground text-sm mb-2">
                      {cert.issuer}
                    </p>

                    <p className="text-muted-foreground text-xs mb-4">
                      Issued: {cert.date}
                    </p>

                    <a
                      href={cert.credentialUrl}
                      className="text-primary hover:text-primary/80 text-sm font-medium"
                    >
                      View Credential
                    </a>
                  </div>
                ))}
              </div>
              */}
          </div>
          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="p-8">
              <SectionTitle
                title="Don't be a stranger..."
                subtitle="Let's build something inspiring together"
              />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.button
                  onMouseEnter={() => setScheduleHover(true)}
                  onMouseLeave={() => setScheduleHover(false)}
                  className="text-md text-muted-foreground font-light font-mono p-3 tracking-tighter cursor-pointer"
                >
                  <div className="inline-block">
                    <a
                      href="https://calendly.com/ngovincent9593/30min"
                      className="mb-1"
                    >
                      schedule a call
                    </a>
                    {scheduleHover && <Emphasis className="relative" />}
                  </div>
                </motion.button>
                <motion.button
                  onMouseEnter={() => setLinkedinHover(true)}
                  onMouseLeave={() => setLinkedinHover(false)}
                  className="text-md text-muted-foreground font-light font-mono p-3 tracking-tighter cursor-pointer"
                >
                  <div className="inline-block">
                    <a
                      href="https://www.linkedin.com/in/vinngo/"
                      className="mb-1"
                    >
                      connect on linkedin
                    </a>
                    {linkedinHover && <Emphasis className="relative" />}
                  </div>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
