export type ProjectCategory =
  | "Full Stack"
  | "Frontend"
  | "Backend"
  | "DevOps"
  | "AI/ML"
  | "Data Science";

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
  liveDemo: string;
  category: "Full Stack" | "Frontend" | "Backend" | "AI/ML" | "Data Science";
  categories?: ProjectCategory[];
  highlights?: string[];
  role?: string;
};

/**
 * Add future projects here. Each entry renders a full ProjectCard automatically —
 * no component changes required. Only verified, real project details go here;
 * never invent technologies, features, or links.
 */
export const projects: Project[] = [
  {
    title: "FleetMind",
    description:
      "Full-stack fleet monitoring, shipment tracking, and route intelligence platform with real-time telemetry and rule-based fleet intelligence.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Leaflet",
    ],
    features: [
      "Real-time GPS telemetry",
      "Truck status monitoring",
      "Shipment and trip management",
      "Socket.IO integration",
      "Route optimization",
      "ETA estimation",
      "Fuel and cost calculations",
      "Rule-based fleet intelligence",
    ],
    github: "https://github.com/mayanksinha17/FleetMind",
    liveDemo: "",
    category: "Full Stack",
    categories: ["Full Stack", "Backend", "AI/ML"],
    highlights: [
      "Real-Time Telemetry",
      "Socket.IO Integration",
      "Route Optimization",
      "Fleet Intelligence",
    ],
    role: "Full-Stack Developer",
  },
  {
    title: "Personal Task Automator",
    description:
      "AI-assisted task management and productivity platform with automated task prioritization, a live statistics dashboard, and activity history tracking.",
    technologies: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "SQLite",
      "HTML5",
      "CSS3",
      "REST API",
    ],
    features: [
      "CRUD APIs",
      "Task prioritization",
      "Automated task management",
      "Task statistics",
      "Activity history",
      "SQLite persistence",
    ],
    github: "https://github.com/mayanksinha17/Personal-Task-Automator",
    liveDemo: "https://personal-task-automator.vercel.app",
    category: "Full Stack",
    categories: ["Full Stack", "Backend", "AI/ML"],
    highlights: [
      "AI Task Prioritization",
      "SQLite Transactions",
      "Activity History",
      "REST APIs",
    ],
    role: "Full-Stack Developer",
  },
  {
    title: "QR-Based Attendance System",
    description:
      "Secure role-based attendance platform using dynamic QR verification, OTP security, and JWT-secured REST APIs for institutions and events.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
    ],
    features: [
      "QR verification",
      "JWT authentication",
      "bcrypt password security",
      "Student, employee and administrator roles",
      "MongoDB-backed REST APIs",
    ],
    github: "https://github.com/mayanksinha17/QR-Based-Attendance-System",
    liveDemo: "",
    category: "Full Stack",
    categories: ["Full Stack", "Backend"],
    highlights: [
      "QR Verification",
      "JWT & bcrypt",
      "Role-Based Access Control",
      "MongoDB REST APIs",
    ],
    role: "Backend & Full-Stack Developer",
  },
];

export const categories = [
  "All",
  "Full Stack",
  "Backend",
  "DevOps",
  "AI/ML",
  "Data Science",
] as const;
