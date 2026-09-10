"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";
import { site } from "@/data/site";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const initial: FormState = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(values: FormState) {
    const next: Partial<FormState> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.subject.trim()) next.subject = "Please add a subject.";
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    return next;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("loading");
    try {
      // Wire this up to EmailJS, Formspree, or a custom API route.
      // Example (Formspree):
      // await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      setForm(initial);
    } catch {
      setStatus("error");
    }
  }

  const fieldClass = (hasError?: string) =>
    `w-full rounded-lg bg-white/[0.04] border px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus-ring transition-colors ${
      hasError ? "border-red-500/50" : "border-white/10 focus:border-electric/50"
    }`;

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="// Contact"
        title="Let's Build Something Together"
        subtitle="I'm currently open to SDE internship opportunities, collaborative projects, open-source contributions, and suitable development opportunities."
      />

      <div className="mt-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
        <RevealOnScroll className="space-y-4">
          <ContactRow icon={Mail} label="Email" value={site.contact.email} href={`mailto:${site.contact.email}`} />
          <ContactRow icon={Phone} label="Phone" value={site.contact.phone} href={`tel:${site.contact.phone.replace(/\s/g, "")}`} />
          <ContactRow icon={Github} label="GitHub" value="mayanksinha17" href={site.contact.github} external />
          <ContactRow icon={Linkedin} label="LinkedIn" value="mayank-kumar-sinha" href={site.contact.linkedin} external />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="glass rounded-2xl p-6 md:p-8 space-y-5"
            aria-describedby={status === "success" ? "form-success" : undefined}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Name"
                id="name"
                value={form.name}
                error={errors.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                fieldClass={fieldClass}
              />
              <Field
                label="Email"
                id="email"
                type="email"
                value={form.email}
                error={errors.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                fieldClass={fieldClass}
              />
            </div>

            <Field
              label="Subject"
              id="subject"
              value={form.subject}
              error={errors.subject}
              onChange={(v) => setForm((f) => ({ ...f, subject: v }))}
              fieldClass={fieldClass}
            />

            <div>
              <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className={fieldClass(errors.message)}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-electric to-violet text-white text-sm font-semibold shadow-glow hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed transition focus-ring"
            >
              {status === "loading" ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                  />
                  Sending&hellip;
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>

            {status === "success" && (
              <motion.p
                id="form-success"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                className="flex items-center gap-2 text-sm text-emerald-300"
              >
                <CheckCircle2 size={16} /> Message sent — thanks for reaching out, I&rsquo;ll reply soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                className="flex items-center gap-2 text-sm text-red-400"
              >
                <AlertCircle size={16} /> Something went wrong. Please try emailing me directly.
              </motion.p>
            )}
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  error,
  onChange,
  fieldClass,
  type = "text",
}: {
  label: string;
  id: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  fieldClass: (e?: string) => string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium text-slate-300 mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={fieldClass(error)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 glass rounded-xl p-4 hover:border-electric/30 hover:-translate-y-0.5 transition-all focus-ring"
    >
      <span className="p-2.5 rounded-lg bg-gradient-to-br from-electric/20 to-violet/20 border border-white/10">
        <Icon size={17} className="text-cyan" />
      </span>
      <span>
        <span className="block text-[11px] uppercase tracking-wide text-muted">
          {label}
        </span>
        <span className="block text-sm font-medium text-slate-100">
          {value}
        </span>
      </span>
    </a>
  );
}
