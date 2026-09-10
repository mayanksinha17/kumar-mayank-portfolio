import RevealOnScroll from "./RevealOnScroll";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <RevealOnScroll
      className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}
    >
      <div
        className={`flex items-center gap-3 mb-4 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-electric to-cyan" />
        <span className="font-mono text-xs tracking-[0.2em] text-cyan uppercase">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </RevealOnScroll>
  );
}
