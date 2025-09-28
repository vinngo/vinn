import { Code2, Database, Globe, Wrench, Users, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="h-6 w-6" />,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL", "Go"],
  },
  {
    title: "Frontend Technologies",
    icon: <Globe className="h-6 w-6" />,
    skills: ["React", "Next.js", "Tailwind CSS", "Redux", "TanStack Query"],
  },
  {
    title: "Backend Technologies",
    icon: <Database className="h-6 w-6" />,
    skills: ["Node.js", "Express.js", "Django", "FastAPI", "RESTful APIs"],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase"],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="h-6 w-6" />,
    skills: ["Git", "Docker", "AWS", "Vercel", "GCP", "Linux", "Kubernetes"],
  },
  {
    title: "Soft Skills",
    icon: <Users className="h-6 w-6" />,
    skills: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Leadership",
      "Adaptability",
      "Critical Thinking",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Learning Philosophy */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <Lightbulb className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Continuous Learning
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Technology evolves rapidly, and I believe in staying ahead of the
              curve. I'm constantly exploring new frameworks, tools, and
              methodologies to deliver cutting-edge solutions and maintain best
              practices in software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
