import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";
import { skillCategories } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="// Skills"
        title="Technical Skills"
        subtitle="Grouped by where each one lives in the stack — not a wall of undifferentiated badges."
      />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, i) => (
          <RevealOnScroll key={cat.label} delay={0.05 * i}>
            <div className="glass rounded-2xl p-6 h-full hover:shadow-glow transition-shadow duration-300">
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-cyan mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-200 hover:bg-white/[0.08] hover:border-white/20 hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
