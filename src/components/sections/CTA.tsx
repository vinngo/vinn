import SectionTitle from "../common/SectionTitle";
import Emphasis from "../common/Emphasis";
import { motion } from "motion/react";
import { useState } from "react";

export default function CTA() {
  const [scheduleHover, setScheduleHover] = useState(false);
  const [linkedinHover, setLinkedinHover] = useState(false);

  return (
    <section className="pb-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8">
            <SectionTitle
              title="Don't be a stranger..."
              subtitle="Let's build something inspiring together"
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
    </section>
  );
}
