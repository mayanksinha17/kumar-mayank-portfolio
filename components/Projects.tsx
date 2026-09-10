"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects, categories } from "@/data/projects";

export default function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");

  const activeCategories = useMemo(() => {
    const present = new Set(projects.map((p) => p.category));
    return categories.filter((c) => c === "All" || present.has(c as any));
  }, []);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="// Projects"
        title="Featured Work"
        subtitle="Real projects I've built, sourced from what's actually in my GitHub — more get added as I ship them."
      />

      <div className="mt-8 flex flex-wrap gap-2">
        {activeCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-xs font-semibold px-4 py-2 rounded-full border transition focus-ring ${
              filter === cat
                ? "bg-gradient-to-r from-electric to-violet text-white border-transparent"
                : "border-white/10 text-slate-400 hover:text-white hover:border-white/20"
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
          No projects in this category yet.
        </p>
      )}
    </section>
  );
}
