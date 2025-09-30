import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const experiences = [
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
    title: "Bachelor of Science in Computer Science",
    organization: "University of California, Santa Cruz",
    location: "Santa Cruz, CA",
    period: "2023 - 2027 (Expected)",
    description:
      "Pursuing CS with minor in Statistics. Comprehensive understanding of DSA, Computer Architecture, Systems, and AI/ML",
    highlights: [
      "Relevant Coursework: Data Structures & Algorithms, Computer Architecture, Computer Systems, Machine Learning, Artificial Intelligence, Statistics and Probability Theory, Linear Algebra",
    ],
    current: true,
  },
];

/*
const certifications = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "#",
  },
  {
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2023",
    credentialUrl: "#",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialUrl: "#",
  },
];
*/

export default function Experience() {
  const getExperienceIcon = (type: string) => {
    return type === "education" ? (
      <GraduationCap className="h-6 w-6" />
    ) : (
      <Briefcase className="h-6 w-6" />
    );
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Experience & Education
            </h2>
            <p className="text-xl text-muted-foreground">
              My academic and professional journey in technology
            </p>
          </div>
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground relative z-10">
                    {getExperienceIcon(experience.type)}
                  </div>

                  {/* Content */}
                  <div className="ml-8 flex-grow">
                    <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {experience.title}
                          </h3>
                          <p className="text-primary font-medium">
                            {experience.organization}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {experience.location}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 mt-2 sm:mt-0">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground text-sm">
                            {experience.period}
                          </span>
                          {experience.current && (
                            <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-medium rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Highlights */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {experience.type === "education"
                            ? "Academic Highlights"
                            : "Key Achievements"}
                        </h4>
                        <ul className="space-y-2">
                          {experience.highlights.map(
                            (highlight, highlightIndex) => (
                              <li
                                key={highlightIndex}
                                className="text-muted-foreground text-sm flex items-start gap-2"
                              >
                                <span className="text-primary mt-1 flex-shrink-0">
                                  •
                                </span>
                                {highlight}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Don't Be A Stranger
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether it be chat or coworking session, let's discuss how we
                can build something amazing together.
              </p>
              <button
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
