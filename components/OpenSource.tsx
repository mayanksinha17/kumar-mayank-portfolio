import {
  GitPullRequest,
  GitBranch,
  Github,
  ExternalLink,
  CheckCircle2,
  Layers,
  Database,
  BookOpen,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";
import { site } from "@/data/site";

const contributions = [
  {
    name: "Hiero Ledger (Solo)",
    org: "hashgraph / solo",
    icon: Layers,
    repository: "https://github.com/hashgraph/solo",
    forkUrl: "https://github.com/mayanksinha17/solo",
    description:
      "Deployment and orchestration CLI tool for Hedera / Hiero distributed consensus networks and local standalone nodes.",
    contributions: [
      "Bug fixes and codebase stability improvements",
      "Automated testing and CI workflow validation",
      "Documentation updates and developer setup guides",
    ],
    technologies: ["Node.js", "TypeScript", "Docker", "CI/CD", "Git"],
  },
  {
    name: "OpenFoodFacts",
    org: "openfoodfacts / openfoodfacts-server",
    icon: Database,
    repository: "https://github.com/openfoodfacts/openfoodfacts-server",
    forkUrl: "https://github.com/mayanksinha17/openfoodfacts-server",
    description:
      "Global collaborative food database and open-source backend API server providing open food data worldwide.",
    contributions: [
      "Backend debugging and code improvements",
      "API documentation and developer onboarding updates",
      "Testing workflow support and issue investigation",
    ],
    technologies: ["Perl", "Python", "REST APIs", "Docker", "Git"],
  },
];

export default function OpenSource() {
  return (
    <section id="open-source" className="section-shell">
      <SectionHeading
        eyebrow="// Open Source"
        title="Open Source Contributions"
        subtitle="Contributing to distributed ledger infrastructure and global open data platforms — focusing on codebase improvements, automated testing, and developer documentation."
      />

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {contributions.map((project, i) => {
          const Icon = project.icon;

          return (
            <RevealOnScroll key={project.name} delay={0.08 * i}>
              <div className="glass rounded-2xl p-6 sm:p-7 h-full hover:border-electric/40 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="p-2.5 rounded-xl bg-gradient-to-br from-electric/20 to-violet/20 border border-white/10 text-cyan">
                        <Icon size={20} />
                      </span>
                      <div>
                        <h3 className="font-display font-bold text-white text-lg">
                          {project.name}
                        </h3>
                        <p className="font-mono text-xs text-slate-400">
                          {project.org}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan/10 border border-cyan/25 text-cyan">
                      Open Source
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Key Contributions
                    </p>
                    <ul className="space-y-1.5">
                      {project.contributions.map((c) => (
                        <li
                          key={c}
                          className="flex items-start gap-2 text-xs text-slate-300"
                        >
                          <CheckCircle2
                            size={13}
                            className="mt-0.5 text-emerald-400 shrink-0"
                          />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex gap-2">
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg glass hover:border-electric/40 text-slate-200 transition focus-ring"
                  >
                    <Github size={13} /> Upstream Repo
                  </a>
                  <a
                    href={project.forkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-gradient-to-r from-electric to-violet text-white hover:brightness-110 transition focus-ring"
                  >
                    <GitPullRequest size={13} /> My Fork
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>

      <RevealOnScroll delay={0.16} className="mt-6">
        <div className="glass rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <span className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-violet shrink-0">
              <GitBranch size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">
                Public by Default & Engineering Culture
              </p>
              <p className="mt-1 text-xs text-muted leading-relaxed">
                All personal and collaborative projects are shipped to public GitHub repositories with descriptive commit histories, clear licensing, and reproducible developer setup guides.
              </p>
            </div>
          </div>
          <a
            href={site.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg glass hover:border-electric/40 text-slate-100 transition focus-ring shrink-0"
          >
            <Github size={15} /> Explore GitHub Activity
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
}
