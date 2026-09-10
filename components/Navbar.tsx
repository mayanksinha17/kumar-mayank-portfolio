"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { nav, site } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-panel" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        className="section-shell !py-0 flex items-center justify-between h-16 md:h-20"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="font-display font-bold text-lg tracking-tight text-white focus-ring rounded"
        >
          <span className="text-gradient">{site.initials}</span>
          <span className="hidden sm:inline text-slate-300 font-medium">
            {" "}
            / {site.name}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors focus-ring ${
                  active === item.href
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
                {active === item.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-electric to-cyan"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Mayank_resume_Updated.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors focus-ring rounded px-2 py-1"
          >
            <FileDown size={15} /> Resume
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-electric to-violet text-white shadow-glow hover:brightness-110 transition focus-ring"
          >
            Let&rsquo;s Connect
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-slate-200 focus-ring rounded p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass border-t border-border overflow-hidden"
          >
            <ul className="section-shell !py-6 flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-2 py-3 text-base text-slate-200 hover:text-white border-b border-white/5 focus-ring rounded"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-3 flex gap-3">
                <a
                  href="/Mayank_resume_Updated.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-sm font-medium px-4 py-2.5 rounded-lg glass text-slate-200"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 text-center text-sm font-semibold px-4 py-2.5 rounded-lg bg-gradient-to-r from-electric to-violet text-white"
                >
                  Let&rsquo;s Connect
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
