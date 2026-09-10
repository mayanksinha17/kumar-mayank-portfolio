"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="glass rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-glow transition-all duration-300 flex flex-col"
    >
      <div className="h-40 relative bg-gradient-to-br from-electric/20 via-violet/15 to-cyan/10 flex items-center justify-center border-b border-white/10">
        <span className="font-display text-3xl font-bold text-white/20 select-none">
          {project.title}
        </span>
        <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-black/30 backdrop-blur text-cyan border border-white/10">
          {project.category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg font-semibold text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        <ul className="mt-4 space-y-1.5">
          {project.features.slice(0, 4).map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-xs text-slate-400"
            >
              <CheckCircle2 size={13} className="mt-0.5 text-emerald-400 shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-2 pt-4 border-t border-white/10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-2.5 rounded-lg glass hover:border-electric/40 text-slate-200 transition focus-ring"
          >
            <Github size={14} /> Code
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-2.5 rounded-lg bg-gradient-to-r from-electric to-violet text-white hover:brightness-110 transition focus-ring"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
