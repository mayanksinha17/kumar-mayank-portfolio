import { Award, Cloud, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";
import { site } from "@/data/site";

export default function OpenToAndCertifications() {
  return (
    <>
      <section id="opportunities" className="section-shell">
        <SectionHeading
          eyebrow="// Opportunities"
          title="What I'm Open To"
          subtitle="Actively seeking software engineering roles and collaborative projects to apply full-stack and backend capabilities."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {site.openTo.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 0.05}>
              <div className="glass rounded-2xl p-6 h-full hover:border-electric/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-semibold text-white text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section id="certifications" className="section-shell !pt-0">
        <SectionHeading
          eyebrow="// Credentials & Community"
          title="Certifications & Activities"
          subtitle="Verified coursework and active technical community involvement."
        />

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* Completed Course / Certification */}
          <RevealOnScroll delay={0.05}>
            <div className="glass rounded-2xl p-6 sm:p-7 h-full hover:border-electric/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="p-2.5 rounded-xl bg-gradient-to-br from-electric/20 to-violet/20 border border-white/10 text-cyan">
                    <Award size={22} />
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                    Completed Course
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-lg">
                  The Complete Web Development Bootcamp
                </h3>
                <p className="text-xs font-mono text-cyan mt-1">
                  Issuer: Udemy
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
                  Comprehensive curriculum covering modern web development, frontend frameworks (React.js), server-side engineering (Node.js & Express.js), REST APIs, and database management.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-muted">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>Full Stack Web Development Curriculum</span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Community Involvement / Activities */}
          <RevealOnScroll delay={0.1}>
            <div className="glass rounded-2xl p-6 sm:p-7 h-full hover:border-electric/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="p-2.5 rounded-xl bg-gradient-to-br from-violet/20 to-cyan/20 border border-white/10 text-cyan">
                    <Cloud size={22} />
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan/10 text-cyan border border-cyan/20 font-semibold">
                    Community Activity
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-lg">
                  Amazon Web Services (AWS) Cloud Club, DSCE
                </h3>
                <p className="text-xs font-mono text-cyan mt-1">
                  Active Member • 2024–Present
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
                  Active student member at Dayananda Sagar College of Engineering participating in cloud computing sessions, architectural workshops, and peer-to-peer technical meetups.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-muted">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>Dayananda Sagar College of Engineering</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
