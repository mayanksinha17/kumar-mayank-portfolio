"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowDown, FileDown, Eye } from "lucide-react";
import NodeField from "./NodeField";
import { site } from "@/data/site";

function useTypingRotation(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 40 : 75;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export default function Hero() {
  const typed = useTypingRotation(site.typingRoles);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-grid-fade" />
      <NodeField />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink" />

      <div className="section-shell relative z-10 grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full glass text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            {site.status}
          </div>

          <p className="font-mono text-cyan text-sm mb-3 tracking-wide">
            Hello, I&rsquo;m
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
            {site.name}
          </h1>

          <p className="mt-4 text-lg md:text-xl font-medium text-gradient font-display">
            {site.role}
          </p>

          <div className="mt-3 h-8 font-mono text-base md:text-lg text-slate-300">
            <span>{typed}</span>
            <span className="inline-block w-[2px] h-5 bg-cyan ml-1 align-middle animate-blink" />
          </div>

          <p className="mt-6 max-w-xl text-muted leading-relaxed">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-electric to-violet text-white text-sm font-semibold shadow-glow hover:brightness-110 transition focus-ring"
            >
              View My Projects
            </a>
            <a
              href="/Mayank_resume_Updated.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl glass text-sm font-semibold text-slate-100 hover:border-electric/40 transition focus-ring"
            >
              <Eye size={16} /> View Resume
            </a>
            <a
              href="/Mayank_resume_Updated.pdf"
              download
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border text-sm font-semibold text-slate-300 hover:text-white hover:border-electric/40 transition focus-ring"
            >
              <FileDown size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl border border-border text-sm font-semibold text-slate-300 hover:text-white hover:border-electric/40 transition focus-ring"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4">
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
                className="p-2.5 rounded-lg glass text-slate-300 hover:text-cyan hover:-translate-y-0.5 transition-all focus-ring"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-electric via-violet to-cyan blur-2xl opacity-40" />
            <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-tr from-electric via-violet to-cyan">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Kumar Mayank - Data Science Student and Full-Stack Developer"
                  width={320}
                  height={320}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-3 -right-2 glass rounded-xl px-3 py-2 text-xs font-mono text-slate-200 shadow-panel animate-float-slow">
              Full Stack Dev
            </div>
            <div className="absolute -top-2 -left-4 glass rounded-xl px-3 py-2 text-xs font-mono text-slate-200 shadow-panel animate-float">
              Data Science
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyan transition-colors focus-ring rounded-full"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="block"
        >
          <ArrowDown size={22} />
        </motion.span>
      </motion.a>
    </section>
  );
}
