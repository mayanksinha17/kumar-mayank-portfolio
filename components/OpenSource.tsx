import { GitPullRequest, GitBranch, Search, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";
import { site } from "@/data/site";

const icons = [GitBranch, GitPullRequest, Search];

export default function OpenSource() {
  return (
    <section id="open-source" className="section-shell">
      <SectionHeading
        eyebrow="// Open Source"
        title={site.openSource.heading}
        subtitle={site.openSource.description}
      />

      <div className="mt-10 grid sm:grid-cols-3 gap-5">
        {site.openSource.practices.map((practice, i) => {
          const Icon = icons[i % icons.length];
          return (
            <RevealOnScroll key={practice.title} delay={i * 0.06}>
              <div className="glass rounded-2xl p-6 h-full hover:border-electric/30 hover:-translate-y-1 transition-all duration-300">
                <span className="inline-flex p-2.5 rounded-lg bg-gradient-to-br from-electric/20 to-violet/20 border border-white/10">
                  <Icon size={17} className="text-cyan" />
                </span>
                <h3 className="mt-4 font-display font-semibold text-white text-sm">
                  {practice.title}
                </h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  {practice.desc}
                </p>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>

      <RevealOnScroll delay={0.2} className="mt-6">
        <div className="glass rounded-2xl p-6 md:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <span className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 shrink-0">
              <GitPullRequest size={18} className="text-violet" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">
                {site.openSource.status}
              </p>
              <p className="mt-1 text-xs text-muted">
                No contributions to list yet — this updates the moment there&rsquo;s a real PR to show, not before.
              </p>
            </div>
          </div>
          <a
            href={site.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg glass hover:border-electric/40 text-slate-100 transition focus-ring shrink-0"
          >
            <Github size={16} /> See my GitHub activity
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
}
