import {
  LucideIcon,
  Layers,
  Terminal,
  GitBranch,
  Zap,
  Rocket,
  Cloud,
  ShieldCheck,
  Activity,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";
import { site } from "@/data/site";

type DevOpsItem = {
  name: string;
  status: "Practicing" | "Learning" | "Exploring";
  icon: LucideIcon;
  experience: string;
  workflow: string;
};

const devopsItems: DevOpsItem[] = [
  {
    name: "Docker & Containers",
    status: "Practicing",
    icon: Layers,
    experience: "Practical Experience",
    workflow:
      "Containerized multi-service architectures (Node.js, Express, MongoDB, Python) ensuring parity between development and production.",
  },
  {
    name: "Linux & Command Line",
    status: "Practicing",
    icon: Terminal,
    experience: "Practical Experience",
    workflow:
      "CLI-based development, process management, shell scripting, environment variables, and file permission administration.",
  },
  {
    name: "Git & GitHub",
    status: "Practicing",
    icon: GitBranch,
    experience: "Practical Experience",
    workflow:
      "Disciplined Git feature branching, semantic commit conventions, pull request reviews, and public repository management.",
  },
  {
    name: "GitHub Actions & CI",
    status: "Practicing",
    icon: Zap,
    experience: "Practical Experience",
    workflow:
      "Automated test execution, linting checks, and CI pipeline validation practiced across open-source and personal repositories.",
  },
  {
    name: "CI/CD & Deployment",
    status: "Practicing",
    icon: Rocket,
    experience: "Practical Experience",
    workflow:
      "Automated zero-downtime continuous deployment workflows to Vercel with environment variable separation and build cache optimization.",
  },
  {
    name: "Cloud Fundamentals (AWS)",
    status: "Learning",
    icon: Cloud,
    experience: "Active Exploration",
    workflow:
      "Engaged AWS Cloud Club DSCE member studying core cloud concepts including compute (EC2), storage (S3), and security fundamentals.",
  },
  {
    name: "Security & API Integrity",
    status: "Practicing",
    icon: ShieldCheck,
    experience: "Practical Experience",
    workflow:
      "Securing production endpoints using JWT access tokens, bcrypt password hashing, input sanitization, and structured error handling.",
  },
  {
    name: "Monitoring & Automation",
    status: "Practicing",
    icon: Activity,
    experience: "Practical Experience",
    workflow:
      "Implementing SQLite transactions, real-time Socket.IO telemetry feeds, audit trails, and application status health checks.",
  },
];

const statusStyles: Record<string, string> = {
  Practicing: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
  Learning: "bg-electric/15 text-blue-300 border-electric/25",
  Exploring: "bg-violet/15 text-violet-300 border-violet/25",
};

export default function DevOps() {
  return (
    <section id="devops" className="section-shell">
      <SectionHeading
        eyebrow="// DevOps & Infrastructure"
        title="DevOps & Software Delivery"
        subtitle="Bridging full-stack development with reliable software delivery — focusing on containerization, reproducible environments, automated testing, and continuous delivery."
      />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {devopsItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <RevealOnScroll key={item.name} delay={0.04 * i}>
              <div className="glass rounded-xl p-5 h-full hover:border-electric/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-cyan">
                      <Icon size={18} />
                    </span>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${statusStyles[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-white text-sm mb-1">
                    {item.name}
                  </h3>

                  <p className="text-xs text-muted leading-relaxed mt-2">
                    {item.workflow}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-cyan/90">
                  <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                  <span>{item.experience}</span>
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
