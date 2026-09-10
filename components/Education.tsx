import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";
import { site } from "@/data/site";

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeading eyebrow="// Education" title="Academic Background" />

      <div className="mt-10 space-y-6">
        {site.education.map((edu, i) => (
          <RevealOnScroll key={edu.institution} delay={0.1 * i}>
            <div className="glass rounded-2xl p-7 md:p-9 relative overflow-hidden">
              {i === 0 && (
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-electric/10 blur-3xl" />
              )}
              <div className="flex flex-col sm:flex-row sm:items-start gap-5 relative">
                <div className="p-3 rounded-xl bg-gradient-to-br from-electric/20 to-violet/20 border border-white/10 w-fit">
                  <GraduationCap className="text-cyan" size={26} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                        edu.status === "Currently Pursuing"
                          ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/20"
                          : "bg-white/[0.06] text-slate-300 border-white/10"
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>
                  <p className="mt-1 text-slate-300 font-medium">
                    {edu.institution}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Award size={14} /> {edu.grade}
                    </span>
                  </div>

                  {edu.coursework && edu.coursework.length > 0 && (
                    <>
                      <p className="mt-6 text-xs font-mono uppercase tracking-[0.15em] text-cyan">
                        Academic Areas
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {edu.coursework.map((c) => (
                          <span
                            key={c}
                            className="text-xs px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
