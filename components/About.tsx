import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";
import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="// About"
        title="Who I am"
        subtitle="A quick, honest introduction — no inflated titles, just where I am and where I'm headed."
      />

      <div className="mt-12 grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
        <RevealOnScroll delay={0.1} className="space-y-5">
          {site.bioLong.map((para, i) => (
            <p key={i} className="text-slate-300 leading-relaxed">
              {para}
            </p>
          ))}
        </RevealOnScroll>

        <div className="grid grid-cols-2 gap-4">
          {site.aboutCards.map((card, i) => (
            <RevealOnScroll key={card.title} delay={0.05 * i}>
              <div className="glass rounded-2xl p-5 h-full hover:border-electric/30 hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-display text-white font-semibold text-sm">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
