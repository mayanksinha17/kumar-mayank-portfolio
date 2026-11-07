"use client";

import { motion } from "framer-motion";
import {
  LucideIcon,
  Github,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Truck,
  CheckSquare,
  QrCode,
  Layers,
} from "lucide-react";
import type { Project } from "@/data/projects";

const projectIcons: Record<string, LucideIcon> = {
  FleetMind: Truck,
  "Personal Task Automator": CheckSquare,
  "QR-Based Attendance System": QrCode,
};

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = projectIcons[project.title] || Layers;
  const isFeatured = project.title === "FleetMind";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className={`glass rounded-2xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between ${
        isFeatured
          ? "border-electric/30 shadow-glow/10 hover:border-cyan/40 hover:shadow-glow/20"
          : "hover:border-electric/30 hover:shadow-glow/10"
      }`}
    >
      <div>
        {/* Card Header Banner */}
        <div className="h-44 relative bg-gradient-to-br from-electric/20 via-violet/15 to-cyan/10 p-5 flex flex-col justify-between border-b border-white/10 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-cyan/15 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between relative z-10">
            <span className="p-2.5 rounded-xl bg-black/40 backdrop-blur border border-white/10 text-cyan">
              <Icon size={20} />
            </span>
            <div className="flex items-center gap-1.5">
              {isFeatured && (
                <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan/20 border border-cyan/40 text-cyan">
                  <Sparkles size={11} /> Featured
                </span>
              )}
              <span className="text-[10px] font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur text-slate-300 border border-white/10">
                {project.category}
              </span>
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="font-display text-xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            {project.role && (
              <p className="text-xs text-cyan font-mono mt-0.5">
                {project.role}
              </p>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Key Architectural Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.highlights.map((h) => (
                <span
                  key={h}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-electric/10 border border-electric/25 text-cyan"
                >
                  {h}
                </span>
              ))}
            </div>
          )}

          {/* Feature Highlights */}
          <div className="mt-5 pt-4 border-t border-white/10">
            <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
              Key Capabilities
            </p>
            <ul className="space-y-1.5">
              {project.features.slice(0, 4).map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-xs text-slate-300"
                >
                  <CheckCircle2
                    size={13}
                    className="mt-0.5 text-emerald-400 shrink-0"
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Badges */}
          <div className="mt-5 pt-4 border-t border-white/10">
            <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-6 pt-0 mt-2">
        <div className="flex gap-2.5 pt-4 border-t border-white/10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg glass hover:border-electric/40 text-slate-200 transition focus-ring ${
              project.liveDemo ? "flex-1" : "w-full"
            }`}
          >
            <Github size={14} /> View Source Code
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg bg-gradient-to-r from-electric to-violet text-white hover:brightness-110 transition focus-ring shadow-glow/20"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
