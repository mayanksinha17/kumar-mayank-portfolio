import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070e",
        surface: "#0a0e1a",
        panel: "#0d1220",
        border: "rgba(148, 163, 184, 0.12)",
        electric: "#3b82f6",
        royal: "#4f46e5",
        violet: "#8b5cf6",
        cyan: "#22d3ee",
        muted: "#8b93a7",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.12), transparent 60%)",
        "aurora":
          "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #22d3ee 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(59, 130, 246, 0.45)",
        "glow-violet": "0 0 40px -10px rgba(139, 92, 246, 0.45)",
        panel: "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
