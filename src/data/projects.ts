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
    id: "codecompass",
    title: "CodeCompass",
    description:
      "AI-powered collaborative documentation chatbot for codebases.",
    technologies: ["Next.JS", "FastAPI", "LangChain", "ChromaDB"],
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
    technologies: [
      "Next.JS",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Lucide Icons",
    ],
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
    id: "twmnd",
    title: "twmnd",
    description: "An AI meeting assistant tech demo.",
    technologies: ["Next.JS", "PostgreSQL", "AWS"],
    category: "web",
    complexity: "advanced",
    demoUrl: "https://twmnd.vercel.app",
    githubUrl: "https://github.com/vinngo/twmnd",
    featured: false,
    status: "completed",
  },
  {
    id: "accountable",
    title: "Accountable",
    description:
      "A twist on social networking apps with a focus on unwavering discipline",
    technologies: ["React Native", "Supabase", "AWS"],
    category: "mobile",
    complexity: "advanced",
    video:
      "https://pub-f15720f21a45482baa0d7d4ed05f708b.r2.dev/accountable-demo.mp4",
    demoUrl: "https://github.com/vinngo/accountable",
    githubUrl: "https://github.com/vinngo/accountable",
    featured: false,
    status: "completed",
  },
];
