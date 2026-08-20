import SectionTitle from "../common/SectionTitle";
import ExperienceComponent from "../common/Experience";
import { motion } from "motion/react";
import type { Experience } from "@/data/experience";
import { experiences } from "@/data/experience";

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
              viewport={{ once: true }}
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
