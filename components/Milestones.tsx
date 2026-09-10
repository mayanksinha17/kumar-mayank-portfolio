import { Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";
import { site } from "@/data/site";

export default function Milestones() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="// Growth"
        title="Milestones & Growth"
        subtitle="No competition wins or formal awards to list yet — here's what's real."
      />

      <div className="mt-10 grid sm:grid-cols-2 gap-4">
        {site.milestones.map((m, i) => (
          <RevealOnScroll key={m} delay={i * 0.04}>
            <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <Sparkles size={16} className="text-cyan mt-0.5 shrink-0" />
              <p className="text-sm text-slate-300">{m}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
