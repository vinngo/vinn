export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: 'web' | 'mobile' | 'desktop' | 'ai'
  complexity: 'beginner' | 'intermediate' | 'advanced'
  image: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  challenges: string[]
  solutions: string[]
  teamSize: number
  role: string
  status: 'completed' | 'in-progress' | 'planning'
}

export const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and TypeScript',
    longDescription: 'This portfolio website showcases my skills and projects using modern web technologies. Built with React 19, TypeScript, and Tailwind CSS, it features a responsive design, dark/light mode toggle, smooth scrolling navigation, and interactive elements.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    category: 'web',
    complexity: 'intermediate',
    image: '/project-images/portfolio.jpg',
    demoUrl: 'https://vinngo.dev',
    githubUrl: 'https://github.com/vinngo/portfolio',
    featured: true,
    challenges: [
      'Creating a responsive design that works across all devices',
      'Implementing smooth scrolling navigation',
      'Building an accessible dark/light mode toggle',
      'Optimizing performance for fast loading times'
    ],
    solutions: [
      'Used Tailwind CSS for responsive design with mobile-first approach',
      'Implemented custom scroll behavior with intersection observers',
      'Created a theme context with localStorage persistence',
      'Optimized images and implemented code splitting'
    ],
    teamSize: 1,
    role: 'Full-Stack Developer',
    status: 'completed'
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    longDescription: 'A full-stack task management application that allows teams to collaborate on projects with real-time updates. Features include drag-and-drop task organization, team collaboration, file attachments, and comprehensive project analytics.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'JWT'],
    category: 'web',
    complexity: 'advanced',
    image: '/project-images/task-app.jpg',
    demoUrl: 'https://task-app-demo.com',
    githubUrl: 'https://github.com/vinngo/task-management',
    featured: true,
    challenges: [
      'Implementing real-time collaboration features',
      'Designing efficient database schema for complex relationships',
      'Building drag-and-drop functionality',
      'Ensuring data consistency across multiple users'
    ],
    solutions: [
      'Used Socket.io for real-time communication',
      'Designed normalized database with proper indexing',
      'Implemented React DnD with optimistic updates',
      'Used database transactions and conflict resolution strategies'
    ],
    teamSize: 3,
    role: 'Lead Developer',
    status: 'completed'
  },
  {
    id: 'weather-app',
    title: 'Weather Forecast App',
    description: 'A beautiful weather app with location-based forecasts and interactive maps',
    longDescription: 'A responsive weather application that provides detailed weather forecasts, interactive maps, and location-based services. Features include current weather conditions, 7-day forecasts, weather alerts, and beautiful visualizations.',
    technologies: ['Vue.js', 'TypeScript', 'OpenWeather API', 'Mapbox', 'Chart.js'],
    category: 'web',
    complexity: 'intermediate',
    image: '/project-images/weather-app.jpg',
    demoUrl: 'https://weather-app-demo.com',
    githubUrl: 'https://github.com/vinngo/weather-app',
    featured: false,
    challenges: [
      'Integrating multiple weather APIs',
      'Creating responsive weather visualizations',
      'Implementing location-based services',
      'Handling offline functionality'
    ],
    solutions: [
      'Built API aggregation layer with fallback options',
      'Used Chart.js with custom responsive configurations',
      'Implemented geolocation with user permission handling',
      'Added service worker for offline data caching'
    ],
    teamSize: 2,
    role: 'Frontend Developer',
    status: 'completed'
  },
  {
    id: 'ai-chatbot',
    title: 'AI-Powered Chatbot',
    description: 'An intelligent chatbot using natural language processing',
    longDescription: 'An AI-powered chatbot that can understand and respond to natural language queries. Built with machine learning models and integrated with various APIs to provide helpful and contextual responses.',
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'PostgreSQL', 'Docker', 'React'],
    category: 'ai',
    complexity: 'advanced',
    image: '/project-images/chatbot.jpg',
    githubUrl: 'https://github.com/vinngo/ai-chatbot',
    featured: true,
    challenges: [
      'Training the model for domain-specific responses',
      'Implementing context-aware conversations',
      'Scaling the application for multiple users',
      'Ensuring response accuracy and safety'
    ],
    solutions: [
      'Fine-tuned pre-trained models with custom datasets',
      'Implemented conversation memory with session management',
      'Used Docker and microservices architecture',
      'Added content filtering and response validation'
    ],
    teamSize: 4,
    role: 'AI/ML Developer',
    status: 'in-progress'
  },
  {
    id: 'e-commerce-platform',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration',
    longDescription: 'A comprehensive e-commerce platform featuring product management, shopping cart, payment processing, order tracking, and admin dashboard. Built with modern technologies and best security practices.',
    technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Prisma', 'NextAuth.js', 'Tailwind CSS'],
    category: 'web',
    complexity: 'advanced',
    image: '/project-images/ecommerce.jpg',
    demoUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/vinngo/ecommerce-platform',
    featured: false,
    challenges: [
      'Implementing secure payment processing',
      'Building scalable product catalog',
      'Creating efficient search and filtering',
      'Ensuring PCI compliance'
    ],
    solutions: [
      'Integrated Stripe with webhook handling',
      'Used database indexing and caching strategies',
      'Implemented Elasticsearch for search functionality',
      'Followed security best practices and compliance guidelines'
    ],
    teamSize: 5,
    role: 'Full-Stack Developer',
    status: 'completed'
  },
  {
    id: 'mobile-fitness-app',
    title: 'Fitness Tracking App',
    description: 'A mobile app for tracking workouts and fitness goals',
    longDescription: 'A cross-platform mobile application for fitness enthusiasts to track workouts, set goals, and monitor progress. Features include exercise libraries, progress analytics, social features, and integration with wearable devices.',
    technologies: ['React Native', 'Expo', 'Firebase', 'TypeScript', 'Redux'],
    category: 'mobile',
    complexity: 'intermediate',
    image: '/project-images/fitness-app.jpg',
    githubUrl: 'https://github.com/vinngo/fitness-app',
    featured: false,
    challenges: [
      'Creating smooth animations and transitions',
      'Implementing offline data synchronization',
      'Integrating with device health APIs',
      'Optimizing performance for older devices'
    ],
    solutions: [
      'Used React Native Reanimated for performant animations',
      'Implemented Redux Persist with conflict resolution',
      'Integrated with HealthKit and Google Fit APIs',
      'Optimized bundle size and used lazy loading'
    ],
    teamSize: 3,
    role: 'Mobile Developer',
    status: 'planning'
  }
]
