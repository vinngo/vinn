import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects, type Project } from "../../data/projects";
import { motion } from "framer-motion";
import Emphasis from "../common/Emphasis";
import TechnologyCarousel from "../common/TechnologyCarousel";
import SectionTitle from "../common/SectionTitle";
import { Expandable, ExpandableContent } from "../ui/fabula/expandable";
import { useExpandable } from "../ui/fabula/expandable-context";

type FilterType = "all" | "web" | "mobile" | "desktop" | "ai";
type ComplexityFilter = "all" | "beginner" | "intermediate" | "advanced";

type ProjectCardProps = {
  project: Project;
  getStatusColor: (status: Project["status"]) => string;
  getComplexityColor: (complexity: Project["complexity"]) => string;
};

function ProjectCardTrigger({
  project,
  getStatusColor,
  getComplexityColor,
}: ProjectCardProps) {
  const { isOpen } = useExpandable();

  return (
    <div>
      {/* Project Video or Image */}
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
        {project.video ? (
          <video
            src={project.video}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-4xl">
            {project.category === "web"
              ? "🌐"
              : project.category === "mobile"
                ? "📱"
                : project.category === "ai"
                  ? "🤖"
                  : "💻"}
          </span>
        )}
      </div>

      <div className="p-6">
        {/* Project Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="relative">
            <h3
              className="text-xl font-light text-foreground line-clamp-2 pb-1"
              style={{
                fontFamily: "Lora",
              }}
            >
              {project.title}
            </h3>
            {isOpen && <Emphasis />}
          </div>
          {project.featured && (
            <span className="px-2 py-1 text-foreground text-xs rounded-full shrink-0 ml-2">
              Featured
            </span>
          )}
        </div>

        {/* Status and Complexity */}
        <div className="flex gap-2 mb-3">
          <span
            className={`px-2 py-0.5 text-xs font-extralight rounded-md ${getStatusColor(project.status)}`}
            style={{
              fontFamily: "sans-serif",
            }}
          >
            {project.status.charAt(0).toUpperCase() +
              project.status.slice(1).replace("-", " ")}
          </span>
          <span
            className={`px-2 py-0.5 text-xs font-extralight rounded-md ${getComplexityColor(project.complexity)}`}
            style={{
              fontFamily: "sans-serif",
            }}
          >
            {project.complexity.charAt(0).toUpperCase() +
              project.complexity.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  getStatusColor,
  getComplexityColor,
}: ProjectCardProps) {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
      <Expandable
        trigger={
          <ProjectCardTrigger
            project={project}
            getStatusColor={getStatusColor}
            getComplexityColor={getComplexityColor}
          />
        }
      >
        <ExpandableContent className="px-6 pb-6">
          {/* Description */}
          <p className="text-muted-foreground font-extralight text-sm mb-4">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-4">
            <TechnologyCarousel
              technologies={project.technologies}
              isHovered={false}
            />
          </div>

          {/* Links */}
          <div className="flex gap-3 pb-6">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-light"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="font-light">Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-light"
              >
                <Github className="h-4 w-4" />
                <span className="font-light">Code</span>
              </a>
            )}
          </div>
        </ExpandableContent>
      </Expandable>
    </div>
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<FilterType>("all");
  const [selectedComplexity, setSelectedComplexity] =
    useState<ComplexityFilter>("all");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [clearFilterHover, setClearFilterHover] = useState(false);

  const categories = [
    { id: "all" as FilterType, label: "All Projects" },
    { id: "web" as FilterType, label: "Web Apps" },
    { id: "mobile" as FilterType, label: "Mobile Apps" },
  ];

  const complexityLevels = [
    { id: "all" as ComplexityFilter, label: "All Levels" },
    { id: "beginner" as ComplexityFilter, label: "Beginner" },
    { id: "intermediate" as ComplexityFilter, label: "Intermediate" },
    { id: "advanced" as ComplexityFilter, label: "Advanced" },
  ];

  const filteredProjects = projects.filter((project) => {
    const categoryMatch =
      selectedCategory === "all" || project.category === selectedCategory;
    const complexityMatch =
      selectedComplexity === "all" || project.complexity === selectedComplexity;
    const featuredMatch = !showFeaturedOnly || project.featured;

    return categoryMatch && complexityMatch && featuredMatch;
  });

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "in-progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "planning":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getComplexityColor = (complexity: Project["complexity"]) => {
    switch (complexity) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <SectionTitle
            title="Most Recently..."
            subtitle="what I've been building"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Filters */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-4 justify-center items-center">
                {/* Category Filter */}
                <div className="flex items-center gap-2">
                  <span
                    className="text-sm font-medium text-muted-foreground"
                    style={{
                      fontFamily: "Lora",
                    }}
                  >
                    Category:
                  </span>
                  <div className="flex gap-2 relative">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors relative ${
                          selectedCategory === category.id
                            ? "text-foreground"
                            : "text-muted-foreground hover:cursor-pointer"
                        }`}
                        style={{
                          fontFamily: "Lora",
                        }}
                      >
                        {category.label}
                        {selectedCategory === category.id && (
                          <motion.div
                            layoutId="categoryIndicator"
                            className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary"
                            initial={false}
                            transition={{
                              stiffness: 500,
                              damping: 30,
                            }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-8 w-px bg-border"></div>

                {/* Complexity Filter */}
                <div
                  className="flex items-center gap-2"
                  style={{
                    fontFamily: "Lora",
                  }}
                >
                  <span className="text-sm font-medium text-muted-foreground">
                    Level:
                  </span>
                  <div className="flex gap-2 relative">
                    {complexityLevels.map((level) => (
                      <button
                        key={level.id}
                        onClick={() => setSelectedComplexity(level.id)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors relative ${
                          selectedComplexity === level.id
                            ? "text-foreground"
                            : "text-muted-foreground hover:cursor-pointer"
                        }`}
                      >
                        {level.label}
                        {selectedComplexity === level.id && (
                          <motion.div
                            layoutId="complexityIndicator"
                            className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary"
                            initial={false}
                            transition={{
                              stiffness: 500,
                              damping: 30,
                            }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Featured Toggle */}
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showFeaturedOnly}
                    onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                    className="rounded border-border"
                  />
                  <span
                    className="text-sm font-medium text-muted-foreground"
                    style={{
                      fontFamily: "Lora",
                    }}
                  >
                    Featured only
                  </span>
                </label>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="px-40 py-10 grid grid-cols-2 gap-8 items-start">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  getStatusColor={getStatusColor}
                  getComplexityColor={getComplexityColor}
                />
              ))}
            </div>
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p
                className="text-muted-foreground text-lg"
                style={{ fontFamily: "Lora" }}
              >
                No projects found matching your criteria.
              </p>
              <motion.button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedComplexity("all");
                  setShowFeaturedOnly(false);
                }}
                onMouseEnter={() => setClearFilterHover(true)}
                onMouseLeave={() => setClearFilterHover(false)}
                className="mt-2 text-md text-muted-foreground font-light font-mono p-3 tracking-tighter cursor-pointer"
              >
                <div className="inline-block">
                  Clear Filters
                  {clearFilterHover && <Emphasis className="relative" />}
                </div>
              </motion.button>
            </div>
          )}
        </div>
      </div>

      {/* Project Modal */}
    </section>
  );
}
