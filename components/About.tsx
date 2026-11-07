import {
  LucideIcon,
  Code2,
  Server,
  Terminal,
  GitPullRequest,
  Binary,
  GraduationCap,
  Cloud,
  Compass,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";
import { site } from "@/data/site";

const cardIcons: Record<string, LucideIcon> = {
  "Full-Stack Developer": Code2,
  "Backend Enthusiast": Server,
  "DevOps Enthusiast": Terminal,
  "Open-Source Contributor": GitPullRequest,
  "Problem Solver": Binary,
  "Academic Excellence": GraduationCap,
  "AWS Cloud Club, DSCE": Cloud,
  "Continuous Learner": Compass,
};

export default function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="// About Me"
        title="Engineering Background & Focus"
        subtitle="Full-Stack Developer and Backend Enthusiast passionate about building scalable web systems, DevOps workflows, and open-source contributions."
      />

      <div className="mt-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
        <RevealOnScroll delay={0.1} className="space-y-4">
          {site.bioLong.map((para, i) => (
            <p key={i} className="text-slate-300 leading-relaxed text-sm md:text-base">
              {para}
            </p>
          ))}

          <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/10">
            <div className="rounded-xl glass p-3 text-center">
              <p className="font-display font-bold text-lg text-white">8.91</p>
              <p className="text-[11px] text-muted">CGPA (DSCE)</p>
            </div>
            <div className="rounded-xl glass p-3 text-center">
              <p className="font-display font-bold text-lg text-white">350+</p>
              <p className="text-[11px] text-muted">DSA Solved</p>
            </div>
            <div className="rounded-xl glass p-3 text-center">
              <p className="font-display font-bold text-lg text-white">2028</p>
              <p className="text-[11px] text-muted">Graduation</p>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {site.aboutCards.map((card, i) => {
            const Icon = cardIcons[card.title] || Code2;
            return (
              <RevealOnScroll key={card.title} delay={0.04 * i}>
                <div className="glass rounded-xl p-4 h-full hover:border-electric/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-cyan shrink-0">
                        <Icon size={15} />
                      </span>
                      <h3 className="font-display text-white font-semibold text-xs sm:text-sm leading-snug">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
