import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";
import { site } from "@/data/site";

export default function LearningJourney() {
  return (
    <section id="journey" className="section-shell">
      <SectionHeading
        eyebrow="// Journey"
        title="My Learning Journey"
        subtitle="This traces how my technical skills have progressed — not employment history. I have no professional work experience yet, and I'd rather show the real path than invent one."
      />

      <div className="mt-14 relative max-w-2xl mx-auto">
        <div
          className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-electric via-violet to-cyan"
          aria-hidden="true"
        />
        <ol className="space-y-9">
          {site.learningJourney.map((step, i) => (
            <RevealOnScroll key={step} delay={i * 0.06}>
              <li className="relative pl-11">
                <span className="absolute left-0 top-1 w-8 h-8 rounded-full glass flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-electric to-cyan shadow-glow" />
                </span>
                <p className="font-display font-semibold text-white text-base md:text-lg">
                  {step}
                </p>
              </li>
            </RevealOnScroll>
          ))}
        </ol>
      </div>
    </section>
  );
}
