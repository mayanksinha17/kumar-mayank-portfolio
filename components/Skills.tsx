import {
  LucideIcon,
  Code2,
  Layout,
  Server,
  Database,
  Terminal,
  Cpu,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";
import { skillCategories } from "@/data/site";

const categoryIcons: Record<string, LucideIcon> = {
  "Programming Languages": Code2,
  "Frontend Development": Layout,
  "Backend Development": Server,
  "Databases": Database,
  "DevOps & Tools": Terminal,
  "Core Computer Science": Cpu,
};

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="// Skills & Stack"
        title="Technical Skills & Technologies"
        subtitle="Organized across the software stack — focusing on full-stack architecture, backend systems, databases, and DevOps automation."
      />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, i) => {
          const Icon = categoryIcons[cat.label] || Code2;
          const isFeatured =
            cat.label === "Backend Development" || cat.label === "DevOps & Tools";

          return (
            <RevealOnScroll key={cat.label} delay={0.05 * i}>
              <div
                className={`rounded-2xl p-6 h-full transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? "glass border-electric/30 bg-gradient-to-b from-electric/[0.08] via-transparent to-transparent shadow-glow/10 hover:border-cyan/40 hover:-translate-y-1"
                    : "glass hover:border-electric/30 hover:-translate-y-1"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <span
                        className={`p-2 rounded-xl border ${
                          isFeatured
                            ? "bg-electric/20 border-electric/30 text-cyan"
                            : "bg-white/[0.04] border-white/10 text-slate-300"
                        }`}
                      >
                        <Icon size={18} />
                      </span>
                      <h3 className="font-display text-white font-semibold text-sm sm:text-base">
                        {cat.label}
                      </h3>
                    </div>
                    {isFeatured && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan/10 border border-cyan/30 text-cyan">
                        Focus
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-200 hover:bg-white/[0.08] hover:border-cyan/30 hover:text-white transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
