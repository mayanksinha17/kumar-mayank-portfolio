import { Terminal } from "lucide-react";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";
import { site } from "@/data/site";

const statusStyles: Record<string, string> = {
  Practicing: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
  Learning: "bg-electric/15 text-blue-300 border-electric/20",
  Exploring: "bg-violet/15 text-violet-300 border-violet/20",
};

export default function DevOps() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="// DevOps"
        title={site.devops.heading}
        subtitle={site.devops.description}
      />

      <RevealOnScroll delay={0.1} className="mt-10">
        <div className="glass rounded-2xl p-7 md:p-9 relative overflow-hidden">
          <Terminal
            className="absolute -bottom-6 -right-6 text-white/[0.03]"
            size={160}
            aria-hidden="true"
          />
          <div className="relative grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {site.devops.topics.map((topic) => (
              <div
                key={topic.name}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <p className="font-medium text-slate-100 text-sm">
                  {topic.name}
                </p>
                <span
                  className={`inline-block mt-2 text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded-full border ${statusStyles[topic.status]}`}
                >
                  {topic.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
