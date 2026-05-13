import { ExternalLink, Github } from "lucide-react";
import { projects, type Project } from "../../data/projects";
import { motion } from "framer-motion";
import Emphasis from "../common/Emphasis";
import { TechCarousel } from "../common/TechnologyCarousel";
import SectionTitle from "../common/SectionTitle";
import { Expandable, ExpandableContent } from "../ui/fabula/expandable";
import { useExpandable } from "../ui/fabula/expandable-context";
import { useMediaQuery } from "../../hooks/useMediaQuery";

type ProjectCardProps = {
  project: Project;
};

function ProjectCardTrigger({ project }: ProjectCardProps) {
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
        <div className="flex items-start justify-between">
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
      </div>
    </div>
  );
}

function MobileProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      {/* Video/Image */}
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

      <div className="p-4">
        {/* Title */}
        <h3
          className="text-lg font-light text-foreground mb-2"
          style={{ fontFamily: "Lora" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground font-extralight text-sm mb-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-3">
          <TechCarousel technologies={project.technologies} />
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
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
              className="flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-light"
            >
              <Github className="h-4 w-4" />
              <span className="font-light">Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
      <Expandable trigger={<ProjectCardTrigger project={project} />}>
        <ExpandableContent className="px-6 pb-6">
          {/* Description */}
          <p className="text-muted-foreground font-extralight text-sm mb-4">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-4">
            <TechCarousel technologies={project.technologies} />
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
  const isMobile = useMediaQuery("(max-width: 640px)");

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
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Projects Grid */}
            <div className="px-0 sm:px-40 py-10 grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
              {projects.map((project) =>
                isMobile ? (
                  <MobileProjectCard key={project.id} project={project} />
                ) : (
                  <ProjectCard key={project.id} project={project} />
                ),
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Modal */}
    </section>
  );
}
