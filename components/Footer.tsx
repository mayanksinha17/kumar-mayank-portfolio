import { Github, Linkedin, Mail } from "lucide-react";
import { nav, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="section-shell !py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-white">{site.name}</p>
          <p className="text-xs text-muted mt-1">
            Data Science Student • Full-Stack Developer
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xs text-slate-400 hover:text-white transition-colors focus-ring rounded"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: site.contact.github, label: "GitHub" },
            { icon: Linkedin, href: site.contact.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${site.contact.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="p-2 rounded-lg glass text-slate-400 hover:text-cyan transition-colors focus-ring"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
      <p className="text-center text-[11px] text-slate-600 pb-8">
        © 2026 Kumar Mayank. All rights reserved.
      </p>
    </footer>
  );
}
