import { Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";
import { site } from "@/data/site";

export default function OpenToAndCertifications() {
  return (
    <>
      <section className="section-shell">
        <SectionHeading eyebrow="// Opportunities" title="What I'm Open To" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {site.openTo.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 0.05}>
              <div className="glass rounded-2xl p-6 h-full hover:border-electric/30 hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-display font-semibold text-white text-sm">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="section-shell !pt-0">
        <RevealOnScroll>
          <div className="glass rounded-2xl p-8 text-center max-w-xl mx-auto">
            <Award className="mx-auto text-violet mb-3" size={26} />
            <h3 className="font-display text-lg font-semibold text-white">
              Certifications — Coming Soon
            </h3>
            <p className="mt-2 text-sm text-muted">
              This section updates the moment I complete something worth
              listing.
            </p>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
