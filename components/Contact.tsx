"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";
import { site } from "@/data/site";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "mailto_fallback" | "error";

const initial: FormState = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);
  const [fallbackUrl, setFallbackUrl] = useState("");

  function copyEmail() {
    navigator.clipboard.writeText(site.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function validate(values: FormState) {
    const next: Partial<FormState> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!values.subject.trim()) next.subject = "Please enter a subject.";
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = "Message must be at least 10 characters long.";
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        setStatus("success");
        setForm(initial);
      } else if (data.fallbackMailto && data.mailtoUrl) {
        setFallbackUrl(data.mailtoUrl);
        setStatus("mailto_fallback");
        // Automatically open the user's default email client with pre-filled content
        window.location.href = data.mailtoUrl;
      } else {
        setStatus("error");
      }
    } catch {
      // In case of network error, construct direct mailto link
      const directMailto = `mailto:${site.contact.email}?subject=${encodeURIComponent(
        `[Portfolio] ${form.subject}`
      )}&body=${encodeURIComponent(
        `Hi Mayank,\n\n${form.message}\n\nFrom: ${form.name} (${form.email})`
      )}`;
      setFallbackUrl(directMailto);
      setStatus("mailto_fallback");
      window.location.href = directMailto;
    }
  }

  const fieldClass = (hasError?: string) =>
    `w-full rounded-lg bg-white/[0.04] border px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus-ring transition-colors ${
      hasError ? "border-red-500/50" : "border-white/10 focus:border-electric/50"
    }`;

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="// Get In Touch"
        title="Let's Build Something Together"
        subtitle="I am actively seeking Software Development Engineer (SDE) internship opportunities and open to collaborative engineering projects."
      />

      <div className="mt-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
        {/* Left Column: Direct Contact Info */}
        <RevealOnScroll className="space-y-4">
          <div className="flex items-center justify-between glass rounded-xl p-4">
            <a
              href={`mailto:${site.contact.email}`}
              className="flex items-center gap-4 hover:text-cyan transition-colors"
            >
              <span className="p-2.5 rounded-lg bg-gradient-to-br from-electric/20 to-violet/20 border border-white/10 text-cyan shrink-0">
                <Mail size={17} />
              </span>
              <div>
                <span className="block text-[11px] uppercase tracking-wide text-muted">
                  Email
                </span>
                <span className="block text-sm font-medium text-slate-100">
                  {site.contact.email}
                </span>
              </div>
            </a>
            <button
              onClick={copyEmail}
              aria-label="Copy email address"
              className="p-2 rounded-lg border border-white/10 hover:border-cyan/40 text-slate-400 hover:text-white transition focus-ring"
            >
              {copied ? (
                <Check size={15} className="text-emerald-400" />
              ) : (
                <Copy size={15} />
              )}
            </button>
          </div>

          <ContactRow
            icon={Phone}
            label="Phone"
            value={site.contact.phone}
            href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
          />

          <ContactRow
            icon={Github}
            label="GitHub"
            value="mayanksinha17"
            href={site.contact.github}
            external
          />

          <ContactRow
            icon={Linkedin}
            label="LinkedIn"
            value="kumar-mayank-7b924a337"
            href={site.contact.linkedin}
            external
          />
        </RevealOnScroll>

        {/* Right Column: Contact Form */}
        <RevealOnScroll delay={0.1}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="glass rounded-2xl p-6 md:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Your Name"
                id="name"
                value={form.name}
                error={errors.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                fieldClass={fieldClass}
              />
              <Field
                label="Your Email"
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
              <label
                htmlFor="message"
                className="block text-xs font-medium text-slate-300 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                className={fieldClass(errors.message)}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                placeholder="Discuss an internship opportunity, project collaboration, or general inquiry..."
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
                    transition={{
                      repeat: Infinity,
                      duration: 0.8,
                      ease: "linear",
                    }}
                    className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                  />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-start gap-2.5 text-xs sm:text-sm text-emerald-300"
              >
                <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                <span>
                  Message sent successfully! Thank you for reaching out; I will
                  reply as soon as possible.
                </span>
              </motion.div>
            )}

            {status === "mailto_fallback" && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                className="p-3.5 rounded-lg bg-cyan/10 border border-cyan/25 flex items-start justify-between gap-3 text-xs sm:text-sm text-cyan"
              >
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                  <span>
                    Your message is prepared in your email client. If it did not
                    open automatically,{" "}
                    <a
                      href={fallbackUrl}
                      className="underline font-semibold hover:text-white"
                    >
                      click here to send via email
                    </a>
                    .
                  </span>
                </div>
                {fallbackUrl && (
                  <a
                    href={fallbackUrl}
                    className="p-1 rounded hover:bg-white/10 shrink-0"
                    aria-label="Open in email client"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/25 flex items-start gap-2.5 text-xs sm:text-sm text-red-400"
              >
                <AlertCircle size={16} className="mt-0.5 shrink-0" />
                <span>
                  Could not send message automatically. Please reach me directly
                  at{" "}
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="underline font-medium text-white"
                  >
                    {site.contact.email}
                  </a>
                  .
                </span>
              </motion.div>
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
      <label
        htmlFor={id}
        className="block text-xs font-medium text-slate-300 mb-1.5"
      >
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
      <span className="p-2.5 rounded-lg bg-gradient-to-br from-electric/20 to-violet/20 border border-white/10 text-cyan shrink-0">
        <Icon size={17} />
      </span>
      <div>
        <span className="block text-[11px] uppercase tracking-wide text-muted">
          {label}
        </span>
        <span className="block text-sm font-medium text-slate-100">
          {value}
        </span>
      </div>
    </a>
  );
}
