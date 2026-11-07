import { GraduationCap, MapPin, Calendar, Award, BookOpen } from "lucide-react";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";
import { site } from "@/data/site";

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeading
        eyebrow="// Academic Background"
        title="Education & Coursework"
        subtitle="Formal computer science and engineering education, highlighting continuous academic performance and foundational coursework."
      />

      <div className="mt-12 space-y-6">
        {site.education.map((edu, i) => {
          const isCurrent = edu.status === "Currently Pursuing";

          return (
            <RevealOnScroll key={edu.institution} delay={0.08 * i}>
              <div
                className={`glass rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300 ${
                  isCurrent
                    ? "border-electric/30 bg-gradient-to-br from-electric/[0.06] via-transparent to-violet/[0.04] shadow-glow/10 hover:border-cyan/40"
                    : "hover:border-electric/30"
                }`}
              >
                {isCurrent && (
                  <div
                    className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-br from-electric/15 to-cyan/15 blur-3xl pointer-events-none"
                    aria-hidden="true"
                  />
                )}

                <div className="flex flex-col sm:flex-row sm:items-start gap-5 relative z-10">
                  <div
                    className={`p-3.5 rounded-xl border shrink-0 ${
                      isCurrent
                        ? "bg-gradient-to-br from-electric/20 to-violet/20 border-electric/30 text-cyan"
                        : "bg-white/[0.03] border-white/10 text-slate-400"
                    }`}
                  >
                    <GraduationCap size={24} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                            {edu.degree}
                          </h3>
                          <span
                            className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                              isCurrent
                                ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                                : "bg-white/[0.05] text-slate-300 border-white/10"
                            }`}
                          >
                            {edu.status}
                          </span>
                        </div>
                        <p className="mt-1 text-slate-300 font-medium text-sm sm:text-base">
                          {edu.institution}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-cyan">
                        <Award size={14} className="text-cyan" />
                        <span className="font-semibold text-white">{edu.grade}</span>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted">
                      {edu.location && (
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-cyan/70 shrink-0" />
                          {edu.location}
                        </span>
                      )}
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-violet/80 shrink-0" />
                        {edu.period}
                      </span>
                    </div>

                    {edu.coursework && edu.coursework.length > 0 && (
                      <div className="mt-5 pt-4 border-t border-white/10">
                        <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.15em] text-cyan mb-2.5">
                          <BookOpen size={13} />
                          <span>Key Coursework</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="text-xs px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-slate-300 hover:border-cyan/30 hover:text-white transition-colors"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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
