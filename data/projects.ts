export type Project = {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
  liveDemo: string;
  category: "Full Stack" | "Frontend" | "Backend" | "AI/ML" | "Data Science";
};

/**
 * Add future projects here. Each entry renders a full ProjectCard automatically —
 * no component changes required. Only verified, real project details go here;
 * never invent technologies, features, or links.
 */
export const projects: Project[] = [
  {
    title: "StayLux",
    description:
      "A full-stack hotel booking and management platform with an admin dashboard for revenue and occupancy management. Containerized using Docker for consistent development and deployment.",
    technologies: [
      "React",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "JWT",
      "Docker",
    ],
    features: [
      "Hotel booking and management",
      "Admin dashboard with revenue & occupancy analytics",
      "JWT-based authentication",
      "Containerized application using Docker",
    ],
    github: "https://github.com/mayanksinha17/StayLux",
    liveDemo: "",
    category: "Full Stack",
  },
  {
    title: "QR-Based Attendance System",
    description:
      "A role-based attendance management system using QR codes for fast, reliable check-ins with OTP verification and JWT-secured endpoints.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
    ],
    features: [
      "QR-based attendance marking",
      "Role-based workflows (admin, teacher, student)",
      "OTP verification for secure access",
      "JWT-secured REST API endpoints",
    ],
    github: "https://github.com/mayanksinha17/QR-Based-Attendance-System",
    liveDemo: "",
    category: "Full Stack",
  },
  {
    title: "Personal Task Automator",
    description:
      "A full-stack task management app with AI-assisted task prioritization, a live statistics dashboard, and a complete history log of every task action.",
    technologies: [
      "Express.js",
      "Node.js",
      "SQLite",
      "Vanilla JavaScript",
      "HTML5",
      "CSS3",
      "REST API",
    ],
    features: [
      "Create, update, complete, and delete tasks",
      "AI-assisted task prioritization",
      "Real-time statistics dashboard",
      "Full audit trail via a task history log",
      "Persistent SQLite storage with prepared statements",
    ],
    github: "https://github.com/mayanksinha17/Personal-Task-Automator",
    liveDemo: "https://personal-task-automator.vercel.app",
    category: "Full Stack",
  },
];

export const categories = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "AI/ML",
  "Data Science",
] as const;
