export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: "web" | "mobile" | "desktop" | "ai";
  complexity: "beginner" | "intermediate" | "advanced";
  image?: string;
  video?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: "in-progress" | "completed" | "archived" | "planning";
}

export const projects: Project[] = [
  {
    id: "socratical",
    title: "Socratical",
    description:
      "A whiteboard that teaches students tough concepts through Socratic guidance. Best Use of Vercel at Cruzhacks 2026.",
    technologies: ["Next.JS", "tldraw", "Vercel AI SDK", "Vercel Functions"],
    category: "web",
    complexity: "intermediate",
    video:
      "https://pub-f15720f21a45482baa0d7d4ed05f708b.r2.dev/socratical video demo.mp4",
    featured: true,
    status: "completed",
    demoUrl: "https://cruzhacks-seven.vercel.app",
    githubUrl: "https://github.com/vinngo/socratical",
  },
  {
    id: "kairo",
    title: "Kairo",
    description:
      "A natural language interface for working with Google Calendar",
    technologies: ["Next.JS", "LangChain", "OpenRouter", "MCP"],
    category: "desktop",
    complexity: "intermediate",
    video: "https://pub-f15720f21a45482baa0d7d4ed05f708b.r2.dev/cairo-demo.mp4",
    featured: false,
    status: "in-progress",
    githubUrl: "https://github.com/vinngo/sbhacks ",
  },
  {
    id: "codecompass",
    title: "CodeCompass",
    description:
      "Open source AI-powered collaborative documentation chatbot for indie devs and enterprise alike.",
    technologies: [
      "Next.JS",
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "Voyager",
      "Treesitter",
      "S3",
      "PostgreSQL",
    ],
    category: "web",
    complexity: "advanced",
    image: "/project-images/codecompass.jpg",
    video:
      "https://pub-f15720f21a45482baa0d7d4ed05f708b.r2.dev/code-compass-demo-complete-compressed.mp4#t=29,103",
    demoUrl: "https://codecompass-eight.vercel.app",
    githubUrl: "https://github.com/vinngo/codecompass",
    featured: true,
    status: "completed",
  },
  {
    id: "cryb",
    title: "cryb",
    description: "A household management platform for students.",
    technologies: ["Next.JS", "PostgreSQL", "Resend", "S3", "Lambda"],
    category: "web",
    complexity: "intermediate",
    video:
      "https://pub-f15720f21a45482baa0d7d4ed05f708b.r2.dev/cryb-demo.mp4#t=20,60",
    demoUrl: "https://cryb.vercel.app",
    githubUrl: "https://github.com/vinngo/cryb",
    featured: true,
    status: "completed",
  },
  {
    id: "fabula",
    title: "fabula",
    description:
      "An opinionated UI component registry distributed using shadcn",
    technologies: ["Next.JS", "TailwindCSS", "Framer Motion", "shadcn"],
    category: "web",
    complexity: "intermediate",
    video:
      "https://pub-f15720f21a45482baa0d7d4ed05f708b.r2.dev/fabula-demo.mp4",
    demoUrl: "https://fabula-one.vercel.app",
    githubUrl: "https://github.com/vinngo/fabula",
    featured: true,
    status: "in-progress",
  },
  {
    id: "accountable",
    title: "Accountable",
    description:
      "A twist on social networking apps with a focus on unwavering discipline",
    technologies: ["React Native", "Twilio", "Supabase", "S3"],
    category: "mobile",
    complexity: "intermediate",
    video:
      "https://pub-f15720f21a45482baa0d7d4ed05f708b.r2.dev/accountable-demo.mp4",
    demoUrl: "https://github.com/vinngo/accountable",
    githubUrl: "https://github.com/vinngo/accountable",
    featured: false,
    status: "completed",
  },
];
