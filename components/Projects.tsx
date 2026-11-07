"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const filterCategories = ["All", "Full Stack", "Backend", "AI/ML"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filterCategories)[number]>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter(
      (p) => p.category === filter || p.categories?.includes(filter as any)
    );
  }, [filter]);

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="// Featured Work"
        title="Engineering Projects"
        subtitle="Full-stack web applications, real-time telemetry systems, and backend services built with modern frameworks and robust database architectures."
      />

      <div className="mt-8 flex flex-wrap gap-2">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all focus-ring ${
              filter === cat
                ? "bg-gradient-to-r from-electric to-violet text-white border-transparent shadow-glow/30"
                : "border-white/10 text-slate-400 hover:text-white hover:border-white/20 glass"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-muted text-sm">
          No projects found in this category.
        </p>
      )}
    </section>
  );
}
