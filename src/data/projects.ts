export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: "web" | "mobile" | "desktop" | "ai";
  complexity: "beginner" | "intermediate" | "advanced";
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: "in-progress" | "completed" | "archived" | "planning";
}

export const projects: Project[] = [
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
    image: "/project-images/portfolio.jpg",
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
    image: "/project-images/task-app.jpg",
    demoUrl: "https://twmnd.vercel.app",
    githubUrl: "https://github.com/vinngo/twmnd",
    featured: true,
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
    image: "/project-images/weather-app.jpg",
    demoUrl: "https://github.com/vinngo/accountable",
    githubUrl: "https://github.com/vinngo/accountable",
    featured: false,
    status: "completed",
  },
];
