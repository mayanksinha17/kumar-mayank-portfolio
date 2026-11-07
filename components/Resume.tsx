import { FileDown, Eye } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { site } from "@/data/site";

export default function Resume() {
  const resumeHref = site.resumeUrl || "/resume.pdf";

  return (
    <section id="resume" className="section-shell !pt-0">
      <RevealOnScroll>
        <div className="relative overflow-hidden rounded-3xl glass p-10 md:p-14 text-center">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-aurora opacity-20 blur-3xl rounded-full" />
          <div className="relative z-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-white">
              Want to review my complete qualifications?
            </h2>
            <p className="mt-3 text-muted max-w-md mx-auto text-sm sm:text-base leading-relaxed">
              Explore my academic background, technical skills, engineering projects, and open-source contributions in one document.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-electric to-violet text-white text-sm font-semibold shadow-glow hover:brightness-110 transition focus-ring"
              >
                <Eye size={17} /> View Resume
              </a>
              <a
                href={resumeHref}
                download="Kumar_Mayank_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-sm font-semibold text-slate-100 hover:border-electric/40 transition focus-ring"
              >
                <FileDown size={17} /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
